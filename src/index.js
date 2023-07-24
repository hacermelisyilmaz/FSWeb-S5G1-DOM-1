const siteContent = {
  // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    h1: "Bu DOM Mükemmel",
    button: "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik":
      "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik":
      "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği":
      "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği":
      "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği":
      "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    adres: "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    telefon: "+90 (123) 456-7899",
    email: "satis@birsirketsitesi.com.tr",
  },
  footer: {
    copyright: "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log("Proje açıldı!");

/* Kodlar Buradan aşağıya */

const container = document.querySelector("div.container");

const headerNav = container.querySelectorAll("header > nav > a");

for (let i = 0; i < 6; i++) {
  headerNav[i].textContent = siteContent.nav[`nav-item-${i + 1}`];
  headerNav[i].className = "italic";
}

const headerLogo = container.querySelector("header > img");
headerLogo.setAttribute("src", siteContent.images["logo-img"]);

const cta = container.querySelector("section.cta");

const ctaH1 = cta.querySelector("div.cta-text > h1");
ctaH1.textContent = siteContent.cta.h1;

const ctaButton = cta.querySelector("div.cta-text > button");
ctaButton.textContent = siteContent.cta.button;

const ctaImg = cta.querySelector("img#cta-img");
ctaImg.setAttribute("src", siteContent.images["cta-img"]);

const mainContent = container.querySelector("section.main-content");

const topTextContent = mainContent.querySelectorAll(
  "div.top-content > div.text-content"
);

const topH41 = topTextContent[0].querySelector("h4");
topH41.textContent = siteContent["ana-içerik"]["özellikler-h4"];

const topP1 = topTextContent[0].querySelector("p");
topP1.textContent = siteContent["ana-içerik"]["özellikler-içerik"];

const topH42 = topTextContent[1].querySelector("h4");
topH42.textContent = siteContent["ana-içerik"]["hakkımızda-h4"];

const topP2 = topTextContent[1].querySelector("p");
topP2.textContent = siteContent["ana-içerik"]["hakkımızda-içerik"];

const mainContentImg = mainContent.querySelector("img#middle-img");
mainContentImg.setAttribute("src", siteContent.images["accent-img"]);

const bottomTextContent = mainContent.querySelectorAll(
  "div.bottom-content > div.text-content"
);

const bottomH41 = bottomTextContent[0].querySelector("h4");
bottomH41.textContent = siteContent["ana-içerik"]["servisler-h4"];

const bottomP1 = bottomTextContent[0].querySelector("p");
bottomP1.textContent = siteContent["ana-içerik"]["servisler-içeriği"];

const bottomH42 = bottomTextContent[1].querySelector("h4");
bottomH42.textContent = siteContent["ana-içerik"]["ürünler-h4"];

const bottomP2 = bottomTextContent[1].querySelector("p");
bottomP2.textContent = siteContent["ana-içerik"]["ürünler-içeriği"];

const bottomH43 = bottomTextContent[2].querySelector("h4");
bottomH43.textContent = siteContent["ana-içerik"]["vizyon-h4"];

const bottomP3 = bottomTextContent[2].querySelector("p");
bottomP3.textContent = siteContent["ana-içerik"]["vizyon-içeriği"];
