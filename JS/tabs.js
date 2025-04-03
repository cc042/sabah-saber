const tabsElement = document.querySelectorAll(".tabs")
const details = document.querySelector("details")
const sections = document.querySelector("section")

class MakeTab {
    constructor() {
        this.tabs = ["#content1", "#content2", "#content3", "#content4", "#content5", "#content6", "#content7", "#content8"]
        this.tabsName = ["1", "2", "3", "4", "5", "6", "7", "8"]
    }

    makeTabs() {
        tabsElement.forEach(tabElement => {
            for (let i = 0; i < this.tabs.length; i++) {
                tabElement.innerHTML +=
                    `
                    <li>
                        <button onclick='location.href="${this.tabs[i]}"' class="tab-label">${this.tabsName[i]}</button>
                    </li>
                `
            }
        })

        return this
    }

    checkOpened() {
        this.tabs.forEach(tab => {
            if (location.hash.includes(tab)) {
                document.querySelector(tab).classList.add("active")
            }
            else {
                document.querySelector(tab).classList.remove("active")
            }
        })
    }
}

const makeTab = new MakeTab()
makeTab.makeTabs()

document.querySelectorAll(".tab-label").forEach(label => {
    label.addEventListener("click", () => {
        details.removeAttribute("open")
        makeTab.checkOpened()
    })
})  