(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__2fM8O",control:"Checkout_control__2eyIy",actions:"Checkout_actions__2Hi0P",submit:"Checkout_submit__1ce-s",invalid:"Checkout_invalid__3-UGa"}},,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__vzHa0",total:"Cart_total__2eGro",delivery:"Cart_delivery__1Mu8H",actions:"Cart_actions__1WjU2","button--alt":"Cart_button--alt__2HE6d",button:"Cart_button__UFFpv",orderConfirmed:"Cart_orderConfirmed__KyOuS",pizzaImage:"Cart_pizzaImage__3bvZb"}},,function(e,t,n){e.exports={button:"HeaderCartButton_button__eQtbq",icon:"HeaderCartButton_icon__lWm7V",badge:"HeaderCartButton_badge__2hlQF",bump:"HeaderCartButton_bump__32TLn",cart:"HeaderCartButton_cart__3ycEw"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3MY83",summary:"CartItem_summary__xPm89",price:"CartItem_price__29Nnm",amount:"CartItem_amount__30Txm",actions:"CartItem_actions__2E3m3"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__IMlXn",description:"MealItem_description__3Ff9C",price:"MealItem_price__2ct5w",title:"MealItem_title__JKGcF"}},,,function(e,t,n){e.exports={header:"Header_header__1cM8q",logo:"Header_logo__1iWne","main-image":"Header_main-image__1RoZ3"}},function(e,t,n){e.exports={summary:"MealsSummary_summary__1BTNU",title:"MealsSummary_title__1SDCp",content:"MealsSummary_content__3hETK"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1PggW","meals-appear":"AvailableMeals_meals-appear__1hJEd",loading:"AvailableMeals_loading__1y5_3",pizzaError:"AvailableMeals_pizzaError__Rnz-y"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__2znzX",modal:"Modal_modal__2QgxK","slide-down":"Modal_slide-down__Y0TjC"}},,,function(e,t,n){e.exports={card:"Card_card__2N-0v"}},function(e,t,n){e.exports={input:"Input_input__3Lg_X"}},function(e,t,n){e.exports={form:"MealItemForm_form__2GhM6"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var c=n(9),a=n.n(c),i=(n(27),n(2)),r=n(1),s=n.n(r),o=n.p+"static/media/pizza.9d5a8c5c.jpeg",l=n(0),u=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},d=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),j=n(7),m=n.n(j),b=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useContext)(d),o=s.items.reduce((function(e,t){return e+t.amount}),0),j="".concat(m.a.button," ").concat(c?m.a.bump:""),b=s.items;return Object(r.useEffect)((function(){if(0!==b.length){a(!0);var e=setTimeout((function(){a(!1)}),300);return function(){clearTimeout(e)}}}),[b]),Object(l.jsxs)("button",{className:j,onClick:e.onClick,children:[Object(l.jsx)("span",{className:m.a.icon,children:Object(l.jsx)(u,{})}),Object(l.jsx)("div",{className:m.a.cart,children:" Your Cart"}),Object(l.jsx)("span",{className:m.a.badge,children:o})]})},O=n(14),p=n.n(O),x=function(e){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsxs)("header",{className:p.a.header,children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",className:p.a.logo}),Object(l.jsx)(b,{onClick:e.onShowCart})]}),Object(l.jsx)("div",{className:p.a["main-image"],children:Object(l.jsx)("img",{src:o,alt:"pizza"})})]})},f=n(15),h=n.n(f),v=function(){return Object(l.jsxs)("section",{className:h.a.summary,children:[Object(l.jsx)("div",{className:h.a.title,children:"Best toppings, Best pizza"}),Object(l.jsx)("div",{className:h.a.content,children:"Choose your favorite pizza from our selection of affordable pizza and enjoy a delicious lunch or dinner at home."})]})},I=n(13),C=n(6),E=n.n(C),A=n(16),g=n.n(A),M=n(20),Q=n.n(M),y=function(e){return Object(l.jsx)("div",{className:Q.a.card,children:e.children})},k=n(11),S=n.n(k),z=n(4),N=n(21),w=n.n(N),H=s.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:w.a.input,children:[Object(l.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(l.jsx)("input",Object(z.a)({ref:t},e.input))]})})),R=n(22),P=n.n(R),T=function(e){var t=Object(r.useState)(!0),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useRef)();return Object(l.jsxs)("form",{className:P.a.form,onSubmit:function(t){t.preventDefault();var n=s.current.value,c=+n;0===n.trim().length||c<1||c>10?a(!1):e.onAddToCart(c)},children:[Object(l.jsx)(H,{ref:s,label:"Amount",input:{id:"amount"+e.id,type:"number",min:"1",max:"10",step:"1",defaultValue:"1"}}),Object(l.jsx)("button",{children:"+ Add"}),!c&&Object(l.jsx)("p",{children:"Please enter a valid amount (1-10)"})]})},F=function(e){var t=Object(r.useContext)(d),n="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:S.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{className:S.a.title,children:e.name}),Object(l.jsx)("div",{className:S.a.description,children:e.description}),Object(l.jsx)("div",{className:S.a.price,children:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)(T,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},B=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(!0),s=Object(i.a)(a,2),o=s[0],u=s[1],d=Object(r.useState)(),j=Object(i.a)(d,2),m=j[0],b=j[1];if(Object(r.useEffect)((function(){var e=function(){var e=Object(I.a)(E.a.mark((function e(){var t,n,a,i;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pizzaordering-app-default-rtdb.firebaseio.com/pizza.json");case 2:return t=e.sent,e.next=5,t.json();case 5:if(n=e.sent,t.ok){e.next=8;break}throw new Error("Something went wrong!");case 8:for(i in a=[],n)a.push({id:i,name:n[i].name,description:n[i].description,price:n[i].price});c(a),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().catch((function(e){u(!1),b(e.message)}))}),[]),o)return Object(l.jsx)("section",{className:g.a.loading,children:Object(l.jsx)("p",{children:"Loading..."})});if(m)return Object(l.jsx)("section",{className:g.a.pizzaError,children:Object(l.jsx)("p",{children:m})});var O=n.map((function(e){return Object(l.jsx)(F,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(l.jsx)("section",{className:g.a.meals,children:Object(l.jsx)(y,{children:Object(l.jsx)("ul",{children:O})})})},J=function(){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)(v,{}),Object(l.jsx)(B,{})]})},G=n(5),_=n.n(G),L=n(17),X=n.n(L),Z=function(e){return Object(l.jsx)("div",{className:X.a.backdrop,onClick:e.onHideCart})},K=function(e){return Object(l.jsx)("div",{className:X.a.modal,children:Object(l.jsx)("div",{className:X.a.content,children:e.children})})},D=document.getElementById("overlays"),W=function(e){return Object(l.jsxs)(r.Fragment,{children:[a.a.createPortal(Object(l.jsx)(Z,{onHideCart:e.onHideCart}),D),a.a.createPortal(Object(l.jsx)(K,{children:e.children}),D)]})},U=n(8),Y=n.n(U),V=function(e){var t="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:Y.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:Y.a.summary,children:[Object(l.jsx)("span",{className:Y.a.price,children:t}),Object(l.jsxs)("span",{className:Y.a.amount,children:["x ",e.amount]})]})]}),Object(l.jsxs)("div",{className:Y.a.actions,children:[Object(l.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(l.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},q=n(3),$=n.n(q),ee=function(e){return""===e.trim()},te=function(e){var t=Object(r.useState)({name:!0,number:!0,street:!0,city:!0,zipcode:!0}),n=Object(i.a)(t,2),c=n[0],a=n[1],s=Object(r.useRef)(),o=Object(r.useRef)(),u=Object(r.useRef)(),d=Object(r.useRef)(),j=Object(r.useRef)(),m="".concat($.a.control," ").concat(c.name?"":$.a.invalid),b="".concat($.a.control," ").concat(c.number?"":$.a.invalid),O="".concat($.a.control," ").concat(c.street?"":$.a.invalid),p="".concat($.a.control," ").concat(c.city?"":$.a.invalid),x="".concat($.a.control," ").concat(c.zipcode?"":$.a.invalid);return Object(l.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n=s.current.value,c=o.current.value,i=u.current.value,r=d.current.value,l=j.current.value,m=!ee(n),b=!ee(c),O=!ee(i),p=!ee(r),x=5===l.trim().length;a({name:m,number:b,street:O,city:p,zipcode:x}),m&&b&&O&&p&&x&&e.onConfirm({name:n,number:c,street:i,city:r,zipcode:l})},className:$.a.form,children:[Object(l.jsxs)("div",{className:m,children:[Object(l.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(l.jsx)("input",{type:"text",id:"name",ref:s}),!c.name&&Object(l.jsx)("p",{children:"Please enter a valid name."})]}),Object(l.jsxs)("div",{className:b,children:[Object(l.jsx)("label",{htmlFor:"name",children:"Mobile number"}),Object(l.jsx)("input",{type:"text",id:"mobile",ref:o}),!c.number&&Object(l.jsx)("p",{children:"Please enter a valid mobile number."})]}),Object(l.jsxs)("div",{className:O,children:[Object(l.jsx)("label",{htmlFor:"street",children:"Street"}),Object(l.jsx)("input",{type:"text",id:"street",ref:u}),!c.street&&Object(l.jsx)("p",{children:"Please enter a valid street."})]}),Object(l.jsxs)("div",{className:p,children:[Object(l.jsx)("label",{htmlFor:"city",children:"City"}),Object(l.jsx)("input",{type:"text",id:"city",ref:d}),!c.city&&Object(l.jsx)("p",{children:"Please enter a valid city."})]}),Object(l.jsxs)("div",{className:x,children:[Object(l.jsx)("label",{htmlFor:"zipcode",children:"Zip code"}),Object(l.jsx)("input",{type:"text",id:"zipcode",ref:j}),!c.zipcode&&Object(l.jsx)("p",{children:"Please enter a valid zip code (5 Characters long)."})]}),Object(l.jsxs)("div",{className:$.a.actions,children:[Object(l.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(l.jsx)("button",{className:$.a.submit,children:"confirm"})]})]})},ne=n.p+"static/media/pizzaOrderConfirmation.fd2e95c5.jpeg",ce=function(e){var t=Object(r.useState)(!1),n=Object(i.a)(t,2),c=n[0],a=n[1],o=Object(r.useState)(!1),u=Object(i.a)(o,2),j=u[0],m=u[1],b=Object(r.useState)(!1),O=Object(i.a)(b,2),p=O[0],x=O[1],f=Object(r.useContext)(d),h="$".concat(f.totalAmount.toFixed(2)),v=f.items.length>0,C=function(e){f.removeItem(e)},A=function(e){f.addItem(Object(z.a)(Object(z.a)({},e),{},{amount:1}))},g=function(){var e=Object(I.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),e.next=3,fetch("https://pizzaordering-app-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderItems:f.items})});case 3:a(!1),m(!0),f.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=Object(l.jsxs)("div",{className:_.a.actions,children:[Object(l.jsx)("button",{className:_.a["button--alt"],onClick:e.onHideCart,children:"Close"}),v&&Object(l.jsx)("button",{className:_.a.button,onClick:function(){x(!0)},children:"Order"})]}),Q=Object(l.jsx)("ul",{className:_.a["cart-items"],children:f.items.map((function(e){return Object(l.jsx)(V,{name:e.name,amount:e.amount,price:e.price,onRemove:C.bind(null,e.id),onAdd:A.bind(null,e)},e.id)}))}),y=Object(l.jsxs)(s.a.Fragment,{children:[Q,Object(l.jsxs)("div",{className:_.a.total,children:[Object(l.jsx)("span",{children:"Total Amount"}),Object(l.jsx)("span",{children:h})]}),p&&Object(l.jsx)(te,{onConfirm:g,onCancel:e.onHideCart}),!p&&M]}),k=Object(l.jsx)("p",{children:"Sending order data..."}),S=Object(l.jsxs)(s.a.Fragment,{children:[Object(l.jsx)("div",{className:_.a.orderConfirmed,children:Object(l.jsx)("p",{children:"THANKS FOR YOUR ORDER !"})}),Object(l.jsx)("div",{className:_.a.pizzaImage,children:Object(l.jsx)("img",{src:ne,alt:"pizzaOrder"})}),Object(l.jsx)("div",{className:_.a.actions,children:Object(l.jsx)("button",{className:_.a.button,onClick:e.onHideCart,children:"Close"})})]});return Object(l.jsxs)(W,{onHideCart:e.onHideCart,children:[!c&&!j&&y,c&&k,!c&&j&&S]})},ae=n(19),ie={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,c=e.totalAmount+t.item.price*t.item.amount,a=e.items.findIndex((function(e){return e.id===t.item.id})),i=e.items[a];if(i){var r=Object(z.a)(Object(z.a)({},i),{},{amount:i.amount+t.item.amount});(n=Object(ae.a)(e.items))[a]=r}else n=e.items.concat(t.item);return{items:n,totalAmount:c}}if("REMOVE"===t.type){var s,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)s=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(z.a)(Object(z.a)({},l),{},{amount:l.amount-1});(s=Object(ae.a)(e.items))[o]=d}return{items:s,totalAmount:u}}return t.type,ie},se=function(e){var t=Object(r.useReducer)(re,ie),n=Object(i.a)(t,2),c=n[0],a=n[1],s={items:c.items,totalAmount:c.totalAmount,addItem:function(e){a({type:"ADD",item:e})},removeItem:function(e){a({type:"REMOVE",id:e})},clearCart:function(){a({type:"CLEAR"})}};return Object(l.jsx)(d.Provider,{value:s,children:e.children})};var oe=function(){var e=Object(r.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(l.jsxs)(se,{children:[n&&Object(l.jsx)(ce,{onHideCart:function(){c(!1)}}),Object(l.jsx)(x,{onShowCart:function(){c(!0)}}),Object(l.jsx)("main",{children:Object(l.jsx)(J,{})})]})};a.a.render(Object(l.jsx)(oe,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.759feaff.chunk.js.map