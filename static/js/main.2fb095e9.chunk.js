(this.webpackJsonpshopspree=this.webpackJsonpshopspree||[]).push([[0],{11:function(t,e,n){"use strict";var r=n(10),c=function t(){Object(r.a)(this,t),this.fetchShopProducts=function(e){return{type:t.FETCH_SHOP_PRODUCTS,options:e}},this.setShopProducts=function(e){return{type:t.SET_SHOP_PRODUCTS,shopProducts:e}},this.fetchAllBestSellerProducts=function(){return{type:t.FETCH_ALL_BEST_SELLER_PRODUCTS}},this.setBestSellerProducts=function(e){return{type:t.SET_BEST_SELLER_PRODUCTS,bestSellerProducts:e}},this.fetchShopProductsAndFilters=function(){return{type:t.FETCH_SHOP_PRODUCTS_AND_FILTERS}},this.setShopProductsAndFilters=function(e,n){return{type:t.SET_SHOP_PRODUCTS_AND_FILTERS,shopProducts:e,productFilters:n}}};c.FETCH_SHOP_PRODUCTS_AND_FILTERS="FETCH_SHOP_PRODUCTS_AND_FILTERS",c.SET_SHOP_PRODUCTS_AND_FILTERS="SET_SHOP_PRODUCTS_AND_FILTERS",c.FETCH_SHOP_PRODUCTS="FETCH_SHOP_PRODUCTS",c.SET_SHOP_PRODUCTS="SET_SHOP_PRODUCTS",c.FETCH_ALL_BEST_SELLER_PRODUCTS="FETCH_ALL_BEST_SELLER_PRODUCTS",c.SET_BEST_SELLER_PRODUCTS="SET_BEST_SELLER_PRODUCTS",e.a=c},15:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var r={HOME:"/",CHECKOUT:"/checkout",ALL_PRODUCTS:"/allproducts",ERROR:"/error"}},16:function(t,e,n){"use strict";var r=n(10),c=function t(){Object(r.a)(this,t),this.updateUserFilters=function(e){return{type:t.UPDATE_USER_FILTERS,filters:e}},this.updateUserShopProductsPage=function(e){return{type:t.UPDATE_USER_SHOP_PRODUCTS_PAGE,shopProductsPage:e}},this.addToCart=function(e){return{type:t.ADD_TO_CART,productPurchase:e}},this.removeToCart=function(e){return{type:t.REMOVE_TO_CART,productPurchase:e}},this.cleanCart=function(){return{type:t.CLEAN_CART}}};c.UPDATE_USER_FILTERS="UPDATE_USER_FILTERS",c.UPDATE_USER_SHOP_PRODUCTS_PAGE="UPDATE_USER_SHOP_PRODUCTS_PAGE",c.ADD_TO_CART="ADD_TO_CART",c.REMOVE_TO_CART="REMOVE_TO_CART",c.CLEAN_CART="CLEAN_CART",e.a=c},24:function(t,e,n){"use strict";n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return o}));var r=function(t){return t[0].toUpperCase()+t.substr(1).toLowerCase()},c=function(t){var e=[];return Object.keys(t).forEach((function(n){var r=t[n];r.length&&(e=e.concat(r))})),e},o=function(t,e){var n={};return Object.keys(t).forEach((function(r){e.includes(r)||(n[r]=t[r])})),n}},26:function(t,e,n){"use strict";var r=n(10),c=n(33),o=n.n(c);e.a=function t(){Object(r.a)(this,t),this.getProducts=function(t){var e=t.page,n=t.size,r=t.category,c="page=".concat(e||""),a="&size=".concat(n||""),s="&category=".concat(r?r.join("&category="):"");return o.a.get("http://localhost:1234/product/all?".concat(c).concat(a).concat(s))},this.getProductFilters=function(){return o.a.get("http://localhost:1234/product/filters")},this.postOrder=function(t){var e={order:t};return o.a.post("http://localhost:1234/order",e)}}},39:function(t,e,n){"use strict";n.d(e,"c",(function(){return o})),n.d(e,"b",(function(){return s})),n.d(e,"d",(function(){return i})),n.d(e,"a",(function(){return u}));var r=n(30),c=n(24),o=function(t){var e=null,n=!1,o=[],a={};return t.variants.forEach((function(s){var i=Object(r.a)(Object(r.a)(Object(r.a)({},Object(c.b)(s,["id"])),Object(c.b)(t,["id","variants"])),{},{productId:t.id,variantId:s.id});if(!n&&s.stock&&(n=!0,e=i),s.stock){var u=a[s.size];u&&!u.includes(s.color)?u.push(s.color):u||(a[s.size]=[s.color])}o.push(i)})),{initialVariant:e,variants:o,variantsOptionsAvailable:a}},a=function(t){return parseFloat(t.replace("$",""))},s=function(t,e){var n=a(t);return e.includes("$")?n-a(e):n-n*(parseFloat(e)/100)},i=function(t){var e=t.discount,n=t.price,r=t.quantity;return(e?s(n,e):a(n))*r},u=function(t){var e=t.split("&");return e.length>1?{backgroundImage:"linear-gradient(".concat(e.join(","),")")}:{backgroundColor:t}}},40:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(2),c=(n(1),n(67),function(t){var e=t.children,n=t.type,c=void 0===n?"default":n,o=t.selected,a=t.onClick,s=t.className,i=t.style,u=t.disabled,l=o?"selected":"",d=u?"disabled":"";return Object(r.jsx)("button",{style:i,onClick:a,className:"btn btn-".concat(c," ").concat(l," ").concat(d," ").concat(s||""," "),disabled:u,children:e})})},41:function(t,e,n){"use strict";n.d(e,"a",(function(){return h}));var r=n(10),c=n(20),o=n(22),a=n(21),s=n(2),i=n(1),u=n.n(i),l=n(23),d=n.n(l),h=(n(90),u.a.createContext("light")),p=function(t){Object(o.a)(n,t);var e=Object(a.a)(n);function n(t){var c;return Object(r.a)(this,n),(c=e.call(this,t)).root=void 0,c.el=void 0,c.body=void 0,c.handleChangeTheme=function(){c.setState({theme:"light"===c.state.theme?"dark":"light"})},c.state={theme:"light"},c.root=document.querySelector("#root"),c.el=document.createElement("div"),c.body=document.querySelector("body"),c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.root.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.root.removeChild(this.el)}},{key:"render",value:function(){var t=this.state.theme,e="light"===t;this.body.style.backgroundColor=e?"white":"black";var n=e?"fa-sun-o":"fa-moon-o",r=d.a.createPortal(Object(s.jsx)("i",{onClick:this.handleChangeTheme,className:"fa ".concat(n," theme-context-button ").concat(t),"aria-hidden":"true"}),this.el);return Object(s.jsxs)(h.Provider,{value:t,children:[Object(s.jsx)("div",{className:"app-container ".concat(t),children:this.props.children}),r]})}}]),n}(u.a.Component);e.b=p},61:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},69:function(t,e,n){},71:function(t,e,n){},90:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var r=n(2),c=n(1),o=n.n(c),a=n(23),s=n.n(a),i=(n(61),n(25)),u=n(7),l=n(15),d=n(10),h=n(20),p=n(22),O=n(21),f=n(29),b=n(24),v=n(39),j=(n(66),function(t){var e=t.product,n=t.removeToCart,c=e.title,o=e.image,a=e.size,s=e.color,i=e.quantity,u=Object(v.d)(e);return Object(r.jsxs)("div",{className:"shopping-cart-product-container",children:[Object(r.jsx)("div",{className:"image-container",children:Object(r.jsx)("div",{style:{backgroundImage:"url(".concat(o,")")},className:"product-image"})}),Object(r.jsxs)("div",{className:"product-details",children:[Object(r.jsx)("p",{className:"product-name",children:c}),Object(r.jsx)("p",{children:a}),Object(r.jsx)("p",{children:Object(b.c)(s)}),Object(r.jsxs)("p",{children:["QTY: ",i]}),Object(r.jsxs)("p",{className:"sub-total",children:["Subtotal: $",u]})]}),Object(r.jsx)("div",{onClick:function(){n(e)},className:"close-button",children:Object(r.jsx)("i",{className:"fa fa-times","aria-hidden":"true"})})]})}),S=n(16),P=n(40),_=(n(68),function(t){Object(p.a)(n,t);var e=Object(O.a)(n);function n(t){var c;return Object(d.a)(this,n),(c=e.call(this,t)).root=void 0,c.el=void 0,c.childrenRef=void 0,c.popperRef=void 0,c.renderChildElement=function(){return o.a.cloneElement(c.props.children,{ref:c.childrenRef,onClick:c.handleContentClick})},c.getShowValue=function(){var t=c.props.controlShow,e=c.state.show;return void 0===t?e:t},c.handleContentClick=function(){var t=c.props,e=t.controlShow,n=t.onClick;void 0===e&&c.setState({show:!c.state.show}),n&&n()},c.renderPopover=function(){var t,e=c.props,n=e.content,o=e.position,a=e.popoverBodyClassName,i=c.state,u=i.childrenPosition,l=i.contentWidth;switch(o){case"bottomleft":t={top:u.bottom,left:u.right-l};break;case"bottomright":t={top:u.bottom,left:u.left}}return c.getShowValue()?s.a.createPortal(Object(r.jsx)("div",{style:t,className:"popover-content-container",ref:c.popperRef,children:Object(r.jsx)("div",{className:"popover-body ".concat(a||""),children:n})}),c.el):null},c.root=document.querySelector("#root"),c.el=document.createElement("div"),c.childrenRef=o.a.createRef(),c.popperRef=o.a.createRef(),c.state={show:!1,childrenPosition:{top:0,left:0,right:0,bottom:0},contentWidth:0},c}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.root.appendChild(this.el),setTimeout((function(){var e=t.childrenRef.current;if(e){var n=e.getBoundingClientRect(),r=n.top,c=n.left,o=n.right,a=n.bottom;t.setState({childrenPosition:{top:r,left:c,bottom:a,right:o}})}}),500)}},{key:"componentWillUnmount",value:function(){this.root.removeChild(this.el)}},{key:"componentDidUpdate",value:function(t,e){var n=this.state.contentWidth,r=this.popperRef.current?this.popperRef.current.getBoundingClientRect().width:0;n&&r===n||!this.getShowValue()||this.setState({contentWidth:r})}},{key:"render",value:function(){return Object(r.jsxs)(o.a.Fragment,{children:[this.renderChildElement(),this.renderPopover()]})}}]),n}(o.a.Component)),T=(n(69),function(t){Object(p.a)(n,t);var e=Object(O.a)(n);function n(t){var c;return Object(d.a)(this,n),(c=e.call(this,t)).handlePopoverClick=function(){c.props.cart.length&&c.setState({showPopover:!c.state.showPopover})},c.handleRemoveToCart=function(t){1===c.props.cart.length&&c.setState({showPopover:!1}),c.props.removeToCart(t)},c.getAllProducts=function(){var t=c.props,e=t.cart;t.removeToCart;return e.map((function(t){return Object(r.jsx)(j,{product:t,removeToCart:c.handleRemoveToCart},"".concat(t.productId,"-").concat(t.variantId))}))},c.state={showPopover:!1},c}return Object(h.a)(n,[{key:"render",value:function(){var t=this,e=this.props.cart,n=this.state.showPopover,c=e.length,o=c?Object(r.jsx)("div",{className:"shop-cart-notification",children:c}):null,a=Object(r.jsxs)("div",{className:"shopping-cart-container-popover",children:[Object(r.jsx)("div",{className:"shopping-cart-all-products",children:this.getAllProducts()}),Object(r.jsx)(i.b,{to:l.a.CHECKOUT,component:function(e){var n=e.navigate;return Object(r.jsx)(P.a,{className:"checkout-button",type:"primary",onClick:function(){n(),t.handlePopoverClick()},children:"Checkout"})}})]});return Object(r.jsx)(_,{controlShow:n,onClick:this.handlePopoverClick,position:"bottomleft",content:a,children:Object(r.jsxs)("div",{className:"shopping-cart-container",children:[Object(r.jsx)("i",{className:"nav-item fa fa-shopping-cart"}),o]})})}}]),n}(o.a.Component)),C=Object(f.b)((function(t){return{cart:t.user.cart}}),(function(t){var e=(new S.a).removeToCart;return{removeToCart:function(n){return t(e(n))}}}))(T),E=(n(71),function(){return Object(r.jsxs)("div",{className:"header-nav-container",children:[Object(r.jsxs)("div",{className:"nav-items-left",children:[Object(r.jsx)(i.b,{className:"nav-item shopname",to:l.a.HOME,children:"Shopspree"}),Object(r.jsx)(i.b,{className:"nav-item",to:l.a.ALL_PRODUCTS,children:"All Products"})]}),Object(r.jsx)("div",{className:"nav-items-right",children:Object(r.jsx)(C,{})})]})}),m=n(18),R=n(11),g=n(19),x=n.n(g),D={shopProducts:{products:[],productsCount:0,totalPages:1},productFilters:{gender:[],category:[],trends:[]},bestSellerProducts:[]},U={filters:{gender:[],category:[],trends:[]},shopProductsPage:1,shopProductsSize:2,cart:[]},y=Object(m.combineReducers)({shop:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case R.a.SET_SHOP_PRODUCTS_AND_FILTERS:return x()(t,{shopProducts:{$set:e.shopProducts},productFilters:{$set:e.productFilters}});case R.a.SET_BEST_SELLER_PRODUCTS:return x()(t,{bestSellerProducts:{$set:e.bestSellerProducts}});case R.a.SET_SHOP_PRODUCTS:return x()(t,{shopProducts:{$set:e.shopProducts}});default:return t}},user:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case S.a.UPDATE_USER_FILTERS:return x()(t,{filters:{$set:e.filters}});case S.a.UPDATE_USER_SHOP_PRODUCTS_PAGE:return x()(t,{shopProductsPage:{$set:e.shopProductsPage}});case S.a.ADD_TO_CART:return x()(t,{cart:{$push:[e.productPurchase]}});case S.a.REMOVE_TO_CART:var n=e.productPurchase,r=n.productId,c=n.variantId,o=t.cart.filter((function(t){return t.productId!==r&&t.variantId!==c}));return x()(t,{cart:{$set:o}});case S.a.CLEAN_CART:return x()(t,{cart:{$set:[]}});default:return t}}}),A=n(55),w=n(8),k=n.n(w),L=n(6),F=n(26),H=k.a.mark(z),N=k.a.mark($),I=k.a.mark(M),B=k.a.mark(V);function z(t){var e,n,r,c;return k.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return e=new F.a,n=new R.a,o.prev=2,o.next=5,Object(L.b)(e.getProducts,t.options);case 5:return r=o.sent,c=r.data,o.next=9,Object(L.c)(n.setShopProducts(c));case 9:o.next=14;break;case 11:o.prev=11,o.t0=o.catch(2),console.log("err");case 14:case"end":return o.stop()}}),H,null,[[2,11]])}function $(){var t,e,n,r,c;return k.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=new F.a,e=new R.a,o.prev=2,o.next=5,Object(L.b)(t.getProducts,{category:["best seller"]});case 5:return n=o.sent,r=n.data,c=r.products,o.next=9,Object(L.c)(e.setBestSellerProducts(c));case 9:o.next=14;break;case 11:o.prev=11,o.t0=o.catch(2),console.log(o.t0);case 14:case"end":return o.stop()}}),N,null,[[2,11]])}function M(t){var e,n,r,c,o,a,s,i,u;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=new F.a,n=new R.a,t.prev=2,t.next=5,Object(L.d)((function(t){return t.user}));case 5:return r=t.sent,c={page:r.shopProductsPage,size:r.shopProductsSize},t.next=9,Object(L.b)(e.getProducts,c);case 9:return o=t.sent,t.next=12,Object(L.b)(e.getProductFilters);case 12:return a=t.sent,s=o.data,i=a.data,u=i.productFilters,t.next=17,Object(L.c)(n.setShopProductsAndFilters(s,u));case 17:t.next=22;break;case 19:t.prev=19,t.t0=t.catch(2),console.log(t.t0);case 22:case"end":return t.stop()}}),I,null,[[2,19]])}function V(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.e)(R.a.FETCH_SHOP_PRODUCTS,z);case 2:return t.next=4,Object(L.e)(R.a.FETCH_ALL_BEST_SELLER_PRODUCTS,$);case 4:return t.next=6,Object(L.e)(R.a.FETCH_SHOP_PRODUCTS_AND_FILTERS,M);case 6:case"end":return t.stop()}}),B)}var W=k.a.mark(K),q=k.a.mark(J),G=k.a.mark(Q);function K(t){var e,n,r,c,o,a,s,i;return k.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return e=new F.a,n=new R.a,r=new S.a,u.prev=3,u.next=6,Object(L.d)((function(t){return t.user}));case 6:return c=u.sent,a={page:o=1,size:c.shopProductsSize,category:Object(b.a)(t.filters)},u.next=11,Object(L.b)(e.getProducts,a);case 11:return s=u.sent,i=s.data,u.next=15,Object(L.c)(n.setShopProducts(i));case 15:return u.next=17,Object(L.c)(r.updateUserShopProductsPage(o));case 17:u.next=22;break;case 19:u.prev=19,u.t0=u.catch(3),console.log(u.t0);case 22:case"end":return u.stop()}}),W,null,[[3,19]])}function J(t){var e,n,r,c,o,a;return k.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return e=new F.a,n=new R.a,s.prev=2,s.next=5,Object(L.d)((function(t){return t.user}));case 5:return r=s.sent,c={page:t.shopProductsPage,size:r.shopProductsSize,category:Object(b.a)(r.filters)},s.next=9,Object(L.b)(e.getProducts,c);case 9:return o=s.sent,a=o.data,s.next=13,Object(L.c)(n.setShopProducts(a));case 13:s.next=18;break;case 15:s.prev=15,s.t0=s.catch(2),console.log(s.t0);case 18:case"end":return s.stop()}}),q,null,[[2,15]])}function Q(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.e)(S.a.UPDATE_USER_FILTERS,K);case 2:return t.next=4,Object(L.e)(S.a.UPDATE_USER_SHOP_PRODUCTS_PAGE,J);case 4:case"end":return t.stop()}}),G)}var Y=k.a.mark(X);function X(){return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(L.a)([V(),Q()]);case 2:case"end":return t.stop()}}),Y)}var Z=n(54),tt=n(41),et=function(){return Object(r.jsx)("h1",{children:"Our shop is experiencing some lag. Please try again later."})},nt=function(t){Object(p.a)(n,t);var e=Object(O.a)(n);function n(){return Object(d.a)(this,n),e.apply(this,arguments)}return Object(h.a)(n,[{key:"componentDidCatch",value:function(){this.props.history.push(l.a.ERROR)}},{key:"render",value:function(){return Object(r.jsx)(o.a.Fragment,{children:this.props.children})}}]),n}(o.a.Component),rt=Object(u.g)(nt),ct=Object(A.a)(),ot=Object(m.createStore)(y,Object(Z.composeWithDevTools)(Object(m.applyMiddleware)(ct)));ct.run(X),window.shopspree=ot;var at=o.a.lazy((function(){return n.e(4).then(n.bind(null,112))})),st=o.a.lazy((function(){return n.e(3).then(n.bind(null,110))})),it=o.a.lazy((function(){return n.e(5).then(n.bind(null,111))}));var ut=function(){return Object(r.jsx)(f.a,{store:ot,children:Object(r.jsx)(i.a,{children:Object(r.jsxs)(tt.b,{children:[Object(r.jsx)(E,{}),Object(r.jsx)(rt,{children:Object(r.jsx)(c.Suspense,{fallback:null,children:Object(r.jsxs)(u.d,{children:[Object(r.jsx)(u.b,{exact:!0,component:it,path:l.a.CHECKOUT}),Object(r.jsx)(u.b,{exact:!0,component:st,path:l.a.ALL_PRODUCTS}),Object(r.jsx)(u.b,{exact:!0,component:et,path:l.a.ERROR}),Object(r.jsx)(u.b,{exact:!0,component:at,path:l.a.HOME}),Object(r.jsx)(u.a,{to:"/"})]})})})]})})})},lt=function(t){t&&t instanceof Function&&n.e(6).then(n.bind(null,109)).then((function(e){var n=e.getCLS,r=e.getFID,c=e.getFCP,o=e.getLCP,a=e.getTTFB;n(t),r(t),c(t),o(t),a(t)}))};s.a.render(Object(r.jsx)(o.a.StrictMode,{children:Object(r.jsx)(ut,{})}),document.getElementById("root")),lt()}},[[91,1,2]]]);
//# sourceMappingURL=main.2fb095e9.chunk.js.map