(this["webpackJsonpgame-cart"]=this["webpackJsonpgame-cart"]||[]).push([[0],{125:function(e,t,a){},131:function(e,t,a){},153:function(e,t,a){},154:function(e,t,a){},199:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(13),i=a.n(r),s=a(17),o=a(41),l=a(22),d=a(246),u=a(39),j=a.n(u),b=a(57),m=a(239),h=a(99),p=a(240),O=a(241),g=a(229),x=a(233),f=a(234),v=a(235),w=a(113),S=a(236),N=a(237),E=a(238),I=(a(125),a(4)),C=function(e){var t=e.basket,a=e.product,c=e.addProduct,n=e.updateProduct,r=e.RemoveItemFromBasket;return Object(I.jsxs)(g.a,{className:"custom-card",children:[Object(I.jsxs)(o.b,{to:"product-view/".concat(a.gameID),children:[Object(I.jsxs)(x.a,{children:[Object(I.jsx)(f.a,{component:"img",alt:"Contemplative Reptile",height:"260",className:"card-image",image:(null===a||void 0===a?void 0:a.thumb)||"https://i.blogs.es/6c558d/luna-400mpx/1366_2000.jpg",title:"Contemplative Reptile"}),Object(I.jsx)(v.a,{className:"content",children:Object(I.jsx)(w.a,{className:"title",gutterBottom:!0,variant:"h5",component:"h2",children:a.external})})]}),Object(I.jsx)(w.a,{variant:"h3",children:"View"})]}),t&&Object(I.jsx)(S.a,{children:Object(I.jsx)(w.a,{className:"basket-item-price",gutterBottom:!0,variant:"h5",component:"h2",children:a.cheapest})}),Object(I.jsxs)(S.a,{className:"actions-content",children:[!t&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsxs)(w.a,{className:"price",gutterBottom:!0,variant:"h5",component:"h2",children:["$ ",a.cheapest]}),Object(I.jsxs)(N.a,{size:"large",className:"custom-button",onClick:function(){c(a.gameID)},children:[Object(I.jsx)(E.a,{})," Add to Library"]})]}),t&&Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N.a,{size:"small",color:"secondary",variant:"outlined",onClick:function(){r(a.gameID)},children:"Remove"}),Object(I.jsxs)(I.Fragment,{children:[Object(I.jsx)(N.a,{size:"small",variant:"outlined",className:"increase-product-quantity",onClick:function(){n(a.gameID)},children:"+"}),Object(I.jsxs)(w.a,{children:["\xa0",a.quantity,"\xa0"]}),Object(I.jsx)(N.a,{size:"small",color:"secondary",variant:"outlined",onClick:function(){n(a.gameID)},children:"-"})]})]})]})]})},k=function(e){var t=e.basket,a=e.product,c=e.addProduct,n=e.RemoveItemFromBasket;return Object(I.jsx)(C,{basket:t,product:a,addProduct:c,RemoveItemFromBasket:n})},y=(a(131),a(65)),D=a.n(y),P=a(104),F=a.n(P),T=Object(O.a)((function(e){return{root:{flexGrow:1}}})),_=function(e){var t=e.addProduct,a=Object(c.useState)([]),n=Object(s.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)("batman"),l=Object(s.a)(o,2),d=l[0],u=l[1],O=Object(c.useState)(null),g=Object(s.a)(O,2),x=(g[0],g[1],Object(c.useState)(r)),f=Object(s.a)(x,2),v=(f[0],f[1],T()),w=function(){var e=Object(b.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://www.cheapshark.com/api/1.0/games?title=".concat(d,"&limit=60&exact=0")).catch((function(e){console.log("Err",e)}));case 2:t=e.sent,i(t&&t.data?t.data:[]);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){w()}),[]),Object(c.useEffect)((function(){console.log(r)}),[r]),Object(c.useEffect)((function(){w()}),[d]);return Object(I.jsx)("div",{children:Object(I.jsxs)(m.a,{id:"products",children:[Object(I.jsxs)("div",{className:"navbar-search",children:[Object(I.jsx)(F.a,{className:v.searchIcon}),Object(I.jsx)(h.a,{onChange:function(e){var t,a=null===(t=e.target.value)||void 0===t?void 0:t.toLowerCase();""===a&&(a="batman"),u(a)},className:v.searchInput,label:"Search Game",variant:"standard"})]}),Object(I.jsx)(p.a,{container:!0,spacing:4,children:r.map((function(e){return Object(I.jsx)(p.a,{item:!0,xs:12,sm:6,md:4,children:Object(I.jsx)(k,{product:e,addProduct:t})},e.id)}))})]})})},R=a(242),B=a(243),V=a(244),M=(a(153),a(110)),q=a(251),L=a(245),U=Object(O.a)((function(e){return{root:{flexGrow:1},menubackgroud:{background:"linear-gradient(45deg, #F78888 ,#F3D250 ,#ECECEC , #90CCF4 , #5DA2DE )"},title:{flexGrow:1}}})),W=function(e){e.basketItems,e.totalCost;var t=e.setUserState,a=(e.products,Object(l.e)(),U(),Object(c.useState)(!0)),n=Object(s.a)(a,2),r=n[0],i=(n[1],Object(c.useState)(null)),d=Object(s.a)(i,2),u=d[0],j=d[1],b=Object(c.useState)([]),h=Object(s.a)(b,2),p=(h[0],h[1],Boolean(u)),O=function(){localStorage.removeItem("user"),t&&t(),j(null)};return Object(I.jsx)(I.Fragment,{children:Object(I.jsx)(R.a,{position:"fixed",className:"custom-navbar",children:Object(I.jsx)(m.a,{children:Object(I.jsxs)(B.a,{children:[Object(I.jsx)(w.a,{component:o.b,to:"/",variant:"h6",onClick:function(){window.location.href="/"},className:"custom-title",color:"inherit",children:Object(I.jsx)("img",{src:"https://img.icons8.com/64/000000/controller.png",alt:"Game Logo",height:"28px",className:"logo"})}),Object(I.jsx)("div",{className:"navbar-items",children:r&&Object(I.jsxs)("div",{children:[Object(I.jsx)(V.a,{"aria-label":"account of current user","aria-controls":"menu-appbar","aria-haspopup":"true",onClick:function(e){j(e.currentTarget)},color:"inherit",children:Object(I.jsx)(L.a,{})}),Object(I.jsx)(M.a,{id:"menu-appbar",anchorEl:u,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:p,onClose:O,children:Object(I.jsx)(q.a,{onClick:O,children:"Logout"})})]})})]})})})})},z=(a(154),function(){var e=(new Date).getFullYear();return Object(I.jsx)("footer",{className:"footer",children:Object(I.jsxs)("p",{children:["All \xa9 copy rights are reserved to Creator ",e]})})}),A=a(105),J=a(252),G=a(248),X=a(250),$=a(249),K=a(247),Q=a(34),Y=a(109),H=(a(171),Y.a.initializeApp({apiKey:"AIzaSyDYeOurJ4X8Kb_dEQPCh2OM9IlpNQVkSc8",authDomain:"game-db-ecbc6.firebaseapp.com",projectId:"game-db-ecbc6",storageBucket:"game-db-ecbc6.appspot.com",messagingSenderId:"758236328395",appId:"1:758236328395:web:0e38460d13c23e1810064e"})),Z=a(40),ee=a(107),te=Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",margin:e.spacing(3,0,2),color:"#fff"},card:{marginTop:"60px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"},pointer:{cursor:"pointer",color:"red"}}})),ae=function(e){var t=te(),a=Object(c.useState)(""),n=Object(s.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(""),l=Object(s.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)(!1),h=Object(s.a)(b,2),O=h[0],x=h[1],f=Object(c.useState)(!1),S=Object(s.a)(f,2),E=S[0],C=S[1];return Object(I.jsx)(m.a,{component:"main",maxWidth:"xs",children:Object(I.jsx)(g.a,{className:t.card,children:Object(I.jsxs)(v.a,{children:[Object(I.jsx)(Z.a,{}),Object(I.jsx)(d.a,{}),Object(I.jsxs)("div",{className:t.paper,children:[Object(I.jsx)(J.a,{className:t.avatar,children:Object(I.jsx)(K.a,{})}),Object(I.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign In"}),Object(I.jsxs)(Q.ValidatorForm,{onSubmit:function(){C(!0),H.auth().signInWithEmailAndPassword(r,u).then((function(t){var a=t.user,c={userId:a.uid,email:a.email};localStorage.setItem("user",JSON.stringify(c));var n=localStorage.getItem("user"),r=null!==n?JSON.parse(n):null;e.loggedIn(r),C(!1)})).catch((function(e){Z.b.error(e.message),C(!1)}))},onError:function(e){var t,a=Object(A.a)(e);try{for(a.s();!(t=a.n()).done;){var c=t.value;console.log(c.props.errorMessages[0])}}catch(c){a.e(c)}finally{a.f()}},className:t.form,children:[Object(I.jsx)(Q.TextValidator,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Email",onChange:function(e){i(e.target.value)},name:"email",value:r,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"],autoComplete:"off"}),Object(I.jsx)(Q.TextValidator,{variant:"outlined",fullWidth:!0,label:"Password",onChange:function(e){j(e.target.value)},name:"password",type:"password",value:u,validators:["required"],errorMessages:["this field is required"],autoComplete:"off"}),Object(I.jsx)(G.a,{control:Object(I.jsx)(X.a,{value:O,onChange:function(e){x(e.target.checked)},color:"primary"}),label:"Remember me"}),E?Object(I.jsx)(ee.ScaleLoader,{css:"\n        display: block;\n        margin-left: 100px;\n        border-color: red;\n    ",size:150,color:"#eb4034",loading:E}):Object(I.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",className:t.submit,children:"Sign In"}),Object(I.jsx)(p.a,{container:!0,children:Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)($.a,{onClick:e.toggle,className:t.pointer,variant:"body2",children:"Don't have an account? Sign Up"})})})]})]})]})})})},ce=(a(198),Object(O.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{background:"linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",margin:e.spacing(3,0,2),color:"#fff"},card:{marginTop:"60px",paddingLeft:"20px",paddingRight:"20px",paddingBottom:"20px"},pointer:{cursor:"pointer",color:"red"}}}))),ne=function(e){var t=ce(),a=Object(c.useState)(""),n=Object(s.a)(a,2),r=n[0],i=n[1],o=Object(c.useState)(""),l=Object(s.a)(o,2),u=l[0],j=l[1],b=Object(c.useState)(""),h=Object(s.a)(b,2),O=h[0],x=h[1];return Object(c.useEffect)((function(){return Q.ValidatorForm.addValidationRule("isPasswordMatch",(function(e){return e===u})),function(){Q.ValidatorForm.removeValidationRule("isPasswordMatch")}}),[u]),Object(I.jsx)(m.a,{component:"main",maxWidth:"xs",children:Object(I.jsx)(g.a,{className:t.card,children:Object(I.jsxs)(v.a,{children:[Object(I.jsx)(Z.a,{}),Object(I.jsx)(d.a,{}),Object(I.jsxs)("div",{className:t.paper,children:[Object(I.jsx)(J.a,{className:t.avatar,children:Object(I.jsx)(K.a,{})}),Object(I.jsx)(w.a,{component:"h1",variant:"h5",children:"Sign Up"}),Object(I.jsxs)(Q.ValidatorForm,{onSubmit:function(){H.auth().createUserWithEmailAndPassword(r,u).then((function(t){t&&(e.toggle(),Z.b.success("User Registered Successfully"))})).catch((function(e){switch(e.code){case"auth/email-already-in-use":case"auth/invalid-email":case"auth/weak-password":Z.b.error(e.message)}}))},className:t.form,children:[Object(I.jsx)(Q.TextValidator,{variant:"outlined",margin:"normal",fullWidth:!0,label:"Email",onChange:function(e){i(e.target.value)},name:"email",value:r,validators:["required","isEmail"],errorMessages:["this field is required","email is not valid"],autoComplete:"off"}),Object(I.jsx)("br",{}),Object(I.jsx)(Q.TextValidator,{variant:"outlined",fullWidth:!0,label:"Password",onChange:function(e){j(e.target.value)},name:"password",type:"password",value:u,validators:["required"],errorMessages:["this field is required"],autoComplete:"off"}),Object(I.jsx)("br",{}),Object(I.jsx)(Q.TextValidator,{variant:"outlined",label:"Confirm password",fullWidth:!0,onChange:function(e){x(e.target.value)},name:"confirmPassword",type:"password",validators:["isPasswordMatch","required"],errorMessages:["password mismatch","this field is required"],value:O,autoComplete:"off"}),Object(I.jsx)(N.a,{type:"submit",fullWidth:!0,variant:"contained",className:t.submit,children:"Sign Up"}),Object(I.jsx)(p.a,{container:!0,children:Object(I.jsx)(p.a,{item:!0,children:Object(I.jsx)($.a,{onClick:e.toggle,className:t.pointer,variant:"body2",children:"Already have an account? Sign In"})})})]})]})]})})})},re=a(46),ie=(a(199),function(){var e=Object(c.useState)({}),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)([]),i=Object(s.a)(r,2),o=i[0],l=i[1],d=function(){var e=Object(b.a)(j.a.mark((function e(t){var a,c,r,i,s,o,d,u,b,m;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://www.cheapshark.com/api/1.0/games?id=".concat(t)).catch((function(e){console.log("Err",e)}));case 2:return u=e.sent,n({gameID:t,thumb:(null===u||void 0===u||null===(a=u.data)||void 0===a||null===(c=a.info)||void 0===c?void 0:c.thumb)||"https://i.blogs.es/6c558d/luna-400mpx/1366_2000.jpg",title:(null===u||void 0===u||null===(r=u.data)||void 0===r||null===(i=r.info)||void 0===i?void 0:i.title)||"New game",cheapPrice:(null===u||void 0===u||null===(s=u.data)||void 0===s||null===(o=s.cheapestPriceEver)||void 0===o?void 0:o.price)||"price",deals:(null===u||void 0===u||null===(d=u.data)||void 0===d?void 0:d.deals)||[]}),e.next=6,D.a.get("https://www.cheapshark.com/api/1.0/stores").catch((function(e){console.log("Err",e)}));case 6:b=e.sent,m=(null===b||void 0===b?void 0:b.data)||[],l(m);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){var e=window.location.pathname.split("/");d(e[2])}),[]),Object(c.useEffect)((function(){}),[a]),Object(c.useEffect)((function(){}),[o]);var u;return Object(I.jsx)(m.a,{className:"product-view",children:Object(I.jsxs)(p.a,{container:!0,spacing:4,children:[Object(I.jsx)(p.a,{item:!0,xs:12,md:5,className:"image-wrapper",children:Object(I.jsx)("img",{src:a.thumb,alt:a.title})}),Object(I.jsxs)(p.a,{item:!0,xs:12,md:7,className:"product-data",children:[Object(I.jsxs)("div",{className:"product-title",children:[Object(I.jsx)(w.a,{variant:"h2",children:a.external}),Object(I.jsx)(w.a,{variant:"p",dangerouslySetInnerHTML:(u=a.info,{__html:u})}),Object(I.jsx)(w.a,{variant:"h2",children:Object(I.jsx)("strong",{children:a.title})}),Object(I.jsxs)(w.a,{variant:"h3",children:["Price:$ ",a.cheapPrice]})]}),Object(I.jsx)(m.a,{className:"box",children:((null===a||void 0===a?void 0:a.deals)?a.deals.map((function(e){var t=o.find((function(t){return t.storeID===e.storeID}));console.log(t);var a=(null===t||void 0===t||t.images,"https://img.icons8.com/64/000000/controller.png");return Object(re.a)(Object(re.a)({},e),{},{storeName:t?t.storeName:"Store Name",storeImg:t?a:""})})):[]).map((function(e){return Object(I.jsxs)(p.a,{className:"product-store-box",children:[Object(I.jsx)(w.a,{variant:"h3",children:e.storeName}),Object(I.jsx)("img",{className:"img",src:e.storeImg}),Object(I.jsxs)(w.a,{children:["Price: $ ",e.price]}),Object(I.jsxs)(w.a,{children:["Retail Price: $ ",e.retailPrice]}),Object(I.jsxs)(w.a,{children:["Savings: $ ",parseFloat(e.savings).toFixed(2)]}),Object(I.jsx)(N.a,{size:"large",className:"custom-button",children:"Add to Library"})]},"storeid-".concat(e.storeID))}))})]})]})})});var se=function(){var e=Object(c.useState)(null),t=Object(s.a)(e,2),a=t[0],n=t[1],r=Object(c.useState)(!0),i=Object(s.a)(r,2),u=i[0],j=i[1],b=function(){j(!u)};return Object(c.useEffect)((function(){!function(){var e=localStorage.getItem("user"),t=null!==e?JSON.parse(e):null;n(t)}()}),[]),Object(I.jsx)(I.Fragment,{children:Object(I.jsxs)("div",{className:"App",children:[Object(I.jsx)(W,{setUserState:function(){return n(null)}}),Object(I.jsx)(d.a,{}),Object(I.jsxs)(o.a,{children:[Object(I.jsxs)(l.a,{exact:!0,path:"/",children:[u&&!a&&Object(I.jsx)(ae,{loggedIn:function(e){return n(e)},toggle:function(){return b()}}),!a&&!u&&Object(I.jsx)(ne,{toggle:function(){return b()}}),a&&Object(I.jsx)(_,{})]}),Object(I.jsx)(l.a,{exact:!0,path:"/product-view/:gameID",children:Object(I.jsx)(ie,{})})]}),Object(I.jsx)(z,{})]})})},oe=a(108),le=a(71),de="SET_PRODUCTS",ue="SELECTED_PRODUCT",je={products:[]},be=Object(le.a)({allProducts:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case de:return Object(re.a)(Object(re.a)({},e),{},{products:c});default:return e}},product:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=t.type,c=t.payload;switch(a){case ue:return Object(re.a)(Object(re.a)({},e),c);default:return e}}}),me=Object(le.b)(be,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(I.jsx)(n.a.StrictMode,{children:Object(I.jsx)(oe.a,{store:me,children:Object(I.jsx)(o.a,{children:Object(I.jsx)(se,{})})})}),document.getElementById("root"))}},[[200,1,2]]]);
//# sourceMappingURL=main.d28a8bfa.chunk.js.map