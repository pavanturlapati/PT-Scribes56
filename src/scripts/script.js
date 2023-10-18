// JavaScript for handling tab switching
function openTab(tabName) {
    const tabs = document.getElementsByClassName("tab");
    for (const tab of tabs) {
        tab.style.display = "none";
    }

    document.getElementById(tabName).style.display = "block";
}
