window.onload = function () {
    for (var requestTime = 0; requestTime <= 4; requestTime++)
        fetch("https://view-source-api.onrender.com/api?site=about:blank")
            .then(function () {
                console.log("Server is running!");
            })
            .catch(function (error) {
                console.error("Server is not running!");
                console.error(error);
            });
}