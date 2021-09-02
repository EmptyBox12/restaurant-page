const content = document.querySelector("#content");

function createHead(){
    let homeLi = document.createElement("li");
    let menuLi = document.createElement("li");
    let contactLi = document.createElement("li");

    let homeButton = document.createElement("button");
    homeButton.classList.add("navButton");
    homeButton.textContent="Home";
    homeButton.value="home";
    homeLi.appendChild(homeButton);
    let contactButton = document.createElement("button");
    contactButton.classList.add("navButton");
    contactButton.textContent="Contact";
    contactButton.value="contact";
    contactLi.appendChild(contactButton);
    let menuButton = document.createElement("button");
    menuButton.classList.add("navButton");
    menuButton.textContent="Menu";
    menuButton.value="menu";
    menuLi.appendChild(menuButton);

    let list = document.createElement("ul");
    list.appendChild(contactLi);
    list.appendChild(menuLi);
    list.appendChild(homeLi);

    let navBar = document.createElement("div");
    navBar.setAttribute("id","navBar");
    navBar.appendChild(list);

    let para = document.createElement("p");
    para.textContent="Ramen-ya";
    let banner = document.createElement("div");
    banner.classList.add("banner");
    banner.appendChild(para);

    let head = document.createElement("div");
    head.setAttribute("id","head");
    head.appendChild(banner);
    head.appendChild(navBar);
    return head;
}
function render(){
    content.appendChild(createHead());
    let buttons = document.querySelectorAll(".navButton");
    buttons.forEach((item)=>{
        item.addEventListener("click", ()=>{
            console.log(item.value);
        });
    });
    
}
render();

