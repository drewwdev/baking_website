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
import { createClient } from "https://esm.sh/@sanity/client";
const client = createClient({
    projectId: "rjglyxa8",
    dataset: "production",
    apiVersion: "2023-01-01",
    useCdn: false,
});
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const container = document.getElementById("events");
    if (!container)
        return;
    try {
        const events = yield client.fetch('*[_type == "event"] | order(date asc) [0..4]{title, date, location, link}');
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
        <p><strong>Date:</strong> ${new Date(event.date).toLocaleDateString()}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        ${event.link
                ? `<a href="${event.link}" target="_blank">More Info</a>`
                : ""}
      `;
            container.appendChild(item);
        });
    }
    catch (error) {
        console.error("Error fetching events:", error);
        container.innerHTML =
            "<p>Failed to load events. Please try again later.</p>";
    }
}));
