function createHomePage() {
    const para2 = document.createElement("p");
    para2.textContent="Ramen-ya";
    const para1 = document.createElement("p");
    para1.textContent= "Bringing traditional Ramen from Japan to your doorstep"

    const homePageText = document.createElement("div");
    homePageText.setAttribute("id","homePageText");
    homePageText.appendChild(para1);
    homePageText.appendChild(para2);

    const homePageImage = document.createElement("div");
    homePageImage.setAttribute("id","homePageImage");

    const homePage = document.createElement("div");
    homePage.setAttribute("id","homePage");
    homePage.appendChild(homePageImage);
    homePage.appendChild(homePageText);

    return homePage;


}

export default createHomePage;