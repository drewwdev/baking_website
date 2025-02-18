// @ts-ignore
import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "rjglyxa8",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("featured-creations");
  if (!container) return;

  try {
    const creations: {
      title: string;
      image: { asset: { url: string } };
      description: string;
    }[] = await client.fetch(
      '*[_type == "featuredCreations"] | order(_createdAt desc) [0..2]{title, image{asset->{url}}, description}'
    );

    container.innerHTML = "";

    if (creations.length === 0) {
      container.innerHTML =
        "<p>No featured creations yet. Check back soon!</p>";
      return;
    }

    creations.forEach((creation) => {
      const item = document.createElement("div");
      item.className = "creation-item";
      item.innerHTML = `
        <h3>${creation.title}</h3>
        <img src="${creation.image.asset.url}" alt="${creation.title}">
        <p>${creation.description}</p>
      `;
      container.appendChild(item);
    });
  } catch (error) {
    console.error("Error fetching featured creations:", error);
    container.innerHTML =
      "<p>View my creations on my Instagram! <a href='https://www.instagram.com/moodyvirgobaker/' target='_blank' rel='noopener noreferrer'>@moodyvirgobaker</a></p>";
  }
});
