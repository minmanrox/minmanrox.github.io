function toggleTheme() {
    const stylesheet = document.getElementById("main_stylesheet");
    const filename = stylesheet.getAttribute("href");

    let newFilename = "";
    if (filename == "style.css") newFilename = "style2.css";
    else newFilename = "style.css";

    stylesheet.setAttribute("href", newFilename);
    localStorage.setItem("stylesheet", newFilename);
    console.log("Saved stylesheet: " + newFilename);
}

window.onload = function() {
    const stylesheet = localStorage.getItem("stylesheet");
    const element = document.getElementById("main_stylesheet");
    console.log("Loaded stylesheet: " + stylesheet);
    
    if (stylesheet) element.setAttribute("href", stylesheet);
}

document.addEventListener("DOMContentLoaded", function() {
    const externalLinks = document.querySelectorAll('.external_link');
    externalLinks.forEach(link => {
        link.setAttribute('target', '_blank');
    });
});