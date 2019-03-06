(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{141:function(e,t,a){"use strict";a.r(t);a(73),a(52),a(172);var n=a(0),r=a.n(n),i=a(266),o=a(180),c=a(159),l=a(157),s={tables:"Tables only",visual:"Visualizations only",combined:"Tables + Visualizations"};t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"Download"}),r.a.createElement("h1",null,"Download Entries"),r.a.createElement("p",null,"Download benchmark files by using the links below."),r.a.createElement(i.a,{justified:!0},Object.keys(s).map(function(e){return r.a.createElement(o.a,{bsStyle:"link",download:!0,href:"../../all/"+e+".zip"},s[e]+" (.zip)")})),r.a.createElement("p",null),r.a.createElement("p",null,"To download files from a specific entry, visit its individual page (browse all entries ",r.a.createElement("a",{href:"/browse/"},"here"),")."))}},148:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return b}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return f});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(145),l=a.n(c);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var s=a(152),u=a.n(s);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var p=r.a.createContext({}),f=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},154:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),l=a(2),s=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Fragment Benchmark"}}}}},156:function(e,t,a){},157:function(e,t,a){"use strict";var n=a(158),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(163),s=a.n(l),u=a(148);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var p="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Fragment Benchmark",description:"A resource for fragment-based drug discovery. This site allows users to view and download a benchmark dataset of protein structures with a variety of small molecules with conserved binding.",author:"Christine Yueh"}}}}},159:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),o=a(4),c=a.n(o),l=a(148),s=a(242),u=a(279),d=a(277),p=a(278),f=function(e){var t=e.siteTitle;return i.a.createElement(u.a,{inverse:!0,staticTop:!0,style:{height:"30px"}},i.a.createElement(u.a.Header,null,i.a.createElement(u.a.Brand,null,i.a.createElement("a",{href:"/"},t))),i.a.createElement(d.a,{pullRight:!0},i.a.createElement(p.a,{eventKey:1,href:"/browse/"},"Browse"),i.a.createElement(p.a,{eventKey:2,href:"/about/"},"About"),i.a.createElement(p.a,{eventKey:3,href:"/download/"},"Download"),i.a.createElement(p.a,{eventKey:4,href:"/contact/"},"Contact")))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var b=f,m=(a(156),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(s.a,{style:{minHeight:"85vh"}},t),i.a.createElement("footer",null,i.a.createElement(s.a,null,i.a.createElement("center",null,i.a.createElement("hr",null),i.a.createElement("a",{href:"http://structure.bu.edu/"},"Structural Bioinformatics Lab")))))},data:n})});m.propTypes={children:c.a.node.isRequired};t.a=m},172:function(e,t,a){var n=a(25),r=a(35);a(184)("keys",function(){return function(e){return r(n(e))}})},180:function(e,t,a){"use strict";var n=a(181),r=a.n(n),i=a(149),o=a(147),c=a(150),l=a(146),s=a.n(l),u=a(0),d=a.n(u),p=a(4),f=a.n(p),b=a(161),m=a.n(b),h=a(153),y=a(165),v=a(171),g={active:f.a.bool,disabled:f.a.bool,block:f.a.bool,onClick:f.a.func,componentClass:m.a,href:f.a.string,type:f.a.oneOf(["button","reset","submit"])},w=function(e){function t(){return e.apply(this,arguments)||this}Object(c.a)(t,e);var a=t.prototype;return a.renderAnchor=function(e,t){return d.a.createElement(v.a,Object(o.a)({},e,{className:s()(t,e.disabled&&"disabled")}))},a.renderButton=function(e,t){var a=e.componentClass,n=Object(i.a)(e,["componentClass"]),r=a||"button";return d.a.createElement(r,Object(o.a)({},n,{type:n.type||"button",className:t}))},a.render=function(){var e,t=this.props,a=t.active,n=t.block,r=t.className,c=Object(i.a)(t,["active","block","className"]),l=Object(h.f)(c),u=l[0],d=l[1],p=Object(o.a)({},Object(h.d)(u),((e={active:a})[Object(h.e)(u,"block")]=n,e)),f=s()(r,p);return d.href?this.renderAnchor(d,f):this.renderButton(d,f)},t}(d.a.Component);w.propTypes=g,w.defaultProps={active:!1,block:!1,disabled:!1},t.a=Object(h.a)("btn",Object(h.b)([y.c.LARGE,y.c.SMALL,y.c.XSMALL],Object(h.c)(r()(y.d).concat([y.e.DEFAULT,y.e.PRIMARY,y.e.LINK]),y.e.DEFAULT,w)))},181:function(e,t,a){e.exports=a(182)},182:function(e,t,a){a(183),e.exports=a(160).Object.values},183:function(e,t,a){var n=a(162),r=a(177)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},184:function(e,t,a){var n=a(11),r=a(16),i=a(24);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],o={};o[e]=t(a),n(n.S+n.F*i(function(){a(1)}),"Object",o)}},266:function(e,t,a){"use strict";var n=a(147),r=a(149),i=a(150),o=a(146),c=a.n(o),l=a(0),s=a.n(l),u=a(4),d=a.n(u),p=a(179),f=a.n(p),b=a(180),m=a(153),h={vertical:d.a.bool,justified:d.a.bool,block:f()(d.a.bool,function(e){var t=e.block,a=e.vertical;return t&&!a?new Error("`block` requires `vertical` to be set to have any effect"):null})},y=function(e){function t(){return e.apply(this,arguments)||this}return Object(i.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.block,i=t.justified,o=t.vertical,l=t.className,u=Object(r.a)(t,["block","justified","vertical","className"]),d=Object(m.f)(u),p=d[0],f=d[1],h=Object(n.a)({},Object(m.d)(p),((e={})[Object(m.e)(p)]=!o,e[Object(m.e)(p,"vertical")]=o,e[Object(m.e)(p,"justified")]=i,e[Object(m.e)(b.a.defaultProps,"block")]=a,e));return s.a.createElement("div",Object(n.a)({},f,{className:c()(l,h)}))},t}(s.a.Component);y.propTypes=h,y.defaultProps={block:!1,justified:!1,vertical:!1},t.a=Object(m.a)("btn-group",y)}}]);
//# sourceMappingURL=component---src-pages-download-js-47ffd86fd7961a510f05.js.map