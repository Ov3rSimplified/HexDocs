var BackgroundSetting = BackgroundSetting || 0
const themeToggle = document.getElementById('theme-toggle');
const WikiItems = document.getElementsByClassName("WikiItems");

function WindowMode(mode) {
    const body = document.body

    if (mode==="dark") {
        body.style.backgroundColor = "white"
        document.getElementById("ldicon").setAttribute("src", "img/brightness.png");
    }
    else if (mode === "light") {
        body.style.backgroundColor = "#111"
        document.getElementById("ldicon").setAttribute("src", "img/night-mode.png");
    };
}

themeToggle.addEventListener('click', () => {
    let mode = localStorage.getItem("BgSetting");
    console.log(mode)
    if (mode === null) { localStorage.setItem("BgSetting", "light")}

    if (mode === "light") {
        WindowMode("dark")
        localStorage.setItem("BgSetting", "dark")
    } else if (mode == "dark" ) {
        WindowMode("light")
        localStorage.setItem("BgSetting", "light")
    }



});

WikiItems.addEventListener('click', () => {
});