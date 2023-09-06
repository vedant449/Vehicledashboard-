
function generateRandomData() {
    const speed = Math.floor(Math.random() * 100);
    const soc = Math.floor(Math.random() * 100);
    const batteryTemp = Math.floor(Math.random() * 50);
    return { speed, soc, batteryTemp };
}

function updateData() {
    const { speed, soc, batteryTemp } = generateRandomData();
    document.querySelector(".speed-value").textContent = `${speed} Km/h`;
    document.querySelector(".soc-value").textContent = `${soc}%`;
    document.querySelector(".battery-temp-value").textContent = `${batteryTemp}°C`;
}

function addAlert(alertMessage) {
    const alertList = document.querySelector(".alert-list");
    const alertItem = document.createElement("li");
    alertItem.className = "alert-item";
    alertItem.textContent = alertMessage;
    alertList.appendChild(alertItem);
}

document.querySelector(".rsa-button").addEventListener("click", () => {
    addAlert("RSA Call Requested");
});
setInterval(updateData, 1000);

updateData();
