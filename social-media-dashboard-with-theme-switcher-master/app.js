(function socialMediaDashboard() {
  let darkMode = localStorage.getItem("darkMode");
  if (darkMode === "enabled") {
    document.body.classList.add("dark-mode");
  }

  const enableDarkMode = () => {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  };

  const disableDarkMode = () => {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", null);
  };

  const toggleSwitch = document.querySelector(".switch");

  toggleSwitch.addEventListener("click", function (e) {
    e.preventDefault();
    darkMode = localStorage.getItem("darkMode");

    console.log("GOT IN EHRE ", { darkMode });
    if (darkMode !== "enabled") {
      enableDarkMode();
    } else {
      disableDarkMode();
    }
  });
})();
