(this.webpackJsonpwebbackpack=this.webpackJsonpwebbackpack||[]).push([[0],{20:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(9),c=n.n(a),s=(n(25),n(7)),i=n(18),u=n(1),l=n.n(u),d=n(5),f=o.a.createContext({}),v={headerBackground:"#0C1B33",headerTitle:"#F4E87C",videoControlIcons:"#46d6e3"},p=n(10),h=n.n(p),m=n(12),g=n.n(m),w=n(13),b=n.n(w),S=n(14),y=n.n(S),C=n(15),k=n.n(C),R=n(16),E=n.n(R),q=n(17),x=n.n(q),j=25;function O(e){var t=Object(r.useContext)(f),n={screen:{height:"100%"},header:{height:60,backgroundColor:v.headerBackground,justifyContent:"space-between",paddingHorizontal:"8%",alignItems:"center",flexDirection:"row",display:"flex"},title:{color:v.headerTitle,fontSize:20},supHeader:{backgroundColor:"pink",height:"5%"},videoControl:{flexDirection:"row"}},a=o.a.createElement("div",{style:{width:j}});"RequestsList"===t.currentScreen&&(a=o.a.createElement("div",{onClick:function(){return t.setCurrentScreen("AddRequest")}},o.a.createElement(h.a,{fontSize:j,color:v.headerTitle})));var c=o.a.createElement("div",{style:{width:j}});function s(e){var n=t.videoRef.current;n&&("play"===e?n.playAsync():"pause"===e?n.pauseAsync():"replay"===e?n.replayAsync():"fullscreen"===e&&n.presentFullscreenPlayer())}"RequestContent"===t.currentScreen?c=o.a.createElement("div",{onClick:function(){return t.setCurrentScreen("RequestsList")}},o.a.createElement(g.a,{fontSize:j,color:v.headerTitle})):"SelectSource"!==t.currentScreen&&(c=o.a.createElement("div",{onClick:function(){return t.setCurrentScreen("SelectSource")}},o.a.createElement(b.a,{fontSize:j,color:v.headerTitle})));var i=null;return console.log("videoRef",t.videoRef),"RequestContent"===t.currentScreen&&"Youtube"===t.currentRequest.type&&(i=o.a.createElement("div",{style:n.videoControl},o.a.createElement("div",{onClick:function(){return s("play")}},o.a.createElement(y.a,{fontSize:j,color:v.videoControlIcons})),o.a.createElement("div",{onClick:function(){return s("pause")}},o.a.createElement(k.a,{fontSize:j,color:v.videoControlIcons})),o.a.createElement("div",{onClick:function(){return s("replay")}},o.a.createElement(E.a,{fontSize:j,color:v.videoControlIcons})),o.a.createElement("div",{onClick:function(){return s("fullscreen")}},o.a.createElement(x.a,{fontSize:j,color:v.videoControlIcons})))),o.a.createElement("div",{style:n.screen},o.a.createElement("div",{style:n.header},c,o.a.createElement("div",{style:n.title},e.title),a,i),e.children)}var _="http://192.168.43.73:5000/";function T(e){var t,n,r;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=_+"add_request",console.log("Sending request",e),o.next=4,l.a.awrap(fetch(t,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}));case 4:if(n=o.sent,r=null,!n.ok){o.next=10;break}return o.next=9,l.a.awrap(n.json());case 9:r=o.sent;case 10:return o.abrupt("return",r);case 11:case"end":return o.stop()}}))}function I(e){var t,n,r;return l.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return t=_+"send_results",console.log("Sending request to response",e),o.next=4,l.a.awrap(fetch(t,{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}));case 4:return n=o.sent,o.next=7,l.a.awrap(n.json());case 7:return r=o.sent,o.abrupt("return",r);case 9:case"end":return o.stop()}}))}n(32);function A(e){var t=Object(r.useContext)(f),n={screen:{backgroundColor:v.headerTitle,borderRadius:10,marginTop:"10px",padding:"5px",minHeight:100*t.vh,display:"flex",alignItems:"center",justifyContent:"center",height:"100px",width:"100vw"},text:{fontSize:30,color:v.headerBackground||e.textColor||v.headerTitle,fontWeight:"bold"}};return o.a.createElement("div",{onClick:e.onClick},o.a.createElement("div",{style:n.screen},o.a.createElement("div",{style:n.text},e.title)))}function W(){var e=this,t=Object(r.useContext)(f);function n(e){t.setCurrentScreen("RequestsList"),t.setSource(e)}var a=t.sources.map((function(t){return o.a.createElement(A,{title:t,onClick:n.bind(e,t),key:t})}));return o.a.createElement("div",{style:{}},a)}function z(e,t){switch(t.type){case"add":return[].concat(Object(i.a)(e),[t.newReq]);case"remove":return e.filter((function(e){return e.id!==t.reqId}));case"updateReceivedServer":console.log("updating from serverRequest",t.serverRequest);var n=Object(s.a)({},e.filter((function(e){return e.id===t.serverRequest.id}))[0]);return n.server_request_id=t.serverRequest.server_request_id,n.status="receivedServer",e.map((function(e){return e.id===n.id?n:e}));case"updateDownloaded":console.log("Updating download",t.serverResponse);var r=Object(s.a)({},e.filter((function(e){return e.server_request_id===t.serverResponse.server_request_id}))[0]);return r.status="downloadedServer",r.links=t.serverResponse.links,console.log(t.serverResponse.server_request_id),e.map((function(e){return e.server_request_id===t.serverResponse.server_request_id?r:e}));default:throw Error("error in reducerReqs, App.js")}}var P=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function B(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}c.a.render(o.a.createElement((function(){var e=Object(r.useReducer)(z,[]),t=Object(d.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(1),s=Object(d.a)(c,2),i=s[0],u=s[1],v=Object(r.useState)(null),p=Object(d.a)(v,2),h=p[0],m=p[1],g=Object(r.useState)("SelectSource"),w=Object(d.a)(g,2),b=w[0],S=w[1],y=Object(r.useState)({}),C=Object(d.a)(y,2),k=C[0],R=C[1],E=Object(r.useRef)(),q={SelectSource:{screen:W,title:"WebBackPack"}},x={userId:"Parvati",sources:["Youtube","Wikitravel"],nextReqId:i,setNextReqId:u,allRequests:n,dispatchAllRequests:a,currentScreen:b,setCurrentScreen:S,source:h,setSource:m,setCurrentRequest:R,currentRequest:k,videoRef:E};Object(r.useEffect)((function(){!function(){var e,t;l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=x.allRequests.filter((function(e){return"saved"===e.status})),t=e.map((function(e){return T(e)})),n.next=4,l.a.awrap(Promise.all(t));case 4:n.sent.filter((function(e){return"server_request_id"in e})).forEach((function(e){a({type:"updateReceivedServer",serverRequest:e})}));case 6:case"end":return n.stop()}}))}()})),Object(r.useEffect)((function(){!function(){var e,t;l.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return e=x.allRequests.filter((function(e){return"receivedServer"===e.status})),t=e.map((function(e){return I(e)})),n.next=4,l.a.awrap(Promise.all(t));case 4:n.sent.filter((function(e){return"OK"===e.status})).forEach((function(e){a({type:"updateDownloaded",serverResponse:e})}));case 6:case"end":return n.stop()}}))}()}));var j=q[b].screen;return o.a.createElement(f.Provider,{value:x},o.a.createElement(O,{title:q[b].title},o.a.createElement(j,null)))}),null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");P?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var r=n.headers.get("content-type");404===n.status||null!=r&&-1===r.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):B(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):B(t,e)}))}}()}},[[20,1,2]]]);
//# sourceMappingURL=main.7d7c325b.chunk.js.map