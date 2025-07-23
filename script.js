document.getElementById("enter").addEventListener("click", function () {
    document.getElementById("errorContainer").style.display = "none";
    var input = document.getElementById("input").value
    fetch("https://view-source-api.onrender.com/api?site=" + input)
        .then(function (response) {
            console.log(response)
            if (response.ok) {
                console.log("Response is ok")
            } else {
                console.error("Response error")
            }
            console.log(response.status)
            return response.json()
        })
        .then(function (data) {
            if (data.error) {
                throw new Error(data.error)
            } else {
                document.getElementById("displayContainer").style.display = "revert";
                document.getElementById("ResultDisplay").value = data.html
            }
        })
        .catch(function (error) {
            document.getElementById("errorContainer").style.display = "revert";
            document.getElementById("status").innerHTML = error
        })
})
document.getElementById("format").addEventListener("click", function () {
    document.getElementById("ResultDisplay").value = html_beautify(document.getElementById("ResultDisplay").value)
})
document.getElementById("copyCodeButton").addEventListener("click", function () {
    navigator.clipboard.writeText(document.getElementById("ResultDisplay").value)
    document.getElementById("ResultDisplay").select()
})
document.getElementById("downloadCodeButton").addEventListener("click", function () {
    if (document.getElementById("ResultDisplay").value != "") {
        var file = new Blob([document.getElementById("ResultDisplay").value])
        var link = document.createElement("a");
        link.href = URL.createObjectURL(file);
        link.download = "Source-Code.html";
        link.click();
    }
})
document.getElementById("backtopButton").addEventListener("click", function () {
    document.getElementById("ResultDisplay").scrollTop = 0;
})
document.getElementById("Reset").addEventListener("click", function () {
    document.getElementById("ResultDisplay").value = "";
    document.getElementById("input").value = "";
    document.getElementById("errorContainer").style.display = "none";
    document.getElementById("displayContainer").style.display = "none";
})
document.getElementById("fullScreenButton").addEventListener("click", function () {
    const display = document.getElementById("ResultDisplay")
    if (display.requestFullscreen) {
        display.requestFullscreen();
    } else if (display.webkitRequestFullscreen) {
        display.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
        display.msRequestFullscreen();
    }
})