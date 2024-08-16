import{d as he,g as de,r as ue}from"./chunk-P6WKFK4U.js";import{Ba as se,Ea as oe,Fa as ie,H,K as ee,Qa as ae,Sa as ce,T as ne,Za as le,a as Z,da as re,f as V,i as X,ia as te,la as I,oa as A,qa as v,r as Q,ra as g,s as J,x as k}from"./chunk-MVAKQA6F.js";var L=class{},B=class{},w=class n{constructor(e){this.normalizedNames=new Map,this.lazyUpdate=null,e?typeof e=="string"?this.lazyInit=()=>{this.headers=new Map,e.split(`
`).forEach(t=>{let r=t.indexOf(":");if(r>0){let s=t.slice(0,r),o=s.toLowerCase(),a=t.slice(r+1).trim();this.maybeSetNormalizedName(s,o),this.headers.has(o)?this.headers.get(o).push(a):this.headers.set(o,[a])}})}:typeof Headers<"u"&&e instanceof Headers?(this.headers=new Map,e.forEach((t,r)=>{this.setHeaderEntries(r,t)})):this.lazyInit=()=>{this.headers=new Map,Object.entries(e).forEach(([t,r])=>{this.setHeaderEntries(t,r)})}:this.headers=new Map}has(e){return this.init(),this.headers.has(e.toLowerCase())}get(e){this.init();let t=this.headers.get(e.toLowerCase());return t&&t.length>0?t[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(e){return this.init(),this.headers.get(e.toLowerCase())||null}append(e,t){return this.clone({name:e,value:t,op:"a"})}set(e,t){return this.clone({name:e,value:t,op:"s"})}delete(e,t){return this.clone({name:e,value:t,op:"d"})}maybeSetNormalizedName(e,t){this.normalizedNames.has(t)||this.normalizedNames.set(t,e)}init(){this.lazyInit&&(this.lazyInit instanceof n?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(e=>this.applyUpdate(e)),this.lazyUpdate=null))}copyFrom(e){e.init(),Array.from(e.headers.keys()).forEach(t=>{this.headers.set(t,e.headers.get(t)),this.normalizedNames.set(t,e.normalizedNames.get(t))})}clone(e){let t=new n;return t.lazyInit=this.lazyInit&&this.lazyInit instanceof n?this.lazyInit:this,t.lazyUpdate=(this.lazyUpdate||[]).concat([e]),t}applyUpdate(e){let t=e.name.toLowerCase();switch(e.op){case"a":case"s":let r=e.value;if(typeof r=="string"&&(r=[r]),r.length===0)return;this.maybeSetNormalizedName(e.name,t);let s=(e.op==="a"?this.headers.get(t):void 0)||[];s.push(...r),this.headers.set(t,s);break;case"d":let o=e.value;if(!o)this.headers.delete(t),this.normalizedNames.delete(t);else{let a=this.headers.get(t);if(!a)return;a=a.filter(i=>o.indexOf(i)===-1),a.length===0?(this.headers.delete(t),this.normalizedNames.delete(t)):this.headers.set(t,a)}break}}setHeaderEntries(e,t){let r=(Array.isArray(t)?t:[t]).map(o=>o.toString()),s=e.toLowerCase();this.headers.set(s,r),this.maybeSetNormalizedName(e,s)}forEach(e){this.init(),Array.from(this.normalizedNames.keys()).forEach(t=>e(this.normalizedNames.get(t),this.headers.get(t)))}};var G=class{encodeKey(e){return fe(e)}encodeValue(e){return fe(e)}decodeKey(e){return decodeURIComponent(e)}decodeValue(e){return decodeURIComponent(e)}};function be(n,e){let t=new Map;return n.length>0&&n.replace(/^\?/,"").split("&").forEach(s=>{let o=s.indexOf("="),[a,i]=o==-1?[e.decodeKey(s),""]:[e.decodeKey(s.slice(0,o)),e.decodeValue(s.slice(o+1))],d=t.get(a)||[];d.push(i),t.set(a,d)}),t}var Pe=/%(\d[a-f0-9])/gi,Ne={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function fe(n){return encodeURIComponent(n).replace(Pe,(e,t)=>Ne[t]??e)}function _(n){return`${n}`}var b=class n{constructor(e={}){if(this.updates=null,this.cloneFrom=null,this.encoder=e.encoder||new G,e.fromString){if(e.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=be(e.fromString,this.encoder)}else e.fromObject?(this.map=new Map,Object.keys(e.fromObject).forEach(t=>{let r=e.fromObject[t],s=Array.isArray(r)?r.map(_):[_(r)];this.map.set(t,s)})):this.map=null}has(e){return this.init(),this.map.has(e)}get(e){this.init();let t=this.map.get(e);return t?t[0]:null}getAll(e){return this.init(),this.map.get(e)||null}keys(){return this.init(),Array.from(this.map.keys())}append(e,t){return this.clone({param:e,value:t,op:"a"})}appendAll(e){let t=[];return Object.keys(e).forEach(r=>{let s=e[r];Array.isArray(s)?s.forEach(o=>{t.push({param:r,value:o,op:"a"})}):t.push({param:r,value:s,op:"a"})}),this.clone(t)}set(e,t){return this.clone({param:e,value:t,op:"s"})}delete(e,t){return this.clone({param:e,value:t,op:"d"})}toString(){return this.init(),this.keys().map(e=>{let t=this.encoder.encodeKey(e);return this.map.get(e).map(r=>t+"="+this.encoder.encodeValue(r)).join("&")}).filter(e=>e!=="").join("&")}clone(e){let t=new n({encoder:this.encoder});return t.cloneFrom=this.cloneFrom||this,t.updates=(this.updates||[]).concat(e),t}init(){this.map===null&&(this.map=new Map),this.cloneFrom!==null&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(e=>this.map.set(e,this.cloneFrom.map.get(e))),this.updates.forEach(e=>{switch(e.op){case"a":case"s":let t=(e.op==="a"?this.map.get(e.param):void 0)||[];t.push(_(e.value)),this.map.set(e.param,t);break;case"d":if(e.value!==void 0){let r=this.map.get(e.param)||[],s=r.indexOf(_(e.value));s!==-1&&r.splice(s,1),r.length>0?this.map.set(e.param,r):this.map.delete(e.param)}else{this.map.delete(e.param);break}}}),this.cloneFrom=this.updates=null)}};var W=class{constructor(){this.map=new Map}set(e,t){return this.map.set(e,t),this}get(e){return this.map.has(e)||this.map.set(e,e.defaultValue()),this.map.get(e)}delete(e){return this.map.delete(e),this}has(e){return this.map.has(e)}keys(){return this.map.keys()}};function Ae(n){switch(n){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}function pe(n){return typeof ArrayBuffer<"u"&&n instanceof ArrayBuffer}function ye(n){return typeof Blob<"u"&&n instanceof Blob}function me(n){return typeof FormData<"u"&&n instanceof FormData}function Oe(n){return typeof URLSearchParams<"u"&&n instanceof URLSearchParams}var F=class n{constructor(e,t,r,s){this.url=t,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=e.toUpperCase();let o;if(Ae(this.method)||s?(this.body=r!==void 0?r:null,o=s):o=r,o&&(this.reportProgress=!!o.reportProgress,this.withCredentials=!!o.withCredentials,o.responseType&&(this.responseType=o.responseType),o.headers&&(this.headers=o.headers),o.context&&(this.context=o.context),o.params&&(this.params=o.params),this.transferCache=o.transferCache),this.headers??=new w,this.context??=new W,!this.params)this.params=new b,this.urlWithParams=t;else{let a=this.params.toString();if(a.length===0)this.urlWithParams=t;else{let i=t.indexOf("?"),d=i===-1?"?":i<t.length-1?"&":"";this.urlWithParams=t+d+a}}}serializeBody(){return this.body===null?null:typeof this.body=="string"||pe(this.body)||ye(this.body)||me(this.body)||Oe(this.body)?this.body:this.body instanceof b?this.body.toString():typeof this.body=="object"||typeof this.body=="boolean"||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return this.body===null||me(this.body)?null:ye(this.body)?this.body.type||null:pe(this.body)?null:typeof this.body=="string"?"text/plain":this.body instanceof b?"application/x-www-form-urlencoded;charset=UTF-8":typeof this.body=="object"||typeof this.body=="number"||typeof this.body=="boolean"?"application/json":null}clone(e={}){let t=e.method||this.method,r=e.url||this.url,s=e.responseType||this.responseType,o=e.transferCache??this.transferCache,a=e.body!==void 0?e.body:this.body,i=e.withCredentials??this.withCredentials,d=e.reportProgress??this.reportProgress,c=e.headers||this.headers,f=e.params||this.params,m=e.context??this.context;return e.setHeaders!==void 0&&(c=Object.keys(e.setHeaders).reduce((p,T)=>p.set(T,e.setHeaders[T]),c)),e.setParams&&(f=Object.keys(e.setParams).reduce((p,T)=>p.set(T,e.setParams[T]),f)),new n(t,r,a,{params:f,headers:c,context:m,reportProgress:d,responseType:s,withCredentials:i,transferCache:o})}},P=function(n){return n[n.Sent=0]="Sent",n[n.UploadProgress=1]="UploadProgress",n[n.ResponseHeader=2]="ResponseHeader",n[n.DownloadProgress=3]="DownloadProgress",n[n.Response=4]="Response",n[n.User=5]="User",n}(P||{}),j=class{constructor(e,t=200,r="OK"){this.headers=e.headers||new w,this.status=e.status!==void 0?e.status:t,this.statusText=e.statusText||r,this.url=e.url||null,this.ok=this.status>=200&&this.status<300}},z=class n extends j{constructor(e={}){super(e),this.type=P.ResponseHeader}clone(e={}){return new n({headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},U=class n extends j{constructor(e={}){super(e),this.type=P.Response,this.body=e.body!==void 0?e.body:null}clone(e={}){return new n({body:e.body!==void 0?e.body:this.body,headers:e.headers||this.headers,status:e.status!==void 0?e.status:this.status,statusText:e.statusText||this.statusText,url:e.url||this.url||void 0})}},R=class extends j{constructor(e){super(e,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.status>=200&&this.status<300?this.message=`Http failure during parsing for ${e.url||"(unknown url)"}`:this.message=`Http failure response for ${e.url||"(unknown url)"}: ${e.status} ${e.statusText}`,this.error=e.error||null}},Ee=200,Ie=204;function $(n,e){return{body:e,headers:n.headers,context:n.context,observe:n.observe,params:n.params,reportProgress:n.reportProgress,responseType:n.responseType,withCredentials:n.withCredentials,transferCache:n.transferCache}}var Me=(()=>{let e=class e{constructor(r){this.handler=r}request(r,s,o={}){let a;if(r instanceof F)a=r;else{let c;o.headers instanceof w?c=o.headers:c=new w(o.headers);let f;o.params&&(o.params instanceof b?f=o.params:f=new b({fromObject:o.params})),a=new F(r,s,o.body!==void 0?o.body:null,{headers:c,context:o.context,params:f,reportProgress:o.reportProgress,responseType:o.responseType||"json",withCredentials:o.withCredentials,transferCache:o.transferCache})}let i=J(a).pipe(ee(c=>this.handler.handle(c)));if(r instanceof F||o.observe==="events")return i;let d=i.pipe(H(c=>c instanceof U));switch(o.observe||"body"){case"body":switch(a.responseType){case"arraybuffer":return d.pipe(k(c=>{if(c.body!==null&&!(c.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return c.body}));case"blob":return d.pipe(k(c=>{if(c.body!==null&&!(c.body instanceof Blob))throw new Error("Response is not a Blob.");return c.body}));case"text":return d.pipe(k(c=>{if(c.body!==null&&typeof c.body!="string")throw new Error("Response is not a string.");return c.body}));case"json":default:return d.pipe(k(c=>c.body))}case"response":return d;default:throw new Error(`Unreachable: unhandled observe type ${o.observe}}`)}}delete(r,s={}){return this.request("DELETE",r,s)}get(r,s={}){return this.request("GET",r,s)}head(r,s={}){return this.request("HEAD",r,s)}jsonp(r,s){return this.request("JSONP",r,{params:new b().append(s,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(r,s={}){return this.request("OPTIONS",r,s)}patch(r,s,o={}){return this.request("PATCH",r,$(o,s))}post(r,s,o={}){return this.request("POST",r,$(o,s))}put(r,s,o={}){return this.request("PUT",r,$(o,s))}};e.\u0275fac=function(s){return new(s||e)(v(L))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})(),De=/^\)\]\}',?\n/,xe="X-Request-URL";function ge(n){if(n.url)return n.url;let e=xe.toLocaleLowerCase();return n.headers.get(e)}var ke=(()=>{let e=class e{constructor(){this.fetchImpl=g(C,{optional:!0})?.fetch??fetch.bind(globalThis),this.ngZone=g(ce)}handle(r){return new X(s=>{let o=new AbortController;return this.doRequest(r,o.signal,s).then(K,a=>s.error(new R({error:a}))),()=>o.abort()})}doRequest(r,s,o){return V(this,null,function*(){let a=this.createRequestInit(r),i;try{let y=this.ngZone.runOutsideAngular(()=>this.fetchImpl(r.urlWithParams,Z({signal:s},a)));Fe(y),o.next({type:P.Sent}),i=yield y}catch(y){o.error(new R({error:y,status:y.status??0,statusText:y.statusText,url:r.urlWithParams,headers:y.headers}));return}let d=new w(i.headers),c=i.statusText,f=ge(i)??r.urlWithParams,m=i.status,p=null;if(r.reportProgress&&o.next(new z({headers:d,status:m,statusText:c,url:f})),i.body){let y=i.headers.get("content-length"),M=[],l=i.body.getReader(),h=0,E,O,u=typeof Zone<"u"&&Zone.current;yield this.ngZone.runOutsideAngular(()=>V(this,null,function*(){for(;;){let{done:N,value:x}=yield l.read();if(N)break;if(M.push(x),h+=x.length,r.reportProgress){O=r.responseType==="text"?(O??"")+(E??=new TextDecoder).decode(x,{stream:!0}):void 0;let Y=()=>o.next({type:P.DownloadProgress,total:y?+y:void 0,loaded:h,partialText:O});u?u.run(Y):Y()}}}));let D=this.concatChunks(M,h);try{let N=i.headers.get("Content-Type")??"";p=this.parseBody(r,D,N)}catch(N){o.error(new R({error:N,headers:new w(i.headers),status:i.status,statusText:i.statusText,url:ge(i)??r.urlWithParams}));return}}m===0&&(m=p?Ee:0),m>=200&&m<300?(o.next(new U({body:p,headers:d,status:m,statusText:c,url:f})),o.complete()):o.error(new R({error:p,headers:d,status:m,statusText:c,url:f}))})}parseBody(r,s,o){switch(r.responseType){case"json":let a=new TextDecoder().decode(s).replace(De,"");return a===""?null:JSON.parse(a);case"text":return new TextDecoder().decode(s);case"blob":return new Blob([s],{type:o});case"arraybuffer":return s.buffer}}createRequestInit(r){let s={},o=r.withCredentials?"include":void 0;if(r.headers.forEach((a,i)=>s[a]=i.join(",")),r.headers.has("Accept")||(s.Accept="application/json, text/plain, */*"),!r.headers.has("Content-Type")){let a=r.detectContentTypeHeader();a!==null&&(s["Content-Type"]=a)}return{body:r.serializeBody(),method:r.method,headers:s,credentials:o}}concatChunks(r,s){let o=new Uint8Array(s),a=0;for(let i of r)o.set(i,a),a+=i.length;return o}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})(),C=class{};function K(){}function Fe(n){n.then(K,K)}function Le(n,e){return e(n)}function je(n,e,t){return(r,s)=>ie(t,()=>e(r,o=>n(o,s)))}var q=new A(""),Ue=new A(""),_e=new A("",{providedIn:"root",factory:()=>!0});var Te=(()=>{let e=class e extends L{constructor(r,s){super(),this.backend=r,this.injector=s,this.chain=null,this.pendingTasks=g(ae),this.contributeToStability=g(_e)}handle(r){if(this.chain===null){let s=Array.from(new Set([...this.injector.get(q),...this.injector.get(Ue,[])]));this.chain=s.reduceRight((o,a)=>je(o,a,this.injector),Le)}if(this.contributeToStability){let s=this.pendingTasks.add();return this.chain(r,o=>this.backend.handle(o)).pipe(ne(()=>this.pendingTasks.remove(s)))}else return this.chain(r,s=>this.backend.handle(s))}};e.\u0275fac=function(s){return new(s||e)(v(B),v(oe))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})();var Be=/^\)\]\}',?\n/;function ze(n){return"responseURL"in n&&n.responseURL?n.responseURL:/^X-Request-URL:/m.test(n.getAllResponseHeaders())?n.getResponseHeader("X-Request-URL"):null}var we=(()=>{let e=class e{constructor(r){this.xhrFactory=r}handle(r){if(r.method==="JSONP")throw new te(-2800,!1);let s=this.xhrFactory;return(s.\u0275loadImpl?Q(s.\u0275loadImpl()):J(null)).pipe(re(()=>new X(a=>{let i=s.build();if(i.open(r.method,r.urlWithParams),r.withCredentials&&(i.withCredentials=!0),r.headers.forEach((l,h)=>i.setRequestHeader(l,h.join(","))),r.headers.has("Accept")||i.setRequestHeader("Accept","application/json, text/plain, */*"),!r.headers.has("Content-Type")){let l=r.detectContentTypeHeader();l!==null&&i.setRequestHeader("Content-Type",l)}if(r.responseType){let l=r.responseType.toLowerCase();i.responseType=l!=="json"?l:"text"}let d=r.serializeBody(),c=null,f=()=>{if(c!==null)return c;let l=i.statusText||"OK",h=new w(i.getAllResponseHeaders()),E=ze(i)||r.url;return c=new z({headers:h,status:i.status,statusText:l,url:E}),c},m=()=>{let{headers:l,status:h,statusText:E,url:O}=f(),u=null;h!==Ie&&(u=typeof i.response>"u"?i.responseText:i.response),h===0&&(h=u?Ee:0);let D=h>=200&&h<300;if(r.responseType==="json"&&typeof u=="string"){let N=u;u=u.replace(Be,"");try{u=u!==""?JSON.parse(u):null}catch(x){u=N,D&&(D=!1,u={error:x,text:u})}}D?(a.next(new U({body:u,headers:l,status:h,statusText:E,url:O||void 0})),a.complete()):a.error(new R({error:u,headers:l,status:h,statusText:E,url:O||void 0}))},p=l=>{let{url:h}=f(),E=new R({error:l,status:i.status||0,statusText:i.statusText||"Unknown Error",url:h||void 0});a.error(E)},T=!1,y=l=>{T||(a.next(f()),T=!0);let h={type:P.DownloadProgress,loaded:l.loaded};l.lengthComputable&&(h.total=l.total),r.responseType==="text"&&i.responseText&&(h.partialText=i.responseText),a.next(h)},M=l=>{let h={type:P.UploadProgress,loaded:l.loaded};l.lengthComputable&&(h.total=l.total),a.next(h)};return i.addEventListener("load",m),i.addEventListener("error",p),i.addEventListener("timeout",p),i.addEventListener("abort",p),r.reportProgress&&(i.addEventListener("progress",y),d!==null&&i.upload&&i.upload.addEventListener("progress",M)),i.send(d),a.next({type:P.Sent}),()=>{i.removeEventListener("error",p),i.removeEventListener("abort",p),i.removeEventListener("load",m),i.removeEventListener("timeout",p),r.reportProgress&&(i.removeEventListener("progress",y),d!==null&&i.upload&&i.upload.removeEventListener("progress",M)),i.readyState!==i.DONE&&i.abort()}})))}};e.\u0275fac=function(s){return new(s||e)(v(ue))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})(),ve=new A(""),Se="XSRF-TOKEN",Ve=new A("",{providedIn:"root",factory:()=>Se}),Xe="X-XSRF-TOKEN",Je=new A("",{providedIn:"root",factory:()=>Xe}),S=class{},$e=(()=>{let e=class e{constructor(r,s,o){this.doc=r,this.platform=s,this.cookieName=o,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if(this.platform==="server")return null;let r=this.doc.cookie||"";return r!==this.lastCookieString&&(this.parseCount++,this.lastToken=de(r,this.cookieName),this.lastCookieString=r),this.lastToken}};e.\u0275fac=function(s){return new(s||e)(v(he),v(le),v(Ve))},e.\u0275prov=I({token:e,factory:e.\u0275fac});let n=e;return n})();function Ge(n,e){let t=n.url.toLowerCase();if(!g(ve)||n.method==="GET"||n.method==="HEAD"||t.startsWith("http://")||t.startsWith("https://"))return e(n);let r=g(S).getToken(),s=g(Je);return r!=null&&!n.headers.has(s)&&(n=n.clone({headers:n.headers.set(s,r)})),e(n)}var Re=function(n){return n[n.Interceptors=0]="Interceptors",n[n.LegacyInterceptors=1]="LegacyInterceptors",n[n.CustomXsrfConfiguration=2]="CustomXsrfConfiguration",n[n.NoXsrfProtection=3]="NoXsrfProtection",n[n.JsonpSupport=4]="JsonpSupport",n[n.RequestsMadeViaParent=5]="RequestsMadeViaParent",n[n.Fetch=6]="Fetch",n}(Re||{});function We(n,e){return{\u0275kind:n,\u0275providers:e}}function gn(...n){let e=[Me,we,Te,{provide:L,useExisting:Te},{provide:B,useFactory:()=>g(ke,{optional:!0})??g(we)},{provide:q,useValue:Ge,multi:!0},{provide:ve,useValue:!0},{provide:S,useClass:$e}];for(let t of n)e.push(...t.\u0275providers);return se(e)}function Tn(n){return We(Re.Interceptors,n.map(e=>({provide:q,useValue:e,multi:!0})))}export{Me as a,gn as b,Tn as c};
