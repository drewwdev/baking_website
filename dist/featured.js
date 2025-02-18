var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// @ts-ignore
import { createClient } from "@sanity/client";
const client = createClient({
    projectId: "rjglyxa8",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: true,
});
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const container = document.getElementById("featured-creations");
    if (!container)
        return;
    try {
        const creations = yield client.fetch('*[_type == "featuredCreations"] | order(_createdAt desc) [0..2]{title, image{asset->{url}}, description}');
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
    }
    catch (error) {
        console.error("Error fetching featured creations:", error);
        container.innerHTML =
            "<p>View my creations on my Instagram! <a href='https://www.instagram.com/moodyvirgobaker/' target='_blank' rel='noopener noreferrer'>@moodyvirgobaker</a></p>";
    }
}));
