(this.webpackJsonpshopspree=this.webpackJsonpshopspree||[]).push([[5],{105:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},108:function(e,t,a){},111:function(e,t,a){"use strict";a.r(t);var c=a(10),r=a(20),n=a(22),i=a(21),s=a(2),o=a(1),l=a.n(o),d=a(29),u=a(7),h={XS:"Xtra Small",S:"Small",M:"Medium",L:"Large",XL:"Xtra Large"},j=a(24),p=a(39),m=(a(105),function(e){var t=e.product,a=t.title,c=t.image,r=t.size,n=t.color,i=t.quantity,o=Object(p.d)(t),l=Object(p.a)(n);return Object(s.jsxs)("div",{className:"checkout-page-product-container",children:[Object(s.jsx)("div",{className:"image-container",children:Object(s.jsx)("div",{style:{backgroundImage:"url(".concat(c,")")},className:"product-image"})}),Object(s.jsxs)("div",{className:"product-details",children:[Object(s.jsx)("p",{className:"product-name",children:a}),Object(s.jsx)("p",{children:h[r]}),Object(s.jsx)("div",{title:Object(j.c)(n),style:l,className:"color"})]}),Object(s.jsx)("div",{className:"quantity",children:Object(s.jsxs)("p",{children:["QTY: ",i]})}),Object(s.jsx)("div",{className:"subtotal-price",children:Object(s.jsxs)("p",{children:["Subtotal: $",o]})})]})}),b=a(42),O=a(30),v=a(26),f=a(15),y={completeName:"Complete Name (LastName, FirstName M.I.)",address:"Address (House #, Lot, Blk, Street)",city:"City",stateOrProvince:"State/Province",mobileNo:"Mobile #"},C="Calc(100% - 20px)",x="Please complete this field.",N={completeName:"",address:"",city:"",stateOrProvince:"",mobileNo:""},k=a(40),g=(a(106),function(e){var t=e.onChange,a=e.error,c=e.positive,r=e.inputStyle,n=e.inputContainerStyle,i=e.label,o=e.inputRef,l=(a?"error-ui":c&&"positive-ui")||"";return Object(s.jsxs)("div",{style:n,className:"input-container",children:[Object(s.jsx)("div",{className:"label",children:i}),Object(s.jsx)("input",{ref:o,style:r,onChange:t,className:l}),a&&Object(s.jsx)("div",{className:"error-message",children:a})]})}),S=a(92),P=(a(107),function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).fieldRefs={},r.validateInputField=function(e,t){var a=t?"":x;r.setState({error:Object(O.a)(Object(O.a)({},r.state.error),{},Object(b.a)({},e,a))})},r.handleInputOnChange=function(e){return function(t){var a=r.state.hasCompletePurchaseClick,c=t.currentTarget.value;r.setState(Object(b.a)({},e,c)),a&&r.validateInputField(e,c)}},r.renderInputFields=function(){var e=r.state.error;return Object.keys(y).map((function(t){var a=t,c=y[a];return Object(s.jsx)(g,{inputContainerStyle:{marginBottom:"10px"},inputStyle:{width:C},label:c,onChange:r.handleInputOnChange(a),error:e[a],positive:!!r.state[a],inputRef:r.fieldRefs[a]},c)}))},r.allFieldsAreValid=function(){var e=!1,t=Object(O.a)({},N),a=!1;return Object.keys(y).forEach((function(c){var n=c;if(!r.state[n]&&(t[n]=x,e=!0,!a)){a=!0;var i=r.fieldRefs[n];i.current&&i.current.focus()}})),r.setState({error:t}),!e},r.handleButtonClick=function(){var e=r.props.cart;(r.setState({hasCompletePurchaseClick:!0}),r.allFieldsAreValid())&&(new v.a).postOrder({cart:e,user:Object(O.a)({},Object(j.b)(r.state,["error","hasCompletePurchaseClick"]))}).then((function(){r.setState({showThankyouModal:!0})}))},r.handleShopMoreClick=function(){var e=r.props,t=e.cleanCart,a=e.history;t(),a.push(f.a.ALL_PRODUCTS)},r.state=Object(O.a)(Object(O.a)({},N),{},{error:Object(O.a)({},N),hasCompletePurchaseClick:!1,showThankyouModal:!1}),Object.keys(y).forEach((function(e){var t=e;r.fieldRefs[t]=l.a.createRef()})),r}return Object(r.a)(a,[{key:"render",value:function(){var e=this.state.showThankyouModal;return Object(s.jsxs)("div",{className:"customer-info-container",children:[Object(s.jsx)("div",{className:"heading text",children:"Billing Information"}),this.renderInputFields(),Object(s.jsx)(k.a,{style:{width:C},type:"primary",onClick:this.handleButtonClick,className:"complete-purchase-btn",children:"Complete Purchase"}),Object(s.jsxs)(S.a,{modalBodyClassName:"customer-info-modal-body",show:e,children:[Object(s.jsx)("div",{className:"header",children:"Thank you! We have received your order!"}),Object(s.jsx)("p",{children:"Please wait 5 to 10 business days for your items to arrived."}),Object(s.jsx)(k.a,{type:"primary",onClick:this.handleShopMoreClick,children:"Shop More"})]})]})}}]),a}(l.a.Component)),M=a(16),I=(a(108),function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(c.a)(this,a);for(var r=arguments.length,n=new Array(r),i=0;i<r;i++)n[i]=arguments[i];return(e=t.call.apply(t,[this].concat(n))).getCartDetails=function(){var t=e.props.cart,a=[],c=0;return t.forEach((function(e,t){t>0&&a.push(Object(s.jsx)("div",{className:"divider"},"divider-".concat(t))),a.push(Object(s.jsx)(m,{product:e},"".concat(e.productId,"-").concat(e.variantId))),c+=Object(p.d)(e)})),{cartItems:a,totalPrice:c}},e}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props,t=e.cart,a=e.cleanCart,c=e.history,r=this.getCartDetails(),n=r.cartItems,i=r.totalPrice;return t.length?Object(s.jsxs)("div",{className:"checkout-page-container",children:[Object(s.jsxs)("div",{className:"cart-items-container",children:[Object(s.jsxs)("div",{className:"cart-items-header",children:[Object(s.jsxs)("p",{children:["Items: ",t.length]}),Object(s.jsxs)("div",{className:"shipping-container",children:[Object(s.jsx)("i",{className:"fa fa-truck","aria-hidden":"true"}),Object(s.jsx)("label",{children:"Free Shipping"})]})]}),Object(s.jsx)("div",{className:"cart-items",children:n}),Object(s.jsxs)("div",{className:"cart-items-footer",children:[Object(s.jsx)("div",{className:"text",children:"Total"}),Object(s.jsxs)("div",{className:"total-price",children:["$",i]})]})]}),Object(s.jsx)(P,{history:c,cart:t,cleanCart:a})]}):Object(s.jsx)(u.a,{to:f.a.HOME})}}]),a}(l.a.Component));t.default=Object(d.b)((function(e){return{cart:e.user.cart}}),(function(e){var t=(new M.a).cleanCart;return{cleanCart:function(){return e(t())}}}))(I)},92:function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var c=a(10),r=a(20),n=a(22),i=a(21),s=a(2),o=a(1),l=a.n(o),d=a(23),u=a.n(d),h=(a(93),function(e){Object(n.a)(a,e);var t=Object(i.a)(a);function a(e){var r;return Object(c.a)(this,a),(r=t.call(this,e)).root=void 0,r.el=void 0,r.removeOnClickPropagation=function(e){e.stopPropagation()},r.onClickOutsideModalBody=function(){var e=r.props.onClickOutsideModalBody;e&&e()},r.root=document.querySelector("#root"),r.el=document.createElement("div"),r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){this.root.appendChild(this.el)}},{key:"componentWillUnmount",value:function(){this.root.removeChild(this.el)}},{key:"render",value:function(){var e=this.props,t=e.show,a=void 0===t||t,c=e.modalBodyClassName;return a?u.a.createPortal(Object(s.jsxs)("div",{onClick:this.removeOnClickPropagation,className:"modal-container",children:[Object(s.jsx)("div",{onClick:this.onClickOutsideModalBody,className:"modal-overlay"}),Object(s.jsx)("div",{className:"modal-body ".concat(c||""),children:this.props.children})]}),this.el):null}}]),a}(l.a.Component))},93:function(e,t,a){}}]);
//# sourceMappingURL=5.8718357c.chunk.js.map