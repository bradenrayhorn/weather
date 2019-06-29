(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{103:function(e,t,n){},104:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(9),c=n.n(r),i=(n(103),n(22)),l=n(18),s=n(33),u=n(30),d=n(34),m=n(49),p=n(25),g=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("span",null,"Page not found.")}}]),t}(o.a.Component),f=n(51),h=(n(104),n(31)),v=n.n(h),b=function e(){Object(i.a)(this,e)};b.getLocations=function(){var e=[];return localStorage.getItem("locations")&&(e=JSON.parse(localStorage.getItem("locations"))),e},b.getActiveLocation=function(){return{name:"West Fargo",latitude:46.8292576,longitude:-96.9092857}};var w=b,E=function(){return localStorage.getItem("user")&&localStorage.getItem("uid")},y=function(){localStorage.removeItem("user"),localStorage.removeItem("uid"),localStorage.removeItem("locations")},j=function(e,t){localStorage.setItem("user",e),localStorage.setItem("uid",t)},O=n(61),S=n(89),k=n.n(S),C=n(90),I=n.n(C),L=n(62),A=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getIcon",value:function(e){switch(e){case"clear-day":return o.a.createElement(L.b,{size:54});case"fog":return o.a.createElement(L.c,{size:54});default:return o.a.createElement(L.a,null)}}}]),e}(),N=n(91),W=n.n(N);function x(){var e=Object(f.a)(["\n  font-size: 25px;\n  font-weight: 600;\n"]);return x=function(){return e},e}var B=O.a.div(x()),U=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={location:w.getActiveLocation().name,current:{icon:"",temperature:0,windSpeed:0,windBearing:0}},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=w.getActiveLocation();v.a.post("/weather.php?uid="+localStorage.getItem("uid"),{lat:t.latitude,lon:t.longitude}).then(function(t){var n=t.data.data,a=n.currently;console.log(n),e.setState({current:{icon:a.icon,temperature:Math.round(a.apparentTemperature),windSpeed:Math.round(a.windSpeed||0),windBearing:a.windBearing||0}})}).catch(function(e){})}},{key:"render",value:function(){var e=this.state.current;return o.a.createElement("div",null,o.a.createElement("div",{className:"navbar"},o.a.createElement(k.a,null),o.a.createElement(I.a,null)),o.a.createElement("div",{className:"dashboard"},o.a.createElement(B,null,this.state.location),o.a.createElement("div",{className:"conditions"},o.a.createElement("div",{className:"temperature"},A.getIcon(e.icon),o.a.createElement("span",null,e.temperature,"\xb0F")),o.a.createElement("div",{className:"wind"},o.a.createElement(W.a,{style:{transform:"rotate(".concat(e.windBearing+180,"deg)")}}),o.a.createElement("span",null,e.windSpeed,o.a.createElement("span",{className:"label"},"mph"))))))}}]),t}(o.a.Component),D=n(152),q=n(183),F=n(185),P=n(40),R=n(50),T=n(181);function z(){var e=Object(f.a)(["\n  text-align: center;\n  padding-top: 25px;\n"]);return z=function(){return e},e}var J=O.a.div(z()),M=Object(R.a)({palette:{type:"dark",primary:{main:"#f9f9f9"},secondary:{main:"#f9f9f9"}},typography:{fontFamily:"Dosis"}}),G=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",code:""},n.nameChange=function(e){n.setState({name:e.target.value})},n.codeChange=function(e){n.setState({code:e.target.value})},n.tryLogin=function(){v.a.post("/login.php",{user:n.state.name,code:n.state.code}).then(function(e){console.log(e.data),100!==e.data.code?n.props.enqueueSnackbar(e.data.message,{variant:"error"}):(j(n.state.name,e.data.uid),n.props.enqueueSnackbar("Logged in.",{variant:"success"}),n.props.history.push("/"))}).catch(function(){n.props.enqueueSnackbar("Error logging in.",{variant:"error"})})},n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(J,null,o.a.createElement(T.a,{theme:M},o.a.createElement(D.a,{variant:"h5",style:{fontFamily:"Dosis"}},"Login"),o.a.createElement(q.a,{label:"Name",value:this.state.name,onChange:this.nameChange,margin:"dense",variant:"outlined"}),o.a.createElement(q.a,{label:"Code",value:this.state.code,onChange:this.codeChange,margin:"dense",variant:"outlined",type:"password"}),o.a.createElement(F.a,{variant:"outlined",color:"primary",onClick:this.tryLogin,style:{display:"block",margin:"0 auto",marginTop:"10px"}},"Login")))}}]),t}(o.a.Component),H=Object(P.withSnackbar)(G),Y=n(60),$=function(e){var t=e.component,n=Object(Y.a)(e,["component"]),a=E();return o.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?o.a.createElement("span",null,"You must be logged out to view this page."):o.a.createElement(t,e)}}))},K=function(e){var t=e.component,n=Object(Y.a)(e,["component"]),a=E();return o.a.createElement(p.b,Object.assign({},n,{render:function(e){return a?o.a.createElement(t,e):o.a.createElement(p.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},Q=function(e){function t(e){var n;return Object(i.a)(this,t),n=Object(s.a)(this,Object(u.a)(t).call(this,e)),v.a.interceptors.response.use(function(e){return 202===e.data.code?(n.props.enqueueSnackbar("Session is invalid.",{variant:"error"}),void y()):e}),n}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement(p.d,null,o.a.createElement(K,{path:"/",exact:!0,component:U}),o.a.createElement($,{path:"/login",component:H}),o.a.createElement(p.b,{component:g})))}}]),t}(o.a.Component),V=Object(P.withSnackbar)(Q),X=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Z(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var _={baseUrl:"https://weather.braden.cc"};v.a.defaults.baseURL=_.baseUrl,navigator.geolocation?c.a.render(o.a.createElement(P.SnackbarProvider,{autoHideDuration:2e3},o.a.createElement(V,null)),document.getElementById("root")):c.a.render(o.a.createElement("span",null,"Device does not support Geolocation."),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/weather","/service-worker.js");X?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):Z(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):Z(t,e)})}}()},98:function(e,t,n){e.exports=n(147)}},[[98,1,2]]]);
//# sourceMappingURL=main.a92d9e4c.chunk.js.map