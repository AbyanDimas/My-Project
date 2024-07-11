"use strict";(self.webpackChunkadminpanel=self.webpackChunkadminpanel||[]).push([[471],{30471:(Y,I,t)=>{t.r(I),t.d(I,{E:()=>z,a:()=>H,b:()=>Ue});var e=t(92132),f=t(21272),m=t(83997),R=t(8361),L=t(43064),S=t(46462),U=t(66809),x=t(84843),_=t(81621),a=t(98765),c=t(30893),M=t(379),A=t(4181),B=t(50215),y=t(94061),K=t(90151),O=t(68074),w=t(7537),V=t(18629),ae=t(76517),oe=t(80782),ie=t(55356),Q=t(85963),le=t(4198),de=t(38413),C=t(55506),ce=t(71389),X=t(17703),$=t(55397),Z=t(78917),ge=t(5035),he=t(21610),ue=t(5194),J=t(68802),_e=t(84795),q=t(54514),Ee=t(98052),me=t(46270),D=t(61535),T=t(54894),b=t(12083),pe=t(89032),F=t(63891),fe=t(60079);const[Me,ee]=(0,pe.q)("WebhookEvent"),xe=({children:s})=>{const{formatMessage:n}=(0,T.A)(),{collectionTypes:r,isLoading:g}=(0,Z.u)(),o=f.useMemo(()=>r.some(i=>i.options?.draftAndPublish===!0),[r]),h=n({id:"Settings.webhooks.form.events",defaultMessage:"Events"});return(0,e.jsx)(Me,{isDraftAndPublish:o,children:(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(R.d,{"aria-hidden":!0,children:h}),g&&(0,e.jsx)(L.a,{children:n({id:"Settings.webhooks.events.isLoading",defaultMessage:"Events loading"})}),(0,e.jsx)(ye,{"aria-label":h,children:s})]})})},ye=(0,F.Ay)(S.X)`
  tbody tr:nth-child(odd) {
    background: ${({theme:s})=>s.colors.neutral100};
  }

  thead th span {
    color: ${({theme:s})=>s.colors.neutral500};
  }

  td,
  th {
    padding-block-start: ${({theme:s})=>s.spaces[3]};
    padding-block-end: ${({theme:s})=>s.spaces[3]};
    width: 10%;
    vertical-align: middle;
    text-align: center;
  }

  tbody tr td:first-child {
    /**
     * Add padding to the start of the first column to avoid the checkbox appearing
     * too close to the edge of the table
     */
    padding-inline-start: ${({theme:s})=>s.spaces[2]};
  }
`,je=s=>{const n=[{id:"Settings.webhooks.events.create",defaultMessage:"Create"},{id:"Settings.webhooks.events.update",defaultMessage:"Update"},{id:"app.utils.delete",defaultMessage:"Delete"}];return s&&(n.push({id:"app.utils.publish",defaultMessage:"Publish"}),n.push({id:"app.utils.unpublish",defaultMessage:"Unpublish"})),n},ve=({getHeaders:s=je})=>{const{isDraftAndPublish:n}=ee("Headers"),{formatMessage:r}=(0,T.A)(),g=s(n);return(0,e.jsx)(U.r,{children:(0,e.jsxs)(x.N,{children:[(0,e.jsx)(_.e,{children:(0,e.jsx)(a.s,{children:r({id:"Settings.webhooks.event.select",defaultMessage:"Select event"})})}),g.map(o=>["app.utils.publish","app.utils.unpublish"].includes(o?.id??"")?(0,e.jsx)(_.e,{title:r({id:"Settings.webhooks.event.publish-tooltip",defaultMessage:"This event only exists for content with draft & publish enabled"}),children:(0,e.jsx)(c.o,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id):(0,e.jsx)(_.e,{children:(0,e.jsx)(c.o,{variant:"sigma",textColor:"neutral600",children:r(o)})},o.id))]})})},Pe=({providedEvents:s})=>{const{isDraftAndPublish:n}=ee("Body"),r=s||Oe(n),{values:g,handleChange:o}=(0,D.j7)(),h="events",i=g.events,p=[],j=i.reduce((l,d)=>{const E=d.split(".")[0];return l[E]||(l[E]=[]),l[E].push(d),l},{}),u=({target:{name:l,value:d}})=>{const E=new Set(i);d?E.add(l):E.delete(l),o({target:{name:h,value:Array.from(E)}})},v=({target:{name:l,value:d}})=>{const E=new Set(i);d?r[l].forEach(W=>{p.includes(W)||E.add(W)}):r[l].forEach(W=>E.delete(W)),o({target:{name:h,value:Array.from(E)}})};return(0,e.jsx)(M.f,{children:Object.entries(r).map(([l,d])=>(0,e.jsx)(se,{disabledEvents:p,name:l,events:d,inputValue:j[l],handleSelect:u,handleSelectAll:v},l))})},Oe=s=>{const n=["entry.create","entry.update","entry.delete"];return s&&n.push("entry.publish","entry.unpublish"),{entry:n,media:["media.create","media.update","media.delete"]}},se=({disabledEvents:s=[],name:n,events:r=[],inputValue:g=[],handleSelect:o,handleSelectAll:h})=>{const{formatMessage:i}=(0,T.A)(),p=r.filter(d=>!s.includes(d)),j=g.length>0,u=g.length===p.length,v=({target:{name:d}})=>{h({target:{name:d,value:!u}})},l=5;return(0,e.jsxs)(x.N,{children:[(0,e.jsx)(_.N,{children:(0,e.jsx)(A.S,{indeterminate:j&&!u,"aria-label":i({id:"global.select-all-entries",defaultMessage:"Select all entries"}),name:n,onChange:v,value:u,children:De(n)})}),r.map(d=>(0,e.jsx)(_.N,{children:(0,e.jsx)(B.J,{disabled:s.includes(d),"aria-label":d,name:d,value:g.includes(d),onValueChange:E=>o({target:{name:d,value:E}})})},d)),r.length<l&&(0,e.jsx)(_.N,{colSpan:l-r.length})]})},De=s=>s.replace(/-/g," ").split(" ").map(n=>n.charAt(0).toUpperCase()+n.slice(1).toLowerCase()).join(" "),H={Root:xe,Headers:ve,Body:Pe,Row:se},Ae=()=>(0,e.jsxs)(H.Root,{children:[(0,e.jsx)(H.Headers,{}),(0,e.jsx)(H.Body,{})]}),be=()=>{const{formatMessage:s}=(0,T.A)(),{values:n,errors:r}=(0,D.j7)();return(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:1,children:[(0,e.jsx)(R.d,{children:s({id:"Settings.webhooks.form.headers",defaultMessage:"Headers"})}),(0,e.jsx)(y.a,{padding:8,background:"neutral100",hasRadius:!0,children:(0,e.jsx)(D.ED,{validateOnChange:!1,name:"headers",render:({push:g,remove:o})=>(0,e.jsxs)(K.x,{gap:4,children:[n.headers.map((h,i)=>{const p=r.headers?.[i],j=typeof p=="object"?p.key:void 0,u=typeof p=="object"?p.value:void 0;return(0,e.jsxs)(f.Fragment,{children:[(0,e.jsx)(O.E,{col:6,children:(0,e.jsx)(D.D0,{as:Ce,name:`headers.${i}.key`,"aria-label":`row ${i+1} key`,label:s({id:"Settings.webhooks.key",defaultMessage:"Key"}),error:j})}),(0,e.jsx)(O.E,{col:6,children:(0,e.jsxs)(m.s,{alignItems:"flex-end",children:[(0,e.jsx)(y.a,{style:{flex:1},children:(0,e.jsx)(D.D0,{as:w.k,name:`headers.${i}.value`,"aria-label":`row ${i+1} value`,label:s({id:"Settings.webhooks.value",defaultMessage:"Value"}),error:u})}),(0,e.jsx)(m.s,{paddingLeft:2,style:{alignSelf:"center"},paddingTop:u?0:5,children:(0,e.jsx)(C.yX,{disabled:n.headers.length===1,onClick:()=>o(i),label:s({id:"Settings.webhooks.headers.remove",defaultMessage:"Remove header row {number}"},{number:i+1})})})]})})]},`${i}.${h.key}`)}),(0,e.jsx)(O.E,{col:12,children:(0,e.jsx)(V.Q,{type:"button",onClick:()=>{g({key:"",value:""})},startIcon:(0,e.jsx)(ue.A,{}),children:s({id:"Settings.webhooks.create.header",defaultMessage:"Create new header"})})})]})})})]})},Ce=({name:s,onChange:n,value:r,...g})=>{const{values:{headers:o}}=(0,D.j7)(),[h,i]=f.useState([...te]);f.useEffect(()=>{const u=te.filter(v=>!o?.some(l=>l.key!==r&&l.key===v));i(u)},[o,r]);const p=u=>{n({target:{name:s,value:u}})},j=u=>{i(v=>[...v,u]),p(u)};return(0,e.jsx)(ae.nP,{...g,onClear:()=>p(""),onChange:p,onCreateOption:j,placeholder:"",value:r,children:h.map(u=>(0,e.jsx)(oe.j,{value:u,children:u},u))})},te=["A-IM","Accept","Accept-Charset","Accept-Encoding","Accept-Language","Accept-Datetime","Access-Control-Request-Method","Access-Control-Request-Headers","Authorization","Cache-Control","Connection","Content-Length","Content-Type","Cookie","Date","Expect","Forwarded","From","Host","If-Match","If-Modified-Since","If-None-Match","If-Range","If-Unmodified-Since","Max-Forwards","Origin","Pragma","Proxy-Authorization","Range","Referer","TE","User-Agent","Upgrade","Via","Warning"],Te=({isPending:s,onCancel:n,response:r})=>{const{statusCode:g,message:o}=r??{},{formatMessage:h}=(0,T.A)();return(0,e.jsx)(y.a,{background:"neutral0",padding:5,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(K.x,{gap:4,style:{alignItems:"center"},children:[(0,e.jsx)(O.E,{col:3,children:(0,e.jsx)(c.o,{children:h({id:"Settings.webhooks.trigger.test",defaultMessage:"Test-trigger"})})}),(0,e.jsx)(O.E,{col:3,children:(0,e.jsx)(We,{isPending:s,statusCode:g})}),(0,e.jsx)(O.E,{col:6,children:s?(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsx)("button",{onClick:n,type:"button",children:(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(c.o,{textColor:"neutral400",children:h({id:"Settings.webhooks.trigger.cancel",defaultMessage:"cancel"})}),(0,e.jsx)(N,{as:J.A,color:"neutral400"})]})})}):(0,e.jsx)(Ie,{statusCode:g,message:o})})]})})},N=F.Ay.svg(({theme:s,color:n})=>`
  width: ${12/16}rem;
  height: ${12/16}rem;


  ${n?(0,F.AH)`
          path {
            fill: ${s.colors[n]};
          }
        `:""}
`),We=({isPending:s,statusCode:n})=>{const{formatMessage:r}=(0,T.A)();return s||!n?(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(N,{as:_e.A}),(0,e.jsx)(c.o,{children:r({id:"Settings.webhooks.trigger.pending",defaultMessage:"pending"})})]}):n>=200&&n<300?(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(N,{as:q.A,color:"success700"}),(0,e.jsx)(c.o,{children:r({id:"Settings.webhooks.trigger.success",defaultMessage:"success"})})]}):n>=300?(0,e.jsxs)(m.s,{gap:2,alignItems:"center",children:[(0,e.jsx)(N,{as:J.A,color:"danger700"}),(0,e.jsxs)(c.o,{children:[r({id:"Settings.error",defaultMessage:"error"})," ",n]})]}):null},Ie=({statusCode:s,message:n})=>{const{formatMessage:r}=(0,T.A)();return s?s>=200&&s<300?(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsx)(c.o,{textColor:"neutral600",ellipsis:!0,children:r({id:"Settings.webhooks.trigger.success.label",defaultMessage:"Trigger succeeded"})})}):s>=300?(0,e.jsx)(m.s,{justifyContent:"flex-end",children:(0,e.jsx)(m.s,{maxWidth:(0,C.a8)(250),justifyContent:"flex-end",title:n,children:(0,e.jsx)(c.o,{ellipsis:!0,textColor:"neutral600",children:n})})}):null:null},Re=({handleSubmit:s,triggerWebhook:n,isCreating:r,isTriggering:g,triggerResponse:o,data:h})=>{const{formatMessage:i}=(0,T.A)(),[p,j]=f.useState(!1),u=(0,$.p)(Ae,async()=>(await t.e(781).then(t.bind(t,60781))).EventsTableEE),v=d=>Object.keys(d).length?Object.entries(d).map(([E,W])=>({key:E,value:W})):[{key:"",value:""}],l=(0,D.Wx)({initialValues:{name:h?.name||"",url:h?.url||"",headers:v(h?.headers||{}),events:h?.events||[]},async onSubmit(d,E){await s(d,E),E.resetForm({values:d})},validationSchema:Se({formatMessage:i}),validateOnChange:!1,validateOnBlur:!1});return u?(0,e.jsx)(D.QI,{value:l,children:(0,e.jsxs)(C.lV,{children:[(0,e.jsx)(ie.Q,{primaryAction:(0,e.jsxs)(m.s,{gap:2,children:[(0,e.jsx)(Q.$,{onClick:()=>{n(),j(!0)},variant:"tertiary",startIcon:(0,e.jsx)(Ee.A,{}),disabled:r||g,size:"L",children:i({id:"Settings.webhooks.trigger",defaultMessage:"Trigger"})}),(0,e.jsx)(Q.$,{startIcon:(0,e.jsx)(q.A,{}),type:"submit",size:"L",disabled:!l.dirty,loading:l.isSubmitting,children:i({id:"global.save",defaultMessage:"Save"})})]}),title:r?i({id:"Settings.webhooks.create",defaultMessage:"Create a webhook"}):h?.name,navigationAction:(0,e.jsx)(he.N,{as:ce.k2,startIcon:(0,e.jsx)(me.A,{}),to:"/settings/webhooks",children:i({id:"global.back",defaultMessage:"Back"})})}),(0,e.jsx)(le.s,{children:(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:4,children:[p&&(0,e.jsx)(Te,{isPending:g,response:o,onCancel:()=>j(!1)}),(0,e.jsx)(y.a,{background:"neutral0",padding:8,shadow:"filterShadow",hasRadius:!0,children:(0,e.jsxs)(m.s,{direction:"column",alignItems:"stretch",gap:6,children:[(0,e.jsxs)(K.x,{gap:6,children:[(0,e.jsx)(O.E,{col:6,children:(0,e.jsx)(D.D0,{as:w.k,name:"name",error:l.errors.name,label:i({id:"global.name",defaultMessage:"Name"}),required:!0})}),(0,e.jsx)(O.E,{col:12,children:(0,e.jsx)(D.D0,{as:w.k,name:"url",error:l.errors.url,label:i({id:"Settings.roles.form.input.url",defaultMessage:"Url"}),required:!0})})]}),(0,e.jsx)(be,{}),(0,e.jsx)(u,{})]})})]})})]})}):null},ke=/(^$)|(^[A-Za-z][_0-9A-Za-z ]*$)/,Le=/(^$)|((https?:\/\/.*)(d*)\/?(.*))/,Se=({formatMessage:s})=>b.Ik().shape({name:b.Yj().required(s({id:"Settings.webhooks.validation.name.required",defaultMessage:"Name is required"})).matches(ke,s({id:"Settings.webhooks.validation.name.regex",defaultMessage:"The name must start with a letter and only contain letters, numbers, spaces and underscores"})),url:b.Yj().required(s({id:"Settings.webhooks.validation.url.required",defaultMessage:"Url is required"})).matches(Le,s({id:"Settings.webhooks.validation.url.regex",defaultMessage:"The value must be a valid Url"})),headers:b.RZ(n=>{const r=b.YO();if(n.length===1){const{key:g,value:o}=n[0];if(!g&&!o)return r}return r.of(b.Ik().shape({key:b.Yj().required(s({id:"Settings.webhooks.validation.key",defaultMessage:"Key is required"})),value:b.Yj().required(s({id:"Settings.webhooks.validation.value",defaultMessage:"Value is required"}))}))}),events:b.YO()}),ne=s=>({...s,headers:s.headers.reduce((n,{key:r,value:g})=>(r!==""&&(n[r]=g),n),{})}),z=()=>{const n=(0,X.W5)("/settings/webhooks/:id")?.params.id,r=n==="create",{replace:g}=(0,X.W6)(),o=(0,C.hN)(),{_unstableFormatAPIError:h,_unstableFormatValidationErrors:i}=(0,C.wq)(),p=f.useCallback(h,[]),{isLoading:j}=(0,Z.u)(),[u,v]=f.useState(!1),[l,d]=f.useState(),{isLoading:E,webhooks:W,error:G,createWebhook:Be,updateWebhook:Ke,triggerWebhook:we}=(0,fe.u)({id:n},{skip:r});f.useEffect(()=>{G&&o({type:"warning",message:p(G)})},[G,o,p]);const $e=async()=>{try{v(!0);const k=await we(n);if("error"in k){o({type:"warning",message:h(k.error)});return}d(k.data)}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}finally{v(!1)}},He=async(k,re)=>{try{if(r){const P=await Be(ne(k));if("error"in P){(0,$.x)(P.error)&&P.error.name==="ValidationError"?re.setErrors(i(P.error)):o({type:"warning",message:h(P.error)});return}o({type:"success",message:{id:"Settings.webhooks.created"}}),g(`/settings/webhooks/${P.data.id}`)}else{const P=await Ke({id:n,...ne(k)});if("error"in P){(0,$.x)(P.error)&&P.error.name==="ValidationError"?re.setErrors(i(P.error)):o({type:"warning",message:h(P.error)});return}o({type:"success",message:{id:"notification.form.success.fields"}})}}catch{o({type:"warning",message:{id:"notification.error",defaultMessage:"An error occurred"}})}};if(E||j)return(0,e.jsx)(C.Bl,{});const[Ne]=W??[];return(0,e.jsxs)(de.g,{children:[(0,e.jsx)(C.x7,{name:"Webhooks"}),(0,e.jsx)(Re,{data:Ne,handleSubmit:He,triggerWebhook:$e,isCreating:r,isTriggering:u,triggerResponse:l})]})},Ue=Object.freeze(Object.defineProperty({__proto__:null,EditPage:z,ProtectedEditPage:()=>{const s=(0,$.j)(ge.s);return(0,e.jsx)(C.kz,{permissions:s.settings?.webhooks.update,children:(0,e.jsx)(z,{})})}},Symbol.toStringTag,{value:"Module"}))},78917:(Y,I,t)=>{t.d(I,{u:()=>U});var e=t(21272),f=t(55506),m=t(55397);const R=m.n.injectEndpoints({endpoints:x=>({getComponents:x.query({query:()=>({url:"/content-manager/components",method:"GET"}),transformResponse:_=>_.data}),getContentTypes:x.query({query:()=>({url:"/content-manager/content-types",method:"GET"}),transformResponse:_=>_.data})}),overrideExisting:!1}),{useGetComponentsQuery:L,useGetContentTypesQuery:S}=R;function U(){const{_unstableFormatAPIError:x}=(0,f.wq)(),_=(0,f.hN)(),a=L(),c=S();e.useEffect(()=>{c.error&&_({type:"warning",message:x(c.error)})},[c.error,x,_]),e.useEffect(()=>{a.error&&_({type:"warning",message:x(a.error)})},[a.error,x,_]);const M=a.isLoading||c.isLoading,A=e.useMemo(()=>(c?.data??[]).filter(y=>y.kind==="collectionType"&&y.isDisplayed),[c?.data]),B=e.useMemo(()=>(c?.data??[]).filter(y=>y.kind!=="collectionType"&&y.isDisplayed),[c?.data]);return{isLoading:M,components:e.useMemo(()=>a?.data??[],[a?.data]),collectionTypes:A,singleTypes:B}}},60079:(Y,I,t)=>{t.d(I,{u:()=>x});var e=t(55397);const f=e.n.injectEndpoints({endpoints:_=>({getWebhooks:_.query({query:a=>({url:`/admin/webhooks/${a?.id??""}`,method:"GET"}),transformResponse:a=>Array.isArray(a.data)?a.data:[a.data],providesTags:(a,c,M)=>typeof M=="object"&&"id"in M?[{type:"Webhook",id:M.id}]:[...a?.map(({id:A})=>({type:"Webhook",id:A}))??[],{type:"Webhook",id:"LIST"}]}),createWebhook:_.mutation({query:a=>({url:"/admin/webhooks",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:[{type:"Webhook",id:"LIST"}]}),updateWebhook:_.mutation({query:({id:a,...c})=>({url:`/admin/webhooks/${a}`,method:"PUT",data:c}),transformResponse:a=>a.data,invalidatesTags:(a,c,{id:M})=>[{type:"Webhook",id:M}]}),triggerWebhook:_.mutation({query:a=>({url:`/admin/webhooks/${a}/trigger`,method:"POST"}),transformResponse:a=>a.data}),deleteManyWebhooks:_.mutation({query:a=>({url:"/admin/webhooks/batch-delete",method:"POST",data:a}),transformResponse:a=>a.data,invalidatesTags:(a,c,{ids:M})=>M.map(A=>({type:"Webhook",id:A}))})}),overrideExisting:!1}),{useGetWebhooksQuery:m,useCreateWebhookMutation:R,useUpdateWebhookMutation:L,useTriggerWebhookMutation:S,useDeleteManyWebhooksMutation:U}=f,x=(_=void 0,a)=>{const{data:c,isLoading:M,error:A}=m(_,a),[B,{error:y}]=R(),[K,{error:O}]=L(),[w]=S(),[V]=U();return{webhooks:c,isLoading:M,error:A||y||O,createWebhook:B,updateWebhook:K,triggerWebhook:w,deleteManyWebhooks:V}}}}]);
