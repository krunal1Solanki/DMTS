"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[662],{87347:function(e,t,s){var i=s(57437),n=s(92173),a=s(2265),r=s(20678),l=s(16988),o=s(13266),c=s(39933),d=s(53494),h=s(10056),u=s(22043),x=s(52736),g=s(17885),j=s(97464),m=s(32527),p=s(42632),S=s(71504),v=s(5242);t.Z=()=>{let[e,t]=(0,a.useState)([]),[s,y]=(0,a.useState)(!1),f=(0,r.p)();(0,a.useEffect)(()=>{getSites()},[]);let getSites=async()=>{y(!0);let e=await n.Z.get("/api/sites/getAllSites");t(e.data.message),y(!1)},handleCheckboxChange=(s,i)=>{console.log(s,i);let n=[...e];n[s].isDMTSActive=i,console.log("logg",n[s].isDMTSActive),t(n)},handleSiteStatusSubmit=async(e,t)=>{y(!0);try{await n.Z.post("/api/sites/siteStatus",{_id:e,isDMTSActive:t}),f({title:"Submit Successful",description:"Site status updated successfully for site with ID ".concat(e),status:"success",position:"top-right",duration:3e3,isClosable:!0})}catch(t){console.error("Error updating site status:",t),f({title:"Submit Error",description:"An error occurred while updating site status for site with ID ".concat(e),status:"error",position:"top-right",duration:3e3,isClosable:!0})}finally{y(!1)}};return(0,i.jsxs)(l.Z,{children:[(0,i.jsx)(o.O,{bg:"teal.500",borderBottomWidth:"1px",borderColor:"teal.600",color:"white",textAlign:"center",padding:"4",children:(0,i.jsx)(c.X,{size:"md",textTransform:"uppercase",children:"Active Sites"})}),(0,i.jsx)(d.e,{children:s?(0,i.jsx)(v.Z,{}):(0,i.jsx)(i.Fragment,{children:(0,i.jsxs)(h.i,{variant:"simple",children:[(0,i.jsx)(u.h,{children:(0,i.jsxs)(x.Tr,{children:[(0,i.jsx)(g.Th,{children:"No"}),(0,i.jsx)(g.Th,{children:"Site Name"}),(0,i.jsx)(g.Th,{children:"Is DMTS Active"}),(0,i.jsx)(g.Th,{children:"Submit"})]})}),(0,i.jsx)(j.p,{children:e.map((e,t)=>(0,i.jsxs)(x.Tr,{children:[(0,i.jsx)(m.Td,{children:t+1}),(0,i.jsx)(m.Td,{children:e.pumpName}),(0,i.jsx)(m.Td,{children:(0,i.jsx)(p.X,{defaultChecked:e.isDMTSActive,onChange:e=>handleCheckboxChange(t,e.target.checked)})}),(0,i.jsx)(m.Td,{children:(0,i.jsx)(S.z,{colorScheme:"teal",onClick:()=>handleSiteStatusSubmit(e._id,e.isDMTSActive),children:"Submit"})})]},e._id))})]})})})]})}},5242:function(e,t,s){var i=s(57437);s(2265);var n=s(53808);t.Z=()=>(0,i.jsx)("div",{className:"loader",style:{textAlign:"center",backgroundColor:"white",display:"flex",justifyContent:"center",width:"100%",height:"50vh"},children:(0,i.jsx)("div",{style:{margin:"auto 0"},children:(0,i.jsx)(n.Z,{color:"teal",size:30})})})},26281:function(e,t,s){s.d(t,{Z:function(){return Components_Questionnaire}});var i=s(57437),n=s(2265),a=s(16988),r=s(13266),l=s(26621),o=s(39933),c=s(21534),d=s(53494),h=s(68975),u=s(14650),x=s(56641),g=s(51091),j=s(97766),m=s(13621),p=s(71504),S=s(85465),v=s(20678),y=s(92173),f=s(22811),b=s(99126),w=s(1107),C=s(80181),T=s(66876),N=s(31708),q=s(31870),Q=s(5242),Components_QuestionnaireDisplay=()=>{let[e,t]=(0,n.useState)([]),[s,a]=(0,n.useState)(""),[r,o]=(0,n.useState)(""),[c,d]=(0,n.useState)(""),[h,u]=(0,n.useState)(!1),[x,g]=(0,n.useState)([]);(0,n.useEffect)(()=>{fetchData()},[s,r,c]);let fetchData=()=>{u(!0);let e=x.filter(e=>e.questionnaireName.toLowerCase().includes(s.toLowerCase())&&(""===r||e.questions.some(e=>e.answerType===r))&&(""===c||e.formType===c));t(e),u(!1)};(0,n.useEffect)(()=>{let fetchOriginalData=async()=>{u(!0);try{let e=await y.Z.get("/api/setting/getQuestionnaire");g(e.data.message),t(e.data.message),u(!1)}catch(e){console.error("Error fetching data:",e)}};fetchOriginalData()},[]);let deleteQuestionnaire=async e=>{try{await y.Z.delete("/api/setting/deleteQuestionnaire",{data:{questionnaireId:e}}),fetchData()}catch(e){console.error("Error deleting questionnaire:",e)}};return(0,i.jsxs)(j.g,{spacing:4,align:"start",p:4,w:"100%",children:[(0,i.jsxs)(f.U,{w:"100%",justify:"space-between",mb:4,children:[(0,i.jsxs)(f.U,{spacing:4,children:[(0,i.jsx)(N.W,{color:"gray.300"}),(0,i.jsx)("input",{placeholder:"Search by Name",value:s,onChange:e=>a(e.target.value)})]}),(0,i.jsxs)(f.U,{spacing:4,children:[(0,i.jsx)(b.x,{children:"Filter by Answer Type:"}),(0,i.jsxs)("select",{value:r,onChange:e=>o(e.target.value),children:[(0,i.jsx)("option",{value:"",children:"All"}),(0,i.jsx)("option",{value:"rating",children:"Rating"}),(0,i.jsx)("option",{value:"yesno",children:"Yes/No"}),(0,i.jsx)("option",{value:"text",children:"Text"})]})]}),(0,i.jsxs)(f.U,{spacing:4,children:[(0,i.jsx)(b.x,{children:"Filter by Form Type:"}),(0,i.jsxs)("select",{value:c,onChange:e=>d(e.target.value),children:[(0,i.jsx)("option",{value:"",children:"All"}),(0,i.jsx)("option",{value:"ONM",children:"ONM"}),(0,i.jsx)("option",{value:"Survey",children:"Survey"})]})]})]}),h?(0,i.jsx)(Q.Z,{}):(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(j.g,{spacing:4,align:"start",w:"100%",children:e.map((e,t)=>(0,i.jsxs)(m.xu,{p:4,borderWidth:"1px",borderRadius:"lg",boxShadow:"lg",w:"100%",children:[(0,i.jsx)(b.x,{fontWeight:"bold",fontSize:"xl",children:e.formType||"Untitled Questionnaire"}),(0,i.jsx)(S.i,{mt:3}),(0,i.jsx)(b.x,{fontWeight:"bold",fontSize:"xl",children:e.questionnaireName||"Untitled Questionnaire"}),(0,i.jsxs)(b.x,{fontSize:"sm",color:"gray.500",children:["Date: ",new Date(e.creationDate).toLocaleDateString()]}),(0,i.jsx)(S.i,{my:2}),(0,i.jsx)(b.x,{fontWeight:"bold",children:"Questions:"}),(0,i.jsx)(j.g,{align:"start",spacing:2,w:"100%",children:e.questions.map((e,t)=>(0,i.jsxs)(l.k,{justify:"space-between",w:"100%",children:[(0,i.jsxs)(b.x,{children:[t+1,". ",e.questionText]}),(0,i.jsx)(w.C,{colorScheme:"blue",fontSize:"xs",children:e.answerType})]},e._id))}),(0,i.jsx)(S.i,{my:2}),(0,i.jsx)(b.x,{fontWeight:"bold",children:"Image:"}),(0,i.jsx)(j.g,{align:"start",spacing:2,w:"100%",children:e.images.map((e,t)=>(0,i.jsx)(l.k,{justify:"space-between",w:"100%",children:(0,i.jsxs)(b.x,{children:[t+1,". ",e.imageName]})},e._id))}),(0,i.jsx)(C.u,{label:"Delete",hasArrow:!0,children:(0,i.jsx)(T.h,{icon:(0,i.jsx)(q.p,{}),colorScheme:"red",size:"sm",onClick:()=>deleteQuestionnaire(e._id),mt:4})})]},e._id))})})]})},Components_Questionnaire=()=>{let e=(0,v.p)(),[t,s]=(0,n.useState)({questionnaireName:"",questions:[{questionText:"",answerType:"rating"}],images:[{imageName:""}]}),[f,b]=(0,n.useState)(!1),[w,C]=(0,n.useState)(!1),[T,N]=(0,n.useState)("ONM"),handleQuestionChange=(e,i,n)=>{let a=[...t.questions];a[e][i]=n,s({...t,questions:a})},handleImageChange=(e,i,n)=>{let a=[...t.images];a[e][i]=n,s({...t,images:a})},removeQuestion=e=>{let i=[...t.questions];i.splice(e,1),s({...t,questions:i})},addQuestionnaire=async()=>{C(!0);try{t.type=T;let i=await y.Z.post("/api/setting/addQuestionnaire",t),n=i.data;s({questionnaireName:"",questions:[{questionText:"",answerType:"rating"}],images:[]}),e({description:"Questionnaire added successfully",status:"success",position:"top-right",duration:1e4,isClosable:!0}),console.log("Saved Questionnaire:",n),C(!1)}catch(e){console.error("Error adding questionnaire:",e)}},removeImage=e=>{let i=[...t.images];i.splice(e,1),s({...t,images:i})};return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(r.O,{bg:"teal",borderBottomWidth:"1px",borderColor:"teal.600",color:"white",textAlign:"center",padding:"4",children:(0,i.jsxs)(l.k,{align:"center",gap:"20px",children:[(0,i.jsx)(o.X,{size:"md",textTransform:"uppercase",children:f?"View Questionnaire":"Add Questionnaire"}),(0,i.jsx)(c.r,{colorScheme:"teal",isChecked:f,onChange:()=>b(!f)})]})}),(0,i.jsxs)(d.e,{children:[console.log("XXXX",t),!f&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(l.k,{gap:"10px",children:[(0,i.jsxs)(h.NI,{mb:4,children:[(0,i.jsx)(u.l,{children:"Select Type:"}),(0,i.jsxs)(x.P,{value:T,onChange:e=>{N(e.target.value)},children:[(0,i.jsx)("option",{value:"ONM",children:"ONM"}),(0,i.jsx)("option",{value:"Survey",children:"Survey"})]})]}),(0,i.jsxs)(h.NI,{mb:4,children:[(0,i.jsxs)(u.l,{children:[T," Name:"]}),(0,i.jsx)(g.I,{type:"text",value:t.questionnaireName,onChange:e=>s({...t,questionnaireName:e.target.value})})]})]}),(0,i.jsxs)(l.k,{justify:"space-between",children:[(0,i.jsxs)(j.g,{spacing:4,w:"48%",children:[(0,i.jsx)(o.X,{size:"md",children:"Questions"}),t.questions.map((e,t)=>(0,i.jsxs)(m.xu,{borderWidth:"1px",w:"100%",p:4,borderRadius:"lg",children:[(0,i.jsxs)(h.NI,{mb:2,children:[(0,i.jsx)(u.l,{children:"Answer Type:"}),(0,i.jsxs)(x.P,{required:!0,value:e.answerType,onChange:e=>handleQuestionChange(t,"answerType",e.target.value),children:[(0,i.jsx)("option",{value:"rating",children:"Rating"}),(0,i.jsx)("option",{value:"yesno",children:"Yes/No"}),(0,i.jsx)("option",{value:"text",children:"Text"})]})]}),(0,i.jsx)(u.l,{children:"Question Text:"}),(0,i.jsx)(g.I,{type:"text",required:!0,value:e.questionText,onChange:e=>handleQuestionChange(t,"questionText",e.target.value)}),(0,i.jsx)(p.z,{onClick:()=>removeQuestion(t),colorScheme:"red",mt:4,children:"Remove Question"})]},t))]}),(0,i.jsxs)(j.g,{spacing:4,w:"48%",children:[(0,i.jsx)(o.X,{size:"md",children:"Images"}),t.images.map((e,t)=>(0,i.jsxs)(m.xu,{borderWidth:"1px",w:"100%",p:4,borderRadius:"md",children:[(0,i.jsxs)(h.NI,{mb:2,children:[(0,i.jsx)(u.l,{children:"Image Name:"}),(0,i.jsx)(g.I,{type:"text",value:e.imageName,onChange:e=>handleImageChange(t,"imageName",e.target.value)})]}),(0,i.jsx)(p.z,{onClick:()=>removeImage(t),colorScheme:"red",mt:4,children:"Remove Image"})]},t))]})]}),(0,i.jsx)(S.i,{mt:4}),(0,i.jsx)(j.g,{spacing:4,mt:8,children:(0,i.jsxs)("div",{style:{marginTop:"20px",display:"flex",width:"100%",alignItems:"center",justifyContent:"flex-start",gap:"10px"},children:[(0,i.jsx)(p.z,{onClick:()=>{s({...t,questions:[...t.questions,{questionText:"",answerType:"rating"}]})},colorScheme:"teal",children:"Add Question"}),(0,i.jsx)(p.z,{onClick:()=>{s({...t,images:[...t.images,{imageName:""}]})},colorScheme:"teal",children:"Add Image"}),(0,i.jsx)(p.z,{onClick:addQuestionnaire,isLoading:w,colorScheme:"teal",children:"Submit"})]})})]}),f&&(0,i.jsx)(m.xu,{children:(0,i.jsx)(Components_QuestionnaireDisplay,{})})]})]})}},22086:function(e,t,s){var i=s(57437),n=s(2265),a=s(16988),r=s(13266),l=s(39933),o=s(53494),c=s(59322),d=s(80181);t.Z=()=>{let[e,t]=n.useState(5),[s,h]=n.useState(!1);return(0,i.jsxs)(a.Z,{children:[(0,i.jsx)(r.O,{bg:"teal.500",borderBottomWidth:"1px",borderColor:"teal.600",color:"white",textAlign:"center",padding:"4",children:(0,i.jsx)(l.X,{size:"md",textTransform:"uppercase",children:"Set Rates"})}),(0,i.jsxs)(o.e,{children:[(0,i.jsxs)(l.X,{size:"xs",textTransform:"uppercase",children:["Current Rate : ",e,"₹"]}),(0,i.jsxs)(c.iR,{w:"50%",id:"slider",defaultValue:5,min:0,mt:3,max:100,colorScheme:"teal",onChange:e=>t(e),onMouseEnter:()=>h(!0),onMouseLeave:()=>h(!1),children:[(0,i.jsx)(c.jz,{value:25,mt:"1",ml:"-2.5",fontSize:"sm",children:"25₹"}),(0,i.jsx)(c.jz,{value:50,mt:"1",ml:"-2.5",fontSize:"sm",children:"50₹"}),(0,i.jsx)(c.jz,{value:75,mt:"1",ml:"-2.5",fontSize:"sm",children:"75₹"}),(0,i.jsx)(c.Uj,{children:(0,i.jsx)(c.Ms,{})}),(0,i.jsx)(d.u,{hasArrow:!0,bg:"teal.500",color:"white",placement:"top",isOpen:s,label:"".concat(e,"₹"),children:(0,i.jsx)(c.gs,{})})]})]})]})}}}]);