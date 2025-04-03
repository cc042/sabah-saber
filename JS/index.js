addEventListener("DOMContentLoaded", () => { document.querySelector(".Load").close() })
document.addEventListener('contextmenu', (e) => { e.preventDefault() });
document.addEventListener("dblclick", e => { e.preventDefault(); return false })
document.onkeydown = function (e) { if (event.keyCode == 123) return false; if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) return false; if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) return false; if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) return false; if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) return false; if (e.ctrlKey && e.keyCode == 'S'.charCodeAt(0)) return false; if (e.ctrlKey && e.keyCode == 'A'.charCodeAt(0)) return false; if (e.ctrlKey && e.key == "C".charCodeAt(0)) return false; if (e.ctrlKey && e.key == "X".charCodeAt(0)) return false; if (e.key == "Escape") return false; }

function validateArabicInput(event) {
    const inputValue = event.target.value;
    const arabicRegex = /^[\u0600-\u06FF\s]/; // Regex for Arabic letters and spaces

    if (!arabicRegex.test(inputValue)) {
        event.target.setCustomValidity('يُسمح فقط بالأحرف العربية والمسافات.'); // Set custom validation message
    } else {
        event.target.setCustomValidity(''); // Clear custom validation message
    }
}

// alert Messages
const alert1 = document.querySelector(".alert1")
const alertText = document.querySelector(".alert1text")
const alertHeaderText = document.querySelector(".alertheader")

function findoff(msg = String, header = String) {
    alert1.showModal();
    alertText.innerHTML = `${msg}`
    alertHeaderText.innerHTML = `${header}`
}

// classes
class ThemeSwitch {
    constructor() {
        this.switcher = document.querySelectorAll(".darkmode")
        this.darkmode = localStorage.getItem("darked")

        this.switcher.forEach((element) => {
            element.addEventListener("click", () => {
                this.darkmode = localStorage.getItem("darked")
                this.darkmode !== "true" ? this.DarkModeApply() : this.DarkModeDelete()
            })
        })
    }

    DarkModeApply() {
        localStorage.setItem("darked", "true")
        document.body.classList.add("dark-mode")
    }

    DarkModeDelete() {
        localStorage.setItem("darked", "false")
        document.body.classList.remove("dark-mode")
    }
}

class ResponsiveSideBar {
    constructor() {
        this.screen_condition = document.querySelector(".screen_condition")
        this.sidebar = document.querySelector(".sidebar")
    }

    closeSideBar() { this.sidebar.setAttribute("aria-opened", false) }

    Responsivesidebar() {
        if (innerWidth <= 520) {
            this.screen_condition.addEventListener("click", () => { this.sidebar.setAttribute("aria-opened", true) })
        }
        else { this.closeSideBar() }
    }
}

// classes variables and functions
const SwitchTheme = new ThemeSwitch()
const SideBar = new ResponsiveSideBar()

SideBar.Responsivesidebar()
if (SwitchTheme.darkmode === "true") SwitchTheme.DarkModeApply()
else { SwitchTheme.DarkModeDelete() }

window.addEventListener("resize", () => { SideBar.Responsivesidebar() })