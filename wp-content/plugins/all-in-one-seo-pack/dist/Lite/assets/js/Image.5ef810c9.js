import{v as g,w as m,q as h,b as u,x as w,y as v,u as f,a as p,e as E}from"./links.125d59c9.js";import{g as P,a as $,c as _,b as O}from"./postSlug.ffc044fc.js";const x=()=>{var e;let t=0;return(g()||m())&&(t=parseInt((e=document.getElementById("post_author_override"))==null?void 0:e.value)),h()&&(t=window.wp.data.select("core/editor").getEditedPostAttribute("author")),t||(t=u().currentPost.postAuthor),t},y=()=>{const t=document.querySelector("#set-post-thumbnail img");return t?t.getAttribute("src"):""},S=async(t=!1)=>{var a;const e=window.wp.data.select("core/editor"),o=t&&e?e==null?void 0:e.getEditedPostAttribute("featured_media"):(a=e==null?void 0:e.getCurrentPost())==null?void 0:a.featured_media;return typeof o>"u"?new Promise(i=>setTimeout(()=>i(S(t)),1e3)):o},I=async()=>{if(g()||m())return y();if(h()){const t=await S(!0).then(o=>o);return isNaN(t)||t===0?"":u().getMediaData({mediaId:t}).then(o=>o.source_url)}return w()?P().featuredImage:v()?$().featuredImage:""},B={emits:["updateSocialImagePreview"],data(){return{excludedTermOptions:["featured","attach","content","author","auto"],excludedAttachmentOptions:["featured","content","author"],excludedPageBuilderOptions:["featured","auto"]}},computed:{imageSourceOptions(){return[{label:this.$t.__("Default Image (Set Below)",this.$td),value:"default"},{label:this.$t.__("Featured Image",this.$td),value:"featured"},{label:this.$t.__("Attached Image",this.$td),value:"attach"},{label:this.$t.__("First Image in Content",this.$td),value:"content"},{label:this.$t.__("Image from Custom Field",this.$td),value:"custom"},{label:this.$t.__("Post Author Image",this.$td),value:"author"},{label:this.$t.__("First Available Image",this.$td),value:"auto"}]},imageSourceOptionsFiltered(){var a,i,r;const t=u(),e=this.imageSourceOptions.map(s=>(s.value==="default"&&(s.label=this.$t.__("Default Image Source (Set in Social Networks)",this.$td)),s)).concat({label:this.$t.__("Custom Image",this.$td),value:"custom_image"});if(((a=t.currentPost)==null?void 0:a.context)==="term")return e.filter(s=>!this.excludedTermOptions.includes(s.value));if(((i=t.currentPost)==null?void 0:i.context)==="post"&&((r=t.currentPost)==null?void 0:r.postType)==="attachment")return e.filter(s=>!this.excludedAttachmentOptions.includes(s.value));const o=f();return o.aioseo.integration?(o.aioseo.integration==="seedprod"&&this.excludedPageBuilderOptions.push("featured","custom"),e.filter(s=>!this.excludedPageBuilderOptions.includes(s.value))):e}},methods:{getTermImageSourceOptions(){return this.imageSourceOptions.filter(t=>!this.excludedTermOptions.includes(t.value))},getImageSourceOption(t){return this.imageSourceOptions.find(e=>e.value===t)},getImageSourceOptionFiltered(t){return this.imageSourceOptionsFiltered.find(e=>e.value===t)}}},b=()=>{let t=null;const e=/<img.*?src=['"](.*?)['"].*?>/i.exec(O());return e&&e[1]&&(t=e[1]),t},U=async(t,e,o)=>{let a=_(t[`${o}image_custom_fields`]);return a||await I().then(i=>{a=i}),a||await u().getFirstAttachedImage({postId:t.id}).then(r=>{a=r}),a||(a=b()),a||(a=p().options.social[e].homePage.image),a},A=async()=>{let t="";const e=x();return await u().getUserImage({userId:e}).then(a=>{t=a}),t},C={data(){return{imageUrl:"",loading:!1}},methods:{async setImageUrl(t=""){var d;const e=p(),o=u(),a=E(),i=o.currentPost,r=t||((d=a.metaBoxTabs)==null?void 0:d.social)||"facebook",s=r==="facebook"||r==="twitter"&&i.twitter_use_og?"og_":"twitter_";let l=i[`${s}image_type`]||"default";switch(l==="default"&&(l=e.options.social[r].general.defaultImageSourcePosts),this.imageUrl="",l){case"featured":this.loading=!0,await I().then(n=>{this.imageUrl=n,this.loading=!1});break;case"attach":this.loading=!0,await o.getFirstAttachedImage({postId:i.id}).then(n=>{this.imageUrl=n,this.loading=!1});break;case"content":this.imageUrl=b();break;case"author":this.loading=!0,await A().then(n=>{this.imageUrl=n,this.loading=!1});break;case"auto":this.loading=!0,await U(i,r,s).then(n=>{this.imageUrl=n,this.loading=!1});break;case"custom":this.imageUrl=_(i[`${s}image_custom_fields`]);break;case"custom_image":this.imageUrl=i[`${s}image_custom_url`];break;case"default":default:this.imageUrl=e.options.social[r].general.defaultImagePosts;break}const c=f();!this.imageUrl&&c.aioseo.urls.siteLogo&&(this.imageUrl=c.aioseo.urls.siteLogo),window.aioseoBus.$emit("updateSocialImagePreview",{social:r,image:this.imageUrl})}}};export{B as I,C as a};