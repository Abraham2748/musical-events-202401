import{m as pe,n as A,o as de,s as ue,u as fe}from"./chunk-F5353J4H.js";import{a as le}from"./chunk-2R7ELPYG.js";import{a as ce}from"./chunk-X64264XV.js";import{d as b,k as ne}from"./chunk-6DHSYMQH.js";import"./chunk-ETPJJ7F2.js";import{a as R,b as se}from"./chunk-JAEZZ4YL.js";import"./chunk-U7PKJXUN.js";import"./chunk-XZTZSAIE.js";import{B as j,C as me,b as oe,f as C,j as y,n as h,u as E,v as $}from"./chunk-H6QXYRT5.js";import"./chunk-BVBJM3DY.js";import{a as re,c as ae}from"./chunk-DTMFEOMX.js";import{V as H,t as ie,u}from"./chunk-RXNAOD2N.js";import"./chunk-C33KSXYJ.js";import"./chunk-TU7DQ6AP.js";import{m as G}from"./chunk-P6WKFK4U.js";import{Bb as J,Bc as D,Cc as I,Hb as O,Ia as W,Ib as K,Ja as q,Jb as Q,Kb as X,L as z,Mb as p,Pb as P,Rb as Y,Sb as B,Ub as T,Vb as L,Wb as n,Xb as o,Yb as d,ac as Z,ca as M,da as U,dc as ee,fc as f,i as _,la as v,ob as s,pc as r,qc as te,ra as l,wc as S,x as g,xa as x,y as V}from"./chunk-MVAKQA6F.js";var k=(()=>{let t=class t{constructor(){this.currentValue$=new _}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();var w=(()=>{let t=class t{constructor(){this.breakpointObserver=l(ie),this.currentBreakpoint=J(""),this.breakpointObserver.observe([u.Small,u.Medium,u.Large]).subscribe(a=>{a.matches&&(a.breakpoints[u.Small]&&this.currentBreakpoint.set("small"),a.breakpoints[u.Medium]&&this.currentBreakpoint.set("medium"),a.breakpoints[u.Large]&&this.currentBreakpoint.set("large"))})}};t.\u0275fac=function(i){return new(i||t)},t.\u0275prov=v({token:t,factory:t.\u0275fac,providedIn:"root"});let e=t;return e})();function ve(e,t){if(e&1){let c=Z();n(0,"div",5)(1,"button",6),r(2," MENU "),o(),n(3,"button",7),ee("click",function(){W(c);let i=f();return q(i.authService.logout())}),r(4," CERRAR SESI\xD3N "),o()()}if(e&2){let c=f();s(),p("routerLink",c.authService.isAdministrator()?"/admin":"/customer")}}function xe(e,t){e&1&&(n(0,"div",5)(1,"button",8),r(2,"INGRESAR"),o(),n(3,"button",9),r(4," REG\xCDSTRATE "),o()())}var ge=(()=>{let t=class t{constructor(){this.searchBarFormControl=new y(""),this.searchBarService=l(k),this.authService=l(ne),this.layoutService=l(w),this.searchBarService.currentValue$=this.searchBarFormControl.valueChanges.pipe(g(a=>a||""),z(300),M(""))}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-header"]],standalone:!0,features:[S],decls:11,vars:4,consts:[[1,"box-shadow"],[1,"container"],["routerLink","/home",1,"logo-container"],["src","assets/images/logo.png","alt","logo"],["type","text","placeholder","Buscar...",1,"search-bar",3,"formControl"],[1,"buttons-container"],["mat-button","",1,"primary",3,"routerLink"],["mat-button","",1,"accent",3,"click"],["mat-button","","routerLink","/login",1,"primary"],["mat-button","","routerLink","/register",1,"accent"]],template:function(i,m){i&1&&(n(0,"div")(1,"header",0)(2,"div",1)(3,"div",2),d(4,"img",3),n(5,"h1"),r(6,"MUSICAL EVENTS"),o()(),n(7,"div"),d(8,"input",4),o(),O(9,ve,5,1,"div",5)(10,xe,5,0,"div",5),o()()()),i&2&&(P(m.layoutService.currentBreakpoint()),s(8),p("formControl",m.searchBarFormControl),s(),Y(m.authService.loggedIn()?9:10))},dependencies:[ae,re,b,E,oe,C,h],styles:["header[_ngcontent-%COMP%]{background-color:var(--secondary-color);display:flex;justify-content:center;height:80px}header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:1000px;display:flex;justify-content:space-between;align-items:center}header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:10px;cursor:pointer}header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50px;height:50px}header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .logo-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:16px;color:#fff;font-weight:500;margin-bottom:0}header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{width:400px;height:30px;border-radius:8px;padding-left:10px}header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{display:flex;gap:20px}header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .primary[_ngcontent-%COMP%]{color:var(--primary-color)}header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%]{color:var(--accent-color)}.medium[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{width:700px}.medium[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .search-bar[_ngcontent-%COMP%]{width:200px}.medium[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]{gap:10px}"]});let e=t;return e})();var Ce=de("home"),he=A(Ce,e=>e.genres),_e=A(Ce,e=>e.concerts);var Oe=()=>[j,$,R,H,C,h,G];function Pe(e,t){if(e&1&&(n(0,"mat-option",7),r(1),o()),e&2){let c=t.$implicit;p("value",c.id),s(),te(c.name)}}function Se(e,t){if(e&1&&(n(0,"section",5)(1,"mat-form-field")(2,"mat-label"),r(3,"G\xE9nero musical"),o(),n(4,"mat-select",6)(5,"mat-option",7),r(6,"Todos"),o(),T(7,Pe,2,2,"mat-option",7,B),D(9,"async"),o()(),n(10,"span"),r(11,"Selecciona tu g\xE9nero musical favorito (Firebase using Github Actions!)"),o()()),e&2){let c=f();s(4),p("formControl",c.currentGenre),s(),p("value",0),s(2),L(I(9,2,c.genres$))}}function be(e,t){e&1&&(n(0,"span"),r(1,"Loading..."),o())}function ye(e,t){if(e&1&&(n(0,"section",5)(1,"mat-form-field")(2,"mat-label"),r(3,"G\xE9nero musical"),o(),n(4,"mat-select",6)(5,"mat-option",7),r(6,"Todos"),o()()(),n(7,"span"),r(8,"Selecciona tu g\xE9nero musical favorito"),o()()),e&2){let c=f();s(4),p("formControl",c.currentGenre),s(),p("value",0)}}function Ee(e,t){e&1&&(n(0,"span"),r(1,"Error :("),o())}function ke(e,t){if(e&1&&d(0,"app-event-card",4),e&2){let c=t.$implicit;p("data",c)("routerLink","/event-detail/"+c.id)}}function we(e,t){e&1&&(n(0,"h1"),r(1,"No encontramos conciertos :("),o())}var ft=(()=>{let t=class t{constructor(){this.store=l(pe),this.genres$=this.store.select(he),this.initialConcerts$=this.store.select(_e),this.filteredConcerts$=new _,this.searchBarService=l(k),this.currentGenre=new y(0),this.layoutService=l(w)}ngOnInit(){this.store.dispatch(ue()),this.store.dispatch(fe());let a=this.currentGenre.valueChanges.pipe(M(0),U(i=>this.initialConcerts$.pipe(g(m=>i===0?m:m.filter(F=>F.genreId===i)))));this.filteredConcerts$=V([a,this.searchBarService.currentValue$]).pipe(g(([i,m])=>i.filter(F=>m===""?!0:F.description.toLowerCase().includes(m.toLowerCase()))))}};t.\u0275fac=function(i){return new(i||t)},t.\u0275cmp=x({type:t,selectors:[["app-home"]],standalone:!0,features:[S],decls:16,vars:5,consts:[[1e3,100],[1,"home-container"],[1,"container"],[1,"event-list"],[3,"data","routerLink"],[1,"filter"],[3,"formControl"],[3,"value"]],template:function(i,m){i&1&&(n(0,"div")(1,"div",1),d(2,"app-header"),n(3,"div",2),O(4,Se,12,4)(5,be,2,0)(6,ye,9,2)(7,Ee,2,0),Q(8,4,Oe,5,6,7,0,null,K),X(),n(10,"section",3),T(11,ke,1,2,"app-event-card",4,B,!1,we,2,0,"h1"),D(14,"async"),o()(),d(15,"app-footer"),o()()),i&2&&(P(m.layoutService.currentBreakpoint()),s(11),L(I(14,3,m.filteredConcerts$)))},dependencies:[ge,ce,me,j,$,se,R,H,le,E,C,h,G,b],styles:[".home-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;min-height:100vh}.home-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{display:flex;align-items:center;flex-direction:column}.home-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]{display:flex;width:940px;gap:20px;align-items:center;margin-top:30px}.home-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .filter[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-bottom:20px;font-weight:500;font-size:16px}.home-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .event-list[_ngcontent-%COMP%]{width:1000px;display:flex;flex-wrap:wrap;justify-content:center;gap:20px;margin-top:20px;margin-bottom:40px}.home-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .event-list[_ngcontent-%COMP%]   app-event-card[_ngcontent-%COMP%]{cursor:pointer}.medium[_ngcontent-%COMP%]   .home-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:is(.filter, .event-list)[_ngcontent-%COMP%]{width:700px}"]});let e=t;return e})();export{ft as HomeComponent};
