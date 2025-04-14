const getIconSource = (url: string) => {
    if (url.includes("linkedin")) {
        return require("../assets/images/linkedin.png");
    }
    if (url.includes("instagram")) {
        return require("../assets/images/instagram.png");
    }
    return require("../assets/images/site.png");
};

export { getIconSource }