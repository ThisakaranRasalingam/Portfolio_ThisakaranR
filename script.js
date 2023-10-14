function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }
  
  let isNightMode = false; // Track night mode state

function toggleNightMode() {
    isNightMode = !isNightMode;

    // Toggle the night mode class on the body element
    document.body.classList.toggle("night-mode", isNightMode);

    // Toggle the logo based on night mode
    const logo = document.getElementById("logo");
    logo.innerText = isNightMode ? "Thisakaran R. (Night)" : "Thisakaran R. (Day)";
}
