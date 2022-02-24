function foodCookie(cookieTag) {
    document.cookie = "selection=" + cookieTag
    localStorage.setItem("selection", cookieTag)
    console.log(localStorage.getItem("selection"));
}