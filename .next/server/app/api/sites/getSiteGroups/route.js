"use strict";(()=>{var e={};e.id=298,e.ids=[298],e.modules={11185:e=>{e.exports=require("mongoose")},524:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},22037:e=>{e.exports=require("os")},23627:(e,t,o)=>{o.r(t),o.d(t,{headerHooks:()=>g,originalPathname:()=>G,requestAsyncStorage:()=>p,routeModule:()=>u,serverHooks:()=>d,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>m});var r={};o.r(r),o.d(r,{GET:()=>GET});var s=o(10884),n=o(16132),a=o(61610),i=o(95798),c=o(43285);async function GET(e){try{let e=await c.Z.find();return i.Z.json({message:e})}catch(e){return i.Z.json({error:e.message})}}(0,a.$)();let u=new s.AppRouteRouteModule({definition:{kind:n.x.APP_ROUTE,page:"/api/sites/getSiteGroups/route",pathname:"/api/sites/getSiteGroups",filename:"route",bundlePath:"app/api/sites/getSiteGroups/route"},resolvedPagePath:"/Users/delta/DMTS/src/app/api/sites/getSiteGroups/route.tsx",nextConfigOutput:"",userland:r}),{requestAsyncStorage:p,staticGenerationAsyncStorage:l,serverHooks:d,headerHooks:g,staticGenerationBailout:m}=u,G="/api/sites/getSiteGroups/route"},61610:(e,t,o)=>{o.d(t,{$:()=>connect});var r=o(11185),s=o.n(r);async function connect(){try{s().connect(process.env.DB);let e=s().connection;e.on("connected",()=>{console.log("MongoDb Connected Successfully")}),e.on("error",e=>{console.log("Connection Error",e.message),process.exit()})}catch(e){console.log("Something went wrong",e.message)}}},43285:(e,t,o)=>{o.d(t,{Z:()=>i}),o(22037);let{mongoose:r}=o(11185),s=r.Schema,n=new s({groupName:{type:String,required:!0},sites:{type:Array},creationDate:{type:Date,default:Date.now}},{collection:"siteGroupModel"});n.pre("save",function(e){this.creationDate||(this.creationDate=new Date),e()});let a=r.models.siteGroupModel||r.model("siteGroupModel",n),i=a}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),o=t.X(0,[6126,8107],()=>__webpack_exec__(23627));module.exports=o})();