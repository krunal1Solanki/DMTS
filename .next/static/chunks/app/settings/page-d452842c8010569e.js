(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[938],{17350:function(e,t,r){Promise.resolve().then(r.bind(r,83867))},83867:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return page}});var s=r(57437),i=r(2265),l=r(2762),n=r(94854),d=r(24033),o=r(51791),c=r(98386),a=r(93628),u=r(42226),h=r(15650),x=r(26281),j=r(87347),p=r(22086),g=r(92173),f=r(1107),y=r(20678),S=r(16988),m=r(13266),v=r(39933),b=r(53494),C=r(26621),w=r(56641),T=r(10056),_=r(22043),q=r(52736),Q=r(17885),k=r(97464),A=r(32527),E=r(71504),Z=r(13621),O=r(5242);let getStatusBadge=e=>{switch(e){case"pending":return(0,s.jsx)(f.C,{colorScheme:"orange",children:"Pending"});case"resolved":return(0,s.jsx)(f.C,{colorScheme:"green",children:"Resolved"});case"hold":return(0,s.jsx)(f.C,{colorScheme:"red",children:"Hold"});default:return null}};var Components_QueryDisplay=()=>{let[e,t]=(0,i.useState)([]),[r,l]=(0,i.useState)([]),[n,d]=(0,i.useState)("all"),[o,c]=(0,i.useState)(!1),[a,u]=(0,i.useState)(!1),h=(0,y.p)();(0,i.useEffect)(()=>{getAllQueries()},[]),(0,i.useEffect)(()=>{if("all"===n)l(e);else{let t=e.filter(e=>e.queryStatus===n);l(t)}},[e,n]);let getAllQueries=async()=>{u(!0);try{let e=await g.Z.get("/api/setting/getQuery"),r=e.data.message.map(e=>({...e,isModified:!1}));t(r),u(!1)}catch(e){console.error("Error fetching queries:",e),h({title:"Error",description:"An error occurred while fetching queries.",status:"error",position:"top-right",duration:3e3,isClosable:!0})}},handleSelectChange=(r,s)=>{let i=[...e];i[r].queryStatus=s,i[r].isModified=!0,t(i),c(!0)},handleQueryStatusSubmit=async(r,s)=>{try{await g.Z.post("/api/setting/updateQueryStatus",{_id:r,queryStatus:s}),h({title:"Submit Successful",description:"Query status updated successfully for query with ID ".concat(r),status:"success",position:"top-right",duration:3e3,isClosable:!0});let i=[...e];i.find(e=>e._id===r).isModified=!1,t(i),c(!1)}catch(e){console.error("Error updating query status:",e),h({title:"Submit Error",description:"An error occurred while updating query status for query with ID ".concat(r),status:"error",position:"top-right",duration:3e3,isClosable:!0})}};return(0,s.jsxs)(S.Z,{children:[(0,s.jsx)(m.O,{bg:"teal.500",borderBottomWidth:"1px",borderColor:"teal.600",color:"white",textAlign:"center",padding:"4",children:(0,s.jsx)(v.X,{size:"md",textTransform:"uppercase",children:"All Queries"})}),(0,s.jsxs)(b.e,{children:[(0,s.jsx)(C.k,{justifyContent:"flex-end",children:(0,s.jsxs)(w.P,{w:"200px",value:n,onChange:e=>{d(e.target.value)},mb:4,children:[(0,s.jsx)("option",{value:"all",children:"Show All"}),(0,s.jsx)("option",{value:"pending",children:"Pending"}),(0,s.jsx)("option",{value:"resolved",children:"Resolved"}),(0,s.jsx)("option",{value:"hold",children:"Hold"})]})}),a?(0,s.jsx)(O.Z,{}):(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(T.i,{variant:"simple",children:[(0,s.jsx)(_.h,{children:(0,s.jsxs)(q.Tr,{children:[(0,s.jsx)(Q.Th,{children:"No"}),(0,s.jsx)(Q.Th,{children:"Query Type"}),(0,s.jsx)(Q.Th,{children:"Description"}),(0,s.jsx)(Q.Th,{children:"Status"}),(0,s.jsx)(Q.Th,{children:"Action"})]})}),(0,s.jsx)(k.p,{children:r.map((e,t)=>(0,s.jsxs)(q.Tr,{children:[(0,s.jsx)(A.Td,{children:t+1}),(0,s.jsx)(A.Td,{children:e.queryType}),(0,s.jsx)(A.Td,{children:e.queryDescription}),(0,s.jsx)(A.Td,{children:getStatusBadge(e.queryStatus)}),(0,s.jsx)(A.Td,{children:(0,s.jsxs)(w.P,{value:e.queryStatus,onChange:e=>handleSelectChange(t,e.target.value),children:[(0,s.jsx)("option",{value:"pending",children:"Pending"}),(0,s.jsx)("option",{value:"resolved",children:"Resolved"}),(0,s.jsx)("option",{value:"hold",children:"Hold"})]})}),(0,s.jsxs)(A.Td,{display:"flex",alignItems:"center",gap:"7px",children:[(0,s.jsx)(E.z,{colorScheme:"teal",onClick:()=>handleQueryStatusSubmit(e._id,e.queryStatus),children:"Submit"}),e.isModified&&(0,s.jsx)(Z.xu,{bg:"red",h:"7px",w:"7px",borderRadius:"100%"})]})]},e._id))})]})})]})]})};let{Header:D,Content:P,Footer:R,Sider:M}=l.default;var page=()=>{(0,d.useRouter)();let[e,t]=(0,i.useState)(1),[r,g]=(0,i.useState)(!1),{token:{colorBgContainer:f}}=n.Z.useToken();return(0,s.jsx)(l.default,{style:{minHeight:"100vh",width:"100%",marginTop:"20px"},children:(0,s.jsx)(l.default,{children:(0,s.jsx)(P,{children:(0,s.jsxs)(o.m,{isManual:!0,mt:2,ml:.5,variant:"enclosed",children:[(0,s.jsxs)(c.t,{children:[(0,s.jsx)(a.O,{_selected:{color:"white",bg:"teal.500"},onClick:()=>t(1),children:"Questionaire"}),(0,s.jsx)(a.O,{_selected:{color:"white",bg:"teal.500"},onClick:()=>t(2),children:"Rates"}),(0,s.jsx)(a.O,{_selected:{color:"white",bg:"teal.500"},onClick:()=>t(3),children:"Active Site"}),(0,s.jsx)(a.O,{_selected:{color:"white",bg:"teal.500"},onClick:()=>t(4),children:"Query"})]}),(0,s.jsxs)(u.n,{children:[(0,s.jsx)(h.x,{children:1==e&&(0,s.jsx)(x.Z,{})}),(0,s.jsx)(h.x,{children:2==e&&(0,s.jsx)(p.Z,{})}),(0,s.jsx)(h.x,{children:3==e&&(0,s.jsx)(j.Z,{})}),(0,s.jsx)(h.x,{children:4==e&&(0,s.jsx)(Components_QueryDisplay,{})})]})]})})})})}}},function(e){e.O(0,[57,77,209,94,697,115,861,662,971,472,744],function(){return e(e.s=17350)}),_N_E=e.O()}]);