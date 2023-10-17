window.addEventListener("load",tabFinder)
function tabFinder(){                                                                 
    chrome.tabs.query({'active': true, 'windowId': chrome.windows.WINDOW_ID_CURRENT}, 
    function(tabs){
            medium(tabs[0].url);                 
    });
}

function medium(tab){                                                

    let link = tab
    if (link.includes("medium."))
    {
        console.log(link)
        const cacheUrl = "http://webcache.googleusercontent.com/search?q=cache:"
        const pirate = cacheUrl+link;
        window.open(pirate,"_blank")
    }
    else{
        console.log("Not a medium article")
    }
}   



