(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{1789:function(e,n,t){Promise.resolve().then(t.bind(t,5014))},5014:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return L}});var i=t(7437),r=t(2265),s=t(6548),c=t(7770),a=t(2197),l=t(8929),o=t(6645),d=t(8884),h=t(2674),x=t(511),j=t(4691),u=t(7116),Z=t(6351),p=t(359),m=t(335),y=t(2326),g=t(8402),f=t(9806),C=t(5253),v=t(7590),b=t(1665);function w(){return(0,i.jsxs)(x.Z,{variant:"body2",color:"text.secondary",align:"center",children:["Copyright \xa9 ",(0,i.jsx)(b.Z,{color:"inherit",children:"Fe Lounge"})," ",new Date().getFullYear(),"."]})}let k=[{id:1,name:"Item 1",description:"This is a cool item",price:10},{id:2,name:"Item 2",description:"Another great item",price:20}];var q=t(2960),_=t(1326),F=()=>{let e=(0,q.Z)();return(0,i.jsx)(_.Z,{sx:{backgroundColor:e.palette.primary.main,display:"flex",justifyContent:"center",alignItems:"center",minHeight:"10vh"},children:(0,i.jsx)(x.Z,{variant:"h3",component:"h1",children:"Fe Lounge"})})};function L(){let[e,n]=(0,r.useState)(k.map(e=>({...e,quantity:0}))),[t,b]=(0,r.useState)(""),q=e.filter(e=>{let n=t.toLowerCase();return e.name.toLowerCase().includes(n)||e.description.toLowerCase().includes(n)}),_=(e,t)=>{n(n=>n.map(n=>e===n.id?{...n,quantity:Math.max(0,t+n.quantity)}:n))},L=()=>n(e=>e.map(e=>({...e,quantity:0})));return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(F,{}),(0,i.jsxs)(c.Z,{children:[(0,i.jsx)(f.Z,{sx:{height:96,display:"flex",justifyContent:"space-between"},children:(0,i.jsx)(g.Z,{value:t,onChange:e=>{b(e.target.value)},placeholder:"Search item...",startAdornment:(0,i.jsx)(y.Z,{position:"start"})})}),(0,i.jsx)(h.Z,{children:(0,i.jsxs)(o.Z,{children:[(0,i.jsx)(j.Z,{children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(Z.Z,{sx:{width:"75%"},children:"Name"}),(0,i.jsx)(Z.Z,{children:"Price"}),(0,i.jsx)(Z.Z,{})]})}),(0,i.jsx)(d.Z,{children:q.map(e=>(0,i.jsxs)(u.Z,{children:[(0,i.jsxs)(Z.Z,{children:[(0,i.jsx)(x.Z,{variant:"body1",children:e.name}),(0,i.jsx)(x.Z,{variant:"caption",children:e.description})]}),(0,i.jsx)(Z.Z,{children:"".concat("₹"," ").concat(e.price.toFixed(2))}),(0,i.jsx)(Z.Z,{children:(0,i.jsxs)(l.Z,{direction:"row",spacing:1,alignItems:"center",justifyContent:"right",children:[(0,i.jsx)(m.Z,{onClick:()=>_(e.id,-1),children:(0,i.jsx)(v.Z,{})}),(0,i.jsx)(x.Z,{variant:"body2",children:e.quantity}),(0,i.jsx)(m.Z,{onClick:()=>_(e.id,1),children:(0,i.jsx)(C.Z,{})})]})})]},e.id))}),(0,i.jsx)(p.Z,{children:(0,i.jsxs)(u.Z,{children:[(0,i.jsx)(Z.Z,{sx:{fontWeight:"bold"},variant:"body",children:"Total:"}),(0,i.jsx)(Z.Z,{sx:{fontWeight:"bold"},variant:"body",children:"".concat("₹"," ").concat(e.reduce((e,n)=>e+n.price*n.quantity,0).toFixed(2))}),(0,i.jsxs)(Z.Z,{style:{textAlign:"right"},children:[" ",(0,i.jsx)(s.Z,{variant:"contained",color:"error",onClick:()=>L(),children:"Clear Cart"})]})]})})]})})]}),(0,i.jsx)(w,{})]})}}},function(e){e.O(0,[687,335,971,23,744],function(){return e(e.s=1789)}),_N_E=e.O()}]);