(()=>{"use strict";const e=function(){const e=document.createElement("p");e.textContent="Ramen-ya";const t=document.createElement("p");t.textContent="Bringing traditional Ramen from Japan to your doorstep";const n=document.createElement("div");n.setAttribute("id","homePageText"),n.appendChild(t),n.appendChild(e);const d=document.createElement("div");d.setAttribute("id","homePageImage");const a=document.createElement("div");return a.setAttribute("id","homePage"),a.appendChild(d),a.appendChild(n),a},t=document.querySelector("#content");function n(e){t.appendChild(e)}function d(){let e=t.children[1];t.removeChild(e)}!function(){n(function(){let e=document.createElement("li"),t=document.createElement("li"),n=document.createElement("li"),d=document.createElement("button");d.classList.add("navButton"),d.textContent="Home",d.value="home",e.appendChild(d);let a=document.createElement("button");a.classList.add("navButton"),a.textContent="Contact",a.value="contact",n.appendChild(a);let o=document.createElement("button");o.classList.add("navButton"),o.textContent="Menu",o.value="menu",t.appendChild(o);let c=document.createElement("ul");c.appendChild(n),c.appendChild(t),c.appendChild(e);let l=document.createElement("div");l.setAttribute("id","navBar"),l.appendChild(c);let i=document.createElement("p");i.textContent="Ramen-ya";let u=document.createElement("div");u.classList.add("banner"),u.appendChild(i);let m=document.createElement("div");return m.setAttribute("id","head"),m.appendChild(u),m.appendChild(l),m}()),n(e());let a=document.querySelectorAll(".navButton");console.log(t.children),a.forEach((t=>{t.addEventListener("click",(()=>{"home"==t.value?(d(),n(e())):"menu"==t.value?(d(),n(function(){const e=document.createElement("div");return e.setAttribute("id","menuPage"),e}())):"contact"==t.value&&(d(),n(function(){const e=document.createElement("div");e.setAttribute("id","contactMap");const t=document.createElement("p");t.textContent="Open everyday from 9am to 11pm";const n=document.createElement("p");n.textContent="We have taken all the precatuions against Covid-19";const d=document.createElement("p");d.textContent="Adress: Kuştepe, Mecidiyeköy Yolu Cd. No:12 D:No:12, 34387 Şişli/İstanbul";const a=document.createElement("p");a.textContent="Phone Number: 05XX XXX XXX";const o=document.createElement("div");o.setAttribute("id","contactInfo"),o.appendChild(t),o.appendChild(n),o.appendChild(d),o.appendChild(a);const c=document.createElement("div");return c.setAttribute("id","contactPage"),c.appendChild(o),c.appendChild(e),c}()))}))}))}()})();