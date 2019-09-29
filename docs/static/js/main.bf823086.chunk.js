(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{257:function(e,t,a){e.exports=a(479)},262:function(e,t,a){},263:function(e,t,a){},477:function(e,t,a){},478:function(e,t,a){},479:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(13),c=a.n(o),i=(a(262),a(20)),l=a(18),u=a(28),s=a(27),d=a(29),m=a(30),p=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("span",null,"Page not found.")}}]),t}(r.a.Component),h=a(84),f=a(63),g=(a(263),a(37)),v=a.n(g),b=function(){return localStorage.getItem("user")&&localStorage.getItem("uid")},y=function(){localStorage.removeItem("user"),localStorage.removeItem("uid"),localStorage.removeItem("locations")},E=function(e,t){localStorage.setItem("user",e),localStorage.setItem("uid",t)},j=function(){return localStorage.getItem("uid")},O=function e(){Object(i.a)(this,e)};O.getLocations=function(){var e=[];return localStorage.getItem("locations")&&(e=JSON.parse(localStorage.getItem("locations"))),e},O.getActiveLocation=function(e){O.getCurrentLocation(e)},O.canGeoLocate=function(e){"geolocation"in navigator?navigator.geolocation.getCurrentPosition(function(t){e(!0)},function(t){e(!1)},{timeout:1500}):e(!1)},O.getCurrentLocation=function(e){navigator.geolocation.getCurrentPosition(function(t){v.a.post("/location_name.php?uid="+j(),{lat:t.coords.latitude,lon:t.coords.longitude}).then(function(a){e({name:a.data.data.name,latitude:t.coords.latitude,longitude:t.coords.longitude})}).catch(function(a){e({name:"None",latitude:t.coords.latitude,longitude:t.coords.longitude})})},function(t){e({name:"West Fargo (D)",latitude:46.8292576,longitude:-96.9092857})},{timeout:1500})};var w=O,k=a(72),x=a(25),C=function(){function e(){Object(i.a)(this,e)}return Object(l.a)(e,null,[{key:"getIcon",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:54,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};switch(e){case"clear-day":return r.a.createElement(x.d,Object.assign({size:t},a));case"clear-night":return r.a.createElement(x.g,Object.assign({size:t},a));case"rain":return r.a.createElement(x.h,Object.assign({size:t},a));case"snow":return r.a.createElement(x.k,Object.assign({size:t},a));case"sleet":return r.a.createElement(x.j,Object.assign({size:t},a));case"wind":return r.a.createElement(x.l,Object.assign({size:t},a));case"fog":return r.a.createElement(x.e,Object.assign({size:t},a));case"cloudy":return r.a.createElement(x.b,Object.assign({size:t},a));case"partly-cloudy-day":return r.a.createElement(x.c,Object.assign({size:t},a));case"partly-cloudy-night":return r.a.createElement(x.f,Object.assign({size:t},a));default:return r.a.createElement(x.a,a)}}},{key:"getPrecipIcon",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:36;switch(e){case"rain":return r.a.createElement(x.i,{size:t});case"snow":return r.a.createElement(x.k,{size:t});case"sleet":return r.a.createElement(x.j,{size:t});default:return r.a.createElement(x.a,null)}}}]),e}(),S=a(224),L=a.n(S),I=a(112),A=a.n(I),N=a(75),z=a(221),D=a.n(z),M=a(222),P=a.n(M),G=a(219),T=a.n(G),W=a(220),B=a.n(W);function U(){var e=Object(f.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 20px;\n"]);return U=function(){return e},e}var q=k.a.div(U()),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).redirect=function(e){a.props.history.push("/"+e)},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this;switch(this.props.state||""){case"back-left":return r.a.createElement(q,{style:{justifyContent:"flex-start"}},r.a.createElement(T.a,{onClick:function(){return e.redirect("")}}));case"back-right":return r.a.createElement(q,{style:{justifyContent:"flex-end"}},r.a.createElement(B.a,{onClick:function(){return e.redirect("")}}));default:return r.a.createElement(q,null,r.a.createElement(D.a,{onClick:function(){return e.redirect("settings")}}),r.a.createElement(P.a,{onClick:function(){return e.redirect("locations")}}))}}}]),t}(r.a.Component),K=Object(m.g)(F);function R(){var e=Object(f.a)(["\n  font-size: 25px;\n  font-weight: 600;\n"]);return R=function(){return e},e}var J=k.a.div(R()),H=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),c=0;c<n;c++)o[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(o)))).state={location:"",current:{icon:"",temperature:0,windSpeed:0,windBearing:0},daily:[],hourlyChartData:[]},a.temperatureLabel=function(e){var t=e.x,n=e.y,o=e.width,c=(e.value,e.index),i=a.state.hourlyChartData[c];return r.a.createElement("svg",null,C.getIcon(i.icon,24,{width:24,height:24,x:t+12,y:n+2}),r.a.createElement("text",{x:t+o/2,y:n,fill:"#f9f9f9",textAnchor:"middle",dy:-6},i.tempLabel))},a.precipLabel=function(e){var t=e.x,n=e.y,o=e.width,c=(e.height,e.index),i=a.state.hourlyChartData[c];return r.a.createElement("svg",null,r.a.createElement("text",{x:t+o/2,y:n,fill:"#f9f9f9",textAnchor:"middle",dy:-6},i.precipLabel),r.a.createElement("text",{x:t+o/2,y:200,fill:"#f9f9f9",textAnchor:"middle",dy:-6},i.time))},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.getActiveLocation(function(t){v.a.post("/weather.php?uid="+j(),{lat:t.latitude,lon:t.longitude}).then(function(a){var n=a.data.data,r=n.currently;console.log(n);var o=Math.max.apply(Math,Object(h.a)(n.hourly.data.map(function(e){return e.apparentTemperature}))),c=Math.min.apply(Math,Object(h.a)(n.hourly.data.map(function(e){return e.apparentTemperature}))),i=o-c,l=n.hourly.data.map(function(e){return{name:A.a.unix(e.time).format("ddd"),temperature:Math.round(33*(1-(o-e.apparentTemperature)/i)+40),precip:100*e.precipProbability/(100/18),tempLabel:Math.round(e.apparentTemperature)+"\xb0",precipLabel:e.precipProbability>0?Math.round(100*e.precipProbability)+"%":"",time:A.a.unix(e.time).format("hA"),icon:e.icon}});e.setState({location:t.name,current:{icon:r.icon,temperature:Math.round(r.apparentTemperature),windSpeed:Math.round(r.windSpeed||0),windBearing:r.windBearing||0},daily:n.daily.data,hourlyChartData:l})}).catch(function(e){})})}},{key:"render",value:function(){var e=this,t=this.state.current;return r.a.createElement("div",null,r.a.createElement(K,null),r.a.createElement("div",{className:"dashboard"},r.a.createElement(J,null,this.state.location),r.a.createElement("div",{className:"conditions"},r.a.createElement("div",{className:"temperature"},C.getIcon(t.icon),r.a.createElement("span",null,t.temperature,"\xb0F")),r.a.createElement("div",{className:"wind"},r.a.createElement(L.a,{style:{transform:"rotate(".concat(t.windBearing+180,"deg)")}}),r.a.createElement("span",null,t.windSpeed,r.a.createElement("span",{className:"label"},"mph"))))),r.a.createElement("div",{className:"dayChart"},r.a.createElement(N.b,{data:this.state.hourlyChartData,height:200,width:2500,margin:{top:5,bottom:25,left:0,right:0},barCategoryGap:0},r.a.createElement(N.c,{dataKey:"name",xAxisId:0,hide:!0}),r.a.createElement(N.c,{dataKey:"name",xAxisId:1,hide:!0}),r.a.createElement(N.a,{dataKey:"temperature",fill:"#2c2c2c",xAxisId:0,label:function(t){return e.temperatureLabel(t)}}),r.a.createElement(N.a,{dataKey:"precip",fill:"#8884d8",xAxisId:1,label:function(t){return e.precipLabel(t)},maxBarSize:25}))),r.a.createElement("div",{className:"daily"},this.state.daily.map(function(e){return r.a.createElement("div",{key:e.time,className:"day"},r.a.createElement("div",{className:"title"},A.a.unix(e.time).format("ddd")),r.a.createElement("div",{className:"icon"},C.getIcon(e.icon,32)),r.a.createElement("div",{className:"data"},r.a.createElement("div",null,Math.round(e.apparentTemperatureHigh),"\xb0"),r.a.createElement("div",null,Math.round(100*e.precipProbability),"%")))})))}}]),t}(r.a.Component),Y=a(484),$=a(514),_=a(516),Q=a(67);function V(){var e=Object(f.a)(["\n  text-align: center;\n  padding-top: 25px;\n"]);return V=function(){return e},e}var X=k.a.div(V()),Z=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",code:""},a.nameChange=function(e){a.setState({name:e.target.value})},a.codeChange=function(e){a.setState({code:e.target.value})},a.tryLogin=function(){v.a.post("/login.php",{user:a.state.name,code:a.state.code}).then(function(e){console.log(e.data),100!==e.data.code?a.props.enqueueSnackbar(e.data.message,{variant:"error"}):(E(a.state.name,e.data.uid),a.props.enqueueSnackbar("Logged in.",{variant:"success"}),a.props.history.push("/"))}).catch(function(){a.props.enqueueSnackbar("Error logging in.",{variant:"error"})})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(X,null,r.a.createElement(Y.a,{variant:"h5",style:{fontFamily:"Dosis"}},"Login"),r.a.createElement($.a,{label:"Name",value:this.state.name,onChange:this.nameChange,margin:"dense",variant:"outlined"}),r.a.createElement($.a,{label:"Code",value:this.state.code,onChange:this.codeChange,margin:"dense",variant:"outlined",type:"password"}),r.a.createElement(_.a,{variant:"outlined",color:"primary",onClick:this.tryLogin,style:{display:"block",margin:"0 auto",marginTop:"10px"}},"Login"))}}]),t}(r.a.Component),ee=Object(Q.withSnackbar)(Z),te=a(111),ae=function(e){var t=e.component,a=Object(te.a)(e,["component"]),n=b();return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return n?r.a.createElement("span",null,"You must be logged out to view this page."):r.a.createElement(t,e)}}))},ne=function(e){var t=e.component,a=Object(te.a)(e,["component"]),n=b();return r.a.createElement(m.b,Object.assign({},a,{render:function(e){return n?r.a.createElement(t,e):r.a.createElement(m.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},re=(a(477),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={canGeolocate:!1},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.canGeoLocate(function(t){e.setState({canGeolocate:t})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K,{state:"back-left"}),r.a.createElement("div",{className:"status"},"Can Geolocate: ",r.a.createElement("span",{style:{color:this.state.canGeolocate?"#1D9922":"#DE2323"}},this.state.canGeolocate?"Yes":"No")),r.a.createElement("div",{className:"locations"}))}}]),t}(r.a.Component)),oe=(a(478),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={canGeolocate:!1},a.logout=function(){y(),a.props.history.push("/login")},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K,{state:"back-right"}),r.a.createElement("div",{className:"profile"},r.a.createElement("div",{style:{fontWeight:600}},"Account Information"),r.a.createElement("div",null,localStorage.getItem("user")),r.a.createElement("div",null,r.a.createElement(_.a,{variant:"outlined",color:"primary",onClick:this.logout,style:{display:"block",margin:"10px auto"}},"Logout"))))}}]),t}(r.a.Component)),ce=function(e){function t(e){var a;return Object(i.a)(this,t),a=Object(u.a)(this,Object(s.a)(t).call(this,e)),v.a.interceptors.response.use(function(e){return 202===e.data.code?(a.props.enqueueSnackbar("Session is invalid.",{variant:"error"}),y(),void a.props.history.push("/login")):e}),a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(m.d,null,r.a.createElement(ne,{path:"/",exact:!0,component:H}),r.a.createElement(ne,{path:"/locations",component:re}),r.a.createElement(ne,{path:"/settings",component:oe}),r.a.createElement(ae,{path:"/login",component:ee}),r.a.createElement(m.b,{component:p}))}}]),t}(r.a.Component),ie=Object(m.g)(Object(Q.withSnackbar)(ce)),le=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ue(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var se={baseUrl:"https://weather.braden.cc"},de=a(99),me=a(512),pe=a(100),he=Object(pe.a)({palette:{type:"dark",primary:{main:"#f9f9f9"},secondary:{main:"#f9f9f9"}},typography:{fontFamily:"Dosis"}});v.a.defaults.baseURL=se.baseUrl,navigator.geolocation?c.a.render(r.a.createElement(Q.SnackbarProvider,{autoHideDuration:2e3},r.a.createElement(me.a,{theme:he},r.a.createElement(de.a,null,r.a.createElement(ie,null)))),document.getElementById("root")):c.a.render(r.a.createElement("span",null,"Device does not support Geolocation."),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/weather",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/weather","/service-worker.js");le?(function(e,t){fetch(e).then(function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ue(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ue(t,e)})}}()}},[[257,1,2]]]);
//# sourceMappingURL=main.bf823086.chunk.js.map