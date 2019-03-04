(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{143:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(264),i=a(159),s=a(157),l=a(4),o=a.n(l),u=a(203),d=(a(185),a(148)),m=a(149),p=a(150),b=a(147),f=a.n(b),h=a(153),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(p.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.className,a=Object(m.a)(e,["className"]),n=Object(h.f)(a),c=n[0],i=n[1],s=Object(h.d)(c);return r.a.createElement("div",Object(d.a)({},i,{role:"toolbar",className:f()(t,s)}))},t}(r.a.Component),g=Object(h.a)("btn-toolbar",y),v=a(180),E={BINDINGMOAD:"http://www.bindingmoad.org/pdbrecords/index/",PDBBIND:"http://www.pdbbind-cn.org/quickpdb.asp?quickpdb=",BINDINGDB:"http://www.bindingdb.org/jsp/dbsearch/PrimarySearch_pdbids.jsp?pdbids_submit=Search&pdbids="},j={BINDINGMOAD:"primary",PDBBIND:"success",BINDINGDB:"info"},w=function(e){var t=e.pdb,a=e.bind;return r.a.createElement(g,null,a.map(function(e){if("-"===e.source)return r.a.createElement("span",null,"-");var a=E[e.source],n=j[e.source];return r.a.createElement(v.a,{href:a+t,bsStyle:n,bsSize:"xsmall"},e.affinity)}))};w.propTypes={pdb:o.a.string,bind:o.a.array},w.defaultProps={pdb:"",bind:[]};var O=w,P=[{Header:"PDB ID",accessor:"pdb",Cell:function(e){return r.a.createElement("a",{href:"https://www.rcsb.org/structure/"+e.value},e.value)},width:60},{Header:"Chain",accessor:"chain",width:50},{Header:"Ligand",accessor:"lig",Cell:function(e){return r.a.createElement("a",{href:"https://www.rcsb.org/ligand/"+e.value},e.value)},width:60},{Header:"Residue ID",accessor:"resi",width:90},{Header:"Molecular Weight",accessor:"mw",width:140},{Header:"Binding Affinity",accessor:"bind",Cell:function(e){var t=e.row;return r.a.createElement(O,{pdb:t.pdb,bind:t.bind})}}],k=function(e){var t=e.data;return r.a.createElement(u.a,{data:t,columns:P,showPagination:!1,minRows:0,resizable:!1,getTdProps:function(){return{style:{textAlign:"center"}}},className:"-striped -highlight"})};k.propTypes={data:o.a.object},k.defaultProps={data:{}};var N=k,T=(a(36),a(73),a(52),a(172),a(265)),x=a(146),C=function(e){var t=e.image,a=e.data;return r.a.createElement(c.a,null,r.a.createElement("center",null,r.a.createElement("img",{src:Object(x.withPrefix)("/images/"+t+".png"),style:{maxWidth:"300px"},alt:""}),r.a.createElement("p",null,r.a.createElement("a",{href:"#dl"},"Download files"))),r.a.createElement(T.a,{xs:12},Object.keys(a).map(function(e){return r.a.createElement(c.a,null,r.a.createElement("span",{style:{display:"inline-block",width:150}},r.a.createElement("strong",null,e.replace(/_/g," "))),a[e])}),r.a.createElement("p",null)))};C.propTypes={image:o.a.string,data:o.a.object},C.defaultProps={image:"",data:{}};var D=C,I=a(202),q=r.a.createElement(I.a,{glyph:"arrow-right"}),B=function(e){var t=e.lig;return r.a.createElement("a",{href:"https://www.rcsb.org/ligand/"+t},t)},S=function(e){var t=e.frag,a=e.data;return r.a.createElement(c.a,null,a.map(function(e){return r.a.createElement("p",null,r.a.createElement(B,{lig:t})," ",e.map(function(e){return r.a.createElement("span",null," ",q," ",r.a.createElement(B,{lig:e}))}))}))};S.propTypes={frag:o.a.string,data:o.a.object},S.defaultProps={frag:"",data:{}};var A=S,_=a(266),R={json:"Tables only",pdb:"Visualization only",zip:"Tables + Visualization"},H=function(e){var t=e.entry_name;return r.a.createElement(_.a,{justified:!0},Object.keys(R).map(function(e){return r.a.createElement(v.a,{bsStyle:"link",download:!0,href:"../../"+e+"/"+t+"."+e},R[e]+" (."+e+")")}))};H.propTypes={entry_name:o.a.string},H.defaultProps={entry_name:""};var F=H;a.d(t,"query",function(){return L});t.default=function(e){var t=e.data.entry;return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:t.entry_name}),r.a.createElement(c.a,null,r.a.createElement("h1",null,t.entry_name),r.a.createElement("hr",null),r.a.createElement("h3",null,"Summary")),r.a.createElement(D,{image:t.summary.Fragment_ID,data:Object.assign(t.summary,{Fragment_ID:r.a.createElement("a",{href:"https://www.rcsb.org/ligand/"+t.summary.Fragment_ID},t.summary.Fragment_ID),UniProt_Accession:r.a.createElement("a",{href:"https://www.uniprot.org/uniprot/"+t.summary.UniProt_Accession},t.summary.UniProt_Accession)})}),r.a.createElement(c.a,null,r.a.createElement("hr",null),r.a.createElement("h3",null,"Structural Details"),r.a.createElement(N,{data:t.structures}),r.a.createElement("p",null),r.a.createElement("hr",null),r.a.createElement("h3",null,"Substructure Relationships")),r.a.createElement(A,{frag:t.summary.Fragment_ID,data:t.substructures}),r.a.createElement(c.a,null,r.a.createElement("hr",null),r.a.createElement("h3",{id:"dl"},"Download"),r.a.createElement(F,{entry_name:t.entry_name}),r.a.createElement("p",null)))};var L="173245717"},146:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return b}),a.d(t,"StaticQueryContext",function(){return m}),a.d(t,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),c=a(4),i=a.n(c),s=a(145),l=a.n(s);a.d(t,"Link",function(){return l.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var o=a(152),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(e){return r.a.createElement(m.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},152:function(e,t,a){var n;e.exports=(n=a(154))&&n.default||n},154:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),c=a(4),i=a.n(c),s=a(51),l=a(2),o=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=o},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Fragment Benchmark"}}}}},156:function(e,t,a){},157:function(e,t,a){"use strict";var n=a(158),r=a(0),c=a.n(r),i=a(4),s=a.n(i),l=a(163),o=a.n(l),u=a(146);function d(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,s=e.title;return c.a.createElement(u.StaticQuery,{query:m,render:function(e){var n=t||e.site.siteMetadata.description;return c.a.createElement(o.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=d;var m="1025518380"},158:function(e){e.exports={data:{site:{siteMetadata:{title:"Fragment Benchmark",description:"A resource for fragment-based drug discovery. This site allows users to view and download a benchmark dataset of protein structures with a variety of small molecules with conserved binding.",author:"Christine Yueh"}}}}},159:function(e,t,a){"use strict";var n=a(155),r=a(0),c=a.n(r),i=a(4),s=a.n(i),l=a(146),o=a(242),u=a(279),d=a(277),m=a(278),p=function(e){var t=e.siteTitle;return c.a.createElement(u.a,{inverse:!0,staticTop:!0,style:{height:"30px"}},c.a.createElement(u.a.Header,null,c.a.createElement(u.a.Brand,null,c.a.createElement("a",{href:"/"},t))),c.a.createElement(d.a,{pullRight:!0},c.a.createElement(m.a,{eventKey:1,href:Object(l.withPrefix)("/browse/")},"Browse"),c.a.createElement(m.a,{eventKey:2,href:Object(l.withPrefix)("/about/")},"About"),c.a.createElement(m.a,{eventKey:3,href:Object(l.withPrefix)("/download/")},"Download"),c.a.createElement(m.a,{eventKey:4,href:Object(l.withPrefix)("/contact/")},"Contact")))};p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""};var b=p,f=(a(156),function(e){var t=e.children;return c.a.createElement(l.StaticQuery,{query:"755544856",render:function(e){return c.a.createElement(c.a.Fragment,null,c.a.createElement(b,{siteTitle:e.site.siteMetadata.title}),c.a.createElement(o.a,{style:{minHeight:"85vh"}},t),c.a.createElement("footer",null,c.a.createElement(o.a,null,c.a.createElement("center",null,c.a.createElement("hr",null),c.a.createElement("a",{href:"http://structure.bu.edu/"},"Structural Bioinformatics Lab")))))},data:n})});f.propTypes={children:s.a.node.isRequired};t.a=f},172:function(e,t,a){var n=a(25),r=a(35);a(184)("keys",function(){return function(e){return r(n(e))}})},180:function(e,t,a){"use strict";var n=a(181),r=a.n(n),c=a(149),i=a(148),s=a(150),l=a(147),o=a.n(l),u=a(0),d=a.n(u),m=a(4),p=a.n(m),b=a(161),f=a.n(b),h=a(153),y=a(165),g=a(171),v={active:p.a.bool,disabled:p.a.bool,block:p.a.bool,onClick:p.a.func,componentClass:f.a,href:p.a.string,type:p.a.oneOf(["button","reset","submit"])},E=function(e){function t(){return e.apply(this,arguments)||this}Object(s.a)(t,e);var a=t.prototype;return a.renderAnchor=function(e,t){return d.a.createElement(g.a,Object(i.a)({},e,{className:o()(t,e.disabled&&"disabled")}))},a.renderButton=function(e,t){var a=e.componentClass,n=Object(c.a)(e,["componentClass"]),r=a||"button";return d.a.createElement(r,Object(i.a)({},n,{type:n.type||"button",className:t}))},a.render=function(){var e,t=this.props,a=t.active,n=t.block,r=t.className,s=Object(c.a)(t,["active","block","className"]),l=Object(h.f)(s),u=l[0],d=l[1],m=Object(i.a)({},Object(h.d)(u),((e={active:a})[Object(h.e)(u,"block")]=n,e)),p=o()(r,m);return d.href?this.renderAnchor(d,p):this.renderButton(d,p)},t}(d.a.Component);E.propTypes=v,E.defaultProps={active:!1,block:!1,disabled:!1},t.a=Object(h.a)("btn",Object(h.b)([y.c.LARGE,y.c.SMALL,y.c.XSMALL],Object(h.c)(r()(y.d).concat([y.e.DEFAULT,y.e.PRIMARY,y.e.LINK]),y.e.DEFAULT,E)))},181:function(e,t,a){e.exports=a(182)},182:function(e,t,a){a(183),e.exports=a(160).Object.values},183:function(e,t,a){var n=a(162),r=a(177)(!1);n(n.S,"Object",{values:function(e){return r(e)}})},184:function(e,t,a){var n=a(11),r=a(16),c=a(24);e.exports=function(e,t){var a=(r.Object||{})[e]||Object[e],i={};i[e]=t(a),n(n.S+n.F*c(function(){a(1)}),"Object",i)}},202:function(e,t,a){"use strict";var n=a(148),r=a(149),c=a(150),i=a(147),s=a.n(i),l=a(0),o=a.n(l),u=a(4),d=a.n(u),m=a(153),p={glyph:d.a.string.isRequired},b=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.glyph,c=t.className,i=Object(r.a)(t,["glyph","className"]),l=Object(m.f)(i),u=l[0],d=l[1],p=Object(n.a)({},Object(m.d)(u),((e={})[Object(m.e)(u,a)]=!0,e));return o.a.createElement("span",Object(n.a)({},d,{className:s()(c,p)}))},t}(o.a.Component);b.propTypes=p,t.a=Object(m.a)("glyphicon",b)},264:function(e,t,a){"use strict";var n=a(148),r=a(149),c=a(150),i=a(147),s=a.n(i),l=a(0),o=a.n(l),u=a(161),d=a.n(u),m=a(153),p={componentClass:d.a},b=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,a=e.className,c=Object(r.a)(e,["componentClass","className"]),i=Object(m.f)(c),l=i[0],u=i[1],d=Object(m.d)(l);return o.a.createElement(t,Object(n.a)({},u,{className:s()(a,d)}))},t}(o.a.Component);b.propTypes=p,b.defaultProps={componentClass:"div"},t.a=Object(m.a)("row",b)},265:function(e,t,a){"use strict";var n=a(148),r=a(149),c=a(150),i=a(147),s=a.n(i),l=a(0),o=a.n(l),u=a(4),d=a.n(u),m=a(161),p=a.n(m),b=a(153),f=a(165),h={componentClass:p.a,xs:d.a.number,sm:d.a.number,md:d.a.number,lg:d.a.number,xsHidden:d.a.bool,smHidden:d.a.bool,mdHidden:d.a.bool,lgHidden:d.a.bool,xsOffset:d.a.number,smOffset:d.a.number,mdOffset:d.a.number,lgOffset:d.a.number,xsPush:d.a.number,smPush:d.a.number,mdPush:d.a.number,lgPush:d.a.number,xsPull:d.a.number,smPull:d.a.number,mdPull:d.a.number,lgPull:d.a.number},y=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.componentClass,a=e.className,c=Object(r.a)(e,["componentClass","className"]),i=Object(b.f)(c),l=i[0],u=i[1],d=[];return f.a.forEach(function(e){function t(t,a){var n=""+e+t,r=u[n];null!=r&&d.push(Object(b.e)(l,""+e+a+"-"+r)),delete u[n]}t("",""),t("Offset","-offset"),t("Push","-push"),t("Pull","-pull");var a=e+"Hidden";u[a]&&d.push("hidden-"+e),delete u[a]}),o.a.createElement(t,Object(n.a)({},u,{className:s()(a,d)}))},t}(o.a.Component);y.propTypes=h,y.defaultProps={componentClass:"div"},t.a=Object(b.a)("col",y)},266:function(e,t,a){"use strict";var n=a(148),r=a(149),c=a(150),i=a(147),s=a.n(i),l=a(0),o=a.n(l),u=a(4),d=a.n(u),m=a(179),p=a.n(m),b=a(180),f=a(153),h={vertical:d.a.bool,justified:d.a.bool,block:p()(d.a.bool,function(e){var t=e.block,a=e.vertical;return t&&!a?new Error("`block` requires `vertical` to be set to have any effect"):null})},y=function(e){function t(){return e.apply(this,arguments)||this}return Object(c.a)(t,e),t.prototype.render=function(){var e,t=this.props,a=t.block,c=t.justified,i=t.vertical,l=t.className,u=Object(r.a)(t,["block","justified","vertical","className"]),d=Object(f.f)(u),m=d[0],p=d[1],h=Object(n.a)({},Object(f.d)(m),((e={})[Object(f.e)(m)]=!i,e[Object(f.e)(m,"vertical")]=i,e[Object(f.e)(m,"justified")]=c,e[Object(f.e)(b.a.defaultProps,"block")]=a,e));return o.a.createElement("div",Object(n.a)({},p,{className:s()(l,h)}))},t}(o.a.Component);y.propTypes=h,y.defaultProps={block:!1,justified:!1,vertical:!1},t.a=Object(f.a)("btn-group",y)}}]);
//# sourceMappingURL=component---src-templates-entry-js-32df391b4fe7d45a9831.js.map