import Cookies from "js-cookie";
import { serverUrl } from "./Global";
const bcrypt = require("bcryptjs");
const salt = bcrypt.genSaltSync(10);

async function generateGuestCookieValues() {
    let autoNumber = Math.floor(
        Math.pow(10, 9 - 1) + Math.random() * 50 * Math.pow(10, 9 - 1)
    );
    return Promise.resolve(bcrypt.hashSync(autoNumber.toString(), salt));
}

function setCookie(name, value, expires) {
    Cookies.set(name, value, { expires: expires });
}

function getCookie(name) {
    return Cookies.get(name);
}

function removeCookie(name, path) {
    Cookies.remove(name, { path: "" });
}

async function fetchProductDataCategory(category) {
    let response = await fetch(`${serverUrl}/fetch/${category}`);
    response = await response.json();
    return Promise.resolve(response);
}

async function fetchProductSizes(category) {
    let response = await fetch(`${serverUrl}/filter/${category}`);
    response = await response.json();
    return Promise.resolve(response);
}

function onProductCardClick(id) {
    window.location = "/productdetails/" + id;
}

export {
    setCookie,
    getCookie,
    removeCookie,
    fetchProductDataCategory,
    onProductCardClick,
    fetchProductSizes,
    generateGuestCookieValues,
};
