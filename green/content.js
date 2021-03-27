// alert("Welcome to GreenGarments!")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // alert(request)
    const re = new RegExp('cotton', 'gi');
    const matches = document.documentElement.innerHTML.match(re);
    sendResponse({count: matches ? matches.length : 0});
})

// const re = new RegExp('cotton', 'gi');
// const matches = document.documentElement.innerHTML.match(re);

// chrome.runtime.sendMessage(
//     {
//         url: window.location.href,
//         count: matches.length
//     }
// );