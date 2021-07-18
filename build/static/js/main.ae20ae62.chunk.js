(this["webpackJsonpjob-listing"]=this["webpackJsonpjob-listing"]||[]).push([[0],{77:function(e,a,t){e.exports=t(91)},82:function(e,a,t){},91:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),i=t(9),c=t.n(i),l=(t(82),t(15)),o=t.n(l),s=t(12),u=t(23),p=t(11),m=t(131),d=t(133),f=t(119),b=t(126),E=t(65),x=Object(E.a)({typography:{fontFamily:"Poppins, sans-serif"},palette:{primary:{main:"#18E1D9"},secondary:{main:"#0B0B15"}},overrides:{MuiDialogActions:{root:{padding:"8px 24px 16px 24px"}},MuiButton:{root:{fontWeight:600,textTransform:"none",color:"#0B0B15",padding:"6px 24px"},outlined:{borderRadius:"35px",borderColor:"#0B0B15",padding:"6px 20px"}},MuiSelect:{filled:{padding:"15px 0 15px 15px"}},MuiFilledInput:{input:{height:"49px",padding:"0px 0 0 10px"}}}}),g=t(93),y=t(121),h=function(e){return r.a.createElement(d.a,{py:10,bgcolor:"secondary.main",color:"white"},r.a.createElement(f.a,{container:!0,justify:"center"},r.a.createElement(f.a,{item:!0,xs:10},r.a.createElement(d.a,{display:"flex",justifyContent:"space-between"},r.a.createElement(g.a,{variant:"h5"},"Open Job Listing"),r.a.createElement(y.a,{onClick:e.openNewJobModal,variant:"contained",color:"primary",disableElevation:!0},"Post a job")))))},v=t(10),j=t(122),O=t(132),k=t(136),C=Object(j.a)({wrapper:{backgroundColor:"#fff",display:"flex",boxShadow:"0px 1px 5px rgba(0, 0, 0, 0.1)",borderRadius:"5px","& > *":{flex:1,height:"45px",margin:"8px"}}}),w=function(e){var a=Object(n.useState)(!1),t=Object(p.a)(a,2),i=t[0],c=t[1],l=Object(n.useState)({type:"Full time",location:"Remote"}),m=Object(p.a)(l,2),f=m[0],E=m[1],x=function(e){e.persist(),E((function(a){return Object(s.a)(Object(s.a)({},a),{},Object(v.a)({},e.target.name,e.target.value))}))},g=function(){var a=Object(u.a)(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return c(!0),a.next=3,e.fetchJobsCustom(f);case 3:c(!1);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}(),h=C();return r.a.createElement(d.a,{p:2,mt:-5,mb:2,className:h.wrapper},r.a.createElement(O.a,{onChange:x,value:f.type,name:"type",disableUnderline:!0,variant:"filled"},r.a.createElement(k.a,{value:"Full time"},"Full time"),r.a.createElement(k.a,{value:"Part time"},"Part time"),r.a.createElement(k.a,{value:"Contract"},"Contract")),r.a.createElement(O.a,{onChange:x,value:f.location,name:"location",disableUnderline:!0,variant:"filled"},r.a.createElement(k.a,{value:"Remote"},"Remote"),r.a.createElement(k.a,{value:"In-office"},"In-office")),r.a.createElement(y.a,{disabled:i,variant:"contained",color:"primary",disableElevation:!0,onClick:g},i?r.a.createElement(b.a,{color:"secondary",size:22}):"Search"))},J=t(135),S=Object(j.a)((function(e){return{wrapper:{border:"1px solid #e8e8e8",cursor:"pointer",transition:"0.3s","&:hover":{boxShadow:"0px 5px 25px rgba(0,0,0,0.1)",borderLeft:"6px solid #4D64E4"}},companyName:{fontSize:"13.5px",backgroundColor:e.palette.primary.main,padding:e.spacing(.75),borderRadius:"5px",display:"inline-block",fontWeight:600},skillChip:{margin:e.spacing(.5),padding:e.spacing(.5),fontSize:"14.5px",borderRadius:"5px",transition:".3s",fontWeight:600,backgroundColor:e.palette.secondary.main,color:"#fff"}}})),N=function(e){var a=S();return r.a.createElement(d.a,{p:2,className:a.wrapper},r.a.createElement(f.a,{container:!0,alignItems:"center"},r.a.createElement(f.a,{item:!0,xs:!0},r.a.createElement(g.a,{variant:"subtitle1"},e.title),r.a.createElement(g.a,{className:a.companyName,variant:"subtitle1"},e.companyName," ")),r.a.createElement(f.a,{item:!0,container:!0,xs:!0},e.skills.map((function(e){return r.a.createElement(f.a,{className:a.skillChip,key:e,item:!0},e)}))),r.a.createElement(f.a,{item:!0,container:!0,direction:"column",alignItems:"flex-end",xs:!0},r.a.createElement(f.a,{item:!0},r.a.createElement(g.a,{variant:"caption"},Object(J.a)(Date.now(),e.postedOn)," min ago |",e.type," | ",e.location)),r.a.createElement(f.a,{item:!0},r.a.createElement(d.a,{mt:2},r.a.createElement(y.a,{variant:"outlined"},"View Job"))))))},I=t(64),R=t(137),U=t(127),B=t(128),W=t(129),F=t(124),M=t(130),D=t(138),z=Object(j.a)((function(e){return{skillChip:{margin:e.spacing(.5),padding:e.spacing(.5),fontSize:"14.5px",borderRadius:"5px",transition:".3s",fontWeight:600,border:"1px solid ".concat(e.palette.secondary.main),color:e.palette.secondary.main,cursor:"pointer","&:hover":{backgroundColor:e.palette.secondary.main,color:"#fff"}},included:{backgroundColor:e.palette.secondary.main,color:"#fff"}}})),P={title:"",type:"Full time",location:"Remote",companyName:"",companyUrl:"",description:"",skills:[],link:""},V=function(e){var a=Object(n.useState)(!1),t=Object(p.a)(a,2),i=t[0],c=t[1],l=Object(n.useState)(P),m=Object(p.a)(l,2),E=m[0],x=m[1],h=function(e){e.persist(),x((function(a){return Object(s.a)(Object(s.a)({},a),{},Object(v.a)({},e.target.name,e.target.value))}))},j=function(){var a=Object(u.a)(o.a.mark((function a(){var t,n,r;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:t=Object(I.a)(E),a.prev=1,t.s();case 3:if((n=t.n()).done){a.next=9;break}if(r=n.value,"string"!==typeof E[r]||E[r]){a.next=7;break}return a.abrupt("return");case 7:a.next=3;break;case 9:a.next=14;break;case 11:a.prev=11,a.t0=a.catch(1),t.e(a.t0);case 14:return a.prev=14,t.f(),a.finish(14);case 17:if(E.skills.length){a.next=19;break}return a.abrupt("return");case 19:return c(!0),a.next=22,e.postJob(E);case 22:C();case 23:case"end":return a.stop()}}),a,null,[[1,11,14,17]])})));return function(){return a.apply(this,arguments)}}(),C=function(){x(P),c(!1),e.closeModal()},w=z();return r.a.createElement(R.a,{open:e.newJobModal,fullWidth:!0},r.a.createElement(U.a,null,r.a.createElement(d.a,{display:"flex",justifyContent:"space-between",alignItems:"center"},"Post Job",r.a.createElement(B.a,{onClick:C},r.a.createElement(D.a,null)))),r.a.createElement(W.a,null,r.a.createElement(f.a,{container:!0,spacing:2},r.a.createElement(f.a,{item:!0,xs:6},r.a.createElement(F.a,{onChange:h,name:"title",value:E.title,autoComplete:"off",placeholder:"Job title *",disableUnderline:!0,fullWidth:!0})),r.a.createElement(f.a,{item:!0,xs:6},r.a.createElement(O.a,{onChange:h,name:"type",value:E.type,disableUnderline:!0,fullWidth:!0,variant:"filled"},r.a.createElement(k.a,{value:"Full time"},"Full time"),r.a.createElement(k.a,{value:"Part time"},"Part time"),r.a.createElement(k.a,{value:"Contract"},"Contract"))),r.a.createElement(f.a,{item:!0,xs:6},r.a.createElement(F.a,{onChange:h,name:"companyName",value:E.companyName,autoComplete:"off",placeholder:"Company name *",disableUnderline:!0,fullWidth:!0})),r.a.createElement(f.a,{item:!0,xs:6},r.a.createElement(F.a,{onChange:h,name:"companyUrl",value:E.companyUrl,autoComplete:"off",placeholder:"Company url *",disableUnderline:!0,fullWidth:!0})),r.a.createElement(f.a,{item:!0,xs:6},r.a.createElement(O.a,{onChange:h,name:"location",value:E.location,disableUnderline:!0,fullWidth:!0,variant:"filled"},r.a.createElement(k.a,{value:"Remote"},"Remote"),r.a.createElement(k.a,{value:"In-office"},"In-office"))),r.a.createElement(f.a,{item:!0,xs:6},r.a.createElement(F.a,{onChange:h,name:"link",value:E.link,autoComplete:"off",placeholder:"Job link *",disableUnderline:!0,fullWidth:!0})),r.a.createElement(f.a,{item:!0,xs:12},r.a.createElement(F.a,{onChange:h,name:"description",value:E.description,autoComplete:"off",placeholder:"Job Description *",disableUnderline:!0,fullWidth:!0,multiline:!0,rows:3}))),r.a.createElement(d.a,{mt:2},r.a.createElement(g.a,null,"Skills"),r.a.createElement(d.a,{display:"flex"},["JS","React","VueJs","Node","MySQL","Docker","CI/CD"].map((function(e){return r.a.createElement(d.a,{onClick:function(){return function(e){return E.skills.includes(e)?x((function(a){return Object(s.a)(Object(s.a)({},a),{},{skills:a.skills.filter((function(a){return a!==e}))})})):x((function(a){return Object(s.a)(Object(s.a)({},a),{},{skills:a.skills.concat(e)})}))}(e)},className:"".concat(w.skillChip," ").concat(E.skills.includes(e)&&w.included),key:e},e)}))))),r.a.createElement(M.a,null,r.a.createElement(d.a,{color:"red",width:"100%",display:"flex",justifyContent:"space-between",alignItems:"center"},r.a.createElement(g.a,{variant:"caption"},"* Required Fields"),r.a.createElement(y.a,{onClick:j,variant:"contained",disableElevation:!0,disabled:i,color:"primary"},i?r.a.createElement(b.a,{color:"secondary",size:22}):"Post Job"))))},A=t(51),q=t.n(A),L=(t(87),q.a.initializeApp({apiKey:"AIzaSyCNbzQ7YE4OTVQJxUVP2qAFgbapqBgNz3o",authDomain:"job-listing-cc055.firebaseapp.com",projectId:"job-listing-cc055",storageBucket:"job-listing-cc055.appspot.com",messagingSenderId:"125176122000",appId:"1:125176122000:web:32f149b28abd1f7c646615"}).firestore()),Q=function(){var e=Object(n.useState)([]),a=Object(p.a)(e,2),t=a[0],i=a[1],c=Object(n.useState)(!0),l=Object(p.a)(c,2),E=l[0],g=l[1],y=Object(n.useState)(!1),v=Object(p.a)(y,2),j=v[0],O=v[1],k=function(){var e=Object(u.a)(o.a.mark((function e(){var a,t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,L.collection("jobs").orderBy("postedOn","desc").get();case 3:a=e.sent,t=a.docs.map((function(e){return Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id,postedOn:e.data().postedOn.toDate()})})),i(t),g(!1);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),C=function(){var e=Object(u.a)(o.a.mark((function e(a){var t,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return g(!0),e.next=3,L.collection("jobs").orderBy("postedOn","desc").where("location","=",a.location).where("type","=",a.type).get();case 3:t=e.sent,n=t.docs.map((function(e){return Object(s.a)(Object(s.a)({},e.data()),{},{id:e.id,postedOn:e.data().postedOn.toDate()})})),i(n),g(!1);case 7:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}(),J=function(){var e=Object(u.a)(o.a.mark((function e(a){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,L.collection("jobs").add(Object(s.a)(Object(s.a)({},a),{},{postedOn:q.a.firestore.FieldValue.serverTimestamp()}));case 2:k();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k()}),[]),r.a.createElement(m.a,{theme:x},r.a.createElement(h,{openNewJobModal:function(){return O(!0)}}),r.a.createElement(V,{closeModal:function(){return O(!1)},newJobModal:j,postJob:J}),r.a.createElement(d.a,{mb:3},r.a.createElement(f.a,{container:!0,justify:"center"},r.a.createElement(f.a,{item:!0,xs:10},r.a.createElement(w,{fetchJobsCustom:C}),E?r.a.createElement(d.a,{display:"flex",justifyContent:"center"},r.a.createElement(b.a,null)):t.map((function(e){return r.a.createElement(N,Object.assign({key:e.id},e))}))))))};c.a.render(r.a.createElement(Q,null),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.ae20ae62.chunk.js.map