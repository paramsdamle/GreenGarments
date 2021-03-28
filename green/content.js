// alert("Welcome to GreenGarments!")
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    // alert(request)
    // const re = new RegExp('([0-9]+%[a-zA-Z0-9\-\/\+]*)?(cotton|polyester|nylon|linen)', 'gi');
    // const re = new RegExp('(cotton|polyester|nylon|linen)', 'gi');
    // var matches = document.documentElement.innerHTML.match(re);
    var matches1 = document.documentElement.innerHTML.match(/[0-9]+%[a-z0-9 ]*(cotton|polyester|nylon|linen|hemp|tencel|silk|leather|wool)/gi);
    var matches2 = document.documentElement.innerHTML.match(/(cotton|polyester|nylon|linen|hemp|tencel|silk|leather|wool)/gi);
    sendResponse({ materials: matches1.concat(matches2) ?? []});
    // return true;
})

// const re = new RegExp('cotton', 'gi');
// const matches = document.documentElement.innerHTML.match(re);

// chrome.runtime.sendMessage(
//     {
//         url: window.location.href,
//         count: matches.length
//     }
// );