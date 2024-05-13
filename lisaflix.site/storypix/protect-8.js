function isMobile() {
    const userAgent = navigator.userAgent.toLowerCase();
    return /mobile|android|iphone|ipad|phone/i.test(userAgent);
}

function check() {
    if (!isMobile()) {
        localStorage.setItem('ispc', 'true')
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }

    const isPc = localStorage.getItem('ispc')

    if (isPc) {
        window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}
document.addEventListener('contextmenu', event => event.preventDefault());

function copyToClipboard() {
    var text = "Copyright";
    navigator.clipboard.writeText(text).then(function() {
        alert("Please don't copy website content.");
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
}

window.addEventListener('keyup', function (e) {
    console.log(e.key);
    if (e.key === "PrintScreen" || e.key === "F13") {
        copyToClipboard();
        return false;
    }
});

window.onload = check;
