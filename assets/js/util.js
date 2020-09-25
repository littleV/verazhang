var hasStorage = (function() {
    try {
        localStorage.setItem("test", "test");
        localStorage.removeItem("test");
        return true;
    } catch (exception) {
        return false;
    }
}());

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function readTextFile(file, conmpletionFunction)
{
  var rawFile = new XMLHttpRequest();
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function ()
  {
     if(rawFile.readyState === 4)
     {
        if(rawFile.status === 200 || rawFile.status == 0)
          {
            var allText = rawFile.responseText;
            conmpletionFunction(allText);
          }
      }
    }
    rawFile.onerror = function (e) {
      console.error(xhr.statusText);
    };
    rawFile.send(null);
}

function createHeaderContents(containerName, pageTitle) {
    var buttonDiv = document.createElement('div');
    buttonDiv.style = "padding-right: 10px;";
    buttonDiv.align = "right";
    // create a English button
    var buttonEnglish = document.createElement('button');
    buttonEnglish.type = "button";
    buttonEnglish.onclick = function () {
       localStorage.setItem('verazhang.com?language=','English');
       location.reload();
    }
    var buttonEnglishText = document.createTextNode('English');
    buttonEnglish.appendChild(buttonEnglishText);
    buttonDiv.appendChild(buttonEnglish);
    // create a Chinese button
    var buttonChinese = document.createElement('button');
    buttonChinese.type = "button";
    buttonChinese.onclick = function () {
        localStorage.setItem('verazhang.com?language=','中文');
        location.reload();
    }
    var buttonChineseText = document.createTextNode('中文');
    buttonChinese.appendChild(buttonChineseText);
    buttonDiv.appendChild(buttonChinese);
    document.getElementById(containerName).appendChild(buttonDiv);
    if (pageTitle != null) {
        var title = document.createElement('h1');
        title.align = "center";
        var language = localStorage.getItem('verazhang.com?language=');
        var titleText;
        if (language) {
           titleText = document.createTextNode(pageTitle[language]);
        } else {
            titleText = document.createTextNode(pageTitle['English']);
        }

        title.appendChild(titleText);
        document.getElementById(containerName).appendChild(title);
    }
}
function createFooterLinks(containerName, links, pageName) {
    var ul = document.createElement('ul');
    ul.className = "list-inline";
    var language = localStorage.getItem('verazhang.com?language=');
    // Featured 
    var featuredLi = document.createElement('li');
    var featuredText = document.createTextNode("Home");
    if (language == "中文") {
        featuredText = document.createTextNode("主页");
    }
    if (pageName == "Home") {
        featuredLi.appendChild(featuredText);
    } else {
        var featuredLink = document.createElement('a');

        featuredLink.appendChild(featuredText);
        featuredLink.className = "black-link-underline";
        featuredLink.href = links['home'];
        featuredLi.appendChild(featuredLink);
    }
    ul.appendChild(featuredLi);
    // Art 
    var artLi = document.createElement('li');
    var artText = document.createTextNode("Art");
    if (language == "中文") {
        artText = document.createTextNode("艺术");
    }
    if (pageName == "Art works") {
        artLi.appendChild(artText);
    } else {
        var artLink = document.createElement('a');
        artLink.appendChild(artText);
        artLink.className = "black-link-underline";
        artLink.href = links['artworks'];
        artLi.appendChild(artLink);
    }
    ul.appendChild(artLi);
    // Blog 
    var blogLi = document.createElement('li');
    var blogText = document.createTextNode("News");
    if (language == "中文") {
        blogText = document.createTextNode("新闻");
    }
    if (pageName == "News") {
        blogLi.appendChild(blogText);
    } else {
        var blogLink = document.createElement('a');
        blogLink.appendChild(blogText);
        blogLink.className = "black-link-underline";
        blogLink.href = links['news'];
        blogLi.appendChild(blogLink);
    }
    ul.appendChild(blogLi);
    // About me
    var aboutMeLi = document.createElement('li');
    var aboutMeText = document.createTextNode("About");
    if (language == "中文") {
        aboutMeText = document.createTextNode("关于");
    }
    if (pageName == "About me") {
        aboutMeLi.appendChild(aboutMeText);
    } else {
        var aboutMeLink = document.createElement('a');
        aboutMeLink.appendChild(aboutMeText);
        aboutMeLink.className = "black-link-underline";
        aboutMeLink.href = links['aboutme'];
        aboutMeLi.appendChild(aboutMeLink);
    }
    ul.appendChild(aboutMeLi);
    // Instagram
    if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
        var instaLi = document.createElement('li');
        var instaLink = document.createElement('a');
        var instaText = document.createTextNode("Instagram");
        instaLink.appendChild(instaText);
        instaLink.className = "black-link-underline";
        instaLink.href = "instagram://user?username=vera_z";
        instaLi.appendChild(instaLink);
        ul.appendChild(instaLi);
    } else {
        var instaLi = document.createElement('li');
        var instaLink = document.createElement('a');
        var instaText = document.createTextNode("Instagram");
        instaLink.appendChild(instaText);
        instaLink.className = "black-link-underline";
        instaLink.setAttribute('target','_blank');
        instaLink.href = "http://www.instagram.com/vera_z/";
        instaLi.appendChild(instaLink);
        ul.appendChild(instaLi);
    }   
    // Email 
    var emailLi = document.createElement('li');
    var emailLink = document.createElement('a');
    var emailText = document.createTextNode("Email");
    if (language == "中文") {
        emailText = document.createTextNode("邮件");
    }
    emailLink.appendChild(emailText);
    emailLink.className = "black-link-underline";
    emailLink.href = "mailto:verazhangsite@gmail.com?Subject=From%20www.verazhang.com";
    emailLi.appendChild(emailLink);
    ul.appendChild(emailLi);
    // Support 
    var supportLi = document.createElement('li');
    var supportText = document.createTextNode("Support");
    if (language == "中文") {
        supportText = document.createTextNode("支持");
    }
    if (pageName == "Support") {
        supportLi.appendChild(supportText);
    } else {
        var supportLink = document.createElement('a');
        supportLink.appendChild(supportText);
        supportLink.className = "black-link-underline";
        supportLink.href = links['supportme'];
        supportLi.appendChild(supportLink);

    }
    ul.appendChild(supportLi);
    // Privacy Policy
    var privacyLi = document.createElement('li');
    var privacyText = document.createTextNode('Privacy Policy');
    if (language == '中文') {
        privacyText = document.createTextNode('隐私政策');
    }
    var privacyLink = document.createElement('a');
    privacyLink.appendChild(privacyText);
    privacyLink.className = "black-link-underline";
    privacyLink.href = "https://www.freeprivacypolicy.com/live/dccb9a51-748e-4ab8-933a-00e372b3ee1c";
    privacyLi.appendChild(privacyLink);
    ul.appendChild(privacyLi);
    document.getElementById(containerName).appendChild(ul);
}