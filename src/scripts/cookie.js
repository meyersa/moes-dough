const getCookieByName = (name) => {
    const cookies = document.cookie;

    let start = cookies.indexOf(name + "=");
    if (start === -1) { return ""; }
    else {
        start = start + (name.length + 1);
        let end = cookies.indexOf(";", start);
        if (end === -1) {
            end = cookies.length;

        }
        const cookieValue = cookies.substring(start, end);
        return decodeURIComponent(cookieValue);

    }
};

const setCookie = (name, value, days = 1) => {
    let cookie = name + "=" + encodeURIComponent(value);
    if (days) {
        cookie += "; max-age=" + days * 24 * 60 * 60;

    }
    cookie += "; path=/";
    document.cookie = cookie;

};

const deleteCookie = name => {
    document.cookie = name + "=''; max-age=0; path=/";

};

const addProductsCookie = () => {
    try {
        if (!Array.isArray(JSON.parse(getCookieByName("products")))) {
            setCookie("products", JSON.stringify(doughtnut_data))

        }
        // Cookie doesn't exist
        return JSON.parse(getCookieByName("products"));
    } catch (e) {
        setCookie("products", JSON.stringify(doughtnut_data))
        return JSON.parse(getCookieByName("products"));

    }
};