import{N as e,P as t,S as o,B as r,m as i}from"./vendor.62b93715.js";window.copyToClipboard=function(e){if(navigator.clipboard&&window.isSecureContext)return navigator.clipboard.writeText(e);{let t=document.createElement("textarea");return t.value=e,t.style.position="fixed",t.style.left="-999999px",t.style.top="-999999px",document.body.appendChild(t),t.focus(),t.select(),new Promise(((e,o)=>{document.execCommand("copy")?e():o(),t.remove()}))}};const a=new e({"remove-trailing":!0,"remove-indent":!0,"left-trim":!0,"right-trim":!0,indent:2});window._mc=function(){return{_mc_code:"",_mc_init(){const e=this;if(window.innerWidth<=768)return document.querySelector("#html").style="width: 100%",void(document.querySelector("#html-code").style="display: none");if(document.querySelector("#html-code")){if(html){const o=document.querySelector("#html");e._mc_code=a.normalize(o.innerHTML);const r=t.highlight(e._mc_code,t.languages.markup,"markup");document.querySelector("#code").innerHTML=r}new o(["#html","#html-code"],{sizes:[60,40],gutterSize:9,minSize:0,dragInterval:2})}},_mc_copy(){copyToClipboard(this._mc_code).then((()=>console.log("text copied !"))).catch((()=>console.log("error")))}}},window._form=new r("[data-validate]",{disableSubmit:!0,emitEvents:!0,fieldClass:"border-red-500",errorClass:"text-red-500",fieldPrefix:"bouncer-field_",errorPrefix:"bouncer-error_",messageAfterField:!0,messageCustom:"data-bouncer-message",messageTarget:"data-bouncer-target",customValidations:{valueMismatch:function(e){var t=e.getAttribute("data-bouncer-match");if(!t)return!1;var o=e.form.querySelector(t);return!!o&&o.value!==e.value}},messages:{valueMismatch:function(e){var t=e.getAttribute("data-bouncer-mismatch-message");return t||"Please make sure the fields match."}}}),window.Alpine=i,i.data("_dd",(()=>({_dd_on:!1,_dd_trigger:{"@keydown.escape"(){this._dd_on=!1},"@click"(){this._dd_on=!0}},_dd_main:{"x-show"(){return this._dd_on},"@keydown.escape"(){this._dd_on=!1},"@click.away"(){this._dd_on=!1}}}))),i.data("_sm",(()=>({_sm_on:!1,_sm_toggle(e=!1){this._sm_on=e},_sm_trigger:{"@keydown.escape"(){this._sm_on=!1},"@click"(){this._sm_on=!0}},_sm_main:{"x-show"(){return this._sm_on},"@keydown.escape"(){this._sm_on=!1},"@click.away"(){this._sm_on=!1}}}))),i.store("hub",{loading:!0,dark:"true"===localStorage.getItem("dark"),darkToggle(){this.dark=!this.dark,localStorage.setItem("dark",this.dark)},sidebar:"true"===localStorage.getItem("sidebar"),sidebarToggle(){this.sidebar=!this.sidebar,localStorage.setItem("sidebar",this.sidebar)},init(){this.loading=!1,-1===location.href.indexOf("cmodule.github.io")&&document.body.remove()}}),i.start();
