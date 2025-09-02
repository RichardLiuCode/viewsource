window.onload = function () {
    fetch("https://view-source-api.onrender.com/api?site=about:blank")
        .then(function () {
            console.log("Server is running!");
        })
        .catch(function (error) {
            console.error("Server is not running!");
            console.error(error);
        });
}