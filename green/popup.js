// var bkg = chrome.extension.getBackgroundPage();

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
    
    // chrome.tabs.query({currentWindow: true, active: true}, 
    //     function (tabs) {
    //         let url = tabs[0].url;
    //         console.log(url);
    //     }
    // )
    
    document.querySelector('button').addEventListener('click', onclick, false)

    function onclick (){
        chrome.tabs.query({currentWindow: true, active: true}, 
            function (tabs) {
                let url = tabs[0].url;
                domain = (url.match(/[a-zA-Z0-9]+\.(com|net|org|co|co\.uk|com\.au|london)(?![\.a-zA-z0-9])/gi))[0].toLowerCase();


                // const div = document.createElement('div');
                domainname = document.getElementById('domainname');
                

                let reportFound = false;
                siteReport = document.getElementById('siteRating');
                siteReport.innerHTML = "";
                for (var i = 0; i < curated_lists.length; i++){
                    editorial = curated_lists[i];
                    if(editorial.brands.includes(domain)){
                        if( ! reportFound){
                            domainname.innerHTML = `Sustainability report for <b>${domain}</b>:`;
                        }
                        reportFound = true;
                        siteReport.innerHTML += `<div><b>${editorial.sitename}</b> placed this site at position ${editorial.brands.indexOf(domain)+1} in their list, <a href="${editorial.sitelink}">"${editorial.pagename}"</a></div>`;
                    }
                }


                // div.textContent = `Sustainability rating for ${domain}:`;
                // document.body.appendChild(div);
                // bkg.console.log(url);
                chrome.tabs.sendMessage(tabs[0].id, 'hi', setPageReportHTML)

                


                userReport = document.getElementById('userRating');
                if(!reportFound){
                    userReport.innerHTML = `It seems like we couldn't find a report for <b>${domain}</b>. Would you like to submit a user rating below?`
                }
                else {
                    userReport.innerHTML = `Help other shoppers by submitting your review of <b>${domain}</b>'s sustainability!`
                }

                fivestar = document.getElementById('fivestar')
                fivestar.innerHTML = `<form id="ratingForm">
        <fieldset class="rating">
            <input type="radio" id="leaf5" name="rating" value="5">
            <img src="leaf-on.png" id="leaf5" style="width:30px;height:30px;" class="leaf"/> 
            <label for="leaf5" title="Would Recommend!"></label></input>
            <input type="radio" id="leaf4" name="rating" value="4">
            <img src="leaf-on.png" id="leaf4" style="width:30px;height:30px;" class="leaf"/> 
            <label for="leaf4" title="Ethical and Reputable"></label></input>
            <input type="radio" id="leaf3" name="rating" value="3">
            <img src="leaf-on.png" id="leaf3" style="width:30px;height:30px;" class="leaf"/>
            <label for="leaf3" title="Average"></label></input>
            <input type="radio" id="leaf2" name="rating" value="2">
            <img src="leaf-on.png" id="leaf2" style="width:30px;height:30px;" class="leaf"/> 
            <label for="leaf2" title="Sub-optimal Choice"></label></input>
            <input type="radio" id="leaf1" name="rating" value="1">
            <img src="leaf-on.png" id="leaf1" style="width:30px;height:30px;" class="leaf"/> 
            <label for="leaf1" title="Avoid this Brand!"></label></input>
        </fieldset>
    </form>`;


            }
        )
        // bkg.console.log("Got here")
    }

    function setCount(res){
        const div = document.createElement('div');
        div.textContent = `${res.count} cotton`;
        document.body.appendChild(div);
    }

    function setPageReportHTML(res){
        pageReport = document.getElementById('pageRating');
        // pageReport.innerHTML = JSON.stringify(res);
        already_checked = []
        material_rating = {
            'cotton': 'If organic, cotton has natural fibers, no pesticides or chemicals, is biodegradable, wicks away sweat, and is breathable/soft. However, farming requires a lot of water.',
            'polyester': 'Although it requires less water and is cheaper, polyester is produced with toxic chemicals very harmful to us and the planet, involve high nonrenewable energy consumption, and are not biodegradable.',
            'nylon': 'Nylon is a poor choice material due to being produced with chemicals harmful to us and the planet, being non-biodegradable, and requiring acid dying and nitrous oxide, a greenhouse gas.',
            'linen': 'Although linen uses a lot of water and wrinkles easily, it is made from natural fibers, no pesticides, and is biodegradable, lightweight, and breathable.',
            'hemp': 'Although it must be imported into the US for now, hemp is great due to its biodegradability, no pesticide use, medium water requirement, and machine washability.',
            'tencel': 'Tencel uses natural fibers and sustainably harvested wood, making it a great biodegradable, anti-bacterial, machine washable option. Its chemical usage is mitigated by the chemical recycling used in production.',
            'silk': 'Silk uses natural fibers, is biodegradable, and lighter on water than cotton. However, unless it\'s vegan silk, chances are silk worms are killed in the process.',
            'leather': 'Leather is not very sustainable and cattle farming has an immense effect on global carbon dioxide emissions. Try to avoid non-vegan leather whenever possible.',
            'wool': 'Wool, by being animal derived, has the risk of coming from unethical or unsustainable sources. Check on the specific origin of the wool to determine its sutainability.',
        }
        for(var i = 0; i < res.materials.length; i++){
            page = document.getElementById('pageName')
            page.innerHTML = "Materials in this garment:"
            pure_material = res.materials[i].match(/(cotton|polyester|nylon|linen|hemp|tencel|silk|leather|wool)/i)[0].toLowerCase();
            if(! already_checked.includes(pure_material)){
                already_checked.push(pure_material);
                pageReport.innerHTML += `<div>${res.materials[i]}: ${material_rating[pure_material]}</div>`
            }
            // pageReport.innerHTML = res.materials[i];
        }
        // pageReport.innerHTML += res.count;
        
        // pageReport.innerHTML += res.materials;
    }

    // const bg = chrome.extension.getBackgroundPage()
    // Object.keys(bg.cottons).forEach(function (url) {
    //     const div = document.createElement('div')
    //     div.textContent =  `${url}: ${bg.cottons[url]}`
    //     document.body.appendChild(div)
    // })


}, false)