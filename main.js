/*
 * phi
 */


var $id = function(id) { return document.getElementById(id); };

var toHTML = function() {
    var eSrc    = $id("src");
    var eDst    = $id("dst");
    var markdownText = eSrc.value;
    var htmlText     = markdown.toHTML(markdownText);
    
    eDst.value = htmlText;
};

window.onload = function() {
    tm.FormObserver.observeAll();
    
    $id("src").onchange = toHTML;
    
    // 一度実行しておく
    toHTML();
};

