"use strict";(self.webpackChunkreact_shopping_cart=self.webpackChunkreact_shopping_cart||[]).push([[155],{"./src/components/order/OrderSummary.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:function(){return order_OrderSummary}});var _templateObject,_templateObject2,OrderSummary_templateObject,OrderSummary_templateObject2,_templateObject3,_templateObject4,_templateObject5,_templateObject6,_templateObject7,_templateObject8,_templateObject9,_templateObject10,_templateObject11,_templateObject12,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js"),es=__webpack_require__("./node_modules/recoil/es/index.js"),recoilCart=__webpack_require__("./src/recoils/recoilCart.ts"),constants=__webpack_require__("./src/constants/index.ts"),recoilChecked=__webpack_require__("./src/recoils/recoilChecked.ts"),TotalProductPrice=(0,es.nZ)({key:constants.lU.TOTAL_PRODUCT_PRICE_VALUE,get:function get(_ref){var _get=_ref.get,cart=_get(recoilCart.xI),checkedItems=_get(recoilChecked.i4);return cart.reduce((function(totalPrice,item){return checkedItems[item.id]?totalPrice+item.quantity*item.product.price:totalPrice}),0)}}),Button=__webpack_require__("./src/components/common/Button.tsx"),recoilApiBaseUrl=__webpack_require__("./src/recoils/recoilApiBaseUrl.ts"),useMutation=__webpack_require__("./src/hooks/useMutation.ts"),regeneratorRuntime=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/regeneratorRuntime.js"),objectSpread2=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),react=__webpack_require__("./node_modules/react/index.js"),process=__webpack_require__("./node_modules/process/browser.js"),useQuery=function useQuery(url,isAutorization){var _useState=(0,react.useState)({}),_useState2=(0,slicedToArray.Z)(_useState,2),state=_useState2[0],setState=_useState2[1],data=state.data,error=state.error;(0,react.useEffect)((function(){fetchData()}),[url]);var fetchData=function(){var _ref=(0,asyncToGenerator.Z)((0,regeneratorRuntime.Z)().mark((function _callee(){var requestOptions,response,contentType,_data;return(0,regeneratorRuntime.Z)().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.prev=0,requestOptions={headers:{}},isAutorization&&(requestOptions.headers={Authorization:"Basic ".concat(btoa(process.env.REACT_APP_API_CREDENTIAL))}),_context.next=5,fetch(url,requestOptions);case 5:if(response=_context.sent,contentType=response.headers.get("content-type"),!response.ok||"application/json"!==contentType){_context.next=12;break}return _context.next=10,response.json();case 10:_data=_context.sent,setState((function(prev){return(0,objectSpread2.Z)((0,objectSpread2.Z)({},prev),{},{data:_data})}));case 12:_context.next=17;break;case 14:_context.prev=14,_context.t0=_context.catch(0),console.log(_context.t0);case 17:case"end":return _context.stop()}}),_callee,null,[[0,14]])})));return function fetchData(){return _ref.apply(this,arguments)}}();return{data:data,error:error}},localeString=__webpack_require__("./src/utils/localeString.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),ToastMessage=function ToastMessage(_ref){var children=_ref.children,setToast=_ref.setToast;return(0,react.useEffect)((function(){setTimeout((function(){setToast(!1)}),1500)}),[setToast]),(0,jsx_runtime.jsx)(Style.Container,{children:(0,jsx_runtime.jsx)(Style.Text,{children:children})})},Style={Container:styled_components_browser_esm.zo.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.Z)(["\n    position: fixed;\n    z-index: 99;\n    top: 75%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 24rem;\n    height: 2.625rem;\n    border-radius: 10px;\n    box-shadow: 0 0 15px 0 var(--black-40);\n    background-color: #323232;\n  "]))),Text:styled_components_browser_esm.zo.div(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    font-weight: bold;\n    letter-spacing: 0.29px;\n    text-align: center;\n    margin-top: 0.6rem;\n  "])))};try{ToastMessage.displayName="ToastMessage",ToastMessage.__docgenInfo={description:"",displayName:"ToastMessage",props:{setToast:{defaultValue:null,description:"",name:"setToast",required:!0,type:{name:"(isToast: boolean) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/common/ToastMessage.tsx#ToastMessage"]={docgenInfo:ToastMessage.__docgenInfo,name:"ToastMessage",path:"src/components/common/ToastMessage.tsx#ToastMessage"})}catch(__react_docgen_typescript_loader_error){}var OrderSummary_Style={OrderSummary:styled_components_browser_esm.zo.section(OrderSummary_templateObject||(OrderSummary_templateObject=(0,taggedTemplateLiteral.Z)(["\n    position: -webkit-sticky;\n    position: sticky;\n    top: 100px;\n\n    width: 370px;\n    height: fit-content;\n\n    margin-top: 45px;\n\n    border: 1px solid var(--grey-200);\n\n    @media screen and (max-width: 500px) {\n      display: none;\n    }\n  "]))),OrderSummaryHeader:styled_components_browser_esm.zo.h2(OrderSummary_templateObject2||(OrderSummary_templateObject2=(0,taggedTemplateLiteral.Z)(["\n    padding: 22px 30px;\n\n    border-bottom: 3px solid var(--grey-200);\n\n    color: var(--grey-400);\n\n    font-size: 24px;\n\n    letter-spacing: 0.5px;\n  "]))),Content:styled_components_browser_esm.zo.div(_templateObject3||(_templateObject3=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n    padding: 36px;\n  "]))),Prices:styled_components_browser_esm.zo.div(_templateObject4||(_templateObject4=(0,taggedTemplateLiteral.Z)(["\n    padding: 0 6px;\n\n    width: 100%;\n  "]))),Price:styled_components_browser_esm.zo.div(_templateObject5||(_templateObject5=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    justify-content: space-between;\n\n    width: 100%;\n\n    margin-bottom: 42px;\n\n    font-style: normal;\n    font-weight: 700;\n    font-size: 18px;\n\n    letter-spacing: 0.5px;\n\n    &:first-child,\n    &:nth-child(3) {\n      margin-bottom: 20px;\n    }\n  "]))),PointWrapper:styled_components_browser_esm.zo.div(_templateObject6||(_templateObject6=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    flex-direction: column;\n\n    & > span {\n      margin-top: 9px;\n      color: red;\n      font-size: 9px;\n      text-align: center;\n    }\n  "]))),PointInput:styled_components_browser_esm.zo.input(_templateObject7||(_templateObject7=(0,taggedTemplateLiteral.Z)(["\n    width: 120px;\n    height: 32px;\n    font-size: 15px;\n\n    text-align: right;\n\n    border: 0.5px solid gray;\n\n    background-color: rgb(245, 245, 245);\n\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  "])))},Mobile={OrderSummary:styled_components_browser_esm.zo.div(_templateObject8||(_templateObject8=(0,taggedTemplateLiteral.Z)(["\n    position: fixed;\n    bottom: 0;\n    right: 0;\n\n    display: flex;\n    justify-content: space-between;\n\n    width: 100%;\n    height: 150px;\n\n    padding: 16px;\n\n    background-color: var(--grey-500);\n    color: var(--grey-100);\n\n    border-top: 2px solid var(--grey-400);\n\n    z-index: 100;\n\n    @media screen and (min-width: 501px) {\n      display: none;\n    }\n  "]))),Prices:styled_components_browser_esm.zo.div(_templateObject9||(_templateObject9=(0,taggedTemplateLiteral.Z)(["\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n\n    width: 100%;\n  "]))),Price:styled_components_browser_esm.zo.div(_templateObject10||(_templateObject10=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    flex-direction: column;\n\n    justify-content: center;\n    align-items: center;\n\n    font-size: 12px;\n\n    & > div {\n      display: inline-block;\n    }\n\n    & > div:last-child {\n      font-weight: 600;\n      margin-top: 10px;\n    }\n  "]))),PointWrapper:styled_components_browser_esm.zo.div(_templateObject11||(_templateObject11=(0,taggedTemplateLiteral.Z)(["\n    display: flex;\n    flex-direction: row;\n\n    & > div {\n      margin-top: 9px;\n      color: red;\n      font-size: 9px;\n      text-align: center;\n    }\n  "]))),PointInput:styled_components_browser_esm.zo.input(_templateObject12||(_templateObject12=(0,taggedTemplateLiteral.Z)(["\n    width: 100px;\n    height: 15px;\n    font-size: 15px;\n\n    text-align: right;\n\n    border: 0.5px solid gray;\n\n    background-color: rgb(245, 245, 245);\n\n    &::-webkit-outer-spin-button,\n    &::-webkit-inner-spin-button {\n      -webkit-appearance: none;\n      margin: 0;\n    }\n  "])))},order_OrderSummary=function OrderSummary(){var cart=(0,recoilCart.Kp)(),_useState=(0,react.useState)(0),_useState2=(0,slicedToArray.Z)(_useState,2),usePoint=_useState2[0],setUsePoint=_useState2[1],baseUrl=(0,recoilApiBaseUrl.BY)(),mutation=(0,useMutation.D)(constants.PG.POST).mutation,point=useQuery(baseUrl+"/point",!0).data,discount=useQuery(baseUrl+"/order-policy",!0).data,cartOrder=cart.map((function(product){return{cartItemId:Number(product.id),quantity:product.quantity}})),setCart=(0,recoilCart.Po)(),setChecked=(0,recoilChecked.YG)(),_useState3=(0,react.useState)(!1),_useState4=(0,slicedToArray.Z)(_useState3,2),toast=_useState4[0],setToast=_useState4[1],totalProductPrice=function useTotalProductPrice(){return(0,es.sJ)(TotalProductPrice)}();if(!point||!discount)return(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{});var postCart={totalProductsPrice:totalProductPrice,shippingFee:totalProductPrice>=discount.freeShippingThreshold?constants.xE:constants.$6,usedPoint:usePoint,order:cartOrder},orderOnClick=function orderOnClick(){mutation(baseUrl+"/orders",postCart),setCart([]),setChecked({all:!0}),setToast(!0)},pointChange=function pointChange(e){setUsePoint(Number(e.target.value))};return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(OrderSummary_Style.OrderSummary,{children:[toast&&(0,jsx_runtime.jsx)(ToastMessage,{setToast:setToast,children:"주문 등록이 완료되었습니다."}),(0,jsx_runtime.jsx)(OrderSummary_Style.OrderSummaryHeader,{children:"결제예상금액"}),(0,jsx_runtime.jsxs)(OrderSummary_Style.Content,{children:[(0,jsx_runtime.jsxs)(OrderSummary_Style.Prices,{children:[(0,jsx_runtime.jsxs)(OrderSummary_Style.Price,{children:[(0,jsx_runtime.jsx)("span",{children:"총 상품가격"}),(0,jsx_runtime.jsxs)("span",{children:[(0,localeString.y)(totalProductPrice,constants.MV.KOREA),"원"]})]}),(0,jsx_runtime.jsxs)(OrderSummary_Style.Price,{children:[(0,jsx_runtime.jsx)("span",{children:"총 배송비"}),(0,jsx_runtime.jsxs)("span",{children:[totalProductPrice>=discount.freeShippingThreshold?constants.xE:(0,localeString.y)(constants.$6,constants.MV.KOREA),"원"]})]}),(0,jsx_runtime.jsxs)(OrderSummary_Style.Price,{children:[(0,jsx_runtime.jsx)("span",{children:"보유 포인트"}),(0,jsx_runtime.jsx)("span",{children:point?(0,localeString.y)(point.usablePoint,constants.MV.KOREA)+"원":"0원"})]}),(0,jsx_runtime.jsxs)(OrderSummary_Style.Price,{children:[(0,jsx_runtime.jsx)("span",{children:"사용할 포인트"}),(0,jsx_runtime.jsxs)(OrderSummary_Style.PointWrapper,{children:[(0,jsx_runtime.jsx)(OrderSummary_Style.PointInput,{type:"number",value:usePoint===constants.xE?"":usePoint,onChange:pointChange}),(0,jsx_runtime.jsx)("span",{children:(null==point?void 0:point.usablePoint)>=usePoint?"":"포인트가 부족합니다."})]})]}),(0,jsx_runtime.jsxs)(OrderSummary_Style.Price,{children:[(0,jsx_runtime.jsx)("span",{children:"총 주문금액"}),(0,jsx_runtime.jsxs)("span",{children:[totalProductPrice>=discount.freeShippingThreshold?(0,localeString.y)(totalProductPrice-usePoint,constants.MV.KOREA):(0,localeString.y)(totalProductPrice+constants.$6-usePoint,constants.MV.KOREA),"원"]})]})]}),(0,jsx_runtime.jsx)(Button.z,{designType:"rectangle",onClick:orderOnClick,disabled:Boolean(totalProductPrice<usePoint||(null==point?void 0:point.usablePoint)&&(null==point?void 0:point.usablePoint)<usePoint),children:"주문하기"})]})]})}),(0,jsx_runtime.jsx)(jsx_runtime.Fragment,{children:(0,jsx_runtime.jsxs)(Mobile.OrderSummary,{children:[toast&&(0,jsx_runtime.jsx)(ToastMessage,{setToast:setToast,children:"주문 등록이 완료되었습니다."}),(0,jsx_runtime.jsxs)(Mobile.Prices,{children:[(0,jsx_runtime.jsxs)(Mobile.Price,{children:[(0,jsx_runtime.jsx)("div",{children:"총 상품가격"}),(0,jsx_runtime.jsxs)("div",{children:[(0,localeString.y)(totalProductPrice,constants.MV.KOREA),"원"]})]}),(0,jsx_runtime.jsxs)(Mobile.Price,{children:[(0,jsx_runtime.jsx)("div",{children:"배송비"}),(0,jsx_runtime.jsxs)("div",{children:[" ",totalProductPrice>=discount.freeShippingThreshold?constants.xE:(0,localeString.y)(constants.$6,constants.MV.KOREA),"원"]})]}),(0,jsx_runtime.jsxs)(Mobile.Price,{children:[(0,jsx_runtime.jsx)("div",{children:"보유 포인트"}),(0,jsx_runtime.jsx)("div",{children:point?(0,localeString.y)(point.usablePoint,constants.MV.KOREA)+"원":"0원"})]}),(0,jsx_runtime.jsxs)(Mobile.Price,{children:[(0,jsx_runtime.jsx)("div",{children:"총 주문금액"}),(0,jsx_runtime.jsxs)("div",{children:[totalProductPrice>=discount.freeShippingThreshold?(0,localeString.y)(totalProductPrice-usePoint,constants.MV.KOREA):(0,localeString.y)(totalProductPrice+constants.$6-usePoint,constants.MV.KOREA),"원"]})]}),(0,jsx_runtime.jsxs)(Mobile.Price,{children:[(0,jsx_runtime.jsx)("div",{children:"사용할 포인트"}),(0,jsx_runtime.jsx)(Mobile.PointWrapper,{children:(0,jsx_runtime.jsx)(Mobile.PointInput,{type:"number",value:usePoint===constants.xE?"":usePoint,onChange:pointChange})})]}),(0,jsx_runtime.jsx)(Mobile.Price,{children:(0,jsx_runtime.jsx)(Mobile.PointWrapper,{children:(0,jsx_runtime.jsx)("div",{children:(null==point?void 0:point.usablePoint)>=usePoint?"":"포인트 초과"})})})]}),(0,jsx_runtime.jsx)(Button.z,{designType:"rectangle",onClick:orderOnClick,disabled:Boolean(totalProductPrice<usePoint||(null==point?void 0:point.usablePoint)&&(null==point?void 0:point.usablePoint)<usePoint),children:"주문하기"})]})})]})}}}]);