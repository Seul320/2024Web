let underline1 = document.getElementById("underline-1")
let underlineMenus = document.querySelectorAll("nav:first-child a")
console.log(underline-1);

underlineMenus.forEach(menu=>menu.addEventListener("click",(e)=>underlineIndicator(e)))

function underlineIndicator(e){
    underline1.style.left = e.currentTarget.offsetLeft + "px";
    underline1.style.width = e.currentTarget.offsetWidth + "px";
    underline1.style.top = 
        e.currentTarget.offsetTop + e.currentTarget.offsetHight + "px";
}