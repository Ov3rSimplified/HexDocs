// only for Light & darkmode because load order

document.addEventListener('DOMContentLoaded', () => {

    const themeToggle = document.getElementById('theme-toggle');
    
    let backgroundsetting = localStorage.getItem("BgSetting")
    if (!backgroundsetting === null) {
        WindowMode("light");
    } else {
        WindowMode(backgroundsetting)
    }

    function WindowMode(mode) {
        const body = document.body
        const txt = document.getElementById('markdown-text')

        function ContentTextMode(str)
        {
            let col = "white"
            if (str === "dark") {
                col = "black"
            }
            const txtchild = document.getElementById('main_s').childNodes
            const mains = document.getElementById('main_s')
            for (let i = 0; i < txtchild.length; i++) {
                const child = txtchild[i];

                if (child.nodeType === 1) { // Überprüfen, ob das Kind-Element ein Element-Knoten ist
                    let curElement = document.getElementById(child.id) 
                    curElement.style.color = col
                    mains.style.color = col
                }
            }
        }

        if (mode==="dark") {
            body.style.backgroundColor = "white"
            document.getElementById("ldicon").setAttribute("src", "img/brightness.png");
            ContentTextMode("dark")
        }
        else if (mode === "light") {
            body.style.backgroundColor = "#111"
            document.getElementById("ldicon").setAttribute("src", "img/night-mode.png");
            ContentTextMode("light")
        };
    }

    themeToggle.addEventListener('click', () => {
        let mode = localStorage.getItem("BgSetting");
        if (mode === null) { localStorage.setItem("BgSetting", "light")}

        if (mode === "light") {
            WindowMode("dark")
            localStorage.setItem("BgSetting", "dark")
        } else if (mode == "dark" ) {
            WindowMode("light")
            localStorage.setItem("BgSetting", "light")
        }
    });
})