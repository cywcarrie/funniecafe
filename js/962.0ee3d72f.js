"use strict";(self["webpackChunkfunniecafe"]=self["webpackChunkfunniecafe"]||[]).push([[962],{3962:function(t,e,a){a.r(e),a.d(e,{default:function(){return et}});var s=a(6252),i=a(9963),o=a(3577);const n=(0,s._)("div",{class:"d-flex justify-content-center align-items-center my-5 position-relative banner banner1 container-fluid"},[(0,s._)("h2",{class:"position-absolute text-center text-white fw-bolder"},"Your Cart")],-1),c={class:"mb-5"},l={class:"container"},r=(0,s._)("i",{class:"bi bi-arrow-left-square-fill fs-2"},null,-1),d=[r],u={"aria-label":"breadcrumb",class:"mt-3 mb-md-4 d-flex justify-content-start"},p={class:"breadcrumb"},m={class:"breadcrumb-item"},h=(0,s._)("li",{class:"breadcrumb-item active","aria-current":"page"},"Your Cart",-1),b=(0,s._)("div",{class:"d-flex justify-content-center mt-5"},[(0,s._)("h1",{class:"fs-2 fw-bold text-primary"},"Your Cart")],-1),f={class:"row mt-4 mb-5 bg-light rounded-2 py-3"},g={class:"col table-responsive mt-4 mb-4"},_={class:"table align-middle text-center table-light table-borderless"},y=(0,s._)("thead",{class:"table-secondary"},[(0,s._)("tr",{class:"table-nowrap"},[(0,s._)("th",{class:"text-nowrap"},"Product"),(0,s._)("th",{class:"text-nowrap"},"Qty"),(0,s._)("th",{class:"text-end"},"Price"),(0,s._)("th",{class:"text-end"},"Sales"),(0,s._)("th",{class:"text-end"})])],-1),w={class:"text-center"},v=["onClick"],x={key:0,class:"text-success"},C={class:"text-nowrap"},k={class:"d-flex justify-content-center"},$={class:"input-group input-group-sm cart-qty"},q=["disabled","onChange","onUpdate:modelValue"],L={class:"input-group-text"},D={class:"text-end text-nowrap"},j={class:"text-end text-nowrap"},I={key:0,class:"text-success"},S=["disabled","onClick"],U=(0,s._)("i",{class:"bi bi-trash3"},null,-1),z=[U],W=(0,s._)("td",{colspan:"3",class:"text-end fs-4"},"Order Total",-1),Y={class:"text-end fs-4 text-primary fw-bold"},P={key:0},E=(0,s._)("td",{colspan:"3",class:"text-end text-success fs-4"},"Special：",-1),H={class:"text-end text-success fs-4 fw-bold"},V={class:"d-flex justify-content-end align-items-center"},A={key:0,class:"input-group mb-3 coupon-input"},M=(0,s.uE)('<div class="d-flex justify-content-end align-items-center mb-2"><div class="fs-6 fw-bold text-primary"><i class="bi bi-bag-check-fill pe-2"></i>Enter code <span class="fw-bold text-secondary">funniecafe</span> to get <span class="fw-bold text-secondary">20% </span>off your order.</div></div>',1),N={class:"d-flex justify-content-end align-items-center mb-4"},T=(0,s._)("span",null,[(0,s._)("i",{class:"bi bi-clipboard-fill pe-2"}),(0,s._)("span",null,"Copy Code")],-1),Z=[T],F={key:0,class:"d-flex justify-content-between mt-4 mb-4"},R={key:1,class:"py-5 mb-5"},G={class:"text-center pt-4"},K=(0,s._)("h2",{class:"fw-bolder mb-5"},"There are no items in your cart",-1);function O(t,e,a,r,U,T){const O=(0,s.up)("Navbar"),Q=(0,s.up)("LoadingVue"),B=(0,s.up)("RouterLink"),J=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(O),(0,s.Wm)(Q,{active:U.isLoading,loader:"bars",color:"#6c584c",width:70,height:70},null,8,["active"]),n,(0,s._)("section",c,[(0,s._)("div",l,[(0,s._)("a",{href:"#",title:"Previous",class:"text-black-50 hover-nav fw-bold",onClick:e[0]||(e[0]=(0,i.iM)((e=>t.$router.go(-1)),["prevent"]))},d),(0,s._)("nav",u,[(0,s._)("ol",p,[(0,s._)("li",m,[(0,s.Wm)(B,{to:"/",class:"text-dark hover-nav fw-bold"},{default:(0,s.w5)((()=>[(0,s.Uk)("Home")])),_:1})]),h])]),0!==U.cart.total?((0,s.wg)(),(0,s.iD)(s.HY,{key:0},[b,(0,s._)("div",f,[(0,s._)("div",g,[(0,s._)("table",_,[y,(0,s._)("tbody",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(U.cart.carts,(e=>((0,s.wg)(),(0,s.iD)("tr",{class:"table-nowrap",key:e.id},[(0,s._)("td",{class:"text-nowrap fw-bold text-primary cursor-pointer hover-nav",onClick:t=>T.getProduct(e.product_id)},[(0,s.Uk)((0,o.zw)(e.product.category)+" | "+(0,o.zw)(e.product.title)+" ",1),e.coupon?((0,s.wg)(),(0,s.iD)("div",x," Coupon Applied ")):(0,s.kq)("",!0)],8,v),(0,s._)("td",C,[(0,s._)("div",k,[(0,s._)("div",$,[(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",min:"1",disabled:e.id===U.status.loadingItem,onChange:t=>T.updateCart(e),"onUpdate:modelValue":t=>e.qty=t},null,40,q),[[i.nr,e.qty,void 0,{number:!0}]]),(0,s._)("div",L,"/ "+(0,o.zw)(e.product.unit),1)])])]),(0,s._)("td",D,(0,o.zw)(t.$filters.currency(e.product.price)),1),(0,s._)("td",j,[U.cart.final_total!==U.cart.total?((0,s.wg)(),(0,s.iD)("small",I,"Special：")):(0,s.kq)("",!0),(0,s.Uk)(" "+(0,o.zw)(t.$filters.currency(e.final_total)),1)]),(0,s._)("td",null,[(0,s._)("button",{type:"button",class:"btn btn-outline-primary btn-sm",disabled:U.status.loadingItem===e.id,onClick:t=>T.removeCartItem(e.id)},z,8,S)])])))),128))]),(0,s._)("tfoot",null,[(0,s._)("tr",null,[W,(0,s._)("td",Y,(0,o.zw)(t.$filters.currency(U.cart.total)),1)]),U.cart.final_total!==U.cart.total?((0,s.wg)(),(0,s.iD)("tr",P,[E,(0,s._)("td",H,(0,o.zw)(t.$filters.currency(U.cart.final_total)),1)])):(0,s.kq)("",!0)])])]),(0,s._)("div",V,[0!==U.cart.total?((0,s.wg)(),(0,s.iD)("div",A,[(0,s.wy)((0,s._)("input",{type:"text",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=t=>U.coupon_code=t),placeholder:"Enter coupon code"},null,512),[[i.nr,U.coupon_code]]),(0,s._)("button",{class:"btn btn-primary",type:"button",onClick:e[2]||(e[2]=(...t)=>T.addCouponCode&&T.addCouponCode(...t))}," Apply ")])):(0,s.kq)("",!0)]),M,(0,s._)("div",N,[(0,s._)("button",{onClick:e[3]||(e[3]=(...t)=>T.copyCouponCode&&T.copyCouponCode(...t)),class:"btn btn-outline-primary",type:"button"},Z)]),0!==U.cart.total?((0,s.wg)(),(0,s.iD)("div",F,[(0,s.Wm)(B,{class:"btn btn-outline-primary",to:"/products"},{default:(0,s.w5)((()=>[(0,s.Uk)("Continue Shopping")])),_:1}),(0,s.Wm)(B,{class:"btn btn-primary ms-auto",to:"/checkout"},{default:(0,s.w5)((()=>[(0,s.Uk)("Go to Checkout")])),_:1})])):(0,s.kq)("",!0)])],64)):(0,s.kq)("",!0),0===U.cart.total?((0,s.wg)(),(0,s.iD)("div",R,[(0,s._)("div",G,[K,(0,s.Wm)(B,{class:"btn btn-primary btn-lg fw-bold",to:"/products"},{default:(0,s.w5)((()=>[(0,s.Uk)("Shop Now !")])),_:1})])])):(0,s.kq)("",!0)])]),(0,s.Wm)(J)],64)}a(7658);var Q=a(11),B=a(8186),J={components:{Navbar:Q.Z,Footer:B.Z},data(){return{isLoading:!1,carts:[],total:0,final_total:0,coupon_code:"",cart:{},status:{loadingItem:""}}},inject:["emitter"],methods:{getCart(){const t="https://vue3-course-api.hexschool.io/api/funniecafe-api/cart";this.isLoading=!0,this.$http.get(t).then((t=>{this.cart=t.data.data,this.isLoading=!1})).catch((t=>{this.emitter.emit("push-message",{style:"danger",title:`${t.response.data.message}`})}))},updateCart(t){const e=`https://vue3-course-api.hexschool.io/api/funniecafe-api/cart/${t.id}`;this.isLoading=!0,this.status.loadingItem=t.id;const a={product_id:t.product_id,qty:t.qty};this.$http.put(e,{data:a}).then((t=>{t.data.success&&(this.status.loadingItem="",this.getCart(),this.emitter.emit("update-cart"))})).catch((t=>{this.emitter.emit("push-message",{style:"danger",title:`${t.response.data.message}`})}))},removeCartItem(t){this.status.loadingItem=t;const e=`https://vue3-course-api.hexschool.io/api/funniecafe-api/cart/${t}`;this.isLoading=!0,this.$http.delete(e).then((t=>{this.$httpMessageState(t,"removed from cart"),this.emitter.emit("update-cart"),this.status.loadingItem="",this.getCart(),this.isLoading=!1})).catch((t=>{this.emitter.emit("push-message",{style:"danger",title:`${t.response.data.message}`})}))},getProduct(t){this.$router.push(`/product/${t}`)},addCouponCode(){const t="https://vue3-course-api.hexschool.io/api/funniecafe-api/coupon",e={code:this.coupon_code};this.isLoading=!0,this.$http.post(t,{data:e}).then((t=>{this.$httpMessageState(t,"Applied"),this.getCart(),this.isLoading=!1,this.emitter.emit("update-cart")})).catch((t=>{this.emitter.emit("push-message",{style:"danger",title:`${t.response.data.message}`})}))},copyCouponCode(){const t=document.createElement("input"),e="funniecafe";t.select(),t.setSelectionRange(0,99999),navigator.clipboard.writeText(e).then((()=>{this.emitter.emit("push-message",{style:"primary",title:"Successfully Copied"})}))}},created(){this.getCart()}},X=a(3744);const tt=(0,X.Z)(J,[["render",O]]);var et=tt}}]);
//# sourceMappingURL=962.0ee3d72f.js.map