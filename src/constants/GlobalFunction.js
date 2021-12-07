import Cookies from "js-cookie";
import { serverUrl } from "./Global";
function setCookie(name, value, expires) {
    Cookies.set(name, value, { expires: expires });
}

function getCookie(name) {
    return Cookies.get(name);
}

function removeCookie(name, path) {
    Cookies.remove(name, { path: '' })
}

async function fetchProductDataCategory(category) {
    let response = await fetch(`${serverUrl}/fetch/${category}`);
    response = await response.json();
    return Promise.resolve(response)
}

function onProductCardClick(id) {
    window.location = "/productdetails/" + id;
}

export { setCookie, getCookie, removeCookie, fetchProductDataCategory, onProductCardClick };
