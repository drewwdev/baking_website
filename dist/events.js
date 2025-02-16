document.addEventListener("DOMContentLoaded", function () {
    var events = [
    // {
    //   title: "Spring Farmers Market",
    //   date: "March 10, 2025",
    //   location: "Downtown Square",
    //   link: "https://example.com/event1",
    // },
    ];
    var eventsContainer = document.getElementById("events");
    if (!eventsContainer) {
        console.error("Events container not found");
        return;
    }
    var defaultEventMessage = eventsContainer.querySelector("p");
    if (events.length === 0) {
        if (defaultEventMessage) {
            defaultEventMessage.textContent = "Check back here for my next event!";
        }
        else {
            var noEventsMessage = document.createElement("p");
            noEventsMessage.textContent = "Check back here for my next event!";
            noEventsMessage.className = "no-events-message";
            eventsContainer.appendChild(noEventsMessage);
        }
        return;
    }
    events.forEach(function (event) {
        var eventItem = document.createElement("div");
        eventItem.className = "event-item";
        eventItem.innerHTML = "\n        <h3>".concat(event.title, "</h3>\n        <p><strong>Date:</strong> ").concat(event.date, "</p>\n        <p><strong>Location:</strong> ").concat(event.location, "</p>\n        <a href=\"").concat(event.link, "\" target=\"_blank\">More Info</a>\n      ");
        eventsContainer.appendChild(eventItem);
    });
});
