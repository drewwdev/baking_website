"use strict";
document.addEventListener("DOMContentLoaded", () => {
    const events = [
    // {
    //   title: "Spring Farmers Market",
    //   date: "March 10, 2025",
    //   location: "Downtown Square",
    //   link: "https://example.com/event1",
    // },
    ];
    const eventsContainer = document.getElementById("events");
    if (!eventsContainer) {
        console.error("Events container not found");
        return;
    }
    const defaultEventMessage = eventsContainer.querySelector("p");
    if (events.length === 0) {
        if (defaultEventMessage) {
            defaultEventMessage.textContent = "Check back here for my next event!";
        }
        else {
            const noEventsMessage = document.createElement("p");
            noEventsMessage.textContent = "Check back here for my next event!";
            noEventsMessage.className = "no-events-message";
            eventsContainer.appendChild(noEventsMessage);
        }
        return;
    }
    events.forEach((event) => {
        const eventItem = document.createElement("div");
        eventItem.className = "event-item";
        eventItem.innerHTML = `
        <h3>${event.title}</h3>
        <p><strong>Date:</strong> ${event.date}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <a href="${event.link}" target="_blank">More Info</a>
      `;
        eventsContainer.appendChild(eventItem);
    });
});
