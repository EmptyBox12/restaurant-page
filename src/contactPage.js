
function createContactPage() {
    

    const contactMap = document.createElement("div");
    contactMap.setAttribute("id", "contactMap");
    

    const para1 = document.createElement("p");
    para1.textContent="Open everyday from 9am to 11pm";
    const para2 = document.createElement("p");
    para2.textContent="We have taken all the precatuions against Covid-19";
    const para3 = document.createElement("p");
    para3.textContent="Adress: Kuştepe, Mecidiyeköy Yolu Cd. No:12 D:No:12, 34387 Şişli/İstanbul";
    const para4 = document.createElement("p");
    para4.textContent="Phone Number: 05XX XXX XXX";
    
    const contactInfo = document.createElement("div");
    contactInfo.setAttribute("id","contactInfo");
    contactInfo.appendChild(para1);
    contactInfo.appendChild(para2);
    contactInfo.appendChild(para3);
    contactInfo.appendChild(para4);

    const contactPage = document.createElement("div");
    contactPage.setAttribute("id","contactPage");
    contactPage.appendChild(contactInfo);
    contactPage.appendChild(contactMap);

    return contactPage;
}
export default createContactPage;