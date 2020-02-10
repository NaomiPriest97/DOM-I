const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//IMAGES
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let headerImg = document.getElementById("cta-img");
headerImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);



//NAV
let navTags = document.querySelectorAll('a');
navTags[0].textContent = "Service";
navTags[1].textContent = "Product";
navTags[2].textContent = "Vision";
navTags[3].textContent = "Features";
navTags[4].textContent = "About";
navTags[5].textContent = "Product";




//H1 AND CTA
const title = document.querySelector("h1");
title.textContent = ("DOM IS AWESOME");

const titleButton = document.querySelector("button");
titleButton.textContent = ("Get Started");



//TOP CONTENT
const featuresTitle = document.getElementsByTagName("h4")[0];
featuresTitle.textContent = ("Features");
const featuresP = document.getElementsByTagName("p")[0];
featuresP.textContent = ("Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.");


const aboutTitle = document.getElementsByTagName("h4")[1];
aboutTitle.textContent = ("About");
const aboutP = document.getElementsByTagName("p")[1];
aboutP.textContent = ("About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.");




//BOTTOM CONTENT
const servicesTitle = document.getElementsByTagName("h4")[2];
servicesTitle.textContent = ("Services");
const servicesP = document.getElementsByTagName("p")[2];
servicesP.textContent = ("Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.");


const productTitle = document.getElementsByTagName("h4")[3];
productTitle.textContent = ("Products");
const productP = document.getElementsByTagName("p")[3];
productP.textContent = ("Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.");


const visionTitle = document.getElementsByTagName("h4")[4];
visionTitle.textContent = ("Vision");
const visionP = document.getElementsByTagName("p")[4];
visionP.textContent = ("Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.");






//CONTACT INFORMATION
const contactTitle = document.getElementsByTagName("h4")[5];
contactTitle.textContent = ("Contact");

const address = document.getElementsByTagName("p")[5];
address.textContent = ("123 Way 456 Street, Somewhere, USA");

const phone = document.getElementsByTagName("p")[6];
phone.textContent = ("1 (888) 888-8888");

const email = document.getElementsByTagName("p")[7];
email.textContent = ("sales@greatidea.io");





//FOOTER
const footerP = document.getElementsByTagName("footer")[0];
footerP.textContent = ("Copyright Great Idea! 2018");