/*
  NOTICE:
    None of this code works at the moment. Feel free to delete it until I fix it (if you feel the need to do so)...
*/

// if (!document.getElementById("jxStyle")) {
//     document.head.innerHTML = `<style id="jxStyle">h-tag,drop-tag{padding-left:12px;padding-right:12px;height:24px;border-radius:12px;border:1px solid black;margin-right:3px;}h-tag{user-select:none;cursor:pointer;}h-tag::before{content:"#";}drop-tag{display:inline-block;line-height:20px;user-select:none;cursor:pointer;}drop-tag.convis{height:auto;}</style>`;
// }

// class DropTagHTMLElement extends HTMLElement {
//     get contentsVisible() { return this.getContentVisibility(); }
//     set contentsVisible(v) { this.setContentVisibility(v); }

//     constructor() {
//         super();
//         this._v = false;
//         this.makeContentsInvisible();
//         this.onclick = function() { this.toggleContentVisibility(); }
//         for (var opt of this.children[0].children) {
//             opt.dropTag = this;
//             opt.onclick = function() {
//                 this.dropTag.onSelect(this.getAttribute("value"))
//             }
//         }
//         this.onSelect = function(e) { }
//     }

//     getContentVisibility() {
//         return this._v;
//     }
//     toggleContentVisibility() { this.setContentVisibility(!this.getContentVisibility()); }
//     setContentVisibility(v) {
//         if (v) this.makeContentsVisible(); else this.makeContentsInvisible();
//     }
//     makeContentsVisible() {
//         this.children[0].style.display = "block";
//         this.className = "convis";
//         this._v = true;
//     }
//     makeContentsInvisible() {
//         this.children[0].style.display = "none";
//         this.className = "";
//         this._v = false;
//     }
// }

// customElements.define("drop-tag",DropTagHTMLElement);
