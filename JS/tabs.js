document.getElementById("tab1").addEventListener("click", () => {
    switchTab("content1", "content2", "content3", "content4", "content5")
})

document.getElementById("tab2").addEventListener("click", () => {
    switchTab("content2", "content1", "content3", "content4", "content5")
})

document.getElementById("tab3").addEventListener("click", () => {
    switchTab("content3", "content1", "content2", "content4", "content5")
})

document.getElementById("tab4").addEventListener("click", () => {
    switchTab("content4", "content1", "content2", "content3", "content5")
})

document.getElementById("tab5").addEventListener("click", () => {
    switchTab("content5", "content1", "content2", "content3", "content4")
})

function switchTab(tabId, removablesection1, removablesection2, removablesection3, removablesection4) {
    document.getElementById(tabId).classList.add("active");
    document.getElementById(removablesection1).classList.remove("active");
    document.getElementById(removablesection2).classList.remove("active");
    document.getElementById(removablesection3).classList.remove("active");
    document.getElementById(removablesection4).classList.remove("active");
}

document.getElementById("tab1").click()