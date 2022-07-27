(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>s});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([t.id,".gameBoard {\n    width: 75vmin;\n    height: 75vmin;\n    display: grid;\n    grid-auto-flow: column;\n}\n\n.boardSquare {\n    border: solid 0.2vmin black;\n}",""]);const s=a},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var u=0;u<t.length;u++){var d=[].concat(t[u]);r&&a[d[0]]||(void 0!==i&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=i),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),o&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=o):d[4]="".concat(o)),e.push(d))}},e}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],s=0;s<t.length;s++){var c=t[s],u=r.base?c[0]+r.base:c[0],d=i[u]||0,l="".concat(u," ").concat(d);i[u]=d+1;var f=n(l),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)e[f].references++,e[f].updater(h);else{var p=o(h,r);r.byIndex=s,e.splice(s,0,{identifier:l,updater:p,references:1})}a.push(l)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var s=n(i[a]);e[s].references--}for(var c=r(t,o),u=0;u<i.length;u++){var d=n(i[u]);0===e[d].references&&(e[d].updater(),e.splice(d,1))}i=c}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),s=n(565),c=n.n(s),u=n(216),d=n.n(u),l=n(589),f=n.n(l),h=n(426),p={};p.styleTagTransform=f(),p.setAttributes=c(),p.insert=a().bind(null,"head"),p.domAPI=o(),p.insertStyleElement=d(),e()(h.Z,p),h.Z&&h.Z.locals&&h.Z.locals;const v=function(t,e,n,r){return{title:t,hitLocation:e,size:n,sunk:r,hit:function(t){if(-1!=this.hitLocation.indexOf(t))return this.hitLocation[this.hitLocation.indexOf(t)]="Blast",this.hitLocation},isSunk:function(){return this.hitLocation.every((function(t){return"Blast"===t}))&&(r=!0),r}}},m=function(t){return{board:y(t*t),dimensions:t,size:t*t,carrier:v("carrier",[],5,!1),battleship:v("battleship",[],4,!1),cruiser:v("cruiser",[],3,!1),submarine:v("submarine",[],3,!1),destroyer:v("destroyer",[],2,!1),populateBoard:function(t,e){var n=this.board.indexOf(t);this.board[n]="".concat(t," ").concat(e.title),e.hitLocation.push(t)},receiveAttack:function(t,e){return-1!=this.board.indexOf("".concat(t," ").concat(e.title))?this.hit(t,e):this.missed(t)},hit:function(t,e){var n=e.hitLocation.indexOf(t);if(-1!=n){var r=this.board.indexOf("".concat(t," ").concat(e.title));this.board[r]="Blast",e.hitLocation[n]="Blast"}else this.missed(t)},missed:function(t){var e=this.board.indexOf(t);return-1!=e?this.board[e]="missed":"already hit"},checkLoss:function(){for(var t=[this.carrier,this.battleship,this.cruiser,this.submarine,this.destroyer],e=0,n=0;n<t.length;n++)1==t[n].isSunk()?e++:e--;return 5==e?"All ships destroyed. Game Over, you lost.":e}}};function y(t){for(var e=[],n=0,r="A",o=0;o<t;o++)e.push(r+n),n==Math.sqrt(t)-1?(n=0,r=String.fromCharCode(r.charCodeAt(0)+1)):n++;return e}var b={},g={},x=document.querySelector(".gameBoard"),L=document.querySelector(".sizeButtons"),k=document.getElementById("six"),B=document.getElementById("eight"),C=document.getElementById("ten");function E(t){var e=function(t){return{playerBoard:m(t),isTurn:!1,isWinner:!1,attackEnemy:function(t,e,n){return 1==this.isTurn?(t.playerBoard.receiveAttack(e,n),this.isTurn=!1,t.isTurn=!0,"Attack Sent"):"Not your turn!"},checkWin:function(t){if("All ships destroyed. Game Over, you lost."==t.playerBoard.checkLoss())return this.isWinner,"Congrats! You won the battle!"}}}(t);for(var n in e)b[n]=e[n],g[n]=e[n];e.playerBoard.board.forEach((function(t){var e=document.createElement("div");e.className="boardSquare",e.textContent=t,x.appendChild(e)})),L.style.display="none",x.style.gridTemplateRows="repeat(".concat(t,", 1fr)"),x.style.gridTemplateColumns="repeat(".concat(t,", 1fr)")}k.addEventListener("click",(function(){E(6)})),B.addEventListener("click",(function(){E(8)})),C.addEventListener("click",(function(){E(10)}))})()})();