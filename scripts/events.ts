// @ts-ignore
import sanityClient from "@sanity/client";
const client = sanityClient({
  projectId: "rjglyxa8",
  dataset: "production",
  apiVersion: "2023-01-01",
  useCdn: true,
});

document.addEventListener("DOMContentLoaded", async () => {
  const container = document.getElementById("events");
  if (!container) return;

  try {
    const events: {
      title: string;
      date: string;
      location: string;
      link?: string;
    }[] = await client.fetch(
      '*[_type == "event"] | order(date asc) [0..4]{title, date, location, link}'
    );

    container.innerHTML = "";

    if (events.length === 0) {
      container.innerHTML = "<p>Check back here for my next event!</p>";
      return;
    }

    events.forEach((event) => {
      const item = document.createElement("div");
      item.className = "event-item";
      item.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${new Date(
          event.date
        ).toLocaleDateString()}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        ${
          event.link
            ? `<a href="${event.link}" target="_blank">More Info</a>`
            : ""
        }
      `;
      container.appendChild(item);
    });
  } catch (error) {
    console.error("Error fetching events:", error);
    container.innerHTML =
      "<p>Failed to load events. Please try again later.</p>";
  }
});
