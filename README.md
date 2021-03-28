# GreenGarments

## Inspiration

**The fashion industry is the second largest polluter in the world, only superseded by _oil_.** I didn't know anything about the sustainability of the clothes I bought, and I realized there's a vacancy when it comes to services that mitigate ignorance about one's shopping. The best way to combat this is raising awareness and accessibility to healthier alternatives to fast fashion, and _Green Garments_ does just that: influence small-scale decision making that triggers large-scale change.

## What it does

_Green Garments_ is a Chrome extension that gives users easy access to sustainability information on fashion websites. It provides overall site rating as well as information about the ecological impact of each material in a given item of clothing.

## How I built it

The chrome extension itself was built on Javascript and HTML. It uses Regular Expressions to scan webpages and their URLs to gather information on a particular garment's build or a certain brand's reputation.

## Challenges I ran into

Chrome makes it difficult to know exactly what bug your extension ran into, since it runs in a separate HTML window and thus you can't 'inspect element' it. Also, this being my first asynchronous app created with Javascript, I had to learn the quirks of request sending/receiving and how to encapsulate different aspects of the code, including the difference between content, background, and popup scripts.

## Accomplishments that I'm proud of

I am very proud that my first chrome extension met the need that I set out to fulfill. On any page containing a garment and the material it is made of, my extension can tell you how sustainable the fabrics used are, and hopefully this can pave the way for more people becoming aware of what they buy and wear.

## What I learned

I learned a project is best completed when there's a clear objective and limited scope. This is the first time I have finished a working product exactly how I wanted to, and this is because I clearly mapped out what I wanted: brand sustainability rating and garment-fabric sustainability rating. I didn't try to go out and make the next "Honey", and I think limiting my scope in this way helped me stay focused and incrementally work on the next task towards completion.

## What's next for _Green Garments_

There's a **huge** potential for _Green Garments_ because of increasing environmental consciousness and a global need to switch to sustainable lifestyle. For starters, I intend to use the [Eupedia Brand Ratings](https://www.eupedia.com/ecology/ethical_fashion_brands_ratings.shtml) to expand the site review portion of the extension, and perhaps even automate the ratings. I also plan to to set up authentication with a database so users can submit their own ratings/reviews and these can be easily compiled in the extension. And, of course, I want to eventually publish the working product to the Chrome Web Store so that people (and the planet) can actually benefit from my work.

## Setup

Download the code to your computer from GitHub. Open Google Chrome and by clicking the ≡ in the top right, navigate to `More Tools -> Extensions`.
Make sure `Developer mode` (switch on top right) is turned on, click `Load unpacked`, and select the `green` folder. The extension should now load and you can view sustainability reports on major fashion websites.
