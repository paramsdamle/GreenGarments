document.addEventListener('DOMContentLoaded', function (){
    
    curated_lists = [ // site name, site link, list name, list of brands
        {
            sitename: "The Good Trade",
            sitelink: "https://www.thegoodtrade.com/features/fair-trade-clothing",
            pagename: "35 Ethical & Sustainable Clothing Brands Betting Against Fast Fashion",
            brands: ["bodenusa.com", "patagonia.com", "wearpact.com", "eileenfisher.com", "sezane.com", "livefashionable.com", "tradlands.com", "outerknown.com", "tentree.com", 
            "kotn.com", "thereformation.com", "levi.com", "wearethought.com", "unitedbyblue.com", "vettacapsule.com", "hackwithdesignhouse.com", "fairtradewinds.net", "fairindigo.com", 
            "thisisaday.com", "backbeat.co", "cuyana.com", "petitestudionyc.com", "encircled.co", "lacausaclothing.com", "shopdoen.com", "indigenous.com", "peopletree.co.uk", 
            "whimsyandrow.com", "amourvert.com", "matethelabel.com", "vegethreads.com", "tonle.com", "jennikayne.com", "monsoonlondon.com", "sotela.co"]
        },
        {
            sitename: "Elle",
            sitelink: "https://www.elle.com/uk/fashion/what-to-wear/g22788319/sustainable-fashion-brands-to-buy-from-now/",
            pagename: "47 Sustainable Clothing Brands That Are Anything But Boring",
            brands: ["ganni.com", "shopredone.com", "acnestudios.com", "jwanderson.com", "bitestudios.com", "carhartt-wip.com", "yoox.com", "collinastrada.com", "prada.com", 
            "chopovalowena.com", "oliviarosethelabel.com", "isabellefox.com", "paperlondon.com", "gerbase.com", "theory.com", "pringlescotland.com", "maisoncleo.com", "houseofsunny.co.uk", 
            "laraintimates.com", "sonia-carrasco.com", "prismlondon.com", "hereustudio.com", "and-daughter.com", "wolfordshop.com", "livetheprocess.com", "stinegoya.com", "baumundpferdgarten.com", 
            "veja-store.com", "itsrooper.co.uk", "aeance.com", "marybenson.london", "thereformation.com", "rave-review.com", "boyish.com", "brothervellies.com", "baserange.com", 
            "motherofpearl.co.uk", "musier-paris.com", "wrightlechapelain.com", "larkandberry.co.uk", "edun.com", "kitx.com.au", "jeanerica.com", "pourlesfemmes.com", "rafausa.com"]
        },
        {
            sitename: "ThredUP",
            sitelink: "https://www.thredup.com/bg/p/top-sustainable-clothing-brand?tswc_redir=true",
            pagename: "The Ultimate 2020 Guide to the Top 25 Sustainable Brands to Try",
            brands: ["alternativeapparel.com", "amourvert.com", "hm.com", "threads4thought.com", "peopletree.co.uk", "krochetkids.com", "wearpact.com", "tentree.com", "thereformation.com", 
            "ninetypercent.com", "everlane.com", "thekit.com", "tribealive.com", "dl1961.com", "boyish.com", "eileenfisher.com", "stellamccartney.com", "patagonia.com", "prana.com", 
            "outdoorvoices.com", "girlfriend.com", "allbirds.com", "veja-store.com", "cuyana.com", "toms.com" ]
        }
    ] 
    
    
    
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick (){
        chrome.tabs.query({currentWindow: true, active: true}, 
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'hi', setCount)
            }
        )
    }

    function setCount(res){
        const div = document.createElement('div');
        div.textContent = `${res.count} cotton`;
        document.body.appendChild(div);
    }
    // const bg = chrome.extension.getBackgroundPage()
    // Object.keys(bg.cottons).forEach(function (url) {
    //     const div = document.createElement('div')
    //     div.textContent =  `${url}: ${bg.cottons[url]}`
    //     document.body.appendChild(div)
    // })


}, false)