import Cookies from "js-cookie";
function setCookie(name, value, expires) {
    Cookies.set(name, value, { expires: expires });
}

function getCookie(name) {
    return Cookies.get(name);
}

export { setCookie, getCookie };
