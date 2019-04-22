// addTag = {};
// getTagData = {};
superJohnDebugMode = false;
window.onload = function() {
    // angular.module('PlaceCreateModule', []).controller('PlaceCreateComponent', function(scope) {
    //     scope.refreshTagsOutput();
    // });
    // ALLTAGS = document.getElementById("ALLTAGS");
    // allTags = (function() {
    //     var k = [];
    //     for (var g of ALLTAGS.children) {
    //         k.push({
    //             TagId: g.getAttribute("id"),
    //             TagName: g.innerText
    //         });
    //     }
    //     ALLTAGS.style.display = "none";
    // })();
    // while (!Z.innerText || Z.innerText == "undefined") { console.log("WAITING"); }

}

// if (!superJohnDebugMode) document.getElementById("Z").style.display  = "none";
allTags = [];
setInterval(()=>{
    // console.log(`PARSING "${document.getElementById("Z").innerText}"`);
    allTags = JSON.parse(document.getElementById("Z").innerText);
    // if (!debug) Z.style.display = "none";
},1000);
function addTag() {
    console.log(allTags);
    var tval = tagSelector.value;
    console.log(tval);
    var kxn = 0;
    for (var tag of allTags) {
        console.log(`[${kxn++}] = ${tag.TagId} (${typeof tag.TagId})`);
    }
    var kxnr = allTags.filter(function(e) { return e.TagId == tval });
    console.log(`KXNR: ${JSON.stringify(kxnr)}`);
    tagCont.innerHTML = `<h-tag id="${tval}">${kxnr[0].TagName}&nbsp;&nbsp;<a onclick="removeTag('${tval}');">X</a></h-tag>${tagCont.innerHTML}`;
    document.getElementById(tagSelector.value).tagId = tagSelector.value;
}
function removeTag(id) {
    for (var k of tagCont.children) {
        if (k.tagId == id) { k.outerHTML = ""; }
    }
}
function getTagData() {
    var tgd = [];
    for (var k of document.getElementById("tagSelector").children) tgd.push(k.tagId);
    return tgd;
}