(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{509:function(t,e,i){},545:function(t,e,i){"use strict";i(509)},568:function(t,e,i){"use strict";i.r(e);i(21),i(36);var s=i(27),n=/\/$/,a=/^[a-z]+:/i,r={computed:{editLink:function(){if(!1!==this.$page.frontmatter.editLink){var t=this.$site.themeConfig,e=t.repo,i=t.editLinks,s=t.docsDir,n=void 0===s?"":s,a=t.docsBranch,r=void 0===a?"master":a,l=t.docsRepo,o=void 0===l?e:l;return o&&i&&this.$page.relativePath?this.createEditLink(e,o,n,r,this.$page.relativePath):void 0}},editLinkText:function(){return this.$themeLocaleConfig.editLinkText||this.$site.themeConfig.editLinkText||"Edit this page"}},methods:{createEditLink:function(t,e,i,s,r){return/bitbucket.org/.test(t)?(a.test(e)?e:t).replace(n,"")+"/src"+"/".concat(s,"/")+(i?i.replace(n,"")+"/":"")+r+"?mode=edit&spa=0&at=".concat(s,"&fileviewer=file-view-default"):(a.test(e)?e:"https://github.com/".concat(e)).replace(n,"")+"/edit"+"/".concat(s,"/")+(i?i.replace(n,"")+"/":"")+r},range:s.range}},l=(i(545),i(1)),o=Object(l.a)(r,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.$themeConfig&&t.$themeConfig.gutter?i("div",{staticClass:"container"},[i("div",{staticClass:"wrapper"},[t.$themeConfig.gutter.title?i("div",{staticClass:"title"},[t._v(t._s(t.$themeConfig.gutter.title))]):t._e(),i("div",{staticClass:"links"},[i("a",{staticClass:"links__item links__item__chat",style:{"--bg":t.$themeConfig.gutter.chat.bg},attrs:{href:t.$themeConfig.gutter.chat.url,target:"_blank",rel:"noreferrer noopener"}},[i("tm-logo-chat",{staticClass:"links__item__logo",staticStyle:{fill:"white",width:"80px",height:"80px"}}),i("svg",{staticClass:"links__item__icon",attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M1.16962 13.7697C0.876728 14.0626 0.876728 14.5374 1.16962 14.8303C1.46252 15.1232 1.93739 15.1232 2.23028 14.8303L1.16962 13.7697ZM15.106 1.95457C15.3989 1.66168 15.3989 1.1868 15.106 0.893912C14.8131 0.601019 14.3382 0.601019 14.0454 0.893913L15.106 1.95457ZM14.9999 1H15.7499V0.25H14.9999V1ZM4.81811 0.25C4.4039 0.25 4.06811 0.585786 4.06811 1C4.06811 1.41421 4.4039 1.75 4.81811 1.75V0.25ZM14.2499 11.1818C14.2499 11.596 14.5857 11.9318 14.9999 11.9318C15.4141 11.9318 15.7499 11.596 15.7499 11.1818H14.2499ZM2.23028 14.8303L15.106 1.95457L14.0454 0.893913L1.16962 13.7697L2.23028 14.8303ZM14.9999 0.25H4.81811V1.75H14.9999V0.25ZM15.7499 11.1818V1H14.2499V11.1818H15.7499Z",fill:"white"}})]),i("div",{staticClass:"links__item__title",domProps:{innerHTML:t._s(t.md(t.$themeConfig.gutter.chat.title))}}),i("div",{staticClass:"links__item__text",domProps:{innerHTML:t._s(t.md(t.$themeConfig.gutter.chat.text))}})],1),i("a",{staticClass:"links__item links__item__forum",style:{"--bg":t.$themeConfig.gutter.forum.bg},attrs:{href:t.$themeConfig.gutter.forum.url,target:"_blank",rel:"noreferrer noopener"}},[i("tm-logo-"+t.$themeConfig.gutter.forum.logo,{tag:"component",staticClass:"links__item__logo",staticStyle:{fill:"white",width:"80px",height:"80px"}}),i("svg",{staticClass:"links__item__icon",attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M1.16962 13.7697C0.876728 14.0626 0.876728 14.5374 1.16962 14.8303C1.46252 15.1232 1.93739 15.1232 2.23028 14.8303L1.16962 13.7697ZM15.106 1.95457C15.3989 1.66168 15.3989 1.1868 15.106 0.893912C14.8131 0.601019 14.3382 0.601019 14.0454 0.893913L15.106 1.95457ZM14.9999 1H15.7499V0.25H14.9999V1ZM4.81811 0.25C4.4039 0.25 4.06811 0.585786 4.06811 1C4.06811 1.41421 4.4039 1.75 4.81811 1.75V0.25ZM14.2499 11.1818C14.2499 11.596 14.5857 11.9318 14.9999 11.9318C15.4141 11.9318 15.7499 11.596 15.7499 11.1818H14.2499ZM2.23028 14.8303L15.106 1.95457L14.0454 0.893913L1.16962 13.7697L2.23028 14.8303ZM14.9999 0.25H4.81811V1.75H14.9999V0.25ZM15.7499 11.1818V1H14.2499V11.1818H15.7499Z",fill:"white"}})]),i("div",{staticClass:"links__item__title",domProps:{innerHTML:t._s(t.md(t.$themeConfig.gutter.forum.title))}}),i("div",{staticClass:"links__item__text",domProps:{innerHTML:t._s(t.md(t.$themeConfig.gutter.forum.text))}})],1),i("a",{staticClass:"links__item links__item__regular",attrs:{href:t.editLink,target:"_blank",rel:"noreferrer noopener"}},[i("tm-icon-paper-pen",{staticClass:"links__item__logo",staticStyle:{width:"80px",height:"80px"},attrs:{fill:"var(--color-link)"}}),i("svg",{staticClass:"links__item__icon",attrs:{width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[i("path",{attrs:{d:"M1.16962 13.7697C0.876728 14.0626 0.876728 14.5374 1.16962 14.8303C1.46252 15.1232 1.93739 15.1232 2.23028 14.8303L1.16962 13.7697ZM15.106 1.95457C15.3989 1.66168 15.3989 1.1868 15.106 0.893912C14.8131 0.601019 14.3382 0.601019 14.0454 0.893913L15.106 1.95457ZM14.9999 1H15.7499V0.25H14.9999V1ZM4.81811 0.25C4.4039 0.25 4.06811 0.585786 4.06811 1C4.06811 1.41421 4.4039 1.75 4.81811 1.75V0.25ZM14.2499 11.1818C14.2499 11.596 14.5857 11.9318 14.9999 11.9318C15.4141 11.9318 15.7499 11.596 15.7499 11.1818H14.2499ZM2.23028 14.8303L15.106 1.95457L14.0454 0.893913L1.16962 13.7697L2.23028 14.8303ZM14.9999 0.25H4.81811V1.75H14.9999V0.25ZM15.7499 11.1818V1H14.2499V11.1818H15.7499Z",fill:"black"}})]),i("div",{staticClass:"links__item__title",domProps:{innerHTML:t._s(t.md(t.$themeConfig.gutter.github.title))}}),i("div",{staticClass:"links__item__text",staticStyle:{color:"rgba(22, 25, 49, 0.65)"},domProps:{innerHTML:t._s(t.md(t.$themeConfig.gutter.github.text))}})],1)])]),"sdk"==t.$themeConfig.label?i("div",{staticClass:"newsletter"},[i("div",{staticClass:"newsletter__image"},t._l(t.range(15),(function(t,e){return i("div",{staticClass:"newsletter__image__item",class:["letter__"+e]},[i("image-letter")],1)})),0),i("div",{staticClass:"newsletter__form"},[i("tm-newsletter-form")],1)]):t._e()]):t._e()])}),[],!1,null,"ee1dad7a",null);e.default=o.exports}}]);