document.addEventListener("DOMContentLoaded", () => {
    function updateUTCTime() {
        const now = new Date();
        const utcTime = now.toUTCString().split(" ")[4]; // Extract time only (HH:MM:SS)
        document.getElementById("utc-time").textContent = utcTime;
    }

    updateUTCTime();
    setInterval(updateUTCTime, 1000); // Update every second
});
