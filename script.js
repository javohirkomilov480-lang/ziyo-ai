
const input = document.getElementById("userInput");
const messages = document.getElementById("messages");
const welcome = document.getElementById("welcome");

function sendMessage() {
    const text = input.value.trim();

    if (!text) return;

    welcome.style.display = "none";

    // Foydalanuvchi xabari
    const userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.textContent = text;

    messages.appendChild(userMessage);

    input.value = "";

    // Hozircha demo javob
    const aiMessage = document.createElement("div");
    aiMessage.className = "message ai-message";
    aiMessage.textContent =
        "✦ ZIYO AI: Xabaringiz qabul qilindi! Haqiqiy AI ulanishi keyingi bosqichda amalga oshiriladi.";

    messages.appendChild(aiMessage);

    messages.scrollTop = messages.scrollHeight;
}

function newChat() {
    messages.innerHTML = "";
    input.value = "";
    welcome.style.display = "block";
}

input.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});
