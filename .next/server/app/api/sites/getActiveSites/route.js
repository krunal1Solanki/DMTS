"use strict";(()=>{var e={};e.id=547,e.ids=[547],e.modules={11185:e=>{e.exports=require("mongoose")},524:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},54273:(e,t,r)=>{r.r(t),r.d(t,{headerHooks:()=>g,originalPathname:()=>_,requestAsyncStorage:()=>c,routeModule:()=>p,serverHooks:()=>l,staticGenerationAsyncStorage:()=>d,staticGenerationBailout:()=>v});var s={};r.r(s),r.d(s,{GET:()=>GET});var i=r(10884),a=r(16132),o=r(64901),n=r(61610),u=r(95798);async function GET(e){try{let e=await o.Z.find({isDMTSActive:!0});return console.log("LLL",e.length),u.Z.json({sites:e})}catch(e){return u.Z.json({error:e.message})}}(0,n.$)();let p=new i.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/sites/getActiveSites/route",pathname:"/api/sites/getActiveSites",filename:"route",bundlePath:"app/api/sites/getActiveSites/route"},resolvedPagePath:"/Users/delta/DMTS/src/app/api/sites/getActiveSites/route.tsx",nextConfigOutput:"",userland:s}),{requestAsyncStorage:c,staticGenerationAsyncStorage:d,serverHooks:l,headerHooks:g,staticGenerationBailout:v}=p,_="/api/sites/getActiveSites/route"}};var t=require("../../../../webpack-runtime.js");t.C(e);var __webpack_exec__=e=>t(t.s=e),r=t.X(0,[6126,8107,3258],()=>__webpack_exec__(54273));module.exports=r})();