// Function to play the video when the page loads
function playVideo() {
    const video = document.querySelector(".video-section video");
    video.play();
}

// Function to load and display log files
function loadLogFiles() {
    const logFilesSection = document.querySelector(".log-files-section");
    const logData = ["Log 1", "Log 2", "Log 3"]; // Example log data

    logData.forEach(log => {
        const logElement = document.createElement("div");
        logElement.textContent = log;
        logFilesSection.appendChild(logElement);
    });
}

// Function to display GPS data and terrain height
function displayFooterData() {
    const footer = document.querySelector("footer");
    const gpsData = "GPS Data: Your GPS Data"; // Replace with actual GPS data
    const terrainHeight = "Terrain Height: Your Terrain Height"; // Replace with actual terrain height

    const gpsElement = document.createElement("p");
    gpsElement.textContent = gpsData;

    const terrainElement = document.createElement("p");
    terrainElement.textContent = terrainHeight;

    footer.appendChild(gpsElement);
    footer.appendChild(terrainElement);
}

// Call the functions when the page loads
window.addEventListener("load", () => {
    playVideo();
    loadLogFiles();
    displayFooterData();
});
