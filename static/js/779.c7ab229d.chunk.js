"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[779],{3124:function(n,e,i){i.d(e,{f:function(){return y}});var r,t,a,d,o,s,c,p,x,l,h,f=i(168),u=i(7689),m=i(2978),g=i(3763),j=i(8186),w=i(9174),b=i(184),z=function(n){var e=n.orderDetail;return(0,b.jsxs)(P.Product,{children:[(0,b.jsx)(P.ProductImage,{path:e.product.imageUrl}),(0,b.jsxs)(P.ProductInformation,{children:[(0,b.jsx)(P.ProductName,{children:e.product.name}),(0,b.jsxs)(P.ProductPriceAndQuantity,{children:[(0,w.y)(e.product.price,g.MV.KOREA),"\uc6d0 / \uc218\ub7c9 : ",e.quantity,"\uac1c"]})]})]})},P={Product:m.zo.div(r||(r=(0,f.Z)(["\n    display: flex;\n\n    background: #ffffff;\n    border: 1px solid #aaaaaa;\n  "]))),ProductImage:m.zo.div(t||(t=(0,f.Z)(["\n    width: 141px;\n    height: 142px;\n\n    object-fit: cover;\n\n    margin: 40px 20px;\n\n    background-image: ",";\n    background-repeat: no-repeat;\n    background-position: center;\n    background-size: cover;\n\n    @media screen and (max-width: 500px) {\n      width: 96px;\n      height: 98px;\n\n      margin: 10px;\n    }\n  "])),(function(n){return"url(".concat(n.path,")")})),ProductInformation:m.zo.div(a||(a=(0,f.Z)(["\n    display: flex;\n    flex-direction: column;\n  "]))),ProductName:m.zo.span(d||(d=(0,f.Z)(["\n    font-size: 20px;\n    line-height: 24px;\n\n    letter-spacing: 0.5px;\n\n    margin: 42px 0 30px 0;\n\n    color: #333333;\n\n    @media screen and (max-width: 500px) {\n      margin: 30px 0 10px 0;\n    }\n  "]))),ProductPriceAndQuantity:m.zo.span(o||(o=(0,f.Z)(["\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 20px;\n\n    letter-spacing: 0.5px;\n\n    color: #888888;\n\n    @media screen and (max-width: 500px) {\n      font-size: 15px;\n    }\n  "])))},y=function(n){var e=n.order,i=n.isDetail,r=(0,j.o$)(),t=(0,u.s0)();return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)(v.OrderNumberAndDetail,{children:[(0,b.jsxs)(v.OrderNumberAndDate,{children:[(0,b.jsxs)(v.OrderNumber,{children:["\uc8fc\ubb38\ubc88\ud638 : ",e.orderId]}),(0,b.jsxs)(v.OrderDate,{children:["\uc8fc\ubb38\ub0a0\uc9dc : ",e.orderDate.split(" ")[0]]})]}),i?"":(0,b.jsx)(v.OrderDetail,{onClick:function(){r(e.orderId),t(g.mD.ORDER_DETAIL)},children:"\uc0c1\uc138\ubcf4\uae30"})]}),(0,b.jsx)(v.OrderProducts,{children:e.orderDetails&&e.orderDetails.map((function(n){return(0,b.jsx)(z,{orderDetail:n},n.product.id)}))})]})},v={OrderNumberAndDetail:m.zo.div(s||(s=(0,f.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    width: 100%;\n    height: 92px;\n\n    padding: 0 30px;\n\n    background: #f6f6f6;\n    border: 1px solid #aaaaaa;\n\n    font-weight: 400;\n    font-size: 20px;\n    line-height: 24px;\n\n    letter-spacing: 0.5px;\n\n    @media screen and (max-width: 700px) {\n      font-size: 15px;\n    }\n  "]))),OrderNumberAndDate:m.zo.div(c||(c=(0,f.Z)(["\n    display: flex;\n  "]))),OrderNumber:m.zo.span(p||(p=(0,f.Z)(["\n    color: #333333;\n  "]))),OrderDate:m.zo.span(x||(x=(0,f.Z)(["\n    margin-left: 40px;\n\n    color: #333333;\n  "]))),OrderDetail:m.zo.span(l||(l=(0,f.Z)(["\n    text-align: right;\n\n    cursor: pointer;\n\n    color: #000000;\n  "]))),OrderProducts:m.zo.div(h||(h=(0,f.Z)(["\n    margin-bottom: 50px;\n  "])))}},3779:function(n,e,i){i.r(e),i.d(e,{default:function(){return y}});var r,t,a,d,o,s,c,p=i(168),x=i(2978),l=i(1895),h=i(1140),f=i(8186),u=i(5359),m=i(3124),g=i(3763),j=i(9174),w=i(184),b=function(n){var e=n.totalPrice,i=n.usedPoint,r=n.shippingFee;return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(z.PaymentAmount,{children:"\uacb0\uc81c\uae08\uc561 \uc815\ubcf4"}),(0,w.jsxs)(z.TotalPriceInformations,{children:[(0,w.jsxs)(z.Information,{children:[(0,w.jsx)("span",{children:"\ucd1d \uacb0\uc81c\uae08\uc561"}),(0,w.jsxs)("span",{children:[(0,j.y)(e-i+r,g.MV.KOREA),"\uc6d0"]})]}),(0,w.jsxs)(z.Information,{children:[(0,w.jsx)("span",{children:"\ubc30\uc1a1\ube44"}),(0,w.jsxs)("span",{children:[(0,j.y)(r,g.MV.KOREA),"\uc6d0"]})]}),(0,w.jsxs)(z.Information,{children:[(0,w.jsx)("span",{children:"\uc0ac\uc6a9\ud55c \ud3ec\uc778\ud2b8"}),(0,w.jsxs)("span",{children:[(0,j.y)(i,g.MV.KOREA),"\uc6d0"]})]})]})]})},z={PaymentAmount:x.zo.div(r||(r=(0,p.Z)(["\n    display: flex;\n    align-items: center;\n\n    width: 560px;\n    height: 92px;\n\n    padding: 0 30px;\n\n    background: #f6f6f6;\n    border: 1px solid #aaaaaa;\n\n    font-weight: 700;\n    font-size: 28px;\n    line-height: 28px;\n\n    letter-spacing: 0.5px;\n\n    color: #333333;\n\n    @media screen and (max-width: 700px) {\n      width: 500px;\n    }\n\n    @media screen and (max-width: 600px) {\n      width: 300px;\n\n      font-size: 20px;\n    }\n  "]))),TotalPriceInformations:x.zo.div(t||(t=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n\n    width: 560px;\n    height: 115px;\n\n    padding: 0 30px;\n\n    background: #ffffff;\n    border: 1px solid #aaaaaa;\n\n    @media screen and (max-width: 700px) {\n      width: 500px;\n    }\n\n    @media screen and (max-width: 600px) {\n      width: 300px;\n    }\n  "]))),Information:x.zo.div(a||(a=(0,p.Z)(["\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n\n    width: 560px;\n\n    padding: 0 30px;\n\n    & > span {\n      font-size: 24px;\n      line-height: 24px;\n\n      color: #333333;\n    }\n\n    @media screen and (max-width: 700px) {\n      width: 500px;\n    }\n\n    @media screen and (max-width: 600px) {\n      width: 300px;\n\n      & > span {\n        font-weight: 400;\n        font-size: 15px;\n        line-height: 20px;\n\n        letter-spacing: 0.5px;\n\n        color: #333333;\n      }\n    }\n  "])))},P={OrderDetailWrapper:x.zo.div(d||(d=(0,p.Z)(["\n    width: 100%;\n    padding: 0 10%;\n\n    margin-bottom: 140px;\n  "]))),PageTitle:x.zo.div(o||(o=(0,p.Z)(["\n    text-align: center;\n\n    margin-bottom: 30px;\n    padding: 0 0 30px 0;\n\n    font-size: 32px;\n    font-weight: 700;\n\n    border-bottom: 4px solid var(--grey-400);\n\n    @media screen and (max-width: 500px) {\n      font-size: 20px;\n      padding: 16px 0;\n    }\n  "]))),Main:x.zo.div(s||(s=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    @media screen and (min-width: 501px) {\n      justify-content: space-between;\n    }\n\n    @media screen and (max-width: 500px) {\n      font-size: 20px;\n\n      margin-bottom: 80px;\n    }\n  "]))),Price:x.zo.div(c||(c=(0,p.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: flex-end;\n\n    margin-top: 28px;\n\n    @media screen and (max-width: 700px) {\n      align-items: center;\n    }\n  "])))},y=function(){var n=(0,h.BY)(),e=(0,f.bZ)(),i=(0,l.a)(n+"/orders/"+e,!0).data;return i?(0,w.jsx)(u.A,{children:(0,w.jsxs)(P.OrderDetailWrapper,{children:[(0,w.jsx)(P.PageTitle,{children:"\uc8fc\ubb38 \ub0b4\uc5ed \uc0c1\uc138"}),(0,w.jsx)(P.Main,{children:(0,w.jsx)(m.f,{order:i,isDetail:!0})}),(0,w.jsx)(P.Price,{children:(0,w.jsx)(b,{totalPrice:i.totalProductsPrice,usedPoint:i.usedPoint,shippingFee:i.shippingFee})})]})}):(0,w.jsx)(w.Fragment,{})}},8186:function(n,e,i){i.d(e,{bZ:function(){return d},o$:function(){return o}});var r=i(5330),t=i(7554),a=(0,r.cn)({key:"orderDetailState",default:0,effects:[(0,t.N)("orderDetailNumber")]}),d=function(){return(0,r.sJ)(a)},o=function(){return(0,r.Zl)(a)}},9174:function(n,e,i){i.d(e,{y:function(){return r}});var r=function(n,e){return n.toLocaleString(e)}}}]);
//# sourceMappingURL=779.c7ab229d.chunk.js.map