import{_ as h}from"./js/_plugin-vue_export-helper.abeb2ae0.js";import{x as a,c as _,C as f,l as n,b as d,o as c,D as g,t as y,a as R,k as C,Y as A}from"./js/vue.runtime.esm-bundler.4a881941.js";import{l as w}from"./js/index.683fda17.js";import{l as k}from"./js/index.e978df4e.js";import{u as S,r as v,l as x}from"./js/links.125d59c9.js";/* empty css                */import{a as E}from"./js/addons.dca3a5e7.js";import{C as L}from"./js/Index.e43d5dba.js";import{C as b}from"./js/Index.574f5502.js";import{i as H}from"./js/isEmpty.bad2fe36.js";import"./js/translations.6e7b2383.js";import"./js/default-i18n.3881921e.js";import"./js/constants.238e5b7b.js";import"./js/Caret.02d7c74a.js";import"./js/isArrayLikeObject.ab8f4241.js";import"./js/upperFirst.7faab9f8.js";import"./js/_stringToArray.4de3b1f3.js";import"./js/toString.7b877a36.js";import"./js/JsonValues.870a4901.js";import"./js/strings.da852d37.js";import"./js/isString.b49e85a4.js";import"./js/ProBadge.07a48e27.js";import"./js/External.7626a9d9.js";import"./js/Exclamation.367f8687.js";import"./js/Checkbox.257a03d8.js";import"./js/Checkmark.aaedf5f6.js";import"./js/Gear.ba945e96.js";import"./js/Slide.7ee1d0f1.js";import"./js/Tooltip.bcf420d9.js";import"./js/Plus.72df22c9.js";import"./js/_getTag.e7f511fc.js";const $={setup(){return{rootStore:S()}},components:{CoreModal:L,CoreAddRedirection:b},data(){return{addons:E,urls:[],display:!1,target:null,loading:!1,strings:{modalHeader:this.$t.__("Add a Redirect",this.$td),redirectAdded:this.$t.sprintf(this.$t.__('%2$sYour redirect was added and you may edit it <a href="%1$s" target="_blank">here</a>.%3$s',this.$td),this.rootStore.aioseo.urls.aio.redirects,"<strong>","</strong>")},watchClasses:["aioseo-redirects-slug-changed","aioseo-redirects-trashed-post"]}},computed:{classSelectors(){return"."+this.watchClasses.join(", .")}},methods:{reload(){var t,s;this.display=!1;const e=(s=(t=this.target)==null?void 0:t.parentElement)==null?void 0:s.parentElement;if(e&&(e.classList.contains("components-notice__content")||e.classList.contains("notice"))){e.innerHTML="<p>"+this.strings.redirectAdded+"</p>";return}this.target.outerHTML=this.strings.redirectAdded},loadRedirect(e){this.loading=!0,v.get(this.$links.restUrl("redirects/manual-redirects/"+e)).then(t=>{this.urls=t.body.redirects,this.loading=!1}).catch(t=>console.error("Redirect modal failed to load the redirect data.",t))},preloadRedirect(){const e=document.querySelector(this.classSelectors);if(e){const t=this.getElementRedirectHash(e);if(!t)return;this.loadRedirect(t)}},watchClicks(){document.body.onclick=e=>{var s;if(!((s=e.target)!=null&&s.classList))return;let t=!1;this.watchClasses.forEach(i=>{e.target.classList.contains(i)&&(t=!0)}),t&&(e.preventDefault(),this.target=e.target,this.display=!0,H(this.url)&&this.loadRedirect(this.getElementRedirectHash(this.target)))}},getElementRedirectHash(e){return new URLSearchParams(e.href).get("aioseo-manual-urls")}},async created(){this.preloadRedirect(),this.watchClicks(),window.aioseoBus.$on("wp-core-notice-created",()=>{this.preloadRedirect()})}},B={key:0,class:"aioseo-redirects-add-redirect-standalone"},D={class:"bd"};function N(e,t,s,i,r,p){const m=a("core-add-redirection"),u=a("core-modal");return r.addons.isActive("aioseo-redirects")?(c(),_("div",B,[f(u,{show:r.display,classes:["aioseo-redirects","modal"],onClose:t[0]||(t[0]=T=>r.display=!1)},{headerTitle:n(()=>[g(y(r.strings.modalHeader),1)]),body:n(()=>[R("div",D,[r.loading?d("",!0):(c(),C(m,{key:0,urls:r.urls,target:r.urls[0].target?r.urls[0].target:"/",disableSource:!0,onAddedRedirect:p.reload},null,8,["urls","target","onAddedRedirect"]))])]),_:1},8,["show"])])):d("",!0)}const P=h($,[["render",N]]),l=document.createElement("div");l.id="aioseo-redirects-add-redirect-standalone";document.body.appendChild(l);let o=A({...P,name:"Standalone/Redirects/AddRedirect"});o=w(o);o=k(o);x(o);o.mount("#aioseo-redirects-add-redirect-standalone");
