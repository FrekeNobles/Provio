// Element selection
const timeElement = document.querySelector(".user-time");

// Update time function
function updateTime() {
  const currentTime = Date.now();
  timeElement.textContent = currentTime;
}

// Initialize time immediately
updateTime();

// Update every 500ms for accuracy
setInterval(updateTime, 500);