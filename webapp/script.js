let captchaText = "";

function generateCaptcha() {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    captchaText = "";
    for (let i = 0; i < 6; i++) {
        captchaText += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const canvas = document.getElementById("captchaCanvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.font = "30px Arial";
    ctx.fillText(captchaText, 30, 35);
}

function validateCaptcha() {
    const input = document.getElementById("captchaInput").value;
    const message = document.getElementById("captchaMessage");
    if (input === captchaText) {
        message.textContent = "✅ Verified!";
        message.style.color = "green";
    } else {
        message.textContent = "❌ Incorrect, try again!";
        message.style.color = "red";
    }
}

window.onload = generateCaptcha;
