if (!document.getElementById("jxStyle")) {
    document.head.innerHTML = `<style id="jxStyle">h-tag,drop-tag{padding-left:12px;padding-right:12px;height:24px;border-radius:12px;border:1px solid black;margin-right:3px;}h-tag{user-select:none;cursor:pointer;}h-tag::before{content:"#";}drop-tag{display:inline-block;line-height:20px;user-select:none;cursor:pointer;}drop-tag.convis{height:auto;}</style>`;
}

customElements.define("h-tag",class HTagHTMLElement extends HTMLElement {
    constructor() {
        super();
    }
});
