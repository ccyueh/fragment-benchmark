(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(159),o=a(157);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist."))}},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(145),u=a.n(c);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(152),l=a.n(s);a.d(t,"PageRenderer",function(){return l.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},154:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),u=a(2),s=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Fragment Benchmark"}}}}},156:function(e,t,a){},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(163),s=a.n(u),l=a(146);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Fragment Benchmark",description:"A resource for fragment-based drug discovery. This site allows users to view and download a benchmark dataset of protein structures with a variety of small molecules with conserved binding.",author:"Christine Yueh"}}}}},159:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(4),c=a.n(o),u=a(146),s=a(242),l=a(279),d=a(277),p=a(278),m=function(e){var t=e.siteTitle;return i.a.createElement(l.a,{inverse:!0,staticTop:!0,style:{height:"30px"}},i.a.createElement(l.a.Header,null,i.a.createElement(l.a.Brand,null,i.a.createElement("a",{href:Object(u.withPrefix)("/")},t))),i.a.createElement(d.a,{pullRight:!0},i.a.createElement(p.a,{eventKey:1,href:Object(u.withPrefix)("/browse/")},"Browse"),i.a.createElement(p.a,{eventKey:2,href:Object(u.withPrefix)("/about/")},"About"),i.a.createElement(p.a,{eventKey:3,href:Object(u.withPrefix)("/download/")},"Download"),i.a.createElement(p.a,{eventKey:4,href:Object(u.withPrefix)("/contact/")},"Contact")))};m.propTypes={siteTitle:c.a.string},m.defaultProps={siteTitle:""};var f=m,h=(a(156),function(e){var t=e.children;return i.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(s.a,{style:{minHeight:"85vh"}},t),i.a.createElement("footer",null,i.a.createElement(s.a,null,i.a.createElement("center",null,i.a.createElement("hr",null),i.a.createElement("a",{href:"http://structure.bu.edu/"},"Structural Bioinformatics Lab")))))},data:n})});h.propTypes={children:c.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-404-js-835d4aa6c3a4f439a52d.js.map