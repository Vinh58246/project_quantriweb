import{f as v}from"./links.125d59c9.js";import{C as M}from"./Blur.647f62cf.js";import{C as k}from"./DisplayInfo.fb0ecf69.js";import{C as A}from"./SettingsRow.f729cdc5.js";import{x as o,o as r,c as g,C as e,l as n,a as w,t as l,D as d,k as _,b as m}from"./vue.runtime.esm-bundler.4a881941.js";import{_ as h}from"./_plugin-vue_export-helper.abeb2ae0.js";import{R as S}from"./RequiredPlans.6170096f.js";import{C as x}from"./Card.24b534de.js";import{C as P}from"./ProBadge.07a48e27.js";import{C as B}from"./Index.18716c31.js";import{C as K}from"./Cta.542f08fd.js";import{A as L}from"./AddonConditions.a980b8ca.js";import"./default-i18n.3881921e.js";import"./isArrayLikeObject.ab8f4241.js";import"./Row.dbbe567c.js";import"./Tooltip.bcf420d9.js";import"./CheckSolid.84858dc6.js";import"./index.e978df4e.js";import"./Caret.02d7c74a.js";import"./Slide.7ee1d0f1.js";import"./addons.dca3a5e7.js";import"./upperFirst.7faab9f8.js";import"./_stringToArray.4de3b1f3.js";import"./toString.7b877a36.js";import"./license.7b516004.js";import"./constants.238e5b7b.js";const U={components:{CoreBlur:M,CoreDisplayInfo:k,CoreSettingsRow:A},data(){return{strings:{description:this.$t.__("Integrating with Google Maps will allow your users to find exactly where your business is located. Our interactive maps let them see your Google Reviews and get directions directly from your site. Create multiple maps for use with multiple locations.",this.$td),apiKey:this.$t.__("API Key",this.$td),mapPreview:this.$t.__("Map Preview",this.$td)},displayInfo:{block:{copy:"",desc:""}}}}},D={class:"aioseo-maps-blur"},G={class:"aioseo-settings-row"};function I(s,f,y,p,t,$){const a=o("base-input"),i=o("core-settings-row"),c=o("core-display-info"),u=o("core-blur");return r(),g("div",D,[e(u,null,{default:n(()=>[w("div",G,l(t.strings.description),1),e(i,{name:t.strings.apiKey,align:""},{content:n(()=>[e(a,{size:"medium"})]),_:1},8,["name"]),e(c,{options:t.displayInfo},null,8,["options"]),e(i,{name:t.strings.mapPreview,align:""},{content:n(()=>[d(l(t.strings.description),1)]),_:1},8,["name"])]),_:1})])}const R=h(U,[["render",I]]);const N={setup(){return{licenseStore:v()}},components:{Blur:R,RequiredPlans:S,CoreCard:x,CoreProBadge:P,Cta:B},data(){return{features:[this.$t.__("Google Places Support",this.$td),this.$t.__("Google Reviews",this.$td),this.$t.__("Driving Directions",this.$td),this.$t.__("Multiple Locations",this.$td)],strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td),ctaButtonText:this.$t.__("Unlock Local SEO",this.$td),ctaHeader:this.$t.sprintf(this.$t.__("Local SEO is a %1$s Feature",this.$td),"PRO"),ctaDescription:this.$t.__("Show your location to your visitors using an interactive Google Map. Create multiple maps for use with multiple locations.",this.$td)}}}},O={class:"aioseo-local-maps"};function V(s,f,y,p,t,$){const a=o("core-pro-badge"),i=o("blur"),c=o("required-plans"),u=o("cta"),b=o("core-card");return r(),g("div",O,[e(b,{slug:"localBusinessMapsApiKey",noSlide:!0},{header:n(()=>[w("span",null,l(t.strings.googleMapsApiKey),1),e(a)]),default:n(()=>[e(i),e(u,{"cta-link":s.$links.getPricingUrl("local-seo","local-seo-upsell","maps"),"button-text":t.strings.ctaButtonText,"learn-more-link":s.$links.getUpsellUrl("local-seo",null,s.$isPro?"pricing":"liteUpgrade"),"feature-list":t.features,"hide-bonus":!p.licenseStore.isUnlicensed},{"header-text":n(()=>[d(l(t.strings.ctaHeader),1)]),description:n(()=>[e(c,{addon:"aioseo-local-business"}),d(" "+l(t.strings.ctaDescription),1)]),_:1},8,["cta-link","button-text","learn-more-link","feature-list","hide-bonus"])]),_:1})])}const C=h(N,[["render",V]]),q={mixins:[L],components:{Maps:C,Cta:K,Lite:C},data(){return{addonSlug:"aioseo-local-business",strings:{googleMapsApiKey:this.$t.__("Google Maps API Key",this.$td)}}}},E={class:"aioseo-maps"};function T(s,f,y,p,t,$){const a=o("maps",!0),i=o("cta"),c=o("lite");return r(),g("div",E,[s.shouldShowMain?(r(),_(a,{key:0})):m("",!0),s.shouldShowUpdate||s.shouldShowActivate?(r(),_(i,{key:1,"card-slug":"localBusinessMapsApiKey","header-text":t.strings.googleMapsApiKey},null,8,["header-text"])):m("",!0),s.shouldShowLite?(r(),_(c,{key:2})):m("",!0)])}const ht=h(q,[["render",T]]);export{ht as default};
