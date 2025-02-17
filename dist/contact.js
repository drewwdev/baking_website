"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    const responseMessage = document.getElementById("form-response");
    if (form) {
        form.addEventListener("submit", (event) => __awaiter(void 0, void 0, void 0, function* () {
            event.preventDefault();
            const formData = new FormData(form);
            try {
                const response = yield fetch(form.action, {
                    method: "POST",
                    body: formData,
                    headers: { Accept: "application/json" },
                });
                if (response.ok) {
                    responseMessage.textContent =
                        "Thank you! Your message has been sent.";
                    responseMessage.style.color = "green";
                    form.reset();
                }
                else {
                    responseMessage.textContent = "Oops! Something went wrong.";
                    responseMessage.style.color = "red";
                }
            }
            catch (error) {
                responseMessage.textContent =
                    "Error sending message. Please try again.";
                responseMessage.style.color = "red";
            }
        }));
    }
});
