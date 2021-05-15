(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={page1:"Cart_page1__2JiVs","cart-items":"Cart_cart-items__1hM_p",total:"Cart_total__2qOYT",page2:"Cart_page2__3Iv7Y",actions:"Cart_actions__3jffe","button--alt":"Cart_button--alt__gT7Mr",button:"Cart_button__2CnNi"}},function(e,t,n){e.exports={container:"Checkout_container__1icZu","fade-in":"Checkout_fade-in__1koZF",form:"Checkout_form__1eOz2",control:"Checkout_control__1qPXq",actions:"Checkout_actions__3DAeX",submit:"Checkout_submit__2eE8f",invalid:"Checkout_invalid__EPv46"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2zRtZ",icon:"HeaderCartButton_icon__298l0",text:"HeaderCartButton_text__1u9R8",badge:"HeaderCartButton_badge__2B74R",bump:"HeaderCartButton_bump__33KME"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2jRJo",summary:"CartItem_summary__SXEH-",price:"CartItem_price__2Ctrp",amount:"CartItem_amount__3a2hx",actions:"CartItem_actions__2Nasb"}},,function(e,t,n){e.exports={container:"AvailableMeals_container__1kuMl",meals:"AvailableMeals_meals__1G4AH","meals-appear":"AvailableMeals_meals-appear__1ifyH",loading:"AvailableMeals_loading__Zy894",error:"AvailableMeals_error__3t7x4"}},,,,function(e,t,n){e.exports={backdrop:"Modal_backdrop__1m69w",modal:"Modal_modal__2HQKr","fade-in":"Modal_fade-in__3Hxdk",content:"Modal_content__yj5ss"}},,,function(e,t,n){e.exports={header:"Header_header__2QxIk",container:"Header_container__1uQ42"}},function(e,t,n){e.exports={meal:"MealItem_meal__Lpf1K",title:"MealItem_title__3Kz_m",price:"MealItem_price__1j6cu"}},function(e,t,n){e.exports={card:"Card_card__31uUo"}},function(e,t,n){e.exports={input:"Input_input__ZYy-S"}},function(e,t,n){e.exports={form:"MealItemForm_form__1S2P-"}},function(e,t,n){e.exports={footer:"Footer_footer__xGkNQ"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(11),c=n.n(a),r=(n(27),n(2)),i=n(17),s=n.n(i),o=n(1),l=n.n(o),u=l.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=n(0),d=function(){return Object(j.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(j.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(7),b=n.n(m),O=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(o.useContext)(u).items,s=i.reduce((function(e,t){return e+t.amount}),0),l="".concat(b.a.button," ").concat(a?b.a.bump:"");return Object(o.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(j.jsxs)("button",{className:l,onClick:e.onClick,children:[Object(j.jsx)("span",{className:b.a.icon,children:Object(j.jsx)(d,{})}),Object(j.jsx)("span",{className:b.a.text,children:"Your cart"}),Object(j.jsx)("span",{className:b.a.badge,children:s})]})},x=function(e){return Object(j.jsx)("header",{className:s.a.header,children:Object(j.jsxs)("div",{className:s.a.container,children:[Object(j.jsxs)("h1",{children:["Food",Object(j.jsx)("span",{children:"space"})]}),Object(j.jsx)(O,{onClick:e.onShowCart})]})})},h=n(6),p=n.n(h),f=n(13),_=n(19),v=n.n(_),C=function(e){return Object(j.jsx)("div",{className:v.a.card,children:e.children})},N=n(5),y=n(20),g=n.n(y),k=l.a.forwardRef((function(e,t){return Object(j.jsxs)("div",{className:g.a.input,children:[Object(j.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(j.jsx)("input",Object(N.a)({ref:t},e.input))]})})),A=n(21),I=n.n(A),H=function(e){var t=Object(o.useRef)();return Object(j.jsxs)("form",{className:I.a.form,onSubmit:function(n){n.preventDefault();var a=t.current.value,c=+a;0===a.trim().length||c<1||a>5||(t.current.value="1",t.current.blur(),e.onAddToCart(c))},children:[Object(j.jsx)(k,{label:"Amount",input:{id:"amount",type:"number",defaultValue:"1"},ref:t}),Object(j.jsx)("button",{type:"submit",children:"Add"})]})},M=n(18),w=n.n(M),S=function(e){var t=Object(o.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:w.a.meal,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:e.name}),Object(j.jsx)("div",{className:w.a.price,children:n})]}),Object(j.jsx)("div",{children:Object(j.jsx)(H,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,price:e.price,amount:n})}})})]})},F=n(10),R=n.n(F),E=function(){var e,t=Object(o.useState)([]),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(o.useState)(!0),s=Object(r.a)(i,2),l=s[0],u=s[1],d=Object(o.useState)(!1),m=Object(r.a)(d,2),b=m[0],O=m[1];if(Object(o.useEffect)((function(){(function(){var e=Object(f.a)(p.a.mark((function e(){var t,n,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://foodspaceendpoint-default-rtdb.firebaseio.com/meals.json");case 3:if((t=e.sent).ok){e.next=6;break}throw new Error("Something went wrong!");case 6:return e.next=8,t.json();case 8:for(r in n=e.sent,a=[],n)a.push({id:r,name:n[r].name,price:n[r].price});c(a),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),O(!0);case 17:u(!1);case 18:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(){return e.apply(this,arguments)}})()()}),[]),l&&(e=Object(j.jsx)("section",{className:R.a.loading,children:Object(j.jsx)("p",{children:"Loading..."})})),b&&(e=Object(j.jsx)("section",{className:R.a.error,children:Object(j.jsx)("p",{children:"Failed to fetch data"})})),!l&&!b){var x=a.map((function(e){return Object(j.jsx)(S,{id:e.id,name:e.name,price:e.price},e.id)}));e=Object(j.jsx)("section",{className:R.a.meals,children:Object(j.jsx)(C,{children:Object(j.jsx)("ul",{children:x})})})}return Object(j.jsx)("div",{className:R.a.container,children:e})},P=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(E,{})})},B=n(14),T=n.n(B),D=function(e){return Object(j.jsx)(j.Fragment,{children:c.a.createPortal(Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:T.a.backdrop,onClick:e.onClose}),Object(j.jsx)("div",{className:T.a.modal,children:Object(j.jsx)("div",{className:T.a.content,children:e.children})})]}),document.getElementById("overlays"))})},z=n(8),Y=n.n(z),J=function(e){var t="$".concat(e.price.toFixed(2));return Object(j.jsxs)("li",{className:Y.a["cart-item"],children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:e.name}),Object(j.jsxs)("div",{className:Y.a.summary,children:[Object(j.jsx)("span",{className:Y.a.price,children:t}),Object(j.jsxs)("span",{className:Y.a.amount,children:["x ",e.amount]})]})]}),Object(j.jsxs)("div",{className:Y.a.actions,children:[Object(j.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(j.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=n(4),K=n.n(Z),Q=function(e){return""===e.trim()},V=function(e){var t=Object(o.useState)({name:!0,city:!0,postal:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(o.useRef)(),s=Object(o.useRef)(),l=Object(o.useRef)();return Object(j.jsxs)("div",{className:K.a.container,children:[Object(j.jsx)("h1",{children:"Your details"}),Object(j.jsxs)("form",{className:K.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=s.current.value,r=l.current.value,o=!Q(n),u=!Q(a),j=!Q(r);c({name:o,city:u,postal:j}),o&&u&j&&e.onConfirm({name:n,city:a,postal:r})},children:[Object(j.jsxs)("div",{className:"".concat(K.a.control," ").concat(a.name?"":K.a.invalid),children:[Object(j.jsx)("label",{htmlFor:"name",children:"Name"}),Object(j.jsx)("input",{type:"text",id:"name",ref:i}),Object(j.jsx)("p",{children:"Please enter a valid name"})]}),Object(j.jsxs)("div",{className:"".concat(K.a.control," ").concat(a.city?"":K.a.invalid),children:[Object(j.jsx)("label",{htmlFor:"city",children:"City"}),Object(j.jsx)("input",{type:"text",id:"city",ref:s}),Object(j.jsx)("p",{children:"Please enter a valid city"})]}),Object(j.jsxs)("div",{className:"".concat(K.a.control," ").concat(a.postal?"":K.a.invalid),children:[Object(j.jsx)("label",{htmlFor:"postal",children:"Postal"}),Object(j.jsx)("input",{type:"text",id:"postal",ref:l}),Object(j.jsx)("p",{children:"Please enter a valid postal"})]}),Object(j.jsxs)("div",{className:K.a.actions,children:[Object(j.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(j.jsx)("button",{type:"submit",className:K.a.submit,children:"Confirm"})]})]})]})},q=n(3),L=n.n(q),X=function(e){var t=Object(o.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(o.useState)(!1),s=Object(r.a)(i,2),l=s[0],d=s[1],m=Object(o.useState)(!1),b=Object(r.a)(m,2),O=b[0],x=b[1],h=Object(o.useContext)(u),_=function(e){h.removeItem(e)},v=function(e){h.addItem(Object(N.a)(Object(N.a)({},e),{},{amount:1}))},C=function(){c((function(e){return!e}))},y=function(){var e=Object(f.a)(p.a.mark((function e(t){return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.next=3,fetch("https://foodspaceendpoint-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,items:h.items})});case 3:d(!1),x(!0),h.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=h.items.length>0,k=h.items.map((function(e){return Object(j.jsx)(J,{name:e.name,price:e.price,amount:e.amount,onRemove:_.bind(null,e.id),onAdd:v.bind(null,e)},e.id)})),A="$".concat(h.totalAmount.toFixed(2)),I=Object(j.jsxs)("div",{className:L.a.actions,children:[Object(j.jsx)("button",{className:L.a["button--alt"],onClick:e.onHideCart,children:"Close"}),Object(j.jsx)("button",{className:L.a.button,onClick:C,children:"Order"})]}),H=Object(j.jsxs)("div",{className:L.a.page1,children:[!a&&(g?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("ul",{className:L.a["cart-items"],children:k}),Object(j.jsxs)("div",{className:L.a.total,children:[Object(j.jsx)("span",{children:"Total amount"}),Object(j.jsx)("span",{children:A})]}),I]}):Object(j.jsxs)("div",{className:L.a.page2,children:[Object(j.jsx)("p",{children:"Your cart is empty!"}),Object(j.jsx)("div",{className:L.a.actions,children:Object(j.jsx)("button",{className:L.a.button,onClick:e.onHideCart,children:"Close"})})]})),a&&Object(j.jsx)(V,{onConfirm:y,onCancel:C})]}),M=Object(j.jsx)("div",{className:L.a.page2,children:Object(j.jsx)("p",{children:"Placing your order..."})}),w=Object(j.jsxs)("div",{className:L.a.page2,children:[Object(j.jsx)("p",{children:"Order placed succesfully!"}),Object(j.jsx)("div",{className:L.a.actions,children:Object(j.jsx)("button",{className:L.a.button,onClick:e.onHideCart,children:"Close"})})]});return Object(j.jsxs)(D,{onClose:e.onHideCart,children:[!l&&!O&&H,l&&M,O&&w]})},$=n(15),G={items:[],totalAmount:0},U=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id}));if(-1!==c){var r=e.items[c],i=Object(N.a)(Object(N.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object($.a)(e.items))[c]=i}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(l.amount>1){var j=Object(N.a)(Object(N.a)({},l),{},{amount:l.amount-1});(s=Object($.a)(e.items))[o]=j}else(s=Object($.a)(e.items)).splice(o,1);return{items:s,totalAmount:u}}return t.type,G},W=function(e){var t=Object(o.useReducer)(U,G),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(j.jsx)(u.Provider,{value:i,children:e.children})},ee=n(22),te=n.n(ee),ne=function(){return Object(j.jsx)("div",{className:te.a.footer,children:Object(j.jsxs)("p",{children:["Built by"," ",Object(j.jsx)("a",{href:"https://shashiirk.github.io/portfolio",target:"_blank",rel:"noreferrer",children:"Shashikanth"})]})})};var ae=function(){var e=Object(o.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return document.body.style=n?"overflow-y: hidden":"",Object(j.jsxs)(W,{children:[n&&Object(j.jsx)(X,{onHideCart:function(){a(!1)}}),Object(j.jsx)(x,{onShowCart:function(){a(!0)}}),Object(j.jsx)("main",{className:"main",children:Object(j.jsx)(P,{})}),Object(j.jsx)(ne,{})]})};c.a.render(Object(j.jsx)(ae,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.75ecf419.chunk.js.map