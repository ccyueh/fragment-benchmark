(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{144:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(264),o=n(265),c=n(159),l=n(157),s=n(267),u=n.n(s),d=n(146),m=n(280);function f(){var e=u()(["\n  .carousel-control.left,\n  .carousel-control.right {\n     background: none;\n  }\n  .carousel-control .glyphicon-chevron-left, \n  .carousel-control .icon-prev {\n    margin-left: 20%;\n  }\n  .carousel-control .glyphicon-chevron-right, \n  .carousel-control .icon-next {\n    margin-right: 20%;\n  }\n"]);return f=function(){return e},e}var h=n(268).a.div(f()),g=["index_1","index_2","index_3","index_4"],p={index_1:"1LQ (fragment)",index_2:"1LQ (fragment) + 5P7 (ligand 1)",index_3:"1LQ (fragment) + 5P7 + UX0 (ligands 1-2)",index_4:"1LQ (fragment) + 5P7 + UX0 + KC7 (ligands 1-3)"},y=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{xs:12},r.a.createElement("center",null,r.a.createElement(h,null,r.a.createElement(m.a,{interval:2500},g.map(function(e){return r.a.createElement(m.a.Item,{style:{minHeight:"100%"}},r.a.createElement("img",{alt:"",src:Object(d.withPrefix)("/images/"+e+".png")}),r.a.createElement(m.a.Caption,{style:{background:"rgba(0,0,0,0.35)"}},r.a.createElement("h4",null,p[e])))}))))))};t.default=function(){return r.a.createElement(c.a,null,r.a.createElement(l.a,{title:"Home",keywords:["fragment-based drug discovery"]}),r.a.createElement("h1",null,"Welcome to the Fragment Benchmark"),r.a.createElement(i.a,null,r.a.createElement(o.a,{xs:12},r.a.createElement("p",null,"The Fragment Benchmark is a resource for fragment-based drug discovery. This benchmark dataset contains ",r.a.createElement("strong",null,"62")," cases of proteins with conserved binding of structurally similar fragments and drug-like ligands. Users can browse entries by protein or fragment data, or download data and visualizations of each set of structures for individual or all entries."),r.a.createElement("p",null,"As an example, the slideshow below demonstrates how the fragment/ligands for one entry (",r.a.createElement("a",{href:Object(d.withPrefix)("/entry/1LQ_P11142/")},r.a.createElement("strong",null,"1LQ_P11142")),") bind in a consistent orientation to the protein. Use the left and right arrows to navigate between each image, or click on the slideshow to pause it."))),r.a.createElement(y,null),r.a.createElement(i.a,null,r.a.createElement(o.a,{xs:12},r.a.createElement("p",null,"To learn more about the benchmark, visit the ",r.a.createElement("a",{href:Object(d.withPrefix)("/about/")},"about")," page."))))}},146:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return h}),n.d(t,"StaticQueryContext",function(){return m}),n.d(t,"StaticQuery",function(){return f});var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(145),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var s=n(152),u=n.n(s);n.d(t,"PageRenderer",function(){return u.a});var d=n(32);n.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),f=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},152:function(e,t,n){var a;e.exports=(a=n(154))&&a.default||a},154:function(e,t,n){"use strict";n.r(t);n(33);var a=n(0),r=n.n(a),i=n(4),o=n.n(i),c=n(51),l=n(2),s=function(e){var t=e.location,n=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=s},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Fragment Benchmark"}}}}},156:function(e,t,n){},157:function(e,t,n){"use strict";var a=n(158),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(163),s=n.n(l),u=n(146);function d(e){var t=e.description,n=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(u.StaticQuery,{query:m,render:function(e){var a=t||e.site.siteMetadata.description;return i.a.createElement(s.a,{htmlAttributes:{lang:n},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:c},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:a}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:a})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var m="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Fragment Benchmark",description:"A resource for fragment-based drug discovery. This site allows users to view and download a benchmark dataset of protein structures with a variety of small molecules with conserved binding.",author:"Christine Yueh"}}}}},159:function(e,t,n){"use strict";var a=n(155),r=n(0),i=n.n(r),o=n(4),c=n.n(o),l=n(146),s=n(242),u=n(279),d=n(277),m=n(278),f=function(e){var t=e.siteTitle;return i.a.createElement(u.a,{inverse:!0,staticTop:!0,style:{height:"30px"}},i.a.createElement(u.a.Header,null,i.a.createElement(u.a.Brand,null,i.a.createElement("a",{href:Object(l.withPrefix)("/")},t))),i.a.createElement(d.a,{pullRight:!0},i.a.createElement(m.a,{eventKey:1,href:Object(l.withPrefix)("/browse/")},"Browse"),i.a.createElement(m.a,{eventKey:2,href:Object(l.withPrefix)("/about/")},"About"),i.a.createElement(m.a,{eventKey:3,href:Object(l.withPrefix)("/download/")},"Download"),i.a.createElement(m.a,{eventKey:4,href:Object(l.withPrefix)("/contact/")},"Contact")))};f.propTypes={siteTitle:c.a.string},f.defaultProps={siteTitle:""};var h=f,g=(n(156),function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(h,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(s.a,{style:{minHeight:"85vh"}},t),i.a.createElement("footer",null,i.a.createElement(s.a,null,i.a.createElement("center",null,i.a.createElement("hr",null),i.a.createElement("a",{href:"http://structure.bu.edu/"},"Structural Bioinformatics Lab")))))},data:a})});g.propTypes={children:c.a.node.isRequired};t.a=g}}]);
//# sourceMappingURL=component---src-pages-index-js-8b972133b388a064bcee.js.map