/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contactPage.js":
/*!****************************!*\
  !*** ./src/contactPage.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _location_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.png */ "./src/location.png");


function createContactPage() {
    const locationImg = new Image();
    locationImg.src = _location_png__WEBPACK_IMPORTED_MODULE_0__;

    const contactMap = document.createElement("div");
    contactMap.setAttribute("id", "contactMap");
    contactMap.appendChild(locationImg);

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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createContactPage);

/***/ }),

/***/ "./src/homePage.js":
/*!*************************!*\
  !*** ./src/homePage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomePage);

/***/ }),

/***/ "./src/menuPage.js":
/*!*************************!*\
  !*** ./src/menuPage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function createMenuPage() {
    const menuPage = document.createElement("div");
    menuPage.setAttribute("id", "menuPage");
    return menuPage;
    
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createMenuPage);

/***/ }),

/***/ "./src/location.png":
/*!**************************!*\
  !*** ./src/location.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1588352fa614d78236b3.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homePage */ "./src/homePage.js");
/* harmony import */ var _menuPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuPage */ "./src/menuPage.js");
/* harmony import */ var _contactPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactPage */ "./src/contactPage.js");
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
function start(){
    render(createHead());
    render((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.default)());  
    let buttons = document.querySelectorAll(".navButton");
    buttons.forEach((item)=>{
        item.addEventListener("click", ()=>{
            if(item.value=="home"){
                clear();
                render((0,_homePage__WEBPACK_IMPORTED_MODULE_0__.default)());
            } else if(item.value=="menu"){
                clear();
                render((0,_menuPage__WEBPACK_IMPORTED_MODULE_1__.default)());
            } else if(item.value=="contact"){
                clear();
                render((0,_contactPage__WEBPACK_IMPORTED_MODULE_2__.default)());
            }
        });
    });
    
}
function render(element){
    content.appendChild(element);

}
function clear(){
    let removal = content.children[3];
    content.removeChild(removal);
}

start();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBc0M7QUFDdEM7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDBDQUFRO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsaUJBQWlCOzs7Ozs7Ozs7Ozs7OztBQ2pDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7QUN4QjdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsY0FBYzs7Ozs7Ozs7Ozs7Ozs7OztVQ1A3QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ3dDO0FBQ0E7QUFDTTtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLGtEQUFjO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsa0RBQWM7QUFDckMsY0FBYztBQUNkO0FBQ0EsdUJBQXVCLGtEQUFjO0FBQ3JDLGNBQWM7QUFDZDtBQUNBLHVCQUF1QixxREFBaUI7QUFDeEM7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0UGFnZS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZVBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnVQYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvY2F0aW9uIGZyb20gXCIuL2xvY2F0aW9uLnBuZ1wiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlQ29udGFjdFBhZ2UoKSB7XHJcbiAgICBjb25zdCBsb2NhdGlvbkltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgbG9jYXRpb25JbWcuc3JjID0gTG9jYXRpb247XHJcblxyXG4gICAgY29uc3QgY29udGFjdE1hcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBjb250YWN0TWFwLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiY29udGFjdE1hcFwiKTtcclxuICAgIGNvbnRhY3RNYXAuYXBwZW5kQ2hpbGQobG9jYXRpb25JbWcpO1xyXG5cclxuICAgIGNvbnN0IHBhcmExID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhMS50ZXh0Q29udGVudD1cIk9wZW4gZXZlcnlkYXkgZnJvbSA5YW0gdG8gMTFwbVwiO1xyXG4gICAgY29uc3QgcGFyYTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmEyLnRleHRDb250ZW50PVwiV2UgaGF2ZSB0YWtlbiBhbGwgdGhlIHByZWNhdHVpb25zIGFnYWluc3QgQ292aWQtMTlcIjtcclxuICAgIGNvbnN0IHBhcmEzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhMy50ZXh0Q29udGVudD1cIkFkcmVzczogS3XFn3RlcGUsIE1lY2lkaXlla8O2eSBZb2x1IENkLiBObzoxMiBEOk5vOjEyLCAzNDM4NyDFnmnFn2xpL8Swc3RhbmJ1bFwiO1xyXG4gICAgY29uc3QgcGFyYTQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmE0LnRleHRDb250ZW50PVwiUGhvbmUgTnVtYmVyOiAwNVhYIFhYWCBYWFhcIjtcclxuICAgIFxyXG4gICAgY29uc3QgY29udGFjdEluZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgY29udGFjdEluZm8uc2V0QXR0cmlidXRlKFwiaWRcIixcImNvbnRhY3RJbmZvXCIpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGFyYTIpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGFyYTMpO1xyXG4gICAgY29udGFjdEluZm8uYXBwZW5kQ2hpbGQocGFyYTQpO1xyXG5cclxuICAgIGNvbnN0IGNvbnRhY3RQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGNvbnRhY3RQYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsXCJjb250YWN0UGFnZVwiKTtcclxuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RJbmZvKTtcclxuICAgIGNvbnRhY3RQYWdlLmFwcGVuZENoaWxkKGNvbnRhY3RNYXApO1xyXG5cclxuICAgIHJldHVybiBjb250YWN0UGFnZTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVDb250YWN0UGFnZTsiLCJmdW5jdGlvbiBjcmVhdGVIb21lUGFnZSgpIHtcclxuICAgIGNvbnN0IHBhcmEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XHJcbiAgICBwYXJhMi50ZXh0Q29udGVudD1cIlJhbWVuLXlhXCI7XHJcbiAgICBjb25zdCBwYXJhMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG4gICAgcGFyYTEudGV4dENvbnRlbnQ9IFwiQnJpbmdpbmcgdHJhZGl0aW9uYWwgUmFtZW4gZnJvbSBKYXBhbiB0byB5b3VyIGRvb3JzdGVwXCJcclxuXHJcbiAgICBjb25zdCBob21lUGFnZVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG9tZVBhZ2VUZXh0LnNldEF0dHJpYnV0ZShcImlkXCIsXCJob21lUGFnZVRleHRcIik7XHJcbiAgICBob21lUGFnZVRleHQuYXBwZW5kQ2hpbGQocGFyYTEpO1xyXG4gICAgaG9tZVBhZ2VUZXh0LmFwcGVuZENoaWxkKHBhcmEyKTtcclxuXHJcbiAgICBjb25zdCBob21lUGFnZUltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIGhvbWVQYWdlSW1hZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcImhvbWVQYWdlSW1hZ2VcIik7XHJcblxyXG4gICAgY29uc3QgaG9tZVBhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgaG9tZVBhZ2Uuc2V0QXR0cmlidXRlKFwiaWRcIixcImhvbWVQYWdlXCIpO1xyXG4gICAgaG9tZVBhZ2UuYXBwZW5kQ2hpbGQoaG9tZVBhZ2VJbWFnZSk7XHJcbiAgICBob21lUGFnZS5hcHBlbmRDaGlsZChob21lUGFnZVRleHQpO1xyXG5cclxuICAgIHJldHVybiBob21lUGFnZTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVIb21lUGFnZTsiLCJmdW5jdGlvbiBjcmVhdGVNZW51UGFnZSgpIHtcclxuICAgIGNvbnN0IG1lbnVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG1lbnVQYWdlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWVudVBhZ2VcIik7XHJcbiAgICByZXR1cm4gbWVudVBhZ2U7XHJcbiAgICBcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlTWVudVBhZ2U7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY29udGVudFwiKTtcclxuXHJcbmltcG9ydCBjcmVhdGVIb21lUGFnZSBmcm9tIFwiLi9ob21lUGFnZVwiO1xyXG5pbXBvcnQgY3JlYXRlTWVudVBhZ2UgZnJvbSBcIi4vbWVudVBhZ2VcIjtcclxuaW1wb3J0IGNyZWF0ZUNvbnRhY3RQYWdlIGZyb20gXCIuL2NvbnRhY3RQYWdlXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVIZWFkKCl7XHJcbiAgICBsZXQgaG9tZUxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xyXG4gICAgbGV0IG1lbnVMaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcclxuICAgIGxldCBjb250YWN0TGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XHJcblxyXG4gICAgbGV0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgaG9tZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibmF2QnV0dG9uXCIpO1xyXG4gICAgaG9tZUJ1dHRvbi50ZXh0Q29udGVudD1cIkhvbWVcIjtcclxuICAgIGhvbWVCdXR0b24udmFsdWU9XCJob21lXCI7XHJcbiAgICBob21lTGkuYXBwZW5kQ2hpbGQoaG9tZUJ1dHRvbik7XHJcbiAgICBsZXQgY29udGFjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBjb250YWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuYXZCdXR0b25cIik7XHJcbiAgICBjb250YWN0QnV0dG9uLnRleHRDb250ZW50PVwiQ29udGFjdFwiO1xyXG4gICAgY29udGFjdEJ1dHRvbi52YWx1ZT1cImNvbnRhY3RcIjtcclxuICAgIGNvbnRhY3RMaS5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcclxuICAgIGxldCBtZW51QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm5hdkJ1dHRvblwiKTtcclxuICAgIG1lbnVCdXR0b24udGV4dENvbnRlbnQ9XCJNZW51XCI7XHJcbiAgICBtZW51QnV0dG9uLnZhbHVlPVwibWVudVwiO1xyXG4gICAgbWVudUxpLmFwcGVuZENoaWxkKG1lbnVCdXR0b24pO1xyXG5cclxuICAgIGxldCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChjb250YWN0TGkpO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChtZW51TGkpO1xyXG4gICAgbGlzdC5hcHBlbmRDaGlsZChob21lTGkpO1xyXG5cclxuICAgIGxldCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgbmF2QmFyLnNldEF0dHJpYnV0ZShcImlkXCIsXCJuYXZCYXJcIik7XHJcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobGlzdCk7XHJcblxyXG4gICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuICAgIHBhcmEudGV4dENvbnRlbnQ9XCJSYW1lbi15YVwiO1xyXG4gICAgbGV0IGJhbm5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBiYW5uZXIuY2xhc3NMaXN0LmFkZChcImJhbm5lclwiKTtcclxuICAgIGJhbm5lci5hcHBlbmRDaGlsZChwYXJhKTtcclxuXHJcbiAgICBsZXQgaGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBoZWFkLnNldEF0dHJpYnV0ZShcImlkXCIsXCJoZWFkXCIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChiYW5uZXIpO1xyXG4gICAgaGVhZC5hcHBlbmRDaGlsZChuYXZCYXIpO1xyXG4gICAgcmV0dXJuIGhlYWQ7XHJcbn1cclxuZnVuY3Rpb24gc3RhcnQoKXtcclxuICAgIHJlbmRlcihjcmVhdGVIZWFkKCkpO1xyXG4gICAgcmVuZGVyKGNyZWF0ZUhvbWVQYWdlKCkpOyAgXHJcbiAgICBsZXQgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubmF2QnV0dG9uXCIpO1xyXG4gICAgYnV0dG9ucy5mb3JFYWNoKChpdGVtKT0+e1xyXG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgICAgICAgIGlmKGl0ZW0udmFsdWU9PVwiaG9tZVwiKXtcclxuICAgICAgICAgICAgICAgIGNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICByZW5kZXIoY3JlYXRlSG9tZVBhZ2UoKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZihpdGVtLnZhbHVlPT1cIm1lbnVcIil7XHJcbiAgICAgICAgICAgICAgICBjbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyKGNyZWF0ZU1lbnVQYWdlKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYoaXRlbS52YWx1ZT09XCJjb250YWN0XCIpe1xyXG4gICAgICAgICAgICAgICAgY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlcihjcmVhdGVDb250YWN0UGFnZSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxufVxyXG5mdW5jdGlvbiByZW5kZXIoZWxlbWVudCl7XHJcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG5cclxufVxyXG5mdW5jdGlvbiBjbGVhcigpe1xyXG4gICAgbGV0IHJlbW92YWwgPSBjb250ZW50LmNoaWxkcmVuWzNdO1xyXG4gICAgY29udGVudC5yZW1vdmVDaGlsZChyZW1vdmFsKTtcclxufVxyXG5cclxuc3RhcnQoKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9