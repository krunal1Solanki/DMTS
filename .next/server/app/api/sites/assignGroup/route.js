"use strict";(()=>{var e={};e.id=5990,e.ids=[5990],e.modules={11185:e=>{e.exports=require("mongoose")},524:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},22037:e=>{e.exports=require("os")},74644:(e,s,r)=>{r.r(s),r.d(s,{headerHooks:()=>m,originalPathname:()=>_,requestAsyncStorage:()=>g,routeModule:()=>d,serverHooks:()=>c,staticGenerationAsyncStorage:()=>l,staticGenerationBailout:()=>G});var a={};r.r(a),r.d(a,{POST:()=>POST});var t=r(10884),o=r(16132),i=r(39949),n=r(61610),u=r(95798),p=r(51834);async function POST(e){try{let s=await e.json(),{userId:r,groups:a}=s;for(let e=0;e<a.length;e++)a[e].createAt=new Date;let t=await i.Z.findOne({_id:r});console.log(t.assignedGroups,a);let o=t.assignedGroups.map(e=>e.groupId);for(let e=0;e<a.length;e++)if(o.includes(a[e].groupId))return u.Z.json({message:"Some Groups Are Already Assigned"});t.assignedGroups=[...t.assignedGroups,...a],t.save();for(let e=0;e<a.length;e++)await p.Z.create({userName:t.OperatorName,userId:r,groupId:a[e].groupId,groupName:a[e].groupName});return u.Z.json({message:"Groups has been successfully assigned !"})}catch(e){return u.Z.json({error:e.message})}}(0,n.$)();let d=new t.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/sites/assignGroup/route",pathname:"/api/sites/assignGroup",filename:"route",bundlePath:"app/api/sites/assignGroup/route"},resolvedPagePath:"/Users/delta/DMTS/src/app/api/sites/assignGroup/route.tsx",nextConfigOutput:"",userland:a}),{requestAsyncStorage:g,staticGenerationAsyncStorage:l,serverHooks:c,headerHooks:m,staticGenerationBailout:G}=d,_="/api/sites/assignGroup/route"}};var s=require("../../../../webpack-runtime.js");s.C(e);var __webpack_exec__=e=>s(s.s=e),r=s.X(0,[6126,8107,9060,1834],()=>__webpack_exec__(74644));module.exports=r})();