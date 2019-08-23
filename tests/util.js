import { ClientFunction } from 'testcafe';

var Utils = {
	baseUrl: "http://0.0.0.0:8000/",
	galleryPath :"gallery",
	blogPath : "blog",
	aboutPath : "about",
	instaWebPath : 'www.instagram.com/vera_z/',
	emailPath : "mailto:wei.vera.zhang@gmail.com?Subject=From%20www.verazhang.com",
	supportPath : 'support',
	adsPath: 'ads',
	privacyPath: 'www.freeprivacypolicy.com/privacy/view/fc6bd4104410e9573eead5ce0a7f1b3e'
}

Utils.stripTrailingSlash = function (site){return site.replace(/\/$/, "");};
Utils.getLocation  = ClientFunction(() => document.location.href.toString());
Utils.goBack = ClientFunction(() => window.history.back());

export { Utils };