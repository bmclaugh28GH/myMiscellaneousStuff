var imgList = document.querySelectorAll("img");

for (i=0; i<imgList.length; i++) {
    imgList[i].setAttribute("src", "panda.jpg");
    imgList[i].setAttribute("alt", "cute panda jpg");
    
}

console.log (imgList); 

var anchorList = document.querySelectorAll("a");

for (i=0; i<anchorList.length; i++) {
    anchorList[i].setAttribute("href", "https://github.com");
}

console.log (anchorList);

var siteList = document.querySelectorAll(".sites");

for (i=0; i<siteList.length; i++) {
    siteList[i].setAttribute("style", "margin-left:30%");
}

console.log (siteList);


    