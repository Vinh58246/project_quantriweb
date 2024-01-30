import{u as A,g as V,m as P}from"./links.125d59c9.js";import{n as m}from"./isArrayLikeObject.ab8f4241.js";import"./default-i18n.3881921e.js";import{x as s,c as g,C as t,l as r,o as u,a as p,D as l,t as c,F as B,L,k as N,I as E,b as y}from"./vue.runtime.esm-bundler.4a881941.js";import{_ as H}from"./_plugin-vue_export-helper.abeb2ae0.js";import{u as U,W as G}from"./Wizard.844607ad.js";import{B as O}from"./HighlightToggle.bec0f9c2.js";import{G as R,a as T}from"./Row.dbbe567c.js";import{W as F,a as M,b as j}from"./Header.4b8264e7.js";import{W as q}from"./CloseAndExit.83560dbf.js";import{_ as J}from"./Steps.2108138d.js";import"./addons.dca3a5e7.js";import"./upperFirst.7faab9f8.js";import"./_stringToArray.4de3b1f3.js";import"./toString.7b877a36.js";import"./Checkbox.257a03d8.js";import"./Checkmark.aaedf5f6.js";import"./Logo.0d9f9e6e.js";import"./Caret.02d7c74a.js";import"./Index.e43d5dba.js";const z=""+window.__aioseoDynamicImportPreload__("images/yoast-logo-small.d61ba0ec.png"),K=""+window.__aioseoDynamicImportPreload__("images/rank-math-seo-logo-small.ca2c09ed.png"),Q=""+window.__aioseoDynamicImportPreload__("svg/seopress-free-logo-small.ac91e892.svg"),X=""+window.__aioseoDynamicImportPreload__("svg/seopress-pro-logo-small.6e7e5cab.svg");const Y={setup(){const{strings:e}=U();return{rootStore:A(),setupWizardStore:V(),composableStrings:e}},components:{BaseHighlightToggle:O,GridColumn:R,GridRow:T,WizardBody:F,WizardCloseAndExit:q,WizardContainer:M,WizardHeader:j,WizardSteps:J},mixins:[G],data(){return{loading:!1,stage:"import",strings:P(this.composableStrings,{importData:this.$t.__("Import data from your current plugins",this.$td),weHaveDetected:this.$t.sprintf(this.$t.__("We have detected other SEO plugins installed on your website. Select which plugins you would like to import data to %1$s.",this.$td),"AIOSEO"),importDataAndContinue:this.$t.__("Import Data and Continue",this.$td)}),pluginImages:{"yoast-seo":m(z),"yoast-seo-premium":m(z),"rank-math-seo":m(K),seopress:m(Q),"seopress-pro":m(X)},selected:[]}},watch:{selected(e){this.setupWizardStore.importers=e.map(a=>a.slug)}},computed:{getPlugins(){return this.rootStore.aioseo.importers.filter(e=>e.canImport)}},methods:{updateValue(e,a){if(e){this.selected.push(a);return}const d=this.selected.findIndex(_=>_.value===a.value);d!==-1&&this.selected.splice(d,1)},getValue(e){return this.selected.includes(e)},isActive(e){return this.selected.findIndex(d=>d.slug===e.slug)!==-1},saveAndContinue(){this.loading=!0,this.setupWizardStore.saveWizard("importers").then(()=>{this.$router.push(this.setupWizardStore.getNextLink)})},skipStep(){this.setupWizardStore.saveWizard(),this.$router.push(this.setupWizardStore.getNextLink)}}},Z={class:"aioseo-wizard-import"},$={class:"header"},ee={class:"description"},te={class:"plugins"},oe=["alt","src"],se={key:1,class:"icon dashicons dashicons-admin-plugins"},re={class:"go-back"},ne=p("div",{class:"spacer"},null,-1);function ae(e,a,d,_,n,i){const w=s("wizard-header"),v=s("wizard-steps"),k=s("base-highlight-toggle"),S=s("grid-column"),x=s("grid-row"),h=s("router-link"),f=s("base-button"),I=s("wizard-body"),W=s("wizard-close-and-exit"),b=s("wizard-container");return u(),g("div",Z,[t(w),t(b,null,{default:r(()=>[t(I,null,{footer:r(()=>[p("div",re,[t(h,{to:_.setupWizardStore.getPrevLink,class:"no-underline"},{default:r(()=>[l("←")]),_:1},8,["to"]),l("   "),t(h,{to:_.setupWizardStore.getPrevLink},{default:r(()=>[l(c(n.strings.goBack),1)]),_:1},8,["to"])]),ne,t(f,{type:"gray",onClick:i.skipStep},{default:r(()=>[l(c(n.strings.skipThisStep),1)]),_:1},8,["onClick"]),t(f,{type:"blue",loading:n.loading,onClick:i.saveAndContinue},{default:r(()=>[l(c(n.strings.importDataAndContinue)+" →",1)]),_:1},8,["loading","onClick"])]),default:r(()=>[t(v),p("div",$,c(n.strings.importData),1),p("div",ee,c(n.strings.weHaveDetected),1),p("div",te,[t(x,null,{default:r(()=>[(u(!0),g(B,null,L(i.getPlugins,(o,C)=>(u(),N(S,{key:C,md:"6"},{default:r(()=>[t(k,{type:"checkbox",size:"medium",round:"",active:i.isActive(o),name:o.name,modelValue:i.getValue(o),"onUpdate:modelValue":D=>i.updateValue(D,o)},{default:r(()=>[n.pluginImages[o.slug]?(u(),g("img",{key:0,alt:o.name+" Plugin Icon",src:n.pluginImages[o.slug],class:E(["icon",o.slug])},null,10,oe)):y("",!0),n.pluginImages[o.slug]?y("",!0):(u(),g("span",se)),l(" "+c(o.name),1)]),_:2},1032,["active","name","modelValue","onUpdate:modelValue"])]),_:2},1024))),128))]),_:1})])]),_:1}),t(W)]),_:1})])}const be=H(Y,[["render",ae]]);export{be as default};
