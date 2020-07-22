!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e(t.d3=t.d3||{})}(this,function(t){"use strict"
function e(t,e,n){var r=(e-t)/Math.max(0,n),a=Math.floor(Math.log(r)/Math.LN10),i=r/Math.pow(10,a)
return a>=0?(i>=Ko?10:i>=$o?5:i>=Jo?2:1)*Math.pow(10,a):-Math.pow(10,-a)/(i>=Ko?10:i>=$o?5:i>=Jo?2:1)}function n(t,e,n){var r=Math.abs(e-t)/Math.max(0,n),a=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),i=r/a
return i>=Ko?a*=10:i>=$o?a*=5:i>=Jo&&(a*=2),e<t?-a:a}function r(){}function a(t,e){var n=new r
if(t instanceof r)t.each(function(t,e){n.set(e,t)})
else if(Array.isArray(t)){var a,i=-1,o=t.length
if(null==e)for(;++i<o;)n.set(i,t[i])
else for(;++i<o;)n.set(e(a=t[i],i,t),a)}else if(t)for(var l in t)n.set(l,t[l])
return n}function i(){}function o(t,e){var n=new i
if(t instanceof i)t.each(function(t){n.add(t)})
else if(t){var r=-1,a=t.length
if(null==e)for(;++r<a;)n.add(t[r])
else for(;++r<a;)n.add(e(t[r],r,t))}return n}function l(){return!this.__axis}function s(t,e){function n(n){var f=null==a?e.ticks?e.ticks.apply(e,r):e.domain():a,p=null==i?e.tickFormat?e.tickFormat.apply(e,r):il:i,g=Math.max(o,0)+u,y=e.range(),v=+y[0]+.5,m=+y[y.length-1]+.5,x=(e.bandwidth?function(t){var e=Math.max(0,t.bandwidth()-1)/2
return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}:function(t){return function(e){return+t(e)}})(e.copy()),b=n.selection?n.selection():n,w=b.selectAll(".domain").data([null]),C=b.selectAll(".tick").data(f,e).order(),k=C.exit(),S=C.enter().append("g").attr("class","tick"),O=C.select("line"),A=C.select("text")
w=w.merge(w.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),C=C.merge(S),O=O.merge(S.append("line").attr("stroke","#000").attr(h+"2",c*o)),A=A.merge(S.append("text").attr("fill","#000").attr(h,c*g).attr("dy",t===ol?"0em":t===sl?"0.71em":"0.32em")),n!==b&&(w=w.transition(n),C=C.transition(n),O=O.transition(n),A=A.transition(n),k=k.transition(n).attr("opacity",cl).attr("transform",function(t){return isFinite(t=x(t))?d(t):this.getAttribute("transform")}),S.attr("opacity",cl).attr("transform",function(t){var e=this.parentNode.__axis
return d(e&&isFinite(e=e(t))?e:x(t))})),k.remove(),w.attr("d",t===ul||t==ll?"M"+c*s+","+v+"H0.5V"+m+"H"+c*s:"M"+v+","+c*s+"V0.5H"+m+"V"+c*s),C.attr("opacity",1).attr("transform",function(t){return d(x(t))}),O.attr(h+"2",c*o),A.attr(h,c*g).text(p),b.filter(l).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===ll?"start":t===ul?"end":"middle"),b.each(function(){this.__axis=x})}var r=[],a=null,i=null,o=6,s=6,u=3,c=t===ol||t===ul?-1:1,h=t===ul||t===ll?"x":"y",d=t===ol||t===sl?function(t){return"translate("+(t+.5)+",0)"}:function(t){return"translate(0,"+(t+.5)+")"}
return n.scale=function(t){return arguments.length?(e=t,n):e},n.ticks=function(){return r=al.call(arguments),n},n.tickArguments=function(t){return arguments.length?(r=null==t?[]:al.call(t),n):r.slice()},n.tickValues=function(t){return arguments.length?(a=null==t?null:al.call(t),n):a&&a.slice()},n.tickFormat=function(t){return arguments.length?(i=t,n):i},n.tickSize=function(t){return arguments.length?(o=s=+t,n):o},n.tickSizeInner=function(t){return arguments.length?(o=+t,n):o},n.tickSizeOuter=function(t){return arguments.length?(s=+t,n):s},n.tickPadding=function(t){return arguments.length?(u=+t,n):u},n}function u(){for(var t,e=0,n=arguments.length,r={};e<n;++e){if(!(t=arguments[e]+"")||t in r)throw new Error("illegal type: "+t)
r[t]=[]}return new c(r)}function c(t){this._=t}function h(t,e){for(var n,r=0,a=t.length;r<a;++r)if((n=t[r]).name===e)return n.value}function d(t,e,n){for(var r=0,a=t.length;r<a;++r)if(t[r].name===e){t[r]=hl,t=t.slice(0,r).concat(t.slice(r+1))
break}return null!=n&&t.push({name:e,value:n}),t}function f(){return new p}function p(){this._="@"+(++yl).toString(36)}function g(e,n,r){return function(a){var i=t.event
t.event=a
try{e.call(this,this.__data__,n,r)}finally{t.event=i}}}function y(t,e,n){var r=wl.hasOwnProperty(t.type)?function(t,e,n){return t=g(t,e,n),function(e){var n=e.relatedTarget
n&&(n===this||8&n.compareDocumentPosition(this))||t.call(this,e)}}:g
return function(a,i,o){var l,s=this.__on,u=r(e,i,o)
if(s)for(var c=0,h=s.length;c<h;++c)if((l=s[c]).type===t.type&&l.name===t.name)return this.removeEventListener(l.type,l.listener,l.capture),this.addEventListener(l.type,l.listener=u,l.capture=n),void(l.value=e)
this.addEventListener(t.type,u,n),l={type:t.type,name:t.name,value:e,listener:u,capture:n},s?s.push(l):this.__on=[l]}}function v(e,n,r,a){var i=t.event
e.sourceEvent=t.event,t.event=e
try{return n.apply(r,a)}finally{t.event=i}}function m(t,e){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=e}function x(t,e){return t<e?-1:t>e?1:t>=e?0:NaN}function b(t,e){return t.style.getPropertyValue(e)||Tl(t).getComputedStyle(t,null).getPropertyValue(e)}function w(t){return t.trim().split(/^|\s+/)}function C(t){return t.classList||new k(t)}function k(t){this._node=t,this._names=w(t.getAttribute("class")||"")}function S(t,e){for(var n=C(t),r=-1,a=e.length;++r<a;)n.add(e[r])}function O(t,e){for(var n=C(t),r=-1,a=e.length;++r<a;)n.remove(e[r])}function A(){this.nextSibling&&this.parentNode.appendChild(this)}function _(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function P(){var t=this.parentNode
t&&t.removeChild(this)}function T(t,e,n){var r=Tl(t),a=r.CustomEvent
"function"==typeof a?a=new a(e,n):(a=r.document.createEvent("Event"),n?(a.initEvent(e,n.bubbles,n.cancelable),a.detail=n.detail):a.initEvent(e,!1,!1)),t.dispatchEvent(a)}function M(t,e){this._groups=t,this._parents=e}function E(){return new M([[document.documentElement]],Ml)}function L(){t.event.stopImmediatePropagation()}function z(t,e){var n=t.document.documentElement,r=El(t).on("dragstart.drag",null)
e&&(r.on("click.drag",zl,!0),setTimeout(function(){r.on("click.drag",null)},0)),"onselectstart"in n?r.on("selectstart.drag",null):(n.style.MozUserSelect=n.__noselect,delete n.__noselect)}function D(t,e,n,r,a,i,o,l,s,u){this.target=t,this.type=e,this.subject=n,this.identifier=r,this.active=a,this.x=i,this.y=o,this.dx=l,this.dy=s,this._=u}function R(){return!t.event.button}function j(){return this.parentNode}function I(e){return null==e?{x:t.event.x,y:t.event.y}:e}function H(){return"ontouchstart"in this}function B(t,e){var n=Object.create(t.prototype)
for(var r in e)n[r]=e[r]
return n}function N(){}function F(t){var e
return t=(t+"").trim().toLowerCase(),(e=Nl.exec(t))?(e=parseInt(e[1],16),new X(e>>8&15|e>>4&240,e>>4&15|240&e,(15&e)<<4|15&e,1)):(e=Fl.exec(t))?Y(parseInt(e[1],16)):(e=Yl.exec(t))?new X(e[1],e[2],e[3],1):(e=Vl.exec(t))?new X(255*e[1]/100,255*e[2]/100,255*e[3]/100,1):(e=Wl.exec(t))?V(e[1],e[2],e[3],e[4]):(e=Ul.exec(t))?V(255*e[1]/100,255*e[2]/100,255*e[3]/100,e[4]):(e=Xl.exec(t))?G(e[1],e[2]/100,e[3]/100,1):(e=Gl.exec(t))?G(e[1],e[2]/100,e[3]/100,e[4]):ql.hasOwnProperty(t)?Y(ql[t]):"transparent"===t?new X(NaN,NaN,NaN,0):null}function Y(t){return new X(t>>16&255,t>>8&255,255&t,1)}function V(t,e,n,r){return r<=0&&(t=e=n=NaN),new X(t,e,n,r)}function W(t){return t instanceof N||(t=F(t)),t?(t=t.rgb(),new X(t.r,t.g,t.b,t.opacity)):new X}function U(t,e,n,r){return 1===arguments.length?W(t):new X(t,e,n,null==r?1:r)}function X(t,e,n,r){this.r=+t,this.g=+e,this.b=+n,this.opacity=+r}function G(t,e,n,r){return r<=0?t=e=n=NaN:n<=0||n>=1?t=e=NaN:e<=0&&(t=NaN),new Z(t,e,n,r)}function q(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof Z)return new Z(t.h,t.s,t.l,t.opacity)
if(t instanceof N||(t=F(t)),!t)return new Z
if(t instanceof Z)return t
var e=(t=t.rgb()).r/255,n=t.g/255,r=t.b/255,a=Math.min(e,n,r),i=Math.max(e,n,r),o=NaN,l=i-a,s=(i+a)/2
return l?(o=e===i?(n-r)/l+6*(n<r):n===i?(r-e)/l+2:(e-n)/l+4,l/=s<.5?i+a:2-i-a,o*=60):l=s>0&&s<1?0:o,new Z(o,l,s,t.opacity)}(t):new Z(t,e,n,null==r?1:r)}function Z(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function Q(t,e,n){return 255*(t<60?e+(n-e)*t/60:t<180?n:t<240?e+(n-e)*(240-t)/60:e)}function K(t){if(t instanceof J)return new J(t.l,t.a,t.b,t.opacity)
if(t instanceof it){var e=t.h*Zl
return new J(t.l,Math.cos(e)*t.c,Math.sin(e)*t.c,t.opacity)}t instanceof X||(t=W(t))
var n=rt(t.r),r=rt(t.g),a=rt(t.b),i=tt((.4124564*n+.3575761*r+.1804375*a)/Kl),o=tt((.2126729*n+.7151522*r+.072175*a)/$l)
return new J(116*o-16,500*(i-o),200*(o-tt((.0193339*n+.119192*r+.9503041*a)/Jl)),t.opacity)}function $(t,e,n,r){return 1===arguments.length?K(t):new J(t,e,n,null==r?1:r)}function J(t,e,n,r){this.l=+t,this.a=+e,this.b=+n,this.opacity=+r}function tt(t){return t>rs?Math.pow(t,1/3):t/ns+ts}function et(t){return t>es?t*t*t:ns*(t-ts)}function nt(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function rt(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function at(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof it)return new it(t.h,t.c,t.l,t.opacity)
t instanceof J||(t=K(t))
var e=Math.atan2(t.b,t.a)*Ql
return new it(e<0?e+360:e,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}(t):new it(t,e,n,null==r?1:r)}function it(t,e,n,r){this.h=+t,this.c=+e,this.l=+n,this.opacity=+r}function ot(t,e,n,r){return 1===arguments.length?function(t){if(t instanceof lt)return new lt(t.h,t.s,t.l,t.opacity)
t instanceof X||(t=W(t))
var e=t.r/255,n=t.g/255,r=t.b/255,a=(us*r+ls*e-ss*n)/(us+ls-ss),i=r-a,o=(os*(n-a)-as*i)/is,l=Math.sqrt(o*o+i*i)/(os*a*(1-a)),s=l?Math.atan2(o,i)*Ql-120:NaN
return new lt(s<0?s+360:s,l,a,t.opacity)}(t):new lt(t,e,n,null==r?1:r)}function lt(t,e,n,r){this.h=+t,this.s=+e,this.l=+n,this.opacity=+r}function st(t,e,n,r,a){var i=t*t,o=i*t
return((1-3*t+3*i-o)*e+(4-6*i+3*o)*n+(1+3*t+3*i-3*o)*r+o*a)/6}function ut(t,e){return function(n){return t+n*e}}function ct(t,e){var n=e-t
return n?ut(t,n>180||n<-180?n-360*Math.round(n/360):n):ms(isNaN(t)?e:t)}function ht(t){return 1==(t=+t)?dt:function(e,n){return n-e?function(t,e,n){return t=Math.pow(t,n),e=Math.pow(e,n)-t,n=1/n,function(r){return Math.pow(t+r*e,n)}}(e,n,t):ms(isNaN(e)?n:e)}}function dt(t,e){var n=e-t
return n?ut(t,n):ms(isNaN(t)?e:t)}function ft(t){return function(e){var n,r,a=e.length,i=new Array(a),o=new Array(a),l=new Array(a)
for(n=0;n<a;++n)r=U(e[n]),i[n]=r.r||0,o[n]=r.g||0,l[n]=r.b||0
return i=t(i),o=t(o),l=t(l),r.opacity=1,function(t){return r.r=i(t),r.g=o(t),r.b=l(t),r+""}}}function pt(t,e,n,r){function a(t){return t.length?t.pop()+" ":""}return function(i,o){var l=[],s=[]
return i=t(i),o=t(o),function(t,r,a,i,o,l){if(t!==a||r!==i){var s=o.push("translate(",null,e,null,n)
l.push({i:s-4,x:Ss(t,a)},{i:s-2,x:Ss(r,i)})}else(a||i)&&o.push("translate("+a+e+i+n)}(i.translateX,i.translateY,o.translateX,o.translateY,l,s),function(t,e,n,i){t!==e?(t-e>180?e+=360:e-t>180&&(t+=360),i.push({i:n.push(a(n)+"rotate(",null,r)-2,x:Ss(t,e)})):e&&n.push(a(n)+"rotate("+e+r)}(i.rotate,o.rotate,l,s),function(t,e,n,i){t!==e?i.push({i:n.push(a(n)+"skewX(",null,r)-2,x:Ss(t,e)}):e&&n.push(a(n)+"skewX("+e+r)}(i.skewX,o.skewX,l,s),function(t,e,n,r,i,o){if(t!==n||e!==r){var l=i.push(a(i)+"scale(",null,",",null,")")
o.push({i:l-4,x:Ss(t,n)},{i:l-2,x:Ss(e,r)})}else 1===n&&1===r||i.push(a(i)+"scale("+n+","+r+")")}(i.scaleX,i.scaleY,o.scaleX,o.scaleY,l,s),i=o=null,function(t){for(var e,n=-1,r=s.length;++n<r;)l[(e=s[n]).i]=e.x(t)
return l.join("")}}}function gt(t){return((t=Math.exp(t))+1/t)/2}function yt(t){return function(e,n){var r=t((e=q(e)).h,(n=q(n)).h),a=dt(e.s,n.s),i=dt(e.l,n.l),o=dt(e.opacity,n.opacity)
return function(t){return e.h=r(t),e.s=a(t),e.l=i(t),e.opacity=o(t),e+""}}}function vt(t){return function(e,n){var r=t((e=at(e)).h,(n=at(n)).h),a=dt(e.c,n.c),i=dt(e.l,n.l),o=dt(e.opacity,n.opacity)
return function(t){return e.h=r(t),e.c=a(t),e.l=i(t),e.opacity=o(t),e+""}}}function mt(t){return function e(n){function r(e,r){var a=t((e=ot(e)).h,(r=ot(r)).h),i=dt(e.s,r.s),o=dt(e.l,r.l),l=dt(e.opacity,r.opacity)
return function(t){return e.h=a(t),e.s=i(t),e.l=o(Math.pow(t,n)),e.opacity=l(t),e+""}}return n=+n,r.gamma=e,r}(1)}function xt(){return Zs||($s(bt),Zs=Ks.now()+Qs)}function bt(){Zs=0}function wt(){this._call=this._time=this._next=null}function Ct(t,e,n){var r=new wt
return r.restart(t,e,n),r}function kt(){xt(),++Ws
for(var t,e=ps;e;)(t=Zs-e._time)>=0&&e._call.call(null,t),e=e._next;--Ws}function St(){Zs=(qs=Ks.now())+Qs,Ws=Us=0
try{kt()}finally{Ws=0,function(){for(var t,e,n=ps,r=1/0;n;)n._call?(r>n._time&&(r=n._time),t=n,n=n._next):(e=n._next,n._next=null,n=t?t._next=e:ps=e)
gs=t,At(r)}(),Zs=0}}function Ot(){var t=Ks.now(),e=t-qs
e>Gs&&(Qs-=e,qs=t)}function At(t){Ws||(Us&&(Us=clearTimeout(Us)),t-Zs>24?(t<1/0&&(Us=setTimeout(St,t-Ks.now()-Qs)),Xs&&(Xs=clearInterval(Xs))):(Xs||(qs=Ks.now(),Xs=setInterval(Ot,Gs)),Ws=1,$s(St)))}function _t(t,e){var n=Tt(t,e)
if(n.state>nu)throw new Error("too late; already scheduled")
return n}function Pt(t,e){var n=Tt(t,e)
if(n.state>au)throw new Error("too late; already started")
return n}function Tt(t,e){var n=t.__transition
if(!n||!(n=n[e]))throw new Error("transition not found")
return n}function Mt(t,e,n){var r=t._id
return t.each(function(){var t=Pt(this,r);(t.value||(t.value={}))[e]=n.apply(this,arguments)}),function(t){return Tt(t,r).value[e]}}function Et(t,e,n,r){this._groups=t,this._parents=e,this._name=n,this._id=r}function Lt(t){return E().transition(t)}function zt(){return++fu}function Dt(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function Rt(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function jt(t){return(1-Math.cos(mu*t))/2}function It(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function Ht(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function Bt(t){return(t=+t)<bu?Tu*t*t:t<Cu?Tu*(t-=wu)*t+ku:t<Ou?Tu*(t-=Su)*t+Au:Tu*(t-=_u)*t+Pu}function Nt(t,e){for(var n;!(n=t.__transition)||!(n=n[e]);)if(!(t=t.parentNode))return Iu.time=xt(),Iu
return n}function Ft(){t.event.stopImmediatePropagation()}function Yt(t){return{type:t}}function Vt(){return!t.event.button}function Wt(){var t=this.ownerSVGElement||this
return[[0,0],[t.width.baseVal.value,t.height.baseVal.value]]}function Ut(t){for(;!t.__brush;)if(!(t=t.parentNode))return
return t.__brush}function Xt(t){return t[0][0]===t[1][0]||t[0][1]===t[1][1]}function Gt(e){function n(t){var n=t.property("__brush",l).selectAll(".overlay").data([Yt("overlay")])
n.enter().append("rect").attr("class","overlay").attr("pointer-events","all").attr("cursor",Zu.overlay).merge(n).each(function(){var t=Ut(this).extent
El(this).attr("x",t[0][0]).attr("y",t[0][1]).attr("width",t[1][0]-t[0][0]).attr("height",t[1][1]-t[0][1])}),t.selectAll(".selection").data([Yt("selection")]).enter().append("rect").attr("class","selection").attr("cursor",Zu.selection).attr("fill","#777").attr("fill-opacity",.3).attr("stroke","#fff").attr("shape-rendering","crispEdges")
var a=t.selectAll(".handle").data(e.handles,function(t){return t.type})
a.exit().remove(),a.enter().append("rect").attr("class",function(t){return"handle handle--"+t.type}).attr("cursor",function(t){return Zu[t.type]}),t.each(r).attr("fill","none").attr("pointer-events","all").style("-webkit-tap-highlight-color","rgba(0,0,0,0)").on("mousedown.brush touchstart.brush",o)}function r(){var t=El(this),e=Ut(this).selection
e?(t.selectAll(".selection").style("display",null).attr("x",e[0][0]).attr("y",e[0][1]).attr("width",e[1][0]-e[0][0]).attr("height",e[1][1]-e[0][1]),t.selectAll(".handle").style("display",null).attr("x",function(t){return"e"===t.type[t.type.length-1]?e[1][0]-f/2:e[0][0]-f/2}).attr("y",function(t){return"s"===t.type[0]?e[1][1]-f/2:e[0][1]-f/2}).attr("width",function(t){return"n"===t.type||"s"===t.type?e[1][0]-e[0][0]+f:f}).attr("height",function(t){return"e"===t.type||"w"===t.type?e[1][1]-e[0][1]+f:f})):t.selectAll(".selection,.handle").style("display","none").attr("x",null).attr("y",null).attr("width",null).attr("height",null)}function a(t,e){return t.__brush.emitter||new i(t,e)}function i(t,e){this.that=t,this.args=e,this.state=t.__brush,this.active=0}function o(){function n(){var t=Sl(S)
!I||C||k||(Math.abs(t[0]-B[0])>Math.abs(t[1]-B[1])?k=!0:C=!0),B=t,w=!0,Fu(),i()}function i(){var t
switch(x=B[0]-H[0],b=B[1]-H[1],A){case Vu:case Yu:_&&(x=Math.max(L-c,Math.min(R-g,x)),d=c+x,y=g+x),P&&(b=Math.max(D-f,Math.min(j-v,b)),p=f+b,m=v+b)
break
case Wu:_<0?(x=Math.max(L-c,Math.min(R-c,x)),d=c+x,y=g):_>0&&(x=Math.max(L-g,Math.min(R-g,x)),d=c,y=g+x),P<0?(b=Math.max(D-f,Math.min(j-f,b)),p=f+b,m=v):P>0&&(b=Math.max(D-v,Math.min(j-v,b)),p=f,m=v+b)
break
case Uu:_&&(d=Math.max(L,Math.min(R,c-x*_)),y=Math.max(L,Math.min(R,g+x*_))),P&&(p=Math.max(D,Math.min(j,f-b*P)),m=Math.max(D,Math.min(j,v+b*P)))}y<d&&(_*=-1,t=c,c=g,g=t,t=d,d=y,y=t,O in Qu&&Y.attr("cursor",Zu[O=Qu[O]])),m<p&&(P*=-1,t=f,f=v,v=t,t=p,p=m,m=t,O in Ku&&Y.attr("cursor",Zu[O=Ku[O]])),T.selection&&(E=T.selection),C&&(d=E[0][0],y=E[1][0]),k&&(p=E[0][1],m=E[1][1]),E[0][0]===d&&E[0][1]===p&&E[1][0]===y&&E[1][1]===m||(T.selection=[[d,p],[y,m]],r.call(S),N.brush())}function o(){if(Ft(),t.event.touches){if(t.event.touches.length)return
s&&clearTimeout(s),s=setTimeout(function(){s=null},500),F.on("touchmove.brush touchend.brush touchcancel.brush",null)}else z(t.event.view,w),V.on("keydown.brush keyup.brush mousemove.brush mouseup.brush",null)
F.attr("pointer-events","all"),Y.attr("cursor",Zu.overlay),T.selection&&(E=T.selection),Xt(E)&&(T.selection=null,r.call(S)),N.end()}function l(){switch(t.event.keyCode){case 16:I=_&&P
break
case 18:A===Wu&&(_&&(g=y-x*_,c=d+x*_),P&&(v=m-b*P,f=p+b*P),A=Uu,i())
break
case 32:A!==Wu&&A!==Uu||(_<0?g=y-x:_>0&&(c=d-x),P<0?v=m-b:P>0&&(f=p-b),A=Vu,Y.attr("cursor",Zu.selection),i())
break
default:return}Fu()}function u(){switch(t.event.keyCode){case 16:I&&(C=k=I=!1,i())
break
case 18:A===Uu&&(_<0?g=y:_>0&&(c=d),P<0?v=m:P>0&&(f=p),A=Wu,i())
break
case 32:A===Vu&&(t.event.altKey?(_&&(g=y-x*_,c=d+x*_),P&&(v=m-b*P,f=p+b*P),A=Uu):(_<0?g=y:_>0&&(c=d),P<0?v=m:P>0&&(f=p),A=Wu),Y.attr("cursor",Zu[O]),i())
break
default:return}Fu()}if(t.event.touches){if(t.event.changedTouches.length<t.event.touches.length)return Fu()}else if(s)return
if(h.apply(this,arguments)){var c,d,f,p,g,y,v,m,x,b,w,C,k,S=this,O=t.event.target.__data__.type,A="selection"===(t.event.metaKey?O="overlay":O)?Yu:t.event.altKey?Uu:Wu,_=e===Gu?null:$u[O],P=e===Xu?null:Ju[O],T=Ut(S),M=T.extent,E=T.selection,L=M[0][0],D=M[0][1],R=M[1][0],j=M[1][1],I=_&&P&&t.event.shiftKey,H=Sl(S),B=H,N=a(S,arguments).beforestart()
"overlay"===O?T.selection=E=[[c=e===Gu?L:H[0],f=e===Xu?D:H[1]],[g=e===Gu?R:c,v=e===Xu?j:f]]:(c=E[0][0],f=E[0][1],g=E[1][0],v=E[1][1]),d=c,p=f,y=g,m=v
var F=El(S).attr("pointer-events","none"),Y=F.selectAll(".overlay").attr("cursor",Zu[O])
if(t.event.touches)F.on("touchmove.brush",n,!0).on("touchend.brush touchcancel.brush",o,!0)
else{var V=El(t.event.view).on("keydown.brush",l,!0).on("keyup.brush",u,!0).on("mousemove.brush",n,!0).on("mouseup.brush",o,!0)
Dl(t.event.view)}Ft(),cu(S),r.call(S),N.start()}}function l(){var t=this.__brush||{selection:null}
return t.extent=c.apply(this,arguments),t.dim=e,t}var s,c=Wt,h=Vt,d=u(n,"start","brush","end"),f=6
return n.move=function(t,n){t.selection?t.on("start.brush",function(){a(this,arguments).beforestart().start()}).on("interrupt.brush end.brush",function(){a(this,arguments).end()}).tween("brush",function(){function t(t){o.selection=1===t&&Xt(u)?null:c(t),r.call(i),l.brush()}var i=this,o=i.__brush,l=a(i,arguments),s=o.selection,u=e.input("function"==typeof n?n.apply(this,arguments):n,o.extent),c=Ts(s,u)
return s&&u?t:t(1)}):t.each(function(){var t=arguments,i=this.__brush,o=e.input("function"==typeof n?n.apply(this,t):n,i.extent),l=a(this,t).beforestart()
cu(this),i.selection=null==o||Xt(o)?null:o,r.call(this),l.start().brush().end()})},i.prototype={beforestart:function(){return 1==++this.active&&(this.state.emitter=this,this.starting=!0),this},start:function(){return this.starting&&(this.starting=!1,this.emit("start")),this},brush:function(){return this.emit("brush"),this},end:function(){return 0==--this.active&&(delete this.state.emitter,this.emit("end")),this},emit:function(t){v(new Nu(n,t,e.output(this.state.selection)),d.apply,d,[t,this.that,this.args])}},n.extent=function(t){return arguments.length?(c="function"==typeof t?t:Bu([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),n):c},n.filter=function(t){return arguments.length?(h="function"==typeof t?t:Bu(!!t),n):h},n.handleSize=function(t){return arguments.length?(f=+t,n):f},n.on=function(){var t=d.on.apply(d,arguments)
return t===d?n:t},n}function qt(t){return new Function("d","return {"+t.map(function(t,e){return JSON.stringify(t)+": d["+e+"]"}).join(",")+"}")}function Zt(t){return new Qt(t)}function Qt(t){if(!(e=xc.exec(t)))throw new Error("invalid format: "+t)
var e,n=e[1]||" ",r=e[2]||">",a=e[3]||"-",i=e[4]||"",o=!!e[5],l=e[6]&&+e[6],s=!!e[7],u=e[8]&&+e[8].slice(1),c=e[9]||""
"n"===c?(s=!0,c="g"):mc[c]||(c=""),(o||"0"===n&&"="===r)&&(o=!0,n="0",r="="),this.fill=n,this.align=r,this.sign=a,this.symbol=i,this.zero=o,this.width=l,this.comma=s,this.precision=u,this.type=c}function Kt(e){return bc=kc(e),t.format=bc.format,t.formatPrefix=bc.formatPrefix,bc}function $t(t,e){return t.parent===e.parent?1:2}function Jt(t,e){return t+e.x}function te(t,e){return Math.max(t,e.y)}function ee(t){var e=0,n=t.children,r=n&&n.length
if(r)for(;--r>=0;)e+=n[r].value
else e=1
t.value=e}function ne(t,e){var n,r,a,i,o,l=new oe(t),s=+t.value&&(l.value=t.value),u=[l]
for(null==e&&(e=re);n=u.pop();)if(s&&(n.value=+n.data.value),(a=e(n.data))&&(o=a.length))for(n.children=new Array(o),i=o-1;i>=0;--i)u.push(r=n.children[i]=new oe(a[i])),r.parent=n,r.depth=n.depth+1
return l.eachBefore(ie)}function re(t){return t.children}function ae(t){t.data=t.data.data}function ie(t){var e=0
do{t.height=e}while((t=t.parent)&&t.height<++e)}function oe(t){this.data=t,this.depth=this.height=0,this.parent=null}function le(t,e){var n,r
if(ce(e,t))return[e]
for(n=0;n<t.length;++n)if(se(e,t[n])&&ce(de(t[n],e),t))return[t[n],e]
for(n=0;n<t.length-1;++n)for(r=n+1;r<t.length;++r)if(se(de(t[n],t[r]),e)&&se(de(t[n],e),t[r])&&se(de(t[r],e),t[n])&&ce(fe(t[n],t[r],e),t))return[t[n],t[r],e]
throw new Error}function se(t,e){var n=t.r-e.r,r=e.x-t.x,a=e.y-t.y
return n<0||n*n<r*r+a*a}function ue(t,e){var n=t.r-e.r+1e-6,r=e.x-t.x,a=e.y-t.y
return n>0&&n*n>r*r+a*a}function ce(t,e){for(var n=0;n<e.length;++n)if(!ue(t,e[n]))return!1
return!0}function he(t){switch(t.length){case 1:return function(t){return{x:t.x,y:t.y,r:t.r}}(t[0])
case 2:return de(t[0],t[1])
case 3:return fe(t[0],t[1],t[2])}}function de(t,e){var n=t.x,r=t.y,a=t.r,i=e.x,o=e.y,l=e.r,s=i-n,u=o-r,c=l-a,h=Math.sqrt(s*s+u*u)
return{x:(n+i+s/h*c)/2,y:(r+o+u/h*c)/2,r:(h+a+l)/2}}function fe(t,e,n){var r=t.x,a=t.y,i=t.r,o=e.x,l=e.y,s=e.r,u=n.x,c=n.y,h=n.r,d=r-o,f=r-u,p=a-l,g=a-c,y=s-i,v=h-i,m=r*r+a*a-i*i,x=m-o*o-l*l+s*s,b=m-u*u-c*c+h*h,w=f*p-d*g,C=(p*b-g*x)/(2*w)-r,k=(g*y-p*v)/w,S=(f*x-d*b)/(2*w)-a,O=(d*v-f*y)/w,A=k*k+O*O-1,_=2*(i+C*k+S*O),P=C*C+S*S-i*i,T=-(A?(_+Math.sqrt(_*_-4*A*P))/(2*A):P/_)
return{x:r+C+k*T,y:a+S+O*T,r:T}}function pe(t,e,n){var r=t.x,a=t.y,i=e.r+n.r,o=t.r+n.r,l=e.x-r,s=e.y-a,u=l*l+s*s
if(u){var c=.5+((o*=o)-(i*=i))/(2*u),h=Math.sqrt(Math.max(0,2*i*(o+u)-(o-=u)*o-i*i))/(2*u)
n.x=r+c*l+h*s,n.y=a+c*s-h*l}else n.x=r+o,n.y=a}function ge(t,e){var n=e.x-t.x,r=e.y-t.y,a=t.r+e.r
return a*a-1e-6>n*n+r*r}function ye(t){var e=t._,n=t.next._,r=e.r+n.r,a=(e.x*n.r+n.x*e.r)/r,i=(e.y*n.r+n.y*e.r)/r
return a*a+i*i}function ve(t){this._=t,this.next=null,this.previous=null}function me(t){if(!(a=t.length))return 0
var e,n,r,a,i,o,l,s,u,c,h
if(e=t[0],e.x=0,e.y=0,!(a>1))return e.r
if(n=t[1],e.x=-n.r,n.x=e.r,n.y=0,!(a>2))return e.r+n.r
pe(n,e,r=t[2]),e=new ve(e),n=new ve(n),r=new ve(r),e.next=r.previous=n,n.next=e.previous=r,r.next=n.previous=e
t:for(l=3;l<a;++l){pe(e._,n._,r=t[l]),r=new ve(r),s=n.next,u=e.previous,c=n._.r,h=e._.r
do{if(c<=h){if(ge(s._,r._)){n=s,e.next=n,n.previous=e,--l
continue t}c+=s._.r,s=s.next}else{if(ge(u._,r._)){(e=u).next=n,n.previous=e,--l
continue t}h+=u._.r,u=u.previous}}while(s!==u.next)
for(r.previous=e,r.next=n,e.next=n.previous=n=r,i=ye(e);(r=r.next)!==n;)(o=ye(r))<i&&(e=r,i=o)
n=e.next}for(e=[n._],r=n;(r=r.next)!==n;)e.push(r._)
for(r=Pc(e),l=0;l<a;++l)e=t[l],e.x-=r.x,e.y-=r.y
return r.r}function xe(t){if("function"!=typeof t)throw new Error
return t}function be(){return 0}function we(t){return Math.sqrt(t.value)}function Ce(t){return function(e){e.children||(e.r=Math.max(0,+t(e)||0))}}function ke(t,e){return function(n){if(r=n.children){var r,a,i,o=r.length,l=t(n)*e||0
if(l)for(a=0;a<o;++a)r[a].r+=l
if(i=me(r),l)for(a=0;a<o;++a)r[a].r-=l
n.r=i+l}}}function Se(t){return function(e){var n=e.parent
e.r*=t,n&&(e.x=n.x+t*e.x,e.y=n.y+t*e.y)}}function Oe(t){return t.id}function Ae(t){return t.parentId}function _e(t,e){return t.parent===e.parent?1:2}function Pe(t){var e=t.children
return e?e[0]:t.t}function Te(t){var e=t.children
return e?e[e.length-1]:t.t}function Me(t,e,n){var r=n/(e.i-t.i)
e.c-=r,e.s+=n,t.c+=r,e.z+=n,e.m+=n}function Ee(t,e,n){return t.a.parent===e.parent?t.a:n}function Le(t,e){this._=t,this.parent=null,this.children=null,this.A=null,this.a=this,this.z=0,this.m=0,this.c=0,this.s=0,this.t=null,this.i=e}function ze(t,e,n,r,a,i){for(var o,l,s,u,c,h,d,f,p,g,y,v=[],m=e.children,x=0,b=0,w=m.length,C=e.value;x<w;){s=a-n,u=i-r
do{c=m[b++].value}while(!c&&b<w)
for(h=d=c,y=c*c*(g=Math.max(u/s,s/u)/(C*t)),p=Math.max(d/y,y/h);b<w;++b){if(c+=l=m[b].value,l<h&&(h=l),l>d&&(d=l),y=c*c*g,(f=Math.max(d/y,y/h))>p){c-=l
break}p=f}v.push(o={value:c,dice:s<u,children:m.slice(x,b)}),o.dice?Ec(o,n,r,a,C?r+=u*c/C:i):Rc(o,n,r,C?n+=s*c/C:a,i),C-=c,x=b}return v}function De(){this._x0=this._y0=this._x1=this._y1=null,this._=""}function Re(){return new De}function je(t){function e(e){var a=e+"",o=n.get(a)
if(!o){if(i!==Uc)return i
n.set(a,o=r.push(e))}return t[(o-1)%t.length]}var n=a(),r=[],i=Uc
return t=null==t?[]:Wc.call(t),e.domain=function(t){if(!arguments.length)return r.slice()
r=[],n=a()
for(var i,o,l=-1,s=t.length;++l<s;)n.has(o=(i=t[l])+"")||n.set(o,r.push(i))
return e},e.range=function(n){return arguments.length?(t=Wc.call(n),e):t.slice()},e.unknown=function(t){return arguments.length?(i=t,e):i},e.copy=function(){return je().domain(r).range(t).unknown(i)},e}function Ie(){function t(){var t=a().length,r=o[1]<o[0],h=o[r-0],d=o[1-r]
e=(d-h)/Math.max(1,t-s+2*u),l&&(e=Math.floor(e)),h+=(d-h-e*(t-s))*c,n=e*(1-s),l&&(h=Math.round(h),n=Math.round(n))
var f=Qo(t).map(function(t){return h+e*t})
return i(r?f.reverse():f)}var e,n,r=je().unknown(void 0),a=r.domain,i=r.range,o=[0,1],l=!1,s=0,u=0,c=.5
return delete r.unknown,r.domain=function(e){return arguments.length?(a(e),t()):a()},r.range=function(e){return arguments.length?(o=[+e[0],+e[1]],t()):o.slice()},r.rangeRound=function(e){return o=[+e[0],+e[1]],l=!0,t()},r.bandwidth=function(){return n},r.step=function(){return e},r.round=function(e){return arguments.length?(l=!!e,t()):l},r.padding=function(e){return arguments.length?(s=u=Math.max(0,Math.min(1,e)),t()):s},r.paddingInner=function(e){return arguments.length?(s=Math.max(0,Math.min(1,e)),t()):s},r.paddingOuter=function(e){return arguments.length?(u=Math.max(0,Math.min(1,e)),t()):u},r.align=function(e){return arguments.length?(c=Math.max(0,Math.min(1,e)),t()):c},r.copy=function(){return Ie().domain(a()).range(o).round(l).paddingInner(s).paddingOuter(u).align(c)},t()}function He(t){var e=t.copy
return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return He(e())},t}function Be(t,e){return(e-=t=+t)?function(n){return(n-t)/e}:Xc(e)}function Ne(t,e){return e.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function Fe(t,e){function n(){return a=Math.min(l.length,s.length)>2?function(t,e,n,r){var a=Math.min(t.length,e.length)-1,i=new Array(a),o=new Array(a),l=-1
for(t[a]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++l<a;)i[l]=n(t[l],t[l+1]),o[l]=r(e[l],e[l+1])
return function(e){var n=Xo(t,e,1,a)-1
return o[n](i[n](e))}}:function(t,e,n,r){var a=t[0],i=t[1],o=e[0],l=e[1]
return i<a?(a=n(i,a),o=r(l,o)):(a=n(a,i),o=r(o,l)),function(t){return o(a(t))}},i=o=null,r}function r(e){return(i||(i=a(l,s,c?function(t){return function(e,n){var r=t(e=+e,n=+n)
return function(t){return t<=e?0:t>=n?1:r(t)}}}(t):t,u)))(+e)}var a,i,o,l=qc,s=qc,u=Ts,c=!1
return r.invert=function(t){return(o||(o=a(s,l,Be,c?function(t){return function(e,n){var r=t(e=+e,n=+n)
return function(t){return t<=0?e:t>=1?n:r(t)}}}(e):e)))(+t)},r.domain=function(t){return arguments.length?(l=Vc.call(t,Gc),n()):l.slice()},r.range=function(t){return arguments.length?(s=Wc.call(t),n()):s.slice()},r.rangeRound=function(t){return s=Wc.call(t),u=Ms,n()},r.clamp=function(t){return arguments.length?(c=!!t,n()):c},r.interpolate=function(t){return arguments.length?(u=t,n()):u},n()}function Ye(){var t=Fe(Be,Ss)
return t.copy=function(){return Ne(t,Ye())},function(t){var n=t.domain
return t.ticks=function(t){var e=n()
return tl(e[0],e[e.length-1],null==t?10:t)},t.tickFormat=function(t,e){return Zc(n(),t,e)},t.nice=function(r){null==r&&(r=10)
var a,i=n(),o=0,l=i.length-1,s=i[o],u=i[l]
return u<s&&(a=s,s=u,u=a,a=o,o=l,l=a),(a=e(s,u,r))>0?(s=Math.floor(s/a)*a,u=Math.ceil(u/a)*a,a=e(s,u,r)):a<0&&(s=Math.ceil(s*a)/a,u=Math.floor(u*a)/a,a=e(s,u,r)),a>0?(i[o]=Math.floor(s/a)*a,i[l]=Math.ceil(u/a)*a,n(i)):a<0&&(i[o]=Math.ceil(s*a)/a,i[l]=Math.floor(u*a)/a,n(i)),t},t}(t)}function Ve(){function t(){var t=0,i=Math.max(1,r.length)
for(a=new Array(i-1);++t<i;)a[t-1]=el(n,t/i)
return e}function e(t){if(!isNaN(t=+t))return r[Xo(a,t)]}var n=[],r=[],a=[]
return e.invertExtent=function(t){var e=r.indexOf(t)
return e<0?[NaN,NaN]:[e>0?a[e-1]:n[0],e<a.length?a[e]:n[n.length-1]]},e.domain=function(e){if(!arguments.length)return n.slice()
n=[]
for(var r,a=0,i=e.length;a<i;++a)null==(r=e[a])||isNaN(r=+r)||n.push(r)
return n.sort(Vo),t()},e.range=function(e){return arguments.length?(r=Wc.call(e),t()):r.slice()},e.quantiles=function(){return a.slice()},e.copy=function(){return Ve().domain(n).range(r)},e}function We(t,e,n,r){function a(e){return t(e=new Date(+e)),e}return a.floor=a,a.ceil=function(n){return t(n=new Date(n-1)),e(n,1),t(n),n},a.round=function(t){var e=a(t),n=a.ceil(t)
return t-e<n-t?e:n},a.offset=function(t,n){return e(t=new Date(+t),null==n?1:Math.floor(n)),t},a.range=function(n,r,i){var o,l=[]
if(n=a.ceil(n),i=null==i?1:Math.floor(i),!(n<r&&i>0))return l
do{l.push(o=new Date(+n)),e(n,i),t(n)}while(o<n&&n<r)
return l},a.filter=function(n){return We(function(e){if(e>=e)for(;t(e),!n(e);)e.setTime(e-1)},function(t,r){if(t>=t)if(r<0)for(;++r<=0;)for(;e(t,-1),!n(t););else for(;--r>=0;)for(;e(t,1),!n(t););})},n&&(a.count=function(e,r){return Kc.setTime(+e),$c.setTime(+r),t(Kc),t($c),Math.floor(n(Kc,$c))},a.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?a.filter(r?function(e){return r(e)%t==0}:function(e){return a.count(0,e)%t==0}):a:null}),a}function Ue(t){return We(function(e){e.setDate(e.getDate()-(e.getDay()+7-t)%7),e.setHours(0,0,0,0)},function(t,e){t.setDate(t.getDate()+7*e)},function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*eh)/nh})}function Xe(t){return We(function(e){e.setUTCDate(e.getUTCDate()-(e.getUTCDay()+7-t)%7),e.setUTCHours(0,0,0,0)},function(t,e){t.setUTCDate(t.getUTCDate()+7*e)},function(t,e){return(e-t)/nh})}function Ge(t){if(0<=t.y&&t.y<100){var e=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L)
return e.setFullYear(t.y),e}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function qe(t){if(0<=t.y&&t.y<100){var e=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L))
return e.setUTCFullYear(t.y),e}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function Ze(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function Qe(t){function e(t,e){return function(n){var r,a,i,o=[],l=-1,s=0,u=t.length
for(n instanceof Date||(n=new Date(+n));++l<u;)37===t.charCodeAt(l)&&(o.push(t.slice(s,l)),null!=(a=td[r=t.charAt(++l)])?r=t.charAt(++l):a="e"===r?" ":"0",(i=e[r])&&(r=i(n,a)),o.push(r),s=l+1)
return o.push(t.slice(s,l)),o.join("")}}function n(t,e){return function(n){var a,i,o=Ze(1900)
if(r(o,t,n+="",0)!=n.length)return null
if("Q"in o)return new Date(o.Q)
if("p"in o&&(o.H=o.H%12+12*o.p),"V"in o){if(o.V<1||o.V>53)return null
"w"in o||(o.w=1),"Z"in o?(a=qe(Ze(o.y)),i=a.getUTCDay(),a=i>4||0===i?jh.ceil(a):jh(a),a=zh.offset(a,7*(o.V-1)),o.y=a.getUTCFullYear(),o.m=a.getUTCMonth(),o.d=a.getUTCDate()+(o.w+6)%7):(a=e(Ze(o.y)),i=a.getDay(),a=i>4||0===i?dh.ceil(a):dh(a),a=uh.offset(a,7*(o.V-1)),o.y=a.getFullYear(),o.m=a.getMonth(),o.d=a.getDate()+(o.w+6)%7)}else("W"in o||"U"in o)&&("w"in o||(o.w="u"in o?o.u%7:"W"in o?1:0),i="Z"in o?qe(Ze(o.y)).getUTCDay():e(Ze(o.y)).getDay(),o.m=0,o.d="W"in o?(o.w+6)%7+7*o.W-(i+5)%7:o.w+7*o.U-(i+6)%7)
return"Z"in o?(o.H+=o.Z/100|0,o.M+=o.Z%100,qe(o)):e(o)}}function r(t,e,n,r){for(var a,i,o=0,l=e.length,s=n.length;o<l;){if(r>=s)return-1
if(37===(a=e.charCodeAt(o++))){if(a=e.charAt(o++),!(i=S[a in td?e.charAt(o++):a])||(r=i(t,n,r))<0)return-1}else if(a!=n.charCodeAt(r++))return-1}return r}var a=t.dateTime,i=t.date,o=t.time,l=t.periods,s=t.days,u=t.shortDays,c=t.months,h=t.shortMonths,d=Je(l),f=tn(l),p=Je(s),g=tn(s),y=Je(u),v=tn(u),m=Je(c),x=tn(c),b=Je(h),w=tn(h),C={a:function(t){return u[t.getDay()]},A:function(t){return s[t.getDay()]},b:function(t){return h[t.getMonth()]},B:function(t){return c[t.getMonth()]},c:null,d:wn,e:wn,f:An,H:Cn,I:kn,j:Sn,L:On,m:_n,M:Pn,p:function(t){return l[+(t.getHours()>=12)]},Q:nr,s:rr,S:Tn,u:Mn,U:En,V:Ln,w:zn,W:Dn,x:null,X:null,y:Rn,Y:jn,Z:In,"%":er},k={a:function(t){return u[t.getUTCDay()]},A:function(t){return s[t.getUTCDay()]},b:function(t){return h[t.getUTCMonth()]},B:function(t){return c[t.getUTCMonth()]},c:null,d:Hn,e:Hn,f:Vn,H:Bn,I:Nn,j:Fn,L:Yn,m:Wn,M:Un,p:function(t){return l[+(t.getUTCHours()>=12)]},Q:nr,s:rr,S:Xn,u:Gn,U:qn,V:Zn,w:Qn,W:Kn,x:null,X:null,y:$n,Y:Jn,Z:tr,"%":er},S={a:function(t,e,n){var r=y.exec(e.slice(n))
return r?(t.w=v[r[0].toLowerCase()],n+r[0].length):-1},A:function(t,e,n){var r=p.exec(e.slice(n))
return r?(t.w=g[r[0].toLowerCase()],n+r[0].length):-1},b:function(t,e,n){var r=b.exec(e.slice(n))
return r?(t.m=w[r[0].toLowerCase()],n+r[0].length):-1},B:function(t,e,n){var r=m.exec(e.slice(n))
return r?(t.m=x[r[0].toLowerCase()],n+r[0].length):-1},c:function(t,e,n){return r(t,a,e,n)},d:hn,e:hn,f:vn,H:fn,I:fn,j:dn,L:yn,m:cn,M:pn,p:function(t,e,n){var r=d.exec(e.slice(n))
return r?(t.p=f[r[0].toLowerCase()],n+r[0].length):-1},Q:xn,s:bn,S:gn,u:nn,U:rn,V:an,w:en,W:on,x:function(t,e,n){return r(t,i,e,n)},X:function(t,e,n){return r(t,o,e,n)},y:sn,Y:ln,Z:un,"%":mn}
return C.x=e(i,C),C.X=e(o,C),C.c=e(a,C),k.x=e(i,k),k.X=e(o,k),k.c=e(a,k),{format:function(t){var n=e(t+="",C)
return n.toString=function(){return t},n},parse:function(t){var e=n(t+="",Ge)
return e.toString=function(){return t},e},utcFormat:function(t){var n=e(t+="",k)
return n.toString=function(){return t},n},utcParse:function(t){var e=n(t,qe)
return e.toString=function(){return t},e}}}function Ke(t,e,n){var r=t<0?"-":"",a=(r?-t:t)+"",i=a.length
return r+(i<n?new Array(n-i+1).join(e)+a:a)}function $e(t){return t.replace(rd,"\\$&")}function Je(t){return new RegExp("^(?:"+t.map($e).join("|")+")","i")}function tn(t){for(var e={},n=-1,r=t.length;++n<r;)e[t[n].toLowerCase()]=n
return e}function en(t,e,n){var r=ed.exec(e.slice(n,n+1))
return r?(t.w=+r[0],n+r[0].length):-1}function nn(t,e,n){var r=ed.exec(e.slice(n,n+1))
return r?(t.u=+r[0],n+r[0].length):-1}function rn(t,e,n){var r=ed.exec(e.slice(n,n+2))
return r?(t.U=+r[0],n+r[0].length):-1}function an(t,e,n){var r=ed.exec(e.slice(n,n+2))
return r?(t.V=+r[0],n+r[0].length):-1}function on(t,e,n){var r=ed.exec(e.slice(n,n+2))
return r?(t.W=+r[0],n+r[0].length):-1}function ln(t,e,n){var r=ed.exec(e.slice(n,n+4))
return r?(t.y=+r[0],n+r[0].length):-1}function sn(t,e,n){var r=ed.exec(e.slice(n,n+2))
return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),n+r[0].length):-1}function un(t,e,n){var r=/^(Z)|([+-]\d\d)(?::?(\d\d))?/.exec(e.slice(n,n+6))
return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),n+r[0].length):-1}function cn(t,e,n){var r=ed.exec(e.slice(n,n+2))
return r?(t.m=r[0]-1,n+r[0].length):-1}function hn(t,e,n){var r=ed.exec(e.slice(n,n+2))
return r?(t.d=+r[0],n+r[0].length):-1}function dn(t,e,n){var r=ed.exec(e.slice(n,n+3))
return r?(t.m=0,t.d=+r[0],n+r[0].length):-1}function fn(t,e,n){var r=ed.exec(e.slice(n,n+2))
return r?(t.H=+r[0],n+r[0].length):-1}function pn(t,e,n){var r=ed.exec(e.slice(n,n+2))
return r?(t.M=+r[0],n+r[0].length):-1}function gn(t,e,n){var r=ed.exec(e.slice(n,n+2))
return r?(t.S=+r[0],n+r[0].length):-1}function yn(t,e,n){var r=ed.exec(e.slice(n,n+3))
return r?(t.L=+r[0],n+r[0].length):-1}function vn(t,e,n){var r=ed.exec(e.slice(n,n+6))
return r?(t.L=Math.floor(r[0]/1e3),n+r[0].length):-1}function mn(t,e,n){var r=nd.exec(e.slice(n,n+1))
return r?n+r[0].length:-1}function xn(t,e,n){var r=ed.exec(e.slice(n))
return r?(t.Q=+r[0],n+r[0].length):-1}function bn(t,e,n){var r=ed.exec(e.slice(n))
return r?(t.Q=1e3*+r[0],n+r[0].length):-1}function wn(t,e){return Ke(t.getDate(),e,2)}function Cn(t,e){return Ke(t.getHours(),e,2)}function kn(t,e){return Ke(t.getHours()%12||12,e,2)}function Sn(t,e){return Ke(1+uh.count(_h(t),t),e,3)}function On(t,e){return Ke(t.getMilliseconds(),e,3)}function An(t,e){return On(t,e)+"000"}function _n(t,e){return Ke(t.getMonth()+1,e,2)}function Pn(t,e){return Ke(t.getMinutes(),e,2)}function Tn(t,e){return Ke(t.getSeconds(),e,2)}function Mn(t){var e=t.getDay()
return 0===e?7:e}function En(t,e){return Ke(hh.count(_h(t),t),e,2)}function Ln(t,e){var n=t.getDay()
return t=n>=4||0===n?gh(t):gh.ceil(t),Ke(gh.count(_h(t),t)+(4===_h(t).getDay()),e,2)}function zn(t){return t.getDay()}function Dn(t,e){return Ke(dh.count(_h(t),t),e,2)}function Rn(t,e){return Ke(t.getFullYear()%100,e,2)}function jn(t,e){return Ke(t.getFullYear()%1e4,e,4)}function In(t){var e=t.getTimezoneOffset()
return(e>0?"-":(e*=-1,"+"))+Ke(e/60|0,"0",2)+Ke(e%60,"0",2)}function Hn(t,e){return Ke(t.getUTCDate(),e,2)}function Bn(t,e){return Ke(t.getUTCHours(),e,2)}function Nn(t,e){return Ke(t.getUTCHours()%12||12,e,2)}function Fn(t,e){return Ke(1+zh.count(Kh(t),t),e,3)}function Yn(t,e){return Ke(t.getUTCMilliseconds(),e,3)}function Vn(t,e){return Yn(t,e)+"000"}function Wn(t,e){return Ke(t.getUTCMonth()+1,e,2)}function Un(t,e){return Ke(t.getUTCMinutes(),e,2)}function Xn(t,e){return Ke(t.getUTCSeconds(),e,2)}function Gn(t){var e=t.getUTCDay()
return 0===e?7:e}function qn(t,e){return Ke(Rh.count(Kh(t),t),e,2)}function Zn(t,e){var n=t.getUTCDay()
return t=n>=4||0===n?Bh(t):Bh.ceil(t),Ke(Bh.count(Kh(t),t)+(4===Kh(t).getUTCDay()),e,2)}function Qn(t){return t.getUTCDay()}function Kn(t,e){return Ke(jh.count(Kh(t),t),e,2)}function $n(t,e){return Ke(t.getUTCFullYear()%100,e,2)}function Jn(t,e){return Ke(t.getUTCFullYear()%1e4,e,4)}function tr(){return"+0000"}function er(){return"%"}function nr(t){return+t}function rr(t){return Math.floor(+t/1e3)}function ar(e){return $h=Qe(e),t.timeFormat=$h.format,t.timeParse=$h.parse,t.utcFormat=$h.utcFormat,t.utcParse=$h.utcParse,$h}function ir(t){return new Date(t)}function or(t){return t instanceof Date?+t:+new Date(+t)}function lr(t,e,r,a,i,o,l,s,u){function c(e,r,a,i){if(null==e&&(e=10),"number"==typeof e){var o=Math.abs(a-r)/e,l=Wo(function(t){return t[2]}).right(C,o)
l===C.length?(i=n(r/dd,a/dd,e),e=t):l?(l=C[o/C[l-1][2]<C[l][2]/o?l-1:l],i=l[1],e=l[0]):(i=Math.max(n(r,a,e),1),e=s)}return null==i?e:e.every(i)}var h=Fe(Be,Ss),d=h.invert,f=h.domain,p=u(".%L"),g=u(":%S"),y=u("%I:%M"),v=u("%I %p"),m=u("%a %d"),x=u("%b %d"),b=u("%B"),w=u("%Y"),C=[[l,1,od],[l,5,5*od],[l,15,15*od],[l,30,30*od],[o,1,ld],[o,5,5*ld],[o,15,15*ld],[o,30,30*ld],[i,1,sd],[i,3,3*sd],[i,6,6*sd],[i,12,12*sd],[a,1,ud],[a,2,2*ud],[r,1,cd],[e,1,hd],[e,3,3*hd],[t,1,dd]]
return h.invert=function(t){return new Date(d(t))},h.domain=function(t){return arguments.length?f(Vc.call(t,or)):f().map(ir)},h.ticks=function(t,e){var n,r=f(),a=r[0],i=r[r.length-1],o=i<a
return o&&(n=a,a=i,i=n),n=c(t,a,i,e),n=n?n.range(a,i+1):[],o?n.reverse():n},h.tickFormat=function(n,s){return null==s?function(n){return(l(n)<n?p:o(n)<n?g:i(n)<n?y:a(n)<n?v:e(n)<n?r(n)<n?m:x:t(n)<n?b:w)(n)}:u(s)},h.nice=function(t,e){var n=f()
return(t=c(t,n[0],n[n.length-1],e))?f(Qc(n,t)):h},h.copy=function(){return Ne(h,lr(t,e,r,a,i,o,l,s,u))},h}function sr(t){return t>=1?Od:t<=-1?-Od:Math.asin(t)}function ur(t){return t.innerRadius}function cr(t){return t.outerRadius}function hr(t){return t.startAngle}function dr(t){return t.endAngle}function fr(t){return t&&t.padAngle}function pr(t,e,n,r,a,i,o){var l=t-n,s=e-r,u=(o?i:-i)/Cd(l*l+s*s),c=u*s,h=-u*l,d=t+c,f=e+h,p=n+c,g=r+h,y=(d+p)/2,v=(f+g)/2,m=p-d,x=g-f,b=m*m+x*x,w=a-i,C=d*g-p*f,k=(x<0?-1:1)*Cd(xd(0,w*w*b-C*C)),S=(C*x-m*k)/b,O=(-C*m-x*k)/b,A=(C*x+m*k)/b,_=(-C*m+x*k)/b,P=S-y,T=O-v,M=A-y,E=_-v
return P*P+T*T>M*M+E*E&&(S=A,O=_),{cx:S,cy:O,x01:-c,y01:-h,x11:S*(a/w-1),y11:O*(a/w-1)}}function gr(t){this._context=t}function yr(t){return t[0]}function vr(t){return t[1]}function mr(t){this._curve=t}function xr(t){function e(e){return new mr(t(e))}return e._curve=t,e}function br(t){var e=t.curve
return t.angle=t.x,delete t.x,t.radius=t.y,delete t.y,t.curve=function(t){return arguments.length?e(xr(t)):e()._curve},t}function wr(t,e,n){t._context.bezierCurveTo((2*t._x0+t._x1)/3,(2*t._y0+t._y1)/3,(t._x0+2*t._x1)/3,(t._y0+2*t._y1)/3,(t._x0+4*t._x1+e)/6,(t._y0+4*t._y1+n)/6)}function Cr(t){this._context=t}function kr(t,e){this._basis=new Cr(t),this._beta=e}function Sr(t,e,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function Or(t,e){this._context=t,this._k=(1-e)/6}function Ar(t,e){this._context=t,this._k=(1-e)/6}function _r(t,e){this._context=t,this._k=(1-e)/6}function Pr(t,e,n){var r=t._x1,a=t._y1,i=t._x2,o=t._y2
if(t._l01_a>kd){var l=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,s=3*t._l01_a*(t._l01_a+t._l12_a)
r=(r*l-t._x0*t._l12_2a+t._x2*t._l01_2a)/s,a=(a*l-t._y0*t._l12_2a+t._y2*t._l01_2a)/s}if(t._l23_a>kd){var u=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,c=3*t._l23_a*(t._l23_a+t._l12_a)
i=(i*u+t._x1*t._l23_2a-e*t._l12_2a)/c,o=(o*u+t._y1*t._l23_2a-n*t._l12_2a)/c}t._context.bezierCurveTo(r,a,i,o,t._x2,t._y2)}function Tr(t,e){this._context=t,this._alpha=e}function Mr(t,e){this._context=t,this._alpha=e}function Er(t,e){this._context=t,this._alpha=e}function Lr(t){this._context=t}function zr(t){return t<0?-1:1}function Dr(t,e,n){var r=t._x1-t._x0,a=e-t._x1,i=(t._y1-t._y0)/(r||a<0&&-0),o=(n-t._y1)/(a||r<0&&-0),l=(i*a+o*r)/(r+a)
return(zr(i)+zr(o))*Math.min(Math.abs(i),Math.abs(o),.5*Math.abs(l))||0}function Rr(t,e){var n=t._x1-t._x0
return n?(3*(t._y1-t._y0)/n-e)/2:e}function jr(t,e,n){var r=t._x0,a=t._y0,i=t._x1,o=t._y1,l=(i-r)/3
t._context.bezierCurveTo(r+l,a+l*e,i-l,o-l*n,i,o)}function Ir(t){this._context=t}function Hr(t){this._context=new Br(t)}function Br(t){this._context=t}function Nr(t,e){this._context=t,this._t=e}function Fr(t,e){return t[e]}function Yr(t,e,n){this.k=t,this.x=e,this.y=n}function Vr(t){return t.__zoom||Yd}function Wr(){t.event.stopImmediatePropagation()}function Ur(){return!t.event.button}function Xr(){var t,e,n=this
return n instanceof SVGElement?(n=n.ownerSVGElement||n,t=n.width.baseVal.value,e=n.height.baseVal.value):(t=n.clientWidth,e=n.clientHeight),[[0,0],[t,e]]}function Gr(){return this.__zoom||Yd}function qr(){return-t.event.deltaY*(t.event.deltaMode?120:1)/500}function Zr(){return"ontouchstart"in this}function Qr(t,e,n){var r=t.invertX(e[0][0])-n[0][0],a=t.invertX(e[1][0])-n[1][0],i=t.invertY(e[0][1])-n[0][1],o=t.invertY(e[1][1])-n[1][1]
return t.translate(a>r?(r+a)/2:Math.min(0,r)||Math.max(0,a),o>i?(i+o)/2:Math.min(0,i)||Math.max(0,o))}function Kr(t,e){return t[0]-e[0]||t[1]-e[1]}function $r(t){for(var e=t.length,n=[0,1],r=2,a=2;a<e;++a){for(;r>1&&Wd(t[n[r-2]],t[n[r-1]],t[a])<=0;)--r
n[r++]=a}return n.slice(0,r)}function Jr(){this.reset()}function ta(t,e,n){var r=t.s=e+n,a=r-e,i=r-a
t.t=e-i+(n-a)}function ea(t){return t>1?0:t<-1?Af:Math.acos(t)}function na(t){return t>1?_f:t<-1?-_f:Math.asin(t)}function ra(t){return(t=Nf(t/2))*t}function aa(){}function ia(t,e){t&&Uf.hasOwnProperty(t.type)&&Uf[t.type](t,e)}function oa(t,e,n){var r,a=-1,i=t.length-n
for(e.lineStart();++a<i;)r=t[a],e.point(r[0],r[1],r[2])
e.lineEnd()}function la(t,e){var n=-1,r=t.length
for(e.polygonStart();++n<r;)oa(t[n],e,1)
e.polygonEnd()}function sa(){Zf.point=ca}function ua(){ha(Xd,Gd)}function ca(t,e){Zf.point=ha,Xd=t,Gd=e,qd=t*=Ef,Zd=Rf(e=(e*=Ef)/2+Pf),Qd=Nf(e)}function ha(t,e){e=(e*=Ef)/2+Pf
var n=(t*=Ef)-qd,r=n>=0?1:-1,a=r*n,i=Rf(e),o=Nf(e),l=Qd*o,s=Zd*i+l*Rf(a),u=l*r*Nf(a)
Gf.add(Df(u,s)),qd=t,Zd=i,Qd=o}function da(t){return[Df(t[1],t[0]),na(t[2])]}function fa(t){var e=t[0],n=t[1],r=Rf(n)
return[r*Rf(e),r*Nf(e),Nf(n)]}function pa(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function ga(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}function ya(t,e){t[0]+=e[0],t[1]+=e[1],t[2]+=e[2]}function va(t,e){return[t[0]*e,t[1]*e,t[2]*e]}function ma(t){var e=Yf(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])
t[0]/=e,t[1]/=e,t[2]/=e}function xa(t,e){of.push(lf=[Kd=t,Jd=t]),e<$d&&($d=e),e>tf&&(tf=e)}function ba(t,e){var n=fa([t*Ef,e*Ef])
if(af){var r=ga(af,n),a=ga([r[1],-r[0],0],r)
ma(a),a=da(a)
var i,o=t-ef,l=o>0?1:-1,s=a[0]*Mf*l,u=Lf(o)>180
u^(l*ef<s&&s<l*t)?(i=a[1]*Mf)>tf&&(tf=i):(s=(s+360)%360-180,u^(l*ef<s&&s<l*t)?(i=-a[1]*Mf)<$d&&($d=i):(e<$d&&($d=e),e>tf&&(tf=e))),u?t<ef?Aa(Kd,t)>Aa(Kd,Jd)&&(Jd=t):Aa(t,Jd)>Aa(Kd,Jd)&&(Kd=t):Jd>=Kd?(t<Kd&&(Kd=t),t>Jd&&(Jd=t)):t>ef?Aa(Kd,t)>Aa(Kd,Jd)&&(Jd=t):Aa(t,Jd)>Aa(Kd,Jd)&&(Kd=t)}else of.push(lf=[Kd=t,Jd=t])
e<$d&&($d=e),e>tf&&(tf=e),af=n,ef=t}function wa(){Kf.point=ba}function Ca(){lf[0]=Kd,lf[1]=Jd,Kf.point=xa,af=null}function ka(t,e){if(af){var n=t-ef
Qf.add(Lf(n)>180?n+(n>0?360:-360):n)}else nf=t,rf=e
Zf.point(t,e),ba(t,e)}function Sa(){Zf.lineStart()}function Oa(){ka(nf,rf),Zf.lineEnd(),Lf(Qf)>Of&&(Kd=-(Jd=180)),lf[0]=Kd,lf[1]=Jd,af=null}function Aa(t,e){return(e-=t)<0?e+360:e}function _a(t,e){return t[0]-e[0]}function Pa(t,e){return t[0]<=t[1]?t[0]<=e&&e<=t[1]:e<t[0]||t[1]<e}function Ta(t,e){t*=Ef
var n=Rf(e*=Ef)
Ma(n*Rf(t),n*Nf(t),Nf(e))}function Ma(t,e,n){cf+=(t-cf)/++sf,hf+=(e-hf)/sf,df+=(n-df)/sf}function Ea(){$f.point=La}function La(t,e){t*=Ef
var n=Rf(e*=Ef)
wf=n*Rf(t),Cf=n*Nf(t),kf=Nf(e),$f.point=za,Ma(wf,Cf,kf)}function za(t,e){t*=Ef
var n=Rf(e*=Ef),r=n*Rf(t),a=n*Nf(t),i=Nf(e),o=Df(Yf((o=Cf*i-kf*a)*o+(o=kf*r-wf*i)*o+(o=wf*a-Cf*r)*o),wf*r+Cf*a+kf*i)
uf+=o,ff+=o*(wf+(wf=r)),pf+=o*(Cf+(Cf=a)),gf+=o*(kf+(kf=i)),Ma(wf,Cf,kf)}function Da(){$f.point=Ta}function Ra(){$f.point=Ia}function ja(){Ha(xf,bf),$f.point=Ta}function Ia(t,e){xf=t,bf=e,t*=Ef,e*=Ef,$f.point=Ha
var n=Rf(e)
wf=n*Rf(t),Cf=n*Nf(t),kf=Nf(e),Ma(wf,Cf,kf)}function Ha(t,e){t*=Ef
var n=Rf(e*=Ef),r=n*Rf(t),a=n*Nf(t),i=Nf(e),o=Cf*i-kf*a,l=kf*r-wf*i,s=wf*a-Cf*r,u=Yf(o*o+l*l+s*s),c=na(u),h=u&&-c/u
yf+=h*o,vf+=h*l,mf+=h*s,uf+=c,ff+=c*(wf+(wf=r)),pf+=c*(Cf+(Cf=a)),gf+=c*(kf+(kf=i)),Ma(wf,Cf,kf)}function Ba(t,e){return[t>Af?t-Tf:t<-Af?t+Tf:t,e]}function Na(t,e,n){return(t%=Tf)?e||n?ep(Ya(t),Va(e,n)):Ya(t):e||n?Va(e,n):Ba}function Fa(t){return function(e,n){return e+=t,[e>Af?e-Tf:e<-Af?e+Tf:e,n]}}function Ya(t){var e=Fa(t)
return e.invert=Fa(-t),e}function Va(t,e){function n(t,e){var n=Rf(e),l=Rf(t)*n,s=Nf(t)*n,u=Nf(e),c=u*r+l*a
return[Df(s*i-c*o,l*r-u*a),na(c*i+s*o)]}var r=Rf(t),a=Nf(t),i=Rf(e),o=Nf(e)
return n.invert=function(t,e){var n=Rf(e),l=Rf(t)*n,s=Nf(t)*n,u=Nf(e),c=u*i-s*o
return[Df(s*i+u*o,l*r+c*a),na(c*r-l*a)]},n}function Wa(t,e,n,r,a,i){if(n){var o=Rf(e),l=Nf(e),s=r*n
null==a?(a=e+r*Tf,i=e-s/2):(a=Ua(o,a),i=Ua(o,i),(r>0?a<i:a>i)&&(a+=r*Tf))
for(var u,c=a;r>0?c>i:c<i;c-=s)u=da([o,-l*Rf(c),-l*Nf(c)]),t.point(u[0],u[1])}}function Ua(t,e){(e=fa(e))[0]-=t,ma(e)
var n=ea(-e[1])
return((-e[2]<0?-n:n)+Tf-Of)%Tf}function Xa(t,e,n,r){this.x=t,this.z=e,this.o=n,this.e=r,this.v=!1,this.n=this.p=null}function Ga(t){if(e=t.length){for(var e,n,r=0,a=t[0];++r<e;)a.n=n=t[r],n.p=a,a=n
a.n=n=t[0],n.p=a}}function qa(t){return t.length>1}function Za(t,e){return((t=t.x)[0]<0?t[1]-_f-Of:_f-t[1])-((e=e.x)[0]<0?e[1]-_f-Of:_f-e[1])}function Qa(t,e,n,r){function a(a,i){return t<=a&&a<=n&&e<=i&&i<=r}function i(a,i,l,u){var c=0,h=0
if(null==a||(c=o(a,l))!==(h=o(i,l))||s(a,i)<0^l>0)do{u.point(0===c||3===c?t:n,c>1?r:e)}while((c=(c+l+4)%4)!==h)
else u.point(i[0],i[1])}function o(r,a){return Lf(r[0]-t)<Of?a>0?0:3:Lf(r[0]-n)<Of?a>0?2:1:Lf(r[1]-e)<Of?a>0?1:0:a>0?3:2}function l(t,e){return s(t.x,e.x)}function s(t,e){var n=o(t,1),r=o(e,1)
return n!==r?n-r:0===n?e[1]-t[1]:1===n?t[0]-e[0]:2===n?t[1]-e[1]:e[0]-t[0]}return function(o){function s(t,e){a(t,e)&&w.point(t,e)}function u(i,o){var l=a(i,o)
if(h&&d.push([i,o]),x)f=i,p=o,g=l,x=!1,l&&(w.lineStart(),w.point(i,o))
else if(l&&m)w.point(i,o)
else{var s=[y=Math.max(Sp,Math.min(kp,y)),v=Math.max(Sp,Math.min(kp,v))],u=[i=Math.max(Sp,Math.min(kp,i)),o=Math.max(Sp,Math.min(kp,o))]
Cp(s,u,t,e,n,r)?(m||(w.lineStart(),w.point(s[0],s[1])),w.point(u[0],u[1]),l||w.lineEnd(),b=!1):l&&(w.lineStart(),w.point(i,o),b=!1)}y=i,v=o,m=l}var c,h,d,f,p,g,y,v,m,x,b,w=o,C=pp(),k={point:s,lineStart:function(){k.point=u,h&&h.push(d=[]),x=!0,m=!1,y=v=NaN},lineEnd:function(){c&&(u(f,p),g&&m&&C.rejoin(),c.push(C.result())),k.point=s,m&&w.lineEnd()},polygonStart:function(){w=C,c=[],h=[],b=!0},polygonEnd:function(){var e=function(){for(var e=0,n=0,a=h.length;n<a;++n)for(var i,o,l=h[n],s=1,u=l.length,c=l[0],d=c[0],f=c[1];s<u;++s)i=d,o=f,c=l[s],d=c[0],f=c[1],o<=r?f>r&&(d-i)*(r-o)>(f-o)*(t-i)&&++e:f<=r&&(d-i)*(r-o)<(f-o)*(t-i)&&--e
return e}(),n=b&&e,a=(c=nl(c)).length;(n||a)&&(o.polygonStart(),n&&(o.lineStart(),i(null,null,1,o),o.lineEnd()),a&&yp(c,l,e,i,o),o.polygonEnd()),w=o,c=h=d=null}}
return k}}function Ka(){Ap.point=Ap.lineEnd=aa}function $a(t,e){np=t*=Ef,rp=Nf(e*=Ef),ap=Rf(e),Ap.point=Ja}function Ja(t,e){t*=Ef
var n=Nf(e*=Ef),r=Rf(e),a=Lf(t-np),i=Rf(a),o=r*Nf(a),l=ap*n-rp*r*i,s=rp*n+ap*r*i
Op.add(Df(Yf(o*o+l*l),s)),np=t,rp=n,ap=r}function ti(t,e){return!(!t||!Lp.hasOwnProperty(t.type))&&Lp[t.type](t,e)}function ei(t,e){return 0===Mp(t,e)}function ni(t,e){var n=Mp(t[0],t[1])
return Mp(t[0],e)+Mp(e,t[1])<=n+Of}function ri(t,e){return!!mp(t.map(ai),ii(e))}function ai(t){return(t=t.map(ii)).pop(),t}function ii(t){return[t[0]*Ef,t[1]*Ef]}function oi(t,e,n){var r=Qo(t,e-Of,n).concat(e)
return function(t){return r.map(function(e){return[t,e]})}}function li(t,e,n){var r=Qo(t,e-Of,n).concat(e)
return function(t){return r.map(function(e){return[e,t]})}}function si(){function t(){return{type:"MultiLineString",coordinates:e()}}function e(){return Qo(jf(i/y)*y,a,y).map(d).concat(Qo(jf(u/v)*v,s,v).map(f)).concat(Qo(jf(r/p)*p,n,p).filter(function(t){return Lf(t%y)>Of}).map(c)).concat(Qo(jf(l/g)*g,o,g).filter(function(t){return Lf(t%v)>Of}).map(h))}var n,r,a,i,o,l,s,u,c,h,d,f,p=10,g=p,y=90,v=360,m=2.5
return t.lines=function(){return e().map(function(t){return{type:"LineString",coordinates:t}})},t.outline=function(){return{type:"Polygon",coordinates:[d(i).concat(f(s).slice(1),d(a).reverse().slice(1),f(u).reverse().slice(1))]}},t.extent=function(e){return arguments.length?t.extentMajor(e).extentMinor(e):t.extentMinor()},t.extentMajor=function(e){return arguments.length?(i=+e[0][0],a=+e[1][0],u=+e[0][1],s=+e[1][1],i>a&&(e=i,i=a,a=e),u>s&&(e=u,u=s,s=e),t.precision(m)):[[i,u],[a,s]]},t.extentMinor=function(e){return arguments.length?(r=+e[0][0],n=+e[1][0],l=+e[0][1],o=+e[1][1],r>n&&(e=r,r=n,n=e),l>o&&(e=l,l=o,o=e),t.precision(m)):[[r,l],[n,o]]},t.step=function(e){return arguments.length?t.stepMajor(e).stepMinor(e):t.stepMinor()},t.stepMajor=function(e){return arguments.length?(y=+e[0],v=+e[1],t):[y,v]},t.stepMinor=function(e){return arguments.length?(p=+e[0],g=+e[1],t):[p,g]},t.precision=function(e){return arguments.length?(m=+e,c=oi(l,o,90),h=li(r,n,m),d=oi(u,s,90),f=li(i,a,m),t):m},t.extentMajor([[-180,-90+Of],[180,90-Of]]).extentMinor([[-180,-80-Of],[180,80+Of]])}function ui(){jp.point=ci}function ci(t,e){jp.point=hi,ip=lp=t,op=sp=e}function hi(t,e){Rp.add(sp*t-lp*e),lp=t,sp=e}function di(){hi(ip,op)}function fi(t,e){Yp+=t,Vp+=e,++Wp}function pi(){Kp.point=gi}function gi(t,e){Kp.point=yi,fi(hp=t,dp=e)}function yi(t,e){var n=t-hp,r=e-dp,a=Yf(n*n+r*r)
Up+=a*(hp+t)/2,Xp+=a*(dp+e)/2,Gp+=a,fi(hp=t,dp=e)}function vi(){Kp.point=fi}function mi(){Kp.point=bi}function xi(){wi(up,cp)}function bi(t,e){Kp.point=wi,fi(up=hp=t,cp=dp=e)}function wi(t,e){var n=t-hp,r=e-dp,a=Yf(n*n+r*r)
Up+=a*(hp+t)/2,Xp+=a*(dp+e)/2,Gp+=a,qp+=(a=dp*t-hp*e)*(hp+t),Zp+=a*(dp+e),Qp+=3*a,fi(hp=t,dp=e)}function Ci(t){this._context=t}function ki(t,e){ag.point=Si,Jp=eg=t,tg=ng=e}function Si(t,e){eg-=t,ng-=e,rg.add(Yf(eg*eg+ng*ng)),eg=t,ng=e}function Oi(){this._string=[]}function Ai(t){return"m0,"+t+"a"+t+","+t+" 0 1,1 0,"+-2*t+"a"+t+","+t+" 0 1,1 0,"+2*t+"z"}function _i(t){return function(e){var n=new Pi
for(var r in t)n[r]=t[r]
return n.stream=e,n}}function Pi(){}function Ti(t,e,n){var r=t.clipExtent&&t.clipExtent()
return t.scale(150).translate([0,0]),null!=r&&t.clipExtent(null),Xf(n,t.stream(Fp)),e(Fp.result()),null!=r&&t.clipExtent(r),t}function Mi(t,e,n){return Ti(t,function(n){var r=e[1][0]-e[0][0],a=e[1][1]-e[0][1],i=Math.min(r/(n[1][0]-n[0][0]),a/(n[1][1]-n[0][1])),o=+e[0][0]+(r-i*(n[1][0]+n[0][0]))/2,l=+e[0][1]+(a-i*(n[1][1]+n[0][1]))/2
t.scale(150*i).translate([o,l])},n)}function Ei(t,e,n){return Mi(t,[[0,0],e],n)}function Li(t,e,n){return Ti(t,function(n){var r=+e,a=r/(n[1][0]-n[0][0]),i=(r-a*(n[1][0]+n[0][0]))/2,o=-a*n[0][1]
t.scale(150*a).translate([i,o])},n)}function zi(t,e,n){return Ti(t,function(n){var r=+e,a=r/(n[1][1]-n[0][1]),i=-a*n[0][0],o=(r-a*(n[1][1]+n[0][1]))/2
t.scale(150*a).translate([i,o])},n)}function Di(t,e,n,r){function a(t,r){return[l*t-s*r+e,n-s*t-l*r]}var i=Rf(r),o=Nf(r),l=i*t,s=o*t,u=i/t,c=o/t,h=(o*n-i*e)/t,d=(o*e+i*n)/t
return a.invert=function(t,e){return[u*t-c*e+h,d-c*t-u*e]},a}function Ri(t){return ji(function(){return t})()}function ji(t){function e(t){return h(t[0]*Ef,t[1]*Ef)}function n(){var t=Di(p,0,0,C).apply(null,a(v,m)),e=(C?Di:function(t,e,n){function r(r,a){return[e+t*r,n-t*a]}return r.invert=function(r,a){return[(r-e)/t,(n-a)/t]},r})(p,g-t[0],y-t[1],C)
return i=Na(x,b,w),c=ep(a,e),h=ep(i,c),u=lg(c,_),r()}function r(){return d=f=null,e}var a,i,o,l,s,u,c,h,d,f,p=150,g=480,y=250,v=0,m=0,x=0,b=0,w=0,C=0,k=null,S=bp,O=null,A=zp,_=.5
return e.stream=function(t){return d&&f===t?d:d=sg(function(t){return _i({point:function(e,n){var r=t(e,n)
return this.stream.point(r[0],r[1])}})}(i)(S(u(A(f=t)))))},e.preclip=function(t){return arguments.length?(S=t,k=void 0,r()):S},e.postclip=function(t){return arguments.length?(A=t,O=o=l=s=null,r()):A},e.clipAngle=function(t){return arguments.length?(S=+t?wp(k=t*Ef):(k=null,bp),r()):k*Mf},e.clipExtent=function(t){return arguments.length?(A=null==t?(O=o=l=s=null,zp):Qa(O=+t[0][0],o=+t[0][1],l=+t[1][0],s=+t[1][1]),r()):null==O?null:[[O,o],[l,s]]},e.scale=function(t){return arguments.length?(p=+t,n()):p},e.translate=function(t){return arguments.length?(g=+t[0],y=+t[1],n()):[g,y]},e.center=function(t){return arguments.length?(v=t[0]%360*Ef,m=t[1]%360*Ef,n()):[v*Mf,m*Mf]},e.rotate=function(t){return arguments.length?(x=t[0]%360*Ef,b=t[1]%360*Ef,w=t.length>2?t[2]%360*Ef:0,n()):[x*Mf,b*Mf,w*Mf]},e.angle=function(t){return arguments.length?(C=t%360*Ef,n()):C*Mf},e.precision=function(t){return arguments.length?(u=lg(c,_=t*t),r()):Yf(_)},e.fitExtent=function(t,n){return Mi(e,t,n)},e.fitSize=function(t,n){return Ei(e,t,n)},e.fitWidth=function(t,n){return Li(e,t,n)},e.fitHeight=function(t,n){return zi(e,t,n)},function(){return a=t.apply(this,arguments),e.invert=a.invert&&function(t){return(t=h.invert(t[0],t[1]))&&[t[0]*Mf,t[1]*Mf]},n()}}function Ii(t){var e=0,n=Af/3,r=ji(t),a=r(e,n)
return a.parallels=function(t){return arguments.length?r(e=t[0]*Ef,n=t[1]*Ef):[e*Mf,n*Mf]},a}function Hi(t,e){function n(t,e){var n=Yf(i-2*a*Nf(e))/a
return[n*Nf(t*=a),o-n*Rf(t)]}var r=Nf(t),a=(r+Nf(e))/2
if(Lf(a)<Of)return function(t){function e(t,e){return[t*n,Nf(e)/n]}var n=Rf(t)
return e.invert=function(t,e){return[t/n,na(e*n)]},e}(t)
var i=1+r*(2*a-r),o=Yf(i)/a
return n.invert=function(t,e){var n=o-e
return[Df(t,Lf(n))/a*Ff(n),na((i-(t*t+n*n)*a*a)/(2*a))]},n}function Bi(t){return function(e,n){var r=Rf(e),a=Rf(n),i=t(r*a)
return[i*a*Nf(e),i*Nf(n)]}}function Ni(t){return function(e,n){var r=Yf(e*e+n*n),a=t(r),i=Nf(a),o=Rf(a)
return[Df(e*i,r*o),na(r&&n*i/r)]}}function Fi(t,e){return[t,Hf(Vf((_f+e)/2))]}function Yi(t){function e(){var e=Af*l(),o=i(fp(i.rotate()).invert([0,0]))
return u(null==c?[[o[0]-e,o[1]-e],[o[0]+e,o[1]+e]]:t===Fi?[[Math.max(o[0]-e,c),n],[Math.min(o[0]+e,r),a]]:[[c,Math.max(o[1]-e,n)],[r,Math.min(o[1]+e,a)]])}var n,r,a,i=Ri(t),o=i.center,l=i.scale,s=i.translate,u=i.clipExtent,c=null
return i.scale=function(t){return arguments.length?(l(t),e()):l()},i.translate=function(t){return arguments.length?(s(t),e()):s()},i.center=function(t){return arguments.length?(o(t),e()):o()},i.clipExtent=function(t){return arguments.length?(null==t?c=n=r=a=null:(c=+t[0][0],n=+t[0][1],r=+t[1][0],a=+t[1][1]),e()):null==c?null:[[c,n],[r,a]]},e()}function Vi(t){return Vf((_f+t)/2)}function Wi(t,e){function n(t,e){i>0?e<-_f+Of&&(e=-_f+Of):e>_f-Of&&(e=_f-Of)
var n=i/Bf(Vi(e),a)
return[n*Nf(a*t),i-n*Rf(a*t)]}var r=Rf(t),a=t===e?Nf(t):Hf(r/Rf(e))/Hf(Vi(e)/Vi(t)),i=r*Bf(Vi(t),a)/a
return a?(n.invert=function(t,e){var n=i-e,r=Ff(a)*Yf(t*t+n*n)
return[Df(t,Lf(n))/a*Ff(n),2*zf(Bf(i/r,1/a))-_f]},n):Fi}function Ui(t,e){return[t,e]}function Xi(t,e){function n(t,e){var n=i-e,r=a*t
return[n*Nf(r),i-n*Rf(r)]}var r=Rf(t),a=t===e?Nf(t):(r-Rf(e))/(e-t),i=r/a+t
return Lf(a)<Of?Ui:(n.invert=function(t,e){var n=i-e
return[Df(t,Lf(n))/a*Ff(n),i-Ff(a)*Yf(t*t+n*n)]},n)}function Gi(t,e){var n=na(vg*Nf(e)),r=n*n,a=r*r*r
return[t*Rf(n)/(vg*(fg+3*pg*r+a*(7*gg+9*yg*r))),n*(fg+pg*r+a*(gg+yg*r))]}function qi(t,e){var n=Rf(e),r=Rf(t)*n
return[n*Nf(t)/r,Nf(e)/r]}function Zi(t,e,n,r){return 1===t&&1===e&&0===n&&0===r?zp:_i({point:function(a,i){this.stream.point(a*t+n,i*e+r)}})}function Qi(t,e){var n=e*e,r=n*n
return[t*(.8707-.131979*n+r*(r*(.003971*n-.001529*r)-.013791)),e*(1.007226+n*(.015085+r*(.028874*n-.044475-.005916*r)))]}function Ki(t,e){return[Rf(e)*Nf(t),Nf(e)]}function $i(t,e){var n=Rf(e),r=1+Rf(t)*n
return[n*Nf(t)/r,Nf(e)/r]}function Ji(t,e){return[Hf(Vf((_f+e)/2)),-t]}function to(t){return t>1?Lg:t<-1?-Lg:Math.asin(t)}function eo(t){return t>1?0:t<-1?Eg:Math.acos(t)}function no(t){return t>0?Math.sqrt(t):0}function ro(t){function e(t,e){var n=wg(t),a=wg(e),i=Pg(e),o=a*n,l=-((1-o?Sg((1+o)/2)/(1-o):-.5)+r/(1+o))
return[l*a*Pg(t),l*i]}var n=Tg(t/2),r=2*Sg(wg(t/2))/(n*n)
return e.invert=function(e,n){var a,i=no(e*e+n*n),o=-t/2,l=50
if(!i)return[0,0]
do{var s=o/2,u=wg(s),c=Pg(s),h=Tg(s),d=Sg(1/u)
o-=a=(2/h*d-r*h-i)/(-d/(c*c)+1-r/(2*u*u))}while(mg(a)>Mg&&--l>0)
var f=Pg(o)
return[bg(e*f,i*wg(o)),to(n*f/i)]},e}function ao(t,e){var n=wg(e),r=function(t){return t?t/Math.sin(t):1}(eo(n*wg(t/=2)))
return[2*n*Pg(t)*r,Pg(e)*r]}function io(t){function e(t,e){var l=wg(e),s=wg(t/=2)
return[(1+l)*Pg(t),(a*e>-bg(s,i)-.001?0:10*-a)+o+Pg(e)*r-(1+l)*n*s]}var n=Pg(t),r=wg(t),a=t>=0?1:-1,i=Tg(a*t),o=(1+n-r)/2
return e.invert=function(t,e){var l=0,s=0,u=50
do{var c=wg(l),h=Pg(l),d=wg(s),f=Pg(s),p=1+d,g=p*h-t,y=o+f*r-p*n*c-e,v=p*c/2,m=-h*f,x=n*p*h/2,b=r*d+n*c*f,w=m*x-b*v,C=(y*m-g*b)/w/2,k=(g*x-y*v)/w
l-=C,s-=k}while((mg(C)>Mg||mg(k)>Mg)&&--u>0)
return a*s>-bg(wg(l),i)-.001?[2*l,s]:null},e}function oo(t,e){function n(n,r){var a=hg(n/e,r)
return a[0]*=t,a}return arguments.length<2&&(e=t),1===e?hg:e===1/0?lo:(n.invert=function(n,r){var a=hg.invert(n/t,r)
return a[0]*=e,a},n)}function lo(t,e){return[t*wg(e)/wg(e/=2),2*Pg(e)]}function so(t,e,n){function r(r,a){return[t*r*wg(a=function(t,e){var n,r=t*Pg(e),a=30
do{e-=n=(e+Pg(e)-r)/(1+wg(e))}while(mg(n)>Mg&&--a>0)
return e/2}(n,a)),e*Pg(a)]}return r.invert=function(r,a){return a=to(a/e),[r/(t*wg(a)),to((2*a+Pg(2*a))/n)]},r}function uo(t,e,n,r,a,i){var o,l=wg(i)
if(mg(t)>1||mg(i)>1)o=eo(n*a+e*r*l)
else{var s=Pg(t/2),u=Pg(i/2)
o=2*to(no(s*s+e*r*u*u))}return mg(o)>Mg?[o,bg(r*Pg(i),e*a-n*r*l)]:[0,0]}function co(t,e,n){return eo((t*t+e*e-n*n)/(2*t*e))}function ho(t){return t-2*Eg*kg((t+Eg)/(2*Eg))}function fo(t){return t[0]*=Hg,t[1]*=Hg,t}function po(t,e){var n=no(1-Pg(e))
return[2/Rg*t*n,Rg*(1-n)]}function go(t){function e(t,e){return[t*n,(1+n)*Tg(e/2)]}var n=wg(t)
return e.invert=function(t,e){return[t/n,2*xg(e/(1+n))]},e}function yo(t,e){var n=no(Eg*(4+Eg))
return[2/n*t*(1+no(1-4*e*e/(Eg*Eg))),4/n*e]}function vo(t,e){var n=(2+Lg)*Pg(e)
e/=2
for(var r=0,a=1/0;r<10&&mg(a)>Mg;r++){var i=wg(e)
e-=a=(e+Pg(e)*(i+2)-n)/(2*i*(1+i))}return[2/no(Eg*(4+Eg))*t*(1+wg(e)),2*no(Eg/(4+Eg))*Pg(e)]}function mo(t,e){return[t*(1+wg(e))/no(2+Eg),2*e/no(2+Eg)]}function xo(t,e){for(var n=(1+Lg)*Pg(e),r=0,a=1/0;r<10&&mg(a)>Mg;r++)e-=a=(e+Pg(e)-n)/(1+wg(e))
return n=no(2+Eg),[t*(1+wg(e))/n,2*e/n]}function bo(t,e){var n=Tg(e/2)
return[t*Ng*no(1-n*n),(1+Ng)*n]}function wo(t,e){var n=t*t,r=e*e
return[t*(1-.162388*r)*(.87-952426e-9*n*n),e*(1+r/12)]}function Co(t,e){return[3/jg*t*no(Eg*Eg/3-e*e),e]}function ko(t,e){return[t,1.25*Sg(Tg(zg+.4*e))]}function So(t,e){return{type:"FeatureCollection",features:t.features.map(function(t){return Oo(t,e)})}}function Oo(t,e){return{type:"Feature",id:t.id,properties:t.properties,geometry:Ao(t.geometry,e)}}function Ao(t,e){if(!t)return null
if("GeometryCollection"===t.type)return function(t,e){return{type:"GeometryCollection",geometries:t.geometries.map(function(t){return Ao(t,e)})}}(t,e)
var n
switch(t.type){case"Point":case"MultiPoint":n=Kg
break
case"LineString":case"MultiLineString":n=$g
break
case"Polygon":case"MultiPolygon":case"Sphere":n=Jg
break
default:return null}return Xf(t,e(n)),n.result()}function _o(t,e){var n,r=Ag(18,36*mg(e)/Eg),a=kg(r),i=r-a,o=(n=ty[a])[0],l=n[1],s=(n=ty[++a])[0],u=n[1],c=(n=ty[Ag(19,++a)])[0],h=n[1]
return[t*(s+i*(c-o)/2+i*i*(c-2*s+o)/2),(e>0?Lg:-Lg)*(u+i*(h-l)/2+i*i*(h-2*u+l)/2)]}function Po(t,e){function n(e,n){var o=r(e,n),l=o[1],s=l*i/(t-1)+a
return[o[0]*a/s,l/s]}var r=function(t){function e(e,n){var r=wg(n),a=(t-1)/(t-r*wg(e))
return[a*r*Pg(e),a*Pg(n)]}return e.invert=function(e,n){var r=e*e+n*n,a=no(r),i=(t-no(1-r*(t+1)/(t-1)))/((t-1)/a+a/(t-1))
return[bg(e*i,a*no(1-i*i)),a?to(n*i/a):0]},e}(t)
if(!e)return r
var a=wg(e),i=Pg(e)
return n.invert=function(e,n){var o=(t-1)/(t-1-n*i)
return r.invert(o*e,o*n*a)},n}function To(t){return t.length>0}function Mo(t){return t===oy||t===sy?[0,t]:[ny,function(t){return Math.floor(t*ey)/ey}(t)]}function Eo(t){var e=t[0],n=t[1],r=!1
return e<=ry?(e=ny,r=!0):e>=iy&&(e=ay,r=!0),n<=ly?(n=oy,r=!0):n>=uy&&(n=sy,r=!0),r?[e,n]:t}function Lo(t){return t.map(Eo)}function zo(t,e,n){for(var r=0,a=t.length;r<a;++r){var i=t[r].slice()
n.push({index:-1,polygon:e,ring:i})
for(var o=0,l=i.length;o<l;++o){var s=i[o],u=s[0],c=s[1]
if(u<=ry||u>=iy||c<=ly||c>=uy){i[o]=Eo(s)
for(var h=o+1;h<l;++h){var d=i[h],f=d[0],p=d[1]
if(f>ry&&f<iy&&p>ly&&p<uy)break}if(h===o+1)continue
if(o){var g={index:-1,polygon:e,ring:i.slice(0,o+1)}
g.ring[g.ring.length-1]=Mo(c),n[n.length-1]=g}else n.pop()
if(h>=l)break
n.push({index:-1,polygon:e,ring:i=i.slice(h-1)}),i[0]=Mo(i[0][1]),o=-1,l=i.length}}}}function Do(t){var e,n,r,a,i,o,l=t.length,s={},u={}
for(e=0;e<l;++e)n=t[e],r=n.ring[0],i=n.ring[n.ring.length-1],r[0]!==i[0]||r[1]!==i[1]?(n.index=e,s[r]=u[i]=n):(n.polygon.push(n.ring),t[e]=null)
for(e=0;e<l;++e)if(n=t[e]){if(r=n.ring[0],i=n.ring[n.ring.length-1],a=u[r],o=s[i],delete s[r],delete u[i],r[0]===i[0]&&r[1]===i[1]){n.polygon.push(n.ring)
continue}a?(delete u[r],delete s[a.ring[0]],a.ring.pop(),t[a.index]=null,n={index:-1,polygon:a.polygon,ring:a.ring.concat(n.ring)},a===o?n.polygon.push(n.ring):(n.index=l++,t.push(s[n.ring[0]]=u[n.ring[n.ring.length-1]]=n))):o?(delete s[i],delete u[o.ring[o.ring.length-1]],n.ring.pop(),n={index:l++,polygon:o.polygon,ring:n.ring.concat(o.ring)},t[o.index]=null,t.push(s[n.ring[0]]=u[n.ring[n.ring.length-1]]=n)):(n.ring.push(n.ring[0]),n.polygon.push(n.ring))}}function Ro(t){var e={type:"Feature",geometry:jo(t.geometry)}
return null!=t.id&&(e.id=t.id),null!=t.bbox&&(e.bbox=t.bbox),null!=t.properties&&(e.properties=t.properties),e}function jo(t){if(null==t)return t
var e,n,r,a
switch(t.type){case"GeometryCollection":e={type:"GeometryCollection",geometries:t.geometries.map(jo)}
break
case"Point":e={type:"Point",coordinates:Eo(t.coordinates)}
break
case"MultiPoint":case"LineString":e={type:t.type,coordinates:Lo(t.coordinates)}
break
case"MultiLineString":e={type:"MultiLineString",coordinates:t.coordinates.map(Lo)}
break
case"Polygon":var i=[]
zo(t.coordinates,i,n=[]),Do(n),e={type:"Polygon",coordinates:i}
break
case"MultiPolygon":n=[],r=-1,a=t.coordinates.length
for(var o=new Array(a);++r<a;)zo(t.coordinates[r],o[r]=[],n)
Do(n),e={type:"MultiPolygon",coordinates:o.filter(To)}
break
default:return t}return null!=t.bbox&&(e.bbox=t.bbox),e}function Io(t,e){return[t*no(1-3*e*e/(Eg*Eg)),e]}function Ho(t,e){return t[0]*e[0]+t[1]*e[1]+t[2]*e[2]}function Bo(t,e){var n=e.id,r=e.bbox,a=null==e.properties?{}:e.properties,i=No(t,e)
return null==n&&null==r?{type:"Feature",properties:a,geometry:i}:null==r?{type:"Feature",id:n,properties:a,geometry:i}:{type:"Feature",id:n,bbox:r,properties:a,geometry:i}}function No(t,e){function n(t,e){e.length&&e.pop()
for(var n=u[t<0?~t:t],r=0,a=n.length;r<a;++r)e.push(s(n[r],r))
t<0&&Py(e,a)}function r(t){return s(t)}function a(t){for(var e=[],r=0,a=t.length;r<a;++r)n(t[r],e)
return e.length<2&&e.push(e[0]),e}function i(t){for(var e=a(t);e.length<4;)e.push(e[0])
return e}function o(t){return t.map(i)}function l(t){var e,n=t.type
switch(n){case"GeometryCollection":return{type:n,geometries:t.geometries.map(l)}
case"Point":e=r(t.coordinates)
break
case"MultiPoint":e=t.coordinates.map(r)
break
case"LineString":e=a(t.arcs)
break
case"MultiLineString":e=t.arcs.map(a)
break
case"Polygon":e=o(t.arcs)
break
case"MultiPolygon":e=t.arcs.map(o)
break
default:return null}return{type:n,coordinates:e}}var s=Ay(t.transform),u=t.arcs
return l(e)}function Fo(t,e,n){var r,a,i
if(arguments.length>1)r=function(t,e,n){function r(t){var e=t<0?~t:t;(u[e]||(u[e]=[])).push({i:t,g:l})}function a(t){t.forEach(r)}function i(t){t.forEach(a)}function o(t){switch(l=t,t.type){case"GeometryCollection":t.geometries.forEach(o)
break
case"LineString":a(t.arcs)
break
case"MultiLineString":case"Polygon":i(t.arcs)
break
case"MultiPolygon":(function(t){t.forEach(i)})(t.arcs)}}var l,s=[],u=[]
return o(e),u.forEach(null==n?function(t){s.push(t[0].i)}:function(t){n(t[0].g,t[t.length-1].g)&&s.push(t[0].i)}),s}(0,e,n)
else for(a=0,r=new Array(i=t.arcs.length);a<i;++a)r[a]=a
return{type:"MultiLineString",arcs:Ty(t,r)}}function Yo(t,e){function n(t){switch(t.type){case"GeometryCollection":t.geometries.forEach(n)
break
case"Polygon":r(t.arcs)
break
case"MultiPolygon":t.arcs.forEach(r)}}function r(t){t.forEach(function(e){e.forEach(function(e){(i[e=e<0?~e:e]||(i[e]=[])).push(t)})}),o.push(t)}function a(e){return function(t){for(var e,n=-1,r=t.length,a=t[r-1],i=0;++n<r;)e=a,a=t[n],i+=e[0]*a[1]-e[1]*a[0]
return Math.abs(i)}(No(t,{type:"Polygon",arcs:[e]}).coordinates[0])}var i={},o=[],l=[]
return e.forEach(n),o.forEach(function(t){if(!t._){var e=[],n=[t]
for(t._=1,l.push(e);t=n.pop();)e.push(t),t.forEach(function(t){t.forEach(function(t){i[t<0?~t:t].forEach(function(t){t._||(t._=1,n.push(t))})})})}}),o.forEach(function(t){delete t._}),{type:"MultiPolygon",arcs:l.map(function(e){var n,r=[]
if(e.forEach(function(t){t.forEach(function(t){t.forEach(function(t){i[t<0?~t:t].length<2&&r.push(t)})})}),r=Ty(t,r),(n=r.length)>1)for(var o,l,s=1,u=a(r[0]);s<n;++s)(o=a(r[s]))>u&&(l=r[0],r[0]=r[s],r[s]=l,u=o)
return r})}}var Vo=function(t,e){return t<e?-1:t>e?1:t>=e?0:NaN},Wo=function(t){return 1===t.length&&(t=function(t){return function(e,n){return Vo(t(e),n)}}(t)),{left:function(e,n,r,a){for(null==r&&(r=0),null==a&&(a=e.length);r<a;){var i=r+a>>>1
t(e[i],n)<0?r=i+1:a=i}return r},right:function(e,n,r,a){for(null==r&&(r=0),null==a&&(a=e.length);r<a;){var i=r+a>>>1
t(e[i],n)>0?a=i:r=i+1}return r}}},Uo=Wo(Vo),Xo=Uo.right,Go=Uo.left,qo=function(t){return null===t?NaN:+t},Zo=Array.prototype,Qo=(Zo.slice,Zo.map,function(t,e,n){t=+t,e=+e,n=(a=arguments.length)<2?(e=t,t=0,1):a<3?1:+n
for(var r=-1,a=0|Math.max(0,Math.ceil((e-t)/n)),i=new Array(a);++r<a;)i[r]=t+r*n
return i}),Ko=Math.sqrt(50),$o=Math.sqrt(10),Jo=Math.sqrt(2),tl=function(t,n,r){var a,i,o,l,s=-1
if(n=+n,t=+t,r=+r,t===n&&r>0)return[t]
if((a=n<t)&&(i=t,t=n,n=i),0===(l=e(t,n,r))||!isFinite(l))return[]
if(l>0)for(t=Math.ceil(t/l),n=Math.floor(n/l),o=new Array(i=Math.ceil(n-t+1));++s<i;)o[s]=(t+s)*l
else for(t=Math.floor(t*l),n=Math.ceil(n*l),o=new Array(i=Math.ceil(t-n+1));++s<i;)o[s]=(t-s)/l
return a&&o.reverse(),o},el=function(t,e,n){if(null==n&&(n=qo),r=t.length){if((e=+e)<=0||r<2)return+n(t[0],0,t)
if(e>=1)return+n(t[r-1],r-1,t)
var r,a=(r-1)*e,i=Math.floor(a),o=+n(t[i],i,t)
return o+(+n(t[i+1],i+1,t)-o)*(a-i)}},nl=function(t){for(var e,n,r,a=t.length,i=-1,o=0;++i<a;)o+=t[i].length
for(n=new Array(o);--a>=0;)for(r=t[a],e=r.length;--e>=0;)n[--o]=r[e]
return n}
r.prototype=a.prototype={constructor:r,has:function(t){return"$"+t in this},get:function(t){return this["$"+t]},set:function(t,e){return this["$"+t]=e,this},remove:function(t){var e="$"+t
return e in this&&delete this[e]},clear:function(){for(var t in this)"$"===t[0]&&delete this[t]},keys:function(){var t=[]
for(var e in this)"$"===e[0]&&t.push(e.slice(1))
return t},values:function(){var t=[]
for(var e in this)"$"===e[0]&&t.push(this[e])
return t},entries:function(){var t=[]
for(var e in this)"$"===e[0]&&t.push({key:e.slice(1),value:this[e]})
return t},size:function(){var t=0
for(var e in this)"$"===e[0]&&++t
return t},empty:function(){for(var t in this)if("$"===t[0])return!1
return!0},each:function(t){for(var e in this)"$"===e[0]&&t(this[e],e.slice(1),this)}}
var rl=a.prototype
i.prototype=o.prototype={constructor:i,has:rl.has,add:function(t){return t+="",this["$"+t]=t,this},remove:rl.remove,clear:rl.clear,values:rl.keys,size:rl.size,empty:rl.empty,each:rl.each}
var al=Array.prototype.slice,il=function(t){return t},ol=1,ll=2,sl=3,ul=4,cl=1e-6,hl={value:function(){}}
c.prototype=u.prototype={constructor:c,on:function(t,e){var n,r=this._,a=function(t,e){return t.trim().split(/^|\s+/).map(function(t){var n="",r=t.indexOf(".")
if(r>=0&&(n=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t)
return{type:t,name:n}})}(t+"",r),i=-1,o=a.length
if(!(arguments.length<2)){if(null!=e&&"function"!=typeof e)throw new Error("invalid callback: "+e)
for(;++i<o;)if(n=(t=a[i]).type)r[n]=d(r[n],t.name,e)
else if(null==e)for(n in r)r[n]=d(r[n],t.name,null)
return this}for(;++i<o;)if((n=(t=a[i]).type)&&(n=h(r[n],t.name)))return n},copy:function(){var t={},e=this._
for(var n in e)t[n]=e[n].slice()
return new c(t)},call:function(t,e){if((n=arguments.length-2)>0)for(var n,r,a=new Array(n),i=0;i<n;++i)a[i]=arguments[i+2]
if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(i=0,n=(r=this._[t]).length;i<n;++i)r[i].value.apply(e,a)},apply:function(t,e,n){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t)
for(var r=this._[t],a=0,i=r.length;a<i;++a)r[a].value.apply(e,n)}}
var dl="http://www.w3.org/1999/xhtml",fl={svg:"http://www.w3.org/2000/svg",xhtml:dl,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},pl=function(t){var e=t+="",n=e.indexOf(":")
return n>=0&&"xmlns"!==(e=t.slice(0,n))&&(t=t.slice(n+1)),fl.hasOwnProperty(e)?{space:fl[e],local:t}:t},gl=function(t){var e=pl(t)
return(e.local?function(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}:function(t){return function(){var e=this.ownerDocument,n=this.namespaceURI
return n===dl&&e.documentElement.namespaceURI===dl?e.createElement(t):e.createElementNS(n,t)}})(e)},yl=0
p.prototype=f.prototype={constructor:p,get:function(t){for(var e=this._;!(e in t);)if(!(t=t.parentNode))return
return t[e]},set:function(t,e){return t[this._]=e},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}}
var vl=function(t){return function(){return this.matches(t)}}
if("undefined"!=typeof document){var ml=document.documentElement
if(!ml.matches){var xl=ml.webkitMatchesSelector||ml.msMatchesSelector||ml.mozMatchesSelector||ml.oMatchesSelector
vl=function(t){return function(){return xl.call(this,t)}}}}var bl=vl,wl={}
t.event=null,"undefined"!=typeof document&&("onmouseenter"in document.documentElement||(wl={mouseenter:"mouseover",mouseleave:"mouseout"}))
var Cl=function(){for(var e,n=t.event;e=n.sourceEvent;)n=e
return n},kl=function(t,e){var n=t.ownerSVGElement||t
if(n.createSVGPoint){var r=n.createSVGPoint()
return r.x=e.clientX,r.y=e.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var a=t.getBoundingClientRect()
return[e.clientX-a.left-t.clientLeft,e.clientY-a.top-t.clientTop]},Sl=function(t){var e=Cl()
return e.changedTouches&&(e=e.changedTouches[0]),kl(t,e)},Ol=function(t){return null==t?function(){}:function(){return this.querySelector(t)}},Al=function(t){return null==t?function(){return[]}:function(){return this.querySelectorAll(t)}},_l=function(t){return new Array(t.length)}
m.prototype={constructor:m,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,e){return this._parent.insertBefore(t,e)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}}
var Pl="$",Tl=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView}
k.prototype={add:function(t){this._names.indexOf(t)<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var e=this._names.indexOf(t)
e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}}
var Ml=[null]
M.prototype=E.prototype={constructor:M,select:function(t){"function"!=typeof t&&(t=Ol(t))
for(var e=this._groups,n=e.length,r=new Array(n),a=0;a<n;++a)for(var i,o,l=e[a],s=l.length,u=r[a]=new Array(s),c=0;c<s;++c)(i=l[c])&&(o=t.call(i,i.__data__,c,l))&&("__data__"in i&&(o.__data__=i.__data__),u[c]=o)
return new M(r,this._parents)},selectAll:function(t){"function"!=typeof t&&(t=Al(t))
for(var e=this._groups,n=e.length,r=[],a=[],i=0;i<n;++i)for(var o,l=e[i],s=l.length,u=0;u<s;++u)(o=l[u])&&(r.push(t.call(o,o.__data__,u,l)),a.push(o))
return new M(r,a)},filter:function(t){"function"!=typeof t&&(t=bl(t))
for(var e=this._groups,n=e.length,r=new Array(n),a=0;a<n;++a)for(var i,o=e[a],l=o.length,s=r[a]=[],u=0;u<l;++u)(i=o[u])&&t.call(i,i.__data__,u,o)&&s.push(i)
return new M(r,this._parents)},data:function(t,e){if(!t)return f=new Array(this.size()),u=-1,this.each(function(t){f[++u]=t}),f
var n=e?function(t,e,n,r,a,i,o){var l,s,u,c={},h=e.length,d=i.length,f=new Array(h)
for(l=0;l<h;++l)(s=e[l])&&(f[l]=u=Pl+o.call(s,s.__data__,l,e),u in c?a[l]=s:c[u]=s)
for(l=0;l<d;++l)u=Pl+o.call(t,i[l],l,i),(s=c[u])?(r[l]=s,s.__data__=i[l],c[u]=null):n[l]=new m(t,i[l])
for(l=0;l<h;++l)(s=e[l])&&c[f[l]]===s&&(a[l]=s)}:function(t,e,n,r,a,i){for(var o,l=0,s=e.length,u=i.length;l<u;++l)(o=e[l])?(o.__data__=i[l],r[l]=o):n[l]=new m(t,i[l])
for(;l<s;++l)(o=e[l])&&(a[l]=o)},r=this._parents,a=this._groups
"function"!=typeof t&&(t=function(t){return function(){return t}}(t))
for(var i=a.length,o=new Array(i),l=new Array(i),s=new Array(i),u=0;u<i;++u){var c=r[u],h=a[u],d=h.length,f=t.call(c,c&&c.__data__,u,r),p=f.length,g=l[u]=new Array(p),y=o[u]=new Array(p)
n(c,h,g,y,s[u]=new Array(d),f,e)
for(var v,x,b=0,w=0;b<p;++b)if(v=g[b]){for(b>=w&&(w=b+1);!(x=y[w])&&++w<p;);v._next=x||null}}return o=new M(o,r),o._enter=l,o._exit=s,o},enter:function(){return new M(this._enter||this._groups.map(_l),this._parents)},exit:function(){return new M(this._exit||this._groups.map(_l),this._parents)},merge:function(t){for(var e=this._groups,n=t._groups,r=e.length,a=n.length,i=Math.min(r,a),o=new Array(r),l=0;l<i;++l)for(var s,u=e[l],c=n[l],h=u.length,d=o[l]=new Array(h),f=0;f<h;++f)(s=u[f]||c[f])&&(d[f]=s)
for(;l<r;++l)o[l]=e[l]
return new M(o,this._parents)},order:function(){for(var t=this._groups,e=-1,n=t.length;++e<n;)for(var r,a=t[e],i=a.length-1,o=a[i];--i>=0;)(r=a[i])&&(o&&o!==r.nextSibling&&o.parentNode.insertBefore(r,o),o=r)
return this},sort:function(t){function e(e,n){return e&&n?t(e.__data__,n.__data__):!e-!n}t||(t=x)
for(var n=this._groups,r=n.length,a=new Array(r),i=0;i<r;++i){for(var o,l=n[i],s=l.length,u=a[i]=new Array(s),c=0;c<s;++c)(o=l[c])&&(u[c]=o)
u.sort(e)}return new M(a,this._parents).order()},call:function(){var t=arguments[0]
return arguments[0]=this,t.apply(null,arguments),this},nodes:function(){var t=new Array(this.size()),e=-1
return this.each(function(){t[++e]=this}),t},node:function(){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var r=t[e],a=0,i=r.length;a<i;++a){var o=r[a]
if(o)return o}return null},size:function(){var t=0
return this.each(function(){++t}),t},empty:function(){return!this.node()},each:function(t){for(var e=this._groups,n=0,r=e.length;n<r;++n)for(var a,i=e[n],o=0,l=i.length;o<l;++o)(a=i[o])&&t.call(a,a.__data__,o,i)
return this},attr:function(t,e){var n=pl(t)
if(arguments.length<2){var r=this.node()
return n.local?r.getAttributeNS(n.space,n.local):r.getAttribute(n)}return this.each((null==e?n.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}}:"function"==typeof e?n.local?function(t,e){return function(){var n=e.apply(this,arguments)
null==n?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,n)}}:function(t,e){return function(){var n=e.apply(this,arguments)
null==n?this.removeAttribute(t):this.setAttribute(t,n)}}:n.local?function(t,e){return function(){this.setAttributeNS(t.space,t.local,e)}}:function(t,e){return function(){this.setAttribute(t,e)}})(n,e))},style:function(t,e,n){return arguments.length>1?this.each((null==e?function(t){return function(){this.style.removeProperty(t)}}:"function"==typeof e?function(t,e,n){return function(){var r=e.apply(this,arguments)
null==r?this.style.removeProperty(t):this.style.setProperty(t,r,n)}}:function(t,e,n){return function(){this.style.setProperty(t,e,n)}})(t,e,null==n?"":n)):b(this.node(),t)},property:function(t,e){return arguments.length>1?this.each((null==e?function(t){return function(){delete this[t]}}:"function"==typeof e?function(t,e){return function(){var n=e.apply(this,arguments)
null==n?delete this[t]:this[t]=n}}:function(t,e){return function(){this[t]=e}})(t,e)):this.node()[t]},classed:function(t,e){var n=w(t+"")
if(arguments.length<2){for(var r=C(this.node()),a=-1,i=n.length;++a<i;)if(!r.contains(n[a]))return!1
return!0}return this.each(("function"==typeof e?function(t,e){return function(){(e.apply(this,arguments)?S:O)(this,t)}}:e?function(t){return function(){S(this,t)}}:function(t){return function(){O(this,t)}})(n,e))},text:function(t){return arguments.length?this.each(null==t?function(){this.textContent=""}:("function"==typeof t?function(t){return function(){var e=t.apply(this,arguments)
this.textContent=null==e?"":e}}:function(t){return function(){this.textContent=t}})(t)):this.node().textContent},html:function(t){return arguments.length?this.each(null==t?function(){this.innerHTML=""}:("function"==typeof t?function(t){return function(){var e=t.apply(this,arguments)
this.innerHTML=null==e?"":e}}:function(t){return function(){this.innerHTML=t}})(t)):this.node().innerHTML},raise:function(){return this.each(A)},lower:function(){return this.each(_)},append:function(t){var e="function"==typeof t?t:gl(t)
return this.select(function(){return this.appendChild(e.apply(this,arguments))})},insert:function(t,e){var n="function"==typeof t?t:gl(t),r=null==e?function(){return null}:"function"==typeof e?e:Ol(e)
return this.select(function(){return this.insertBefore(n.apply(this,arguments),r.apply(this,arguments)||null)})},remove:function(){return this.each(P)},datum:function(t){return arguments.length?this.property("__data__",t):this.node().__data__},on:function(t,e,n){var r,a,i=function(t){return t.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".")
return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}(t+""),o=i.length
if(!(arguments.length<2)){for(l=e?y:function(t){return function(){var e=this.__on
if(e){for(var n,r=0,a=-1,i=e.length;r<i;++r)n=e[r],t.type&&n.type!==t.type||n.name!==t.name?e[++a]=n:this.removeEventListener(n.type,n.listener,n.capture);++a?e.length=a:delete this.__on}}},null==n&&(n=!1),r=0;r<o;++r)this.each(l(i[r],e,n))
return this}var l=this.node().__on
if(l)for(var s,u=0,c=l.length;u<c;++u)for(r=0,s=l[u];r<o;++r)if((a=i[r]).type===s.type&&a.name===s.name)return s.value},dispatch:function(t,e){return this.each(("function"==typeof e?function(t,e){return function(){return T(this,t,e.apply(this,arguments))}}:function(t,e){return function(){return T(this,t,e)}})(t,e))}}
var El=function(t){return"string"==typeof t?new M([[document.querySelector(t)]],[document.documentElement]):new M([[t]],Ml)},Ll=function(t,e,n){arguments.length<3&&(n=e,e=Cl().changedTouches)
for(var r,a=0,i=e?e.length:0;a<i;++a)if((r=e[a]).identifier===n)return kl(t,r)
return null},zl=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Dl=function(t){var e=t.document.documentElement,n=El(t).on("dragstart.drag",zl,!0)
"onselectstart"in e?n.on("selectstart.drag",zl,!0):(e.__noselect=e.style.MozUserSelect,e.style.MozUserSelect="none")},Rl=function(t){return function(){return t}}
D.prototype.on=function(){var t=this._.on.apply(this._,arguments)
return t===this._?this:t}
var jl=function(t,e,n){t.prototype=e.prototype=n,n.constructor=t},Il="\\s*([+-]?\\d+)\\s*",Hl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",Bl="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Nl=/^#([0-9a-f]{3})$/,Fl=/^#([0-9a-f]{6})$/,Yl=new RegExp("^rgb\\("+[Il,Il,Il]+"\\)$"),Vl=new RegExp("^rgb\\("+[Bl,Bl,Bl]+"\\)$"),Wl=new RegExp("^rgba\\("+[Il,Il,Il,Hl]+"\\)$"),Ul=new RegExp("^rgba\\("+[Bl,Bl,Bl,Hl]+"\\)$"),Xl=new RegExp("^hsl\\("+[Hl,Bl,Bl]+"\\)$"),Gl=new RegExp("^hsla\\("+[Hl,Bl,Bl,Hl]+"\\)$"),ql={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074}
jl(N,F,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),jl(X,U,B(N,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new X(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new X(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity
return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),jl(Z,q,B(N,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new Z(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new Z(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),e=isNaN(t)||isNaN(this.s)?0:this.s,n=this.l,r=n+(n<.5?n:1-n)*e,a=2*n-r
return new X(Q(t>=240?t-240:t+120,a,r),Q(t,a,r),Q(t<120?t+240:t-120,a,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}))
var Zl=Math.PI/180,Ql=180/Math.PI,Kl=.95047,$l=1,Jl=1.08883,ts=4/29,es=6/29,ns=3*es*es,rs=es*es*es
jl(J,$,B(N,{brighter:function(t){return new J(this.l+18*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new J(this.l-18*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,e=isNaN(this.a)?t:t+this.a/500,n=isNaN(this.b)?t:t-this.b/200
return t=$l*et(t),e=Kl*et(e),n=Jl*et(n),new X(nt(3.2404542*e-1.5371385*t-.4985314*n),nt(-.969266*e+1.8760108*t+.041556*n),nt(.0556434*e-.2040259*t+1.0572252*n),this.opacity)}})),jl(it,at,B(N,{brighter:function(t){return new it(this.h,this.c,this.l+18*(null==t?1:t),this.opacity)},darker:function(t){return new it(this.h,this.c,this.l-18*(null==t?1:t),this.opacity)},rgb:function(){return K(this).rgb()}}))
var as=-.29227,is=-.90649,os=1.97294,ls=os*is,ss=1.78277*os,us=1.78277*as- -.14861*is
jl(lt,ot,B(N,{brighter:function(t){return t=null==t?1/.7:Math.pow(1/.7,t),new lt(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new lt(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*Zl,e=+this.l,n=isNaN(this.s)?0:this.s*e*(1-e),r=Math.cos(t),a=Math.sin(t)
return new X(255*(e+n*(-.14861*r+1.78277*a)),255*(e+n*(as*r+is*a)),255*(e+n*(os*r)),this.opacity)}}))
var cs,hs,ds,fs,ps,gs,ys=function(t){var e=t.length-1
return function(n){var r=n<=0?n=0:n>=1?(n=1,e-1):Math.floor(n*e),a=t[r],i=t[r+1],o=r>0?t[r-1]:2*a-i,l=r<e-1?t[r+2]:2*i-a
return st((n-r/e)*e,o,a,i,l)}},vs=function(t){var e=t.length
return function(n){var r=Math.floor(((n%=1)<0?++n:n)*e),a=t[(r+e-1)%e],i=t[r%e],o=t[(r+1)%e],l=t[(r+2)%e]
return st((n-r/e)*e,a,i,o,l)}},ms=function(t){return function(){return t}},xs=function t(e){function n(t,e){var n=r((t=U(t)).r,(e=U(e)).r),a=r(t.g,e.g),i=r(t.b,e.b),o=dt(t.opacity,e.opacity)
return function(e){return t.r=n(e),t.g=a(e),t.b=i(e),t.opacity=o(e),t+""}}var r=ht(e)
return n.gamma=t,n}(1),bs=ft(ys),ws=ft(vs),Cs=function(t,e){var n,r=e?e.length:0,a=t?Math.min(r,t.length):0,i=new Array(a),o=new Array(r)
for(n=0;n<a;++n)i[n]=Ts(t[n],e[n])
for(;n<r;++n)o[n]=e[n]
return function(t){for(n=0;n<a;++n)o[n]=i[n](t)
return o}},ks=function(t,e){var n=new Date
return t=+t,e-=t,function(r){return n.setTime(t+e*r),n}},Ss=function(t,e){return t=+t,e-=t,function(n){return t+e*n}},Os=function(t,e){var n,r={},a={}
null!==t&&"object"==typeof t||(t={}),null!==e&&"object"==typeof e||(e={})
for(n in e)n in t?r[n]=Ts(t[n],e[n]):a[n]=e[n]
return function(t){for(n in r)a[n]=r[n](t)
return a}},As=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,_s=new RegExp(As.source,"g"),Ps=function(t,e){var n,r,a,i=As.lastIndex=_s.lastIndex=0,o=-1,l=[],s=[]
for(t+="",e+="";(n=As.exec(t))&&(r=_s.exec(e));)(a=r.index)>i&&(a=e.slice(i,a),l[o]?l[o]+=a:l[++o]=a),(n=n[0])===(r=r[0])?l[o]?l[o]+=r:l[++o]=r:(l[++o]=null,s.push({i:o,x:Ss(n,r)})),i=_s.lastIndex
return i<e.length&&(a=e.slice(i),l[o]?l[o]+=a:l[++o]=a),l.length<2?s[0]?function(t){return function(e){return t(e)+""}}(s[0].x):function(t){return function(){return t}}(e):(e=s.length,function(t){for(var n,r=0;r<e;++r)l[(n=s[r]).i]=n.x(t)
return l.join("")})},Ts=function(t,e){var n,r=typeof e
return null==e||"boolean"===r?ms(e):("number"===r?Ss:"string"===r?(n=F(e))?(e=n,xs):Ps:e instanceof F?xs:e instanceof Date?ks:Array.isArray(e)?Cs:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?Os:Ss)(t,e)},Ms=function(t,e){return t=+t,e-=t,function(n){return Math.round(t+e*n)}},Es=180/Math.PI,Ls={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},zs=function(t,e,n,r,a,i){var o,l,s
return(o=Math.sqrt(t*t+e*e))&&(t/=o,e/=o),(s=t*n+e*r)&&(n-=t*s,r-=e*s),(l=Math.sqrt(n*n+r*r))&&(n/=l,r/=l,s/=l),t*r<e*n&&(t=-t,e=-e,s=-s,o=-o),{translateX:a,translateY:i,rotate:Math.atan2(e,t)*Es,skewX:Math.atan(s)*Es,scaleX:o,scaleY:l}},Ds=pt(function(t){return"none"===t?Ls:(cs||(cs=document.createElement("DIV"),hs=document.documentElement,ds=document.defaultView),cs.style.transform=t,t=ds.getComputedStyle(hs.appendChild(cs),null).getPropertyValue("transform"),hs.removeChild(cs),t=t.slice(7,-1).split(","),zs(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))},"px, ","px)","deg)"),Rs=pt(function(t){return null==t?Ls:(fs||(fs=document.createElementNS("http://www.w3.org/2000/svg","g")),fs.setAttribute("transform",t),(t=fs.transform.baseVal.consolidate())?(t=t.matrix,zs(t.a,t.b,t.c,t.d,t.e,t.f)):Ls)},", ",")",")"),js=Math.SQRT2,Is=function(t,e){var n,r,a=t[0],i=t[1],o=t[2],l=e[0],s=e[1],u=e[2],c=l-a,h=s-i,d=c*c+h*h
if(d<1e-12)r=Math.log(u/o)/js,n=function(t){return[a+t*c,i+t*h,o*Math.exp(js*t*r)]}
else{var f=Math.sqrt(d),p=(u*u-o*o+4*d)/(2*o*2*f),g=(u*u-o*o-4*d)/(2*u*2*f),y=Math.log(Math.sqrt(p*p+1)-p),v=Math.log(Math.sqrt(g*g+1)-g)
r=(v-y)/js,n=function(t){var e=t*r,n=gt(y),l=o/(2*f)*(n*function(t){return((t=Math.exp(2*t))-1)/(t+1)}(js*e+y)-function(t){return((t=Math.exp(t))-1/t)/2}(y))
return[a+l*c,i+l*h,o*n/gt(js*e+y)]}}return n.duration=1e3*r,n},Hs=yt(ct),Bs=yt(dt),Ns=vt(ct),Fs=vt(dt),Ys=mt(ct),Vs=mt(dt),Ws=0,Us=0,Xs=0,Gs=1e3,qs=0,Zs=0,Qs=0,Ks="object"==typeof performance&&performance.now?performance:Date,$s="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)}
wt.prototype=Ct.prototype={constructor:wt,restart:function(t,e,n){if("function"!=typeof t)throw new TypeError("callback is not a function")
n=(null==n?xt():+n)+(null==e?0:+e),this._next||gs===this||(gs?gs._next=this:ps=this,gs=this),this._call=t,this._time=n,At()},stop:function(){this._call&&(this._call=null,this._time=1/0,At())}}
var Js=function(t,e,n){var r=new wt
return e=null==e?0:+e,r.restart(function(n){r.stop(),t(n+e)},e,n),r},tu=u("start","end","interrupt"),eu=[],nu=0,ru=1,au=2,iu=3,ou=4,lu=5,su=6,uu=function(t,e,n,r,a,i){var o=t.__transition
if(o){if(n in o)return}else t.__transition={};(function(t,e,n){function r(s){var u,c,h,d
if(n.state!==ru)return i()
for(u in l)if((d=l[u]).name===n.name){if(d.state===iu)return Js(r)
d.state===ou?(d.state=su,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete l[u]):+u<e&&(d.state=su,d.timer.stop(),delete l[u])}if(Js(function(){n.state===iu&&(n.state=ou,n.timer.restart(a,n.delay,n.time),a(s))}),n.state=au,n.on.call("start",t,t.__data__,n.index,n.group),n.state===au){for(n.state=iu,o=new Array(h=n.tween.length),u=0,c=-1;u<h;++u)(d=n.tween[u].value.call(t,t.__data__,n.index,n.group))&&(o[++c]=d)
o.length=c+1}}function a(e){for(var r=e<n.duration?n.ease.call(null,e/n.duration):(n.timer.restart(i),n.state=lu,1),a=-1,l=o.length;++a<l;)o[a].call(null,r)
n.state===lu&&(n.on.call("end",t,t.__data__,n.index,n.group),i())}function i(){n.state=su,n.timer.stop(),delete l[e]
for(var r in l)return
delete t.__transition}var o,l=t.__transition
l[e]=n,n.timer=Ct(function(t){n.state=ru,n.timer.restart(r,n.delay,n.time),n.delay<=t&&r(t-n.delay)},0,n.time)})(t,n,{name:e,index:r,group:a,on:tu,tween:eu,time:i.time,delay:i.delay,duration:i.duration,ease:i.ease,timer:null,state:nu})},cu=function(t,e){var n,r,a,i=t.__transition,o=!0
if(i){e=null==e?null:e+""
for(a in i)(n=i[a]).name===e?(r=n.state>au&&n.state<lu,n.state=su,n.timer.stop(),r&&n.on.call("interrupt",t,t.__data__,n.index,n.group),delete i[a]):o=!1
o&&delete t.__transition}},hu=function(t,e){var n
return("number"==typeof e?Ss:e instanceof F?xs:(n=F(e))?(e=n,xs):Ps)(t,e)},du=E.prototype.constructor,fu=0,pu=E.prototype
Et.prototype=Lt.prototype={constructor:Et,select:function(t){var e=this._name,n=this._id
"function"!=typeof t&&(t=Ol(t))
for(var r=this._groups,a=r.length,i=new Array(a),o=0;o<a;++o)for(var l,s,u=r[o],c=u.length,h=i[o]=new Array(c),d=0;d<c;++d)(l=u[d])&&(s=t.call(l,l.__data__,d,u))&&("__data__"in l&&(s.__data__=l.__data__),h[d]=s,uu(h[d],e,n,d,h,Tt(l,n)))
return new Et(i,this._parents,e,n)},selectAll:function(t){var e=this._name,n=this._id
"function"!=typeof t&&(t=Al(t))
for(var r=this._groups,a=r.length,i=[],o=[],l=0;l<a;++l)for(var s,u=r[l],c=u.length,h=0;h<c;++h)if(s=u[h]){for(var d,f=t.call(s,s.__data__,h,u),p=Tt(s,n),g=0,y=f.length;g<y;++g)(d=f[g])&&uu(d,e,n,g,f,p)
i.push(f),o.push(s)}return new Et(i,o,e,n)},filter:function(t){"function"!=typeof t&&(t=bl(t))
for(var e=this._groups,n=e.length,r=new Array(n),a=0;a<n;++a)for(var i,o=e[a],l=o.length,s=r[a]=[],u=0;u<l;++u)(i=o[u])&&t.call(i,i.__data__,u,o)&&s.push(i)
return new Et(r,this._parents,this._name,this._id)},merge:function(t){if(t._id!==this._id)throw new Error
for(var e=this._groups,n=t._groups,r=e.length,a=n.length,i=Math.min(r,a),o=new Array(r),l=0;l<i;++l)for(var s,u=e[l],c=n[l],h=u.length,d=o[l]=new Array(h),f=0;f<h;++f)(s=u[f]||c[f])&&(d[f]=s)
for(;l<r;++l)o[l]=e[l]
return new Et(o,this._parents,this._name,this._id)},selection:function(){return new du(this._groups,this._parents)},transition:function(){for(var t=this._name,e=this._id,n=zt(),r=this._groups,a=r.length,i=0;i<a;++i)for(var o,l=r[i],s=l.length,u=0;u<s;++u)if(o=l[u]){var c=Tt(o,e)
uu(o,t,n,u,l,{time:c.time+c.delay+c.duration,delay:0,duration:c.duration,ease:c.ease})}return new Et(r,this._parents,t,n)},call:pu.call,nodes:pu.nodes,node:pu.node,size:pu.size,empty:pu.empty,each:pu.each,on:function(t,e){var n=this._id
return arguments.length<2?Tt(this.node(),n).on.on(t):this.each(function(t,e,n){var r,a,i=function(t){return(t+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".")
return e>=0&&(t=t.slice(0,e)),!t||"start"===t})}(e)?_t:Pt
return function(){var o=i(this,t),l=o.on
l!==r&&(a=(r=l).copy()).on(e,n),o.on=a}}(n,t,e))},attr:function(t,e){var n=pl(t),r="transform"===n?Rs:hu
return this.attrTween(t,"function"==typeof e?(n.local?function(t,e,n){var r,a,i
return function(){var o,l=n(this)
return null==l?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local))===l?null:o===r&&l===a?i:i=e(r=o,a=l)}}:function(t,e,n){var r,a,i
return function(){var o,l=n(this)
return null==l?void this.removeAttribute(t):(o=this.getAttribute(t))===l?null:o===r&&l===a?i:i=e(r=o,a=l)}})(n,r,Mt(this,"attr."+t,e)):null==e?(n.local?function(t){return function(){this.removeAttributeNS(t.space,t.local)}}:function(t){return function(){this.removeAttribute(t)}})(n):(n.local?function(t,e,n){var r,a
return function(){var i=this.getAttributeNS(t.space,t.local)
return i===n?null:i===r?a:a=e(r=i,n)}}:function(t,e,n){var r,a
return function(){var i=this.getAttribute(t)
return i===n?null:i===r?a:a=e(r=i,n)}})(n,r,e+""))},attrTween:function(t,e){var n="attr."+t
if(arguments.length<2)return(n=this.tween(n))&&n._value
if(null==e)return this.tween(n,null)
if("function"!=typeof e)throw new Error
var r=pl(t)
return this.tween(n,(r.local?function(t,e){function n(){var n=this,r=e.apply(n,arguments)
return r&&function(e){n.setAttributeNS(t.space,t.local,r(e))}}return n._value=e,n}:function(t,e){function n(){var n=this,r=e.apply(n,arguments)
return r&&function(e){n.setAttribute(t,r(e))}}return n._value=e,n})(r,e))},style:function(t,e,n){var r="transform"==(t+="")?Ds:hu
return null==e?this.styleTween(t,function(t,e){var n,r,a
return function(){var i=b(this,t),o=(this.style.removeProperty(t),b(this,t))
return i===o?null:i===n&&o===r?a:a=e(n=i,r=o)}}(t,r)).on("end.style."+t,function(t){return function(){this.style.removeProperty(t)}}(t)):this.styleTween(t,"function"==typeof e?function(t,e,n){var r,a,i
return function(){var o=b(this,t),l=n(this)
return null==l&&(this.style.removeProperty(t),l=b(this,t)),o===l?null:o===r&&l===a?i:i=e(r=o,a=l)}}(t,r,Mt(this,"style."+t,e)):function(t,e,n){var r,a
return function(){var i=b(this,t)
return i===n?null:i===r?a:a=e(r=i,n)}}(t,r,e+""),n)},styleTween:function(t,e,n){var r="style."+(t+="")
if(arguments.length<2)return(r=this.tween(r))&&r._value
if(null==e)return this.tween(r,null)
if("function"!=typeof e)throw new Error
return this.tween(r,function(t,e,n){function r(){var r=this,a=e.apply(r,arguments)
return a&&function(e){r.style.setProperty(t,a(e),n)}}return r._value=e,r}(t,e,null==n?"":n))},text:function(t){return this.tween("text","function"==typeof t?function(t){return function(){var e=t(this)
this.textContent=null==e?"":e}}(Mt(this,"text",t)):function(t){return function(){this.textContent=t}}(null==t?"":t+""))},remove:function(){return this.on("end.remove",function(t){return function(){var e=this.parentNode
for(var n in this.__transition)if(+n!==t)return
e&&e.removeChild(this)}}(this._id))},tween:function(t,e){var n=this._id
if(t+="",arguments.length<2){for(var r,a=Tt(this.node(),n).tween,i=0,o=a.length;i<o;++i)if((r=a[i]).name===t)return r.value
return null}return this.each((null==e?function(t,e){var n,r
return function(){var a=Pt(this,t),i=a.tween
if(i!==n)for(var o=0,l=(r=n=i).length;o<l;++o)if(r[o].name===e){(r=r.slice()).splice(o,1)
break}a.tween=r}}:function(t,e,n){var r,a
if("function"!=typeof n)throw new Error
return function(){var i=Pt(this,t),o=i.tween
if(o!==r){a=(r=o).slice()
for(var l={name:e,value:n},s=0,u=a.length;s<u;++s)if(a[s].name===e){a[s]=l
break}s===u&&a.push(l)}i.tween=a}})(n,t,e))},delay:function(t){var e=this._id
return arguments.length?this.each(("function"==typeof t?function(t,e){return function(){_t(this,t).delay=+e.apply(this,arguments)}}:function(t,e){return e=+e,function(){_t(this,t).delay=e}})(e,t)):Tt(this.node(),e).delay},duration:function(t){var e=this._id
return arguments.length?this.each(("function"==typeof t?function(t,e){return function(){Pt(this,t).duration=+e.apply(this,arguments)}}:function(t,e){return e=+e,function(){Pt(this,t).duration=e}})(e,t)):Tt(this.node(),e).duration},ease:function(t){var e=this._id
return arguments.length?this.each(function(t,e){if("function"!=typeof e)throw new Error
return function(){Pt(this,t).ease=e}}(e,t)):Tt(this.node(),e).ease}}
var gu=function t(e){function n(t){return Math.pow(t,e)}return e=+e,n.exponent=t,n}(3),yu=function t(e){function n(t){return 1-Math.pow(1-t,e)}return e=+e,n.exponent=t,n}(3),vu=function t(e){function n(t){return((t*=2)<=1?Math.pow(t,e):2-Math.pow(2-t,e))/2}return e=+e,n.exponent=t,n}(3),mu=Math.PI,xu=mu/2,bu=4/11,wu=6/11,Cu=8/11,ku=.75,Su=9/11,Ou=10/11,Au=.9375,_u=21/22,Pu=63/64,Tu=1/bu/bu,Mu=function t(e){function n(t){return t*t*((e+1)*t-e)}return e=+e,n.overshoot=t,n}(1.70158),Eu=function t(e){function n(t){return--t*t*((e+1)*t+e)+1}return e=+e,n.overshoot=t,n}(1.70158),Lu=function t(e){function n(t){return((t*=2)<1?t*t*((e+1)*t-e):(t-=2)*t*((e+1)*t+e)+2)/2}return e=+e,n.overshoot=t,n}(1.70158),zu=2*Math.PI,Du=function t(e,n){function r(t){return e*Math.pow(2,10*--t)*Math.sin((a-t)/n)}var a=Math.asin(1/(e=Math.max(1,e)))*(n/=zu)
return r.amplitude=function(e){return t(e,n*zu)},r.period=function(n){return t(e,n)},r}(1,.3),Ru=function t(e,n){function r(t){return 1-e*Math.pow(2,-10*(t=+t))*Math.sin((t+a)/n)}var a=Math.asin(1/(e=Math.max(1,e)))*(n/=zu)
return r.amplitude=function(e){return t(e,n*zu)},r.period=function(n){return t(e,n)},r}(1,.3),ju=function t(e,n){function r(t){return((t=2*t-1)<0?e*Math.pow(2,10*t)*Math.sin((a-t)/n):2-e*Math.pow(2,-10*t)*Math.sin((a+t)/n))/2}var a=Math.asin(1/(e=Math.max(1,e)))*(n/=zu)
return r.amplitude=function(e){return t(e,n*zu)},r.period=function(n){return t(e,n)},r}(1,.3),Iu={time:null,delay:0,duration:250,ease:Rt}
E.prototype.interrupt=function(t){return this.each(function(){cu(this,t)})},E.prototype.transition=function(t){var e,n
t instanceof Et?(e=t._id,t=t._name):(e=zt(),(n=Iu).time=xt(),t=null==t?null:t+"")
for(var r=this._groups,a=r.length,i=0;i<a;++i)for(var o,l=r[i],s=l.length,u=0;u<s;++u)(o=l[u])&&uu(o,t,e,u,l,n||Nt(o,e))
return new Et(r,this._parents,t,e)}
var Hu=[null],Bu=function(t){return function(){return t}},Nu=function(t,e,n){this.target=t,this.type=e,this.selection=n},Fu=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Yu={name:"drag"},Vu={name:"space"},Wu={name:"handle"},Uu={name:"center"},Xu={name:"x",handles:["e","w"].map(Yt),input:function(t,e){return t&&[[t[0],e[0][1]],[t[1],e[1][1]]]},output:function(t){return t&&[t[0][0],t[1][0]]}},Gu={name:"y",handles:["n","s"].map(Yt),input:function(t,e){return t&&[[e[0][0],t[0]],[e[1][0],t[1]]]},output:function(t){return t&&[t[0][1],t[1][1]]}},qu={name:"xy",handles:["n","e","s","w","nw","ne","se","sw"].map(Yt),input:function(t){return t},output:function(t){return t}},Zu={overlay:"crosshair",selection:"move",n:"ns-resize",e:"ew-resize",s:"ns-resize",w:"ew-resize",nw:"nwse-resize",ne:"nesw-resize",se:"nwse-resize",sw:"nesw-resize"},Qu={e:"w",w:"e",nw:"ne",ne:"nw",se:"sw",sw:"se"},Ku={n:"s",s:"n",nw:"sw",ne:"se",se:"ne",sw:"nw"},$u={overlay:1,selection:1,n:null,e:1,s:null,w:-1,nw:-1,ne:1,se:1,sw:-1},Ju={overlay:1,selection:1,n:-1,e:null,s:1,w:null,nw:-1,ne:-1,se:1,sw:1},tc={},ec={},nc=34,rc=10,ac=13,ic=function(t){function e(t,e){function n(){if(u)return ec
if(c)return c=!1,tc
var e,n,r=l
if(t.charCodeAt(r)===nc){for(;l++<o&&t.charCodeAt(l)!==nc||t.charCodeAt(++l)===nc;);return(e=l)>=o?u=!0:(n=t.charCodeAt(l++))===rc?c=!0:n===ac&&(c=!0,t.charCodeAt(l)===rc&&++l),t.slice(r+1,e-1).replace(/""/g,'"')}for(;l<o;){if((n=t.charCodeAt(e=l++))===rc)c=!0
else if(n===ac)c=!0,t.charCodeAt(l)===rc&&++l
else if(n!==i)continue
return t.slice(r,e)}return u=!0,t.slice(r,o)}var r,a=[],o=t.length,l=0,s=0,u=o<=0,c=!1
for(t.charCodeAt(o-1)===rc&&--o,t.charCodeAt(o-1)===ac&&--o;(r=n())!==ec;){for(var h=[];r!==tc&&r!==ec;)h.push(r),r=n()
e&&null==(h=e(h,s++))||a.push(h)}return a}function n(e){return e.map(r).join(t)}function r(t){return null==t?"":a.test(t+="")?'"'+t.replace(/"/g,'""')+'"':t}var a=new RegExp('["'+t+"\n\r]"),i=t.charCodeAt(0)
return{parse:function(t,n){var r,a,i=e(t,function(t,e){if(r)return r(t,e-1)
a=t,r=n?function(t,e){var n=qt(t)
return function(r,a){return e(n(r),a,t)}}(t,n):qt(t)})
return i.columns=a||[],i},parseRows:e,format:function(e,n){return null==n&&(n=function(t){var e=Object.create(null),n=[]
return t.forEach(function(t){for(var r in t)r in e||n.push(e[r]=r)}),n}(e)),[n.map(r).join(t)].concat(e.map(function(e){return n.map(function(t){return r(e[t])}).join(t)})).join("\n")},formatRows:function(t){return t.map(n).join("\n")}}},oc=ic(","),lc=oc.parse,sc=oc.parseRows,uc=ic("\t").parse,cc=function(t,e){function n(t){var e,n=h.status
if(!n&&function(t){var e=t.responseType
return e&&"text"!==e?t.response:t.responseText}(h)||n>=200&&n<300||304===n){if(o)try{e=o.call(r,h)}catch(t){return void s.call("error",r,t)}else e=h
s.call("load",r,e)}else s.call("error",r,t)}var r,i,o,l,s=u("beforesend","progress","load","error"),c=a(),h=new XMLHttpRequest,d=null,f=null,p=0
if("undefined"==typeof XDomainRequest||"withCredentials"in h||!/^(http(s)?:)?\/\//.test(t)||(h=new XDomainRequest),"onload"in h?h.onload=h.onerror=h.ontimeout=n:h.onreadystatechange=function(t){h.readyState>3&&n(t)},h.onprogress=function(t){s.call("progress",r,t)},r={header:function(t,e){return t=(t+"").toLowerCase(),arguments.length<2?c.get(t):(null==e?c.remove(t):c.set(t,e+""),r)},mimeType:function(t){return arguments.length?(i=null==t?null:t+"",r):i},responseType:function(t){return arguments.length?(l=t,r):l},timeout:function(t){return arguments.length?(p=+t,r):p},user:function(t){return arguments.length<1?d:(d=null==t?null:t+"",r)},password:function(t){return arguments.length<1?f:(f=null==t?null:t+"",r)},response:function(t){return o=t,r},get:function(t,e){return r.send("GET",t,e)},post:function(t,e){return r.send("POST",t,e)},send:function(e,n,a){return h.open(e,t,!0,d,f),null==i||c.has("accept")||c.set("accept",i+",*/*"),h.setRequestHeader&&c.each(function(t,e){h.setRequestHeader(e,t)}),null!=i&&h.overrideMimeType&&h.overrideMimeType(i),null!=l&&(h.responseType=l),p>0&&(h.timeout=p),null==a&&"function"==typeof n&&(a=n,n=null),null!=a&&1===a.length&&(a=function(t){return function(e,n){t(null==e?n:null)}}(a)),null!=a&&r.on("error",a).on("load",function(t){a(null,t)}),s.call("beforesend",r,h),h.send(null==n?null:n),r},abort:function(){return h.abort(),r},on:function(){var t=s.on.apply(s,arguments)
return t===s?r:t}},null!=e){if("function"!=typeof e)throw new Error("invalid callback: "+e)
return r.get(e)}return r},hc=function(t,e){return function(n,r){var a=cc(n).mimeType(t).response(e)
if(null!=r){if("function"!=typeof r)throw new Error("invalid callback: "+r)
return a.get(r)}return a}}
hc("text/html",function(t){return document.createRange().createContextualFragment(t.responseText)})
var dc=hc("application/json",function(t){return JSON.parse(t.responseText)})
hc("text/plain",function(t){return t.responseText}),hc("application/xml",function(t){var e=t.responseXML
if(!e)throw new Error("parse error")
return e})
var fc=function(t,e){return function(n,r,a){arguments.length<3&&(a=r,r=null)
var i=cc(n).mimeType(t)
return i.row=function(t){return arguments.length?i.response(function(t,e){return function(n){return t(n.responseText,e)}}(e,r=t)):r},i.row(r),a?i.get(a):i}}
fc("text/csv",lc),fc("text/tab-separated-values",uc)
var pc,gc=function(t,e){if((n=(t=e?t.toExponential(e-1):t.toExponential()).indexOf("e"))<0)return null
var n,r=t.slice(0,n)
return[r.length>1?r[0]+r.slice(2):r,+t.slice(n+1)]},yc=function(t){return(t=gc(Math.abs(t)))?t[1]:NaN},vc=function(t,e){var n=gc(t,e)
if(!n)return t+""
var r=n[0],a=n[1]
return a<0?"0."+new Array(-a).join("0")+r:r.length>a+1?r.slice(0,a+1)+"."+r.slice(a+1):r+new Array(a-r.length+2).join("0")},mc={"":function(t,e){t:for(var n,r=(t=t.toPrecision(e)).length,a=1,i=-1;a<r;++a)switch(t[a]){case".":i=n=a
break
case"0":0===i&&(i=a),n=a
break
case"e":break t
default:i>0&&(i=0)}return i>0?t.slice(0,i)+t.slice(n+1):t},"%":function(t,e){return(100*t).toFixed(e)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,e){return t.toExponential(e)},f:function(t,e){return t.toFixed(e)},g:function(t,e){return t.toPrecision(e)},o:function(t){return Math.round(t).toString(8)},p:function(t,e){return vc(100*t,e)},r:vc,s:function(t,e){var n=gc(t,e)
if(!n)return t+""
var r=n[0],a=n[1],i=a-(pc=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,o=r.length
return i===o?r:i>o?r+new Array(i-o+1).join("0"):i>0?r.slice(0,i)+"."+r.slice(i):"0."+new Array(1-i).join("0")+gc(t,Math.max(0,e+i-1))[0]},X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},xc=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i
Zt.prototype=Qt.prototype,Qt.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type}
var bc,wc=function(t){return t},Cc=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],kc=function(t){function e(t){function e(t){var e,r,o,c=y,b=v
if("c"===g)b=m(t)+b,t=""
else{var w=(t=+t)<0
if(t=m(Math.abs(t),p),w&&0==+t&&(w=!1),c=(w?"("===u?u:"-":"-"===u||"("===u?"":u)+c,b=b+("s"===g?Cc[8+pc/3]:"")+(w&&"("===u?")":""),x)for(e=-1,r=t.length;++e<r;)if(48>(o=t.charCodeAt(e))||o>57){b=(46===o?a+t.slice(e+1):t.slice(e))+b,t=t.slice(0,e)
break}}f&&!h&&(t=n(t,1/0))
var C=c.length+t.length+b.length,k=C<d?new Array(d-C+1).join(l):""
switch(f&&h&&(t=n(k+t,k.length?d-b.length:1/0),k=""),s){case"<":t=c+t+b+k
break
case"=":t=c+k+t+b
break
case"^":t=k.slice(0,C=k.length>>1)+c+t+b+k.slice(C)
break
default:t=k+c+t+b}return i(t)}var l=(t=Zt(t)).fill,s=t.align,u=t.sign,c=t.symbol,h=t.zero,d=t.width,f=t.comma,p=t.precision,g=t.type,y="$"===c?r[0]:"#"===c&&/[boxX]/.test(g)?"0"+g.toLowerCase():"",v="$"===c?r[1]:/[%p]/.test(g)?o:"",m=mc[g],x=!g||/[defgprs%]/.test(g)
return p=null==p?g?6:12:/[gprs]/.test(g)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p)),e.toString=function(){return t+""},e}var n=t.grouping&&t.thousands?function(t,e){return function(n,r){for(var a=n.length,i=[],o=0,l=t[0],s=0;a>0&&l>0&&(s+l+1>r&&(l=Math.max(1,r-s)),i.push(n.substring(a-=l,a+l)),!((s+=l+1)>r));)l=t[o=(o+1)%t.length]
return i.reverse().join(e)}}(t.grouping,t.thousands):wc,r=t.currency,a=t.decimal,i=t.numerals?function(t){return function(e){return e.replace(/[0-9]/g,function(e){return t[+e]})}}(t.numerals):wc,o=t.percent||"%"
return{format:e,formatPrefix:function(t,n){var r=e((t=Zt(t),t.type="f",t)),a=3*Math.max(-8,Math.min(8,Math.floor(yc(n)/3))),i=Math.pow(10,-a),o=Cc[8+a/3]
return function(t){return r(i*t)+o}}}}
Kt({decimal:".",thousands:",",grouping:[3],currency:["$",""]})
var Sc=function(t){return Math.max(0,-yc(Math.abs(t)))},Oc=function(t,e){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(yc(e)/3)))-yc(Math.abs(t)))},Ac=function(t,e){return t=Math.abs(t),e=Math.abs(e)-t,Math.max(0,yc(e)-yc(t))+1}
oe.prototype=ne.prototype={constructor:oe,count:function(){return this.eachAfter(ee)},each:function(t){var e,n,r,a,i=this,o=[i]
do{for(e=o.reverse(),o=[];i=e.pop();)if(t(i),n=i.children)for(r=0,a=n.length;r<a;++r)o.push(n[r])}while(o.length)
return this},eachAfter:function(t){for(var e,n,r,a=this,i=[a],o=[];a=i.pop();)if(o.push(a),e=a.children)for(n=0,r=e.length;n<r;++n)i.push(e[n])
for(;a=o.pop();)t(a)
return this},eachBefore:function(t){for(var e,n,r=this,a=[r];r=a.pop();)if(t(r),e=r.children)for(n=e.length-1;n>=0;--n)a.push(e[n])
return this},sum:function(t){return this.eachAfter(function(e){for(var n=+t(e.data)||0,r=e.children,a=r&&r.length;--a>=0;)n+=r[a].value
e.value=n})},sort:function(t){return this.eachBefore(function(e){e.children&&e.children.sort(t)})},path:function(t){for(var e=this,n=function(t,e){if(t===e)return t
var n=t.ancestors(),r=e.ancestors(),a=null
for(t=n.pop(),e=r.pop();t===e;)a=t,t=n.pop(),e=r.pop()
return a}(e,t),r=[e];e!==n;)e=e.parent,r.push(e)
for(var a=r.length;t!==n;)r.splice(a,0,t),t=t.parent
return r},ancestors:function(){for(var t=this,e=[t];t=t.parent;)e.push(t)
return e},descendants:function(){var t=[]
return this.each(function(e){t.push(e)}),t},leaves:function(){var t=[]
return this.eachBefore(function(e){e.children||t.push(e)}),t},links:function(){var t=this,e=[]
return t.each(function(n){n!==t&&e.push({source:n.parent,target:n})}),e},copy:function(){return ne(this).eachBefore(ae)}}
var _c=Array.prototype.slice,Pc=function(t){for(var e,n,r=0,a=(t=function(t){for(var e,n,r=t.length;r;)n=Math.random()*r--|0,e=t[r],t[r]=t[n],t[n]=e
return t}(_c.call(t))).length,i=[];r<a;)e=t[r],n&&ue(n,e)?++r:(n=he(i=le(i,e)),r=0)
return n},Tc=function(t){return function(){return t}},Mc=function(t){t.x0=Math.round(t.x0),t.y0=Math.round(t.y0),t.x1=Math.round(t.x1),t.y1=Math.round(t.y1)},Ec=function(t,e,n,r,a){for(var i,o=t.children,l=-1,s=o.length,u=t.value&&(r-e)/t.value;++l<s;)i=o[l],i.y0=n,i.y1=a,i.x0=e,i.x1=e+=i.value*u},Lc="$",zc={depth:-1},Dc={}
Le.prototype=Object.create(oe.prototype)
var Rc=function(t,e,n,r,a){for(var i,o=t.children,l=-1,s=o.length,u=t.value&&(a-n)/t.value;++l<s;)i=o[l],i.x0=e,i.x1=r,i.y0=n,i.y1=n+=i.value*u},jc=(1+Math.sqrt(5))/2,Ic=function t(e){function n(t,n,r,a,i){ze(e,t,n,r,a,i)}return n.ratio=function(e){return t((e=+e)>1?e:1)},n}(jc),Hc=function t(e){function n(t,n,r,a,i){if((o=t._squarify)&&o.ratio===e)for(var o,l,s,u,c,h=-1,d=o.length,f=t.value;++h<d;){for(s=(l=o[h]).children,u=l.value=0,c=s.length;u<c;++u)l.value+=s[u].value
l.dice?Ec(l,n,r,a,r+=(i-r)*l.value/f):Rc(l,n,r,n+=(a-n)*l.value/f,i),f-=l.value}else t._squarify=o=ze(e,t,n,r,a,i),o.ratio=e}return n.ratio=function(e){return t((e=+e)>1?e:1)},n}(jc),Bc=Math.PI,Nc=2*Bc,Fc=Nc-1e-6
De.prototype=Re.prototype={constructor:De,moveTo:function(t,e){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)},closePath:function(){null!==this._x1&&(this._x1=this._x0,this._y1=this._y0,this._+="Z")},lineTo:function(t,e){this._+="L"+(this._x1=+t)+","+(this._y1=+e)},quadraticCurveTo:function(t,e,n,r){this._+="Q"+ +t+","+ +e+","+(this._x1=+n)+","+(this._y1=+r)},bezierCurveTo:function(t,e,n,r,a,i){this._+="C"+ +t+","+ +e+","+ +n+","+ +r+","+(this._x1=+a)+","+(this._y1=+i)},arcTo:function(t,e,n,r,a){t=+t,e=+e,n=+n,r=+r,a=+a
var i=this._x1,o=this._y1,l=n-t,s=r-e,u=i-t,c=o-e,h=u*u+c*c
if(a<0)throw new Error("negative radius: "+a)
if(null===this._x1)this._+="M"+(this._x1=t)+","+(this._y1=e)
else if(h>1e-6)if(Math.abs(c*l-s*u)>1e-6&&a){var d=n-i,f=r-o,p=l*l+s*s,g=d*d+f*f,y=Math.sqrt(p),v=Math.sqrt(h),m=a*Math.tan((Bc-Math.acos((p+h-g)/(2*y*v)))/2),x=m/v,b=m/y
Math.abs(x-1)>1e-6&&(this._+="L"+(t+x*u)+","+(e+x*c)),this._+="A"+a+","+a+",0,0,"+ +(c*d>u*f)+","+(this._x1=t+b*l)+","+(this._y1=e+b*s)}else this._+="L"+(this._x1=t)+","+(this._y1=e)},arc:function(t,e,n,r,a,i){t=+t,e=+e
var o=(n=+n)*Math.cos(r),l=n*Math.sin(r),s=t+o,u=e+l,c=1^i,h=i?r-a:a-r
if(n<0)throw new Error("negative radius: "+n)
null===this._x1?this._+="M"+s+","+u:(Math.abs(this._x1-s)>1e-6||Math.abs(this._y1-u)>1e-6)&&(this._+="L"+s+","+u),n&&(h<0&&(h=h%Nc+Nc),h>Fc?this._+="A"+n+","+n+",0,1,"+c+","+(t-o)+","+(e-l)+"A"+n+","+n+",0,1,"+c+","+(this._x1=s)+","+(this._y1=u):h>1e-6&&(this._+="A"+n+","+n+",0,"+ +(h>=Bc)+","+c+","+(this._x1=t+n*Math.cos(a))+","+(this._y1=e+n*Math.sin(a))))},rect:function(t,e,n,r){this._+="M"+(this._x0=this._x1=+t)+","+(this._y0=this._y1=+e)+"h"+ +n+"v"+ +r+"h"+-n+"Z"},toString:function(){return this._}}
var Yc=Array.prototype,Vc=Yc.map,Wc=Yc.slice,Uc={name:"implicit"},Xc=function(t){return function(){return t}},Gc=function(t){return+t},qc=[0,1],Zc=function(e,r,a){var i,o=e[0],l=e[e.length-1],s=n(o,l,null==r?10:r)
switch((a=Zt(null==a?",f":a)).type){case"s":var u=Math.max(Math.abs(o),Math.abs(l))
return null!=a.precision||isNaN(i=Oc(s,u))||(a.precision=i),t.formatPrefix(a,u)
case"":case"e":case"g":case"p":case"r":null!=a.precision||isNaN(i=Ac(s,Math.max(Math.abs(o),Math.abs(l))))||(a.precision=i-("e"===a.type))
break
case"f":case"%":null!=a.precision||isNaN(i=Sc(s))||(a.precision=i-2*("%"===a.type))}return t.format(a)},Qc=function(t,e){var n,r=0,a=(t=t.slice()).length-1,i=t[r],o=t[a]
return o<i&&(n=r,r=a,a=n,n=i,i=o,o=n),t[r]=e.floor(i),t[a]=e.ceil(o),t},Kc=new Date,$c=new Date,Jc=We(function(){},function(t,e){t.setTime(+t+e)},function(t,e){return e-t})
Jc.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?We(function(e){e.setTime(Math.floor(e/t)*t)},function(e,n){e.setTime(+e+n*t)},function(e,n){return(n-e)/t}):Jc:null}
var th=Jc.range,eh=6e4,nh=6048e5,rh=We(function(t){t.setTime(1e3*Math.floor(t/1e3))},function(t,e){t.setTime(+t+1e3*e)},function(t,e){return(e-t)/1e3},function(t){return t.getUTCSeconds()}),ah=rh.range,ih=We(function(t){t.setTime(Math.floor(t/eh)*eh)},function(t,e){t.setTime(+t+e*eh)},function(t,e){return(e-t)/eh},function(t){return t.getMinutes()}),oh=ih.range,lh=We(function(t){var e=t.getTimezoneOffset()*eh%36e5
e<0&&(e+=36e5),t.setTime(36e5*Math.floor((+t-e)/36e5)+e)},function(t,e){t.setTime(+t+36e5*e)},function(t,e){return(e-t)/36e5},function(t){return t.getHours()}),sh=lh.range,uh=We(function(t){t.setHours(0,0,0,0)},function(t,e){t.setDate(t.getDate()+e)},function(t,e){return(e-t-(e.getTimezoneOffset()-t.getTimezoneOffset())*eh)/864e5},function(t){return t.getDate()-1}),ch=uh.range,hh=Ue(0),dh=Ue(1),fh=Ue(2),ph=Ue(3),gh=Ue(4),yh=Ue(5),vh=Ue(6),mh=hh.range,xh=dh.range,bh=fh.range,wh=ph.range,Ch=gh.range,kh=yh.range,Sh=vh.range,Oh=We(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,e){t.setMonth(t.getMonth()+e)},function(t,e){return e.getMonth()-t.getMonth()+12*(e.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),Ah=Oh.range,_h=We(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,e){t.setFullYear(t.getFullYear()+e)},function(t,e){return e.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()})
_h.every=function(t){return isFinite(t=Math.floor(t))&&t>0?We(function(e){e.setFullYear(Math.floor(e.getFullYear()/t)*t),e.setMonth(0,1),e.setHours(0,0,0,0)},function(e,n){e.setFullYear(e.getFullYear()+n*t)}):null}
var Ph=_h.range,Th=We(function(t){t.setUTCSeconds(0,0)},function(t,e){t.setTime(+t+e*eh)},function(t,e){return(e-t)/eh},function(t){return t.getUTCMinutes()}),Mh=Th.range,Eh=We(function(t){t.setUTCMinutes(0,0,0)},function(t,e){t.setTime(+t+36e5*e)},function(t,e){return(e-t)/36e5},function(t){return t.getUTCHours()}),Lh=Eh.range,zh=We(function(t){t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCDate(t.getUTCDate()+e)},function(t,e){return(e-t)/864e5},function(t){return t.getUTCDate()-1}),Dh=zh.range,Rh=Xe(0),jh=Xe(1),Ih=Xe(2),Hh=Xe(3),Bh=Xe(4),Nh=Xe(5),Fh=Xe(6),Yh=Rh.range,Vh=jh.range,Wh=Ih.range,Uh=Hh.range,Xh=Bh.range,Gh=Nh.range,qh=Fh.range,Zh=We(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCMonth(t.getUTCMonth()+e)},function(t,e){return e.getUTCMonth()-t.getUTCMonth()+12*(e.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),Qh=Zh.range,Kh=We(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,e){t.setUTCFullYear(t.getUTCFullYear()+e)},function(t,e){return e.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()})
Kh.every=function(t){return isFinite(t=Math.floor(t))&&t>0?We(function(e){e.setUTCFullYear(Math.floor(e.getUTCFullYear()/t)*t),e.setUTCMonth(0,1),e.setUTCHours(0,0,0,0)},function(e,n){e.setUTCFullYear(e.getUTCFullYear()+n*t)}):null}
var $h,Jh=Kh.range,td={"-":"",_:" ",0:"0"},ed=/^\s*\d+/,nd=/^%/,rd=/[\\^$*+?|[\]().{}]/g
ar({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]})
var ad=Date.prototype.toISOString?function(t){return t.toISOString()}:t.utcFormat("%Y-%m-%dT%H:%M:%S.%LZ"),id=+new Date("2000-01-01T00:00:00.000Z")?function(t){var e=new Date(t)
return isNaN(e)?null:e}:t.utcParse("%Y-%m-%dT%H:%M:%S.%LZ"),od=1e3,ld=60*od,sd=60*ld,ud=24*sd,cd=7*ud,hd=30*ud,dd=365*ud,fd=function(t){return t.match(/.{6}/g).map(function(t){return"#"+t})}
fd("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),fd("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),fd("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),fd("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),Vs(ot(300,.5,0),ot(-240,.5,1))
var pd=(Vs(ot(-100,.75,.35),ot(80,1.5,.8)),Vs(ot(260,.75,.35),ot(80,1.5,.8)),ot(),function(t){return("function"==typeof t?function(t,e){return t.each(function(){var t=e.apply(this,arguments),n=El(this)
for(var r in t)n.attr(r,t[r])})}:function(t,e){for(var n in e)t.attr(n,e[n])
return t})(this,t)})
E.prototype.attrs=pd,E.prototype.styles=function(t,e){return("function"==typeof t?function(t,e,n){return t.each(function(){var t=e.apply(this,arguments),r=El(this)
for(var a in t)r.style(a,t[a],n)})}:function(t,e,n){for(var r in e)t.style(r,e[r],n)
return t})(this,t,null==e?"":e)},E.prototype.properties=function(t){return("function"==typeof t?function(t,e){return t.each(function(){var t=e.apply(this,arguments),n=El(this)
for(var r in t)n.property(r,t[r])})}:function(t,e){for(var n in e)t.property(n,e[n])
return t})(this,t)},Lt.prototype.attrs=function(t){return("function"==typeof t?function(t,e){return t.each(function(){var n=e.apply(this,arguments),r=El(this).transition(t)
for(var a in n)r.attr(a,n[a])})}:function(t,e){for(var n in e)t.attr(n,e[n])
return t})(this,t)},Lt.prototype.styles=function(t,e){return("function"==typeof t?function(t,e,n){return t.each(function(){var r=e.apply(this,arguments),a=El(this).transition(t)
for(var i in r)a.style(i,r[i],n)})}:function(t,e,n){for(var r in e)t.style(r,e[r],n)
return t})(this,t,null==e?"":e)}
var gd=function(t){return function(){return t}},yd=Math.abs,vd=Math.atan2,md=Math.cos,xd=Math.max,bd=Math.min,wd=Math.sin,Cd=Math.sqrt,kd=1e-12,Sd=Math.PI,Od=Sd/2,Ad=2*Sd
gr.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
break
case 1:this._point=2
default:this._context.lineTo(t,e)}}}
var _d=function(t){return new gr(t)},Pd=function(){function t(t){var l,s,u,c=t.length,h=!1
for(null==a&&(o=i(u=Re())),l=0;l<=c;++l)!(l<c&&r(s=t[l],l,t))===h&&((h=!h)?o.lineStart():o.lineEnd()),h&&o.point(+e(s,l,t),+n(s,l,t))
if(u)return o=null,u+""||null}var e=yr,n=vr,r=gd(!0),a=null,i=_d,o=null
return t.x=function(n){return arguments.length?(e="function"==typeof n?n:gd(+n),t):e},t.y=function(e){return arguments.length?(n="function"==typeof e?e:gd(+e),t):n},t.defined=function(e){return arguments.length?(r="function"==typeof e?e:gd(!!e),t):r},t.curve=function(e){return arguments.length?(i=e,null!=a&&(o=i(a)),t):i},t.context=function(e){return arguments.length?(null==e?a=o=null:o=i(a=e),t):a},t},Td=function(){function t(t){var e,c,h,d,f,p=t.length,g=!1,y=new Array(p),v=new Array(p)
for(null==l&&(u=s(f=Re())),e=0;e<=p;++e){if(!(e<p&&o(d=t[e],e,t))===g)if(g=!g)c=e,u.areaStart(),u.lineStart()
else{for(u.lineEnd(),u.lineStart(),h=e-1;h>=c;--h)u.point(y[h],v[h])
u.lineEnd(),u.areaEnd()}g&&(y[e]=+n(d,e,t),v[e]=+a(d,e,t),u.point(r?+r(d,e,t):y[e],i?+i(d,e,t):v[e]))}if(f)return u=null,f+""||null}function e(){return Pd().defined(o).curve(s).context(l)}var n=yr,r=null,a=gd(0),i=vr,o=gd(!0),l=null,s=_d,u=null
return t.x=function(e){return arguments.length?(n="function"==typeof e?e:gd(+e),r=null,t):n},t.x0=function(e){return arguments.length?(n="function"==typeof e?e:gd(+e),t):n},t.x1=function(e){return arguments.length?(r=null==e?null:"function"==typeof e?e:gd(+e),t):r},t.y=function(e){return arguments.length?(a="function"==typeof e?e:gd(+e),i=null,t):a},t.y0=function(e){return arguments.length?(a="function"==typeof e?e:gd(+e),t):a},t.y1=function(e){return arguments.length?(i=null==e?null:"function"==typeof e?e:gd(+e),t):i},t.lineX0=t.lineY0=function(){return e().x(n).y(a)},t.lineY1=function(){return e().x(n).y(i)},t.lineX1=function(){return e().x(r).y(a)},t.defined=function(e){return arguments.length?(o="function"==typeof e?e:gd(!!e),t):o},t.curve=function(e){return arguments.length?(s=e,null!=l&&(u=s(l)),t):s},t.context=function(e){return arguments.length?(null==e?l=u=null:u=s(l=e),t):l},t},Md=function(t,e){return e<t?-1:e>t?1:e>=t?0:NaN},Ed=function(t){return t},Ld=xr(_d)
mr.prototype={areaStart:function(){this._curve.areaStart()},areaEnd:function(){this._curve.areaEnd()},lineStart:function(){this._curve.lineStart()},lineEnd:function(){this._curve.lineEnd()},point:function(t,e){this._curve.point(e*Math.sin(t),e*-Math.cos(t))}}
var zd=function(){return br(Pd().curve(Ld))},Dd=function(){var t=Td().curve(Ld),e=t.curve,n=t.lineX0,r=t.lineX1,a=t.lineY0,i=t.lineY1
return t.angle=t.x,delete t.x,t.startAngle=t.x0,delete t.x0,t.endAngle=t.x1,delete t.x1,t.radius=t.y,delete t.y,t.innerRadius=t.y0,delete t.y0,t.outerRadius=t.y1,delete t.y1,t.lineStartAngle=function(){return br(n())},delete t.lineX0,t.lineEndAngle=function(){return br(r())},delete t.lineX1,t.lineInnerRadius=function(){return br(a())},delete t.lineY0,t.lineOuterRadius=function(){return br(i())},delete t.lineY1,t.curve=function(t){return arguments.length?e(xr(t)):e()._curve},t},Rd=Array.prototype.slice,jd=function(){}
Cr.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=NaN,this._point=0},lineEnd:function(){switch(this._point){case 3:wr(this,this._x1,this._y1)
case 2:this._context.lineTo(this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
break
case 1:this._point=2
break
case 2:this._point=3,this._context.lineTo((5*this._x0+this._x1)/6,(5*this._y0+this._y1)/6)
default:wr(this,t,e)}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e}},kr.prototype={lineStart:function(){this._x=[],this._y=[],this._basis.lineStart()},lineEnd:function(){var t=this._x,e=this._y,n=t.length-1
if(n>0)for(var r,a=t[0],i=e[0],o=t[n]-a,l=e[n]-i,s=-1;++s<=n;)r=s/n,this._basis.point(this._beta*t[s]+(1-this._beta)*(a+r*o),this._beta*e[s]+(1-this._beta)*(i+r*l))
this._x=this._y=null,this._basis.lineEnd()},point:function(t,e){this._x.push(+t),this._y.push(+e)}},function t(e){function n(t){return 1===e?new Cr(t):new kr(t,e)}return n.beta=function(e){return t(+e)},n}(.85),Or.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:Sr(this,this._x1,this._y1)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
break
case 1:this._point=2,this._x1=t,this._y1=e
break
case 2:this._point=3
default:Sr(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}}
var Id=function t(e){function n(t){return new Or(t,e)}return n.tension=function(e){return t(+e)},n}(0)
Ar.prototype={areaStart:jd,areaEnd:jd,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._x3=t,this._y3=e
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e)
break
case 2:this._point=3,this._x5=t,this._y5=e
break
default:Sr(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}}
var Hd=function t(e){function n(t){return new Ar(t,e)}return n.tension=function(e){return t(+e)},n}(0)
_r.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:Sr(this,t,e)}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}},function t(e){function n(t){return new _r(t,e)}return n.tension=function(e){return t(+e)},n}(0),Tr.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2)
break
case 3:this.point(this._x2,this._y2)}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
break
case 1:this._point=2
break
case 2:this._point=3
default:Pr(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}},function t(e){function n(t){return e?new Tr(t,e):new Or(t,0)}return n.alpha=function(e){return t(+e)},n}(.5),Mr.prototype={areaStart:jd,areaEnd:jd,lineStart:function(){this._x0=this._x1=this._x2=this._x3=this._x4=this._x5=this._y0=this._y1=this._y2=this._y3=this._y4=this._y5=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 1:this._context.moveTo(this._x3,this._y3),this._context.closePath()
break
case 2:this._context.lineTo(this._x3,this._y3),this._context.closePath()
break
case 3:this.point(this._x3,this._y3),this.point(this._x4,this._y4),this.point(this._x5,this._y5)}},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1,this._x3=t,this._y3=e
break
case 1:this._point=2,this._context.moveTo(this._x4=t,this._y4=e)
break
case 2:this._point=3,this._x5=t,this._y5=e
break
default:Pr(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}},function t(e){function n(t){return e?new Mr(t,e):new Ar(t,0)}return n.alpha=function(e){return t(+e)},n}(.5),Er.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){(this._line||0!==this._line&&3===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,r=this._y2-e
this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+r*r,this._alpha))}switch(this._point){case 0:this._point=1
break
case 1:this._point=2
break
case 2:this._point=3,this._line?this._context.lineTo(this._x2,this._y2):this._context.moveTo(this._x2,this._y2)
break
case 3:this._point=4
default:Pr(this,t,e)}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}},function t(e){function n(t){return e?new Er(t,e):new _r(t,0)}return n.alpha=function(e){return t(+e)},n}(.5),Lr.prototype={areaStart:jd,areaEnd:jd,lineStart:function(){this._point=0},lineEnd:function(){this._point&&this._context.closePath()},point:function(t,e){t=+t,e=+e,this._point?this._context.lineTo(t,e):(this._point=1,this._context.moveTo(t,e))}}
Ir.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1)
break
case 3:jr(this,this._t0,Rr(this,this._t0))}(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN
if(t=+t,e=+e,t!==this._x1||e!==this._y1){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
break
case 1:this._point=2
break
case 2:this._point=3,jr(this,Rr(this,n=Dr(this,t,e)),n)
break
default:jr(this,this._t0,n=Dr(this,t,e))}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}},(Hr.prototype=Object.create(Ir.prototype)).point=function(t,e){Ir.prototype.point.call(this,e,t)},Br.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,r,a,i){this._context.bezierCurveTo(e,t,r,n,i,a)}},Nr.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&2===this._point&&this._context.lineTo(this._x,this._y),(this._line||0!==this._line&&1===this._point)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e)
break
case 1:this._point=2
default:if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e)
else{var n=this._x*(1-this._t)+t*this._t
this._context.lineTo(n,this._y),this._context.lineTo(n,e)}}this._x=t,this._y=e}}
var Bd=function(t,e){if((a=t.length)>1)for(var n,r,a,i=1,o=t[e[0]],l=o.length;i<a;++i)for(r=o,o=t[e[i]],n=0;n<l;++n)o[n][1]+=o[n][0]=isNaN(r[n][1])?r[n][0]:r[n][1]},Nd=function(t){for(var e=t.length,n=new Array(e);--e>=0;)n[e]=e
return n},Fd=function(t){return function(){return t}}
Yr.prototype={constructor:Yr,scale:function(t){return 1===t?this:new Yr(this.k*t,this.x,this.y)},translate:function(t,e){return 0===t&0===e?this:new Yr(this.k,this.x+this.k*t,this.y+this.k*e)},apply:function(t){return[t[0]*this.k+this.x,t[1]*this.k+this.y]},applyX:function(t){return t*this.k+this.x},applyY:function(t){return t*this.k+this.y},invert:function(t){return[(t[0]-this.x)/this.k,(t[1]-this.y)/this.k]},invertX:function(t){return(t-this.x)/this.k},invertY:function(t){return(t-this.y)/this.k},rescaleX:function(t){return t.copy().domain(t.range().map(this.invertX,this).map(t.invert,t))},rescaleY:function(t){return t.copy().domain(t.range().map(this.invertY,this).map(t.invert,t))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}}
var Yd=new Yr(1,0,0)
Vr.prototype=Yr.prototype
var Vd=function(){t.event.preventDefault(),t.event.stopImmediatePropagation()},Wd=function(t,e,n){return(e[0]-t[0])*(n[1]-t[1])-(e[1]-t[1])*(n[0]-t[0])},Ud=function(){return new Jr}
Jr.prototype={constructor:Jr,reset:function(){this.s=this.t=0},add:function(t){ta(Sf,t,this.t),ta(this,Sf.s,this.s),this.s?this.t+=Sf.t:this.s=Sf.t},valueOf:function(){return this.s}}
var Xd,Gd,qd,Zd,Qd,Kd,$d,Jd,tf,ef,nf,rf,af,of,lf,sf,uf,cf,hf,df,ff,pf,gf,yf,vf,mf,xf,bf,wf,Cf,kf,Sf=new Jr,Of=1e-6,Af=Math.PI,_f=Af/2,Pf=Af/4,Tf=2*Af,Mf=180/Af,Ef=Af/180,Lf=Math.abs,zf=Math.atan,Df=Math.atan2,Rf=Math.cos,jf=Math.ceil,If=Math.exp,Hf=Math.log,Bf=Math.pow,Nf=Math.sin,Ff=Math.sign||function(t){return t>0?1:t<0?-1:0},Yf=Math.sqrt,Vf=Math.tan,Wf={Feature:function(t,e){ia(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,r=-1,a=n.length;++r<a;)ia(n[r].geometry,e)}},Uf={Sphere:function(t,e){e.sphere()},Point:function(t,e){t=t.coordinates,e.point(t[0],t[1],t[2])},MultiPoint:function(t,e){for(var n=t.coordinates,r=-1,a=n.length;++r<a;)t=n[r],e.point(t[0],t[1],t[2])},LineString:function(t,e){oa(t.coordinates,e,0)},MultiLineString:function(t,e){for(var n=t.coordinates,r=-1,a=n.length;++r<a;)oa(n[r],e,0)},Polygon:function(t,e){la(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,r=-1,a=n.length;++r<a;)la(n[r],e)},GeometryCollection:function(t,e){for(var n=t.geometries,r=-1,a=n.length;++r<a;)ia(n[r],e)}},Xf=function(t,e){t&&Wf.hasOwnProperty(t.type)?Wf[t.type](t,e):ia(t,e)},Gf=Ud(),qf=Ud(),Zf={point:aa,lineStart:aa,lineEnd:aa,polygonStart:function(){Gf.reset(),Zf.lineStart=sa,Zf.lineEnd=ua},polygonEnd:function(){var t=+Gf
qf.add(t<0?Tf+t:t),this.lineStart=this.lineEnd=this.point=aa},sphere:function(){qf.add(Tf)}},Qf=Ud(),Kf={point:xa,lineStart:wa,lineEnd:Ca,polygonStart:function(){Kf.point=ka,Kf.lineStart=Sa,Kf.lineEnd=Oa,Qf.reset(),Zf.polygonStart()},polygonEnd:function(){Zf.polygonEnd(),Kf.point=xa,Kf.lineStart=wa,Kf.lineEnd=Ca,Gf<0?(Kd=-(Jd=180),$d=-(tf=90)):Qf>Of?tf=90:Qf<-Of&&($d=-90),lf[0]=Kd,lf[1]=Jd}},$f={sphere:aa,point:Ta,lineStart:Ea,lineEnd:Da,polygonStart:function(){$f.lineStart=Ra,$f.lineEnd=ja},polygonEnd:function(){$f.lineStart=Ea,$f.lineEnd=Da}},Jf=function(t){sf=uf=cf=hf=df=ff=pf=gf=yf=vf=mf=0,Xf(t,$f)
var e=yf,n=vf,r=mf,a=e*e+n*n+r*r
return a<1e-12&&(e=ff,n=pf,r=gf,uf<Of&&(e=cf,n=hf,r=df),(a=e*e+n*n+r*r)<1e-12)?[NaN,NaN]:[Df(n,e)*Mf,na(r/Yf(a))*Mf]},tp=function(t){return function(){return t}},ep=function(t,e){function n(n,r){return n=t(n,r),e(n[0],n[1])}return t.invert&&e.invert&&(n.invert=function(n,r){return(n=e.invert(n,r))&&t.invert(n[0],n[1])}),n}
Ba.invert=Ba
var np,rp,ap,ip,op,lp,sp,up,cp,hp,dp,fp=function(t){function e(e){return e=t(e[0]*Ef,e[1]*Ef),e[0]*=Mf,e[1]*=Mf,e}return t=Na(t[0]*Ef,t[1]*Ef,t.length>2?t[2]*Ef:0),e.invert=function(e){return e=t.invert(e[0]*Ef,e[1]*Ef),e[0]*=Mf,e[1]*=Mf,e},e},pp=function(){var t,e=[]
return{point:function(e,n){t.push([e,n])},lineStart:function(){e.push(t=[])},lineEnd:aa,rejoin:function(){e.length>1&&e.push(e.pop().concat(e.shift()))},result:function(){var n=e
return e=[],t=null,n}}},gp=function(t,e){return Lf(t[0]-e[0])<Of&&Lf(t[1]-e[1])<Of},yp=function(t,e,n,r,a){var i,o,l=[],s=[]
if(t.forEach(function(t){if(!((e=t.length-1)<=0)){var e,n,r=t[0],o=t[e]
if(gp(r,o)){for(a.lineStart(),i=0;i<e;++i)a.point((r=t[i])[0],r[1])
return void a.lineEnd()}l.push(n=new Xa(r,t,null,!0)),s.push(n.o=new Xa(r,null,n,!1)),l.push(n=new Xa(o,t,null,!1)),s.push(n.o=new Xa(o,null,n,!0))}}),l.length){for(s.sort(e),Ga(l),Ga(s),i=0,o=s.length;i<o;++i)s[i].e=n=!n
for(var u,c,h=l[0];;){for(var d=h,f=!0;d.v;)if((d=d.n)===h)return
u=d.z,a.lineStart()
do{if(d.v=d.o.v=!0,d.e){if(f)for(i=0,o=u.length;i<o;++i)a.point((c=u[i])[0],c[1])
else r(d.x,d.n.x,1,a)
d=d.n}else{if(f)for(u=d.p.z,i=u.length-1;i>=0;--i)a.point((c=u[i])[0],c[1])
else r(d.x,d.p.x,-1,a)
d=d.p}u=(d=d.o).z,f=!f}while(!d.v)
a.lineEnd()}}},vp=Ud(),mp=function(t,e){var n=e[0],r=e[1],a=Nf(r),i=[Nf(n),-Rf(n),0],o=0,l=0
vp.reset(),1===a?r=_f+Of:-1===a&&(r=-_f-Of)
for(var s=0,u=t.length;s<u;++s)if(h=(c=t[s]).length)for(var c,h,d=c[h-1],f=d[0],p=d[1]/2+Pf,g=Nf(p),y=Rf(p),v=0;v<h;++v,f=x,g=w,y=C,d=m){var m=c[v],x=m[0],b=m[1]/2+Pf,w=Nf(b),C=Rf(b),k=x-f,S=k>=0?1:-1,O=S*k,A=O>Af,_=g*w
if(vp.add(Df(_*S*Nf(O),y*C+_*Rf(O))),o+=A?k+S*Tf:k,A^f>=n^x>=n){var P=ga(fa(d),fa(m))
ma(P)
var T=ga(i,P)
ma(T)
var M=(A^k>=0?-1:1)*na(T[2]);(r>M||r===M&&(P[0]||P[1]))&&(l+=A^k>=0?1:-1)}}return(o<-Of||o<Of&&vp<-Of)^1&l},xp=function(t,e,n,r){return function(a){function i(e,n){t(e,n)&&a.point(e,n)}function o(t,e){g.point(t,e)}function l(){x.point=o,g.lineStart()}function s(){x.point=i,g.lineEnd()}function u(t,e){p.push([t,e]),v.point(t,e)}function c(){v.lineStart(),p=[]}function h(){u(p[0][0],p[0][1]),v.lineEnd()
var t,e,n,r,i=v.clean(),o=y.result(),l=o.length
if(p.pop(),d.push(p),p=null,l)if(1&i){if(n=o[0],(e=n.length-1)>0){for(m||(a.polygonStart(),m=!0),a.lineStart(),t=0;t<e;++t)a.point((r=n[t])[0],r[1])
a.lineEnd()}}else l>1&&2&i&&o.push(o.pop().concat(o.shift())),f.push(o.filter(qa))}var d,f,p,g=e(a),y=pp(),v=e(y),m=!1,x={point:i,lineStart:l,lineEnd:s,polygonStart:function(){x.point=u,x.lineStart=c,x.lineEnd=h,f=[],d=[]},polygonEnd:function(){x.point=i,x.lineStart=l,x.lineEnd=s,f=nl(f)
var t=mp(d,r)
f.length?(m||(a.polygonStart(),m=!0),yp(f,Za,t,n,a)):t&&(m||(a.polygonStart(),m=!0),a.lineStart(),n(null,null,1,a),a.lineEnd()),m&&(a.polygonEnd(),m=!1),f=d=null},sphere:function(){a.polygonStart(),a.lineStart(),n(null,null,1,a),a.lineEnd(),a.polygonEnd()}}
return x}},bp=xp(function(){return!0},function(t){var e,n=NaN,r=NaN,a=NaN
return{lineStart:function(){t.lineStart(),e=1},point:function(i,o){var l=i>0?Af:-Af,s=Lf(i-n)
Lf(s-Af)<Of?(t.point(n,r=(r+o)/2>0?_f:-_f),t.point(a,r),t.lineEnd(),t.lineStart(),t.point(l,r),t.point(i,r),e=0):a!==l&&s>=Af&&(Lf(n-a)<Of&&(n-=a*Of),Lf(i-l)<Of&&(i-=l*Of),r=function(t,e,n,r){var a,i,o=Nf(t-n)
return Lf(o)>Of?zf((Nf(e)*(i=Rf(r))*Nf(n)-Nf(r)*(a=Rf(e))*Nf(t))/(a*i*o)):(e+r)/2}(n,r,i,o),t.point(a,r),t.lineEnd(),t.lineStart(),t.point(l,r),e=0),t.point(n=i,r=o),a=l},lineEnd:function(){t.lineEnd(),n=r=NaN},clean:function(){return 2-e}}},function(t,e,n,r){var a
if(null==t)a=n*_f,r.point(-Af,a),r.point(0,a),r.point(Af,a),r.point(Af,0),r.point(Af,-a),r.point(0,-a),r.point(-Af,-a),r.point(-Af,0),r.point(-Af,a)
else if(Lf(t[0]-e[0])>Of){var i=t[0]<e[0]?Af:-Af
a=n*i/2,r.point(-i,a),r.point(0,a),r.point(i,a)}else r.point(e[0],e[1])},[-Af,-_f]),wp=function(t){function e(t,e){return Rf(t)*Rf(e)>a}function n(t,e,n){var r=[1,0,0],i=ga(fa(t),fa(e)),o=pa(i,i),l=i[0],s=o-l*l
if(!s)return!n&&t
var u=a*o/s,c=-a*l/s,h=ga(r,i),d=va(r,u)
ya(d,va(i,c))
var f=h,p=pa(d,f),g=pa(f,f),y=p*p-g*(pa(d,d)-1)
if(!(y<0)){var v=Yf(y),m=va(f,(-p-v)/g)
if(ya(m,d),m=da(m),!n)return m
var x,b=t[0],w=e[0],C=t[1],k=e[1]
w<b&&(x=b,b=w,w=x)
var S=w-b,O=Lf(S-Af)<Of
if(!O&&k<C&&(x=C,C=k,k=x),O||S<Of?O?C+k>0^m[1]<(Lf(m[0]-b)<Of?C:k):C<=m[1]&&m[1]<=k:S>Af^(b<=m[0]&&m[0]<=w)){var A=va(f,(-p+v)/g)
return ya(A,d),[m,da(A)]}}}function r(e,n){var r=o?t:Af-t,a=0
return e<-r?a|=1:e>r&&(a|=2),n<-r?a|=4:n>r&&(a|=8),a}var a=Rf(t),i=6*Ef,o=a>0,l=Lf(a)>Of
return xp(e,function(t){var a,i,s,u,c
return{lineStart:function(){u=s=!1,c=1},point:function(h,d){var f,p=[h,d],g=e(h,d),y=o?g?0:r(h,d):g?r(h+(h<0?Af:-Af),d):0
if(!a&&(u=s=g)&&t.lineStart(),g!==s&&(!(f=n(a,p))||gp(a,f)||gp(p,f))&&(p[0]+=Of,p[1]+=Of,g=e(p[0],p[1])),g!==s)c=0,g?(t.lineStart(),f=n(p,a),t.point(f[0],f[1])):(f=n(a,p),t.point(f[0],f[1]),t.lineEnd()),a=f
else if(l&&a&&o^g){var v
y&i||!(v=n(p,a,!0))||(c=0,o?(t.lineStart(),t.point(v[0][0],v[0][1]),t.point(v[1][0],v[1][1]),t.lineEnd()):(t.point(v[1][0],v[1][1]),t.lineEnd(),t.lineStart(),t.point(v[0][0],v[0][1])))}!g||a&&gp(a,p)||t.point(p[0],p[1]),a=p,s=g,i=y},lineEnd:function(){s&&t.lineEnd(),a=null},clean:function(){return c|(u&&s)<<1}}},function(e,n,r,a){Wa(a,t,i,r,e,n)},o?[0,-t]:[-Af,t-Af])},Cp=function(t,e,n,r,a,i){var o,l=t[0],s=t[1],u=0,c=1,h=e[0]-l,d=e[1]-s
if(o=n-l,h||!(o>0)){if(o/=h,h<0){if(o<u)return
o<c&&(c=o)}else if(h>0){if(o>c)return
o>u&&(u=o)}if(o=a-l,h||!(o<0)){if(o/=h,h<0){if(o>c)return
o>u&&(u=o)}else if(h>0){if(o<u)return
o<c&&(c=o)}if(o=r-s,d||!(o>0)){if(o/=d,d<0){if(o<u)return
o<c&&(c=o)}else if(d>0){if(o>c)return
o>u&&(u=o)}if(o=i-s,d||!(o<0)){if(o/=d,d<0){if(o>c)return
o>u&&(u=o)}else if(d>0){if(o<u)return
o<c&&(c=o)}return u>0&&(t[0]=l+u*h,t[1]=s+u*d),c<1&&(e[0]=l+c*h,e[1]=s+c*d),!0}}}}},kp=1e9,Sp=-kp,Op=Ud(),Ap={sphere:aa,point:aa,lineStart:function(){Ap.point=$a,Ap.lineEnd=Ka},lineEnd:aa,polygonStart:aa,polygonEnd:aa},_p=function(t){return Op.reset(),Xf(t,Ap),+Op},Pp=[null,null],Tp={type:"LineString",coordinates:Pp},Mp=function(t,e){return Pp[0]=t,Pp[1]=e,_p(Tp)},Ep={Feature:function(t,e){return ti(t.geometry,e)},FeatureCollection:function(t,e){for(var n=t.features,r=-1,a=n.length;++r<a;)if(ti(n[r].geometry,e))return!0
return!1}},Lp={Sphere:function(){return!0},Point:function(t,e){return ei(t.coordinates,e)},MultiPoint:function(t,e){for(var n=t.coordinates,r=-1,a=n.length;++r<a;)if(ei(n[r],e))return!0
return!1},LineString:function(t,e){return ni(t.coordinates,e)},MultiLineString:function(t,e){for(var n=t.coordinates,r=-1,a=n.length;++r<a;)if(ni(n[r],e))return!0
return!1},Polygon:function(t,e){return ri(t.coordinates,e)},MultiPolygon:function(t,e){for(var n=t.coordinates,r=-1,a=n.length;++r<a;)if(ri(n[r],e))return!0
return!1},GeometryCollection:function(t,e){for(var n=t.geometries,r=-1,a=n.length;++r<a;)if(ti(n[r],e))return!0
return!1}},zp=function(t){return t},Dp=Ud(),Rp=Ud(),jp={point:aa,lineStart:aa,lineEnd:aa,polygonStart:function(){jp.lineStart=ui,jp.lineEnd=di},polygonEnd:function(){jp.lineStart=jp.lineEnd=jp.point=aa,Dp.add(Lf(Rp)),Rp.reset()},result:function(){var t=Dp/2
return Dp.reset(),t}},Ip=1/0,Hp=Ip,Bp=-Ip,Np=Bp,Fp={point:function(t,e){t<Ip&&(Ip=t),t>Bp&&(Bp=t),e<Hp&&(Hp=e),e>Np&&(Np=e)},lineStart:aa,lineEnd:aa,polygonStart:aa,polygonEnd:aa,result:function(){var t=[[Ip,Hp],[Bp,Np]]
return Bp=Np=-(Hp=Ip=1/0),t}},Yp=0,Vp=0,Wp=0,Up=0,Xp=0,Gp=0,qp=0,Zp=0,Qp=0,Kp={point:fi,lineStart:pi,lineEnd:vi,polygonStart:function(){Kp.lineStart=mi,Kp.lineEnd=xi},polygonEnd:function(){Kp.point=fi,Kp.lineStart=pi,Kp.lineEnd=vi},result:function(){var t=Qp?[qp/Qp,Zp/Qp]:Gp?[Up/Gp,Xp/Gp]:Wp?[Yp/Wp,Vp/Wp]:[NaN,NaN]
return Yp=Vp=Wp=Up=Xp=Gp=qp=Zp=Qp=0,t}}
Ci.prototype={_radius:4.5,pointRadius:function(t){return this._radius=t,this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._context.closePath(),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._context.moveTo(t,e),this._point=1
break
case 1:this._context.lineTo(t,e)
break
default:this._context.moveTo(t+this._radius,e),this._context.arc(t,e,this._radius,0,Tf)}},result:aa}
var $p,Jp,tg,eg,ng,rg=Ud(),ag={point:aa,lineStart:function(){ag.point=ki},lineEnd:function(){$p&&Si(Jp,tg),ag.point=aa},polygonStart:function(){$p=!0},polygonEnd:function(){$p=null},result:function(){var t=+rg
return rg.reset(),t}}
Oi.prototype={_radius:4.5,_circle:Ai(4.5),pointRadius:function(t){return(t=+t)!==this._radius&&(this._radius=t,this._circle=null),this},polygonStart:function(){this._line=0},polygonEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){0===this._line&&this._string.push("Z"),this._point=NaN},point:function(t,e){switch(this._point){case 0:this._string.push("M",t,",",e),this._point=1
break
case 1:this._string.push("L",t,",",e)
break
default:null==this._circle&&(this._circle=Ai(this._radius)),this._string.push("M",t,",",e,this._circle)}},result:function(){if(this._string.length){var t=this._string.join("")
return this._string=[],t}return null}}
Pi.prototype={constructor:Pi,point:function(t,e){this.stream.point(t,e)},sphere:function(){this.stream.sphere()},lineStart:function(){this.stream.lineStart()},lineEnd:function(){this.stream.lineEnd()},polygonStart:function(){this.stream.polygonStart()},polygonEnd:function(){this.stream.polygonEnd()}}
var ig=16,og=Rf(30*Ef),lg=function(t,e){return+e?function(t,e){function n(r,a,i,o,l,s,u,c,h,d,f,p,g,y){var v=u-r,m=c-a,x=v*v+m*m
if(x>4*e&&g--){var b=o+d,w=l+f,C=s+p,k=Yf(b*b+w*w+C*C),S=na(C/=k),O=Lf(Lf(C)-1)<Of||Lf(i-h)<Of?(i+h)/2:Df(w,b),A=t(O,S),_=A[0],P=A[1],T=_-r,M=P-a,E=m*T-v*M;(E*E/x>e||Lf((v*T+m*M)/x-.5)>.3||o*d+l*f+s*p<og)&&(n(r,a,i,o,l,s,_,P,O,b/=k,w/=k,C,g,y),y.point(_,P),n(_,P,O,b,w,C,u,c,h,d,f,p,g,y))}}return function(e){function r(n,r){n=t(n,r),e.point(n[0],n[1])}function a(){v=NaN,C.point=i,e.lineStart()}function i(r,a){var i=fa([r,a]),o=t(r,a)
n(v,m,y,x,b,w,v=o[0],m=o[1],y=r,x=i[0],b=i[1],w=i[2],ig,e),e.point(v,m)}function o(){C.point=r,e.lineEnd()}function l(){a(),C.point=s,C.lineEnd=u}function s(t,e){i(c=t,e),h=v,d=m,f=x,p=b,g=w,C.point=i}function u(){n(v,m,y,x,b,w,h,d,c,f,p,g,ig,e),C.lineEnd=o,o()}var c,h,d,f,p,g,y,v,m,x,b,w,C={point:r,lineStart:a,lineEnd:o,polygonStart:function(){e.polygonStart(),C.lineStart=l},polygonEnd:function(){e.polygonEnd(),C.lineStart=a}}
return C}}(t,e):function(t){return _i({point:function(e,n){e=t(e,n),this.stream.point(e[0],e[1])}})}(t)},sg=_i({point:function(t,e){this.stream.point(t*Ef,e*Ef)}}),ug=function(){return Ii(Hi).scale(155.424).center([0,33.6442])},cg=function(){return ug().parallels([29.5,45.5]).scale(1070).translate([480,250]).rotate([96,0]).center([-.6,38.7])},hg=Bi(function(t){return Yf(2/(1+t))})
hg.invert=Ni(function(t){return 2*na(t/2)})
var dg=Bi(function(t){return(t=ea(t))&&t/Nf(t)})
dg.invert=Ni(function(t){return t})
Fi.invert=function(t,e){return[t,2*zf(If(e))-_f]}
Ui.invert=Ui
var fg=1.340264,pg=-.081106,gg=893e-6,yg=.003796,vg=Yf(3)/2
Gi.invert=function(t,e){for(var n,r,a,i=e,o=i*i,l=o*o*o,s=0;s<12&&(r=i*(fg+pg*o+l*(gg+yg*o))-e,a=fg+3*pg*o+l*(7*gg+9*yg*o),i-=n=r/a,o=i*i,l=o*o*o,!(Lf(n)<1e-12));++s);return[vg*t*(fg+3*pg*o+l*(7*gg+9*yg*o))/Rf(i),na(Nf(i)/vg)]}
qi.invert=Ni(zf)
Qi.invert=function(t,e){var n,r=e,a=25
do{var i=r*r,o=i*i
r-=n=(r*(1.007226+i*(.015085+o*(.028874*i-.044475-.005916*o)))-e)/(1.007226+i*(.045255+o*(.259866*i-.311325-.005916*11*o)))}while(Lf(n)>Of&&--a>0)
return[t/(.8707+(i=r*r)*(i*(i*i*i*(.003971-.001529*i)-.013791)-.131979)),r]}
Ki.invert=Ni(na)
$i.invert=Ni(function(t){return 2*zf(t)})
Ji.invert=function(t,e){return[-e,2*zf(If(t))-_f]}
var mg=Math.abs,xg=Math.atan,bg=Math.atan2,wg=Math.cos,Cg=Math.exp,kg=Math.floor,Sg=Math.log,Og=Math.max,Ag=Math.min,_g=(Math.pow,Math.round,Math.sign||function(t){return t>0?1:t<0?-1:0}),Pg=Math.sin,Tg=Math.tan,Mg=1e-6,Eg=Math.PI,Lg=Eg/2,zg=Eg/4,Dg=(Math.SQRT1_2,no(2)),Rg=no(Eg),jg=2*Eg,Ig=180/Eg,Hg=Eg/180
ao.invert=function(t,e){if(!(t*t+4*e*e>Eg*Eg+Mg)){var n=t,r=e,a=25
do{var i,o=Pg(n),l=Pg(n/2),s=wg(n/2),u=Pg(r),c=wg(r),h=Pg(2*r),d=u*u,f=c*c,p=l*l,g=1-f*s*s,y=g?eo(c*s)*no(i=1/g):i=0,v=2*y*c*l-t,m=y*u-e,x=i*(f*p+y*c*s*d),b=i*(.5*o*h-2*y*u*l),w=.25*i*(h*l-y*u*f*o),C=i*(d*s+y*p*c),k=b*w-C*x
if(!k)break
var S=(m*b-v*C)/k,O=(v*w-m*x)/k
n-=S,r-=O}while((mg(S)>Mg||mg(O)>Mg)&&--a>0)
return[n,r]}};(function(t,e){var n=Tg(e/2),r=no(1-n*n),a=1+r*wg(t/=2),i=Pg(t)*r/a,o=n/a,l=i*i,s=o*o
return[4/3*i*(3+l-3*s),4/3*o*(3+3*l-s)]}).invert=function(t,e){if(t*=3/8,e*=3/8,!t&&mg(e)>1)return null
var n=1+t*t+e*e,r=no((n-no(n*n-4*e*e))/2),a=to(r)/3,i=r?function(t){return Sg(t+no(t*t-1))}(mg(e/r))/3:function(t){return Sg(t+no(t*t+1))}(mg(t))/3,o=wg(a),l=function(t){return(Cg(t)+Cg(-t))/2}(i),s=l*l-o*o
return[2*_g(t)*bg(function(t){return(Cg(t)-Cg(-t))/2}(i)*o,.25-s),2*_g(e)*bg(l*Pg(a),.25+s)]},no(8),Sg(1+Dg),lo.invert=function(t,e){var n=2*to(e/2)
return[t*wg(n/2)/wg(n),n]}
var Bg=(so(Dg/Lg,Dg,Eg),function(t){var e=0,n=ji(t),r=n(e)
return r.parallel=function(t){return arguments.length?n(e=t*Hg):e*Ig},r});(function(t,e){return[t*wg(e),e]}).invert=function(t,e){return[t/wg(e),e]},so(1,4/Eg,Eg),po.invert=function(t,e){var n=(n=e/Rg-1)*n
return[n>0?t*no(Eg/n)/2:0,to(1-n)]}
yo.invert=function(t,e){var n=no(Eg*(4+Eg))/2
return[t*n/(1+no(1-e*e*(4+Eg)/(4*Eg))),e*n/2]}
vo.invert=function(t,e){var n=e*no((4+Eg)/Eg)/2,r=to(n),a=wg(r)
return[t/(2/no(Eg*(4+Eg))*(1+a)),to((r+n*(a+2))/(2+Lg))]}
mo.invert=function(t,e){var n=no(2+Eg),r=e*n/2
return[n*t/(1+wg(r)),r]}
xo.invert=function(t,e){var n=1+Lg,r=no(n/2)
return[2*t*r/(1+wg(e*=r)),to((e+Pg(e))/n)]}
var Ng=wg(35*Hg)
bo.invert=function(t,e){var n=e/(1+Ng)
return[t&&t/(Ng*no(1-n*n)),2*xg(n)]}
var Fg=function(t,e,n,r,a,i,o,l){function s(s,u){if(!u)return[t*s/Eg,0]
var c=u*u,h=t+c*(e+c*(n+c*r)),d=u*(a-1+c*(i-l+c*o)),f=(h*h+d*d)/(2*d),p=s*to(h/f)/Eg
return[f*Pg(p),u*(1+c*l)+f*(1-wg(p))]}return arguments.length<8&&(l=0),s.invert=function(s,u){var c,h,d=Eg*s/t,f=u,p=50
do{var g=f*f,y=t+g*(e+g*(n+g*r)),v=f*(a-1+g*(i-l+g*o)),m=y*y+v*v,x=2*v,b=m/x,w=b*b,C=to(y/b)/Eg,k=d*C,S=y*y,O=(2*e+g*(4*n+6*g*r))*f,A=a+g*(3*i+5*g*o),_=(2*(y*O+v*(A-1))*x-m*(2*(A-1)))/(x*x),P=wg(k),T=Pg(k),M=b*P,E=b*T,L=d/Eg*(1/no(1-S/w))*(O*b-y*_)/w,z=E-s,D=f*(1+g*l)+b-M-u,R=_*T+M*L,j=M*C,I=1+_-(_*P-E*L),H=E*C,B=R*H-I*j
if(!B)break
d-=c=(D*R-z*I)/B,f-=h=(z*H-D*j)/B}while((mg(c)>Mg||mg(h)>Mg)&&--p>0)
return[d,f]},s},Yg=Fg(2.8284,-1.6988,.75432,-.18071,1.76003,-.38914,.042555),Vg=Fg(2.583819,-.835827,.170354,-.038094,1.543313,-.411435,.082742),Wg=Fg(5/6*Eg,-.62636,-.0344,0,1.3493,-.05524,0,.045)
wo.invert=function(t,e){var n,r=t,a=e,i=50
do{var o=a*a
a-=n=(a*(1+o/12)-e)/(1+o/4)}while(mg(n)>Mg&&--i>0)
i=50,t/=1-.162388*o
do{var l=(l=r*r)*l
r-=n=(r*(.87-952426e-9*l)-t)/(.87-.00476213*l)}while(mg(n)>Mg&&--i>0)
return[r,a]}
var Ug=Fg(2.6516,-.76534,.19123,-.047094,1.36289,-.13965,.031762)
!function(t){var e=wg(0);(function(t,n){return[t*e,Pg(n)/e]}).invert=function(t,n){return[t/e,to(n*e)]}}(),Co.invert=function(t,e){return[jg/3*t/no(Eg*Eg/3-e*e),e]}
ko.invert=function(t,e){return[t,2.5*xg(Cg(.8*e))-.625*Eg]}
var Xg=[[0,90],[-90,0],[0,0],[90,0],[180,0],[0,-90]],Gg=([[0,2,1],[0,3,2],[5,1,2],[5,2,3],[0,1,4],[0,4,3],[5,4,1],[5,3,4]].map(function(t){return t.map(function(t){return Xg[t]})}),2/no(3));(function(t,e){var n=po(t,e)
return[n[0]*Gg,n[1]]}).invert=function(t,e){return po.invert(t/Gg,e)}
var qg=function(){},Zg=[],Qg=[],Kg={point:function(t,e){Zg.push([t,e])},result:function(){var t=Zg.length?Zg.length<2?{type:"Point",coordinates:Zg[0]}:{type:"MultiPoint",coordinates:Zg}:null
return Zg=[],t}},$g={lineStart:qg,point:function(t,e){Zg.push([t,e])},lineEnd:function(){Zg.length&&(Qg.push(Zg),Zg=[])},result:function(){var t=Qg.length?Qg.length<2?{type:"LineString",coordinates:Qg[0]}:{type:"MultiLineString",coordinates:Qg}:null
return Qg=[],t}},Jg={polygonStart:qg,lineStart:qg,point:function(t,e){Zg.push([t,e])},lineEnd:function(){var t=Zg.length
if(t){do{Zg.push(Zg[0].slice())}while(++t<4)
Qg.push(Zg),Zg=[]}},polygonEnd:qg,result:function(){if(!Qg.length)return null
var t=[],e=[]
return Qg.forEach(function(n){!function(t){if((e=t.length)<4)return!1
for(var e,n=0,r=t[e-1][1]*t[0][0]-t[e-1][0]*t[0][1];++n<e;)r+=t[n-1][1]*t[n][0]-t[n-1][0]*t[n][1]
return r<=0}(n)?e.push(n):t.push([n])}),e.forEach(function(e){var n=e[0]
t.some(function(t){if(function(t,e){for(var n=e[0],r=e[1],a=!1,i=0,o=t.length,l=o-1;i<o;l=i++){var s=t[i],u=s[0],c=s[1],h=t[l],d=h[0],f=h[1]
c>r^f>r&&n<(d-u)*(r-c)/(f-c)+u&&(a=!a)}return a}(t[0],n))return t.push(e),!0})||t.push([e])}),Qg=[],t.length?t.length>1?{type:"MultiPolygon",coordinates:t}:{type:"Polygon",coordinates:t[0]}:null}},ty=[[.9986,-.062],[1,0],[.9986,.062],[.9954,.124],[.99,.186],[.9822,.248],[.973,.31],[.96,.372],[.9427,.434],[.9216,.4958],[.8962,.5571],[.8679,.6176],[.835,.6769],[.7986,.7346],[.7597,.7903],[.7186,.8435],[.6732,.8936],[.6213,.9394],[.5722,.9761],[.5322,1]]
ty.forEach(function(t){t[1]*=1.0144}),_o.invert=function(t,e){var n=e/Lg,r=90*n,a=Ag(18,mg(r/5)),i=Og(0,kg(a))
do{var o=ty[i][1],l=ty[i+1][1],s=ty[Ag(19,i+2)][1],u=s-o,c=s-2*l+o,h=2*(mg(n)-l)/u,d=c/u,f=h*(1-d*h*(1-2*d*h))
if(f>=0||1===i){r=(e>=0?5:-5)*(f+a)
var p,g=50
do{f=(a=Ag(18,mg(r)/5))-(i=kg(a)),o=ty[i][1],l=ty[i+1][1],s=ty[Ag(19,i+2)][1],r-=(p=(e>=0?Lg:-Lg)*(l+f*(s-o)/2+f*f*(s-2*l+o)/2)-e)*Ig}while(mg(p)>1e-12&&--g>0)
break}}while(--i>=0)
var y=ty[i][0],v=ty[i+1][0],m=ty[Ag(19,i+2)][0]
return[t/(v+f*(m-y)/2+f*f*(m-2*v+y)/2),r*Hg]}
var ey=1e4,ny=-180,ry=ny+1e-4,ay=180,iy=ay-1e-4,oy=-90,ly=oy+1e-4,sy=90,uy=sy-1e-4,cy=4*Eg+3*no(3),hy=2*no(2*Eg*no(3)/cy),dy=so(hy*no(3)/Eg,hy,cy/6)
Io.invert=function(t,e){return[t/no(1-3*e*e/(Eg*Eg)),e]}
var fy=Math.acos,py=Math.asin,gy=Math.atan2,yy=Math.cos,vy=Math.max,my=Math.min,xy=Math.PI,by=Math.sin,wy=Math.sqrt,Cy=xy/180,ky=180/xy,Sy=function(t){var e=t[0]/2*Cy,n=by(e),r=yy(e),a=t[1]/2*Cy,i=by(a),o=yy(a),l=t[2]/2*Cy,s=by(l),u=yy(l)
return[r*o*u+n*i*s,n*o*u-r*i*s,r*i*u+n*o*s,r*o*s-n*i*u]}
Sy.cartesian=function(t){var e=t[0]*Cy,n=t[1]*Cy,r=yy(n)
return[r*yy(e),r*by(e),by(n)]},Sy.rotation=function(t){return[gy(2*(t[0]*t[1]+t[2]*t[3]),1-2*(t[1]*t[1]+t[2]*t[2]))*ky,py(vy(-1,my(1,2*(t[0]*t[2]-t[3]*t[1]))))*ky,gy(2*(t[0]*t[3]+t[1]*t[2]),1-2*(t[2]*t[2]+t[3]*t[3]))*ky]},Sy.delta=function(t,e,n){2==arguments.length&&(n=1)
var r=function(t,e){return[t[1]*e[2]-t[2]*e[1],t[2]*e[0]-t[0]*e[2],t[0]*e[1]-t[1]*e[0]]}(t,e),a=wy(Ho(r,r))
if(!a)return[1,0,0,0]
var i=n*fy(vy(-1,my(1,Ho(t,e))))/2,o=by(i)
return[yy(i),r[2]/a*o,-r[1]/a*o,r[0]/a*o]},Sy.multiply=function(t,e){return[t[0]*e[0]-t[1]*e[1]-t[2]*e[2]-t[3]*e[3],t[0]*e[1]+t[1]*e[0]+t[2]*e[3]-t[3]*e[2],t[0]*e[2]-t[1]*e[3]+t[2]*e[0]+t[3]*e[1],t[0]*e[3]+t[1]*e[2]-t[2]*e[1]+t[3]*e[0]]}
var Oy=function(t){return t},Ay=function(t){if(null==t)return Oy
var e,n,r=t.scale[0],a=t.scale[1],i=t.translate[0],o=t.translate[1]
return function(t,l){l||(e=n=0)
var s=2,u=t.length,c=new Array(u)
for(c[0]=(e+=t[0])*r+i,c[1]=(n+=t[1])*a+o;s<u;)c[s]=t[s],++s
return c}},_y=function(t){function e(t){(t=a(t))[0]<i&&(i=t[0]),t[0]>l&&(l=t[0]),t[1]<o&&(o=t[1]),t[1]>s&&(s=t[1])}function n(t){switch(t.type){case"GeometryCollection":t.geometries.forEach(n)
break
case"Point":e(t.coordinates)
break
case"MultiPoint":t.coordinates.forEach(e)}}var r,a=Ay(t.transform),i=1/0,o=i,l=-i,s=-i
t.arcs.forEach(function(t){for(var e,n=-1,r=t.length;++n<r;)(e=a(t[n],n))[0]<i&&(i=e[0]),e[0]>l&&(l=e[0]),e[1]<o&&(o=e[1]),e[1]>s&&(s=e[1])})
for(r in t.objects)n(t.objects[r])
return[i,o,l,s]},Py=function(t,e){for(var n,r=t.length,a=r-e;a<--r;)n=t[a],t[a++]=t[r],t[r]=n},Ty=function(t,e){function n(t,e){for(var n in t){var a=t[n]
delete e[a.start],delete a.start,delete a.end,a.forEach(function(t){r[t<0?~t:t]=1}),o.push(a)}}var r={},a={},i={},o=[],l=-1
return e.forEach(function(n,r){var a,i=t.arcs[n<0?~n:n]
i.length<3&&!i[1][0]&&!i[1][1]&&(a=e[++l],e[l]=n,e[r]=a)}),e.forEach(function(e){var n,r,o=function(e){var n,r=t.arcs[e<0?~e:e],a=r[0]
return t.transform?(n=[0,0],r.forEach(function(t){n[0]+=t[0],n[1]+=t[1]})):n=r[r.length-1],e<0?[n,a]:[a,n]}(e),l=o[0],s=o[1]
if(n=i[l])if(delete i[n.end],n.push(e),n.end=s,r=a[s]){delete a[r.start]
var u=r===n?n:n.concat(r)
a[u.start=n.start]=i[u.end=r.end]=u}else a[n.start]=i[n.end]=n
else if(n=a[s])if(delete a[n.start],n.unshift(e),n.start=l,r=i[l]){delete i[r.end]
var c=r===n?n:r.concat(n)
a[c.start=r.start]=i[c.end=n.end]=c}else a[n.start]=i[n.end]=n
else n=[e],a[n.start=l]=i[n.end=s]=n}),n(i,a),n(a,i),e.forEach(function(t){r[t<0?~t:t]||o.push([t])}),o},My=function(t,e){for(var n=0,r=t.length;n<r;){var a=n+r>>>1
t[a]<e?n=a+1:r=a}return n},Ey=function(t){if(null==t)return Oy
var e,n,r=t.scale[0],a=t.scale[1],i=t.translate[0],o=t.translate[1]
return function(t,l){l||(e=n=0)
var s=2,u=t.length,c=new Array(u),h=Math.round((t[0]-i)/r),d=Math.round((t[1]-o)/a)
for(c[0]=h-e,e=h,c[1]=d-n,n=d;s<u;)c[s]=t[s],++s
return c}},Ly=Object.freeze({bbox:_y,feature:function(t,e){return"GeometryCollection"===e.type?{type:"FeatureCollection",features:e.geometries.map(function(e){return Bo(t,e)})}:Bo(t,e)},mesh:function(t){return No(t,Fo.apply(this,arguments))},meshArcs:Fo,merge:function(t){return No(t,Yo.apply(this,arguments))},mergeArcs:Yo,neighbors:function(t){function e(t,e){t.forEach(function(t){t<0&&(t=~t)
var n=a[t]
n?n.push(e):a[t]=[e]})}function n(t,n){t.forEach(function(t){e(t,n)})}function r(t,e){"GeometryCollection"===t.type?t.geometries.forEach(function(t){r(t,e)}):t.type in o&&o[t.type](t.arcs,e)}var a={},i=t.map(function(){return[]}),o={LineString:e,MultiLineString:n,Polygon:n,MultiPolygon:function(t,e){t.forEach(function(t){n(t,e)})}}
t.forEach(r)
for(var l in a)for(var s=a[l],u=s.length,c=0;c<u;++c)for(var h=c+1;h<u;++h){var d,f=s[c],p=s[h];(d=i[f])[l=My(d,p)]!==p&&d.splice(l,0,p),(d=i[p])[l=My(d,f)]!==f&&d.splice(l,0,f)}return i},quantize:function(t,e){function n(t){return h(t)}function r(t){var e
switch(t.type){case"GeometryCollection":e={type:"GeometryCollection",geometries:t.geometries.map(r)}
break
case"Point":e={type:"Point",coordinates:n(t.coordinates)}
break
case"MultiPoint":e={type:"MultiPoint",coordinates:t.coordinates.map(n)}
break
default:return t}return null!=t.id&&(e.id=t.id),null!=t.bbox&&(e.bbox=t.bbox),null!=t.properties&&(e.properties=t.properties),e}if(t.transform)throw new Error("already quantized")
if(e&&e.scale)u=t.bbox
else{if(!((a=Math.floor(e))>=2))throw new Error("n must be ≥2")
var a,i=(u=t.bbox||_y(t))[0],o=u[1],l=u[2],s=u[3]
e={scale:[l-i?(l-i)/(a-1):1,s-o?(s-o)/(a-1):1],translate:[i,o]}}var u,c,h=Ey(e),d=t.objects,f={}
for(c in d)f[c]=r(d[c])
return{type:"Topology",bbox:u,transform:e,objects:f,arcs:t.arcs.map(function(t){var e,n=0,r=1,a=t.length,i=new Array(a)
for(i[0]=h(t[0],0);++n<a;)((e=h(t[n],n))[0]||e[1])&&(i[r++]=e)
return 1===r&&(i[r++]=[0,0]),i.length=r,i})}},transform:Ay,untransform:Ey})
t.topojson=Ly,t.bisect=Xo,t.bisectRight=Xo,t.bisectLeft=Go,t.ascending=Vo,t.bisector=Wo,t.descending=function(t,e){return e<t?-1:e>t?1:e>=t?0:NaN},t.extent=function(t,e){var n,r,a,i=t.length,o=-1
if(null==e){for(;++o<i;)if(null!=(n=t[o])&&n>=n)for(r=a=n;++o<i;)null!=(n=t[o])&&(r>n&&(r=n),a<n&&(a=n))}else for(;++o<i;)if(null!=(n=e(t[o],o,t))&&n>=n)for(r=a=n;++o<i;)null!=(n=e(t[o],o,t))&&(r>n&&(r=n),a<n&&(a=n))
return[r,a]},t.max=function(t,e){var n,r,a=t.length,i=-1
if(null==e){for(;++i<a;)if(null!=(n=t[i])&&n>=n)for(r=n;++i<a;)null!=(n=t[i])&&n>r&&(r=n)}else for(;++i<a;)if(null!=(n=e(t[i],i,t))&&n>=n)for(r=n;++i<a;)null!=(n=e(t[i],i,t))&&n>r&&(r=n)
return r},t.min=function(t,e){var n,r,a=t.length,i=-1
if(null==e){for(;++i<a;)if(null!=(n=t[i])&&n>=n)for(r=n;++i<a;)null!=(n=t[i])&&r>n&&(r=n)}else for(;++i<a;)if(null!=(n=e(t[i],i,t))&&n>=n)for(r=n;++i<a;)null!=(n=e(t[i],i,t))&&r>n&&(r=n)
return r},t.merge=nl,t.range=Qo,t.scan=function(t,e){if(n=t.length){var n,r,a=0,i=0,o=t[i]
for(null==e&&(e=Vo);++a<n;)(e(r=t[a],o)<0||0!==e(o,o))&&(o=r,i=a)
return 0===e(o,o)?i:void 0}},t.sum=function(t,e){var n,r=t.length,a=-1,i=0
if(null==e)for(;++a<r;)(n=+t[a])&&(i+=n)
else for(;++a<r;)(n=+e(t[a],a,t))&&(i+=n)
return i},t.ticks=tl,t.tickIncrement=e,t.tickStep=n,t.set=o,t.map=a,t.keys=function(t){var e=[]
for(var n in t)e.push(n)
return e},t.values=function(t){var e=[]
for(var n in t)e.push(t[n])
return e},t.csvParse=lc,t.csvParseRows=sc,t.request=cc,t.json=dc,t.scaleBand=Ie,t.scalePoint=function(){return He(Ie().paddingInner(1))},t.scaleLinear=Ye,t.scaleOrdinal=je,t.scaleQuantile=Ve,t.scaleTime=function(){return lr(_h,Oh,hh,uh,lh,ih,rh,Jc,t.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},t.scaleUtc=function(){return lr(Kh,Zh,Rh,zh,Eh,Th,rh,Jc,t.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},t.arc=function(){function t(){var t,u,c=+e.apply(this,arguments),h=+n.apply(this,arguments),d=i.apply(this,arguments)-Od,f=o.apply(this,arguments)-Od,p=yd(f-d),g=f>d
if(s||(s=t=Re()),h<c&&(u=h,h=c,c=u),h>kd)if(p>Ad-kd)s.moveTo(h*md(d),h*wd(d)),s.arc(0,0,h,d,f,!g),c>kd&&(s.moveTo(c*md(f),c*wd(f)),s.arc(0,0,c,f,d,g))
else{var y,v,m=d,x=f,b=d,w=f,C=p,k=p,S=l.apply(this,arguments)/2,O=S>kd&&(a?+a.apply(this,arguments):Cd(c*c+h*h)),A=bd(yd(h-c)/2,+r.apply(this,arguments)),_=A,P=A
if(O>kd){var T=sr(O/c*wd(S)),M=sr(O/h*wd(S));(C-=2*T)>kd?(T*=g?1:-1,b+=T,w-=T):(C=0,b=w=(d+f)/2),(k-=2*M)>kd?(M*=g?1:-1,m+=M,x-=M):(k=0,m=x=(d+f)/2)}var E=h*md(m),L=h*wd(m),z=c*md(w),D=c*wd(w)
if(A>kd){var R=h*md(x),j=h*wd(x),I=c*md(b),H=c*wd(b)
if(p<Sd){var B=C>kd?function(t,e,n,r,a,i,o,l){var s=n-t,u=r-e,c=o-a,h=l-i,d=(c*(e-i)-h*(t-a))/(h*s-c*u)
return[t+d*s,e+d*u]}(E,L,I,H,R,j,z,D):[z,D],N=E-B[0],F=L-B[1],Y=R-B[0],V=j-B[1],W=1/wd(function(t){return t>1?0:t<-1?Sd:Math.acos(t)}((N*Y+F*V)/(Cd(N*N+F*F)*Cd(Y*Y+V*V)))/2),U=Cd(B[0]*B[0]+B[1]*B[1])
_=bd(A,(c-U)/(W-1)),P=bd(A,(h-U)/(W+1))}}k>kd?P>kd?(y=pr(I,H,E,L,h,P,g),v=pr(R,j,z,D,h,P,g),s.moveTo(y.cx+y.x01,y.cy+y.y01),P<A?s.arc(y.cx,y.cy,P,vd(y.y01,y.x01),vd(v.y01,v.x01),!g):(s.arc(y.cx,y.cy,P,vd(y.y01,y.x01),vd(y.y11,y.x11),!g),s.arc(0,0,h,vd(y.cy+y.y11,y.cx+y.x11),vd(v.cy+v.y11,v.cx+v.x11),!g),s.arc(v.cx,v.cy,P,vd(v.y11,v.x11),vd(v.y01,v.x01),!g))):(s.moveTo(E,L),s.arc(0,0,h,m,x,!g)):s.moveTo(E,L),c>kd&&C>kd?_>kd?(y=pr(z,D,R,j,c,-_,g),v=pr(E,L,I,H,c,-_,g),s.lineTo(y.cx+y.x01,y.cy+y.y01),_<A?s.arc(y.cx,y.cy,_,vd(y.y01,y.x01),vd(v.y01,v.x01),!g):(s.arc(y.cx,y.cy,_,vd(y.y01,y.x01),vd(y.y11,y.x11),!g),s.arc(0,0,c,vd(y.cy+y.y11,y.cx+y.x11),vd(v.cy+v.y11,v.cx+v.x11),g),s.arc(v.cx,v.cy,_,vd(v.y11,v.x11),vd(v.y01,v.x01),!g))):s.arc(0,0,c,w,b,g):s.lineTo(z,D)}else s.moveTo(0,0)
if(s.closePath(),t)return s=null,t+""||null}var e=ur,n=cr,r=gd(0),a=null,i=hr,o=dr,l=fr,s=null
return t.centroid=function(){var t=(+e.apply(this,arguments)+ +n.apply(this,arguments))/2,r=(+i.apply(this,arguments)+ +o.apply(this,arguments))/2-Sd/2
return[md(r)*t,wd(r)*t]},t.innerRadius=function(n){return arguments.length?(e="function"==typeof n?n:gd(+n),t):e},t.outerRadius=function(e){return arguments.length?(n="function"==typeof e?e:gd(+e),t):n},t.cornerRadius=function(e){return arguments.length?(r="function"==typeof e?e:gd(+e),t):r},t.padRadius=function(e){return arguments.length?(a=null==e?null:"function"==typeof e?e:gd(+e),t):a},t.startAngle=function(e){return arguments.length?(i="function"==typeof e?e:gd(+e),t):i},t.endAngle=function(e){return arguments.length?(o="function"==typeof e?e:gd(+e),t):o},t.padAngle=function(e){return arguments.length?(l="function"==typeof e?e:gd(+e),t):l},t.context=function(e){return arguments.length?(s=null==e?null:e,t):s},t},t.area=Td,t.line=Pd,t.pie=function(){function t(t){var l,s,u,c,h,d=t.length,f=0,p=new Array(d),g=new Array(d),y=+a.apply(this,arguments),v=Math.min(Ad,Math.max(-Ad,i.apply(this,arguments)-y)),m=Math.min(Math.abs(v)/d,o.apply(this,arguments)),x=m*(v<0?-1:1)
for(l=0;l<d;++l)(h=g[p[l]=l]=+e(t[l],l,t))>0&&(f+=h)
for(null!=n?p.sort(function(t,e){return n(g[t],g[e])}):null!=r&&p.sort(function(e,n){return r(t[e],t[n])}),l=0,u=f?(v-d*x)/f:0;l<d;++l,y=c)s=p[l],h=g[s],c=y+(h>0?h*u:0)+x,g[s]={data:t[s],index:l,value:h,startAngle:y,endAngle:c,padAngle:m}
return g}var e=Ed,n=Md,r=null,a=gd(0),i=gd(Ad),o=gd(0)
return t.value=function(n){return arguments.length?(e="function"==typeof n?n:gd(+n),t):e},t.sortValues=function(e){return arguments.length?(n=e,r=null,t):n},t.sort=function(e){return arguments.length?(r=e,n=null,t):r},t.startAngle=function(e){return arguments.length?(a="function"==typeof e?e:gd(+e),t):a},t.endAngle=function(e){return arguments.length?(i="function"==typeof e?e:gd(+e),t):i},t.padAngle=function(e){return arguments.length?(o="function"==typeof e?e:gd(+e),t):o},t},t.areaRadial=Dd,t.radialArea=Dd,t.lineRadial=zd,t.radialLine=zd,t.pointRadial=function(t,e){return[(e=+e)*Math.cos(t-=Math.PI/2),e*Math.sin(t)]},t.curveLinear=_d,t.curveLinearClosed=function(t){return new Lr(t)},t.curveCardinal=Id,t.curveCardinalClosed=Hd,t.curveMonotoneX=function(t){return new Ir(t)},t.curveMonotoneY=function(t){return new Hr(t)},t.curveStepAfter=function(t){return new Nr(t,1)},t.curveStepBefore=function(t){return new Nr(t,0)},t.stack=function(){function t(t){var i,o,l=e.apply(this,arguments),s=t.length,u=l.length,c=new Array(u)
for(i=0;i<u;++i){for(var h,d=l[i],f=c[i]=new Array(s),p=0;p<s;++p)f[p]=h=[0,+a(t[p],d,p,t)],h.data=t[p]
f.key=d}for(i=0,o=n(c);i<u;++i)c[o[i]].index=i
return r(c,o),c}var e=gd([]),n=Nd,r=Bd,a=Fr
return t.keys=function(n){return arguments.length?(e="function"==typeof n?n:gd(Rd.call(n)),t):e},t.value=function(e){return arguments.length?(a="function"==typeof e?e:gd(+e),t):a},t.order=function(e){return arguments.length?(n=null==e?Nd:"function"==typeof e?e:gd(Rd.call(e)),t):n},t.offset=function(e){return arguments.length?(r=null==e?Bd:e,t):r},t},t.geoStitch=function(t){if(null==t)return t
switch(t.type){case"Feature":return Ro(t)
case"FeatureCollection":var e={type:"FeatureCollection",features:t.features.map(Ro)}
return null!=t.bbox&&(e.bbox=t.bbox),e
default:return jo(t)}},t.geoProject=function(t,e){var n,r=e.stream
if(!r)throw new Error("invalid projection")
switch(t&&t.type){case"Feature":n=Oo
break
case"FeatureCollection":n=So
break
default:n=Ao}return n(t,r)},t.geoQuantize=function(t,e){function n(t){var n=t.length,r=2,a=new Array(n)
for(a[0]=+t[0].toFixed(e),a[1]=+t[1].toFixed(e);r<n;)a[r]=t[r],++r
return a}function r(t){return t.map(n)}function a(t){return t.map(r)}function i(t){if(null==t)return t
var e
switch(t.type){case"GeometryCollection":e={type:"GeometryCollection",geometries:t.geometries.map(i)}
break
case"Point":e={type:"Point",coordinates:n(t.coordinates)}
break
case"MultiPoint":case"LineString":e={type:t.type,coordinates:r(t.coordinates)}
break
case"MultiLineString":case"Polygon":e={type:t.type,coordinates:a(t.coordinates)}
break
case"MultiPolygon":e={type:"MultiPolygon",coordinates:t.coordinates.map(a)}
break
default:return t}return null!=t.bbox&&(e.bbox=t.bbox),e}function o(t){var e={type:"Feature",properties:t.properties,geometry:i(t.geometry)}
return null!=t.id&&(e.id=t.id),null!=t.bbox&&(e.bbox=t.bbox),e}if(!(0<=(e=+e)&&e<=20))throw new Error("invalid digits")
if(null!=t)switch(t.type){case"Feature":return o(t)
case"FeatureCollection":var l={type:"FeatureCollection",features:t.features.map(o)}
return null!=t.bbox&&(l.bbox=t.bbox),l
default:return i(t)}return t},t.geoAiry=function(){var t=Lg,e=ji(ro),n=e(t)
return n.radius=function(n){return arguments.length?e(t=n*Hg):t*Ig},n.scale(179.976).clipAngle(147)},t.geoAitoff=function(){return Ri(ao).scale(152.63)},t.geoArmadillo=function(){var t=20*Hg,e=t>=0?1:-1,n=Tg(e*t),r=ji(io),a=r(t),i=a.stream
return a.parallel=function(a){return arguments.length?(n=Tg((e=(t=a*Hg)>=0?1:-1)*t),r(t)):t*Ig},a.stream=function(r){var o=a.rotate(),l=i(r),s=(a.rotate([0,0]),i(r))
return a.rotate(o),l.sphere=function(){s.polygonStart(),s.lineStart()
for(var r=-180*e;e*r<180;r+=90*e)s.point(r,90*e)
for(;e*(r-=t)>=-180;)s.point(r,e*-bg(wg(r*Hg/2),n)*Ig)
s.lineEnd(),s.polygonEnd()},l},a.scale(218.695).center([0,28.0974])},t.geoMiller=function(){return Ri(ko).scale(108.318)},t.geoChamberlinAfrica=function(){return function(t,e,n){var r=Jf({type:"MultiPoint",coordinates:[t,e,n]}),a=[-r[0],-r[1]],i=fp(a),o=Ri(function(t,e,n){for(var r,a=[[t[0],t[1],Pg(t[1]),wg(t[1])],[e[0],e[1],Pg(e[1]),wg(e[1])],[n[0],n[1],Pg(n[1]),wg(n[1])]],i=a[2],o=0;o<3;++o,i=r)r=a[o],i.v=uo(r[1]-i[1],i[3],i[2],r[3],r[2],r[0]-i[0]),i.point=[0,0]
var l=co(a[0].v[0],a[2].v[0],a[1].v[0]),s=co(a[0].v[0],a[1].v[0],a[2].v[0]),u=Eg-l
a[2].point[1]=0,a[0].point[0]=-(a[1].point[0]=a[0].v[0]/2)
var c=[a[2].point[0]=a[0].point[0]+a[2].v[0]*wg(l),2*(a[0].point[1]=a[1].point[1]=a[2].v[0]*Pg(l))]
return function(t,e){var n,r=Pg(e),i=wg(e),o=new Array(3)
for(n=0;n<3;++n){var l=a[n]
if(o[n]=uo(e-l[1],l[3],l[2],i,r,t-l[0]),!o[n][0])return l.point
o[n][1]=ho(o[n][1]-l.v[1])}var h=c.slice()
for(n=0;n<3;++n){var d=2==n?0:n+1,f=co(a[n].v[0],o[n][0],o[d][0])
o[n][1]<0&&(f=-f),n?1==n?(f=s-f,h[0]-=o[n][0]*wg(f),h[1]-=o[n][0]*Pg(f)):(f=u-f,h[0]+=o[n][0]*wg(f),h[1]+=o[n][0]*Pg(f)):(h[0]+=o[n][0]*wg(f),h[1]-=o[n][0]*Pg(f))}return h[0]/=3,h[1]/=3,h}}(fo(i(t)),fo(i(e)),fo(i(n)))).rotate(a),l=o.center
return delete o.rotate,o.center=function(t){return arguments.length?l(i(t)):i.invert(l())},o.clipAngle(90)}([0,22],[45,22],[22.5,-22]).scale(380).center([22.5,2])},t.geoCylindricalStereographic=function(){return Bg(go).scale(124.75)},t.geoEckert3=function(){return Ri(yo).scale(180.739)},t.geoEckert4=function(){return Ri(vo).scale(180.739)},t.geoEckert5=function(){return Ri(mo).scale(173.044)},t.geoEckert6=function(){return Ri(xo).scale(173.044)},t.geoFahey=function(){return Ri(bo).scale(137.152)},t.geoGinzburg4=function(){return Ri(Yg).scale(149.995)},t.geoGinzburg5=function(){return Ri(Vg).scale(153.93)},t.geoGinzburg6=function(){return Ri(Wg).scale(130.945)},t.geoGinzburg8=function(){return Ri(wo).scale(131.747)},t.geoGinzburg9=function(){return Ri(Ug).scale(131.087)},t.geoHammer=function(){var t=2,e=ji(oo),n=e(t)
return n.coefficient=function(n){return arguments.length?e(t=+n):t},n.scale(169.529)},t.geoKavrayskiy7=function(){return Ri(Co).scale(158.837)},t.geoRobinson=function(){return Ri(_o).scale(152.63)},t.geoSatellite=function(){var t=2,e=0,n=ji(Po),r=n(t,e)
return r.distance=function(r){return arguments.length?n(t=+r,e):t},r.tilt=function(r){return arguments.length?n(t,e=r*Hg):e*Ig},r.scale(432.147).clipAngle(eo(1/t)*Ig-1e-6)},t.geoWagner4=function(){return Ri(dy).scale(176.84)},t.geoWagner6=function(){return Ri(Io).scale(152.63)},t.versor=Sy,t.axisTop=function(t){return s(ol,t)},t.axisRight=function(t){return s(ll,t)},t.axisBottom=function(t){return s(sl,t)},t.axisLeft=function(t){return s(ul,t)},t.brush=function(){return Gt(qu)},t.brushX=function(){return Gt(Xu)},t.brushY=function(){return Gt(Gu)},t.brushSelection=function(t){var e=t.__brush
return e?e.dim.output(e.selection):null},t.color=F,t.rgb=U,t.hsl=q,t.lab=$,t.hcl=at,t.cubehelix=ot,t.dispatch=u,t.drag=function(){function e(t){t.on("mousedown.drag",n).filter(m).on("touchstart.drag",i).on("touchmove.drag",o).on("touchend.drag touchcancel.drag",l).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function n(){if(!f&&p.apply(this,arguments)){var e=s("mouse",g.apply(this,arguments),Sl,this,arguments)
e&&(El(t.event.view).on("mousemove.drag",r,!0).on("mouseup.drag",a,!0),Dl(t.event.view),L(),d=!1,c=t.event.clientX,h=t.event.clientY,e("start"))}}function r(){if(zl(),!d){var e=t.event.clientX-c,n=t.event.clientY-h
d=e*e+n*n>C}x.mouse("drag")}function a(){El(t.event.view).on("mousemove.drag mouseup.drag",null),z(t.event.view,d),zl(),x.mouse("end")}function i(){if(p.apply(this,arguments)){var e,n,r=t.event.changedTouches,a=g.apply(this,arguments),i=r.length
for(e=0;e<i;++e)(n=s(r[e].identifier,a,Ll,this,arguments))&&(L(),n("start"))}}function o(){var e,n,r=t.event.changedTouches,a=r.length
for(e=0;e<a;++e)(n=x[r[e].identifier])&&(zl(),n("drag"))}function l(){var e,n,r=t.event.changedTouches,a=r.length
for(f&&clearTimeout(f),f=setTimeout(function(){f=null},500),e=0;e<a;++e)(n=x[r[e].identifier])&&(L(),n("end"))}function s(n,r,a,i,o){var l,s,u,c=a(r,n),h=b.copy()
if(v(new D(e,"beforestart",l,n,w,c[0],c[1],0,0,h),function(){return null!=(t.event.subject=l=y.apply(i,o))&&(s=l.x-c[0]||0,u=l.y-c[1]||0,!0)}))return function t(d){var f,p=c
switch(d){case"start":x[n]=t,f=w++
break
case"end":delete x[n],--w
case"drag":c=a(r,n),f=w}v(new D(e,d,l,n,f,c[0]+s,c[1]+u,c[0]-p[0],c[1]-p[1],h),h.apply,h,[d,i,o])}}var c,h,d,f,p=R,g=j,y=I,m=H,x={},b=u("start","drag","end"),w=0,C=0
return e.filter=function(t){return arguments.length?(p="function"==typeof t?t:Rl(!!t),e):p},e.container=function(t){return arguments.length?(g="function"==typeof t?t:Rl(t),e):g},e.subject=function(t){return arguments.length?(y="function"==typeof t?t:Rl(t),e):y},e.touchable=function(t){return arguments.length?(m="function"==typeof t?t:Rl(!!t),e):m},e.on=function(){var t=b.on.apply(b,arguments)
return t===b?e:t},e.clickDistance=function(t){return arguments.length?(C=(t=+t)*t,e):Math.sqrt(C)},e},t.dragDisable=Dl,t.dragEnable=z,t.easeLinear=function(t){return+t},t.easeQuad=Dt,t.easeQuadIn=function(t){return t*t},t.easeQuadOut=function(t){return t*(2-t)},t.easeQuadInOut=Dt,t.easeCubic=Rt,t.easeCubicIn=function(t){return t*t*t},t.easeCubicOut=function(t){return--t*t*t+1},t.easeCubicInOut=Rt,t.easePoly=vu,t.easePolyIn=gu,t.easePolyOut=yu,t.easePolyInOut=vu,t.easeSin=jt,t.easeSinIn=function(t){return 1-Math.cos(t*xu)},t.easeSinOut=function(t){return Math.sin(t*xu)},t.easeSinInOut=jt,t.easeExp=It,t.easeExpIn=function(t){return Math.pow(2,10*t-10)},t.easeExpOut=function(t){return 1-Math.pow(2,-10*t)},t.easeExpInOut=It,t.easeCircle=Ht,t.easeCircleIn=function(t){return 1-Math.sqrt(1-t*t)},t.easeCircleOut=function(t){return Math.sqrt(1- --t*t)},t.easeCircleInOut=Ht,t.easeBounce=Bt,t.easeBounceIn=function(t){return 1-Bt(1-t)},t.easeBounceOut=Bt,t.easeBounceInOut=function(t){return((t*=2)<=1?1-Bt(1-t):Bt(t-1)+1)/2},t.easeBack=Lu,t.easeBackIn=Mu,t.easeBackOut=Eu,t.easeBackInOut=Lu,t.easeElastic=Ru,t.easeElasticIn=Du,t.easeElasticOut=Ru,t.easeElasticInOut=ju,t.formatDefaultLocale=Kt,t.formatLocale=kc,t.formatSpecifier=Zt,t.precisionFixed=Sc,t.precisionPrefix=Oc,t.precisionRound=Ac,t.cluster=function(){function t(t){var i,o=0
t.eachAfter(function(t){var n=t.children
n?(t.x=function(t){return t.reduce(Jt,0)/t.length}(n),t.y=function(t){return 1+t.reduce(te,0)}(n)):(t.x=i?o+=e(t,i):0,t.y=0,i=t)})
var l=function(t){for(var e;e=t.children;)t=e[0]
return t}(t),s=function(t){for(var e;e=t.children;)t=e[e.length-1]
return t}(t),u=l.x-e(l,s)/2,c=s.x+e(s,l)/2
return t.eachAfter(a?function(e){e.x=(e.x-t.x)*n,e.y=(t.y-e.y)*r}:function(e){e.x=(e.x-u)/(c-u)*n,e.y=(1-(t.y?e.y/t.y:1))*r})}var e=$t,n=1,r=1,a=!1
return t.separation=function(n){return arguments.length?(e=n,t):e},t.size=function(e){return arguments.length?(a=!1,n=+e[0],r=+e[1],t):a?null:[n,r]},t.nodeSize=function(e){return arguments.length?(a=!0,n=+e[0],r=+e[1],t):a?[n,r]:null},t},t.hierarchy=ne,t.pack=function(){function t(t){return t.x=n/2,t.y=r/2,e?t.eachBefore(Ce(e)).eachAfter(ke(a,.5)).eachBefore(Se(1)):t.eachBefore(Ce(we)).eachAfter(ke(be,1)).eachAfter(ke(a,t.r/Math.min(n,r))).eachBefore(Se(Math.min(n,r)/(2*t.r))),t}var e=null,n=1,r=1,a=be
return t.radius=function(n){return arguments.length?(e=function(t){return null==t?null:xe(t)}(n),t):e},t.size=function(e){return arguments.length?(n=+e[0],r=+e[1],t):[n,r]},t.padding=function(e){return arguments.length?(a="function"==typeof e?e:Tc(+e),t):a},t},t.packSiblings=function(t){return me(t),t},t.packEnclose=Pc,t.partition=function(){function t(t){var i=t.height+1
return t.x0=t.y0=r,t.x1=e,t.y1=n/i,t.eachBefore(function(t,e){return function(n){n.children&&Ec(n,n.x0,t*(n.depth+1)/e,n.x1,t*(n.depth+2)/e)
var a=n.x0,i=n.y0,o=n.x1-r,l=n.y1-r
o<a&&(a=o=(a+o)/2),l<i&&(i=l=(i+l)/2),n.x0=a,n.y0=i,n.x1=o,n.y1=l}}(n,i)),a&&t.eachBefore(Mc),t}var e=1,n=1,r=0,a=!1
return t.round=function(e){return arguments.length?(a=!!e,t):a},t.size=function(r){return arguments.length?(e=+r[0],n=+r[1],t):[e,n]},t.padding=function(e){return arguments.length?(r=+e,t):r},t},t.stratify=function(){function t(t){var r,a,i,o,l,s,u,c=t.length,h=new Array(c),d={}
for(a=0;a<c;++a)r=t[a],l=h[a]=new oe(r),null!=(s=e(r,a,t))&&(s+="")&&(u=Lc+(l.id=s),d[u]=u in d?Dc:l)
for(a=0;a<c;++a)if(l=h[a],null!=(s=n(t[a],a,t))&&(s+="")){if(!(o=d[Lc+s]))throw new Error("missing: "+s)
if(o===Dc)throw new Error("ambiguous: "+s)
o.children?o.children.push(l):o.children=[l],l.parent=o}else{if(i)throw new Error("multiple roots")
i=l}if(!i)throw new Error("no root")
if(i.parent=zc,i.eachBefore(function(t){t.depth=t.parent.depth+1,--c}).eachBefore(ie),i.parent=null,c>0)throw new Error("cycle")
return i}var e=Oe,n=Ae
return t.id=function(n){return arguments.length?(e=xe(n),t):e},t.parentId=function(e){return arguments.length?(n=xe(e),t):n},t},t.tree=function(){function t(t){var s=function(t){for(var e,n,r,a,i,o=new Le(t,0),l=[o];e=l.pop();)if(r=e._.children)for(e.children=new Array(i=r.length),a=i-1;a>=0;--a)l.push(n=e.children[a]=new Le(r[a],a)),n.parent=e
return(o.parent=new Le(null,0)).children=[o],o}(t)
if(s.eachAfter(e),s.parent.m=-s.z,s.eachBefore(n),l)t.eachBefore(r)
else{var u=t,c=t,h=t
t.eachBefore(function(t){t.x<u.x&&(u=t),t.x>c.x&&(c=t),t.depth>h.depth&&(h=t)})
var d=u===c?1:a(u,c)/2,f=d-u.x,p=i/(c.x+d+f),g=o/(h.depth||1)
t.eachBefore(function(t){t.x=(t.x+f)*p,t.y=t.depth*g})}return t}function e(t){var e=t.children,n=t.parent.children,r=t.i?n[t.i-1]:null
if(e){(function(t){for(var e,n=0,r=0,a=t.children,i=a.length;--i>=0;)e=a[i],e.z+=n,e.m+=n,n+=e.s+(r+=e.c)})(t)
var i=(e[0].z+e[e.length-1].z)/2
r?(t.z=r.z+a(t._,r._),t.m=t.z-i):t.z=i}else r&&(t.z=r.z+a(t._,r._))
t.parent.A=function(t,e,n){if(e){for(var r,i=t,o=t,l=e,s=i.parent.children[0],u=i.m,c=o.m,h=l.m,d=s.m;l=Te(l),i=Pe(i),l&&i;)s=Pe(s),o=Te(o),o.a=t,(r=l.z+h-i.z-u+a(l._,i._))>0&&(Me(Ee(l,t,n),t,r),u+=r,c+=r),h+=l.m,u+=i.m,d+=s.m,c+=o.m
l&&!Te(o)&&(o.t=l,o.m+=h-c),i&&!Pe(s)&&(s.t=i,s.m+=u-d,n=t)}return n}(t,r,t.parent.A||n[0])}function n(t){t._.x=t.z+t.parent.m,t.m+=t.parent.m}function r(t){t.x*=i,t.y=t.depth*o}var a=_e,i=1,o=1,l=null
return t.separation=function(e){return arguments.length?(a=e,t):a},t.size=function(e){return arguments.length?(l=!1,i=+e[0],o=+e[1],t):l?null:[i,o]},t.nodeSize=function(e){return arguments.length?(l=!0,i=+e[0],o=+e[1],t):l?[i,o]:null},t},t.treemap=function(){function t(t){return t.x0=t.y0=0,t.x1=a,t.y1=i,t.eachBefore(e),o=[0],r&&t.eachBefore(Mc),t}function e(t){var e=o[t.depth],r=t.x0+e,a=t.y0+e,i=t.x1-e,d=t.y1-e
i<r&&(r=i=(r+i)/2),d<a&&(a=d=(a+d)/2),t.x0=r,t.y0=a,t.x1=i,t.y1=d,t.children&&(e=o[t.depth+1]=l(t)/2,r+=h(t)-e,a+=s(t)-e,i-=u(t)-e,d-=c(t)-e,i<r&&(r=i=(r+i)/2),d<a&&(a=d=(a+d)/2),n(t,r,a,i,d))}var n=Ic,r=!1,a=1,i=1,o=[0],l=be,s=be,u=be,c=be,h=be
return t.round=function(e){return arguments.length?(r=!!e,t):r},t.size=function(e){return arguments.length?(a=+e[0],i=+e[1],t):[a,i]},t.tile=function(e){return arguments.length?(n=xe(e),t):n},t.padding=function(e){return arguments.length?t.paddingInner(e).paddingOuter(e):t.paddingInner()},t.paddingInner=function(e){return arguments.length?(l="function"==typeof e?e:Tc(+e),t):l},t.paddingOuter=function(e){return arguments.length?t.paddingTop(e).paddingRight(e).paddingBottom(e).paddingLeft(e):t.paddingTop()},t.paddingTop=function(e){return arguments.length?(s="function"==typeof e?e:Tc(+e),t):s},t.paddingRight=function(e){return arguments.length?(u="function"==typeof e?e:Tc(+e),t):u},t.paddingBottom=function(e){return arguments.length?(c="function"==typeof e?e:Tc(+e),t):c},t.paddingLeft=function(e){return arguments.length?(h="function"==typeof e?e:Tc(+e),t):h},t},t.treemapBinary=function(t,e,n,r,a){function i(t,e,n,r,a,o,l){if(t>=e-1){var u=s[t]
return u.x0=r,u.y0=a,u.x1=o,void(u.y1=l)}for(var h=c[t],d=n/2+h,f=t+1,p=e-1;f<p;){var g=f+p>>>1
c[g]<d?f=g+1:p=g}d-c[f-1]<c[f]-d&&t+1<f&&--f
var y=c[f]-h,v=n-y
if(o-r>l-a){var m=(r*v+o*y)/n
i(t,f,y,r,a,m,l),i(f,e,v,m,a,o,l)}else{var x=(a*v+l*y)/n
i(t,f,y,r,a,o,x),i(f,e,v,r,x,o,l)}}var o,l,s=t.children,u=s.length,c=new Array(u+1)
for(c[0]=l=o=0;o<u;++o)c[o+1]=l+=s[o].value
i(0,u,t.value,e,n,r,a)},t.treemapDice=Ec,t.treemapSlice=Rc,t.treemapSliceDice=function(t,e,n,r,a){(1&t.depth?Rc:Ec)(t,e,n,r,a)},t.treemapSquarify=Ic,t.treemapResquarify=Hc,t.interpolate=Ts,t.interpolateArray=Cs,t.interpolateBasis=ys,t.interpolateBasisClosed=vs,t.interpolateDate=ks,t.interpolateNumber=Ss,t.interpolateObject=Os,t.interpolateRound=Ms,t.interpolateString=Ps,t.interpolateTransformCss=Ds,t.interpolateTransformSvg=Rs,t.interpolateZoom=Is,t.interpolateRgb=xs,t.interpolateRgbBasis=bs,t.interpolateRgbBasisClosed=ws,t.interpolateHsl=Hs,t.interpolateHslLong=Bs,t.interpolateLab=function(t,e){var n=dt((t=$(t)).l,(e=$(e)).l),r=dt(t.a,e.a),a=dt(t.b,e.b),i=dt(t.opacity,e.opacity)
return function(e){return t.l=n(e),t.a=r(e),t.b=a(e),t.opacity=i(e),t+""}},t.interpolateHcl=Ns,t.interpolateHclLong=Fs,t.interpolateCubehelix=Ys,t.interpolateCubehelixLong=Vs,t.quantize=function(t,e){for(var n=new Array(e),r=0;r<e;++r)n[r]=t(r/(e-1))
return n},t.path=Re,t.creator=gl,t.local=f,t.matcher=bl,t.mouse=Sl,t.namespace=pl,t.namespaces=fl,t.clientPoint=kl,t.select=El,t.selectAll=function(t){return"string"==typeof t?new M([document.querySelectorAll(t)],[document.documentElement]):new M([null==t?[]:t],Ml)},t.selection=E,t.selector=Ol,t.selectorAll=Al,t.style=b,t.touch=Ll,t.touches=function(t,e){null==e&&(e=Cl().touches)
for(var n=0,r=e?e.length:0,a=new Array(r);n<r;++n)a[n]=kl(t,e[n])
return a},t.window=Tl,t.customEvent=v,t.timeInterval=We,t.timeMillisecond=Jc,t.timeMilliseconds=th,t.utcMillisecond=Jc,t.utcMilliseconds=th,t.timeSecond=rh,t.timeSeconds=ah
t.utcSecond=rh,t.utcSeconds=ah,t.timeMinute=ih,t.timeMinutes=oh,t.timeHour=lh,t.timeHours=sh,t.timeDay=uh,t.timeDays=ch,t.timeWeek=hh,t.timeWeeks=mh,t.timeSunday=hh,t.timeSundays=mh,t.timeMonday=dh,t.timeMondays=xh,t.timeTuesday=fh,t.timeTuesdays=bh,t.timeWednesday=ph,t.timeWednesdays=wh,t.timeThursday=gh,t.timeThursdays=Ch,t.timeFriday=yh,t.timeFridays=kh,t.timeSaturday=vh,t.timeSaturdays=Sh,t.timeMonth=Oh,t.timeMonths=Ah,t.timeYear=_h,t.timeYears=Ph,t.utcMinute=Th,t.utcMinutes=Mh,t.utcHour=Eh,t.utcHours=Lh,t.utcDay=zh,t.utcDays=Dh,t.utcWeek=Rh,t.utcWeeks=Yh,t.utcSunday=Rh,t.utcSundays=Yh,t.utcMonday=jh,t.utcMondays=Vh,t.utcTuesday=Ih,t.utcTuesdays=Wh,t.utcWednesday=Hh,t.utcWednesdays=Uh,t.utcThursday=Bh,t.utcThursdays=Xh,t.utcFriday=Nh,t.utcFridays=Gh,t.utcSaturday=Fh,t.utcSaturdays=qh,t.utcMonth=Zh,t.utcMonths=Qh,t.utcYear=Kh,t.utcYears=Jh,t.timeFormatDefaultLocale=ar,t.timeFormatLocale=Qe,t.isoFormat=ad,t.isoParse=id,t.now=xt,t.timer=Ct,t.timerFlush=kt,t.timeout=Js,t.interval=function(t,e,n){var r=new wt,a=e
return null==e?(r.restart(t,e,n),r):(e=+e,n=null==n?xt():+n,r.restart(function i(o){o+=a,r.restart(i,a+=e,n),t(o)},e,n),r)},t.transition=Lt,t.active=function(t,e){var n,r,a=t.__transition
if(a){e=null==e?null:e+""
for(r in a)if((n=a[r]).state>ru&&n.name===e)return new Et([[t]],Hu,e,+r)}return null},t.interrupt=cu,t.zoom=function(){function e(t){t.property("__zoom",Gr).on("wheel.zoom",s).on("mousedown.zoom",c).on("dblclick.zoom",h).filter(C).on("touchstart.zoom",d).on("touchmove.zoom",f).on("touchend.zoom touchcancel.zoom",p).style("touch-action","none").style("-webkit-tap-highlight-color","rgba(0,0,0,0)")}function n(t,e){return(e=Math.max(k[0],Math.min(k[1],e)))===t.k?t:new Yr(e,t.x,t.y)}function r(t,e,n){var r=e[0]-n[0]*t.k,a=e[1]-n[1]*t.k
return r===t.x&&a===t.y?t:new Yr(t.k,r,a)}function a(t){return[(+t[0][0]+ +t[1][0])/2,(+t[0][1]+ +t[1][1])/2]}function i(t,e,n){t.on("start.zoom",function(){o(this,arguments).start()}).on("interrupt.zoom end.zoom",function(){o(this,arguments).end()}).tween("zoom",function(){var t=arguments,r=o(this,t),i=x.apply(this,t),l=n||a(i),s=Math.max(i[1][0]-i[0][0],i[1][1]-i[0][1]),u=this.__zoom,c="function"==typeof e?e.apply(this,t):e,h=A(u.invert(l).concat(s/u.k),c.invert(l).concat(s/c.k))
return function(t){if(1===t)t=c
else{var e=h(t),n=s/e[2]
t=new Yr(n,l[0]-e[0]*n,l[1]-e[1]*n)}r.zoom(null,t)}})}function o(t,e){for(var n,r=0,a=_.length;r<a;++r)if((n=_[r]).that===t)return n
return new l(t,e)}function l(t,e){this.that=t,this.args=e,this.index=-1,this.active=0,this.extent=x.apply(t,e)}function s(){function t(){e.wheel=null,e.end()}if(m.apply(this,arguments)){var e=o(this,arguments),a=this.__zoom,i=Math.max(k[0],Math.min(k[1],a.k*Math.pow(2,w.apply(this,arguments)))),l=Sl(this)
if(e.wheel)e.mouse[0][0]===l[0]&&e.mouse[0][1]===l[1]||(e.mouse[1]=a.invert(e.mouse[0]=l)),clearTimeout(e.wheel)
else{if(a.k===i)return
e.mouse=[l,a.invert(l)],cu(this),e.start()}Vd(),e.wheel=setTimeout(t,M),e.zoom("mouse",b(r(n(a,i),e.mouse[0],e.mouse[1]),e.extent,S))}}function c(){function e(){if(Vd(),!a.moved){var e=t.event.clientX-s,n=t.event.clientY-u
a.moved=e*e+n*n>E}a.zoom("mouse",b(r(a.that.__zoom,a.mouse[0]=Sl(a.that),a.mouse[1]),a.extent,S))}function n(){i.on("mousemove.zoom mouseup.zoom",null),z(t.event.view,a.moved),Vd(),a.end()}if(!y&&m.apply(this,arguments)){var a=o(this,arguments),i=El(t.event.view).on("mousemove.zoom",e,!0).on("mouseup.zoom",n,!0),l=Sl(this),s=t.event.clientX,u=t.event.clientY
Dl(t.event.view),Wr(),a.mouse=[l,this.__zoom.invert(l)],cu(this),a.start()}}function h(){if(m.apply(this,arguments)){var a=this.__zoom,o=Sl(this),l=a.invert(o),s=a.k*(t.event.shiftKey?.5:2),u=b(r(n(a,s),o,l),x.apply(this,arguments),S)
Vd(),O>0?El(this).transition().duration(O).call(i,u,o):El(this).call(e.transform,u)}}function d(){if(m.apply(this,arguments)){var e,n,r,a,i=o(this,arguments),l=t.event.changedTouches,s=l.length
for(Wr(),n=0;n<s;++n)r=l[n],a=Ll(this,l,r.identifier),a=[a,this.__zoom.invert(a),r.identifier],i.touch0?i.touch1||(i.touch1=a):(i.touch0=a,e=!0)
if(g&&(g=clearTimeout(g),!i.touch1))return i.end(),void((a=El(this).on("dblclick.zoom"))&&a.apply(this,arguments))
e&&(g=setTimeout(function(){g=null},T),cu(this),i.start())}}function f(){var e,a,i,l,s=o(this,arguments),u=t.event.changedTouches,c=u.length
for(Vd(),g&&(g=clearTimeout(g)),e=0;e<c;++e)a=u[e],i=Ll(this,u,a.identifier),s.touch0&&s.touch0[2]===a.identifier?s.touch0[0]=i:s.touch1&&s.touch1[2]===a.identifier&&(s.touch1[0]=i)
if(a=s.that.__zoom,s.touch1){var h=s.touch0[0],d=s.touch0[1],f=s.touch1[0],p=s.touch1[1],y=(y=f[0]-h[0])*y+(y=f[1]-h[1])*y,v=(v=p[0]-d[0])*v+(v=p[1]-d[1])*v
a=n(a,Math.sqrt(y/v)),i=[(h[0]+f[0])/2,(h[1]+f[1])/2],l=[(d[0]+p[0])/2,(d[1]+p[1])/2]}else{if(!s.touch0)return
i=s.touch0[0],l=s.touch0[1]}s.zoom("touch",b(r(a,i,l),s.extent,S))}function p(){var e,n,r=o(this,arguments),a=t.event.changedTouches,i=a.length
for(Wr(),y&&clearTimeout(y),y=setTimeout(function(){y=null},T),e=0;e<i;++e)n=a[e],r.touch0&&r.touch0[2]===n.identifier?delete r.touch0:r.touch1&&r.touch1[2]===n.identifier&&delete r.touch1
r.touch1&&!r.touch0&&(r.touch0=r.touch1,delete r.touch1),r.touch0?r.touch0[1]=this.__zoom.invert(r.touch0[0]):r.end()}var g,y,m=Ur,x=Xr,b=Qr,w=qr,C=Zr,k=[0,1/0],S=[[-1/0,-1/0],[1/0,1/0]],O=250,A=Is,_=[],P=u("start","zoom","end"),T=500,M=150,E=0
return e.transform=function(t,e){var n=t.selection?t.selection():t
n.property("__zoom",Gr),t!==n?i(t,e):n.interrupt().each(function(){o(this,arguments).start().zoom(null,"function"==typeof e?e.apply(this,arguments):e).end()})},e.scaleBy=function(t,n){e.scaleTo(t,function(){return this.__zoom.k*("function"==typeof n?n.apply(this,arguments):n)})},e.scaleTo=function(t,i){e.transform(t,function(){var t=x.apply(this,arguments),e=this.__zoom,o=a(t),l=e.invert(o),s="function"==typeof i?i.apply(this,arguments):i
return b(r(n(e,s),o,l),t,S)})},e.translateBy=function(t,n,r){e.transform(t,function(){return b(this.__zoom.translate("function"==typeof n?n.apply(this,arguments):n,"function"==typeof r?r.apply(this,arguments):r),x.apply(this,arguments),S)})},e.translateTo=function(t,n,r){e.transform(t,function(){var t=x.apply(this,arguments),e=this.__zoom,i=a(t)
return b(Yd.translate(i[0],i[1]).scale(e.k).translate("function"==typeof n?-n.apply(this,arguments):-n,"function"==typeof r?-r.apply(this,arguments):-r),t,S)})},l.prototype={start:function(){return 1==++this.active&&(this.index=_.push(this)-1,this.emit("start")),this},zoom:function(t,e){return this.mouse&&"mouse"!==t&&(this.mouse[1]=e.invert(this.mouse[0])),this.touch0&&"touch"!==t&&(this.touch0[1]=e.invert(this.touch0[0])),this.touch1&&"touch"!==t&&(this.touch1[1]=e.invert(this.touch1[0])),this.that.__zoom=e,this.emit("zoom"),this},end:function(){return 0==--this.active&&(_.splice(this.index,1),this.index=-1,this.emit("end")),this},emit:function(t){v(new function(t,e,n){this.target=t,this.type=e,this.transform=n}(e,t,this.that.__zoom),P.apply,P,[t,this.that,this.args])}},e.wheelDelta=function(t){return arguments.length?(w="function"==typeof t?t:Fd(+t),e):w},e.filter=function(t){return arguments.length?(m="function"==typeof t?t:Fd(!!t),e):m},e.touchable=function(t){return arguments.length?(C="function"==typeof t?t:Fd(!!t),e):C},e.extent=function(t){return arguments.length?(x="function"==typeof t?t:Fd([[+t[0][0],+t[0][1]],[+t[1][0],+t[1][1]]]),e):x},e.scaleExtent=function(t){return arguments.length?(k[0]=+t[0],k[1]=+t[1],e):[k[0],k[1]]},e.translateExtent=function(t){return arguments.length?(S[0][0]=+t[0][0],S[1][0]=+t[1][0],S[0][1]=+t[0][1],S[1][1]=+t[1][1],e):[[S[0][0],S[0][1]],[S[1][0],S[1][1]]]},e.constrain=function(t){return arguments.length?(b=t,e):b},e.duration=function(t){return arguments.length?(O=+t,e):O},e.interpolate=function(t){return arguments.length?(A=t,e):A},e.on=function(){var t=P.on.apply(P,arguments)
return t===P?e:t},e.clickDistance=function(t){return arguments.length?(E=(t=+t)*t,e):Math.sqrt(E)},e},t.zoomTransform=Vr,t.zoomIdentity=Yd,t.polygonArea=function(t){for(var e,n=-1,r=t.length,a=t[r-1],i=0;++n<r;)e=a,a=t[n],i+=e[1]*a[0]-e[0]*a[1]
return i/2},t.polygonCentroid=function(t){for(var e,n,r=-1,a=t.length,i=0,o=0,l=t[a-1],s=0;++r<a;)e=l,l=t[r],s+=n=e[0]*l[1]-l[0]*e[1],i+=(e[0]+l[0])*n,o+=(e[1]+l[1])*n
return s*=3,[i/s,o/s]},t.polygonHull=function(t){if((n=t.length)<3)return null
var e,n,r=new Array(n),a=new Array(n)
for(e=0;e<n;++e)r[e]=[+t[e][0],+t[e][1],e]
for(r.sort(Kr),e=0;e<n;++e)a[e]=[r[e][0],-r[e][1]]
var i=$r(r),o=$r(a),l=o[0]===i[0],s=o[o.length-1]===i[i.length-1],u=[]
for(e=i.length-1;e>=0;--e)u.push(t[r[i[e]][2]])
for(e=+l;e<o.length-s;++e)u.push(t[r[o[e]][2]])
return u},t.polygonContains=function(t,e){for(var n,r,a=t.length,i=t[a-1],o=e[0],l=e[1],s=i[0],u=i[1],c=!1,h=0;h<a;++h)i=t[h],n=i[0],(r=i[1])>l!=u>l&&o<(s-n)*(l-r)/(u-r)+n&&(c=!c),s=n,u=r
return c},t.polygonLength=function(t){for(var e,n,r=-1,a=t.length,i=t[a-1],o=i[0],l=i[1],s=0;++r<a;)e=o,n=l,i=t[r],o=i[0],l=i[1],e-=o,n-=l,s+=Math.sqrt(e*e+n*n)
return s},t.geoArea=function(t){return qf.reset(),Xf(t,Zf),2*qf},t.geoBounds=function(t){var e,n,r,a,i,o,l
if(tf=Jd=-(Kd=$d=1/0),of=[],Xf(t,Kf),n=of.length){for(of.sort(_a),e=1,i=[r=of[0]];e<n;++e)a=of[e],Pa(r,a[0])||Pa(r,a[1])?(Aa(r[0],a[1])>Aa(r[0],r[1])&&(r[1]=a[1]),Aa(a[0],r[1])>Aa(r[0],r[1])&&(r[0]=a[0])):i.push(r=a)
for(o=-1/0,e=0,r=i[n=i.length-1];e<=n;r=a,++e)a=i[e],(l=Aa(r[1],a[0]))>o&&(o=l,Kd=a[0],Jd=r[1])}return of=lf=null,Kd===1/0||$d===1/0?[[NaN,NaN],[NaN,NaN]]:[[Kd,$d],[Jd,tf]]},t.geoCentroid=Jf,t.geoCircle=function(){function t(){var t=r.apply(this,arguments),l=a.apply(this,arguments)*Ef,s=i.apply(this,arguments)*Ef
return e=[],n=Na(-t[0]*Ef,-t[1]*Ef,0).invert,Wa(o,l,s,1),t={type:"Polygon",coordinates:[e]},e=n=null,t}var e,n,r=tp([0,0]),a=tp(90),i=tp(6),o={point:function(t,r){e.push(t=n(t,r)),t[0]*=Mf,t[1]*=Mf}}
return t.center=function(e){return arguments.length?(r="function"==typeof e?e:tp([+e[0],+e[1]]),t):r},t.radius=function(e){return arguments.length?(a="function"==typeof e?e:tp(+e),t):a},t.precision=function(e){return arguments.length?(i="function"==typeof e?e:tp(+e),t):i},t},t.geoClipAntimeridian=bp,t.geoClipCircle=wp,t.geoClipExtent=function(){var t,e,n,r=0,a=0,i=960,o=500
return n={stream:function(n){return t&&e===n?t:t=Qa(r,a,i,o)(e=n)},extent:function(l){return arguments.length?(r=+l[0][0],a=+l[0][1],i=+l[1][0],o=+l[1][1],t=e=null,n):[[r,a],[i,o]]}}},t.geoClipRectangle=Qa,t.geoContains=function(t,e){return(t&&Ep.hasOwnProperty(t.type)?Ep[t.type]:ti)(t,e)},t.geoDistance=Mp,t.geoGraticule=si,t.geoGraticule10=function(){return si()()},t.geoInterpolate=function(t,e){var n=t[0]*Ef,r=t[1]*Ef,a=e[0]*Ef,i=e[1]*Ef,o=Rf(r),l=Nf(r),s=Rf(i),u=Nf(i),c=o*Rf(n),h=o*Nf(n),d=s*Rf(a),f=s*Nf(a),p=2*na(Yf(ra(i-r)+o*s*ra(a-n))),g=Nf(p),y=p?function(t){var e=Nf(t*=p)/g,n=Nf(p-t)/g,r=n*c+e*d,a=n*h+e*f,i=n*l+e*u
return[Df(a,r)*Mf,Df(i,Yf(r*r+a*a))*Mf]}:function(){return[n*Mf,r*Mf]}
return y.distance=p,y},t.geoLength=_p,t.geoPath=function(t,e){function n(t){return t&&("function"==typeof i&&a.pointRadius(+i.apply(this,arguments)),Xf(t,r(a))),a.result()}var r,a,i=4.5
return n.area=function(t){return Xf(t,r(jp)),jp.result()},n.measure=function(t){return Xf(t,r(ag)),ag.result()},n.bounds=function(t){return Xf(t,r(Fp)),Fp.result()},n.centroid=function(t){return Xf(t,r(Kp)),Kp.result()},n.projection=function(e){return arguments.length?(r=null==e?(t=null,zp):(t=e).stream,n):t},n.context=function(t){return arguments.length?(a=null==t?(e=null,new Oi):new Ci(e=t),"function"!=typeof i&&a.pointRadius(i),n):e},n.pointRadius=function(t){return arguments.length?(i="function"==typeof t?t:(a.pointRadius(+t),+t),n):i},n.projection(t).context(e)},t.geoAlbers=cg,t.geoAlbersUsa=function(){function t(t){var e=t[0],n=t[1]
return l=null,a.point(e,n),l||(i.point(e,n),l)||(o.point(e,n),l)}function e(){return n=r=null,t}var n,r,a,i,o,l,s=cg(),u=ug().rotate([154,0]).center([-2,58.5]).parallels([55,65]),c=ug().rotate([157,0]).center([-3,19.9]).parallels([8,18]),h={point:function(t,e){l=[t,e]}}
return t.invert=function(t){var e=s.scale(),n=s.translate(),r=(t[0]-n[0])/e,a=(t[1]-n[1])/e
return(a>=.12&&a<.234&&r>=-.425&&r<-.214?u:a>=.166&&a<.234&&r>=-.214&&r<-.115?c:s).invert(t)},t.stream=function(t){return n&&r===t?n:n=function(t){var e=t.length
return{point:function(n,r){for(var a=-1;++a<e;)t[a].point(n,r)},sphere:function(){for(var n=-1;++n<e;)t[n].sphere()},lineStart:function(){for(var n=-1;++n<e;)t[n].lineStart()},lineEnd:function(){for(var n=-1;++n<e;)t[n].lineEnd()},polygonStart:function(){for(var n=-1;++n<e;)t[n].polygonStart()},polygonEnd:function(){for(var n=-1;++n<e;)t[n].polygonEnd()}}}([s.stream(r=t),u.stream(t),c.stream(t)])},t.precision=function(t){return arguments.length?(s.precision(t),u.precision(t),c.precision(t),e()):s.precision()},t.scale=function(e){return arguments.length?(s.scale(e),u.scale(.35*e),c.scale(e),t.translate(s.translate())):s.scale()},t.translate=function(t){if(!arguments.length)return s.translate()
var n=s.scale(),r=+t[0],l=+t[1]
return a=s.translate(t).clipExtent([[r-.455*n,l-.238*n],[r+.455*n,l+.238*n]]).stream(h),i=u.translate([r-.307*n,l+.201*n]).clipExtent([[r-.425*n+Of,l+.12*n+Of],[r-.214*n-Of,l+.234*n-Of]]).stream(h),o=c.translate([r-.205*n,l+.212*n]).clipExtent([[r-.214*n+Of,l+.166*n+Of],[r-.115*n-Of,l+.234*n-Of]]).stream(h),e()},t.fitExtent=function(e,n){return Mi(t,e,n)},t.fitSize=function(e,n){return Ei(t,e,n)},t.fitWidth=function(e,n){return Li(t,e,n)},t.fitHeight=function(e,n){return zi(t,e,n)},t.scale(1070)},t.geoAzimuthalEqualArea=function(){return Ri(hg).scale(124.75).clipAngle(179.999)},t.geoAzimuthalEqualAreaRaw=hg,t.geoAzimuthalEquidistant=function(){return Ri(dg).scale(79.4188).clipAngle(179.999)},t.geoAzimuthalEquidistantRaw=dg,t.geoConicConformal=function(){return Ii(Wi).scale(109.5).parallels([30,30])},t.geoConicConformalRaw=Wi,t.geoConicEqualArea=ug,t.geoConicEqualAreaRaw=Hi,t.geoConicEquidistant=function(){return Ii(Xi).scale(131.154).center([0,13.9389])},t.geoConicEquidistantRaw=Xi,t.geoEqualEarth=function(){return Ri(Gi).scale(177.158)},t.geoEqualEarthRaw=Gi,t.geoEquirectangular=function(){return Ri(Ui).scale(152.63)},t.geoEquirectangularRaw=Ui,t.geoGnomonic=function(){return Ri(qi).scale(144.049).clipAngle(60)},t.geoGnomonicRaw=qi,t.geoIdentity=function(){function t(){return a=i=null,o}var e,n,r,a,i,o,l=1,s=0,u=0,c=1,h=1,d=zp,f=null,p=zp
return o={stream:function(t){return a&&i===t?a:a=d(p(i=t))},postclip:function(a){return arguments.length?(p=a,f=e=n=r=null,t()):p},clipExtent:function(a){return arguments.length?(p=null==a?(f=e=n=r=null,zp):Qa(f=+a[0][0],e=+a[0][1],n=+a[1][0],r=+a[1][1]),t()):null==f?null:[[f,e],[n,r]]},scale:function(e){return arguments.length?(d=Zi((l=+e)*c,l*h,s,u),t()):l},translate:function(e){return arguments.length?(d=Zi(l*c,l*h,s=+e[0],u=+e[1]),t()):[s,u]},reflectX:function(e){return arguments.length?(d=Zi(l*(c=e?-1:1),l*h,s,u),t()):c<0},reflectY:function(e){return arguments.length?(d=Zi(l*c,l*(h=e?-1:1),s,u),t()):h<0},fitExtent:function(t,e){return Mi(o,t,e)},fitSize:function(t,e){return Ei(o,t,e)},fitWidth:function(t,e){return Li(o,t,e)},fitHeight:function(t,e){return zi(o,t,e)}}},t.geoProjection=Ri,t.geoProjectionMutator=ji,t.geoMercator=function(){return Yi(Fi).scale(961/Tf)},t.geoMercatorRaw=Fi,t.geoNaturalEarth1=function(){return Ri(Qi).scale(175.295)},t.geoNaturalEarth1Raw=Qi,t.geoOrthographic=function(){return Ri(Ki).scale(249.5).clipAngle(90+Of)},t.geoOrthographicRaw=Ki,t.geoStereographic=function(){return Ri($i).scale(250).clipAngle(142)},t.geoStereographicRaw=$i,t.geoTransverseMercator=function(){var t=Yi(Ji),e=t.center,n=t.rotate
return t.center=function(t){return arguments.length?e([-t[1],t[0]]):(t=e(),[t[1],-t[0]])},t.rotate=function(t){return arguments.length?n([t[0],t[1],t.length>2?t[2]+90:90]):(t=n(),[t[0],t[1],t[2]-90])},n([0,0,90]).scale(159.155)},t.geoTransverseMercatorRaw=Ji,t.geoRotation=fp,t.geoStream=Xf,t.geoTransform=function(t){return{stream:_i(t)}},Object.defineProperty(t,"__esModule",{value:!0})}),function(t){function e(t,e){return parseInt(t,e||10)}function n(t){return Array.isArray?Array.isArray(t):!!t&&t.constructor===Array}function r(t){return X(t)?JSON.stringify(t):Ta}function a(t,e){if(t.isD3Selection||(t=d3.select(t)),!xt(t.node()))return _a.warn("No container"),null
var n=null
return t.datum(e).each(function(t){var e=ri(this);(n=new qr.charts.get(e,t)).showLoading(e)}),n}function i(t,e,n){var r=t.length,a=t[r-1]
r||(n.chartRendered=!0),r>0&&1!=a.drawStarted&&xt(a.container.node())&&(a.draw(),a.drawStarted=!0,o(t,e,n))}function o(t,e,n,r){var a=t.length,l=t[a-1]
if(l.chartRendered||l.breakOnErr)e.push(t.pop()),i(t,e,n)
else{null!=r&&clearTimeout(r)
r=setTimeout(function(){o(t,e,n,r)},10)}}function l(t,e){this.container=t,this.userdata=e,this.dataset={},this.dataObject={},this.canvasarea={},this.chartarea={},this.legendarea={},this.legend={component:null},this.renderer=[],this.svg=null,this.cache={},this.datalabels={moduleExists:qr.labelRenderer},this.prepareLayout()}function s(t,n,r,a){for(var i,o=F(arguments).slice(4),l=null,s=0,u=o.length;u+1>s&&(i=s===u?null:Vl(t,o[s]),l=function(t,n,r,a,i){var o=Ra(t.width,t.height),l=B(qr,"fontProperties.ratio")&&qr.fontProperties.ratio
"function"==typeof l&&(l=l(t)),n=null==n?l&&!isNaN(l)?l:.038:n
var s=Ea(o*n)
El.minL1Size=qr.fontProperties.minsize,El.maxL1Size=qr.fontProperties.maxsize
var u=El.minL1Size,c=El.maxL1Size
s=u>s?u:s>c?c:s,null!=r&&(n=e(r)*n/s,s=Ea(o*n),s=u>s?u:s>c?c:s)
return(i=null==a?null==i?{}:i:a).size=s,i.l1=function(){return i.size},i.l2=function(){return i.size-2},i.l3=function(){return i.size-3},i.l4=function(){return i.size-4},i.l5=function(){return i.size-5},i}(a,null,i,n,r),!ni(i));s++);return l}function u(t,e,n){El.globalProp={},n.fontL1Size=s(t,El.fontL1Size,n.fontL1Size,e,"canvas.fontSize"),n.fontL2Size=s(t,El.fontL2Size,n.fontL2Size,e,"chart.fontSize","canvas.fontSize"),El.globalProp.fontL1Color=null,El.globalProp.fontL2Color=null,El.globalProp.fontL1Family=null,El.globalProp.fontL2Family=null,El.globalProp.fontL1Style=null,El.globalProp.fontL2Style=null,El.globalProp.fontL1Weight=null,El.globalProp.fontL2Weight=null,El.globalProp.textShadow=null
var r=Wl(Vl(t,"chart.plot.animation"),{})
return El.globalProp.animation={},El.globalProp.animation.enabled=!1!==r.enabled,El.globalProp.animation.duration=r.duration||null,El.globalProp.animation.easingType=r.easingType||null,El.globalProp.datalabels={},n.datalabels=null==n.datalabels?{}:n.datalabels,El.globalProp.datalabels.enabled=null,n.datalabels.fontSize=s(t,El.fontL3Size,n.datalabels.fontSize,e,"chart.plot.datalabels.fontSize","chart.fontSize","canvas.fontSize"),El.globalProp.datalabels.fontColor=null,El.globalProp.datalabels.fontFamily=null,El.globalProp.datalabels.fontStyle=null,El.globalProp.datalabels.fontWeight=null,El.globalProp.events={},El.globalProp.events.mouseMove=null,El.globalProp.events.mouseOut=null,El.globalProp.events.click=null,El.globalProp.events.doubleClick=null,n}function c(t){this.chart=t,this.originalSeries=t.seriesdata,this.initialize()}function d(t,e,n,r){var a=0,i=t.renderer[e].commonRendererProp().params,o=t.dataset,l=o.getX(n),s=o.getY(n,i.yaxiscolumnorder||0)
t.userdata.seriesdata.stackGroup&&(a=je(e,t.userdata.seriesdata.stackGroup))
var u=t.dataObject.groupedByStack.get(a).stackExtent.filter(function(t){return t[0]===l})
return r===_l||r===Ol?u.reduce(function(t,e){return t+ja(e[1])},0):u[s<i.hasNegValue&&u[1]?1:0][1]}function f(t,e,n,r,a,i,o){r=+r
var l=t.systemConf.metadata.axes.y,s=-1,u=tn(t.chartTypes[e].value),c=t.dataObject.isstacked(t.chartTypes[e].value)
if(c&&!t.dataObject.isStackedPercentChart&&!t.dataObject.isPercentChart&&/(datalabels|tooltip)/.test(o))return d(t,e,a,i)
if(null!=l&&(l[0]instanceof Array?l.forEach(function(t,e){s=-1==s&&t.indexOf(r)>-1?e:s}):s=l.indexOf(r)>-1?0:-1,-1!=s||u)){var h
if(u){var f=Hs.getKey(a,e,t)
h=t.subrenderer[n||0][f].total}else if(t.isAxisCategory||t.dataObject.isPolarAxisCategory){var p=t.axes.y.groups[s].scale
if(i!==Al&&p){h=(g=p.domain())[1]}else{var g=Ys(t,s)
g=t.dataObject.isStackedPercentChart||c||t.dataObject.isPercentChart?g[s]:g,h=t.dataset.getY(a,s)<0?-g[0]:g[1]}}else if(t.isNonAxisMultiSeriesCategory){var y=t.renderer[0]
if(i===Ol)return y.total
if(y.extentY)return y.extentY[1]
var v=y.getProcessedNode
h=(v?v(a):a).parent.value}else if("legend"===o){var m=t.seriesdata[0],x=t.dataset.yidx(qr.DataProcessor.helpers.getParsedYAxisOrder(m.yaxiscolumnorder))
h=m.data[0].reduce(function(t,e){return t+(e.disabled?0:ja(e[x]||0))},0)}else h=t.renderer[0].total
return h||0===h?h:null}return null}function p(t,e,r,a){var i=r.datatype,o=r[i]
return t.replace(ka,function(t,r){var l=""
return n(e[r])?(l=yn(o,e[r][0],i,a,"threshold",!1),l+=" - "+yn(o,e[r][1],i,a,"threshold",!1)):l=yn(o,e[r],i,a,"threshold",!1),l})}function g(t,e){var n=e.dataset,r=e.data,a=e.chartObj,i=e.processedseriesData,o=e.groupedDataByCombo,l=e.groupedDataBySplitAxes,s=e.categoriesStore,u=e.groupedByStack,c=a.dataObject,h=qr.DataProcessor.helpers,d=e.isCombinationalChart||r.seriesdata.stackGroup?o.values():l,f=c.getDomain(e.getCategories("x"),!0),p=f.length,g=s.subseries,y=h.isCatNull(n,"x"),m=[],x=[],b=d.map(function(t,l){var s=o.keys()[l].split("_"),c=+s[0],d=X(s[1])?+s[1]:l,b=e.isstacked(c)||e.isPercentChart,w=[],C=[]
x[l]||(x[l]=[])
var k=wi(t.map(function(t){var e=t.si,r=h.getParsedYAxisOrder(i[e].yaxiscolumnorder)
if(b&&!Xe(c))for(var a=t.d.map(function(t){return t.groupByVal}),o=0;o<g.length;o++){var s=g[o]
if(0>a.indexOf(s)&&null!=s){var u=[]
t.d.splice(o,0,u)}}return t.d.map(function(e){if(b&&!Xe(c)){for(var a=function(t){return n.getX(t)},o=e.map(a),s=0,u=p;u>s;s++){var d=f[s],g=o.indexOf(d)
if(g>=0&&g!=s&&(e.splice(s,0,e[g]),e.splice(g+1,1),o=e.map(a)),void 0!==o[s]&&y(o[s])&&e.splice(s,1),0>g){var v=[],m=h.getParsedYAxisOrder(i[t.si].yaxiscolumnorder)
v.splice(n.xidx,0,d),v.splice(n.yidx(m),0,0),v.isDummy=!0,e.splice(s,0,v),o=e.map(a)}}p!=e.length&&e.splice(p,e.length-p)}return e.map(function(t){var e=n.getX(t),a=n.getY(t,r)||0,i=f.indexOf(e),o=0>a?C:w,s=o[i]
return b?(s=X(s)?s:0,t.y0=s,t.y=a,x[l][i]=s+a,o[i]=s+a):o[i]=X(s)?(0>a?Ra:Da)(s,a):a,t})})}))
m[l]=Oi(wi([w,C,[0]]))
var S=qr.charttypenames.get(c)
return b&&(a.datalabels.moduleExists&&(or(r.chart.plot.plotoptions[S].datalabels.stackLabels,a)||function(t,e){var n=e.systemConf.chart.plot.plotoptions[t].datalabels||{},r=(B(e.userdata,"chart.plot.plotoptions."+t+".datalabels",!0)||{}).showAs||n.showAs
return r===_l||r===Pl||r===Tl||Oa.test(r)}(S,a))||Oa.test(r.metadata.axes.tooltip))&&(u.has(d)||u.set(d,{}),u.get(d).stackExtent=v(f,w,C)),k})
return m=l.length>1?m:[Oi(wi(m))],(e.isStackedPercentChart||e.isPercentChart)&&(b.map(function(t,e){return t.map(function(t){return t.map(function(t){var r=f.indexOf(n.getX(t)),a=x[e][r]||0
return 1!=isNaN(a)&&null!=a&&0!=a&&(t.y0/=a/100,t.y/=a/100),t})})}),m[0][0]=0,m[0][1]=100),m}function v(t,e,n,r,a){var i=[]
return t.forEach(r?function(t,o){e[o]>=0&&i.push([t,e[o],r[o]]),n[o]<0&&i.push([t,n[o],a[o]])}:function(t,r){e[r]>=0&&i.push([t,e[r]]),n[r]<0&&i.push([t,n[r]])}),i}function m(t,e){return e||(e=0),t.forEach(function(t){n(t[0])?e=m(t,e):e++}),e}function x(t,e,n){var r=X(zl[t]),a=Wl(zl[t],t,null)
return X(a)&&"solid"!==t?(e=r?Wl(e,1):1,n&&(e*=n),a.split(",").map(function(t){return+t*e})):[]}function b(t,e){return t||(e&&/dot/g.test(e)?"round":null)}function C(t,e,n,r){var a=n.reduce(function(t,e){return e+t},0)
t.attr("stroke-dasharray",n).attr("stroke-dashoffset",a).transition().duration(e).ease(ui).attr("stroke-dashoffset",0).on("end",function(){r&&r.chartRendered&&C(t,e,n,r)})}function k(t,e,n,r){var a=t.type
if(a&&a!==Za){var i=t.options[a]||t.options,o=Yl(i)
return o.color=null!=n?n:o.color,o.opacity=null!=r?r:o.opacity,o.dimension=null!=e?e:o.dimension,o.type=a,o}}function S(t,e){return e.map(function(e){var n=parseInt(e)
return t.width%n/(parseInt(t.width/n)||1)+n})}function O(t){return{ele:t}}function A(t,e,n,r){"use strict"
for(var a=_(t,e,n,r),i=0;i<a.offset.length;i++)t.append("stop").attr("offset",a.offset[i]).styles({"stop-color":a.color[i],"stop-opacity":a.opacity[i]})}function _(t,e,n,r){"use strict"
var a=e.stopOffset,i=e.stopOpacity,o=e.stopColor,l=e.colorGamma||[1,0],s=e.spreadMethod,u="radial"==r?+e.radius:Da(ja((+e.x2||0)-(+e.x1||0)),ja((+e.y2||0)-(+e.y1||0)))
if(a=a||["0%","100%"],o=("function"==typeof o?o(n):o)||a.map(function(t,e){return te(n,l[e]||0,"brighter",xi)}),i=i||[1,1],("repeat"===s||"reflect"===s)&&(Ll.IS_IOS||Ll.SAFARI)){for(var c=[],h=[],d=[],f=0,p=0;100>f;){for(var g=0,y=a.length;y>g;g++){var v=Ra(parseFloat(a[g])/100*u+f,100)
c.push(v+"%"),d.push(p%2!=0?i[i.length-1-g]:i[g]),h.push(p%2!=0?o[o.length-1-g]:o[g])}f+=u,p+="reflect"===s?1:0}a=c,o=h,i=d}return{offset:a,color:o,opacity:i}}function P(t){return function(e){switch(t){case"asterisk":return"M0 0 C"+-.25*e+" "+-.65*e+" "+.25*e+" "+-.65*e+" 0 0 C"+.5*e+" "+-.633*e+" "+.65*e+" "+-.117*e+" 0 0 C"+.583*e+" "+.083*e+" "+.583*e+" "+.65*e+" 0 0 C"+.25*e+" "+.65*e+" "+-.25*e+" "+.65*e+" 0 0 C"+-.617*e+" "+.65*e+" "+-.55*e+" "+.017*e+" 0 0 C"+-.483*e+" "+-.05*e+" "+-.583*e+" "+-.717*e+" 0 0 Z"
case"bean":return"M0 "+.5*e+" A"+.25*e+" "+.5*e+" 0 0 1 0 "+.5*-e+" A"+.15*e+" "+.25*e+" 0 0 1 1 0 A"+.15*e+" "+.25*e+" 0 0 1 0 "+.5*e
case"butterfly":return"M0 "+.25*-e+" C0 "+.25*-e+" "+.85*e+" "+-e+" "+.3*e+" "+.25*e+" C"+.6*e+" "+.7*e+" 0 "+.4*e+" 0 "+.4*e+" M0 "+.25*-e+" C0 "+.25*-e+" "+.85*-e+" "+-e+" "+.3*-e+" "+.25*e+" C"+.6*-e+" "+.7*e+" 0 "+.4*e+" 0 "+.4*e+" M0 "+.25*-e+" L"+.1*e+" "+.55*-e+" M0 "+.25*-e+" L"+.1*-e+" "+.55*-e
case"clover":return"M"+.033*e+" "+-.033*e+" C"+-.133*e+" "+-.966*e+" "+1.066*e+" "+-.116*e+" "+.1*e+" "+.033*e+" C"+.933*e+" "+.233*e+" "+-.133*e+" "+.9*e+" "+.016*e+" "+.083*e+" C"+-.633*e+" "+.6*e+" "+-.6*e+" "+-.6*e+" "+.033*e+" "+-.033*e+" Z"
case"cloverFour":return"M"+.05*-e+" "+.05*-e+" C"+.4*-e+" "+.6*-e+" "+.4*e+" "+.6*-e+" "+.05*e+" "+.05*-e+" C"+.6*e+" "+.4*-e+" "+.6*e+" "+.4*e+" "+.05*e+" "+.05*e+" C"+.4*e+" "+.6*e+" "+.4*-e+" "+.6*e+" "+.05*-e+" "+.05*e+" C"+.6*-e+" "+.4*e+" "+.6*-e+" "+.4*-e+" "+.05*-e+" "+.05*-e+" Z"
case"cross":return"M"+-e/2+" "+.2*-e+" L"+.2*-e+" "+.2*-e+" L"+.2*-e+" "+-e/2+" L"+.2*e+" "+-e/2+" L"+.2*e+" "+.2*-e+" L"+e/2+" "+.2*-e+" L"+e/2+" "+.2*e+" L"+.2*e+" "+.2*e+" L"+.2*e+" "+e/2+" L"+.2*-e+" "+e/2+" L"+.2*-e+" "+.2*e+" L"+-e/2+" "+.2*e+" Z"
case"diamond":return"M"+.4*-e+" 0 L0 "+-e/2+" L"+.4*e+" 0 L0 "+e/2+" Z"
case"ellipse":return"M"+.5*-e+" 0 A"+.5*e+" "+.35*e+" 0 0 1 "+.5*e+" 0 A"+.5*e+" "+.35*e+" 0 0 1 "+.5*-e+" 0"
case"gear":return"M"+-.088*e+" "+-.365*e+" L"+-.084*e+" "+-.471*e+" L"+.092*e+" "+-.471*e+" L"+.097*e+" "+-.369*e+" L"+.194*e+" "+-.317*e+" L"+.27*e+" "+-.386*e+" L"+.409*e+" "+-.263*e+" L"+.339*e+" "+-.189*e+" L"+.364*e+" "+-.088*e+" L"+.478*e+" "+-.088*e+" L"+.478*e+" "+.097*e+" L"+.369*e+" "+.097*e+" L"+.325*e+" "+.192*e+" L"+.394*e+" "+.265*e+" L"+.254*e+" "+.396*e+" L"+.197*e+" "+.325*e+" L"+.092*e+" "+.364*e+" L"+.092*e+" "+.476*e+" L"+-.084*e+" "+.476*e+" L"+-.084*e+" "+.364*e+" L"+-.185*e+" "+.32*e+" L"+-.263*e+" "+.394*e+" L"+-.388*e+" "+.26*e+" L"+-.317*e+" "+.192*e+" L"+-.354*e+" "+.097*e+" L"+-.473*e+" "+.097*e+" L"+-.473*e+" "+-.091*e+" L"+-.356*e+" "+-.091*e+" L"+-.317*e+" "+-.189*e+" L"+-.384*e+" "+-.258*e+" L"+-.267*e+" "+-.384*e+" L"+-.184*e+" "+-.312*e+" L"+-.088*e+" "+-.365*e+" Z"
case"heart":return"M0 "+.2*-e+" C"+.65*e+" "+.65*-e+" "+.65*e+" "+.2*e+" 0 "+.45*e+" C"+.65*-e+" "+.2*e+" "+.65*-e+" "+.65*-e+" 0 "+.2*-e+"Z"
case"star":return"M0 "+.5*-e+" L"+.122*e+" "+.12*-e+" L"+.5*e+" "+.12*-e+" L"+.197*e+" "+.12*e+" L"+.306*e+" "+.5*e+" L0 "+.274*e+" L"+.306*-e+" "+.5*e+" L"+.197*-e+" "+.12*e+" L"+.5*-e+" "+.12*-e+" L"+.122*-e+" "+.12*-e+" Z"
case"malteseCross":return"M"+.3*-e+" "+.4*-e+" A"+.3*e+" "+.1*e+" 0 0 1 "+.3*e+" "+.4*-e+" L"+.2*e+" "+.2*-e+" L"+.4*e+" "+.3*-e+" A"+.1*e+" "+.3*e+" 0 0 1 "+.4*e+" "+.3*e+" L"+.2*e+" "+.2*e+" L"+.3*e+" "+.4*e+" A"+.3*e+" "+.1*e+" 0 0 1 "+.3*-e+" "+.4*e+" L"+.2*-e+" "+.2*e+" L"+.4*-e+" "+.3*e+" A"+.1*e+" "+.3*e+" 0 0 1 "+.4*-e+" "+.3*-e+" L"+.2*-e+" "+.2*-e+" Z"
case"square":return"M"+.5*-e+" "+.5*-e+" L"+.5*e+" "+.5*-e+" "+.5*e+" "+.5*e+" "+.5*-e+" "+.5*e+" Z"
case"triangle-up":return"M"+.5*-e+" "+.285*e+" L0 "+.43*-e+" "+.5*e+" "+.285*e+" Z"
case"triangle-down":return"M0 "+.43*e+" "+.5*-e+" "+.285*-e+" "+.5*e+" "+.285*-e+" Z"
case"triangle-right":return"M"+.5*-e+" "+.43*-e+" "+.285*e+" 0 "+.5*-e+" "+.43*e+" Z"
case"triangle-left":return"M"+.5*e+" "+.43*e+" "+.285*-e+" 0 "+.5*e+" "+.43*-e+" Z"
case"arrow":return"M"+.5*-e+" "+.2*e+" L0 "+.5*-e+" "+.5*e+" "+.2*e+" "+.25*e+" "+.2*e+" "+.25*e+" "+.5*e+" "+.25*-e+" "+.5*e+" "+.25*-e+" "+.2*e+" Z"
case"rocket":return"M"+.5*-e+" "+.5*e+" L0 "+.5*-e+" "+.5*e+" "+.5*e+" 0 "+.25*e+" "+.5*-e+" "+.5*e+" Z"
case"nylon":return"M"+-e/2+" "+-e/4+" L"+-e/4+" "+-e/4+" L"+-e/4+" "+-e/2+" M"+-e/4+" 0 L"+-e/4+" "+e/4+" L0 "+e/4+" M0 "+-e/4+" L"+e/4+" "+-e/4+" L"+e/4+" 0 M"+e/4+" "+e/2+" L"+e/4+" "+e/4+" L"+e/2+" "+e/4
case"waves":return"M"+-e+" 0 C"+7*-e/8+" "+-e/4+" "+5*-e/8+" "+-e/4+" "+-e/2+" 0 C"+3*-e/8+" "+-e/4+" "+-e/8+" "+-e/4+" 0 0 C"+e/8+" "+e/4+" "+3*e/8+" "+e/4+" "+e/2+" 0 C"+5*e/8+" "+-e/4+" "+7*e/8+" "+-e/4+" "+3*e/4+" 0"
case"woven":return"M"+-e/4+" "+-e/4+" L"+e/4+" "+e/4+" M"+e/4+" "+-e/4+" L"+e/2+" "+-e/2+" M"+-e/4+" "+e/4+" L"+-e/2+" "+e/2+" M"+e/4+" "+3*e/4+" L"+3*e/4+" "+e/4
case"crosses":return"M "+-e/4+" "+-e/4+" L"+e/4+","+e/4+" M"+-e/4+","+e/4+" L"+e/4+","+-e/4
case"caps":return"M"+-e/4+" "+e/4+" L0 "+-e/4+" "+e/4+" "+e/4
case"hexagons":return"M"+-e/2+" 0 L"+-e/4+" 0 M"+e/2+" 0 L"+e/4+" "+-e/2+" L0 "+-e/2+" L"+-e/4+" 0 L0 "+e/2+" L"+e/4+" "+e/2+"Z"
case"line":case"horizontal-line":return"M"+.5*-e+" 0 L"+.5*e+" 0"
case"diagonal-line-right":return"M"+3*-e/4+" "+-e/4+" L"+-e/4+" "+3*-e/4+" M"+-e/2+" "+e/2+" L"+e/2+" "+-e/2+" M"+e/4+" "+3*e/4+" L"+3*e/4+" "+e/4
case"vertical-line":return"M0 "+-e/2+" L0 "+e/2
case"hexagon":return"M"+.433*e+" "+.25*e+" L"+0*e+" "+.5*e+" L"+-.433*e+" "+.25*e+" L"+-.433*e+" "+-.26*e+" L"+0*e+" "+-.5*e+" L"+.433*e+" "+-.26*e+" Z"
case"diagonal-line-left":return"M"+3*-e/4+" "+-e/2+" L"+-e/4+" "+e/2+" M"+-e/4+" "+-e/2+" L"+e/4+" "+e/2+" M"+e/4+" "+-e/2+" L"+3*e/4+" "+e/2
case"oval":return"M"+-e/2+" 0 A"+e/2+" "+e/2+" 0 0 1 0 "+-e/2+" A"+e/2+" "+e/2+" 0 0 1 "+-e/2+" 0"
case"rect":var n=arguments[0],r=arguments[1]||0
return"M"+-n/2+" "+-r/2+" L"+n/2+" "+-r/2+" L"+n/2+" "+r/2+" L"+-n/2+" "+r/2+"Z"
case"ninja":return"M"+-.267*e+" "+-.367*e+" L"+.167*e+" "+-.133*e+" L"+.433*e+" "+-.267*e+" L"+.2*e+" "+.167*e+" L"+.333*e+" "+.433*e+" L"+-.1*e+" "+.167*e+" L"+-.367*e+" "+.333*e+" L"+-.167*e+" "+-.1*e+" Z"
default:return"M"+-e/2+" 0 A"+e/2+" "+e/2+" 0 0 1 "+e/2+" 0 A"+e/2+" "+e/2+" 0 0 1 "+-e/2+" 0"}}}function T(t,e,n,r,a){var i,o=r.color,l=r.strokeWidth,s=r.imageSize,u=r.transform,c=P(n.symbol||r.symbol),h=null!=n.imageUrl&&""!==n.imageUrl,d=W(n.size,W(l,1)),f=d*r.symbolSize.outer,p=d*r.symbolSize.inner,g=null!=u?"translate("+u[0]+","+u[1]+")":null,y=(null!=e?d:f)*(null!=s?s:10)
if(null!=e){(i=kt(a.getPatternSvg().select("defs"),"marker",[1],"#","id",e)).attrs({id:e,orient:0,viewBox:10*-d/2+" "+10*-d/2+" "+10*d+" "+10*d,markerUnits:"userSpaceOnUse",markerWidth:10*d,markerHeight:10*d})}else i=t
kt(i,"path",[1],".","class","outer").attrs({d:c(h?y:10*f),transform:g}).styles({fill:function(){if(h){var t={name:n.imageUrl,width:y,height:y,x:-y/2,y:-y/2}
return"url("+H()+"#"+Dl.get(jl,"imageFill",t,{chartObj:a})+")"}return n.outerFillColor||o},"fill-opacity":n.outerFillOpacity,stroke:n.outerStrokeColor||o,"stroke-opacity":n.outerStrokeOpacity,"stroke-width":n.outerStrokeWidth,"stroke-dasharray":x(n.outerDashStyle,n.outerStrokeWidth),"stroke-linecap":b(n.outerLineCap,n.outerDashStyle)})
return kt(i,"path",h?[]:[1],".","class","inner").attrs({d:c(10*p),transform:g}).styles({fill:n.innerFillColor||o,"fill-opacity":n.innerFillOpacity,stroke:n.innerStrokeColor||o,"stroke-opacity":n.innerStrokeOpacity,"stroke-width":n.innerStrokeWidth,"stroke-dasharray":x(n.innerDashStyle,n.innerStrokeWidth),"stroke-linecap":b(n.innerLineCap,n.innerDashStyle)}),i}function M(t,e,n){if(Ll.IE&&e.enabled)(function(t,e,n){var r=X(n)?n-1:e.repeat||1/0
if(!t.node()||!r)return void t.styles({transform:null,opacity:null})
var a=(e.type||"twinkle")===bo,i=(e.duration||800)/2,o=si(e.easingType),l=i,s=a?500:0,u=a?0:i,c=a?{transform:"scale(1)",opacity:0}:{transform:"scale(0)"},h=a?{transform:"scale(0)",opacity:1}:{transform:"scale(1)"}
t.transition(),t.attrs(h).transition().delay(s).duration(l).ease(o).attrs(c).transition().duration(u).ease(o).attrs(h).on("end",function(){M(t,e,r)})})(t,e)
else{var r={animation:$a,opacity:$a,transform:$a}
if(e.enabled){var a=X(e.repeat)?e.repeat:"infinite",i=e.type||"twinkle",o=(e.duration||800)/1e3,l=("fade"===i?250:0)/1e3,s=e.easingType||"linear",u=kt(ri(wt(n.container.node())).selectAll("div.__baseZC_Container__"),"style",[1]).node(),c="",h="ZC"+L(e,"blink")
switch(i){case"twinkle":c="\n@keyframes "+h+" { 0% {transform: scale(1);}50% {transform: scale(0);}100% {transform: scale(1);} }\n"
break
case"fade":c="\n@keyframes "+h+" { 0% {transform: scale(0);opacity: 1;}100% {transform: scale(1);opacity: 0;} }\n",t.styles({transform:"scale(0)",opacity:1})}qr[h]||(u.innerHTML+=c,qr[h]=!0),t.style("animation",h+" "+o+"s "+s+" "+l+"s "+a).on("animationend",function(){d3.select(this).styles(r)})}else t.styles(r)}}function E(t,e){t.attr("x",e.left).attr("y",e.top).attr("width",e.width).attr("height",e.height).style("fill-opacity",0).style("stroke",Qa)}function L(t,e){if(null!=t&&t.constructor==Object){var n,a=""
for(var i in t)t.hasOwnProperty(i)&&((n=t[i])&&n.constructor===Object&&(n=r(n)),a+=null==n||""==n?"$$":n+"_")
return a=e+a,a=a.replace(/[.-]/g,"_"),a=a.replace(/[`~!@#$%^&*( )|+\-=?;:'",.<>{}[\]\\\/\s]/gi,"_")}return null!=e?e:void 0}function z(t,e,n){var r=xi(t),a=di().domain([-1,0,1]).range([xi(r.h,r.s,.1),r,xi(r.h,r.s,.9)]).interpolate(Ni),i=di().domain(e).range(n)
return function(t){return a(i(t))}}function D(t){return t&&bt(t)?t.getBBox():{x:0,y:0,height:0,width:0}}function R(t){if(!qr.dataEncoded||null==t)return t
var e=document.createElement("div")
e.innerHTML=encodeURI(t)
var n=e.textContent
return decodeURI(n)}function j(t){if(qr.dataEncoded||null==t)return t
var e=document.createElement("div")
e.textContent=R(t)
return e.innerHTML}function I(t){return t.slice(0)}function H(){return ai("base").node()?location.href.split(location.search||location.hash||/[?#]/)[0]:""}function B(t,e,n){var r=e.replace(/\[(\w+)\]/g,".$1"),a=(r=r.replace(/^\./,"")).split(".").reduce(function(t,e){return X(t)?t[e]:t},t)
return n?a:X(a)}function N(t){return!X(t)}function F(t){return Array.prototype.slice.call(t)}function Y(){var t=F(arguments),e=!0===t[0]&&t.shift(),n=t.shift()
if("string"==typeof n){var r=Vl(window,n)
n="function"==typeof r?r:n}return"function"==typeof n?e?n.apply(t[0],t.splice(1)):n.apply(void 0,t):n}function V(t,e){for(var n,r=0,a=t.length;a>r&&(null==n||""===n);r++)t[r]&&(n=t[r][e])
return n}function W(t,e){var n=null==t||""===t?e:t,r=JSON.parse(n)
return n="number"==typeof r?parseFloat(r):"boolean"==typeof r?JSON.parse(r):r}function U(t,e,n,r,a,i){var o,l=Ra(a,i),s=r*l/100,u=n*l/100
return o=t[e],o=null==o||""===o?null:u>o?u:o>s?s:parseFloat(o)}function X(t){return void 0!==t&&null!==t}function G(t){return t>0}function q(t){return null==t||"null"==t}function Z(t){return t+"".toLocaleLowerCase()==="true"}function Q(t){return(t+="").replace(/ /g,"px ")+"px"}function K(t,e){if(!t||!e)return null
var n,r={}
for(var a in t)if(t.hasOwnProperty(a)&&e.hasOwnProperty(a)){var i=t[a],o=e[a]
if(!i||i.constructor!=Object&&i.constructor!=Array)i==o&&(r[a]=i,n=!0)
else{var l=K(i,o)
null!=l&&(r[a]=l,n=!0)}}return n?r:null}function $(t){return function(t){var e=bi(t)
return(299*e.r+587*e.g+114*e.b)/1e3<128}(t)?"#f8f8f8":"#444444"}function J(t){var e=t.getBoundingClientRect(),n=t&&t.ownerDocument,r=n.documentElement,a=function(t){return function(t){return null!=t&&t===t.window}(t)?t:9===t.nodeType&&t.defaultView}(n)
return{top:e.top+a.pageYOffset-r.clientTop,left:e.left+a.pageXOffset-r.clientLeft}}function tt(t){return t?t.split(",").reverse().join():t}function et(){return X(document.visibilityState)&&"visible"!==document.visibilityState}function nt(t,e,n,r,a,i,o,l,s,u){var c="wrapOnSpace"==l||"wrapAll"==l
return t.map(function(t){var h
return h=e(n,t,a,r,i,null,null,o),h=c?Le(h,l,s.horizontal,s.vertical,u):h})}function rt(t,e){if("object"!=typeof t)return!1
if(n(t)||"number"==typeof t.length)Array.prototype.forEach.call(t,e)
else for(var r in t)t.hasOwnProperty(r)&&e(t[r],r,t)}function at(t){if(arguments[1]){for(var e=1,n=arguments.length;n>e;e++){var r=arguments[e]
for(var a in r)!t[a]&&r.hasOwnProperty(a)&&(t[a]=r[a])}return t}}function it(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e)
var n=t.prototype
t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e),at(t.prototype,n)}function ot(t,e){var n=t.indexOf(e)
return n>-1&&t.splice(n,1),t}function lt(t,n,r){var a
return t.isD3Selection&&(t=t.node()),"width"===n?Ra(t.offsetWidth,t.scrollWidth)-lt(t,"padding-left")-lt(t,"padding-right"):"height"===n?Ra(t.offsetHeight,t.scrollHeight)-lt(t,"padding-top")-lt(t,"padding-bottom"):((a=window.getComputedStyle(t))&&(a=a.getPropertyValue(n),Wl(r,"opacity"!==n)&&(a=e(a))),a)}function st(t){return t instanceof HTMLElement}function ut(t){return n(t)?t:[t]}function ct(t){var n,r,a,i
if(X(t)){var o=t.toString().split(" "),l=qr.DataProcessor.helpers.priorityBasedValue
n=e(l([o[0],0])),r=e(l([o[1],o[0],0])),a=e(l([o[2],o[0],0])),i=e(l([o[3],o[1],o[0],0]))}else n=0,r=0,a=0,i=0
return{top:n,right:r,bottom:a,left:i}}function ht(t){var n={},r=null!=t?t.toString().split("/"):null,a=null!=r&&null!=r[0]?r[0].split(" "):[],i=null!=r&&null!=r[1]?r[1].split(" "):a,o=qr.DataProcessor.helpers.priorityBasedValue
return n.tlx=e(o([a[0]])),n.tly=e(o([i[0],a[0]])),n.trx=e(o([a[1],a[0]])),n.trY=e(o([i[1],i[0],a[1],a[0]])),n.brx=e(o([a[2],a[0]])),n.bry=e(o([i[2],i[0],a[2],a[0]])),n.blx=e(o([a[3],a[1],a[0]])),n.bly=e(o([i[3],i[1],a[3],a[0]])),n}function ft(t){return t.charAt(0).toUpperCase()+t.slice(1)}function pt(t){var e=t.canvas,n=Wl(window.devicePixelRatio,1)
return e.style.width=e.width+"px",e.style.height=e.height+"px",e.setAttribute("width",e.width*n),e.setAttribute("height",e.height*n),t.scale(n,n),t}function gt(t,e){if(Array.prototype.find)return t.find(e)
for(var n=t.length>>>0,r=0;n>r;){var a=t[r]
if(e.call(e,a,r,t))return a
r++}}function yt(t){return t.getRootNode?t.getRootNode():null!=t.parentNode?yt(t.parentNode):t}function vt(t){return mt(yt(t))}function mt(t){return"#document-fragment"===t.nodeName&&"ShadowRoot"===t.constructor.name}function xt(t){return vt(t)||document.body.contains(t)}function bt(t){return xt(t)&&d3.select(t).style("display")!==Za}function wt(t){var e=yt(t)
if(mt(e)){var n=e.querySelector("._zc_fakeBody")
return n||(n=document.createElement("div"),n.className="_zc_fakeBody",e.appendChild(n)),n}return document.body}function Ct(t){return yt(t).ZC_DOCUMENT_INDEX}function kt(t,e,n,r,a,i,o,l){r=r||"",i=i||""
var s,u=(s=t.selectAll(e+r+i).data(n,l)).enter().append(e).merge(s)
return a&&u.attr(a,i),o&&u.styles(o),s.exit().remove(),u}function St(t,e,n,r,a,i,o,l,s,u){if(null==e||!e.trim()||!t)return e
var c,h
s=s||t,l?(c=l.width,h=l.height):(c=r.right-r.left,h=r.bottom-r.top)
var d=0
if("left"==a||"right"==a?(n.top+n.height-o.bottom>r.bottom&&(d+=(n.top+n.height-o.bottom-r.bottom)/n.height),n.top+o.top<r.top&&(d+=(r.top-(n.top+o.top))/n.height),h=n.height-Da(0,n.top+n.height-o.bottom-r.bottom)-Da(0,r.top-(n.top+o.top))):("bottom"==a||"top"==a)&&(n.left+n.width-o.right>r.right&&(d+=(n.left+n.width-o.right-r.right)/n.width),n.left+o.left<r.left&&(d+=(r.left-(n.left+o.left))/n.width),c=n.width-Da(0,n.left+n.width-o.right-r.right)-Da(0,r.left-(n.left+o.left))),(d=parseFloat(d.toFixed(2)))>0){var f=za((1-d)*e.length)
t.textContent=e.substring(0,f-1)+i
var p=("tspan"==s.nodeName?Te:Me)(s)
!1===(u="tspan"!=t.nodeName&&u)||p.width==n.width&&p.height==n.height||Mt(t,s,e,c,h,p,i)}}function Ot(t){t.isD3Selection&&(t=t.node())
var e=t.transform.baseVal.consolidate(),n=X(e)?e.matrix:null
if(X(n)){var r,a,i,o=n.a,l=n.b,s=n.c,u=n.d,c=n.e,h=n.f
return(r=Ha(o*o+l*l))&&(o/=r,l/=r),(i=o*s+l*u)&&(s-=o*i,u-=l*i),(a=Ha(s*s+u*u))&&(s/=a,u/=a,i/=a),l*s>o*u&&(o=-o,l=-l,i=-i,r=-r),{translate:[c,h],skew:[180*Va(l,o)/Xa,180*Math.atan(i)/Xa],rotate:180*Va(l,o)/Xa,scale:[r,a]}}return{translate:[0,0],skew:[0,0],rotate:0,scale:[0,0]}}function At(t,e,n,r,a,i,o){var l,s,u,c
return l=i&&o?t-n:t,s=i&&o?t:t+n,u=i&&!o?e-r:e,c=i&&!o?e:e+r,a=_t(a,n,r),"M"+l+","+(c-a.bly)+"L"+l+","+(u+a.tly)+"A"+a.tlx+","+a.tly+" 0 0 1 "+(l+a.tlx)+","+u+"L"+(s-a.trx)+","+u+"A"+a.trx+","+a.trY+" 0 0 1 "+s+","+(u+a.trY)+"L"+s+","+(c-a.bry)+"A"+a.brx+","+a.bry+" 0 0 1 "+(s-a.brx)+","+c+"L"+(l+a.blx)+","+c+"A"+a.blx+","+a.bly+" 0 0 1 "+l+","+(c-a.bly)+"Z"}function _t(t,e,n,r){var a,i=Object.create(t),o=i.tlx+i.trx,l=i.trY+i.bry,s=i.brx+i.blx,u=i.tly+i.bly
return u>n&&(a=u/(u-n),i.tly=i.tly-i.tly/a,i.bly=i.bly-i.bly/a),o>e&&(a=o/(o-e),i.tlx=i.tlx-i.tlx/a,i.trx=i.trx-i.trx/a),l>n&&(a=l/(l-n),i.trY=i.trY-i.trY/a,i.bry=i.bry-i.bry/a),s>e&&(a=s/(s-e),i.brx=i.brx-i.brx/a,i.blx=i.blx-i.blx/a),r&&(i.tlx=i.tly=Math.min(i.tlx,i.tly),i.trx=i.trY=Math.min(i.trx,i.trY),i.blx=i.bly=Math.min(i.blx,i.bly),i.brx=i.bry=Math.min(i.brx,i.bry)),i}function Pt(t,e,n){var r=qr.utils.getVal(V(e,"fontSize")),a=V(e,"fontFamily"),i=V(e,"fontWeight"),o=V(e,"fontStyle"),l=V(e,"textShadow"),s=V(e,"fontColor"),u=V(e,"textDecoration"),c=V(e,"strokeColor"),h={"font-size":r+"px","font-family":a,"font-weight":i,"font-style":o,"text-shadow":l,"text-decoration":u,"fill-opacity":V(e,"fontOpacity")}
return X(t)?(h[n?"color":"fill"]=s,n||!c||Ll.IE||(h.stroke=c,h["stroke-width"]=V(e,"strokeWidth")||3,h["paint-order"]="stroke"),void t.styles(h)):(h.color=s,h)}function Tt(t,e){t.append("title").text(function(){return e||this.parentNode.textContent})}function Mt(t,e,n,r,a,i,o){function l(r){var a="tspan"==t.nodeName?Te:Me
t.textContent=n.substring(0,s-u)+o,r&&(i=a(e))}var s=t.textContent.length-1,u=o.length
if(i.width>r||i.height>a)for(var c=0;s>=c;){if(l(!0),i.width<=r&&i.height<=a)return
s--}else for(c=n.length;c>s;){if(i.width>=r||i.height>=a)return s--,void l(!1)
s++}}function Et(t){return t.match(/[a-z][^a-z]*/gi).map(function(t){var e=t.match(/[a-z]/gi).pop(),n=t.match(/-?[0-9]\d*(\.\d+)?/g)
return n&&(n=n.map(function(t){return parseFloat(t)})),{function:e,moves:n}})}function Lt(t,e,r,a){var i=n(e)&&e.length>1,o=a?"html":"text",l=d3.select(t.node().parentNode)
if(i){t.text(null)
var s=t.attr("x")||0,u=t.attr("y")||0,c=t.attr("dy")?parseFloat(t.attr("dy")):.71,h=0,d=X(r)&&X(r.lineHeight)?r.lineHeight:c,f=X(r)&&r.orient
d="top"==f?-(e.length-1+d):"left"==f||"right"==f?-(e.length-2+d)/2:d,e.forEach(function(e){if(a)zt(l,t,e)
else{var n=t.append("tspan")
n.attr("x",s).attr("y",u).attr("dy",function(){return h+++d+"em"}),n[o](function(){return e})}})}else a?(t.text(null),zt(l,t,e)):t[o](e)
return t}function zt(t,e,n){if(/^<image.+<\/image>/i.test(n))kt(t,"g",[1],".","class","image").html(n)
else if(/^<tspan.+<\/tspan>/i.test(n)){var r=(new DOMParser).parseFromString('<svg xmlns="'+d3.namespaces.svg+'">'+n+"</svg>","application/xml")
e.node().appendChild(r.querySelector("tspan"))}else e.append("tspan").text(n)}function Dt(t){var e=t.selectAll("tspan").nodes()
if(e&&e.length){var n=[]
return e.forEach(function(t){n.push(t.textContent)}),n}return t.node().textContent}function Rt(t){t.isD3Selection&&(t=t.node())
for(var e=t.ownerSVGElement,n=[0,0];t!==e;){var r=Ot(t).translate
n[0]+=r[0],n[1]+=r[1],t=t.parentNode}return n}function jt(t,e,n,r,a){r||(r=d3.select("body"))
var i,o,l
if(/^[.#]/.test(e)&&(l=e[0],o=e.slice(1),i={".":"class","#":"id"}[l]),a){var s=r.selectAll(t+e).data(n),u=s.enter().insert(t,a).merge(s)
return s.exit().remove(),u.attr(i,o)}return kt(r,t,n,l,i,o)}function It(t,e){var n=e.systemConf
return+qr.utils.getVal(V([t,n.chart.plot.datalabels,n.chart,n.canvas],"fontSize"))}function Ht(t,e){var n=e.systemConf
return qr.utils.getVal(V([t,n.chart,n.canvas,El],"fontFamily"))}function Bt(t,e,n,r){var a=e&&e.animation?Fl(t.animation,e.animation,!0):t.animation,i=n.systemConf.chart.plot.animation,o={},l=a.easingType||i.easingType||(/(scatter|bubble$|packedbubble|heatmap)/.test(r)?"cubic-in-out":null)||"linear"
return o.enabled=!et()&&!n.isHiddenCoainer&&(!!Wt(n,"animation")&&V([a,i],"enabled")),o.type=a.type,o.easingType=si(l),o.duration=o.enabled?W(a.duration,+(i.duration||(/(bar|bullet|gantt|waterfall)/.test(r)?300:/(line|area|arearange)/.test(r)?600:/(scatter|bubble$|funnel|pyramid|heatmap)/.test(r)?1e3:500))):0,o}function Nt(t,e,n,r,a,i,o,l,s,u,c){function h(){if(g++,d)for(var a=0;y>a;a++)t[a]=n[g>a?a:Da(0,g-1)],e[a]=n[g>a?a:g]
else t[g-1]=n[g-1],e[g]=n[g]
if(y>g){var o=1==g&&d?(r.indexOf(f.getX(n[0]))-(g-1))*v:0,l=(d?r.indexOf(f.getX(n[g]))-r.indexOf(f.getX(n[g-1])):1)*v;(d?null!=f.getY(n[g],p)&&null!=f.getY(n[Da(0,g-1)],p):null!=f.getY(n[g],p))?u.attrs(s(t)).transition().delay(o).duration(l).ease(i).attrs(s(e)).on("end",c===al?function(t,e){e==y-1&&h()}:h):h()}}var d=a==Eo,f=l.dataset,p=l.yaxiscolumnorder,g=d?0:-1,y=n.length,v=Ea(o/(d?r.length-1:y))
h()}function Ft(t){var e=Bi(0,1)
t.styleTween("opacity",function(){return function(t){return e(t)}})}function Yt(t){t.interrupt()}function Vt(t,e,n){return n>=+t.systemConf.canvas.intelligence.dimension[e]}function Wt(t,e){return+t.systemConf.canvas.intelligence.dataCount[e]>=t.dataObject.totalnoofdatas}function Ut(t,e){return e-=Xa/2,[Ba(e)*t,Na(e)*t]}function Xt(t){return 0>(t=t%(2*Xa))?t+2*Xa:t}function Gt(t,e,n,r,a){var i=0-(t.x-.5*a),o=t.width+a-i,l=0-(t.y-.5*a)
return[e/2-(r-i)/2+(r-o)/2,n/2-(r-l)/2+(r-(t.height+a-l))/2]}function qt(t,e,n){return"string"==typeof t&&t.indexOf("%")>-1?e*+t.replace(/%/g,"")*.01:W(t,n)}function Zt(t){return di().range([0,1]).domain([Xa>t?Xa/2:3*Xa/2,Xa])(t)}function Qt(t,e,n){return t>e&&(e=t+((t=e)-e)),0>t&&0>e&&(t+=2*Xa,e+=2*Xa),0>t&&e>=0&&(0>n?e=2*Xa:t=0),(n=0>n?n+2*Xa:n)>=t&&e>=n}function Kt(t){return 180*t/Xa}function $t(t,e){var n=X(t.bandWidth)||t.levelMarker&&X(t.levelMarker.bandWidth),r=X(t.maxBandWidth)||t.levelMarker&&X(t.levelMarker.maxBandWidth),a=Da(0,qt(t.innerRadius,e,0))
if(n||r){var i=X(t.bandWidth)?qt(t.bandWidth,e,0):e-a,o=X(t.levelMarker.bandWidth)?qt(t.levelMarker.bandWidth,e,0):e-a,l=W(t.maxBandWidth,e),s=W(t.levelMarker.maxBandWidth,e)
return i=Ra(i,l),o=Ra(o,s),e-Da(i,o)}return a}function Jt(t){var e=t.match(Sa)
return e&&5===e.length?"#"+("0"+parseInt(e[1],10).toString(16)).slice(-2)+("0"+parseInt(e[2],10).toString(16)).slice(-2)+("0"+parseInt(e[3],10).toString(16)).slice(-2):t}function te(t,e,n,r){if(t===Qa)return t
n=Wl(n,"darker")
return Wl(r,d3.rgb)(t)[n](e).toString()}function ee(t,e,n,r,a){var i=t.defsLocation,o=t.chartTypes[e].name,l=t.chartTypes[e].value,s=t.systemConf.chart.plot.plotoptions[o],u=t.seriesdata[e].plotoptions,c=u&&u.gradients?Fl(s.gradients,u.gradients,!0):s.gradients,h=t.patternPallete,d=t.imagePallete,f=d&&d.length,p=!r&&h&&h.length,g=a||t.plot.renderer.mode,y=Gl.getIndexScale(t),v=function(r,a,s,u,v,m,x,b,w){var C,k=a&&t.dataset.getClr(a)
if(n=m||n,r=Math.max(r,0)||0,u)C=u
else if(C=ie(t,r,a,e),r=Gl.getItemIndex(t,y,a,r),y&&(!ae(k,t)||N(r))&&0===d3.rgb(C).opacity)return C
if("canvas"!=g||c.type||C instanceof Object||(C=Ms.rgba(C,v)),p&&/(url|data)/.test(C))return C
if(X(s)&&(C=te(C,s).toString()),d&&d.length&&ae(k,t)){var S={name:t.imagePallete[r%f],width:x&&x.width||t.patternImageSizes[r%f][0],height:x&&x.height||t.patternImageSizes[r%f][1],mode:g,context:x&&x.context},A="svg"==g||b?Dl.get(jl,"imageFill",S,{returnSVGimage:b,chartObj:t}):Dl.get(Es,"imageFill",S,{returnSVGimage:b,chartObj:t})
return"canvas"==g?A:"url("+i+"#"+A+")"}if(p){S=function(t,e,n,r,a){var i=Rl[t]?Rl[t]:O(t)
return i.bgClr_base=e,i.stroke_base=e,i.fillOpacity=i.fillOpacity||n,i.customStaticClr=a,r&&(i.x=r.x,i.y=r.y,i.width=r.width,i.height=r.height),i}(h[r%p],C,v,x,t.userdata.legend.customPatternColor),A="svg"==g||b?Dl.get(jl,"svgPatternFill",S,{returnSVGimage:b,chartObj:t}):Dl.get(Es,"canvasPatternFill",S,{returnSVGimage:b,chartObj:t})
return b||"canvas"==g?A:"url("+i+"#"+A+")"}return Gl.isQuantileColorScale(t)&&X(w)&&Ue(l)&&(c=ce(t,t.renderer[e].seriesdataAfterUpdate[w])),n&&c&&c.type?ne(c,n,C,g,v,o,b,t):C}
return v.gradientOptions=c,v}function ne(t,e,n,r,a,i,o,l){var s,u=k(t,e,n,a),c={offset:i,chartObj:l}
return s="svg"===r?Dl.get(Il,"svgGradientFill",u,c):Dl.get(Ls,"canvasGradientFill",u,{offset:i,chartObj:l,returnSVGimage:o}),o||"canvas"===r?s:"url("+l.defsLocation+"#"+s+")"}function re(t,e,n){var r,a=t.defsLocation,i=t.chartTypes[e].value,o=t.chartTypes[e].name,l=Ue(i),s=i===qr.charttype.line,u=t.seriesdata[e].plotoptions,c=t.systemConf.chart.plot.plotoptions[o],h=s&&u&&u.gradients?Fl(c.gradients,u.gradients,!0):c.gradients,d=Gl.isQuantileColorScale(t),f=t.plot.renderer.mode
return function(i,p,g,y,v,m){var x=d&&X(m)&&(s||l&&!(u&&u.strokeColor||c.strokeColor)),b=s&&h.type
if(x&&(h=ce(t,t.renderer[e].seriesdataAfterUpdate[m])),n&&(x||b)){var w=g||oe(t,e),C=k(h,n,w,v),S={offset:o,chartObj:t},O="svg"==f?Dl.get(Il,"svgGradientFill",C,S):Dl.get(Ls,"canvasGradientFill",C,{offset:o,chartObj:t})
return"canvas"==f?O||w:"url("+a+"#"+O+")"}if(g)r=g
else{i=Math.max(i,0)||0
w=ie(t,i,p,e)
X(y)&&(w=te(w,y).toString()),r=w}return"canvas"!=f||r instanceof Object||(r=Ms.rgba(r,v)),r}}function ae(t,e,n,r,a){if(n||(n=e.axes.clr.scale),!n)return!0
r||(r=n.domain()),t===Ta&&(t=null)
var i=a||e.systemConf.legend.filter.range,o=!i||(e.dataset.getDataType("clr")===uo?i.indexOf(t)>-1:t>=i[0]&&t<=i[1])
return(e.dataset.getDataType("clr")===uo?r.indexOf(t)>-1:t>=r[0]&&t<=r[r.length-1])&&o&&null!==n(t)&&!(N(e.systemConf.legend.colorBand.nullAs)&&null==t)}function ie(t,e,n,r){var a=oe(t,e),i=t.isAxisCategory&&X(r)&&t.rendererConf&&t.rendererConf[r].params
return i&&i.categoryColorConfig?Cr(n,i.categoryColorConfig,a):i&&i.colorOverlay?function(t,e,n,r){var a=e.yaxiscolumnorder,i=e.threshold,o=e.thresholdType,l=t.dataset,s="x"==o?l.getX(n):l.getY(n,a)
return e.colorOverlay(i,i.color,s,r)}(t,i,n,a):n&&Gl.isQuantileColorScale(t)?le(t,n):n&&n.arcColor||a}function oe(t,e){var n=t.imagePallete||t.seriesColor
return n[e%n.length]}function le(t,e){var n=t.systemConf.legend.filter.track||{},r=W(n.fillOpacity,1),a=n.fillColor||Qa,i=t.dataset.getClr(e),o=t.axes.clr.scale
if(ae(i,t,o))return i===Ta&&(i=null),o(i)
if(0==(r=d3.rgb(a).opacity*r))return Qa
return d3.scaleLinear().domain([0,1]).range([o(i),Jt(a)]).interpolate(d3.interpolateRgb)(r)}function se(t){var n=d3.rgb(t),r=e((n.r+n.g+n.b)/3)
return"rgba("+r+","+r+","+r+","+n.opacity+")"}function ue(t,e){return t.multiColoring&&!e.legendarea.show}function ce(t,e){var n,r,a,i,o,l,s=t.axes.rotated,u=t.systemConf.chart.axes.xaxis.reversed,c=t.axes.x.scale,h=c.ordinalRange||c.range(),d="rgba(255,255,255,0)",f="discrete"===t.systemConf.legend.colorBand.colorModeOnPlot,p=di().domain([h[0],h[h.length-1]]).range([0,100]),g=[],y=[]
e.forEach(function(e){if(i=p(c(t.dataset.getX(e))),o=le(t,e),(l=o===Qa)&&(o=d),f||!a&&!l||(X(n)&&(y.push(Ra(100,n+.1)+"%"),g.push(d)),y.push(Da(0,i-.1)+"%"),g.push(d)),f&&r)if(a)y.push(Da(0,i-.1)+"%"),g.push(r)
else if(l)y.push(Ra(100,n+.1)+"%"),g.push(o)
else{var s=(i+n)/2
y.push(s+"%"),g.push(r),y.push(s+"%"),g.push(o)}y.push(i+"%"),g.push(o),n=i,r=o,a=l})
var v={type:"linear",options:{linear:{x1:0,x2:0,y1:0,y2:0,stopColor:g,stopOffset:y}}},m=s?u?"y2":"y1":u?"x1":"x2"
return v.options.linear[m]=100,v}function he(t,e){return!(t.x1>e.x2||e.x1>t.x2||t.y1>e.y2||e.y1>t.y2)}function de(){return!this.__axis}function fe(t,e,n){var r=[],a=e.chart,i=e.axis,o=i.ticks.tickValueObj,l=e.tickValues,s=e.tickFormat,u=e.tickSizeInner,c=e.tickSizeOuter,h=e.gridSize,d=e.tickPadding,f=e.rotation,p=e.orient,g=e.scale,y=o&&o.isInline,v=o&&o.inlineToPlot,m="top"===p||"left"===p?-1:1,w=v?-m:m,C=y?-m:m,k="left"===p||"right"===p?"x":"y",S="left"===p||"right"===p?"width":"height",O="top"===p||"bottom"===p?function(t){return"translate("+(t+.5)+",0)"}:function(t){return"translate(0,"+(t+.5)+")"},A=a.dataObject.isPolarAxisCategory?"H":"h",_=(n.label,n.ticklabel),P=_.events,T=n.tickmark,M=n.axisline,E=n.grid,L=e.renderGrid,z=e.renderTicklabel,D=null!=P&&0==W(P.enabled,!0)?"auto":P?P.cursor||"pointer":"pointer",R=a.systemConf.chart.plot.border,j=null==l?g.ticks?g.ticks.apply(g,r):g.domain():l,I=null==s?g.tickFormat?g.tickFormat.apply(g,r):Xl:s,H=y&&!v?o.longTickSize[S]:Math.max(u,0)+d,B=y&&!v?o.axisgroup[S]:0,N=g.origRange?g.origRange:g.range(),F=+N[0]+.5,Y=+N[N.length-1]+.5,U=(g.bandwidth?function(t){var e=Math.max(0,t.bandwidth()-1)/2
return t.round()&&(e=Math.round(e)),function(n){return+t(n)+e}}:function(t){return function(e){return+t(e)}})(g.copy()),G=t.selection?t.selection():t,q=G.selectAll(".domain").data([null]),Z=G.selectAll(".tick").data(j,g).order(),Q=Z.exit(),K=Z.enter().append("g").attr("class","tick"),$=Z.select("line.minorTicks"),J=h&&E.show?Z.select("line.majorTicks"):Z.select("line.majorTicks").remove(),tt=Z.select("text").attr("class","ticklabel")
if(q=q.merge(q.enter().insert("path",".tick")).attr("class","domain").styles({stroke:!1===M.show||M.hideParent?"transparent":M.color||"#000","stroke-width":Wl(M.strokeWidth,1),"stroke-dasharray":x(M.style,Wl(M.strokeWidth,1))}),Z=Z.merge(K),$=$.merge(K.append("line")).attr(k+"1",m*B).attr(k+"2",m*B+C*u).attr("class","minorTicks").styles({fill:"none","shape-rendering":"crispedges","stroke-width":T.strokeWidth,stroke:T.color}),L&&h&&E.show){var et=Wl(E.strokeWidth,1),nt=x(E.style,et),rt=b(E.lineCap,E.style)
J=J.merge(Z.append("line")).attr("stroke","#000").attr("class","majorTicks").attrs({x1:h.x1,y1:h.y1,x2:h.x2,y2:h.y2}).styles({fill:"none","shape-rendering":"crispedges","stroke-width":et,stroke:E.color,"stroke-dasharray":nt,"stroke-linecap":rt})}var at=[_,a.systemConf.chart,a.systemConf.canvas,El],it=qr.utils.getVal(V(at,"fontSize")),ot=V(at,"fontFamily"),lt=V(at,"fontWeight"),st=V(at,"fontStyle"),ut=V(at,"textShadow"),ct=V(at,"fontColor"),ht=V(at,"textDecoration"),dt=(V(at,"strokeColor"),Ae(p,f,null,null,T.size,d,o))
if(tt=tt.merge(K.append("text")),z&&(tt.attr("class","ticklabel").style("font-size",it+"px").style("font-family",ot).style("font-weight",lt).style("font-style",st).style("text-shadow",ut).style("text-decoration",ht).style("fill",ct).style("text-anchor",dt.textAnchor).style("cursor",D).style(k,w*H).attr(k,w*H).attr("dy",function(t,e){return o&&"zigzag"==o.mode&&e%2&&dt.dy1?dt.dy1:dt.dy}).attr("transform","rotate("+dt.rotate[0]+" "+dt.rotate[1]+" "+dt.rotate[2]+")"),function(t,e,n,r,a,i,o){var l=r.minmaxlabels||{},s=o.systemConf
if(!0===l.show){var u=!0===a.reversed,c=+qr.utils.getVal(V([l,r,s.chart,s.canvas,El],"fontSize")),h=i.domain(),d=h.length-1,f=t.filter(function(t){return!(t-h[0]&&t-h[d])})
"top"!==e&&"bottom"!==e||"middle"!==n.textAnchor?"left"!==e&&"right"!==e||!(o.plotarea.top<c/2||o.plotarea.bottom<c/2)||f.attr("dy",function(t){return t-h[u?d:0]?"0.9em":"-0.3em"}):f.style("text-anchor",function(t){return t-h[u?d:0]?"end":"start"}),Pt(f,[l,r,s.chart,s.canvas,El])}}(tt,p,dt,_,n,g,a),i.ticks.isHierarchialLevelType()&&tt.call(Oe,g,p)),Z.attr("transform",function(t){return O(U(t))}),t!==G&&(Z=Z.transition(t),$=$.transition(t),tt=tt.transition(t),Q=Q.transition(t).attr("opacity",1e-6).attr("transform",function(t){return isFinite(t=U(t))?O(t):this.getAttribute("transform")}),K.attr("opacity",1e-6).attr("transform",function(t){var e=this.parentNode.__axis
return O(U((e&&isFinite(e=e(t)),t)))})),Q.remove(),q.attr("d","left"===p||"right"==p?"M"+m*(c+B)+","+F+A+"0.5V"+Y+"H"+m*(c+B):"M"+F+","+m*c+"V0.5H"+Y+"V"+m*c),Z.attr("opacity",1).attr("transform",function(t){return O(U(t))}),o&&o.isInline&&X(R)&&!0===R.show){var ft="left"==p||"right"==p,pt=ft?1:0,gt=ft?it*parseFloat(dt.dy):0,yt=ft?[0,a.plotarea.height]:[a.plotarea.left+.05*a.plotarea.left,a.plotarea.width+.05*a.plotarea.width]
Z.style("display",function(){var t=Ot(this).translate[pt]
return function(t,e){var n=e[0],r=e[1]
return!(n>t||t>r)}(gt+t,yt)?"":"none"})}$.attr(k+"2",m*B+C*u),G.filter(de).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor","right"===p?"start":"left"===p?"end":"middle"),G.each(function(){this.__axis=U}),z&&(tt.each(I),!0===_.tooltip&&tt.each(function(){Tt(d3.select(this),this.formattedVal)}))}function pe(t,e){for(var n=e.systemConf.metadata,r=n.axes.y[t],a=1,i=r.length-1,o=n.columns[r[a-1]],l=o[o.datatype];i>=a;a++){var s=n.columns[r[a]]
l=K(l,s[s.datatype])}return l}function ge(t){switch(t){case"left":return"right"
case"right":return"left"
case"top":return"bottom"
case"bottom":return"top"}}function ye(t){return{top:Wl(t.marginTop,5),right:Wl(t.marginRight,5),bottom:Wl(t.marginBottom,5),left:Wl(t.marginLeft,5)}}function ve(t,e,n){return n||(t=ge(t)),e[t]}function me(t,e,n){var r
return"x"==e?0==n?r=t.axes.x:(t.axes.x.levels[n-1]=t.axes.x.levels[n-1]||{},r=t.axes.x.levels[n-1]):"clr"===e?r=t.axes.clr:(t.axes.y.groups[n]=t.axes.y.groups[n]||{},r=t.axes.y.groups[n]),r}function xe(t,e,n){return"inner"==t.tickOrient?"x"!=e||!n.ismultix:void 0}function be(t,e){var r=t.systemConf.legend.colorBand.ranges,a=Yl(r),i=t.dataset.getDataType("clr")===uo
return n(a[0])||(a=a.map(function(t){return[t]})),i||e||a.sort(function(t,e){return _i(t[0],e[0])}),a}function we(t,e,n,r,a){var i="y"==n?r?t.x:t.y:r?t.y:t.x,o=r&&!a||!r&&a,l=vi("y"==n?o?_i:Pi:o?Pi:_i).left(e,i,0,r&&a?e.length:e.length-1),s=r?i:e[l],u=r?e[l-1]:i
return l>0&&s>u?l-1:l}function Ce(t,e,n,r,a){var i=qr.scale.getOuterPadding(t,e,n,r)
return 2*(Ra(t[0],t[1])+a*i)}function ke(t){return t.ordinalRange?t.ordinalRange:(t.ordinalRange=t.domain().map(function(e){return t(e)}),t.ordinalRange)}function Se(t,e,n,r,a,i,o,l,s,u,c){function h(t,l){if("none"!=a){var u=t,c=[u.childNodes[0]],h=d3.select(u).selectAll("tspan").nodes()
if(h&&h.length&&(h.sort(function(t,e){return e.textContent.length-t.textContent.length}),c=h),c){if(g){p=p||o.selectAll("text.ticklabel").nodes().length
var d=ja(f.outerPaddingInPixel)
"bottom"==e||"top"==e?L?D=E.horizontal:90!=r&&270!=r&&(D=0==l||l==p-1?2*d:2*ja(f.rangeBand)):"left"!=e&&"right"!=e||90!=r&&270!=r||(z=0==l||l==p-1?2*d:2*ja(f.rangeBand))}for(var y=0;y<c.length;y++){var v,m=h&&h.length?c[y]:u,x=m.textContent,b="tspan"==m.nodeName?Te:Me,w=B=b(m),k=-1,O={width:D,height:z},_=g?0:S
if(A&&"ticklabel"==s&&!n.actChartObj){var P="left"==e||"right"==e?D:Math.abs(i.discreteWidth(t.__data__))||D,T=Ra(D,P)
return void Mt(m,m,m.textContent,T,z,B,C)}if("ticklabel"==s){if(D<B.width){k=(B.width-D)/B.width
var M=za((1-k)*m.textContent.length)
m.textContent=m.textContent.substring(0,M-2)+C,B=b(m)}if(z<B.height){k=(B.height-z)/B.height
M=za((1-k)*m.textContent.length)
m.textContent=m.textContent.substring(0,M-2)+C,B=b(m)}}var I=o.selectAll(".domain").node().getBoundingClientRect(),H={left:B.left-I.left,right:B.left+B.width-I.left,top:B.top-I.top,bottom:B.top+B.height-I.top,width:B.width,height:B.height}
if("left"!=e&&"right"!=e||0==r||180==r||360==r?"bottom"!=e&&"top"!=e||90==r||270==r||(H.left+Da(_,j.left)<R.left||H.right-Da(_,j.right)>R.right)&&(v=!0,St(m,m.textContent,H,R,e,C,j,O,m)):(H.top+Da(_,j.top)<R.top||H.bottom-Da(_,j.bottom)>R.bottom)&&(v=!0,St(m,m.textContent,H,R,e,C,j,O,m)),"ticklabel"==s&&!v){var B;((B=b(m)).width!=w.width||B.height!=w.height)&&Mt(m,u,x,O.width,O.height,B,C)}m.textContent==C&&(m.textContent=n.actChartObj?".":"")}}}}if("none"==a)return h
var d,f,p,g,y=n.plotarea,v=n.chartarea,m=n.canvasarea,x=n.actChartObj||n,b=function(t,e){return("bottom"==t||"top"==t)&&!e||("left"==t||"right"==t)&&e?"x":"y"}(e,x.axes.rotated),w="x"==b?x.systemConf.chart.axes.xaxis:x.systemConf.chart.axes.yaxis[c||0],C=null==a||"ellipsis"==a?"..":"",k=w.tickmark.align,S=qr.utils.getVal(V([u,x.systemConf.chart,x.systemConf.canvas,El],"fontSize")),O=(u="ticklabel"==s?u:{},me(x,b,c||0).ticks),A=null!=i.discreteWidth
if(null==t&&"ticklabel"==s){d=null==l.tickValues()?i.ticks?i.ticks.apply(i,[10]):i.domain():l.tickValues()
t=o.selectAll(".tick").data(d,i).selectAll("text.ticklabel")}if("ticklabel"==s&&l&&!A&&(O.isHierarchy()||"between"==k)){g=!0,d=d||l.tickValues(),f=qr.scale.getRangeBand(i,d,0)
var _=d[0],P=d[d.length-1]
w.reversed&&(_=d[d.length-1],P=d[0])
var T=ja(f.outerPaddingInPixel),M=i.bandwidth?i.bandwidth()/2:0}var E=_e(u,v),L=X(u.width)||X(u.maxWidth),z=E.vertical,D=E.horizontal,R=function(t){var n={}
return g?"bottom"==e||"top"==e?(n.left=i(_)-ja(M-T),n.right=i(P)+(T+M)):"left"!=e&&"right"!=e||90!=r&&270!=r||(n.top=i(P)-T,n.bottom=i(_)+T):(n.top=n.left=0,n.right="bottom"==e||"top"==e?Ie(t,"width",y):0,n.bottom="bottom"==e||"top"==e?0:Ie(t,"height",y)),n}(x),j=function(t,e,n,r){var a={}
return g?(a.left=a.right=0,a.top=a.bottom=0):(a.left="axislabel"==t?r*(n.width-(e.left+e.width)):r*e.left,a.right=r*(n.width-(e.left+e.width)),a.top=r*e.top,a.bottom=r*e.bottom),a}(s,y,m,.5)
return n.actChartObj||"axislabel"==s&&t.node()?h(t.node()):h}function Oe(t,e,n){t.nodes().forEach(function(t,r){var a="left"==n||"right"==n?1:0,i=[0,0],o=e.discreteWidth(r)/2
i[a]=i[a]+o,t.setAttribute("transform","translate("+i[0]+","+i[1]+")")})}function Ae(t,n,r,a,i,o,l){var s={},u="left"===t||"right"===t?"width":"height",c=(o=null==o?a.tickPadding():o,l&&l.isInline),h=l&&l.inlineToPlot,d=c&&!h?l.longTickSize[u]:Math.max(i,0)+o,f="top"===t||"left"===t?-1:1,p=h?-f:f,g=c&&l.showGrid
switch(t){case"top":s.rotate=[n,0,p*d],n>=0&&45>n||n>315&&360>=n?(s.dy=c?"0.71em":"0em",s.dy1="-1em"):n>=45&&90>=n||n>=90&&135>=n||n>=225&&315>=n?s.dy="0.35em":n>135&&225>n&&(s.dy="0.71em"),s.textAnchor="0"==n||180==e(n)||360==e(n)?"middle":e(n)<180?"end":"start"
break
case"bottom":s.rotate=[n,0,p*d],n>=0&&45>n||n>315&&360>=n?(s.dy=c?"0em":"0.71em",s.dy1="1.71em"):n>=45&&90>=n||n>=90&&135>=n||n>=225&&315>=n?s.dy="0.35em":n>135&&225>n&&(s.dy="0em")
var y="0"==n||180==e(n)||360==e(n)?"middle":e(n)<180?"start":"end"
s.textAnchor=c?"start"==y?"end":"end"==y?"start":y:y
break
case"left":s.rotate=[n,p*d,0],n>=0&&45>n?s.dy=g?"-0.35em":"0.35em":n>=45&&90>=n||n>=90&&135>=n?s.dy="0.71em":(n>135&&225>n||n>=225&&315>=n||n>315&&360>=n)&&(s.dy=c?"1em":"0em")
y="90"==n||270==e(n)?"middle":n>90&&270>n?"start":"end"
s.textAnchor=c?"start"==y?"end":"end"==y?"start":y:y
break
case"right":s.rotate=[n,p*d,0],n>=0&&45>n||n>135&&225>n?s.dy=g?"-0.35em":"0.35em":n>=225&&315>=n||n>315&&360>=n?s.dy="0.71em":(n>=90&&135>=n||n>=45&&90>=n)&&(s.dy="0em"),s.textAnchor=c?"end":"90"==n||270==e(n)?"middle":n>90&&270>n?"end":"start"}return s}function _e(t,e){return{vertical:qt(Wl(t.height,t.maxHeight,qr.axis.ticks.maxTickSizeRatio_Vert),e.height),horizontal:qt(Wl(t.width,t.maxWidth,qr.axis.ticks.maxTickSizeRatio_Hori),e.width)}}function Pe(t){var e=null!=t?t.axisformat||t.format:null
return e&&"auto"===e.specifier}function Te(t){var e=document.createRange()
e.selectNode(t)
var n=e.getClientRects(),r=n[1]||n[0]
return e.detach(),(Ll.FIREFOX||Ll.SAFARI)&&(r.width=2*r.width,r.height=2*r.height),r}function Me(t){return t.getBoundingClientRect()}function Ee(t,e,r,a,i,o,l){var s,u,c=n(t),h=Ql.getTextHeight(t,e,r,o,l,i)
return c?t.forEach(function(t,n){X(a)&&a.length&&(e=a[n].fontSize||e,r=a[n].fontFamily||r)
var i=Ql.getTextWidth(t,e,r,o,l)
h=Ql.getTextHeight(t,e,r,o,l),s=X(s)?Da(s,i):i,u=X(u)?u+1.1*h:h}):(X(a)&&(e=a.fontSize||e,r=a.fontFamily||r),s=Ql.getTextWidth(t,e,r,o,l),u=Ql.getTextHeight(t,e,r,o,l,i)),{width:s,height:u}}function Le(t,e,n,r,a){return null==t?t:"wrapOnSpace"==e?t.split(" "):"wrapAll"==e?function(t,e,n,r){var a,i=t.split(/\s+/).reverse(),o=[],l=[],s=r
for(e=e;a=i.pop();)if(o.push(a),Ql.getTextWidth(o.join(" "))>e){if(o.length>1&&(o.pop(),l.pop(),l.push(o.join(" "))),s>n)return l
s+=r,o=[a],l.push(a)}else l.pop(),l.push(o.join(" "))
return l}(t,n,r,a):t}function ze(t,e,r,a){e=e.data[0],r.cache.hierarchical||(r.cache.hierarchical={})
var i=r.dataObject.hierarchical,o=e.itemIndex,l=r.cache.hierarchical,s=i.finalDepth-e.levelindex,u=i.getCategoriesByDepth(s)[o],h=c.getAllChildren(u),d=ze.getQuery(h[0],s)
l.lastQuery=d,a&&ze.applyDefaultStyles(r,d,l.query!==d),l.query===d?(n(l.data)&&ze.setState(l.data,!1),l.data=l.query=l.active=l.depth=l.itemIndex=l.isLeaf=null):(n(l.data)&&ze.setState(l.data,!1),ze.setState(h,!0),l.query=d,l.data=h,l.active=!0,l.depth=s,l.itemIndex=o,l.isLeaf=u.leaf)}function De(t,e,n){n&&(qr.labelRenderer&&qr.labelRenderer.drawLabelsFromQueue(e.labelQueue,e.labelArray,t),e.labelArray=[],e.labelQueue=[],e.notesArray=qr.annotation?qr.annotation.draw(t,e.notesArray):[])}function Re(t,e){var n=t.params,r=n.stacked,a=n.chartObj,i=n.yscale,o=qr.DataProcessor.helpers,l=a.renderer[e].barDatasetIndex?a.renderer[e].barDatasetIndex():0,s=n.commonPlotOptions,u=o.getChartType(a.seriesdata[e].type||a.userdata.seriesdata.type,"string"),c="bullet"==u,h=a.dataObject.groupedByStack,d=a.seriesdata[e].plotoptions,f=d&&d.levelMarker?Fl(s.levelMarker,d.levelMarker,!0):s.levelMarker,p=s.levelMarker||{},g=a.barscale2.bandwidth()||0,y=g,v=+(s.bandWidth||null)||(c?g/3:g),m=+(p.bandWidth||g),x=+(p.maxBandWidth||g),b=+(s.maxBandWidth||g)
y=Ra(m,x,g),v=Ra(v,b,g)
var w=Da(0,(g-v)/2),C=Da(0,(g-y)/2),k={stacked:r,categories:n.xscale.domain(),axisrotated:n.axisrotated,bandwidth1:a.barscale1,bandwidth2:a.barscale2,barDatasetIndex:l,padding:w,yscale:i,hasNegValue:n.hasNegValue,yaxiscolumnorder:n.yaxiscolumnorder,addRangeBand:function(){return i.bandwidth?i.bandwidth()/2:0},barWidth:v,charttype:u,levelMarker:f,levelMarkerWidth:y,levelMarkerPadding:C,stackGroupIndex:a.userdata.seriesdata.stackGroup?je(e,h.keys(),function(t){return h.get(t).map(function(t){return t.si})}):0}
return a.renderer[e].commonOption=k,k}function je(t,e,n){return oi(e,function(e,r){return-1!=(n?n(e,r):e).indexOf(t)?r:-1})}function Ie(t,e,n){n=n||t.plotarea
var r=t.systemConf.chart[e]
return null==r||isNaN(r)?n[e]:Da(n[e],+r)}function He(t){var e=t.hAlign,n=t.vAlign,r=t.layout,a=X(t.x)&&X(t.y)
return"center"===e&&"center"===n&&(e="right"),X(r)||(r=a?"vertical":"top"===n||"bottom"===n?"horizontal":"vertical"),{hAlign:e,vAlign:n,layout:r}}function Be(t,e,n){var r=e.systemConf.legend,a=e.legendarea.element.node(),i=He(r),o=0,l=0,s=function(t){return!1===n?0:+r[t]},u=ts.isContinousLegend(e),c=u?a.getBBox():a.getBoundingClientRect(),h=c.width,d=c.height,f=X(r.x)&&X(r.y)
if(u||(c.x=0,c.y=0),f)return[r.x-c.x,r.y-c.y]
switch(i.hAlign){case"left":o=t.left+s("marginLeft")-c.x
break
case"center":o=t.width/2-h/2-c.x
break
case"right":o=(u?t.left:0)+t.width-h-s("marginRight")-c.x}switch(i.vAlign){case"top":l=t.top+s("marginTop")-c.y
break
case"center":l=t.top+t.height/2-d/2
break
case"bottom":l=t.top+t.height-d-s("marginBottom")-c.y}return[o,l]}function Ne(t){var e=He(t),n=t.vAlign,r=e.hAlign,a=0,i=0
return"horizontal"===e.layout?"top"===n||"bottom"===n?(a=as,i=ns):"center"===n&&(a=is,i=es):"left"===r||"right"===r?(a=rs,i=es):"center"===r&&(a=as,i=os),{width:a,height:i}}function Fe(t,e,n){var r="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+e+"' height='"+n+"'>"
return r+=t,r+=" </svg>",'url("data:image/svg+xml;'+(Ll.IE?"base64":"utf8")+","+(Ll.IE?Ml(r):r)+'")'}function Ye(t,e,n,r,a){var i=e&&e[r]||a
X(i)&&Y(i,d3.event,t)}function Ve(t,e,n,r,a){var i=e.events,o=n.systemConf.chart.plot.events
X(a)&&(i=e[a.type]&&e[a.type].events)
var l=X(t)&&X(t.events)?qr.utils.getValueOfPlotOptions(t.events,i)(r):null!=i?i[r]:null!=o?o[r]:null
return void 0===l&&o&&(l=o[r]),l}function We(t){var e=t.patternPallete
return e&&e.length}function Ue(t){return t===qr.charttype.area||t===qr.charttype.stkdarea||t===qr.charttype.arearange}function Xe(t){return t===qr.charttype.bar||t===qr.charttype.stkdbar||t===qr.charttype.bullet||t===qr.charttype.gantt||$e(t)&&t!==qr.charttype.geoheatmap||t===qr.charttype.waterfall}function Ge(t){return-1!=qr.chartcategory.dotPlot.indexOf(t)}function qe(t){return t===qr.charttype.bubble||t===qr.charttype.bubblepie}function Ze(t){return t===qr.charttype.waterfall}function Qe(t){return Ge(t)||t===qr.charttype.bubblepie}function Ke(t){return t===qr.charttype.sunburst}function $e(t){return t===qr.charttype.heatmap||t===qr.charttype.geoheatmap}function Je(t){return-1!=qr.chartcategory.piePlot.indexOf(t)}function tn(t){return Je(t)&&t!==qr.charttype.pie}function en(t,e){var n=Hi(t)
return null!=e.touches&&!Ll.ANDROID&&Ll.uiwebview&&(n[0]+=window.pageXOffset,n[1]+=window.pageYOffset),n}function nn(t,e,n,r){var a=function(){return t.dataObject.getTransRectValue.apply(t.dataObject,F(arguments))}
return{x:a("x",e,n,0,r),y:a("y",e,n,0,r),width:a("width",e,n,0,r),height:a("height",e,n,0,r)}}function rn(t,e,n,r,a){var i,o,l,s,u=t.dataset,c=t.systemConf.chart.plot.plotoptions.heatmap,h=c.symbol&&P(c.symbol),d=u.getX(e),f=u.getY(e,a),p=t.dataObject.hasZaxis?t.zscale(u.getZ(e)||t.zscale.domain()[0]):1,g=n.bandwidth(),y=r.bandwidth()
return t.axes.rotated?(l=y*p,s=g*p,h&&(l=s=Ra(l,s)),o=n(d)+(g-s)/2,i=r(f)+(y-l)/2):(l=g*p,s=y*p,h&&(l=s=Ra(l,s)),i=n(d)+(g-l)/2,o=r(f)+(y-s)/2),{x:i,y:o,width:l,height:s}}function an(t){return t.systemConf.tooltip.crosshair.type!=Za}function on(t,e,n){if(Gl.isQuantileColorScale(t)){var r=t.chartTypes[0].value===qr.charttype.pyramid?t.seriesdata[0].data[0]:$a
e.style("pointer-events",function(e,a){var i=r?r[r.length-1-a]:e.data||e,o=t.dataset.getClr(i)
return n||!ae(o,t)?Za:void 0})}}function ln(t,e,r,a,i,o,l,s,u,c,h,d){var f=null,p=i.plotarea,g=i.plotarea_approx
o=o||{},s&&an(i)?l?f={actLeft:r+p.left,actTop:e.y+p.top,top:e.y,left:c?p.width:e.x}:(f={top:0,actTop:p.top+a},c?(f.left=e.x,f.actLeft=e.x+p.left):(f.left=r,f.actLeft=p.left+r)):c?(f={left:e.x,top:e.y},l?(f.actLeft=r+p.left,f.actTop=e.y+p.top):(f.actLeft=e.x+p.left,f.actTop=a+p.top)):f={left:r,top:a,actLeft:p.left+r,actTop:p.top+a}
var y=e.x-t.clientX,v=e.y-t.clientY
return f.dLeft=y+p.left,f.dTop=v+p.top,f.left-=y,f.top-=v,f.dLeft=y+p.left,f.dTop=v+p.top,f.helpers={seriesindex:o.seriesPos,subseriespos:n(o.subseriesindex)?o.subseriesindex[o.seriesPos]:o.subseriesindex,subseriesLength:n(o.subseriesLength)?o.subseriesLength[o.seriesPos]:o.subseriesLength,itempos:o.itemPos,itemposShared:o.itemPosShared,color:i.seriesColor,tooltipSharedInfo:u,tooltipShared:s,svgFillFunc:d||i.renderer[o.seriesPos]&&i.renderer[o.seriesPos].fillColorFunc,inheritColors:i.dataObject.isWaterfallEnabled},h&&(f.dLeft+=g.x,f.dTop+=g.y),f}function sn(t,e){return t.userdata.metadata.columns.filter(function(t){return t.dataindex===e.dataindex})[0]}function un(t,e,n){return Ul.pointInRectangle({x:t,y:e},n)}function cn(t,e,n){return Ha((t-n.cx)*(t-n.cx)+(e-n.cy)*(e-n.cy))-(n.r||0)}function hn(t,e){var n=null,r=t.systemConf.chart.plot.plotoptions[qr.charttypenames.get(e)],a=Qe(e)||e===qr.charttype.line,i=!a,o=r&&r.events&&r.events.triggerOffset
if(X(o))n=o
else if(qe(e))if(3===arguments.length)n=arguments[2]
else{n=t.zscale.range()[1]/2+(t.dataObject.isCombinationalChart?10:50)}else n=i||t.systemConf.tooltip.sharedSeriesInfo?null:t.dataObject.isCombinationalChart&&a?10:50
return n}function dn(t){var e=t.eventHandler.trackerElement.node(),n=t.eventHandler.mousePos=en(e,d3.event),r=D(e)
return{x:n[0]-r.x,y:n[1]-r.y}}function fn(t,e,n,r,a){a=(r=r||{}).namespace||a,Ll.isMouseDevice&&e&&function(t,e,n){if(null!=t.node()){e="."+e
var r={}
for(var a in n)r[a+e]=n[a],t.on(a+e,r[a+e])
n=r,t.on(n)}}(t,a,e),Ll.isTouchDevice&&n&&function(t,e,n,r){function a(t,e,n,r){return Math.sqrt(Math.pow(n-t,2)+Math.pow(r-e,2))}function i(){c&&d3.event.preventDefault()}if(null!=t.node()){var o=r.touchleave,l=r.target,s=r.chartObj,u=s&&s.systemConf.chart.plot.events||{},c=!1!==r.preventDefault,h=!("plot"===l&&0==u.isFocusedTouchmove)
e=null!=e?"."+e:""
var d,f,p,g,y,v={},m=0,x=0,b=null,w=!1,C=(n.touchmove,n.touchend),k=n.tap,S=n.dbltap,O=n.singletouchmove,A=n.doubletouchmove
"plot"===l&&Ve(null,s.systemConf.chart.plot.plotoptions[s.chartTypes[0].name],s,"taphold")?(g=n.tap,y=C):(g=n.taphold,y=n.tapholdend)
var _="touchstart"+e,P="touchmove"+e,T="touchend"+e,M={}
M[_]=function(){if(0!=u.enabled){var t=d3.event.touches
if(!(t.length>1)&&(v.time=new Date,v.location=en(this,d3.event),b=null,w=!1,f=!1,g)){var e=d3.event,n=arguments,r=this
p=setTimeout(function(){d3.event=e,s&&(s.zcEventType="taphold"),g.apply(r,n),f=!0},500)}}},M[P]=function(){if(0!=u.enabled){var t=d3.event.touches
if(g){var e=en(this,d3.event),n=null!=v.location?a(v.location[0],v.location[1],e[0],e[1]):null
if(n>30)clearTimeout(p)
else if(f)return i(),!1}if(t.length>1)return void(2==t.length&&A&&(w=!0,A.apply(this,arguments),i()))
var r=(new Date).getTime()
if(b||(b=r),o&&null!=document.elementFromPoint){var l=0==m||r-m>50,c=t[0],y=document.elementFromPoint(c.pageX-window.pageXOffset,c.pageY-window.pageYOffset)
if(!l||"svg"===y.localName||null!=y.id.match(/tooltip/gi))return void i()
if(y!=this){if(d!=y){var x=d||this,C=d3.select(x),k=C.on(T),S=C.datum(),_=C.attr("id")||C.attr("class"),M=null!=_?_.match(/(\d)+$/gi):null
M=null!=M&&null!=M[0]?parseInt(M[0]):null,null!=k&&null!=M&&k.call(x,S,M)}var C=d3.select(y),E=C.attr("class")
s.chartTypes[0].value!==qr.charttype.dial||"inner"!==E&&"outer"!==E||(C=ri(y.parentNode))
var L=C.on(P),S=C.datum(),_=C.attr("id")||C.attr("class"),M=null!=_?_.match(/(\d)+$/gi):null
return M=null!=M&&null!=M[0]?parseInt(M[0]):null,void(null!=L&&null!=M&&(L.call(y,S,M),d=y,m=r))}}h&&b-v.time<100||O&&(s&&(s.zcEventType="touchmove"),O.apply(this,arguments),i())}},M[T]=function(){if(0!=u.enabled){var t=d3.event.touches
if(g&&(clearTimeout(p),f))return f=!1,i(),y&&y.apply(this,arguments),!1
if(!(t.length>1)){if(w&&A&&C)return w=!1,C.apply(this,arguments),void i()
var e=new Date,n=en(this,d3.event),r=e-v.time,o=null!=v.location?a(v.location[0],v.location[1],n[0],n[1]):null,l=e-x
350>=l&&l>0&&30>=o?(S&&(s&&(s.zcEventType="doubletap"),S.apply(this,arguments),i()),x=0):150>=r&&30>=o?k&&(s&&(s.zcEventType="tap"),k.apply(this,arguments),i()):C&&C.apply(this,arguments),x=e}}}
for(var E in M)t.on(E,M[E])}}(t,a,n,r)}function pn(t,e,n){if(e=null!=e&&""!=e?"."+e:"",Ll.isMouseDevice){if(""!==e)t.on(e,null)
else for(var r in n)t.on(r,null)
n=null}}function gn(t){return t.changedTouches?t.changedTouches[0]:t}function yn(t,e,n,r,a,i,o,l){function s(e){n!==co||c.customFormat?n===ho&&("axis"===a||a===ml||a===vl&&r.dataObject.isHierarchy)&&"number"==typeof e&&An(e)>12&&(e=parseFloat(e.toFixed(12))):e=bn(e,c,t),l&&c.customFormat&&(t=Yl(t),t.levelindex=l)
return u("function"==typeof c?c(e,n,t):c.customFormat?Y(c.customFormat,e,n,t,a,r):mn(c,e,t,n,l,a,r))}function u(t){return 0!=i?R(t):j(t)}if(!n)return u(e)
if(null==e)return t&&null!=t.nullformatting?u(Y(t.nullformatting,e,n,t,a,r)):e
var c=t?t[a+"format"]||t.format:null
return c&&Object.keys(c).length||(c=vn(n,t)),e.constructor==Array?e.map(function(t){return s(t)}).join(X(c.arraySeperator)?c.arraySeperator:o):s(e)}function vn(t,e){var n={}
switch(t){case"time":e&&e.groupby?n={}:e&&e.subfunction?n=xn(e.subfunction,e.useUTC):n.specifier="YYYY"
break
case"numeric":n.thousandSeperator=","
break
case"geo":break
case"percent":n.decimalPlaces=1,n.suffix="%",n.trailingZeros=!1}return n}function mn(t,r,a,i,o,l,s){var u
switch(i){case"time":var c,h=a&&!0===a.useUTC?ro:no,d=t.specifier
if(X(a)&&(c=n(a.groupby)?a.groupby:a.AUTO_GROUP_ORDER),n(d)||n(c))u=[],d=d||[null],X(o)&&(d=X(d)?[d[o]]:[null]),(d=n(d)?d:[d]).forEach(function(t,e){var n=Cn(t),i=kn(h,n,a,o)
u[e]=i?i(r):r}),l==vl&&(u=u&&u.toString())
else{var f=Cn(d)
if("auto"===t.specifier||null==f)u=r
else if(Cs.test(f)){var p=kn(h,f,a,o)
u=p(r)}else u=h(f)(r)}break
case"ordinal":var g=t.letterCase
r+="",u=g?"uppercase"===g?r.toUpperCase():"lowercase"===g?r.toLowerCase():r[0].toUpperCase()+r.substring(1).toLowerCase():r
break
case"geo":var y=t.mapBy
g=t.letterCase
if(u=r,y){var v=s.dataObject.userMapFeatures.get(r)
v&&v.properties&&v.properties[y]&&(u=v.properties[y])}u=g?"uppercase"===g?u.toUpperCase():"lowercase"===g?u.toLowerCase():u[0].toUpperCase()+u.substring(1).toLowerCase():u
break
default:if("decimal"==t.type&&e(r)!=r)return""
r="decimal"==t.type||0===t.decimalPlaces?parseFloat(r):r
var m=t.currency,x=Sn(t,null,r),b=!1
if(u=x(r),/(e|s)/gi.test(On(t))&&(X(t.decimalPlaces)?u=u.replace(/[^a-z]+/i,function(){return Sn(t,"."+t.decimalPlaces+"f")(arguments[0])}):b=!0),!1===t.signEnabled&&(u=u.substring(1,u.length)),!W(t.trailingZeros,!0)||b){var w=""
u=(u=u.replace(/[a-z]+(\+|-)*(\d)*$/i,function(){return w=arguments[0],""})).replace(/\.(\d)*0*$/gi,function(){var t=arguments[0]
return parseFloat(t)?"."+_n(+t).toString().split(".")[1]:""})+w}u=function(t,e){var n=t.thousandSeperator,r=t.decimalSeperator,a=e.split(/\./)
return(null!=n&&","!=n?a[0].replace(/,/g,n):a[0])+(a[1]?(null!=r?r:".")+a[1]:"")}(t,u),null!=m&&(u=/(\+|\-)/.test(u[0])?u[0]+m+u.slice(1):m+u)}return(i==uo||i==ho||"geo"===i)&&(u=(null!=t.prefix?t.prefix:"")+u+(null!=t.suffix?t.suffix:"")),t.breakSpace&&(u=u.split(" ")),u}function xn(t,e){var n=(e=!0===e)?ro:no
switch(t){case"YEAR":case"year":return n("%Y")
case"MONTH":case"month":return n("%B")
case"ABSDAY":return n("%a")
case"DAY":case"day":return n("%e")
case"WEEKDAY":return n("%A")
case"WEEK":case"week":return n("Week %W")
case"ABSHOUR":return n("%I")
case"ABSSECOND":return n("%S")
case"ABSMINUTE":case"MINUTE":return n("%M")
case"MILLISEC":return n("%L")
case"HOUR":return n("%H hrs")
case"DATETIME":return n("%d %b %Y %H:%M:%S")
case"DATE":return n("%x")
case"TIME":return n("%X")
case"TIMESTAMP":return n("%x %X hrs")
case"ABSMONTH":return n("%b %Y")
case"ABSWEEK":return n("W%U %Y")
case"ABSQUARTER":return function(t){var r=e?t.getUTCFullYear():t.getFullYear()
return n("Q"+Mn(t,e)+" "+r)}
case"QUARTER":return function(t){return n("Q"+Mn(t,e))}
case 100:return n("%d %b %Y %H:%M:%S %L")
default:throw"UNKNOWN TYPE 111: "+t}}function bn(t,e,n){var r=n?n.inputformat:null,a=new Date(t.toString()),i="function"==typeof r?r:"function"==typeof window[r]?window[r]:null
if(!(t instanceof Date||null==r||!i&&"timestamp"==r.toLowerCase())){t=i||typeof t==String?t:t.toString()
var o=ao,l=i?i(t,n):o(Cn(r))(t)
a=null==l?a:new Date(l)}return isNaN(a)&&(a=new Date(+t)),a}function wn(t,e,n,r,a){return t=t||{},a=(a&&t[a+"percentformat"]?a:"")+"percent",t[a+"format"]||(t.percentformat=vn("percent")),yn(t,e,n,r,a)}function Cn(t){if(t)for(var e in ms){var n=t.indexOf(e)
n>=0&&"%"!==t[n-1]&&(t=t.replace(new RegExp(e,"g"),ms[e]))}return t}function kn(t,e,r,a){var i
if(e)i=function(t,e,n){return function(e){for(var r,a=t(e),i=[],o=-1,l=0,s=a.length;++o<s;)36===a.charCodeAt(o)&&(i.push(a.slice(l,o)),r=a.charAt(++o),r=X(bs[r])?bs[r](e,n):r,i.push(r),l=o+1)
return i.push(a.slice(l,o)),i.join("")}}(t(e),0,r.useUTC)
else if(r.groupby){var o=n(r.groupby)?r.groupby:r.AUTO_GROUP_ORDER
i=xn(0!==a&&X(a)?o[a-1]:r.subfunction,r.useUTC)}return i}function Sn(t,e,n){var r,a=X(t.signEnabled)?"+":"",i=null!=t.zeroPadding&&t.zeroPadding.enabled?"0"+t.zeroPadding.digits:"",o=null!=t.thousandSeperator?",":"",l=On(t),s=/(e|s)/gi.test(l)
r=null!=t.decimalPlaces&&t.decimalPlaces>=0?s?Ll.IE?".20":"":"."+t.decimalPlaces:s?"":"."+An(n)
return eo(a+i+o+(e||r+l))}function On(t){var e=(t.decimalPlaces,t.type)
return xs[e]||"f"}function An(t){if(isNaN(t))return 0
if(t=+t,Math.floor(t)==t)return 0
return _n(t).toString().split(".")[1].length||0}function _n(t){if(/\d+\.?\d*e[+-]*\d+/i.test(t)){var e=String(t).toLowerCase().split("e"),n=e.pop(),r=Math.abs(n),a=n/r,i=e[0].split(".")
if(-1===a)t="0."+new Array(r).join("0")+i.join("")
else{var o=i[1]
o&&(r-=o.length),t=i.join("")+new Array(r+1).join("0")}}return t}function Pn(t){var e=La(t/1e3),n=La(e/60),r=La(n/60),a=La(r/24)
return{seconds:e,minute:n,hour:r,day:a,month:La(a/30.436854166666667),years:La(a/365.24225)}}function Tn(t){var e=Pn(t),n="YEAR"
return n=e.years>1?"YEAR":e.month>1?"ABSMONTH":e.day>1?"ABSDAY":e.hour>1?"ABSHOUR":e.minute>1?"ABSMINUTE":"ABSSECOND",{subFunction:n}}function Mn(t,e){return La((e?t.getUTCMonth():t.getMonth())/3)+1}function En(t,e,n,r,a,i,o,l,s){var u=l.enabled,c=l.width,h=l.height,d=At(t,e,n+2*i,r+2*i,a)
if(u&&o){var f=o===Vo?7:o===Wo?3:o===Yo?5:1,p=Et(d);(function(t,e,n){n.forEach(function(n){t.splice(e,0,{function:"l",moves:n})})})(p,f,function(n,r,a){var i=r[a-1].moves[a-1?5:0],o=r[a].moves[0],l=(i+o)/2,u=(r[a-1].moves[a-1?6:1]+r[a].moves[1])/2
if(e=r[a].moves[1],t=r[a].moves[0],X(s)&&s){var d=s>0?1:-1,f=n===Vo?i-o:o-i
l-=(f-c)/2-s*d>0?s:(f-c)/2*d}switch(n){case Vo:return[[l-c/2,e],[l,e+h],[l+c/2,e]]
case Wo:return[[l+c/2,e],[l,e-h],[l-c/2,e]]
case Fo:return[[t,u-c/2],[t-h,u],[t,u+c/2]]
case Yo:return[[t,u+c/2],[t+h,u],[t,u-c/2]]}}(o,p,f)),d=function(t){return t.reduce(function(t,e){return t+e.function.toUpperCase()+(e.moves&&e.moves.join(" ")||"")},"")}(p)}return d}function Ln(t){var e=t.systemConf.legend,n=e.colorBand.ranges,r=ts.getColorBandDimension(t),a="horizontal"===He(e).layout
return{line:{strokeColor:"grey",strokeWidth:2,height:r[a?1:0]+20},triangleUp:{size:15,fillColor:"#4C4C4C"},triangleDown:{size:15,fillColor:"#4C4C4C"},triangleUpDown:{size:15,fillColor:"#4C4C4C",padding:r[a?1:0]+15},box:{strokeWidth:1,strokeColor:"black",fillColor:"transparent",height:r[a?1:0],width:n&&n.length?r[a?0:1]/n.length:10},enlarge:{range:1.2,height:r[a?1:0],width:n&&n.length?r[a?0:1]/n.length:10},lever:{height:26,width:9,radius:2,stripeHeight:8,stripePadding:2,fillColor:"white",strokeColor:"#DADADA",stripeColor:"#DADADA",shadow:"0 0 2px rgba(0,0,0,0.2)"},hollowCircle:{size:25,outerFillColor:"white",outerStrokeColor:"#DADADA",innerStrokeColor:"#DADADA",shadow:"0 0 2px rgba(0,0,0,0.2)"},circle:{size:25,outerStrokeColor:"white",outerStrokeWidth:2,innerFillColor:"white",shadow:"0 0 2px rgba(0,0,0,0.2)"},vernier:{height:26,width:9,fillColor:"white",strokeColor:"#DADADA",shadow:"0 0 2px rgba(0,0,0,0.2)"},pentagon:{size:8,bandWidth:3,fillColor:"white",strokeColor:"#DADADA",shadow:"0 0 2px rgba(0,0,0,0.2)",height:r[a?1:0]}}}function zn(t,e){this.axes={},l.call(this,t,e),this.initialize()}function Dn(t){this.geoMap=t,this.initialize()}function Rn(t){this.geoMap=t,this.initialize()}function jn(t,e,n,r,a,i){this.layer=t,this.utils=e,this.layerContainer=n,this.styles=r,this.geoMap=a,this.useMesh=i,this.initialize()}function In(t,e,n){this.series=t,this.geoMap=e,this.index=n,this.initialize()}function Hn(t){this.geoMap=t,this.initialize()}function Bn(t,e,n,r){this.text=t,this.latLong=e,this.styles=n,this.geoMap=r}function Nn(t){this.geoMap=t,this.initialize()}function Fn(t,e){this.x=t,this.y=e}function Yn(t,e){this.longitude=t,this.latitude=e}function Vn(t){switch(t){case"bullet":t="bar"
break
case"web":case"arearange":t="area"
break
case"bubble":t="scatter"}return new Ts[t]}function Wn(t,e,n,r,a,i){function o(t,e,n){return t.select("g."+e).attr("transform","translate("+n.x+","+n.y+")")}r=X(r)?r:t.context
o(t.svg.selectAll("g.xychart"),"seriesholder",{x:t.plotarea.left,y:t.plotarea.top}),o(t.staticPaneSVG,"labelholder",{x:t.plotarea.left,y:t.plotarea.top}),n(r,e,a,i)}function Un(t,e,n){var r=t.svg.node().parentNode,a=t.svg.node().parentNode.querySelector("canvas."+e),i=t.plotarea.width,o=t.plotarea.height
a||(a=document.createElement("canvas"),a.className=e,a.setAttribute("actual-width",i),a.setAttribute("actual-height",o),a.style.position="absolute",a.style.pointerEvents=Za,r.insertBefore(a,n||t.staticPaneSVG.node())),a.width=i,a.height=o,a.style.left=Ea(t.plotarea.left)+"px",a.style.top=Ea(t.plotarea.top)+"px",a.style.visibility="visible"
var l=a.getContext("2d")
return window.devicePixelRatio?(a.style.width=La(i)+"px",a.style.height=La(o)+"px",a.width=i*window.devicePixelRatio,a.height=o*window.devicePixelRatio,l.scale(window.devicePixelRatio,window.devicePixelRatio)):window.devicePixelRatio=1,l.clearRect(0,0,i,o),l}function Xn(t,e,n){var r=new Image
r.onload=function(){var t=function(t,e){var n=0,r=0,a=t.naturalWidth,i=t.naturalHeight,o=W(e.width,50),l=W(e.height,50)
if("no-repeat"===e.repeatMode)if(i>a){var s=o-o*(a/i)
n=s/2,o-=s}else{var s=l-l*(i/a)
r=s/2,l-=s}return{x:n,y:r,width:o,height:l}}(r,e),a=document.createElement("canvas")
a.width=t.width,a.height=t.height,a.getContext("2d").drawImage(r,0,0,a.width,a.height)
var i=e.context.createPattern(a,e.repeatMode||"repeat")
n(e.context,i,t)},r.src=t}function Gn(t){return{left:-t.scrolledX||0,top:-t.scrolledY||0,right:Ie(t,"width"),bottom:Ie(t,"height")}}function qn(t,e,n,r,a){var i=r.length
return t||function(t,r){var o=e.reverseColor?i-1-r:(n.isAxisCategory||n.isNonAxisMultiSeriesCategory||n.dataObject.isPolarAxisCategory)&&!e.multiColoring?a:r
return ie(n,o,t&&t.data?t.data:t,a)}}function Zn(t,e){return Fl(e.systemConf.chart.plot.datalabels.boundBox,t.boundBox,!0)}function Qn(t,e){return!0===V([t.boundBox||{},e.systemConf.chart.plot.datalabels.boundBox||{}],"show")}function Kn(t,e){return W(V([t.boundBox||{},e.systemConf.chart.plot.datalabels.boundBox||{}],"padding"),2)}function $n(t,e){return W(V([t.boundBox||{},e.systemConf.chart.plot.datalabels.boundBox||{}],"strokeWidth"),1)}function Jn(t,e,n,r){return Da(2*(n||0)+r-t-2*e,0)}function tr(t){var e=!0===(t=t||{}).enabled,n={}
return n.enabled=e,n.width=e?X(t.width)?+t.width:10:0,n.height=e?X(t.height)?+t.height:4:0,n}function er(t,e,n,r){var a=e&&e.datalabels?Fl(t.datalabels,e.datalabels,!0):t.datalabels
return n&&function(t,e,n){var r,a,i,o,l,s,u=e.chartTypes[n].name,c=B(e.userdata,"chart.plot.plotoptions."+u+".datalabels",!0)||{}
c.showAs&&(t.showAs=c.showAs||t.showAs),(r=c.innerLabel)?(o=t.innerLabel,o.showAs=r.showAs||o.showAs,(a=r.parentLabel)&&(l=t.innerLabel.parentLabel,l.showAs=a.showAs||l.showAs)):(i=c.stackLabels)&&(s=t.stackLabels,s.showAs=i.showAs||s.showAs)}(a,n,r),a}function nr(t,e,r,a,i,o,l){var s=r.systemConf
return n(a)&&X(o)&&(a=a[o]),Pt(t,[{fontColor:rr(s,a,e,r,i,o,l)},e,s.chart.plot.datalabels,s.chart,s.canvas,El])}function rr(t,e,n,r,a,i,o){var l=n.fontColor
if("function"==typeof l){var s=Y(l,e,r)
if(X(s))return s}var u,c=Vl(r.systemConf,"chart.plot.datalabels")||{},h=Vl(r.systemConf,"map.labels")||{},d=r.isGeoMap?Wl(c.fontColor,h.fontColor):c.fontColor,f=r.chartTypes[i||0].value,p=X(t.legend.imagePallete),g=r.dataObject.isstacked(f),y=Xe(f)&&g&&!0!==o
if(Qn(n,r)){u=Zn(n,r).fillColor||e}if(l===Ta&&d===Ta){if(u&&u!==Qa)return $(u)
if(a&&p)return"#444444"
if(a&&qr.chartcategory.innerLabels.indexOf(f)>-1||y||qr.chartcategory.datalabelsInside.indexOf(f)>-1)return $(e)}return(p||(X(l)||null!==d)&&null!==l?l:e)||Wl(d,t.chart.fontColor,t.canvas.fontColor,El.fontColor)}function ar(t,e){return!(t.x1<e.x1||t.y1<e.y1||t.x2>e.x2||t.y2>e.y2)}function ir(t,e){if(Wt(e,vl)){var n=e.systemConf.metadata.axes.label
return n&&X(n[0])||!0===V([t,e.systemConf.chart.plot.datalabels],"show")}return!1}function or(t,e){return e.dataObject.noofBarEnabledSeries&&e.dataObject.isstacked()&&!e.dataObject.isStackedPercentChart&&t&&t.show}function lr(t,e,n,r,a,i){var o=+n[0],l=+n[1],s=e.plotarea,u={left:-r,right:-r,top:0,bottom:0},c=Vo
a=a||{left:-o,top:-l,right:s.width-o,bottom:s.height-l},t.each(function(){var t=D(this),e={left:t.x+(i?i[0]:0),top:t.y+(i?i[1]:0),width:t.width,height:t.height}
St(this,this.textContent,e,a,c,"..",u)})}function sr(t){return t.staticPaneSVG.select(".labelholder")}function ur(t,e,r,a,i,o,l){var s=t.seriesdata[o].yaxiscolumnorder||[0,0],u=t.chartTypes[o],c=qr.DataProcessor.helpers,h=t.dataObject,f=t.systemConf.metadata.columns,p=t.isGeoMap
e=e||{stacked:!1,commonPlotOptions:t.systemConf.chart.plot.plotoptions[u.name],yaxiscolumnorder:c.getParsedYAxisOrder(s)}
var g,y,v,m,x=t.dataset,b=e.yaxiscolumnorder,w=e.stacked,C=e.yscale,k=tn(u.value),S=W(e.commonPlotOptions.dataindex,3),O=t.renderer[0]&&t.renderer[0].getProcessedNode,A=t.systemConf.metadata.axes.label,_=A&&A[0],P=a===vl&&X(_),T=P?f[_]?"{{val("+_+")}}":_.toString():r.showAs,M=-1!=[wl,Cl,kl,_l,Pl,Tl,Sl].indexOf(T),E=-1!=[_l,Pl,Tl].indexOf(T),L="function"==typeof T||"function"==typeof window[T]
if(M||L||(m=function(t){var e=""
if(n(t))t.forEach(function(t,n){e+="<tspan class='zcTspan'"+(n?" dy='1.1em'":"")+">"+cr(t)+"</tspan>"})
else{var r=t.indexOf("<tspan")
e=-1!=r?"<tspan class='zcTspan'>"+cr(t)+"</tspan>":t}return e}(T)),!P){var z=P?"label":T==wl?wl:T==kl&&X(x.zidx)?kl:p?Sl:Cl
if(g=f[x.getColumnIdx(z,s)].datatype,y=x.getColumn(z,s)[g],v=E?wn:yn,k&&!L&&E){var D=f.filter(function(t){return t.dataindex===S})[0]
D=X(D)?D:x.getColumnIdx(z,s),g=D.datatype,y=D[g]}}var R=function(e,n){e=a==ml?e[1]:e
var r=h.isHierarchy&&O&&O(e)
if(M){var s=$a
switch(T){case _l:case Pl:case Tl:var u=i,c=a==ml?e:w||h.isPercentChart?e.y:k?e[S]:r&&r.children&&r.value||e.value||x.getY(e,b,l)
if(!w||h.isStackedPercentChart||h.isPercentChart||a!=vl){if("function"==typeof i)u=i(e,T)
else if(!X(u))if(T!==Tl&&C)u=C.domain()[1]
else{var f=Ys(t,b)
f=h.isPercentChart||h.isStackedPercentChart||w?f[b]:f,u=0>c&&c>=f[0]?-f[0]:f[1]}}else u=d(t,o,e,T)
s=c/u*100||0
break
case wl:s=r&&r.children?Ta:x.getActualX(e)
break
case kl:X(x.zidx)&&(s=x.getZ(e))
break
case Sl:s=x.getGeo(e)
break
default:s=a==ml?e:h.isHierarchy?r&&r.children&&r.value||e.value||x.getY(e,b):x.getY(e,b,l)}return v(y,s,g,t,a)}return L?Y(T,e,n,t):x.getCustomizedVal(t,m,o,$a,$a,e,a,$a,"html"!==R.contentType)}
return R.contentType=M||!L&&!n(T)&&-1==T.indexOf("<tspan")?"text":"html",R.multiLine="html"===R.contentType&&!L&&n(T)&&T.length>1,R.hasShowAsFunction=L,R}function cr(t){var e="",n=0,r={"<tspan":[],"</tspan>":[]}
return t.replace(/<tspan|<\/tspan>/g,function(){r[arguments[0]].push(arguments[1])}),r["<tspan"].forEach(function(a,i){n!=a&&(e+="<tspan>"+t.substring(n,a)+"</tspan>"),e+=t.substring(a,n=r["</tspan>"][i]+8)}),n!=t.length&&(e+="<tspan>"+t.substring(n,t.length)+"</tspan>"),e}function hr(t,e){t.selectAll("tspan.zcTspan").attr("x",e)}function dr(t,e,n,r,a,i,o,l){var s=+n[0],u=+n[1],c=e.plotarea,h={left:-r,right:-r,top:0,bottom:0},d=Vo
o=o||0,a=a||{left:-s+o,top:-u,right:c.width-s-o,bottom:c.height-u},t.each(function(){var t=this.childNodes,e=0,n=D(this),r=this.getComputedTextLength()
n.x+r>a.right&&(r-=n.x+r-a.right+o),n.x<a.left&&(r-=a.left-n.x+o)
for(var s=0;s<t.length;s++){for(var u=t[s],c=u.childNodes,f=u.getComputedTextLength(),p="",g=0;g<c.length;g++){var y=c[g].textContent
p+=y,i[e+g].textLength=y.length}if(f-r>1){var v=i[e].bbox,m={left:v.x+(l?l[0]:0),top:v.y+(l?l[1]:0),width:f,height:v.height}
St(c[0],p,m,a,d,"..",h,null,null,!1)
var x=c[0].innerHTML
".."===x&&(x="")
g=0
for(var b=0;g<c.length;g++){var w=i[e+g].textLength
c[g].innerHTML=x.substring(b,b+w),b+=w}}e+=c.length-1}})}function fr(t,e){var n=t.selectAll(function(){return this.childNodes}),r=t.attr("text-anchor"),a=+t.attr("x"),i=+t.attr("y"),o=[],l=0
return n.each(function(){var t=d3.select(this),n=parseFloat(t.attr("dy")||0),s=this.childNodes,u=this.getComputedTextLength(),c="middle"===r?-u/2:"end"==r?-u:0
l+=n
for(var h=0;h<s.length;h++){var d=s[h].getComputedTextLength(),f={dy:l,dx:c+("middle"===r?d/2:0),bbox:{x:a+c,y:i+l*e,width:s[h].getComputedTextLength(),height:e},style:s[h].style,text:s[h].textContent}
o.push(f),c+=d}}),o}function pr(t,e){return e=e||[],t.each(function(){var t=ri(this).selectAll(function(){return this.children})
if(t.size())t.each(function(){pr(ri(this),e)})
else{var n=D(this),r=this.nodeName
if(r===po){if(""===this.textContent)return
var a=Te(gr(this)),i=Te(this)
n.x+=i.left-a.left,n.y+=i.top-a.top,n.width=i.width,n.height=i.height}e.push({node:this,nodeName:r,bb:n})}}),e}function gr(t){return t.parentNode.nodeName!==fo?gr(t.parentNode):t.parentNode}function yr(t,e,n,r){for(var a=[],i=[],o=[],l=n-r,s=function(t,e){return t.dist-e.dist},u=l,c=0;n>c;c++)t[c]||a.push(c)
t.forEach(function(t){t.sort(s)}),t.forEach(function(t){t.forEach(function(t,e){0!=e&&(o[e]=o[e]||[],o[e].push(t))})}),o.forEach(function(t){t.sort(s)}),o.forEach(function(t){t.forEach(function(t){i.push([t])})}),i.forEach(function(t){l>0?l--:t[0].hide=!0}),(i=i.slice(0,u)).sort(function(t,e){return t[0].y1-e[0].y1}),i.forEach(function(n){var r=n[0],i=r.y2-r.y1,o=Da(La((r.y1-e)/i),0)
if(t[o]){for(var l,s=a[0],u=0,c=0;c<a.length;c++){var h=ja(e+a[c]*i-r.y1)
null==l&&(l=h),l>h&&(l=h,s=a[c],u=c)}if(o>s){a.splice(u,1)
var d=s
t.forEach(function(e,n){var a=e[0]
n>s&&a.y1<r.y1&&(t[d]=e,d=n)}),t[d]=[r]}else{a.splice(u,1)
d=[r]
for(var f=o;s>=f;f++)if(t[f]){if(t[f][0].y1>r.y1){var p=t[f]
t[f]=d,d=p}}else t[f]=d}}else t[o]=n}),t.forEach(function(r,a){var i=r[0],o=i.y2-i.y1,l=e+a*o-i.y1
i.translate=ja(l)<o&&n>a+1&&!t[a+1]&&0>l?0:l}),t.forEach(function(r,a){var i=r[0],o=i.y2-i.y1,l=e+a*o-i.y1
i.translate=ja(l)<o&&n>a+1&&(!t[a+1]||!t[a+1][0].translate)&&0>l?0:l})}function vr(t,e,n,r){return t.forEach(function(t){var a=t.y2-t.y1,i=Da(0,La((t.y1-r)/(t.y2-t.y1)))
t.dist=t.y1<r?r-t.y1:t.y1-(r+i*a),n[i]||(n[i]=[],e++),n[i].push(t)}),e}function mr(t,e,n,r,a,i,o,l,s){if(!t.hide){null==e&&(e=La((r-n)/(t.y2-t.y1)))
var u=s?null==a?r-t.y2:i[a].y1-t.y2:null==a?t.y1-n:t.y1-i[a].y2
l+=null!=a&&he(t,i[a])&&-5>u?ja(u):0,a=o,i.push(t),o++}return{prev:a,count:o,totalslot:e,need:l}}function xr(t,e){function n(e){var n=t.container.selectAll(".seriesholder"),i=Ot(n).translate,o=r?i[0]:a.left-e,l=r?a.top-e:i[1]
n.attr("transform","translate("+o+","+l+")"),t.container.selectAll(".labelholder").attr("transform","translate("+o+","+l+")"),t.container.selectAll(".eventgroup").attr("transform","translate("+(r?0:-e)+","+(r?-e:0)+")"),t.container.selectAll("rect.eventhandler").attr("transform","translate("+(r?0:e)+","+(r?e:0)+")"),t.drawPlotareaClippath()
var s=r?{y:a.top-e,height:a.height+e}:{x:a.left-e,width:a.width+e}
t.eventHandler.trackerElement.attrs(s).attr("clip-path",n.attr("clip-path")),br(t)
var u={name:"rect_highlight",id:t.id},c={chartObj:t}
r?(u.x=-a.left,u.y=e,u.width=a.width+a.left,u.height=a.height):(u.x=e,u.y=a.top,u.width=a.width,u.height=a.height)
var h=Dl.get(Bl,"rect",u,c)
t.container.selectAll("#zcareahighlight").attr("clip-path","url(#"+h+")")}if(t.isAxisCategory&&(t.systemConf.chart.width||t.systemConf.chart.height)){var r=t.dataObject.getAxisRotated(),a=t.plotarea,i=Ie(t,"width")-a.width,o=Ie(t,"height")-a.height,l=t.container.selectAll(".d3container").selectAll(".zohocharts_scroll"),s=+l.attr("scrollbarSize"),u={name:"rect_axis",id:t.id}
if(r?(t.scrolledY=t.scrolledY||0,u.x=-a.left,u.y=0,u.width=a.width+a.left,u.height=a.height):(t.scrolledX=t.scrolledX||0,u.x=0,u.y=0,u.width=a.width,u.height=t.canvasarea.height),br(t),l.styles({left:a.left+qa,top:a.top+qa,height:a.height+(r?0:s)+qa,width:a.width+(r?s:0)+qa}).on("scroll",function(){var e=d3.event.srcElement||d3.event.target,a=r?e.scrollTop:e.scrollLeft
t.scrolledY=r?a:0,t.scrolledX=r?0:a,d3.event.clientX=d3.event.clientX||0,d3.event.clientY=d3.event.clientY||0,t.eventHandler.mouseOut(),n(a)}),l.style(r?{"overflow-y":"auto","overflow-x":"hidden"}:{"overflow-x":"auto","overflow-y":"hidden"}),l.selectAll(".child").styles({height:a.height+(r?o:0)+qa,width:a.width+(r?0:i)+qa,"pointer-events":Za,margin:0,padding:0,"background-color":Qa}),"addorremoveseries"!==e){var c=l.node()
c.scrollLeft=0,c.scrollTop=0}var h=t.eventHandler,d={target:"plot",chartObj:t},f={click:h.click,dblclick:h.doubleclick,contextmenu:h.contextMenu},p={mousemove:h.mouseMove,mouseout:h.mouseOut}
fn(l,f,null,"chart"),fn(l,p,null,"chartmove")
fn(l,{},{tap:h.click,dbltap:h.doubleclick,singletouchmove:h.mouseMove,touchend:h.mouseOut},d)
var g=r?t.scrolledY:t.scrolledX
g&&"addorremoveseries"===e&&n(g)}}function br(t){var e,n=t.dataObject.getAxisRotated(),r=t.plotarea,a=n?t.scrolledY:t.scrolledX
if(n)e={x:-r.left,y:a,width:r.width+r.left,height:r.height}
else{var i=0
if(t.dataObject.hierarchical)for(var o=0;o<t.axes.x.count;o++){i+=me(t,"x",o).ticks.preCalcAxisLen}else i=t.axes.x.ticks.preCalcAxisLen
e={x:a,y:-r.height,width:r.width,height:i+t.plotarea.height}}e.name="rect_axis",e.id=t.id
var l={chartObj:t},s=Dl.get(Bl,"rect",e,l)
return t.container.selectAll("g.x-axis").selectAll(function(){return this.childNodes}).filter(function(){var t=d3.select(this),e=Ot(t).translate,i=n?e[0]:r.left-a,o=n?r.top-a:e[1]
t.attrs({transform:"translate("+i+","+o+")","clip-path":"url(#"+s+")"}),t.selectAll("g.axisgroup").attr("clip-path","")}),s}function wr(t,e,n,r){t.attrTween("d",function(t){var a=d3.interpolate(r[0],r[1]),i=d3.interpolate(n[0],n[1])
return function(n){return e.outerRadius(a(n)),e.innerRadius(i(n)),e(t)}})}function Cr(t,e,n){return t.isCascaded?e.cascaded.color||n:t.isPositive?e.rising.color||n:e.falling.color||n}function kr(t){var e,n=t.dataset,r=t.data,a=t.chartObj.dataObject,i=t.processedseriesData,o=i.length,l=(a.getCategories("x"),a.getCategories("x")),s=l.length,u=t.isstacked("waterfall"),c=W(r.chart.plot.plotoptions.waterfall.cascadeCategories.dataindex,2),h=[]
if(t.waterfall={},t.waterfall.comparator=[],u){for(var d,f=[],p=[],g=[],y=[],m=[],x=[],b=[],w=0,C=0,k=0;s>k;k++){var S=l[k]
b[k]=m[k]=x[k]=w
for(var O=0;o>O;O++){var A=i[O],_=A.disabled,P=A.data,T=P.length,M=qr.DataProcessor.helpers.getParsedYAxisOrder(A.yaxiscolumnorder),E=n.yidx(M)
if(!_)for(var L=0;T>L;L++){var z=P[L],D=(r=z[k])[c]
n.getActualX(r)!==S&&(r=Or(S,0,n.xidx,n.yidx(M),k,z),D=!1)
var R=n.getY(r,M)
D?(0==O&&(b[k]=m[k]=x[k]=0),d=r.isCascaded=!0,f[O]=f[O]?f[O]:R,r[E]=r.y=R||f[O]):(d=!1,r.y=R,f[O]=f[O]?r.y+f[O]:r.y)
var j=G(r.y)
r.y0=j?m[k]:x[k],j?(m[k]=r.y+m[k],g[k]=g[k]?g[k]+r.y:r.y,r.isPositive=!0):(x[k]=r.y+x[k],y[k]=y[k]?y[k]+r.y:r.y),r.index=k}}h.push(m[k],x[k]),w=G(C=(g[k]||0)+(y[k]||0))?m[k]:x[k]
var I=function(t,e,n,r,a,i,o,l){var s=[]
return s[e]=r,s.y0=o[n],s.y=i-o[n],s.index=n,s.stackedValue=a,s.isPositive=G(a),s.isCascaded=l,l&&(t.waterfall.hasPositiveCascaded=t.waterfall.hasPositiveCascaded||s.isPositive,t.waterfall.hasNegativeCascaded=t.waterfall.hasNegativeCascaded||!s.isPositive),s}(t,n.xidx,k,S,C,w,b,d)
p[k]=I}t.processedStackedData=p
var H=a.groupedByStack
H.has(0)||H.set(0,{}),H.get(0).stackExtent=v(d3.range(l.length),g,y,m,x)}else i.forEach(function(r){var a=r.data,i=qr.DataProcessor.helpers.getParsedYAxisOrder(r.yaxiscolumnorder),o=n.yidx(i)
a.forEach(function(r){l.forEach(function(a,l){var s=a,u=r[l]
if((u?n.getActualX(u).toString():null)===s.toString()){if(u[c]){var d=n.getY(u,i)
u.y0=0,u.y=d||0==l?n.getY(u,i):e,e=u.y,u[o]=u.y,u.isCascaded=!0,u.isPositive=G(u.y),t.waterfall.hasPositiveCascaded=t.waterfall.hasPositiveCascaded||u.isPositive,t.waterfall.hasNegativeCascaded=t.waterfall.hasNegativeCascaded||!u.isPositive}else u.y0=e||0,u.y=n.getY(u,i),e=u.y+u.y0,u.isPositive=G(u.y)
u.index=l,h.push(e)}else Or(s,null,n.xidx,n.yidx(i),l,r)})})})
return d3.extent(h)}function Sr(t,e,n,r,a){var i=function(t,e){var n=t.dataObject.groupedDataBySplitAxes[e],r=t.systemConf.chart.plot.plotoptions.waterfall
return n.some(function(e){var n=e.si,a=t.seriesdata[n].plotoptions,i=a&&a.comparisonLine?Fl(r.comparisonLine,a.comparisonLine,!0):r.comparisonLine
return i.enabled})}(r,n)
a=!r.datalabels.hasFixedPosition&&a
var o=r.systemConf.chart.plot.datalabels.handleOverlapping,l=r.datalabels.isStackedLabels||r.datalabels.hasFixedPosition||!o,s=a?l?10:0:10
r.dataObject.waterfall.datalabelPadding=a?r.dataObject.rangeCorrections.datalabels.y0+s:s
var u,c=(t=function(t){return t[1]<0&&(t[1]=0),t}(t))[1]-t[0],h=r.axes.y.orient,d=r.plotarea["left"==h?"height":"width"],f=5,p=c/(d-f)*f
if(i){u=c/(d-(f+=function(t){var e=t.systemConf.chart.plot.plotoptions.waterfall,n=t.axes.rotated,r=t.systemConf,a=0,i=kt(t.staticPaneSVG.selectAll("g.labelholder"),"text",[1],".","class","dummyText")
return t.seriesdata.forEach(function(t){if(t.plotoptions||!a){var o=t.plotoptions,l=o&&o.comparisonLine?Fl(e.comparisonLine,o.comparisonLine,!0):e.comparisonLine,s=l.label
i.text("800%").style("fill","none"),Pt(i,[s,r.chart,r.canvas,El])
var u=D(i.node())
a=Da(n?u.width:u.height,a)}}),i.remove(),a+10}(r)+30+s))*f}return t[1]+=i?u:p,t[0]-=r.dataObject.waterfall.hasNegativeCascaded?p:0,t}function Or(t,e,n,r,a,i){var o=[]
return o.splice(n,0,t),o.splice(r,0,0),o.isDummy=!0,o.index=a,o.y=e,o.y0=0,i.splice(a,0,o),o}function Ar(t,e,n){var r=n.chart,a=r.dataset,i=n.axisrotated,o=n.stacked,l=(n.xscale,n.yscale,n.yaxiscolumnorder),s=n.renderer,u=n.seriesindex,c=o?r.dataObject.processedStackedData:e,h=(r.systemConf.chart.axes.yaxis[l||0].reversed,r.systemConf.chart.axes.xaxis.reversed),d=n.plotoptions,f=n.commonPlotOptions,p=d&&d.connector?Fl(f.connector,d.connector,!0):f.connector,g=p.enabled?function(t,e){for(var n=e.chart.dataset,r=e.yaxiscolumnorder,a=(e.stacked,qr.DataProcessor.helpers.isCatNull(n,"y",r)),i=Pr,o=t.length-1,l=[],s=0;o>s;s++){var u=t[s],c=t[s+1],h=i(u,r),d=i(c,r),f=a(h),p=a(d)
if(f)l.push([])
else if(p){for(var g=s+2,y=t[g],v=y&&i(y,r),m=!a(v);o>g&&!m;)g++,y=t[g],v=y&&i(y,r),m=!a(v)
m&&l.push([u,y])}else l.push([u,c])}return l}(c,n):[],y=Ti().x(function(t,e){return _r(s.getParamValue("x",t,u,null,s.commonOption),s.getParamValue("width",t,u,null,s.commonOption),t,"x",h?1==e:0==e,i)}).y(function(t,e){return _r(s.getParamValue("y",t,u,null,s.commonOption),s.getParamValue("height",t,u,null,s.commonOption),t,"y",0==e,i)})
kt(t,"path",g,".","class","zcconnectorLine",null,function(t){return a.getX(t)}).attr("d",function(t){return y(t)}).styles({fill:"none",stroke:p.strokeColor||"black","stroke-width":p.strokeWidth||1,"stroke-dasharray":x(p.dashStyle,p.strokeWidth||1),"stroke-opacity":0}).transition().duration(1e3).styles({"stroke-opacity":p.strokeOpacity||1})}function _r(t,e,n,r,a,i){return"x"==r?i?a||n.isCascaded?n.isPositive?t+e:t:n.isPositive?t:t+e:a?t+e:t:i?a?t:t+e:a||n.isCascaded?n.isPositive?t:t+e:n.isPositive?t+e:t}function Pr(t){return t.y}function Tr(t,e,n){var r=n.chart,a=function(t,e){var n=e.chart,r=e.renderer,a=n.dataset,i=e.seriesindex,o=e.yaxiscolumnorder,l=e.stacked,s=n.dataObject.processedStackedData,u=(qr.DataProcessor.helpers.isCatNull(a,"y",o),t.length,e.axisrotated?r.getParamValue("height",t[0],i,null,r.commonOption):r.getParamValue("width",t[0],i,null,r.commonOption)),c=(Ra(u/10,1),e.chart.dataObject.stackedChart?e.chart.dataObject.groupedByStack.get(0).stackExtent:null),h=(function(t){t.filter(function(t){return t.isCascaded})}(t),0),d=[]
return t.map(function(n,a){var o=t[a]
if(o.isCascaded&&t[a+1]){var u=function(t,e,n){var r=t[e],a=n.chart.dataObject.stackedChart?n.chart.dataObject.groupedByStack.get(0).stackExtent:null,i=0,o=r
if(r){for(;!r.isCascaded;){var l=function(t,e){return e?Mr(t,e):t.y+t.y0}(r,a)
if(l>i&&(o=r,i=l),!(r=t[++e]))return}return{point:r,maxPt:o}}}(t,a+1,e)
if(u){var f=u.maxPt,p=(Er(o,"x",e,c),Er(f,"x",e,c)),g=Er(f,"y",e,c),y=Er(o,"x",e,c),v=Er(o,"y",e,c),m=Er(o,"width",e,c),x=Er(o,"height",e,c),b=0==o.index||o.index==t.length-1,w=u.point,C=Er(w,"x",e,c),k=Er(w,"y",e,c),S=Er(w,"width",e,c),O=Er(w,"height",e,c),A=0==w.index||w.index==t.length-1,_=function(t,e,n,r,a){var i,o,l,s,u=a.axisrotated,c=a.chart.dataObject.stacked,h=a.chart.dataObject.waterfall.datalabelPadding,d=Da(n.x,c?e.x:e.x+e.width),f=Ra(n.y,e.y),p=t.unshared?t.width/2:t.width/2+t.width/4,g=e.unshared?e.width/2:e.width/4,y=t.unshared?t.height/2:t.height/4,v=e.unshared?e.height/2:e.height/2+e.height/4
u?(i=[t.x+t.width+h,t.y+y],o=[d+h+30,t.y+y],l=[d+h+30,e.y+v],s=[e.x+e.width+h,e.y+v]):(i=[t.x+p,t.y-h],o=[t.x+p,f-h-30],l=[e.x+g,f-h-30],s=[e.x+g,e.y-h])
return[i,o,l,s]}({x:y,y:v,width:m,height:x,unshared:b},{x:C,y:k,width:S,height:O,unshared:A},{x:p,y:g},0,e)
if(l){var P=s[o.index],T=s[w.index]
_.y=(T.stackedValue-P.stackedValue)/Da(P.stackedValue,T.stackedValue)*100}else _.y=(w.y-o.y)/o.y*100
w.percent=_.y,0==h&&0!=a&&(r.getParamValue("y",t[0],i,null,r.commonOption),o.percent=(o.y-t[0].y)/o.y*100),d.push(_)}h++}}),d}(e,n),i=n.plotoptions,o=n.commonPlotOptions,l=Bt(o,i,r,"waterfall"),s=l.enabled,u=i&&i.comparisonLine?Fl(o.comparisonLine,i.comparisonLine,!0):o.comparisonLine
n.animationOptions=l
var c=Ti().x(function(t){return t[0]}).y(function(t){return t[1]})
kt(kt(t,"g",u.enabled?[1]:[],".","class","zccomparisonLines"),"path",a,".","class","lines",null,function(t){return t.y}).attr("d",function(t){return c(t)}).styles({fill:"none",stroke:u.strokeColor||"black","stroke-width":u.strokeWidth||1,"stroke-dasharray":x(u.dashStyle,u.strokeWidth||1),"stroke-opacity":0}).transition().duration(s?l.duration:0).styles({"stroke-opacity":u.strokeOpacity||1}),function(t,e,n,r,a){var i=a.chart,o=a.animationOptions.enabled,l=a.axisrotated,s=a.renderer,u=a.seriesindex,c=l?s.getParamValue("height",e[0],u,null,s.commonOption):s.getParamValue("width",e[0],u,null,s.commonOption),h=Ra(c/10,1),d=function(t){return t.map(function(e,n){return t[n][3]})}(n),f={inner:0,outer:1},p=l?"triangle-left":"triangle-down"
kt(kt(t,"g",r.enabled?[1]:[],".","class","zcmarkerPointers"),"g",d,".","class","markers",null,function(t,e){return n[e].y}).each(function(){var t=ri(this)
t.attrs({transform:function(t){return"translate("+t[0]+","+t[1]+")"}}).style("opacity",0).transition().duration(o?a.animationOptions.duration:0).style("opacity",1),T(t,null,{size:h,symbol:p,outerFillOpacity:r.strokeOpacity,outerStrokeOpacity:r.strokeOpacity},{symbolSize:f,color:r.strokeColor||"black"},i)})}(t,e,a,u,n),function(t,e,n,r){var a=r.chart,i=a.systemConf,o=r.axisrotated,l=r.animationOptions.enabled,s=n.label||{},u=s.labelPos,c=qr.utils.getVal(V([s,i.chart,i.canvas,El],"fontSize")),h="fixedTop"==u?o?a.plotarea.width:c:null,d={format:{decimalPlaces:"2",signEnabled:!0,suffix:"%"}},f=kt(t,"g",n.enabled?[1]:[],".","class","zccomparisonLabels")
kt(f,"text",e,".","class","labels",null,function(t){return t.y}).attrs({x:function(t){return o?h||t[1][0]+10:t[0][0]+(t[2][0]-t[0][0])/2},y:function(t){return o?t[1][1]+(t[2][1]-t[1][1])/2:h||t[1][1]-10}}).text(function(t){return yn(d,t.y,ho,a)}).styles({"text-anchor":o?"fixedTop"==u?"end":"start":"middle",opacity:0}).transition().duration(l?r.animationOptions.duration:0).styles({opacity:1}),Pt(f,[s,i.chart,i.canvas,El])}(t,a,u,n)}function Mr(t,e){var n=t.index,r=e.filter(function(t){return t[0]==n})[0],a=r[1],i=r[2]
return G(a)?i:i+ja(a)}function Er(t,e,n,r){var a=n.renderer,i=n.axisrotated,o=n.seriesindex
if(r){if(i&&"width"==e)return 0
var l=Mr(t,r)
return i&&"x"==e||!i&&"y"==e?a.commonOption.yscale(l):a.getParamValue(e,t,o,null,a.commonOption)}return a.getParamValue(e,t,o,null,a.commonOption)}function Lr(t,e,n,r,a){var i=t[e.dataindex]||[]
if(null!=i&&!(i instanceof Array))return null
if(!i.length)return null
if(a)a.constructor!=Array&&(e.color=[a])
else{e.color=[]
var o=e.colorGamma||[.3,.9],l=z(r,[0,i.length-1],[+o[0],+o[1]])
e.color=i.map(function(t,e){return l(e)})}var s,u=i.filter(function(t){return 0>t})
if(u.length>0){var c=(s=i.slice()).indexOf(0)
c>-1&&s.splice(c,1)
var h=e.color
s=s.sort(Pi)
for(var d=[],f=0;f<s.length;f++){var p=i.indexOf(s[f])
d.push(h[p])}e.color=d,s.splice(s.length-u.length,0,0),i=s}e.values=i
var g=qr.axis.threshold.overlay(n,"continous")(Qa,e,0,"y")
return u.length>0&&(i=s),g}function zr(t,e,r,a){var i=t.commonRendererProp().params,o=t.commonOption,l=i.chartObj,s=(l.plotarea,i.dataset),u=i.axisrotated,c=i.commonPlotOptions,h=o.yaxiscolumnorder,d=(i.color,c.dependency),f=!0===d.enabled,p=null,g=r.selectAll("g.dependencySeries").data(f?[e]:[]),y=g.enter().insert("g",":first-child").attr("class","dependencySeries").merge(g)
if(y.exit().remove(),f&&X(d.sourceIndex)&&X(d.targetIndex)&&(p=function(t,e,r){var a=[]
return t.forEach(function(i){var o=i[e]
t.forEach(function(t){t!==i&&X(o)&&n(o)&&-1!==o.indexOf(t[r])&&a.push({source:i,target:t})})}),a.length?a:void 0}(e,+d.sourceIndex,+d.targetIndex)),p){var v=d.marker,m=d.link,x=X(m.padding)?m.padding:1,b=X(v.padding)?v.padding:x
b=Ra(x,b)
var w=kt(y,"g",[1],".","class","links"),C=kt(y,"g",[1],".","class","symbol")
kt(w,"path",p,".","class","link").attr("d",function(e){var n=Dr(e,d,t,a)
return function(t,e,n,r,a,i){t=t.toUpperCase()
var o=i.chartObj,l=i.axisrotated,s=o.systemConf.chart.axes.xaxis.reversed,u=null,c=null,h=null,d=function(t,e,n,r,a){var i=!1
switch(t){case"SS":case"EE":i=!0
break
case"SE":i=e?n.x>r.x+r.width:n.y+n.height<r.y
break
case"ES":i=e?n.x+n.width<r.x-2*a:n.y>r.y+r.height}return!i}(t,l,e,n,r)
return Ti().x(function(i,o){switch(o){case 0:case 1:case 2:if(h=e,0==o)"SS"==t||"SE"==t?u=l?h.x:h.x+h.width/2:("EE"==t||"ES"==t)&&(u=l?h.x+h.width:h.x+h.width/2)
else if(1==o)"SS"==t||"SE"==t?u=l?h.x-r:u:("EE"==t||"ES"==t)&&(u=l?h.x+h.width+r:u)
else{var f
"SS"==t?(f=e.x-n.x,f=0>f?0:f,u=l?h.x-f-r:u):"EE"==t?(f=e.x+e.width-(n.x+n.width),f=f>0?0:f,u=l?h.x+h.width+r-f:u):"SE"==t?l?(u=h.x-r,c=d?h.y+h.height:n.y):u=s?u-h.width:u+h.width:"ES"==t&&(l?(u=h.x+r+h.width,c=d?h.y+h.height:n.y):u=s?u-h.width:u+h.width)}break
default:l&&(c=null),h=n,3==o?(l&&d&&(c=e.y+e.height),"SS"==t||"EE"==t?u=l?u:h.x+h.width/2:"SE"==t?u=l?h.x+h.width+r:u:"ES"==t&&(u=l?h.x-r:u)):4==o?"SE"==t?u=l?h.x+h.width+r:h.x+h.width/2:"ES"==t&&(u=l?u:h.x+h.width/2):"SS"==t||"ES"==t?u=l?h.x-a:u:("EE"==t||"SE"==t)&&(u=l?h.x+h.width+a:u)}return u}).y(function(i,o){return l?(c||h.y)+h.height/2:(0==o?"SS"==t||"SE"==t?c=e.y+e.height:("EE"==t||"ES"==t)&&(c=e.y):1==o?"SS"==t||"SE"==t?c+=r:("EE"==t||"ES"==t)&&(c=e.y-r):2==o?"SS"==t?c=e.y+e.height<n.y+n.height?n.y+n.height+r:c:"EE"==t&&(c=e.y>n.y?n.y-r:c):3==o?"SE"==t?c=d?n.y-r:c:"ES"==t&&(c=d?n.y+n.height+r:c):4==o?c+=0:"SS"==t||"ES"==t?c=n.y+n.height+a:("EE"==t||"SE"==t)&&(c=n.y-a),c)}).curve(ci("linear"))}(n.type,n.end,n.start,x,b,i)(new Array(6))}).attr("stroke",function(t){var e=s.getY(t.source,h)[0]
return s.getY(t.target,h)[1]>e?m.errorStyle:m.strokeColor}).attr("stroke-width",m.strokeWidth).attr("fill","none")
var k=kt(C,"g",!0===d.marker.enabled?p:[],".","class","arrow")
d.marker.enabled&&k.each(function(){var e,n=(v.symbol,{inner:.4,outer:.7}),r=ri(this)
r.attr("transform",function(n){var r,i,o=Dr(n,d,t,a),l=o.type
return"SS"==l||"ES"==l?(r=u?o.start.x-b:o.start.x+o.start.width/2,i=u?o.start.y+o.start.height/2:o.start.y+o.start.height+b,e=u?"triangle-right":"triangle-up"):("EE"==l||"SE"==l)&&(r=u?o.start.x+o.start.width+b:o.start.x+o.start.width/2,i=u?o.start.y+o.start.height/2:o.start.y-b,e=u?"triangle-left":"triangle-down"),"translate("+r+","+i+")"}),T(r,null,v,{symbolSize:n,color:null,symbol:e},l)})}}function Dr(t,e,n,r){return{start:Rr(t.source,n,r),end:Rr(t.target,n,r),type:e.link.type.toUpperCase()||"ES"}}function Rr(t,e,n){var r,a,i,o,l=e.commonOption
return i=e.getParamValue("x",t,n,null,l),o=e.getParamValue("y",t,n,null,l),r=e.getParamValue("width",t,n,null,l),a=e.getParamValue("height",t,n,null,l),{x:i,y:o,width:r,height:a}}function jr(t,e,n,r,a){var i,o,l,s,u=r.commonRendererProp().params,c=u.chartObj,h=u.yaxiscolumnorder,d=u.axisrotated,f=u.dataset,p=a&&a.yscale.range()[1],g=t[a.levelMarker.dataindex],y=f.getY(t,h),v=y[0],m=(y[1]-v)*g/100,x=a.yscale(v+m),b=d?0:a.levelMarkerPadding,w=d?a.levelMarkerPadding:0
i=c.dataObject.getTransRectValue("x",t,e,n,a)+b
var C=a.yscale(null==a.hasNegValue?f.getY(t,a.yaxiscolumnorder,0):a.hasNegValue)
return a.axisrotated?(o=r.getParamValue("y",t,e,n,a)+w,l=a.stacked?ja(a.yscale(t.y+t.y0)-a.yscale(t.y0))+a.addRangeBand(a.yscale):(ja(p-C-(p-x))||0)+a.addRangeBand(a.yscale),s=a.levelMarkerWidth||a.barWidth):(o=x,l=a.levelMarkerWidth||a.barWidth,s=a.stacked?ja(C-a.yscale(t.y+t.y0)-(C-a.yscale(t.y0)))+a.addRangeBand(a.yscale):ja(C-x)+a.addRangeBand(a.yscale)),{x:i,y:o,width:l,height:s}}function Ir(t,e,n,r,a,i,o){var l=n.commonRendererProp().params,s=n.commonOption,u=l.chartObj,c=u.plotarea,h=l.dataset,d=l.axisrotated,f=l.color,p=s.levelMarkerWidth,g=s.charttype,y="bullet"==g,v="gantt"==g,m=y?l.xscale.bandwidth():p,w=n.bandwidth1(),C=W(a.size,p-2*W(a.padding,s.padding/2)),k=kt(t,"g",[e],".","class","markers"+o,null,function(t){return[h.getX(t)]}),S=Wl(a.strokeWidth,1)
k.attrs({class:"markers"+o,transform:"translate("+c.left+","+c.top+")","stroke-width":S,"stroke-dasharray":x(a.dashStyle,W(a.outerStrokeWidth,1)),"stroke-linecap":b(a.lineCap,a.dashStyle),fill:a.color,stroke:a.color})
var O=kt(k,"g",e,null,null,null,null,function(t){return h.getX(t)})
O.enter().append("g")
var A="line"===a.symbol?{inner:0,outer:1}:{inner:.6,outer:1},_=a.size
O.each(function(t,e){var s=ri(this),c=i?u.seriesColor[e%u.seriesColor.length]:f
s.attrs({transform:function(t,e){var i=0,s=0
if(v){var u=Hr(t,r,e,n)
return 0===o?(i=u.x+u.width/2,s=u.y-10*a.size/2):(i=u.x+u.width/2,s=u.y+u.height+10*a.size/2),"translate("+(d?s:i)+","+(d?i:s)+")"}return i=w(h.getX(t))+m/2,s=l.yscale(t[a.dataindex]),null==t[a.dataindex]?null:"translate("+(d?s:i)+","+(d?i:s)+") rotate("+(d?90:0)+")"}}).style("display",function(t){return null==t[a.dataindex]&&y?"none":null}),a.size=X(_)?y?Ra(C,m/10):C:C/10,T(s,null,a,{symbolSize:A,color:v?c:null},u)}),a.size=_,v&&(n.markerProperties={subseriesIndex:r})}function Hr(t,e,n,r){var a,i,o,l,s=r.commonOption
return o=r.getParamValue(s.axisrotated?"y":"x",t,e,n,s),l=r.getParamValue(s.axisrotated?"x":"y",t,e,n,s),a=r.getParamValue(s.axisrotated?"height":"width",t,e,n,s),i=r.getParamValue(s.axisrotated?"width":"height",t,e,n,s),{x:o,y:l,width:a,height:i}}function Br(t){return/(left|right)/.test(t)?"bottom":"left"}function Nr(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])
return t}function Fr(t,e){var n=(t.data||t).slice(),r=n.splice(0,n.length)
return null!=e&&r.push(e),r}function Yr(t,e,n,r,a){"plot"==a?t.plotValues.push({data:e,text:n}):t[a+"Values"].push({id:e,text:n,x:r[0],y:r[1]})}function Vr(t,e,n,r,a,i){return t+n>a&&(t-=t+n-a),e+r>i&&(e-=e+r-i),[t,e]}function Wr(t,e,n){var a=t[n+"Values"]
return a.indexOf(a.filter(function(t){return"plot"===n?r(t.data)==r(e):t.id==e})[0])}function Ur(t,e){var n=function(){for(var t,e=d3.event;t=e.sourceEvent;)e=t
return e}()
n.changedTouches&&(n=n.touches[e])
var r=t.ownerSVGElement||t
if(r.createSVGPoint){var a=r.createSVGPoint()
a.x=n.clientX,a.y=n.clientY
var i=[(a=a.matrixTransform(t.getScreenCTM().inverse())).x,a.y]
return Xr(d3.event)&&!Ll.ANDROID&&Ll.uiwebview&&(i[0]+=window.pageXOffset,i[1]+=window.pageYOffset),i}var o=t.getBoundingClientRect()
return[n.clientX-o.left-t.clientLeft,n.clientY-o.top-t.clientTop]}function Xr(t){return t.touches}function Gr(t,e,n){In.call(this,t,e,n)}var qr={}
qr.version="2.1",qr.versionName="Ortelius",qr.d3Version="4.12.0",qr.model=function(){},qr.axis=function(){},qr.legend=function(){},qr.renderer=function(){},qr.dataset=function(){},qr.scale=function(){},qr.events=function(){},qr.plot=function(){},qr.plot.canvas=function(){},qr.charttype={}
var Zr=qr.charttype.line=11,Qr=qr.charttype.pie=8,Kr=qr.charttype.bar=9,$r=qr.charttype.stkdbar=10,Jr=qr.charttype.scatter=12,ta=qr.charttype.area=14,ea=qr.charttype.stkdarea=15,na=qr.charttype.bubble=20,ra=qr.charttype.packedbubble=19,aa=qr.charttype.funnel=7,ia=qr.charttype.web=16,oa=qr.charttype.sunburst=17,la=qr.charttype.pyramid=13,sa=qr.charttype.dial=18,ua=qr.charttype.bullet=6,ca=qr.charttype.arearange=21,ha=qr.charttype.bubblepie=5,da=qr.charttype.gantt=24,fa=qr.charttype.treemap=4,pa=qr.charttype.heatmap=3,ga=qr.charttype.dotgrid=26,ya=qr.charttype.waterfall=27,va=qr.charttype.wordcloud=2,ma=qr.charttype.geoheatmap=30
qr.charttypenames=d3.map(),qr.charttypenames.set(qr.charttype.line,"line"),qr.charttypenames.set(qr.charttype.pie,"pie"),qr.charttypenames.set(qr.charttype.bar,"bar"),qr.charttypenames.set(qr.charttype.stkdbar,"bar"),qr.charttypenames.set(qr.charttype.scatter,"scatter"),qr.charttypenames.set(qr.charttype.area,"area"),qr.charttypenames.set(qr.charttype.funnel,"funnel"),qr.charttypenames.set(qr.charttype.web,"web"),qr.charttypenames.set(qr.charttype.stkdarea,"area"),qr.charttypenames.set(qr.charttype.sunburst,"sunburst"),qr.charttypenames.set(qr.charttype.pyramid,"pyramid"),qr.charttypenames.set(qr.charttype.bubble,"bubble"),qr.charttypenames.set(qr.charttype.dial,"dial"),qr.charttypenames.set(qr.charttype.packedbubble,"packedbubble"),qr.charttypenames.set(qr.charttype.bullet,"bullet"),qr.charttypenames.set(qr.charttype.arearange,"arearange"),qr.charttypenames.set(qr.charttype.gantt,"gantt"),qr.charttypenames.set(qr.charttype.bubblepie,"bubblepie"),qr.charttypenames.set(qr.charttype.treemap,"treemap"),qr.charttypenames.set(qr.charttype.heatmap,"heatmap"),qr.charttypenames.set(qr.charttype.dotgrid,"dotgrid"),qr.charttypenames.set(qr.charttype.waterfall,"waterfall"),qr.charttypenames.set(qr.charttype.wordcloud,"wordcloud"),qr.charttypenames.set(qr.charttype.geoheatmap,"geoheatmap"),qr.chartcategory={},qr.chartcategory.axis=[Zr,ta,Jr,ea,Kr,$r,na,ua,ca,ha,da,pa,ya],qr.chartcategory.nonaxis=[Qr,aa,la,sa,ga],qr.chartcategory.nonaxismultiseries=[ia,oa,ra,fa,va],qr.chartcategory.hierarchy=[ra,oa,fa],qr.chartcategory.continous=[Zr,ta,Jr,ea,na,ca,ha],qr.chartcategory.discrete=[Qr,Kr,$r,oa,aa,la,sa,ua,da,pa,ya],qr.chartcategory.dotPlot=[Jr,na],qr.chartcategory.piePlot=[Qr,ha],qr.chartcategory.zaxis=[na,ha,pa,ma],qr.chartcategory.svgOnly=[Qr,aa,la,sa,oa,ra,ha,da,ya],qr.chartcategory.innerLabels=[Qr,aa,la,oa,ha],qr.chartcategory.datalabelsInside=[ra,pa,fa,ma],qr.chartcategory.parentLabels=[fa,oa],qr.rename=function(e){return null!=e&&""!=e&&"string"==typeof e&&(t[e]=qr,t.$ZC=null,delete t.$ZC,!0)},qr.setLegendColorPallete=function(t,e){qr.legutil.colorpallete.set(t,e)},qr.getLegendColorPallete=function(t){return qr.legutil.colorpallete.get(t)},qr.setLegendPatternPallete=function(t,e){qr.legutil.patternPallete.set(t,e)},qr.getLegendPatternPallete=function(t){return qr.legutil.patternPallete.get(t)},qr.setLegendImagePallete=function(t,e){qr.legutil.imagePallete.set(t,e)},qr.getLegendImagePallete=function(t){return qr.legutil.imagePallete.get(t)},qr.setTheme=function(t,e){qr[t]=e},qr.getTheme=function(t){return qr[t]}
var xa={},ba={},wa={},Ca={},ka=/\{\{val\((\d+)\)\}\}|\{\{col\((\d+)\)\}\}|\{\{per\((\d+)\)\}\}|\{\{splitper\((\d+)\)\}\}|\{\{maxper\((\d+)\)\}\}|\{\{geo\(([a-z0-9\-\_]+)\)\}\}|\{\{clr\}\}/gi,Sa=/^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/i,Oa=/\{\{per\((\d+)\)\}\}|\{\{splitper\((\d+)\)\}\}|\{\{maxper\((\d+)\)\}\}/gi,Aa=/(illuminate|moody|flip|boxShadow|invert|ridge)/,_a=window.console,Pa=document.createElement("canvas").getContext("2d")
!function(){function t(t,e,n){return function(){var r=n.apply(e,arguments)
return r===e?t:r}}d3.rebind=function(e,n){for(var r,a=1,i=arguments.length;++a<i;)e[r=arguments[a]]=t(e,n,n[r])
return e}}()
var Ta,Ma=Math,Ea=Ma.round,La=Ma.floor,za=Ma.ceil,Da=Ma.max,Ra=Ma.min,ja=Ma.abs,Ia=Ma.pow,Ha=Ma.sqrt,Ba=Ma.cos,Na=Ma.sin,Fa=Ma.log,Ya=Ma.tan,Va=Ma.atan2,Wa=Ma.LN10,Ua=Ma.random,Xa=Ma.PI,Ga=Number.MAX_SAFE_INTEGER||9007199254740991,qa="px ",Za="none",Qa="transparent",Ka="pointer",$a=null,Ja=[],ti=0,ei=0,ni=function(t){return"number"==typeof t&&!isNaN(t)},ri=(Pa=document.createElement("canvas").getContext("2d"),d3.select),ai=d3.selectAll,ii=d3.min,oi=d3.max,li=function(){var t={top:d3.axisTop,bottom:d3.axisBottom,left:d3.axisLeft,right:d3.axisRight}
return function(e,n){return t[e](n)}}(),si=function(){var t={linear:d3.easeLinear,quad:d3.easeQuad,"quad-in-out":d3.easeQuadInOut,"quad-in":d3.easeQuadIn,"quad-out":d3.easeQuadOut,cubic:d3.easeCubic,"cubic-in-out":d3.easeCubicInOut,"cubic-in":d3.easeCubicIn,"cubic-out":d3.easeCubicOut,sin:d3.easeSin,"sin-in-out":d3.easeSinInOut,"sin-in":d3.easeSinIn,"sin-out":d3.easeSinOut,exp:d3.easeExp,"exp-in-out":d3.easeExpInOut,"exp-in":d3.easeExpIn,"exp-out":d3.easeExpOut,circle:d3.easeCircle,"circle-in-out":d3.easeCircleInOut,"circle-in":d3.easeCircleIn,"circle-out":d3.easeCircleOut,elastic:d3.easeElastic,"elastic-in-out":d3.easeElasticInOut,"elastic-in":d3.easeElasticIn,"elastic-out":d3.easeElasticOut,back:d3.easeBack,"back-in-out":d3.easeBackInOut,"back-in":d3.easeBackIn,"back-out":d3.easeBackOut,bounce:d3.easeBounce,"bounce-in-out":d3.easeBounceInOut,"bounce-in":d3.easeBounceIn,"bounce-out":d3.easeBounceOut}
return function(e){return t[e]||d3.easeLinear}}(),ui=d3.easeLinear,ci=function(){var t={linear:d3.curveLinear,linearClosed:d3.curveLinearClosed,cardinal:d3.curveCardinal,cardinalClosed:d3.curveCardinalClosed,monotone:d3.curveMonotoneX,monotoneY:d3.curveMonotoneY,stepBefore:d3.curveStepBefore,stepAfter:d3.curveStepAfter,"linear-closed":d3.curveLinearClosed,"cardinal-closed":d3.curveCardinalClosed,"step-before":d3.curveStepBefore,"step-after":d3.curveStepAfter}
return function(e,n,r){var a=t[e]
return"monotone"==e&&n&&(a=t.monotoneY),X(r)&&a.tension&&a.tension(r),a}}(),hi=function(){var t={squarify:d3.treemapSquarify,slice:d3.treemapSlice,dice:d3.treemapDice,sliceDice:d3.treemapSliceDice,resquarify:d3.treemapResquarify}
return function(e){return t[e]||t.squarify}}(),di=(d3.rebind,function(){var t=d3.scaleLinear()
return t.ticks=function(t){var e=this.domain()
return d3.ticks(e[0],e[e.length-1],null==t?10:t)},t}),fi=d3.scaleBand,pi=d3.scaleTime,gi=d3.scalePoint,yi=d3.scaleOrdinal,vi=d3.bisector,mi=d3.sum,xi=d3.hsl,bi=function(){var t=d3.rgb.apply(this,arguments)
return(isNaN(t.r)||isNaN(t.g)||isNaN(t.b))&&(t=d3.rgb(0,0,0,t.opacity)),t},wi=d3.merge,Ci=d3.map,ki=d3.set,Si=(d3.zoom,d3.drag),Oi=d3.extent,Ai=d3.dispatch,_i=d3.ascending,Pi=d3.descending,Ti=d3.line,Mi=d3.radialLine,Ei=d3.area,Li=d3.radialArea,zi=d3.arc,Di=d3.pack,Ri=d3.pie,ji=d3.partition,Ii=d3.treemap,Hi=(d3.transform,function(t){if(Ll.FIREFOX){t=t.ownerSVGElement||t
for(var e,n=d3.event,r=t.getBoundingClientRect();e=n.sourceEvent;)n=e
return n.changedTouches&&(n=n.changedTouches[0]),[n.clientX-r.left-t.clientLeft,n.clientY-r.top-t.clientTop]}return d3.mouse.apply(this,arguments)}),Bi=d3.interpolate,Ni=d3.interpolateRgb,Fi=d3.range,Yi=d3.timeSunday,Vi=d3.timeMonday,Wi=d3.timeTuesday,Ui=d3.timeWednesday,Xi=d3.timeThursday,Gi=d3.timeFriday,qi=d3.timeSaturday,Zi=d3.timeSeconds,Qi=(d3.timeMinutes,d3.timeHours),Ki=d3.timeDays,$i=d3.timeWeeks,Ji=d3.timeMonths,to=d3.timeYears,eo=d3.format,no=d3.timeFormat,ro=d3.utcFormat,ao=d3.timeParse,io=d3.xhr,oo=(d3.json,d3.timer,d3.brushX),lo=d3.brushY,so=d3.topojson,uo=(d3.versor,"ordinal"),co="time",ho="numeric",fo="text",po="tspan",go="path",yo="circle"
RECT_ELEMENT="rect",LINE_ELEMENT="line",DIV_ELEMENT="div"
var vo="fadeAll",mo="fadeOneByOne",xo="fadeRandom",bo="fade",wo="sizing",Co="sizingRandom",ko="randomOut",So="vertical",Oo="verticalAll",Ao="vertPathTween",_o="vertPathTweenAll",Po="horizontalAll",To="horiPathTween",Mo="strokeTween",Eo="pointTween",Lo="pointbypoint",zo="allseries",Do="onebyone",Ro="fanonebyone",jo="fanAll",Io="fan",Ho="wheel",Bo="inner",No="center",Fo="left",Yo="right",Vo="bottom",Wo="top",Uo="fixedTop",Xo="vertical",Go="horizontal",qo="inner",Zo="outer",Qo="middle",Ko="bar",$o="bullet",Jo="gantt",tl="waterfall",el="area",nl="arearange",rl="line",al="scatter",il="bubble",ol="bubblepie",ll="pie",sl="dial",ul="funnel",cl="pyramid",hl="web",dl="heatmap",fl="sunburst",pl="packedbubble",gl="treemap",yl="wordcloud",vl="datalabels",ml="stackLabels",xl="innerLabel",bl="parentLabels",wl="x",Cl="y",kl="z",Sl="geo",Ol="per",Al="maxper",_l="percent",Pl="splitpercent",Tl="maxpercent"
qr.imageFilePath=window.location.protocol+"//"+window.location.hostname+"/src/images/",qr.fontProperties={minsize:15,maxsize:40,ratio:.038},qr.requireXDataSorting=!1,qr.dataEncoded=!1
var Ml=window.btoa||function(t){t=String(t)
var e,n,r,a,i,o,l,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=0,c=[]
if(/[^\x00-\xFF]/.test(t))throw Error("InvalidCharacterError")
for(;u<t.length;)e=t.charCodeAt(u++),n=t.charCodeAt(u++),r=t.charCodeAt(u++),a=e>>2,i=(3&e)<<4|n>>4,o=(15&n)<<2|r>>6,l=63&r,u===t.length+2?(o=64,l=64):u===t.length+1&&(l=64),c.push(s.charAt(a),s.charAt(i),s.charAt(o),s.charAt(l))
return c.join("")}
!function(){var t=function(e,n){var r=e.nodeType
if(3==r)n.push(e.textContent.replace(/&/,"&amp;").replace(/</,"&lt;").replace(">","&gt;"))
else if(1==r){if(n.push("<",e.tagName),e.hasAttributes())for(var a=e.attributes,i=0,o=a.length;o>i;++i){var l=a.item(i)
n.push(" ",l.name,"='",l.value,"'")}if(e.hasChildNodes()){n.push(">")
var s=e.childNodes
for(i=0,o=s.length;o>i;++i)t(s.item(i),n)
n.push("</",e.tagName,">")}else n.push("/>")}else{if(8!=r)throw"Error serializing XML. Unhandled node of type: "+r
n.push("\x3c!--",e.nodeValue,"--\x3e")}}
Object.defineProperty(SVGElement.prototype,"innerHTML",{get:function(){for(var e=[],n=this.firstChild;n;)t(n,e),n=n.nextSibling
return e.join("")},set:function(t){for(;this.firstChild;)this.removeChild(this.firstChild)
try{var e=new DOMParser
e.async=!1,sXML="<svg xmlns='http://www.w3.org/2000/svg'>"+t+"</svg>"
for(var n=e.parseFromString(sXML,"text/xml").documentElement.firstChild;n;)this.appendChild(this.ownerDocument.importNode(n,!0)),n=n.nextSibling}catch(t){throw new Error("Error parsing XML string")}}}),Object.defineProperty(SVGElement.prototype,"innerSVG",{get:function(){return this.innerHTML},set:function(t){this.innerHTML=t}})}(),function(){try{document.createElement("div").style.setProperty("opacity",0,"")}catch(a){var t=window.Element.prototype,e=t.setAttribute,n=t.setAttributeNS,r=window.CSSStyleDeclaration.prototype.setProperty
t.setAttribute=function(t,n){e.call(this,t,n+"")},t.setAttributeNS=function(t,e,r){n.call(this,t,e,r+"")},window.CSSStyleDeclaration.prototype.setProperty=function(t,e,n){r.call(this,t,e+"",n)}}}(),qr.charts=function(t,e){if(n(t)&&n(e))return function(t,e){if(n(t)&&n(e)){var r=t.map(function(t,n){return a(t,e[n])}),o=[]
return i(r.slice().reverse(),o,r),r}}(t,e)
var r=a(t,e)
return r&&r.draw(),r},qr.maps=function(t,e){return t.isD3Selection||(t=d3.select(t)),new zn(t,e)},l.prototype.prepareLayout=function(){ei++,this.id="ZC_"+ei,this.idNumeric=ei
try{var t=this.userdata
this.createHelperElements(),this.handleHiddenContainer(),this.chartWidth=this.getChartDimension("width"),this.chartHeight=this.getChartDimension("height"),l.helpers.initializeChartHolders(this),this.setCanvasDimension(),this.chartTypes=qr.DataProcessor.helpers.getAllChartTypes(t,"object"),this.chartFontProp={},this.globalProp=u(t,{width:this.canvasarea.width,height:this.canvasarea.height},this.chartFontProp),this.themeoptions=this.getThemeOptions(this.globalProp),t.metadata||qr.setDefaultOptions("metadata",t),this.defsLocation=H(),this.svg.append("defs")}catch(t){l.helpers.handleErrors(this,t)}}
at(l.prototype,{getPatternSvg:function(){var t=this.patternSVG
if(!X(t)){var e=wt(this.container.node())
t=this.patternSVG=ri(e).select("svg.svgPattern")}return t},getDocumentIndex:function(){return X(this.DOCUMENT_INDEX)||(this.DOCUMENT_INDEX=Ct(this.container.node())),this.DOCUMENT_INDEX},getBaseContainer:function(){var t=this.getDocumentIndex()
return X(this.BASE_HELPER_CONTAINER)||(this.BASE_HELPER_CONTAINER=Ja[t].BASE_HELPER_CONTAINER),this.BASE_HELPER_CONTAINER},createHelperElements:function(){var t=wt(this.container.node()),e=ri(t).select("svg.svgPattern")
if(e.empty()){var n=yt(t),r=kt(ri(t),"div",[1],".","class","__baseZC_Container__")
r.styles({position:"absolute",left:-9999+qa,top:-9999+qa}),this.patternSVG=kt(r,"svg",[1],".","class","svgPattern").attrs({version:"1.1",xmlns:d3.namespaces.svg}),kt(this.patternSVG,"defs",[1])
var a=ti++
n.ZC_DOCUMENT_INDEX=a,Ja[a]={BASE_HELPER_CONTAINER:r,EFFECTS:{}}}else this.patternSVG=e},handleHiddenContainer:function(t){var e=this.container
if(t&&X(this.originalContainer))this.originalContainer.node().appendChild(this.d3container.node()),this.container.remove(),this.container=this.originalContainer,delete this.isHiddenCoainer,delete this.originalContainer
else{var n=e.node()
if(function(t){return null===t.offsetParent}(n)){var r=n.cloneNode(0)
this.getBaseContainer().node().appendChild(r),r.style.setProperty("display","block","important"),this.isHiddenCoainer=!0,this.originalContainer=e,this.container=d3.select(r)}}},updateCanvasArea:function(){var t=this.systemConf
this.container.selectAll("div.d3container").styles({position:"relative",width:this.getChartDimension("width")+qa,height:this.getChartDimension("height")+qa});(this.chartParentElement=this.container.selectAll("div.canvas-component")).styles({position:"relative",width:this.canvasarea.width+"px",height:this.canvasarea.height+"px"})
var e=this.container.selectAll("div.canvas-property")
e.styles({position:"absolute",width:this.canvasarea.width+"px",height:this.canvasarea.height+"px"}),this.updateCommonBBSProp(e,null,t.canvas,"canvas")},getThemeOptions:function(t){var e,n,r=qr.charttypenames.values(),a=this.chartTypes.map(function(t){return t.name}),i=null
return this.userdata.canvas&&(i=this.userdata.canvas.theme),n=new qr.defaultTheme(t),r.map(function(e){-1!==a.indexOf(e)&&qr.setDefaultOptions(e,n.chart.plot.plotoptions,t)}),X(qr[i])?(e=new qr[i](t),e=Fl(n,e,!0,!0)):e=n,e},getChartDimension:function(t){var e={width:960,height:400}
return this.isHiddenCoainer||(e[t]=lt(this.container,t,!0)),e[t]},setCanvasDimension:function(t,e){t||e||(t=this.getChartDimension("width"),e=this.getChartDimension("height")),this.canvasarea={left:0,top:0,right:0,bottom:0,width:t,height:e}},setChartDimension:function(){var t=this.systemConf.canvas.border,e=t.show?U(t,"size",0,10,this.canvasarea.width,this.canvasarea.height):0
this.chartarea={left:this.canvasarea.left+e,top:this.canvasarea.top+e,right:this.canvasarea.right-e,bottom:this.canvasarea.bottom-e,width:this.canvasarea.width-2*e,height:this.canvasarea.height-2*e},this.plotarea=Object.create(this.chartarea)},applyChartProperties:function(){var t=this.systemConf,e=this.chartHeight,n=t.canvas.title,r=t.canvas.subtitle,a=t.credits||{},i=n.show&&Vt(this,"title",e),o=r.show&&Vt(this,"subtitle",e)
!0===a.enabled&&Vt(this,"credits",e)&&(qr.setDefaultOptions("credits",this.systemConf,this.globalProp),this.drawTitle(this.systemConf.credits,"credits")),i&&("bottom"===n.vAlign&&"bottom"===r.vAlign&&r.show?this.drawTitle(t.canvas.subtitle,"subtitle"):this.drawTitle(t.canvas.title,"title")),o&&("bottom"===r.vAlign&&"bottom"===n.vAlign&&n.show?this.drawTitle(t.canvas.title,"title"):this.drawTitle(t.canvas.subtitle,"subtitle")),this.plotarea=Object.create(this.chartarea),this.container.selectAll("g.plotareaBorder-property").selectAll("line","path").style("border","")
var l=t.chart,s=parseFloat(l.marginLeft),u=parseFloat(l.marginRight),c=parseFloat(l.marginTop),h=parseFloat(l.marginBottom),d=s+u>this.plotarea.width?0:s,f=s+u>this.plotarea.width?0:u,p=c+h>this.plotarea.height?0:c,g=c+h>this.plotarea.height?0:h
this.plotarea.left+=d,this.plotarea.right+=f,this.plotarea.bottom+=g,this.plotarea.top+=p,this.plotarea.width=this.plotarea.width-d-f,this.plotarea.height=this.plotarea.height-g-p},drawTitle:function(t,e){var n=this.svg,r=this.systemConf,a=X(t.x)&&X(t.y),i=window.location,o={top:W(t.marginTop,0),right:W(t.marginRight,0),bottom:W(t.marginBottom,0),left:W(t.marginLeft,0)},s=n.selectAll("g.chart"+e),u=a?{x:t.x+o.left,y:t.y+o.top,dy:"1",textAnchor:"left"===t.hAlign?"start":"right"===t.hAlign?"end":"middle"}:l.helpers.align(t.hAlign,t.vAlign,this.chartarea,o),c=!X(t.imageUrl),h=c?""===t.text?Za:"text":"image"
if(h!==Za){var d=kt(s,h,[t],".","class",e)
if(X(t.href)){var f=function(){if(function(t){var e=new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)/g),n=new RegExp(/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?/gi)
return t.match(e)||t.match(n)}(t.href)){var e=t.target
"newtab"===e||"newwindow"===e?window.open(t.href,"popUpWindow","newwindow"===e?"status=yes":""):i.href=t.href}else _a.log("invalid URL for credits")}
fn(d,{click:f},{tap:f})}if(c){var p=this.userdata.canvas?this.userdata.canvas.fontColor:null
d.attrs({x:u.x,y:u.y,dy:u.dy+"em","text-anchor":u.textAnchor}).styles({cursor:X(t.href)?Ka:"auto",display:"block"}).text(R(t.text)),!0===t.tooltip&&Tt(d),Pt(d,[{fontColor:"subtitle"!==e||X(t.fontColor)||X(p)?t.fontColor||p:"#CCCCCC"},t,r.canvas,El])}else d.attrs({x:u.x+("right"===t.hAlign?-t.imageWidth:0),y:u.y+("bottom"===t.vAlign?-t.imageHeight:0),width:t.imageWidth,height:t.imageHeight,"xlink:href":t.imageUrl}).styles({cursor:X(t.href)?Ka:"auto",display:"block"})
var g=D(d.node()),y={left:a?t.x+o.left:g.x,top:a?t.y+o.top:g.y,width:g.width,height:g.height},v={left:o.left,top:o.top,right:this.canvasarea.width-o.right,bottom:this.canvasarea.height}
if(St(d.node(),R(t.text),y,v,"bottom","..",{left:5,right:5,top:5,bottom:5}),!a){var m=g.height+o.bottom+o.top
"top"===t.vAlign&&(this.chartarea.top+=m,this.chartarea.height-=m),"bottom"===t.vAlign&&(this.chartarea.height-=m)}}s.selectAll(h===Za?"text,image":"image"===h?"text":"image").style("display",Za)},updateCommonBBSProp:function(t,n,r,a){var i,o=this.systemConf,l=r.border||{},s=r.background||{},u=r.shadow||{}
t.styles({"background-color":s.color,opacity:s.alpha})
var c=null
if(!0===Vl(s,"gradients.show")){var h,d=""
if(X(s.gradients.useCSS)?h=s.gradients.useCSS:(X(s.gradients.stopColor)&&s.gradients.stopColor.map(function(t,e){var n=X(s.gradients.stopOffset)&&X(s.gradients.stopOffset[e])?" "+s.gradients.stopOffset[e]:""
d+=0===e?t+" "+n:","+t+n}),"radial"===s.gradients.type?h="radial-gradient("+d+")":"linear"===s.gradients.type&&(h="linear-gradient("+d+")")),Ll.WEBKIT)c="-webkit-"+h
else if(Ll.FIREFOX)c="-moz-"+h
else if(Ll.IE){c="-ms-"+h
var f=X(s.gradients.stopColor)?"linear"===s.gradients.type?"progid:DXImageTransform.Microsoft.gradient(startColorstr="+(s.gradients.stopColor[0]||"black")+", endColorstr="+(s.gradients.stopColor[1]||"white")+")":"progid:DXImageTransform.Microsoft.Alpha(opacity=100, finishopacity=0, style=2)":null
t.style("filter",f)}}if(X(s.imageUrl)&&(c="url("+s.imageUrl+")"),(1!==Ll.IE||0!==Ll.VERSION.indexOf("9."))&&t.styles({"background-image":c,"background-repeat":s.imageRepeat,opacity:s.alpha}),!0===l.show&&"canvas"===a){i="plotarea"===a?n:t
var p="canvas"===a?U(o.canvas.border,"size",0,10,this.canvasarea.width,this.canvasarea.height):U(o.chart.plot.border,"size",0,10,this.plotarea.width,this.plotarea.height)
p=Wl(p,2),i.styles({border:p+"px "+l.style+" "+l.color,"border-radius":e(l.radius)+"px"}),i.node().border={size:p,clr:l.color}}else i="plotarea"===a?n:t,"plotarea"!==a&&i.style("border","")
if(!0===u.show){var g=u.x+"px "+u.y+"px "+u.blur+"px "+u.color
!0===u.inset&&(g+=" inset"),t.style("box-shadow",g)}else t.style("box-shadow","")},updatePlotareaProp:function(){var t=this.systemConf,e=this.container,n=e.selectAll("div.plotarea-property"),r=this.staticPaneSVG.selectAll("g.plotareaBorder-property"),a={position:"absolute",left:this.plotarea.left+"px",top:this.plotarea.top+"px",width:this.plotarea.width+"px",height:this.plotarea.height+"px","pointer-events":Za,"box-sizing":"border-box"}
a[Ll.prefix.css+"box-sizing"]="border-box",e.selectAll("div.plotarea-property").styles(a),r.attrs({transform:"translate("+this.plotarea.left+","+this.plotarea.top+")"}),this.updateCommonBBSProp(n,r,t.chart.plot,"plotarea")},drawPlotareaClippath:function(){var t=this.systemConf,e=B(t,"chart.zoom.x")||X(this.scrolledX),n=B(t,"chart.zoom.y")||X(this.scrolledY),r=this.dataObject.getAxisRotated(),a=function(t){var e={left:0,top:0,right:0,bottom:0}
if(!t.isAxisCategory)return e
var n=t.systemConf.chart.axes.xaxis,r=t.systemConf.chart.axes.yaxis,a=null!=n.minRange&&""!==n.minRange,i=null!=n.maxRange&&""!==n.maxRange,o=r.some(function(t){return null!=t.minRange&&""!==t.minRange}),l=r.some(function(t){return null!=t.maxRange&&""!==t.maxRange})
if(a&&i&&o&&l)return e
var s=t.axes.rotated,u=(t.dataset.seriesTypes,t.systemConf.chart.plot.plotoptions),c=t.canvasarea,h=oi(t.seriesdata.map(function(e,n){var r=e.plotoptions,a=0,i=t.chartTypes[n].name,o=qr.utils.getValueOfPlotOptions(r?r.marker:null,u[i].marker)
return/(area|arearange|line)/.test(i)&&o("enabled")&&Wt(t,"marker")&&Vt(t,"marker",Ra(c.width,c.height))?a=W(o("size"),W(r?r.strokeWidth:u[i].strokeWidth,1)):i===al&&(a=W(o("size"),2)),10*a}))/2
return{left:(s?o:a)?e.left:h,top:(s?i:l)?e.top:h,right:(s?l:i)?e.right:h,bottom:(s?a:o)?e.bottom:h}}(this),i=(r?n:e)?this.plotarea.left:-a.left+this.plotarea.left,o=(r?e:n)?this.plotarea.top:-a.top+this.plotarea.top,l=this.plotarea.width+((r?n:e)?0:a.left+a.right),s=this.plotarea.height+((r?e:n)?0:a.top+a.bottom),u={name:"rect",id:this.id,x:i,y:o,width:l,height:s},c={chartObj:this},h=Dl.get(Bl,"rect",u,c)
this.wrap.selectAll("g.seriesClippathholder").attr("clip-path","url("+this.defsLocation+"#"+h+")"),this.staticPaneSVG.selectAll("g.labelClippathholder,g#zcscatterCliphighlight,g#zcareaCliphighlight,g#zcbarCliphighlight").attr("clip-path","url("+this.defsLocation+"#"+h+")")},getChartSeriesColor:function(){var t=this,e=[],r=t.systemConf.legend
if(r.colors)if(n(r.colors))e=r.colors
else{var a=[]
for(var i in r.colors)r.colors.hasOwnProperty(i)&&a.push(r.colors[i])
e=a}else if(r.imagePallete){t.patternImageSizes=[]
var o=qr.legutil.imagePallete.get(r.imagePallete)
t.imagePallete=o
var l="stripes"===r.imagePallete?null:50,s=kt(t.getPatternSvg(),"image",[1],".","class","tempImage")
o.map(function(e,n){s.attr("xlink:href",e)
var r=D(s.node())
t.patternImageSizes[n]=[l||r.width||3,l||r.height||3]}),s.remove()}else r.colorPallete&&(e="monochrome"===r.colorPallete.type?qr.legutil.getMonochromeColorPallette(r.colorPallete.options.monochrome):qr.legutil.colorpallete.get(r.colorPallete.options.multicolor)||qr.legutil.colorpallete.get("flat-ui-colors"))
if(r.patterns)t.patternPallete=r.patterns
else if(r.patternPallete){var u=qr.legutil.patternPallete.get(r.patternPallete)
!X(u)&&n(r.patternPallete)&&r.patternPallete.length&&(u=r.patternPallete),t.patternPallete=u}X(e)&&(t.seriesColor=e.slice(0,e.length),Gl.isQuantileColorScale(t)||t.seriesdata.map(function(e,n){X(e.color)&&(t.seriesColor[n]=e.color)}))},resetdata:function(t){this.chartWidth=this.getChartDimension("width"),this.chartHeight=this.getChartDimension("height"),this.setCanvasDimension(),this.chartTypes=qr.DataProcessor.helpers.getAllChartTypes(t,"object"),this.processUserData(t,!0),this.setChartDimension(),this.globalProp=u(t,{width:this.canvasarea.width,height:this.canvasarea.height},this.chartFontProp),this.events={},this.dataObject&&(this.dataObject.formattedData={x:[],y:[]})},destroy:function(){this.eventHandler&&(clearTimeout(this.eventHandler.mouseouttimer),clearTimeout(this.eventHandler.mousemovetimer),clearTimeout(this.eventHandler.tooltipElement.timeout),this.eventHandler.tooltipElement.destroy()),this.container.datum(null),this.d3container.remove(),this.destroying=!0},redraw:function(){var t=this.systemConf
this.updating=!0,this.svg.styles({width:this.getChartDimension("width")+qa,height:this.getChartDimension("height")+qa}),this.staticPaneSVG.styles({width:this.getChartDimension("width")+qa,height:this.getChartDimension("height")+qa}),this.resetdata(t),l.helpers.constructChartGroups(this),this.render(!0)},drawPlotBorder:function(){var t=this.systemConf.chart.plot.border,e=this.container.selectAll("g.plotareaBorder-property")
if(X(t)&&!0===t.show){var n=e.selectAll("path.plotBorderPath"),r=U(t,"size",0,10,this.plotarea.width,this.plotarea.height),a=Wl(this.tickarea,{left:0,right:0,top:0,bottom:0}),i=At(-a.left||.5,-a.top||.5,this.plotarea.width+a.right+a.left,this.plotarea.height+a.bottom+a.top,ht(t.radius),!1,!1)
r=null==r||""===r?2:r,n.styles({"stroke-width":r,stroke:t.color,"stroke-dasharray":x(t.style,r),fill:Za,"pointer-events":Za}).attrs({d:i}),e.selectAll("line").style("stroke",Qa)}},handleNoData:function(t,e){var n=this.systemConf,r=Wl(e,this.wrap.selectAll("g.nodatahandler"))
if(X(t.htmlEl)){var a=kt(this.container.selectAll("div.canvas-component"),"div",[1],".","class","nodatahandler")
a.style("position","absolute").html(t.htmlEl)
var i=a.node()
a.styles({left:Wl(t.x,(this.chartWidth-i.offsetWidth)/2)+"px",top:Wl(t.y,(this.chartHeight-i.offsetHeight)/2)+"px"})}else if(X(t.imageUrl)){kt(r,"image",[1]).attrs({x:t.x||this.chartarea.width/2-50,y:t.y||this.chartarea.height/2-50,width:100,height:100,"xlink:href":t.imageUrl})}else if(X(t.text)){var o=kt(r,"text",[t],".","class","nodata")
o.attrs({x:t.x||this.chartarea.width/2,y:t.y||this.chartarea.height/2,"text-anchor":"middle"}).text(R(t.text||"No Data")),Pt(o,[t,n.canvas,El])}},showLoading:function(){var t=this.systemConf,e=t.loader
if(!0===e.enabled&&e.type!==Za){var n=kt(this.container.selectAll("div.d3container"),"div",[1],".","class","loading")
n.style("position","absolute").html(l.helpers.getLoader(this,e)),Pt(n,[e,t.chart,t.canvas,El],!0)
var r=n.node()
n.styles({left:this.chartarea.width/2-r.offsetWidth/2+"px",top:this.chartarea.height/2-r.offsetHeight/2+"px"})}},hideLoading:function(){this.container.selectAll("div.loading").remove()},fixLegendPosition:function(){var t=this.legendarea
if(!0===this.systemConf.legend.enabled){var e=Be(this.plotarea,this,!1),n=ts.isContinousLegend(this)
if("y"===t.adjust)if(n){var r=Ot(t.element.node()).translate
t.element.attr("transform","translate("+r[0]+","+e[1]+")")}else t.element.style("top",e[1]+qa)}}}),l.helpers={initializeChartHolders:function(t){var e,n,r=t.container,a=r.selectAll("div.d3container")
if(!a.empty()){var i=a.datum()
i&&i.destroy&&i.destroy(),a.remove()}e=t.getChartDimension("width"),n=t.getChartDimension("height"),a=t.d3container=kt(r,"div",[t],".","class","d3container")
var o={width:e+"px",height:n+"px",position:"relative",left:"0px",top:"0px","box-sizing":"border-box","-moz-user-select":Za,"-webkit-user-select":Za,"-ms-user-select":Za,"user-select":Za}
o[Ll.prefix.css+"box-sizing"]="border-box",a.styles(o),kt(a,"div",[1],".","class","canvas-property"),kt(a,"div",[1],".","class","plotarea-property"),kt(a,"div",[1],".","class","zcoverview")
var s=kt(a,"div",[1],".","class","canvas-component")
s.style("-webkit-tap-highlight-color",Qa)
var u=kt(t.getBaseContainer(),"div",[1],"#","id","zctooltip"+t.idNumeric)
u.node().isTooltipContainer=!0,t.tooltip={element:u},t.tooltip.element.styles({position:"fixed",display:"inline-block",visibility:"hidden","white-space":"nowrap","background-color":"white",border:"1px solid","-webkit-tap-highlight-color":Qa})
var c=l.helpers.positionSVG(t)
t.svg=kt(s,"svg",[1],".","class","svgarea",c),t.staticPaneSVG=kt(s,"svg",[t],".","class","static",c).style("pointer-events",Za),t.legendarea.element=s.append("div").attr("class","legendarea"),t.notes=s.append("div").attr("class","zcnotes")},removeChartHolders:function(t){var e=t.container
e.select("div.d3container").remove(),e.select("div.zc-staticPane").remove(),e.select("div.zc-chartPane").remove()},align:function(t,e,n,r){var a={}
return"center"===t?(a.x=n.width/2+r.left,a.textAnchor="middle"):"left"===t?(a.x=n.left+r.left,a.textAnchor="start"):"right"===t&&(a.x=n.width+n.left-r.right,a.textAnchor="end"),"top"===e?(a.y=n.top+r.top,a.dy=1):"bottom"===e&&(a.y=n.height+n.top-r.bottom,a.dy=-.21),a},getLoader:function(t,e){var n=e.htmlEl,r=e.imageUrl,a=e.type,i=e.text,o=e.colors
if(n)return n
if(r)return"<img src="+r+" height="+e.imageHeight+" width="+e.imageWidth+">"
var l="",s=null
if(a){var u=t.container.selectAll("div.loading")
o=o&&o.length?o:null,s=Gs(u,{type:a,colors:o})
l=(new XMLSerializer).serializeToString(s)}return i&&(l+="<p style=position:relative;display:inline-block>"+i+"</p>"),l},constructChartGroups:function(t){function e(t){return t?[1]:[]}var n=t.svg,r=t.systemConf,a=t.chartHeight
kt(n,"g",e((t.chartWidth,!0===r.canvas.title.show&&Vt(t,"title",a))),".","class","charttitle")
kt(n,"g",e(!0===r.canvas.subtitle.show&&Vt(t,"subtitle",a)),".","class","chartsubtitle")
kt(n,"g",e(r.credits&&!0===r.credits.enabled&&Vt(t,"credits",a)),".","class","chartcredits")
var i=t.wrap=kt(n,"g",[r],".","class","xychart")
if(t.nochartdata)kt(i,"g",[1],".","class","nodatahandler")
else{kt(i,"g",[0],".","class","nodatahandler")
var o=kt(i,"g",[t.seriesdata],".","class","chartgroup")
kt(o,"g",e(!0===r.chart.axes.xaxis.show),".","class","x-axis"),kt(o,"g",[t.seriesdata],".","class","y-axis"),kt(o,"g",[t.seriesdata],".","class","threshold")
var s=kt(kt(o,"g",[t.seriesdata],".","class","seriesClippathholder"),"g",[t.seriesdata],".","class","seriesholder")
t.filterEffectsID=function(t){var e=t.systemConf,n=e.chart.effects.choice
if(Hl[n]){var r=e.chart.effects.options[n]
return"dropShadow"===n&&(r.blur=Da(0,r.blur)),Dl.get(Hl,n,r,{chartObj:t})}}(t),s.attr("filter",t.filterEffectsID?"url("+t.defsLocation+"#"+t.filterEffectsID+")":null)
var u=kt(t.staticPaneSVG,"g",[t.seriesdata],".","class","labelClippathholder"),c=!1
t.dataObject&&(c=t.dataObject&&t.dataObject.noofBarEnabledSeries&&!t.dataObject.isCombinationalChart||t.dataObject.isHierarchy),c||kt(u,"g",[t.seriesdata],".","class","labelholder"),kt(t.staticPaneSVG,"g",[t.seriesdata],".","class","threshold")
if(kt(kt(t.staticPaneSVG,"g",[1],".","class","plotareaBorder-property"),"path",e(!0===r.chart.plot.border.show),".","class","plotBorderPath"),kt(t.staticPaneSVG,"g",[1],".","class","eventgroup"),c){u.raise()
kt(u,"g",[t.seriesdata],".","class","labelholder").style("pointer-events",Za)}kt(s,"rect",[1],".","class","dummy-rect-filter").style("pointer-events",Za),l.helpers.createLegendArea(t)}},handleErrors:function(t,e){t.breakOnErr=!0,B(t.systemConf,"canvas.events")&&Y(t.systemConf.canvas.events.onerror,d3.event,t,e)},positionSVG:function(t){return{width:t.getChartDimension("width")+qa,height:t.getChartDimension("height")+qa,position:"absolute",top:0,left:0}},createLegendArea:function(t){var e=ts.isContinousLegend(t),n=(t.staticPaneSVG,t.container.selectAll("div.canvas-component"),kt(t.staticPaneSVG,"g",e?[1]:[],".","class","legendarea"))
e&&(t.legendarea.element=n)}},function(t){"use strict"
function e(t,e){this.container=t,this.userdata=e,this.dataObject=null,this.dataset=null,this.svg=null,this.seriesColor=[],this.axes={x:{levels:[]},y:{groups:[]}},this.subrenderer=[],this.ismultiy=null,this.plotarea_approx=null,this.nochartdata=!1,this.chartRendered=!1,this.plot={},this.events={},l.call(this,t,e),this.initialize()}t.charts.get=function(t,n){return new e(t,n)},it(e,l),e.helpers=l.helpers,e.prototype.initialize=function(){try{this.processUserData(this.themeoptions),this.setChartDimension(),this.legendHighlight=new qr.legendHighlight(this,this.svg),e.helpers.constructChartGroups(this)}catch(t){e.helpers.handleErrors(this,t)}},e.prototype.draw=function(){this.render(!1)},e.prototype.render=function(t){try{this.updateCanvasArea()
var n=this.systemConf
if(this.applyChartProperties(),this.nochartdata)this.hideLoading(this.container),this.handleNoData(n.noDataHandler),this.chartRendered=!0,Ye(this,n.canvas.events,0,t?"onreload":"onload")
else{if(this.getChartSeriesColor(),this.isAxisCategory=this.dataObject.isAxisCategory,this.isNonAxisMultiSeriesCategory=this.dataObject.isNonAxisMultiSeriesCategory,this.xymultiRenderer=this.isAxisCategory,this.data,qr.legend.render(this,t),Ss.updatePlotarea4BlockTooltip(this),qr.annotation&&qr.annotation.addBlockAnnotations(this),B(this.systemConf.chart,"scroll")&&this.systemConf.chart.scroll.enabled&&(qr.setDefaultOptions("scroll",this.systemConf.chart,this.globalProp),this.brush=new Ds(this,"x")),this.isAxisCategory&&(this.systemConf.chart.width||this.systemConf.chart.height)&&xr.initialize(this),Ye(this,n.chart.axes.events,0,"init"),this.drawPlotBorder(),this.isAxisCategory)qr.axis.render(this,this.chartWidth,this.chartHeight,t)
else if(this.dataObject.isPolarAxisCategory||this.dataObject.hasLevelMarker){var r=this.dataObject.hasLevelMarker?"y":"x"
qr.axis.polar.render(this,r)}if(this.zscale=this.dataObject.hasZaxis&&!this.dataObject.isHierarchy?qr.scale.getScale(this,this.dataObject,this.plotarea,this.axes.x.orient,null,this.dataset,"z"):null,Ye(this,n.chart.axes.events,0,t?"onreload":"onload"),this.updatePlotareaProp(),this.plot.renderer)this.plot.renderer.draw(t)
else{(this.plot.renderer=qr.plot.render(this,t)).draw(!1)}this.isAxisCategory&&this.drawThreshold(t),this.handleEvent(t),this.drawPlotareaClippath(),E(this.wrap.selectAll("rect.dummy-rect-filter"),{width:this.plotarea.width,height:this.plotarea.height})}}catch(t){e.helpers.handleErrors(this,t)}},e.prototype.processUserData=function(t,e){var n,r,a
this.systemConf=n=Fl(t,this.userdata,!0,!0),r=Vl(n,"seriesdata")||{},this.seriesdata=a=r.chartdata,e||Ye(this,n.canvas.events,0,"init"),this.nochartdata=!X(a)||X(a)&&a.length<1,this.nochartdata?this.seriesdata=null:(this.dataset=new qr.dataset.get(n,this),this.preProcessor=new qr.PreProcessor(this),this.dataObject=this.getDataObject(),this.dataset.setDataObj(this.dataObject),this.nochartdata=this.dataObject.totalnoofdatas<1,this.axes.rotated=this.dataObject.getAxisRotated(),this.axes.rotated?(this.axes.x.orient="left",this.axes.y.orient="bottom"):(this.axes.x.orient="bottom",this.axes.y.orient="left"),this.ismultiy=this.getAxesCount("y")>1,this.ismultix=this.getAxesCount("x")>1)},e.prototype.getDataObject=function(){var t
return t=qr.chartcategory.hierarchy.indexOf(this.chartTypes[0].value)>-1?new qr.hierarchymodel.get(this):new qr.DataProcessor(this.systemConf,this.dataset,this),this.seriesdata=t.isHierarchy?Yl(this.seriesdata):this.seriesdata,t},e.prototype.getAxesCount=function(t){var e=1,r=this.systemConf.metadata
if("x"===t){var a=this.dataset.getColumnIdx(t),i=r.columns[a].datatype,o=Wl(r.columns[a][i],{}),l=o.subfunction
X(this.dataObject.hierarchical)?e=this.dataObject.hierarchical.finalDepth+1:n(o.groupby)&&o.groupby.length?e=o.groupby.length+1:"AUTO"===o.groupby&&(e=qr.HierarchicalTimeDataAdapter.getAutoGroupOrder(l).length+1),this.axes[t].count=e}else{var s=r.axes.y
e=this.axes[t].count=s.length}return e},e.prototype.drawThreshold=function(t){if(qr.axis.threshold){this.cache.thresholdCustomPoints=[],qr.axis.threshold(this,t)}},e.prototype.handleEvent=function(t){var e=this.systemConf
if(t)this.eventHandler.updateParams(this)
else{var n=this.staticPaneSVG.selectAll("g.eventgroup").styles({"pointer-events":"visible"})
if((n.append("g").attr("id","zcareaCliphighlight").append("g").attr("id","zcareahighlight"),n.append("g").attr("id","zcbarCliphighlight")).append("g").attr("id","zcbarhighlight"),e.tooltip.crosshair){var r=kt(n,"g",[1],".","class","crosshair")
r.style("visibility","hidden"),kt(r,"line",[1],".","class","x-crosshair"),kt(r,"line",[1],".","class","y-crosshair")}n.append("g").attr("id","zcscatterCliphighlight").append("g").attr("id","zcscatterhighlight"),n.append("g").attr("class","zcplothighlight").styles({opacity:0,"pointer-events":Za}),this.dataObject.isHierarchy&&n.append("g").attr("id","zchierarchyhighlight").styles({opacity:0,fill:Za,"pointer-events":Za}),this.eventHandler=qr.events.mouseevents(this,this.tooltip.element,e,this.plotarea,this.dataset,this.axes.x.scale,this.barscale1,this.barscale2,this.axes.y.groups,n,this.seriesColor,this.labelHighlighter),this.eventHandler.initializeListener()}(this.xymultiRenderer||this.dataObject.isPolarAxisCategory)&&E(this.eventHandler.trackerElement,this.plotarea),this.isAxisCategory&&(this.systemConf.chart.width||this.systemConf.chart.height)&&xr(this)},e.prototype.addRemoveSeries=function(t,e,n,r){var a=this,i=a.systemConf
if(a.dataObject.formattedData={x:[],y:[]},a.dataObject.initialize("addorremoveseries"),Ye(a,i.chart.axes.events,0,"init"),a.isAxisCategory){var o=a.brush&&a.brush.extent
a.updateZscale(),r?a.axes.y.groups.forEach(function(t,e){a.updateScale([e,0],"y")}):a.updateScale(n,"y"),a.updateScale(0,"x",o),a.dataObject.hierarchical&&(a.axes.x.rangeScale=a.axes.x.scale.copy(),a.axes.x.rangeScale.outerPaddingPx=a.axes.x.scale.outerPaddingPx,a.dataObject.hierarchical.groupByDiscreteTime&&a.axes.x.rangeScale.domain(d3.range(a.axes.x.scale.domain().length)),a.dataObject.hierarchical.setRanges(a.axes.x.rangeScale),a.axes.x.levels.forEach(function(t,e){a.updateScale(n,"x",null,e+1)}),a.dataObject.hierarchical.categoryTree&&ze.updateTickEventHandler(a,t.disabled)),a.drawThreshold(!0),a.drawPlotareaClippath(),a.updatePlotareaProp()}else a.dataObject.isPolarAxisCategory&&qr.axis.polar.render(a,"x")
Ye(a,i.chart.axes.events,0,"onreload"),a.events={},a.plot.renderer.draw(!0),(a.isAxisCategory||a.dataObject.isPolarAxisCategory)&&(E(a.eventHandler.trackerElement,a.plotarea),a.eventHandler.updateParams(a),(a.systemConf.chart.width||a.systemConf.chart.height)&&xr(a,"addorremoveseries"))},e.prototype.pushDataPoint=function(t,e,r){var a=this,i=a.dataObject.isCombinationalChart,o=i?ba.arrangeSeriesRenderingOrder(a.seriesdata):a.seriesdata
if(!Array.isArray(t)){var l=[],s=[]
l.push(t),s.push(e),t=l,e=s}t.forEach(function(t,l){var s,u,c,h=o[t],d=i?h.seriesidx:t,f=a.seriesdata[d],p=a.renderer[d]
if(c=n(r)?r[l]:r,f.data[0].push(e[l]),c){s=f.data[0][0]
var g=f.data[0].shift()
X(p.shiftInfo())?(u=p.shiftInfo(),u.count++):(u={},u.count=0),u.point=s,u.shiftedData=g,p.shiftInfo(u)}else p.shiftInfo(null)
a.ismultiy&&a.updateScale(f,"y")}),a.dataObject.initialize(),a.updateScale(null,"x"),a.ismultiy||a.updateScale(a.seriesdata[0],"y"),a.plot.renderer.draw(!0),a.drawThreshold(!0),a.eventHandler.updateParams(a)},e.prototype.popDataPoint=function(t){var e=this.seriesdata[t]
e.data.forEach(function(t){t.pop()}),this.dataObject.initialize(),this.updateScale(e,"x"),this.updateScale(e,"y"),this.plot.renderer.draw(!0),this.drawThreshold(!0),this.eventHandler.updateParams(this)},e.prototype.zoomON=function(t){this.changeZoomType(t)
this.zoom||this.eventHandler.initializeZoomListener()},e.prototype.zoomOFF=function(){var t=this.zoom
t&&t.reset(),this.changeZoomType(Za)},e.prototype.zoomX=function(t,e){this.changeZoomType("x"),this.zoom||this.eventHandler.initializeZoomListener()
this.zoom.zoomed(null,t,e)},e.prototype.zoomY=function(t,e){this.changeZoomType("y"),this.zoom||this.eventHandler.initializeZoomListener()
this.zoom.zoomed(null,t,null,e)},e.prototype.zoomXY=function(t,e,n){this.changeZoomType("xy"),this.zoom||this.eventHandler.initializeZoomListener()
this.zoom.zoomed(null,t,e,n)},e.prototype.changeZoomType=function(t){var e=this.systemConf
e.chart.zoom||qr.setDefaultOptions("zoom",e.chart,this.globalProp),e.chart.zoom.type=t},t.Chart=e}(qr)
var El={}
El.fontFamily="'Roboto','Open Sans',sans-serif",El.fontColor="#616161",El.fontStyle=null,El.fontWeight=null,El.fontL1Size=null,El.fontL2Size=null,El.fontL3Size=null,El.DOMBorder="none"
var Ll=new function(){this.NETSCAPE=0,this.FIREFOX=0,this.OPERA=0,this.IE=0,this.SAFARI=0,this.MOZILA=0,this.CHROME=0,this.NONIE=1,this.WEBKIT=0
var t=navigator.userAgent.toLowerCase()
this.OSX=-1!=t.indexOf("mac"),this.LINUX=-1!=t.indexOf("linux"),this.IPHONE=-1!=t.indexOf("iphone"),this.IPAD=-1!=t.indexOf("ipad"),this.ANDROID=-1!=t.indexOf("android"),this.IS_IOS=this.IPHONE||this.IPAD,this.isTouchDevice="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,this.isMouseDevice=!(this.IS_IOS||this.ANDROID||-1!=t.indexOf("mobile")),this.uiwebview=this.IS_IOS&&!/safari/.test(t),this.PHANTOMJS=-1!==t.indexOf("phantomjs")
var e=""
this.detect=function(){var t=navigator.userAgent,n=t.length,r=navigator.vendor,a=""
window.opera?(this.OPERA=1,e="o"):t.indexOf("Chrome")>-1?(this.CHROME=1,a="Chrome/",e="webkit"):t.indexOf("Firefox")>-1?(this.FIREFOX=1,a="Firefox/",e="moz"):t.indexOf("MSIE ")>-1||t.indexOf("Trident/")>-1?(this.IE=1,a="MSIE ",e="ms"):r.indexOf("Apple")>-1?(this.SAFARI=1,a="Version/",e="webkit"):a="Unknown Browser",this.VERSION=t.substring(t.indexOf(a),n).match(/[0-9\.]+/)[0]},this.detect(),this.NONIE=!this.IE,this.WEBKIT=this.SAFARI||this.CHROME,this.prefix={lowercase:e,css:e?"-"+e+"-":e,js:e?e[0].toUpperCase()+e.substr(1):e}}
c.prototype={initialize:function(){this.hierarchyLayout=!0,this.finalDepth=0,this.dataCount=0,this.categories=[],this.leafNodes=[],this.series=[],this.categoriesByDepth=[],this.globalChartType=this.originalSeries.type},setDepth:function(){function t(r,u,c,h){u>e.finalDepth&&(e.finalDepth=u),h=Wl(h,""),r.forEach(function(r,d){X(c)&&(r.parent=c),r.leaf?(r.index=e.dataCount++,n(r.data)&&r.data.forEach(function(t){t.index=r.index,t.level=h+d+"_"}),i.push(r),o.push(r[s])):(a[u]||(a[u]=[],l[u]=[]),l[u].push(r[s]),r.itemIndex=a[u].length,a[u].push(r),t(r.children,u+1,r,h+d+"_"))})}var e=this,r=e.categories,a=e.categoriesByDepth=[],i=e.leafNodes=[],o=e.leafCategories=[],l=e.categoriesList=[],s=e.dataType===co||e.groupByDiscreteTime?"point":"value"
t(r,0),l.reverse()},getCategories:function(){return this.categories},getCategoriesByDepth:function(t){return X(t)||(t=0),t===this.finalDepth?this.leafNodes:t<this.finalDepth?this.categoriesByDepth[t]:void 0},getCategoriesByLevelIndices:function(t){var e=this.categories,n=t.length-1
return t.forEach(function(t,r){e=r===n?e[t]:e[t].children}),e},getParentByIndex:function(t,e){for(var n=this.leafNodes[t],r=null,a=this.finalDepth+1;a--;){if(n.depth===e){r=n
break}if(0===n.depth)break
n=n.parent}return r},setRanges:function(t){function e(e){!function(t){return X(t.children[0])&&!0===t.children[0].leaf}(e)?(e.rangeBand=e.children.reduce(r,0),e.range=[e.children[0].range[0],e.rangeBand+e.children[0].range[0]]):(e.rangeBand=function(e){if(l.categoryTree)return e.reduce(r,0)
var n=e[0],i=e[e.length-1],o="point",s=p
if(l.groupByContinuousTime){if(s=0,X(l.tickValues[n.index+1])){var u=l.tickValues[n.index],h=l.tickValues[n.index+1],d=t(h)-t(u)
c=d/2}}else o="index"
return t(i[o])-t(n[o])+a(n,!0)+a(i)+s}(e.children),y=t(s?e.children[0].index:e.children[0].point)-a(e.children[0],!0),e.range=[y,y+e.rangeBand]),v.push(e.rangeBand),m.push(e.range)}function r(t,e){return e.leaf?t+p+a(e,!0)+a(e):t+e.rangeBand}function a(t,e){return e&&t===i||!e&&t===o?h:c}var i,o,l=this,s=X(t.bandwidth),u=l.finalDepth,c=0,h=0,d=l.leafNodes,f=ke(t)
if(s){var p=s&&t.bandwidth()
t.range(),i=d[0],o=d[d.length-1],c=n(f)&&f.length>1?(f[1]-(f[0]+p))/2:0,h=t.outerPaddingPx,h=Ra(h,c)}else{i=d[0],o=d[d.length-1]
var g=qr.scale.getContinuousRangeBand(t,l.leafCategories)
c=g.rangeBand/2,h=g.outerPaddingInPixel}for(l.scaleList=[],l.rangeList=[];u--;){var y,v=[],m=[]
l.getCategoriesByDepth(u).forEach(e),l.rangeList.push(m)}return l.scaleList}},c.getValuesByKey=function(t,e){return t.map(function(t){return t[e]})},c.is3D=function(t){return n(t)&&n(t[0])},c.isArrayOfSeries=function(t){return c.is3D(t.data)&&X(t.seriesname)},c.hasInnerSeries=function(t){return n(t.data)&&"object"==typeof t.data[0]&&X(t.data[0].seriesname)},c.keysObject=function(t){var e={}
return t&&t.length&&t.forEach(function(t){e[t.value]=t}),e},c.getValues=function(t){return X(t)?t.map(function(t){return t.value}):null},c.getAllChildren=function(t,e){return e=Wl(e,[]),t.children?(t.children.forEach(function(t){t.leaf?Array.prototype.push.apply(e,t.data):c.getAllChildren(t,e)}),e):t.data},qr.HierarchicalDataAdapter=c,function(){"use strict"
function t(t){c.call(this,t),this.dataType=uo,this.categoryTree=!0,this.update(!0)}var e={update:function(t){t||this.initialize(),this.process(),this.setDepth()},process:function(){this.originalSeries.forEach(this.searchHierarchy,this)},getSeries:function(t){return X(t)?this.series[t]:this.series},searchHierarchy:function(t,e){function n(t,e,r){var i=c.keysObject(r)
t.forEach(function(t){var o=c.hasInnerSeries(t),u=c.isArrayOfSeries(t),d=null
if(i[t.seriesname]?d=i[t.seriesname]:(d={value:u||o?Wl(t.seriesname,""):"",depth:e,children:[]},s||r.push(d)),o)i[t.seriesname]||(i[t.seriesname]=d),n(t.data,e+1,i[t.seriesname].children),0===d.children.length&&ot(r,d)
else{c.is3D(t.data)||(t.data=[t.data])
var f=c.keysObject(d.children)
t.data.forEach(function(t){var n={value:t[l],depth:e+1,leaf:!0,data:[t]}
s?t.seriesDisabled=!0:delete t.seriesDisabled,h(t[l])&&(f[t[l]]?f[t[l]].leaf?f[t[l]].data.push(t):f[t[l]].children&&!s&&f[t[l]].children.push(n):(s||d.children.push(n),f[t[l]]=n),a.data.push(t))}),0===d.children.length&&ot(r,d)}})}var r=this.chart,a=this.series[e],i=Wl(r.dataset.getColumn("x"),{}),o=i.datatype,l=Wl(i.dataindex,0),s=t.disabled,u=X(i[o])&&X(i[o].nullformatting),h=function(t){return u||X(t)}
this.series[e]||(a=this.series[e]=Yl(t),a.data=[]),n(t.data,0,this.categories)}}
it(t,c),at(t.prototype,e),qr.HierarchicalOrdinalDataAdapter=t}(),function(){function t(e,r,a,i,o){c.call(this,e),this.dataType=co,this.chart=e,this.columnInfo=o,i?this.groupByDiscreteTime=!0:this.groupByContinuousTime=!0,n(a)?this.groupOrder=a.slice(0).reverse():"AUTO"===a&&(this.groupOrder=t.getAutoGroupOrder(o.time.subfunction)),this.groupByTime=!0,this.update(r)}function e(t,e){var n=null
return t.reduce(function(t,r){return n=e.call(null,r),t[n]=t[n]||[],t[n].push(r),t},{})}function r(t){return t.map(function(t){return{YEAR:t.getFullYear(),QUARTER:Mn(t),MONTH:function(t){return i[t.getMonth()]}(t),WEEK:function(t){var e=new Date(t.getFullYear(),0,1)
return za(((t-e)/864e5+e.getDay()+1)/7)}(t),DAY:function(t){return o[t.getDay()]}(t),timestamps:t.getTime(),data:t}})}function a(t,e,n,r){var a=[]
for(var i in t)if(t.hasOwnProperty(i)){var o={depth:n}
a.push(o),e?(o.leaf=!0,o.value=r?t[i].data.getTime():t[i].data,o.point=t[i].data.getTime()):(o.value=i,o.point=t[i][0].data,o.children=t[i])}return a}var i=["January","February","March","April","May","June","July","August","September","October","November","December"],o=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],l=["YEAR","QUARTER","MONTH","WEEK","DAY"],s={YEAR:"YEAR",ABSQUARTER:"QUARTER",QUARTER:"QUARTER",MONTH:"MONTH",ABSMONTH:"MONTH",WEEK:"WEEK",ABSWEEK:"WEEK",ABSDAY:"DAY"},u={update:function(t){this.groupByDiscreteTime&&(t=Wl(this.chart.dataObject.findXCategories(),t)),this.dataCount=0,this.tickValues=function(t,e){return t.map(function(t){return bn(t,0,e)})}(t,this.columnInfo),this.process(),this.setDepth()},process:function(){function t(n,r,i){var l,s=r.shift()
return n.forEach(function(n){s?(l=e(n.children,function(t){return t[s]}),n.children=a(l,!1,i,o),t(n.children,r.slice(0),i+1)):n.children=a(n.children,!0,i,o)}),n}var n=this.tickValues,i=Wl(this.groupOrder,l),o=this.groupByDiscreteTime,s=r(n),u=i.slice(0),c=u.shift(),h=a(e(s,function(t){return t[c]}),!1,0,o)
this.categories=t(h,u.slice(0),1)},getPossibleGroupBy:function(t,e){var n=t[0],r=t[t.length-1],a=n.getFullYear()===r.getFullYear(),i=e[0],o=Pn(t[t.length-1]-t[0])
for(var l in o)if(o.hasOwnProperty(l)&&(o[l]>1||"YEAR"===l&&!a)){i=l
break}return i}}
t.getAutoGroupOrder=function(t){var e=l.indexOf(s[t])
return l.slice(0,e)},it(t,c),at(t.prototype,u),qr.HierarchicalTimeDataAdapter=t}(),qr.dataset.get=function(t,e){var r=t.metadata,a=r.columns,i=r.axes,o=t.seriesdata.chartdata,l=qr.DataProcessor.helpers.getParsedYAxisOrder
i=function(){var t={}
return Object.keys(i).sort(function(t,e){return e.length>t.length?-1:e.length<t.length?1:0}).forEach(function(e){t[e]=i[e]}),t}()
var s,u=a[i.clr]||{},c=a.map(function(t,e){return function(t){var e,n=[]
for(var r in i)if(i.hasOwnProperty(r)&&-1!=("y"==r?wi(i[r]):i[r]).indexOf(t))return"y"==r&&i[r].map(function(e,r){var a=e.indexOf(t);-1!=a&&(n.push(r),n.push(a))}),e=r,{type:e,order:n}}(e)}),h={xidx:a[i.x].dataindex,yidx:function(t){var e=t instanceof Array?i.y[t[0]][t[1]||0]:i.y[t][0]
return a[e].dataindex},zidx:(a[i.z]||{}).dataindex,tooltipidx:function(t){return null!=i.tooltip?a[t].dataindex:null},clridx:u.levelindex?null:u.dataindex}
return h.setDataObj=function(t){s=t},h.getX=function(t){return X(s)&&(s.hierarchical&&!s.hierarchical.groupByTime||s.isWaterfallEnabled)?t.index:this.getActualX(t)},h.getY=function(t,e,n){try{var r=this.yidx(e)
return void 0===t[r]?null:null==n?t[r]:t[r][n]}catch(t){}},h.getZ=function(t){return t[this.zidx]},h.getClr=function(t){return t[this.clridx]},h.getGroupByValues=function(t,e){return null==e||0==e.length?null:e.reduce(function(e,n){return X(t[n])?e+t[n]:e},"")},h.getActualX=function(t){return t[this.xidx]},h.getDataType=function(t,e,n){if(n=n||h.seriesTypes.values().map(function(t){return+t}),"x"===t&&e>0)return"ordinalNonLinear"
var i=null
if(null!=r.axes[t]){var o=this.getColumnIdx(t,e),l=a[o]
i=l.datatype
var u="x"==t&&(s&&s.isPolarAxisCategory||-1!=n.indexOf(qr.charttype.bar)||-1!=n.indexOf(qr.charttype.stkdbar)||-1!=n.indexOf(qr.charttype.bullet)||-1!=n.indexOf(qr.charttype.gantt)||-1!=n.indexOf(qr.charttype.web)),c=-1!=n.indexOf(qr.charttype.heatmap)&&("x"===t||"y"===t)
i=u||l.useDiscrete||c?uo:i}return i},h.getColumnIdx=function(t,e){var n,a=r.axes[t]
return"y"==t?n=e instanceof Array&&2==e.length?a[e[0]][e[1]]:a[e][0]:"tooltip"==t?n=a[e]:"x"==t&&e>0?(r.columns.filter(function(t,r){t.levelindex==e&&(n=r)}),n=n||a[0]):n=null==a?null:a[0],n},h.getColumn=function(t,e){var n=this.getColumnIdx(t,e)
return a[n]},h.getColumnName=function(t,e){return(0!=e?R:j)(a[t].columnname)},h.getCustomizedVal=function(t,e,n,r,i,o,l,s,u,c){return N(u)&&(u=!/(tooltip|legend)/.test(l)),e.toString().replace(ka,function(){var e=arguments[0],d=arguments[1],f=arguments[2],p=arguments[3],g=arguments[4],y=arguments[5],v=d||f||p||g||y
if(-1!=e.indexOf("{{clr}}"))return s
if(null==a[v])return e
var m=l===ml?o:h.getDataPoint(t,v,n,r,i,o)
if(null==m)return""
var x=e.match(/[a-z]+/gi)[0]
switch(x){case"col":return h.getColumnName(f,u)
case"val":var b=h.getDataPointValue(t,m,d,n,!1,l,r,u,c)
return[vl,ml,xl,bl].indexOf(l)>-1&&(b=b||""),b
case Ol:case"splitper":case Al:return h.getDataPointValue(t,m,p||g||y,n,x,l,r,u,c)}})},h.getYaxisColumnIndexBySeriesIndex=function(t,e){var r=o[e].yaxiscolumnorder||[0,0]
return n(r)?i.y[r[0]][r[1]||0]:i.y[r][0]},h.getDataPoint=function(t,e,r,l,s,u){var h=null,d=a[e=+e]||{},f=r,p=!0
if("y"===(c[e]&&c[e].type)&&this.getYaxisColumnIndexBySeriesIndex(t,r)!==e)return h
if(t.dataObject.isHierarchy){var g=t.renderer[0].getProcessedNode,y=g?g(u):u
p=i.clr&&i.clr[0]===e&&1===y.depth||-1!==t.systemConf.metadata.axes.y[0].indexOf(e)||y.children&&(d.levelindex===y.depth-1||n(d.levelindex)&&-1!==d.levelindex.indexOf(y.depth-1))||!y.children&&(null==d.levelindex||null!=d.dataindex)}if(null!=f&&p){var v=t.renderer[t.isAxisCategory||t.dataObject.isPolarAxisCategory?f:0],m=null!=v&&null!=v.seriesdataAfterUpdate?v.seriesdataAfterUpdate[l]:o[f].data[l]
h=u||m[s]}return h},h.getDataPointValue=function(t,e,r,s,u,c,d,f,p){null!=r&&(r=+r),N(f)&&(f=!/(tooltip|legend)/.test(c))
var g,y=a[r]||{},v=y.datatype,m=y.levelindex,x=y.dataindex,b=y[v]
if(null!=e){if(t.dataObject.isHierarchy){var w=t.renderer[0],C=w&&w.getProcessedNode
g=C?C(e):e}if(null==i.clr&&"legend"!==c||r!=i.clr||t.dataObject.isHierarchy&&"legend"!==c&&null!=y.dataindex){if(t.dataObject.isHierarchy&&(m===g.depth-1||n(m)&&-1!==m.indexOf(g.depth-1))){return yn(b,g.children||null==y.dataindex?e.seriesname:e[x],v,t,c,f)}if(null!=m&&t.dataObject.hierarchical){var k=t.dataObject.hierarchical.getParentByIndex(e.index,m-1)
return k&&k.value?yn(b,k.value,v,t,c,f):""}var S,O=r==this.getColumnIdx("y",l(t.seriesdata[s].yaxiscolumnorder))?" - ":void 0,A=u?wn:yn
if(p){for(var _=0,P=0;p>P;P++)_+=h.getDataPointUnformattedValue(v,s,P,r,e,c,u,x)
S=_}else S=h.getDataPointUnformattedValue(v,s,d,r,e,c,u,x)
return""==S&&u?S:A(b,S,v,t,c,f,O)}if(X(this.clridx)&&Gl.isQuantileColorScale(t)){if("legend"===c){return yn(b,e,v,t,c,f,O="-")}return yn(b,this.getClr(e),v,t,c,f)}return yn(b,o[s].seriesname,v,t,c,f)}return null},h.getDataPointUnformattedValue=function(t,n,r,a,i,o,s,u){var c
if(e.dataObject.isHierarchy)var h=e.renderer[0],d=h&&h.getProcessedNode,p=d?d(i):i
if(s){var g=t==ho?f(e,n,r,a,i,s,o):null
return null!=g?(c=(o==ml?i:e.dataObject.isHierarchy&&p.children&&X(p.value)?p.value:e.dataObject.isStackedPercentChart||e.dataObject.isPercentChart?i.y:i[u])/g*100,c=c||0):""}var y=this.getColumnIdx("y",l(e.seriesdata[n].yaxiscolumnorder))
return c=e.dataObject.isHierarchy&&p.children&&a==y&&X(p.value)?p.value:o==ml?i:i[u]},h.getMetaInfoObj=function(t,e,n){function r(t,e){var n=Yl(i[t]||{})
return n.value=e,n.columnindex=t,n}var a=t.systemConf.metadata.axes,i=t.systemConf.metadata.columns,o=t.systemConf.seriesdata.chartdata,l=[],s=o[n=t.isAxisCategory||t.isNonAxisMultiSeriesCategory?n:0].yaxiscolumnorder||[0,0],u=s instanceof Array?a.y[s[0]][s[1]||0]:a.y[s][0]
if(e instanceof Array&&e.forEach(function(t,e){var n=i.indexOf(i.filter(function(t,n){return t.dataindex==e&&(h.yidx(s)!=e||h.yidx(s)==e&&u==n)})[0])
l.push(r(n,t))}),null!=a.clr){var c=a.clr instanceof Array?a.clr[0]:a.clr
l.push(r(c,o[n].seriesname))}return l},h.processMetaData=function(){var t=Vl(r,"axes.clr")
X(t)&&(t=t[0]),a.forEach(function(e,n){var r
if(n!==t){if(!X(e.datatype)){var a=h.getDataByColumnIndex(e.dataindex)
r=h.findDataType(a),e.datatype=r}X(r)&&!X(e[r])&&(e[r]={})}})},h.getDataByColumnIndex=function(t){var n=null,r=!1
return e.seriesdata.some(function(e){return e.data.some(function(e){return e.some(function(e){return X(e)?((r=X(e[t]))&&(n=e[t]),r):void 0})})}),n},h.findDataType=function(t){return"number"==typeof t?t>31536e6?co:ho:uo},h.processMetaData(),h},function(){function t(t,e,n){this.data=t,this.dataset=e,this.chartObj=n,this.values=[],this.minmaxY=[],this.groupedDataBySplitAxes=[],this.groupedDataByCombo=Ci(),this.stackeddata=[],this.stackedChart=null,this.allChartTypes=null,this.hasNegativeValue=[],this.baseline=[],this.xRange=null,this.yRange=[],this.domainCorrections={plotHeight:null,byDatalabels:{},forBubbles:{}},this.rangeCorrections={datalabels:{}},this.xaxisData=t.chart.axes.xaxis,this.yaxesData=t.chart.axes.yaxis,this.qualitativeRanges=null,this.groupedByStack=Ci(),this.ganttSeries_count=0,this.categoriesStore=null,this.plotBorder=null,this.globalChartType=null,this.hierarchical=n.preProcessor.hierarchical,this.processedseriesData=n.seriesdata,this.initialize()}var e=t.prototype
e.getSeriesData=function(){var t=this.chartObj
if(X(this.hierarchical)&&this.hierarchical.categories){var e=this.hierarchical.getSeries()
return t.seriesdata=e,e}return t.seriesdata},e.getMinMaxZ=function(){return Oi(wi(this.categoriesStore.z))},e.isBarEnabled=function(e){var n=t.helpers.getChartType(e.type||this.globalChartType,ho)
return!e.disabled&&Xe(n)},e.getAxisRotated=function(){var t=this.data.chart.axes
return t&&!0===t.rotated},e.containsNegativeData=function(t){return this.hasNegativeValue[t]},e.updateSeriesdatabyCategories=function(e,n,r,a,i){var o=this.dataset,l=t.helpers,s=l.isCatNull(o,"x"),u=l.isCatNull(o,"y",a),c=d3.set()
return e=e.filter(function(t){var e=!0,l=o.getX(t)
if(n&&(e=e&&!s(l)&&n.indexOf(l)>-1),r){var h=o.getY(t,a)
e=e&&!u(h)&&r.indexOf(h)>-1}return n&&i&&e&&(c.has(l)?e=!1:c.add(l)),e})},e.getPlotBorder=function(){var t=this.data,e=this.plotBorder
return!0===t.chart.plot.border.show&&(e={},e.top=e.right=e.bottom=e.left=0),e},e.overBubbles=function(t,e,n){var r=this.domainCorrections,a=this.xaxisData,i=this.yaxesData,o=this.chartObj,l=e+(X(n)?n:""),s=o.plotarea.height,u=this.chartObj
if(X(r.forBubbles[l])&&r.plotHeight===s)return r.forBubbles[l]
r.plotHeight=s
var c="x"===e,h=u.axes[e].orient,d=0,f=u.plotarea["left"===h?"height":"width"],p=[d,f],g=c?a:i[n],y=di().domain(t).range(p),v=this.updateMinMaxForBubble(p,y,e,n)
return d=X(g.minRange)?d:y.invert(v[0]),f=X(g.maxRange)?f:y.invert(v[1]),r.forBubbles[l]=[t[0]-d,f-t[1]],r.forBubbles[l]},e.setGroupDataComboKey=function(t,e,n){var r=this.data,a=this.groupedByStack,i=this.groupedDataByCombo,o=0
if(t&&Xe(e)){if(r.seriesdata.stackGroup&&(o=je(n.si,r.seriesdata.stackGroup)),a.has(o)){var l=a.get(o)
a.set(o,l.concat([n]))}else a.set(o,[n])
a.get(o).stackLabelIndex=n.si}var s=X(o)?e+"_"+o:e
if(i.has(s)){var u=i.get(s)
i.set(s,u.concat([n]))}else i.set(s,[n])},e.setExtremes=function(t,e,r,a,i,o){var l=this.dataset,s=this.categoriesStore.z
if(((r===ho||r===co)&&!e||i)&&!t.disabled&&n(t)){var u=wi(t)
if(i){var c=Oi(u,function(t){return l.getZ(t)})
s.push(c)}if(r===ho||r===co){var h
if(a==qr.charttype.arearange||a==qr.charttype.gantt){var d=wi(u.map(function(t){return l.getY(t,o)}))
h=Oi(d)}else h=Oi(u,function(t){return l.getY(t,o)})
this.seriesExtermes[o].push(h)}}},e.initialize=function(e){var r,a=this,i=a.domainCorrections,o=(a.xaxisData,a.yaxesData),l=a.allChartTypes,s=a.data,u=a.chartObj,c=a.globalChartType=s.seriesdata&&s.seriesdata.type,h=s.metadata.axes.y.length,d=s.metadata,f=d.axes,p=s.chart.plot.plotoptions,g=a.isstacked(),y=a.groupedDataBySplitAxes=[],v=a.groupedByStack=Ci(),m=a.dataset,x=a.categoriesStore={},b=a.processedseriesData,w=t.helpers
a.hierarchical&&!a.hierarchical.groupByTime&&X(e)&&a.hierarchical.update(),a.xRange=null,a.actual_yRange=a.actual_yRange||[],a.yRange=[],a.qualitativeRanges=null,a.groupedDataByCombo=Ci(),i.plotHeight=null,i.forBubbles={},m.seriesTypes=d3.set(),a.isBubbleEnabled=!1,a.noofBarEnabledSeries=0,a.noofAreaEnabledSeries=0,a.noofAreaRangeEnabledSeries=0,a.noofGanttEnabledSeries=0,a.totalnoofdatas=0,a.lastCategoryValue=0,a.isCombinationalChart=ki(),a.isAxisCategory=!1,a.isNonAxisMultiSeriesCategory=!1,a.isContinousChart=!0,a.isPolarAxisCategory=!1,a.hasLevelMarker=!1,a.isStackedPercentChart=!1,a.isPercentChart=!1,x.x=[],x.z=[[0]],x.subseries=[],m.hasNullFormatter={},(r=this.plotBorder={}).left=r.top=r.right=r.bottom=0,a.seriesExtermes=[]
for(var C=u.axes.y.groups,k=0;h>k;k++)x["y"+k]=[],a.seriesExtermes[k]=[],X(o[k])||(o[k]={}),C[k]=C[k]||{},C[k].disabled=!0
if(n(b)){var S=f.x?m.getColumn("x"):null,O=S?S.datatype:null,A=X(f.z),_=w.groupByDataIndices(d)
l=a.allChartTypes=l||w.getAllChartTypes(s)
var P=function(t){return-1!==l.indexOf(t)}
a.isDiscrete=qr.chartcategory.discrete.some(P),a.isHierarchy=qr.chartcategory.hierarchy.some(P),a.hasZaxis=X(m.zidx)&&qr.chartcategory.zaxis.some(P)
var T=s.metadata.axes.x,M=s.metadata.columns[T].datatype
a.needXCategoriesSorting=!1
var E
b.forEach(function(t,r){var i=t.disabled,o=t.data,s=w.is3D(o),u=w.getChartType(t.type||c,ho),h=(w.getChartType(t.type||c,"string"),w.getParsedYAxisOrder(t.yaxiscolumnorder)),d=(x["y"+h],m.getDataType("y",h))
if(m.seriesTypes.add(u),a.isCombinationalChart.add(u),a.isBubbleEnabled=a.isBubbleEnabled||!i&&qe(u),a.isWaterfallEnabled=a.isWaterfallEnabled||!i&&Ze(u),a.pieWithAxis=a.pieWithAxis||!i&&u==qr.charttype.bubblepie,a.noofBarEnabledSeries+=Xe(u)&&!i?1:0,a.noofAreaEnabledSeries+=u!=qr.charttype.area&&u!=qr.charttype.stkdarea||i?0:1,a.noofAreaRangeEnabledSeries+=u!=qr.charttype.arearange||i?0:1,a.noofGanttEnabledSeries=a.ganttSeries_count+=u!==qr.charttype.gantt||i?0:1,a.isContinousChart=a.isContinousChart&&(u==qr.charttype.line||Ue(u)||Qe(u)),a.hasLevelMarker=a.hasLevelMarker||u==qr.charttype.bullet||u==qr.charttype.dial,a.isAxisCategory=a.isAxisCategory||qr.chartcategory.axis.indexOf(u)>=0,a.isNonAxisMultiSeriesCategory=a.isNonAxisMultiSeriesCategory||qr.chartcategory.nonaxismultiseries.indexOf(u)>=0,a.isPolarAxisCategory=a.isPolarAxisCategory||u==qr.charttype.web,"addorremoveseries"!==e&&!s&&n(o)&&(o=a.convertTo3DArray(t,_,u)),!i&&n(o)){x["y"+h].enabled=!0,C[h].disabled=!1,E=u===qr.charttype.waterfall&&null==E
var f={si:r,d:o}
y[h]=y[h]?y[h].concat([f]):[f],a.setGroupDataComboKey(g,u,f)
var p=m.getDataType("x",null,l),v=(m.getDataType("y",h,l),m.getColumn("y",h))
X(m.hasNullFormatter.x)||(m.hasNullFormatter.x=!(p!==uo||!B(S[O],"nullformatting"))),X(m.hasNullFormatter["y"+h])||(m.hasNullFormatter["y"+h]=!(d!==uo||!B(v[v.datatype],"nullformatting"))),a.storeCategories(o,g,_,u,p,d,h,E),a.setExtremes(o,g,d,u,A,h),a.totalDataCount(o)}})
var L=Vl(u.userdata,"chart.axes.xaxis.categories")
if(a.isAxisCategory&&M!==uo&&a.needXCategoriesSorting&&(!X(L)||X(L)&&0===L.length)&&x.x.sort(_i),a.xymultiRenderer=a.isAxisCategory,a.isCombinationalChart=a.isCombinationalChart.values().length>1,a.groupedByStack=v,a.isPercentChart=a.noofBarEnabledSeries&&!a.hasLevelMarker&&!a.noofGanttEnabledSeries&&B(p,"bar","showAs")&&p.bar.showAs,g){var z=m.seriesTypes
a.isStackedPercentChart=a.noofBarEnabledSeries&&!a.hasLevelMarker&&!a.isWaterfallEnabled&&p.bar.stacked.showAs===_l||a.noofAreaEnabledSeries&&p.area.stacked.showAs===_l||z.has(qr.charttype.web)&&p.web.stacked.showAs===_l||z.has(qr.charttype.line)&&p.line.stacked.showAs===_l}a.pieWithAxis&&(a.bubblepieData=a.processBubblePieData())}},e.getThresholdValues=function(t){var e=[]
return X(t.threshold)&&rt(t.threshold,function(t){!0===t.show&&t.values.length&&(e=e.concat(t.values))}),e},e.getDomain=function(t,e){return this.hierarchical&&(!this.hierarchical.groupByDiscreteTime||!e)||this.isWaterfallEnabled?d3.range(t.length):t},e.updateMinMaxForBubble=function(e,n,r,a){var i=this.processedseriesData,o=this.groupedDataBySplitAxes,l=this.dataset,s=this.chartObj,u=t.helpers,c=e[0],h=e[1],d="x"==r
return((d?i:o[a])||[]).forEach(function(t){var e=d?t.data:t.d,r=(d?t:i[t.si]).disabled,o=u.getParsedYAxisOrder((d?t:i[t.si]).yaxiscolumnorder)
if(!r){var f=u.isCatNull(l,"x"),p=u.isCatNull(l,"y",o)
e.forEach(function(t){t.forEach(function(t){var e=d?l.getX(t):l.getY(t,a),r=l.getZ(t)||s.zscale.domain()[0]
if(t&&!t.isDummy&&!f(l.getX(t))&&!p(l.getY(t,o))){var i=s.zscale(r),u=n(e)+(null!=n.bandwidth?n.bandwidth()/2:0),g=u+i/2,y=u-i/2
g>h&&(h=g),c>y&&(c=y)}})})}}),[c,h]},t.helpers={isCatNull:function(t,e,n){var r=t.hasNullFormatter&&!t.hasNullFormatter[e+(X(n)?n:"")]
return function(t){return!X(t)&&r}},is3D:function(t){return n(t)&&n(t[0])&&n(t[0][0])},getParsedYAxisOrder:function(t){return n(t)?t[0]:t||0},getChartType:function(t,e,n,r){if(null!=t||null!=n){var a,i,o=r&&r.seriesdata.chartdata
return X(n)&&(t=Wl((o[n]||o[0]).type,r.seriesdata.type)),isNaN(+t)?(a=t.toLowerCase(),i=qr.charttype[a]):(i=+t,a=qr.charttypenames.get(i)),"string"===e?a:e===ho?i:{name:a,value:i}}},getAllChartTypes:function(t,e){var n=this,r=t.seriesdata&&t.seriesdata.type
return Wl(Vl(t,"seriesdata.chartdata"),[]).map(function(t){var a=n.getChartType(Wl(t.type,r),Wl(e,ho))
return e||"object"!==e?a:{}})},filterDataToViewPort:function(t,e,n,r){return t.filter(function(t){var a=r(t)
return a>=e&&n>=a?t:void 0})},priorityBasedValue:function(t,e){var n=null,r=t.length,a=0
for(e=Wl(e,0);r>a&&!X(n);)n=null!=t[a]?t[a]:null,a++
return Wl(n,e)},groupByDataIndices:function(t){var e=t.columns
return(t.axes.groupby||[]).map(function(t){return e[t].dataindex})}},qr.DataProcessor=t}(window),function(t){"use strict"
function e(t){this.chart=t,this.data=t.systemConf,this.initialize()}e.prototype.initialize=function(){var t=this.chart,e=this.data,n=e.metadata.axes.x,r=e.metadata.columns[n].datatype,a=qr.DataProcessor.helpers,i=qr.chartcategory.discrete.some(function(e){return-1!==t.chartTypes.indexOf(e)}),o=a.getChartType(null,null,0,t.systemConf),l=o.value,s=o.name,u=Xe(l)||Ue(l)||Ge(l)||Qe(l)||"line"===s
this.isHierarchyLayout()&&u&&(this.hierarchical=new qr.HierarchicalOrdinalDataAdapter(this.chart),this.chart.seriesdata=this.hierarchical.getSeries()),this.processTimeData(),qr.requireXDataSorting&&(r===ho||r===co&&!i)&&this.sortData(n,r)},e.prototype.isHierarchyLayout=function(){return this.chart.systemConf.seriesdata.chartdata.some(function(t){return c.hasInnerSeries(t)})},e.prototype.processTimeData=function(){var t,r,a,i=this.chart.seriesdata
r=(t=e.helpers.time.getDataInfo(this.data)).indices,a=t.formatConf.some(function(t){return X(t)&&X(t.inputformat)}),r&&r.length&&a&&i.forEach(function(r){var a=r.data,i=qr.DataProcessor.helpers.is3D(a)
n(a)&&a.forEach(function(r){i&&n(r)&&r.forEach(function(n){e.helpers.time.applyFormats(n,t)}),i||e.helpers.time.applyFormats(r,t)})})},e.prototype.sortData=function(t){var r=this.chart,a=this.data
return r.seriesdata.forEach(function(r){var i=r.data,o=a.metadata.columns[t].dataindex
qr.DataProcessor.helpers.is3D(i)?n(i)&&i.forEach(function(t){e.helpers.linear.sort(t,o)}):e.helpers.linear.sort(i,o)}),a},(e.helpers={time:{},ordinal:{},numeric:{},linear:{}}).time={getDataInfo:function(e,n){var r,a,i,o=e.metadata.axes.x,l=/timestamp/i,s=[],u=[]
return wi([o,wi(e.metadata.axes.y)]).map(function(c){i=Wl(e.metadata.columns[c],{}),r=Wl(i.time,{}),"time"!==i.datatype||c===o||n||(a=r.inputformat,u.push(l.test(a)&&"function"!==a&&"function"!=typeof t[a]?null:r),s.push(e.metadata.columns[c].dataindex))}),{indices:s,formatConf:u}},applyFormats:function(t,e){var r=e.indices,a=e.formatConf
return r.map(function(e,r){X(t[e])&&(t[e]=n(t[e])?t[e].map(function(t){return bn(t,0,a[r]).getTime()}):bn(t[e],0,a[r]).getTime())}),t}},e.helpers.linear={sort:function(t,e){return t.sort(function(t,n){return t=t[e],(n=n[e])>t?-1:t>n?1:t>=n?0:NaN})}},qr.PreProcessor=e}(window),qr.DataProcessor.prototype.getCategories=function(t,e){var n,r=this.chartObj,a=r.dataObject.hierarchical,i=this.categoriesStore
return B(r.systemConf,"chart.zoom."+t+".categories")?r.systemConf.chart.zoom[t].categories:("x"===t?(n=X(a)?a.groupByTime?e>0?a.categoriesList[e-1]:a.groupByDiscreteTime?Wl(this.xaxisData.categories,i.x.sort(d3.ascending)):a.leafCategories:e>0?a.categoriesList[e-1]:a.leafCategories:this.xaxisData.categories,e=""):n=this.yaxesData[e].categories,X(n)&&0!==n.length||(n=i[t+e]),"y"!==t||i["y"+e].enabled||(n=["NoData","NoData"]),n)},qr.DataProcessor.prototype.getMinMaxX=function(t){var e,n=this.xaxisData,r=this.processedseriesData,a=this.chartObj,i=this.dataset,o=n.minRange,l=n.maxRange,s=i.getDataType("x"),u=this.xRange
if(t=Wl(t,.05),B(a.systemConf,"chart.zoom.x"))return xRange=a.systemConf.chart.zoom.x,[xRange.minRange,xRange.maxRange]
if(!X(u)){e=r.map(function(t){return t.data.map(function(t){return Oi(t,function(t){return i.getX(t)})})})
var c=Wl(Vl(a.userdata,"chart.axes.xaxis"),{})
u=this.xRange=Oi(wi(wi(e)).concat(this.getThresholdValues(c)))}!this.isBubbleEnabled||s===co||X(o)||X(l)||(e=this.overBubbles(u,"x"),u=[u[0]-e[0],u[1]+e[1]])
var h,d,f=0
return s!==co&&0!==t&&(f=this.getCorrectionOverDataLabels(u,"x")),0===(h=u[1]-u[0])&&(h=1),d=h*t+f,[Wl(o,u[0]-d,0),Wl(l,u[1]+d,0)]},qr.DataProcessor.prototype.getMinMaxY=function(t,e,n){var r,a=this.allChartTypes,i=this.yaxesData,o=this.hasNegativeValue,l=this.baseline,s=this.yRange,u=this.actual_yRange,c=this.chartObj,h=this.dataset,d=this.isstacked()||this.isPercentChart,f=Wl(i[t],{}),p=h.getDataType("y",t),y=this.ganttSeries_count,v=f.minRange,m=f.maxRange,x=0,b=s[t],w=c.getAxesCount("y")>1,C=this.noofBarEnabledSeries,k=this.noofAreaEnabledSeries
if(l[t=Wl(t,0)]=!0===Vl(f,"baseline.show")?f.baseline.value:null,w){var S=this.groupedDataBySplitAxes[t],O=S?S.map(function(t){return a[t.si]}):[],A=function(t){return!!Xe(t)||void 0},_=function(t){return t===qr.charttype.area||t===qr.charttype.stkdarea||void 0}
C=O.some(A)
k=O.some(_)}if(B(c.systemConf,"chart.zoom.y")){var P=c.systemConf.chart.zoom.y,T=P.minRange,M=P.maxRange,E=l[t]
return o[t]=X(E)&&!d&&E>=T&&M>=E?E:0>T?0:null,[T,M]}if(e=Wl(e,c.datalabels.hasFixedPosition?1e-8:.05),!X(s[t])){this.isWaterfallEnabled?(s[t]=kr(this),r=s[t]):d?(s[t]=g(l[t],this),r=s[t][t]):(s[t]=function(t,e){var n=wi(e.seriesExtermes[t])
return 0!=n.length?Oi(n):n.enabled?[0,0]:null}(t,this),r=s[t])
var L=Wl(Vl(c.userdata,"chart.axes.yaxis["+t+"]"),{})
X(r)&&(r=Oi(r.concat(this.getThresholdValues(L))))
var z;(this.hasLevelMarker||C&&!y)&&(z=this.overLevelMarker(r)),d?(u[t]=u[t]||[])[t]=s[t][t]=Wl(z,r):u[t]=s[t]=Wl(z,r),b=s[t]}if(!X(b)||d&&!X(b[t]))return["NoData","NoData"]
var D=d?b[t]:b
o[t]=p===co?null:X(l[t])&&!d?l[t]:f.minRange<0||D[0]<0?0:null
var R=(C||k)&&p==ho,j=R&&(null==o[t]||o[t]>0)
R&&D[1]-D[0]==0&&(D=Oi(wi([D,[0]]))),!this.isBubbleEnabled||p===co||X(f.minRange)||X(f.maxRange)||(D[0]=j?0:D[0],r=this.overBubbles(D,"y",t),D=[D[0]-r[0],D[1]+r[1]])
var I=D[1]-D[0]
0===I&&(I=1),this.isStackedPercentChart||this.isPercentChart||this.hasLevelMarker||this.isWaterfallEnabled||(x=I*e),X(v)||(v=j?0:D[0]-x),X(m)||(m=D[1]+x)
var H=0
if("time"!==p&&0!==e&&!n){H=c.datalabels.hasFixedPosition&&X(f.maxRange)&&f.maxRange<=D[1]?0:this.getCorrectionOverDataLabels([v,m],"y",t)}if(j||c.datalabels.hasFixedPosition||(v=v-H||0),m=m+H||0,this.isWaterfallEnabled){var N=Sr([v,m],0,t,c,H)
v=N[0],m=N[1]}return[v,m]},qr.DataProcessor.prototype.isstacked=function(t){var e=this.data,n=e.chart.plot.plotoptions,r=this.stackedChart,a=qr.DataProcessor.helpers
if(X(t)){var i=a.getChartType(t,ho)
return t=a.getChartType(t,"string"),n=n[t],i===qr.charttype.stkdarea||i===qr.charttype.stkdbar||i===qr.charttype.bullet||"bullet"===t||("bar"===t||"area"===t||"web"===t||"line"===t||"waterfall"===t)&&!0===Vl(n,"stacked.enabled")}if(!X(r)){var o=this.allChartTypes||a.getAllChartTypes(e),l=o[0]
this.stackedChart=r=-1!==o.indexOf(qr.charttype.stkdarea)||-1!==o.indexOf(qr.charttype.stkdbar)||-1!==o.indexOf(qr.charttype.bullet)||-1!==o.indexOf(qr.charttype.bar)&&!0===Vl(n,"bar.stacked.enabled")||-1!==o.indexOf(qr.charttype.area)&&!0===Vl(n,"area.stacked.enabled")||l===qr.charttype.web&&!0===Vl(n,"web.stacked.enabled")||l===qr.charttype.line&&!0===Vl(n,"line.stacked.enabled")||l===qr.charttype.waterfall&&!0===Vl(n,"waterfall.stacked.enabled")}return r},qr.DataProcessor.prototype.getXYvalue=function(t,e,n,r,a,i,o,l,s){var u=this.yaxesData,c=this.dataset
if(this.isPolarAxisCategory){var h=u[a].reversed&&!e?r.domain().length-1:0,d=n(c.getX(i)),f=e?r(i.y+i.y0):r(c.getY(i,a))+(null!=r.bandwidth?r.bandwidth()/2:0),p=Ut(f=Da(f,r.range()[h]),d)
return"x"===o?p[0]:p[1]}switch(o){case"x":return t?e?r(i.y+i.y0):r(c.getY(i,a,s))+(null!=r.bandwidth?r.bandwidth()/2:0):n(c.getX(i))+(null!=n.bandwidth?n.bandwidth()/2:0)
case"y":return t?n(c.getX(i))+(null!=n.bandwidth?n.bandwidth()/2:0):e?r(i.y+i.y0):r(c.getY(i,a,s))+(null!=r.bandwidth?r.bandwidth()/2:0)
case"z":return l(c.getZ(i)||l.domain()[0])}},qr.DataProcessor.prototype.getTransRectValue=function(t,n,r,a,i,o,l){var s=this.dataset,u=qr.DataProcessor.helpers.priorityBasedValue,c=i&&i.yscale,h=i&&i.addRangeBand(c),d=i&&"waterfall"==i.charttype,f=i&&i.stacked||d,p=i&&s.getY(n,i.yaxiscolumnorder)instanceof Array,g=i&&(c.bandwidth?c.ordinalRange[0]+h:c.range()[0]),y=i&&c.range()[1]
switch(this.dataset.yAccessor=this.isPercentChart?function(t){return t.y}:this.dataset.getY,t){case"x":if(i.axisrotated){l=p?0:null
var v=this.dataset.yAccessor(n,i.yaxiscolumnorder,l)
return c.bandwidth?c.origRange[0]:c(f?Ra(n.y0,n.y+n.y0):null!=l?v:null!=i.hasNegValue?v<i.hasNegValue?v:i.hasNegValue:c.domain()[0])}var m=s.getX(n)
return(i.stacked?i.bandwidth1(m)+i.bandwidth2(i.stackGroupIndex):i.bandwidth1(m)+i.bandwidth2(i.barDatasetIndex+r))+i.padding
case"y":if(i.axisrotated){m=s.getX(n)
return(i.stacked?i.bandwidth1(m)+i.bandwidth2(i.stackGroupIndex):i.bandwidth1(m)+i.bandwidth2(i.barDatasetIndex+r))+i.padding}l=null!=l?l:p?1:null
v=this.dataset.yAccessor(n,i.yaxiscolumnorder,l)
return f?c(Da(n.y0,n.y+n.y0))+h:c(null==c.bandwidth?Da(i.hasNegValue||0,v):v)+h
case"width":if(i.axisrotated){var x=null==i.hasNegValue?p?c(this.dataset.yAccessor(n,i.yaxiscolumnorder,0)):g:c(i.hasNegValue)
l=p?1:null
v=c(this.dataset.yAccessor(n,i.yaxiscolumnorder,l))
return c.bandwidth?v+h:f?ja(c(n.y+n.y0)-c(n.y0))+h:(ja(y-x-(y-v))||0)+h}return i.barWidth
case"height":if(i.axisrotated)return i.barWidth
x=null!=i.hasNegValue?c(i.hasNegValue):p&&!f?c(this.dataset.yAccessor(n,i.yaxiscolumnorder,0)):g
l=p?1:null
v=c(this.dataset.yAccessor(n,i.yaxiscolumnorder,l))+h
return c.bandwidth?ja(c.origRange[0]-v):f?ja(x-c(n.y+n.y0)-(x-c(n.y0)))+h:ja(x-v)
case"radius":var b={},w=null!=o?o.toString().split("/"):null,C=null!=w&&null!=w[0]?w[0].split(" "):[],k=null!=w&&null!=w[1]?w[1].split(" "):C
return b.tlx=e(u([C[0]])),b.tly=e(u([k[0],C[0]])),b.trx=e(u([C[1],C[0]])),b.trY=e(u([k[1],k[0],C[1],C[0]])),b.brx=e(u([C[2],C[0]])),b.bry=e(u([k[2],k[0],C[2],C[0]])),b.blx=e(u([C[3],C[1],C[0]])),b.bly=e(u([k[3],k[1],C[3],C[0]])),b}},qr.DataProcessor.prototype.getCorrectionOverDataLabels=function(t,e,n){var r=this.chartObj,a=this.xaxisData,i=this.yaxesData,o=this.domainCorrections,l=this.rangeCorrections.datalabels,s=this.processedseriesData,u=this.groupedDataBySplitAxes,c="x"==e,h=e+(X(n)?n:""),d=c?a:i[n],f=d.minRange,p=d.maxRange,g=r.plotarea.height
if(!(this.isStackedPercentChart||this.isPercentChart||this.isBubbleEnabled&&!this.pieWithAxis||!this.isAxisCategory&&!this.isNonAxisMultiSeriesCategory||null!=f&&null!=p||!qr.labelRenderer||null!=o.byDatalabels[h]&&g==o.plotHeight)){o.plotHeight=g
var y=r.axes[e].orient,v=r.plotarea["left"==y?"height":"width"],m=t[1]-t[0],x=c?s:u[n],b=0
null!=x&&(N(l[h])&&(l[h]=zs(e,x,r)),b=l[h]),o.byDatalabels[h]=m/(v-b)*b}return o.byDatalabels[h]||0},qr.DataProcessor.prototype.extendOuterpadding=function(t,e,n,r,a,i,o){var l=this.processedseriesData,s=this.groupedDataBySplitAxes,u=this.rangeCorrections.datalabels,c=this.chartObj,h=0
if(c.datalabels.moduleExists&&function(t){var e=t.systemConf
if(t.dataObject.totalnoofdatas>+e.canvas.intelligence.dataCount.datalabels)return!1
if(!0===Vl(e.chart,"plot.datalabels.show"))return!0
for(var n=t.seriesdata,r=n.length;r--;){var a=e.chart.plot.plotoptions[t.chartTypes[r].name],i=a.datalabels
if(X(n[r].plotoptions)&&(i=er(a,n[r].plotoptions)),ir(i,t))return!0}return!1}(c)||this.isBubbleEnabled){e[0]>e[1]&&(e=[e[1],e[0]])
var d=fi().domain(t).range(e).paddingInner(r).paddingOuter(a),f=e
if(this.isBubbleEnabled){var p=this.updateMinMaxForBubble(e,d,i,o),g=.5*Da(e[0]-p[0],p[1]-e[1])
f=[p[0]-g,p[1]+g]}else if(qr.labelRenderer){var y="x"==i?l:s[o],v=d(d.domain()[0])-d.range()[0],m=i+(X(o)?o:"")
N(u[m])&&(u[m]=zs(i,y,c))
g=u[m]
g=Da(0,g-v),f=[e[0]-g,e[1]+g]}h=Da(f[1]-e[1],-f[0])}return h},qr.DataProcessor.prototype.convertTo3DArray=function(t,e,n){var r=t.data
if(e.length>0&&(n===qr.charttype.bar||n===qr.charttype.stkdbar)){var a=function(t,e){var n=[],r=[]
return t.data.forEach(function(t){var a=e.reduce(function(e,n){return e+t[n]},"")
r.push(a),-1===n.indexOf(a)&&n.push(a)}),{distintGroupbyCat:n,allGroupbyCat:r}}(t,e),i=a.distintGroupbyCat,o=a.allGroupbyCat,l=[]
t.data.forEach(function(t,e){var n=i.indexOf(o[e])
l[n]?l[n].push(t):(l[n]=[],l[n].push(t))}),r=t.data=l}else X(r)&&(!r.length||X(r[0])&&r[0].length)&&(t.data=[],t.data.push(r),r=t.data)
return r},qr.DataProcessor.prototype.findXCategories=function(t){var e=this.categoriesStore,n=this.processedseriesData,r=this.dataset,a=e.x
return n.forEach(function(e){var n=e.disabled&&!t,i=e.data
n||null==i||i.constructor!=Array||i.map(function(t){return null!=t&&t.constructor==Array?t.map(function(t){var e=r.getX(t)
null!=e&&-1==a.indexOf(e)&&a.push(e)}):void 0})}),a},qr.DataProcessor.prototype.storeCategories=function(t,e,r,a,i,o,l,s){var u=this,c=u.dataset,h=u.categoriesStore,d=h.x,f=h["y"+l],p=qr.DataProcessor.helpers,g=p.isCatNull(c,"x"),y=p.isCatNull(c,"y",l)
e?t.map(function(e){return!t.disabled&&n(e)?e.map(function(t){var n=c.getActualX(t),a=r.length>0?c.getGroupByValues(t,r):null
n>u.lastCategoryValue&&!u.needXCategoriesSorting?u.lastCategoryValue=n:u.needXCategoriesSorting||-1!=d.indexOf(n)||(u.needXCategoriesSorting=!0),g(n)||-1!=d.indexOf(n)&&!s||d.push(n),null!=a&&(e.groupByVal=a,t.groupByVal=a,-1==h.subseries.indexOf(a)&&h.subseries.push(a))}):void 0}):(i===uo||o===uo)&&t.map(function(e){return!t.disabled&&n(e)?e.map(function(t){var e=c.getActualX(t),n=c.getY(t,l)
i!==uo||g(e)||(s||-1===d.indexOf(e))&&d.push(e),o===uo&&(a===qr.charttype.arearange||a===qr.charttype.gantt?(X(n)&&-1===f.indexOf(n[0])&&f.push(n[0]),X(n)&&-1===f.indexOf(n[1])&&f.push(n[1])):!y(n)&&-1===f.indexOf(n)&&f.push(n))}):void 0})},qr.DataProcessor.prototype.overLevelMarker=function(t){var e,r,a=qr.DataProcessor.helpers,i=this.qualitativeRanges,o=this.processedseriesData,l=a.getChartType(this.processedseriesData[0].type||this.globalChartType,"string"),s=this.data.chart.plot.plotoptions[l],u=s.levelMarker,c=s.targetMarker
return X(i)||(i=this.qualitativeRanges=[],o.forEach(function(t){var a=t.plotoptions||{}
u=Fl(u,a.levelMarker),c=Fl(c,a.targetMarker),e=u.dataindex,r=c.dataindex,(u.enabled||c.enabled)&&(e||r?t.data.forEach(function(t){t.forEach(function(t){c.enabled&&X(t[r])&&i.push(t[r]),u.enabled&&X(t[e])&&(n(t[e])?i=i.concat(t[e]):i.push(t[e]))})}):u.enabled&&X(u.values)&&(i=i.concat(u.values)))})),isNaN(i[1]-i[0])&&!this.hasLevelMarker?t:d3.extent(d3.merge([i,t,[0]]))},qr.DataProcessor.prototype.totalDataCount=function(t){var e=this,r=0
return t.map(function(a){if(!t.disabled&&n(a)){var i=e.isAxisCategory||e.isPolarAxisCategory||e.isNonAxisMultiSeriesCategory?a.length:a.reduce(function(t,e){return t+(e.disabled?0:1)},0)
r+=1!==i||null!==a[0]&&a[0].length?i:0}}),this.totalnoofdatas+=r,r},qr.DataProcessor.prototype.processBubblePieData=function(t){t=t||qr.charttype.bubblepie
var e=this.processedseriesData,n=this.chartObj,r=this.dataset,a=W(this.data.chart.plot.plotoptions[qr.charttypenames.get(t)].dataindex,3),i=[],o=[],l={x:$a,y:[]},s=Vl(n.userdata,"chart.axes.xaxis.categories")
return r.getDataType("x")==uo&&s&&s.length&&(l.x=s),e.forEach(function(t,e){var a=qr.DataProcessor.helpers.getParsedYAxisOrder(t.yaxiscolumnorder),s=Vl(n.userdata,"chart.axes.yaxis["+a+"].categories")
r.getDataType("y",a)==uo&&s&&s.length&&(l.y[a]=s),t.data.forEach(function(t,s){t.forEach(function(t){var u=function(t,e){var a=n.seriesdata[e],i=qr.DataProcessor.helpers.getParsedYAxisOrder(a.yaxiscolumnorder),o=a.disabled||!tn(n.chartTypes[e].value),s=r.getX(t),u=r.getY(t,i)
return l.x&&(o=o||-1===l.x.indexOf(s)),l.y[i]&&(o=o||-1===l.y[i].indexOf(u)),o}(t,e)
if(o[s]=o[s]||[],i[s]=i[s]||[],!u){var c=Hs.getKey(t,e,n),h=o[s].indexOf(c);-1===h&&(h=o[s].length,i[s][h]=function(t,e){var n=[]
return n.x=r.getX(t),n.y=r.getY(t,e),n.z=r.getZ(t),n.reference=t,n}(t,a)),i[s][h][e]=t,o[s].push(c)}t.disabled=t.dummy=u}),i[s]=i[s]||[]})}),i.forEach(function(t){t.forEach(function(t){e.forEach(function(e,r){t[r]||(t[r]=function(t,e){var r=qr.DataProcessor.helpers.getParsedYAxisOrder(n.seriesdata[e].yaxiscolumnorder),i=n.dataset,o=[]
return o[i.xidx]=t.x,o[i.yidx(r)]=t.y,o[i.zidx]=t.z,o[a]=null,o.dummy=!0,o}(t,r))})})}),i},qr.hierarchymodel={},qr.hierarchymodel.get=function(t){function r(t){return t.map(function(t){var e
if(t.data&&t.data[0]&&t.data[0].constructor===Array){e=t.data
var n=t.leafColors
n&&e.forEach(function(t,e){t.color=n[e%n.length]})}else t.data?(u.hasHierarchyData=!0,e=r(t.data)):e=t
for(var a in t)t.hasOwnProperty(a)&&"data"!==a&&(e[a]=t[a])
return e})}function a(t){t.forEach(function(e,r){if(e.level=null!=t.level?t.level+"_"+r:r+"",n(e[0]))a(e)
else{var l=+e.level.split("_")[0],c=i.seriesdata.chartdata[l],h=s.getParsedYAxisOrder(c.yaxiscolumnorder)
if(!c.disabled){var d=Oi([e],function(t){return o.getY(t,h)})
u.seriesExtermes[0].push(d),u.totalnoofdatas++}}})}var i=t.systemConf,o=t.dataset,l=t.seriesdata,s=qr.DataProcessor.helpers,u={data:i}
return u.getTransRectValue=function(t,n,r,a,i,o){var l=s.priorityBasedValue
switch(t){case"radius":var u={},c=null!=o?o.toString().split("/"):null,h=null!=c&&null!=c[0]?c[0].split(" "):[],d=null!=c&&null!=c[1]?c[1].split(" "):h
return u.tlx=e(l([h[0]])),u.tly=e(l([d[0],h[0]])),u.trx=e(l([h[1],h[0]])),u.trY=e(l([d[1],d[0],h[1],h[0]])),u.brx=e(l([h[2],h[0]])),u.bry=e(l([d[2],d[0],h[2],h[0]])),u.blx=e(l([h[3],h[1],h[0]])),u.bly=e(l([d[3],d[1],h[3],h[0]])),u}},u.getAxisRotated=function(){var t=u.data.chart.axes
return t&&!0===t.rotated},u.containsNegativeData=function(){return!1},u.isstacked=function(){return!1},u.getPlotBorder=function(){var e=i.chart.plot.border,n=!0===e.show?U(e,"size",0,10,t.plotarea.width,t.plotarea.height):0
return n={left:n,top:n,right:n,bottom:n}},u.initialize=function(e){globalChartType=i.seriesdata&&i.seriesdata.type,o.seriesTypes=d3.set(),u.totalnoofdatas=0,u.isNonAxisMultiSeriesCategory=!0,u.isHierarchy=!0,u.seriesExtermes=[[]],null!=l&&n(l)&&("addorremoveseries"!=e&&(t.seriesdata=l=r(l)),a(l),l.forEach(function(t){var e=s.getChartType(t.type||globalChartType,ho)
o.seriesTypes.add(e)}))},u.initialize(),u},qr.defaultTheme=function(t){return{canvas:{fontFamily:El.globalProp.fontL1Family,fontColor:El.globalProp.fontL1Color,fontSize:t.fontL1Size.l3,fontWeight:El.globalProp.fontL1Weight,fontStyle:El.globalProp.fontL1Style,title:{show:!0,text:"Title comes here",hAlign:"left",vAlign:"top",marginTop:10,marginRight:0,marginBottom:0,marginLeft:10,target:"newtab",fontSize:t.fontL1Size.l1},subtitle:{show:!0,text:"Description comes here",hAlign:"left",vAlign:"top",marginTop:0,marginRight:0,marginBottom:0,marginLeft:10,target:"newtab",fontSize:t.fontL1Size.l2},background:{alpha:1,color:"#FFFFFF"},border:{show:!0,size:1,style:"solid",radius:1,color:"#cccccc"},shadow:{show:!0,x:1,y:1,color:"rgba(0,0,0,0.1)",blur:2,inset:!1},intelligence:{dimension:{title:100,subtitle:120,xaxis:70,xaxislabel:80,yaxis:70,yaxislabel:80,legend:140,credits:150,marker:50},dataCount:{marker:300,animation:300,datalabels:300}}},legend:{enabled:!0,colorPallete:{type:"multicolor",options:{multicolor:"countries",monochrome:{baseColor:"red",count:5,colorGamma:[.3,.9]}}},hAlign:"right",vAlign:"top",fontSize:t.fontL1Size.l5,textPadding:5,itemMargin:3,marginTop:10,marginRight:10,marginBottom:10,marginLeft:10,colorBox:{shape:"square",strokeWidth:2},colorBand:{},title:{show:!1,text:"Legend",fontSize:t.fontL1Size.l4,keepAligned:!1},background:{color:"transparent",alpha:0},border:{show:!0,size:1,style:"solid",radius:0,color:"transparent"},itemDisabledStyle:{color:"#d1d1d1",strikeout:!1},shadow:{show:!1,color:"rgba(0,0,0,0.3)",x:2,y:2,blur:3,inset:!1},filter:{enabled:!0},highlightEffect:{selectedSeries:null,unselectedSeries:"none"},expandable:{fontSize:t.fontL1Size.l5}},chart:{marginTop:10,marginRight:10,marginBottom:10,marginLeft:10,fontSize:t.fontL2Size.l3,zoom:{type:"none"},effects:{choice:"auto",options:{dropShadow:{dx:"5",dy:"5",blur:"3",color:"rgba(0,0,0,0.6)"},freeHand:{scale:7}}},plot:{renderer:{mode:"svg",image:{source:"auto",addDimensionInSource:!1,exportUrl:""}},background:{alpha:1,color:"transparent",gradients:{show:!1,type:"radial"}},border:{show:!1,size:1,style:"solid",radius:0,color:"#ececec"},animation:{enabled:El.globalProp.animation.enabled,easingType:El.globalProp.animation.easingType,duration:El.globalProp.animation.duration},datalabels:{show:El.globalProp.datalabels.enabled,handleOverlapping:!0,fontSize:t.datalabels.fontSize.l5,boundBox:{strokeColor:El.fontColor,fillColor:"white"}},events:{cursor:null,click:El.globalProp.events.click,mousemove:El.globalProp.events.mouseMove,mouseout:El.globalProp.events.mouseOut,doubleclick:El.globalProp.events.doubleClick,contextmenu:null,init:null,onload:null},plotoptions:{}},axes:{xaxis:{show:!0,label:{show:!0,text:"Xaxis",fontSize:t.fontL2Size.l4,marginTop:5,marginRight:5,marginBottom:5,marginLeft:5},grid:{show:!0,color:"transparent",strokeWidth:null},ticklabel:{textOverflow:"ellipsis",fontSize:t.fontL2Size.l5},tickmark:{strokeWidth:null,color:"#ececec",size:3},axisline:{show:!0,color:"#ececec",strokeWidth:null,style:"solid"},baseline:{show:!1,value:10,color:"black"},threshold:{line:{show:!1,values:[],label:{text:["Description comes here"],fontSize:t.fontL2Size.l5},marker:{enabled:!0,hoveroptions:{innerStrokeOpacity:1,outerFillColor:"transparent",outerStrokeWidth:2}}},coloroverlay:{show:!1,values:[],overlayRange:"below"},range:{show:!1,values:[],label:{text:["Description comes here"],fontSize:t.fontL2Size.l5}}}},yaxis:[{show:!0,label:{show:!0,text:"Yaxis",fontSize:t.fontL2Size.l4,marginTop:5,marginRight:5,marginBottom:5,marginLeft:5},grid:{show:!0,color:"#ececec"},ticklabel:{textOverflow:"ellipsis",fontSize:t.fontL2Size.l5},tickmark:{color:"#ececec",size:3},subtickmark:{color:"#ececec",size:5,count:0},axisline:{show:!0,color:"#ececec",strokeWidth:null,style:"solid"},baseline:{show:!1,value:0,color:"grey",strokeWidth:null},threshold:{line:{show:!1,values:[],label:{text:["Description comes here"],fontSize:t.fontL2Size.l5},marker:{enabled:!0,hoveroptions:{innerStrokeOpacity:1,outerFillColor:"transparent",outerStrokeWidth:2}}},coloroverlay:{show:!1,values:[],overlayRange:"below"},range:{show:!1,values:[],label:{text:["Description comes here"],fontSize:t.fontL2Size.l5}}}}]}},map:{allAreas:!0,renderingMode:"canvas",fillColor:"#dddddd",strokeColor:"#444",strokeWidth:.6,gradients:{options:{linear:{y2:100},radial:{radius:100,gradientUnits:"objectBoundingBox"}}},globe:{strokeWidth:1.5},labels:{strokeWidth:1.5},extent:{top:10,right:10,bottom:10,left:10},layerName:"source",useMeshOutline:!0,textStrokeWidth:2,animation:{enabled:!0,type:"fade",duration:500,easingType:"cubic"}},tooltip:{enabled:!0,fontSize:t.fontL1Size.l5,opacity:.8,zindex:2e3,view:"normal",crosshair:{type:"none",color:"grey"},pointerEvents:"none"},noDataHandler:{text:"No Data",fontSize:t.fontL1Size.l1},loader:{type:"none",fontSize:t.fontL1Size.l3}}},qr.getDefaultOptions=function(t,e,n){var r
switch(t){case"zoom":r={type:"none",resetButton:{fillColor:"grey",label:{text:"Reset Zoom",marginTop:5,marginRight:5,marginBottom:5,marginLeft:5,fontSize:n.fontL2Size.l5},border:{show:!0,size:1,radius:6,color:"#cccccc"},shadow:{show:!1,dx:1,dy:1,color:"#cccccc",blur:1}},selectionArea:{fillColor:"grey",fillOpacity:.4}}
break
case"scroll":r={enabled:!0,categoryThickness:null,visibleCategories:null,height:10,slider:{fillOpacity:.3,strokeOpacity:.3,strokeColor:"black"}}
break
case"legend":r={}
break
case"credits":r={enabled:!1,imageWidth:150,imageHeight:50,hAlign:"right",vAlign:"bottom",text:"Zoho Reports",target:"newtab",marginTop:0,marginRight:10,marginBottom:10,marginLeft:0,fontSize:n.fontL1Size.l4}
break
case"notes":r={enabled:!1,chartValues:[],plotValues:[],blockValues:[],type:"stickyNote",options:{stickyNote:{headWidth:15,headHeight:15,bodyWidth:100,bodyHeight:100,fontSize:n.fontL1Size.l5,color:["#F0F8FF","#FFE4C4","#DCDCDC","#ADFF2F","#90EE90","#87CEFA","#FFC0CB","#B0E0E6","#D2B48C","#D8BFD8","#EE82EE","#F5DEB3"],mode:"close",border:"1px solid grey"},customNote:{fontSize:n.fontL1Size.l5}}}
break
case"bar":r={outerPadding:.04,fillOpacity:.9,maxBandWidth:200,multiColoring:!1,border:{show:!1,size:null,style:"solid",radius:0,color:null},stacked:{enabled:!1,showAs:"values"},levelMarker:{enabled:!1,color:["#d8d8d8"],fillOpacity:.9},datalabels:{showAs:"y",stackLabels:{show:!1,showAs:"y"}},animation:{type:"verticalAll"},gradients:{options:{linear:{y2:50}}}}
break
case"line":r={mode:"linear",strokeWidth:2,outerPadding:.02,stacked:{enabled:!1,showAs:"values"},marker:{enabled:!0,innerStrokeWidth:2,outerFillColor:"transparent",outerStrokeColor:"transparent"},hoveroptions:{innerStrokeWidth:2,outerFillOpacity:.5,outerStrokeOpacity:.1},datalabels:{showAs:"y"},animation:{type:"strokeTween",marquee:{enabled:!1,duration:300},blink:{enabled:!1,type:"twinkle",duration:800}},gradients:{options:{linear:{x2:10,spreadMethod:"reflect"}}}}
break
case"area":case"arearange":r={strokeOpacity:.5,outerPadding:.02,fillOpacity:.4,mode:"linear",stacked:{enabled:!1,showAs:"values"},marker:{enabled:!1,outerFillColor:"transparent",outerStrokeOpacity:.5,size:1},hoveroptions:{innerStrokeWidth:2,outerFillOpacity:.5,outerStrokeOpacity:.1},datalabels:{showAs:"y"},gradients:{options:{linear:{x2:50}}},animation:{type:"vertPathTweenAll",marquee:{enabled:!1,duration:300},blink:{enabled:!1,type:"twinkle",duration:800}}}
break
case"scatter":r={outerPadding:.02,multiColoring:!1,marker:{size:1,innerFillColor:"white",innerStrokeColor:"white",innerStrokeWidth:0,innerStrokeOpacity:1,outerFillColor:"white",outerStrokeOpacity:1,outerStrokeWidth:2},hoveroptions:{innerStrokeOpacity:1,outerFillColor:"white",outerStrokeWidth:2},datalabels:{showAs:"y"},animation:{type:"allseries"},gradients:{options:{linear:{y2:100,gradientUnits:"userSpaceOnUse",colorGamma:[2,0]},radial:{radius:90,colorGamma:[2,0]}}}}
break
case"bubblepie":case"pie":r={startAngle:0,endAngle:2*Xa,innerRadius:0,outerPadding:10,datalabels:{type:"circular",padding:5,line:{strokeColor:"grey",strokeWidth:.3},innerLabel:{show:!1,showAs:"percent"}},animation:{type:"fanAll"},gradients:{options:{linear:{x2:15,spreadMethod:"repeat",gradientUnits:"userSpaceOnUse"},radial:{radius:90}}},models:{count:50}},"bubblepie"==t?(r.strokeColor="transparent",r.outerPadding=.02,r.datalabels.showAs="percent",r.hoveroptions={innerFillColor:"transparent",innerStrokeColor:"transparent",outerFillColor:"transparent",outerStrokeWidth:3}):(r.strokeColor="white",r.sliceOutHeight=5,r.maxRadius=250,r.datalabels.showAs="x")
break
case"funnel":r={weighted:"height",split:!1,canOverlap:!0,threeDimension:!0,outerPadding:"2%",stemHeight:"20%",stemWidth:"20%",coneWidth:"100%",strokeColor:"transparent",emptyFunnel:{show:!1,color:"#FAFAFA"},datalabels:{showAs:"x",type:"strokeddoubleside",padding:30,line:{strokeColor:"grey",strokeWidth:.3},innerLabel:{show:!1,showAs:"percent"}},gradients:{options:{linear:{x2:50,spreadMethod:"reflect",colorGamma:[.6,0]}}},animation:{type:"vertical"}}
break
case"web":r={fillOpacity:.5,strokeWidth:2,mode:"linearClosed",outerPadding:10,stacked:{enabled:!1,showAs:"values"},marker:{enabled:!0,innerStrokeOpacity:1,outerFillColor:"white"},hoveroptions:{innerStrokeWidth:2,innerStrokeOpacity:1,outerFillColor:"white"},datalabels:{showAs:"y"},animation:{type:"strokeTween",marquee:{enabled:!1,duration:300},blink:{enabled:!1,type:"twinkle",duration:800}},gradients:{options:{linear:{x2:15,spreadMethod:"repeat",gradientUnits:"userSpaceOnUse"},radial:{radius:90,x:0,y:0}}}}
break
case"pyramid":r={threeDimension:!0,strokeColor:"black",strokeWidth:null,strokeOpacity:.5,fillOpacity:.8,gradients:{options:{linear:{x2:50,spreadMethod:"reflect",colorGamma:[.8,0]}}},datalabels:{showAs:"y",type:"singleside",padding:10,relativeX:!0,line:{strokeColor:"grey",strokeWidth:.3},innerLabel:{show:!1,showAs:"percent"}},animation:{type:"vertical"}}
break
case"sunburst":r={strokeColor:"white",innerRadius:30,outerPadding:20,animation:{type:"fan"},datalabels:{showAs:"y",type:"circular",padding:10,line:{strokeColor:"grey",strokeWidth:.3},innerLabel:{show:!1,showAs:"splitpercent",parentLabel:{}}}}
break
case"dial":r={startAngle:-Xa/2,endAngle:Xa/2,innerRadius:"65%",maxRadius:500,outerPadding:20,padding:0,strokeColor:"rgba(0,0,0,0.1)",animation:{type:"fanAll"},needle:{show:!0,type:"round",strokeColor:"black",fillColor:"grey",width:15,padding:15},minmaxlabels:{show:!0,fontSize:n.datalabels.fontSize.l5},datalabels:{show:!0,showAs:"y",padding:2},levelMarker:{enabled:!0,strokeColor:"rgba(0,0,0,0.1)",innerPadding:0,outerPadding:0,colorGamma:[.3,.9]},targetMarker:{outerStrokeWidth:3,symbol:"line",innerFillOpacity:0,innerStrokeOpacity:0,outerFillColor:"grey",outerStrokeColor:"#000"},gradients:{options:{linear:{x2:2,y2:2,spreadMethod:"repeat",gradientUnits:"userSpaceOnUse"},radial:{radius:16.5,spreadMethod:"reflect"}}},events:{enabled:!1}}
break
case"bubble":r={outerPadding:.02,multiColoring:!1,marker:{innerFillOpacity:0,innerStrokeWidth:0,innerStrokeOpacity:0,outerFillOpacity:.4,outerStrokeOpacity:1},hoveroptions:{innerFillColor:"transparent",innerStrokeColor:"transparent",innerStrokeOpacity:1,innerStrokeWidth:0,outerFillOpacity:.3,outerStrokeOpacity:.5},datalabels:{showAs:"y"},animation:{type:"sizing"},gradients:{options:{linear:{y2:100,gradientUnits:"userSpaceOnUse",colorGamma:[1.5,0]},radial:{radius:90,colorGamma:[1.5,0]}}}}
break
case"packedbubble":r={fillOpacity:.2,outerPadding:5,animation:{type:"sizing"},datalabels:{showAs:"y"}}
break
case"bullet":r={strictBandWidth:!0,outerPadding:1e-8,levelMarker:{enabled:!0,dataindex:2,color:[],colorGamma:[.3,.9],fillOpacity:.9,maxBandWidth:200},targetMarker:{enabled:!0,dataindex:3,symbol:"line",innerFillColor:"transparent",innerStrokeColor:"transparent",innerStrokeWidth:0,innerStrokeOpacity:0,outerFillColor:"rgba(0, 0, 0, 0.6)",outerStrokeOpacity:1,outerStrokeWidth:5,outerStrokeColor:"rgba(0, 0, 0, 0.6)",label:{fontSize:n.datalabels.fontSize.l5}},animation:{type:"verticalAll"},datalabels:{textOverlap:"none",showAs:"y",stackLabels:{show:!1,showAs:"y"}},gradients:{options:{linear:{y2:50}}}}
break
case"gantt":r={outerPadding:.04,padding:0,interPadding:.05,maxBandWidth:200,levelMarker:{enabled:!1,dataindex:2,fillOpacity:.3,bandWidth:4},hoveroptions:{enabled:!1,start:{innerStrokeOpacity:1,outerFillColor:"white",outerStrokeWidth:2},end:{innerStrokeOpacity:1,outerFillColor:"white",outerStrokeWidth:2}},marker:{enabled:!1,start:{size:1,innerStrokeWidth:0,outerStrokeWidth:2},end:{size:1,innerStrokeWidth:0,outerStrokeWidth:2}},border:{show:!1,size:null,style:"solid",radius:0,color:null},stacked:{enabled:!1,showAs:"values"},animation:{type:"verticalAll"},datalabels:{showAs:"y"},gradients:{options:{linear:{y2:50}}},dependency:{enabled:!1,targetIndex:0,link:{type:"ES",strokeWidth:2,strokeColor:"#111111",errorStyle:"red",padding:20},marker:{enabled:!0,padding:10,size:1.5,innerFillColor:"transparent",innerStrokeWidth:0,innerStrokeOpacity:0,outerStrokeOpacity:0,outerStrokeColor:"red",outerFillColor:"blue"}}}
break
case"treemap":r={outerPadding:5,strokeColor:"rgba(255,255,255,0.7)",animation:{type:"fadeOneByOne"},datalabels:{showAs:"y",vAlign:"bottom",hAlign:"left"},gradients:{options:{linear:{y2:100,x2:100,colorGamma:[.5,0]},radial:{radius:100}}},parent:{strokeOpacity:0,datalabels:{position:"inset",vAlign:"center",hAlign:"center",showAs:"y",show:!1},events:{}}}
break
case"heatmap":r={strokeColor:"white",animation:{},datalabels:{showAs:"y"},gradients:{options:{linear:{y2:100},radial:{radius:100}}}}
break
case"geoheatmap":r={animation:{enabled:!1},datalabels:{showAs:"geo",fontWeight:"bold"},gradients:{options:{linear:{y2:100},radial:{radius:100,gradientUnits:"objectBoundingBox"}}}}
break
case"dotgrid":r={fillOpacity:.2,outerPadding:.2,animation:{type:"grid"},datalabels:{showAs:"x"}}
break
case"waterfall":r={outerPadding:.04,fillOpacity:.9,maxBandWidth:200,multiColoring:!1,border:{show:!1,size:null,style:"solid",radius:0,color:null},stacked:{enabled:!1,showAs:"values"},connector:{},comparisonLine:{},cascadeCategories:{dataindex:2},risingCategories:{},fallingCategories:{},datalabels:{showAs:"y",stackLabels:{show:!1,showAs:"y"}},animation:{type:"verticalAll"},gradients:{options:{linear:{y2:50}}}}
break
case"wordcloud":r={strokeColor:"transparent",animation:{type:"fadeOneByOne"},datalabels:{showAs:"x"},gradients:{options:{linear:{x2:100,y2:100,colorGamma:[0,1.5]},radial:{x:50,y:50,radius:100,colorGamma:[1,0]}}},mask:{}}
break
case"metadata":r={axes:{x:[0],y:[[1]],tooltip:[0,1]},columns:[{dataindex:0,columnname:"",datatype:"numeric"},{dataindex:1,columnname:"",datatype:"numeric"}]}}return r},qr.setDefaultOptions=function(t,e,n,r,a){a||(r=qr.getDefaultOptions(t,e,n))
var i=null==e[t]?e[t]={}:e[t]
return Fl(r,i,!0,!0),e[t]=r,r}
var zl={solid:"",shortdash:"1.5,1.5",shortdot:"0.1,1.5",dashed:"2.5,2.5",longdash:"5,5",dotted:"0.1,2.5",shortdashdotdot:"1.5,2,0.1,2,0.1,2",dashdot:"2.5,2.5,0.1,2.5",longdashdot:"5,5,0.1,5",longdashdotdot:"5,2.5,0.1,2.5,0.1,2.5"},Dl=function(){}
Dl.get=function(t,e,n,r){var a=(r=r||{}).offset,i=(r.dimension,r.returnSVGimage),o=r.base64,l=r.chartObj,s="svgPattern"==r.moduleType?jl:null
if(t=t||s,(null!=e||""!=e)&&t[e]){var u
l&&l.getPatternSvg?u=l.getPatternSvg():(u=Wl(r.renderTo,El.patternSVG)).isD3Selection||(u=ri(u))
var c,h="zp"+L(n,e)
if(null!=h){var d=Ct(u.node()),f=Ja[d].EFFECTS
return X(f[h])?(c=f[h],i?c:c.id||c):(c=t[e](n,h,a,i,o,l,u))?(f[h]=c,i?c:c.id||c):void 0}}},qr.effects=Dl,qr.patternutil=function(){}
var Rl={}
qr.addPattern=function(t,e,n,r,a,i,o,l,s){Rl[t]={type:e||"diagonal-line-right",size:n||5,strokeWidth:r||1,bgClr:i,stroke:a,fillOpacity:o||1,strokeOpacity:l||1,translate:s}},qr.getPattern=function(t){return{type:Rl[t].type,size:Rl[t].size,strokeWidth:Rl[t].strokeWidth,bgClr:Rl[t].bgClr,stroke:Rl[t].stroke,fillOpacity:Rl[t].fillOpacity,strokeOpacity:Rl[t].strokeOpacity,translate:Rl[t].translate}}
var jl=function(){}
jl.imageFill=function(t,e,n,r,a,i,o){var l=t.width,s=t.height
return o.select("defs").append("pattern").attrs({patternUnits:"userSpaceOnUse",id:e,width:l,height:s,x:t.x||0,y:t.y||0}).append("image").attrs({"xlink:href":t.name,x:0,y:0,width:l,height:s}),e},jl.svgPatternFill=function(t,e,n,r,a,i,o,l){var s
if(s=null!=t.ele?function(t,e,n,r,a){var i=a,o=e.bgClr||e.bgClr_base,l=Y(t,o)
e.ele=l.replace(/\{\{clr\}\}/g,o)
var s,u=i.select("defs").append("pattern").attrs({patternUnits:r||"userSpaceOnUse",id:n,x:e.x||0,y:e.y||0}).html(e.ele)
Ll.FIREFOX?i.append("g").html(e.ele).each(function(){s=D(this)}).remove():s=D(u.node().firstChild)
var c=s.width,h=s.height
return u.attrs({width:c,height:h}),{node:u,w:c,h:h,id:n}}(t.ele,t,e,l,o):function(t,e,n,r){var a=r,i=t.bgClr||t.bgClr_base,o=t.stroke||t.stroke_base,l=/\{\{([a-z]+)\}\}/,s=(t.type||"").split(","),u=s.length,c=(t.size||"").split(","),h=(t.strokeWidth||"").split(","),d=i.split(","),f=o.split(","),p=(t.fillOpacity||"").split(","),g=(t.strokeOpacity||"").split(","),y=t.translate?t.translate.split(","):null
c=t.width?S(t,c):c
for(var v=a.select("defs").append("pattern").attrs({id:e,patternUnits:n||"userSpaceOnUse",width:c[0],height:c[0],x:t.x||0,y:t.y||0}),m=0;u>m;m++){var x=P(s[m])(c[m]||c[0]),b=q(f[m]||f[0])?t.stroke_base:"static"==(f[m]||f[0])?t.customStaticClr:f[m]||f[0],w=q(d[m]||d[0])?t.bgClr_base:"static"==(d[m]||d[0])?t.customStaticClr:d[m]||d[0],C=(c[m]||c[0])/2
if(b=l.test(b)?te(t.stroke_base,1,b.replace(l,"$1"),xi):b,w=l.test(w)?te(t.bgClr_base,1,w.replace(l,"$1"),xi):w,y){var k=y[m]||y[0]
C+=parseFloat(k)}v.append("path").attrs({transform:"translate("+C+","+C+")",d:x,stroke:b,fill:w,"stroke-width":h[m]||h[0],"stroke-opacity":g[m]||g[0],"fill-opacity":p[m]||p[0]})}return{node:v,w:c[0],h:c[0],id:e}}(t,e,l,o),r){var u="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+s.w+"' height='"+s.h+"'>"+(new XMLSerializer).serializeToString(s.node.node())+"<path d='"+P("square")(Ra(s.w,s.h))+"' transform='translate("+s.w/2+","+s.h/2+")' style='fill: url(#"+s.id+")'></path> </svg>"
return{url:Ll.FIREFOX||a?"data:image/svg+xml;base64,"+Ml(u):"data:image/svg+xml;utf8,"+u,node:s.node,w:s.w,h:s.h,id:s.id}}return s}
var Il=function(){}
Il.get=function(t,e,n,r,a,i){var o=t.type
if(o&&o!==Za){var l=a?a.plot.renderer.mode:"svg",s=t.options[o]||t.options,u=Yl(s)
switch(u.color=null!=e?e:u.color,u.dimension=null!=n?n:u.dimension,u.defsLocation=a?a.defsLocation:"",u.id=a.id,l){case"canvas":return u.pointOpacity=i||1,canvasGradient.create(a.context,o,u,r)
default:return Dl.get(Il,o,u,{offset:r,chartObj:a})}}},Il.svgGradientFill=function(t,e,n,r,a,i,o){return t&&t.type?Il[t.type](t,e,n,r,a,i,o):null},Il.radial=function(t,e,r,a,i,o,l){var s=l,u=t.color,c=t.dimension,h=t.spreadMethod,d=n(c)?X(c[2])?c[2]:c[0]:c.r,f=+t.x||0,p=+t.y||0,g=+t.radius||0,y=di().domain([0,100]),v=s.select("defs").append("radialGradient").attrs({id:e,gradientUnits:t.gradientUnits||"userSpaceOnUse",spreadMethod:h})
if("objectBoundingBox"===t.gradientUnits)v.attrs({cx:f+"%",cy:p+"%",r:g+"%"})
else{var m=n(c)?d:c.x2-c.x1,x=n(c)?d:c.y2-c.y1,b=y.copy().range([0,m]),w=y.copy().range([0,x]),C=y.copy().range([0,d])
v.attrs({cx:b(f),cy:w(p),r:"repeat"!==h&&"reflect"!==h||!Ll.IS_IOS&&!Ll.SAFARI?C(g):d})}return A(v,t,u,"radial"),e},Il.linear=function(t,e,r,a,i,o,l){var s,u,c,h,d=l,f=t.color,p=t.dimension,g=t.spreadMethod,y=+t.x1||0,v=+t.x2||0,m=+t.y1||0,x=+t.y2||0,b="repeat"!==g&&"reflect"!==g||!Ll.IS_IOS&&!Ll.SAFARI?100:Da(ja(v-y),ja(x-m))
n(p)?(s=0,u=p[0],c=0,h=p[1]):(s=p.x1||0,u=p.x2||0,c=p.y1||0,h=p.y2||0),/(pie|dial|bubblepie)/.test(r)&&(s=-u,c=-h)
var w=di().domain([0,100]).range([s,u]),C=di().domain([0,100]).range([c,h])
y=100*y/b,v=100*v/b,m=100*m/b,x=100*x/b
var k=d.select("defs").append("linearGradient").attrs({id:e,gradientUnits:t.gradientUnits,spreadMethod:g})
return k.attrs("userSpaceOnUse"==t.gradientUnits?{x1:w(y),x2:w(v),y1:C(m),y2:C(x)}:{x1:y+"%",x2:v+"%",y1:m+"%",y2:x+"%"}),A(k,t,f,"linear"),e},Il.thresholdLinear=function(t,e,n,r,a,i,o){return kt(o.select("defs").append("linearGradient").attrs({id:e,gradientUnits:"userSpaceOnUse",x1:t.x1,x2:t.x2,y1:t.y1,y2:t.y2}),"stop",n,".","class","stop").attr("offset",function(t){return t.offset}).attr("stop-color",function(t){return t.color}),e}
var Hl=function(){}
Hl.chalk=function(t,e,n,r,a,i,o){var l=o.select("defs").append("filter").attrs({id:e,x:-.3,y:-.5,height:2,width:1.6,"color-interpolation-filters":"sRGB"})
return l.append("feTurbulence").attrs({baseFrequency:.32065,seed:115,result:"result1",numOctaves:1,type:"turbulence"}),l.append("feOffset").attrs({result:"result2",dx:-2,dy:-2}),l.append("feDisplacementMap").attrs({scale:5,yChannelSelector:"G",in2:"result1",xChannelSelector:"R",in:"SourceGraphic"}),e},Hl.dropShadow=function(t,e,n,r,a,i,o){var l=o.select("defs").append("filter").attrs({x:t.x,y:t.y,width:t.width,height:t.height,id:e,filterUnits:t.filterUnits})
if(l.append("feGaussianBlur").attrs({in:t.source||"SourceAlpha",stdDeviation:t.blur}),"SourceGraphic"!==t.source){l.append("feOffset").attrs({dx:t.dx,dy:t.dy,result:"offsetblur"})
var s=t.color,u=null,c=s&&s.match(Sa)
c&&5===c.length&&(s=Jt(s),u=c[4])
l.append("feFlood").attrs({"flood-color":s,"flood-opacity":u}),l.append("feComposite").attrs({in2:"offsetblur",operator:"in"})
var h=l.append("feMerge")
h.append("feMergeNode"),h.append("feMergeNode").attr("in","SourceGraphic")}return e},Hl.colorMatrix=function(t,e,n,r,a,i,o){return o.select("defs").append("filter").attr("id",e).append("feColorMatrix").attrs({in:"SourceGraphic",type:t.type,values:t.values}),e},Hl.freeHand=function(t,e,n,r,a,i,o){var l=o,s=(null==t.scale||t.scale,l.select("defs").append("filter").attr("id",e))
return s.append("feTurbulence").attrs({type:"fractalNoise",baseFrequency:.015,numOctaves:2,result:"turbulence_3","data-filterId":3}),s.append("feDisplacementMap").attrs({xChannelSelector:"R",yChannelSelector:"G",in:"SourceGraphic",in2:"turbulence_3",scale:t.scale}),e};(function(){}).tenbytenGrid=function(t,e){return El.patternSVG.select("defs").append("mask").attrs({id:e,maskUnits:"userSpaceOnUse",width:t.width,height:t.height,x:t.x,y:t.y}).append("polygon").attr("points",function(t,e,n,r,a,i){var o,l,s,u,c=parseInt(r/10)*a,h=r%10,d=0==h?i-c+e:i-(c+a)+e,f=h*a+t,p=0==h?d:d+a
switch(n){case"top2Bottom":o=i+t,l=e,s=t,u=e
break
case"bottom2Top":o=i+t,l=i+e,s=t,u=i+e}return t+","+d+" "+f+","+d+" "+f+","+p+" "+(i+t)+","+p+" "+o+","+l+" "+s+","+u+" "+t+","+d}(t.x,t.y,t.type,t.percent,t.size,t.width)).styles({fill:t.fillColor}),e}
var Bl=function(){}
Bl.polygon=function(t,e,n,r,a,i,o){var l=Bl.createElement(go,e,i,o)
return Bl.setAttributes(l,t,["d"]),e},Bl.rect=function(t,e,n,r,a,i,o){var l=Bl.createElement(RECT_ELEMENT,e,i,o)
return Bl.setAttributes(l,t,["x","y","width","height"]),e},Bl.circle=function(t,e,n,r,a,i,o){var l=Bl.createElement(yo,e,i,o)
return Bl.setAttributes(l,t,["cx","cy","r"]),e},Bl.createElement=function(t,e,n,r){return(Ll.SAFARI?n.svg:r).select("defs").append("clipPath").attr("id",e).append(t)},Bl.setAttributes=function(t,e,n){n.forEach(function(n){t.attr(n,e[n])})}
var Nl={getDimension:function(t,e){if(t.dataObject.isPolarAxisCategory){var n=t.plotarea_approx.radius
return{r:n,x1:-n,x2:n,y1:-n,y2:n}}if(t.isAxisCategory){var r=t.rendererConf[e].params,a=t.chartTypes[e].value,i=t.systemConf.chart.axes,o=i.xaxis.reversed,l=i.yaxis[r.yaxiscolumnorder].reversed,s=r.xscale,u=r.yscale,c=s.range(),h=u.range(),d=function(t,e){if(t.bandwidth&&(Ue(a)||a===qr.charttype.line)){var n=t.bandwidth()/2,r=e[0]<e[1]?1:-1
return[e[0]+n*r,e[1]-n*r]}return e}
return c=d(s,c),h=d(u,h),r.axisrotated?{x1:h[+!l],x2:h[+!!l],y1:c[+!o],y2:c[+!!o]}:{x1:c[+!!o],x2:c[+!o],y1:h[+!!l],y2:h[+!l]}}}}
qr.utils=function(){},qr.utils.getActualTextBounds=function(t,e,n){e=e
var r=t,a=n*(2*Math.PI/360),i={}
return i.width=Math.abs(r*Math.sin(a))+Math.abs(e*Math.cos(a)),i.height=Math.abs(r*Math.cos(a))+Math.abs(e*Math.sin(a)),i}
var Fl=qr.utils.mergeJSON=function(t,e,n,r){t=t||{},e=e||{}
var a=null!=r&&1==r?t:Yl(t)
for(var i in e)e.hasOwnProperty(i)&&(void 0!=a[i]?null==e[i]||e[i].constructor!=Object&&e[i].constructor!=Array?1==n&&"object"==typeof a&&(a[i]=e[i]):a[i]=Fl(a[i],e[i],n,r):a[i]=e[i])
return a}
qr.utils.getValueOfPlotOptions=function(t,e){return function(n){return null!=t&&null!=t[n]?t[n]:null!=e&&null!=e[n]?e[n]:null}},qr.utils.getVal=function(t,e){return"function"==typeof t?t.apply(null,e):t}
var Yl=qr.utils.simpleClone=function(t){var e,r=t
if(t&&"object"==typeof t){r=n(t)?[]:{}
for(e in t)r[e]=Yl(t[e])}return r},Vl=qr.utils.getPropVal=function(t,e){return B(t,e,!0)}
qr.utils.elementIsVisible=function(t,e,n){var r=e.offsetHeight,a=J(t).top-J(e).top,i=a+t.offsetHeight
return a>=0&&r>=i||n&&(0>a&&i>0||a>0&&r>=a)}
var Wl=function(){var t,e,n=arguments,r=n.length
for(t=0;r>t;t++)if(e=n[t],X(e))return e
return n[r-1]}
d3.selection.prototype.isD3Selection=!0,qr.utils.getStyle=lt,qr.utils.toCapitalize=ft,qr.utils.fixHDPI=pt,qr.utils.arrayFind=gt,qr.utils.moveArrayElement=function(t,e,n){t.splice(n,0,t.splice(e,1)[0])},qr.utils.isShadowElement=vt,qr.utils.isShadowRoot=mt,qr.utils.isElementOnDocument=xt,qr.utils.isElementVisible=bt,qr.utils.getRootBody=yt,qr.utils.createElement=jt
var Ul={rotatePoint:function(t,e,n){n=n||{x:0,y:0}
var r=t.x,a=t.y,i=n.x,o=n.y
return{x:(r-i)*Ba(e)+(a-o)*Na(e)+i,y:(r-i)*Na(e)-(a-o)*Ba(e)+o}},pointInRectangle:function(t,e){var r,a,i=e.x||0,o=e.y||0,l=i+e.width,s=o+e.height
return n(t)?(r=t[0],a=t[1]):(r=t.x,a=t.y),r>=i&&l>=r&&a>=o&&s>=a},degreeToRadian:function(t){return t/180*Xa}},Xl=function(t){return t},Gl={}
Gl.getProcessedColorRange=function(t,e,n,r){var a=n.stops,i=n.ranges,o=[],l=r.dataset.getDataType("clr")===uo
if(!l&&a&&a.length){var s=0
e.forEach(function(e){var n=a.indexOf(e);-1===n&&(n=s),o.push(t[n%t.length]),s=n})}else if(i&&i.length){i=be(r,!0)
for(var u=0,c=function(t,n){return(1===t.length?l?t[0]===e[u]:t[0]===e[u+1]:t[0]===e[u]&&t[1]===e[u+1])?(d=n,!0):void 0},h=e.length;h>u;l?u++:u+=2){var d=-1
i.some(c),o.push(-1===d||i[d].disabled?null:t[d%t.length])}}else o=t
return o},Gl.getColorDomain=function(t){var e=t.systemConf.legend.colorBand,n=e.stops,r=e.ranges,a=Gl.getMinMax(t),i=Wl(e.minRange,a[0])||0,o=Wl(e.maxRange,a[1])||0,l=t.dataset.getDataType("clr")===uo
if(!l&&n&&n.length){var s=I(n)
s.sort(_i)
var u=s.filter(function(t){var n=!0
return X(e.minRange)&&(n=n&&t>=e.minRange),X(e.maxRange)&&(n=n&&t<=e.maxRange),n})
return(i<u[0]||!u.length)&&u.splice(0,0,i),o>u[u.length-1]&&u.splice(u.length,0,o),u}if(r&&r.length){var c=be(t),h=[]
if(l)h=c
else{if(1===c[0].length){var d=i
c=c.map(function(t){var e=[d,t[0]]
return d=e[1],e})}(h=c).splice(0,0,[-1/0,-Ga]),h.splice(h.length,0,[Ga,1/0])}return wi(h)}return[i,o]},Gl.getMinMax=function(t){var e=Gl.getAllColorData(t)
return Oi(e)},Gl.getCategories=function(t){var e=Gl.getAllColorData(t)
return e.filter(function(t,n){return n===e.indexOf(t)})},Gl.getAllColorData=function(t){var e=[]
return t.seriesdata.forEach(function(n){if(!n.disabled){var r=n.data||n
Gl.pushColorData(t,r,e)}}),e},Gl.pushColorData=function(t,e,r){if(e&&n(e)&&n(e[0]))e.forEach(function(e){Gl.pushColorData(t,e,r)})
else{var a=t.dataset.getClr(e)
r.push(a)}},Gl.isQuantileColorScale=function(t){return t.axes.clr?"quantile"===t.axes.clr.scaleType:X(t.dataset.clridx)&&!t.dataObject.isPolarAxisCategory&&t.systemConf.legend.colorBand.type!==Za},Gl.getItemIndex=function(t,e,n,r){var a=n&&t.dataset.getClr(n)
return e?e(a):r},Gl.getIndexScale=function(t){var e,n=Gl.isQuantileColorScale(t),r=t.systemConf.legend.colorBand.ranges
if(n&&r&&r.length){var a,i=t.axes.clr.scale,o=i.domain(),l=t.patternPallete,s=t.imagePallete
s&&s.length?a=s:l&&l.length&&(a=l),a&&(e=i.copy()).range(Gl.getProcessedColorRange(Fi(a.length),o,t.systemConf.legend.colorBand,t))}return e},qr.scale.constructor=function(t,e,n,r){function a(){var e=t.dataObject,a=e.hierarchical,i=0,o=t.brush?t.brush.extent:null,l=t.axes.x
if(t.axes.x.scale=n(t,t.dataObject,t.plotarea,t.axes.x.orient,0,t.dataset,"x",o),t.axes.x.eventscale=null==r?t.axes.x.scale:r(t,t.dataObject,t.plotarea,t.axes.x.orient,null,t.dataset,"x"),X(a)){t.axes.x.rangeScale=t.axes.x.scale.copy(),t.axes.x.rangeScale.outerPaddingPx=t.axes.x.scale.outerPaddingPx,a.groupByDiscreteTime&&t.axes.x.rangeScale.domain(e.getDomain(e.getCategories("x"))),i=a.finalDepth,a.setRanges(t.axes.x.rangeScale)
for(var s=0;i>s;s++)l.levels[s]||(l.levels[s]={}),l.levels[s].scale=n(t,e,t.plotarea,t.axes.x.orient,s+1,t.dataset,"x",o,null)}return[{scale:t.axes.x.scale}].concat(l.levels)}function i(){for(var e=t.axes.y.count,a=t.axes.y,i=0;e>i;i++)a.groups[i]||(a.groups[i]={}),a.groups[i].scale=n(t,t.dataObject,t.plotarea,t.axes.y.orient,i,t.dataset,"y"),a.groups[i].eventscale=null==r?a.groups[i].scale:r(t,t.dataObject,t.plotarea,t.axes.y.orient,i,t.dataset,"y")
return t.axes.y.groups}var o,l=qr.scale.getScale,s=qr.scale.getEventScale
switch(n=Wl(n,l),r=Wl(r,s),e){case"left":o=t.axes.rotated?a():i()
break
case"bottom":o=t.axes.rotated?i():a()}return o},qr.scale.getScale=function(t,e,n,r,a,i,o,l,s){var u,c,h=t.systemConf,d=i.getDataType(o,a),f="x"===o?h.chart.axes.xaxis:"clr"===o?h.legend.colorBand:h.chart.axes.yaxis[a||0],p=e.hierarchical,g=X(f.minRange),y=X(f.maxRange),v=t.chartTypes[0].name,m=h.chart.plot.plotoptions[v],x="dial"===v||"web"===v&&"x"===o,b="heatmap"===v,w="clr"===o&&Gl.isQuantileColorScale(t),C=B(h,"chart.zoom."+o,!0),k=function(){var a=f.reversed
if(x)return a?[W(m.endAngle,2*Xa),W(m.startAngle,0)]:[W(m.startAngle,0),W(m.endAngle,2*Xa)]
if("clr"===o)return t.imagePallete||t.seriesColor
if("z"===o){if(b){var i=1
return[qt(m.minSize,i,qt("25%",i)),qt(m.maxSize,i,qt("100%",i))]}var l
e.isCombinationalChart?t.chartTypes.some(function(t){var e=t.name
return"bubble"===e||"bubblepie"===e?(l=e,!0):void 0}):l=v
var s=h.chart.plot.plotoptions[l]||{},u=Ra(n.width,n.height)
return i=W(s.size,1),[qt(s.minSize,u,qt("2.5%",u))*i,qt(s.maxSize,u,qt("25%",u))*i]}var c=e.getPlotBorder()
return a?"bottom"===r||"top"==r?[Ie(t,"width",n)-c.right,c.left]:[c.top,Ie(t,"height",n)-c.bottom]:"bottom"===r||"top"==r?[c.left,Ie(t,"width",n)-c.right]:[Ie(t,"height",n)-c.bottom,c.top]}(),S=x||b||"x"!=o?0:W(m.padding,e.noofBarEnabledSeries?.2:.9)
s=x||w||b?0:"y"===o?W(f.outerPadding,t.datalabels.hasFixedPosition?1e-8:.05):null!=s?s:W(m.outerPadding,.02)
switch(d){case"numeric":l?c=l:"x"===o?c=e.getMinMaxX(0):"y"===o?c=e.getMinMaxY(a,s):"z"===o?c=e.getMinMaxZ():(c=Gl.getColorDomain(t),k=Gl.getProcessedColorRange(k,c,f,t))
var O=c[0],A=c[1]
if("NoData"==c[0]&&"NoData"==c[1]&&(c=[0,0]),!C&&(l||"x"==o)){var _=0==(V=c[1]-c[0])?t.plotarea.width/2:V*s
c[0]=g?c[0]:c[0]-_,c[1]=y?c[1]:c[1]+_}var P=[(u=("clr"===o&&f.ranges&&f.ranges.length?Gl.quantileScale:di)().domain(c).range(k))(O),u(A)]
u.actualRange=P,u.origRange=k
break
case"ordinal":if(l)c=l
else if("clr"===o)c=Gl.getColorDomain(t),k=Gl.getProcessedColorRange(k,c,f,t)
else{var T=e.getCategories(o,a)
c=e.getDomain(T,!0)}var M,E=0,L=[k[0],k[1]]
if(S=1===c.length?0:S,s){E=qr.scale.getOuterPadding(k,c.length,S,s)
var z=function(t,n,r){var i=0,l=0,s=t[0]<t[1],u=s?0:1,d=s?1:0
return i+=e.extendOuterpadding(c,t,h,S,r,o,a),l=ja(t[1]-t[0])*n,i+=l,t[u]=t[u]+i,t[d]=t[d]-i,{range:t,outerPaddingPx:i}}(k,s,E)
k=z.range,M=z.outerPaddingPx}u=("clr"===o?yi:fi)().domain(c),"clr"===o?u.range(k):u.range(k).paddingInner(S).paddingOuter(0),ke(u),u.origRange=L,u.outerPaddingPx=M||0
break
case"time":var D=i.getColumn(o,a),R=D[D.datatype],j=R&&R.subfunction,I=Wl(R&&R.useUTC,!1)
c=l||("x"===o?e.getMinMaxX(0):e.getMinMaxY(a,0))
var H=new Date(c[0]),N=new Date(c[1])
if(X(j)||(j=Tn(N-H).subFunction),!C){if(!h.chart.axes[o+"axis"].disableBaseValue){var F=new ql(R)
F.useUTC=I,F.getBaseValue(H,j,!1),F.getBaseValue(N,j,!0)}if(O=H,A=N,e.isBubbleEnabled){var Y=e.overBubbles([H.getTime(),N.getTime()],o,"y"==o?a:null)
H=new Date(H.getTime()-Y[0]),N=new Date(N.getTime()+Y[1])}var V,U=0==(V=N.getTime()-H.getTime())?t.plotarea.width/2:V*s,G=0==s?0:e.getCorrectionOverDataLabels([H.getTime(),N.getTime()],"x")
H=new Date(g?c[0]:H.getTime()-U-G),N=new Date(y?c[1]:N.getTime()+U+G),c=[H,N]}P=[(u=pi().domain(c).range(k))(O),u(A)]
u.actualRange=P,u.origRange=k
break
case"ordinalNonLinear":T=e.getCategories(o,a)
c=e.getDomain(T)
L=[k[0],k[1]]
var q=p.rangeList?p.rangeList[a-1]:null;(u=qr.nonLinearOrdinalScale().domain(c).range(k).rangeBands(q)).origRange=L}return u.outerPadding=s,u},qr.scale.getEventScale=function(t,e,n,r,a,i,o){i.getDataType(o,a)
return qr.scale.getScale(t,e,n,r,a,i,o)},qr.scale.invert=function(t,e,n,r,a,i){var o
switch(t){case"numeric":case"time":var l="y"==a?r?e.x:e.y:r?e.y:e.x
o=n.invert(l)
break
case"ordinal":var s=ke(n),u=n.bandwidth(),c=s.length>1?ja(s[1]-s[0]):0,h=ja(c-u)
o=we(e,s=s.map(function(t){return t-h/2}),a,r,i)}return o},qr.scale.ordinalSubInvert=function(t,e,n,r,a,i,o){var l=n.bandwidth(),s=n.range(),u=r.ordinalRange,c=n.domain(),h=s[1]-s[0]-c.length*l
return we(t,c.map(function(t,n){return u[e]+n*(l+h)}),i,a,o)},qr.scale.barBandwidth=function(t){var e=t.systemConf,n=t.dataObject,r=t.chartTypes[0],a=t.dataset.seriesTypes,i=n.barChartType||(n.noofBarEnabledSeries?a.has(qr.charttype.stkdbar)?qr.charttype.stkdbar:a.has(qr.charttype.bar)?qr.charttype.bar:a.has(qr.charttype.bullet)?qr.charttype.bullet:a.has(qr.charttype.waterfall)?qr.charttype.waterfall:r.value:r.value)
n.barChartType=i
var o=n.isstacked(i)?n.groupedByStack.keys().length||1:mi(t.seriesdata.map(function(t){return n.isBarEnabled(t)?t.data.length:void 0})),l=r.name,s=r.value==qr.charttype.bullet,u=($e(r.value),e.chart.plot.border),c=!0===u.show?u.size:0,h="gantt"==l||"bullet"==l||"bar"==l||"waterfall"==l?e.chart.plot.plotoptions[l].padding||.2:.2,d=1==o?0:"bar"==l||"gantt"==l||"waterfall"==l?e.chart.plot.plotoptions[l].interPadding||0:0,f=e.chart.plot.plotoptions[l].outerPadding
f=null!=f&&""!==f?f:.02
var p,g,y=t.axes.x.scale.domain().length,v=t.axes.rotated?[Ie(t,"height",t.plotarea)-c,c]:[c,Ie(t,"width",t.plotarea)-c]
f=qr.scale.getOuterPadding(v,y,h,f),f+=n.extendOuterpadding(Fi(y),v,e,h,f,"x"),t.barscale1=p=t.axes.x.scale,t.barscale2=g=fi().domain(Fi(o)).range([0,p.bandwidth()]).paddingInner(d)
var m=n.noofBarEnabledSeries&&!s?e.chart.plot.plotoptions[l].maxBandWidth||p.bandwidth():200
if(!s&&g.bandwidth()>m){var x=(p.bandwidth()-o*m)/2
g.range([x,p.bandwidth()-x]).paddingInner(d)}return[p,g]},qr.scale.getOuterPadding=function(t,e,n,r){var a=ja(t[1]-t[0]),i=r*a
return i/((a-2*i)/(e-n+0))},qr.scale.getOrdinalOuterPadding=function(t,e,n,r){return r*ja(t[1]-t[0])/2},qr.scale.getContinuousRangeBand=function(t,e,n){var r=t(e[0]),a=n&&e[n]?t(e[n]):r,i=t(n&&e[n+1]?e[n+1]:e[1])-a,o=t.range()
return{outerPaddingInPixel:(0>i?-1:1)*Ra(ja(r-o[0]),ja(i/2)),rangeBand:i/2}},qr.scale.getDiscreteRangeBand=function(t){var e=t.bandwidth(),n=t.outerPaddingPx+e/2,r=t.domain().length>1?t.ordinalRange[1]-t.ordinalRange[0]-e:0
return{outerPaddingInPixel:Ra(n,e/2+r/2),rangeBand:e/2+r/2}},qr.scale.getRangeBand=function(t,e,n){return t.bandwidth?qr.scale.getDiscreteRangeBand(t):qr.scale.getContinuousRangeBand(t,e,n)},qr.nonLinearOrdinalScale=function(){function t(t){return e?e.get(t):null}var e,n,r,a,i
return t.domain=function(e){return arguments.length?(n=e,t):n},t.rangeBand=function(){return 0},t.rangeBands=function(n){if(!arguments.length)return r
if(null==n)return t
i=n,r=new Ci,e=new Ci
var a=-1,o=n.length
for(temp=0;++a<o;)e.set(a,n[a][0]),r.set(a,n[a][1]-n[a][0])
return t},t.discreteWidth=function(t){return r?r.get(t):null},t.range=function(e){return arguments.length?(a=e,t):a},t.copy=function(){return qr.nonLinearOrdinalScale().domain(n).rangeBands(i).range(a)},t},Gl.quantileScale=function(){function t(t){var e
return r.forEach(function(n,r){t>=n[0]&&t<=n[1]&&(e=r)}),X(e)?n[e]:null}var e=[],n=[],r=[]
return t.domain=function(n){if(arguments.length){e=n
for(var a=0;a<e.length;a+=2)r.push([e[a],e[a+1]])
return t}return e},t.range=function(e){return arguments.length?(n=e,t):n},t.copy=function(){return Gl.quantileScale().domain(e).range(n)},t},qr.axis.render=function(t,e,r,a){function i(e,n,r,a,i,o){var l=v.chart.plot.border,s=t.container.selectAll("g.plotareaBorder-property"),u=null
if(X(l)&&!0===l.show)t.drawPlotBorder()
else{var c=n.axisline,h=0==c.show||null==c.color?Qa:c.color,d=W(c.strokeWidth,1),f=c.style||"solid",p=xe(n,o,t)&&!a.tickObj.tickValueObj.inlineToPlot,g="left"==e||"right"==e?a.preCalcTickLen().width:a.preCalcTickLen().height,y=p?g:0,m=kt(s,"line",[1],".","class",e)
if(0==i||0==n.show||"hidden"==r.style("visibility"))return void m.style("stroke",Qa)
var b,w,C,k
"bottom"==e?(b=-t.tickarea.left,w=t.plotarea.width+t.tickarea.right,C=t.plotarea.height+.5+y,k=t.plotarea.height+.5+y):"left"==e?(b=.5-y,w=.5-y,C=0,k=t.plotarea.height+t.tickarea.bottom):"right"==e?(b=t.plotarea.width+.5+y,w=t.plotarea.width+.5+y,C=0,k=t.plotarea.height+t.tickarea.bottom):"top"==e&&(b=-t.tickarea.left,w=t.plotarea.width+t.tickarea.right,C=.5-y,k=.5-y),m.styles({"stroke-width":d,stroke:h,"shape-rendering":"crispedges","stroke-dasharray":x(f,d)}).attrs({x1:b,x2:w,y1:C,y2:k}),u={size:d,clr:h},s.node()["border-"+e]=u}r.selectAll("path.domain").style("stroke",Qa)}function o(e,n,r){var a=e.orient,i=t.axes.rotated
return a=null==a?"x"==n?i?"left":"bottom":i?"bottom":0==r?"left":"right":a}function l(e,n){var r=[]
switch(e){case"left":r=t.axes.rotated?u("x",n):u("y",n)
break
case"bottom":r=t.axes.rotated?u("y",n):u("x",n)}return r}function s(a,i,l,s){var u="left"==i?t.axes.rotated?"x":"y":t.axes.rotated?"y":"x"
return function(a,i,l,s,u){var c="x"==i?v.chart.axes.xaxis:v.chart.axes.yaxis[u],h="bottom"==(s=o(c,i,u))||"top"==s?r:e,d=!0===c.show&&Vt(t,i+"axis",h),f=ye(c.ticklabel),y=ve(s,f,xe(c,i,t))
if("y"!==i||d&&!t.axes.y.groups[u].disabled||S++,a){var x="y"===i&&t.axes.y.groups[u].disabled
a.plotBorderDrawn=!d||x?a.plotBorderDrawn:!b[s],b[s]=!0}if(d){var C=(t.axes.y.groups,me(t,i,u).ticks),A=C.preCalcAxisLen,P=(C.preCalcApproxAxisLength(_),C.preCalcAxisLen-A),T=C.tickValueObj,M=i+"-axis-"+u,E=kt(w.selectAll("g."+i+"-axis"),"g",d?[c]:[],".","class",M)
if(ja(P)>1&&(g(s,P),_=t.plotarea),null!=a){var L="y"==i&&k.axes.y[u].length>1,z=C&&C.isHierarchy()&&t.dataObject.hierarchical.groupByTime,D=t.dataset.getColumnIdx(i,z?0:u),R=k.columns[D].datatype
R=C&&C.isHierarchialLevelType()&&t.dataObject.hierarchical.categoryTree?uo:R
var j=k.columns[D][R],I=(j=L&&"y"==i?pe(u,t):j)&&(j.axisformat||j.format),H=W(c.tickmark.size,6),B=(m.isStackedPercentChart||m.isPercentChart)&&"y"==i?wn:yn,N=z?u:null,F=!(C&&C.isHierarchy())&&j&&I&&I.specifier&&I.specifier.constructor==Array||"wrapOnSpace"==T.mode||"wrapAll"==T.mode,Y=T.isInline&&!T.inlineToPlot,U="left"===s||"right"===s?"width":"height"
t.tickarea[s]=Y&&a.plotBorderDrawn?T.axisgroup[U]:t.tickarea[s]||0,a.orient(s).scale(l).tickPadding(y).tickSize(H).tickSizeOuter(0).majorTicks(u===("y"===i?S:O)?p(s,i,T):null).plotarea(t.plotarea).systemconf(t.systemConf).tickRotation(T.rotation).preCalcTickLen(C.preCalcTickLen).chartObj(t).columnIndices(L&&"y"==i?k.axes.y[u]:[D]).isMultiLineTick(F)
var G=null!=j?j.axisformat||j.format:null
if(G&&"auto"==G.specifier&&!l.bandwidth)a.tickValues(C.getTicksforAxisComp()).tickFormat(function(t){var e=l,n=e.tickFormat()(t)
d3.select(this).text(n),this.formattedVal=n})
else{a.tickValues(C.getTicksforAxisComp())
var q=C.getActualTicklabel(),Z=C.tickValueObj.maxTickSize.horizontal,Q=C.tickValueObj.maxTickSize.vertical,K=qr.utils.getVal(V([c.ticklabel,t.systemConf.chart,t.systemConf.canvas,El],"fontSize")),$="wrapOnSpace"==C.tickValueObj.mode||"wrapAll"==C.tickValueObj.mode,J=a.isMultiLineTick(),tt=X(c.ticklabel.showAs),et=[null,s,t,T.rotation,c.ticklabel.textOverflow,a.scale(),E,a,"ticklabel",c.ticklabel,u,!0],nt=Se.apply(null,et),rt=function(e,r){var a=q(r),i=B(j,a,R,t,"axis",null,null,N)
if(d3.select(this).text(i),this.formattedVal=i,J)$&&(i=Le(i,C.tickValueObj.mode,Z,Q,K)),Lt(d3.select(this),i,{orient:s})
else if(tt&&X(C.tickValueObj.customTicks[r])){this.innerHTML="",Lt(d3.select(this),C.tickValueObj.customTicks[r],null,!0)
var o=Dt(d3.select(this))
this.formattedVal=n(o)?o.join(" "):o}nt(this,r)}
a.tickFormat(rt)}a.tickObj=C,a.hideAxisLabel=!Vt(t,i+"axislabel",h)}}return a}(me(t,u,l).component,u,a,i,l)}function u(e,n){var a=me(t,e,n),i="x"==e?v.chart.axes.xaxis:v.chart.axes.yaxis[n]||v.chart.axes.yaxis[0],o=a.component
return o||(a.component="x"==e?i.show&&Vt(t,"xaxis",r)?qr.axis.get():null:i.show?qr.axis.get():null,o)}function c(n,a,l,s){return function(n,a,l){var s="x"==a?v.chart.axes.xaxis:v.chart.axes.yaxis[l],u=(s.ticklabel,o(s,a,l)),c="bottom"==u||"top"==u?r:e,f=!0===s.show&&Vt(t,a+"axis",c),p=a+"-axis-"+l,g=kt(w.selectAll("g."+a+"-axis"),"g",f?[s]:[],".","class",p),y=me(t,a,l)
g.style("display","y"===a&&t.axes.y.groups[l].disabled?Za:null),"x"===a&&f?h(s,l,n,!0):d(s,l,n,null,!0),f?(y.ticks.tickValueObj,t.plotarea=n.plotarea(),g.transition().duration(C).call(n,a,l),"y"==a&&1==n.plotBorderDrawn?i(u,s,g,n,f,a):"x"==a&&0==l&&i(u,s,g,n,f,a)):1==n.plotBorderDrawn&&i(u,s,g,n,f,a)
"y"==a&&B(v.chart,"scroll")&&v.chart.scroll.enabled&&t.brush.initialize(t.plotarea)}(n,l,a)}function h(e,n,r,a){var i={left:0,top:0,right:0,bottom:0},o=t.axes.x.count
if(0==n){for(var l=0;o>l;l++){var s=me(t,"x",l).component,u=r.orient(),c=a?f(e.label,e.ticklabel,s.preCalcTickLen(),t,"x",l,u):s.tickLabelWidth(),h=w.selectAll(".x-axis-"+l),d="right"==u?t.plotarea.left+t.plotarea.width+i.right:t.plotarea.left-i.left,p=t.axes.rotated||"top"==u?t.plotarea.top-i.top:t.plotarea.top+t.plotarea.height+i[u]
i[u]+=c,h.attr("transform","translate("+d+","+p+")"),h.attr("x",d),h.attr("y",p)}h=w.selectAll("g.x-axis-0")}}function d(n,a,o,l,s){var u=v.chart.axes.yaxis,c=t.axes.y.groups.length,h=w.selectAll(".y-axis-0"),d=u[0].orient||(t.axes.rotated?"bottom":u[0].orient||"left")
if(l||0==a){for(var p={left:0,top:0,right:0,bottom:0},g=0;c>g;g++){var y=u[g],m=y.orient,x="bottom"==(m=m||(t.axes.rotated?"bottom":null!=y.orient?y.orient:0==g?"left":"right"))||"top"==m?r:e
if(!0===y.show&&Vt(t,"yaxis",x)){var b=t.axes.y.groups[g].component,C=w.selectAll(".y-axis-"+g),k=s?f(y.label,y.ticklabel,b.preCalcTickLen(),t,"y",g,m):b.tickLabelWidth(),S="bottom"==m||"top"==m?t.plotarea.left:"left"===m?t.plotarea.left-p[m]:t.plotarea.left+t.plotarea.width+p[m],O="bottom"==m?t.plotarea.height+t.plotarea.top:t.plotarea.top
p[m]+=t.axes.y.groups[g].disabled?0:k,C.attr("transform","translate("+S+","+O+")"),b&&1==b.plotBorderDrawn&&i(m,y,C,o,"y")}}!t.axes.rotated&&h.selectAll("line.majorTicks").attr("x2","right"==d?-t.plotarea.width:t.plotarea.width)}}function f(t,e,n,r,a,i,o){var l={top:0,right:0,bottom:5,left:0},s=0,u=0,c=me(r,a,i),h=c.component,d=c.ticks
u="clr"===a?0:c.axisLabel.getBBox().height
h.hideAxisLabel||!1===t.show||!X(t.text)||""===t.text||d.isHierarchy()&&i<r.dataObject.hierarchical.finalDepth?l.top=l.bottom=l.left=l.right=0:(l.top=Wl(t.marginTop,5),l.bottom=Wl(t.marginBottom,5),l.left=Wl(t.marginLeft,5),l.right=Wl(t.marginRight,5))
var f=Wl(e.marginRight,5),p=Wl(e.marginLeft,5),g=Wl(e.marginBottom,5),y=Wl(e.marginTop,5)
switch(o){case"top":s=(s=null!=n?n.height+y+l.bottom:0)+u+l.top
break
case"bottom":s=(s=null!=n?n.height+g+l.top:0)+u+l.bottom
break
case"left":s=(s=null!=n?n.width+p+l.right:0)+u+l.left
break
case"right":s=(s=null!=n?n.width+f+l.left:0)+u+l.right}return h.tickLabelWidth(s),s}function p(e,n,r){var a,i,o,l
a=i=o=l=0
var s=r.isInline&&!r.inlineToPlot,u=r.longTickSize,c=!s||"left"!=e&&"right"!=e?0:u.width
if("bottom"==e?(i=c,l=-t.plotarea.height):"top"==e?(i=-c,l=t.plotarea.height):"left"==e?(a=-c,o=t.plotarea.width):"right"==e&&(a=c,o=-t.plotarea.width),"x"===n&&t.datalabels.hasFixedPosition){var h=t.axes.y.groups.map(function(t){return t.disabled}).indexOf(!1),d=v.chart.axes.yaxis[h].reversed,f=function(e){var n,r=qr.scale.getScale(t,t.dataObject,t.plotarea,t.axes.y.orient,e,t.dataset,"y"),a=r.origRange
if(t.dataset.getDataType("y",e)===uo){var i=r.domain()
n=r(i[i.length-1])+r.bandwidth()/2}else{var i=t.dataObject.getMinMaxY(e,0,t.datalabels.hasFixedPosition)
n=r(i[1])}return Ra(ja(n-a[0]),ja(n-a[1]))}(h)
"bottom"==e?d?i-=f:l+=f:"top"==e?d?l-=f:i+=f:"left"==e?d?a+=f:o-=f:"right"==e&&(d?o+=f:a-=f)}return{x1:a,y1:i,x2:o,y2:l}}function g(e,n){var r=t.plotarea
"left"===e?(r.left+=n,r.width-=n):"right"===e?r.width-=n:"bottom"===e?(r.height-=n,r.bottom+=n):(r.height-=n,r.top+=n)}function y(e,n,r,a,i,o){b={left:!1,right:!1,top:!1,bottom:!1},t.container.selectAll("g.plotareaBorder-property").selectAll("line").style("stroke",Qa)
var l=n.orient(),s=(n.scale(),n.majorTicks(),e.node().getBBox().width)
s+="left"==l?r.label.marginLeft:r.label.marginRight,s=n.tickLabelWidth(),("hidden"!==e.style("visibility")||"remove"!==o)&&(t.plotarea.width="add"==o?t.plotarea.width-s:t.plotarea.width+s,t.plotarea.left="left"==l?"add"==o?t.plotarea.left+s:t.plotarea.left-s:t.plotarea.left)
var u=0,c="add"==o?"visible":"hidden"
e.style("visibility",c),"add"==o&&e.style("display",null)
for(var h=0;h<t.axes.y.groups.length;h++){var f=w.selectAll("g.y-axis-"+h),g=t.axes.y.groups[h].component,y=g.orient(),m=g.majorTicks(),x=v.chart.axes.yaxis[h]||v.chart.axes.yaxis[0]
f.node()&&("hidden"!=f.style("visibility")&&0==u?(m=p(y,i,g.tickObj.tickValueObj),g.majorTicks(m),f.transition().duration(0).call(g,i,h,!0),u++):null!=m&&u>0&&(g.majorTicks(null),f.transition().duration(0).call(g,i,h,!0)),"visible"!=f.style("visibility")||b[y]?(g.plotBorderDrawn=!1,"visible"==f.style("visibility")?f.selectAll("path.domain").style("stroke",x.axisline.color):f.selectAll("path.domain").style("stroke",Qa)):(b[y]=!0,g.plotBorderDrawn=!0))}d(0,a,n,!0)}var v=t.systemConf,m=t.dataObject,b={left:!1,right:!1,top:!1,bottom:!1},w=t.svg.selectAll("g.xychart"),C=function(){var e=v.chart.axes.animation||{},n=e.enabled
X(n)||(n=(t.isAxisCategory||t.isNonAxisMultiSeriesCategory?t.seriesdata:t.seriesdata.slice(0,1)).some(function(e,n){var r=t.chartTypes[n].name
return Bt(v.chart.plot.plotoptions[r],e.plotoptions,t,r).enabled}))
return n?Wl(e.duration,600):0}(),k=t.systemConf.metadata,S=0,O=0,A=qr.DataProcessor.helpers.getParsedYAxisOrder
t.axes.animationDuration=C,t.zscale=t.dataObject.hasZaxis?qr.scale.getScale(t,m,t.plotarea,t.axes.x.orient,null,t.dataset,"z"):null,t.datalabels.hasFixedPosition=t.datalabels.moduleExists&&function(t){if(t.dataObject.noofBarEnabledSeries){var e
if(t.seriesdata.some(function(n,r){return(e=qr.labelRenderer.bar.getVAlign(t,r,vl))===Uo}),e===Uo)return!0
var n=t.dataObject.groupedByStack
return n.keys().some(function(r){return(e=qr.labelRenderer.bar.getVAlign(t,n.get(r).stackLabelIndex,ml))===Uo}),e===Uo}}(t),t.tickarea={left:0,right:0,top:0,bottom:0}
var _={left:t.plotarea.left,top:t.plotarea.top,width:t.plotarea.width,height:t.plotarea.height}
qr.axis.constructTickObj(t,e,r,"left",_,a),qr.axis.constructTickObj(t,e,r,"bottom",_,a),t.zscale=t.dataObject.hasZaxis?qr.scale.getScale(t,m,t.plotarea,t.axes.x.orient,null,t.dataset,"z"):null,Jl.updatePlotareaByBandWidth(t,_)
for(var P=qr.scale.constructor(t,"left"),T=t.axes.rotated?"x":"y",M=0;M<P.length;M++){var E=l("left",M)
E=s(P[M].scale,"left",M)}var L=qr.scale.constructor(t,"bottom"),z=t.axes.rotated?"y":"x"
for(M=0;M<L.length;M++){E=l("bottom",M)
E=s(L[M].scale,"bottom",M)}for(M=0;M<P.length;M++){null!=(E=me(t,T,M)).component&&c(E.component,M,T)}for(M=0;M<L.length;M++){null!=(E=me(t,z,M)).component&&c(E.component,M,z)}t.dataset.getDataType("x")==uo&&qr.scale.barBandwidth(t),t.updateZscale=function(){t.dataObject.hasZaxis&&t.zscale.domain(m.getMinMaxZ())},t.updateScale=function(a,l,s,u){var c,f="y"==l?A(null==a||n(a)?a:a.yaxiscolumnorder):0,p=(u="x"==l&&X(u)?u:f,w.selectAll("g."+l+"-axis-"+u)),x=me(t,l,u),b=x.ticks,S="x"==l?v.chart.axes.xaxis:v.chart.axes.yaxis[f],O=S.ticklabel,_=x.component?x.component.orient():o(S,l,f),P="bottom"==_||"top"==_?r:e,T=!0===S.show&&Vt(t,l+"axis",P),M=t.dataset.getColumnIdx(l,f),E=k.columns[M].datatype,L=(E=b&&b.isHierarchialLevelType()&&t.dataObject.hierarchical.categoryTree?uo:E,k.columns[M][E]),z=b&&b.isHierarchy()&&t.dataObject.hierarchical.groupByTime?u:null
if(s){c=s
var D=qr.scale.getScale(t,m,t.plotarea,_,f,t.dataset,l,c)
x.eventscale=x.scale=D}else{var R=t.chartTypes[0].name,j=v.chart.plot.plotoptions[R].outerPadding
c=E==uo?m.getCategories(l,u):"x"==l?t.dataObject.getMinMaxX(W(j,.2)):t.dataObject.getMinMaxY(f)
D=qr.scale.getScale(t,m,t.plotarea,_,u,t.dataset,l)
x.eventscale=x.scale=D}if("y"!=l||p.empty()||"NoData"!=c[0]||"NoData"!=c[1])if("y"!=l||p.empty()||"hidden"!=p.style("visibility")||p.style("display")===Za){if(m.isBubbleEnabled&&"y"==l&&(x.eventscale=x.scale=qr.scale.getScale(t,m,t.plotarea,_,f,t.dataset,"y")),T){x.component.scale(x.scale),L=k.axes.y[f].length>1&&"y"==l?pe(f,t):L
var I=(m.isStackedPercentChart||m.isPercentChart)&&"y"==l?wn:yn,H=null!=L?L.axisformat||L.format:null,B=(b=x.ticks,"bottom"==_||"top"==_?b.tickValueObj.longTickSize.height:b.tickValueObj.longTickSize.width),N=b.getTickValues(t.plotarea.width,t.plotarea.height,s,!1,null,x.Ticks,t.plotarea)
b.tickValueObj=N
var F="bottom"==_||"top"==_?b.tickValueObj.longTickSize.height:b.tickValueObj.longTickSize.width,Y=b.preCalcTickLen,U=B>F?F-B:F>B?F-B:0
"bottom"==_||"top"==_?Y.height=Y.height+U:Y.width=Y.width+U
var G=b.getTicksforAxisComp()
x.component.tickValues(G).tickRotation(N.rotation)
var q=b.getActualTicklabel(),Z=b.tickValueObj.maxTickSize.horizontal,Q=b.tickValueObj.maxTickSize.vertical,K=qr.utils.getVal(V([S.ticklabel,t.systemConf.chart,t.systemConf.canvas,El],"fontSize")),$="wrapOnSpace"==b.tickValueObj.mode||"wrapAll"==b.tickValueObj.mode,J=x.component.isMultiLineTick(),tt=X(S.ticklabel.showAs),et=[null,_,t,N.rotation,S.ticklabel.textOverflow,x.scale,w,x.component,"ticklabel",S.ticklabel,u,!0],nt=Se.apply(null,et)
x.component.tickFormat(H&&"auto"==H.specifier&&!x.scale.bandwidth?function(t){d3.select(this).text(x.scale.tickFormat()(t))}:function(e,n){var r=q(n),a=I(L,r,E,t,"axis",null,null,z)
d3.select(this).text(a),J?($&&(a=Le(a,b.tickValueObj.mode,Z,Q,K)),Lt(d3.select(this),a,{orient:_})):tt&&X(b.tickValueObj.customTicks[n])&&(this.innerHTML="",Lt(d3.select(this),b.tickValueObj.customTicks[n],null,!0)),nt(this,n)}),x.component.isMultiLineTick()||X(O.showAs)?p.call(x.component,l,u):p.transition().duration(C).call(x.component,l,u)
var rt=!p.empty()&&p.style("display")===Za&&"y"===l
if(rt&&y(p,x.component,S,f,"y","add"),U&&0!=U){rt||g(_,U)
var at="x"==l?"y":"x"
t.updateScale(a,at),t.drawPlotareaClippath(),t.updatePlotareaProp()}"y"===l?(p.styles({display:null,visibility:"visible"}),d(0,f,x.component,!0)):h(S,u,x.component)
var it=t.plotarea.width
t.axes.rotated||"y"!=l||w.selectAll(".y-axis-"+f).selectAll("line.majorTicks").attr("x2","right"!=_?it:-it),1==x.component.plotBorderDrawn&&i(_,S,p,x.component,l)}}else T&&y(p,x.component,S,f,"y","add")
else T&&y(p,x.component,S,f,"y","remove")}},qr.axis.get=function(){function t(n,f,x){return n.each(function(n){var b=ri(this)
h=n.label,u=n.ticklabel,c=n.tickmark,d=n.grid
var C=me(p,f,x),T=C.ticks,E=T.tickValueObj,z=0>(M=Wl(M,0))?360-ja(M):M
z=z>360?ja(z)-360:z,l&&b.selectAll("g.axisgroup").selectAll("*").remove()
var D=kt(b,"g",[n],".","class","axisgroup")
b.selectAll("g#ticklabelG").remove()
var R
if(E&&E.inlineToPlot){b.selectAll("g.axisgroup").selectAll("*").remove(),(R=kt(b,"g",[1],"#","id","ticklabelG")).style("pointer-events","visible")
var j=kt(p.staticPaneSVG,"use",[1])
j.attr("xlink:href","#ticklabelG"),j.attr("x",b.attr("x")),j.attr("y",b.attr("y"))}if(o&&a.ticks(o[0],o[1]),p.isAxisCategory&&"clr"!==f){var I=function(t,e,n,r,a){var i=Yl(t.plotarea)
i.chartId=t.id
var o=kt(t.svg,"defs",[1]),l=L(i,r+a),s=kt(kt(o,"clipPath",[1],"#","id",l),"rect",[1]),u="x"==r?t.systemConf.chart.axes.xaxis:t.systemConf.chart.axes.yaxis[a],c={},h=e.axisgroup,d=.5*t.plotarea.left,f=.5*(t.canvasarea.width-(t.plotarea.left+t.plotarea.width)),p=.5*t.plotarea.top,g=.5*t.plotarea.bottom
switch(n){case"top":c.x=-d,c.y=-h.height-u.tickmark.size,c.height=h.height+t.plotarea.height+u.tickmark.size,c.width=h.width+d+f
break
case"right":c.x=-t.plotarea.width,c.y=-p,c.width=h.width+t.plotarea.width+(u.axisline.strokeWidth||1),c.height=h.height+p+g
break
case"bottom":c.x=-d,c.y=-t.plotarea.height,c.height=h.height+t.plotarea.height,c.width=h.width+d+f
break
case"left":c.x=-h.width,c.y=-p,c.width=h.width+t.plotarea.width+(u.axisline.strokeWidth||1),c.height=h.height+p+g}return s.attrs(c),l}(p,E,y,f,x)
D.attr("clip-path","url("+p.defsLocation+"#"+I+")"),E.inlineToPlot&&R.attr("clip-path","url("+p.defsLocation+"#"+I+")")}w=p.axes.animationDuration
var H={tickValues:k,tickFormat:S,tickSizeInner:O,tickSizeOuter:A,gridSize:P,tickPadding:_,orient:y,rotation:z,scale:i,chart:p,axis:C}
"clr"===f||X(u.showAs)||m?(H.renderGrid=!0,H.renderTicklabel=!0,D.call(fe,H,n)):(H.renderGrid=!0,H.renderTicklabel=!E.inlineToPlot,D.transition().duration(w).call(fe,H,n),E.inlineToPlot&&(H.renderGrid=!1,H.renderTicklabel=!0,R.transition().duration(w).call(fe,H,n)))
var B=D.selectAll(".tick"),N=null==k?i.ticks?i.ticks.apply(i,[B.nodes().length]):i.domain():k,F=D.selectAll(".tick").data(N,i),V=F.select("line.majorTicks"),U=C.axisLabel,G=D.selectAll("text.ticklabel").data(N,i)
T.isHierarchialLevelType()&&function(t,e,n){var a=me(p,e,n),i=a.component,o=t.selectAll("line.minorTicks"),l=function(t,e){for(var n=0;e>0;){var r=me(p,t,e-1),a=r.component
n+=a.tickLabelWidth(),e--}return n}(e,n)
a.ticks.tickValueObj.tickMarkSize=l+i.tickSize()
var s=n,u="left"==y||"right"==y?"x1":"y1",h="left"==y||"top"==y?l:-l,d="left"==y?"y1":"x1"
if(s===p.dataObject.hierarchical.finalDepth){var f=("bottom"==y&&c.size,t.nodes())
t.selectAll("line#minorTicksAlign").remove()
var g=d3.select(f[f.length-1]),v=kt(g,"line",[1],"#","id","minorTicksAlign"),m=p.axes.x.levels[s-1].scale,x=m.domain().length,b="top"==y||"bottom"==y?m.discreteWidth(x-1)+",0":"0,"+m.discreteWidth(x-1),w="left"==y||"right"==y?"x2":"y2",C="left"==y||"top"==y?-c.size:c.size
v.attr("transform","translate("+b+")").attr(u,h).attr(w,C),r(c,v)}o.attr(d,null),o.attr(u,h)}(F,f,x)
var q=(Ae(y,z,0,a,c.size),{data:v.map(function(t){return Fl(p.systemConf.metadata.columns[t],{columnindex:t},!0)})})
if(function(t,e,n,r,a,i){function o(e,n,r,a,i,o){t.dataObject.hierarchical&&t.dataObject.hierarchical.categoryTree&&"x"===o&&Y(ze,d3.event,l(e,n,r,a),t,i)}function l(t,e,n,r){return t.data=t.data.map(function(t){return t.value=t.datatype===co?bn(e,0,t.time).getTime():e,t.itemIndex=n,t.levelindex=r,t}),t}var s=n.events,u=null!=s&&0==W(s.enabled,!0),c={mousemove:s?s.mousemove:null,mouseout:s?s.mouseout:null,click:s?s.click:null,dblclick:s?s.doubleclick:null},h={tap:s?s.tap:null,tapHold:s?s.taphold:null,tapHoldEnd:s?s.tapholdend:null,dbltap:s?s.doubletap:null}
if(!u){var d={},f={}
for(var p in c){var g=null
c[p]?(g="click"==p?function(e,n){o(r,e,n,i,!1,a),Y(c[arguments.callee.eventtype],d3.event,l(r,e,n,i),t)}:function(e,n){Y(c[arguments.callee.eventtype],d3.event,l(r,e,n,i),t)},g.eventtype=p):"click"==p&&(g=function(t,e){o(r,t,e,i,!0,a)}),d[p]=g}for(var p in h)g=null,h[p]?(g="tap"==p?function(e,n){o(r,e,n,i,!1,a),Y(h[arguments.callee.eventtype],d3.event,l(r,e,n,i),t)}:function(e,n){Y(h[arguments.callee.eventtype],d3.event,l(r,e,n,i),t)},g.eventtype=p):"tap"==p&&(g=function(t,e){o(r,t,e,i,!1,a)}),f[p]=g
fn(e,d,f)}}(p,G,u,q,f,x),T.isHierarchialLevelType()||"between"!=c.align||e(i,F,"minorTicks"),"clr"!==f){!0===h.tooltip&&Tt(U.element),U.tickObj=E,U.transformLabel(g,s,y)
var Z="left"==y?270:"right"==y?90:0
Se(U.element,y,p,Z,"ellipsis",i,D,t,"axislabel")}if(P&&d.show&&(i.bandwidth&&"between"==c.align&&e(i,F,"majorTicks"),"clr"!==f)){var Q=i.range(),K=null==t.tickValues()?null:i(t.tickValues()[0])+(i.bandwidth?i.bandwidth()/2:0),$=p.systemConf.chart.plot.border,J=!0===$?$.color:n.axisline.color
X(K)&&"transparent"!==d.color&&"transparent"!==J&&Q[0]===K&&ri(V.nodes()[0]).style("stroke","transparent")}var tt=n.baseline
if(null!=tt){kt(D,"line",!0===tt.show&&i.domain()[0]<=tt.value&&tt.value<i.domain()[1]?[1]:[],".","class","zeroBase").attrs({x1:"left"==y||"right"==y?0:i(tt.value),y1:"left"==y||"right"==y?i(tt.value):-s.height,x2:"left"==y||"right"==y?s.width:i(tt.value),y2:"left"==y||"right"==y?i(tt.value):0}).styles({fill:Za,stroke:tt.color,"shape-rendering":"crispedges","stroke-width":tt.strokeWidth})}}),t}function e(t,e,a){var i,o,l,s,u=e.nodes(),h=d3.select(e.node()),f=d3.select(u[u.length-1]),p=e.selectAll("line."+a+":not(#minorTicksAlign)"),g=f.selectAll("line."+a),v=kt(h,"line",[1],"#","id",a+"Align"),m=n(t)
if("minorTicks"==a?(l="bottom"==y||"top"==y?0:-c.size,s="bottom"==y?c.size:"top"==y?-c.size:0,r(c,v)):(i=P.x1,o=P.y1,l=P.x2,s=P.y2,function(t,e){var n=Wl(t.strokeWidth,1),r=x(t.style,n),a=b(t.lineCap,d.style)
e.styles({fill:"none","shape-rendering":"crispedges","stroke-width":n,stroke:d.color,"stroke-dasharray":r,"stroke-linecap":a})}(d,v)),t.bandwidth)p.attr("transform","translate("+m.mid+")"),g.attr("transform","translate("+m.end+")"),v.attr("transform","translate("+m.start+")").attrs({x1:i,y1:o,x2:l,y2:s})
else{var w=0
p.attr("transform",function(){return"translate("+n(t,w++).mid+")"}),g.attr("transform","translate("+m.end+")"),v.attr("transform","translate("+m.start+")").attrs({x1:i,y1:o,x2:l,y2:s})}}function n(e,n){var r,a,i,o,l
if(e.bandwidth){var s=e.bandwidth(),u=(e.range(),e.ordinalRange),c=e.outerPaddingPx+s/2,h=e.domain().length>1?u[1]-u[0]-s:0
l=Ra(c,o=s/2+h/2)}else{var d=p.dataObject.hierarchical?p.dataObject.hierarchical.leafCategories:t.tickValues(),f=qr.scale.getContinuousRangeBand(e,d,n)
o=s=f.rangeBand,l=f.outerPaddingInPixel}return"bottom"===y||"top"==y?(r=-(l-.5)+",0",a=o+.5+",0",i=l+.5+",0"):(r="0,"+-l,a="0,"+o,i="0,"+l),{start:r,mid:a,end:i}}function r(t,e){e.styles({fill:"none","shape-rendering":"crispedges","stroke-width":t.strokeWidth,stroke:t.color})}var a,i,o,l,s,u,c,h,d,f,p,g,y,v,m,w,C=[],k=null,S=null,O=6,A=6,_=3,P=null,T=null,M=0
return t.axis=a,t.scale=function(e){return arguments.length?(i=e,a?a.scale(i):(a=li(y,i)).scale(i),t):i},t.systemconf=function(e){return arguments.length?(f=e,t):f},t.orient=function(e){return arguments.length?(X(y)&&(y!=e?(l=!0,p.container.selectAll("g.plotareaBorder-property").selectAll("*").remove(),a=null):l=!1),y=e,t):y},t.tickArguments=function(e){return arguments.length?(C=null==e?[]:Array.prototype.slice.call(e),t):C.slice()},t.tickValues=function(e){return arguments.length?(k=null==e?null:Array.prototype.slice.call(e),t):k&&k.slice()},t.tickFormat=function(e){return arguments.length?(S=e,t):S},t.tickSize=function(e){return arguments.length?(O=A=+e,t):O},t.tickSizeInner=function(e){return arguments.length?(O=+e,t):O},t.tickSizeOuter=function(e){return arguments.length?(A=+e,t):A},t.tickPadding=function(e){return arguments.length?(_=+e,t):_},t.ticks=function(){return arguments.length?(o=arguments,t):o},t.majorTicks=function(e){return arguments.length?(P=e,t):P},t.plotarea=function(e){return arguments.length?(s=e,t):s},t.tickLabelWidth=function(e){return arguments.length?(T=e,t):T},t.tickRotation=function(e){return arguments.length?(M=e,t):M},t.preCalcTickLen=function(e){return arguments.length?(g=e,t):g},t.chartObj=function(e){return arguments.length?(p=e,t):p},t.columnIndices=function(e){return arguments.length?(v=e,t):v},t.isMultiLineTick=function(e){return arguments.length?(m=e,t):m},t}
var ql=function(t){t=Wl(t,{}),this.startWeekDay=X(t.startWeekDay)?t.startWeekDay:1,this.startMonth=X(t.startMonth)?t.startMonth:0}
ql.MILLISEC=0,ql.SECOND=1,ql.MINUTE=2,ql.HOUR=3,ql.DATE=4,ql.MONTH=5,ql.SECOND_TYPE="ABSSECOND",ql.MINUTE_TYPE="ABSMINUTE",ql.HOUR_TYPE="ABSHOUR",ql.DAY_TYPE="ABSDAY",ql.DATETIME_TYPE="DATETIME",ql.DATE_TYPE="DATE",ql.ABSWEEK_TYPE="ABSWEEK",ql.ABSMONTH_TYPE="ABSMONTH",ql.ABSQUARTER_TYPE="ABSQUARTER",ql.ABSYEAR_TYPE="YEAR",ql.D3_WEEKDAY_FNS=[Yi,Vi,Wi,Ui,Xi,Gi,qi],ql.DAY_MILLIS=864e5,ql.prototype.setZero=function(t,e){for(var n=0,r=0;e>=r;r++)switch(r){case ql.MILLISEC:n+=this.getMilliseconds(t),this.setMilliseconds(t,0)
break
case ql.SECOND:n+=this.getSeconds(t),this.setSeconds(t,0)
break
case ql.MINUTE:n+=this.getMinutes(t),this.setMinutes(t,0)
break
case ql.HOUR:n+=this.getHours(t),this.setHours(t,0)
break
case ql.DATE:n+=this.getDate(t)-1,this.setDate(t,1)
break
case ql.MONTH:n+=this.getMonth(t),this.setMonth(t,this.startMonth)
break
default:throw"unknown type 333: "+e}return n},ql.prototype.getBaseValue=function(t,e,n){switch(e){case ql.SECOND_TYPE:case ql.DATETIME_TYPE:var r=this.setZero(t,ql.MILLISEC)
n&&r>0&&this.setSeconds(t,this.getSeconds(t)+1)
break
case ql.MINUTE_TYPE:r=this.setZero(t,ql.SECOND)
n&&r>0&&this.setMinutes(t,this.getMinutes(t)+1)
break
case ql.HOUR_TYPE:r=this.setZero(t,ql.MINUTE)
n&&r>0&&this.setHours(t,this.getHours(t)+1)
break
case ql.DAY_TYPE:case ql.DATE_TYPE:r=this.setZero(t,ql.HOUR)
n&&r>0&&this.setDate(t,this.getDate(t)+1)
break
case ql.ABSWEEK_TYPE:r=this.setZero(t,ql.SECOND)
var a=this.startWeekDay
n?(r>0&&this.setDate(t,this.getDate(t)+1),a<this.getDay(t)?this.setDate(t,this.getDate(t)+(7-this.getDay(t)+a)):this.setDate(t,this.getDate(t)+(a-this.getDay(t)))):a>this.getDay(t)?this.setDate(t,this.getDate(t)-(7-a+this.getDay(t))):this.setDate(t,this.getDate(t)-(this.getDay(t)-a))
break
case ql.ABSQUARTER_TYPE:case ql.ABSMONTH_TYPE:r=this.setZero(t,ql.DATE)
n&&r>0&&this.setMonth(t,this.getMonth(t)+1)
break
case ql.ABSYEAR_TYPE:r=this.setZero(t,ql.MONTH)
n&&r>this.startMonth&&this.setFullYear(t,this.getFullYear(t)+1)
break
default:throw"unknow type 222: "+e}},ql.prototype.getTicksList=function(t,e,n,r){for(var a=new Array,i=e.getTime(),o=t.getTime(),l=new Date(o);i>=o;){switch(a.push(l),l=new Date(o),r){case ql.SECOND_TYPE:case ql.DATETIME_TYPE:l.setTime(l.getTime()+1e3*La(n))
break
case ql.MINUTE_TYPE:l.setTime(l.getTime()+6e4*n)
break
case ql.HOUR_TYPE:l.setTime(l.getTime()+36e5*n)
break
case ql.DAY_TYPE:case ql.DATE_TYPE:l.setTime(l.getTime()+n*ql.DAY_MILLIS)
break
case ql.ABSWEEK_TYPE:this.setDate(l,this.getDate(l)+n)
break
case ql.ABSMONTH_TYPE:case ql.ABSQUARTER_TYPE:this.setMonth(l,this.getMonth(l)+n)
break
case ql.ABSYEAR_TYPE:this.setFullYear(l,this.getFullYear(l)+n)}o=l.getTime()}return a},ql.prototype.range=function(t,e,n,r,a){function i(t,e){return null!=e&&e>=t?e:t}switch(t=new Date(t.getTime()),e=new Date(e.getTime()),this.getBaseValue(t,r,!1),this.getBaseValue(e,r,!0),r){case ql.SECOND_TYPE:case ql.DATETIME_TYPE:var o=1,l=za((e.getTime()-t.getTime())/1e3)
return u=i(u=za(l/n)||o,a),{TYPE:Zi,INTERVAL:u,TICKS:this.getTicksList(t,e,u,r)}
case ql.MINUTE_TYPE:o=1
return u=i(u=za((e.getTime()-t.getTime())/(6e4*n))||o,a),{TYPE:Qi,INTERVAL:u,TICKS:this.getTicksList(t,e,u,r)}
case ql.HOUR_TYPE:o=1
return u=i(u=za((e.getTime()-t.getTime())/(36e5*n))||o,a),{TYPE:Qi,INTERVAL:u,TICKS:this.getTicksList(t,e,u,r)}
case ql.DAY_TYPE:case ql.DATE_TYPE:o=1
return u=i(u=za((e.getTime()-t.getTime())/(n*ql.DAY_MILLIS))||o,a),{TYPE:Ki,INTERVAL:u,TICKS:this.getTicksList(t,e,u,r)}
case ql.ABSWEEK_TYPE:o=1
var s=za((e.getTime()-t.getTime())/(n*ql.DAY_MILLIS*7))
s=i(s,a)
var u=7*za(s)||o
return{TYPE:$i,INTERVAL:u,TICKS:this.getTicksList(t,e,u,r)}
case ql.ABSMONTH_TYPE:o=1
return u=i(u=za(this.getMonthsDiff(t,e)/n)||o,a),{TYPE:Ji,INTERVAL:u,TICKS:this.getTicksList(t,e,u,r)}
case ql.ABSQUARTER_TYPE:o=1
var c=this.getMonthsDiff(t,e)/n||o,h=za(c/3)
h=i(h,a)
return{TYPE:Ji,INTERVAL:u=3*h,TICKS:this.getTicksList(t,e,u,r)}
case ql.ABSYEAR_TYPE:o=1
return u=i(u=za((e.getFullYear()-t.getFullYear())/n)||o,a),{TYPE:to,INTERVAL:u,TICKS:this.getTicksList(t,e,u,r)}
default:throw"UNKNOWN TYPE 111: "+r}},ql.MAX_DATE=new Date(2008,8,29,23,23,23,999),ql.prototype.getMaxDate=function(t,e){return yn(t,ql.MAX_DATE,co,null,"axis",null,null,e)},ql.prototype.getMonthsDiff=function(t,e){return 12*(this.getFullYear(e)-this.getFullYear(t))+(this.getMonth(e)-this.getMonth(t))},ql.prototype.getYearsDiff=function(t,e){return 12*(this.getFullYear(e)-this.getFullYear(t))+(this.getMonth(e)-this.getMonth(t))},ql.prototype.getFullYear=function(t){return null!=this.useUTC&&this.useUTC?t.getUTCFullYear():t.getFullYear()},ql.prototype.getMonth=function(t){return null!=this.useUTC&&this.useUTC?t.getUTCMonth():t.getMonth()},ql.prototype.getDay=function(t){return null!=this.useUTC&&this.useUTC?t.getUTCDay():t.getDay()},ql.prototype.getDate=function(t){return null!=this.useUTC&&this.useUTC?t.getUTCDate():t.getDate()},ql.prototype.getHours=function(t){return null!=this.useUTC&&this.useUTC?t.getUTCHours():t.getHours()},ql.prototype.getMinutes=function(t){return null!=this.useUTC&&this.useUTC?t.getUTCMinutes():t.getMinutes()},ql.prototype.getSeconds=function(t){return null!=this.useUTC&&this.useUTC?t.getUTCSeconds():t.getSeconds()},ql.prototype.getMilliseconds=function(t){return null!=this.useUTC&&this.useUTC?t.getUTCMilliseconds():t.getMilliseconds()},ql.prototype.setFullYear=function(t,e){return null!=this.useUTC&&this.useUTC?t.setUTCFullYear(e):t.setFullYear(e)},ql.prototype.setMonth=function(t,e){return null!=this.useUTC&&this.useUTC?t.setUTCMonth(e):t.setMonth(e)},ql.prototype.setDate=function(t,e){return null!=this.useUTC&&this.useUTC?t.setUTCDate(e):t.setDate(e)},ql.prototype.setHours=function(t,e){return null!=this.useUTC&&this.useUTC?t.setUTCHours(e):t.setHours(e)},ql.prototype.setMinutes=function(t,e){return null!=this.useUTC&&this.useUTC?t.setUTCMinutes(e):t.setMinutes(e)},ql.prototype.setSeconds=function(t,e){return null!=this.useUTC&&this.useUTC?t.setUTCSeconds(e):t.setSeconds(e)},ql.prototype.setMilliseconds=function(t,e){return null!=this.useUTC&&this.useUTC?t.setUTCMilliseconds(e):t.setMilliseconds(e)},function(t){"use strict"
function e(t,e,n,r){var a=t.length
e=Ea(e),n=n||za(a/ja(e))
for(var i=0,o=[],l=r?[]:null,s=r?[]:null,u=!!r&&X(t[0].index);a>i;)r?u?(o.push(t[i].value),l.push(t[i].index),s.push(t[i])):(o.push(t[i]),l.push(i)):o.push(t[i]),i+=n
return r?{nodes:s,ticks:o,indices:l}:o}function r(t,e,r,a,i,o){var l=[],s=[],u=[],c={data:[r]}
return r.columnindex=Wl(r.columnindex,i),t.forEach(function(t,r){var i=Y(e.showAs,t,e,c,a,r,o),h=[],d=[]
if(n(i)?(l.push(h),s.push(d)):(h=l,d=s),u.push(i),X(i)){var f=document.createElement("div")
f.innerHTML=i
var p=F(f.querySelectorAll("tspan")),g=f.querySelectorAll("image,img")
p.length?p.forEach(function(t){h.push(t.textContent.trim()),d.push({fontSize:t.style.fontSize&&parseFloat(t.style.fontSize),fontFamily:t.style.fontFamily,fontStyle:t.style.fontStyle,fontWeight:t.style.fontWeight})}):h.push(f.textContent),g.length&&F(f.querySelectorAll("image,img")).forEach(function(t){h.push({width:+t.getAttribute("width"),height:+t.getAttribute("height")}),d.push({})})}}),{tickValues:l,styles:s,userRawTicks:u}}function a(t,e,n,r,a,i,o){Pa.save(),Pa.font=n+"px "+r
var l,s,u,c=0,h=null,d=null
a=Wl(a,[]),X(e)||(e=[])
return t.forEach(function(t,f){var p=Ee(t,n,r,a[f]),g=p.width
i&&(g=p.width*p.height),o&&!s&&(s=-1!=t.indexOf(" ")),g>c&&(c=g,h=t,d=e[f],l=a[f],u=f)}),Pa.restore(),{actualVal:d,formattedVal:h,style:l,index:u,hasWhiteSpace:s}}function i(t,e,n,r,a,i){return"height"===t?Math.abs(a+n.top+n.bottom):r>0?o(r,e.width,a,i).tickSpacing+n.left+n.right:e.width+n.left+n.right}function o(t,e,n,r){var a=t*(2*Xa/360),i=2*Xa/360*(90-t)
if("bottom"===r||"top"===r)return{tickSpacing:ja(n/Na(a))+5,baseLen:0}
return{tickSpacing:ja(Na(i)*n)+ja(Ba(i)*n*Ya(a))+5,baseLen:ja(Ba(i)*e)}}function l(t,e,n,r,a,i){var o=n.dataObject,l=e.minmaxlabels||{}
if(!0===l.show){var s=qr.scale.getScale(n,o,n.plotarea,i,a,n.dataset,r).domain()
W(l.excludeIntervals,!0)?t=s:(s[0]!==t[0]&&t.splice(0,0,s[0]),s[1]!==t[t.length-1]&&t.push(s[1]))}return t}function s(t,e){var n=X(e)?e:10,r=t[1]-t[0],a=Ia(10,La(Fa(r/n)/Wa)),i=n/r*a
return.15>=i?a*=10:.35>=i?a*=5:.75>=i&&(a*=2),a}var u=qr.axis,c=function(t,e,n,r){this.axis=t,this.config=t.label,this.axisRect=e.bound,this.parentNode=r.isD3Selection?r:d3.select(r),this.orient=n,this.systemConfig=e.systemConf,this.order=e.axisOrder,this.plotRect=e.plotRect,this.show=!e.hide,this.tickObj=e.tickObj,this.show?this.add():this.element=kt(this.parentNode,"text",[],".","class","axislabel")}
c.prototype={add:function(){this.element=kt(this.parentNode,"text",[1],".","class","axislabel"),this.text=this.config.text,this.element.text(this.text),this.rect=null,this.transformLabel()},remove:function(){this.rect=null,this.element=kt(this.parentNode,"text",[],".","class","axislabel")},setStyles:function(){var t=this.systemConfig
Pt(this.element,[this.config,t.chart,t.canvas,El])},getBBox:function(){if(!X(this.rect)){if(!this.element.isD3Selection||this.element.empty())return function(){var t={}
return t.x=t.y=t.width=t.height=0,t}()
this.rect=this.element.node().getBBox()}return this.rect},transformLabel:function(t,e,n){function r(t,e,n,r,i){r=Wl(r,0),i=Wl(i,0),a.element.attrs({x:e,y:n,transform:function(t,e,n){return"rotate("+t+" "+(e||0)+" "+(n||0)+")"}(t,r,i),"text-anchor":s})}var a=this
if(!0!==a.show)return a.remove()
if(a.element.empty()&&!0===a.show||a.text!==a.config.text)return a.add()
a.setStyles()
var i,o,l=a.systemConfig,s="middle",u=Wl(n,a.orient),c={top:0,right:90,bottom:0,left:270}[u],h=Wl(t,this.axisRect),d=Wl(e,this.plotRect),f=a.axis.ticklabel,p=a.config,g=ye(f),y=ye(p),v=parseFloat(qr.utils.getVal(V([a.config,l.chart,l.canvas,El],"fontSize")))
a.fontSize!==v?a.rect=null:a.fontSize=v,a.element.attr("dy","-0.25em")
var m=this.tickObj.isInline,x=this.tickObj.inlineToPlot,b=m&&!x?0:g[u]
switch(u){case"top":var w=x?0:h.height+b
r(c,i=d.width/2,-(o=w+y.bottom))
break
case"right":w=x?0:h.width+b
r(c,i=d.height/2,-(o=w+y.left))
break
case"bottom":w=x?0:h.height+b
i=d.width/2,o=w+y.top,a.element.attr("dy","0.91em"),r(c,i,o)
break
case"left":r(c,-(i=(w=x?0:h.width+b)+y.right),o=d.height/2,-i,o)}}}
var h=function(t,e,n,r,a){this.type=t,this.config=e.ticklabel,this.axis=e,this.plotRect=n,this.helpers=r,this.tickCount=a,this.maxSize=function(){return _e(this.config,this.plotRect)},this.cache={}}
h.prototype={getScale:function(){var t=this.helpers.chart,e=this.helpers
return qr.scale.getScale(t,t.dataObject,this.plotRect,e.orient,e.axisOrder,t.dataset,this.type,this.extent)},getTicks:function(t,u,c){function h(t,e,n){var r,a,i,l,s=0,u=Ie(A.chart,ht,O.plotRect)
if("x"===n&&(s=u*gt*2),r=u-s,i=!!t,l=e||Jt,i){if("height"===ht&&(90===t||270===t))return r/(l.width+ja(tt.top)+ja(tt.bottom))
var c=t%90
if("height"===ht?c>0:c>0||90===t||270===t){return r/(o(t,l.width,l.height,A.orient).tickSpacing+ja(tt.left)+ja(tt.right))}}return a="height"===ht?l.height+ja(tt.top)+ja(tt.bottom):l.width+ja(tt.left)+ja(tt.right),r/a}function d(t,e,n){var r,a=X(e)?e:ft
return"auto"===a?(ft=0,r=h(ft,t,L),!$t&&j>r?"width"===ht?(ft=A.chart.axes.x.count>1&&"x"==L&&0==B?90:45,r=h(ft,t,null),n=!0):n=!0:n=!1):(r=h(a,t,L),ft=a),{mode:"rotate",rotation:ft,maxTickCount:r,recalculate:n}}function f(t){return{mode:"zigzag",rotation:0,maxTickCount:2*h(0,t,L)}}function p(){if("auto"==st){var t=a(Zt=Zt.map(function(t){return t.split(" ")}),H,it,ot,bt.styles)
X(vt)||(vt=t.formattedVal)
var e=Ee(vt,it,ot,t.style,!0)}return{mode:"wrapOnSpace",maxTickCount:h(ft,e,L),rotation:ft}}var g,y,v,m,x,b,w,C,k,S,O=this,A=Wl(c,O.helpers),_=A.chart,P=_.systemConf,T=_.dataObject,M=O.plotRect=Wl(t,O.plotRect),E=O.axis,L=O.type,z=E.interval,D=E.tickCount,R=E.interval,j=Wl(u,0),I=c.extent,H=I,B=A.axisOrder,F=A.axisRotated,Y=_.dataset.getDataType(L,B),W=_.systemConf.metadata,U=_.dataset.getColumnIdx(L,B),G=W.columns[U],q=W.columns[U].datatype,Z="y"==L&&W.axes.y[B].length>1,Q=W.columns[U],K=Wl(Z&&"y"==L?pe(B,_):Q[q],{}),$=K.subfunction,J="y"===L&&(_.dataObject.isStackedPercentChart||_.dataObject.isPercentChart)?wn:yn,tt=ye(O.config),et=xe(O.axis,L,_),rt=!!et&&function(t,e){var n=P.chart.axes.yaxis[0].reversed
return!("x"!=t||!("bottom"==e&&!n||"left"==e&&!n||"top"==e&&n||"right"==e&&n))||void 0}(L,A.orient),at=function(t,e,n,r,a,i){var o=Wl(n.size,6),l=ve(t,e,i),s="left"===t||"right"===t?"x":"y",u="top"===t||"left"===t?-1:1,c=(u=a?-u:u,{})
return c["left"===t||"right"===t?"y":"x"]=0,c[s]=u*(l+o),c}(A.orient,tt,O.axis.tickmark,O.axis.ticklabel,rt,et),it=parseFloat(qr.utils.getVal(V([O.config,P.chart,P.canvas,El],"fontSize"))),ot=qr.utils.getVal(V([O.config,P.chart,P.canvas,El],"fontFamily")),lt=function(t){var e=t.alignMode,n=t.alignMode&&-1!=t.alignMode.indexOf("rotate"),r=X(t.rotation),a=0
if(n){var i=/\(([^)]+)\)/.exec(e)
a=i?parseInt(i[1]):"auto"}else r&&!X(t.alignMode)?(a="auto"==t.rotation?t.rotation:parseInt(t.rotation),e="rotate",n=!0):X(t.alignMode)||(e="rotate(0)",n=!0)
return{alignmentMode:e,isRotateMode:n,rotation:a}}(O.config),st=lt.alignmentMode,ut=lt.isRotateMode,ct=lt.rotation,ht=function(t,e){return"x"==t&&e||"y"==t&&!e}(L,F)?"height":"width",dt=function(t,e,n,r){var a=t.axes.x.count>1&&"x"==e&&n>0
return"auto"==r&&!a}(_,this.type,B,ct),ft=_.axes.x.count>1&&"x"==L&&B>0?0:ct,pt=_.chartTypes[0].name,gt=_.systemConf.chart.plot.plotoptions[pt].outerPadding||0,yt=_.systemConf.chart.plot.plotoptions[pt].padding||.2,vt=null,mt=Ie(A.chart,ht,M),xt="x"===L?mt*gt*2:0,bt={},wt=c.maxTickSize||this.maxSize(),Ct=n(K.groupby)&&K.groupby.length>0||"AUTO"===K.groupby&&"YEAR"!==$,kt=Ct?B:null
switch(Ct&&"AUTO"===K.groupby&&(K.AUTO_GROUP_ORDER=qr.HierarchicalTimeDataAdapter.getAutoGroupOrder($).reverse()),dt||(0>ft?ft=360-ja(ft):ft>360&&(ft=ja(ft)%360)),Y){case"numeric":y=X(I)?I:"x"===L?T.getMinMaxX():T.getMinMaxY(A.axisOrder,Ta,_.datalabels.hasFixedPosition)
var St
if("y"===L&&_.datalabels.hasFixedPosition){var Ot=T.rangeCorrections.datalabels,At=L+A.axisOrder
N(Ot[At])&&(Ot[At]=zs(L,T.groupedDataBySplitAxes[A.axisOrder],_)),St=Ot[At]}else St=0
"height"===ht?(C=M.height-St,j=j||Ea(C/40),g=[C,0]):(C=M.width-St,j=j||Ea(C/100),g=[0,C]),X(D)&&(R=(y[1]-y[0])/D)
var _t,Pt
if(Pt=X(z)&&(y[1]-y[0])/z<C,v=di().domain(y).range(g),Pt){if(_t=La((y[1]-y[0])/R)){if(Dt=s(y,_t),(Et=za(y[0]/Dt)*Dt)-y[0]>R){var Tt=Ia(10,La(Fa(R)/Wa))
Et-=La((Et-y[0])/Tt)*Tt}}else{var Mt=y[1]-y[0]
Tt=Ia(10,La(Fa(Mt)/Wa))
Et=y[0]-y[0]%Tt+Tt}H=Fi(Et,y[1],R)}else if(+D>0)if(1===D)Dt=s(y,1),Et=Math.ceil(y[0]/Dt)*Dt,H=[Et]
else{var Et,Lt,zt,Dt,Rt=D-1,jt=(Mt=y[1]-y[0],La(Fa(Dt=Mt/Rt)/Wa)),It=Ia(10,jt),Ht=function(t,e){for(var n,r,a=null,i=e,o=[1,1.2,1.5,1.75,2,2.2,2.5,3,3.5,4,4.5,5,6,7,8,9,10],l=0;l<o.length;l++)r=o[l]*e,n=ja(t-r),(a=null==a?n:a)>n&&t>=r&&(a=n,i=r)
return i}(R,It=+(It*=Math.floor(Dt/It)).toFixed(12))
Et=y[0],Lt=y[1]
Lt=(Lt=+(Lt=(Et=+(Et=function(t,e,n,r){var a=[1,2,5,10],i=a.length,o=t+e/2
o=+o.toFixed(12)
for(var l,s,u=0;i>u;u++){var c,h=n/a[u],d=ja(o-(c=t%h?t-t%h+h:t));(l>d||null==l)&&(l=d,s=c)}if(null==s||t>s){var f=La(Fa(r)/Wa)
0>f&&(s=+t.toFixed(ja(Ra(0,f)))),s=t}return s=s>t?s:t}(Et,zt=Mt-Ht*Rt,Ia(10,La(Fa(zt)/Wa)+1),Ht)).toFixed(12))+Ht*D).toFixed(12))>y[1]?+y[1]:Lt,H=Fi(Et,Lt,Ht)}else H="integer"===$?Fi(function(t,e){var n=s(t)
return X(e)&&(n=Da(e,n)),za(t[0]/n)*n}(y,1),y[1],function(t){return za(s(t))}(y)):v.ticks(j)
H=l(H,O.config,_,L,A.axisOrder,A.orient),j=H.length
break
case"ordinalNonLinear":case"ordinal":var Bt,Nt=it,Ft=T.hierarchical
if(x=X(Ft)&&Ft.categoryTree&&"x"==L&&0==B||T.isWaterfallEnabled,w=x&&("auto"==A.chart.systemConf.chart.width||"auto"==A.chart.systemConf.chart.height),X(H)||(H=T.getCategories(L,A.axisOrder).slice(0)),x&&X(Ft)&&(H=T.hierarchical.leafNodes),q===co&&!X($)){var Yt=Tn(H[H.length-1]-H[0])
$=K.subfunction=Yt.subFunction}j=H.length,(k={}).width=k.height=it,S=i(ht,k,tt,ft,it,A.orient),Bt=Ea((mt-xt)/S),j>Bt&&"width"===ht&&(ft||O.config.rotation>0)&&(S=o(45,it,Nt,A.orient).tickSpacing+tt.left+tt.right),"x"==L&&B>0||w||(j>D?H=e(H,D,null,x):X(R)?H=e(H,j,R,x):j>Bt&&(H=e(H,Bt,null,x))),x&&(m=H.nodes||H,b=H.indices,H=H.ticks||T.getCategories(L,A.axisOrder).slice(0)),j=H.length
break
case"time":var Vt=Pe(K)
if(!Vt){var Wt,Ut,Xt
if(y=X(I)?I:"x"===L?T.getMinMaxX(0):T.getMinMaxY(A.axisOrder,0),Wt=new Date(y[0]),Ut=new Date(y[1]),X(Q[q])||(Q[q]=K),!X($)||"AUTO"===$){Yt=Tn(Ut-Wt)
$=K.subfunction=Yt.subFunction}(Xt=new ql(K)).useUTC=!0===K.useUTC,k=Ee(vt=Le(vt=Xt.getMaxDate(K,kt),st,wt.horizontal,wt.vertical,it),it,ot),S=i(ht,k,tt,ft,it,A.orient),j=(mt-xt)/S
var Gt=Xt.range(Wt,Ut,za(j),$,R,_)
H=l(Gt.TICKS,O.config,_,L,A.axisOrder,A.orient),j=Gt.TICKS.length
break}var qt=qr.scale.getScale(_,T,M,A.orient,A.axisOrder,_.dataset,L,null)
H=qt.ticks(),Zt=H.map(function(t){return qt.tickFormat()(t)}),j=H.length}if("ordinalNonLinear"===Y){var Zt=Vt?Zt:nt(H,J,K,_,q,"axis",kt,st,wt,it)
X(O.config.showAs)&&(bt=r(H,O.config,G,_,U,B),Zt=bt.tickValues,bt.length=Zt.length)
var Qt=a(Zt,H,it,ot,bt.styles)
return{rawTickValues:H,formatterTickValues:Zt,longestTickValue:Qt,scale:O.getScale(),longestTickDimension:Ee(Qt.formattedVal,it,ot),margin:tt,tickMargin:at,rotation:ft,customTickInfo:bt,mode:st,isInline:et,inlineToPlot:rt,maxTickSize:wt}}var Kt=(v=O.getScale()).actualRange,$t=Kt&&Kt[0]===Kt[1]
$t&&(H=[v.invert(Kt[0])]),Zt=Vt?Zt:nt(H,J,K,_,q,"axis",kt,st,wt,it),X(O.config.showAs)&&(bt=r(H,O.config,G,_,U,B),Zt=bt.tickValues,bt.length=Zt.length),Qt=a(Zt,H,it,ot,bt.styles),X(vt)||(vt=Qt.formattedVal)
var Jt=Ee(vt,it,ot,Qt.style,!0),te=_e(O.config,_.chartarea)
Jt.width=Ra(Jt.width,te.horizontal),Jt.height=Ra(Jt.height,te.vertical),w&&O.recalculatePlotSize(A.chart,mt,Jt,ht,j,tt,yt,gt)
var ee=function(t){if("auto"==st){var e=d(Jt,0)
if(e.maxTickCount<t){var n=Y==uo?f(Jt):d(Jt,45,!0)
if(n.maxTickCount<t){var r=d(Jt,45,!0)
return r.maxTickCount<t&&Qt.hasWhiteSpace?p():r}return n}return e}return ut?d(Jt):"zigzag"==st?f(Jt):"wrapOnSpace"==st?p():"wrapAll"==st?{mode:"wrapAll",maxTickCount:h(ft,Jt,L),rotation:ft}:void 0}(j),ne=ee.mode,re=ee.maxTickCount
if(ft=ee.rotation,!$t&&(j>re||ee.recalculate))if(Y===co)if(Vt){qt=qr.scale.getScale(_,T,M,A.orient,A.axisOrder,_.dataset,L,null)
H=qt.ticks(re),j>re&&(ft=45),Zt=H.map(function(t){return qt.tickFormat()(t)}),Qt=a(Zt,H,it,ot,bt.styles)}else Gt=Xt.range(Wt,Ut,re,$,R,_),H=l(Gt.TICKS,O.config,_,L,A.axisOrder,A.orient),Zt=nt(H,J,K,_,q,"axis",kt,st,wt,it)
else j>re&&(x?(H=e(m||H,re,null,x),b=H.indices,H=H.ticks):(H=e(H,re),O.config.showAs&&(bt.styles=e(bt.styles,re),bt.userRawTicks=e(bt.userRawTicks,re))),Zt=e(Zt,re),Qt=a(Zt,H,it,ot,bt.styles))
q===co&&Ct&&(Ct&&!X(T.hierarchical)?T.hierarchical=new qr.HierarchicalTimeDataAdapter(_,H,K.groupby,Y!==co,G):Ct&&T.hierarchical.update(H)),(X(bt.styles)||K&&K.format&&K.format.breakSpace)&&(Qt=a(Zt,H,it,ot,bt.styles,!0))
var ae=Ee(vt,it,ot,Qt.style)
return{rawTickValues:H,formatterTickValues:Zt,longestTickValue:Qt,scale:v,longestTickDimension:ae,margin:tt,tickMargin:at,rotation:ft,mode:ne,isInline:et,inlineToPlot:rt,tickValueIndices:b,customTickInfo:bt,maxTickSize:wt}},recalculatePlotSize:function(t,e,n,r,a,i,o,l){var s,u
"height"===r?(s=n[r]+i.top+i.bottom,u=s*a,e=[u,0]):(s=n[r]+i.left+i.right,u=s*a,e=[0,u]),u+=Ce(e,a,o,l,s),t.systemConf.chart[r]=u}},u.Ticks=h,u.AxisLabel=c}(),qr.axis.Ticks.prototype.ticklabelFitModels=function(t,e){var n={},r=t.length
return n.zigzag={},n.rotate={},n.type=r>e?e>2*r?"zigzag":"rotate":"default",n},qr.axis.ticks=function(t,e,n,r,a,i){"use strict"
function o(){return l()&&r>0}function l(){return"x"==n&&t.axes.x.count>1}function s(n,i,o,l,s,c,d,f){var p,g=i,v=y===co&&Pe(j),m=s.formatterTickValues
h=s.rawTickValues
var b,w,O=s.longestTickValue,A=s.maxTickSize,_=s.tickValueIndices,P=s.scale
X(s.customTickInfo)&&s.customTickInfo.length&&(b=s.customTickInfo.styles,w=s.customTickInfo.userRawTicks)
var T=function(t){return t.slice(0).sort(function(t,e){return X(t)||(t=""),X(e)||(e=""),e.length-t.length})}(m),M=function(t,e){var n,r
return X(b)&&(n=b[e]),r=Ee(t,C,k,n),d?r.width*r.height:"left"==a||"right"==a?r.width:r.width*r.height}
if(!c){o.append("line").attr("class","domain").attrs({x1:0,y1:0,x2:"bottom"==a||"top"==a?n.width:1e-4,y2:"bottom"==a||"top"==a?1e-4:n.height}).style("stroke","black")
var E=x.textOverflow==Za?"":x.textOverflow,L=!1,z=-1,D=O.actualVal,R=O.formattedVal
d&&(R=u(s.longestTickValue,null,s)),Lt(i,R,null,d),function(t,e,n){t.attrs({dy:"zigzag"==n.mode?e.dy1||e.dy:e.dy,transform:"rotate("+e.rotate[0]+" "+e.rotate[1]+" "+e.rotate[2]+")"}).styles({"text-anchor":e.textAnchor})}(i,f,s)
var I=(P(D)||0)+(null==P.bandwidth?0:P.bandwidth()/2)
I="bottom"==a||"top"==a?I+",0":"0,"+I,l.attr("transform","translate("+I+")"),Se(i,a,{svg:t.svg,canvasarea:t.canvasarea,plotarea:n,chartarea:t.chartarea,legendarea:t.legendarea,actChartObj:t},S,E,P,o,null,"ticklabel",x,r)
var H,B,N
for(B=H=d?R:Dt(i);"ordinalNonLinear"!=y&&!L&&z<h.length;){z+=1
I=(P(D)||0)+(null==P.bandwidth?0:P.bandwidth()/2)
I="bottom"==a||"top"==a?I+",0":"0,"+I,l.attr("transform","translate("+I+")"),Se(i,a,{svg:t.svg,canvasarea:t.canvasarea,plotarea:n,chartarea:t.chartarea,legendarea:t.legendarea,actChartObj:t},S,E,P,o,null,"ticklabel",x,r),M(H=Dt(i),z)>M(B,z)&&(R=H,d&&(R=u(null,z,s)),B=R),Lt(i,B,null,d)
var F=!h.length||z===h.length-1||1===h.length
N=F?null:v?T[z]:T[z]||""
!F&&M(H,z)<M(N,z)?(D=T[z],H=N,R=N,d&&(R=u(null,z,s)),Lt(i,R,null,d)):L=!0}}var Y=g.node().getBoundingClientRect(),V=o.node().getBoundingClientRect()
return p={ticks:h,rotation:S,longTickSize:Y,longtick:O,axisgroup:V,customTicks:w,mode:s.mode,isInline:s.isInline,inlineToPlot:s.inlineToPlot,maxTickSize:A,showGrid:e.grid.show&&"transparent"!=e.grid.color},_&&(p.tickValueIndices=_),p}function u(t,e,n){return n.customTickInfo.userRawTicks[X(e)?e:t.index]}var c={}
qr.axis.ticks.maxTickSizeRatio_Vert="50%",qr.axis.ticks.maxTickSizeRatio_Hori="50%"
var h,d=t.dataObject,f=t.systemConf,p=t.svg,g=t.canvasarea["bottom"==a||"top"==a?"height":"width"]
c.isHierarchy=l,c.isHierarchialLevelType=o
var y=t.dataset.getDataType(n,r),v=d.getAxisRotated(),m=e.label||{},x=e.ticklabel||{},b=e.tickmark,w={},C=parseFloat(qr.utils.getVal(V([x,f.chart,f.canvas,El],"fontSize"))),k=qr.utils.getVal(V([x,f.chart,f.canvas,El],"fontFamily")),S=null!=x&&null!=x.rotation&&"auto"!=x.rotation?x.rotation:0
l()&&(S=0),S=(S=0>(S=null==S||""==S?0:parseFloat(S))?360-ja(S):S)>360?ja(S)%360:S
var O,A,_,P,T=!1===m.show||!X(m.text)||""===m.text||!Vt(t,n+"axislabel",g)||l()&&r<t.axes.x.count-1
T?O=A=_=P=0:(P=Wl(m.marginTop,5),_=Wl(m.marginBottom,5),A=Wl(m.marginLeft,5),O=Wl(m.marginRight,5))
var M=ye(x),E=t.systemConf.metadata,L=t.dataset.getColumnIdx(n,r),z=E.columns[L].datatype,D=E.columns[L][z],R="y"==n&&E.axes.y[r].length>1,j=D
j=R&&"y"==n?pe(r,t):D,this.preCalcAxisLen=0
var I=Wl(b.size,6)
return c.preCalcApproxAxisLength=function(i){var o="x"==n&&0==r&&t.brush?t.brush.extent:null,l=me(t,n,r),s={axisRotated:v,axisOrder:r,chart:t,orient:a}
l.Ticks||(l.Ticks=new qr.axis.Ticks(n,e,i,s)),this.tickValueObj=c.getTickValues(i.width,i.height,o,!0,null,l.Ticks,i)
var u=n+"-axis-"+r,h=kt(t.svg.selectAll("g."+n+"-axis"),"g",[e],".","class",u)
kt(h,"g",[e],".","class","axisgroup").selectAll("line.majorTicks").style("display","")
var d=this.tickValueObj.axisgroup,p=d.width,g=d.height,y=x.maxWidth,m=x.maxHeight
"left"!==a&&"right"!==a||!X(x.width)?X(x.height)&&(g=qt(Zl(x.height,m)||qr.axis.ticks.maxTickSizeRatio_Vert,i.height)):p=qt(Zl(x.width,y)||qr.axis.ticks.maxTickSizeRatio_Hori,i.width),d=this.preCalcTickLen={x:d.left,y:d.top,width:p,height:g}
var b="x"===n&&!v,C={systemConf:f,bound:d,horizontal:b,vertical:!b,axisOrder:r,plotRect:i,hide:T,tickObj:this.tickValueObj},k=0
if(l.axisLabel?(l.axisLabel.show=!T,l.axisLabel.transformLabel(d,i,a)):l.axisLabel=new qr.axis.AxisLabel(e,C,a,h),T)this.preCalcAxisLen="bottom"===a||"top"==a?d.height+M.bottom:d.width+M.left
else switch(k=l.axisLabel.getBBox().height,w.textAnchor="middle",a){case"left":var S=this.tickValueObj.inlineToPlot?0:this.tickValueObj.isInline?d.width:d.width+M.left
this.preCalcAxisLen=S+O+k+A
break
case"right":S=this.tickValueObj.inlineToPlot?0:this.tickValueObj.isInline?d.width:d.width+M.right
this.preCalcAxisLen=S+A+k+O
break
case"bottom":var E=this.tickValueObj.inlineToPlot?0:this.tickValueObj.isInline?d.height:d.height+M.bottom
this.preCalcAxisLen=E+_+k+P
break
case"top":E=this.tickValueObj.inlineToPlot?0:this.tickValueObj.isInline?d.height:d.height+M.top
this.preCalcAxisLen=E+P+k+_}return this.preCalcAxisLen},c.getTickValues=function(o,l,c,h,d,g,m){var b={},w={axisRotated:v,axisOrder:r,chart:t,orient:a,extent:c,maxTickSize:this.tickValueObj?this.tickValueObj.maxTickSize:null},C=g.getTicks(i,d,w),k=X(x.showAs)
S=isNaN(C.rotation)?S:C.rotation
var O=C.tickMargin,A=ve(a,M,xe(e,n,t)),_=Ae(a,S,0,null,I,A,this.tickValueObj),P="left"===a||"right"===a?"x":"y",T="left"===a||"right"===a?1:2
O[P]+=this.tickValueObj&&this.tickValueObj.isInline&&!this.tickValueObj.inlineToPlot?_.rotate[T]:0,O.dy=_.dy,_.rotate[T]=O[P],y=t.dataset.getDataType(n,r)
var E=Wl(m,i),L=p.append("g").attr("class","dummy"),z="right"===a?E.left+E.width:E.left,D="bottom"===a?E.top+E.height:E.top
L.attr("transform","translate("+z+","+D+")")
var R=L.append("g").attr("class","tick")
return function(t,e,n,r,a,i){var o=kt(t,"text",[1],".","class","dummyText")
return o.attrs({x:n.x||0,y:n.y||0,dy:n.dy||0}).attr("transform","rotate("+r+" "+n.x+" "+n.y+")"),a?e=u(i.longestTickValue,null,i):o.text(e),Lt(o,e,null,a),Pt(o,[x,f.chart,f.canvas,El]),o}(R,C.longestTickValue.formattedVal,O,S,k,C).call(function(t){b=s(E,t,L,R,C,X(d),k,_)}),L.remove(),b},c.getActualTicklabel=function(){var e=this.tickValueObj,n=e.ticks
return this.isHierarchy()&&!this.isHierarchialLevelType()&&e.tickValueIndices?function(t){var r=e.tickValueIndices.indexOf(t)
return-1!=r?n[r]:null}:t.dataObject.isWaterfallEnabled&&e.tickValueIndices?function(t){return n[t]}:function(t){return n[t]}},c.getTicksforAxisComp=function(){var e=t.dataset.getDataType(n,r)
return l()&&t.dataObject.hierarchical.categoryTree&&(e==uo||"ordinalNonLinear"==e)||o()&&t.dataObject.hierarchical.groupByTime?null:t.dataObject.isWaterfallEnabled&&"x"==n?this.tickValueObj.tickValueIndices||null:this.tickValueObj.ticks},c},qr.axis.constructTickObj=function(t,e,n,r,a,i){var o,l,s=t.systemConf
o="left"==r&&t.axes.rotated||"bottom"==r&&!t.axes.rotated?"x":"y"
for(var u=t.axes[o].count,c=0;u>c;c++){var h=s.chart.axes.yaxis
if(c>0&&"y"==o){l=i?h[c]:Fl(h[c],h[0],!1)
var d=null!=h[c]&&""!==h[c]?h[c]:{}
l.interval=d.interval,l.tickCount=d.tickCount,l.minRange=d.minRange,l.maxRange=d.maxRange,l.categories=d.categories,h[c]=l}var f="bottom"==(r=(l="x"==o?s.chart.axes.xaxis:h[c]).orient||("x"==o?t.axes.rotated?"left":"bottom":t.axes.rotated?"bottom":0==c?"left":"right"))||"top"==r?n:e
if(!0===l.show&&Vt(t,o+"axis",f)){var p=me(t,o,c)
"y"!=o||p||(p={}),"x"!=o||p||(p=c>0?{}:p)
var g=qr.axis.ticks(t,l,o,c,r,a)
p.ticks=g
var y=g.preCalcApproxAxisLength(a)
if("y"!==o||!t.axes.y.groups[c].disabled){var v=t.plotarea
"left"==r?(a.left+=y,a.width=a.width-y,v.left=a.left,v.width=a.width):"right"==r?(a.width=a.width-y,v.width=a.width):"bottom"==r?(v.height=v.height-y,v.bottom+=y,a.height=v.height,a.bottom+=v.bottom):"top"==r&&(v.height=v.height-y,v.top+=y,a.height=v.height,a.top+=v.top)}}else{var m="y"===o?t.axes.y.groups[c]:t.axes.x
m.axisLabel=m.Ticks=null}}"y"==o&&B(s.chart,"scroll")&&s.chart.scroll.enabled&&(t.svg.call(t.brush),t.brush.initialize(a))}
var Zl=function(t,e){return X(t)&&X(t)?t>e?e:t:t||e},Ql=qr.utils.fontUtils={getTextWidth:function(t,e,n,r,a){r=r||"normal",a=a||"normal",Pa.save(),Pa.font=r+" "+a+" "+(e||12)+"px "+(n||El.fontFamily)
var i=Pa.measureText(t).width
return Pa.restore(),i},getTextHeight:function(t,e,n,r,a,i){return i?e:24>e?e+3:~~(1.195*e)}}
ze.applyDefaultStyles=function(t,e,n){var r,a,i=t.svg.select(".seriesholder"),o=t.staticPaneSVG.select("g.labelholder"),l=t.chartTypes[0],s=o.selectAll('text[level^="'+e+'"],path[level^="'+e+'"]'),u=o.selectAll('text:not([level^="'+e+'"]), path:not([level^="'+e+'"])')
if("bar"===l.name)r=i.selectAll('path[level^="'+e+'"]'),a=i.selectAll('path:not([level^="'+e+'"])')
else{if("scatter"!==l.name&&"bubble"!==l.name)return
r=i.selectAll('g.scatter[level^="'+e+'"]'),a=i.selectAll('g.scatter:not([level^="'+e+'"])')}!0===n?(r.style("opacity",1),a.style("opacity",.1),s.style("opacity",1),u.style("opacity",.1)):(r.style("opacity",1),a.style("opacity",1),s.style("opacity",1),u.style("opacity",1))},ze.setState=function(t,e){t.forEach(function(t){t.active=e})},ze.updateTickEventHandler=function(t,e){var n=t.cache.hierarchical,r=!e
if(X(n)&&X(n.data)){var a,i=t.dataObject.hierarchical
if(n.data){var o=n.data.filter(function(t){return!t.seriesDisabled})
if(e&&(n.query=o.length?ze.getQuery(o[0],n.depth):"-1"),r){var l=(a=o[0]).level.split("_").slice(0,n.depth+1).map(Number),s=i.getCategoriesByLevelIndices(l),u=c.getAllChildren(s)
n.query=ze.getQuery(a,n.depth),n.data=u,ze.setState(u,!0)}}}},ze.getQuery=function(t,e){return t.level.split("_").slice(0,e+1).map(Number).slice(0,e+1).join("_")+"_"},qr.axis.polar=function(){function t(t){t.each(function(t){var u,c,h,d,f,p,g=ri(this),y=r.systemConf,v=t.axisline,m=t.tickmark,w=t.subtickmark||{},C=t.grid,k=t.ticklabel,S=k.events
null!=S&&(p=0==W(S.enabled,!0),u=S.mousemove,c=S.mouseout,h=S.click,d=S.doubleclick,f=S.cursor)
var O=t.tickOrient,A=v.show?W(v.strokeWidth,1):0,_=W(C.strokeWidth,1),P=W(k.marginLeft,5),T=W(m.size,3),M=W(w.size,2),E=+w.count||0,L=l||(n.ticks?n.ticks():n.domain()),z=function(t,e,n){if(r=[],n&&e.length>1){for(var r,a,i,o=function(t){var e=t[0],n=t[t.length-1]
return n>e?[e,n]:[n,e]}(t.domain()),l=-1,s=e.length,u=(e[1]-e[0])/++n;++l<s;)for(a=n;--a>0;)(i=+e[l]-a*u)>=o[0]&&r.push(i)
for(--l,a=0;++a<n&&(i=+e[l]+a*u)<o[1];)r.push(i)}return r}(n,L,E),D=n.range(),R=kt(g,"g",[1],".","class","subticksGroup")
R.style("stroke",w.color)
var j=kt(R,LINE_ELEMENT,z),I=kt(kt(g,"g",[1],".","class","ticksGroup"),"g",L,".","class","tick")
kt(g,go,v.show?[1]:[],".","class","domain").attr("d",function(){return"M"+zi().innerRadius(a-1).outerRadius(a).startAngle(D[0]).endAngle(D[1])(1).split(/L|M/gi)[1]}).styles({stroke:v.color,fill:Za,"stroke-width":A,"stroke-dasharray":x(v.style,A),"stroke-linecap":b(v.lineCap,v.style),"pointer-events":Za}),kt(I,LINE_ELEMENT,[1],".","class","tickmark"),kt(I,LINE_ELEMENT,[1],".","class","grid"),kt(I,fo,[1],".","class","ticklabel")
var H=I.select(fo+".ticklabel"),B=I.select(LINE_ELEMENT+".tickmark"),N=I.select(LINE_ELEMENT+".grid")
H.style("cursor",f||Ka).style("pointer-events",p?Za:$a).attr("index",function(t,e){return e}).text(function(t){return o(t)}),Pt(H,[k,y.chart,y.canvas,El]),s={data:i.map(function(t){return Fl(r.systemConf.metadata.columns[t],{columnindex:t},!0)})}
var F=function(t){e(u,d3.event,t)},Y=function(t){e(c,d3.event,t)},V=function(t){e(h,d3.event,t)},U=function(t){e(d,d3.event,t)}
fn(H,{mousemove:F,mouseout:Y,click:V,dblclick:U},{singletouchmove:F,touchend:Y,tap:V,dbltap:U})
var X,G,q,Z
switch(O){case qo:X=a-A/2,G=-(T+P),q=-T,Z=-M
break
default:X=a+A/2,G=T+P,q=T,Z=M}I.attr("transform",function(t){var e=Ut(X,n(t))
return"translate("+e[0]+","+e[1]+")"}),H.attrs({dy:function(t){var e=Xt(n(t))
return O==qo?e>Xa/2&&3*Xa/2>e?null:-Zt(e)+"em":e>Xa/2&&3*Xa/2>e?Zt(e)+"em":null},"text-anchor":function(t){var e=Xt(n(t))
return e%Xa==0?"middle":O==qo&&Xa>e||O!=qo&&e>Xa?"end":null},transform:function(t){var e=Ut(G,n(t))
return"translate("+e[0]+","+e[1]+")"}}),B.attrs({x2:function(t){return Ut(q,n(t))[0]},y2:function(t){return Ut(q,n(t))[1]}}).styles({stroke:m.color,"stroke-width":m.strokeWidth}),N.attrs({x2:function(t){return Ut(-a,n(t))[0]},y2:function(t){return Ut(-a,n(t))[1]}}).styles({stroke:C.color,"stroke-width":_,"stroke-dasharray":x(C.style,_),"stroke-linecap":b(C.lineCap,C.style)}),j.attrs({x2:function(t){return Ut(Z,n(t))[0]},y2:function(t){return Ut(Z,n(t))[1]},transform:function(t){var e=Ut(X,n(t))
return"translate("+e[0]+","+e[1]+")"}})})}function e(t,e,n){null!=t&&(s.data=s.data.map(function(t){return t.value=n,t}),Y(t,e,s,r))}var n,r,a,i,o,l,s
return t.scale=function(e){return arguments.length?(n=e,t):n},t.chartObj=function(e){return arguments.length?(r=e,t):r},t.radius=function(e){return arguments.length?(a=e,t):a},t.columnIndices=function(e){return arguments.length?(i=e,t):i},t.tickValues=function(e){return arguments.length?(l=e,t):l},t.tickFormat=function(e){return arguments.length?(o=e,t):o},t},qr.axis.polar.render=function(t,e){function n(t){var e=[],n=t+((P==Zo?k:k/2)+A*(T==qo?-1:1)),a=T==qo?ii:oi
return U.selectAll(fo).each(function(i){var o=D(this),l=Ut(t+((P==Zo?k:k/2)+O+S)*(T==qo?-1:1),j(i)),s=[r(l[0]+o.x,l[1]+o.y),r(l[0]+o.x,l[1]+o.y+o.height),r(l[0]+o.x+o.width,l[1]+o.y),r(l[0]+o.x+o.width,l[1]+o.y+o.height),n]
e.push(a(s))}),a(e)}function r(t,e){return Ha(Ia(t,2)+Ia(e,2))}function a(t,e){if(pt){return"M"+zi().innerRadius(t-1).outerRadius(t).startAngle(I[0]).endAngle(I[1])(1).split(/L|M/gi)[1]}return"M"+(e.ticks?e.ticks():e.domain()).reduce(function(n,r){var a=e(r),i=Ut(t,a)
return n+"L"+i[0]+" "+i[1]+" "},"").substring(1)+"Z"}function i(e,n,r,a){var i=v.minmaxlabels,o=i.align,s=W(i.padding,5),u=i.text,c=n.domain(),h=i.showAs,d=o==qo?a-s:"center"==o?(r+a)/2:r+s,f=i.show?"min"==h?[c[0]]:"max"==h?[c[1]]:c:[],g=kt(e,fo,f,".","class","minmaxlabels")
Pt(g,[i,l.chart,l.canvas,El]),g.attrs({"text-anchor":function(t){if("center"==o)return"middle"
var e=Xt(n(t))
return e%Xa==0?"middle":o==qo&&Xa>e||o!=qo&&e>Xa?"end":null},dy:function(t){if("center"==o)return"1em"
var e=Xt(n(t))
return o==qo?e>Xa/2&&3*Xa/2>e?null:-Zt(e)+"em":e>Xa/2&&3*Xa/2>e?Zt(e)+"em":null},transform:function(t){var e=Ut(d,n(t)),r="center"==o?s:0
return"translate("+e[0]+","+(e[1]+r)+")"}}).text(function(e,n){return u&&X(u[n])?p(u[n]+"",f,H,t):yn(N,e,B,t,"minmaxlabels")})}function o(t,e){var n=[".targetSeries",".datalabel",".minmaxlabels",".axisgroup"].filter(function(t){return t!=="."+e}).join()
V.selectAll(n).style("display",Za)
var r=D(V.node()),a=L+Ra((M-r.width)/et,(E-r.height)/tt),i=qt("minmaxlabels"===e?v.minmaxlabels.maxWidth:null,L,qt("50%",L));(L-i>a||0>=L||!isFinite(a))&&(t[e]=!0,V.selectAll("."+e).remove()),V.selectAll(n).style("display",null)}e=e||"y"
var l=t.systemConf,s=t.renderer[0],u=t.dataObject,c=t.plotarea,h=t.canvasarea,d=t.systemConf.metadata.columns,f=t.chartTypes[0],g=f.value,y=f.name,v=l.chart.plot.plotoptions[y],m="x"==e?l.chart.axes.xaxis:l.chart.axes.yaxis[0],x=+v.outerPadding||0,b=+v.maxRadius||0,w=g===qr.charttype.dial,C=m.show&&Vt(t,e+"axis",Ra(h.width,h.height)),k=C&&m.axisline.show?W(m.axisline.strokeWidth,1):0,S=W(m.ticklabel.marginLeft,5),O=W(m.tickmark.size,3),A=m.subtickmark?W(m.subtickmark.size,2):0,_=qr.utils.getVal(m.ticklabel.fontSize||l.chart.fontSize||l.canvas.fontSize||El.fontSize),P=m.orient||Zo,T=m.tickOrient,M=c.width-2*x,E=c.height-2*x,L=Ra(M,E)/2,z=$t(v,L),R=C?+v.padding||0:0
t.plotarea_approx={x:0,y:0,innerRadius:z}
var j=(st=qr.scale.constructor(t,"x"==e?Vo:Fo))[0].scale,I=j.range(),H=d[St=t.dataset.getColumnIdx(e,0)],B=H.datatype,N=H[B],F=P==qo?T===Zo?z-R-k/2-Da(A,O+S+_):z:L,Y=qr.axis.polar().scale(j).chartObj(t).radius(F).columnIndices([St]).tickFormat(function(e){return yn(N,e,B,t,"axis")}).tickValues(null),V=kt(t.svg.selectAll("g.chartgroup"),"g",[1],".","class",e+"-axis"),U=kt(V,"g",C?[m]:[],".","class","axisgroup")
U.call(Y),V.style("visibility","hidden")
var G=zi().innerRadius(!w||v.needle.show||t.datalabels.moduleExists&&ir(v.datalabels,t)?0:z).outerRadius(L).startAngle(I[0]).endAngle(I[1]),q=kt(V,go,[1],".","class","dummyArc").attr("d",G(1)),Z=kt(V,"g",[1],".","class","datalabel"),Q=kt(V,"g",[1],".","class","targetSeries")
if(w){if(!s){s=t.renderer[0]=Kl(y),t.rendererConf=[],t.rendererConf[0]=new qr.plot.rendererConf,ba.setRendererProp(t,s,t.seriesdata[0],0,0,[])}s.firedList={},qr.labelRenderer&&Z.call(qr.labelRenderer.dial().renderer(s).args([t.seriesdata,0]),t.labelHandler,Z),i(V,j,L,z),Is.targetMarker(Q,L,z,t)
var K=+v.needle.width/2||7
kt(Z,"circle",v.needle.show?[1]:[]).attrs({r:K,transform:"translate("+K+","+K+")"})}var $=D(q.node()),J=D(V.node()),tt=$.height/L,et=$.width/L,nt=L+Ra((M-J.width)/et,(E-J.height)/tt),rt={}
if(w){rt=function(){var t={}
return o(t,"axisgroup"),o(t,"minmaxlabels"),o(t,"targetSeries"),s.firedList=t}(),J=D(V.node())
nt=(nt=L+Ra((M-J.width)/et,(E-J.height)/tt))>b?b:nt,nt=isFinite(nt)&&nt>0?nt:0}z=$t(v,nt)-(P==qo?(+v.strokeWidth||0)/2:0),F=(P==qo?T==qo?z:z-(n(L)-L):nt)-(T==qo?k/2:0)-(P==qo?R:0),Y.radius(F),rt.axisgroup||U.call(Y),G.outerRadius(nt).innerRadius(!w||v.needle.show||t.datalabels.moduleExists&&ir(v.datalabels,t)?0:z),q.attr("d",G(1)),w&&(rt.minmaxlabels||i(V,j,nt,z),Is.targetMarker(Q,nt,z,t))
$=D(q.node())
var at=Gt(J=D(V.node()),c.width,c.height,nt,0)
V.attr("transform","translate("+(c.left+at[0])+","+(c.top+at[1])+")"),V.style("visibility",null)
var it=(T==qo&&P==Zo?n(nt):nt-(P==qo?0:k/2))-(P==qo?0:R),ot=T==qo?(nt-it)*et:0,lt=T==qo?(nt-it)*tt:0
if(t.plotarea_approx={x:at[0],y:at[1],width:$.width-k-ot,height:$.height-k-lt,radius:it,actualRadius:nt,innerRadius:z},q.remove(),Z.remove(),Q.remove(),u.isPolarAxisCategory){e="y"
var st,ut=l.chart.axes.yaxis[0],ct=(L=t.plotarea_approx.radius,t.plotarea_approx.x),ht=t.plotarea_approx.y,dt=(P=ut.orient||Yo,W(ut.tickmark.size,6)),ft=W(ut.ticklabel[P==Fo?"marginRight":"marginLeft"],3),pt="arc"===ut.grid.type,gt=(st=qr.scale.constructor(t,Fo))[0].scale,yt=ut.reversed&&!u.isstacked()?[0,L]:[L,0]
gt.origRange=yt,gt.range(yt)
var vt={left:t.plotarea.left,top:t.plotarea.top,width:L,height:L},mt=me(t,e,0),xt=qr.axis.ticks(t,ut,"y",0,P,vt)
mt.ticks=xt,xt.preCalcApproxAxisLength(vt)
var bt=xt.getTickValues(L,L,null,null,L/20,mt.Ticks),wt=t.userdata.metadata,Ct=wt.axes.y[0].length>1,St=t.dataset.getColumnIdx(e,0),Ot=(B=wt.columns[St].datatype,N=Ct&&"y"==e?pe(0,t):wt.columns[St][B],u.isStackedPercentChart&&"y"==e?wn:yn),At=qr.axis.get().orient(P).scale(gt).tickPadding(ft).tickSize(dt,0).plotarea({width:L,height:L}).systemconf(t.systemConf).chartObj(t).tickRotation(bt.rotation).preCalcTickLen(xt.preCalcTickLen).tickValues(bt.ticks).tickFormat(function(e){var n=Ot(N,e,B,t,"axis")
d3.select(this).text(n)}).columnIndices(Ct&&"y"==e?wt.axes.y[0]:[St]),_t=t.svg.selectAll("g.y-axis").data(ut.show?[ut]:[])
_t.call(At,e,0).attr("transform","translate("+(ct+t.plotarea.left)+","+(ht+t.plotarea.top-L)+")"),_t.exit().remove()
var Tt=_t.selectAll(".tick")
Tt.append(go)
Tt.select(go).attr("transform",function(t){return"translate(0,"+(L-gt(t))+")"}).attr("d",function(t){return a(L-gt(t),j)}).styles({fill:Za,stroke:ut.grid.color,"stroke-width":ut.grid.strokeWidth}),U.selectAll(go+".domain").attr("d",function(){return a(L,j)}),gt.range(yt.reverse()),st[0].eventscale=gt}},qr.plot.render=function(t){var e=t.systemConf.chart.plot.renderer.mode.toLowerCase(),n=t.chartTypes[0],r={mode:qr.chartcategory.svgOnly.indexOf(n.value)>-1||t.dataObject.pieWithAxis?"svg":e.toLocaleLowerCase()},a={}
if(a.labelQueue=[],a.notesArray=[],a.labelArray=[],t.rendererConf||(t.rendererConf=[]),"function"!=typeof qr.plot[r.mode+"Renderer"])throw new SyntaxError(r.mode+"Renderer not found")
return r[r.mode]=qr.plot[r.mode+"Renderer"](t,a),r.draw=function(e){t.chartRendered=!1,this[this.mode].draw(e)},r},ba.renderCompletedEvents=function(t,e,n){var r,a=t.systemConf,i=t.dataObject.hasLevelMarker&&!t.isAxisCategory,o=(t.isAxisCategory||t.dataObject.isPolarAxisCategory)&&!t.dataObject.pieWithAxis||i,l=t.renderer,s=!1
t.isAxisCategory||t.dataObject.isPolarAxisCategory?setTimeout(function(){s=!0},t.axes.animationDuration+17):s=!0
var u=setInterval(function(){if(et()&&(t.chartRendered=!0),t.destroying)return!0
for(r=l.length;r--;){if(!0!==l[r].chartRendered||!s)return!1
n.notesArray=l[r].commonRendererProp().notes()}return function(){try{Ye(t,a.chart.plot.events,0,e?"onreload":"onload"),De(t,n,!(o&&e)),t.handleHiddenContainer(!0),Ye(t,a.canvas.events,0,e?"onreload":"onload")}catch(e){qr.Chart.helpers.handleErrors(t,e)}}(),t.chartRendered=!0,clearInterval(u),!0},1e3/60)
o&&De(t,n,i||e)},ba.arrangeSeriesRenderingOrder=function(t){var e=t.seriesdata,n=qr.DataProcessor.helpers
if(t.dataObject.isCombinationalChart){var r={defaultType:0,area:0,bar:1,line:2,bubble:3,bubblepie:4,scatter:5},a=t.userdata.seriesdata.type,i=Yl(e)
return i.map(function(t,e){return t.seriesidx=e,t}),i.sort(function(t,e){var i=n.getChartType(t.type||a,"string"),o=n.getChartType(e.type||a,"string"),l=null==r[i]?r.defaultType:r[i],s=null==r[o]?r.defaultType:r[o],u=t.seriesidx,c=e.seriesidx
return s>l?-1:l>s?1:c>u?-1:u>c?1:0}),i}return e},ba.setRendererProp=function(t,e,n,r,a,i){var o=t.chartTypes[r],l=o.name,s=o.value,u=t.systemConf,c=qr.DataProcessor.helpers;(function(e,n,r,a,o){var l=t.seriesdata[r].color||t.seriesColor[r%t.seriesColor.length],s=t.seriesdata[r].yaxiscolumnorder,h=c.getParsedYAxisOrder(s)
t.rendererConf[r].chartObj(t).dataset(t.dataset).axisrotated(t.dataObject.getAxisRotated()).yaxiscolumnorder(h).hasNegValue(t.dataObject.containsNegativeData(h)).stacked(t.dataObject.isstacked(o)).commonPlotOptions(t.systemConf.chart.plot.plotoptions[a]).color("bubblepie"==a?t.seriesColor:t.isAxisCategory?function(e,n,r,a,i,o){var l=u.chart.axes.xaxis.threshold.coloroverlay,s=null!=u.chart.axes.yaxis[i]&&null!=u.chart.axes.yaxis[i].threshold?u.chart.axes.yaxis[i].threshold.coloroverlay:null,c=l.show||null!=s&&s.show
if(c){var h=null!=s&&s.show?s:l.show?l:null,d=null!=s&&s.show?"y":l.show?"x":null,f=c?qr.axis.threshold.overlay(t,"continous"):null,p="y"===d?i:0
return t.rendererConf[a].threshold(c?h:null).thresholdType(d).colorOverlay(c?qr.axis.threshold.overlay(t,"discrete",h):null),"bar"==o||"scatter"==o||"bubble"==o?r:f(r,h,p,d)}return r}(0,0,l,r,h,a):t.dataObject.isPolarAxisCategory?l:t.seriesColor).notes(i.notesArray).updateLabelArrayAndLabelQueue(i.labelArray,i.labelQueue)})(0,0,r,l,s),e.commonRendererProp(t.rendererConf[r])
var h=t.seriesdata[r].yaxiscolumnorder,d=c.getParsedYAxisOrder(h)
if(e.chartRendered=!1,t.xymultiRenderer||t.dataObject.isPolarAxisCategory){var f=t.axes.y.groups[d].scale
t.rendererConf[r].xscale(t.axes.x.scale).yscale(f).datasetIndex(r).renderingOrderIndex(a),i.labelArray=t.rendererConf[r].params.labelArray,i.labelQueue=t.rendererConf[r].params.labelQueue}if(Xe(s)&&!$e(s)&&(e.bandwidth1(t.barscale1).bandwidth2(t.barscale2),i.image||e.barDatasetIndex(i.barDatasetIndex),null!=n.disabled&&n.disabled||(i.barDatasetIndex=i.barDatasetIndex+t.seriesdata[r].data.length)),Ze(s)){var p=t.rendererConf[r].params
p.categoryColorConfig=function(t,e){return{cascaded:t&&t.cascadeCategories?Fl(e.cascadeCategories,t.cascadeCategories,!0):e.cascadeCategories,rising:t&&t.risingCategories?Fl(e.risingCategories,t.risingCategories,!0):e.risingCategories,falling:t&&t.fallingCategories?Fl(e.fallingCategories,t.fallingCategories,!0):e.fallingCategories}}(t.seriesdata[r].plotoptions,p.commonPlotOptions)}},ba.saveSeriesdataInRenderer=function(t,e){var n=t.rendererConf[e].params,r=n.xscale,a=n.yscale,i=n.yaxiscolumnorder,o=t.dataset,l=o.getDataType("x"),s=o.getDataType("y",i),u=t.seriesdata[e].data,c=t.renderer[e]
if(l==uo||s==uo){c.seriesdataAfterUpdate=[]
var h=qr.DataProcessor.helpers,d=(h.isCatNull(o,"x"),h.isCatNull(o,"y",i),l==uo?r.domain():null),f=s==uo?a.domain():null
u.forEach(function(e,n){c.seriesdataAfterUpdate[n]=t.dataObject.updateSeriesdatabyCategories(I(e),d,f,i)})}else c.seriesdataAfterUpdate=null},qr.plot.rendererConf=function(){var t={}
return t.params={},t.xscale=function(e){return arguments.length?(t.params.xscale=e,t):t.params.xscale},t.yscale=function(e){return arguments.length?(t.params.yscale=e,t):t.params.yscale},t.stacked=function(e){return arguments.length?(t.params.stacked=e,t):t.params.stacked},t.datasetIndex=function(e){return arguments.length?(t.params.datasetIndex=e,t):t.params.datasetIndex},t.renderingOrderIndex=function(e){return arguments.length?(t.params.renderingOrderIndex=e,t):t.params.renderingOrderIndex},t.axisrotated=function(e){return arguments.length?(t.params.axisrotated=e,t):t.params.axisrotated},t.commonPlotOptions=function(e){return arguments.length?(t.params.commonPlotOptions=e,t):t.params.commonPlotOptions},t.color=function(e){return arguments.length?(t.params.color=e,t):t.params.color},t.chartObj=function(e){return arguments.length?(t.params.chartObj=e,t):t.params.chartObj},t.notes=function(e){return arguments.length?(t.params.notesArray=e,t):t.params.notesArray},t.updateLabelArrayAndLabelQueue=function(e,n){return arguments.length?(t.params.labelArray=e,t.params.labelQueue=n,t):[t.params.labelArray,t.params.labelQueue]},t.hasNegValue=function(e){return arguments.length?(t.params.hasNegValue=e,t):t.params.hasNegValue},t.dataset=function(e){return arguments.length?(t.params.dataset=e,t):t.params.dataset},t.yaxiscolumnorder=function(e){return arguments.length?(t.params.yaxiscolumnorder=e,t):t.params.yaxiscolumnorder},t.threshold=function(e){return arguments.length?(t.params.threshold=e,t):t.params.threshold},t.thresholdType=function(e){return arguments.length?(t.params.thresholdType=e,t):t.params.thresholdType},t.colorOverlay=function(e){return arguments.length?(t.params.colorOverlay=e,t):t.params.colorOverlay},t},qr.plot.svgRenderer=function(t,e){var n={},r=t.systemConf,a=qr.DataProcessor.helpers
return n.draw=function(n){t.dataset.getDataType("x")==uo&&t.isAxisCategory&&qr.scale.barBandwidth(t),e.barDatasetIndex=0
var i,o=[]
t.chartRendered=!1
var l=t.dataObject.isCombinationalChart,s=l?ba.arrangeSeriesRenderingOrder(t):t.seriesdata
t.seriesdata.forEach(function(u,c){var h=s[c],d=l?h.seriesidx:c
if(!(d>0)||t.xymultiRenderer||t.dataObject.isPolarAxisCategory){(i=a.getChartType(h.type||t.userdata.seriesdata.type,ho))==qr.charttype.bubblepie&&N(t.bubblePieRendererIndex)&&(t.bubblePieRendererIndex=d)
var f=[],p=qr.charttypenames.get(i),g=h.plotoptions,y=Bt(r.chart.plot.plotoptions[p],g,t,p),v=y.enabled,m=y.type
null==t.renderer[d]&&(t.renderer[d]=Kl(p),t.rendererConf[d]=new qr.plot.rendererConf),t.renderer[d].chartRendered=!1,0==c&&(Ye(t,r.chart.plot.events,0,"init"),t.hideLoading(t.container)),v&&!n&&(Ge(i)||Ue(i))&&[zo,Eo,_o,vo,Oo,wo].indexOf(m)<0?(o[d]=!1,f[d]=setInterval(function(){t.renderer[d].chartRendered&&clearInterval(f[d]),!o[d]&&(0==d||d>0&&t.renderer[d-1].chartRendered)&&(ba.setRendererProp(t,t.renderer[d],h,d,c,e),$l(t,h,t.renderer[d]),o[d]=!0)},10)):(ba.setRendererProp(t,t.renderer[d],h,d,c,e),$l(t,h,t.renderer[d]))}}),ba.renderCompletedEvents(t,n,e)},n}
var Kl=function(t){switch(t){case"waterfall":case"gantt":case"bullet":t="bar"
break
case"web":case"arearange":t="area"
break
case"bubble":t="scatter"}return new xa[t]},$l=function(t,e,n,r){function a(t,e,n){return t.select("g."+e).attr("transform","translate("+n.x+","+n.y+")")}if(r)n.update()
else{clearTimeout(n.renderedTimer)
var i=t.svg.selectAll("g.xychart").data([t.systemConf])
a(i,"seriesholder",{x:t.plotarea.left,y:t.plotarea.top}).datum(t.seriesdata).call(n),t.dataObject.isPolarAxisCategory&&i.selectAll("g.seriesholder").selectAll(function(){return this.childNodes}).attr("transform","translate("+t.plotarea_approx.x+","+t.plotarea_approx.y+")"),a(t.staticPaneSVG,"labelholder",{x:t.plotarea.left,y:t.plotarea.top})}}
qr.plot.imageRenderer=function(t,e){var n={}
return n.draw=function(n){t.systemConf.legend.highlightEffect.selectedSeries=Za,t.systemConf.loader.enabled=!0,t.dataset.getDataType("x")==uo&&t.isAxisCategory&&qr.scale.barBandwidth(t),e.barDatasetIndex=0
var r
t.chartRendered=!1
var a=t.dataObject.isCombinationalChart,i=a?ba.arrangeSeriesRenderingOrder(t,t.seriesdata):t.seriesdata;(function(){function e(t,e,n){return t.select("g."+e).attr("transform","translate("+n.x+","+n.y+")")}function n(e){!0===t.systemConf.chart.plot.renderer.image.addDimensionInSource&&(e+=(e.indexOf("?")>-1?"&":"?")+"WIDTH="+t.plotarea.width+"&HEIGHT="+t.plotarea.height),a.append("svg:image").attr("xlink:href",e).attr("width",Ea(t.plotarea.width)).attr("height",Ea(t.plotarea.height)).attr("x",0).attr("y",0).style("opacity",0).attr("onload",function(){t.hideLoading(t.container),t.svg.selectAll(".threshold").transition().style("opacity","1").duration(300)}).on("error",function(){throw t.chartRendered=!1,t.hideLoading(t.container),new ReferenceError("Invalid image source.")}).transition().style("opacity","1").duration(300).on("end",function(){t.chartRendered=!0})}t.chartRendered=!1
var r=t.svg.selectAll("g.xychart")
e(r,"seriesholder",{x:t.plotarea.left,y:t.plotarea.top}),e(r,"labelholder",{x:t.plotarea.left,y:t.plotarea.top})
var a=t.svg.select(".seriesholder")
t.svg.selectAll(".threshold").styles({opacity:0})
var i=t.systemConf.chart.plot.renderer.image.source
if("auto"!=i)return a.selectAll("*:not(.zmarea)").remove(),void n(i)
a.selectAll("*:not(.zmarea)").remove(),t.showLoading(t.container)
var o=t.seriesdata[0].type||t.userdata.seriesdata.type,l=getChartType(o,"string"),s=t.systemConf,u=s.chart.plot.plotoptions[l].datalabels.fontSize
u="function"==typeof u?u():u,s.chart.plot.plotoptions[l].datalabels.fontSize=u
var c=JSON.parse(JSON.stringify(s))
c.chart.plot.renderer.mode="svg",B(t.userdata,"chart.plot.datalabels.fontColor")||delete c.chart.plot.datalabels.fontColor,B(t.userdata,"chart.plot.plotoptions."+l+".datalabels.fontColor")||delete c.chart.plot.plotoptions[l].datalabels.fontColor
var h={url:t.systemConf.chart.plot.renderer.image.exportUrl,type:"POST",data:{DATA:encodeURIComponent(JSON.stringify(c)),HEIGHT:Ea(t.plotarea.height),WIDTH:Ea(t.plotarea.width)}}
t.xhr&&t.xhr.abort()
var d=function(t){var e="",n=Object.keys(t),r=0
for(var a in t)e+=a+"="+t[a],t.hasOwnProperty(n[r+1])&&(e+="&"),r++
return e}(h.data),f=io(h.url).header("Content-type","application/x-www-form-urlencoded").post(d,function(e,r){a.selectAll("image").remove()
var i=JSON.parse(r.responseText)
i.rendered&&(t.hideLoading(t.container),n(i.serverPath)),delete t.xhr})
t.xhr=f})(),t.seriesdata.forEach(function(n,o){var l=i[o],s=a?l.seriesidx:o
if(t.isAxisCategory||!(s>0)){var u=getChartType(null,"object",s,t.userdata).name
null==t.renderer[s]?(r=getChartType(l.type||t.userdata.seriesdata.type,ho),t.renderer[s]=Kl(u),t.rendererConf[s]=new qr.plot.rendererConf):t.renderer[s].commonOption=null,ba.setRendererProp(t,t.renderer[s],l,s,e),t.renderer[s].chartRendered=!1,0==o&&Ye(t,t.systemConf.chart.plot.events,0,"init")}}),ba.renderCompletedEvents(t,n,e)},n}
var Jl={}
Jl.getAvailableBound=function(t,e){var n=t.plotarea,r=n.width,a=n.height,i=Ra(r/2,qt(e.outerPadding,r/2,0)),o=Ra(a/2,qt(e.outerPadding,a/2,0))
return{x:i,y:o,width:r-2*i,height:a-2*o}},Jl.updatePlotareaByBandWidth=function(t,e){var n,r=t.dataObject
if((r.noofBarEnabledSeries||r.isCombinationalChart)&&r.allChartTypes.some(function(e){var r=qr.DataProcessor.helpers.getChartType(e,"string")
return Xe(e)?(n=t.systemConf.chart.plot.plotoptions[r],!0):void 0}),n&&n.strictBandWidth){var a=r.getCategories("x").length,i=Wl(n.padding,.2),o=n.outerPadding
o=X(o)?o:.2,o=qr.scale.getOuterPadding(c?[0,e.width]:[e.height,0],a,i,o)
var l=n.levelMarker,s=n.targetMarker||{},u=t.plotarea,c=t.axes.rotated,h=(c?e.height:e.width)/(a-i+2*o)*(1-i),d=[],f=W(l.bandWidth,h),p=W(l.maxBandWidth,h)
levelMarkerBand=Ra(f,p,h),l.enabled&&d.push(levelMarkerBand),s.enabled&&d.push(X(s.size)?Ra(10*s.size,h):0)
var g=W(n.bandWidth,levelMarkerBand),y=W(n.maxBandWidth,g)
d.push(Ra(g,y,h))
var v=Da.apply(null,d)
v=v/(1-i)*(a-i+2*o),c?(u.height=v+(u.height-e.height),u.top+=u.adjust=(e.height-v)/2):(u.width=v+(u.width-e.width),u.left+=u.adjust=(e.width-v)/2)}},qr.legutil=function(){},qr.legutil.colorpallete=Ci(),qr.legutil.colorpallete.set("greenish",["#6c6c6d","#1ba98e","#00ff80","#00ffc0","#00ffff","#40ff00","#40ff40","#40ff80","#40ffc0","#40ffff","#80ff00","#80ff40","#80ff80","#80ffc0","#80ffff"]),qr.legutil.colorpallete.set("pinkish",["#ff00ff","#ff00c0","#ff0080","#ff0040","#ff0000","#c000ff","#c000c0","#c00080","#c00040","#c00000","#8000ff","#8000c0","#800080","#800040","#800000"]),qr.legutil.colorpallete.set("countries",["#00c6e4","#faa43a","#5da5da","#60bd68","#f17cb0","#b2912f","#307d99"]),qr.legutil.colorpallete.set("saturate5",["#594f4f","#547980","#45ada8","#97843a","#518058","#975156"]),qr.legutil.colorpallete.set("ocean5",["#ff7f00","#6a4a3c","#cc333f","#eb6841","#edc951","#975156"]),qr.legutil.colorpallete.set("zoho-reports-old",["#FF465B","#04C36B","#3A92E9","#FDC33A","#D65587","#FC7C63","#51A5A9","#BFBFBF","#91CD6A","#BE9B89","#7D8DB0","#B68E2E","#C6D5B0","#D1ACCE","#E0AE60","#5CD29F","#716398","#AD8686","#FF99A8","#A0C0C0","#2D7094","#553D4E","#B2449D","#FED577","#D3D159","#AAAAAA","#7ED9D9","#F7A26D","#8ABFA2","#767676","#E36068","#A3AFC7"]),qr.legutil.colorpallete.set("zoho-reports-new",["#60bfdf","#ffa060","#aadf80","#ff6c7d","#c9ac66","#bf80bf","#df6060","#606060","#60a0df","#ff99a8","#feff60","#a0dfdf","#dfa080","#dfdfdf","#a0a060","#a080bf","#a06060","#5cd29f","#ffbe60","#bfa080","#f28fb5","#8080bf","#bfbfbf","#dfdf80","#80a060","#80a060","#a08060","#7ed9d9","#be9b89","#bf6060","#a0bf60","#fc7c63"]),qr.legutil.colorpallete.set("colors",["#0eaadd","#1ac9bb","#92c658","#dbbe56","#ee7d54","#ef4f6a","#b952ef"]),qr.legutil.colorpallete.set("flat-ui-colors",["#23a96e","#bca634","#f75a51","#39b6c5","#f9ce8d","#983a67","#634c3f","#d7dab9","#357180","#983a67","#b16b76","#7f90a0"]),qr.legutil.colorpallete.set("MEMobile",["#73c2f4","#ecd543","#e6be3f","#da7b36","#c84b37","#9c240f","#9bcedd","#ffe560","#ffe560","#c67c99","#c6db4c"]),qr.legutil.colorpallete.set("Toddler",["#f8d0db","#9be1ed","#c4ead1","#fbe2aa","#e5e5e5","#d6b65f","#be9fbf","#ffe560","#ffe560","#c67c99","#c6db4c"]),qr.legutil.colorpallete.set("BrightNDull",["#47bac1","#8ccace","#72c3f5","#71bfee","#ac66ad","#c5a0c6","#906aa6","#b29dbf","#fd9f94","#f6cac4","#ff759c","#f6acc1"]),qr.legutil.colorpallete.set("BlueShades",["#00c6e4","#6ad4e4","#a3dbe4","#c3e0e4","#e4e4e4","#c8c8c8","#aac4c8"]),qr.legutil.colorpallete.set("graphite6",["#595959","#767676","#373737","#9d9d9d","#bfbfbf","#222222"]),qr.legutil.colorpallete.set("chalk",["#FFFFFF","#FAFAFA","#CCCCCC"]),qr.legutil.colorpallete.set("map",["#FB0D0D","#53B808","#B80894","#2ADBDD"]),qr.legutil.patternPallete=Ci(),qr.legutil.imagePallete=Ci(),qr.legutil.imagePallete.set("linesndots",["01.png","02.png","03.png","04.png","05.png","06.png","07.png","08.png","09.png","10.png","11.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png"]),qr.legutil.imagePallete.set("dotsfirst",["13.png","12.png","13.png","14.png","15.png","16.png","17.png","18.png","19.png","20.png"]),qr.legutil.imagePallete.set("stones",["01.jpg","02.jpg","03.jpg"]),qr.addPattern("hatch","diagonal-line-right","5","1","null","white","1","1"),qr.addPattern("hatchDash","square,diagonal-line-right","5,5","1","transparent,{{brighter}}","transparent,transparent","1","1","0,3"),qr.addPattern("thinThickHatch","square,diagonal-line-right,diagonal-line-right","10,10,10","1,1,3","transparent,null,null","transparent","1","1","0,2.5,0"),qr.addPattern("thickHatch","diagonal-line-right","5","3","null","white","1","1"),qr.addPattern("thinHatch","diagonal-line-right","2","1","null","white","1","1"),qr.addPattern("hatchLeft","diagonal-line-left","5","1","null","white","1","1"),qr.addPattern("horizontalStripes","horizontal-line","5","1","null","white","1","1"),qr.addPattern("thinHorizontalStripes","horizontal-line","2","1","null","white","1","1"),qr.addPattern("verticalStripes","vertical-line","5","1","null","white","1","1"),qr.addPattern("thinVerticalStripes","vertical-line","2","1","null","white","1","1"),qr.addPattern("crossStripes","vertical-line,horizontal-line","5","1","null","white","1","1"),qr.addPattern("tinyHatchfill","square,diagonal-line-right","5","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("hatchfill","square,diagonal-line-right","10","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("hatchDashfill","square,diagonal-line-right","5,5","1","transparent,{{brighter}}","null,transparent","1","1","0,3"),qr.addPattern("hatchLeftfill","square,diagonal-line-left","5","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("horizontalStripesfill","square,horizontal-line","5","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("verticalStripesfill","square,vertical-line","5","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("crossStripesfill","square,square","5,5","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("checkerBoard","square,square,square","10,5,5","1","transparent","transparent,null,{{brighter}}","1","1","0,0,5"),qr.addPattern("circle","circle","10","1","null","white","1","1"),qr.addPattern("tinyCircle","circle","5","1","null","white","1","1"),qr.addPattern("crossCircle","square,circle,circle","10,5,5","1","transparent,null,{{brighter}}","transparent","1","1","0,0,5"),qr.addPattern("floatingCircle","square,circle","10,5","1","transparent,{{brighter}}","transparent","1","1","0,2.5"),qr.addPattern("dot","square,circle","5,2.5","1","transparent,{{brighter}}","transparent,transparent","1","1","0,1.25"),qr.addPattern("dotSquare","square,circle","10,2.5","1","null,{{brighter}}","transparent,transparent","1","1","0,3.75"),qr.addPattern("circlefill","square,circle","10,10","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("crossCirclefill","square,circle,circle","10,5,5","1","transparent,null,{{brighter}}","null,{{brighter}},null","1","1","0,0,5"),qr.addPattern("floatingCirclefill","square,circle","10,5","1","transparent,{{brighter}}","null,transparent","1","1","0,2.5"),qr.addPattern("dotfill","square,circle","5,2.5","1","transparent,{{brighter}}","null,transparent","1","1","0,1.25"),qr.addPattern("square","square","5","1","null","white","1","1"),qr.addPattern("squarefill","square","5","1","{{brighter}}","null","1","1"),qr.addPattern("star","star","10","1","null","white","1","1"),qr.addPattern("starfill","square,star","10,5","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("wave","waves","5","1","null","white","1","1"),qr.addPattern("wavefill","square,waves","10,10","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("cap","caps","5","1","null","white","1","1"),qr.addPattern("capfill","square,caps","10,10","1","transparent,{{brighter}}","null,transparent","1","1"),qr.addPattern("nylon","nylon","5","1","null","white","1","1"),qr.addPattern("nylonfill","square,nylon","10,10","1","transparent,{{brighter}}","null,transparent","1","1"),qr.legutil.patternPallete.set("stripes-fill",["hatchfill","hatchDashfill","checkerBoard","horizontalStripesfill","verticalStripesfill","crossStripesfill"]),qr.legutil.patternPallete.set("stripes",["hatch","thinThickHatch","hatchLeft","hatchDash","horizontalStripes","crossStripes","verticalStripes","thickHatch","thinHatch","thinVerticalStripes","thinHorizontalStripes"]),qr.legutil.patternPallete.set("dotted",["circle","tinyCircle","crossCircle","floatingCircle","dot"]),qr.legutil.patternPallete.set("dotted-fill",["circlefill","crossCirclefill","floatingCirclefill","dotfill"]),qr.legutil.patternPallete.set("shapes",["thinThickHatch","crossCircle","star","wave","cap","nylon"]),qr.legutil.patternPallete.set("shapes-fill",["checkerBoard","floatingCirclefill","squarefill","starfill","wavefill","capfill","nylonfill"]),qr.legutil.imagePallete.each(function(t,e){var n=t.map(function(t){return qr.imageFilePath+t})
qr.legutil.imagePallete.set(e,n)}),qr.legutil.getMonochromeColorPallette=function(t){var e=[0,+t.count-1],n=[+t.colorGamma[0],+t.colorGamma[1]],r=z(t.baseColor,e,n)
return Fi(t.count).map(function(t,e){return r(e)})}
var ts={}
ts.getLegendData=function(t){if(Gl.isQuantileColorScale(t)){var e=t.systemConf.legend.colorBand.ranges
if(e&&e.length)return e}return t.xymultiRenderer||t.isNonAxisMultiSeriesCategory||t.isGeoMap?t.seriesdata:t.seriesdata[0].data[0]},ts.getLegendDataLength=function(t,e){return t.xymultiRenderer||t.isNonAxisMultiSeriesCategory?e.filter(function(t){return!ts.isHiddenItem(t)}).length:e.length},ts.isHiddenItem=function(t){return t.hideInLegend},ts.getClr=function(t,e,n){return t?n.color||e:e},ts.updateBubblePieData=function(t,e,n){n.dataObject.pieWithAxis&&t.data.forEach(function(r){var a=tn(n.chartTypes[e].value)
r.forEach(function(e){e.disabled=t.disabled||!a||e.dummy})})},ts.updateHierarchyData=function(t,e,n){n.dataObject.isHierarchy&&(n.systemConf.seriesdata.chartdata[e].disabled=t.disabled)},ts.toggleChartEvents=function(t,e){var n=e?null:Za,r=[]
t.svg?((t.isAxisCategory||t.dataObject.isPolarAxisCategory)&&r.push(t.eventHandler.trackerElement),r.push(t.svg)):r.push(t.container),r.forEach(function(t){t.style("pointer-events",n)})},ts.fadeChart=function(t,e,n){e.container.selectAll("g.chartgroup,svg.static,canvas.zc-canvas,div.zcnotes").style("opacity",t?null:n)},ts.isDisabled=function(t,e,n){return e||n?t.disabled:!e},ts.isAllEnabled=function(t,e){if(!e)return e
return!t.filter(function(t){return t.disabled}).length},ts.getFilterBoxSize=function(t,e){var n=X(t.size)?+t.size:e
return[X(t.width)?+t.width:n,X(t.height)?+t.height:n]},ts.updateData=function(t,e,n){Gl.isQuantileColorScale(n)?n.axes.clr.scale=qr.scale.getScale(n,n.dataObject,null,null,null,n.dataset,"clr"):(ts.updateBubblePieData(t,e,n),ts.updateHierarchyData(t,e,n),n.dataObject.data=n.systemConf)},ts.isContinousLegend=function(t){var e=t.systemConf.legend.colorBand
if(Gl.isQuantileColorScale(t)){var n=e.ranges
if(t.dataset.getDataType("clr")===uo||n&&n.length){var r=e.type
return"continuousDiscrete"===r||"continuous"===r}return!0}return!1},ts.getColorBandDimension=function(t){var e=t.chartarea,n=t.systemConf.legend,r=He(n),a=n.colorBand,i="horizontal"===r.layout,o=n.maxWidth,l=n.maxHeight,s=a.width,u=a.height,c=Ne(n)
return i?(o=c.width,l=c.height,s=s||"40%",u=u||14):(o=c.width,l=c.height,s=s||14,u=u||"70%"),o=qt(o,e.width),l=qt(l,e.height),s=qt(s,e.width),u=qt(u,e.height),s=Ra(s,o),u=Ra(u,l),[s,u]},ts.getOrient=function(t){var e=t.hAlign,n=t.vAlign
return"horizontal"===He(t).layout?{top:"top",center:"bottom",bottom:"bottom"}[n]:{left:"left",center:"right",right:"right"}[e]},ts.getLabelIndex=function(t,e,r){var a,i=e.stops,o=e.ranges
return!(r.dataset.getDataType("clr")===uo)&&i&&i.length?i.some(function(e,n){return e===t?(a=n,!0):void 0}):o&&o.length&&o.some(function(e,r){return(n(e)?n(t)?e[0]===t[0]&&e[1]===t[1]:e[0]===t:e===t)?(a=r,!0):void 0}),a},ts.hexToRGB=function(t){if(t&&-1==t.toString().indexOf("#"))return t
var n=e(Jt(t).replace(/#/g,""),16)
return"rgb("+(n>>16&255)+","+(n>>8&255)+","+(255&n)+")"},ts.filterSelectionByColor=function(t,e,n,r){if(X(n)){var a,i=r.systemConf.legend.colorBand.ranges,o=r.axes.clr.scale,l=function(t){var e=t.data||t
return r.dataset.getClr(e)}
if(i&&i.length){var s=i[n],u=r.dataset.getDataType("clr")===uo
if(1===s.length&&!u){var c=I(o.domain())
c.splice(0,2),s=[c[2*n],c[2*n+1]]}return t.filter(function(t){var i=l(t)
return a=ae(i,r,o),u?a=a&&i===s[0]:(a=a&&i>=s[0]&&i<=s[1],i===s[0]&&(a=a&&oe(r,n)===o(i)),i===s[1]&&(a=a&&oe(r,n)===o(i))),e?a:!a})}return t.filter(function(t){var i=l(t)
return a=ae(i,r,o,null,n),e?a:!a})}return t},ts.isReversedColorAxis=function(t){var e=t.systemConf.legend
return e.colorAxis&&e.colorAxis.reversed}
var es="80%",ns="20%",rs="20%",as="100%",is="30%",os="30%",ls="50%",ss="100%"
qr.legend.render=function(t){var e=t.systemConf,n=e.legend,r=t.dataObject,a=t.seriesdata,i=Gl.isQuantileColorScale(t),o=ts.isContinousLegend(t),l=t.legend.component=o?qr.legend.continuous.get():qr.legend.discrete.get(),s=t.isAxisCategory||t.isNonAxisMultiSeriesCategory?a.some(function(t){return!ts.isHiddenItem(t)&&t.seriesname!==Ta}):!(t.chartTypes[0].value==qr.charttype.dial)
s=s||i
var u=t.canvasarea[null==n||null==n.vAlign?"height":"top"===n.vAlign||"bottom"===n.vAlign?"height":"width"]
s=!(!(null!=n&&null!=n.x&&""!==n.x&&null!=n.y&&""!==n.y)&&!Vt(t,"legend",u))&&s,function(){if(i){t.dataset.getDataType("clr")===uo&&(t.userdata.legend=t.userdata.legend||{},t.userdata.legend.colorBand=t.userdata.legend.colorBand||{},t.userdata.legend.colorBand.ranges||(t.systemConf.legend.colorBand.ranges=t.userdata.legend.colorBand.ranges=Gl.getCategories(t)))
var e=t.systemConf.legend.colorBand.ranges
e&&e.length&&(t.userdata.legend.colorBand.ranges=t.systemConf.legend.colorBand.ranges=be(t,!0))
var n=qr.scale.getScale(t,r,null,null,null,t.dataset,"clr"),a=n.domain(),o=n.copy()
o.range(Gl.getProcessedColorRange(Fi(a.length),a,t.systemConf.legend.colorBand,t))
var l=t.axes.clr||{}
l.scaleType="quantile",l.scale=n,l.indexScale=o,l.component=l.component||qr.axis.get(),t.axes.clr=l}else t.axes.clr={}}(),i&&qr.setDefaultOptions("filter",n,t.globalProp,function(t){var e=t.systemConf.legend.colorBand,n=t.dataset.getDataType("clr"),r={fillColor:Qa},a={type:"lever",shadow:"0 0 2px rgba(0,0,0,0.2)",tooltip:{enabled:!(e.ranges&&e.ranges.length||n===uo),padding:5,margin:5,backgroundColor:"white",borderColor:"rgb(51, 51, 51)",fontColor:"rgb(51, 51, 51)",fontSize:t.globalProp.fontL1Size.l5}}
return{track:r,slider:Fl(Ln(t),a,!0)}}(t),!0),s&&!0===n.enabled?(t.legendarea.show=!0,t.legendarea.element.style("display",""),function(){n.legpos,(l=l.chartarea(t.chartarea).systemconf(e).color(t.seriesColor).chartObj(t))(t.legendarea.element.datum(n))
var r,a,i,s,u=t.legendarea.element.node()
if(o){var c=D(u)
r=c.width,a=c.height,s=c.y,i=c.x}else r=u.offsetWidth,a=u.offsetHeight,s=u.offsetTop,i=u.offsetLeft
var h=null!=n.x&&""!==n.x&&null!=n.y&&""!==n.y
n.marginLeft=+n.marginLeft,n.marginRight=+n.marginRight,n.marginTop=+n.marginTop,n.marginBottom=+n.marginBottom
var d=He(n),f="vertical"===d.layout,p=!f,g=0,y=0,v=d.hAlign,m=d.vAlign,x=function(){y=a+n.marginTop+n.marginBottom,t.chartarea.height-=y,t.plotarea.height-=y,"top"===n.vAlign&&(t.chartarea.top+=y,t.plotarea.top+=y),t.legendarea.adjust="x"},b=function(){g=r+n.marginLeft+n.marginRight,t.chartarea.width-=g,t.plotarea.width-=g,"left"===n.hAlign&&(g=r+n.marginLeft+n.marginRight,t.chartarea.left+=g,t.plotarea.left+=g),t.legendarea.adjust="y"}
h||(p?"top"===m||"bottom"===m?x():"center"===m&&b():f&&("left"===v||"right"===v?b():"center"===v&&x())),t.legendarea.x=i,t.legendarea.y=s,t.legendarea.width=r,t.legendarea.height=a}()):(t.legendarea.show=!1,t.legendarea.element.style("display",Za),!o&&qr.legend.events(t,t.legendarea.element.selectAll("li.series"),{allSelected:!0,isFirstClickAfterDeselection:!1}))},qr.legendHighlight=function(t,e){function n(n,r){function a(e,n){var u,c
if($e(e)){u=i.selectAll("g.heatmapseries_"+n).selectAll("path")}else if(Xe(e)){u=i.selectAll("g.barseries_"+n).selectAll("path.zcbar")}else if(e==qr.charttype.line){var h=i.selectAll("g.lineseries_"+n)
u=h.selectAll("path.line"),c=h}else if(Ue(e)||e==qr.charttype.web){var d=i.selectAll("g.areaseries_"+n)
u=d.selectAll("path.area"),c=d}else{if(Ge(e)){var p=i.selectAll("g.scatterseries_"+n)
u=p.selectAll("g.scatter")
var g=(u=b(u,!0,r,t)).selectAll("path.outer"),y=u.selectAll("path.inner")
return l.push(g,y),o.push(e,e),c=p,void s.push(c)}if(e===qr.charttype.bubblepie){u=i.selectAll("g.piegroup").selectAll("path#arc_"+n)}else if(Je(e)){u=i.selectAll("g.piegroup").selectAll(X(r)?"path":"path#arc_"+n)}else if(e==qr.charttype.funnel){u=i.selectAll("g.funnelgroup").selectAll("g.trapezoidgroup").selectAll(X(r)?"path":"path#funnel"+n)}else if(e==qr.charttype.pyramid){u=i.selectAll("g.pyramidgroup").selectAll(X(r)?"g":"g#section_"+n)}else if(e==qr.charttype.wordcloud){u=i.selectAll("g.wordcloudgroup").selectAll("text.series_"+n)}else if(-1!=qr.chartcategory.hierarchy.indexOf(e)){u=i.selectAll("g.hierarchychart").selectAll(".series_"+n)}}u=b(u,!0,r,t),l.push(u),o.push(e),s.push(c),(Ue(e)||e==qr.charttype.web)&&a(qr.charttype.line,n),e==qr.charttype.line&&f(r)&&a(qr.charttype.scatter,n)}var i=e.selectAll("g.seriesholder"),o=[],l=[],s=[]
return a(x(null,"object",n,v).value,n),{selectedSeries:l,charttypes:o,parentSeries:s}}function r(n,r){function a(e,n){var c,h
if(t.isAxisCategory||t.isNonAxisMultiSeriesCategory)t.seriesdata.forEach(function(a,d){if(1!=a.disabled&&(X(r)?d===n:d!==n)){h=e||x(null,"object",d,v).value
var f=X(r)?n:d
if($e(h)){var p=u.selectAll("g.heatmapseries_"+f)
c=p.selectAll("path")}else if(Xe(h)){var g=u.selectAll("g.barseries_"+f)
c=g.selectAll("path.zcbar")}else if(h==qr.charttype.line){var y=u.selectAll("g.lineseries_"+f)
c=y.selectAll("path.line")}else if(Ue(h)||h==qr.charttype.web){var m=u.selectAll("g.areaseries_"+f)
c=m.selectAll("path.area"),i=m}else{if(Ge(h)){var w=u.selectAll("g.scatterseries_"+f)
c=w.selectAll("g.scatter")
var C=(c=b(c,!1,r,t)).selectAll("path.outer"),k=c.selectAll("path.inner")
return o.push(C,k),s.push(h,h),void l.push(f,f)}if(-1!=qr.chartcategory.hierarchy.indexOf(h)){var S=u.selectAll("g.hierarchychart")
c=S.selectAll(".series_"+f)}else if(h==qr.charttype.wordcloud){var O=u.selectAll("g.wordcloudgroup")
c=O.selectAll(".series_"+f)}else h===qr.charttype.bubblepie&&(c=u.selectAll("g.piegroup").selectAll("path#arc_"+d))}c=b(c,!1,r,t),o.push(c),l.push(d),s.push(h)}})
else{var d,p=function(){var e=ri(this),a=X(r)?!b(e,!1,r,t).empty():this.getAttribute("id")!=d+n
return a&&(o.push(e),l.push(n),s.push(h)),a}
if(Je(h=e||x(null,"object",n,v).value))d="arc_",c=u.selectAll("g.piegroup").selectAll("path").filter(p)
else if(h==qr.charttype.funnel)d="funnel",c=u.selectAll("g.trapezoidgroup").selectAll("path").filter(p)
else if(h==qr.charttype.pyramid){d="section_"
var g=u.selectAll("g.pyramidgroup")
c=g.selectAll("g").filter(p)}}(Ue(h)||h==qr.charttype.web)&&a(qr.charttype.line,n),h==qr.charttype.line&&f(r)&&a(qr.charttype.scatter,n)}var i,o=[],l=[],s=[],u=e.selectAll("g.seriesholder")
return a(null,n),{unselectedSeries:o,indices:l,charttypes:s,parentSeries:i}}function a(t,e,n,r,a){if(null!=n&&n.constructor==Object&&null!=t&&null!=t.node()){var i=o(t,r,a),l={},s=h(r)
for(var u in n)if(n.hasOwnProperty(u)){s?(l[u]=l[u]||[],t.each(function(){l[u].push(d3.select(this).style(u))})):l[u]=t.styles(u)
var c=n[u]
Ll.SAFARI||Ll.IE?t.attr(u,function(t){return qr.utils.getVal(c,[t,r])}).style(u,function(t){return qr.utils.getVal(c,[t,r])}):t.style(u,function(t){return qr.utils.getVal(c,[t,r])})}g[i]=g[i]||l,"select"===a&&p.raiseSelection(e||t)}}function i(e,n,r,a){if(null!=n&&n.constructor==Object&&null!=e&&null!=e.node()){if("svg"!==t.plot.renderer.mode)return void l(e,!1)
var i=o(e,r,a),s=g[i],u=h(r)
for(var c in s)if(s.hasOwnProperty(c)){var d=s[c],f=function(){return u?d[p++]:d},p=0
Ll.SAFARI||Ll.IE?e.style(c,f).attr(c,f):e.style(c,f)}}}function o(t,e,n){var r=t.node(),a=r.localName,i=r.getAttribute("class"),o=r.getAttribute("id"),l=a+"_"+e
return null!=i&&(l+="_"+i),null!=o&&(l+="_"+o),null!==n&&(l+="_"+n),l}function l(t,e){t.style("visibility",e?"visible":"hidden")}function s(e){return We(t)?/(area|arearange)/.test(e)?"moody":"strokeEnlarge":/(bar|bullet|gantt|area|arearange|pie|funnel|pyramid|web|sunburst|waterfall)/.test(e)?"hatchfill":"heatmap"===e||"geoheatmap"===e?"tinyHatchfill":/(treemap|wordcloud)/.test(e)?"blackyBorder":"strokeEnlarge"}function u(t,e,r){p.selSeriesObj=n(e,r)
for(var i=p.getLegendHighlightEffect(e,"selectedSeries"),o=p.selSeriesObj.selectedSeries,l=p.selSeriesObj.charttypes,s=p.selSeriesObj.parentSeries,u=o.length,c=0;u>c;c++){var h=qr.charttypenames.get(l[c]),d=p.getEffect(i,h,null,null,e)
a(o[c],s[c],d,e,"select")}}function c(t,e,n,r){if(t.chartRendered){var a=t.highlightContext||(t.highlightContext=Un(t,"highlight-canvas")),i=(t.systemConf,t.legendHighlight.getLegendHighlightEffect(n,"selectedSeries"))
if(t.dataObject.isPolarAxisCategory&&a.translate(t.plotarea_approx.x,t.plotarea_approx.y),i!==Za){var o=t.chartTypes[n],l=o.name,s=o.value,u=Vn(l),c=t.seriesdata[n],h=null,d=t.isNonAxisMultiSeriesCategory&&!t.dataObject.isPolarAxisCategory?0:n
if(ba.setRendererProp(t,u,c,d,d,{labelQueue:[]}),m&&(Ue(s)||Ge(s)))h=t.legendHighlight.getEffect(i,s)
else switch(l){case"bar":case"bullet":case"area":case"arearange":case"heatmap":case"treemap":case"web":var f=t.systemConf.chart.plot.plotoptions[l].fillOpacity,g=Rl[i]
g&&(h=function(t,e,n,r){return t.bgClr_base=Ms.rgba(e,n),t.stroke="transparent,white,white",Dl.get(Es,"canvasPatternFill",t,{chartObj:r})}(g,p.baseClr,f,t))
break
case"scatter":case"bubble":case"line":case"wordcloud":h=t.legendHighlight.getEffect(i,s)}Wn(t,c,u,a,h,r)}}}function h(e){var n=x(null,ho,e,v)
return-1!=qr.chartcategory.hierarchy.indexOf(n)||m||qe(n)||t.rendererConf&&t.rendererConf[t.isAxisCategory?e:0].thresholdType}function d(){if(t.dataObject.isHierarchy){var e=p.getEffect(p.getLegendHighlightEffect(0,"selectedSeries"),t.chartTypes[0].name),n=Object.keys(e)
return n.length>0&&n.some(function(t){return"fill"!==t})}return!(!t.dataObject.noofAreaEnabledSeries&&!t.dataObject.noofAreaRangeEnabledSeries)||void 0}function f(t){return Ll.IE||Ll.SAFARI||X(t)}var p={},g={},y=t.defsLocation,v=t.userdata,m=!t.nochartdata&&Gl.isQuantileColorScale(t),x=qr.DataProcessor.helpers.getChartType,b=ts.filterSelectionByColor
return p.highlightSelectedSeries=function(e,r,a){if(p.baseClr=function(t,e,n){if(X(n)){var r=t.systemConf.legend.colorBand.ranges
return r&&r.length?oe(t,n):t.axes.clr.scale((n[0]+n[1])/2)}return oe(t,e)}(t,r,a),t.isGeoMap)(function(t,e,n,r){if(p.previousFilterIndex!==r){var a=t.eventHandler.mapEvents,i=a.getPointsByIndex(n,r),o=t.dataObject.getMapFeaturesByDataPoint(i,"array"),l=a.getHighlightEffect(n,null,"selectedSeries","legend")
a.highlightPoints(o,"feature",l),p.previousFilterIndex=r}})(t,0,r,a)
else switch(t.plot.renderer.mode){case"svg":u(0,r,a)
break
case"canvas":c(t,0,r,a)
break
default:(function(e,r){if(p.getLegendHighlightEffect(r,"selectedSeries")!==Za){p.baseClr=oe(t,r)
var a=t.chartTypes[r],i=a.name,o=a.value,s=n(r)
if(s.selectedSeries[0].length>0)return void l(s.selectedSeries[0],!0)
if(t.chartRendered){t.systemConf.chart.plot.animation.enabled=!1,t.systemConf.chart.plot.plotoptions[i].animation.enabled=!1,t.seriesdata[r].plotoptions&&t.seriesdata[r].plotoptions.animation&&(t.seriesdata[r].plotoptions.animation.enabled=!1)
var c=Kl(i),h=t.systemConf.seriesdata.chartdata[r],d=0
if(o===qr.charttype.bar||o===qr.charttype.stkdbar)for(var f=0;r>f;f++)a=t.chartTypes[f],o=a.value,void 0!=t.seriesdata[f].disabled&&t.seriesdata[f].disabled||!Xe(o)||(d+=t.seriesdata[f].data.length)
ba.setRendererProp(t,c,h,r,r,{labelQueue:[],barDatasetIndex:d}),$l(t,h,c),u(0,r)}}})(0,r)}},p.highlightUnselectedSeries=function(t,e,n){for(var i=r(e,n),o=i.unselectedSeries,l=i.indices,s=i.charttypes,u=o.length,c=0;u>c;c++){var h=qr.charttypenames.get(s[c]),d=this.getLegendHighlightEffect(l[c],"unselectedSeries"),f=p.getEffect(d,h,null,null,l[c])
a(o[c],null,f,l[c],"unselect")}},p.reset=function(e,a,o,l){if(t.isGeoMap)p.previousFilterIndex=null,t.eventHandler.mapEvents.clearHighlightedPoints()
else switch(t.plot.renderer.mode){case"svg":(function(t,e,r){p.selSeriesObj=n(e,r)
for(var a=p.getLegendHighlightEffect(e,"selectedSeries"),o=p.selSeriesObj.selectedSeries,l=p.selSeriesObj.charttypes,s=o.length,u=0;s>u;u++){var c=qr.charttypenames.get(l[u]),h=p.getEffect(a,c,null,null,e)
i(o[u],h,e,"select")}})(0,a,o),function(t,e,n){p.unselSeriesObj=r(e,n)
for(var a=p.unselSeriesObj.unselectedSeries,o=p.unselSeriesObj.indices,l=p.unselSeriesObj.charttypes,s=a.length,u=0;s>u;u++){var c=qr.charttypenames.get(l[u]),h=p.getLegendHighlightEffect(o[u],"unselectedSeries"),d=p.getEffect(h,c,null,null,o[u])
i(a[u],d,o[u],"unselect")}}(0,a,o)
break
case"canvas":t.container.select(".highlight-canvas").style("visibility","hidden")}!1!==l&&(g={},this.resetSelection())},p.getLegendHighlightEffect=function(e,n,r){var a=x(null,"string",e,v),i=x(null,ho,e,v),o=t.isAxisCategory||t.isNonAxisMultiSeriesCategory?t.seriesdata[e].plotoptions:t.seriesdata[0].plotoptions,l=t.systemConf.chart.plot.plotoptions[a],u=t.systemConf.legend.highlightEffect[n],c=o&&o.legendHighlightEffect&&l.legendHighlightEffect?qr.utils.getValueOfPlotOptions(o.legendHighlightEffect,l.legendHighlightEffect)(n):l.legendHighlightEffect&&l.legendHighlightEffect[n]
if("plot"===r)return c||(u&&u!==Za?u:s(a))
var h="selectedSeries"===n&&m&&(Ue(i)||i===qr.charttype.line)?"strokeEnlarge(6)":s(a)
return c||u||h},p.getEffect=function(e,n,r,a,i,o){function l(e,r){return"waterfall"==n?Cr(e,t.renderer[r].commonRendererProp().params.categoryColorConfig,p.baseClr):p.baseClr}r=r||p.baseClr
var u=!!/(waterfall)/.test(n),c=Y(e,t,r=u?l:r,Rl,o||"legend")
if(c&&c.constructor==Object)return c
e=null===e||function(t,e){return/(line|scatter)/.test(e)&&/(((\D)+fill$)|illuminate|moody|flip)/.test(t)}(e,n)?s(n):e
var h={}
if(t.patternPallete&&/(flip|moody|illuminate)/.test(e)){var d=t.patternPallete[(i||0)%t.patternPallete.length],f=Rl[d]?Rl[d]:O(d),g=function(n,a){var i=u?l(n,a):r
if(f.ele)f.bgClr_base=te(i,1,"darker",xi)
else{var o="flip"===e?i:te(i,1,"moody"===e?"darker":"brighter",xi)
if(f.bgClr_base=o,f.stroke_base=o,"flip"===e){var s=(f=Yl(f)).bgClr_base
f.bgClr_base=f.stroke_base,f.stroke_base=s
var c=tt(f.bgClr),h=tt(f.stroke)
f.bgClr=h,f.stroke=c}}var d=Dl.get(jl,"svgPatternFill",f,{chartObj:t})
return"url("+y+"#"+d+")"}
h.fill=u?g:g()}else if(/(saturate|grayscale|blur|glow|shadow|boxShadow)/.test(e)){var v,x=/(saturate|grayscale)/.test(e)?"colorMatrix":"dropShadow"
switch(e){case"saturate":v={type:"saturate",values:"0.3"}
break
case"grayscale":v={type:"matrix",values:".33 .33 .33 0 0 .33 .33 .33 0 0 .33 .33 .33 0 0 0 0 0 1 0"}
break
case"blur":v={blur:6,source:"SourceGraphic"}
break
case"glow":v={blur:3,color:"gold"}
break
case"shadow":v={dx:5,dy:5,blur:3}
break
case"boxShadow":h.fill=r,h.stroke="white",v={dx:0,dy:0,blur:5,color:"rgba(0,0,0,0.3)"}}var b=Dl.get(Hl,x,v,{chartObj:t})
h.filter="url("+y+"#"+b+")"}else if(/(moody|illuminate)/.test(e)){var w="moody"===e,C=function(t,e){var n=u?l(t,e):r
return-1!=n.indexOf("url")?w?"grey":"silver":te(n,.6,w?"darker":"brighter",xi)}
h.fill=u?C:C()}else if(e.indexOf("strokeEnlarge")>-1){var k=e.split(/(\d+)/g)[1]
if(h["stroke-width"]=X(k)?+k:3,m&&(h.visibility=$a),a)for(var S in a)h[S]=a[S]}else if("fadeOut"===e)h["fill-opacity"]=h["stroke-opacity"]=.3
else if("blackyBorder"===e)h.stroke="rgba(0,0,0,0.5)",h["stroke-width"]=1
else if("invert"===e)h.fill="white",h.stroke=r,h["stroke-width"]=1,h["paint-order"]=null
else if("ridge"===e)h.fill=r,h.stroke="white",h["stroke-width"]=7
else if(e!==Za){if(f=Rl[e]){C=function(n,a){var i=u?l(n,a):r,o=Rl[e]
o.bgClr_base=i,o.stroke="transparent,white,white"
var s=Dl.get(jl,"svgPatternFill",o,{chartObj:t})
return"url("+y+"#"+s+")"}
h.fill=u?C:C()}else h.fill=r}return h},p.raiseSelection=function(t){d()&&t.raise()},p.resetSelection=function(){if(d())if(t.dataObject.noofAreaEnabledSeries||t.dataObject.noofAreaRangeEnabledSeries){e.selectAll("g.seriesholder").selectAll(function(){return this.childNodes}).filter(function(){return"g"==this.tagName}).sort(function(t,e){return t.index-e.index})}else{e.selectAll("g.seriesholder").selectAll("g.hierarchychart").selectAll("*").sort(function(t,e){return t.index-e.index})}},p},qr.legend.discrete=function(){},qr.legend.discrete.get=function(){"use strict"
function t(a){return a.each(function(a){var u,y=h(o),v=d(o,y),m=a.colorBox,x=a.itemDisabledStyle,b=[a,i.canvas,El],w=null!=a.x&&""!==a.x&&null!=a.y&&""!==a.y,C=+qr.utils.getVal(a.fontSize||i.canvas.fontSize),k=V(b,"fontColor"),S=o.dataset.getColumnIdx(o.xymultiRenderer||o.isGeoMap||o.isNonAxisMultiSeriesCategory||Gl.isQuantileColorScale(o)?"clr":"x"),O=a.showAs,A=m.position||"left",_=a.expandable||{},P=!0===_.show,T=!!o.renderer.length,M=ts.getFilterBoxSize(m,C),E=M[0],L=M[1],z=He(a),D=(z.hAlign,z.vAlign,o.legend.states=o.legend.states||{allSelected:!0,isFirstClickAfterDeselection:!1}),I="horizontal"===z.layout
u="wrap"===a.textOverflow?{"word-wrap":"break-word","white-space":"normal","vertical-align":"top"}:{"text-overflow":"ellipsis","vertical-align":"middle"}
var H=ri(this)
t.update=function(){H.transition().call(t)}
H.styles({display:"block",position:"absolute",left:null,top:null})
var B=kt(H,"div",[a],".","class","legendgroup"),N=a.shadow
if(!0===N.show){var F=N.x+"px "+N.y+"px "+N.blur+"px "+N.color
F=N.inset?F+" inset":F,H.style("box-shadow",F)}else H.style("box-shadow",null)
var W=bi(a.background.color.toString())
H.style("background-color","rgba("+W.r+","+W.g+","+W.b+","+a.background.alpha+")")
var U=a.border
!0===U.show?H.styles({border:+U.size+"px "+U.style+" "+U.color,"border-radius":U.radius+"px"}):H.style("border",null),o.filterEffectsID&&!1!==a.useChartEffect&&H.style("filter",o.filterEffectsID?"url(#"+o.filterEffectsID+")":null)
var G=a.title,q=G.keepAligned&&I,Z=X(G.margin)?G.margin:3,K={display:q?"inline-block":null,"vertical-align":"top"},$=jt("ul",".zcheader",!0===G.show?[G]:[],B,":first-child").styles(K),J=kt($,"li",[1],".","class","zcheader")
$.styles({"white-space":"normal",overflow:"hidden",width:"","list-style-type":Za,margin:0,padding:0}),J.styles({padding:Q(Z),"white-space":"nowrap",overflow:"hidden","text-align":"left","text-overflow":"ellipsis","vertical-align":"middle"})
var tt=qr.legend.selectAllBox(J,o,D),et=tt.element,nt=tt.options,rt=tt.size,at=nt.disabledOpacity
ts.fadeChart(D.allSelected,o,at)
var it=kt(J,"span",[1],".","class","legendtitle")
it.text(R(G.text)).style("padding-"+A,nt.show?a.textPadding+"px":null).style("margin-"+A,nt.show?rt+"px":null),Pt(it,[G,i.canvas,El],!0),et.style("margin",function(){return Math.max(0,(it.node().offsetHeight-et.node().offsetHeight)/2)+"px"+" 0px 0px 0px"}),J.style("line-height",function(){var t=nt.show?et.node().offsetHeight:0
return Math.max(it.node().offsetHeight,t)+"px"})
var ot=kt(B,"ul",[a],".","class","legseries")
ot.styles({"white-space":"normal","overflow-y":"hidden",width:"","list-style-type":Za,margin:0,padding:0,"-webkit-overflow-scrolling":"touch","font-size":"0px"}).styles(K)
var lt
P?(ot.style("overflow","hidden"),(lt=kt(B,"div",[1],".","class","expandable")).styles({color:_.fontColor,"font-size":qr.utils.getVal(_.fontSize)+"px","font-family":_.fontFamily||V(b,"fontFamily"),"text-align":_.textAlign,cursor:Ka,display:"block",padding:a.itemMargin+"px",overflow:"hidden","text-overflow":"ellipsis","white-space":"nowrap"}),lt.html(Y(_.text,0,o)||"0 more...")):B.select(".expandable").empty()||(B.selectAll(".expandable").remove(),ot.style("overflow-y","hidden"),ot.style("overflow-x","hidden"))
var st=kt(ot,"li",y,".","class","series")
kt(st,"div",[1],".","class","legendfilterbox"),kt(st,"span",[1],".","class","legendlabel"),st.styles({color:function(t){return p(g(t,D.allSelected,D.isFirstClickAfterDeselection),k,x)},position:"relative","white-space":"nowrap",padding:+a.itemMargin+"px",overflow:"hidden","text-align":"left","line-height":X(m.size)?Da(C,L)+"px":(Ll.OSX||Ll.LINUX)&&Ll.FIREFOX?"1.2":"normal","font-size":C+"px",width:null==a.itemWidth||""==a.itemWidth?null:a.itemWidth+"px",height:null==a.itemHeight||""==a.itemHeight?null:a.itemHeight+"px","font-family":V(b,"fontFamily"),"font-weight":V(b,"fontWeight"),display:function(t){return f(t)?Za:I?"inline-block":"block"}}).styles(u).style("vertical-align","top"),qr.legend.events(o,st,D,at)
var ut=st.select("span.legendlabel")
ut.style("padding-"+A,a.textPadding+"px").style("margin-"+A,E+"px").html(function(t,e){if(Gl.isQuantileColorScale(o)){var n=a.colorBand.labels
if(n&&n.length)return j(n[e])}var r=o.xymultiRenderer||o.isNonAxisMultiSeriesCategory||o.isGeoMap?e:0,i=o.xymultiRenderer||o.isNonAxisMultiSeriesCategory||o.isGeoMap?0:e
return O?o.dataset.getCustomizedVal(o,O,r,0,i,t,"legend"):o.dataset.getDataPointValue(o,t,S,r,null,"legend")}).attr("title",function(){return a.tooltip?this.textContent:null})
Pt(ut,[{fontColor:function(t){return p(g(t,D.allSelected,D.isFirstClickAfterDeselection),k,x)},textDecoration:function(t){return g(t,D.allSelected,D.isFirstClickAfterDeselection)&&x.strikeout?"line-through":null}},a,i.canvas,El],!0)
var ct=ot.select("span.legendlabel").node().offsetHeight,ht=0
X(m.size)||"wrap"===a.textOverflow?ht=(Da(C,L)-L)/2:ct>L&&(ht=(ct-L)/2)
var dt=st.select("div.legendfilterbox")
dt.styles({width:E+qa,height:L+qa,float:A,"margin-top":ht+qa,"border-color":Qa,"background-repeat":"repeat","line-height":L-m.strokeWidth+qa,"text-align":"center","font-family":m.fontFamily,"font-size":(m.fontSize||C)+qa,position:"absolute",display:"inline-block","box-sizing":"border-box"}),qr.legend.setColorBoxBackground(dt,o,D)
var ft,pt,gt=st.node().offsetHeight,yt=o.legend.expanded,vt=[],mt=null!=a.itemWidth?+a.itemWidth:null
st.each(function(){var t=ri(this).select("div.legendfilterbox"),e=ri(this).select("span.legendlabel")
pt=pt||t.node().getBoundingClientRect().width,ft=e.node().getBoundingClientRect().width
var n=pt+ft
vt.push(mt||n+2*+a.itemMargin)}),mt=null!=a.itemWidth?mt:oi(vt)
var xt=a.itemHeight||Da(ct,L)+2*+a.itemMargin
ot.style("overflow-y",!0===(P&&yt||!P)?"auto":"hidden"),ot.style("overflow-x","hidden")
var wt,Ct=0,St=[]
if(l=0,w){var Ot=qt(a.maxHeight||es,r.height)
P&&(Ot=La(Ot/gt)*gt)
var At=o.legendarea.element.node().getBoundingClientRect(),_t=Ra(o.canvasarea.width-At.width,a.x),Tt=Ra(o.canvasarea.height-Ra(At.height,Ot),a.y)
H.style("left",_t+"px"),H.style("top",Tt+"px"),ot.style("max-height",Ot+"px")}else{var Mt=qt(a.maxWidth||(I?as:rs),r.width),Et=Ra(qt(G.maxWidth||(q?ls:ss),Mt),Mt)
B.style("max-width",Mt+"px"),$.style("max-width",Et+"px")
var Lt=function(t){if(t.isD3Selection&&(t=t.node()),X(t)&&bt(t))return t.getBoundingClientRect()
var e={}
return e.x=e.y=e.width=e.height=e.top=e.left=e.right=e.bottom=0,e}($).width
if(I){var zt=Mt
q&&(zt=Mt-Lt,st.styles({"max-width":zt+"px"}))
Ot=qt(a.maxHeight||ns,r.height)
var Dt=zt-+a.marginLeft-+a.marginRight-(a.border.show?2*a.border.size:0)
for(P&&(Ot=La(Ot/gt)*gt,gt>Ot&&(Ot=gt));Dt>l&&Ct<vt.length;)St[Ct]=vt[Ct],l+=vt[Ct],Ct++
for(var Rt=function(t,e){return t+e};l>Dt&&Ct>1;){St=[],Ct--
for(var It=0;It<vt.length;It++)St[It%Ct]=vt[It%Ct]
l=St.reduce(Rt)}var Ht=vt.length%Ct,Bt=(vt.length-Ht)/Ct,Nt=0==Ht?Bt:Bt+1
ot.styles({height:Nt*xt+2+"px","max-height":Ot+"px","max-width":zt+"px"})
var Ft=ot.node().scrollHeight>ot.node().offsetHeight?c:0
s=l+2+Ft,ot.style("width",s+"px")
var Yt=e()
wt=n(ot),X(lt)&&wt>=v&&(kt(B,"div",[],".","class","expandable"),Yt=e()),H.styles({left:Yt[0]+"px",top:Yt[1]+"px"})}else{Ct=1
Ot=qt(a.maxHeight||es,r.height)
P&&(Ot=La(Ot/gt)*gt),ot.styles({"max-height":Ot+"px","max-width":Mt+"px"})
Ft=ot.node().scrollHeight>ot.node().offsetHeight?c:0
s=mt+2+Ft,wt=n(ot),X(lt)&&wt>=v&&kt(B,"div",[],".","class","expandable"),ot.styles({width:s+"px",height:null}),Yt=e(),H.styles({left:Yt[0]+"px",top:Yt[1]+"px"})}}if(P){var Vt=Wl(wt,n(ot))
if(v>Vt){lt.styles({width:s+"px","margin-left":q?Lt+qa:0})
var Wt=Y(_.text,v-Vt,o)||v-Vt+" more..."
yt?T&&yt&&lt.html(function(){return Y(_.ontoggle,this,yt,o)||"Show less.."}):lt.html(Wt),lt.on("click",function(){yt=o.legend.expanded=!o.legend.expanded
var t=Y(_.ontoggle,this,yt,o)
X(t)&&(t+=""),yt?(this.innerHTML=t||"Show less..",ot.style("overflow-y","auto")):(ot.node().scrollTop=0,Vt=n(ot),this.innerHTML=t||Y(_.text,v-Vt,o)||v-Vt+" more...",ot.style("overflow-y","hidden"))})}else lt.remove()}}),t}function e(){return Be(r,o)}function n(t){for(var e=t.node(),n=e.children,r=0,a=0,i=n.length;i>a&&qr.utils.elementIsVisible(n[a],e);a++)r++
return r}var r,a,i,o,l=0,s=0,u=Ai("legendClick","legendDblclick","legendMouseover","legendMouseout"),c=20,h=ts.getLegendData,d=ts.getLegendDataLength,f=ts.isHiddenItem,p=ts.getClr,g=ts.isDisabled
return t.dispatch=u,t.chartarea=function(e){return arguments.length?(r=e,t):r},t.systemconf=function(e){return arguments.length?(i=e,t):i},t.chartObj=function(e){return arguments.length?(o=e,t):o},t.color=function(e){return arguments.length?(a=e,t):a},t},function(){var t=ts.getLegendData,e=ts.getLegendDataLength,n=ts.isHiddenItem,r=ts.isDisabled,a=ts.isAllEnabled,i=ts.getClr,o=ts.updateData
qr.legend.events=function(l,s,u,c){function h(t,e,n){O.highlightSeries(t,e,n,A,l,!0),O.highlightItem(t,e,n,A,!0)}var d,f,p,g,y,v,m,x,b,w,C,k,S,O=l.legend.component,A=l.systemConf.legend,_=A.itemDisabledStyle,P=A.colorBox,T=[A,l.systemConf.canvas,El],M=[A.itemHoverStyle,A,l.systemConf.canvas,El],E=V(T,"fontColor"),L=l.systemConf.legend.events
if(null!=L&&(S=0==W(L.enabled,!0),y=L.click,v=L.doubleclick,m=L.mouseover,x=L.mouseout,k=L.cursor,b=L.tap,w=L.taphold,C=L.tapholdend),!S){s.style("cursor",k||Ka)
var z=function(t,e){if(cs=null,null==m)h(this,t,e)
else{Y(l.zcEventType?w:m,d3.event,t,e,l)}},D=function(t,e){if(null==x)(function(t,e,n){O.highlightSeries(t,e,n,A,l),O.highlightItem(t,e,n,A)})(this,t,e)
else{Y(l.zcEventType?C:x,d3.event,t,e,l)}},R=function(t,e){if(d3.event&&d3.event.touches&&gs(),null==y)(function(t,e,n){O.toggleItemNUpdateChart(t,e,n,A)})(this,t,e)
else{Y(l.zcEventType?b:y,d3.event,t,e,l)}},j=function(t,e){null==v||Y(v,d3.event,t,e,l)}
fn(s,{mousemove:z,mouseout:D,click:R,dblclick:j},{taphold:z,tapholdend:D,tap:R,dbltap:j},{chartObj:l})}O.filterSeriesNUpdate=function(r,a,i){p||(p=t(i),g=e(i,p))
var l=p[a]
p.filter(function(t,e){if(!u.allSelected&&!u.isFirstClickAfterDeselection){n(t)||(t.disabled=!u.allSelected),o(t,e,i),ts.toggleChartEvents(i,!0),ts.fadeChart(!0,i,c)
var r=i.eventHandler.tooltipElement
r.hide(r.element)}return!n(t)&&t.disabled}).length==g-1&&!l.disabled&&!n(r)||(l.disabled=!l.disabled,i.dataObject.hierarchical&&!Gl.isQuantileColorScale(i)&&(i.systemConf.seriesdata.chartdata[a].disabled=l.disabled),o(l,a,i),i.addRemoveSeries(l,0,l.yaxiscolumnorder,!u.allSelected&&!u.isFirstClickAfterDeselection)),u.allSelected||u.isFirstClickAfterDeselection||(u.isFirstClickAfterDeselection=!0)},O.toggleItemNUpdateChart=function(e,n,r,o){var s=l.legendarea.element
if(d=d||s.selectAll("div.legendfilterbox"),f=f||s.selectAll("div.selectAll"),o.filter.enabled){l.legendHighlight.resetSelection(),O.filterSeriesNUpdate(n,r,l)
var c,g=ri(e),y=i(n.disabled,E,_)
n.disabled&&(O.highlightItem(e,n,r,o,!1,!0),_.strikeout&&(c="line-through")),g.selectAll(".legendlabel").styles({color:y,"text-decoration":c}),qr.legend.setColorBoxBackground(d,l,u),null==d3.event.touches&&h(e,n,r)}u.allSelected||(u.allSelected=!u.allSelected),f.empty()||(p=p||t(l),f.html(a(p,u.allSelected)?P.text||"&#10003;":(_.colorBox||{}).text||""))},O.highlightItem=function(t,e,n,a,i,o){if((o||!r(e,u.allSelected,u.isFirstClickAfterDeselection))&&a.itemHoverStyle){var l=ri(t)
l.style("background-color",(i?a.itemHoverStyle:a).backgroundColor),Pt(l.selectAll("span"),i?M:T,!0)}},O.highlightSeries=function(t,e,n,r,a,i){if(a.highlightContext=null,Gl.isQuantileColorScale(a)){var o=a.legendHighlight,l=n
i?e.disabled||a.seriesdata.forEach(function(t,e){o.highlightSelectedSeries(r,e,l),o.highlightUnselectedSeries(r,e,l)}):a.seriesdata.forEach(function(t,e){o.reset(r,e,l,a.seriesdata.length-1===e)})}else{o=a.legendHighlight
i?e.disabled||(o.highlightSelectedSeries(r,n),o.highlightUnselectedSeries(r,n)):o.reset(r,n)}}}}(),function(){function t(t,n,r,i,o,l){r=a(r),i=a(i)
var s=o.systemConf.legend,u=s.colorBox,c=s.shapes,h=(c?c[l%c.length]:null)||u.shape,d=h||!qr.legend.getHTML4ChartTypeSymbol||Gl.isQuantileColorScale(o)&&o.dataObject.isCombinationalChart?function(t,e,n,r,i,o){return"<path d='"+P(i||"square")(10)+"' transform='translate("+t/2+","+e/2+") scale("+t/(10+2*W(o.strokeWidth,1))+")' style='stroke: "+a(n)+"; fill: "+a(r)+"; fill-opacity: "+o.fillOpacity+"; stroke-width: "+W(o.strokeWidth,1)+"px; stroke-opacity: "+o.strokeOpacity+";'></path>"}(t,n,r,i,h,u):qr.legend.getHTML4ChartTypeSymbol(t,n,i,o,l)
return e(d)?'url("'+d+'")':Fe(d,t,n)}function e(t){return t&&!("<"===t[0]||0===t.indexOf('url("data'))}var n=ts.getClr,r=ts.isDisabled,a=ts.hexToRGB
qr.legend.setColorBoxBackground=function(a,i,o){var l,s,u,c,h,d,f,p,g,y=i.systemConf.legend,v=y.colorBox,m=y.itemDisabledStyle,x=m.colorBox||{},b=y.imagePallete?qr.legutil.imagePallete.get(y.imagePallete):null,w=X(b)&&b.length>0,C=i.patternPallete,k=C&&C.length,S=!i.patternPallete&&(X(y.shapes)||"square"!==v.shape),A=x.grayScale,_=+qr.utils.getVal(y.fontSize||i.systemConf.canvas.fontSize),P=ts.getFilterBoxSize(v,_),T=P[0],M=P[1],E=null
a.each(function(a,y){if(p=ri(this),g=r(a,o.allSelected,o.isFirstClickAfterDeselection),c=n(g,Wl(v.strokeColor,oe(i,y)),m),l=u=n(g,Wl(v.fillColor,oe(i,y)),m),h=v.borderRadius,d=g?x.fillOpacity:null,f=null,g&&A&&Ll.IE&&(u=se(u),c=se(c)),w)if(g&&m.color)l=m.color
else{l='url("'+b[y%b.length]+'")'
var _=i.patternImageSizes&&i.patternImageSizes
E=_[y]?_[y%_.length][0]+qa+" "+_[y%_.length][1]+qa:null}else if(S)l=t(T,M,c,l,i,y),h=null
else if(k){var P=C[y%k],z=Rl[P]?Rl[P]:O(P)
z.bgClr_base=u,z.stroke_base=u,z.width=T,z.customStaticClr=i.userdata.legend.customPatternColor,z.x=z.y=0
var D="zp"+L(z,"legelegendndFill"),R=jl.svgPatternFill(z,D,null,!0,!0,i,i.getPatternSvg(),"objectBoundingBox"),j=R.width,I=R.height
l='url("'+R.url+'")',E=(T>2*j?j:T/2)+qa+" "+(M>2*I?I:M/2)+qa,s=v.strokeWidth+qa+"solid "+c}else s=v.strokeWidth+qa+"solid "+c
if(e(l)&&(E=E||T+qa+" "+M+qa,g&&A&&Ll.IE)){var H=E.split("px").map(function(t){return+t});(function(t,e,n,r){var a=document.createElement("canvas"),i=a.getContext("2d")
a.width=e,a.height=n
var o=new Image
o.src=t.substring(5,t.length-2),o.width=e,o.height=n,o.onload=function(){i.drawImage(o,0,0,e,n)
for(var t=i.getImageData(0,0,a.width,a.height),l=0;l<t.height;l++)for(var s=0;s<t.width;s++){var u=4*l*t.width+4*s,c=(t.data[u]+t.data[u+1]+t.data[u+2])/3
t.data[u]=c,t.data[u+1]=c,t.data[u+2]=c}i.putImageData(t,0,0,0,0,t.width,t.height),r.style("background","url("+a.toDataURL()+")")}})(l,H[0],H[1],p)}p.styles({background:l,"background-size":E,color:g?x.fontColor:v.fontColor||"white",border:s,"border-radius":X(h)?h+qa:null,opacity:g?d:null,filter:g&&A&&!Ll.IE?"grayscale(1)":null}).html(g?x.text||"":v.text)})}}(),function(){function t(t){return function(e){switch(t){case Ko:case Jo:case $o:case tl:return"M"+.5*-e+" "+.5*e+" L"+.5*-e+" "+.2*-e+" L"+.25*-e+" "+.2*-e+" L"+.25*-e+" "+.5*e+"Z  M"+.125*-e+" "+.5*e+" L"+.125*-e+" "+.5*-e+" L"+.125*e+" "+.5*-e+" L"+.125*e+" "+.5*e+"Z  M"+.25*e+" "+.5*e+" L"+.25*e+" "+.1*e+" L"+.5*e+" "+.1*e+" L"+.5*e+" "+.5*e+"Z"
case el:case nl:return"M"+.5*-e+" "+.5*e+" L"+.5*-e+" "+.28*e+" L"+.24*-e+" "+.08*e+" L"+.13*-e+" "+.19*e+" L"+.07*e+" "+.14*-e+" L"+.23*e+" "+.012*e+" L"+.5*e+" "+.5*-e+" L"+.5*e+" "+.5*e+"Z"
case ll:case ol:case fl:return"M"+.045*e+" "+.045*-e+" L"+.5*e+" "+.045*-e+" A "+.455*e+" "+.455*e+" 0 0 0 "+.045*e+" "+.5*-e+"Z M"+.045*-e+" "+.045*e+" L"+.045*-e+" "+.41*-e+" A "+.455*e+" "+.455*e+" 1 1 0 "+.41*e+" "+.045*e+"Z"
case ul:return"M"+.5*-e+" "+.5*-e+" L "+.5*e+" "+.5*-e+" L "+.15*e+" "+.2*e+" L "+.15*e+" "+.5*e+" L "+.15*-e+" "+.5*e+" L "+.15*-e+" "+.2*e+"Z"
case cl:return"M0 "+.5*-e+" L"+.23*e+" "+.06*-e+" L"+.23*-e+" "+.06*-e+"Z M"+.5*-e+" "+.5*e+" L"+.5*e+" "+.5*e+" L"+.27*e+" 0 L"+.27*-e+" 0Z"
case hl:return P("line")(e)
case gl:return P("square")(e)
case al:case il:case pl:case rl:default:return P(t)(e)}}}function e(e,n,a,i,o,l,s){return"<path d='"+t(e.symbol)(l)+"' transform='translate("+n/2+","+a/2+")' style='"+("stroke:"+r(e[o?o+"StrokeColor":"strokeColor"]||i)+";stroke-width:"+W(e[o?o+"StrokeWidth":"strokeWidth"],1)+";stroke-opacity:"+W(e[o?o+"StrokeOpacity":"strokeOpacity"],1)+";fill:"+(s||r(e[o?o+"FillColor":"fillColor"]||i))+";fill-opacity:"+W(e[o?o+"FillOpacity":"fillOpacity"],1)+";")+"'></path>"}function n(t,e,n,r,a,i,o){var l,s=t&&t.gradients?Fl(e.gradients||{},t.gradients,!0):e.gradients||{},u="",c=i.getPatternSvg()
if("linear"===s.type||"radial"===s.type){var h=k(s,[n,r],a,1),d={offset:o,chartObj:i},f=Dl.get(Il,"svgGradientFill",h,d),p=(new XMLSerializer).serializeToString(c.select("#"+f).node())
u="<defs>"+(p=p.replace(/"/g,"'"))+"</defs>",l="url("+(Ll.IE?"#":"%23")+f+")"}return{defs:u,fill:l}}var r=ts.hexToRGB
qr.legend.getHTML4ChartTypeSymbol=function(a,i,o,l,s){var u=Gl.isQuantileColorScale(l),c=(l.isAxisCategory||l.dataObject.isPolarAxisCategory||l.dataObject.isHierarchy)&&!u?s:0,h=l.chartTypes[c].name,d=l.systemConf.chart.plot.plotoptions[h],f=u?$a:l.seriesdata[c].plotoptions,p=t(h)(a)
switch(h){case rl:case hl:var g=.15*i,y=f&&f.marker?Fl(d.marker,f.marker,!0):d.marker,v=function(t,e,n){var r,a=V([t,e],"dashStyle"),i=x(a,.75*n)
i&&i.length&&(r="stroke-dasharray:"+i+";stroke-linecap:"+b(V([t,e],"lineCap"),a)+";")
return r}(f,d,g),m="",w="stroke:"+o+";stroke-width:"+g+";"
if(v)w+=v
else if(0!=y.enabled){var C=h===hl?.5:.65,k=h===hl?.25:.45
m=e(y,a,i,o,"outer",Ra(a,i)*C),m+=e(y,a,i,o,"inner",Ra(a,i)*k)}return"<path d='"+p+"' transform='translate("+a/2+","+i/2+")' style='"+w+"'></path>"+m
case al:case il:if((y=f&&f.marker?Fl(d.marker,f.marker,!0):d.marker).imageUrl)return y.imageUrl
var S=Ra(a,i)-W(y.outerStrokeWidth,1),O=.5*Ra(a,i)-W(y.innerStrokeWidth,1),A=n(f,d,S,S,y.outerFillColor||o,l,h),_=n(f,d,O,O,y.innerFillColor||o,l,h)
return A.defs+e(y,a,i,o,"outer",S,A.fill)+_.defs+e(y,a,i,o,"inner",O,_.fill)
case pl:return(L=n(f,d,T=Ra(a,i)-W(d.strokeWidth,1),T,o,l,h)).defs+e(d,a,i,o,null,T,L.fill)
case dl:if(d.symbol&&P(d.symbol)){var T
return(L=n(f,d,T=Ra(a,i)-W(d.strokeWidth,1),T,o,l,h)).defs+e(d,a,i,o,null,T,L.fill)}var M=a-(g=W(d.strokeWidth,1)),E=i-g
return(L=n(f,d,M,E,o,l,h)).defs+function(t,e,n,a,i,o){var l=t.borderRadius
return l&&(l=Ra(Ra(e,n)/4,l)),"<path d='"+At(-e/2,-n/2,e,n,i.dataObject.getTransRectValue("radius",null,null,null,null,l))+"' transform='translate("+e/2+","+n/2+")' style='stroke:"+r(t.strokeColor||a)+";stroke-width:"+W(t.strokeWidth,1)+";stroke-opacity:"+W(t.strokeOpacity,1)+";fill:"+(o||r(t.fillColor||a))+";fill-opacity:"+W(t.fillOpacity,1)+";'></path>"}(d,M,E,o,l,L.fill)
default:var L=n(f,d,a,i,o,l,h),z=Wl(f&&f.fillOpacity,d.fillOpacity,1)
w="fill:"+(L.fill||o)+";fill-opacity:"+z+";"
return L.defs+"<path d='"+p+"' transform='translate("+a/2+","+i/2+")' style='"+w+"'></path>"}}}(),function(){var t={show:!1,strokeColor:"#262626",strokeWidth:1,fillColor:Qa,fontColor:"#262626",fillOpacity:1,strokeOpacity:1,disabledOpacity:.3,tooltip:{enabled:!0,color:"red",content:"Select atleast one legend"},events:{click:null}},e=ts.getLegendData,n=ts.isDisabled,r=ts.isAllEnabled,a=ts.getClr,i=ts.toggleChartEvents,o=ts.updateData
qr.legend.selectAllBox=function(l,s,u){function c(){(!u.allSelected||r(g,u.allSelected))&&(u.allSelected=!u.allSelected),u.isFirstClickAfterDeselection=!1,z.html(u.allSelected?Wl(m.text,v.text)||"&#10003;":b.text||"")
Y(m.events[s.zcEventType||"click"],d3.event,u.allSelected,s)}function h(t,e,n,r){t.element.attr("align",e).styles({"border-width":n}),t.element.selectAll("div#tooltipcontent").style("color",r)}t.events.click=s.legend.component.toggleSelectAll=function(){if(g||(g=e(s)),u.allSelected&&(g.forEach(function(t,e){t.disabled=!u.allSelected,o(t,e,s)}),s.addRemoveSeries(g,0,[0,0],!0)),function(){if(!p){var t=s.legendarea.element
p=t.selectAll("div.legendfilterbox"),f=t.selectAll("span.legendlabel")}qr.legend.setColorBoxBackground(p,s,u)
var e,n
u.allSelected?(e=k,n=null):(e=a(!0,k,x),n=JSON.parse(x.strikeout)?"line-through":null),f.styles({color:e,"text-decoration":n})}(),i(s,u.allSelected),ts.fadeChart(u.allSelected,s,L),E.enabled){var t=s.eventHandler.tooltipElement
d||(d=t.element.selectAll("div#tooltipcontent").style("color"))
var n=s.systemConf.tooltip,r=Q(X(n.borderWidth)?n.borderWidth:1)
if(u.allSelected)h(t=s.eventHandler.tooltipElement,null,r,d),t.hide(t.element)
else{var l=en(M,d3.event)
l={x:l[0],y:l[1]}
var c=gn(d3.event),y=ln(c,l,0,0,s,{},!1,!1,!1,!0,!1),v=l.x-c.clientX,m=l.y-c.clientY
y.dLeft=v,y.dTop=m,y.helpers.color=E.color,y.helpers.backgroundColor=E.backgroundColor,y.helpers.borderColor=E.borderColor,h(t,"center",null,E.fontColor||d),t.show(s,y,E.content,!1,y.helpers),setTimeout(function(){var t=s.eventHandler.tooltipElement
h(t,null,r,d),t.hide(t.element)},4e3)}}}
var d,f,p,g=e(s),y=s.systemConf.legend,v=y.colorBox,m=Fl(t,y.selectAllBox,!0),x=y.itemDisabledStyle,b=x.colorBox||{},w=[y,s.systemConf.canvas,El],C=+qr.utils.getVal(y.fontSize||s.systemConf.canvas.fontSize),k=V(w,"fontColor"),S=(y.imagePallete&&qr.legutil.imagePallete.get(y.imagePallete),Fl(v,m,!0)),O=ts.getFilterBoxSize(S,C),A=O[0],_=O[1],T=Math.min(A,_)-(y.imagePallete||!X(y.shapes)||"square"===v.shape?0:+v.strokeWidth),M=s.container.node(),E=m.tooltip,L=m.disabledOpacity
u.allSelected=X(m.selected)?m.selected:u.allSelected
var z=kt(l,"div",[1],".","class","selectAll"),D=Wl(m.shape,v.shape),R="square"!==D,j={display:m.show?"inline-block":Za,width:T+"px",height:T+"px",float:"left",background:m.fillColor,position:"absolute","box-sizing":"border-box","text-align":"center","line-height":T+"px","font-family":v.fontFamily,"font-size":(v.fontSize||C-2)+"px",color:function(t){return m.fontColor||(n(t,u.allSelected,u.isFirstClickAfterDeselection)?b.fontColor:v.fontColor)}}
if(R){var I=function(t,e,n,r,a,i){var o=P(a||"square")(10),l=ts.hexToRGB
return"<path d='"+o+"' transform='translate("+t/2+","+e/2+") scale("+t/(10+2*W(i.strokeWidth,1))+")' style='stroke: "+l(n)+"; fill: "+l(r)+"; fill-opacity: "+i.fillOpacity+"; stroke-width: "+W(i.strokeWidth,1)+"px; stroke-opacity: "+i.strokeOpacity+";'></path>"}(T,T,m.strokeColor,m.fillColor,D,m)
j.background=Fe(I,T,T),j.border="none"}else j.border=m.strokeWidth+"px solid "+m.strokeColor
z.styles(j).html(function(){return r(g,u.allSelected)?Wl(m.text,v.text)||"&#10003;":b.text||""}),l.style("cursor",m.show?Ka:null)
var H={click:c},B={tap:c}
if(m.show?fn(l,H,B):(pn(l,null,H),pn(l,null,B)),s.eventHandler){var N=s.eventHandler.tooltipElement
N.hide(N.element)}return{element:z,options:m,size:T}}}(),function(){function t(t,e){var r=e.systemConf,a=r.legend.title,i=a.show,o=n(r),l=o.left,s=o.right,u=o.top,c=o.bottom
t.attr("transform",i?"translate("+l+","+u+")":$a)
var h=kt(t,"text",i?[1]:[],".","class","legendtitle")
Pt(t,[a,r.canvas,El]),h.text(R(a.text)).attr("dy","0.91em"),i&&function(t,e){var r=e.chartarea,a=e.systemConf.legend,i=ts.getOrient(a),o=n(e.systemConf),l=r.width-a.marginLeft-a.marginRight,s=r.height-a.marginTop-a.marginBottom,u=i===Wo||i===Vo?as:rs,c=i===Wo||i===Vo?ns:es,h=qt(a.maxWidth||u,l),d=qt(a.maxHeight||c,s),f=D(e.legendarea.element.node()),p=t.node(),g=D(p),y={left:f.x+o.left,top:f.y+o.top,right:f.x+o.left+h-o.right,bottom:f.y+o.top+d-o.bottom},v={left:0,top:0,width:g.width,height:g.height}
St(p,p.textContent,v,y,Vo,"..",{left:5,right:5,top:5,bottom:5}),".."===p.textContent&&t.text("")}(h,e)
var d=D(h.node())
kt(t,"path",i?[1]:[],".","class","zchart-legend-title-background").attr("d",At(d.x-l,d.y-u,d.width+l+s,d.height+u+c,ht(0))).style("opacity",0)}function e(t,e,n,r,a,i,o,l,s){var u=e.minmaxlabels.align,c=[]
return c[0]=n===Fo?u===Yo?i.width:u===Fo?Da(i.width,l.width):Da(i.width,l.width/2):n===Yo?u===Yo?s[0]:u===Fo?s[0]+l.width:s[0]+l.width/2:u===Wo||u===Vo?s[0]:s[0]-l.x,c[1]=o.height,n===Fo||n===Yo?c[1]-=Ra(0,l.y):n===Vo&&u===Wo&&(c[1]+=l.height),c[1]+=n===Wo?i.height:s[1],c=function(t,e,n){var r=(e.show?W(e.strokeWidth,1):0)-.5
return n===Fo?t[0]-=r:n===Yo?t[0]+=r:n===Vo?t[1]+=r:t[1]-=r,t}(c,e.axisline,n)}function n(t){var e=t.legend.title,n=0
return e.show&&(n=X(e.margin)?e.margin:3),ct(n)}function r(t,n,r,a,i,o,l,s,u){a.systemConf
var c=D(r.node()),h=ts.getOrient(a.systemConf.legend),d=function(t,e){var n=e.selectAll("g.zchart-minmaxlabels,line.majorTicks")
n.style("display",Za)
var r=Yl(D(e.node()))
return n.style("display",null),r}(0,t),f=D(t.selectAll("g.zchart-minmaxlabels").node()),p=function(t,e,n,r,a,i,o,l){var s=e.align,u=[]
return u[0]=n===Fo?s===Yo?i.width:s===Fo?Da(i.width,l.width):Da(i.width,l.width/2):n===Yo?s===Yo?0:s===Fo?l.width:l.width/2:s===Wo||s===Vo?0:-l.x,u[1]=o.height,n===Fo||n===Yo?u[1]-=Ra(0,l.y):n===Vo&&s===Wo&&(u[1]+=l.height),n===Wo&&(u[1]+=i.height),u}(0,i.minmaxlabels,h,0,0,d,c,f),g=e(0,i,h,0,0,d,c,f,s)
return function(t,e,n,r){t===Wo?n[1]+=e:t===Vo?r[1]+=e:t===Fo?n[0]+=e:r[0]+=e}(h,u,p,g),n.attr("transform","translate("+p[0]+","+p[1]+")"),t.attr("transform","translate("+g[0]+","+g[1]+")"),{axisGroupPosition:g,bandGroupPosition:p}}qr.legend.continuous=function(){},qr.legend.continuous.get=function(){"use strict"
function e(a){return a.each(function(e){function a(){var t=Be(o,n)
return f?[t[0]-m.left,t[1]+m.top]:(g===Yo?t[0]-=m.right:g===Fo&&(t[0]+=m.right),y===Vo?t[1]-=m.bottom:y===Wo&&(t[1]+=m.top),t)}var i,l=s(n),c=(u(n,l),n.systemConf.legend),h=c.colorBand,d=function(t){var e={label:{},grid:{color:Qa},ticklabel:{fontColor:t.fontColor,fontFamily:t.fontFamily,fontSize:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,tooltip:t.tooltip},minmaxlabels:{padding:2,align:"center",fontSize:t.fontSize},tickmark:{color:"#B0B0B0",size:3},axisline:{show:!1}},n=t.colorAxis||{}
return n=Fl(e,n,!0)}(c),f=X(c.x)&&X(c.y),p=He(c),g=p.hAlign,y=p.vAlign,v=W(h.strokeWidth,1)/2,m=ct(h.padding),w=!1===d.show,C=ri(this),k=kt(C,"path",[1],".","class","zchart-background"),S=kt(C,"g",[1],".","class","zcheader"),O=kt(C,"path",[1],".","class","colorband"),A=kt(C,"g",w?[]:[1],".","class","legend-axis")
k.style("display",Za),C.selectAll(".brush,.highlight").style("display",Za),t(S,n),qr.legend.colorBand(O,n),qr.legend.colorAxis(A,n,d)
var _=w?[0,0]:Ot(A).translate,P=r(A,O,S,n,d,0,0,_,v),T=a()
w||(qr.legend.colorAxis.handleOverlapNOverlap(A,P.axisGroupPosition,T,n,o,d),P=r(A,O,S,n,d,0,0,_,v),t(S,n),T=a()),C.selectAll(".brush,.highlight").style("display",$a),new us(n,{position:P.bandGroupPosition}),qr.legend.continuous.events(n,{position:P.bandGroupPosition}),T=a(),C.attr("transform","translate("+T[0]+","+T[1]+")"),i=D(C.node()),function(t,e,n){var r=e.systemConf.legend,a=r.background,i=ct(r.colorBand.padding),o=r.border,l=o.show,s=Wl(o.strokeWidth,1),u=x(o.style,s),c=b(o.lineCap,o.style),h=ht(l?o.radius:void 0)
t.attrs({d:At(n.x-i.left,n.y-i.top,n.width+i.left+i.right,n.height+i.top+i.bottom,h)}).styles({stroke:o.color,"stroke-width":l?o.size:0,"stroke-dasharray":u,"stroke-linecap":c,fill:a.color||Qa,"fill-opacity":a.alpha})}(k,n,i),k.style("display",null),n.filterEffectsID&&!1!==e.useChartEffect&&C.style("filter",n.filterEffectsID?"url(#"+n.filterEffectsID+")":null)}),e}var n,a,i,o,l=Ai("legendClick","legendDblclick","legendMouseover","legendMouseout"),s=ts.getLegendData,u=ts.getLegendDataLength
return e.dispatch=l,e.chartarea=function(t){return arguments.length?(o=t,e):o},e.systemconf=function(t){return arguments.length?(a=t,e):a},e.chartObj=function(t){return arguments.length?(n=t,e):n},e.color=function(t){return arguments.length?(i=t,e):i},e}}(),qr.legend.colorBand=function(t,e){var n,r,a,i,o=e.systemConf.legend,l=o.colorBand,s=ts.getColorBandDimension(e),u=s[0],c=s[1],h="horizontal"===He(o).layout,d=l.ranges&&l.ranges.length,f=ts.isReversedColorAxis(e),p=ht(l.borderRadius)
f?(n=h?100:0,i=h?0:100):(r=h?100:0,a=h?0:100)
var g,y,v,m=e.axes.clr.scale
if(d){y=m.range().filter(function(t){return t!==$a})
for(var x=[],b=[],w=0;d>w;w++)x.push(w,w+1),b.push(y[w],y[w])
g=x,y=b,v=gi().domain(g).range([0,100])}else g=m.domain(),y=m.range(),g[0]===g[1]&&(y=[y[0],y[0]]),v=di().domain([g[0],g[g.length-1]]).range([0,100])
var C=k({type:"linear",options:{linear:{x1:n,y1:a,x2:r,y2:i,stopColor:y,stopOffset:g.map(function(t){return v(t)+"%"})}}},[0,u]),S={chartObj:e},O=Dl.get(Il,"svgGradientFill",C,S)
t.attr("d",At(0,0,u,c,p)).styles({stroke:l.strokeColor,"stroke-opacity":l.strokeOpacity,"stroke-width":l.strokeWidth,"fill-opacity":l.fillOpacity,fill:"url("+e.defsLocation+"#"+O+")","pointer-events":"visible"})},function(){function t(t,e,n,r){r=r||[0,0]
var a=D(t),i={x1:a.x+e[0]+n[0]+r[0],y1:a.y+e[1]+n[1]+r[1],width:a.width,height:a.height}
return i.x2=i.x1+a.width,i.y2=i.y1+a.height,i}function e(e,r,a,i,o){var l=D(o.legendarea.element.node()),s=[],u=[],c=0
e.each(function(){u.push(D(this).width)}),u=oi(u),e.each(function(){var e=Ot(this.parentNode).translate
s.push(t(this,r,a,e)),function(t,e,r,a,i,o){var l=ts.getOrient(e.systemConf.legend),s=l===Yo||l===Fo?1:.5,u=n(e,e.chartarea),c=e.systemConf.legend.title.show?D(e.legendarea.element.selectAll(".legendtitle").node()).width:0,h=(u.x2-u.x1-(o.width-Da(i,c)))*s,d=u.y2-u.y1,f={left:r[0],top:r[1],right:r[0]+h,bottom:r[1]+d},p={left:5,right:5,top:5,bottom:5}
if(a.x2-a.x1>h){var g={left:r[0],top:r[1],width:a.width,height:a.height}
return St(t,t.textContent,g,f,Vo,"..",p),".."===t.textContent&&(ri(t).text(""),ri(t.parentNode).style("opacity",0)),!0}}(this,o,e,s[c],u,l)&&(s[c]=t(this,r,a,e)),function(t,e,n,r){for(var a,i=r-1;i>=0&&!a;i--)a=he(n[i],n[r])
return e.length&&(he(n[r],e[0])||he(n[r],e[1]))||a?(ri(t.parentNode).style("display",Za),!0):void 0}(this,i,s,c)&&(s[c]={x1:0,y1:0,x2:0,y2:0}),c++})}function n(t,e){var n=t.systemConf.legend,r=ts.getOrient(n),a=He(n),i=(a.layout,a.hAlign),o=(a.vAlign,e.width-n.marginLeft-n.marginRight),l=e.height-n.marginTop-n.marginBottom,s=e.left+n.marginLeft,u=e.top+n.marginTop,c=Ne(n),h=c.width,d=c.height,f=qt(n.maxWidth||h,o),p=qt(n.maxHeight||d,l),g={}
return r===Vo?(g.y1=u+l-p,g.x1=i===Fo?s:i===Yo?s+o-f:s+(o-f)/2):r===Wo?(g.y1=u,g.x1=i===Fo?s:i===Yo?s+o-f:s+(o-f)/2):r===Yo?(g.y1=u,g.x1=s+o-f):(g.y1=u,g.x1=s),g.x2=g.x1+f,g.y2=g.y1+p,g}qr.legend.colorAxis=function(t,e,n){var r,a=e.systemConf.legend,i=a.colorBand,o=n.minmaxlabels,l=n.axisline,s=l.show?W(l.strokeWidth,1):0,u=ts.getColorBandDimension(e),c=u[0],h=u[1],d=i.type,f=ts.getOrient(a),p=He(a),g=e.dataset.getColumn("clr"),y=g.datatype,v=g[y],m=e.axes.clr.component,w=e.axes.clr.scale.domain(),C=o.show&&o.excludeIntervals?[]:w,k=ts.isReversedColorAxis(e),S="horizontal"===p.layout,O=S?[0,c]:[h,0],A=o.show&&o.excludeIntervals&&f===Wo?[0,0]:f===Vo||f===Wo?[0,h]:[c,0],_=i.ranges&&i.ranges.length,P=i.labels
if(e.axes.clr.ticks=qr.axis.ticks(e,n,"clr",0,f,e.chartarea),k&&O.reverse(),_){w=be(e)
var T=e.dataset.getDataType("clr")===uo
"continuous"!==d||T?r=fi().domain(w).range(O).padding(0):(w=wi(w),i.minRange!==w[0]&&w.splice(0,0,i.minRange),r=gi().domain(w).range(O))}else{if(C[0]===C[1]){var M=ja(O[0]-O[1])
O=[M/2,M/2]}r=di().domain([w[0],w[w.length-1]]).range(O)}r.origRange=O,C=o.show&&o.excludeIntervals?[]:w,m.orient(f).scale(r).tickSize(W(n.tickmark.size,6),0).majorTicks(function(t,e,n,r){var a,i,o,l
return a=i=o=l=0,t==Vo?(i=-r,l=-n-r):t==Wo?(i=r,l=n+r):t==Fo?(a=e+r,o=r):t==Yo&&(a=-e-r,o=-r),{x1:a,y1:i,x2:o,y2:l}}(f,c,h,s)).systemconf(e.systemConf).chartObj(e).tickValues(C).columnIndices([e.dataset.getColumnIdx("clr")]).tickFormat(function(t){if(P&&P.length){var n=ts.getLabelIndex(t,i,e)
if(X(n))return this.__formattedValue=P[n],d3.select(this).text(P[n])}var r=yn(v,t,y,e,"legend",null,"-")
this.__formattedValue=r,d3.select(this).text(r)}),t.datum(n).attr("transform","translate("+A[0]+","+A[1]+")").call(m,"clr"),t.selectAll("g.tick").style("display",null),t.selectAll("line.minorTicks").attr(S?"x2":"y2",null),t.selectAll("text.ticklabel").style("pointer-events","visible"),function(t,e,n,r,a){var i=t.selectAll("path.domain")
if(e.show){var o=W(e.strokeWidth,1),l=0,s=0
n===Fo?l=o/2:n===Yo?l=-o/2:s=n===Vo?-o/2:o/2,i.attr("transform","translate("+l+","+s+")").attr("d",r?"M0,0 L"+a[0]+",0":"M0,0 L0,"+a[1]).styles({"stroke-dasharray":x(e.style,o),"stroke-linecap":b(e.lineCap,e.style)})}else i.remove()}(t,l,f,S,u),t.call(ZC_legend_minmaxLabels,u,n,e,f)},qr.legend.colorAxis.handleOverlapNOverlap=function(r,a,i,o,l,s){var u=r.selectAll("g.zchart-minmaxlabels").selectAll("text"),c=r.selectAll("g.tick").selectAll("text")
e(c,a,i,function(e,r,a,i,o){var l=He(i.systemConf.legend),s=[],u=n(i,o),c={left:u.x1,top:u.y1,right:u.x2,bottom:u.y2},h={left:5,right:5,top:5,bottom:5}
if(e.each(function(e,n){var i=t(this,r,a),o={left:i.x1,top:i.y1,width:i.width,height:i.height}
St(this,this.textContent,o,c,Vo,"..",h),".."===this.textContent&&ri(this).text(""),s[n]=t(this,r,a)}),"horizontal"===l.layout&&s.length&&he(s[0],s[1])){var d=s[1].x2-s[0].x1
e.each(function(e,n){var i=t(this,r,a),o={left:i.x1,top:i.y1,width:i.width,height:i.height},l=Yl(c)
0===n?l.right=i.x1+d/2:l.left=i.x2-d/2,St(this,this.textContent,o,l,Vo,"..",h),".."===this.textContent&&ri(this).text(""),s[n]=t(this,r,a)})}return s}(u,a,i,o,l),o),!0===s.ticklabel.tooltip&&c.each(function(){Tt(d3.select(this),this.__formattedValue)})}}(),function(){ZC_legend_minmaxLabels=function(t,e,n,r,a){var i=r.systemConf,o=n.minmaxlabels,l=r.systemConf.legend,s=l.colorBand,u=He(l),c=l.filter.enabled?function(t,e,n,r){var a=t.type,i=t[a],o="horizontal"===r.layout
return"triangleUp"===a||"triangleDown"===a?[0,0]:"lever"===a||"vernier"===a?[i.width,i.height]:"pentagon"===a?[i.size+2*i.bandWidth,e[o?1:0]+1.5*i.bandWidth+2]:[i.size,i.size]}(l.filter.slider,e,0,u):[0,0],h=W(o.padding,2),d=o.align,f=o.text,p=s.ranges&&s.ranges.length,g=ts.isReversedColorAxis(r),y=[],v=r.dataset.getColumn("clr"),m=v.datatype,x=v[m]
if(o.show)if(p){var b=be(r)
y=[b[0][0],b[b.length-1][b[b.length-1].length-1]]}else{var w=r.axes.clr.scale.domain()
y=[w[0],w[w.length-1]]}g&&y.reverse()
var C=kt(kt(t,"g",[1],".","class","zchart-minmaxlabels"),"text",y)
C.each(function(t,n){var i=function(t,e,n,r,a,i){var o,l,s,u
return t===Vo?n===Wo?(s="-0.3em",u=0===i?null:"end",l=-e[1]-r-Da(0,(a[1]-e[1])/2),o=0===i?0:e[0]):n===Vo?(s="1em",u=0===i?null:"end",l=r+Da(0,(a[1]-e[1])/2),o=0===i?0:e[0]):(s="0.3em",u=0===i?"end":null,l=-e[1]/2,o=0===i?-r-a[0]/2:e[0]+r+a[0]/2):t===Wo?n===Wo?(s="-0.3em",u=0===i?null:"end",l=-r-Da(0,(a[1]-e[1])/2),o=0===i?0:e[0]):n===Vo?(s="1em",u=0===i?null:"end",l=e[1]+r+Da(0,(a[1]-e[1])/2),o=0===i?0:e[0]):(s="0.3em",u=0===i?"end":null,l=e[1]/2,o=0===i?-r-a[0]/2:e[0]+r+a[0]/2):t===Yo?n===Fo?(s=0!==i?"1em":"-0.3em",u="end",o=-e[0]-r-Da(0,(a[1]-e[0])/2),l=0!==i?0:e[1]):n===Yo?(s=0!==i?"1em":"-0.3em",u=null,o=r+Da(0,(a[1]-e[0])/2),l=0!==i?0:e[1]):(s=0!==i?"-0.3em":"1em",u="middle",o=-e[0]/2,l=0!==i?-r-a[0]/2:e[1]+r+a[0]/2):n===Fo?(s=0!==i?"1em":"-0.3em",u="end",o=-r-Da(0,(a[1]-e[0])/2),l=0!==i?0:e[1]):n===Yo?(s=0!==i?"1em":"-0.3em",u=null,o=e[0]+r+Da(0,(a[1]-e[0])/2),l=0!==i?0:e[1]):(s=0!==i?"-0.3em":"1em",u="middle",o=e[0]/2,l=0!==i?-r-a[0]/2:e[1]+r+a[0]/2),{x:o,y:l,dy:s,anchor:u}}(a,e,d,h,c,n)
ri(this).attrs({x:i.x,y:i.y,"text-anchor":i.anchor,dy:i.dy}).text(f?f[n]:yn(x,t,m,r,"minmaxlabels"))}),Pt(C,[o,i.chart,i.canvas,El])}}()
var us
!function(){function t(t,e,n,r,a){var i=n?[0,t.length-1]:[t.length-1,0]
r&&i.reverse()
return a(t[i[e]])}function e(t,e,n,r,i,o,l){var s,u,c=I(e.domain().map(function(t){return e(t)})).sort(_i),h=e.domain(),d=e.bandwidth()
c.some(function(e,n){if(t[0]>=e&&t[0]<=e+d){var r=t[0]-e
s=.5>=r&&r>=0?Da(n-1,0):n}if(t[1]>=e&&t[1]<=e+d){r=e+d-t[1]
u=.5>=r&&r>=0?Ra(n+1,c.length-1):n}return X(s)&&X(u)}),s=Da(0,W(s,0)),u=Da(0,W(u,h.length-1))
var f=h
if(i!==uo&&1===r[0].length&&(f=function(t,e){for(var n=t[2],r=t[t.length-1-2],a=[],i=0;i<e.length;i++)a.push([n,e[i][0]]),n=e[i][0]
return a.push(n,r),a}(n,f)),!o&&!l||o&&l){var p=s
s=c.length-1-u,u=c.length-1-p}return f=f.slice(s,u+1,0),i===uo?t=f:(t=Oi(wi(f)),t=a(t,n)),t}function n(t,e,n,r,o){var l,s=e.bandwidth()/2
if(o===uo)l=[e(t[0])+s,e(t[t.length-1])+s]
else{var u,c,h=e.domain()
t=a(t,n),h.forEach(function(e,n){t[0]>=e[0]&&(u=1===r[0].length?n+1:n),!X(c)&&t[1]<=e[0]&&(c=1===r[0].length?n:n-1)}),u=Da(0,W(u,0)),c=Da(0,W(c,h.length-1)),l=[e(h[u])+s,e(h[c])+s]}return l[0]===l[1]&&(l[0]-=i,l[1]+=i),l}function a(t,e){return function(t,e){return t.indexOf(e)===t.lastIndexOf(e)}(e,t[1])||(t[1]-=i),t}var i=1e-12
us=function(a,o){var l,s,u,c,h,d,f,p=o.position,g=ts.getColorBandDimension(a),y=g[0],v=g[1],m=a.systemConf.legend,x=m.colorBand,b=ts.getOrient(m),w=He(m),C=a.dataset.getDataType("clr"),k=x.ranges,S=k&&k.length,O=a.systemConf.legend.filter.range,A=a.axes.clr.scale,_=A.domain(),P=ts.isReversedColorAxis(a),T="horizontal"===w.layout,M=T?[0,y]:[v,0]
if(P&&M.reverse(),S)l=fi().domain(C===uo?_:be(a)).range(M).padding(0),s=l.bandwidth(),u=s/2
else{var E=[_[0],_[_.length-1]]
E[0]===E[1]&&(f=[-1,1],E=[-Ga,Ga]),l=di().domain(E).range(M).clamp(!0)}if(c=l.domain(),a.axes.clr.brushScale=l,S){if(O)h=n(O,l,_,k,C)
else{var L=l(c[c.length-1]),z=l(c[0])
h=[L+u-i,z+u+i]}h.sort(_i)}else h=O||f||l.domain(),h=h.map(function(t){return l(t)}).sort(_i)
var D={element:a.legendarea.element,orient:b,legendAlign:w,scale:l,initialExtent:h,brushOptions:m.filter,dimension:g,singleDomainContinuous:f,onClick:"resize",onBrush:function(n){if(n.initialized&&!f){var i=d3.event.selection
i=function(t,e){return e[1]>e[0]?(t[1]=Ra(t[1],e[1]),t[0]=Da(t[0],e[0])):(t[1]=Da(t[1],e[1]),t[0]=Ra(t[0],e[0])),t}(i,M),i=S?e(i,l,_,k,C,T,P):i.map(function(t){return l.invert(t)}).sort(_i),a.systemConf.legend.filter.range=i,a.legend.component.highlightItem($a,!1,!0),r(i)!==r(d)&&a.addRemoveSeries(),R.slider.style("fill",function(e,n){return t(i,n,T,P,A)}),d=i}},onEnd:function(t,e){var r
if(S){var i=a.systemConf.legend.filter.range
r=n(i,l,_,k,C)}else f&&(r=f.map(function(t){return l(t)}).sort(_i))
if(r){r.sort(_i),t.initialized=!1
var o=d3.event.sourceEvent
R.context.transition().duration(e?0:250).call(t.move,r).on("end",function(){t.initialized=!0,R.context.node().contains(o.srcElement||o.target)||R.tooltipComponent.hide()}),R.slider.transition().duration(e?0:250).attr("transform",function(t,e){return"translate("+(T?r[e]:0)+","+(T?0:r[e])+")"})}}},R=a.legend.brush=new Rs(a,D)
R.context.attr("transform","translate("+p[0]+","+p[1]+")"),R.slider.style("fill",function(n,r){return t(S?e(h,l,_,k,C,T,P):h.map(function(t){return l.invert(t)}).sort(_i),r,T,P,A)})}}(),qr.legend.continuous.events=function(t,n){function a(){var n=en((h.filter.enabled?p:f).node(),d3.event),r=g?n[0]:n[1]
Ll.FIREFOX&&(r-=Rt(t.legend.brush.context.node()||t.legendarea.element)[g?0:1]),l=function(n){var r=h.colorBand.ranges,a=h.itemHoverStyle||{},i=t.axes.clr.brushScale
if(r&&r.length){var o=h.colorAxis&&h.colorAxis.reversed,l=i.bandwidth(),s=e(n/l)
return s=g&&o||!g&&!o?r.length-1-s:s}var u=t.axes.clr.scale.domain()
if(u[0]===u[1])return u
var c=W(a.triggerOffset,10),d=i.invert(n-c/2),f=i.invert(n+c/2),p=ja(f-d),y=La(+(Fa(p)/Wa).toFixed(2)),v=Ia(10,y),m=La(i.invert(n)/v)*v
return m=+m.toFixed(12),[m,m+v-1e-12]}(r),d3.event.stopImmediatePropagation(),t.legend.brush.tooltipComponent.hide(!0),c.highlightItem(r,!0),c.highlightSeries(l,!0)}function i(){c.highlightItem($a,!1),c.highlightSeries(s,!1)}t.legend.highlight={}
var o,l,s,u=n.position,c=t.legend.component,h=t.systemConf.legend,d=h.itemHoverStyle||{},f=t.legendarea.element.selectAll(h.filter.enabled?".selection":".colorband"),p=t.legendarea.element.selectAll(".zcbrushhighlighttracker"),g="horizontal"===He(h).layout,y=kt(t.legendarea.element,"g",[1],".","class","highlight").style("display",$a),v=t.legend.highlight.slider=qr.legend.continuous.slider(t,y),m=t.legend.highlight.tooltip=qr.legend.continuous.tooltip(t,y),x=(v.container,h.events)
if(y.style("display",Za).style("opacity",0),x&&(o=0==W(x.enabled,!0)),!o&&d.type&&d.type!==Za){var b={chartObj:t},w={mousemove:a,mouseout:i},C=$a
fn(f,w,C,b,"highlight"),fn(p,w,C,b,"highlight")}c.highlightItem=function(n,r,a,i){f.style("cursor",r?Ka:$a),r?(function(n){var r,a=h.colorBand.ranges,i=h.colorAxis&&h.colorAxis.reversed,o=t.axes.clr.brushScale
if(a&&a.length){var l=o.bandwidth(),s=e(n/l)
n=o(a[s=g&&i||!g&&!i?a.length-1-s:s])+l/2,r=t.seriesColor[s%t.seriesColor.length]}else r=t.axes.clr.scale(o.invert(n))
var c=g?[n,0]:[0,n]
c[0]+=u[0],c[1]+=u[1],Yt(y),t.legendarea.element.selectAll(".highlight").style("fill",r),y.style("display",$a).style("opacity",1).attr("transform","translate("+c+")")}(n),function(e){var n=h.colorBand.ranges,r=t.dataset.getColumn("clr"),a=r.datatype,i=r[a],o=n&&n.length?n[e]:e[0]
m.show(yn(i,o,a,t,"legend",Ta,"-"))}(X(i)?i:l)):function(t){t?y.style("opacity",0):y.transition().style("opacity",0)}(a)},c.highlightSeries=function(e,n){t.highlightContext=$a
var a=t.legendHighlight
if(n){if(X(s)&&r(s)!==r(e)){var i=s
s=$a,c.highlightSeries(i,!1)}t.seriesdata.forEach(function(t,n){a.highlightSelectedSeries(h,n,e),a.highlightUnselectedSeries(h,n,e)}),s=e}else t.seriesdata.forEach(function(n,r){a.reset(h,r,e,t.seriesdata.length-1===r)})}},qr.legend.continuous.slider=function(t,e){var n=kt(e,"g",[1],".","class","slider"),r=t.systemConf.legend,a=r.itemHoverStyle||{},i=ts.getColorBandDimension(t),o="horizontal"===He(r).layout,l=o?"":" rotate(-90)",s=a.type,u={container:n,config:Fl(Ln(t)[s],a[s],!0),type:s,chartObj:t,isHorizontal:o,bound:i}
n.selectAll("*").remove()
var c=new _s(u)
c.draw()
var h=c.getPosition()
return n.selectAll(go).attr("transform",function(){var t=Ot(this).translate
return"translate("+(t[0]+h[0])+","+(t[1]+h[1])+")"+l}),c},qr.legend.continuous.tooltip=function(t,e){var n=t.systemConf.legend,r=n.itemHoverStyle||{},a=ts.getOrient(n),i={enabled:!0,padding:5,margin:5,backgroundColor:"white",borderColor:"rgb(51, 51, 51)",fontColor:"rgb(51, 51, 51)",fontSize:t.globalProp.fontL1Size.l5,orient:a},o={chartObj:t,config:Fl(i,r.tooltip,!0),container:e},l=function(){var e,n,r=t.legend.highlight.slider.container.selectAll("path").node(),i=r?Ot(r).translate:[0,0],l=D(r),s=o.config,u=s.padding+s.margin
switch(a){case Vo:e=0,n=l.y-u
break
case Yo:e=l.y-u,n=0
break
case Fo:e=l.y+l.height+u,n=0
break
case Wo:e=0,n=l.y+l.height+u}return[e+i[0],n+i[1]]}(),s=new As(o)
return s.container.attr("transform","translate("+l[0]+","+l[1]+")"),s}
var cs,hs,ds,fs,ps=ri(document.documentElement),gs=function(t){if(Ll.isTouchDevice&&(!t&&ds&&hs||hs&&hs!=t)){if(bt(hs.container.node())){ds[4]=!0
var e=hs.systemConf.tooltip,n=e.hideDelay
e.hideDelay=0,hs.eventHandler.tapOldInfo=null,hs.eventHandler.mouseOut.apply(fs,ds),e.hideDelay=n}}}
if(qr.documentTapEvent=gs,Ll.isTouchDevice){var ys=function(){var t=(new Date).getTime();(!cs||t-cs>500)&&gs()}
fn(ps,{},{tap:ys,taphold:ys,dbltap:ys},{preventDefault:!1}),ps.on("touchmove",function(){gs()})}qr.events.mouseevents=function(t,e,r,a,i,o,l,s,u,c,h){function d(){return t.isAxisCategory&&(t.systemConf.chart.width||t.systemConf.chart.height)?ot:t.eventHandler.trackerElement}function f(){if(at){var e=t.plotarea_approx,n=t.plotarea,r={name:"polarClip",id:t.id,cx:e.x+n.left,cy:e.y+n.top,r:e.radius},a={chartObj:t},i=Dl.get(Bl,yo,r,a)
t.eventHandler.trackerElement.attr("clip-path","url("+t.defsLocation+"#"+i+")"),window.PointerEvent||"canvas"!==t.plot.renderer.mode||function(t){var e=function(){t.style("display",Za)
var e=document.elementFromPoint(d3.event.clientX,d3.event.clientY),n=ri(e),r=e&&e.__on&&e.__on.filter(function(t){return t.type===d3.event.type})[0].value
return t.style("display",$a),ri(this).style("cursor",r?n.style("cursor"):$a),r&&r.call(e,n.datum(),n.attr("index")||0),!1}
fn(t,{mousemove:e,mouseout:e,click:e,dblclick:e},{singletouchmove:e,touchend:e,tap:e,dbltap:e})}(t.container.selectAll("canvas.zc-labelholder-canvas,canvas.highlight-canvas,canvas.zc-canvas"))}}function p(n,a,l){var s=D(l),u={x:n[0]-s.x-(at?t.plotarea_approx.x:0),y:n[1]-s.y-(at?t.plotarea_approx.y:0)},h=t.eventHandler.oldInfo,d=gn(a),f=u.y-a.clientY,p=u.x-a.clientX,g=dt?function(e,n,r,a){var o=n.invert(rt?e.y:e.x),l=a.seriesdata.chartdata,s=vi(function(t){return i.getX(t)}).left,u=l.map(function(e,n){if(e.disabled)return null
var r=t.renderer[n]
return e.data.map(function(t,e){return t=null!=r.seriesdataAfterUpdate?r.seriesdataAfterUpdate[e]:t,s(t,o,0,t.length-1)})}),c=[],h=[],d=l.map(function(a,o){if(a.disabled)return null
var l=t.renderer[o],s=ut(a.yaxiscolumnorder),c=t.chartTypes[o].value,h=r[s].scale
return a.data.map(function(r,a){r=null!=l.seriesdataAfterUpdate?l.seriesdataAfterUpdate[a]:r
var d,f,p=u[o][a]
if(r[p]&&(d={x:n(i.getX(r[p])),y:h(pt(c)?r[p].y+r[p].y0:i.getY(r[p],s))},f=ae(i.getClr(r),t)),p>0){var g=ja(e.x-d.x),y={x:n(i.getX(r[p-1])),y:h(pt(c)?r[p-1].y+r[p-1].y0:i.getY(r[p-1],s))},v=ja(e.x-y.x),m=g>v?p-1:p
return g=g>v?v:g,I(d,e),I(e,y),{dist:f?g:null,xbis:m}}if(0==p){var g=f&&d?ja(e.x-d.x):null
return{dist:g,xbis:p}}})}).map(function(t,e){if(!t)return null
var n=t.map(function(t){return t.dist}),r=ii(n),a=n.indexOf(r)
return c[e]=r?a:null,h[e]=r?t[a].xbis:null,r}),f=d.indexOf(ii(d))
return{itemPos:h[f],seriesPos:f,subseriesindex:c[f]}}(u,o,nt,r):b(u,o,nt),y=g.seriesPos,m=g.itemPos,x=g.subseriesindex,w=t.eventHandler.tooltipElement,C=g.customPoint
if(X(C)){if("threshold-marker"===C.type){var k=Ve(null,C,t,"mousemove")
X(k)&&Z(k,C,a),gt.hoverPoint(C,a,u)}t.eventHandler.oldInfo={customPoint:C,isNoInfo:!0}}else{if(!X(y))return t.eventHandler.mouseOut(),void(t.eventHandler.oldInfo={isNoInfo:!0})
var S=t.seriesdata,O=ut(S[y].yaxiscolumnorder),A=nt[O].scale,_=t.chartTypes[y].value,P=_==qr.charttype.arearange?1:null,T=(null!=o.bandwidth&&o.bandwidth(),t.renderer[y]),M=(null!=T.seriesdataAfterUpdate?T.seriesdataAfterUpdate[x]:S[y].data[x])[m],E=t.dataset.getX(M),z=t.dataObject.getXYvalue(rt,pt(_),o,A,O,M,"x",null,P),R=t.dataObject.getXYvalue(rt,pt(_),o,A,O,M,"y",null,P)
if(at||null!=L(z,R)){var j=I({x:z,y:R},u)
if(null!=h&&!dt){var H=h.nearestPoint,B=ct(h.type||t.userdata.seriesdata.type,ho)
if(H&&H.seriesPos==g.seriesPos&&H.itemPos==g.itemPos&&H.subseriesindex[H.seriesPos]==g.subseriesindex[g.seriesPos]&&B==_&&h.containerLeft===p&&h.containerTop===f)return c.selectAll(Ue(_)?"#zcscatterhighlight,#zcareahighlight":"#zcscatterhighlight").style("display",""),e.style("visibility",it?"visible":"hidden"),void(an(t)&&t.staticPaneSVG.selectAll("g.crosshair").style("visibility","visible"))}var N=dt?t.seriesdata.length:1
c.selectAll("#zcscatterhighlight").selectAll("*").remove(),c.selectAll("#zcareahighlight").selectAll("*").remove()
for(var F=Ci(),Y=0;N>Y;Y++){v(t,dt?Y:y,E,m,x,g,dt,10>j,F)}if(it){var V=ln(d,u,z,R,t,g,rt,dt,F,!1,at,tn(t.chartTypes[y].value)&&t.subrenderer[x][Hs.getKey(M,y,t)].fillColorFunc),W=V.helpers
t.dataObject.isBubbleEnabled&&(V.distance=t.dataObject.getXYvalue(rt,pt(_),o,A,O,M,"z",t.zscale)/2),w.show(t,V,null,!0,W),(h=t.eventHandler.oldInfo)&&(h.containerLeft=p,h.containerTop=f)}}}}function g(e,n,r,i,o,l){var s=function(e){var n=a.left,r=a.top
return $e(t.chartTypes[0].value)&&(n+=e.x+e.width/2,r+=e.y+e.height/2),[n,r]}(n),u=function(e,n,r){if($e(t.chartTypes[0].value)){var a=t.systemConf.chart.plot.plotoptions.heatmap,i=a.symbol&&P(a.symbol)
return i?i(Ra(e.width,e.height)):At(-e.width/2,-e.height/2,e.width,e.height,n,null,rt)}return At(e.x,e.y,e.width,e.height,n,r,rt)}(n,r,o)
l||_(c.selectAll("g#zcareahighlight,g#zcscatterhighlight")),c.selectAll("g#zcbarhighlight").style("display",""),e.attr("d",u).attr("transform","translate("+s[0]+","+s[1]+")").style("display","")}function y(e,n,r,i,o,l,s,u,h,d,f,p,g,y,v,m){var x=n==qr.charttype.gantt,b=t.legendHighlight.getLegendHighlightEffect(p,"selectedSeries","plot"),w=We(t)&&(qe(n)||n===qr.charttype.scatter)&&"strokeEnlarge"!==b,C=ie(t,ue(i,t)?g:p,V(p,f,g),p)
x||m||_(c.selectAll("g#zcbarhighlight")),y||at||(_(c.selectAll("g#zcareahighlight").selectAll("*")),_(c.selectAll("g#zcareahighlight")))
var k,S,O=c.selectAll("#zcscatterhighlight"),A=r?Fl(i.hoveroptions,r.hoveroptions,!0):i.hoveroptions
if(!x||!i.marker||!1!==i.marker.enabled){if(qe(n)){var P=t.renderer[p],M=null!=P.seriesdataAfterUpdate?P.seriesdataAfterUpdate[f]:d[p].data[f],E=t.dataObject.getXYvalue(rt,pt(n),s,u,h,M[g],"z",t.zscale)
w?(S=.1*E,k=0):(S=.1*(E+qt("2.5%",Ra(a.width,a.height))),k=E/2*.1)}else{var L=n===qr.charttype.line||Ue(n),z=r&&r.marker?tt(r.marker,i.marker)("size"):i.marker.size,D=!L&&!at||null!=z&&""!==z?z||1:tt(r,i)("strokeWidth")
D=null!=A.size&&""!==A.size?1:+D,x&&(A=r?Fl(v.hoveroptions,r.hoveroptions,!0):v.hoveroptions)
var R,j
at?(R=.7,j=.35):L?(R=.9,j=.4):w?(R=1,j=0):(R=2,j=1),S=D*R,k=D*j}if(O.attr("transform","translate("+a.left+","+a.top+")").style("display",""),T(e,null,w?{symbol:A.symbol}:A,{color:w?null:C,symbolSize:{inner:k,outer:S},transform:[o,l],imageSize:15},t),w){var I=b===Za?{fill:Qa}:t.legendHighlight.getEffect(b,"scatter",Aa.test(b)?C:Qa,{fill:Qa,stroke:C},p,"plot")
e.styles(I)}}}function v(e,n,l,s,u,h,d,f,p,v){var m=e.seriesdata,x=ut(m[n].yaxiscolumnorder),b=nt[x].scale,w=e.chartTypes[n].value,k=w==qr.charttype.arearange,S=w===qr.charttype.gantt,O=k||S?1:null,A=(null!=o.bandwidth&&o.bandwidth(),null!=(Y=e.renderer[n]).seriesdataAfterUpdate?Y.seriesdataAfterUpdate[u]:m[n].data[u])
if(null!=A){var P=A[s]
if(null!=(s=P&&i.getActualX(P)===l?s:function(t,e){var n=null,r=ht(i,"x")
return e.some(function(e,a){var o=!r(i.getX(e))&&i.getX(e)===t
return o&&(n=a),o}),n}(l,A))&&!F(e.seriesdata[n])&&!C(A[s],i,x)){p.set(n,s),Os.updateSharedInfo(e,p,n)
var T,M=A[s],E=e.dataObject.getXYvalue(rt,pt(w),o,b,x,M,"x",null,O),L=e.dataObject.getXYvalue(rt,pt(w),o,b,x,M,"y",null,O),z=m[n].plotoptions,D=r.chart.plot.plotoptions[qr.charttypenames.get(w)],R=Ve(z,D,e,e.zcEventType||"mousemove"),j=Ve(z,D,e,"cursor")
w===qr.charttype.line||w===qr.charttype.scatter&&f?ft.hideCursor(e.eventHandler.trackerElement):ft.addCursor(j)
var I=d3.event||e.eventHandler.targetEvent
if(X(R)&&Z(R,h,I,{x:E,y:L}),q(R,I)){if((null!=(J=v||J)||d)&&Xe(w)){var H=e.systemConf.chart.axes.yaxis[x||0].reversed,B=tt(z,D)("border")||{},N=w===qr.charttype.bullet?0:B.radius
N=B&&B.show?N:0
var Y=e.renderer[n],G=e.dataObject.getTransRectValue("radius",null,null,null,null,N),Q=e.legendHighlight.getLegendHighlightEffect(n,"selectedSeries","plot"),$=ie(e,ue(D,e)?s:n,V(n,u,s),n),et=Q===Za?{fill:Qa}:e.legendHighlight.getEffect(Q,"bar",Aa.test(Q)?$:Qa,{fill:Qa,stroke:$},n,"plot"),it=kt(c.selectAll("#zcbarhighlight"),"path",[1],".","class","highlight"+n+u).styles(et)
d&&!$e(e.chartTypes[n].value)&&(J=U(n,u,s)),g(it,J,G,0,H,d)
var ot=z&&z.levelMarker?Fl(D.levelMarker,z.levelMarker,!0):D.levelMarker
if(S&&ot.enabled){var lt=e.dataObject.getTransRectValue("radius",null,null,null,0),st={fill:ot.color||$},ct=kt(c.selectAll("#zcbarhighlight"),"path",[1],"#","id","levelMarkerpath")
ct.styles(st),g(ct,K,lt,0,H)}}if(Ue(w)||at){T=!0;(function(e,n,r,o,l,s,u,h,d,f,p,g,y){var v=t.seriesdata,m=t.systemConf.legend.patternPallete?.5:.2,x=ie(t,l,V(l,s,u),l),b=t.legendHighlight.getLegendHighlightEffect(l,"selectedSeries","plot"),w=b===Za?{fill:Qa}:t.legendHighlight.getEffect(b,"area",x,{fill:Qa,stroke:x},l,"plot")
y||_(c.selectAll("g#zcbarhighlight")),e.style("display","").attr("transform","translate("+a.left+","+a.top+")").styles(w)
var C,k,S,O,A,P,T,M,E=tt(r,o)("mode"),L=(m=W(o.hoveroptions.fillOpacity,.2),ht(i,"x")),z=ht(i,"y",f)
if("linear"==E&&null!=g){var D=wi(g.map(function(t){return[t.x,t.y]}))
kt(e,"polygon",[g],".","class","highlight"+l).attr("points",D.toString()).styles({"fill-opacity":m,display:""})}else{var R,j,I=pt(n),H=t.dataObject.containsNegativeData(f),B=t.systemConf.chart.axes.xaxis.reversed,N=t.systemConf.chart.axes.yaxis[f||0].reversed
if(at){j=null!=(G=t.renderer[l]).seriesdataAfterUpdate?G.seriesdataAfterUpdate[s]:v[l].data[s]
var F=N&&!I?d.domain().length-1:0,Y=function(t){var e=I?d(t.y0+t.y):d(i.getY(t,f))+(null!=d.bandwidth?d.bandwidth()/2:0)
return Da(e,d.range()[F])},U=function(t){var e
return e=I?0==l?Ra(d.range()[0],d(H)):d(t.y0):d(d.domain()[F])+(null!=d.bandwidth?d.bandwidth()/2:0),Da(e,d.range()[F])},X="strokeEnlarge"===b
R=(X?Mi:Li)().angle(function(t){return h(i.getX(t))}).curve(ci(E,rt)),X?R.radius(Y):R.outerRadius(Y).innerRadius(U)}else{var G,q=n==qr.charttype.arearange,Z=q?1:null,Q=null!=(G=t.renderer[l]).seriesdataAfterUpdate?G.seriesdataAfterUpdate[s]:v[l].data[s],K=Q[u],$=t.dataObject.getXYvalue(rt,I,h,d,f,K,"x",null,Z),J=t.dataObject.getXYvalue(rt,I,h,d,f,K,"y",null,Z),et=0!=u,nt=u!=Q.length-1
if(B?nt:et){var it=Q[B?u+1:u-1]
C=($+t.dataObject.getXYvalue(rt,I,h,d,f,it,"x",null,Z))/2,k=(J+t.dataObject.getXYvalue(rt,I,h,d,f,it,"y",null,Z))/2}if(B?et:nt){var ot=Q[B?u-1:u+1]
S=($+t.dataObject.getXYvalue(rt,I,h,d,f,ot,"x",null,Z))/2,O=(J+t.dataObject.getXYvalue(rt,I,h,d,f,ot,"y",null,Z))/2}A=rt?0:null==C?$:C,P=ii([k,J,O,d(d.domain()[N?0:1])]),T=rt?oi([C,$,S,d(H)||$]):null!=C&&null!=S?S-C:null==C?null==S?1:S-$:$-C,M=rt?null==k?J-O:null==O?k-J:k-O:a.height-P
var lt=Math.max(0,-A),st=Math.max(0,-P),ut=Math.max(0,A+T-a.width-(t.scrolledX||0)),ct=Math.max(0,P+M-a.height-(t.scrolledY||0))
A=Math.max(0,A),P=Math.max(0,P),T-=lt+ut,M-=st+ct,e.style("display","block"),j=Q,R=Ei().defined(function(t){return!z(i.getY(t,f))&&!L(i.getX(t))}).curve(ci(E,rt)),rt?R.x0(function(t,e){return I?0==l&&0==s&&0==e?Da(d.range()[0],d(H)):d(t.y0):null!=d.bandwidth?d.origRange[0]+d.bandwidth():Da(d.range()[0],d(H))}).x1(function(e){return t.dataObject.getXYvalue(rt,I,h,d,f,e,"x")}).y(function(e){return t.dataObject.getXYvalue(rt,I,h,d,f,e,"y",null,Z)}):R.x(function(e){return t.dataObject.getXYvalue(rt,I,h,d,f,e,"x")}).y0(function(e,n){return I?0==l&&0==s&&0==n?Ra(d.range()[0],d(H)):d(e.y0):q?t.dataObject.getXYvalue(rt,I,h,d,f,e,"y",null,0):null!=d.bandwidth?d.origRange[0]+d.bandwidth():Ra(d.range()[0],d(H))}).y1(function(e){return t.dataObject.getXYvalue(rt,I,h,d,f,e,"y",null,Z)})}var dt={name:"rect",id:t.id,x:A,y:P,width:T,height:M},ft={chartObj:t},gt=Dl.get(Bl,"rect",dt,ft)
kt(c.selectAll("#zcareahighlight"),"path",[1],".","class","highlight"+l).datum(j).attr("d",R).attr("stroke","").attr("clip-path",at?null:"url("+t.defsLocation+"#"+gt+")").styles({"fill-opacity":m,display:""})}})(c.selectAll("#zcareahighlight"),w,z,D,n,u,s,o,b,x,0,h.poly,d)}if(Ue(w)||Qe(w)||w===qr.charttype.line||at||S){var dt=kt(c.selectAll("#zcscatterhighlight"),"g",[1],".","class","highlight"+n)
if(k||S){var gt,yt,vt=kt(dt,"g",[1],".","class","yrangePos_0"),mt=kt(dt,"g",[1],".","class","yrangePos_1"),xt={}
if(S){xt=Y.markerProperties
var bt=Y.getMarkerPosition(M,xt.subseriesIndex,0,Y)
rt?(E=bt.y,L=bt.x+bt.width/2,gt=bt.y+bt.height,yt=bt.x+bt.width/2):(E=bt.x+bt.width/2,L=bt.y,gt=bt.x+bt.width/2,yt=bt.y+bt.height)}else gt=e.dataObject.getXYvalue(rt,pt(w),o,b,x,M,"x",null,0),yt=e.dataObject.getXYvalue(rt,pt(w),o,b,x,M,"y",null,0)
y(vt,w,z,D,gt,yt,o,b,x,m,u,n,s,T,{size:xt.size,hoveroptions:D.hoveroptions.end}),y(mt,w,z,D,E,L,o,b,x,m,u,n,s,T,{size:xt.size,hoveroptions:D.hoveroptions.start})}else y(dt,w,z,D,E,L,o,b,x,m,u,n,s,T,null,d)}at&&c.selectAll("#zcareahighlight,#zcscatterhighlight").attrs({"clip-path":null,transform:"translate("+(a.left+e.plotarea_approx.x)+","+(a.top+e.plotarea_approx.y)+")"}).style("display","")}h.data=M,e.eventHandler.oldInfo={nearestPoint:h,type:w,chartObj:e,isNoInfo:!1}}}}function m(e,n,r,a){var u,c,h,d,f,p,g,y,v,m,x,b=t.systemConf.chart.axes.xaxis.reversed,w=qr.scale.invert(uo,e,l,rt,null,b),A=t.seriesdata,_=(t.dataObject.isCombinationalChart,{}),P={},T=[],E={},L=null,D=!1,R=!1,I={},B=null,Y="x",V="y"
rt&&(Y="y",V="x")
var W=[],U=[],G=A.map(function(A,W){var U=t.chartTypes[W].value
h=null==h||t.dataObject.isCombinationalChart?E[U]||hn(t,U,null):h
var X=ut(A.yaxiscolumnorder),G=t.systemConf.chart.axes.yaxis[X||0].reversed,q=r[X].eventscale,Z=t.dataObject.containsNegativeData(X),Q=ht(i,"y",X),K={},$=A.plotoptions,J=a.chart.plot.plotoptions[t.chartTypes[W].name],tt=($?Fl(J.marker,$.marker,!0):J.marker)||{},et=10*(tt.enabled?tt.size||1:1)
if(F(A))return[null]
var nt=t.renderer[W],at=nt.commonOption||Re(t.rendererConf[W],W)
ft.bulletEvents||(ft.bulletEvents=new qr.BulletEvent(t,nt.commonOption,n,r[0].scale))
var it=ft.bulletEvents
return A.data.map(function(r,a){var A=null!=nt.seriesdataAfterUpdate?nt.seriesdataAfterUpdate[a]:r
if(null!=(d=function(t,e){var n=o.domain()[t],r=null,a=ht(i,"x")
return e.forEach(function(t,e){var o=!a(i.getX(t))&&i.getX(t)===n
return o&&(null==r?r=[e]:r.push(e)),o}),r}(w,A)||null)){if(dt){var F=ae(i.getClr(A[d[0]]),t)
return T[W]=T[W]||[],T[W][a]=d,tt=F?0:null,R=!0,Xe(U)?(p=p||qr.scale.ordinalSubInvert(e,_[U],s,l,rt,U,b),P.shared=p,_.shared=w,P.shared=W):(P[U]=W,_[U]=w),tt}if($e(U)){var $=null
return A.forEach(function(r,a){var o=rn(t,r,n,q,X),l=ae(i.getClr(r),t),s=M(o,e)
!C(r,i,X)&&l&&0==s&&null===$&&(R=!0,_[U]=a,P[U]=W,u=o,$=s)}),$}if(Xe(U)){for(var J=d.length,tt=null,ot=0;J>ot;ot++){if(null==A[ft=d[ot]])return null
var lt=nn(t,A[ft],a,at)
if(Q(A[ft])||C(A[ft],i,X))return null
var st=M(lt,e,G);(F=ae(i.getClr(A[ft]),t))&&0==st&&!I[U]&&(tt=0,R=!0,I[U]=!0,P[U]=W,_[U]=ft,u=lt,U===qr.charttype.gantt&&(c=nt.getGanttLevelMarkerProp(A[ft],a,ft,nt,at))),qr.charttype.bullet===U&&(B=it.getCurrentPoint(e,A[ft]))}return tt}if(Ue(U)){lt=A[d=d[0]],F=ae(i.getClr(lt),t),tt=null
if(C(lt,i,X))return
var ut=U==qr.charttype.arearange
K=O(W,a,d,A,A[d-1],A[d],A[d+1],t.dataObject,i,rt,pt(U),n,q,X,Z,ut)
return H(e,K.points)&&(tt=0==a?j(e,K.curpt,K.curNext):a==A.length-1?j(e,K.prevCur,K.curpt):ii([j(e,K.prevCur,K.curpt),j(e,K.curpt,K.curNext)])),F&&(null==h||h>tt)&&null!=tt?(R=!0,I[U]=!0,h=tt,P[U]=W,f=a,_[U]=d,L=K.points,E[U]=h,tt):null}if(Qe(U)||U===qr.charttype.line){for(J=d.length,tt=$a,ot=0;J>ot;ot++){lt=A[ft=d[ot]],F=ae(i.getClr(lt),t)
var ct,ft,gt=qe(U)?0:nt.getSymbolSize?nt.getSymbolSize(lt):et,yt=nt.getSymbolBBox?nt.getSymbolBBox(lt):$a,vt=!1,mt=$a
if(C(lt,i,X))return
if(yt!=$a){var xt=S(lt,i,n,q,X,U,$a,Y,V,yt)
mt=j(e,xt[0],xt[1])}else mt=k(lt,e,n,q,X,U,$a,Y,V)
if(y=(qe(U)?t.dataObject.getXYvalue(rt,pt(U),n,q,X,lt,"z",t.zscale):gt)/2,ct=y>=mt,g=g||ct){if(ct)if(v=t.dataObject.getXYvalue(rt,pt(U),n,q,X,lt,"x"),m=t.dataObject.getXYvalue(rt,pt(U),n,q,X,lt,"y"),x){var bt=Xa*x.r*x.r,wt=Xa*y*y,Ct=.9*Ha(z(x.cx-v)+z(x.cy-m))<=ja(x.r-y)
vt=x.dist==$a||mt<x.dist||!(wt>bt&&Ct)}else vt=!0}else vt=h>=mt
if(U===qr.charttype.bubblepie){var kt=C(lt,i,X)?{x:0,y:0}:{x:t.dataObject.getXYvalue(rt,pt(U),n,q,X,lt,"x"),y:t.dataObject.getXYvalue(rt,pt(U),n,q,X,lt,"y")}
vt=vt&&N(e,kt,W,a,lt)}F&&vt&&(R=!0,I[U]=!0,tt=mt,h=mt,P.point=W,f=a,_.point=ft,D=U===qr.charttype.line||Qe(U),ct&&(x={cx:v,cy:m,r:y,dist:mt}))}return tt}}})}).map(function(t,e){var n=ii(t)
return null!=n?(W[e]=t.indexOf(n),U[e]=t.length):W[e]=U[e]=null,n})
D&&(G=G.map(function(e,n){var r=t.chartTypes[n].value
return"point"===(r=Qe(r)||r===qr.charttype.line?"point":r)&&P[r]===n?e:null}))
var q=dt&&X(p)?P.shared:$e(t.chartTypes[0].value)?G.lastIndexOf(ii(G)):G.indexOf(ii(G))
null!=G[q]&&R||(q=null),X(B)&&"marker"===B.type?q=null:X(q)&&(B=null)
var Z=dt&&X(p)?"shared":X(q)?t.chartTypes[q].value:null
return Z=dt||!Qe(Z)&&Z!==qr.charttype.line?Z:"point",{seriesPos:Z&&P[Z],itemPos:Z&&_[Z],itemPosShared:T,subseriesindex:W,subseriesLength:U,highlightpoint:u||null,levelMarkerPoint:c||null,distance:G[P],poly:L,currentQualitativeRangePoint:B,customPoint:gt.getClosest(e,h)}}function x(e,n,r,a,i,o){var l=t.systemConf.notes&&t.systemConf.notes.addOnDoubleclickEvent
if(qr.annotation&&l){if(!e){var s=t.seriesdata,u=a[r].slice(),c=u.splice(0,u.length)
s.length>1&&c.push(s[n].seriesname),e={coordinate:[i,o],data:c,basedOn:"plot"}}qr.annotation.addNotes(t,e)}}function b(e,n,a){var o,l,s,u,c,h,d,f,p,g,y=t.seriesdata,v=$a,m=$a,x="x",b="y"
rt&&(x="y",b="x"),y.map(function(y,w){var A=t.chartTypes[w],_=A.value,P=A.name,T=_==qr.charttype.arearange,M=hn(t,_),E=y.plotoptions,L=r.chart.plot.plotoptions[P],D=(E?Fl(L.marker,E.marker,!0):L.marker)||{},I=10*(D.enabled?D.size||1:1)
F(y)||(t.dataObject.isCombinationalChart?(!X(o)||(X(f)?M!=$a&&o>=M:m>M||m==$a||M==$a))&&(o=M):o=o==$a?M:o)
var B,Y=t.renderer[w],V=ut(y.yaxiscolumnorder),W=a[V].scale,U=t.dataObject.containsNegativeData(V),G=T?1:$a,q={}
return F(y)?[$a]:y.data.map(function(r,a){r=Y.seriesdataAfterUpdate?Y.seriesdataAfterUpdate[a]:r
var y=at?r.map(function(e){return{x:t.dataObject.getXYvalue(rt,pt(_),n,W,V,e,"x"),y:t.dataObject.getXYvalue(rt,pt(_),n,W,V,e,"y")}}):$a
return r.map(function(m,A){if(!C(m,i,V)){var P,M=qe(_)?0:Y.getSymbolSize?Y.getSymbolSize(m):I
if(Qe(_)||_===qr.charttype.line){var E=Y.getSymbolBBox?Y.getSymbolBBox(m):$a
if(E!=$a){var L=S(m,i,n,W,V,_,G,x,b,E)
l=j(e,L[0],L[1])}else l=k(m,e,n,W,V,_,G,x,b),l-=M/2
if(u=(qe(_)?t.dataObject.getXYvalue(rt,pt(_),n,W,V,m,"z",t.zscale):M)/2,P=u>=l,s=s||P,P||(l-=u),_===qr.charttype.bubblepie){var D=C(m,i,V)?{x:0,y:0}:{x:t.dataObject.getXYvalue(rt,pt(_),n,W,V,m,"x"),y:t.dataObject.getXYvalue(rt,pt(_),n,W,V,m,"y",$a,G)}
l=N(e,D,w,a,m)?l:Ta}}else{var F=function(e,n,r,a,o,l,s,u,c,h,d,f,p,g){var y=null,v=O(n,r,a,o,s,o[a],o[a+1],t.dataObject,i,rt,pt(u),c,h,d,f,p),m=1==v.points.length
at&&(v.points=g)
var x=!Ue(u)&&!at||H(l,v.points)
if((1==o.length||m)&&!C(e,i,d)){y=R(l,v.curpt)
var b=t.dataObject.isCombinationalChart,w=t.dataObject.noofAreaEnabledSeries,k=hn(t,qr.charttype.line);(w>1||1===w&&b)&&y>k&&(y=null)}if(x&&!C(e,i,d)&&1!=o.length&&!m){var S=j(l,v.curpt,v.curNext),A=j(l,v.prevCur,v.curpt),_=0!==a&&C(s,i,d)
y=0==a?S:a==o.length-1?A:_?S:ii([A,S])}return{distance:y,polygonPoints:v}}(m,w,a,A,r,e,B,_,n,W,V,U,T,y)
l=F.distance,q=F.polygonPoints,B=m}var X
if(s){if(P)if(c=t.dataObject.getXYvalue(rt,pt(_),n,W,V,m,"x"),h=t.dataObject.getXYvalue(rt,pt(_),n,W,V,m,"y"),d){var Z=Xa*d.r*d.r,Q=Xa*u*u,K=.9*Ha(z(d.cx-c)+z(d.cy-h))<=ja(d.r-u)
X=d.dist==$a||l<d.dist||!(Q>Z&&K)}else X=!0}else X=o==$a||o>=l
ae(i.getClr(m),t)&&X&&l!=$a&&(o=l,f=w,p=a,g=A,v=q.points,P&&(d={cx:c,cy:h,r:u,dist:l}))}})})})
var w=$a
return X(f)&&(w=o),{seriesPos:f,itemPos:g,subseriesindex:p,poly:v,customPoint:gt.getClosest(e,w)}}function w(){c.selectAll("#zcscatterhighlight,#zcbarhighlight,#zcareahighlight").style("display",Za)}function C(e,n,r){return t.seriesdata[0].type!=qr.charttype.stkdarea&&(null==e||ht(n,"x")(n.getX(e))||ht(n,"y",r)(n.getY(e,r)))}function k(e,n,r,a,i,o,l,s,u){var c={}
c[s]=t.dataObject.getXYvalue(rt,pt(o),r,a,i,e,"x"),c[u]=t.dataObject.getXYvalue(rt,pt(o),r,a,i,e,"y",null,l)
var h=c.x-n[s],d=c.y-n[u]
return Ha(z(h)+z(d))}function S(e,n,r,a,i,o,l,s,u,c){var h=[]
if(C(e,n,i))return 0
var d={}
return d.x=t.dataObject.getXYvalue(rt,pt(o),r,a,i,e,"x"),d.y=t.dataObject.getXYvalue(rt,pt(o),r,a,i,e,"y",null,l),rt?h.push({x:d.x,y:d.y-c.width/2},{x:d.x,y:d.y+c.width/2}):h.push({x:d.x-c.width/2,y:d.y},{x:d.x+c.width/2,y:d.y}),h}function O(t,e,n,r,a,i,o,l,s,u,c,h,d,f,p,g){var y,v,m,x,b,w,k=g?1:null
v=C(i,s,f)?{x:0,y:0}:{x:l.getXYvalue(u,c,h,d,f,i,"x"),y:l.getXYvalue(u,c,h,d,f,i,"y",null,k)},y=0==n?{x:0,y:0}:C(a,s,f)?v:{x:l.getXYvalue(u,c,h,d,f,a,"x"),y:l.getXYvalue(u,c,h,d,f,a,"y",null,k)},m=n==r.length-1?{x:0,y:0}:C(o,s,f)?v:{x:l.getXYvalue(u,c,h,d,f,o,"x"),y:l.getXYvalue(u,c,h,d,f,o,"y",null,k)},b=C(i,s,f)?{x:0,y:0}:A(l,u,c,t,e,n,h,d,f,p,i,g),x=0==n?{x:0,y:0}:C(a,s,f)?b:A(l,u,c,t,e,n-1,h,d,f,p,a,g),w=n==r.length-1?{x:0,y:0}:C(o,s,f)?b:A(l,u,c,t,e,n+1,h,d,f,p,o,g)
var S=0==n?{x:0,y:0}:C(a,s,f)?v:{x:(y.x+v.x)/2,y:(y.y+v.y)/2},O=n==r.length-1?{x:0,y:0}:C(o,s,f)?v:{x:(m.x+v.x)/2,y:(m.y+v.y)/2},_=0==n?{x:0,y:0}:C(a,s,f)?b:{x:(x.x+b.x)/2,y:(x.y+b.y)/2},P=n==r.length-1?{x:0,y:0}:C(o,s,f)?b:{x:(w.x+b.x)/2,y:(w.y+b.y)/2},T=[]
return C(a,s,f)&&C(o,s,f)?T.push(v):0==n||C(a,s,f)?T.push(v,O,P,b):n==r.length-1||C(o,s,f)?T.push(S,v,b,_):T.push(S,v,O,P,b,_),{points:T,prevCur:S,curNext:O,curpt:v}}function A(t,e,n,r,a,o,l,s,u,c,h,d){var f,p,g=d?0:null
if(e){var y=t.getXYvalue(e,n,l,s,u,h,"y",null,g),v=d?t.getXYvalue(e,n,l,s,u,h,"x",null,g):s.range()[0],m=d&&i.getY(h,u,0)<0?Ra:Da
n?(p=0==r&&0==a&&0==o?Da(s.range()[0],s(c)):s(h.y0),f={x:p,y:y}):(p=null!=s.bandwidth?s.origRange[0]+s.bandwidth():m(v,s(c)),f={x:p,y:y})}else{y=t.getXYvalue(e,n,l,s,u,h,"x"),v=d?t.getXYvalue(e,n,l,s,u,h,"y",null,g):s.range()[0],m=d&&i.getY(h,u,0)<0?Da:Ra
n?(p=0==r&&0==a&&0==o?Ra(s.range()[0],s(c)):s(h.y0),f={x:y,y:p}):(p=null!=s.bandwidth?v+s.bandwidth():m(v,s(c)),f={x:y,y:p})}return f}function _(t){t.style("display",Za)}function M(t,e,n){var r=t.x,a=t.y,i=r+t.width,o=a+t.height
n&&(rt?i=(r-=t.width)+t.width:o=a-t.height)
return r<=e.x&&e.x<=i&&(n&&!rt?o<=e.y&&e.y<=a:a<=e.y&&e.y<=o)?0:null}function L(e,n){return M({x:a.left+(t.scrolledX||0),y:a.top+(t.scrolledY||0),width:a.width,height:a.height},{x:a.left+e,y:a.top+n})}function z(t){return t*t}function R(t,e){return z(t.x-e.x)+z(t.y-e.y)}function j(t,e,n){return Ha(function(t,e,n){var r=R(e,n)
if(0===r)return R(t,e)
var a=((t.x-e.x)*(n.x-e.x)+(t.y-e.y)*(n.y-e.y))/r
return 0>a?R(t,e):a>1?R(t,n):R(t,{x:e.x+a*(n.x-e.x),y:e.y+a*(n.y-e.y)})}(t,e,n))}function I(t,e){var n=0,r=0
return n=e.x-t.x,n*=n,r=e.y-t.y,r*=r,Ha(n+r)}function H(t,e){for(var n,r,a,i,o=t.x,l=t.y,s=!1,u=0,c=e.length-1;u<e.length;c=u++)n=e[u].x,a=e[u].y,r=e[c].x,i=e[c].y,a>l!=i>l&&(r-n)*(l-a)/(i-a)+n>o&&(s=!s)
return s}function N(e,n,r,a,i){var o=Hs.getKey(i,r,t),l=t.subrenderer[a][o]
if(l){var s=l.data[r]
return Qt(s.startAngle,s.endAngle,Va(e.x-n.x,-(e.y-n.y)))}}function F(e){var n=e.plotoptions,a=ct(e.type||t.userdata.seriesdata.type,"string"),i=r.chart.plot.plotoptions[a]
return e.disabled||0==W(Ve(n,i,t,"enabled"),!0)}function V(e,n,r,a,i){var o=t.renderer[e],l=o&&o.seriesdataAfterUpdate?o.seriesdataAfterUpdate[n]:t.seriesdata[e].data[n],s=dt&&X(a)?a[e][n][0]:r
return i?l:l[s]}function U(e,n,r){if(X(e)&&X(r)){n=Wl(n,0)
var a=t.renderer[e],i=a.seriesdataAfterUpdate[n][r],o=a.commonOption||Re(t.rendererConf[e],e)
return nn(t,i,n,o)}}function G(t){return t=t.split("_"),{levelIndices:t.map(Number),seriesIndex:+t[0],itemIndex:+t[t.length-1]}}function q(t,e){return!X(t)||t&&!0===e.allowDefault}function Z(e,r,a,i){var o
if("threshold-marker"===r.type){var l="x"===r.thresholdType?"x":"y.groups["+r.yColumnIndex+"]"
o=Vl(t.axes,l+".threshold.line").getMetaInfo(r)}else o=function(e){var r,a=e.currentQualitativeRangePoint,i=Wl(e.point,e.data)||{},o=Wl(e.level,i&&i.level)
return r=X(o)?G(o):{seriesIndex:Wl(e.seriesPos,i.seriesIndex),subSeriesIndex:Wl(e.subseriesindex,e.subseriesPos,i.subSeriesIndex),itemIndex:Wl(e.itemPos,i.itemIndex)},n(e.subseriesindex)&&e.subseriesindex.some(function(t){return X(t)?r.subSeriesIndex=t:void 0}),X(a)&&(r.rangeIndex=a.rangeIndex,r.targetIndex=a.targetIndex),X(r.seriesIndex)&&X(r.itemIndex)&&(X(i)&&n(i.data)&&(i=i.data),n(i)||(r.subSeriesIndex=Wl(r.subSeriesIndex,0),i=V(r.seriesIndex,r.subSeriesIndex,r.itemIndex,e.itemPosShared),X(i.level)&&(r.levelIndices=G(i.level).levelIndices)),r.data=t.dataset.getMetaInfoObj(t,i,r.seriesIndex)),r.point=i,r}(r)
X(i)&&"object"==typeof i&&(o=Fl(o,i,!0,!0)),Y(e,a,o,t)}var Q,K,$,J,tt=qr.utils.getValueOfPlotOptions,et=i.getDataType("x"),nt=u,rt=(h=h,t.dataObject.getAxisRotated()),at=t.dataObject.isPolarAxisCategory,it=!0===r.tooltip.enabled,ot=t.container.selectAll(".zohocharts_scroll"),lt={target:"plot",chartObj:t},st=qr.DataProcessor.helpers,ut=st.getParsedYAxisOrder,ct=st.getChartType,ht=st.isCatNull,dt=Ss.hasSharedSeries(t),ft={},pt=function(e){return t.dataObject.isstacked(e)},gt=new qr.CustomPoints(t)
return gt.addPoints(t.cache.thresholdCustomPoints,!0),ft.initializeListener=function(){var n=t.eventHandler
$=t.eventHandler.tapOldInfo=null,n.trackerElement=kt(c,"rect",[1],".","class","eventhandler"),n.tooltipElement=qr.events.tooltip(e,r,t),n.tooltipElement.initialize(),n.customPoints=gt,f()
var a=t.eventHandler.trackerElement
a.style("fill-opacity",0)
var i=B(r.chart,"zoom.type",!0),o={click:n.click,dblclick:n.doubleclick,contextmenu:n.contextMenu},l={mousemove:n.mouseMove,mouseout:n.mouseOut}
if(fn(a,o,null,lt,"chart"),fn(a,l,null,lt,"chartmove"),fn(e,l,null,lt),i&&i!==Za)qr.setDefaultOptions("zoom",t.systemConf.chart,t.globalProp),n.initializeZoomListener()
else{fn(a,{},{tap:n.click,dbltap:n.doubleclick,singletouchmove:n.mouseMove,touchend:n.mouseOut},lt)}var s=t.eventHandler.tooltipElement,u="onwheel"in document.createElement("div")?"wheel":void 0!==document.onmousewheel?"mousewheel":"DOMMouseScroll",h=t.container.node(),d=null
if(t.d3container.on(u,function(){var t=h.getBoundingClientRect()
d&&(d.left!==t.left||d.top!==t.top)&&s.hide(s.element),d=t}),"auto"===r.tooltip.pointerEvents){var p=n.tooltipElement.element
p.on("mouseenter",function(){ft.mouseOnTooltip=!0}),p.on("mouseleave",function(){ft.mouseOnTooltip=!1,n.mouseOut()})}ft.reverseLegendHighlight=new vs(t),t.isGeoMap&&(ft.mapEvents=new Hn(t))},ft.initializeZoomListener=function(){t.zoom=qr.events.zoom(t,rt,r,i)
var e=t.eventHandler.trackerElement,n=ri(document.documentElement),a=t.zoom,o=t.eventHandler
a.zmInit()
var l=!1,s={mousedown:function(){pn(e,"chartmove"),fn(n,u,null,lt,"zoommove"),d3.event.preventDefault()}},u={mousemove:function(){t.eventHandler.mousePos=en(e.node(),d3.event),l||(t.eventHandler.mouseOut(),a.zmStart(t.eventHandler.mousePos),l=!0),a.zmMove(t.eventHandler.mousePos)},mouseup:function(){pn(n,"zoommove",u)
var r=a.zmEnd(t.eventHandler.mousePos)
l&&(t.eventHandler.mousePos=en(e.node(),d3.event),(a=t.zoom).zoomed(r))
var i={mousemove:o.mouseMove,mouseout:o.mouseOut}
fn(e,i,null,lt,"chartmove"),l=!1}},c={tap:o.click,dbltap:o.doubleclick,doubletouchmove:function(){t.eventHandler.mousePos=en(e.node(),d3.event),l||(t.eventHandler.mouseOut(),a.zmStart(t.eventHandler.mousePos),l=!0),a.zmMove(t.eventHandler.mousePos)},touchend:function(){pn(n,null,u)
var r=a.zmEnd(t.eventHandler.mousePos)
l?(t.eventHandler.mousePos=en(e.node(),d3.event),(a=t.zoom).zoomed(r)):o.mouseOut(),l=!1},singletouchmove:o.mouseMove}
fn(e,s,c,lt,"zoom")},ft.updateParams=function(n){r=(t=n).systemConf,a=t.plotarea,i=t.dataset,o=t.axes.x.eventscale,nt=t.axes.y.groups,l=t.barscale1,s=t.barscale2,h=t.seriesColor,e=t.tooltip.element,pt=function(e){return t.dataObject.isstacked(e)},rt=t.dataObject.getAxisRotated(),c=t.staticPaneSVG.selectAll("g.eventgroup"),et=i.getDataType("x"),it=!0===r.tooltip.enabled,t.eventHandler.tooltipElement=qr.events.tooltip(t.tooltip.element,r,t),t.eventHandler.tooltipElement.initialize(),t.eventHandler.bulletEvents=null,dt=Ss.hasSharedSeries(t),ft.reverseLegendHighlight=new vs(t),gt.removePoints(0,gt.points.length),gt.addPoints(t.cache.thresholdCustomPoints,!0),(t.xymultiRenderer||at)&&(E(t.eventHandler.trackerElement,t.plotarea),f()),t.zoom&&t.zoom.zmInit(!0)},ft.mouseMove=function(n){if(n.element,t.chartRendered){var a=t.eventHandler.tooltipElement
if(null!=a&&null!=a.timeout&&clearTimeout(a.timeout),!1!==t.stopPropogate&&d3.event.stopPropagation(),t.eventHandler.targetEvent=d3.event,t.xymultiRenderer||at||t.isGeoMap){t.eventHandler.mousemovetimer&&clearTimeout(t.eventHandler.mousemovetimer)
var l=t.eventHandler.trackerElement.node()
t.eventHandler.mousePos=en(l,d3.event),t.eventHandler.mousemovetimer=setTimeout(function(){if(t.isGeoMap)ft.mapEvents.handleEvent(t.eventHandler.mousePos,"mousemove",t.eventHandler.targetEvent)
else{var n=t.dataObject.noofBarEnabledSeries>0;(et===uo&&(n||dt)?function(n,a,l){var s=D(l),u={x:n[0]-s.x,y:n[1]-s.y},h=m(u,o,nt,r),d=t.seriesdata,f=h.seriesPos,p=h.itemPos,g=h.subseriesindex[f],y=h.subseriesLength[f],x=h.itemPosShared,b=h.currentQualitativeRangePoint
J=h.highlightpoint,K=h.levelMarkerPoint
var C=t.eventHandler.oldInfo,k=t.eventHandler.tooltipElement,S=h.customPoint
if(a=gn(a),X(S)){if("threshold-marker"===S.type){var O=Ve(null,S,t,"mousemove")
X(O)&&Z(O,S,a),gt.hoverPoint(S,a,u)}t.eventHandler.oldInfo={customPoint:S,isNoInfo:!0}}else{if(X(b)&&!1!==r.tooltip.enabled&&("marker"===b.type||!X(f))){var A=ln(a,u,0,0,t,h,rt,dt,{},!0,!1,!1),_=ft.bulletEvents.getTooltipContent(b,0),P=Ve(null,b,t,"mousemove")
return X(P)&&Z(P,b,a),w(),A.helpers.inheritColors=!0,A.helpers.itempos=b.itemIndex,A.helpers.chartType=b.chartType,k.show(t,A,_,!1,A.helpers),void(t.eventHandler.oldInfo={customPoint:b,isNoInfo:!0})}if(null==f)return t.eventHandler.mouseOut(),void(t.eventHandler.oldInfo={isNoInfo:!0})
var T=t.chartTypes[f].value,M=T==qr.charttype.arearange?1:null,E=ut(d[f].yaxiscolumnorder),z=nt[E].eventscale,R=V(f,g,p,x),j=dt?o.domain()[p]:i.getX(R),H=i.getY(R,E),B=t.dataObject.getXYvalue(rt,pt(T),o,z,E,R,"x",null,M),N=t.dataObject.getXYvalue(rt,pt(T),o,z,E,R,"y",null,M)
if(Xe(T)||null!=L(B,N)){if(null!=C&&!C.isNoInfo){var F=C.nearestPoint,Y=ct(C.type||t.userdata.seriesdata.type,ho)
if(F&&F.seriesPos==h.seriesPos&&F.itemPos==h.itemPos&&F.subseriesindex==h.subseriesindex&&Y==T)return c.selectAll("#zcbarhighlight,#zcareahighlight").style("display",""),e.style("visibility",it?"visible":"hidden"),void(an(t)&&t.staticPaneSVG.selectAll("g.crosshair").style("visibility","visible"))}var W=I({x:o(j),y:z(H)},u),U=dt?t.seriesdata.length:1
c.selectAll("#zcscatterhighlight").selectAll("*").remove(),c.selectAll("#zcbarhighlight").selectAll("*").remove(),c.selectAll("#zcareahighlight").selectAll("*").remove()
for(var G=Ci(),q=0;U>q;q++){var Q=dt?q:f
if(dt&&y>1)for(var $=0;y>$;$++)v(t,Q,j,p,$,h,dt,W>10,G)
else v(t,Q,j,p,g,h,dt,W>10,G)}if(it){var tt=ln(a,u,B,N,t,h,rt,dt,G,!0,!1,tn(t.chartTypes[f].value)&&t.subrenderer[g][Hs.getKey(R,f,t)].fillColorFunc)
k.show(t,tt,null,!0,tt.helpers)}}}}:p)(t.eventHandler.mousePos,t.eventHandler.targetEvent,l)}},0)}else{l=t.svg.node()
t.eventHandler.mousePos=en(l,d3.event)
var s={x:t.eventHandler.mousePos[0],y:t.eventHandler.mousePos[1]},u=d3.event.srcElement||d3.event.target
if(ri(u).attr("id"),n=n.constructor===Object?n:t.eventHandler.oldRenderer){var d=t.seriesdata,f=t.chartTypes[0].name,g=d[n.seriesPos].plotoptions,y=r.chart.plot.plotoptions[f],x=t.zcEventType||"mousemove",b=Ve(g,y,t,x),C=d3.event||t.eventHandler.targetEvent
if(X(b)&&Z(b,n,C),q(b,C)&&(t.eventHandler.oldRenderer=n,n.renderer.defaultMouseOverFunc(n.data,n.seriesPos,n.itemPos)),it){var k={left:s.x,top:s.y}
C=gn(d3.event)
var S=s.x-C.clientX,O=s.y-C.clientY
k.left-=S,k.top-=O,k.dLeft=S,k.dTop=O
var A={seriesindex:n.seriesPos,subseriespos:n.subseriesPos,color:n.color||h,svgFillFunc:n.renderer.fillColorFunc,itempos:n.itemPos,d:t.dataObject.isHierarchy?n.data.data||n.data:null}
a.show(t,k,null,!0,A)}}}}ft.reverseLegendHighlight.highlight(t.isAxisCategory||at||t.isGeoMap?t.eventHandler.oldInfo&&t.eventHandler.oldInfo.nearestPoint:n)},ft.mouseOut=function(e,n,a,i,o){if(!0!==ft.mouseOnTooltip){var l=t.seriesdata
a=a||0
var s=t.chartTypes[0].name,u=t.isNonAxisMultiSeriesCategory&&!at?l[a].plotoptions:l[0].plotoptions,c=r.chart.plot.plotoptions[s],h=t.eventHandler.oldInfo,d=r.tooltip.hideDelay,f={},p=d3.event||t.eventHandler.targetEvent,g=t.eventHandler.tooltipElement
if(t.isGeoMap)return ft.mapEvents.handleEvent(null,"mouseout",p)
h&&(f=Wl(h.nearestPoint,f),h.customPoint&&(c=h.customPoint))
var y=Ve(u,c,t,"mouseout")
if(o||t.chartRendered){var v=0
if(X(y))if(!t.xymultiRenderer||null!=h&&!h.isNoInfo){var m
h&&X(h.nearestPoint)?m=h.nearestPoint:n&&(m={seriesPos:0,itemPos:a,point:n.data}),X(m)&&Z(y,m,p)}else h&&X(h.customPoint)&&Z(y,h.customPoint,p)
if(q(y,p)){if(t.xymultiRenderer||at){p=d3.event
var x=t.eventHandler.trackerElement.node(),b=null!=p?en(x,p):t.eventHandler.mousePos
v=M(D(x),{x:rt?b[1]:b[0],y:rt?b[0]:b[1]})}var C=null!=p?p.relatedTarget:null,k=null!=p?p.target:null
if(t.xymultiRenderer&&0==v&&null!=C&&null!=g&&(k==g.element.node()||k==g.element.selectAll("div#tooltipcontent").node()||C==g.element.node()||C==g.element.selectAll("div#tooltipcontent").node()))return
if(!t.xymultiRenderer&&!at)if(e=e||t.renderer[a],"zctooltip"==this.id||null!=C&&null!=g&&(k==g.element.node()||k==g.element.selectAll("div#tooltipcontent").node()||k==g.element.selectAll("div#zctooltipafter").node()||k==g.element.selectAll("div#zctooltipbefore").node()||C==g.element.node()||C==g.element.selectAll("div#tooltipcontent").node()||C==g.element.selectAll("div#zctooltipafter").node()||C==g.element.selectAll("div#zctooltipbefore").node())){var S=t.eventHandler.oldRenderer
null!=S&&S.renderer.defaultMouseOutFunc(S.data,t.isNonAxisMultiSeriesCategory?S.seriesPos:S.itemPos,o)}else e.defaultMouseOutFunc(n,a,o)}clearTimeout(t.eventHandler.mouseouttimer),t.eventHandler.mouseouttimer=setTimeout(function(){!0!==i&&(clearTimeout(t.eventHandler.tooltipElement.timeout),t.eventHandler.tooltipElement.timeout=setTimeout(function(){w(),g.hide()},Wl(d,150)))},0),ft.reverseLegendHighlight.reset(),ft.hideCursor(t.eventHandler.trackerElement)}}},ft.click=function(e,a,i,l,s){if(t.chartRendered){var u=t.seriesdata,c=d3.event&&d3.event.touches,d=t.zcEventType||"click"
c&&"taphold"!==d&&(gs(t),cs=(new Date).getTime(),fs=this,ds=[e,a,i,l],hs=t)
var f=t.eventHandler.tooltipElement,p=d3.event||t.eventHandler.targetEvent
if(t.xymultiRenderer||at||t.isGeoMap){var g=d3.event,y=en(Q=t.eventHandler.trackerElement.node(),g)||t.eventHandler.mousePos
if(t.isGeoMap)return ft.mapEvents.handleEvent(y,"click",g)
var v=D(Q),x={x:y[0]-v.x-(at?t.plotarea_approx.x:0),y:y[1]-v.y-(at?t.plotarea_approx.y:0)}
Q=this
var w=t.dataObject.noofBarEnabledSeries>0,C=(et===uo&&w?m:b)(x,o,nt,r),k=C.seriesPos,S=(l=C.itemPos,n(C.subseriesindex)?C.subseriesindex[k]:C.subseriesindex),O=Wl(C.customPoint,C.currentQualitativeRangePoint)
if(X(O)){var A=Ve(null,O,t,d)
X(A)&&Z(A,O,g),t.eventHandler.oldInfo={customPoint:O,isNoInfo:!0}}if(null==k&&!X(O))return void(c&&(t.eventHandler.mouseOut(),t.eventHandler.tapOldInfo=null))
if(X(k))var _=t.chartTypes[k].value,P=u[k].plotoptions,T=r.chart.plot.plotoptions[qr.charttypenames.get(_)],M=Ve(P,T,t,d,C.currentQualitativeRangePoint),E=Ve(P,T,t,"cursor")
if(X(M)){var L=ut(u[k].yaxiscolumnorder),z=nt[L].eventscale
a=V(k,S,l,C.itemPosShared)
if(Xe(_)){var R=C.highlightpoint||U(k,S,l)
ft.addCursor(E),Z(M,C,p,{x:R.x,y:R.y})}else{var j=t.dataObject.getXYvalue(rt,pt(_),o,z,L,a,"x"),H=t.dataObject.getXYvalue(rt,pt(_),o,z,L,a,"y"),B=Ue(_)||at?null:I({x:j,y:H},x)
if(!((qe(_)?t.zscale(t.dataset.getZ(a))/2:10)>=B))return void ft.hideCursor(t.eventHandler.trackerElement)
ft.addCursor(E),Z(M,C,p,{x:j,y:H})}}if(q(M,p)&&(f.hide(f.element),ft.hideCursor(t.eventHandler.trackerElement)),c&&"taphold"!==d&&q(M,p)){$=t.eventHandler.tapOldInfo
var N=C.currentQualitativeRangePoint||{},F=$&&$.currentQualitativeRangePoint||{}
!$||$.itemPos!=l||$.seriesPos!=k||$.subseriesindex!=S||N.rangeIndex!=F.rangeIndex||N.targetIndex!=F.targetIndex||(C.highlightpoint&&C.highlightpoint.type||N.type)!=F.type?(t.eventHandler.mouseMove({}),t.eventHandler.tapOldInfo={seriesPos:k,subseriesindex:S,itemPos:l,currentQualitativeRangePoint:N,type:C.highlightpoint&&C.highlightpoint.type||N.type}):(t.eventHandler.mouseOut(),t.eventHandler.tapOldInfo=null)}}else{var Y=t.chartTypes[0].name
if(X(M=Ve(P=u[t.isNonAxisMultiSeriesCategory?i:0].plotoptions,T=r.chart.plot.plotoptions[Y],t,d))&&Z(M,s,p),q(M,p)&&(f.hide(f.element),ft.hideCursor(t.eventHandler.trackerElement)),c&&"taphold"!==d&&q(M,p))if(($=t.eventHandler.tapOldInfo)&&(s.level?s.level==$.level:$.itemPos==l&&$.seriesPos==i&&0==$.subseriesindex))e.defaultMouseOutFunc(a,l),t.eventHandler.tapOldInfo=null
else{if(e.defaultMouseOverFunc(a,i,l),it){var W=t.svg.node()
t.eventHandler.mousePos=en(W,d3.event)
var G={left:(x={x:t.eventHandler.mousePos[0],y:t.eventHandler.mousePos[1]}).x,top:x.y},K=(p=gn(d3.event),x.x-p.clientX),J=x.y-p.clientY
G.left-=K,G.top-=J,G.dLeft=K,G.dTop=J
var tt={seriesindex:s.seriesPos,subseriespos:s.subseriesPos,color:s.color||h,svgFillFunc:s.renderer.fillColorFunc,itempos:s.itemPos,d:t.dataObject.isHierarchy?s.data.data||s.data:null}
f.show(t,G,null,!0,tt)}t.eventHandler.tapOldInfo={seriesPos:i,subseriesindex:0,itemPos:l,level:s.level}}}}},ft.doubleclick=function(e,n,a){if(t.chartRendered){t.noPropogate&&d3.event.stopPropagation()
d3.event&&d3.event.touches&&!t.isGeoMap&&(t.eventHandler.mouseOut(),t.eventHandler.tapOldInfo=null)
var i=d3.event||t.eventHandler.targetEvent,l=t.eventHandler.tooltipElement,s=t.seriesdata,u=t.zcEventType||"doubleclick"
if(t.xymultiRenderer||at||t.isGeoMap){var c=en(Q=t.eventHandler.trackerElement.node(),d3.event)
if(t.isGeoMap)return ft.mapEvents.handleEvent(c,"doubleclick",event)
var h=D(Q),d={x:c[0]-h.x-(at?t.plotarea_approx.x:0),y:c[1]-h.y-(at?t.plotarea_approx.y:0)}
Q=this
var f=t.dataObject.noofBarEnabledSeries>0,p=(et===uo&&f?m:b)(d,o,nt,r),g=Wl(p.customPoint,p.currentQualitativeRangePoint)
if(X(g)&&!X(v)){var y=Ve(null,g,t,u)
return X(y)&&Z(y,g,i),void(t.eventHandler.oldInfo={customPoint:g,isNoInfo:!0})}var v=p.seriesPos
if(null==v)return
var w=p.itemPos,C=p.subseriesindex instanceof Array?p.subseriesindex[v]:p.subseriesindex,k=(e=V(v,C,w,p.itemPosShared),t.chartTypes[v].value),S=Ve(L=s[v].plotoptions,z=r.chart.plot.plotoptions[qr.charttypenames.get(k)],t,u,p.currentQualitativeRangePoint),O=Ve(L,z,t,"cursor")
if(Xe(k)){if(ft.addCursor(O),X(S)&&Z(S,p,i),q(S,i)){var A=Wl(p.highlightpoint,{})
x(null,v,w,V(v,C,w,p.itemPosShared,!0),A.x,A.y)}}else{var _=ut(s[v].yaxiscolumnorder),P=nt[_].eventscale,T=t.dataObject.getXYvalue(rt,pt(k),o,P,_,e,"x")+(at?t.plotarea_approx.x:0),M=t.dataObject.getXYvalue(rt,pt(k),o,P,_,e,"y")+(at?t.plotarea_approx.y:0),E=Ue(k)||at?null:I({x:T,y:M},d)
if((qe(k)?t.zscale(t.dataset.getZ(e))/2:10)>=E&&(ft.addCursor(O),X(S)&&Z(S,p,i,{x:T,y:M}),q(S,i))){x(null,v,w,V(v,C,w,p.itemPosShared,!0),T,M)}q(S,i)&&ft.hideCursor(t.eventHandler.trackerElement)}}else{var L,z,R=t.chartTypes[0].name
X(S=Ve(L=s[t.isNonAxisMultiSeriesCategory?n:0].plotoptions,z=r.chart.plot.plotoptions[R],t,u))&&Z(S,{seriesPos:0,itemPos:n,point:e.data},i),q(S,i)&&x(a)}q(S,i)&&(l.hide(l.element),ft.hideCursor(t.eventHandler.trackerElement))}},ft.contextMenu=function(){var e=r.chart.plot.events.contextmenu
if(null!=e){Y(e,d3.event||t.eventHandler.targetEvent,t),d3.event.preventDefault()}},ft.addCursor=function(e){var n=d()
e=e||(B(r.chart,"zoom.type")&&t.systemConf.chart.zoom.type!=Za?"crosshair":Ka)
n.style("cursor",e)},ft.hideCursor=function(){d().style("cursor","default")},ft.helpers={isDefaultAllowed:q,triggerUserCallback:Z,eventDisabled:F},ft},function(){"use strict"
function t(t,e,n,r,a){return{x:a?e:t,y:a?t:e,width:a?r:n,height:a?n:r}}function e(t,e,n,r){this.chart=t,this.barOptions=e,this.scale={x:n,y:r},this.barOptions=e,this.axesRotated=t.dataObject.getAxisRotated(),this.cache=Ci()}e.prototype.getCurrentPoint=function(t,e){for(var n,r=this.getCurrentRectangles(e),a=r.length;a--;)if(n=r[a],un(t.x,t.y,n))return n
return null},e.prototype.getCurrentRectangles=function(e){if(e.isDummy)return[]
var r=this.chart,a=r.dataset.getX(e)
if(this.cache.has(a))return this.cache.get(a)
var i,o,l,s,u=this.scale.y,c=this.scale.x,h=r.systemConf.chart.plot.plotoptions.bullet.levelMarker,d=r.systemConf.chart.plot.plotoptions.bullet.targetMarker,f=this.barOptions,p=c(a)+f.levelMarkerPadding,g=c.bandwidth(),y=Ra(h.maxBandWidth,g),v=r.dataset.getDataType("y",0),m=[],x=e[h.dataindex]||[],b=this.axesRotated,w=c.domain().indexOf(a),C=null
n(x)||(x=[x])
var k=x.slice(0)
if(v===co){var S=r.dataset.getColumn("y",0)
l=X(S.time)?S.time:null}k.push(0)
var O,A=(k=(k=k.map(function(t){return v===co?bn(t,0,l).getTime():t})).sort(b?_i:Pi)).map(function(t){return u(t)})
for(k.splice(k.indexOf(0),1),O=(s=A.length-1)-1;s--;)(o=A[s+1]-A[s])>0&&(i=A[s]),i=A[s],o>0&&(C=t(p,i,y,o,b),C.currentStage=k[s],C.type="levelMarker",C.data=e,C.rangeIndex=O-s,C.itemIndex=w,C.events=h.events,C.chartType=r.chartTypes[0],m.push(C))
if(!0===d.enabled){y=Wl(d.size,f.levelMarkerWidth-2*Wl(d.padding,f.padding/2)),X(d.size)&&(y=10*Ra(y,g/10)),o="line"===d.symbol?Da(Wl(d.outerStrokeWidth,d.innerStrokeWidth,0)):y
var _=e[d.dataindex]
p=c(r.dataset.getX(e))-0,i=u(_)-0,p+=(g-y)/2,i-=o/2,5>o&&(o=5,i-=2.5)
var P=(d.events||{}).triggerOffset||0;(C=t(p-=P/2,i-=P/2,y+=P+0,o+=P+0,b)).type="marker",C.data=e,C.currentStage=_,C.itemIndex=w,C.targetIndex=0,C.events=d.events,C.chartType=r.chartTypes[0],m.push(C)}return this.cache.set(a,m),m},e.prototype.getTooltipContent=function(t,e){var n=this.chart,r=n.systemConf.chart.plot.plotoptions.bullet,a=sn(n,r.levelMarker),i=sn(n,r.targetMarker),o=Vl(r,"levelMarker.events")||{},l=Vl(r,"targetMarker.events")||{},s=("marker"===this.type?i:a)||n.dataset.getColumn("y",0),u=t.currentStage,c=s.datatype,h=n.dataset.getMetaInfoObj(n,t.data,e),d=yn(s[c],u,c,n,"tooltip"),f={value:u,formattedValue:d,actualData:t.data,data:h}
return"marker"===t.type?Y(l.tooltipContent,f,n,"tooltip")||"Target: "+d:Y(o.tooltipContent,f,n,"tooltip")||"Range: "+d},qr.BulletEvent=e}(),function(t){function e(t,n,r){return this instanceof e?(n=Wl(n,[]),r&&(n=e.toCircle(n)),this.chart=t,void(this.points=e.addType(n))):new e(n)}function n(t,e,n,r,a,i){var o=t.eventHandler.oldInfo,l=t.systemConf.tooltip,s=t.systemConf.tooltip.sharedSeriesInfo,u=t.staticPaneSVG.selectAll("g.eventgroup"),c=!0===l.enabled||!0===i,h=t.eventHandler.tooltipElement
o&&!1===o.isNoInfo&&t.eventHandler.mouseOut(),clearTimeout(h.timeout),u.selectAll("#zcscatterhighlight,#zcbarhighlight,#zcareahighlight").style("display",Za)
var d=r.x+r.width/2,f=r.y+r.height/2
if(X(n)||(n={x:d,y:f}),X(e)&&(e=gn(e)),!X(e)){var p=t.svg.node().getBoundingClientRect()
e={clientX:d+t.plotarea.left+p.x,clientY:f+t.plotarea.top+p.y}}if(a&&"circle"===r._type&&function(t,e,n,r,a,i){var o=r.selectAll("#zcscatterhighlight").style("display",null).attr("transform","translate("+a.left+","+a.top+")"),l=Vl(t.marker,"hoveroptions")||{},s={color:t.color,symbolSize:{inner:t.size/2,outer:t.size},transform:[e,n]}
T(o,null,l,s,i)}(r,d,f,u,t.plotarea,t),c){var g=ln(e,n,d,f,t,null,t.axes.rotated,s,null,!1,!1),y=[r.text,r.formattedValue].join(": "),v=r.marker,m=Wl(r.events,{}).tooltipContent
if(X(m)){var x=Y(m,e,{data:[r.columnInfo],itemIndex:r.itemIndex,point:r.point,pointFormatted:r.formattedValue},t)
X(x)&&(y=x)}g.helpers.backgroundColor=Wl(l.backgroundColor,v.fillColor,r.color),g.helpers.borderColor=Wl(l.borderColor,v.strokeColor,r.color),h.show(t,g,y,!1,g.helpers)}}e.prototype.getClosest=function(t,e){X(e)||(e=Number.MAX_VALUE)
for(var n,r,a=this.points,i=a.length,o=null,l=null,s=e,u=0;i--;)"circle"===(n=a[i])._type?(r=n.triggerOffset||0,u=cn(t.x,t.y,n),r>u&&s>u&&(0>=u&&(l=n),s=u,o=n)):"rect"===n._type&&un(t.x,t.y,n)&&(o=l=n)
return Wl(l,o)},e.prototype.addPoints=function(t,n){return t?(n&&(t=e.toCircle(t)),Array.prototype.push.apply(this.points,e.addType(ut(t))),this):void 0},e.prototype.removePoints=function(t,e){return this.points.splice(t,e||1)},e.prototype.hoverPoint=function(t,e,r,a,i,o){i=!1!==i,(a=!1!==a)&&n(this.chart,e||d3.event,r,t,i,o)},e.prototype.leavePoints=function(){if(this.points.length){var t=this.chart
t.staticPaneSVG.selectAll("g.eventgroup").selectAll("#zcscatterhighlight").style("display",Za),t.eventHandler.tooltipElement.hide()}},e.toCircle=function(t){return t.forEach(function(t){t._converted||X(t.r)||(t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t.r=Da(t.width,t.height)/2,t._converted=!0)}),t},e.addType=function(t){return t.forEach(function(t){t._type=X(t.r)?"circle":X(t.x)&&X(t.y)&&X(t.width)&&X(t.height)?"rect":"poly"}),t},t.CustomPoints=e}(qr)
var vs=function(t){var e=t.legendarea.element.selectAll(".legseries").node()
this.chartObj=t,this.legendSeries=e,this.legendElements=e?e.children:[],this.itemHighlighted=!1,this.hoveredSeriesIndex=$a,this.previousHoveredSeriesIndex=$a,this.legend_series_height=$a,this.legendScrollable=$a,e&&(this.legend_series_height=e.clientHeight,this.legendScrollable=e.scrollHeight>this.legend_series_height)}
vs.prototype.highlight=function(t){var e=this.chartObj,n=this.previousHoveredSeriesIndex,r=(c=e.systemConf.legend).itemHoverStyle
if(r&&r.showOnDataHover&&(!ts.isContinousLegend(e)||r.type&&r.type!==Za)){var a=e.eventHandler.oldInfo,i=e.legend.component.highlightItem
if(!(e.isAxisCategory||e.dataObject.isPolarAxisCategory||e.isGeoMap)||a&&!a.isNoInfo){var o,l,s
e.isAxisCategory||e.dataObject.isPolarAxisCategory||e.isGeoMap?(o=t.data,l=t.seriesPos,s=t.itemPos):(o=t.data.data||t.data,l=t.seriesPos,s=t.itemPos)
var u=this.hoveredSeriesIndex=this.getLegendIndex(o,e.isAxisCategory||e.dataObject.isPolarAxisCategory||e.isNonAxisMultiSeriesCategory?l:s)
if(ts.isContinousLegend(e)){var c,h=e.dataset.getClr(o),d=(c=e.systemConf.legend).colorBand.ranges,f=e.axes.clr.brushScale
i(d&&d.length?f(d[u])+f.bandwidth()/2:f(h),!0,$a,d&&d.length?u:[h]),this.itemHighlighted=!0}else{var p=this.legendElements
if(p[u]){var g=ts.getLegendData(e)
u!==n&&null!==n&&i(p[n],g[n],n,c),i(p[u],g[u],u,c,!0),this.itemHighlighted=!0,!this.legendScrollable||e.systemConf.legend.expandable&&e.systemConf.legend.expandable.show||(this.legendSeries.scrollTop=p[u].offsetTop-this.legend_series_height/2)}}this.previousHoveredSeriesIndex=u}}},vs.prototype.reset=function(){if(this.itemHighlighted){var t=this.legendElements,e=this.chartObj,n=this.hoveredSeriesIndex,r=e.legend.component.highlightItem
if(ts.isContinousLegend(e))r($a,!1)
else if(X(t[n])){var a=ts.getLegendData(e),i=e.systemConf.legend
r(t[n],a[n],n,i)}this.hoveredSeriesIndex=null}this.itemHighlighted=!1},vs.prototype.getLegendIndex=function(t,e){var n=this.chartObj,r=n.axes.clr
return r.scaleType?Gl.getItemIndex(n,r.indexScale,t):null!=e?e:void 0}
var ms={YYYY:"%Y",MMMM:"%B",EEEE:"%A",EEE:"%a",MMM:"%b",YY:"%y",MM:"%m",EE:"%U",dd:"%d",HH:"%H",hh:"%I",mm:"%M",ss:"%S",a:"%p",MILLI:"%L",z:"%Z",QT:"$Q"},xs={decimal:"d",exponent:"e",float:"f",binary:"b",octal:"o",hexadecimal:"x",SIprefix:"s"},bs={Q:Mn},ws=Object.keys(bs).map(function(t){return"\\$"+t}),Cs=new RegExp(ws.join("|"))
qr.events.tooltip=function(t,r,a){"use strict"
function i(t,e,n,r,a){var i=t.staticPaneSVG.selectAll("line."+a+"-crosshair"),o="x"==a&&!t.axes.rotated||"y"==a&&t.axes.rotated
i.attrs({x1:o?e:t.plotarea.left,y1:o?t.plotarea.top:n,x2:o?e:t.plotarea.left+t.plotarea.width,y2:o?t.plotarea.height+t.plotarea.top:n}).styles({"shape-rendering":"crispEdges",stroke:r.color,"stroke-width":r.strokeWidth,"stroke-dasharray":x(r.dashStyle,r.strokeWidth),"pointer-events":Za})}function o(t,e,n,r,i,o){if(B(qr,"tooltip.getTheme")&&X(c.tooltip.theme)&&""!==c.tooltip.theme&&X(a.tooltip.content))return h.getCustomizedVal(a,a.tooltip.content,t,e,n,i,"tooltip",r)
var l=s(a.chartTypes[t].name),u=h.getDataPoint(a,null,t,e,n,i),d=ie(a,l?n:t,u,t),f=(o||g).filter(function(r){return!(p[r]&&N(h.getDataPoint(a,r,t,e,n,i)))}),y=Os.getContentTemplate(a,$a,f)
return h.getCustomizedVal(a,y,t,e,n,i,"tooltip",d)}function l(t,e){return function(){var n=d3.interpolateRound(parseInt(t),parseInt(e))
return function(t){return n(t)+"px"}}}function s(t){var e=/(bar|scatter|bubble$|bullet|gantt|wordcloud|waterfall)/.test(t)&&ue(c.chart.plot.plotoptions[t],a),n=/(^pie|funnel|pyramid)/.test(t)
return e||n}var u={element:t},c=a.systemConf,h=a.dataset,d=c.metadata,f=d.axes,p=d.columns,g=f.tooltip||d3.range(p.length),y=c.tooltip,v=null,m=y.position||"relative",b="relative"===m,w={left:50,top:100,rotation:0}
if(y.theme&&""!==y.theme){var C=B(qr,"tooltip.getTheme")&&qr.tooltip.getTheme(y.theme,a)
null!==C&&(y=a.systemConf.tooltip=Fl(y,C.borderStyle,!0,!0),a.tooltip.content=[C.body],v=C.maxWidth)}var k,S,O,A,_=W(y.hookHeight,6),P=X(y.borderWidth)?y.borderWidth:1,T=X(y.borderRadius)?y.borderRadius:5,M=X(y.borderStyle)?y.borderStyle:"solid",E=X(y.padding)?y.padding+"":"5",L=W(y.withinChart,!0),z=W(y.hookBorderWidth,/ /g.test(P)?1:+P),D=ht(T),R=qt(y.maxWidth||v||"40%",a.chartarea.width),I=qt(y.maxHeight||"100%",a.chartarea.height),H=Da(.05*a.chartarea.width,2*_),F=y.headerContent,V=y.footerContent,U=y.crosshair
return u.initialize=function(){var e=It(y,a),n=+e+.35*+e,r=null!=a.userdata.canvas?a.userdata.canvas.fontColor:null,i=Q(T),o=null
!(!1===y.useChartEffect)&&a.filterEffectsID&&(o="url(#"+a.filterEffectsID+")"),t.styles({width:"auto","box-shadow":y.shadow,opacity:y.opacity,"z-index":y.zindex,"border-radius":i,"border-width":Q(P),"border-style":M,"-webkit-transform-style":"preserve-3d","-moz-transform-style":"preserve-3d","-ms-transform-style":"preserve-3d","-o-transform-style":"preserve-3d","transform-style":"preserve-3d","pointer-events":y.pointerEvents,filter:o})
kt(t,"div",y.borderTop?[y.borderTop]:[],".","class","borderTop").styles({height:y.borderTop+"px","border-radius":i,"border-bottom-left-radius":"1px","border-bottom-right-radius":"1px"}),(A=kt(t,"div",[1],"#","id","tooltipcontent")).styles({"box-sizing":"relative"===m?null:"border-box","max-width":"relative"===m?R+"px":null,"min-width":"relative"===m?H+"px":null,"line-height":(y.lineHeight||n)+"px","word-wrap":"break-word","white-space":"normal","overflow-y":"auto",padding:Q(E)}),Pt(A,[{fontColor:null==y.fontColor&&null==r?"white":y.fontColor||r},y,a.systemConf.canvas,El],!0),(k=kt(t,"div",b?[1]:[],"#","id","zctooltipbefore")).styles({"margin-left":-(_+2*z)+"px",border:_+2*z+"px solid transparent"}),(S=kt(t,"div",b?[1]:[],"#","id","zctooltipafter")).styles({"margin-left":-_+"px",border:_+"px solid transparent"}),(O=t.selectAll("div#zctooltipbefore,div#zctooltipafter")).styles({"border-color":Qa,"border-top-color":"white",position:"absolute",top:"100%",left:"50%",width:0,height:0,content:" "})},u.show=function(r,u,c,d,f){function p(){if(W)return B.keys().map(function(t){var n=e(t),a=e(B.get(t)),i=h.getColumnIdx("clr"),o=r.seriesdata[n].yaxiscolumnorder||[0,0],l=r.ismultiy||null==i?h.getColumnIdx("y",o):i,s=h.getDataPoint(r,l,n,P,a)
return{actData:s,metaInfo:h.getMetaInfoObj(r,s,n)}})
var t=h.getDataPoint(r,null,C,P,M,f.d)
return{actData:t,metaInfo:r.dataset.getMetaInfoObj(r,t,C),seriesIndex:C,subseriesIndex:P,itemIndex:M}}X(f)||(f={})
var v,x=f.color,b=f.svgFillFunc,C=f.seriesindex,P=f.subseriespos,T=f.subseriesLength,M=f.itempos,E=f.backgroundColor||y.backgroundColor,H=f.borderColor||y.borderColor,B=f.tooltipSharedInfo,W=f.tooltipShared,G=null!=C&&r.chartTypes[C].name||f.chartType&&f.chartType.name;((d=null==c&&!0===d)||f.inheritColors)&&(v=s(G))
var q=x
if(d||f.inheritColors){var Z=v?M:C,Q=h.getDataPoint(r,null,C,P,M,f.d)
q=ie(r,Z,Q,C)}else n(q)&&(q=q[C%q.length])
q=W?"black":q,H=null!=H?H:q,E=null!=E&&""!=E?E:q,t.styles({visibility:"visible","background-color":E,"border-color":H})
var K,$,J="",tt="",et="",nt=A.node()
d&&null!=F&&(tt=Y(F,d3.event,K=p(),r)),J+=d?y.content?Y(y.content,d3.event,K=K||p(),r):W?function(t,r,i,o,l,s,u,c){var d=h.getColumnIdx("clr"),f=a.seriesdata[t].yaxiscolumnorder||[0,0],p=a.dataObject.pieWithAxis&&!a.dataObject.isCombinationalChart?Ss.getPieColumnIndex(a):h.getColumnIdx("y",f),y=l.keys(),v=l.y_val_pattern,m=Os.getRawSharedContent(a,l,g),x=0,b=function(t,e,n,r,i,l){if(a.ismultiy||null==d){var s=j(a.seriesdata[e].seriesname)||l.replace(/val/gi,"col")
t=t.replace("{{val(null)}}",s)}return h.getCustomizedVal(a,t,e,n,r,o,"tooltip",i,$a,c&&c>1?c:$a)},w=[]
return m.forEach(function(c,d){var f=(n(c)?c:[c]).some(function(t){return"string"==typeof t&&(-1!=t.indexOf("{{val("+p+")}}")||-1!=t.indexOf("{{per("+p+")}}"))})
if(n(c)||f){x%=a.seriesdata.length
var g=y[x]
if(f&&x++,N(g))return void w.push(d)
var C=e(g),k=e(l.get(g)),S=v,O=s
if(n(O)){var A=h.getDataPoint(a,null,C,r,k,o)
O=ie(a,u?k:C,A,C)}n(c)?c.forEach(function(t,e){c[e]=b(c[e],C,r,k,O,S)}):m[d]=b(m[d],C,r,k,O,S)}else X(g=y[0])?(C=e(g),k=e(l.get(g))):(C=t,k=i),m[d]=h.getCustomizedVal(a,c,C,r,k,o,"tooltip",s,$a)}),m=m.filter(function(t,e){return-1==w.indexOf(e)}),Os.getContentTemplate(a,m)}(C,P,M,f.d,B,x,v,T):o(C,P,M,q,f.d):c,d&&null!=V&&(et=Y(V,d3.event,K=K||p(),r)),A.html(J),st(tt)||($=document.createElement("div"),$.innerHTML=tt,tt=$),st(et)||($=document.createElement("div"),$.innerHTML=et,et=$),nt.insertBefore(tt,nt.firstChild),nt.appendChild(et)
var rt=t.node()
rt.offsetWidth,rt.offsetHeight,U.type!=Za&&r.isAxisCategory&&function(t,e,n,r){t.staticPaneSVG.selectAll("g.crosshair").style("visibility","visible")
var a=r.type;("x"==a||"xy"==a)&&i(t,e,n,r,"x"),("y"==a||"xy"==a)&&i(t,e,n,r,"y")}(r,u.actLeft||u.left,u.actTop||u.top,U),t.interrupt().transition(),t.transition().delay(0)
var at
if("relative"===m){var it=parseFloat(rt.style.left),ot=parseFloat(rt.style.top)
at=ks.relative(u,t,r,_,20,L,z,D,R,I),w=at.hookPosition,(!it||isNaN(it)||!ot||isNaN(ot))&&t.styles({left:at.x+"px",top:at.y+"px"}),it=!it||isNaN(it)?at.x:(2*it+at.x)/3,ot=!ot||isNaN(ot)?at.y:(ot+at.y)/2,t.transition().duration(100).ease(ui).styleTween("left",l(it,at.x)).styleTween("top",l(ot,at.y))}else"fixed"===m?(at=ks.fixed(u,t,r),t.styles({left:at.x+"px",top:at.y+"px"})):(at=ks.block(u,t,r),t.styles({left:at.x+"px",top:at.y+"px"}).attr("align",at.align))
if(A.styles({width:at.w,height:at.h,"max-width":at.maxw,"max-height":at.maxh}),y.borderTop){var lt=b?b(v?M:C,null,null,q,null,null,{width:Ra(+at.w,+at.maxw)},!0):H,ut="object"==typeof lt?"url("+function(t,e){var n="<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+t.w+"' height='"+t.h+"'>"+(new XMLSerializer).serializeToString(t.node.node())+"<path d='M-5,-5 L5,-5 L5,5 L-5,5 Z' transform='translate("+t.w/2+","+t.h/2+")' style='fill: url(#"+t.id+")'></path> </svg>"
return{url:Ll.FIREFOX||e?"data:image/svg+xml;base64,"+Ml(n):"data:image/svg+xml;utf8,"+n,width:t.w,height:t.h}}(lt,!0).url+")":lt
t.selectAll("div.borderTop").styles({background:ut})}if(W)O.style("display",Za)
else{var ct="rotate("+w.rotation+"deg)"
O.styles({display:"",left:w.left+"%",top:w.top+"%",transform:ct,"-webkit-transform":ct,"-ms-transform":ct,"transform-origin":"50% 0%","-webkit-transform-origin":"50% 0%","-ms-transform-origin":"50% 0%"}),k.style("border-top-color",H),S.styles({"border-top-color":E,opacity:1})}},u.hide=function(t){(t=null==t?this.element:t).style("visibility","hidden"),a.systemConf.tooltip.crosshair.type!=Za&&a.staticPaneSVG.selectAll("g.crosshair").style("visibility","hidden")},u.destroy=function(){this.element.remove()},u.getTooltipContent=function(){return o.apply(null,arguments)},u}
var ks={}
ks.relative=function(t,e,n,r,a,i,o,l,s,u){function c(e){var n;/(top|bottom)/.test(e)?t.left-O/2<P.left?(n=h(e==Wo?"blx":"tlx"),T.x=P.left,_.left=Da(n,t.left-P.left)/O*100):t.left+O/2>P.right?(n=h(e==Wo?"brx":"trx"),T.x=P.right-O,_.left=100*(1-Da(n,P.right-t.left)/O)):_.left=50:t.top-A/2<P.top?(n=h(e==Fo?"trY":"tly"),T.y=P.top,_.top=Da(n,t.top-P.top)/A*100):t.top+A/2>P.bottom?(n=h(e==Fo?"bry":"bly"),T.y=P.bottom-A,_.top=100*(1-Da(n,P.bottom-t.top)/A)):(T.y=t.top-A/2,_.top=50)}function h(t){return r+l[t]+Ha(Ia(o,2)+Ia(o,2))}e.selectAll("#tooltipcontent").styles({width:null,height:null,"max-width":s+qa,"max-height":u+qa})
var d=e.node(),f=d.offsetWidth,p=d.offsetHeight,g=n.canvasarea,y=n.chartarea,v=a+r+(t.distance||0),m=t.dTop||0,x=t.dLeft||0,b=n.systemConf.tooltip,w=(b.relative||{}).orient,C=(b.borderTop,y.width-y.left+y.right),k=y.height,S=Ss.getSize(b,[C,k],[f,p],[s,u]),O=S.w,A=S.h,_={left:50,top:100,rotation:0},P={left:ja(Ra(x,0))+(n.scrolledX||0),top:ja(Ra(m,0))+(n.scrolledY||0),right:g.width-2-Da(x,0)+ja(Ra(x,0)),bottom:g.height-Da(m,0)+ja(Ra(m,0))},T={x:t.left-O/2,y:t.top-A-v,maxw:s+qa,maxh:u+qa}
if(i&&!n.scrolledX&&!n.scrolledY){var M=t.top-A-v,E=t.left+O+v,L=t.left-O-v,z=t.top+A+v;(w=w||(M>P.top?Wo:E<P.right?Yo:L>P.left?Fo:z<P.bottom?Vo:null))==Wo?(c(Wo),_.rotation=0,_.top=100):w==Yo?(T.x=t.left+v,c(Yo),_.rotation=90,_.left=0):w==Fo?(T.x=t.left-v-O,c(Fo),_.rotation=-90,_.left=100):w==Vo&&(c(Vo),T.y=t.top+v,_.rotation=180,_.top=0)}return T.hookPosition=_,T},ks.fixed=function(t,e,n){e.selectAll("#tooltipcontent").styles({width:null,height:null,"max-width":null,"max-height":null}),e.style("border-width",0)
var r,a=e.node(),i=a.offsetWidth,o=a.offsetHeight,l=n.canvasarea,s=t.dTop||0,u=t.dLeft||0,c=n.systemConf.tooltip,h=(c.fixed||{}).orient,d=c.borderTop||0,f=Wl(c.borderWidth,1),p=ct(f),g=p.top,y=p.right,v=p.bottom,m=p.left,x=l.width-m-y,b=l.height-g-v,w=Ss.getSize(c,[x,b],[i,o]),C=w.w,k=w.h,S=0,O=0,A=window.innerWidth,_=window.innerHeight,P={x:ja(Ra(u,0)),y:ja(Ra(s,0))},T=ja(Ra(u,0)),M=ja(Ra(s,0)),E=C,L=k,z=P.y-k,D=P.x+l.width+C,R=P.x-C,j=P.y+l.height+k,I=0>=s||s>0&&l.height-s>k
return h||(z>O?h=Wo:D<A&&I?h=Yo:R>S&&I?h=Fo:j<_&&(h=Vo)),h===Wo?(P.y=M-k-g-v,E=x-(u>0?u:0),r="40%"):h===Yo?(P.x=T+l.width,L=b-(s>0?s:0)):h===Fo?(P.x=T-C-y-m,L=b-(s>0?s:0)):h===Vo?(P.y=M+l.height-(s>0?s:0),E=x-(u>0?u:0),r="40%"):(P.y=M,E=x-(u>0?u:0),r="40%"),w=Ss.getSize(c,[x,b],[E,L]),P.w=w.w+qa,P.h=w.h-d+qa,P.maxw=x-(u>0?u:0)+qa,P.maxh=Ra(b-(s>0?s:0),N(c.height)&&N(c.maxHeight)&&X(r)?qt(r,b):1/0)+qa,e.style("border-width",Q(f)),P},ks.block=function(t,e,n){var r=n.chartarea,a=n.plotarea,i=n.systemConf.tooltip,o=i.block||{},l=i.borderTop||0,s=ct(Wl(i.borderWidth,1)),u=s.top,c=s.right,h=(s.bottom,s.left),d=o.vAlign||Wo,f=o.hAlign,p=t.dTop||0,g=t.dLeft||0,y=r.width-h-c,v=r.height,m=Ss.getSize(i,[y,v],["100%",n.tooltip.preCalculatedHeight]),x=m.w,b=Ra(m.h,qt(Ss.MAXHEIGHT_BLOCK,v)),w={x:ja(Ra(g,0))-Da(g,0)+r.left,y:ja(Ra(p,0))-Da(p,0),w:x+qa,h:b-l+qa,align:f}
return f===Yo?w.x+=y-x:f===No&&(w.x+=(y-x)/2),w.y+=d===Vo?a.top+a.height+(a.bottom-b)-u-c:r.top,w}
var Ss={}
Ss.MAXHEIGHT_BLOCK="50%",Ss.updatePlotarea4BlockTooltip=function(t){var e=t.systemConf.tooltip,n=e.block||{},r=e.position||"relative"
if(e.enabled&&"block"===r){if(N(e.height)&&!e.content){qr.events.tooltip(t.tooltip.element,t.systemConf,t).initialize(),t.tooltip.element.selectAll("div#tooltipcontent").html(Os.getContentTemplate(t,$a,$a,!0)),t.tooltip.preCalculatedHeight=t.tooltip.element.node().clientHeight}else t.tooltip.preCalculatedHeight="20%"
var a=t.plotarea
t.tooltip.blockarea=Yl(a)
var i=n.vAlign||Wo,o=ct(Wl(e.borderWidth,1)),l=o.top,s=o.right,u=o.bottom,c=o.left,h=t.chartarea,d=h.width-c-s,f=h.height,p=Ss.getSize(e,[d,f],["100%",t.tooltip.preCalculatedHeight]),g=Ra(p.h,qt(Ss.MAXHEIGHT_BLOCK,f))+l+u
i===No&&(i=Wo),a.height-=g,a[i]+=g}},Ss.getSize=function(t,e,n,r){r=r||[]
var a=e[0],i=e[1],o=n[0],l=n[1],s=r[0],u=r[1],c=qt(t.width,a,qt(o,a)),h=qt(t.height,i,qt(l,i)),d=qt(t.maxWidth,a,s||c),f=qt(t.maxHeight,i,u||h)
return{w:Ra(d,c),h:Ra(f,h),maxw:d,maxh:f}},Ss.getPieColumnIndex=function(t){var e,n=W(t.systemConf.chart.plot.plotoptions.bubblepie.dataindex,3)
return t.systemConf.metadata.columns.some(function(t,r){return t.dataindex===n?(e=r,!0):void 0}),X(e)?e:t.dataset.getColumnIdx("y",0)},Ss.hasSharedSeries=function(t){return t.systemConf.tooltip.sharedSeriesInfo&&t.isAxisCategory&&!$e(t.chartTypes[0].value)}
var Os={}
Os.getContentTemplate=function(t,e,r,a){var i,o,l=t.systemConf,s=l.metadata,u=s.axes,c=s.columns,h=r||u.tooltip||d3.range(c.length),d=u.y&&wi(u.y)||[],f=l.tooltip,p=qt(f.maxWidth||"40%",t.chartarea.width),g=Ss.hasSharedSeries(t),y="column"===f.view,v=[]
if(e)v=e
else{if(X(l.tooltip.theme)&&B(qr,"tooltip.getTheme"))h=t.tooltip.content
else if(g){var m=Ci()
t.seriesdata.forEach(function(e,n){Os.updateSharedInfo(t,m,n)}),h=Os.getRawSharedContent(t,m,h)}h.forEach(function(t){var e,n=val=""
if(c[t]){if(d.length>1&&d.indexOf(t)>-1&&!g){if(i)return
i=!0,h.forEach(function(t){d.indexOf(t)>-1&&(n+="{{col("+t+")}}",val+="{{val("+t+")}}")})}else n="{{col("+t+")}}",val="{{val("+t+")}}"
e=[n,val]}else e=t
v.push(e)})}return y?(o=v.reduce(function(t,e){var r
return r=n(e)?"<tr style='vertical-align: top;'><td style='max-width:"+.4*p+"px;'>"+e[0]+": </td><td style='max-width:"+.6*p+"px;'><b>"+e[1]+"</b></td></tr>":"<tr style='vertical-align: top;'><td style='max-width:"+p+"px;'>"+e+"</td></tr>",t+r},""),o="<table cellspacing='0' cellpadding='0' border='0' style='border-spacing: 5px;'><tbody>"+o+"</tbody></table>"):o=v.reduce(function(t,e,r){var a
return a=n(e)?e[0]+" : "+e[1]:e,t+a+(r==v.length-1?"":"<br>")},""),a&&(o=o.replace(/{{clr}}/g,"black")),o},Os.updateSharedInfo=function(t,e,n){var r=t.dataset,a=r.getColumnIdx("clr"),i=r.getColumnIdx("y",t.seriesdata[n].yaxiscolumnorder||[0,0]),o="{{val("+(t.dataObject.pieWithAxis&&!t.dataObject.isCombinationalChart?Ss.getPieColumnIndex(t):i)+")}}"
e.y_val_pattern=e.y_val_pattern||"",e.y_col_pattern=e.y_col_pattern||"",-1==e.y_val_pattern.indexOf(o)&&(e.y_val_pattern+=o,e.y_col_pattern+=t.ismultiy||N(a)?""!=e.y_col_pattern?"":"{{val(null)}}":"{{val("+a+")}}")},Os.getRawSharedContent=function(t,e,r){var a=t.systemConf.metadata,i=a.axes,o=a.columns,l=wi(i.y),s=t.dataset,u=[],c="",h=t.dataObject.pieWithAxis&&!t.dataObject.isCombinationalChart?Ss.getPieColumnIndex(t):$a,d=r.some(function(t){return ka.lastIndex=0,"string"==typeof t&&ka.test(t)}),f=function(t){var e=X(h)?h:t
return(n(c)?c:[c]).some(function(t){return"string"==typeof t&&(-1!=t.indexOf("{{val("+e+")}}")||-1!=t.indexOf("{{per("+e+")}}"))})},p=t.isAxisCategory
if(d)r.forEach(function(e){X(o[e])&&(e=["{{col("+e+")}}","{{val("+e+")}}"]),c=e,(n(e)||"string"==typeof e)&&l.some(f)&&p?t.seriesdata.forEach(function(){u.push(n(e)?I(e):e)}):u.push(e)})
else{var g="{{val("+s.getColumnIdx("x")+")}}",y=e.y_val_pattern,v=g,m=["<div style='margin-right:0.2em;display:inline-block;vertical-align:middle;border-radius: 50%;padding:0.4em;background:{{clr}}''></div>"+e.y_col_pattern,y]
u.push(v),t.dataObject.pieWithAxis&&!t.dataObject.isCombinationalChart&&(u.push(["{{col("+s.getColumnIdx("y",0)+")}}","{{val("+s.getColumnIdx("y",0)+")}}"]),u.push(["{{col("+s.getColumnIdx("z")+")}}","{{val("+s.getColumnIdx("z")+")}}"])),p?t.seriesdata.forEach(function(){u.push(I(m))}):u.push(I(m))}return u}
var As=function(t){this.chartObj=t.chartObj,this.config=t.config
var e=this.container=kt(t.container,"g",this.config.enabled?[1]:[],".","class","tooltip")
e.style("pointer-events",Za).style("display",Za),this.boundBoxEle=kt(e,go,[1]),this.textEle=kt(e,fo,[1]),this.styleText(),this.styleBoundBox()}
As.prototype.show=function(t,e){Yt(this.container),this.container.styles({opacity:$a,display:$a}),this.updateTextContent(t),this.positionTooltip(e),this.drawBoundBox()},As.prototype.hide=function(t){this.container.transition().duration(t?0:250).style("opacity",0).on("end",function(){ri(this).style("display",Za)})},As.prototype.styleText=function(){var t=this.textEle,e=this.config.orient,n=this.chartObj.systemConf,r=e===Wo||e===Vo
Pt(t,[this.config,n.chart,n.canvas,El]),t.attrs({"text-anchor":r?"middle":e===Fo?"start":"end",dy:r?e===Wo?"0.9em":"-0.3em":"0.3em"})},As.prototype.styleBoundBox=function(){var t=this.config
this.boundBoxEle.styles({fill:t.backgroundColor,stroke:t.borderColor,"stroke-width":t.borderWidth})},As.prototype.updateTextContent=function(t){this.textEle.text(t)},As.prototype.positionTooltip=function(t){t&&this.container.attr("transform","translate("+t[0]+","+t[1]+")")},As.prototype.drawBoundBox=function(){var t=this.textEle.nodes(),e=this.config,n=e.padding,r=ht(e.borderRadius||0),a=0
this.boundBoxEle.attr("d",function(){var e=D(t[a++])
return En(e.x-n,e.y-n,e.width,e.height,r,n,Wo,{},0)})}
var _s=function(t){this.chartObj=t.chartObj,this.config=t.config,this.container=t.container,this.type=t.type,this.isHorizontal=t.isHorizontal,this.bound=t.bound
var e=this.config.globalShadow!==Ta?this.config.globalShadow:this.config.shadow
e&&(this.filter=this.getFilter(e))}
_s.prototype.draw=function(){var t=(this.chartObj,this.config),e=this.container,n=this.filter
switch(this.type){case"line":e.append(go).attr("d",P("vertical-line")(t.height)).styles({stroke:t.strokeColor,"stroke-width":t.strokeWidth})
break
case"triangleUp":e.append(go).attr("d",P("triangle-down")(t.size)).styles({fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.strokeWidth})
break
case"triangleDown":e.append(go).attr("d",P("triangle-up")(t.size)).styles({fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.strokeWidth})
break
case"triangleUpDown":var r=t.padding/2
e.append(go).attr("d",P("triangle-down")(t.size)).attr("transform","translate("+(this.isHorizontal?[0,-r]:[-r,0])+")").styles({fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.strokeWidth}),e.append(go).attr("d",P("triangle-up")(t.size)).attr("transform","translate("+(this.isHorizontal?[0,r]:[r,0])+")").styles({fill:t.fillColor,stroke:t.strokeColor,"stroke-width":t.strokeWidth})
break
case"box":var a=t.strokeWidth,i=t.width,o=t.height
e.append(go).attr("d",At(-(i-a)/2,-(o-a)/2,i-a,o-a,ht())).styles({stroke:t.strokeColor,"stroke-width":t.strokeWidth,fill:t.fillColor})
break
case"enlarge":a=t.strokeWidth
var l=t.range||1
i=t.width*l,o=t.height*l
e.append(go).attr("d",At(-i/2,-o/2,i,o,ht())).styles({fill:t.fillColor})
break
case"lever":var s=ht(t.radius)
e.append(go).attrs({d:At(-t.width/2,-t.height/2,t.width,t.height,s),filter:n}).styles({fill:t.fillColor,stroke:t.strokeColor}),e.append(go).attr("d","M"+-t.stripePadding/2+" "+-t.stripeHeight/2+" L"+-t.stripePadding/2+" "+t.stripeHeight/2+" M"+t.stripePadding/2+" "+-t.stripeHeight/2+" L"+t.stripePadding/2+" "+t.stripeHeight/2).styles({stroke:t.stripeColor})
break
case"hollowCircle":e.append(go).attrs({d:P()(t.size),filter:n}).styles({fill:t.outerFillColor,stroke:t.outerStrokeColor}),e.append(go).attr("d",P()(.4*t.size)).styles({fill:t.innerFillColor,stroke:t.outerStrokeColor})
break
case"circle":e.append(go).attrs({d:P()(t.size),filter:n}).styles({fill:t.outerFillColor,stroke:t.outerStrokeColor,"stroke-width":t.outerStrokeWidth}),e.append(go).attr("d",P()(.3*t.size)).styles({fill:t.innerFillColor,stroke:t.outerStrokeColor})
break
case"vernier":var u=e.nodes(),c=ri(u[0]),h=ri(u[1]),d="M"+.5*-(i=t.width)+" "+.5*-(o=t.height)+" L"+.5*i+" "+.5*-o+" L"+.5*i+" "+.5*o+" L"+.5*-i+" "+.2*o+" Z",f="M"+.5*-i+" "+.5*-o+" L"+.5*i+" "+.5*-o+" L"+.5*i+" "+.2*o+" L"+.5*-i+" "+.5*o+" Z"
c.append(go).attr("d",d),h.append(go).attr("d",f),e.selectAll(go).attr("filter",n).styles({fill:t.fillColor,stroke:t.strokeColor})
break
case"pentagon":var p=t.size,g=t.bandWidth,y="M"+(.5*-p-g)+" "+(.5*-(o=t.height)-g)+" L"+(.5*p+g)+" "+(.5*-o-g)+" L"+(.5*p+g)+" "+.5*o+"L0 "+(.5*o+1.5*g+2)+" L"+(.5*-p-g)+" "+.5*o+"ZM"+.5*-p+" "+.5*-o+" L"+.5*p+" "+.5*-o+" L"+.5*p+" "+(.5*o-.5*g)+"L0 "+(.5*o+.5*g)+" L"+.5*-p+" "+(.5*o-.5*g)+"Z",v="M"+.5*-p+" "+.5*-o+" L"+.5*p+" "+.5*-o+" L"+.5*p+" "+.5*o+" L"+.5*-p+" "+.5*o+"Z"
e.append(go).attr("d",v),e.append(go).attrs({d:y,filter:n}).styles({"fill-rule":"evenodd",fill:t.fillColor,stroke:t.strokeColor})}},_s.prototype.getPosition=function(){var t=this.config,e=this.type,n=this.isHorizontal,r=this.bound,a=r[0],i=r[1],o=[0,0],l=n?1:0,s=n?i:a
switch(e){case"lever":case"vernier":case"pentagon":case"hollowCircle":case"circle":case"box":case"enlarge":case"triangleUpDown":case"line":o[l]=s/2
break
case"triangleUp":o[l]=-t.size/2
break
case"triangleDown":o[l]=s+t.size/2}return o},_s.prototype.getFilter=function(t){var e=t.split(" "),n={dx:parseFloat(e[0]),dy:parseFloat(e[1]),color:e[3],blur:parseFloat(e[2]),x:"-50%",y:"-50%",width:"200%",height:"200%"},r=Dl.get(Hl,"dropShadow",n,{chartObj:this.chartObj})
return r="url("+this.chartObj.defsLocation+"#"+r+")"},qr.mapCollections={},it(zn,l),zn.helpers=l.helpers,zn.SeriesTypes=d3.map(),zn.getDefaultProjection=function(){return{name:"geoMercator"}},zn.getGeoJSON=function(t,e){if(X(t)&&jn.GEO_FORMATS.has(t.type)&&"Topology"===t.type){var n=t.projection
t=so.feature(t,t.objects[e]),X(n)&&(t.projection=n)}return t},zn.prototype.initialize=function(){this.userdata.map,this.id="ZC_GEO_"+this.idNumeric,Ll.IE&&parseFloat(Ll.VERSION)<11&&(this.fixIE=!0),this.geo={layerCount:0,extraLayers:{},extraLayersRenderingOrder:["graticule","globe","allAreas"],utils:{},highlightUtils:{},rawLayers:[]},this.processUserData(this.themeoptions),this.plot={renderer:{mode:this.systemConf.map.renderingMode}},zn.helpers.constructChartGroups(this),this.seriesContainer=this.svg.select(".seriesholder"),this.chartGroup=this.svg.select(".chartgroup"),this.legendHighlight=new qr.legendHighlight(this,this.svg),this.render()},zn.prototype.render=function(){var t=this.systemConf,e=t.map.animation.enabled&&!this.updating
if(this.setChartDimension(),this.updateCanvasArea(),this.applyChartProperties(),!this.hasGeoLayer)return this.hideLoading(this.container),this.handleNoData(t.noDataHandler),this.chartRendered=!0,void Ye(this,t.canvas.events,0,this.updating?"onreload":"onload")
if(this.hasSeriesPoints&&(this.getChartSeriesColor(),qr.legend.render(this),Ss.updatePlotarea4BlockTooltip(this)),qr.annotation&&qr.annotation.addBlockAnnotations(this),this.setupFeatureContainerLayer(),this.setUpMapLayer(),this.updatePlotareaProp(),e){var n=this.geo.isCanvasMode?".label-container":"g.labelholder"
this.animateSelection=this.container.selectAll("canvas.geomap-features, .xychart,"+n).style("opacity",0)}Ye(this,t.map.events,0,this.updating?"reinit":"init"),this.renderGlobe(),this.renderGraticule(),this.renderMapLayer(),Ye(this,t.map.events,0,this.updating?"onreload":"onload"),this.hasSeriesPoints&&(this.updating||Ye(this,t.chart.plot.events,0,"init"),this.setupZScale(),this.renderSeries(),Ye(this,t.chart.plot.events,0,this.updating?"onreload":"onload"),this.handleEvent()),this.drawPlotareaClippath(),this.drawPlotBorder(),t.map.animation.enabled&&!this.updating?this.animate():(this.renderLabels(),this.performPostRender())},zn.prototype.setupFeatureContainerLayer=function(){var t=this.systemConf,e=this.geo,n=t.map,r=ft((e.isCanvasMode="svg"!==n.renderingMode)?"canvas":"svg")
e.mapArea=Object.create(this.plotarea),this["setup"+r+"Layer"]()},zn.prototype.setupLayerSettings=function(t){var e,n=this.geo,r=n.mapArea,a=n.defaultLayer.layerGeojson,i=this.systemConf.map,o=Wl(i.projection,t.projection,a.projection),l=i.extent,s=r.width-l.right,u=r.height-l.bottom,c=[[l.left,l.top],[s,u]],h=t
X(o)||(o=zn.getDefaultProjection()),e=n.utils.projection=n.highlightUtils.projection=d3[o.name]()
for(var d in o)o.hasOwnProperty(d)&&"name"!==d&&e[d]&&e[d](o[d])
e.fitExtent(c,h),n.utils.geoPath=d3.geoPath().projection(n.utils.projection),n.highlightUtils.geoPath=d3.geoPath().projection(n.utils.projection),n.isCanvasMode&&n.utils.geoPath.context(n.featureLayer)},zn.prototype.addLayer=function(t,e,n,r,a){var i=this.geo,o=i.layerCount++,l={feature:i.featureLayer,highlight:i.highlightLayer}[r]
return n=n||"map-layer-"+o,i.isCanvasMode||(l=jt("g","."+n,[n],i.featureLayer)),new jn(t,i.utils,l,e,this,a)},zn.prototype.setupSvgLayer=function(){var t=this.geo,e=t.mapArea
this.systemConf.map,t.featureLayer=jt("g",".feature-layer",[1],this.seriesContainer),this.seriesContainer.attr("transform","translate("+e.left+","+e.top+")"),t.labelLayer=this.staticPaneSVG.select(".labelholder").attr("transform","translate("+e.left+","+e.top+")")},zn.prototype.setupCanvasLayer=function(){var t=this.geo,e=t.mapArea,n=this.systemConf.map,r=(n.marginLeft,n.marginTop,{position:"absolute",left:e.left+qa,top:e.top+qa,"pointer-events":"none"})
t.featureElement=jt("canvas",".geomap-features",[1],this.chartParentElement,".static").attrs({width:e.width,height:e.height}).styles(r)
var a=null
this.fixIE&&(a=".static"),t.labelElement=jt("canvas",".label-container",[1],this.chartParentElement,a).styles(r).attr("width",e.width).attr("height",e.height)
var i=t.featureElement.node(),o=t.labelElement.node()
t.featureLayer=i.getContext("2d"),pt(t.featureLayer),t.labelLayer=o.getContext("2d"),pt(t.labelLayer)
var l=Ll.prefix.lowercase+"ImageSmoothingEnabled"
t.featureLayer[l]=!1,t.featureLayer.imageSmoothingEnabled=!1,t.labelLayer[l]=!1,t.labelLayer.imageSmoothingEnabled=!1},zn.prototype.getLayerData=function(t){var e=qr.mapCollections
return X(e[t])?(this.emptyMapLayer=!1,e[t]):void(this.emptyMapLayer=!0)},zn.prototype.setUpMapLayer=function(){var t,e=this.systemConf,n=this.dataObject
t=e.map.allAreas?n.getMapFeatures("geojson"):n.getUserMapFeatures("geojson"),this.setupLayerSettings(t)},zn.prototype.setupZScale=function(){var t=this.dataObject
t.hasZaxis&&(this.axes.z=qr.scale.getScale(this,t,this.plotarea,null,null,this.dataset,"z"))},zn.prototype.renderGraticule=function(){var t=this.systemConf.map.graticule||{},e=!0===t.show,n=this.geo.extraLayers
if(e)if(this.updating&&n.graticule)n.graticule.update()
else{var r=d3.geoGraticule()
n.graticule=this.addLayer(r(),t,"graticule","feature")}else X(n.graticule)&&(n.graticule.destroy(),n.graticule=null)},zn.prototype.renderGlobe=function(){var t=this.systemConf.map,e="geoOrthographic"===(t.projection||{}).name&&!X(t.globe.show),n=this.geo.extraLayers
e||t.globe.show?this.updating&&n.globe?n.globe.update():n.globe=this.addLayer({type:"Sphere"},t.globe,"sphere","feature"):X(n.globe)&&(n.globe.destroy(),n.globe=null)},zn.prototype.renderMapLayer=function(){var t=this.systemConf,e=this.dataObject,n=t.map
if(!this.containesHeatmap){var r,a=e.userMapFeatures.values()
a.length&&(r=this.addLayer(a,n,"feature-layer","feature",n.useMeshOutline),this.geo.extraLayers.push(r))}if(this.updating&&this.geo.extraLayers.allAreas)this.geo.extraLayers.allAreas.update()
else if(n.allAreas&&!e.userUnmatchedMapFeatures.empty()){var i=Rn.helpers.arrayToGeojson(e.userUnmatchedMapFeatures.values())
this.geo.extraLayers.allAreas=this.addLayer(i,n,"all-areas-layer","feature",n.useMeshOutline)}},zn.prototype.renderSeries=function(){var t=this,e=t.systemConf,n=t.seriesdata||[]
t.renderer=[],rt(n,function(n,r){var a=qr.DataProcessor.helpers.getChartType(null,"object",r,e)
if(zn.SeriesTypes.has(a.name)){var i=new(zn.SeriesTypes.get(a.name))(n,t,r)
t.renderer.push(i)}})},zn.prototype.renderLabels=function(){this.geo.geoLabels=new Nn(this),this.rendererConf=this.renderer.map(function(t,e){return{params:{datasetIndex:e}}}),qr.annotation&&this.rendererConf.length&&qr.annotation.draw(this,[])},zn.prototype.handleEvent=function(){var t=this.geo,e=this.eventHandler=qr.events.mouseevents(this,this.tooltip.element,this.systemConf,this.plotarea,this.dataset,null,null,null,null,this.staticPaneSVG.select(".eventgroup"),this.seriesColor)
e.initializeListener(),t.eventLayer=e.trackerElement.styles({"pointer-events":"visible"}),E(e.trackerElement,this.plotarea)},zn.prototype.clearMap=function(){if(this.geo.isCanvasMode){var t=this.geo.featureLayer
t.clearRect(0,0,t.canvas.width,t.canvas.height)}X(this.eventHandler)&&this.eventHandler.mapEvents.clearHighlightedPoints()},zn.prototype.processUserData=function(t){var e,n=this.systemConf=Fl(t,this.userdata,!0,!0),r=n.map,a=this.getLayerData(r.scope,r.layerName)
this.updating||Ye(this,this.systemConf.canvas.events,0,"init"),e=Vl(n,"seriesdata")||{},this.seriesdata=e.chartdata;(this.geo.defaultLayer={layerGeojson:zn.getGeoJSON(a,r.layerName),layerOriginal:a}).layerGeojson?(this.hasGeoLayer=!0,this.dataset=new Dn(this),this.dataObject=new Rn(this),this.hasSeriesPoints=this.dataObject.totalDataCount>0,this.nochartdata=!this.hasSeriesPoints&&this.emptyMapLayer):(this.hasGeoLayer=!1,this.nochartdata=!0)},zn.prototype.addRemoveSeries=function(){var t=this
t.eventHandler,t.updating=!0,t.clearMap(),t.geo.extraLayersRenderingOrder.forEach(function(e){X(t.geo.extraLayers[e])&&t.geo.extraLayers[e].update()}),t.renderer.forEach(function(t){t.update(!0)}),t.geo.geoLabels.update(),t.updating=!1},zn.prototype.performPostRender=function(){var t=this.systemConf
this.chartRendered=!0,this.handleHiddenContainer(!0),Ye(this,t.canvas.events,0,this.updating?"onreload":"onload"),this.updating=!1},zn.prototype.getTransform=function(){return d3.zoomTransform(this.geo.eventLayer.node())},zn.prototype.animate=function(){var t=this,e=t.systemConf.map.animation,n=t.animateSelection
n.transition().duration(e.duration).ease(si(e.easingType)).on("start",function(){n.style("opacity",0),t.renderLabels()}).on("end",function(){t.performPostRender()}).attrTween("tween",function(){return function(t){return n.style("opacity",t),t}})},Dn.prototype.initialize=function(){var t=this.geoMap.userdata.metadata,e=this.columns=Wl(t.columns,{}),n=this.axes=Wl(t.axes,{geo:[0],clr:[1],z:[1]}),r=Wl(e[n.clr],{}),a=Wl(e[n.geo],{}),i=Wl(e[n.z],{})
this.clridx=Wl(r.dataindex),this.zidx=Wl(i.dataindex),this.geoidx=Wl(a.dataindex,0),this.geoMapByKey=this.getJoinByKey(a),n.label&&e[n.label]&&(this.labelIndex=e[n.label].dataindex)},Dn.prototype.getJoinByKey=function(t){var e=Wl(t,this.columns[this.axes.geo],{}),n=Wl(e.joinBy,"zc-key")
if("zc-key"!==n){X(this.geoMap.geo.defaultLayer.layerGeojson.features[0].properties[n])||(n="zc-key")}return n},Dn.prototype.getColumnIdx=function(t){return n(this.axes[t])?this.axes[t][0]:null},Dn.prototype.getDataType=function(t){var e=this.getColumnIdx(t)
return X(this.columns[e])?this.columns[e].datatype:uo},Dn.prototype.getZ=function(t){return t[this.zidx]},Dn.prototype.getClr=function(t){return t[this.clridx]},Dn.prototype.getGeo=function(t){return t[this.geoidx]},Dn.prototype.getMapByKey=function(){return this.geoMapByKey},Dn.prototype.getColumn=function(t){return this.columns[this.getColumnIdx(t)]},Dn.prototype.getDataPointValue=function(t,e,n,r,a,i,o,l,s){n&&(n=+n),N(l)&&(l=!/(tooltip|legend)/.test(i))
var u=this.axes,c=this.columns[n]||{},h=c.datatype,d=c.dataindex,f=c[h]
if(null!=e){if(null==u.clr&&"legend"!==i||n!=u.clr){var p,g=a?wn:yn
if(s){for(var y=0,v=0;s>v;v++)y+=this.getDataPointUnformattedValue(h,r,v,n,e,i,a,d)
p=y}else p=this.getDataPointUnformattedValue(h,r,o,n,e,i,a,d)
return""===p&&a?p:g(f,p,h,t,i,l)}return X(this.clridx)&&Gl.isQuantileColorScale(t)?"legend"===i?yn(f,e,h,t,i,l,"-"):yn(f,this.getClr(e),h,t,i,l):yn(f,this.geoMap.seriesdata[r].seriesname,h,t,i,l)}return null},Dn.prototype.getDataPointUnformattedValue=function(t,e,n,r,a,i,o,l){var s=""
if(o){var u
if(t===ho)return u=f(chartObj,e,subseriespos,r,a,o,i),X(u)&&(s=Wl((i===ml?a:a[l])/u*100,0)),s}return i===ml?a:a[l]},Dn.prototype.getDataPoint=function(t,e,n,r,a,i){if(X(i))return i
return this.geoMap.seriesdata[n].data[r][a]},Dn.prototype.getCustomizedVal=function(t,e,n,r,a,i,o,l,s,u){var c=this
return N(s)&&(s=!/(tooltip|legend)/.test(o)),e.toString().replace(ka,function(){var e=arguments[0],h=arguments[1],d=arguments[2],f=arguments[3],p=arguments[4],g=arguments[5],y=arguments[6],v=h||d||f||p||g
if(-1!==e.indexOf("{{clr}}"))return l
if(null!=c.columns[v]){var m=o===ml?i:c.getDataPoint(t,v,n,r,a,i)
if(null==m)return""
var x=e.match(/[a-z]+/gi)[0]
switch(x){case"col":return c.getColumnName(d,s)
case"val":return c.getDataPointValue(t,m,h,n,!1,o,r,s,u)
case Ol:case"splitper":case Al:return c.getDataPointValue(t,m,f||p||g,n,x,o,r,s,u)}}else{if(!y)return e
var b=t.dataObject.getMapFeaturesByDataPoint(i,"array")
if(b.length)return b[0].properties[y]||e}})},Dn.prototype.getColumnName=function(t,e){return e?j(this.columns[t].columnname):R(this.columns[t].columnname)},Dn.prototype.getMetaInfoObj=function(t,e,r){var a=this.axes,i=this.columns,o=this.geoMap.seriesdata,l=[],s=function(t,e){var n=Yl(i[t]||{})
return n.value=e,n.columnindex=t,n}
if(n(e)&&e.forEach(function(t,e){var n=i.indexOf(i.filter(function(t){return t.dataindex===e})[0])
l.push(s(n,t))}),X(a.clr)){var u=n(a.clr)?a.clr[0]:a.clr
l.push(s(u,o[r].seriesname))}return l},Rn.prototype.initialize=function(){var t=this,e=t.geoMap,n=e.geo,r=e.dataset,a=e.seriesdata,i=e.systemConf.map,o=d3.set(i.excludeAreas||[]),l=d3.set(i.includeAreas||[]),s=t.mapFeatures=n.defaultLayer.layerGeojson.features,u=t.joinByKey=r.getMapByKey(),c=t.mapFeaturesHashed=Rn.helpers.hashFeaturesByProperty(s,u,l,o,!0),h=t.userDataHashed=d3.map(),d=t.userUnmatchedMapFeatures=d3.map(),f=t.userMapFeatures=d3.map(),p=t.userUnmatchedData=d3.set()
t.totalDataCount=0,t.extents=d3.map(),e.isGeoMap=!0,e.containesHeatmap=t.containsChartType("geoheatmap"),e.hasColorScale=Gl.isQuantileColorScale(e),t.hasZaxis=X(r.zidx)&&qr.chartcategory.zaxis.some(function(e){return t.containsChartType(e)})
var g=[]
rt(a,function(e,n){Rn.helpers.convertTo3DArray(e),rt(e.data,function(e,a){rt(e,function(e,i){(function(e,n,a,i){var o=r.getGeo(e)
e.seriesIndex=n,e.subSeriesIndex=a,e.itemIndex=i,c.has(o)?(t.totalDataCount++,f.set(o,c.get(o)),h.has(o)?h.get(o).push(e):h.set(o,[e])):p.add(o)})(Object.create(e),n,a,i)}),t.hasZaxis&&g.push(Oi(e,function(t){return r.getZ(t)}))})}),t.hasZaxis&&t.extents.set("z",Oi(wi(g))),c.keys().forEach(function(t){f.has(t)||o.has(t)||d.set(t,c.get(t))}),t.userMapFeaturesArray=f.values(),t.totalnoofdatas=t.totalDataCount},Rn.prototype.getFeatureMesh=function(t){var e=this,n=d3.set(),r=e.geoMap.geo.defaultLayer.layerOriginal,a=null,i=e.geoMap.systemConf.map.layerName
return"Topology"===r.type&&(t.forEach(function(t){t.properties&&t.properties[e.joinByKey]&&n.add(t.properties[e.joinByKey])}),a=so.mesh(r,r.objects[i],function(t){return n.has(t.properties[e.joinByKey])})),a},Rn.prototype.getAxisRotated=function(){return!1},Rn.prototype.containsChartType=function(t){return this.geoMap.chartTypes.some(function(e){return e.name===t||e.value===t})},Rn.prototype.getXYPoint=function(t){var e=this.geoMap,n=e.dataset,r=e.geo.utils,a=this.userMapFeatures,i=n.getGeo(t),o=[null,null]
if(a.has(i)){var l=a.get(i),s=l.properties
o=s.latitude&&s.longitude?r.projection([+s.longitude,+s.latitude]):r.geoPath.centroid(l)}return new Fn(o[0],o[1])},Rn.prototype.getXYvalue=function(t,e,n,r,a,i,o){return this.getXYPoint(i)[o]},Rn.prototype.getXYFromLatLng=function(t){var e=Ps.toXY(this.geoMap,t.longitude,t.latitude)
return new Fn(e[0],e[1])},Rn.prototype.getUserMapFeatures=function(t){return"geojson"===t?Rn.helpers.arrayToGeojson(this.userMapFeaturesArray):"array"===t?this.userMapFeaturesArray:this.userMapFeatures},Rn.prototype.getMapFeaturesByDataPoint=function(t,e){var r=this,a=r.geoMap.dataset,i=d3.map()
return n(t[0])||(t=[t]),t.forEach(function(t){var e=t[a.geoidx]
r.userMapFeatures.has(e)&&i.set(e,r.userMapFeatures.get(e))}),"geojson"===e?Rn.helpers.arrayToGeojson(i.values()):"array"===e?i.values():i},Rn.prototype.getMapFeatures=function(t){var e=this,n=d3.map(e.userMapFeatures)
return e.userUnmatchedMapFeatures.keys().forEach(function(t){n.set(t,e.userUnmatchedMapFeatures.get(t))}),"geojson"===t?Rn.helpers.arrayToGeojson(n.values()):n},Rn.prototype.getMinMaxZ=function(){return this.extents.get("z")},Rn.prototype.isstacked=function(){return!1},Rn.helpers={is3D:function(t){return n(t)&&n(t[0])&&n(t[0][0])},convertTo3DArray:function(t){this.is3D(t.data)||(t.data=[t.data])},arrayToGeojson:function(t){return{type:"FeatureCollection",features:t}},hashFeaturesByProperty:function(t,e,n,r,a){var i=Ci()
return rt(t,function(t){var o=t.properties[e]
!n.empty()&&!n.has(o)||!r.empty()&&r.has(o)||i.set(o,a?Object.create(t):t)}),i}}
var Ps={getGeoBBox:function(t,e){return this.geoBoundToRect(e.bounds(t))},geoBoundToRect:function(t){return{x:t[0][0],y:t[0][1],width:Math.abs(t[1][0]-t[0][0]),height:Math.abs(t[1][1]-t[0][1])}},getFeatureGradientBBox:function(t,e,n){return this.getGeoBBox(t,n)},toLatLong:function(t,e,n){var r=t.geo.utils,a=[e,n]
if(!t.geo.isCanvasMode){a=t.getTransform().invert(a)}return r.projection.invert(a)},toXY:function(t,e,n){if("geoOrthographic"===(t.systemConf.map.projection||{}).name){var r=t.geo.utils.projection.rotate(),a=[-r[0],-r[1]]
if(d3.geoDistance([e,n],a)>Math.PI/2)return[null,null]}return t.geo.utils.projection([e,n])},clearContext:function(t){t.clearRect(0,0,t.canvas.width,t.canvas.height)},applyTransform:function(t,e){e.canvas?(e.translate(t.x,t.y),e.scale(t.k,t.k)):e.attr("transform",t)},round:function(t,e){var n=Math.pow(10,e||0)
return Math.round(t*n)/n}}
jn.GEO_FORMATS=d3.set(["Point","MultiPoint","LineString","MultiLineString","Polygon","MultiPolygon","GeometryCollection","Feature","FeatureCollection","Topology"]),jn.getMapFeatures=function(t){return"FeatureCollection"===t.type?t.features:ut(t)},jn.prototype.getStyle=function(t,e,n){var r=this.styles||{},a=t.styles||{},i=t.properties||{},o=Wl(r[e],a[e],i[e],this.defaultStyles[e])
if("function"==typeof o)return o.call(this,t,o)
if(n)if(this._gradient)o=this._gradient
else{var l=Wl(r.gradients,a.gradients,i.gradients,{})
if("linear"===l.type||"radial"===l.type){var s=Ps.getFeatureGradientBBox(t,l.type,this.utils.geoPath)
o=ne(l,[s.width,s.height],this.getStyle(t,"fillColor"),this.renderingMode,this.fillOpacity,"area",null,this.geoMap),t.transform={x:s.x,y:s.y},this.isCanvasMode||"linear"!==l.type||(this._gradient=o)}}else"dashStyle"===e&&X(o)&&(o=x(o,this.getStyle("strokeWidth")))
return o},jn.prototype.initialize=function(){var t=this.layerContainer.isD3Selection?"svg":"canvas"
this.defaultStyles={fillColor:"transparent",strokeColor:"#333",strokeWidth:.6,dashStyle:null},this.renderingMode=t,this.isCanvasMode=!0!==this.layerContainer.isD3Selection,this.renderingModeCapitialized=ft(t),this.paintLayer()},jn.prototype.update=function(t){t&&(this.layer=t),this.paintLayer(!0)},jn.prototype.paintLayer=function(t){this["paint"+this.renderingModeCapitialized+"Layer"](t)},jn.prototype.paintSvgLayer=function(){var t=this,e=jn.getMapFeatures(t.layer),n=function(e){e.attrs({stroke:function(e){return t.getStyle(e,"strokeColor")},"stroke-width":function(e){return t.getStyle(e,"strokeWidth")},"stroke-dasharray":function(e){return t.getStyle(e,"dashStyle")},"stroke-opacity":function(e){return t.getStyle(e,"strokeOpacity")}})},r=jt("path",".map-feature",jn.getMapFeatures(e),t.layerContainer).attrs({fill:function(e){return t.getStyle(e,"fillColor",!0)},"fill-opacity":function(e){return t.getStyle(e,"fillOpacity")||1},d:t.utils.geoPath})
if(t.useMesh){var a=t.geoMap.dataObject.getFeatureMesh(jn.getMapFeatures(t.layer))
n(r=jt("path",".map-feature-outline",[e[0]],t.layerContainer).attrs({fill:"none",d:t.utils.geoPath(a)}))}else n(r)},jn.prototype.paintCanvasLayer=function(){var t=this,e=t.layerContainer,n=jn.getMapFeatures(t.layer)
if(rt(n,function(n){e.save(),e.fillStyle=t.getStyle(n,"fillColor",!0),e.strokeStyle=t.getStyle(n,"strokeColor"),e.lineWidth=t.getStyle(n,"strokeWidth")
var r=t.getStyle(n,"dashStyle")
r&&X(e.setLineDash)&&e.setLineDash(r),e.beginPath(),t.utils.geoPath(n),n.transform&&e.translate(n.transform.x,n.transform.y),e.fill(),t.useMesh||e.stroke(),e.closePath(),e.restore()}),t.useMesh){var r=t.geoMap.dataObject.getFeatureMesh(jn.getMapFeatures(t.layer))
e.save(),e.fillStyle=t.getStyle(n[0],"fillColor",!0),e.strokeStyle=t.getStyle(n[0],"strokeColor"),e.lineWidth=t.getStyle(n[0],"strokeWidth")
var a=t.getStyle(r,"dashStyle")
a&&X(e.setLineDash)&&e.setLineDash(a),e.beginPath(),t.utils.geoPath(r),e.stroke(),e.closePath(),e.restore()}},jn.prototype.destroy=function(){var t=this
t.update([]),rt(t,function(e,n){t[n]=null,delete t[n]})},In.getPlotOptions=function(t,e){return Vl(t.systemConf,"chart.plot.plotoptions."+e)},In.prototype.initialize=function(){var t=this.geoMap,e=t.chartTypes[this.index],n=Nl.getDimension(t,this.index)
t.context=t.geo.featureLayer,this.isCanvasMode=t.geo.isCanvasMode,this.plotOptions=Fl(In.getPlotOptions(t,e.name),Wl(this.series.plotoptions,{}),!0),this.fillColor=ee(t,this.index,n),this.strokeColor=re(t,this.index,n),this.render(!1)},In.prototype.update=function(){this.render(!0)},Hn.fixMouseCoordinates=function(t,e){return e?(t.systemConf.map,{x:e[0]-t.plotarea.left,y:e[1]-t.plotarea.top}):{x:null,y:null}},Hn.fixEventArguments=function(t){return{seriesPos:t.seriesIndex,itemPos:t.itemIndex,subseriespos:t.subSeriesIndex,data:t}},Hn.prototype.initialize=function(){var t=this.geoMap,e=t.geo,n=this.utils=e.utils
t.systemConf.map,this.eventConfig=Wl(t.systemConf.map.events,{}),this.outerGeoBounds=n.geoPath.bounds(e.defaultLayer.layerGeojson),this.highlightElement=jt("g",".map-highlight",[1],t.staticPaneSVG,":first-child").attr("transform","translate("+t.plotarea.left+","+t.plotarea.top+")"),this.timers={},this.highlightCache={},this.outLine=this.getOutLine()},Hn.prototype.showTooltip=function(t,e,n){var r=ln(gn(n),t,0,0,this.geoMap,e,!1,!1,{},!0,!1,!1),a=r.helpers
a.itempos=e.itemIndex,a.subseriespos=e.subSeriesIndex,a.seriesindex=e.seriesIndex,this.geoMap.eventHandler.tooltipElement.show(this.geoMap,r,null,!0,r.helpers)},Hn.prototype.hideTooltip=function(t){var e=this.geoMap.systemConf.tooltip.hideDelay,n=this.geoMap.eventHandler.tooltipElement
t?n.hide(n.element):(clearTimeout(this.timers.tooltipDelay),this.timers.tooltipDelay=setTimeout(function(){n.hide(n.element)},Wl(e,150)))},Hn.prototype.getPoint=function(t){var e,n=this.geoMap,r=null
t instanceof Fn?(e=t.toArray(),t=t.toLatLong(this.geoMap).toArray()):t instanceof Yn&&(e=t.toXY(n),t=t.toArray())
return this.outLine.some(function(t){return d3.polygonContains(t,e)})&&n.renderer.some(function(e){return n.eventHandler.helpers.eventDisabled(e.series)?void 0:r=e.getPoint(t)}),r},Hn.prototype.getPointsByIndex=function(t,e){if(X(t)){var n=this.geoMap,r=[]
return n.seriesdata[t].data.forEach(function(t){r=r.concat(t)}),X(e)?ts.filterSelectionByColor(r,!0,e,n):r}},Hn.prototype.getHighlightEffect=function(t,e,n,r){var a=this.geoMap,i=a.legendHighlight.getLegendHighlightEffect(t,n,r),o={fillColor:Qa}
return i!==Za&&(a.fixIE&&(e="transparent"),o={fillColor:a.legendHighlight.getEffect(i,"area",e,{fill:Qa,stroke:e},0,r).fill,strokeWidth:2}),o},Hn.prototype.highlightPoints=function(t,e,n){switch(this.highlightElement.attr("visibility","visible"),e){case"feature":this.highlightGeoFeature(t,n)}},Hn.prototype.highlightGeoFeature=function(t,e){var n=this.geoMap
this.highlightLayer=new jn(t,n.geo.highlightUtils,this.highlightElement,e,n)},Hn.prototype.clearHighlightedPoints=function(){this.highlightElement.attr("visibility","hidden")},Hn.prototype.getTransform=function(){return d3.zoomTransform(this.geoMap.geo.eventLayer.node())},Hn.prototype.handleEvent=function(t,e,n){t=Hn.fixMouseCoordinates(this.geoMap,t),n=n||d3.event
var r=this.geoMap,a=new Fn(t.x,t.y),i=this.getPoint(a),o=!1!==r.systemConf.tooltip.enabled,l=Wl(r.zcEventType,e),s=r.eventHandler.oldInfo,u=!(!s||s.point!==(i&&i.point))
if("mouseout"===e)i=r.eventHandler.oldInfo
else if(X(r.eventHandler.oldInfo)&&!X(i)||("doubletap"===l||"tap"===l&&u)&&"mouseout"!==e)return r.eventHandler.mouseOut()
if(X(i)){var c=i.point,h=c.seriesIndex,d=r.renderer[h],f=Ve(null,d.plotOptions,r,l),p=r.eventHandler.helpers,g=!1,y=e,v={mousemove:"handleMouseMove",click:"handleMouseClick",mouseout:"handleMouseOut"}
Ll.isTouchDevice&&(g=!0,"click"===e&&(y="mousemove")),X(f)&&p.triggerUserCallback(f,i,n),p.isDefaultAllowed(f,n)&&X(d[v[y]])&&d[v[y]](i,u),"mousemove"===y?(o&&(clearTimeout(this.timers.tooltipDelay),this.showTooltip(t,c,n)),u||(r.eventHandler.addCursor(Ve(null,d.plotOptions,r,"cursor")),r.eventHandler.oldInfo=i,r.eventHandler.oldInfo.nearestPoint=Hn.fixEventArguments(c))):"mouseout"===y&&(o&&this.hideTooltip(g),r.eventHandler.hideCursor(),r.eventHandler.reverseLegendHighlight.reset(),r.eventHandler.oldInfo=null)}},Hn.prototype.getOutLine=function(){var t=this.geoMap,e=document.createElementNS(d3.namespace("svg").space,"path")
return d3.select(e).datum({type:"Sphere"}).attr("d",t.geo.highlightUtils.geoPath).attr("d").split("M").slice(1).map(function(t){return(t=t.slice(0,t.length-1)).split("L").map(function(t){return t.trim().split(/[,\s]/).map(function(t){return parseInt(t)})})})},at(Gr.prototype,{getPoint:function(t){var e=this.features,n=this.geoMap,r=n.dataObject,a=gt(e,function(e){return d3.geoContains(e,t)})
if(a){for(var i,o=r.userDataHashed.get(a.properties[r.joinByKey]),l=o.length;l--;)if(!n.seriesdata[o[l].seriesIndex].disabled){i=o[l]
break}if(!n.hasColorScale||n.hasColorScale&&ae(n.dataset.getClr(i),n))return{type:"feature",feature:a,point:i}}return null},getHighlightStyle:function(){},handleMouseMove:function(t,e){var n=this.geoMap,r=this.index,a=n.eventHandler.mapEvents
if(!e){var i=ie(n,r,t.point),o=a.getHighlightEffect(r,i,"selectedSeries","plot")
a.highlightPoints(t.feature,t.type,o)}},handleMouseOut:function(){var t=this.geoMap
t.eventHandler.hideCursor(),t.eventHandler.mapEvents.clearHighlightedPoints()},handleMouseClick:function(){this.geoMap.eventHandler.mapEvents.hideTooltip(!0)}}),Bn.prototype.getXY=function(){var t=this._coordinates
return t||(t=this._coordinates=this.latLong.toXY(this.geoMap)),t},Bn.prototype.getDimension=function(){var t=this.styles,e=this._dimension
return e||(e=this._dimension={width:Ql.getTextWidth(this.text,t.fontSize,t.fontFamily,t.fontStyle,t.fontWeight),height:Ql.getTextHeight(this.text,t.fontSize,t.fontFamily,t.fontStyle,t.fontWeight)}),e},Bn.prototype.getBBox=function(){var t=this._bbox
if(!t){var e=this.getXY(),n=this.getDimension()
t=this._bbox={x:e.x-n.width/2-2.5,y:e.y-n.height/2-2.5,width:n.width+2.5,height:n.height+2.5}}return t},Bn.prototype.overlapsWith=function(t){var e=this.getBBox(),n=t.getBBox()
return e.x<n.x+n.width&&e.x+e.width>n.x&&e.y<n.y+n.height&&e.height+e.y>n.y},Bn.prototype.insideRect=function(t){var e=this.getBBox()
return e.x+e.width<t.x+t.width&&e.x>t.x&&e.y>t.y&&e.y+e.height<t.y+t.height},Bn.prototype.clearCache=function(){this._bbox=this._coordinates=this._dimension=null},Nn.prototype.initialize=function(){var t=this.geoMap,e=t.systemConf.map.labels||{},n=this.geoLabelStyles=Object.create(e),r=this.labels=[],a={x:0,y:0,width:t.plotarea.width,height:t.plotarea.height},i=function(t){t.insideRect(a)&&!r.some(function(e){return t.overlapsWith(e)})&&r.push(t)}
rt(t.renderer,function(n,r){var a=n.plotOptions.datalabels
if(!n.series.disabled&&t.datalabels.moduleExists&&ir(a,t)){var o=ur(t,null,a,vl,null,r),l={}
l.fontFamily=Ht(a,t),l.fontSize=It(a,t),l.fontWeight=a.fontWeight||"normal",l.fontStyle=a.fontStyle||"normal",l.textShadow=a.textShadow,l.strokeColor=Wl(a.strokeColor,e.strokeColor),l.strokeWidth=Wl(a.strokeWidth,e.strokeWidth),l.type="point",rt(n.series.data,function(e){rt(e,function(e){var n=t.dataObject.getMapFeaturesByDataPoint(e,"array")[0]
if(n){var s=new Bn(o(e),new Yn(n.properties.longitude,n.properties.latitude),l,t),u=ie(t,r,e),c=!0
s.fontColor=rr(t.systemConf,u,a,t,!1,r,!1),t.updating&&t.hasColorScale&&(c=ae(t.dataset.getClr(e),t)),c&&i(s)}})})}}),!0===n.show&&(n.fontFamily=Ht(e,t),n.fontSize=It(e,t),n.fontWeight=e.fontWeight||"normal",n.fontStyle=e.fontStyle||"normal",n.fontColor=e.fontColor||"#333",n.textShadow=e.textShadow,n.strokeColor=e.strokeColor,n.strokeWidth=e.strokeWidth,n.type="background",!0===t.systemConf.map.allAreas&&t.dataObject.userUnmatchedMapFeatures.each(function(r){var a=r.properties,o=Y(!0,e.showAs,r,t),l=new Bn(Wl(a[o],o,a.name),new Yn(a.longitude,a.latitude),n,t)
i(l)})),this.render()},Nn.prototype.render=function(t){this.geoMap,this.geoMap.geo.isCanvasMode?this.renderCanvasLabel(t):this.renderSvgLabel(t)},Nn.prototype.renderCanvasLabel=function(){var t=this.geoMap.geo.labelLayer,e={}
this.labels.forEach(function(n){var r=n.styles,a=Wl(n.fontColor,r.fontColor),i=r.strokeColor||$(a),o=n.getXY()
if(X(o.x)&&X(o.y)){if(t.save(),r.textShadow&&!X(e[n.type])&&(e[n.type]=wa.canvas.parseTextShadow(r.textShadow)),e[n.type]){var l=e[n.type]
X(l)&&(t.shadowOffsetX=l[0],t.shadowOffsetY=l[1],t.shadowBlur=l[2],t.shadowColor=l[3])}t.textAlign="center",t.textBaseline="middle",t.fillStyle=a,t.strokeStyle=i,t.font=function(t,e,n,r){return t+" "+e+" "+n+"px "+r}(r.fontStyle,r.fontWeight,r.fontSize,r.fontFamily),r.strokeWidth>0&&(t.lineWidth=r.strokeWidth,t.strokeText(n.text,o.x,o.y)),t.fillText(n.text,o.x,o.y),t.restore()}})},Nn.prototype.renderSvgLabel=function(){var t=this.geoMap.geo.labelLayer
this.labelElements=jt("text",".geo-labels",this.labels,t).each(function(t){var e=d3.select(this),n=t.getXY(),r=t.styles,a=Wl(t.fontColor,r.fontColor),i=r.strokeColor||$(a)
X(n.x)&&X(n.y)&&(e.attrs({"font-family":r.fontFamily,"font-size":r.fontSize,"font-style":r.fontStyle,"font-weight":r.fontWeight,"text-anchor":"middle","dominant-baseline":"middle",transform:"translate("+n.x+","+n.y+")"}),r.textShadow&&e.style("text-shadow",r.textShadow),r.strokeWidth>0&&jt("tspan",".stroke-text",[1],e).text(t.text).attrs({stroke:i,"stroke-width":r.strokeWidth,x:0,y:0}),jt("tspan",".fill-text",[1],e).text(t.text).attrs({fill:a,x:0,y:0}))})},Nn.prototype.update=function(){var t=this.geoMap
t.geo.isCanvasMode&&Ps.clearContext(t.geo.labelLayer),this.labels.forEach(function(t){t.clearCache()}),this.initialize(!0)},Fn.prototype.toLatLong=function(t){var e=Ps.toLatLong(t,this.x,this.y)||[null,null]
return new Yn(e[0],e[1])},Fn.prototype.toJSON=function(){return{x:this.x,y:this.y}},Fn.prototype.toArray=function(){return[this.x,this.y]},Yn.prototype.toXY=function(t){var e=Ps.toXY(t,this.longitude,this.latitude)||[null,null]
return new Fn(e[0],e[1])},Yn.prototype.toJSON=function(){return{latitude:this.latitude,longitude:this.longitude}},Yn.prototype.toArray=function(){return[this.longitude,this.latitude]}
var Ts={}
qr.plot.canvasRenderer=function(t,e){"use strict"
var n={},r=t.systemConf,a=qr.DataProcessor.helpers
return n.draw=function(n){t.container.select(".highlight-canvas").style("visibility","hidden"),t.context=Un(t,"zc-canvas"),t.labelHolderContext=Un(t,"zc-labelholder-canvas",window.PointerEvent?t.container.selectAll("div.legendarea").node():null),e.barDatasetIndex=0,t.systemConf.legend.enabled&&t.svg.select(".seriesholder").selectAll("*:not(.zmarea)").remove(),t.dataObject.isPolarAxisCategory&&(t.context.translate(t.plotarea_approx.x,t.plotarea_approx.y),t.labelHolderContext.translate(t.plotarea_approx.x,t.plotarea_approx.y)),t.dataset.getDataType("x")==uo&&t.isAxisCategory&&qr.scale.barBandwidth(t)
var i=null
t.chartRendered=!1
var o=t.dataObject.isCombinationalChart,l=t.plotarea,s=o?ba.arrangeSeriesRenderingOrder(t):t.seriesdata
if(t.seriesdata.forEach(function(n,u){var c=s[u],h=o?c.seriesidx:u
!t.isAxisCategory&&!t.dataObject.isPolarAxisCategory&&h>0||(i=a.getChartType(c.type||t.userdata.seriesdata.type,"string"),null==t.renderer[h]&&(t.renderer[h]=Vn(i),t.rendererConf[h]=new qr.plot.rendererConf),t.renderer[h].chartRendered=!1,0==u&&(Ye(t,r.chart.plot.events,0,"init"),t.hideLoading(t.container)),ba.setRendererProp(t,t.renderer[h],c,h,u,e),l.width>0&&l.height>0&&Wn(t,c,t.renderer[h]))}),ba.renderCompletedEvents(t,n,e),!n){var u=Bt(t.systemConf.chart.plot.plotoptions[i],t.seriesdata[0].plotoptions,t,i),c=X(u.duration)?u.duration:400
if(!X(u.enabled)||0===c)return
var h=t.seriesdata.length
t.context.canvas.style.opacity=0
var d=setInterval(function(){var e=!0
if(t.renderer.length===h)for(var n=0;n<t.renderer.length;n++)if(!t.renderer[n].chartRendered){e=!1
break}e&&(clearInterval(d),ri(t.context.canvas).transition().duration(c).style("opacity",1))},1e3/60)}},n}
var Ms=function(){function t(t){return Math.sqrt(Ia(t[0],2)+Ia(t[1],2))}function e(e,n){var r=1
return e[0]*n[1]-e[1]*n[0]<0&&(r=-1),r*Math.acos(function(e,n){return function(t,e){return t[0]*e[0]+t[1]*e[1]}(e,n)/(t(e)*t(n))}(e,n))}function n(t,n,r,a,i,o,l,s){if(0===n||0===r)return s.lineTo(l[0],l[1])
a*=Math.PI/180,n=ja(n),r=ja(r)
var u=function(t,e){var n=Ba(e),r=Na(e)
return[n*t[0]+r*t[1],-1*r*t[0]+n*t[1]]}(function(t,e){return[(t[0]-e[0])/2,(t[1]-e[1])/2]}(t,l),a),c=function(t,e){return[t[0]*e[0],t[1]*e[1]]}(u,u),h=Ia(n,2),d=Ia(r,2),f=Math.sqrt(c[0]/h+c[1]/d)
f>1&&(n*=f,r*=f,h=Ia(n,2),d=Ia(r,2))
var p=Ha((h*d-h*c[1]-d*c[0])/(h*c[1]+d*c[0]))
i===o&&(p*=-1)
var g=function(t,e){return[t*e[0],t*e[1]]}(p,[n*u[1]/r,-r*u[0]/n]),y=function(t,e){return[t[0]+e[0],t[1]+e[1]]}(function(t,e){var n=Ba(e),r=Na(e)
return[n*t[0]-r*t[1],r*t[0]+n*t[1]]}(g,a),function(t,e){return[(t[0]+e[0])/2,(t[1]+e[1])/2]}(t,l)),v=[(u[0]-g[0])/n,(u[1]-g[1])/r],m=[(-1*u[0]-g[0])/n,(-1*u[1]-g[1])/r],x=e([1,0],v),b=x,w=x+e(v,m)
s.save(),s.translate(y[0],y[1]),s.scale(n,r),s.arc(0,0,1,b,w,1-o),s.restore()}var r={}
return r.drawPath=function(t,e){function r(t,e){return-1==="mlazhvcsqt".indexOf(t)?o=e:(o[0]+=e[0],o[1]+=e[1]),o.slice(0)}var a=0,i=0,o=[0,0]
Et(e).forEach(function(e){var l,s
switch(e.function){case"M":r(e.function,e.moves),t.moveTo(e.moves[0],e.moves[1]),a=e.moves[0],i=e.moves[1]
break
case"L":for(var u=0;u<e.moves.length;u+=2)r(e.function,e.moves),t.lineTo(e.moves[u],e.moves[u+1])
break
case"l":for(u=0;u<e.moves.length;u+=2)r(e.function,e.moves),a+=e.moves[u],i+=e.moves[u+1],t.lineTo(a,i)
break
case"A":var c=[o.slice()],h=[r(e.function,e.moves.slice(-2))],d=c.concat(e.moves.slice(0,-2),h)
d.push(t),n.apply(this,d)
break
case"C":for(l=e.moves;l.length;)s=l.splice(0,6),t.bezierCurveTo(s[0],s[1],s[2],s[3],s[4],s[5])
break
case"c":for(l=e.moves;l.length;)s=l.splice(0,6),s[0]+=a,s[2]+=a,s[1]+=i,s[3]+=i,a+=s[4],i+=s[5],t.bezierCurveTo(s[0],s[1],s[2],s[3],a,i)
break
case"Q":for(l=e.moves;l.length>0;)s=l.splice(0,6),t.quadraticCurveTo(s[0],s[1],s[2],s[3])
break
case"Z":t.closePath()}})},r.getRadianAngle=function(t){return t*Xa/180},r.constant=function(t){return function(){return t}},r.pointX=function(t){return t[0]},r.pointY=function(t){return t[1]},r.rgba=function(t,e){e=Wl(e,1)
var n=bi(t)
return"rgba("+n.r+","+n.g+","+n.b+","+e*n.opacity+")"},r.roundedRect=function(t,e,n,r,a,i,o,l){i=_t(i,r,a,!0)
var s=o&&l?e-r:e,u=o&&l?e:e+r,c=o&&!l?n-a:n,h=o&&!l?n:n+a
t.moveTo(s+i.tlx,c),t.lineTo(u-i.trx,c),t.arcTo(u,c,u,c+i.trx,i.trx),t.lineTo(u,h-i.brx),t.arcTo(u,h,u-i.brx,h,i.brx),t.lineTo(s+i.blx,h),t.arcTo(s,h,s,h-i.blx,i.blx),t.lineTo(s,c+i.tlx),t.arcTo(s,c,s+i.tlx,c,i.tlx),t.closePath()},r.boundBoxWithHook=function(t,e){var n=0,r=Et(e)
r.forEach(function(e,a){var i=e.moves
switch(e.function.toLowerCase()){case"m":t.moveTo(i[0],i[1])
break
case"l":t.lineTo(i[0],i[1])
break
case"a":var o=r[a-1].moves,l=0==n?[o[0],i[6]]:1==n?[i[5],o[1]]:2==n?[o[0],i[6]]:[i[5],o[1]]
n++,t.quadraticCurveTo(l[0],l[1],i[5],i[6])}})},r.getFontStyles=function(t,e,n,r,a,i){return nr(null,e,t,n,r,a,i)},r}()
wa.canvas=function(t,e,n,r){if(e){var a="stacklabel"===(r=r||"label"),i=r===xl||r===bl,o=e.properties,l=o.rotation,s=o.dataLabels,u=X(n)?t.renderer[n]:null,c=Gl.isQuantileColorScale(t),h=t.chartTypes[0].value==qr.charttype.treemap,d=Ms.getFontStyles(t,o.dataLabels,o.color,null,n,a),f=parseFloat(d["font-size"]),p=wa.canvas,g=t.labelHolderContext,y=p.getFont(d),v=p.parseTextShadow(d["text-shadow"])
e.forEach(function(e,r){var a=u&&u.seriesdataAfterUpdate?u.seriesdataAfterUpdate[r]:null
e.forEach(function(e,r){g.save()
var u,m,x,b,w=e.xy||[e.X,e.Y],C=e.display,k=$a
if(c||o.rp.threshold||t.dataObject.isHierarchy||!(t.isAxisCategory||t.dataObject.isPolarAxisCategory||t.dataObject.isNonAxisMultiSeriesCategory)||o.multiColoring){var S=h&&i?o.dataUpdate[r]:a&&a[r],O=ie(t,o.multiColoring?r:n,S&&S.data?S.data:S,n)
h&&i&&/(top-outset|bottom-outset)/.test(s.position)&&bi(O).opacity<.1&&(O="white"),k=rr(t.systemConf,O,s,t)}!0===C&&(u=w[0],m=w[1],x=e.customHTML?0:parseFloat(e.DY||0),b=e.height,x=(e.tspanInfo||1===x?f:b)*x,X(l)&&0!==l?(t.axes.rotated&&(x*=-1),g.translate(u+x,m),g.rotate(Ms.getRadianAngle(l))):g.translate(u,m+x),X(e.ANCHOR)&&(g.textAlign=p.align(e.ANCHOR)),e.customHTML?e.customHTML.forEach(function(n){p.drawCustomHTML(t,g,e,n,d,y,v,k)}):e.tspanInfo?e.tspanInfo.forEach(function(t){var e,n,r,a=t.style
a&&(e=p.getFont(d,a),r=a.fill,n=parseFloat(a["font-size"])),p.createText(g,t.text,e||y,r||k||d.color,v,$a,[t.dx||0,(n||f)*t.dy])}):p.createText(g,e.text,y,k||d.color,v,d),g.restore())})})}},Ca.canvas=function(){function t(t,n){t.each(function(){if(e){var t=e.properties,r=t.rp.chartObj,a=Ms.rgba,i=r.labelHolderContext
if(!X(i))return!1
if(Qn(t.dataLabels,r)){var o=Zn(t.dataLabels,r),l=tr(o.hook),s=t.dataUpdate,u=t.rotation||0,c=Kn(t.dataLabels,r),h=r.dataObject.getTransRectValue("radius",null,null,null,null,o.radius),d=X(o.strokeWidth)?+o.strokeWidth:1,f=x(o.dashStyle,d),p=b(o.lineCap,o.dashStyle),g=di()
e.forEach(function(e){e.forEach(function(e,y){if(!0===e.display){var v=e.xy||[e.X,e.Y],m=v[0],x=v[1],b=void 0!==e.actualDY?e.actualDY:parseFloat(e.DY)||0,w=e.height,C=e.width,k=qn(o.strokeColor,t,r,s,n)
"function"==typeof k&&(k=k(s&&s[y],y))
var S=qn(o.fillColor,t,r,s,n)
if("function"==typeof S&&(S=S(s&&s[y],y)),i.save(),X(u)&&0!==u){var O=0,A=0
r.axes.rotated?O=-1*b*w:(A=("middle"===e.ANCHOR?C/2:"end"===e.ANCHOR?-C:0)+c,O=-g.domain([-.3,.9]).range([w,0])(b)-c),i.translate(m+O,x+A),i.rotate(Ms.getRadianAngle(u))}else m=("middle"===e.ANCHOR?m-C/2:"end"===e.ANCHOR?m-C:m)-c,x=x-g.domain([-.3,1]).range([w,0])(b)-c,i.translate(m,x)
i.fillStyle=a(S,o.fillOpacity),i.strokeStyle=a(k,o.strokeOpacity),i.lineWidth=d,f&&X(i.setLineDash)&&(i.setLineDash(f),i.lineCap=p),i.beginPath(),i.translate(-m,-x),Ms.boundBoxWithHook(i,En(m,x,C,w,h,c,e.hookPosition,l,e.adjustVal)),i.fill(),i.stroke(),i.closePath(),i.restore()}})})}}})}var e
return t.args=function(n){return arguments.length?(e=n,t):e},t},wa.canvas.drawCustomHTML=function(t,e,n,r,a,i,o,l){var s=wa.canvas,u=n.xy||[n.X,n.Y],c=r.bb,h=r.node
switch(r.nodeName){case"image":var d=+(m=ri(h)).attr("x")||0,f=+m.attr("y")||0,p=+m.attr("width")||0,g=+m.attr("height")||0,y=m.attr("href")||m.attr("xlink:href"),v=new Image
v.onload=function(){e.drawImage(v,u[0]+d,u[1]+f,p,g)},v.src=y
break
case"rect":d=+(m=ri(h)).attr("x")||0,f=+m.attr("y")||0,p=+m.attr("width")||0,g=+m.attr("height")||0
var m,x=+m.attr("rx")||0
e.fillStyle=m.style("fill"),e.strokeStyle=m.style("stroke"),e.lineWidth=m.style("stroke-width"),e.beginPath(),Ms.roundedRect(e,d,f,p,g,t.dataObject.getTransRectValue("radius",$a,$a,$a,$a,x)),e.fill(),e.stroke(),e.closePath()
break
case"text":case"tspan":var b,w,C=h.style
C&&(b=s.getFont(a,C),w=C.fill),e.translate(c.x,c.y+.77*c.height),e.textAlign=s.align("start"),s.createText(e,h.textContent,b||i,w||l||a.color,o),e.translate(-c.x,-c.y-.77*c.height)}},wa.canvas.align=function(t){switch(t.toLocaleLowerCase()){case"start":return Fo
case"middle":return No
case"end":return Yo}},wa.canvas.getFont=function(t,e){return(e&&e["font-style"]||t["font-style"]||"normal")+" normal "+(e&&e["font-weight"]||t["font-weight"]||"normal")+" "+(e&&e["font-size"]||t["font-size"])+" "+(e&&e["font-family"]||t["font-family"])},wa.canvas.parseTextShadow=function(t){return(t=t&&t.trim())?t.split(/\s+/).map(function(t){var n=e(t)
return isNaN(n)?t:n}):void 0},wa.canvas.addTextShadow=function(t,e){X(e)&&(t.shadowOffsetX=e[0],t.shadowOffsetY=e[1],t.shadowBlur=e[2],t.shadowColor=e[3])},wa.canvas.createText=function(t,e,n,r,a,i,o){o=o||[0,0],t.font=n,t.fillStyle=Ms.rgba(r||i.color,W(i&&i["fill-opacity"],1)),wa.canvas.addTextShadow(t,a),t.fillText(e||"",o[0],o[1])}
var Es=function(){}
Es.canvasPatternFill=function(t,e){var n,r,a
return r=document.createElement("canvas"),a=r.getContext("2d"),n=t.ele?function(t){var e=Dl.get(jl,"svgPatternFill",t,{returnSVGimage:!0,base64:!0})
Xn(e.url,e)}(t):function(t){var e,n="zp"+L(t,"canvasFill")
if(qr[n])e=qr[n]
else{var r=document.createElement("canvas"),a=t.bgClr||t.bgClr_base,i=t.stroke||t.stroke_base,o=/\{\{([a-z]+)\}\}/,l=t.type.split(","),s=l.length,u=t.size.split(","),c=t.strokeWidth.split(","),h=a.split(","),d=i.split(","),f=(t.fillOpacity||"").split(","),p=((t.strokeOpacity||"").split(","),t.translate?t.translate.split(","):null)
u=t.width?S(t,u):u,r.width=u[0],r.height=u[0]
for(var g=r.getContext("2d"),y=0;s>y;y++){var v=q(d[y]||d[0])?t.stroke_base:"static"==(d[y]||d[0])?t.customStaticClr:d[y]||d[0],m=q(h[y]||h[0])?t.bgClr_base:"static"==(h[y]||h[0])?t.customStaticClr:h[y]||h[0],x=(u[y]||u[0])/2
if(v=o.test(v)?te(t.stroke_base,1,v.replace(o,"$1"),xi):v,m=o.test(m)?te(t.bgClr_base,1,m.replace(o,"$1"),xi):m,p){var b=p[y]||p[0]
x+=parseFloat(b)}if(g.save(),g.translate(x,x),g.beginPath(),g.lineWidth=c[y]||c[0],g.fillStyle=Ms.rgba(m,f[y]||f[0]),g.strokeStyle=v,"circle"===l[y])g.arc(0,0,u[y]/2,0,2*Xa,!1)
else{var w=P(l[y])(u[y]||u[0])
Ms.drawPath(g,w)}g.fill(),g.stroke(),g.closePath(),g.restore()}e=qr[n]=r}return e}(t),a.createPattern(n,"repeat")},Es.imageFill=function(t,e){Xn(t.name,t,e)}
var Ls=function(){var t={},e=t.canvasGradientFill=function(t,e,n,r,a,i){return X(i.context)||(i.context=document.createElement("canvas").getContext("2d")),t&&t.type?Ls[t.type](t,e,n,r,a,i):null},r=t.linear=function(t,e,r,a,i,l){var s,u,c,h,d=l.context,f=t.dimension,p=t.spreadMethod,g=+t.x1||0,y=+t.x2||0,v=+t.y1||0,m=+t.y2||0,x=_(0,t,t.color,"linear"),b="repeat"!==p&&"reflect"!==p||!Ll.IS_IOS&&!Ll.SAFARI?100:Da(ja(y-g),ja(m-v))
n(f)?(s=0,u=f[0],c=0,h=f[1]):(s=f.x1||0,u=f.x2||0,c=f.y1||0,h=f.y2||0)
var w=di().domain([0,100]).range([s,u].sort(_i)),C=di().domain([0,100]).range([c,h].sort(_i)),k=w(100*g/b),S=(g=w(100*y/b),C(100*v/b)),O=(v=C(100*m/b),d.createLinearGradient(k,S,g,v))
return o(O,x,t.opacity),O},a=t.radial=function(t,e,r,a,i,l){var s=l.context,u=t.dimension,c=t.spreadMethod,h=_(0,t,t.color,"radial"),d=n(u)?X(u[2])?u[2]:u[0]:u.r,f=n(u)?d:u.x2-u.x1,p=n(u)?d:u.y2-u.y1,g=f/100*t.x||0,y=p/100*t.y||0,v="repeat"!==c&&"reflect"!==c||!Ll.IS_IOS&&!Ll.SAFARI?d/100*t.radius:d,m=s.createRadialGradient(g,y,0,g,y,v)
return o(m,h,t.opacity),m},i=t.thresholdLinear=function(t,e,n,r,a,i){var l=i.context,s={opacity:[],offset:[],color:[]}
n.forEach(function(t){s.opacity.push(1),s.offset.push(t.offset),s.color.push(t.color)})
var u=l.createLinearGradient(t.x1,t.y1,t.x2,t.y2)
return o(u,s,t.opacity),u},o=function(t,e,n){var r=e.offset.length,a=-1
for(n=n||1;++a<r;){var i=ja(1-(W(e.opacity[a],1)+n)),o=Ms.rgba(e.color[a],i)
t.addColorStop(parseFloat(e.offset[a])/100,o)}},l={}
return l.create=function(e,n,r,a){if(/threshold/gi.test(n))return t[n](e,r,a)
var i=Ll.SAFARI
Ll.SAFARI=0
var o=gradients.getStops({},r,r.color,n),l=t[n](e,r,o)
return Ll.SAFARI=i,l},l.linear=r,l.radial=a,l.thresholdLinear=i,l.canvasGradientFill=e,qr.canvasGradient?qr.canvasGradient:l}()
qr.labelRenderer=function(){},qr.labelRenderer.drawLabelsFromQueue=function(t,e,n){if(n.labelHandler=null,"image"!==n.plot.renderer.mode){var r=n.dataObject
if(n.isAxisCategory){(function(){var t=r.groupedByStack
t.keys().forEach(function(e,a){var i=t.get(e),o=i.stackLabelIndex
if((r.noofBarEnabledSeries||r.isCombinationalChart)&&null!=o){var l={renderer:n.renderer[o],chartObj:n,args:[{data:[i.stackExtent]},o,ml,a],charttype:Ko}
qr.labelRenderer.drawLabel(l)}})})()}t.forEach(function(t){qr.labelRenderer.drawLabel(t)})
var a=Gn(n),i=e.length,o={x1:a.left,y1:a.top,x2:a.right,y2:a.bottom}
if((r.isCombinationalChart||r.isContinousChart||r.isPolarAxisCategory?function(){var t=r.isContinousChart
e=t?e.sort(function(t,e){return _i(t.x1,e.x1)}):e
for(var n=1;i>n;n++){var a,l,s,u=0,c=!1,h=0,d=e[n].pointRadius||0,f=e[n].x1,p=e[n].y1,g=e[n].x2,y=e[n].y2,v=e[n].x2-e[n].x1,m=e[n].y2-e[n].y1,x=e.slice(0,n)
x=t?x.reverse():x
do{switch(h){case 0:l="hidden"===(a=e[n]).overlap||r.isBubbleEnabled
break
case 1:a.y1=p-m/2,a.y2=y-m/2,s=Vo
break
case 2:a.x1=(f+g)/2+d,a.x2=(f+g)/2+d+v,a.y1=y+1,a.y2=y+m+1,s=Fo
break
case 3:a.x1=f,a.x2=g,a.y1=y+2*(d+1),a.y2=y+2*(d+1)+m,s=Wo
break
case 4:a.x1=(f+g)/2-d-v,a.x2=(f+g)/2-d,a.y1=y+1,a.y2=y+m+1,s=Yo}for(var b=n-1;b>=0;b--)if(c=he(x[b],a)){u++
break}}while(++h<5&&c)
if(0!=u){var w=!!r.isPolarAxisCategory||ar(a,o),C=e[n].translateFunction,k=e[n].id,S=e[n].isStackedLabels
!w||5==u||l?(C(k,null,null,!0,Ta,Ta,S?ml:vl),e[n].x1=e[n].y1=e[n].x2=e[n].y2=0):C(k,a.x1-f,a.y1-p,null,void 0,s,S?ml:vl)}}}:r.noofBarEnabledSeries?function(){var t=r.getAxisRotated()
e.sort(function(e,n){return t?Pi(e.y1,n.y1):_i(e.x1,n.x1)})
for(var n=0;i>n;n++){for(var a=!1,l=0,s=0,u=e[n].x1,c=e[n].y1,h=e[n],d=e.slice(0,n).sort(function(e,n){return t?Pi(e.x1,n.x1):_i(e.y1,n.y1)}),f="hidden"===h.overlap,p=n-1;p>=0&&2>l;p--){var g=he(d[p],h)
g&&(t?(s=d[p].x2-h.x1,h.x2+=s,h.x1+=s):(s=d[p].y1-h.y2,h.y2+=s,h.y1+=s),l++),a=a||g}if(a){var y=ar(h,o),v=e[n].translateFunction,m=e[n].id,x=e[n].isStackedLabels
!y||l>1||f?(v(m,null,null,!0,Ta,Ta,x?ml:vl),e[n].x1=e[n].y1=e[n].x2=e[n].y2=0):v(m,h.x1-u,h.y1-c,Ta,Ta,Ta,x?ml:vl)}}}:function(){if(i){var r,a,o,l=[],s=[],u=e.TOP,c=e.BOTTOM,h=0,d=0,f=[],p=[],g=0,y=0,v=0,m=0
e.forEach(function(t){if(t.isLeft){var e=mr(t,o,u,c,r,s,d,m,!0)
o=e.totalslot,r=e.prev,d=e.count,m=e.need}else e=mr(t,o,u,c,a,l,h,v),o=e.totalslot,a=e.prev,h=e.count,v=e.need}),v||m?("funnel"===e.actualType&&l.reverse(),g=vr(l,g,f,u),s.reverse(),y=vr(s,y,p,u),yr(f,u,o,g),yr(p,u,o,y),e.forEach(function(t){n.labelHandler.update(t.id,t.DX,t.translate||0,t.hide,void 0,t.overlappingHookPosition)}),t.forEach(function(t){var e=t.args[1],r=n.labelHandler.getQueue(e)
r&&r.properties&&r.properties.onOverlap&&r.properties.onOverlap()})):(t.forEach(function(t){var e=t.args[1],r=n.labelHandler.getQueue(e)
r&&r.properties&&r.properties.onNonOverlap&&r.properties.onNonOverlap()}),e.forEach(function(t){n.labelHandler.update(t.id,0,0,null,t.actualDY)}))}})(),n.staticPaneSVG.select(".temp_label").remove(),n.labelHandler){var l=n.staticPaneSVG.selectAll("g.labelholder"),s=n.plot.renderer.mode
t.forEach(function(t){var e=t.args[1],a=r.isAxisCategory?t.args[3]:null,i=/(pieInnerLabels|funnelInnerLabels)/.test(t.charttype),o="pieInnerLabels"===t.charttype&&Ke(n.chartTypes[e].value)&&t.args[t.args.length-1]?bl:i?xl:vl,u=n.labelHandler.getQueue(e,a,o),c=Ca[s]().args(u)
l.call(c,e,o)}),n.labelHandler.draw()}}},qr.labelRenderer.drawLabel=function(t){var e=t.chartObj,n=t.renderer,r=t.charttype,a=t.args,i=e.staticPaneSVG.selectAll("g.labelholder"),o=e.labelHandler
e.labelHandler||(o=e.labelHandler=wa.initialize(e),o.chartType=r)
var l=qr.labelRenderer[r]()
l.renderer(n).args(a),i.call(l,o)},qr.labelRenderer.bar=function(){function t(t,l){t.each(function(){var t,s=n[0],u=n[1],c=n[2]||vl,h=e.commonRendererProp().params,d=s.plotoptions,f=h.chartObj,p=f.systemConf,g=h.commonPlotOptions,y=h.dataset,v=h.stacked,m=h.yscale,x=h.yaxiscolumnorder,b=h.labelArray,w=c===ml,C="canvas"===f.plot.renderer.mode
r=h.axisrotated,t=er(g,w?$a:d,f,u),w&&(t=t.stackLabels)
var k=w?or(t,f):ir(t,f)
if(!s.disabled&&k){var S=Gn(f),O=t.textOverlap,A=qr.labelRenderer.bar.getVAlign(f,u,c),_=t.showZeros,P=ue(g,f),T=S.left,M=S.top,E=S.right,L=S.bottom,z=f.svg.node().getBoundingClientRect(),R=z.left+f.plotarea.left,j=z.top+f.plotarea.top,I=.75*(r?f.plotarea.width:f.plotarea.height),H=ur(f,h,t,c,$a,u),B=H.contentType||"text",N="html"===B&&H.multiLine,Y=A===Uo,V=o.isCatNull(y,"x"),U=o.isCatNull(y,"y",x),G=p.chart.axes.yaxis[x||0].reversed,q=f.barscale2.bandwidth()||0,Z=It(t,f),Q=f.dataset.getDataType("y",x)
if(!Y||f.dataObject.rangeCorrections.datalabels["y"+x]){var K=0,$=0,J=0,tt=0,et=0
if(Qn(t,f)){var nt=Zn(t,f),rt=tr(nt.hook)
K=Kn(t,f),$=$n(t,f),J=v||A===Qo?0:rt.height,tt=rt.width,et=nt.radius}var at="clip"===O,it=p.chart.plot.datalabels.handleOverlapping&&O!==Za,ot=Da(0,W(t.padding,2))+K+J+(Y&&$?$/2-1:0),lt=Y&&function(){if(Q===uo){var t=m.domain()
return m(t[t.length-1])+m.bandwidth()/2}var e=f.dataObject.rangeCorrections.datalabels,n=[0],a=r?G?1:-1:G?-1:1
for(var i in e)i.indexOf("y")>-1&&n.push(e[i])
return m(m.domain()[1])+oi(n)*a}()
ot=ot>I?I:ot,a=!(a=t.textDirection)||v&&!w?r?Xo:Go:a,i=r?a==Go?90:0:a==Go?0:270
var st=e.commonOption,ut=function(){return f.dataObject.getTransRectValue.apply(f.dataObject,F(arguments))},ct=kt(f.staticPaneSVG.select(".labelholder"),fo,[1],".","class","temp_label"),ht=l.update,dt=l.add
s.data.forEach(function(n,o){var l=e.seriesdataAfterUpdate&&!w?e.seriesdataAfterUpdate[o]:s.data[o]
if(w){var c=p.chart.scroll
c&&c.enabled&&(l=function(t,e){return t.filter(function(t){var n=t[0]
return e.indexOf(n)>-1})}(l,h.xscale.domain())),Y&&m.domain()[0]<0&&(l=function(t){var e=ki()
return t.filter(function(t){var n=t[0]
return!e.has(n)&&(e.add(n),!0)})}(l))}var d=[]
nr(ct,t,f,h.color,!1,u),ct.styles({fill:Qa}),l.forEach(function(e,n){var l,s=$a,c=G?-1:1,h=w?e[1]<0:y.getY(e,x)<0
ct[B](function(){if(w){var t=e[1]
e[0],l=_||0!=t?H(e):$a}else l=V(y.getX(e))||U(y.getY(e,x))||!_&&0==y.getY(e,x)?$a:H(e)
return l}),N&&hr(ct,0)
var p,g,k,S,P,z
s=D(ct.node())
var I=0,F=0
if(w){var W=st.bandwidth1(e[0])+st.bandwidth2(st.stackGroupIndex),Q=m(e[2]||e[1])
p=r?Q:W,g=r?W:Q,r?a==Go?(p+=(h?-ot:ot)*c,k=G?h?"-0.3em":"1em":h?"1em":"-0.3em"):(g+=q/2,k="0.3em",Y?(p=lt+ot*c+0*c,S=G?"end":$a):(p+=(h?-ot:ot)*c,S=G?h?$a:"end":h?"end":$a,N&&(p+=s.width/2*(h?-1:1)*c))):(p+=q/2,g+=(h?ot:-ot)*c,a==Xo?(k="0.3em",S=G?h?$a:"end":h?"end":$a):(S="middle",Y?(g=lt-ot*c,k=G?"1em":"-0.3em"):k=G?h?"-0.3em":"1em":h?"1em":"-0.3em"))}else{var nt=s,rt=(W=ut("x",e,o,n,st)||0,Q=ut("y",e,o,n,st)||0,ut("width",e,o,n,st)||0),dt=ut("height",e,o,n,st)||0,ft=at
if(p=W,g=Q,r)v?(g+=dt/2,k="0.3em",A==Qo?(p+=rt/2*c,S="middle"):A==Wo?(p+=(h?ot:rt-ot)*c,S=G?h?"end":$a:h?$a:"end",N&&!Y&&(p+=nt.width/2*(h?1:-1)*c)):(p+=(h?rt-ot:ot)*c,S=G?h?$a:"end":h?"end":$a,N&&!Y&&(p+=nt.width/2*(h?-1:1)*c))):a==Xo?(F=Jn(s.height,K,et,tt),g+=dt/2+F/2,k="0.3em",ft=ft&&A!=Wo&&nt.width>rt,P=G?h?Fo:Yo:h?Yo:Fo,Y?(S=G?"end":$a,p=lt+ot*c+0*c,P=G?Yo:Fo):ft?A==Vo?p+=G?h?-rt+ot:-rt:h?0:ot:A==Qo&&(p+=G?-rt+K:K):(S=G?h?$a:"end":h?"end":$a,A==Qo?(p+=(nt.width>rt?h?rt:0:rt/2)*c,S=nt.width>rt?S:"middle"):p+=A==Wo?(h?-ot:rt+ot)*c:(h?rt-ot:ot)*c,!N||A===Qo&&nt.width<=rt||(p+=(h?-s.width/2:s.width/2)*c))):(I=Jn(s.width,K,et,tt),k=G?h?"-0.3em":"1em":h?"1em":"-0.3em",ft=ft&&nt.width>dt,P=G?h?Vo:Wo:h?Wo:Vo,A==Qo?(nt.height>rt?N?(p+=(G?h?rt:0:h?0:rt)*c,p+=G?nt.height/2*(h?1:-1):0):p+=(G?h?0:rt:h?rt:0)*c:p+=rt/2*c,k=nt.height>rt?k:"0.3em"):p+=A==Wo?(h?-ot:rt+ot)*c:(h?rt-ot:ot)*c,ft?(p+=I/2,g+=K):(g+=dt/2,S="middle",A==Qo&&(k="0.3em")))
else if(v)p+=rt/2,S="middle",A==Qo?(g+=dt/2*c,k="0.3em"):A==Wo?(g+=(h?dt-ot:ot)*c,k=G?h?"1em":"-0.3em":h?"-0.3em":"1em"):(g+=(h?ot:dt-ot)*c,k=G?h?"-0.3em":"1em":h?"1em":"-0.3em")
else if(a==Xo){F=Jn(s.height,K,et,tt)
var pt=!G&&h||G&&!h?nt.width:0
ft=ft&&A!=Wo&&nt.width+ot>dt,k="0.3em",P=G?h?Fo:Yo:h?Yo:Fo,ft?(p+=rt/2,g+=A==Qo?G?K:dt-K:G?h?-ot:0:dt+(h?0:-ot)):(p+=rt/2,A==Qo?(g+=nt.width>dt?N?(h?s.width/2:dt-s.width/2)*c:(h?0:dt)*c+pt:dt/2*c,S=nt.width>dt?$a:"middle"):A==Wo?(g+=(h?dt+ot:-ot)*c+pt,N&&(g-=s.width/2)):(g+=(h?ot:dt-ot)*c+pt,N&&(g-=s.width/2)))}else I=Jn(s.width,K,et,tt),ft=ft&&nt.width+2*K>rt,k=G?h?"-0.3em":"1em":h?"1em":"-0.3em",P=G?h?Vo:Wo:h?Wo:Vo,Y?(g=lt-ot*c,P=G?Wo:Vo,k=G?"1em":"-0.3em"):A==Qo?(g+=(nt.height<dt?dt/2:h?0:dt)*c,k=nt.height<dt?"0.3em":k):g+=A==Wo?(h?dt+ot:-ot)*c:(h?ot:dt-ot)*c,ft?p+=K:(p+=rt/2,S="middle")}if(N){k=parseFloat(k)
var gt=1.1*(t.showAs.length-1);-.3===k?(z=k,k-=gt):.3===k&&(z=k,k-=gt/2),k+="em",ft||Y||(S="middle")}if(ct.attrs({x:p,y:g,dy:k,"text-anchor":S,transform:"rotate("+i+" "+p+" "+g+")"}),Y&&!1!==Lt){var yt=qt(X(t.maxWidth)?t.maxWidth:"30%",f.plotarea.width)
if("html"===B){hr(ct,p)
var vt={left:(xt=D(ct.node())).x,top:xt.y,right:xt.x+yt,bottom:xt.y+xt.height},mt=(xt.width,fr(ct,Z))
dr(ct,f,[0,0],0,vt,mt),l=ct.html()}else{var xt
vt={left:(xt=D(ct.node())).x,top:xt.y,right:xt.x+yt,bottom:xt.y+xt.height}
lr(ct,f,[0,0],0,vt),l=ct.text()}}var bt=0,wt=0,Ct=0,kt=0
if(P=A===Qo?$a:P,r?kt=(a===Go?I:F)/2:Ct=(a===Go?I:F)/2,!at){N&&hr(ct,p)
var St=K+$/2,Ot=(nt=ct.node().getBoundingClientRect()).left-R-St-Ct-0,At=Ot+nt.width+2*St+2*Ct,_t=nt.top-j-St-kt-0,Pt=_t+nt.height+2*St+2*kt,Tt=p+(T>Ot?T-Ot:At>E?-(At-E):0)
Tt==p||Y&&r||(bt=Tt-p,p=Tt)
var Mt=g+(M>_t?M-_t:Pt>L?-(Pt-L):0)
Mt==g||Y&&!r||(wt=Mt-g,g=Mt)}var Et=ae(y.getClr(e),f),Lt=w||Et
if(it)if(v&&!w){ct.attrs({x:p,y:g}),N&&hr(ct,p),s=D(ct.node())
W=ut("x",e,o,n,st)||0,Q=ut("y",e,o,n,st)||0,dt=ut("height",e,o,n,st)||0,rt=ut("width",e,o,n,st)||0
G&&(r?W-=rt:Q-=dt)
ar({x1:s.x-K,y1:s.y-K,x2:s.x+s.width+K,y2:s.y+s.height+K},{x1:W,y1:Q,x2:W+rt,y2:Q+dt})||(Lt=!1)}else if(!at||w){N&&hr(ct,p)
var zt=(nt=ct.node().getBoundingClientRect()).left-R,Dt=nt.top-j,Rt={id:"lbl"+u+"_"+o+"_"+n,translateFunction:ht,isStackedLabels:w,x1:zt-K+bt-Ct,y1:Dt-K+wt-kt,x2:zt+nt.width+K+bt+(i?J+2*$:0)+Ct,y2:Dt+nt.height+K+wt+(i?0:J+2*$)+kt,overlap:Y&&"hidden"!==O&&O!==Za?"hidden":O}
b.push(Rt)}else{if(a!=Go){var jt=ut(r?"width":"height",e,o,n,st)||0
rt=A==Wo?s.width:jt-(A==Vo?ot+K:2*K)}else rt=q-2*K
s.width=Ra(rt,s.width)}var It={X:p,Y:g,DY:k,ANCHOR:S,text:l,display:Lt,height:s.height+F,width:s.width+I,hookPosition:P,adjustVal:a===Go?r?wt:bt:$a}
void 0!==z&&(It.actualDY=z),C&&"html"===B&&(It.tspanInfo=fr(ct,Z)),d.push(It)}),d.dataUpdate=l
dt(d,u,o,$a,w?ml:$a).properties={type:Ko,dataLabels:t,rotation:i,color:h.color,dataUpdate:l,showlabel:k,multiColoring:P,textDirection:a,rp:h,contentType:B,isMultiLine:N}})}}})}var e,n,r,a,i,o=qr.DataProcessor.helpers
return t.renderer=function(n){return arguments.length?(e=n,t):e},t.args=function(e){return arguments.length?(n=e,t):n},t},qr.labelRenderer.bar.getVAlign=function(t,e,n){if(t.dataObject.noofBarEnabledSeries){var r=n===ml,a=er(t.systemConf.chart.plot.plotoptions[t.chartTypes[e].name],r?$a:t.seriesdata[e].plotoptions,t,e)
r&&(a=a.stackLabels)
var i=t.dataObject,o=i.getAxisRotated(),l=i.isstacked(),s=a.labelPos||Wo,u=a.textDirection
return(r?or(a,t):ir(a,t))?(u=!u||l&&!r?o?Xo:Go:u,n===vl&&s===Uo&&(l||o&&u!==Xo||!o&&u===Xo)&&(s=Wo),s):void 0}},qr.labelRenderer.pie=function(){function t(t,u){t.each(function(){var t=a[0],c=a[2],h=a[3],d=a[4],f=a[5],p="translate("+a[8][0]+","+a[8][1]+")",g=a[9]||{},y=r.commonRendererProp().params
l=y.chartObj,s=l.dataset
var v=l.systemConf,m=y.commonPlotOptions,x=y.labelArray,b=y.datasetIndex||a[1]||0,w=(r.plotarea?r.plotarea():l.plotarea).height
o=Ke(l.chartTypes[b].value),t=t[b],i=a[6]
var C,k,S,O,A=!0===v.chart.plot.datalabels.handleOverlapping,_=t.plotoptions,P=er(m,_,l,b)
if(O=ir(P,l),!t.disabled&&O){var T=P.type,M=P.line,E=ur(l,y,P,vl,d,b),L=E.contentType||"text",z="html"===L,R=z&&E.multiLine,j=0,I=0,H=0,B=0
if(Qn(P,l)){var N=Zn(P,l),F=tr(N.hook)
j=Kn(P,l),I=j+$n(P,l)+F.height,H=F.width,B=N.radius}O=O?T:"hidden",C=(g.padding||+(P.padding||0))+I,S=It(P,l),k=+(qr.utils.getValueOfPlotOptions(_,m)("outerPadding")||0),r.autoLabelDone=!1,r.showlabel=O,r.lineStrokeWidth=W(M.strokeWidth,1)
var Y=kt(l.staticPaneSVG.select(".labelholder"),"text",[1],".","class","temp_label")
Y.attr("transform",p)
var V=u.add;(o?t:t.data).forEach(function(t,s){var u=r.seriesdataAfterUpdate?r.seriesdataAfterUpdate[s]:o?t:c,d=[]
nr(Y,P,l,y.color),Y.style("fill",Qa),u.forEach(function(t,a){var i,l=null,u=!e(t),c=0,p=n(t),g=0>p||p>Xa,y="doubleside"==O?0>p||p>Xa?-(h+C):h+C:f.centroid(t)[0],v=f.centroid(t)[1]+Da(0,S-k-10-(h+f.centroid(t)[1])),m=R?"middle":g?"end":"start",w=R?"0.9em":"circular"==O&&p>Xa/2&&3*Xa/2>p?Zt(p)+"em":"0.3em",_=w,P=t.data
if(i=(o?0==t.depth:e(t))?null:E(P),Y[L](i).attrs({x:y,y:v,dy:w,"text-anchor":m}),u&&R){hr(Y,y)
l=D(Y.node())
if("circular"==O){v+=di().range([-1,0]).domain(Xa>p?[0,Xa]:[2*Xa,Xa])(p)*l.height,y+=(p>0&&Xa>p?.5:p>Xa&&2*Xa>p?-.5:0)*l.width}else v-=.5*l.height,y-=l.width/2*(g?1:-1)
Y.attr("y",v),hr(Y,y)}if(A){r.showlabel="auto"
if(R||(w="0.3em",Y.attr("dy",w)),u){c=Jn((l=D(Y.node())).height,j,B,H)
var T=g?-(h+C+10):h+C+10
R&&(T+=l.width/2*(g?-1:1))
var M={id:"lbl"+b+"_"+s+"_"+a,x1:l.x-I,x2:l.x+l.width+I,y1:l.y-5-I-c/2,y2:l.y+l.height+5+I+c/2,isLeft:g,actualDY:_,DX:T-y,overlappingHookPosition:g?Yo:Fo}
x.push(M)}}else l=D(Y.node()),c=Jn(l.height,j,B,H)
var N={X:y,Y:v,DY:w,ANCHOR:m,text:i,display:u,ID:"lbl"+b+"_"+s+"_"+a,width:u?l.width:0,height:u?l.height+c:0,hookPosition:"circular"===O?null:g?Yo:Fo}
z&&(N.isLeft=g),d.push(N)})
var g=V(d,b,s)
g.properties={type:ll,dataLabels:P,dataUpdate:u,showlabel:r.showlabel,rp:y,translation:p,trans:a[8],txtHgt:S,isSunburst:o,connectorPath:function(t){var e=n(t)
return"M "+i.centroid(t)[0]+" "+i.centroid(t)[1]+" L"+f.centroid(t)[0]+" "+f.centroid(t)[1]+" L"+f.centroid(t)[0]+" "+f.centroid(t)[1]+" L"+(0>e||e>Xa?-(h+C-I):h+C-I)+" "+f.centroid(t)[1]},onNonOverlap:function(){g.properties.showlabel=r.showlabel=O,r.autoLabelDone=!0},onOverlap:function(){g.properties.connectorPath=function(t,e){var r=n(t),a=Da(0,S-k-10-(h+f.centroid(t)[1])),o=f.centroid(t)[1]+a,l=0>r||r>Xa?-1:1,s=g[0][e].Y+(R?g[0][e].height/2:0),u=s-o?(h+C-I+10)*l:f.centroid(t)[0],c=f.centroid(t)[1],d=(h+C-I+10)*l,p=s
return"M "+i.centroid(t)[0]+" "+i.centroid(t)[1]+" Q "+u+" "+c+" "+d+" "+p}},contentType:L,isMultiLine:R},x.TOP=-a[8][1],x.BOTTOM=w-a[8][1]})}})}function e(t){return!ae(s.getClr(o?t:t.data),l)||(o?null==t.parent||0==t.value:0==t.value)}function n(t){return((o?i.startAngle()(t):t.startAngle)+(o?i.endAngle()(t):t.endAngle))/2}var r,a,i,o,l,s
return t.renderer=function(e){return arguments.length?(r=e,t):r},t.args=function(e){return arguments.length?(a=e,t):a},t},qr.labelRenderer.dial=function(){function t(t,r,a){t.each(function(){var t=n[0],i=n[1],o=e.commonRendererProp().params,l=o.chartObj,s=o.commonPlotOptions,u=o.color,c=t.plotoptions,h=l.plotarea_approx,d=l.axes.y.groups[0].scale.domain(),f=er(s,c,l,i),p=ir(f,l),g=ur(l,o,f,vl,d[1]-d[0],0),y=g.contentType||"text",v="html"===y&&g.multiLine
if(p){var m=Qn(f,l)?Kn(f,l)+$n(f,l):0,x=kt(l.staticPaneSVG.select(".labelholder"),"text",[1],".","class","temp_label")
nr(x,f,l,u[0]),x.style("fill",Qa)
var b=[l.userdata.seriesdata.chartdata[0].data[0][0]],w=[]
if(b.forEach(function(t,e){var n=v?"0.9em":"-.3em",r=g(t)
x[y](r).attrs({x:o,dy:n,"text-anchor":"middle"})
var a=D(x.node()),o=X(f.x)?Y(f.x,t,l,a):h.x,u=X(f.y)?Y(f.y,t,l,a):h.y+(s.needle.show?a.height+(+f.padding||0)+(+s.needle.width/2||7)+m:a.height/2)
v&&(X(f.y)||(u-=a.height),hr(x,o),a=D(x.node()))
var c={X:o,Y:u,DY:n,ANCHOR:"middle",text:r,display:!0,ID:"lbl"+i+"_0_"+e,width:a.width,height:a.height}
w.push(c)}),a){var C=w[0],k=kt(a,"text",p?b:[])
nr(k,f,l,u[0]),k[y](C.text).attrs({"text-anchor":C.ANCHOR,dy:C.DY,transform:"translate("+C.X+","+C.Y+")"}),v&&hr(x,C.X)}else{(0,r.add)(w,i,0).properties={type:sl,dataLabels:f,dataUpdate:b,showlabel:p,rp:o,contentType:y,isMultiLine:v}}}})}var e,n
return t.renderer=function(n){return arguments.length?(e=n,t):e},t.args=function(e){return arguments.length?(n=e,t):n},t},qr.labelRenderer.funnel=function(){function t(t,a){t.each(function(){function t(t){var e=h[q-1-t],n=ae(k.getClr(e),b)
return e.disabled||!k.getY(e,S)||!n}function i(t){switch(U){case"singleside":return!1
case"doubleside":return t%2==0
case"strokeddoubleside":return t>=d/2}}function o(t,e,n){var r=i(e)
return G&&"overlap"!=l?r?t.leftx-E:t.rightx+E:(n=X(n)?n:I,r?0-n:v+n)}var l,s,u=n[0],c=n[1],h=n[2],d=n[3],f=n[4],p=n[5],g=n[6],y=n[7],v=g.width,m=g.height,x=e.commonRendererProp().params,b=x.chartObj,w=b.systemConf,C=x.commonPlotOptions,k=x.dataset,S=x.yaxiscolumnorder,O=x.labelArray,A=b.chartTypes[0].name,_=b.svg.selectAll("g."+A+"group").attr("transform"),P=A===cl,T=(u=u[c]).plotoptions,M=0,E=0,L=0,z=0
if(s=er(C,T,b,c),Qn(s,b)){var R=Zn(s,b),j=tr(R.hook)
M=Kn(s,b),E=M+$n(s,b)+j.height,L=j.width,z=R.radius}var I=g.datalabelPadding||+s.padding||0,H=s.type,B=!0===w.chart.plot.datalabels.handleOverlapping,N=It(s,b),F=ur(b,x,s,vl,p,c),Y=F.contentType||"text",V="html"===Y,W=V&&F.multiLine,U=ir(s,b),G=!0===s.relativeX
if(U){U=U?H:"hidden"
var q=h.length,Z=Ot(b.svg.selectAll("g."+A+"group")).translate,Q=0,K=kt(b.staticPaneSVG.select(".labelholder"),"text",[1],".","class","temp_label")
nr(K,s,b,x.color),K.attr("transform",_).style("fill",Qa)
var $=a.add
u.data.forEach(function(e,n){var a=y,u=[]
a.forEach(function(e,a){var l=!t(a),s=i(Q),d=0,p=o(e,Q)+(s?-E:E),g=P&&s?e.leftY:Da(e.y,N-f-e.y),y=W?"middle":s?"end":null,m=W?"0.9em":"0.3em",x=e.data=h[q-1-a],b=F(x)
if(K[Y](b).attrs({x:p,y:g,"text-anchor":y,dy:m}),l&&W){hr(K,p)
var w
g-=(w=D(K.node())).height/2,p+=w.width/2*(s?-1:1),hr(K,p),K.attr("y",g)}if(B){if(l){d=Jn((w=D(K.node())).height,M,z,L)
var C=s?-(0+I+E):v+I+E
W&&(C+=w.width/2*(s?-1:1))
var k={id:"lbl"+c+"_"+n+"_"+a,x1:w.x-E,x2:w.x+w.width+E,y1:w.y-r-E-d/2,isLeft:s,y2:w.y+w.height+r+E+d/2,DX:C-p}
O.push(k)}}else w=D(K.node()),d=Jn(w.height,M,z,L)
var S={X:p,Y:g,ANCHOR:y,DY:m,text:b,display:l,ID:"lbl"+c+"_"+n+"_"+a,width:l?w.width:0,height:l?w.height+d:0,hookPosition:s?Yo:Fo}
V&&(S.isLeft=s),u.push(S),Q+=l?1:0}),Q=-1
var d=$(u,c,n)
d.properties={type:ll,dataLabels:s,dataUpdate:a,showlabel:U,rp:x,translation:_,trans:Z,txtHgt:N,connectorPath:function(e,n){Q+=t(n)?0:1
var r=d[0][n].Y+(W?d[0][n].height/2:0),a=P&&i(Q)?e.leftY:e.y
return"M"+function(t,e){return i(e)?t.leftx+I:t.rightx-I}(e,Q)+" "+a+" L"+o(e,Q,0)+" "+a+" L"+o(e,Q)+" "+r},reverseColor:!0,onOverlap:function(){l="overlap"},contentType:Y,isMultiLine:W},O.TOP=-Z[1],O.BOTTOM=m+Z[1],O.actualType=ul})}})}var e,n,r=5
return t.renderer=function(n){return arguments.length?(e=n,t):e},t.args=function(e){return arguments.length?(n=e,t):n},t},qr.labelRenderer.scatter=function(){function t(t,a){t.each(function(){var t,i=n[0],o=n[1],l=n[2]||0,s=n[3],u=[0,0],c=i.plotoptions,h=e.commonRendererProp().params,d=h.chartObj,f=d.systemConf,p=h.commonPlotOptions,g=h.dataset,y=h.stacked,v=h.axisrotated,m=h.yaxiscolumnorder,x=h.xscale,b=h.yscale,w=h.labelArray,C=d.chartTypes[o].value,k=d.chartTypes[o].name==nl,S="canvas"===d.plot.renderer.mode,O=Ge(C),A=C==qr.charttype.bubble,_=C==qr.charttype.bubblepie,P=d.dataObject.isPolarAxisCategory,T=ir(t=er(p,c,d,o),d)
if(!i.disabled&&T){var M=Gn(d),E=0,L=0,z=0,R=0,j=0,I=function(t,e){var n=e.container.selectAll("g.plotareaBorder-property").node(),r={left:0,top:0,right:0,bottom:0}
if(Qn(t,e))for(var a in r)r[a]=n["border-"+a]?n["border-"+a].size/2+1:1
return r}(t,d)
if(Qn(t,d)){var H=Zn(t,d),B=tr(H.hook)
E=Kn(t,d),L=$n(t,d),z=B.height,R=B.width,j=H.radius}var N=A?0:Da(0,+(t.padding||0))+E+z,F=t.textOverlap,Y=!0===f.chart.plot.datalabels.handleOverlapping,V=!!O&&ue(p,d),W=M.left,U=M.top,X=M.right,G=M.bottom,q=W+I.left,Z=U+I.top,Q=X-I.right,K=(I.bottom,ur(d,h,t,vl,null,o,s)),$=K.contentType||"text",J="html"===$&&K.multiLine,tt=r.isCatNull(g,"x"),et=r.isCatNull(g,"y",m),nt=It(t,d),rt=nr(null,t,d,h.color,!1,o),at=kt(d.staticPaneSVG.select(".labelholder"),"text",[1],".","class","temp_label"),it=a.update,ot=a.add
i.data.forEach(function(n,r){var a=e.seriesdataAfterUpdate?e.seriesdataAfterUpdate[r]:i.data[r],c=[]
nr(at,t,d,h.color,!1,o),at.styles({fill:Qa}),a.forEach(function(e,n){var a,i=d.dataObject.getXYvalue(v,y,x,b,m,e,"x",null,s),f=d.dataObject.getXYvalue(v,y,x,b,m,e,"y",null,s),p=A||_?d.dataObject.getXYvalue(v,y,x,b,m,e,"z",d.zscale):null,C=null,O=null,T=null,M=null,I=ae(g.getClr(e),d)&&!e.disabled,H="",B=J?"0.9em":A?"0.3em":"-0.3em",V="middle",ot=A?null:Vo,lt=0,st=0
if(_){var ut=Hs.getKey(e,o,d),ct=d.subrenderer[r][ut],ht=ct.data[o]
a=(ht.startAngle+ht.endAngle)/2
var dt=Ut(p/2+N,a)
B=J?"0.9em":a>Xa/2&&3*Xa/2>a?Zt(a)+"em":"0",V=0>a||a>Xa?"end":"start",K=ur(d,h,t,vl,ct.total,o,s)}at[$](function(){return T=e.isDummy||tt(g.getX(e))||et(g.getY(e,m,s))?null:K(e)}).styles({display:function(){if(P)return null
return W>i||i>X||U>f||f>G?(I=!1,Za):null}}).attrs({transform:null,dy:B,x:function(){return(C=_?i+dt[0]:i)||0},y:function(){var t=(A?0:l)/2
return(O=_?f+dt[1]:f+(t+N)*(k&&!s?1:-1))||0},"text-anchor":V}),H="lbl"+o+"_"+r+"_"+n+"_"+s
var ft
if(J){if(hr(at,C),ft=D(at.node()),_){var pt=di().range([-1,0]).domain(Xa>a?[0,Xa]:[2*Xa,Xa])
O+=pt(a)*ft.height,hr(at,C)}else O-=A?ft.height/2:ft.height
at.attr("y",O),ft=D(at.node())}else"html"===$?ft=D(at.node()):(ft=Ee(T,nt,Ht(t,d),null,null,rt["font-style"],rt["font-weight"]),ft.x=C-("middle"===V?ft.width/2:"end"===V?ft.width:0),ft.y=O-ft.height)
var gt=0
if(!P){gt=Jn(ft.width,E,j,R)
var yt=E+L/2+gt/2,vt=at,mt=ft.x-yt,xt=mt+ft.width+0+2*yt,bt=C+(q>mt?q-mt:xt>Q?-(xt-Q):0);(lt=bt-C)&&(C=bt,vt.attr("x",bt),J&&hr(at,bt))
var wt=O+(ft.y<Z?ft.height+l+N:0);(st=wt-O)&&(!d.dataObject.isStackedPercentChart&&!d.dataObject.isPercentChart||v?I=!1:(O=wt,vt.attr("y",wt))),J&&(lt||st)?ft=D(at.node()):(ft.x+=lt,ft.y+=st)}gt=P?Jn(ft.width,E,j,R):gt
var Ct=ft.width+gt,kt=ft.height,St=ft.x+gt/2
if(Y){var Ot=(A?p:l)/2
if(A){var At=i,_t=f,Pt=Ha(Ia(At-St,2)+Ia(_t-ft.y,2))+E,Tt=Ha(Ia(At-(St+ft.width),2)+Ia(_t-(ft.y+ft.height),2))+E
if(Pt>Ot||Tt>Ot){var Mt
if("ellipsis"===F){var Et=Ra(ft.height/2,Ot),Lt=Ha(Ia(Ot,2)-Ia(Et,2)),zt={left:At-Lt+E,top:_t-Lt+E,right:At+Lt-E,bottom:_t+Lt-E}
"html"===$?(M=fr(at,nt),dr(at,d,u,0,zt,M)):lr(at,d,u,0,zt)
var Dt=at.text()
if(Dt&&".."!==Dt&&(T=at[$](),Mt=!0,Ct=2*Lt-2*E,J)){var Rt=D(at.node())
kt=Rt.height,Ct=Rt.width+gt,O+=(ft.height-Rt.height)/2}}Mt||(I=!1,at.style("display",Za))}}var jt={id:H,x1:St-E,y1:ft.y-E,x2:St+Ct+E,y2:ft.y+ft.height+E+z,pointRadius:Ot+N-z,translateFunction:it,overlap:F,hookHeight:z}
w.push(jt)}var It={X:C,Y:O,DY:B,ANCHOR:V,text:T,display:I,height:kt,width:Ct,hookPosition:ot,adjustVal:lt}
S&&"html"===$&&(It.tspanInfo=M||fr(at,nt)),c.push(It)}),c.dataUpdate=a
ot(c,o,r,s).properties={type:al,dataLabels:t,color:h.color,dataUpdate:a,showlabel:T,multiColoring:V,rp:h,rangeChart:k,yrangePos:s,contentType:$,isMultiLine:J}})}})}var e,n,r=qr.DataProcessor.helpers
return t.renderer=function(n){return arguments.length?(e=n,t):e},t.args=function(e){return arguments.length?(n=e,t):n},t},wa.initialize=function(t){var e=t.plot.renderer.mode,n=wa[e],r=wa.connector,a=sr(t),i=qr.charttype,o={}
o[vl]=[],o[ml]=[],o[xl]=[],o[bl]=[]
var l={rangeChart:[i.arearange],connector:[i.pie,i.sunburst,i.funnel,i.pyramid]}
l[xl]=qr.chartcategory.innerLabels,l[bl]=qr.chartcategory.parentLabels
var s={}
return s.add=function(e,n,r,a,i){var s=o[i=i||vl]
return s=s[n]=s[n]||[],i===vl&&l.rangeChart.indexOf(t.chartTypes[n].value)>-1&&(a=a||0,s=s[a]=s[a]||[]),s[r]=s[r]||[],s[r].push.apply(s[r],e),s[r].dataUpdate=e.dataUpdate,s},s.update=function(t,e,n,r,a,i,o){o=o||vl
var l=t.match(/\d+/g),u=l[0],c=l[1],h=l[2],d=+l[3]||0,f=s.getQueue(u,d,o)[c][h]
f.X+=e,f.Y+=n,f.display=f.display&&!r,void 0!==a&&(f.DY=a),i&&(f.hookPosition=i)},s.getQueue=function(e,n,r){var a=o[r=r||vl]
return a=a[e],r===vl&&l.rangeChart.indexOf(t.chartTypes[e].value)>-1&&a&&(a=a[n||0]),a},s.draw=function(){if(t.isAxisCategory){var i=t.dataObject.groupedByStack,s=t.userdata.seriesdata.stackGroup||i.keys()
s.forEach(function(r,l){if(o[ml].length&&i.has(l)){var s=i.get(l)
n(t,o[ml][s.stackLabelIndex],l,"stacklabel")}else"svg"===e&&kt(a,"g",[],".","class","stacklabel_"+l)}),s.length||"svg"!==e||kt(a,"g",[],"#","id",ml)}t.seriesdata.forEach(function(e,a){var i=o[vl][a],s=t.chartTypes[a].value
l.rangeChart.indexOf(s)>-1?(n(t,i&&i[0],a),n(t,i&&i[1],a)):n(t,i,a),l[xl].indexOf(s)>-1&&(l.connector.indexOf(s)>-1&&r(t,i,a),n(t,o[xl][a],a,xl)),l[bl].indexOf(s)>-1&&n(t,o[bl][a],a,bl)})},s},wa.svg=function(t,e,n,r){var a="stacklabel"===(r=r||"label"),i=r===xl||r===bl,o=t.chartTypes[0].value==qr.charttype.packedbubble,l=t.chartTypes[0].value==qr.charttype.treemap,s=kt(sr(t),"g",e?[1]:[],".","class",r+"_"+n)
if(e){var u=e.properties,c=u.dataUpdate,h=u.dataLabels,d=u.rp,f=u.rotation,p=u.rangeChart,g=u.yrangePos,y=u.reverseColor,v=u.contentType||"text",m=u.isMultiLine,x=t.dataObject.isPolarAxisCategory,b=t.isAxisCategory,w="clip"===h.textOverlap,C=It(h,t),k=b||x?$a:c.length,S="scatter"===u.type,O=Gl.isQuantileColorScale(t),A=$a
if((O||d.threshold||t.dataObject.isHierarchy||!(b||x||t.dataObject.isNonAxisMultiSeriesCategory)||u.multiColoring)&&(A=function(e,r){var a=y?k-1-r:(b||x||t.dataObject.isNonAxisMultiSeriesCategory)&&!u.multiColoring?n:r,o=ie(t,a,e&&e.data?e.data:e,n),s=u.isSunburst&&u.parentInnerLabel&&e.children?u.parentInnerLabel:h
return l&&i&&/(top-outset|bottom-outset)/.test(s.position)&&bi(o).opacity<.1&&(o="white"),rr(t.systemConf,o,s,t,i,n)}),w){kt((Ll.SAFARI?t.svg:t.getPatternSvg()).selectAll("defs"),"g",[1],".","class","textClipPaths")}p&&(s=kt(s,"g",[1],".","class","rangePos_"+g)),a&&s.attr("id",ml),s.attrs({"text-anchor":S?"middle":null,transform:u.translation}),nr(s,h,t,d.color,i,n,a),x&&s.attr("transform","translate("+t.plotarea_approx.x+","+t.plotarea_approx.y+")"),e.forEach(function(e,n){var r=e.dataUpdate||c,d=kt(kt(s,"g",[1],".","class","subseries_"+n),u.GLT&&u.GLT.hasShowAsFunction?"g":"text",r)
if(d[v](function(t,n){return e[n].text}),m&&d.each(function(t,n){hr(d3.select(this),e[n].X)}),d.styles({display:function(t,n){return!1===e[n].display?Za:null},fill:A,"pointer-events":Za,opacity:function(e){if(X(t.dataObject.hierarchical)&&X(t.cache.hierarchical)){if(t.cache.hierarchical.active)return!0===e.active?1:.1}},transition:"opacity ease .2s"}).attrs({x:function(t,n){return e[n].X},y:function(t,n){return e[n].Y},dy:function(t,n){return e[n].DY},"text-anchor":function(t,n){return e[n].ANCHOR},id:function(t,n){return e[n].ID},transform:function(t,n){var r=e[n].xy||[e[n].X,e[n].Y],a=""
return e[n].xy&&(a="translate("+r+")"),X(f)&&(a+="rotate("+f+" "+r+")"),a||$a},"clip-path":w?function(n,r){var a=D(this),i={name:"textClip",id:t.id,x:a.x,y:a.y,width:e[r].width,height:a.height},o={chartObj:t},l=Dl.get(Bl,"rect",i,o)
return"url("+t.defsLocation+"#"+l+")"}:null,level:function(t){return t.level?t.level:void 0}}),t.dataObject.isWaterfallEnabled&&void 0!==h.fontColor&&h.fontColor==$a&&d.style("fill",function(t){var e=Cr(t,u.rp.categoryColorConfig)
return e||void 0}),!(b||l||x||t.dataObject.hasLevelMarker||o||a||i))if("html"===v){var p=Qn(h,t)?Kn(h,t)+$n(h,t):0
d.each(function(n,r){if(!1!==e[r].display){var a=d3.select(this),i=fr(a,C)
if(dr(a,t,u.trans,u.txtHgt,null,i,e[r].isLeft?p:0),"middle"===e[r].ANCHOR){var o=(e[r].width-D(this).width)/2,l=e[r].isLeft?1:-1,s=e[r].X+o*l
a.attr("x",s),hr(a,s)}}})}else lr(d,t,u.trans,u.txtHgt)})}},Ca.svg=function(){function t(t,a,i){t.each(function(){e&&(n=e.properties,r=n.rp.chartObj)
var t=e&&Qn(n.dataLabels,r),o=kt(ri(this),"g",[1],".","class",(i===bl?"parentboundboxseries_":i===xl?"innerboundboxseries_":"boundboxseries_")+a)
n&&n.rangeChart&&(o=kt(o,"g",[1],".","class","rangePos_"+n.yrangePos))
var l=kt(o,"g",t?e:[])
if(t){var s=r.dataObject.isPolarAxisCategory?"translate("+r.plotarea_approx.x+","+r.plotarea_approx.y+")":r.isAxisCategory?null:n.translation
o.attr("transform",s)
var u=Zn(n.dataLabels,r),c=tr(u.hook),h=n.dataUpdate,d=n.rotation||0,f=Kn(n.dataLabels,r),p=r.dataObject.getTransRectValue("radius",null,null,null,null,u.radius),g=qn(u.strokeColor,n,r,h,a),y=qn(u.fillColor,n,r,h,a),v=X(u.strokeWidth)?+u.strokeWidth:1,m=x(u.dashStyle,v),w=b(u.lineCap,u.dashStyle),C=di(),k=r.plotarea,S=n.trans||[0,0],O={left:-S[0]+k.left,right:k.width-S[0]-k.left}
l.attr("class",function(t,e){return"subseries_"+e}).each(function(t){var e=t.dataUpdate||h
kt(d3.select(this),"path",e).attrs({d:function(e,a){var i=t[a],o=i.xy||[i.X,i.Y],l=o[0]-f,s=o[1]-f,h=i.width,d=i.height,g=void 0!==i.actualDY?i.actualDY:parseFloat(i.DY)||0,y=i.ANCHOR,m=i.hookPosition
return l="middle"===y?l-h/2:"end"===y?l-h:l,s-=C.domain([-.3,.9]).range([d,0])(g),r.isAxisCategory||r.dataObject.isPolarAxisCategory||"hierarchy"===n.type||(l<O.left&&(h-=O.left-l+v/2+f,l=O.left+v/2),l+h+v/2+f>O.right&&(h-=l+h-O.right+v/2+2*f),l+=(u.strokeWidth||1)*(m===Yo?.5:m===Fo?-.5:0)),En(l,s,h,d,p,f,m,c,i.adjustVal)},transform:function(e,n){var r=t[n],a=r.xy||[r.X,r.Y]
return"rotate("+d+" "+a[0]+" "+a[1]+")"},id:function(e,n){return"boundbox"+t[n].ID},level:function(t){return t.level?t.level:void 0}}).styles({display:function(e,n){return!1===t[n].display?Za:null},fill:y,"fill-opacity":u.fillOpacity,stroke:g,"stroke-opacity":u.strokeOpacity,"stroke-width":u.strokeWidth,"stroke-dasharray":m,"stroke-linecap":w,opacity:function(t){if(X(r.dataObject.hierarchical)&&X(r.cache.hierarchical)){if(r.cache.hierarchical.active)return!0===t.active?1:.1}},transition:"opacity ease .2s"})})}})}var e,n,r
return t.args=function(n){return arguments.length?(e=n,t):e},t},qr.labelRenderer.pieInnerLabels=function(){function t(t,i){t.each(function(){function t(t,e){var n=f.innerRadius()(e),r=f.outerRadius()(e),a=f.startAngle()(e),i=f.endAngle()(e),l=t.x*t.x+t.y*t.y,s=o(t)
return l>=n*n&&r*r>=l&&Qt(a,i,s)}function o(t){return Va(t.x,-t.y)}function l(t){return!ae(a.getClr(m?t:t.data||t),r)||(m?null==t.parent||0==t.value:0==t.value)}function s(t){return((m?x.startAngle()(t):t.startAngle)+(m?x.endAngle()(t):t.endAngle))/2}var u=n[0],c=n[2],h=n[4],d=n[8]?"translate("+n[8][0]+","+n[8][1]+")":null,f=n[7],p=n[9],g=e.commonRendererProp().params
a=g.dataset,r=g.chartObj
var y=g.commonPlotOptions,v=n[1]||0,m=Ke(r.chartTypes[v].value),x=n[6],b=g.yaxiscolumnorder
p=m?p:$a,u=u[v]
var w=r.dataObject.pieWithAxis,C=er(y,u.plotoptions,r,v).innerLabel,k=!0===C.show&&Wt(r,vl)
if(p){var S=Fl(C.parentLabel,C)
k=!1!==(X(S.show)?S.show:C.show),C=S}var O=ur(r,g,C,xl,h,v),A=O.contentType||"text",_="html"===A&&O.multiLine,P=C.textOverlap||"adjust",T=Qn(C,r)?Kn(C,r)+$n(C,r):0
if(!u.disabled&&k){var M=kt(r.staticPaneSVG.select(".labelholder"),"text",[1],".","class","temp_label")
nr(M,C,r,g.color),M.attr("transform",d).style("fill",Qa)
var E=i.add;(m?u:u.data).forEach(function(a,i){var u=w?e.seriesdataAfterUpdate?e.seriesdataAfterUpdate[i]:a:c,h=[]
u.forEach(function(e,n){var a,u,c=null,d=!l(e),p=_?"0.9em":"0.35em",y=0,k=0
if(w){var S=g.stacked,E=g.axisrotated,L=g.xscale,z=g.yscale,R=Hs.getKey(e,v,r),j=r.subrenderer[i][R]
e=j.data[v],f=j.arc,y=r.dataObject.getXYvalue(E,S,L,z,b,e.data,"x",null),k=r.dataObject.getXYvalue(E,S,L,z,b,e.data,"y",null)
var I=Ut(r.dataObject.getXYvalue(E,S,L,z,b,e.data,"z",r.zscale)/4,s(e))
O=ur(r,g,C,xl,j.total,v),a=y+I[0],u=k+I[1]}else a=f.centroid(e)[0],u=f.centroid(e)[1]
var H=e.data,B=(m?0==e.depth:l(e))?null:O(H)
if(M[A](B).attrs({x:a,y:u,dy:p,"text-anchor":"middle"}),d&&_&&(hr(M,a),c=D(M.node()),u-=c.height/2),P!=Za){c=c||D(M.node())
var N=f.centroid(e),F=c.width/2+T,Y=c.height/2+T,V={x:N[0]-F,y:N[1]-Y},W={x:N[0]+F,y:N[1]-Y},U={x:N[0]-F,y:N[1]+Y},X={x:N[0]+F,y:N[1]+Y},G=t(V,e)&&t(W,e)&&t(U,e)&&t(X,e)
if(!G){if("adjust"===P){var q=m?x.startAngle()(e):e.startAngle,Z=m?x.endAngle()(e):e.endAngle,Q=s(e),K=c.height+2*T,$=[o(V),o(W),o(U),o(X)],J=[V,W,U,X],tt=Oi($),et=J[$.indexOf(tt[0])],nt=J[$.indexOf(tt[1])],rt=Ha((et.x-nt.x)*(et.x-nt.x)+(et.y-nt.y)*(et.y-nt.y)),at=ja(rt/2/Ya((Z-q)/2))+K,it=[Na(Q)*at,-Ba(Q)*at]
V={x:it[0]-F,y:it[1]-Y},W={x:it[0]+F,y:it[1]-Y},U={x:it[0]-F,y:it[1]+Y},X={x:it[0]+F,y:it[1]+Y}
G=t(V,e)&&t(W,e)&&t(U,e)&&t(X,e)}G?(a=it[0]+y,u=it[1]+k):d=!1}}else c=D(M.node())
var ot={X:a,Y:u,DY:p,ANCHOR:"middle",text:B,display:d,ID:"innerlbl"+v+"_"+i+"_"+n,width:c.width,height:c.height}
h.push(ot)})
E(h,v,i,$a,p?bl:xl).properties={type:ll,dataLabels:C,dataUpdate:u,showlabel:k,rp:g,translation:d,trans:n[8],isSunburst:m,contentType:A,isMultiLine:_}})}})}var e,n,r,a
return t.renderer=function(n){return arguments.length?(e=n,t):e},t.args=function(e){return arguments.length?(n=e,t):n},t},qr.labelRenderer.funnelInnerLabels=function(){function t(t,r){t.each(function(){var t=n[0],a=n[1],i=n[2],o=n[4],l=n[5],s=n[6],u=n[7],c=s.width,h=e.commonRendererProp().params,d=h.chartObj,f=h.commonPlotOptions,p=h.dataset,g=h.yaxiscolumnorder,y=d.chartTypes[0].name,v=d.svg.selectAll("g."+y+"group").attr("transform"),m=y===cl,x=er(f,(t=t[a]).plotoptions,d,a),b=x.innerLabel,w=s.datalabelPadding||+x.padding||0,C=Ot(d.svg.selectAll("g."+y+"group").node()).translate,k=i.length,S=!0===b.show,O=It(b,d),A=ur(d,h,b,xl,l,a),_=A.contentType||"text",P="html"===_&&A.multiLine,T=Qn(x,d)?Kn(x,d)+$n(x,d):0
if(S=S&&Wt(d,vl),O+=2*T,!t.disabled&&S){var M=kt(d.staticPaneSVG.select(".labelholder"),"text",[1],".","class","temp_label")
nr(M,b,d,h.color),M.attr("transform",v).style("fill",Qa)
var E=r.add
t.data.forEach(function(t,e){var n=u,r=[]
n.forEach(function(t,n){var l=!function(t){var e=i[k-1-t],n=ae(p.getClr(e),d)
return e.disabled||!p.getY(e,g)||!n}(n),u=m?t.midX:c/2,h=m?t.leftY:t.y,f=P?"0.9em":"0.5em",y=A(i[k-1-n]),v=null
if(M[_](y).attrs({x:u,y:h,dy:f,"text-anchor":"middle"}),l&&P&&(hr(M,u),v=D(M.node()),h-=v.height/2,O=v.height),l)if(v=v||D(M.node()),m)l=!(O>2*(t.y0-t.leftY))
else{var x=s.canOverlap?(t.rightx-t.leftx-2*w)/c*o:o
l=!(O<t.y-(t.y0-t.y)+x&&O>t.y0+x-(t.y-(t.y0-t.y)+x))}var b={X:u,Y:h,DY:f,ANCHOR:"middle",text:y,display:l,ID:"innerlbl"+a+"_"+e+"_"+n,width:l?v.width:0,height:l?v.height:0}
r.push(b)})
E(r,a,e,$a,xl).properties={type:ll,dataLabels:b,dataUpdate:n,showlabel:S,rp:h,translation:v,trans:C,reverseColor:!0,contentType:_,isMultiLine:P}})}})}var e,n
return t.renderer=function(n){return arguments.length?(e=n,t):e},t.args=function(e){return arguments.length?(n=e,t):n},t}
var zs
!function(){zs=function(e,n,r){if(r.dataObject.hasLevelMarker||!n)return 0
var a,i=[],o=r.systemConf,l=r.dataObject,s=l.getAxisRotated(),u=l.isstacked(),c=l.noofBarEnabledSeries,h=.75*(s?r.plotarea.width:r.plotarea.height),d=o.chart.plot.datalabels.handleOverlapping,f="y"===e,p=new t(r),g=p.createElement()
if(r.seriesdata.forEach(function(t,n){if(!t.disabled){var l=t.plotoptions,g=er(o.chart.plot.plotoptions[r.chartTypes[n].name],l)
if(ir(g,r)){p.setFont(g,n)
var y=f&&c&&!u&&qr.labelRenderer.bar.getVAlign(r,n)===Uo,v=ur(r,null,g,vl,null,n),m=f?Da(0,Ra(W(g.padding,y&&Xe(r.chartTypes[n].value)?2:0),h)):0
y&&Qn(g,r)&&(m=m+2*Kn(g,r)+$n(g,r)),y&&(s||"html"===v.contentType)?function(t,e,n,r,a,i,o){var l,s=t.dataObject,u=t.seriesdata[o],c=qr.DataProcessor.helpers.getParsedYAxisOrder(u.yaxiscolumnorder),h=t.dataset.getDataType("y",c),d=s.getDomain(s.getCategories("x"),!0),f=h==uo?s.getCategories("y",c):null,p=ur(t,null,e,vl,null,o),g=qt(X(e.maxWidth)?e.maxWidth:"30%",t.plotarea.width)
u.data.forEach(function(t){s.updateSeriesdatabyCategories(I(t),d,f,c).forEach(function(t){n.updateText(p,t),l=n.getMeasure(r?"w":"h"),r&&(l=Ra(l,g)),i.push(l+a)})})}(r,g,p,s,m,i,n):(a=p.getMeasure("h"),a+=m+(!d||s||"y"!=e||y?0:a),i.push(a))}}}),f&&c&&u&&!l.isStackedPercentChart){var y=r.dataObject.groupedByStack,v=y.get(y.keys()[0]),m=v&&v.stackLabelIndex,x=o.chart.plot.plotoptions[r.chartTypes[m].name].datalabels.stackLabels||{},b=!!x&&x.show,w=Da(0,Ra(W(x.padding,2),h))
r.datalabels.isStackedLabels=b,b&&(p.setFont(x,m),qr.labelRenderer.bar.getVAlign(r,m,ml)===Uo&&(s||function(t,e){var n=t.dataObject.groupedByStack
return n.keys().some(function(r){return"html"===ur(t,null,e,ml,null,n.get(r).stackLabelIndex).contentType})}(r,x))?function(t,e,n,r,a,i){var o,l=t.dataObject.groupedByStack,s=qt(X(e.maxWidth)?e.maxWidth:"30%",t.plotarea.width)
l.keys().forEach(function(u){var c=l.get(u),h=c.stackLabelIndex,d=c.stackExtent,f=ur(t,null,e,ml,null,h)
d.forEach(function(t){n.updateText(f,t),o=n.getMeasure(r?"w":"h"),r&&(o=Ra(o,s)),i.push(o+a)})})}(r,x,p,s,w,i):(a=p.getMeasure("h")+w,i.push(a)))}return g.remove(),i.length>0?Da.apply(null,i):0}
var t=function(t){this.chartObj=t}
t.prototype.createElement=function(){return this.element=kt(this.chartObj.staticPaneSVG.selectAll("g.labelholder"),"text",[1],".","class","dummyText").text("qtyplkjhgfd").style("fill",Za)},t.prototype.setFont=function(t,e){nr(this.element,t,this.chartObj,Za,!1,e)},t.prototype.getMeasure=function(t){var e=D(this.element.node())
return"w"===t?e.width:e.height},t.prototype.updateText=function(t,e){var n=t.contentType||"text",r="html"===n&&t.multiLine,a=this.element
a[n](t(e)),r&&hr(a,0)}}(),qr.labelRenderer.hierarchy=function(){function t(t,r){t.each(function(){function t(t){var e=a(t),n=e.x
return y=e.y,w=e.width,h=e.height,n=function(t,e){return t+=L===No?e/2:L===Yo?e-R-P:R+P}(n,w)+d[0],y=function(t,e){return t+=z===No?e/2:z===Vo?e-R-P:R+P}(y,h)+d[1],{x:n,y:y,w:w,h:h}}function a(t){switch(A){case pl:return function(t){var e=h=2*t.r
return{x:(t.x||0)-e/2,y:(t.y||0)-h/2,width:e,height:h}}(t)
case gl:var e=Bs.getTileBound(v,t)
return e=function(t){if(f&&("bottom-outset"===i.position||"top-outset"===i.position)){var e=ct(x.padding),n=e["bottom-outset"===i.position?"bottom":"top"]
"bottom-outset"===i.position&&(t.y=t.y+t.height-n),t.height=n}return t}(e)
case dl:return rn(v,t,k,S,C)}}var i,o=n[0],l=n[1],s=(n[2],n[3]),u=n[4],c=n[5],d=n[6]||[0,0],f=n[7],p=o.plotoptions,g=e.commonRendererProp().params,v=g.chartObj,m=v.systemConf,x=g.commonPlotOptions,b=g.dataset,C=g.yaxiscolumnorder,k=(g.labelArray,g.xscale),S=g.yscale,O=ir(i=er(x,p,v,l),v),A=v.chartTypes[0].name
if(f){var _=Fl(x.parent.datalabels,i)
O=Z(_.show),i=_}if(!o.disabled&&O){var P=(Gn(v),0)
if(Qn(i,v)){var T=Zn(i,v),M=tr(T.hook)
P=Kn(i,v),$n(i,v),M.height,M.width,T.radius}var E=i.textOverlap,L=i.hAlign||No,z=i.vAlign||No,R=W(i.padding,.5),j=!0===m.chart.plot.datalabels.handleOverlapping&&E!==Za,I=ur(v,g,i,vl,u,l,s),H=I.contentType||"text",B="html"===H&&I.multiLine,N=I.hasShowAsFunction,F=ue(x,v),Y=It(i,v),V=di().domain([-.3,.9]),U="canvas"===v.plot.renderer.mode,X=function(){var t,e
if(t=z===No?.3:z===Vo?-.3:1,B){var n=1.1*(i.showAs.length-1);-.3===t?(t-=n,e=t+n):.3===t&&(t-=n/2,e=t+n/2)}return[t,e]}(),G=nr(null,i,v,g.color,!1,l)
E=N&&"ellipsis"===E?"hidden":E
var q=kt(v.staticPaneSVG.select(".labelholder"),N?"g":"text",[1],".","class","temp_label"),Q=(r.update,r.add),K=c,$=[]
nr(q,i,v,g.color,!1,l),q.styles({fill:Qa}),K.forEach(function(e){var n=t(e),r=n.x,o=n.y,l=null,s=null,u=!Gl.isQuantileColorScale(v)||ae(b.getClr(e.data||e),v),c=X[0]+"em",h=X[1],f=L===No?"middle":L===Yo?"end":null
q[H](function(){return l=I(e.data||e,n)}).attrs({dy:c,transform:"translate("+[r,o]+")","text-anchor":f,display:u}),e.level
var p
B?(L!==No&&(q.attr("text-anchor",$a),r+=D(q.node()).x*(L===Yo?1:-1),q.attr("transform","translate("+[r,o]+")").attr("text-anchor",f)),hr(q,0),p=D(q.node())):"html"===H?p=D(q.node()):(p=Ee(l,Y,Ht(i,v),null,null,G["font-style"],G["font-weight"]),p=function(t,e,n){var r=t.width,a=t.height,i="middle"===e?r/2:"end"===e?r:0,o=V.range([a,0])(parseFloat(n))
return t.x=-i,t.y=-o,t}(p,f,c)),widthToBeAdded=0
var g=p.width+widthToBeAdded,y=p.height
if(p.x,widthToBeAdded,j){var m={x1:p.x+r-P,y1:p.y+o-P,x2:p.x+r+p.width+P,y2:p.y+o+p.height+P},x=function(t,e){var n=t.height-2*R,r=t.width-2*R,a=t.x+d[0]+R,i=t.y+d[1]+R,o={x1:a,y1:i,x2:a+r,y2:i+n}
if(A===pl){var l=r/2,s=Ra(e.height/2,l),u=l-Ha(Ia(l,2)-Ia(s,2))
o.x1+=u,o.x2-=u,o.y1+=u,o.y2-=u}return o}(a(e),p)
if(!ar(m,x)){var w
if("ellipsis"===E){var C=n.h,k=n.w
if(C>y+2*P){var S={left:x.x1+P,top:x.y1+P,right:x.x2-P,bottom:x.y2-P}
"html"===H?(s=fr(q,Y),dr(q,v,d,0,S,s,$a,[r,o])):lr(q,v,d,0,S,[r,o])
var O=q.text()
if(O&&".."!==O&&(l=q[H](),w=!0,g=k-2*P,B)){var _=D(q.node())
y=_.height,g=_.width+widthToBeAdded,o+=(p.height-_.height)/2}}}w?"html"===H&&(s=fr(q,Y)):u=!1}}var T={X:0,DY:c,xy:[r,o],actualDY:h,ANCHOR:f,text:l,display:u,height:y,width:g,hookPosition:null,adjustVal:0}
U&&"html"===H&&(N?T.customHTML=pr(q):T.tspanInfo=s||fr(q,Y)),$.push(T)}),$.dataUpdate=K
Q($,l,0,s,f?bl:$a).properties={type:"hierarchy",dataLabels:i,color:g.color,dataUpdate:K,showlabel:O,multiColoring:F,rp:g,contentType:H,isMultiLine:B,GLT:I}}})}var e,n
return t.renderer=function(n){return arguments.length?(e=n,t):e},t.args=function(e){return arguments.length?(n=e,t):n},t},wa.connector=function(t,e,n){var r=kt(sr(t),"g",e&&"circular"!==e.properties.showlabel?[1]:[],".","class","link_"+n)
if(e){var a=e.properties,i=a.dataUpdate,o=a.isSunburst,l=a.connectorPath,s=a.dataLabels.line,u=i.length
s&&(r.attr("transform",a.translation).styles({stroke:s.strokeColor,"stroke-width":s.strokeWidth,fill:Za}),e.forEach(function(e,c){kt(kt(r,"g",[1],".","class","subseries_"+c),"path",i).styles({display:function(t,n){return!1===e[n].display?Za:$a},stroke:function(e,r){return o||s.strokeColor?$a:ie(t,a.reverseColor?u-1-r:r,e&&e.data?e.data:e,n)}}).attrs({d:l,id:function(t,e){return"link"+n+"_"+c+"_"+e}})}))}}
var Ds=function(t,e){function n(){d=t.dataObject.getAxisRotated(),f=d?"left":"bottom"
var r=u(t.axes.x.scrollScale=qr.scale.getScale(t,t.dataObject,t.plotarea,f,0,t.dataset,e,null,0),s(t,t.plotarea))
return(p=Math.abs(r-t.plotarea[d?"height":"width"])>=1||S)?((n.component=d?lo():oo()).on("brush",function(){return t.isBrushing=!0,v&&y?(v=!1,null):(v=!!y,void n.scrollNrender())}).on("start",function(){y=!1,t.isBrushing=!0
var e=a(d3.event.selection)
e[0]===e[1]?n.scrollNrender(!0):y=!1}).on("end",function(){y=!1,v=!1,t.isBrushing=!1}),n.context||(n.context=kt(t.svg,"g",[1],".","class","brush")),void(d?(t.plotarea.width-=b.height||w.scrollHeight,n.context.attr("transform","translate("+(t.plotarea.left+t.plotarea.width)+","+t.plotarea.top+")")):(t.plotarea.bottom+=b.height||w.scrollHeight,t.plotarea.height-=b.height||w.scrollHeight,n.context.attr("transform","translate("+t.plotarea.left+","+(t.plotarea.top+t.plotarea.height)+")")))):void t.svg.selectAll("g.brush").remove()}function r(t){return d?[{x:0,y:t[0]},{x:0,y:t[1]}]:[{x:t[0],y:0},{x:t[1],y:0}]}function a(n){if(h==uo)return[n[0],n[1]]
var a=r(n),i=qr.scale.invert(h,a[0],t.axes.x.scrollScale,d,e),o=qr.scale.invert(h,a[1],t.axes.x.scrollScale,d,e)
return[t.axes.x.scrollScale(i),t.axes.x.scrollScale(o)]}function i(t,e,n,r){e=e||{},t.styles({visibility:"visible",cursor:e.cursor||n.cursor,fill:e.fillColor||n.fillColor,"fill-opacity":e.fillOpacity,"stroke-opacity":e.strokeOpacity,"stroke-width":e.strokeWidth,stroke:e.strokeColor}).attrs({rx:e.radius,ry:e.radius,opacity:null}).attrs(r)}function o(){(b.resizer||{}).enabled||n.context.selectAll(".handle").remove()}function l(e,n,r,a){var i,o=t.axes.x.scrollScale,l=d?e.height:e.width,s=(i=(i=t.dataObject.getCategories("x"))&&i.length?i:t.dataObject.findXCategories()).length
a=a>s?s:a
return o?function(t,e,n){return t.bandwidth?t.ordinalRange[e]:t(n)}(o,a-1,i[a-1]):La((l-r)/s*a)}function s(e,n){var r=(d?n.height:n.width,b.visibleCategories),a=e.chartTypes[0].name,i="gantt"==a||"bullet"==a||"bar"==a?e.systemConf.chart.plot.plotoptions[a].padding||.2:.2,o=e.systemConf.chart.plot.plotoptions[a].outerPadding||.02
return r?l(n,0,o,r):function(e,n,r,a){var i=t.axes.x.scrollScale,o=(d?e.height:e.width,function(t,e){return t/(1-e)}(a,n)),s=c(t,e,r,o)
return l(e,0,r=i&&i.bandwidth?Ce(i.range(),s,n,r,o):2*o*r,s=c(t,e,r,o))}(n,i,o,b.categoryThickness||C)}function u(t,e){return t.bandwidth?d?t.range()[0]-e:e+t.bandwidth():d?t.range()[0]-e:e}function c(t,e,n,r){return La(d?(e.height-n)/r:(e.width-n)/r)}var h,d,f,p,g,y,v,m,x,b=t.systemConf.chart.scroll,w={slider:{fillColor:"#B3B6B7",cursor:Ka},tracker:{fillColor:"#ECF0F1",cursor:Ka},resizer:{fillColor:Za},scrollHeight:10},C=15,k=(b.overview||{}).enabled,S=(b.resizer||{}).enabled
return t.isBrushing=null,n.initialize=function(r){if(p){h=t.dataset.getDataType(e),f=d?"left":"bottom",function(t,e,n){t.axes.x.scrollScale=qr.scale.getScale(t,t.dataObject,e,f,0,t.dataset,n,null,0)}(t,r,e),n.categoryPosInScreen=s(t,r),n.extent=[]
var a=d?"y":"x",l=d?[{y:n.categoryPosInScreen||.01,x:0},{y:r.height,x:0}]:[{x:0,y:0},{x:n.categoryPosInScreen||.01,y:0}]
n.setExtent(l),n.initialized=!1,n.context.call(n.component),n.context.call(n.component.move,[l[0][a],l[1][a]]),n.initialized=!0,k&&function(){var e=t.plotarea,n=t.userdata
n.chart.scroll.enabled=!1,n.chart.axes.xaxis.show=!1,n.chart.axes.yaxis[0].show=!1,n.canvas.title.show=!1,n.canvas.subtitle.show=!1,n.chart.plot.renderer?n.chart.plot.renderer.mode="canvas":n.chart.plot?n.chart.plot.renderer={mode:"canvas"}:n.chart.plot={renderer:{mode:"canvas"}},n.chart.marginTop=0,n.chart.marginBottom=0,n.chart.marginLeft=0,n.chart.marginRight=0,n.canvas.intelligence={},n.credits&&(n.credits.show=!1),n.chart.plot.datalabels&&(n.chart.plot.datalabels.show=!1),n.legend.enabled=!1,(g=t.container.selectAll("div.zcoverview")).styles({position:"absolute",width:e.width+"px",height:+b.height+"px","pointer-events":Za,"box-sizing":"border-box"}),qr.charts(g.node(),n)}(),function(){var e,r,a=Ot(n.context).translate
d?(e=t.plotarea.left+t.plotarea.width,r=t.plotarea.top):(e=t.plotarea.left,r=a[1]),n.context.attr("transform","translate("+e+","+r+")"),k&&g.styles({left:e+"px",top:r+"px"})
var l={}
l[d?"width":"height"]=b.height||w.scrollHeight,i(n.context.selectAll("rect.selection"),b.slider,w.slider,l),i(n.context.selectAll("rect.overlay"),b.tracker,w.tracker,l),i(n.context.selectAll("rect.handle"),b.resizer,w.resizer,{}),o()}()}else t.svg.selectAll("g.brush").remove()},n.scrollNrender=function(r){n.updateExtentPosition(r),n.initialized&&(t.updateScale(t.seriesdata[0],e,n.extent),t.drawThreshold(!0),t.drawPlotareaClippath(),t.plot.renderer.draw(!0),t.eventHandler.updateParams(t))},n.updateExtentPosition=function(e){var i=function(e){var r=a(e),i=n.categoryPosInScreen,o=n.scrollBarLength||u(t.axes.x.scrollScale,i)
if(n.scrollBarLength=o,m=!v&&r[0]===r[1],y=y||m){if(!m){var l=o*(d?-1.5:.5)
r[0]+=r[1]-x[1]+l,r[1]=r[0]+o}r[0]-=o/2,r[1]-=o/2,d?(r[0]=r[0]<0?0:r[0],r[1]=r[0]+o,r[1]=r[1]>t.plotarea.height?t.plotarea.height:r[1],r[0]=r[1]-o):(r[0]=r[1]>t.plotarea.width?r[0]-(r[1]-t.plotarea.width):r[0]<0?0:r[0],r[1]=r[0]+o,r[0]=r[0]+o>t.plotarea.width?r[0]-(r[1]-t.plotarea.width):r[0],r[1]=r[0]+o),m&&(x=r)}return r}(d3.event.selection),l=d?"y":"x",s=r(i)
n.setExtent(s),(e||v)&&(n.context.call(n.component.move,[s[0][l],s[1][l]]),o()),e&&(m=!1)},n.setExtent=function(r){var a=d?[b.height,t.plotarea.height]:[t.plotarea.width,b.height]
n.component.extent([[0,0],a])
var i=function(n){var r=qr.scale.invert(h,n[0],t.axes.x.scrollScale,d,e),a=qr.scale.invert(h,n[1],t.axes.x.scrollScale,d,e)
return h==uo?d?t.axes.x.scrollScale.domain().slice(a,r+1,0):t.axes.x.scrollScale.domain().slice(r,a+1,0):[r,a]}(r)
n.extent=i},n}
xr.initialize=function(t){if(t.isAxisCategory&&(t.systemConf.chart.width||t.systemConf.chart.height)){n?t.scrolledY=t.scrolledY||0:t.scrolledX=t.scrolledX||0
var e=kt(t.container.selectAll(".d3container"),DIV_ELEMENT,[1],".","class","zohocharts_scroll")
e.styles({width:100+qa,height:100+qa,overflow:"auto",position:"absolute",margin:0,padding:0,"background-color":"rgba(0,0,0,0)","box-sizing":"content-box","-webkit-tap-highlight-color":Qa,"-webkit-overflow-scrolling":"touch"}),kt(e,DIV_ELEMENT,[1],".","class","child").styles({width:200+qa,height:200+qa})
var n=t.dataObject.getAxisRotated(),r=t.defaultScroll,a=e.node(),i=n?a.offsetWidth-a.clientWidth:a.offsetHeight-a.clientHeight
e.attr("scrollbarSize",i),r||(r=t.defaultScroll={},r.tickmarkSize=+t.systemConf.chart.axes.xaxis.tickmark.size,r.marginRight=+t.systemConf.chart.marginRight),n?(t.plotarea.bottom+=i,t.plotarea.width-=i):t.systemConf.chart.axes.xaxis.tickmark.size=+r.tickmarkSize+i}}
var Rs;(Rs=function(t,e){function n(t){i.attr("transform",function(e,n){return"translate("+(u?t[n]:0)+","+(u?0:t[n])+")"})}function r(t){c.initialized=!1,d3.event.selection=t,a.call(c.move,t),c.initialized=!0,e.onBrush(c),n(t)}this.chartObj=t,this.options=e,this.isResizeInitiated=null
var a,i,o,l,s=(e.scale,e.orient,e.dimension),u="horizontal"===e.legendAlign.layout,c=this.component=(u?oo:lo)(),h=e.initialExtent,d=[0,s[u?0:1]],f=this,p=e.onClick
c.on("brush",function(){if(f.updateTrackerBound(),c.initialized){var t=d3.event.selection
t[0]===t[1]&&d.indexOf(t[0])>-1?(t=f.resizeFilterRange(t[0],d,!0),r(t)):(n(t),e.onBrush(c),l.show()),h=t,o=d3.event.type}}).on("start",function(){this.isResizeInitiated=!1,o=d3.event.type}).on("end",function(){if(c.initialized){d3.event.selection=d3.event.selection||h
var t=d3.event.sourceEvent,n="start"===o
if(n){var i=en(a.node(),d3.event)[u?0:1]
Ll.FIREFOX&&(i-=Rt(a)[u?0:1]),i=Ra(Da(i,d[0]),d[1]),r("reposition"===p?f.repositionFilterRange(i,h):f.resizeFilterRange(i,h)),l.show()}else a.node().contains&&a.node().contains(t.srcElement||t.target)||l.hide()
e.onEnd(c,n),h=d3.event.selection,o=d3.event.type}}),this.context||(this.context=a=kt(e.element||t.svg,"g",e.brushOptions.enabled?[1]:[],".","class","brush",{"pointer-events":"visible"})),c.initialized=!1,c.extent([[0,0],s]),a.call(c),this.drawSlider(),i=this.slider,n(e.initialExtent),l=this.tooltipComponent=new js(this),a.call(c.move,e.initialExtent),c.initialized=!0,this.drawTracker(),a.selectAll(RECT_ELEMENT+".selection").style("opacity",0)}).prototype.repositionFilterRange=function(t,e){var n=this.options.scale,r=ja(e[1]-e[0]),a=n.range().sort(_i),i=[t-r/2,t+r/2]
return i[1]>a[1]&&(i[1]=a[1]-(n.bandwidth?.1*r:0),i[0]=i[1]-r),i[0]<a[0]&&(i[0]=a[0]+(n.bandwidth?.1*r:0),i[1]=i[0]+r),i},Rs.prototype.resizeFilterRange=function(t,e,n){var r,a=ja(e[0]-t),i=ja(e[1]-t)
if(n){r=i>a?[e[0],t+5e-5]:[t-5e-5,e[1]]}else r=i>a?[t,e[1]]:[e[0],t]
return r.sort(_i)},Rs.prototype.drawSlider=function(){var t=this.chartObj,e=this.options,n=this.context,r="horizontal"===He(t.systemConf.legend).layout,a=e.dimension,i=e.brushOptions.slider,o=i.type,l=r?"":" rotate(-90)",s=this.slider=kt(n,"g",r?[{type:"w"},{type:"e"}]:[{type:"n"},{type:"s"}],".","class","handle--custom")
s.attr("cursor",r?"ew-resize":"ns-resize").selectAll("*").remove()
var u={container:s,config:i[o],type:o,chartObj:t,isHorizontal:r,bound:a,globalShadow:i.shadow},c=new _s(u)
c.draw()
var h=c.getPosition()
s.selectAll(go).attr("transform","translate("+h[0]+","+h[1]+")"+l)},Rs.prototype.drawTracker=function(){var t=this.options,e=this.context,n=t.brushOptions.track
e.selectAll(RECT_ELEMENT+".overlay").styles({fill:n.fillColor,"fill-opacity":n.fillOpacity})},Rs.prototype.updateTrackerBound=function(){var t,e=this.chartObj,n=this.options,r=this.context,a=n.scale,i=(n.orient,n.dimension),o=r.selectAll(RECT_ELEMENT+".overlay"),l=[0,0],s=i,u=d3.event.selection.slice(),c="horizontal"===n.legendAlign.layout
if(a.bandwidth){var h=a.bandwidth()
u[0]-=u[0]%h,u[1]+=h-u[1]%h}else n.singleDomainContinuous&&(u[0]=l[c?0:1],u[1]=s[c?0:1])
t=c?"M"+l[0]+" "+l[1]+"L"+u[0]+" "+l[1]+"L"+u[0]+" "+s[1]+"L"+l[0]+" "+s[1]+"ZM"+u[1]+" "+l[1]+"L"+s[0]+" "+l[1]+"L"+s[0]+" "+s[1]+"L"+u[1]+" "+s[1]+"Z":"M"+l[0]+" "+l[1]+"L"+s[0]+" "+l[1]+"L"+s[0]+" "+u[0]+"L"+l[0]+" "+u[0]+"ZM"+l[0]+" "+u[1]+"L"+s[0]+" "+u[1]+"L"+s[0]+" "+s[1]+"L"+l[0]+" "+s[1]+"Z"
var d="zcbrushhighlighttracker",f=r.selectAll("path."+d).data([1])
f.enter().insert("path",":nth-child(2)").merge(f).attr("class",d),f=r.selectAll("path."+d)
var p=u[0]+1,g=u[1]-1,y=c?"M"+p+" "+l[1]+"L"+g+" "+l[1]+"L"+g+" "+s[1]+"L"+p+" "+s[1]+"Z":"M"+l[0]+" "+p+"L"+l[0]+" "+g+"L"+s[0]+" "+g+"L"+s[0]+" "+p+"Z"
f.attr("d",y).styles({opacity:0,"stroke-width":0})
var v={name:"brush",id:e.id,d:t},m={chartObj:e}
clipID=Dl.get(Bl,"polygon",v,m),o.attr("clip-path","url("+e.defsLocation+"#"+clipID+")")}
var js
!function(){function t(t){var e=t.systemConf.legend.colorBand.ranges,n=e&&e.length,r=t.systemConf.legend.filter.range,a=t.axes.clr.scale.domain()
if(n){if(t.dataset.getDataType("clr")===uo){var i=r||a
return[i[0],i[i.length-1]]}return r?function(t,e){var n,r,a=[t[0],t[1]+1e-12],i=1===e[0].length
return e.forEach(function(t,e){t[0]<=a[0]&&(n=e),t[1===t.length?0:1]<=a[1]&&(r=e)}),N(n)?n=0:i&&n++,N(r)&&(r=e.length-1),[e[n],e[r]]}(r,e):[e[0],e[e.length-1]]}return r||a}(js=function(t){var e={orient:t.options.orient},n={chartObj:t.chartObj,config:Fl(e,t.options.brushOptions.slider.tooltip,!0),container:t.slider},r=this.super=new As(n)
this.container=r.container,this.boundBoxEle=r.boundBoxEle,this.textEle=r.textEle,this.tooltipOptions=r.config,this.brushComponent=t,this.count=0,this.positionTooltip(),this.addHoverEvents()}).prototype.show=function(){var t=this
t.super.show(function(){return t.getTextContent()}),t.brushComponent.chartObj.legend.component.highlightItem($a,!1,!0)},js.prototype.hide=function(t){this.super.hide(t)},js.prototype.positionTooltip=function(){var t,e,n=this.brushComponent,r=this.tooltipOptions,a=n.options.orient,i=D(n.slider.node()),o=r.padding+r.margin
switch(a){case Vo:t=0,e=i.y-o
break
case Yo:t=i.x-o,e=0
break
case Fo:t=i.x+i.width+o,e=0
break
case Wo:t=0,e=i.y+i.height+o}this.container.attr("transform","translate("+t+","+e+")")},js.prototype.addHoverEvents=function(){var t=!0,e=this,n={mousemove:function(){"overlay"!==ri(d3.event.srcElement||d3.event.target).attr("class")?(e.show(),t=!0):t&&(e.hide(),t=!1)},mouseleave:function(){e.hide(),t=!1}}
fn(e.brushComponent.context,n)},js.prototype.getTextContent=function(){var e,r,a=this.brushComponent,i=a.chartObj,o=t(i),l=function(t){var e=t.options.orient
return e===Wo||e===Vo}(a),s=ts.isReversedColorAxis(i),u=i.dataset.getColumn("clr"),c=u.datatype,h=u[c]
if(i.dataset.getDataType("clr")===ho){var d=i.systemConf.legend.colorBand
if(!(d.ranges&&d.ranges.length)){var f=i.axes.clr.scale.domain()
r=[f[0],f[f.length-1]]
var p=ja(r[1]-r[0])
if(p){var g=Math.floor(Math.log(p)/Math.LN10)-2
e=Math.abs(Math.min(g,0))}}}var y=l?this.count:+!this.count
s&&(y=!y)
var v=o[y?o.length-1:0]
return this.count=!this.count,X(e)&&-1===r.indexOf(v)&&(v=n(v)?v.map(function(t){return+t.toFixed(e)}):+v.toFixed(e)),yn(h,v,c,i,"legend",Ta,"-")}}(),xa.bar=function(){function t(c){return c.each(function(c){var h=ri(this)
t.update=function(){h.transition().call(t)}
var d=e.params,f=d.chartObj,p=d.xscale,g=d.stacked,y=d.datasetIndex,v=d.renderingOrderIndex,m=d.axisrotated,b=d.commonPlotOptions,w=d.color,C=d.labelQueue,k=d.hasNegValue,S=d.yaxiscolumnorder,O=d.dataset,A=f.systemConf,_=(f.plotarea,f.dataObject),P=(d.threshold,d.colorOverlay,A.chart.axes.yaxis[d.yaxiscolumnorder||0].reversed),T=f.systemConf.chart.axes.xaxis.reversed
i=d.yscale
var M=c[y],E={data:M,index:v},L=f.defsLocation,z=M.plotoptions,D=M.data,R=f.chartTypes[y].name,j=qr.utils.getValueOfPlotOptions(z,b),H=Nl.getDimension(f,y),B=f.patternPallete&&f.patternPallete.length,N=f.dataObject.noofBarEnabledSeries,Y="bullet"==R,V="gantt"==R,U="waterfall"==R,G=f.dataset.getDataType("y",S),q=p.domain(),Q=G==uo?i.domain():null,K=(X(_.hierarchical)&&_.getCategories("x"),kt(h,"g",[E],".","class","barseries_"+y))
if(!r||!a)return u=!0,void(t.chartRendered=!0)
var $,J=z&&z.levelMarker?Fl(b.levelMarker,z.levelMarker,!0):b.levelMarker,tt=z&&z.border?Fl(b.border,z.border,!0):b.border,et=ue(b,f),nt=Bt(b,z,f,"bar"),rt=nt.enabled,at=nt.easingType,it=nt.type,ot=rt?100:0
s=u?rt?300:0:nt.duration
var lt=Re(f.rendererConf[y],y),st=lt.barWidth,ut=(lt.levelMarkerWidth,lt.padding,lt.levelMarkerPadding,lt.addRangeBand),ct=f.userdata.seriesdata.stackGroup,ht=ct?je(y,ct):0
t.getParamValue=function(){return f.dataObject.getTransRectValue.apply(f.dataObject,F(arguments))}
var dt,ft,pt
if(J&&(pt=J.color,J.overlayRange="below"),Y||V){var gt=V?"marker":"targetMarker"
dt=z&&z[gt]?Fl(b[gt],z[gt],!0):b[gt],ft=kt(f.staticPaneSVG.selectAll("g.threshold"),"g",!0!==dt.enabled||M.disabled?[]:[y],".","class",V?"markerSeries"+y:"markerSeries")}var yt={tlx:0,tly:0,trx:0,trY:0,brx:0,bry:0,blx:0,bly:0},vt=yt,mt=0,xt=null,bt=null,wt=yt
X(tt)&&Z(tt.show)&&(mt=tt.size,xt=tt.color,bt=tt.style,vt=t.getParamValue("radius",null,null,null,lt,tt.radius))
var Ct=x(bt,null==mt?2:mt),St=t.fillColorFunc=ee(f,y,H),Ot=re(f,y)
t.seriesdataAfterUpdate=[],D.forEach(function(e,c){function v(e,n,r,a,o){switch(e){case"x":return m?i(n.y0):t.getParamValue("x",n,r,a,o)
case"y":return m?t.getParamValue("y",n,r,a,o):i(n.y0)
case"width":return m?1:st
case"height":return m?st:1}}function x(e,n){return R=t.getParamValue("x",e,c,n,lt),H=t.getParamValue("y",e,c,n,lt),F=t.getParamValue("width",e,c,n,lt),G=t.getParamValue("height",e,c,n,lt),{x:R,y:H,width:F,height:G}}t.getGanttLevelMarkerProp=V?jr:null
var C,A,E,D,R,H,F,G,Z=M.disabled,tt=f.dataObject.updateSeriesdatabyCategories(I(e),q,Q,S,!0)
T&&(tt=tt.slice(0).reverse()),t.seriesdataAfterUpdate[c]=tt
var nt
if(null!=l){nt=I(e)
for(var rt=l.count,gt=0;rt>=gt;gt++)nt.splice(gt,0,[null,null])
if(u){var bt=p(O.getX(e[0])),_t={name:"rect",id:f.id,x:bt,y:0,width:f.plotarea.width,height:f.plotarea.height},Tt={chartObj:f},Mt=Dl.get(Bl,"rect",_t,Tt)
K.attr("clip-path","url("+L+"#"+Mt+")")}}var Lt=null!=l?nt:t.seriesdataAfterUpdate[c]
$=it==Oo||u?s:s/(Lt.length*N)
var zt=J&&!0===J.enabled&&(g&&N>0||!Z)&&!f.dataObject.isStackedPercentChart&&(!ct||f.dataObject.groupedByStack.has(ht)),Dt=(g?h:K).selectAll(g?"g.levelMarkerSeries_"+ht:"g.subseries_levelMarker_"+c).data(function(t){return zt?[t]:[]});(g?K:h).selectAll(g?"g.subseries_levelMarker_"+c:"g.levelMarkerSeries_"+ht).remove(),Dt.exit().selectAll("path.levelMarker").transition().duration(ot).attr("d",function(e,n){if(V){var r=Et(ri(this).attr("d")),a=r[0].moves[0],o=r[3].moves[1],l=jr(e,c,n,t,lt)
return At(l.x||a,l.y+(m?0:l.height*(P?-1:1))||o,m?0:l.width,m?l.height:0,vt,P,m)}return At(t.getParamValue("x",e,c,n,lt)||Et(ri(this).attr("d"))[0].moves[0],i(i.domain()[0]),m?0:t.getParamValue("width",e,c,n,lt),m?t.getParamValue("height",e,c,n,lt):0,vt,P,m)}).remove()
var Rt=K.selectAll("g.subseries_"+c).data(function(t){return Z?[]:[t]})
Rt.exit().selectAll("path.zcbar").transition().duration(ot).attr("d",function(e,n){var r=Et(ri(this).attr("d")),a=r[0].moves[0],o=r[3].moves[1]
return At(t.getParamValue("x",e,c,n,lt)||a,(m?t.getParamValue("y",e,c,n,lt):V?t.getParamValue("y",e,c,n,lt,null,0):(g?i(e.y0):null!=k?i(k):null!=i(0)?Ra(i(0),i.range()[0]):i.range()[0])+2*ut())||o,m?0:t.getParamValue("width",e,c,n,lt),m?t.getParamValue("height",e,c,n,lt):0,vt,P,m)}).remove()
var jt=Rt.enter().append("g").merge(Rt).attr("class","subseries_"+c)
if(U){Ar(kt(g?h:K,"g",g||!Z?[1]:[],".","class","connectorLines",null),Lt,{chart:f,yaxiscolumnorder:S,axisrotated:m,stacked:g,xscale:p,yscale:i,renderer:t,seriesindex:c,plotoptions:z,commonPlotOptions:b})
Tr(kt(g?h:K,"g",g||!Z?[1]:[],".","class","comparisonLines",null),Lt,{chart:f,yaxiscolumnorder:S,axisrotated:m,stacked:g,xscale:p,yscale:i,renderer:t,seriesindex:c,plotoptions:z,commonPlotOptions:b})}var It=V?Dt.enter().append("g").merge(Dt):Dt.enter().insert("g",":first-child").merge(Dt)
It.attr("class",g?"levelMarkerSeries_"+ht:"subseries_levelMarker_"+c),zt&&g&&q.length!=Lt.length&&function(t,e,n,r){var a=t.map(function(t){return n.getX(t)})
e.forEach(function(e,i){var o=e
if(0>a.indexOf(o)){var l=[]
l.splice(n.xidx,0,o),l.splice(n.yidx(r),0,0),l.isDummy=!0,l.y=0,l.y0=0,l.index=i,t.splice(i,0,l)}})}(Lt,q,O,S)
var Ht=It.selectAll("path.levelMarker").data(Lt,function(t){return V?t:O.getX(t)})
Ht.enter().append("path").merge(Ht).attr("class","levelMarker").styles({fill:function(e,r){if(V)return J.color||(et?f.seriesColor[r%f.seriesColor.length]:w)
if(!Fs||!Lr)throw"Level marker or bullet module was not loaded"
var a=et?f.seriesColor[r%f.seriesColor.length]:w,i=n(J.color)?J.color[0]:J.color
if(B){var o=V?jr(e,c,r,t,lt):Fs(e,J,f,lt,d,c,y),l=o.x,s=o.y,u=o.width,h=o.height
i=St(et?r:y,null,null,i,null,null,{x:l,y:s,width:u,height:h})}return Lr(e,J,f,a,pt)||i||a},"fill-opacity":J?J.fillOpacity:null,opacity:function(t){if(X(_.hierarchical)&&X(f.cache.hierarchical)){if(f.cache.hierarchical.active)return!0===t.active?1:.1}}}).attr("d",function(e,n){var r=V?jr(e,c,n,t,lt):Fs(e,J,f,lt,d,c,y),a=r.x,i=r.y,o=r.width,l=r.height
return V?At(a,i,o,l,wt,P,m):m?At(i,a,o,l,vt,P,m):At(a,i,o,l,vt,P,m)}).attr("level",function(t){return X(_.hierarchical)?t.level:void 0}),J&&(J.color=pt),Ht.exit().remove(),Y?(Ir(ft,Lt,t,c,dt,et,""),function(t,e,n){var r=t.label||{},a=this,i=this.dataset,o=this.plotarea,l=this.systemConf,s=e.commonOption,u=e.commonRendererProp().params,c=u.axisrotated,h=u.yscale,d=u.xscale.bandwidth(),f=l.chart.axes.yaxis[0].orient||(this.axes.rotated?Vo:Fo),p=t.dataindex,g=!0===t.enabled&&!0===r.enabled&&X(p),y=kt(this.staticPaneSVG.selectAll("g.threshold"),"g",g?[1]:[],".","class","targetLabel")
if(y.attr("transform","translate("+o.left+","+o.top+")"),g){var v=r.hAlign,m=r.vAlign,x=W(r.padding,2),b="fixed"===r.position,w=10*W(t.size,(s.levelMarkerWidth-2*W(t.padding,s.padding/2))/10),C=("line"===t.symbol?W(t.outerStrokeWidth,1):w)/2
c?(v=v||No,m=m||(f===Vo?Wo:Vo)):(v=v||(f===Fo?Yo:Fo),m=m||No)
var k=this.userdata.metadata.columns,S=k.filter(function(e){return e.dataindex===t.dataindex}),O=S.length?S[0]:k[i.getColumnIdx("y",0)],A=O.datatype,_=O[A],P={left:0,right:0,top:0,bottom:0}
c?P.top=P.bottom=o.adjust:P.left=P.right=o.adjust,b||!0!==l.chart.axes.yaxis[0].show||(P[f]=0)
var T=a.container.node().getBoundingClientRect(),M=T.left+a.plotarea.left,E=T.top+a.plotarea.top,L=Gn(a),z=L.left-P.left,D=L.top-P.top,R=L.right+P.left+P.right,j=L.bottom+P.top+P.bottom
Pt(y,[r,l.chart,l.canvas,El]),kt(y,"text",n,null,null,null,null,function(t){return i.getX(t)}).each(function(t){var e=t[p]
if(X(e)){var n,o,l,u,f=i.getX(t),g=X(r.text)?i.getCustomizedVal(a,r.text,0,null,null,t,"targetLabel"):yn(_,e,A,a,"targetLabel"),y=0>e,k=y?-1:1,S=s.bandwidth1(f)+d/2,O=h(e)
c?(n=O,o=S,m===Vo?(o+=w/2,v===No&&(l="1em",o=S+(b?d:w)/2)):m===No?l="0.3em":m===Wo&&(o-=w/2,v===No?(l="-0.3em",o=S-(b?d:w)/2):l="1em"),v===No?(u="middle",o-=m===No?0:m===Wo?x*k:-x*k):v===Yo?(n+=(x+C)*k,u=y?"end":null):(n-=(x+C)*k,u=y?null:"end")):(n=S,o=O,v===Yo?n+=(b?d:w)/2:v===No?u="middle":v===Fo&&(n-=(b?d:w)/2,u="end"),m===No?(n+=v===No?0:v===Yo?x:-x,l="0.3em"):m===Wo?(o-=(x+C)*k,l="-0.3em"):(o+=(x+C)*k,l="1em")),ri(this).attrs({transform:"translate("+n+","+o+")","text-anchor":u,dy:l}).text(g)
var P=this.getBoundingClientRect(),T=P.left-M,L=T+P.width,I=P.top-E,H=I+P.height,B=n+(z>T?z-T:L>R?-(L-R):0),N=o+(D>I?D-I:H>j?-(H-j):0)
B!=n&&(n=B),N!=o&&(o=N),ri(this).attr("transform","translate("+n+","+o+")")}})}}.call(f,dt,t,Lt)):V&&(Ir(ft,Lt,t,c,dt.start,et,0),Ir(ft,Lt,t,c,dt.end,et,1))
var Bt=jt.selectAll("path.zcbar").attr("class","zcbar").data(Lt,function(t){return V?t:O.getX(t)}),Nt=Bt.enter().append("path").style("fill-opacity",j("fillOpacity")).attrs({class:"zcbar",height:0,d:function(t){var e=function(t){var e=O.getX(t)
return C=g?r(e):r(e)+a(o+c),A=i.bandwidth?i.origRange[0]:m?null!=k?i(k):i.range()[0]:g?null!=k?i(k):i.range()[0]:null!=k?i(k):null!=i(0)?Ra(i(0),i.range()[0]):i.range()[0],A=U?i(t.y0):A,E=m?0:st,D=m?st:0,{x:C,y:A,width:E,height:D}}(t)
return d3.select(this).attr("y",e.y),m?At(e.y,e.x,e.width,e.height,yt,P,m):At(e.x,e.y,e.width,e.height,yt,P,m)}}).merge(Bt)
if(Nt.attrs({stroke:function(t,e){return Ot(et?e:y,t,xt)},"stroke-width":mt,"stroke-dasharray":Ct,level:function(t){return X(_.hierarchical)?t.level:void 0}}).styles({fill:function(e,n){return B?St(et?n:y,e,null,null,null,null,{x:t.getParamValue("x",e,c,n,lt),y:t.getParamValue("y",e,c,n,lt),width:t.getParamValue("width",e,c,n,lt),height:t.getParamValue("height",e,c,n,lt)}):St(et?n:y,e)},opacity:function(t){if(X(_.hierarchical)&&X(f.cache.hierarchical)){if(f.cache.hierarchical.active)return!0===t.active?1:.1}},"fill-opacity":j("fillOpacity"),transition:"opacity ease 0.2s"}),null==l?Nt.transition().duration(u?$:0).delay(function(t,e){return it==Oo||u?0:(e*N+y)*$}).attr("d",function(e,n){var r=ri(this),a=parseFloat(r.attr("height"))
return R=m&&!V?parseFloat(r.attr("y")):t.getParamValue("x",e,c,n,lt),H=m?t.getParamValue("y",e,c,n,lt):V&&!a?t.getParamValue("y",e,c,n,lt,null,0):parseFloat(r.attr("y")),F=m?parseFloat(r.attr("height")):t.getParamValue("width",e,c,n,lt),G=m?t.getParamValue("height",e,c,n,lt):a,At(R,H,F,G,vt,P,m)}).on("end",function(t,e){ri(this).transition().delay(function(){return it==Oo||u?0:(e*N+y)*$}).duration($).ease(at).attr("d",function(t){var n=x(t,e)
return At(n.x,n.y,n.width,n.height,vt,P,m)})}).attrs({y:function(e,n){return t.getParamValue(m?"x":"y",e,c,n,lt)},height:function(e,n){return t.getParamValue(m?"width":"height",e,c,n,lt)}}):Nt.transition().duration(u?$:0).attrs({d:function(t,e){var n=x(t,e)
return At(n.x,n.y,n.width,n.height,vt,P,m)},y:function(e,n){return t.getParamValue(m?"x":"y",e,c,n,lt)},height:function(e,n){return t.getParamValue(m?"width":"height",e,c,n,lt)}}),Bt.exit().transition().duration($).remove(),c>0&&g){var Ft=kt(K,"g",Z?[]:[1],".","class","subdividerseries_"+c).selectAll("rect").data(Lt,function(t){return O.getX(t)}),Yt=Ft.enter().append("rect").merge(Ft).styles({fill:"white",opacity:.7,"shape-rendering":"crispedges"}).attrs({width:v("width"),height:v("height"),x:function(t,e){return v("x",t,c,e,lt)},y:function(t,e){return v("y",t,c,e,lt)}})
Yt.transition().duration($).ease(at).styles({fill:"white",opacity:.7,"shape-rendering":"crispedges"}).attrs({width:v("width"),height:v("height"),x:function(t,e){return v("x",t,c,e,lt)},y:function(t,e){return v("y",t,c,e,lt)}}),Yt.exit().remove()}V&&zr(t,Lt,K,c),t.getMarkerPosition=V?Hr:null}),C.push({renderer:t,charttype:"bar",chartObj:f,args:[M,y]})}),t.renderedTimer=setTimeout(function(){u=!0,t.chartRendered=!0},2*s+10),t}var e,r,a,i,o,l,s,u=!1
return t.commonRendererProp=function(n){return arguments.length?(e=n,t):e},t.bandwidth1=function(e){return arguments.length?(r=e,t):r},t.bandwidth2=function(e){return arguments.length?(a=e,t):a},t.barDatasetIndex=function(e){return arguments.length?(o=e,t):o},t.shiftInfo=function(e){return arguments.length?(l=e,t):l},t},xa.line=function(){function t(j){return j.each(function(C){var j=n.params
S=j.chartObj,r=j.xscale,a=j.yscale,y=j.stacked,i=j.datasetIndex,renderingOrder=j.renderingOrderIndex,l=j.axisrotated,m=j.commonPlotOptions,u=j.color,v=j.labelQueue,k=j.hasNegValue,s=j.yaxiscolumnorder,o=j.dataset,w=S.systemConf
var H=S.defsLocation,B=C[i],N={data:B,index:renderingOrder},F=B.plotoptions,Y=B.data,V=S.chartTypes[i],U=V.name,G=(V.value,qr.DataProcessor.helpers),q=qr.utils.getValueOfPlotOptions(F,m),Z=(qr.charttype.line,"arearange"==U),Q=S.dataObject.isPolarAxisCategory,K=Nl.getDimension(S,i),$=S.canvasarea,J=q("mode"),tt=q("dashStyle"),et=W(q("strokeWidth"),2),nt=q("strokeOpacity"),rt=re(S,i,K),at=Gl.isQuantileColorScale(S),it=F&&F.marker?Fl(m.marker,F.marker,!0):m.marker,ot=Bt(m,F,S,U),lt=ot.enabled,st=ot.easingType
P=ot.duration,E=(E=ot.type)==_o?Ao:E
var ut=F&&F.animation&&F.animation.blink?Fl(m.animation.blink,F.animation.blink,!0):m.animation.blink,ct=at||!(!Wt(S,"marker")||!Vt(S,"marker",Ra($.width,$.height)))&&it.enabled,ht=b(q("lineCap"),tt),dt=Ll.IE||Ll.SAFARI||"stepBefore"==J||"stepAfter"==J||"step-before"==J||"step-after"==J||j.thresholdType||at||Ll.FIREFOX&&ut.enabled
d=x(tt,et)
var ft=F&&F.animation&&F.animation.marquee?Fl(m.animation.marquee,F.animation.marquee,!0):m.animation.marquee
f=ft.enabled,p=ft.duration
var pt=S.dataset.getDataType("x"),gt=S.dataset.getDataType("y",s),yt=pt==uo?r.domain():null,vt=gt==uo?a.domain():null,mt=pt!=uo||X(S.dataObject.hierarchical)?S.dataObject.getCategories("x"):yt,xt=w.chart.axes.yaxis[s].reversed
pt!=uo&&0==mt.length&&lt&&E==Eo&&(mt=S.dataObject.findXCategories()),t.seriesdataAfterUpdate=[],Y.forEach(function(e,n){var r
r=pt==uo||gt==uo?S.dataObject.updateSeriesdatabyCategories(I(e),yt,vt,s):e,t.seriesdataAfterUpdate[n]=r,z[n]=function(t,e,n,r){var a,i=t.chartObj,o=t.xscale,l=t.yscale,s=t.stacked,u=t.datasetIndex,c=t.axisrotated,h=t.commonPlotOptions,d=t.yaxiscolumnorder,f=t.dataset,p=i.systemConf,g=i.dataObject,y=p.chart.axes.yaxis[d].reversed,v=i.seriesdata[u].plotoptions,m=qr.utils.getValueOfPlotOptions(v,h),x=x=Ll.FIREFOX&&1==e.length?"linearClosed":m("mode")
if(g.isPolarAxisCategory)a=Mi().defined(function(t){return!t.isDummy}).radius(function(t){var e=s?l(t.y+t.y0):l(f.getY(t,d))+(null!=l.bandwidth?l.bandwidth()/2:0)
return Da(e,l.range()[y&&!s?l.domain().length-1:0]+.1)}).angle(function(t){return o(f.getX(t))}).curve(ci(x,c))
else{var b=i.chartTypes[u],w=qr.DataProcessor.helpers,C=w.isCatNull(f,"x"),k=w.isCatNull(f,"y",d)
a=Ti().defined(function(t){var e=!k(f.getY(t,d))&&!C(f.getX(t))
return b.value===qr.charttype.stkdarea||!t.isDummy&&e}).x(function(t){var a=g.getXYvalue(c,s,o,l,d,t,"x",null,r)
return null!=n&&(a+=Math.abs(g.getXYvalue(c,s,i.renderer[u].oldXscale,l,d,e[0],"x",null,r)-g.getXYvalue(c,s,o,l,d,e[0],"x",null,r))),a}).y(function(t){return i.dataObject.getXYvalue(c,s,o,l,d,t,"y",null,r)}).curve(ci(x,c,h.tension))}return a}(j,r,A,_)})
var bt=ri(this)
t.update=function(){bt.transition().call(t)},(c=kt(bt,"g",[N],".","class","lineseries_"+i)).node().index=i,Z&&(c=kt(c,"g",[N],".","class","rangePos_"+_))
var wt,Ct=Q?{inner:.32,outer:.56}:{inner:.4,outer:.7}
if(ct&&!dt&&(it.color=B.color||S.seriesColor[i%S.seriesColor.length],wt=L(it,"marker")+L(ut,"blink"),g=T(c,wt,it,{color:it.color,symbolSize:Ct,strokeWidth:et},S),delete it.color),ct&&!dt&&M(g.selectAll(".outer,.inner"),ut,S),ct&&dt?(D.commonRendererProp(n).shiftInfo(A).yrangePos(_),D.chartRendered=!1,bt.call(D)):bt.selectAll("g.scatterseries_"+i).remove(),Y.forEach(function(n,f){var p=B.disabled
if(S.brush&&S.brush.extent){var g=S.axes.x.scale.domain(),v=(S.axes.x.ticks.tickValueObj.ticks,pt==co?g[0].getTime():pt==uo?mt.indexOf(g[0]):g[0]),m=pt==co?g[1].getTime():pt==uo?mt.indexOf(g[g.length-1]):g[1],x=pt==uo?function(t){return mt.indexOf(S.dataset.getX(t))}:function(t){return S.dataset.getX(t)}
t.seriesdataAfterUpdate[f]=G.filterDataToViewPort(t.seriesdataAfterUpdate[f],v,m,x)}var b=t.seriesdataAfterUpdate[f]
S.systemConf.chart.axes.xaxis.reversed&&(b=b.slice(0).reverse())
var w,C=b,T=kt(c,"g",function(t){return p?[]:[t]},".","class","subseries_"+f)
if(h=T.selectAll("path.line").data(function(t){return p?[]:[t]}),lt&&E!=Mo){if(E==Eo)C=null!=O?O.map(function(){return Object.create(O[0])}):b.map(function(){return Object.create(b[0])})
else{var M=E==To?o.xidx:o.yidx(s),L=E==To?r:a,D=Q&&xt&&!y?L.domain().length-1:0
C=b.map(function(t){var e=Object.create(t)
if(y&&E!=To)e.y0=0,e.y=Q||null==k||null==L(k)?L.domain()[0]:Da(k,L.domain()[0])
else if(Z&&E==Ao){var n=new Array(2),r=S.dataset.getY(t,s,0)
n[0]=r,n[1]=null==e[M]?null:null!=k&&null!=L(k)?Da(k,r):r,e[M]=n}else e[M]=null==e[M]?null:Q||null==k||null==L(k)?L.domain()[D]:Da(k,L.domain()[0])
return e})}w=I(C)}if(null!=A&&R){var N=r(b[0][0])+(null!=r.bandwidth?r.bandwidth()/2:0),F=S.dataObject.getXYvalue(l,y,r,a,s,b[b.length-1],"x",null,_)-S.dataObject.getXYvalue(l,y,r,a,s,b[0],"x",null,_),Y={name:"rect",id:S.id,x:N,y:0,width:F,height:S.plotarea.height},V={chartObj:S},U=Dl.get(Bl,"rect",Y,V)
c.attr("clip-path","url("+H+"#"+U+")")}var X=h.enter().append("path").attr("class","line").datum(C,function(t){return o.getX(t)}).attr("d",z[f]).style("stroke",B.color||u).style("fill",Za).style("stroke-width",et).style("stroke-opacity",null==nt||""===nt?1:nt)
lt&&(E==Lo||E==Eo?Nt(C,w,b,mt,E,st,P,j,function(t){return{d:z[f](t)}},X):E==Mo?function(t,n,r){t.styles({"stroke-dasharray":function(){return this.getTotalLength()+" "+this.getTotalLength()},"stroke-dashoffset":function(){return this.getTotalLength()}}).transition().duration(r).ease(n).style("stroke-dashoffset",0).on("end",function(){e(ri(this))})}(X,st,P):X.transition().duration(P).ease(st).attrTween("d",function(){var t=Bi(z[f](C),z[f](b))
return function(e){return t(e)}}))
var K=X.merge(h).datum(b,function(t){return o.getX(t)}).attrs({id:"line_"+i,"stroke-dasharray":d}).styles({"stroke-linecap":ht,"stroke-width":et,"stroke-opacity":W(nt,1),fill:Za,stroke:rt(i,$a,q("strokeColor")||u,$a,nt,f)}),$=b
if(null!=A){var J=null!=A?Math.abs(S.dataObject.getXYvalue(l,y,t.oldXscale,a,s,b[0],"x",null,_)-S.dataObject.getXYvalue(l,y,r,a,s,b[0],"x",null,_)):null
h.datum($).attr("d",z[f]).transition().duration(P).ease(st).attr("transform",function(){return null==J?null:"translate(-"+J+",0)"}),e(h)}else null==X.node()&&(h.datum($).attr("transform",null).transition().duration(P).ease(st).attr("d",z[f]),e(h))
var tt=ct&&!dt?"url("+H+"#"+wt+")":null
K.attrs({"marker-end":tt,"marker-start":tt,"marker-mid":tt}),X.exit().remove()}),!dt||!ct){var St=ct?(it.size||et)*Ct.outer*10+et/2:0
v.push({renderer:t,charttype:"scatter",chartObj:S,args:[B,i,St,_]})}}),t.renderedTimer=setTimeout(function(){f&&C(c.selectAll("#line_"+i),p,d,t),t.chartRendered=!0,R=!0},R?2*P+20:P+20),t.oldXscale=r,t}function e(t){t.styles({"stroke-dasharray":d,"stroke-dashoffset":null})}var n,r,a,i,o,l,s,u,c,h,d,f,p,g,y,v,m,w,k,S,O,A,_,P,E,z=[],D=xa.scatter(),R=!1
return t.commonRendererProp=function(e){return arguments.length?(n=e,t):n},t.shiftInfo=function(e){return arguments.length?(A=e,t):A},t.yrangePos=function(e){return arguments.length?(_=e,t):_},t},xa.area=function(){function t(k){return k.each(function(k){var S=n.params
d=S.chartObj,r=S.xscale,a=S.yscale,v=S.stacked,y=S.datasetIndex,renderingOrder=S.renderingOrderIndex,m=S.axisrotated,u=S.commonPlotOptions,l=S.color,s=S.labelQueue,h=S.hasNegValue,o=S.yaxiscolumnorder,i=S.dataset,c=d.systemConf
var O=d.defsLocation,A=d.dataObject.isPolarAxisCategory,_=k[y],P={data:_,index:renderingOrder},T=_.plotoptions,M=_.data,E=d.chartTypes[y].name,L=qr.utils.getValueOfPlotOptions(T,u),z=L("fillOpacity"),D=L("strokeWidth"),R=L("strokeColor"),j=Gl.isQuantileColorScale(d)||(X(T)?qr.utils.getValueOfPlotOptions(T.marker,u.marker)("enabled"):u.marker.enabled),H=null!=D&&""!=D&&0!=e(D)||null!=R&&""!=R||j,B=Bt(u,T,d,E),N=B.enabled,F=B.easingType,Y=B.type
f=B.duration,Y=Y==_o?Ao:Y
var V=d.dataset.getDataType("x"),W=d.dataset.getDataType("y",o),U=V==uo?r.domain():null,G=W==uo?a.domain():null,q=V!=uo||X(d.dataObject.hierarchical)?d.dataObject.getCategories("x"):U,Z=c.chart.axes.yaxis[o].reversed
V!=uo&&0==q.length&&N&&Y==Eo&&(q=d.dataObject.findXCategories())
var Q="arearange"==E,K=Q?1:null
t.seriesdataAfterUpdate=[],M.forEach(function(e,n){var i
if(i=V==uo||W==uo?d.dataObject.updateSeriesdatabyCategories(I(e),U,G,o):e,d.brush&&d.brush.extent){var l=d.axes.x.scale.domain(),s=d.axes.x.ticks.tickValueObj.ticks,u=V==co?s[0].getTime():V==uo?q.indexOf(l[0]):l[0],c=V==co?l[1].getTime():V==uo?q.indexOf(l[l.length-1]):l[1],h=V==uo?function(t){return q.indexOf(d.dataset.getX(t))}:function(t){return d.dataset.getX(t)}
i=C.filterDataToViewPort(i,u,c,h)}t.seriesdataAfterUpdate[n]=i,d.systemConf.chart.axes.xaxis.reversed&&(i=i.slice(0).reverse()),g=null!=p?null==g||0==g?d.dataObject.getXYvalue(m,v,r,a,o,i[i.length-1],"x")-d.dataObject.getXYvalue(m,v,r,a,o,i[i.length-2],"x"):g:0,w[n]=function(t,e,n,r,a){var i,o=t.chartObj,l=t.xscale,s=t.yscale,u=t.stacked,c=t.datasetIndex,h=t.axisrotated,d=t.commonPlotOptions,f=t.hasNegValue,p=t.yaxiscolumnorder,g=t.dataset,y=o.systemConf,v=o.dataObject,m=y.chart.axes.yaxis[p].reversed,x=o.seriesdata[c].plotoptions,b=qr.utils.getValueOfPlotOptions(x,d)("mode")
if(v.isPolarAxisCategory){var w=m&&!u?s.domain().length-1:0,C=function(t){var e
return e=u?0==t.y0?Ra(s.range()[0],s(f),t.y0):s(t.y0):s(s.domain()[w])+(null!=s.bandwidth?s.bandwidth()/2:0),Da(e,s.range()[w])},k=function(t){if(t.isDummy)return C.apply(null,arguments)
var e=u?s(t.y0+t.y):s(g.getY(t,p))+(null!=s.bandwidth?s.bandwidth()/2:0)
return Da(e,s.range()[w])}
i=Li().angle(function(t){return l(g.getX(t))}).outerRadius(k).innerRadius(C).curve(ci(b))}else{var S=o.chartTypes[c].name===nl,O=S?1:null,A=qr.DataProcessor.helpers,_=A.isCatNull(g,"x"),P=A.isCatNull(g,"y",p)
i=Ei().defined(function(t){return u?!_(g.getX(t)):!P(g.getY(t,p))&&!_(g.getX(t))}).curve(ci(b,h,d.tension)),h?i.x0(function(t,e){return u?0==c&&0==a&&0==e?Da(s.range()[0],s(f)):s(t.y0):S?v.getXYvalue(h,u,l,s,p,t,"x",null,0):null!=s.bandwidth?s.origRange[0]+s.bandwidth():Da(s.range()[0],s(f))}).x1(function(t){var a=v.getXYvalue(h,u,l,s,p,t,"x",null,O)
return isNaN(a)&&null!=n&&(a=v.getXYvalue(h,u,l,s,p,r[r.length-1],"x",null,O)+e),a}).y(function(t){return v.getXYvalue(h,u,l,s,p,t,"y",null,O)}):i.x(function(t){var e=o.dataObject.getXYvalue(h,u,l,s,p,t,"x",null,O)
return null!=n&&(e+=Math.abs(o.dataObject.getXYvalue(h,u,o.renderer[c].oldXscale,s,p,r[0],"x",null,O)-o.dataObject.getXYvalue(h,u,l,s,p,r[0],"x",null,O))),e}).y0(function(t,e){return u?0==c&&0==a&&0==e?Ra(s.range()[0],s(f)):s(t.y0):S?v.getXYvalue(h,u,l,s,p,t,"y",null,0):null!=s.bandwidth?s.origRange[0]+s.bandwidth():Ra(s.range()[0],s(f))}).y1(function(t){return v.getXYvalue(h,u,l,s,p,t,"y",null,O)})}return i}(S,g,p,i,n)})
var $=ri(this)
t.update=function(){$.transition().call(t)}
var J
if(A?((J=$.selectAll("g.areaseries_"+y).data([P])).enter().insert("g",":first-child").merge(J).attr("class","areaseries_"+y),J=$.selectAll("g.areaseries_"+y)):J=kt($,"g",[P],".","class","areaseries_"+y),H||j){if(b.commonRendererProp(n).shiftInfo(p),b.chartRendered=!1,Q){b.yrangePos(1)
var tt=xa.line().commonRendererProp(n).shiftInfo(p).yrangePos(0)
tt.chartRendered=!1,$.call(tt)}$.call(b)}else $.selectAll("g.lineseries_"+y+",g.scatterseries_"+y).remove()
M.forEach(function(e,n){var s,u=t.seriesdataAfterUpdate[n],c=u
if(N){if(Y==Eo)c=u.map(function(){return Object.create(u[0])})
else{var g=Y==To?i.xidx:i.yidx(o),b=Y==To?r:a,C=A&&Z&&!v?b.domain().length-1:0
c=u.map(function(t){var e=Object.create(t)
if(v&&Y!=To)e.y0=A&&Y===Mo?Ra(0,b.domain()[0]):0,e.y=A||null==h||null==b(h)?b.domain()[0]:Da(h,b.domain()[0])
else if(Q&&Y==Ao){var n=new Array(2),r=d.dataset.getY(t,o,0)
n[0]=r,n[1]=null==e[g]?null:null!=h&&null!=b(h)?Da(h,r):r,e[g]=n}else e[g]=null==e[g]?null:A||null==h||null==b(h)?b.domain()[C]:Da(h,b.domain()[0])
return e})}s=I(c)}var k=_.disabled,P=kt(J,"g",function(t){return k?[]:[t]},".","class","subseries_"+n).selectAll("path.area").data(function(t){return k?[]:[t]}),T=P.enter().append("path").datum(c,function(t){return i.getX(t)}).attr("class","area").style("opacity",z).style("fill",l).attr("d",w[n])
N&&(Y==Lo||Y==Eo?Nt(c,s,u,q,Y,F,f,S,function(t){return{d:w[n](t)}},T):null!=T.node()&&Y==Mo?T.transition().duration(0).delay(f).attr("d",function(t){return w[n](t)}):T.transition().duration(f).ease(F).attrTween("d",function(){var t=Bi(w[n](c),w[n](u))
return function(e){return t(e)}}))
var M=Nl.getDimension(d,y),E=t.fillColorFunc=ee(d,y,M)
if(null!=p&&x){var L=r(u[0][0])+(null!=r.bandwidth?r.bandwidth()/2:0),D=d.dataObject.getXYvalue(m,v,r,a,o,u[u.length-1],"x")-d.dataObject.getXYvalue(m,v,r,a,o,u[0],"x"),R={name:"rect",id:d.id,x:L,y:0,width:D,height:d.plotarea.height},j={chartObj:d},H=Dl.get(Bl,"rect",R,j)
J.attr("clip-path","url("+O+"#"+H+")")}var B=u,V=T.merge(P).datum(u,function(t){return i.getX(t)}).styles({opacity:z,fill:E(y,null,null,l,$a,$a,$a,$a,n)})
if(null!=p){var W=null!=p?Math.abs(d.dataObject.getXYvalue(m,v,t.oldXscale,a,o,u[0],"x",null,K)-d.dataObject.getXYvalue(m,v,r,a,o,u[0],"x",null,K)):null
P.datum(B).attr("d",w[n]).attr("transform",null).transition().duration(f).ease(F).attr("transform",function(){return null==W?null:"translate(-"+W+",0)"})}else null!=T.node()&&Y==Mo?V.datum(B).style("fill-opacity",0).transition().duration(0).delay(f).attr("d",w[n]).style("fill-opacity",null):V.datum(B).style("fill-opacity",null).transition().delay(Y!=Lo&&Y!=Eo||null==T.node()?0:f).duration(f).ease(F).attr("d",w[n])
P.exit().remove()}),H||j||(Q?(s.push({renderer:t,charttype:"scatter",chartObj:d,args:[_,y,0,1]}),s.push({renderer:t,charttype:"scatter",chartObj:d,args:[_,y,0,0]})):s.push({renderer:t,charttype:"scatter",chartObj:d,args:[_,y,0]}))}),t.renderedTimer=setTimeout(function(){t.chartRendered=!0,x=!0},f),t.oldXscale=r,t}var n,r,a,i,o,l,s,u,c,h,d,f,p,g,y=0,v=!1,m=!1,x=!1,b=xa.line(),w=[],C=qr.DataProcessor.helpers
return t.commonRendererProp=function(e){return arguments.length?(n=e,t):n},t.shiftInfo=function(e){return arguments.length?(p=e,t):p},t},xa.scatter=function(){function t(g){return g.each(function(g){var C=y.params
e=C.chartObj,n=C.xscale,r=C.yscale,l=C.stacked,a=C.datasetIndex,renderingOrder=C.renderingOrderIndex,u=C.axisrotated,h=C.commonPlotOptions,o=C.color,c=C.labelQueue,f=C.hasNegValue,i=C.yaxiscolumnorder,s=C.dataset,d=e.systemConf
var k=e.defsLocation,S=d.chart.axes.xaxis.reversed,O=d.chart.axes.yaxis[i].reversed,A=ri(this)
t.update=function(){A.transition().call(t)}
var _=g[a],T={data:_,index:renderingOrder},E=_.plotoptions,L=e.chartTypes[a].value,z=e.chartTypes[a].name,D=L==qr.charttype.bubble,R=Ge(L),j=e.dataObject.isPolarAxisCategory,H=_.data,B=kt(A,"g",[T],".","class","scatterseries_"+a)
"arearange"===z&&(B=kt(B,"g",[T],".","class","rangePos_"+v))
var F=Bt(h,E,e,z),Y=F.enabled,V=F.easingType,U=F.type
p=F.duration
var G=E&&E.marker?Fl(h.marker,E.marker,!0):h.marker,q=G.symbol,Z=G.size,Q=G.imageUrl
R?(Z=W(Z,1),U=U==vo?bo:U):(N(Z)&&(Z=(E?qr.utils.getValueOfPlotOptions(E,h)("strokeWidth"):h.strokeWidth)||2),Q||(Z*=j?.56:.7),U=U==Ao||U==_o?Oo:U,U=U==To?Po:U,o=_.color||o)
var K=P(q),$=!!R&&ue(h,e),J=10*Z,tt=U==bo?0:G.outerFillOpacity,et=U==bo?0:G.outerStrokeOpacity,nt=U==bo?0:G.innerFillOpacity,rt=U==bo?0:G.innerStrokeOpacity,at={name:G.imageUrl},it=x(G.outerDashStyle,G.outerStrokeWidth),ot=x(G.innerDashStyle,G.innerStrokeWidth),lt=b(G.outerLineCap,G.outerDashStyle),st=b(G.innerLineCap,G.innerDashStyle),ut=Gl.isQuantileColorScale(e)&&!1===G.enabled?"hidden":$a,ct=t.fillColorFunc=ee(e,a,null,!R||null),ht=re(e,a)
t.seriesdataAfterUpdate=[]
var dt=e.dataset.getDataType("x"),ft=e.dataset.getDataType("y",i),pt=w.isCatNull(s,"x"),gt=w.isCatNull(s,"y",i),yt=dt==uo?n.domain():null,vt=ft==uo?r.domain():null,mt=dt!=uo||null==n.domain||X(e.dataObject.hierarchical)?e.dataObject.getCategories("x"):yt
if(H.forEach(function(c,d){function g(t){switch(U){case Oo:var a=null!=f&&null!=r(f)?r(Da(f,r.domain()[0])):r.origRange[0]
return u?a:e.dataObject.getXYvalue(u,l,n,r,i,t,"x",null,v)
case Po:a=(null!=f&&null!=n(f)?n(Da(f,n.domain()[0])):n.origRange[0])+(null!=n.bandwidth?n.bandwidth()/2:0)
return u?e.dataObject.getXYvalue(u,l,n,r,i,t,"x",null,v):a
case bo:case wo:case Co:case Eo:case Lo:case Mo:return e.dataObject.getXYvalue(u,l,n,r,i,t,"x",null,v)
default:var o=(u?r:n).origRange
return o[u&&O||!u&&S?o.length-1:0]}}function y(t){switch(U){case Oo:var a=null!=f&&null!=r(f)?r(Da(f,r.domain()[0])):r.origRange[0]
return u?e.dataObject.getXYvalue(u,l,n,r,i,t,"y",null,v):a
case Po:var o=(null!=f&&null!=n(f)?n(Da(f,n.domain()[0])):n.origRange[0])+(null!=n.bandwidth?n.bandwidth()/2:0)
return u?o:e.dataObject.getXYvalue(u,l,n,r,i,t,"y",null,v)
case bo:case wo:case Co:case Eo:case Lo:case Mo:return e.dataObject.getXYvalue(u,l,n,r,i,t,"y",null,v)
default:var s=(u?n:r).origRange
return s[u&&S||!u&&O?s.length-1:0]}}function x(t){return j&&(!t||t.isDummy)||!j&&L!==qr.charttype.stkdarea&&(pt(s.getX(t))||gt(s.getY(t,i)))?0:D?e.dataObject.getXYvalue(u,l,n,r,i,t,"z",e.zscale,v):J}var b
if(b=dt==uo||ft==uo?e.dataObject.updateSeriesdatabyCategories(I(c),yt,vt,i):c,e.brush&&e.brush.extent){var A=e.axes.x.scale.domain(),P=(e.axes.x.ticks.tickValueObj.ticks,dt==co?A[0].getTime():dt==uo?mt.indexOf(A[0]):A[0]),T=dt==co?A[1].getTime():dt==uo?mt.indexOf(A[A.length-1]):A[1],z=dt==uo?function(t){return mt.indexOf(e.dataset.getX(t))}:function(t){return e.dataset.getX(t)}
b=w.filterDataToViewPort(b,P,T,z)}t.seriesdataAfterUpdate[d]=b
var H,N,F,W=_.disabled
if(U==Lo||U==Eo){if(H=b,S&&(H=H.slice(0).reverse()),N=H,U==Eo)N=H.map(function(){return Object.create(H[0])})
else if(U==Lo){var Z=j&&O&&!l?r.domain().length-1:0
N=H.map(function(t){var e=Object.create(t),n=j||null==f||null==r(f)?r.domain()[Z]:Da(f,r.domain()[0])
return l&&(e.y0=0,e.y=n),e[s.yidx(i)]=n,e})}F=I(N)}var xt=kt(B,"g",function(){return W?[]:[b]},".","class","subseries_"+d).selectAll("g.scatter").data(function(t){return t}).attr("class","scatter"),wt=xt.enter().append("g").attr("class","scatter"),Ct=wt.size(),St=U!=Do?p:p/Ct,Ot=function(t,n){return j&&(!t||t.isDummy)||!j&&L!==qr.charttype.stkdarea&&(!t||t.isDummy||pt(s.getX(t))||gt(s.getY(t,i)))?[]:[{color:$?e.seriesColor[n%e.seriesColor.length]:o,index:$?n:a,data:t}]}
Y&&(U==Lo||U==Eo?Nt(N,F,H,mt,U,V,p,C,function(t){return{transform:function(e,n){return"translate("+g(t[n])+","+y(t[n])+")"}}},wt,"scatter"):wt.attr("transform",function(t){return"translate("+g(t)+","+y(t)+")"+(Q&&U===wo?" scale(0)":"")}).transition().delay(function(t,e){return U==Do?e*St:0}).duration(St).ease(V).attr("transform",function(t){return"translate("+e.dataObject.getXYvalue(u,l,n,r,i,t,"x",null,v)+","+e.dataObject.getXYvalue(u,l,n,r,i,t,"y",null,v)+")"}))
var At=wt.merge(xt)
kt(At,"path",Ot,".","class","outer").styles({"fill-opacity":tt,"stroke-opacity":et,visibility:ut})
kt(At,"path",Q?[]:Ot,".","class","inner").styles({"fill-opacity":nt,"stroke-opacity":rt,visibility:ut}),m&&Q&&At.attr("transform",function(t){return ri(this).attr("transform")+" scale("+ri(this).attr("size")/x(t)+")"}),At.transition().delay(function(t,e){return U!=Lo&&U!=Eo||null==wt.node()?U==Do?e*St:0:p}).duration(St).ease(V).attr("transform",function(t){return"translate("+e.dataObject.getXYvalue(u,l,n,r,i,t,"x",null,v)+","+e.dataObject.getXYvalue(u,l,n,r,i,t,"y",null,v)+")"}).attr("level",function(t){return X(e.dataObject.hierarchical)?t.level:void 0}).styles({transition:"opacity ease .2s",opacity:function(t){if(X(e.dataObject.hierarchical)&&X(e.cache.hierarchical)){if(e.cache.hierarchical.active)return!0===t.active?1:.1}}})
var _t=U===Co?2*p/5:St,Pt=U===Co?function(){return Ua()*(3*p/5)}:0,Tt=At.selectAll("path.outer").attr("d",function(t){var e=ri(this.parentNode).attr("size"),n=x(t.data)
return K(null!=e?Q?n:e:U!=wo&&U!==Co||Q?n:0)}).styles({"stroke-width":G.outerStrokeWidth,fill:function(t){var n=x(t.data)
if(Q)return at.width=at.height=parseFloat(n),at.x=at.y=-parseFloat(n)/2,"url("+k+"#"+Dl.get(jl,"imageFill",at,{chartObj:e})+")"
var r=n/2
return ct(t.index,t.data,null,G.outerFillColor,null,R?[r,r]:null)},stroke:function(t){return ht(t.index,t.data,G.outerStrokeColor)},"stroke-dasharray":it,"stroke-linecap":lt}),Mt=At.selectAll("path.inner").attr("d",function(t){var e=ri(this.parentNode).attr("size"),n=null!=e?e:U!=wo&&U!==Co||Q?x(t.data):0
return K(n/2)}).styles({"stroke-width":G.innerStrokeWidth,fill:function(t){var e=x(t.data)/4
return ct(t.index,t.data,null,G.innerFillColor,null,R?[e,e]:null)},stroke:function(t){return ht(t.index,t.data,G.innerStrokeColor)},"stroke-dasharray":ot,"stroke-linecap":st})
Tt.transition().delay(Pt).duration(_t).ease(V).attr("d",function(t){return K(x(t.data))}).styles({"fill-opacity":G.outerFillOpacity,"stroke-opacity":G.outerStrokeOpacity}),Mt.transition().delay(Pt).duration(_t).ease(V).attr("d",function(t){return K(x(t.data)/2)}).styles({"fill-opacity":G.innerFillOpacity,"stroke-opacity":G.innerStrokeOpacity})
var Et=(E&&E.animation&&E.animation.blink?Fl(h.animation.blink,E.animation.blink,!0):h.animation.blink)||{}
M(At.selectAll(".outer,.inner"),Et,e),At.attr("size",function(t){return x(t)}),xt.exit().remove(),t.getSymbolSize=x,t.getSymbolBBox=function(t){var e=x(t)
return e>0&&("line"==q||"vertical-line"==q)?"line"==q?{width:e,height:bt||1}:"vertical-line"==q?{height:bt||1,width:e}:void 0:null}}),null!=qr.labelRenderer){var xt
if(R||D)xt=J+G.outerStrokeWidth
else{var bt=W(qr.utils.getValueOfPlotOptions(E,h)("strokeWidth"),2)
xt=(G.size||bt)*J*.5+bt/2}c.push({renderer:t,charttype:"scatter",chartObj:e,args:[_,a,xt,v]})}t.renderedTimer=setTimeout(function(){m=!0,t.chartRendered=!0},p)}),t}var e,n,r,a,i,o,l,s,u,c,h,d,f,p,g,y,v,m=!1,w=qr.DataProcessor.helpers
return t.commonRendererProp=function(e){return arguments.length?(y=e,t):y},t.shiftInfo=function(e){return arguments.length?(g=e,t):g},t.yrangePos=function(e){return arguments.length?(v=e,t):v},t},xa.pie=function(){function t(i){return i.each(function(i){function o(e,n){var r=gn(d3.event)
return{renderer:t,seriesPos:0,subseriesPos:0,itemPos:n,color:S[n%S.length],coordinates:[r.pageX,r.pageY],element:this,data:e}}var l=x.params
b=l.chartObj,L=l.commonPlotOptions,S=l.color,R=l.notesArray,z=b.systemConf
var s=l.labelQueue,u=l.yaxiscolumnorder,c=l.dataset,D=l.datasetIndex||0,tt=b.defsLocation,et=b.seriesdata[D],nt=L.maxRadius+" _ "+L.outerPadding+" _ "+L.innerRadius,rt=b.chartTypes[D].name,at=rt===ll,it=!(j=rt===sl)&&!at
Z=it?W(L.dataindex,3):c.yidx(u),q=G||(j?b.plotarea_approx:b.plotarea),P=q.width,_=q.height,w=W(q.radius,Ra(P,_)/2),f=!1
var ot,lt=et.plotoptions,st=L.datalabels,ut=qr.utils.getValueOfPlotOptions(lt,L),ct=W(ut("maxRadius"),250),ht=L.levelMarker,dt=at?+ut("outerPadding"):0,ft=ut("strokeWidth")
m=void 0!==L.baseValue?L.baseValue:0
var pt=b.datalabels.moduleExists&&ir(st,b),gt=pt?+(st.padding||0)+(Qn(st,b)?2*(Kn(st,b)+$n(st,b)):0):0,yt={},vt=0
if(p=b.datalabels.moduleExists&&Qn(st,b),dt+=at?gt:0,I=Ra(ct,w-dt),at&&pt){var mt=P*Q,xt=P-2*I
mt>xt&&(gt=yt.padding=5,vt=Da(mt-xt,0),I-=vt/2)}if(C=$t(L,I),ft=W(ft,1),j&&ht.enabled){var bt,wt
if(X(L.bandWidth)||X(L.maxBandWidth)){var Ct=W(L.maxBandWidth,I),St=Ra(qt(L.bandWidth,I,I-C),Ct)
bt=-(I-C-St)/2,wt=-(I-C-St)/2,ot=0===St?"hidden":null}else bt=Ra(0,qt(ht.innerPadding,w,0)),wt=Ra(0,qt(ht.outerPadding,w,0))
I+=wt,C-=bt}H=Da(C,I-=.5*ft),Y=(lt&&lt.models?Fl(L.models,lt.models,!0):L.models)||{}
var Ot=Bt(L,lt,b,rt),At=Ot.enabled?J?200:Ot.duration:0,_t=J?ui:Ot.easingType,Pt=Ot.type,Tt=0==W(Ve(lt,L,b,"enabled"),!0),Mt=Tt?null:Ve(lt,L,b,"cursor")||Ka
O=ri(this),(A=kt(O,"g",[i],".","class","piegroup")).styles({"stroke-width":ft,"fill-opacity":ut("fillOpacity"),"stroke-opacity":L.strokeOpacity,cursor:Mt,visibility:ot}),K.startAngle(L.startAngle).endAngle(L.endAngle).value(function(t){return t.disabled?0:ja(t[Z]||0)})
var Et=K(i=it?i:et.data[0])
t.data=Et,N=Et.reduce(function(t,e){return t+(e.value?1:0)},0),t.total=k=Et.reduce(function(t,e){return t+e.value},0),t.arc=$
$.outerRadius(H).innerRadius(C),E=zi().innerRadius(H).outerRadius(H+gt)
var Lt=zi().innerRadius(H).outerRadius(H)
B=ft
var zt=a(A),Dt=(zt.height+ft)/I,Rt=(zt.width+ft)/I,jt=I+Ra((P-2*dt-vt-(zt.width+ft))/Rt,(_-2*dt-vt-(zt.height+ft))/Dt)
if(jt=Ra(ct,Da(I,jt)),j){nt+=" _ "+L.bandWidth+" _ "+ht.bandWidth+" _ "+ht.innerPadding+" _ "+ht.outerPadding
var It=b.axes.y.groups[0].scale,Ht=It.domain()
Et.forEach(function(t){var e=t.data[Z]
d=h,(h=0>e)?(t.startAngle=It(null!=m?Math.min(m,Ht[1]):Ht[1]),t.endAngle=It(Math.max(e,Ht[0]))):(t.startAngle=It(null!=m?Math.max(m,Ht[0]):Ht[0]),t.endAngle=It(Math.min(t.value,Ht[1])))})}else jt!=I&&(I=jt,C=$t(L,I),H=Da(C,I),$.outerRadius(H).innerRadius(C),E=zi().innerRadius(H).outerRadius(H+gt),Lt=zi().innerRadius(H).outerRadius(H),a(A))
var Nt=!j&&Y.type?"url("+tt+"#"+function(t){var e={name:"pieModels",id:b.id,d:t},n={chartObj:b}
return Dl.get(Bl,"polygon",e,n)}(function(){var t=-1,e=Y.count,n="zigzag"==Y.type?C/5-50:"sun"==Y.type?-1:-10,r=function(t){for(var e=[],n=[],r=0,a=0;t>a;a++)"gear1"==Y.type?n.push([r++,0],[r++,1],[r++,1]):n.push([r,0],[r++,1],[r,1],[r++,0])
return e.push(n),e}(e),a=di().range([0,2*Xa]).domain([0,"gear1"==Y.type?3*e:2*e]),i=di().range([C,H]).domain([n,1])
return Mi().curve(ci("linearClosed")).radius(function(t){return i(t[1])}).angle(function(e,n){return t="gear"==Y.type?n%2==0?t+1:t:"gear1"!=Y.type&&n%2!=0?t+1:t,a("gear1"==Y.type?t++:t)})(r[0])}())+")":null,Ft=t.fillColorFunc=ee(b,D,[H,H]),Yt=re(b,0)
if(F=2*qt(ut("sliceOutHeight"),I,0),M=A.selectAll(go).data(),(T=kt(A,go,Et)).attrs({"clip-path":Nt,id:function(t,e){return"arc_"+e}}).styles({display:"block",fill:function(t,e){return Ft(e,t.data)},stroke:function(t,e){return Yt(e,t.data,L.strokeColor)}}),on(b,T,Tt),!Tt){var Vt=function(t,e){var n=o(t,e)
b.eventHandler.mouseMove(n)},Wt=function(e,n){b.eventHandler.mouseOut(t,e,n)},Ut=function(e,n){var r=o(e,n)
b.eventHandler.click(t,e,0,n,r)},Xt=function(t,e){var n=qr.annotation?Fr(t.data,null):t.data,r=E.centroid(t),a={coordinate:r=[r[0]+V,r[1]+U],data:n,basedOn:"plot"}
b.eventHandler.doubleclick(t,e,a)}
fn(T,{mousemove:Vt,mouseout:Wt,click:Ut,dblclick:Xt},{singletouchmove:Vt,touchend:Wt,tap:Ut,dbltap:Xt},{target:"plot",touchleave:!0,chartObj:b})}if(/(\D)+onebyone/.test(Pt)&&!J){var Gt=Pt==Ro,Zt=Gt?At:At/N,Qt=0
T.transition().ease(_t).duration(function(t){return Gt?Zt*(t.value/k):Zt}).delay(function(t){var e=Zt*Qt
return Qt+=Gt?t.value/k:1,e}).call(Gt?n:e)}else{var Kt
Kt=J?nt!=g?e:r:Pt==jo?r:Pt==Bo?e:n,T.transition().duration(At).ease(_t).call(Kt).on("end",function(t){var e=t.data.disabled||t.startAngle===t.endAngle
ri(this).style("display",e?Za:"block")})}t.renderedTimer=setTimeout(function(){if(g=nt,y=C,v=H,j)b.renderer[0].endFunctions()
else if(T.style("display",function(t){return t.data.disabled||!t.value?Za:null}),qr.labelRenderer&&!it){var e=[V,U],n=[A.datum(),0,Et,H,k,E,Lt,$,e,yt]
s.push({renderer:t,charttype:ll,chartObj:b,args:n}),s.push({renderer:t,charttype:"pieInnerLabels",chartObj:b,args:n})}qr.annotation&&!it&&(R=qr.annotation.preprocessAnnotations(b.seriesdata,0,function(t,e,n){var r=E.centroid(Et[n])
return[r[0]+V,r[1]+U]},R,b,l)),t.chartRendered=!0,J=!0},At+1e3/60)}),t}function e(t){wr(t,$,[J?y:C,C],[J?v:C,H])}function n(t){t.attrTween("d",function(t){var e=Bi(t.startAngle,t.endAngle)
return function(n){return t.endAngle=e(n),$(t)}})}function r(t){t.attrTween("d",function(t,e){var n,r,a=M[e]||M[M.length-1]
h?(n=J&&a&&d?a.endAngle:t.startAngle,r=J&&a&&d?a.startAngle:t.startAngle):(n=J&&a&&!d?a.endAngle:j?t.startAngle:L.startAngle,r=J&&a&&!d?M[e]?a.startAngle:a.endAngle:j?t.startAngle:L.startAngle)
var i=Bi(n,t.endAngle),o=Bi(r,t.startAngle)
return function(n){return t.endAngle=i(n)||0,t.startAngle=o(n)||0,$(t,e)}})}function a(e){var n=[]
n[Z]=1
var r=O.append(go).attr("d",$(K([n])[0],t.data.length-1)).styles({fill:Za,stroke:Za}),a=D(r.node())
r.remove()
var i=Gt(a,P,_,I,B)
return V=j?q.x:i[0],U=j?q.y:i[1],e.attr("transform",function(){return"translate("+V+","+U+")"}),a}function i(){o=o||b.staticPaneSVG.selectAll("g."+xl+"_0"),l=l||b.staticPaneSVG.selectAll("g.link_0"),s=s||b.staticPaneSVG.selectAll("g.label_0"),c=c||b.staticPaneSVG.selectAll("g.boundboxseries_0"),u=u||b.staticPaneSVG.selectAll("g.innerboundboxseries_0"),f=!0}var o,l,s,u,c,h,d,f,p,g,y,v,m,x,b,w,C,k,S,O,A,_,P,T,M,E,L,z,R,j,I,H,B,N,F,Y,V,U,G,q,Z,Q=.3,K=Ri().sort(null),$=zi(),J=!1
return t.commonRendererProp=function(e){return arguments.length?(x=e,t):x},t.plotarea=function(e){return arguments.length?(G=e,t):G||q},t.innerRadius=function(e){return arguments.length?(C=e,t):C},t.defaultMouseOverFunc=function(e,n,r){if(1!=N){f||i()
var a=function(t){return Ut(F,(t.startAngle+t.endAngle)/2)}(e),h={transform:"translate("+a[0]+","+a[1]+")"}
T.transition().ease(ui).attr("transform","translate(0,0)"),A.selectAll("#arc_"+r).transition().ease(ui).attrs(h),o.selectAll("#innerlbl0_0_"+r).transition().ease(ui).attrs(h),p||l.selectAll("#link0_0_"+r).style("stroke-width",3*t.lineStrokeWidth),"circular"==t.showlabel&&(s.selectAll("#lbl0_0_"+r).transition().ease(ui).attrs(h),c.selectAll("#boundboxlbl0_0_"+r).transition().ease(ui).attrs(h)),s.selectAll("#lbl0_0_"+r).style("text-shadow","0 0 0 rgba(0,0,0,1)"),u.selectAll("#boundboxinnerlbl0_0_"+r).transition().ease(ui).attrs(h)}},t.defaultMouseOutFunc=function(e,n,r){f||i()
var a={transform:"translate(0,0)"}
return s.selectAll(fo).style("text-shadow",null),p||l.selectAll(go).style("stroke-width",t.lineStrokeWidth),!cs&&r?(T.attrs(a),o.selectAll(fo).attrs(a),u.selectAll(go).attrs(a),void("circular"==t.showlabel&&(s.selectAll(fo).attrs(a),c.selectAll(go).attrs(a)))):(T.transition().ease(ui).attrs(a),o.selectAll(fo).transition().ease(ui).attrs(a),"circular"==t.showlabel&&(s.selectAll(fo).transition().ease(ui).attrs(a),c.selectAll(go).transition().ease(ui).attrs(a)),void u.selectAll(go).transition().ease(ui).attrs(a))},t},xa.funnel=function(){function t(a){a.each(function(a){function s(){t.renderedTimer=setTimeout(function(){var e=function(t){var e=[],n=ot.height,r=0,a=0
return t.forEach(function(i,o){var l=t[t.length-1-o],s=m.getY(l,B),u=l.disabled,c=a=(a=(u?0:J||tt?s?1/d:0:ja(s)/b)*(ot.height-(d-1)*ot.gapHeight)/2)||0
a=r+a
var h=s/b
h=h||0
var p=J?H(h):ot.height-a>=f?ot.width/2-y:H(a),g=J?I(h):ot.height-a>=f?ot.width/2+y:I(a)
e.push({rightx:g+G,leftx:p-G,y:ja(ot.height-a),y0:ja(ot.height-a+c)}),a+=c,n=!s||u?ot.height-a:ot.height-a-ot.gapHeight,r=!s||u?a:a+ot.gapHeight}),e}(h)
if(qr.labelRenderer){var n=[c.seriesdata,0,h,d,_+2+Z,b,ot,e]
Y.push({renderer:t,charttype:ul,chartObj:c,args:n}),Y.push({renderer:t,charttype:"funnelInnerLabels",chartObj:c,args:n})}qr.annotation&&(U=qr.annotation.preprocessAnnotations(c.seriesdata,0,function(t,e,n){return[w[w.length-1-n].bottomLeft[0]+(x/2-ot.width/2),w[w.length-1-n].bottomLeft[1]+(_+2+Z)]},U,c,nt)),ut=!0,t.chartRendered=!0},vt?ut?xt:300:0)}function R(t){t._groups[0].reverse(),t.data(h)}function j(e,n){var r=gn(d3.event)
return{renderer:t,seriesPos:0,subseriesPos:0,itemPos:n,color:k[n%k.length],coordinates:[r.pageX,r.pageY],element:this,data:e}}nt=u.params,c=nt.chartObj,F=nt.commonPlotOptions,k=nt.color,U=nt.notesArray,B=nt.yaxiscolumnorder,m=nt.dataset,V=c.systemConf
var Y=nt.labelQueue
et=c.defsLocation,x=c.plotarea.width,C=c.plotarea.height,rt=!1,N=a[0].plotoptions
var lt=qr.utils.getValueOfPlotOptions(N,F)
K=V.legend.imagePallete||We(c),ot.canOverlap=lt("canOverlap"),q=lt("split"),A=lt("threeDimension")
var ht=F.emptyFunnel
G=F.datalabels.padding
var dt=c.datalabels.moduleExists&&ir(F.datalabels,c),ft=re(c,0)
M=Wl(F.minPadding,A?4:1),E=Wl(F.maxPadding,10)
var pt=Bt(F,N,c,ul),gt=pt.type,yt=pt.easingType,vt=pt.enabled,mt=pt.duration,xt=vt?200:0
Z=qt(lt("outerPadding"),C,0)/2,g=lt("stemHeight"),y=lt("stemWidth"),J="width"===lt("weighted"),tt=lt("weighted")===Za,J&&(g=y=0,q=!0),h=a=a[0].data[0],d=h.reduce(function(t,e){return t+(m.getY(e,B)&&!e.disabled?1:0)},0),p=d-1
var bt=function(){var t=C-2*Z,e=.05*t,n=i(t)
return e=(e-h.length)/h.length,e=Da(st,e),e=A?ot.canOverlap?e+E/2:n/2-ct:0}()
ot.height=C-2*bt-.01*C-2*Z
var wt=lt("coneWidth")
if(wt=qt(wt,ot.height,.95*ot.height),ot.width=Ra(x,wt),T=i(ot.height),ot.gapHeight=!vt||q||ut?T:gt==Po?T:0,(J||tt)&&X(F.maxSliceHeight)&&(ot.height-=Da(0,ot.height-T*p-qt(F.maxSliceHeight,ot.height)*d)),dt){var Ct=x*it,St=x-ot.width
Ct>St&&(G=ot.datalabelPadding=5,ot.width-=Da(Ct-St,0))}g=qt(g,ot.height,.2*ot.height),v=y=qt(y,ot.width,g*ot.width/ot.height)/2,f=ot.height-g,_=.05*ot.height,_=Da(st,(_-h.length)/h.length),P=_=A?ot.canOverlap?_+E/2:T/2-ct:0,t.total=b=h.reduce(function(t,e,n){return t+(h[n].disabled?0:ja(m.getY(h[n],B)||0))},0),$=Da.apply(null,h.map(function(t,e){return h[e].disabled?0:ja(m.getY(h[e],B))/b})),H=di().domain(J?[0,$]:[g,ot.height]).range([ot.width/2-y,0]),I=di().domain(J?[0,$]:[g,ot.height]).range([ot.width/2+y,ot.width]),w=e(h),Q=[ot.width,ot.height],at=t.fillColorFunc=ee(c,0,Q)
var Ot=0==W(Ve(N,F,c,"enabled"),!0),At=Ot?null:Ve(N,F,c,"cursor")||Ka,_t=ri(this)
if((L=kt(_t,"g",[a],".","class","funnelgroup")).attr("transform","translate("+(x/2-ot.width/2)+","+(_+2+Z)+")").styles({cursor:At,"stroke-opacity":lt("strokeOpacity"),"stroke-width":lt("strokeWidth")}),z=kt(L,"g",[1],".","class","ellipsegroup"),D=kt(L,"g",[1],".","class","trapezoidgroup"),S=kt(D,go,h),R(S),S.attr("id",function(t,e){return"funnel"+e}).styles({"fill-opacity":F.fillOpacity,fill:function(t,e){return at(e,t)},stroke:function(t,e){return ft(e,t,F.strokeColor)}}),O=kt(z,go,A?h:[]),R(O),O.attr("id",function(t,e){return"ellipse"+e}).styles({"fill-opacity":F.fillOpacity,fill:function(t,e){return at(e,t,.5)},stroke:function(t,e){return ft(e,t,F.strokeColor,.5)}}),on(c,S,Ot),on(c,O,Ot),!Ot){var Pt=function(t,e){var n=j(t,e)
c.eventHandler.mouseMove(n)},Tt=function(e,n){c.eventHandler.mouseOut(t,e,n)},Mt=function(e,n){var r=j(e,n)
c.eventHandler.click(t,e,0,n,r)},Et=function(t,e){var n=qr.annotation?Fr(t,null):t,r=w[a.length-1-e].bottomLeft,i={coordinate:r=[r[0]+(x/2-ot.width/2),r[1]+(_+2+Z)],data:n,basedOn:"plot"}
c.eventHandler.doubleclick(t,a.length-1-e,i)},Lt={target:"plot",touchleave:!0,chartObj:c},zt={mousemove:Pt,mouseout:Tt,click:Mt,dblclick:Et},Dt={singletouchmove:Pt,touchend:Tt,tap:Mt,dbltap:Et}
fn(S,zt,Dt,Lt),fn(O,zt,Dt,Lt)}var Rt=ot.canOverlap?2*y/ot.width*_:_+ct,jt="M0,0L"+(ot.width/2-y)+","+f+"L"+(ot.width/2-y)+","+ot.height+"A"+y+","+Rt+",0,0,0,"+(ot.width/2+y)+","+ot.height+"L"+(ot.width/2+y)+","+f+"L"+ot.width+",0A"+ot.width/2+","+_+",0,0,0,0,0A"+ot.width/2+","+_+",0,0,0,"+ot.width+",0"
if(kt(L,go,!ut&&ht.show&&vt?[1]:[],"#","id","emptyFunnel").attr("d",jt).styles({stroke:ht.color||"grey",fill:Za}),function(t){var e
if(J)e=null
else{var n={name:"FunnelClipPath",id:c.id,d:t},r={chartObj:c}
e=Dl.get(Bl,"polygon",n,r)}L.attr("clip-path",e?"url("+et+"#"+e+")":null)}(jt),ut)S.transition().duration(xt).ease(ui).attr("d",function(t,e){return o(w[h.length-1-e])}),O.transition().duration(xt).ease(ui).attr("d",function(t,e){return l(w[h.length-1-e])}),r(a,xt),s()
else{r(a,0)
var It=0,Ht=0
S.transition().duration(function(t){var e=m.getY(t,B)
return gt==So?t.disabled||!e?0:J||tt?mt/d:ja(e)/b*mt:mt}).delay(function(t){var e=m.getY(t,B)
It+=t.disabled||!e?0:J||tt?mt/d:ja(e)
return(gt==So?J||tt?mt-It:(b-It)/b*mt:0)||0}).ease(yt).attrTween("d",function(t,e){return n(t,h.length-1-e,"funnel",gt)}).on("end",function(){Ht++}),It=0,O.transition().duration(function(t){var e=m.getY(t,B)
return gt==So?t.disabled||!e?0:J||tt?mt/d:ja(e)/b*mt:mt}).delay(function(t){var e=m.getY(t,B)
It+=t.disabled||!e?0:J||tt?mt/d:ja(e)
return(gt==So?J||tt?mt-It:(b-It)/b*mt:0)||0}).ease(yt).attrTween("d",function(t,e){return n(t,h.length-1-e,"ellipse",gt)})
var Nt=setInterval(function(){Ht==h.length&&(gt!=Po&&(ot.gapHeight=T,w=e(h),S.transition().duration(vt?250:0).delay(50).ease(ui).attr("d",function(t,e){return o(w[h.length-1-e])}),O.transition().duration(vt?250:0).delay(50).ease(ui).attr("d",function(t,e){return l(w[h.length-1-e])})),s(),L.selectAll(go+"#emptyFunnel").transition().duration(50).delay(310).style("stroke-opacity",0).remove(),clearInterval(Nt))},10)}})}function e(t){var e=0,n=ot.height,r=0,a=0
return w=[],v=y,t.forEach(function(i,o){var l=t[t.length-1-o],s=m.getY(l,B),u=l.disabled
a=(a=b?(u?0:J||tt?s?1/d:0:ja(s)/b)*(ot.height-(d-1)*ot.gapHeight):0)||0,e+=u?0:s,a=r+a
var c=s/b
c=c||0
var h={}
e!=b||0!=s&&!u?J?(h.bottomLeft=[H(c),ot.height-a],h.topLeft=[H(c),n],h.middleLeft=[H(c),ot.height-a],h.bottomRight=[I(c),ot.height-a],h.topRight=[I(c),n],h.middleRight=[I(c),ot.height-a]):(h.bottomLeft=[ot.height-a>=f?ot.width/2-y:H(a),ot.height-a],h.topLeft=[n>=f?ot.width/2-y:H(r),n],h.middleLeft=[n>=f?ot.width/2-y:h.bottomLeft[0],n>=f&&ot.height-a<=f?f:ot.height-a],h.bottomRight=[ot.height-a>=f?ot.width/2+y:I(a),ot.height-a],h.topRight=[n>=f?ot.width/2+y:I(r),n],h.middleRight=[n>=f?ot.width/2+y:h.bottomRight[0],n>=f&&ot.height-a<=f?f:ot.height-a]):(h.topLeft=h.bottomLeft=h.middleLeft=[H(J?$:ot.height),0],h.topRight=h.bottomRight=h.middleRight=[I(J?$:ot.height),0]),w.push(h),n=!s||u?ot.height-a:ot.height-a-ot.gapHeight,r=!s||u?a:a+ot.gapHeight}),w}function n(t,e,n,r){var a=function(t,e){var n=Yl(w[t==Oo?0:e])
return t===Po?n.topLeft[0]=n.middleLeft[0]=n.bottomLeft[0]=n.topRight[0]=n.middleRight[0]=n.bottomRight[0]=ot.width/2:(n.middleLeft=n.bottomLeft=n.topLeft,n.middleRight=n.bottomRight=n.topRight),n}(r,e),i=w[e],s="funnel"==n?Bi(o(a),o(i)):Bi(l(a),l(i))
return function(t){return s(t)}}function r(t,e){O.each(function(n,r){var i=t[r].disabled||!m.getY(h[r],B),o=i?e:0
o?setTimeout(function(){a(r,i)},o):a(r,i)})}function a(t,e){var n=e?Za:null
z.selectAll("#ellipse"+t).style("display",n),D.selectAll("#funnel"+t).style("display",n)}function i(t){var e=F.padding
if(X(e))return Y(e,t,p,c)
return Ra(E,Da(M,t*lt/p))}function o(t){var e=(t.topRight[0]-t.topLeft[0])/2,n=(t.bottomRight[0]-t.bottomLeft[0])/2,r=ot.canOverlap?2*e/ot.width*_:P,a=ot.canOverlap?2*n/ot.width*_:P
return"M"+t.topLeft[0]+" "+t.topLeft[1]+" A"+e+" "+r+" 0 0 0 "+t.topRight[0]+" "+t.topRight[1]+" L"+t.middleRight[0]+" "+t.middleRight[1]+" L"+t.bottomRight[0]+" "+t.bottomRight[1]+" A"+n+" "+a+" 0 0 1 "+t.bottomLeft[0]+" "+t.bottomLeft[1]+" L"+t.middleLeft[0]+" "+t.middleLeft[1]+"Z"}function l(t){var e=(t.bottomRight[0]-t.bottomLeft[0])/2,n=ot.canOverlap?2*e/ot.width*_+ct:P
return"M"+t.bottomLeft[0]+" "+t.bottomLeft[1]+" A"+e+" "+n+" 0 0 1 "+t.bottomRight[0]+" "+t.bottomRight[1]+" A"+e+" "+(ot.canOverlap?n:n+ct)+" 0 0 1 "+t.bottomLeft[0]+" "+t.bottomLeft[1]}function s(){j=j||c.staticPaneSVG.selectAll("g.link_0"),R=R||c.staticPaneSVG.selectAll("g.label_0"),rt=!0}var u,c,h,d,f,p,g,y,v,m,x,b,w,C,k,S,O,A,_,P,T,M,E,L,z,D,R,j,I,H,B,N,F,V,U,G,q,Z,Q,K,$,J,tt,et,nt,rt,at,it=.3,ot={},lt=.375,st=1,ut=!1,ct=0
return t.commonRendererProp=function(e){return arguments.length?(u=e,t):u},t.defaultMouseOverFunc=function(t,e,n){rt||s(),K?(S.style("opacity",function(t,e){return e===n?null:.4}),O.style("opacity",function(t,e){return e===n?null:.4})):(S.style("fill",function(t,e){return at(e,t,e===n?.6:null)}),O.style("fill",function(t,e){return at(e,t,e===n?1:.5)})),R.selectAll("text").style("text-shadow",null),j.selectAll(go).style("stroke-width",null),R.selectAll("#lbl0_0_"+(h.length-1-n)).style("text-shadow","0 0 0 rgba(0,0,0,1)"),j.selectAll("#link0_0_"+(h.length-1-n)).style("stroke-width",1)},t.defaultMouseOutFunc=function(){rt||s(),K?(S.style("opacity",null),O.style("opacity",null)):(S.style("fill",function(t,e){return at(e,t)}),O.style("fill",function(t,e){return at(e,t,.5)})),R.selectAll("text").style("text-shadow",null),j.selectAll(go).style("stroke-width",null)},t},xa.pyramid=function(){function t(j){j.each(function(j){function I(e,n){var r=gn(d3.event)
return{renderer:t,seriesPos:0,subseriesPos:0,itemPos:n,color:k[n%k.length],coordinates:[r.pageX,r.pageY],element:e,data:j[n]}}var H=a.params
O=H.chartObj,u=H.commonPlotOptions,k=H.color,h=H.notesArray,o=H.yaxiscolumnorder,i=H.dataset,c=O.systemConf
var B=H.labelQueue
f=O.defsLocation,l=O.plotarea.width,s=O.plotarea.height
var N=Ra(l,s)
E=u.datalabels.padding
if(O.datalabels.moduleExists&&ir(u.datalabels,O)){var F=l*z,Y=l-N
F>Y&&(E=D.datalabelPadding=5,N-=Da(F-Y,0))}D.width=N,D.height=4*N/5
var V=j[0].plotoptions,U=qr.utils.getValueOfPlotOptions(V,u)
d=c.legend.imagePallete||We(O)
var X=U("strokeWidth"),G=U("strokeOpacity"),q=U("threeDimension"),Z=U("fillOpacity"),Q=Bt(u,V,O,cl),K=Q.enabled,$=Q.easingType,J=R?K?200:0:Q.duration
r=Q.type
var tt=0==W(Ve(V,u,O,"enabled"),!0),et=tt?null:Ve(V,u,O,"cursor")||"pointer",nt=ri(this);(A=kt(nt,"g",[j],".","class","pyramidgroup")).attr("transform","translate("+(l/2-D.width/2)+","+(s/2-D.height/2)+")").style("cursor",et),M=j=j[0].data[0],T=j.length,S=[],p=D.height,y=D.width,v=q?D.height/6:0
var rt=Ha(Ia(v/Na(25*Xa/180),2)-Ia(v,2))
y-=rt,m=di().range([(y+rt)/2,0]).domain([0,p]),x=di().range([(y+rt)/2,y]).domain([0,p]),b=di().range([(y+rt)/2,y+rt]).domain([0,p]),w=di().range([(y+rt)/2,rt]).domain([0,p]),C=di().range([0,v]).domain([0,p-v/2]),_=[D.width,D.height],L=t.fillColorFunc=ee(O,0,_)
var at=re(O,0),it=0
t.total=g=j.reduce(function(t,e){return t+(e.disabled?0:(it++,ja(i.getY(e,o)||0)))},0)
var ot=0
if(j.forEach(function(t){S.push({height:(ot+(t.disabled?0:ja(i.getY(t,o))))/g*(p-v/2)||0,previousHeight:ot/g*(p-v/2)||0}),ot+=t.disabled?0:ja(i.getY(t,o))}),(P=kt(A,"g",j)).attr("id",function(t,e){return"section_"+(T-1-e)}).styles({stroke:function(t,e){return at(T-1-e,j[T-1-e],u.strokeColor)},"stroke-opacity":G,"stroke-width":X,"fill-opacity":Z,fill:function(t,e){return L(T-1-e,j[T-1-e])}}).each(function(t,e){kt(ri(this),go,[t,t,t,t]).attr("class","section_"+(T-1-e))}),on(O,P,tt),!tt){var lt=function(){var t=this.parentNode,n=I(t,e(ri(t).attr("id").replace(/section_/gi,"")))
O.eventHandler.mouseMove(n)},st=function(){var n=this.parentNode,r=e(ri(n).attr("id").replace(/section_/gi,""))
O.eventHandler.mouseOut(t,j[r],r)},ut=function(){var n=this.parentNode,r=e(ri(n).attr("id").replace(/section_/gi,"")),a=I(n,r)
O.eventHandler.click(t,j[r],0,r,a)},ct=function(t){var n=this.parentNode,r=e(ri(n).attr("id").replace(/section_/gi,"")),a=qr.annotation?Fr(j[r],null):j[r],i=S[r].previousHeight,o={coordinate:[m(i+C(i)/2)+(l/2-D.width/2),C(i)/2+i+(s/2-D.height/2)],data:a,basedOn:"plot"}
O.eventHandler.doubleclick(t,r,o)},ht={target:"plot",touchleave:!0,chartObj:O},dt={mousemove:lt,mouseout:st,click:ut,dblclick:ct},ft={singletouchmove:lt,touchend:st,tap:ut,dbltap:ct}
fn(P.selectAll(go),dt,ft,ht)}var pt=0
P.each(function(t,e){var a=A.selectAll("#section_"+e).selectAll(go)
if(R)a.transition().duration(J).ease(ui).attr("d",function(t,r){return n(e,r)})
else{var l=i.getY(t,o),s=r==So?(t.disabled||!l?0:ja(l))/g*J:J
pt+=t.disabled||!l?0:ja(l)
var u=r==So?(g-pt)/g*J:0
a.transition().duration(s).delay(u).ease($).attrTween("d",function(t,a){return function(t,e,a){var i=Bi(n(r==So?e:T-1,a,"down"),n(e,a))
return function(t){return i(t)}}(0,e,a)})}}),t.renderedTimer=setTimeout(function(){if(qr.labelRenderer){var e=[O.seriesdata,0,j,it,0,g,D,function(t){var e=[]
return t.forEach(function(n,r){var a=t.length-1-r,i=S[a].height,o=S[a].previousHeight,l=(i+o)/2,s={x:b(i+C(i)/2),y:-C(i)/2+i},u={x:b(o+C(o)/2),y:-C(o)/2+o},c={x:m(i+C(i)/2),y:C(i)/2+i},h={x:m(o+C(o)/2),y:C(o)/2+o},d=(s.x+u.x)/2,f=(s.y+u.y)/2,p=(c.x+h.x)/2,g=(c.y+h.y)/2,y=(m(l+C(l)/2)+x(l+C(l)/2))/2
e.push({rightx:d+E,leftx:p-E,y:f,y0:i+C(i)/2,midX:y,leftY:g})}),e}(j)]
B.push({renderer:t,charttype:ul,chartObj:O,args:e}),B.push({renderer:t,charttype:"funnelInnerLabels",chartObj:O,args:e})}qr.annotation&&(h=qr.annotation.preprocessAnnotations(O.seriesdata,0,function(t,e,n){var r=S[n].previousHeight
return[m(r+C(r)/2)+(l/2-D.width/2),C(r)/2+r+(s/2-D.height/2)]},h,O,H)),R=!0,t.chartRendered=!0},J+10)})}function n(t,e,n){var r=S[t].height,a="down"==n?r:S[t].previousHeight
switch(e){case 0:return function(t,e){return"M"+b(t+C(t)/2)+" "+(-C(t)/2+t)+" L"+w(t+C(t)/2)+" "+(-C(t)/2+t)+" L"+w(e+C(e)/2)+" "+(-C(e)/2+e)+" L"+b(e+C(e)/2)+" "+(-C(e)/2+e)+" L"+b(t+C(t)/2)+" "+(-C(t)/2+t)}(r,a)
case 1:return function(t,e){return"M"+w(t+C(t)/2)+" "+(-C(t)/2+t)+" L"+m(t+C(t)/2)+" "+(C(t)/2+t)+" L"+m(e+C(e)/2)+" "+(C(e)/2+e)+" L"+w(e+C(e)/2)+" "+(-C(e)/2+e)+" L"+w(t+C(t)/2)+" "+(-C(t)/2+t)}(r,a)
case 2:return function(t,e){return"M"+m(t+C(t)/2)+" "+(C(t)/2+t)+" L"+x(t+C(t)/2)+" "+(C(t)/2+t)+" L"+x(e+C(e)/2)+" "+(C(e)/2+e)+" L"+m(e+C(e)/2)+" "+(C(e)/2+e)+" L"+m(t+C(t)/2)+" "+(C(t)/2+t)}(r,a)
case 3:return function(t,e){return"M"+x(t+C(t)/2)+" "+(C(t)/2+t)+" L"+b(t+C(t)/2)+" "+(-C(t)/2+t)+" L"+b(e+C(e)/2)+" "+(-C(e)/2+e)+" L"+x(e+C(e)/2)+" "+(C(e)/2+e)+" L"+x(t+C(t)/2)+" "+(C(t)/2+t)}(r,a)}}var r,a,i,o,l,s,u,c,h,d,f,p,g,y,v,m,x,b,w,C,k,S,O,A,_,P,T,M,E,L,z=.3,D={},R=!1
return t.commonRendererProp=function(e){return arguments.length?(a=e,t):a},t.defaultMouseOverFunc=function(t,e,n){d?P.style("opacity",function(t,e){return T-1-e==n?null:.2}):P.style("fill",function(t,e){return L(T-1-e,M[T-1-e],T-1-e==n?.5:null)})},t.defaultMouseOutFunc=function(){d?P.style("opacity",null):P.style("fill",function(t,e){return L(T-1-e,M[T-1-e])})},t},xa.sunburst=function(){function t(n){return n.each(function(T){function j(n){var a=gn(d3.event)
return{renderer:t,seriesPos:e(n),coordinates:[a.pageX,a.pageY],element:this,data:n.data,level:r(n)}}var I=i.params
x=I.chartObj,k=I.commonPlotOptions,v=I.color,b=I.notesArray,p=I.yaxiscolumnorder,c=I.dataset,d=x.systemConf
var H=I.labelQueue
g=x.plotarea.width,y=x.plotarea.height
var B,N=qr.utils.getValueOfPlotOptions,F=k.datalabels,Y=+k.outerPadding||0,V="absolute"===k.showAsNegative
P=null,E=0,z=[]
var U=x.datalabels.moduleExists&&ir(F,x)&&Qn(F,x)?Kn(F,x)+$n(F,x):0,G=0==W(Ve(null,k,x,"enabled"),!0),q=G?null:k.events?k.events.cursor||Ka:d.chart.plot.events.cursor||Ka
M=k.events&&k.events.highlightHierarchy
var Z=Bt(k,null,x,fl),Q=Z.enabled,K=Z.type,$=Z.easingType,J=D?Q?200:0:Z.duration
u=Ra(g,y)/2-Y-2*U
var tt=Ra(Da(0,qt(k.innerRadius,u)),qt("95%",u)),et=t.fillColorFunc=ee(x,0,[u,u]),nt=re(x,0)
S=function(t){return Da(0,Ra(2*Xa,o(t.x0)))},O=function(t){return Da(0,Ra(2*Xa,o(t.x1)))},A=function(t){return l(t.y0)+B/2},_=function(t,e){return e=e||0,function(t){return l(t.y1)+e-B/2}},L=function(t){if(function(t){var n=e(t)
return X(n)&&x.seriesdata[n].disabled}(t))return 0
var n=c.getY(t,p)||0
return 0>n?V?ja(n):0:n},s=zi().startAngle(S).endAngle(O).innerRadius(A).outerRadius(_(l)),h=zi().startAngle(S).endAngle(O).innerRadius(A).outerRadius(_(l)),(C=kt(n,"g",[T],".","class","hierarchychart")).attr("transform","translate("+g/2+","+y/2+")").style("cursor",q),f=[],C.selectAll(go).each(function(t){f.push({x0:t.x0,x1:t.x1})})
var rt=function(t){partition=ji()
var e=d3.hierarchy(t,a).sum(L).sort(_i)
return partition(e),e.descendants()}(T)
t.total=rt[0].value,w=kt(C,go,rt)
var at=[],it=[],ot=[]
if(T.forEach(function(t,e){it[e]=[[]],it[e].disabled=t.disabled,it[e].plotoptions=t.plotoptions,ot[e]=[],ot[e].disabled=t.disabled,ot[e].plotoptions=t.plotoptions
var n=v[e%v.length]
at[e]=di().domain([0,m(t)]).range([n,te(n,1.5,"brighter")])}),w.attr("class",function(t){return null!=r(t)?"series_"+e(t):null}).attr("id",function(t){return"arcPath_"+r(t)}).each(function(t,n){t.index=n
var a=e(t),i=r(t)
if(E=Da(E,t.depth),t.depth){if(t.data.color)t.data.arcColor=t.data.color
else{var o=T[a].plotoptions,l=null!=o?N(o,k)("childrenColors"):k.childrenColors
if(null!=l)t.data.arcColor=l[R[i]%l.length]
else{var s=at[a](R[i])
t.data.arcColor=s}}t.children||it[a][0].push(t),ot[a].push(t),z[i]=t}else t.data.arcColor=Qa}),o=di().range([0,2*Xa]),l=di().range([tt,u]).domain([rt[0].y1,1]),B=Ra(Da(0,qt(k.padding,u,0)),.9*(u-tt)/E),w.transition().duration(J).ease(D?ui:$).attrTween("d",D||K===Io?function(t,e){var n=Bi(D&&f[e]?S(f[e]):0,S(t)),r=Bi(D&&f[e]?O(f[e]):0,O(t))
return function(e){return s.startAngle(n(e)).endAngle(r(e)),s(t)}}:K===Ho?function(t){var e=Bi(S(t),O(t))
return function(n){return s.endAngle(e(n)),s(t)}}:function(t){var e=Bi(0,A(t)),n=Bi(0,_(l)(t))
return function(r){return s.innerRadius(e(r)).outerRadius(n(r)),s(t)}}),w.styles({fill:function(t){return t.fillColor=et(e(t),t.data)},stroke:function(t){return t.depth?k.strokeColor?k.strokeColor:nt(e(t),t.data):"white"},"stroke-opacity":function(t){return t.depth?N(T[e(t)].plotoptions,k)("strokeOpacity"):1},"fill-opacity":function(t){return t.depth?N(T[e(t)].plotoptions,k)("fillOpacity"):0},"stroke-width":function(t){return t.depth?N(T[e(t)].plotoptions,k)("strokeWidth"):0}}),on(x,w,G),!G){var lt=function(t,e){var n=j(t)
x.eventHandler.mouseMove(n)},st=function(n){x.eventHandler.mouseOut(t,n,e(n))},ut=function(n,r){var a=j(n)
x.eventHandler.click(t,n,e(n),n.itemPos,a)},ct=function(n){if(t.chartRendered){var r=null==n.children?null!=qr.annotation?Fr(n,T.length>1?n.parent.data.seriesname:null):n:[n.data.seriesname,n.value],a=h.centroid(n),i={coordinate:a=[a[0]+g/2,a[1]+y/2],data:r,basedOn:"plot"}
x.eventHandler.doubleclick(n,e(n),i)}},ht={target:"plot",touchleave:!0,chartObj:x},dt={mousemove:lt,mouseout:st,click:ut,dblclick:ct},ft={singletouchmove:lt,touchend:st,tap:ut,dbltap:ct}
fn(w.filter(function(t){return 0!=t.depth}),dt,ft,ht)}t.renderedTimer=setTimeout(function(){if(null!=qr.labelRenderer){var e=zi().startAngle(S).endAngle(O).innerRadius(_(l)).outerRadius(_(l)),n=k.datalabels.padding+U,r=zi().startAngle(S).endAngle(O).innerRadius(_(l,n)).outerRadius(_(l,n))
T.forEach(function(n,a){var i=function(n,i){return[it,a,n,u,function(e,n){if(n===_l)return t.total
return t.getProcessedNode(e).parent.value},r,e,h,[g/2,y/2],i]}
H.push({renderer:t,chartObj:x,charttype:ll,args:i(ot[a])}),H.push({renderer:t,chartObj:x,charttype:"pieInnerLabels",args:i(it[a][0])}),H.push({renderer:t,chartObj:x,charttype:"pieInnerLabels",args:i(ot[a].filter(function(t){return t.children}),!0)})})}null!=qr.annotation&&T.forEach(function(e,n){b=qr.annotation.preprocessAnnotations(T,n,function(e){var n=t.getProcessedNode(e),r=h.centroid(n)
return[r[0]+g/2,r[1]+y/2]},b,x,I)}),D=!0,t.chartRendered=!0},J+1e3/60)}),t}function e(t){var e=r(t)
return e?+e.split("_")[0]:void 0}function r(t){return t.level||t.data&&t.data.level}function a(t){var e=r(t),a=e&&e.split("_").length
return R[e]=1===a?j=0:j,!x.dataObject.hasHierarchyData&&1==a&&t.length<2&&t[0]&&n(t[0][0])?t[0]:n(t[0])?t:(j++,null)}var i,o,l,s,u,c,h,d,f,p,g,y,v,x,b,w,C,k,S,O,A,_,P,T,M,E,L,z,D=!1,R={}
t.commonRendererProp=function(e){return arguments.length?(i=e,t):i},t.defaultMouseOverFunc=function(t,e){P||(P=x.staticPaneSVG.selectAll("g#zchierarchyhighlight").attr("transform","translate("+(x.plotarea.left+g/2)+","+(x.plotarea.top+y/2)+")"),T=kt(P,go,Fi(M?E:1)))
var n=x.legendHighlight.getLegendHighlightEffect(e,"selectedSeries","plot"),a=function(t){var e=[],n=go+"#arcPath"
M?t.split("_").forEach(function(t){n=n+"_"+t,e.push(n)}):e.push(n+"_"+t)
return e}(r(t))
if(n!==Za){P.style("opacity",null)
var i=C.selectAll(a.join()).nodes()
T.each(function(t,r){var a=ri(this)
if(i[r]){var o=ri(i[r]),l=ie(x,e,o.datum(),e)
a.attr("d",o.attr("d")).styles(x.legendHighlight.getEffect(n,fl,Aa.test(n)?l:Qa,{fill:Qa,stroke:l},e,"plot"))}else a.attr("d",null)})}},t.defaultMouseOutFunc=function(){P||(P=x.staticPaneSVG.selectAll("g#zchierarchyhighlight")),P.style("opacity",0)},t.getProcessedNode=function(t){return z[r(t)]}
var j
return t}
var Is=function(){}
Is.getValueWithinRange=function(t,e){return Ra(Da(t,e[0]),e[1])},Is.getNeedlePolygon=function(t,e,n){var r=Wl(t.width/2,7),a=-qt(t.innerRadius,e.radius,0),i=-qt(t.radius,e.radius,n)+t.padding
switch(i=Ra(i,-3*r),t.type){case"clock":return"M"+r+" "+a+" A"+r+" "+r+" 0 0 1 "+-r+" "+a+" A"+r+" "+r+" 0 0 1 "+r+" "+a+" M0 "+(a-r)+" L0 "+i+" M"+-r+" "+(r+i)+" L0 "+i+" L"+r+" "+(r+i)+" L0 "+i
case"sharp":return"M"+r+" "+a+" L0 "+(a+r)+" L"+-r+" "+a+" L0 "+i+" L"+r+" "+a
default:return"M"+r+" "+a+" A"+r+" "+r+" 0 0 1 "+-r+" "+a+" L0 "+i+" L"+r+" "+a}},Is.createLevelsNColors=function(t,e,n,r){var a=[],i=[]
if(dt=t[0].data[0],origValues=dt[0][e.dataindex]||e.values||[],clr=e.color,origValues instanceof Array||(origValues=[origValues]),void 0===clr&&origValues.length<=1&&(clr=["#d1d1d1"]),origValues.length>0){var o=origValues.slice(0)
if(!clr)var l=n[0],s=[0,o.length-1],u=[e.colorGamma[0],e.colorGamma[1]],c=z(l,s,u)
o.sort(_i)
var h=r[0]
o.forEach(function(t,e){var n=origValues.indexOf(t),l=Is.getValueWithinRange(t,r),s=Is.getValueWithinRange(X(o[e+1])?o[e+1]:0,r)
a[e]=0>l?[l,s]:[h,l],i[e]=clr?clr[n]:c(e),h=0>l?s:l})}else dt.forEach(function(t,e){a[e]=r,i[e]=(clr instanceof Array?clr[e]:clr)||"#d1d1d1"})
return{values:a,colors:i}},Is.targetMarker=function(t,e,n,r,a){function i(t){var e=t[f.dataindex]
if(X(e)){e=Is.getValueWithinRange(e,h)
var n=c(e),r=Ut(S,n),a=Kt(n)+v
return"translate("+r[0]+","+r[1]+") rotate("+a+",0,0)"}}function o(t){return X(t[f.dataindex])?null:Za}var l=r.systemConf,s=l.chart.plot.plotoptions.dial,u=r.dataset,c=r.axes.y.groups[0].scale,h=c.domain(),d=r.seriesdata,f=s.targetMarker,p=f.align,g=f.dAlign,y=+(f.padding||0),v=/line/.test(f.symbol)?90:0,m=!/(outer|inner)/g.test(p)&&/line/.test(f.symbol)?(e-n-2*y)/10:1,w=10*W(f.size,m),C={symbolSize:{outer:1,inner:.5},color:r.seriesColor[0],strokeWidth:m},k=g===Zo?w/2+y:g===qo?-w/2-y:0,S=p===Zo?e+k:p===qo?n+k:(e+n)/2,O=kt(t,"g",f.enabled?[d[0].data[0][0]]:[],".","class","targetmarker"),A=kt(t,"g",f.enabled&&a?[d[0].data[0][0]]:[],".","class","targetmarker-eventhandler")
O.attr("transform",i).styles({display:o,"stroke-dasharray":x(f.dashStyle,W(f.outerStrokeWidth,1)),"stroke-linecap":b(f.lineCap,f.dashStyle)}).each(function(){T(ri(this),null,f,C,r)}),function(t){var a=f.events&&f.events.triggerOffset||0
C.strokeWidth=(w+2*a)/10,t.attrs({transform:i,class:function(t,e){return"ZCtargetmarker_eventhandler_"+e}}).styles({display:o,opacity:0}).each(function(){var t=ri(this)
if(T(t,null,f,C,r),"line"===f.symbol){var i=w>=e-n?w:Da(w+a,e-n),o=a||1
t.selectAll("*").attr("d",P("rect")(i,o))}})}(A),Is.handleEvents(r,A,f,"targetmarker",d)
var _=f.label||{},M=W(_.padding,2),E=p===Zo?S+w/2+M:p===qo?(g===Zo?n:S-w/2)-M:e+M,L=kt(t,"text",f.enabled&&Wl(_.enabled,!0)&&!r.renderer[0].firedList.targetSeries?[d[0].data[0][0]]:[])
Pt(L,[_,l.chart,l.canvas,El]),L.each(function(t){var e=ri(this)
e.style("display",Za)
var n=t[f.dataindex]
if(X(n)){if(n=Is.getValueWithinRange(n,h),JSON.parse(s.minmaxlabels.show)&&-1!=h.indexOf(n))return
var a=c(n),i=Xt(a),o=Ut(E,a),l=r.userdata.metadata.columns,d=l.filter(function(t){return t.dataindex===f.dataindex}),g=d.length?d[0]:l[u.getColumnIdx("y",0)],y=g.datatype,v=g[y],m=p===qo?0>i||i>Xa?null:"end":0>i||i>Xa?"end":null,x=p===qo?i>Xa/2&&3*Xa/2>i?null:-Zt(i)+"em":i>Xa/2&&3*Xa/2>i?Zt(i)+"em":null,b=X(_.text)?u.getCustomizedVal(r,_.text,0,null,null,t,"targetLabel"):yn(v,n,y,r,"targetLabel")
e.text(b).style("display",null).attrs({"text-anchor":m,dy:x,transform:"translate("+o[0]+","+o[1]+")"})}})},Is.handleEvents=function(t,e,n,r,a){function i(e,n,r,a){return Y(y[n],r,o(a),t)}function o(e){var r=h?e[1]:e[n.dataindex]
return{value:r,formattedValue:yn(s,r,u,t),actualData:c,data:l=l||t.dataset.getMetaInfoObj(t,c,0)}}var l,s,u,c=a[0].data[0][0],h="levelmarker"===r,d=t.renderer[0].levelMarker,f=d&&d.values.length,p=t.systemConf.chart.plot.plotoptions.dial,g=t.systemConf.tooltip.enabled,y=n.events||{},v=W(y.enabled,p.events.enabled),m=v?y.cursor||Ka:null
if(e.style("cursor",m),v){var x=t.dataset,b=t.userdata.metadata.columns,w=a[0].data[0].length,C=b.filter(function(t){return t.dataindex===n.dataindex}),k=C.length?C[0]:b[x.getColumnIdx("y",0)],S=function(e){var r=(h?e[1]:e[n.dataindex],o(e)),a=ln(d3.event,{x:0,y:0},0,0,t,{seriesPos:0,subseriesindex:0,itemPos:0})
if(g){var i=Y(y.tooltipContent,r,t)||(h?"Range: ":"Target: ")+r.formattedValue
t.eventHandler.tooltipElement.show(t,function(){var e=en(t.svg.node(),d3.event),n={x:e[0],y:e[1]},r={left:n.x,top:n.y},a=gn(d3.event),i=n.x-a.clientX,o=n.y-a.clientY
return r.left-=i,r.top-=o,r.dLeft=i,r.dTop=o,r}(),i,!1,a.helpers)}},O=function(){if(g){var e=t.eventHandler.tooltipElement
e.hide(e.element)}}
u=k.datatype,s=k[u]
var A=function(e,n){hs=$a
var r=t.eventHandler.tooltipElement
r&&r.timeout&&clearTimeout(r.timeout),!1!==t.stopPropogate&&d3.event.stopPropagation()
i(0,t.zcEventType||"mousemove",d3.event,e),S(e)},_=function(e){i(0,t.zcEventType||"mouseout",d3.event,e),O()},P=function(e,n){var a=d3.event&&d3.event.touches,o=t.zcEventType||"click",l=w+n+1+("targetmarker"===r?f:0)
if(i(0,o,d3.event,e),a&&"taphold"!==o){gs(t),cs=(new Date).getTime(),fs=this,ds=[t.renderer[0],e,0,l],hs=t
var s=t.eventHandler.tapOldInfo
s&&s.itemPos==l?(O(),t.eventHandler.tapOldInfo=null):(S(e),t.eventHandler.tapOldInfo={seriesPos:0,subseriesindex:0,itemPos:l,type:r})}},T=function(e){i(0,t.zcEventType||"doubleclick",d3.event,e)}
fn(e,{mousemove:A,mouseout:_,click:P,dblclick:T},{singletouchmove:A,touchend:_,tap:P,dbltap:T},{target:"plot",touchleave:!0,chartObj:t})}},xa.dial=function(){function t(O){return O.each(function(O){var A=n.params
r=A.chartObj,o=A.commonPlotOptions,i=A.color,l=A.dataset,s=A.yaxiscolumnorder,h=r.systemConf
var _=O[0].plotoptions
u=l.getY(O[0].data[0][0],s),y=g,g=0>u
var P=r.defsLocation,T=A.labelQueue
d=r.axes.y.groups[0].scale,p=d.domain(),c=r.plotarea_approx
var M=Bt(o=_?Fl(o,_,!0):o,_,r,sl),E=M.enabled,L=M.easingType,z=C?E?200:0:M.duration,D=ri(this).data(function(t){var e=t[0].data[0]
return t[0].data[0]=[e[0]],[t]}(O))
f=D.selectAll(go+".dial").data()
var R=o.levelMarker
b=o.innerRadius+" _ "+o.outerPadding+" _ "+o.maxRadius+" _ "+o.bandWidth+" _ "+R.bandWidth+" _ "+R.innerPadding+" _ "+R.outerPadding
var j,I=c.radius,H=W(R.strokeWidth,1),B=$t(o,I)
w=zi().endAngle(function(t){return d(t[1])})
var N,F
if(X(R.bandWidth)||X(R.maxBandWidth)){var Y=W(R.maxBandWidth,I),V=Math.min(qt(R.bandWidth,I,I-B),Y)
N=(I-B-V)/2,F=(I-B-V)/2,j=0===V?"hidden":null}else N=Da(0,qt(R.innerPadding,I,0)),F=Da(0,qt(R.outerPadding,I,0))
w.innerRadius(B+N).outerRadius(I-F-.5*H).startAngle(function(t){return d(t[0])})
var U=t.levelMarker=Is.createLevelsNColors(O,R,i,p)
levelmarkerClr=U.colors
var G=kt(kt(D,"g",[1],".","class","levelmarkerSeries"),go,R.enabled?U.values:[])
G.attr("class",function(t,e){return"ZClevelmarker_"+e}).attr("transform","translate("+c.x+","+c.y+")").styles({stroke:function(t,e){return R.strokeColor||levelmarkerClr[e]},"stroke-width":H,"stroke-opacity":R.strokeOpacity,"fill-opacity":R.fillOpacity,fill:function(t,e){var n=levelmarkerClr[e],a=k(o.gradients,[I,I],n),i=a?Dl.get(Il,"svgGradientFill",a,{offset:"pie",chartObj:r}):null
return i?"url("+P+"#"+i+")":n},visibility:j}),C&&b!=v?G.transition().duration(z).ease(ui).call(function(t){wr(t,w,[x,w.innerRadius()()],[m,w.outerRadius()()])}):G.attr("d",w),Is.handleEvents(r,G,R,"levelmarker",O),n.commonPlotOptions(o),S.commonRendererProp(n),S.chartRendered=!1,D.call(S),a=S.innerRadius()
var q=kt(D,"g",[1],".","class","targetSeries")
Is.targetMarker(q,c.actualRadius,c.innerRadius,r,!0),q.attr("transform","translate("+c.x+","+c.y+")")
var Z=o.needle
kt(D,go,Z.show?[u]:[],".","class","dial").attr("d",Is.getNeedlePolygon(Z,c,a)).styles({stroke:Z.strokeColor||"black","stroke-width":Z.strokeWidth,fill:Z.fillColor||Za}).transition().duration(z).ease(L).call(e),qr.labelRenderer&&T.push({renderer:t,charttype:sl,chartObj:r,args:[O,0]})}),t}function e(t){var e,n,r,a,i=c.x,l=c.y,s=void 0!==o.baseValue?o.baseValue:0
t.attrTween("transform",function(t){C?a=Ot(this).rotate:(n=g?p[1]:p[0],null!=s&&(n=g?Ra(s,n):Da(s,n)),a=Kt(d(n))),e=Ra(Da(t,p[0]),p[1]),r=Kt(d(e))
var o=Bi(a,r)
return function(t){return"translate("+i+","+l+") rotate("+o(t)+",0,0)"}})}var n,r,a,i,o,l,s,u,c,h,d,f,p,g,y,v,m,x,b,w,C=!1,S=xa.pie()
return t.commonRendererProp=function(e){return arguments.length?(n=e,t):n},t.endFunctions=function(){v=b,m=w.outerRadius()(),x=w.innerRadius()(),t.chartRendered=!0,C=!0},t.defaultMouseOutFunc=function(){if(r.systemConf.tooltip.enabled){var t=r.eventHandler.tooltipElement
t.hide(t.element)}},t},xa.packedbubble=function(){function t(e){return e.each(function(n){function p(e){var n=gn(d3.event)
return{renderer:t,seriesPos:r(e),subseriesPos:0,itemPos:a(e),coordinates:[n.pageX,n.pageY],element:this,data:e}}var g=l.params
c=g.chartObj
var C=g.color,k=g.notesArray,S=g.yaxiscolumnorder,O=g.dataset,A=c.systemConf,_=g.labelQueue
h=g.commonPlotOptions
var P=t.fillColorFunc=ee(c,0),T=re(c,0),M=n.filter(function(t,e){return t.seriesIndex=e,w[e]=[],!t.disabled}),E=c.plotarea.width,L=c.plotarea.height,z=1===M.length,D=We(c)||c.patternPallete,R=c.systemConf.notes,j=R&&!0===R.enabled&&R.plotValues
d=h.mode,y=ue(h,c)
var I="absolute"===h.showAsNegative,H=+h.interPadding||0,B=+h.outerPadding||0,N=Ra(E,L)-B
f=[c.plotarea.left+(E-N)/2,c.plotarea.top+(L-N)/2],v=function(t){if(!m&&i(t))return 0
var e=O.getY(t,S)||0
return 0>e?I?ja(e):0:e}
var F=0==W(Ve(null,h,c,"enabled"),!0),Y=h.events?h.events.cursor||"pointer":A.chart.plot.events.cursor||"pointer",V=Bt(h,null,c,pl),U=V.enabled,X=V.type,G=V.easingType,q=b?U?200:0:V.duration,Z=function(t){return"translate("+t.x+","+t.y+")"},Q=function(t){return t.r},K=function(){return h.fillOpacity},$=function(){return h.strokeOpacity},J=!b&&(X===bo||X===vo)
x.size([N,N]).padding(H),(s=kt(e,"g",[1],".","class","hierarchychart")).attr("transform","translate("+(E-N)/2+","+(L-N)/2+")").style("cursor",Y),(u=kt(s,yo,o(n,!0))).attrs({class:function(t){return"series_"+r(t)}}).style("visibility",function(t){return i(t)?"hidden":null}),u=u.filter(function(t){return!i(t)})
var tt=o(M)
t.total=tt[0].value,(u=u.data(tt)).attrs({transform:J?Z:function(){var t=ri(this).attr("transform")
return null!=t?t:"translate("+N/2+","+N/2+")"},r:J?Q:function(){var t=ri(this).attr("r")
return null!=t?t:0}}).styles({fill:function(t,e){t.index=e,t.r=t.r||0,t.x=t.x||0,t.y=t.y||0,t.data.parent=t.parent,j&&(t.data.x=t.x,t.data.y=t.y),!t.children&&t.parent&&w[r(t)].push(t),t.arcColor=t.depth?"flat"!==d&&1===t.depth&&y?"grey":C[(y?a(t):r(t))%C.length]:"flat"==d||y||z?Za:"grey"
var n=function(t){return t.children?t.arcColor:null}(t)
return t.fillColor=!t.depth&&D?Za:P(y?a(t):r(t),t.data,null,n)},"fill-opacity":J?0:K,"stroke-opacity":J?0:$,stroke:function(t){return t.arcColor===Za?Za:h.strokeColor?h.strokeColor:t.children?t.arcColor:T(y?a(t):r(t),t.data)},"stroke-width":function(){return h.strokeWidth}})
var et=u.size(),nt=b||X!==bo?q:q/et,rt=X===bo?nt:0
if(u.transition().delay(function(t,e){return b?0:e*rt}).duration(nt).ease(b?ui:G).attrs({transform:Z,r:Q}).styles({"fill-opacity":K,"stroke-opacity":$}),on(c,u,F),!F){var at=function(t,e){var n=p(t)
c.eventHandler.mouseMove(n)},it=function(e){c.eventHandler.mouseOut(t,e,r(e))},ot=function(e,n){var i=p(e)
c.eventHandler.click(t,e,r(e),a(e),i)},lt=function(e){if(t.chartRendered){var a=qr.annotation?Fr(e.data,n.length>1?n[r(e)].seriesname:null):e.data,i=[e.x,e.y],o={coordinate:i=[i[0]+(E-N)/2,i[1]+(L-N)/2],data:a,basedOn:"plot"}
c.eventHandler.doubleclick(e,r(e),o)}},st={target:"plot",touchleave:!0,chartObj:c},ut={mousemove:at,mouseout:it,click:ot,dblclick:lt},ct={singletouchmove:at,touchend:it,tap:ot,dbltap:lt}
fn(u.filter(function(t){return!t.children}),ut,ct,st)}t.renderedTimer=setTimeout(function(){if(qr.annotation&&n.forEach(function(t,e){k=qr.annotation.preprocessAnnotations(n,e,function(t){var e=[t.x,t.y]
return[e[0]+(E-N)/2,e[1]+(L-N)/2]},k,c,g)}),qr.labelRenderer){var e=[(E-N)/2,(L-N)/2],r=function(e,n){return n===_l?t.total:e.parent.value}
n.forEach(function(a,i){_.push({renderer:t,charttype:"hierarchy",chartObj:c,args:[n[i],i,null,null,r,w[i],e]})})}b=!0,t.chartRendered=!0},q+17)}),t}function e(t){var e=t.level&&t.level.split("_").length
return!c.dataObject.hasHierarchyData&&1==e&&t.length<2&&t[0]&&n(t[0][0])?t[0]:n(t[0])?n(t[0][0])?t:t.filter(function(t){return n(t[0])||v(t)>0}):null}function r(t){var e=t.level||t.data&&t.data.level
return e?+e.split("_")[0]:void 0}function a(t){return t.data.itemPos}function i(t){var e=r(t)
return X(e)&&c.seriesdata[e].disabled}function o(t,n){m=n
var r=h.order||_i
"string"==typeof r&&(r=Vl(window,r))
var a=d3.hierarchy(function(t){function n(t,i){var o=e(t)
o?o.forEach(function(t,e){var a=X(i)?i+"_"+e:t.seriesIndex+""
r(t,a),n(t,a)}):(r(t,i),"flat"==d&&a.push(t))}function r(t,e){var n=e.split(/_/)
t.seriesPos=+n[0],t.itemPos=+n[n.length-1]}var a=[]
return n(t),"flat"==d?a:t}(t),e).sum(v).sort(r)
return x(a),a.descendants()}var l,s,u,c,h,d,f,p,g,y,v,m,x=Di(),b=!1,w=[]
return t.commonRendererProp=function(e){return arguments.length?(l=e,t):l},t.defaultMouseOverFunc=function(t,e,n){p||(p=c.staticPaneSVG.selectAll("g#zchierarchyhighlight"),g=kt(p,go,[1]))
var r=ri(u.nodes()[t.index]),a=Ot(r).translate,i=c.legendHighlight.getLegendHighlightEffect(e,"selectedSeries","plot"),o=ie(c,y?n:e,t.data,e)
p.style("opacity",null),g.attrs({transform:"translate("+(f[0]+a[0])+","+(f[1]+a[1])+")",d:P("circle")(2*+r.attr("r"))}).styles(c.legendHighlight.getEffect(i,pl,Aa.test(i)?o:Qa,{fill:Qa,stroke:o},y?n:e,"plot"))},t.defaultMouseOutFunc=function(){p||(p=c.staticPaneSVG.selectAll("g#zchierarchyhighlight")),p.style("opacity",0)},t}
var Hs={}
Hs.filterBySum=function(t,e){var n=function(t,n){return t+(n.disabled?0:ja(n[e]||0))}
return t.filter(function(t){return t.reduce(n,0)>0})},Hs.getKey=function(t,e,n,r){if(!r){var a=n.dataset,i=qr.DataProcessor.helpers.getParsedYAxisOrder(n.seriesdata[e].yaxiscolumnorder)
r=[a.getX(t),a.getY(t,i)]}return"x("+r[0]+") y("+r[1]+")"},xa.bubblepie=function(){function t(e){return e.each(function(e){var a=n.params,i=a.chartObj,o=a.datasetIndex,l=a.commonPlotOptions,s=a.axisrotated,u=a.stacked,c=a.xscale,h=a.yscale,d=a.yaxiscolumnorder,f=a.labelQueue,p=ri(this),g=e[o].plotoptions
if(ba.saveSeriesdataInRenderer(i,o),o===i.bubblePieRendererIndex){var y=Bt(l,g,i,ol).duration,v=i.dataObject.bubblepieData,m=i.subrenderer,x=W(l.dataindex,3),b=kt(p,"g",v?[1]:[],".","class","scatterseries")
v&&v.forEach(function(t,e){m[e]=m[e]||{}
kt(kt(b,"g",[1],".","class","subseries_"+e),"g",Hs.filterBySum(t,x),".","class","scatter",$a,function(t){return t.reference,Hs.getKey($a,$a,$a,[t.x,t.y])}).each(function(t){var r=t.reference,a=Hs.getKey($a,$a,$a,[t.x,t.y]),o=i.dataObject.getXYvalue(s,u,c,h,d,r,"x")||0,l=i.dataObject.getXYvalue(s,u,c,h,d,r,"y")||0,f=i.dataObject.getXYvalue(s,u,c,h,d,r,"z",i.zscale)
m[e][a]=(m[e][a]||xa.pie()).commonRendererProp(n).plotarea({width:f,height:f,left:o-f/2,top:l-f/2}),m[e][a].chartRendered=!1,ri(this).attr("transform","translate("+(o-f/2)+","+(l-f/2)+")").call(m[e][a])})}),t.renderedTimer=setTimeout(function(){r=!0,t.chartRendered=!0
var e=i.seriesdata
e.forEach(function(t,n){if(i.chartTypes[n].value===qr.charttype.bubblepie){var r=i.renderer[n]
f.push({renderer:r,charttype:al,chartObj:i,args:[t,n]}),f.push({renderer:r,charttype:"pieInnerLabels",chartObj:i,args:[e,n,v]})}})},y)}else t.chartRendered=!0}),t}var e,n,r=!1
return t.commonRendererProp=function(e){return arguments.length?(n=e,t):n},t.shiftInfo=function(n){return arguments.length?(e=n,t):e},t},xa.heatmap=function(){function t(r){return r.each(function(r){var a=e.params,i=a.chartObj,o=a.xscale,l=a.yscale,s=a.datasetIndex,u=a.commonPlotOptions,c=a.labelQueue,h=a.yaxiscolumnorder,d=r[s],f=d.data,p=Bt(u,null,i,dl),g=p.enabled,y=p.type,v=p.easingType,m=n?g?200:0:p.duration,x=y===Co||y===xo,b=n?0:x?function(){return Ua()*(3*m/5)}:0,w=n?m:x?2*m/5:m,C=t.fillColorFunc=ee(i,s),k=re(i,s),S=i.dataObject.getTransRectValue("radius",null,null,null,null,u.borderRadius),O=u.symbol&&P(u.symbol),A=o.domain(),_=l.domain(),T=Gl.isQuantileColorScale(i),M=kt(ri(this),"g",[1],".","class","heatmapseries_"+s)
t.seriesdataAfterUpdate=[],f.forEach(function(e,r){var a=t.seriesdataAfterUpdate[r]=i.dataObject.updateSeriesdatabyCategories(I(e),A,_,h),c=kt(kt(M,"g",!T&&d.disabled?[]:[1],".","class","subseries_"+r),go,a)
c.styles({fill:function(t){var e=rn(i,t,o,l,h)
return C(s,t,null,null,null,[e.width,e.height])},"fill-opacity":u.fillOpacity,stroke:function(t){return k(s,t,u.strokeColor)},"stroke-width":u.strokeWidth,"stroke-opacity":u.strokeOpacity}).attr("transform",function(t){var e=rn(i,t,o,l,h)
return"translate("+(e.x+e.width/2)+","+(e.y+e.height/2)+")"}).attr("d",function(t){var e=rn(i,t,o,l,h)
return O?O(Ra(e.width,e.height)):At(-e.width/2,-e.height/2,e.width,e.height,S)}),n||(Yt(c),c.attr("opacity",0).transition().delay(b).duration(w).ease(v).on("start",function(){ri(this).attr("opacity",null)}).call(x?Ft:function(){}).call(y===wo||y===Co?function(t){var e=Bi(0,1)
t.attrTween("transform",function(){var t=ri(this).attr("transform")||""
return function(n){return t+" scale("+e(n)+")"}})}:y===bo||y===xo?Ft:function(t){var e=Bi(0,Xa)
t.attrTween("transform",function(){var t=ri(this).attr("transform")
return function(n){return t+" matrix("+Ba(e(n))+",0,0,1,0,0)"}})}))}),qr.labelRenderer&&c.push({renderer:t,charttype:"hierarchy",chartObj:i,args:[d,s,null,null,null,wi(t.seriesdataAfterUpdate)]}),t.renderedTimer=setTimeout(function(){n=!0,t.chartRendered=!0},m+17)}),t}var e,n=!1
return t.commonRendererProp=function(n){return arguments.length?(e=n,t):e},t}
var Bs={}
Bs.getTileBound=function(t,e){var n=t.axes.x.scale,r=t.axes.y.groups[0].scale,a=e.x0||0,i=e.x1||0,o=e.y0||0,l=e.y1||0
return{x:n(a),y:r(o),width:n(i)-n(a),height:r(l)-r(o)}},Bs.getLevel=function(t){return t.level||t.data&&t.data.level},Bs.getSeriesIndex=function(t){var e=Bs.getLevel(t)
return e?+e.split("_")[0]:void 0},Bs.getItemIndex=function(t){var e=Bs.getLevel(t)
if(e){var n=e.split("_")
return+n[n.length-1]}},Bs.getParentColor=function(t,e){var n=t.params,r=n.color,a=n.commonPlotOptions.parent.fillColor,i=Qa
if(e.depth){var o=r[Bs.getSeriesIndex(e)%r.length]
i="{{clr-tint}}"===a?te(o,.5,"brighter",d3.hsl):"{{clr-shade}}"===a?te(o,.5,"darker",d3.hsl):"{{clr}}"===a?o:a||function(t,e){var n=bi(t)
return n.opacity=N(e)?1:e,n.toString()}(o,1e-4)}return i},Bs.isDisabled=function(t,e){var n=Bs.getSeriesIndex(e)
return X(n)&&t.seriesdata[n].disabled}
var Ns=function(t){var e=this.rp=t.params,n=this.chartObj=e.chartObj
this.commonRendererProp=t,this.dimension=Jl.getAvailableBound(n,e.commonPlotOptions),this.createScale(),this.layout=this.getLayout(),this.processData()}
Ns.prototype.createScale=function(){var t=this.chartObj,e=this.dimension
t.axes.x.scale=di().domain([0,e.width]).range([0,e.width]),t.axes.y.groups[0]=t.axes.y.groups[0]||{},t.axes.y.groups[0].scale=di().domain([0,e.height]).range([0,e.height])},Ns.prototype.getLayout=function(){var t=this.dimension,e=this.rp.commonPlotOptions,n=e.parent,r=ct(e.padding),a=e.mode
return Ii().size([t.width,t.height]).tile(hi(a)).round(!0).paddingInner(function(t){return t.value?(t.children[0]&&t.children[0].children?n:e).interPadding||0:0}).paddingTop(function(t){return t.depth&&t.value?r.top:0}).paddingBottom(function(t){return t.depth&&t.value?r.bottom:0}).paddingLeft(function(t){return t.depth&&t.value?r.left:0}).paddingRight(function(t){return t.depth&&t.value?r.right:0})},Ns.prototype.getValue=function(t){var e=this.chartObj,n=this.rp,r=Bs.getSeriesIndex(t),a=qr.DataProcessor.helpers.getParsedYAxisOrder(e.seriesdata[r||0].yaxiscolumnorder),i=e.dataset.getY(t,a)||0,o="absolute"===n.commonPlotOptions.negativeAs
return Bs.isDisabled(e,t)?0:0>i?o?ja(i):0:i},Ns.prototype.getChildren=function(t){var e=Bs.getLevel(t),r=e&&e.split("_").length
return!this.chartObj.dataObject.hasHierarchyData&&1==r&&t.length<2&&t[0]&&n(t[0][0])?t[0]:n(t[0])?t:$a},Ns.prototype.processData=function(){var t=this,e=t.chartObj,n=t.commonRendererProp,r=t.dimension,a=t.rp,i=a.commonPlotOptions,o=a.color,l=i.colorScheme||"solid",s=0,u={},c=[],h=[],d=[],f=[],p=[],g=[],y=d3.hierarchy(t.chartObj.seriesdata,function(e){return t.getChildren(e)}).sum(function(e){return t.getValue(e)}),v=t.layout(y).descendants()
t.chartObj.seriesdata.forEach(function(t,n){var a=o[n%o.length]
g[n]=ee(e,n,[r.width,r.height]),h[n]=0,d[n]=[],d[n].disabled=t.disabled,d[n].plotoptions=t.plotoptions,c[n]=di().domain([0,m(t)]).range([a,te(a,"solid"===l?0:"shades"===l?-1:1,"brighter",d3.hsl)])}),v.forEach(function(t,r){var a=Bs.getLevel(t),l=Bs.getSeriesIndex(t),g=Bs.getItemIndex(t)
if(t.index=r,t.depth){if(t.data.color)t.data.arcColor=t.data.color
else{var y=ue(i,e)?o[g%o.length]:c[l](h[l])
t.data.arcColor=y}p[a]=t}t.children?t.data.arcColor=Bs.getParentColor(n,t):(f[l]||(f[l]=[]),f[l].push(t),h[l]++),t.depth&&d[l].push(t),Bs.isDisabled(e,t)||(u[a]=s++)}),e.renderer[0].fillColorFunc=g[0],t.processedData=v,t.previousSiblingsCount=u,t.seriesWiseNodes=d,t.leafNodes=f,t.nodes=p,t.fillColor=g},function(){function t(t,e,n){var r=gn(d3.event)
return{renderer:n,seriesPos:Bs.getSeriesIndex(t),coordinates:[r.pageX,r.pageY],element:this,data:t.data,level:Bs.getLevel(t)}}function e(t){var e,n=t.chartObj,r=t.dimension,a=t.processedData,i=t.rp.commonPlotOptions,o=n.dataset,l=dn(n)
if(n.chartRendered)return a.some(function(t){var a=Bs.getSeriesIndex(t)
if(!(N(a)||0==W(Ve(n.seriesdata[a].plotoptions,i,n,"enabled"),!0))){var s=Bs.getTileBound(n,t),u=s.x,c=s.y,h=s.width,d=s.height,f=ae(o.getClr(t.data),n),p={x:u+r.x,y:c+r.y,width:h,height:d}
return f&&Ul.pointInRectangle(l,p)&&!t.children?(e=t,!0):void 0}}),e}Bs.addEvents=function(n){function r(){var r=e(n)
if(r){var a=t(r,0,g)
u.eventHandler.mouseMove(a)
var i=Ve(u.seriesdata[Bs.getSeriesIndex(r)].plotoptions,h,u,"cursor")
u.eventHandler.addCursor(i)}else s&&(u.eventHandler.mouseOut(g,s,d(s)),u.eventHandler.hideCursor())
s=r}function a(){var t=s
t?u.eventHandler.mouseOut(g,t,d(t)):l()}function i(){var r=e(n)
if(r){var a=t(r,0,g)
u.eventHandler.click(g,r,d(r),f(r),a),s=r}}function o(){var t=e(n)
if(t){var r=qr.annotation?Fr(t,p.length>1?p[d(t)].seriesname:$a):t,a=Bs.getTileBound(u,t),i={coordinate:[a.x+c.x,a.y+c.y],data:r,basedOn:"plot"}
u.eventHandler.doubleclick(t,d(t),i),s=t}}function l(){u.staticPaneSVG.selectAll("g#zchierarchyhighlight").style("opacity",0)}var s,u=n.chartObj,c=n.dimension,h=n.rp.commonPlotOptions,d=Bs.getSeriesIndex,f=Bs.getItemIndex,p=u.seriesdata,g=u.renderer[0],y=[u.plotarea.left+c.x,u.plotarea.top+c.y],v=u.eventHandler.trackerElement
E(v,u.plotarea),function(t){t.node().__on.forEach(function(e){t.on("."+e.name,$a)})}(v),g.defaultMouseOverFunc=function(t,e,n){t=t.data||t
var r=u.dataObject.getTransRectValue("radius",$a,$a,$a,$a,h.borderRadius),a=ue(h,u),i=u.staticPaneSVG.selectAll("g#zchierarchyhighlight"),o=i.selectAll(go),l=u.legendHighlight.getLegendHighlightEffect(e,"selectedSeries","plot"),s=ie(u,a?n:e,t,e)
i.style("opacity",$a),o.attr("d",function(){var e=g.getProcessedNode(t),n=Bs.getTileBound(u,e)
return"canvas"===u.plot.renderer.mode&&(r=_t(r,n.width,n.height,!0)),At(n.x,n.y,n.width,n.height,r)}).styles(u.legendHighlight.getEffect(l,"treemap",Aa.test(l)?s:Qa,{fill:Qa,stroke:s},a?n:e,"plot"))},g.defaultMouseOutFunc=l
kt(u.staticPaneSVG.selectAll("g#zchierarchyhighlight").attr("transform","translate("+y+")"),go,[1])
fn(v,{mousemove:r,mouseout:a,click:i,dblclick:o},{singletouchmove:r,touchend:a,tap:i,dbltap:o},{target:"plot",touchleave:!0,chartObj:u})}}(),xa.treemap=function(){function t(p){return p.each(function(g){var y=e.params
a=y.chartObj,i=y.commonPlotOptions
var v=y.notesArray,m=a.systemConf,x=y.labelQueue
o=new Ns(e),l=o.dimension,s=o.nodes,u=o.leafNodes,c=o.seriesWiseNodes
var b=i.strokeWidth,w=i.strokeOpacity,C=i.fillOpacity,k=o.fillColor,S=re(a,0),O=a.dataObject.getTransRectValue("radius",$a,$a,$a,$a,i.borderRadius),A=[l.x,l.y],_=Bt(i,$a,a,"treemap"),P=_.enabled,T=_.type,M=h?ui:_.easingType,E=h?P?200:0:_.duration,L=a.dataObject.totalnoofdatas,z=h?E:T===mo?E/L:E,D=h?0:T===mo?function(t){return o.previousSiblingsCount[d(t)]*(E/L)}:T===xo?function(){return Ua()*L*(E/L)}:0,R=T===vo||T===xo||T===mo?0:$a,j=i.events?i.events.cursor||Ka:m.chart.plot.events.cursor||Ka,I=i.parent,H=I.events.cursor;(n=kt(p,"g",[g],".","class","hierarchychart")).attr("transform","translate("+l.x+","+l.y+")").styles({"stroke-width":b,"stroke-opacity":w,"fill-opacity":C,cursor:j})
var B=o.processedData
t.total=B[0].value,r=kt(n,go,B),t.total||r.remove(),r.styles({fill:function(t){if(t.children)return t.fillColor=t.data.arcColor
var e=Bs.getTileBound(a,t),n=f(t)
return t.fillColor=k[n](n,t.data,$a,$a,$a,[e.width,e.height])},stroke:function(t){var e=(t.children?I.strokeColor:$a)||i.strokeColor
return t.depth?e||(t.children?t.data.arcColor:S(f(t),t.data)):Qa},visibility:function(t){return t.value?$a:"hidden"}}).attr("class",function(t){return X(d(t))?"series_"+f(t)+(t.children?" zchierarchyparent":""):void 0}).attr("id",function(t){return"tree_"+d(t)})
n.selectAll(go+".zchierarchyparent").styles({"stroke-width":I.strokeWidth,"stroke-opacity":I.strokeOpacity,"fill-opacity":I.fillOpacity,cursor:H}),h||r.attr("transform",function(t){var e=Bs.getTileBound(a,t),n=e.x+e.width/2,r=e.y+e.height/2
return T===ko?(n=l.width/2,r=l.height/2):T===Po?n=e.width/2:T===Oo&&(r=e.height/2),"translate("+n+","+r+")"}).attr("d",function(t){var e=Bs.getTileBound(a,t),n=-e.width/2,r=-e.height/2,i=e.width,o=e.height
return T===Po?i=0:T===Oo&&(o=0),At(n,r,i,o,O)}).style("opacity",R),r.transition().duration(z).delay(D).ease(M).attr("transform",function(t){var e=Bs.getTileBound(a,t)
return"translate("+(e.x+e.width/2)+","+(e.y+e.height/2)+")"}).attr("d",function(t){var e=Bs.getTileBound(a,t)
return At(-e.width/2,-e.height/2,e.width,e.height,O)}).style("opacity",$a),t.renderedTimer=setTimeout(function(){if(qr.labelRenderer){var e=function(e,n){if(n===_l)return t.total
return t.getProcessedNode(e).parent.value}
g.forEach(function(n,r){x.push({renderer:t,charttype:"hierarchy",chartObj:a,args:[c[r],r,$a,$a,e,u[r],A]}),x.push({renderer:t,charttype:"hierarchy",chartObj:a,args:[c[r],r,$a,$a,e,[c[r][0]],A,!0]})})}qr.annotation&&g.forEach(function(e,n){v=qr.annotation.preprocessAnnotations(g,n,function(e){var n=t.getProcessedNode(e),r=Bs.getTileBound(a,n)
return[r.x+l.x,r.y+l.y]},v,a,y)}),Bs.addEvents(o),h=!0,t.chartRendered=!0},E+17+(D?4*L:0))}),t}var e,n,r,a,i,o,l,s,u,c,h=!1,d=Bs.getLevel,f=Bs.getSeriesIndex
return t.commonRendererProp=function(n){return arguments.length?(e=n,t):e},t.getProcessedNode=function(t){return o.nodes[d(t)]},t}
var Fs=function(t,e,n,r,a,i,o){var l,s,u=t[e.dataindex]||[],c=X(e.dataindex),h=n.datalabels.hasFixedPosition,d=n.systemConf.chart.axes.yaxis[a.yaxiscolumnorder||0].reversed,f=n.userdata.seriesdata.stackGroup,p=f?je(o,f):0,g=n.plotarea,y=a.stacked,v=a.axisrotated,m=a.hasNegValue,x=a.yaxiscolumnorder,b=a.dataset,w=a.yscale
null==u||u instanceof Array||(u=[u]),c&&!u.length?l=s=0:(l=ii(u),s=oi(u))
var C=b.getX(t),k=(y?r.bandwidth1(C)+(r.bandwidth2(p)||0):r.bandwidth1(C)+r.bandwidth2(r.barDatasetIndex+i))+r.levelMarkerPadding,S=c?w(v?Ra(0,l):Da(0,s)):v&&null!=m?w(m):0,O=v?c?w(Da(0,s))-w(Ra(0,l)):null!=m?g.width-w(m):g.width:r.levelMarkerWidth,A=v?r.levelMarkerWidth:c?w(Ra(0,l))-w(Da(0,s)):null!=m?w(m):g.height
if(!c)if(w.bandwidth){var _=w.ordinalRange,P=w.bandwidth()/2
v?(S=w.origRange[0],O=_[d?0:_.length-1]+P):(S=_[_.length-1]+P,A=_[d?_.length-1:0]+P)}else{var T
if(h){var M=Ys(n,x)
T=y?M[x][1]:M[1]}else T=w.domain()[1]
var E=[w(T),w(X(m)?m:w.domain()[0])]
v?(E.reverse(),S=E[0],O=ja(E[1]-E[0])):(S=E[0],A=ja(E[1]-E[0]))}return{x:k,y:S,width:O,height:A}},Ys=function(t,e){var n=t.dataObject.actual_yRange[e]
return Oi(wi([n,[0]]))}
!function(t){var e=function(){return document.createElement("canvas")},r=function(t,e){return t.getContext("2d",e)},a=function(t){return t.nodeName===po}
t.WordCloud=function(t,i){var o,l,s=i.padding,u=i.textOverflow,c=i.textOverlap,h=n(h=i.rotation)?h:[h],d=i.mask,f=i.fontScale,p=i.fontFamily,g=i.fontStyle,y=i.fontWeight,v=i.fontSize,m=i.content,x=i.chartObj,b=[],w=0,C=Ra(8,Da(4,Ea(16*Ra(i.width,i.height)/1024))),k=[],S=za(i.width/C),O=za(i.height/C),A=(A=i.origin)?[A[0]/C,A[1]/C]:[S/2,O/2],_=La(Ha(S*S+O*O)),P=function(t){if(b[t])return b[t]
var e=8*t,n=e,r=[]
for(0===t&&r.push([A[0],A[1],0]);n--;){var a=n/e*2*Xa
r.push([A[0]+1*t*Ba(-a)*Ra(1,S/O),A[1]+1*t*Na(-a)*Ra(1,O/S),a])}return b[t]=r,r},T=function(t){return{fontStyle:g(t),fontWeight:y(t),fontSize:v(t),fontFamily:p(t)}},M=function(t){return g(t)+" normal "+y(t)+" "+v(t).toString(10)+qa+" "+p(t)},E=function(t,e){return v(e)-v(t)},L=function(t,e,n){var r=t.node(),o=r.childElementCount?t.selectAll("*").filter(function(){return a(this)&&!this.childElementCount}).nodes():[r],l=t.attr("dy"),c=Ot(r).rotate||0,h=ja(X(n)?n:c)%360,d=h>90?180-h:h
t.attrs({"text-anchor":$a,dy:"1em",transform:"rotate("+d+" 0 0)"})
var f,p,g,y,v,m="ellipsis"===u?"..":"",x=m.length,b=Me(r),w=(X(e)?e:i.width)-s,C=i.height-s,k=b.left,S=b.top,O=b.left+w,A=b.top+C,_=w,P=C,T=function(t){var e=(a(t)?Te:Me)(t)
return a(t)&&(g=_-Da(0,e.left-k)-Da(0,O-e.right),y=P-Da(0,e.top-S)-Da(0,A-e.bottom)),{width:e.width,height:e.height}}
o.forEach(function(t){g=w,y=C,(v=T(t)).width-g>1&&(f=(v.width-g)/v.width,p=za((1-f)*t.textContent.length),t.textContent=t.textContent.substring(0,p-x)+m,v=T(t)),v.height-y>1&&(f=(v.height-y)/v.height,p=za((1-f)*t.textContent.length),t.textContent=t.textContent.substring(0,p-x)+m,v=T(t)),(v.width-g>1||v.height-y>1)&&Mt(t,t,t.textContent,v.width,v.height,v,m),t.textContent===m&&(t.textContent="")}),t.attrs({"text-anchor":Qo,dy:l,transform:"rotate("+c+" 0 0)"})},z=function(t,n){var a=v(t),o=m(t)
if(0>=a)return $a
var l=e(),c=r(l,{willReadFrequently:!0}),h=[],d=o.value,f=o.type
dummyText.attrs({"text-anchor":"middle",dy:Ws.getDy(o)+"em",transform:"rotate("+Kt(n)+" 0 0)"}),Pt(dummyText,[T(t)]),dummyText[o.type](o.value),Ws.isMultiLine(o)&&hr(dummyText,0),"none"!==u&&(X(i.maxWidth)&&L(dummyText,qt(i.maxWidth,i.width),0),L(dummyText),d=dummyText[o.type]())
var p=D(dummyText.node()),g=p.width+i.strokeWidth+s,y=p.height+i.strokeWidth+s,x=za((g*ja(Na(n))+y*ja(Ba(n)))/C),b=za((g*ja(Ba(n))+y*ja(Na(n)))/C),w=b*C,k=x*C
if(h.innerSVG=d,h.contentType=f,h.format=o.format,"html"===f){var S=fr(dummyText,a)
Array.prototype.push.apply(h,S)}l.setAttribute("width",w),l.setAttribute("height",k),c.translate(w/2,k/2),c.rotate(n),function(t,e,n,r){var a=v(e),o=M(e),l=Ws.getDy(r),u=0,c=0
"html"===r.contentType?(t.textAlign=No,r.forEach(function(h){var d,f=h.style
f.length&&(d=wa.canvas.getFont(Pt(null,[T(e)]),f),parseFloat(f["font-size"])),u=h.dx||0,c=(h.dy||0)*a+a*l-(Ws.isMultiLine(r)?n.height/2:0),t.font=d||o,t.strokeStyle="#000",t.lineWidth=i.strokeWidth+s,t.strokeText(h.text,u,c),t.fillStyle="#000",t.fillText(h.text,u,c)})):(c=a*l,t.textAlign=No,t.font=o,t.strokeStyle="#000",t.lineWidth=i.strokeWidth+s,t.strokeText(r.innerSVG,u,c),t.fillStyle="#000",t.fillText(r.innerSVG,u,c))}(c,t,p,h)
var O=function(t,e,n){for(var r,a,i,o=[],l=[n/2,e/2,n/2,e/2],s=e*C,u=e;u--;)for(r=n;r--;){i=C
t:for(;i--;)for(a=C;a--;)if(t[4*((r*C+i)*s+(u*C+a))+3]){o.push([u,r]),l[0]=Ra(l[0],r),l[1]=Da(l[1],u),l[2]=Da(l[2],r),l[3]=Ra(l[3],u)
break t}}return{occupied:o,bound:l}}(c.getImageData(0,0,w,k).data,b,x)
return{occupied:O.occupied,bound:O.bound,gw:b,gh:x,width:g,height:y,fontSize:a,rotation:n,nodeList:h}},R=function(t,e){return t>=S||e>=O||0>t||0>e},j=function(){for(var t,e,n,r=S;r--;)for(k[r]=[],t=O;t--;)if(d){n=C
t:for(;n--;)for(e=C;e--;)for(var a=4;a--;)if(255!==l[4*((t*C+n)*S*C+(r*C+e))+a]){k[r][t]=!1
break t}!1!==k[r][t]&&(k[r][t]=!0)}else k[r][t]=!0},I=function(t,e){R(t,e)||(k[t][e]=!1)},H=function(t){var e=Ul.degreeToRadian(h[w++%h.length]),n=z(t,e)
if(o.push(n),t.layout=$a,!n)return!1
var r=n.bound
if(r[1]-r[3]+1>S||r[2]-r[0]+1>O)return!1
for(var a,i=_+1,l=function(e){var r=La(e[0]-n.gw/2),i=La(e[1]-n.gh/2)
return n.gw,n.gh,!!function(t,e,n,r,a){for(var i=a.length;i--;){var o=t+a[i][0],l=e+a[i][1]
if(R(o,l)||!k[o][l])return!1}return!0}(r,i,0,0,n.occupied)&&(a=[r,i],function(t,e,n,r,a,i){for(var o=a.occupied,l=o.length;l--;){var s=t+o[l][0],u=e+o[l][1]
R(s,u)||I(s,u,void 0,i)}}(r,i,0,0,n,t),!0)};i--;)if(P(_-i).some(l))return t.layout={x:(a[0]+n.gw/2)*C,y:(a[1]+n.gh/2)*C,width:n.width,height:n.height,rotation:n.rotation,text:n.text,size:n.fontSize,nodeList:n.nodeList},!0
return!1},B=function(){dummyText=function(t){return kt(t.getPatternSvg(),fo,[1],".","class","dummyText")}(x),t.sort(E),o=[],j()
var e=t.filter(H)
if("adjust"===c&&e.length!==t.length){var n=0,r=0
if(t.forEach(function(t,e){if(o[e]){var a=o[e].width*o[e].height
n+=a,r+=t.layout?a:0}}),r!==n){var a=f.range(),l=r/n,s=Da(a[0],3),u=Da(a[1]*l,s+2)
f.range([s,u]),o=[],j(),e=t.filter(H)}}i.onload(),function(t){kt(t.getPatternSvg(),fo,[],".","class","dummyText")}(x)}
if(d){var N,F=new Image
F.crossOrigin="Anonymous",F.onload=function(){var t=S*C,n=O*C;(N=e()).width=t,N.height=n
var a=r(N)
a.drawImage(F,0,0,t,n)
var i=a.getImageData(0,0,t,n),o=a.createImageData(i),s=i.data
l=o.data
for(var u=0;u<s.length;u+=4)l[u]=l[u+1]=l[u+2]=255,l[u+3]=s[u+3]>128?255:254
i=o=s=null,B(),l=null},F.src=d}else B()}}(this)
var Vs=function(t){var e,n,r,a,i,o,l,s,u,c,h,d,f,p,g=Ws.getSeriesIndex,y=function(t){var e=qr.DataProcessor.helpers.getParsedYAxisOrder(n.seriesdata[g(t)].yaxiscolumnorder)
return n.dataset.getY(t,e)}
return e=t.params,n=e.chartObj,r=e.commonPlotOptions,i=Jl.getAvailableBound(n,r),o=0,a=[],u=[],c=[],h=[],d=[],f=[],p=[],n.showLoading(n.container),n.seriesdata.forEach(function(t,e){t.disabled||t.data.forEach(function(t,n){t.forEach(function(t,r){t.seriesIndex=e,t.subSeriesIndex=n,t.itemIndex=r,t.layout=$a,t.level=e+"_"+n+"_"+r
var i=y(t)
o+=i,p.push(i),a.push(t)})})}),l=Oi(wi([[0],Oi(p)])),function(){var t=function(t,e){return e===_l?o:l[1]}
n.seriesdata.forEach(function(a,i){var o=er(r,a.plotoptions,n,i),l=nr($a,o,n)
h.push(l["font-family"]),d.push(l["font-style"]),f.push(l["font-weight"]),u.push(o),c.push(ur(n,e,o,vl,t,i))})}(),function(){var t=Ra(i.width,i.height),e=qt(r.minSize,t,qt("2%",t)),n=qt(r.maxSize,t,qt("20%",t))
s=di().domain(l).range([e,n])}(),{rp:e,processedData:a,dimension:i,sum:o,fontScale:s,datalabelOptions:u,fontFamily:h,fontStyle:d,fontWeight:f,drawLayout:function(t){var e,o=r.mask,l=!Ll.IE&&!Ll.PHANTOMJS&&o.htmlEl,u=o.imageUrl,p=!Ll.IE&&!Ll.PHANTOMJS&&o.symbol
if(l)e="data:image/svg+xml;"+(Ll.IE?"base64":"utf8")+","+(Ll.IE?Ml(unescape(encodeURIComponent(l))):l)
else if(u)e=u
else if(p){var v=i.width,m=i.height,x=Ra(v,m),b="rect"===p?P(p)(v,m):P(p)(x),w="rect"===p?[v,m]:[x,x],C="<svg xmlns='"+d3.namespaces.svg+"' width='"+w[0]+"' height='"+w[1]+"'><path transform='translate("+w[0]/2+","+w[1]/2+")' d='"+b+"'></path></svg>"
e="data:image/svg+xml;"+(Ll.IE?"base64":"utf8")+","+(Ll.IE?Ml(unescape(encodeURIComponent(C))):C)}var k={width:i.width,height:i.height,rotation:r.rotation||[0],fontSize:function(t){var e=y(t)
return e?s(e):0},fontFamily:function(t){return h[g(t)]},fontStyle:function(t){return d[g(t)]||"normal"},fontWeight:function(t){return f[g(t)]||"normal"},content:function(t){if(X(y(t))){var e=c[g(t)]
return{type:e.contentType,value:e(t),format:e}}return{type:"text",value:""}},strokeWidth:W(r.strokeWidth,1),onload:function(){n.hideLoading(n.container),t()},origin:$a,mask:e,padding:W(r.padding,2),textOverflow:r.datalabels.textOverflow||"ellipsis",textOverlap:r.datalabels.textOverlap||"adjust",maxWidth:r.datalabels.maxWidth,fontScale:s,chartObj:n}
WordCloud(a,k)}}},Ws={}
Ws.getSeriesIndex=function(t){return t.seriesIndex},Ws.getItemIndex=function(t){return t.itemIndex},Ws.getDy=function(t){return Ws.isMultiLine(t)?.9:.4},Ws.isMultiLine=function(t){return(t.nodeList?t.nodeList.format:t.format).multiLine},function(){function t(t,e,a){var i=gn(d3.event)
return{renderer:a,seriesPos:n(t),subseriesPos:t.subSeriesIndex,itemPos:r(t),coordinates:[i.pageX,i.pageY],element:this,data:t}}function e(t){var e,r=t.rp.chartObj,a=t.dimension,i=t.processedData,o=dn(r),l=i.length,s=null
if(o.x-=a.x,o.y-=a.y,r.chartRendered){for(;l--;){var u=i[l],c=u.layout,h=ae(r.dataset.getClr(u),r),d=0==W(Ve(r.seriesdata[n(u)].plotoptions,t.rp.commonPlotOptions,r,"enabled"),!0)
if(c&&!d&&h){var f={x:c.x-c.width/2,y:c.y-c.height/2,width:c.width,height:c.height},p=Ul.rotatePoint(o,c.rotation,c),g=ja(p.y-p.y)
Ul.pointInRectangle(p,f)&&(null===s||s>g)&&(e=u,s=g)}}return e}}var n=Ws.getSeriesIndex,r=Ws.getItemIndex
Ws.addEvents=function(a){var i,o=a.rp.chartObj,l=a.rp.commonPlotOptions,s=a.dimension,u=o.seriesdata,c=o.renderer[0],h=o.plotarea,d=o.eventHandler,f=[h.left+s.x,h.top+s.y],p=s.width,g=s.height,y=ee(o,0,{x1:0,x2:p,y1:0,y2:g,r:Ra(p,g)},$a,"svg"),v=d.trackerElement
E(v,h),function(t){t.node().__on.forEach(function(e){t.on("."+e.name,$a)})}(v)
var m=o.staticPaneSVG.selectAll("g.zcplothighlight").attr("transform","translate("+f+")")
kt(m,fo,[1])
var x=function(){m.style("opacity",0)},b=function(){var r=e(a)
if(r){var s=t(r,0,c)
d.mouseMove(s)
var h=Ve(u[n(r)].plotoptions,l,o,"cursor")
d.addCursor(h)}else i&&(d.mouseOut(c,{data:i},n(i)),d.hideCursor())
i=r},w=function(){var t=i
t?d.mouseOut(c,{data:t},n(t)):x()},C=function(){var o=e(a)
if(o){var l=t(o,0,c)
d.click(c,{data:o},n(o),r(o),l),i=o}},k=function(){var t=e(a)
if(t){var r=qr.annotation?Fr(t,u.length>1?u[n(t)].seriesname:$a):t,l=t.layout,c={coordinate:[l.x-.5*l.width+s.x,l.y-l.height*Ws.getDy(l)+s.y],data:r,basedOn:"plot"}
o.eventHandler.doubleclick({data:t},n(t),c),i=t}}
c.defaultMouseOverFunc=function(t,e,r){var i=ue(l,o),s=m.selectAll(fo),u=o.legendHighlight.getLegendHighlightEffect(e,"selectedSeries","plot"),c=ie(o,i?r:e,t,e),h=t.layout,d=Ws.isMultiLine(h)
m.style("opacity",$a),nr(s,a.datalabelOptions[n(t)],o),s[h.nodeList.contentType](h.nodeList.innerSVG),s.attrs({x:h.x,y:h.y-(d?h.height/2:0),transform:"rotate("+Kt(h.rotation)+" "+h.x+" "+h.y+")","text-anchor":Qo,dy:Ws.getDy(h)+"em"}).styles({"font-size":h.size+qa,"paint-order":"stroke",fill:y(i?r:e,t)}).styles(o.legendHighlight.getEffect(u,yl,Aa.test(u)?c:Qa,{fill:Qa,stroke:c},i?r:e,"plot")),d&&hr(s,h.x)},c.defaultMouseOutFunc=x
fn(v,{mousemove:b,mouseout:w,click:C,dblclick:k},{singletouchmove:b,touchend:w,tap:C,dbltap:k},{target:"plot",touchleave:!0,chartObj:o})}}(),xa.wordcloud=function(){function t(d){return d.each(function(d){var f=e.params
i=f.chartObj,n=f.commonPlotOptions
var p,g=f.notesArray,y=Bt(n,$a,i,yl),v=y.enabled,m=y.type,x=s?ui:y.easingType,b=s?v?200:0:y.duration,w=i.dataObject.totalnoofdatas,C=s?b:m===mo||m===xo?b/w:b,k=s?0:m===mo?function(t,e){return e*(b/w)}:m===xo?function(){return Ua()*w*(b/w)}:0,S=m===vo||m===xo||m===mo?0:$a,O=kt(ri(this),"g",[d],".","class","wordcloudgroup"),A=(o=new Vs(e)).dimension,_=A.width,P=A.height
t.total=o.sum,t.extentY=o.fontScale.domain(),r=t.fillColorFunc=ee(i,0,{x1:0,x2:_,y1:0,y2:P,r:Ra(_,P)}),a=a=re(i,0),l=ue(n,i),O.attrs({transform:"translate("+A.x+","+A.y+")","text-anchor":Qo}),o.drawLayout(function(){p=1
var e=kt(O,fo,o.processedData)
e=e.filter(h),function(t){t.styles({"paint-order":"stroke","fill-opacity":n.fillOpacity,"stroke-width":n.strokeWidth,"stroke-opacity":n.strokeOpacity})}(O),e.each(function(t){var e=ri(this),s=u(t),h=c(t),d=t.layout,f=Ws.isMultiLine(d)
nr(e,o.datalabelOptions[s],i),e[d.nodeList.contentType](d.nodeList.innerSVG),e.styles({"font-size":d.size+qa,fill:r(l?h:s,t),stroke:a(l?h:s,t,n.strokeColor)}).attrs({x:d.x,y:d.y-(f?d.height/2:0),dy:Ws.getDy(d)+"em",transform:"rotate("+Kt(d.rotation)+" "+d.x+" "+d.y+")",id:"word_"+s+"_"+t.subSeriesIndex+"_"+h,class:"series_"+s}),f&&hr(e,d.x)}),s||e.style("opacity",S).each(function(t){var e,n,r=t.layout
if(m===wo)e=A.width/2,n=A.height/2
else if(m===ko){var a=_/p,i=P/p
e=Ua()*(a-r.width)-A.x+r.width/2,n=Ua()*(i-r.height)-A.y+r.height/2}else e=r.x,n=r.y
ri(this).attrs({x:e,y:n-(Ws.isMultiLine(r)?r.height/2:0),transform:"rotate("+Kt(r.rotation)+" "+e+" "+n+")"})}),e.transition().duration(C).delay(k).ease(x).style("opacity",$a).attrs({x:function(t){return t.layout.x},y:function(t){var e=t.layout
return e.y-(Ws.isMultiLine(e)?e.height/2:0)},transform:function(t){var e=t.layout
return"rotate("+Kt(e.rotation)+" "+e.x+" "+e.y+")"}}),t.renderedTimer=setTimeout(function(){Ws.addEvents(o),qr.annotation&&d.forEach(function(t,e){g=qr.annotation.preprocessAnnotations(d,e,function(t){var e=t.layout
return[(e.x-.5*e.width+A.x)*p,(e.y-e.height*Ws.getDy(e)+A.y)*p]},g,i,f)}),t.chartRendered=!0,s=!0},b+1e3/60)})}),t}var e,n,r,a,i,o,l,s=!1,u=Ws.getSeriesIndex,c=Ws.getItemIndex,h=function(t){return ri(this).style("opacity",t.layout?$a:0),t.layout}
return t.commonRendererProp=function(n){return arguments.length?(e=n,t):e},t},qr.axis.threshold=function(t,e){function n(e,n,a,i,o,l,s){var u=(s&&s.underlay?t.svg:t.staticPaneSVG).selectAll("g.threshold"),c=t.svg.selectAll("g."+o+"-axis-"+a),h=null==c||c.empty()||""!=c.style("visibility")&&"visible"!=c.style("visibility")?"hidden":"visible",d=kt(u,"g",s.show&&"visible"==h?[n]:[],".","class","threshold"+l+"-"+o+"-axis-"+a)
if(null!=e&&n.show){var f=i&&null!=e.threshold&&null!=e.threshold[l]?e.threshold[l]:function(t,e,n,r){return t?(t.threshold||(t.threshold={}),t.threshold[r]=e.show?"line"==r?qr.axis.threshold.line():qr.axis.threshold.range():null,t.threshold[r]):null}(e,n,0,l)
f=function(e,n,a,i,o,l){var s
return r.axisObj=function(t){return arguments.length?(n=t,r):n},r.thresholdIndex=function(t){return arguments.length?(a=t,r):a},r.type=function(t){return arguments.length?(i=t,r):i},r.values=function(t){return arguments.length?(s=t,r):s},r.chartObj=function(e){return arguments.length?(t=e,r):t},r.thresholdIndex(a).type(i).values(l.values).chartObj(t),"line"==o&&r.axisObj(n),e.parentObj(r),e}(f,e,a,o,l,s),d.call(f)}}var r={},a=t.systemConf,i=a.chart.axes.xaxis,o=B(t.userdata,"chart.axes.xaxis")?t.userdata.chart.axes.xaxis:{}
null!=o.threshold&&null!=o.threshold.line&&n(t.axes.x,i.threshold.line,0,e,"x","line",o.threshold.line),null!=o.threshold&&null!=o.threshold.range&&n(t.axes.x,i.threshold.range,0,e,"x","range",o.threshold.range)
for(var l=a.chart.axes.yaxis,s=B(t.userdata,"chart.axes.yaxis")?t.userdata.chart.axes.yaxis:{},u=0;u<t.axes.y.count;u++)null!=s&&null!=s[u]&&null!=s[u].threshold&&null!=s[u].threshold.line&&n(t.axes.y.groups[u],l[u].threshold.line,u,e,"y","line",s[u].threshold.line),null!=s&&null!=s[u]&&null!=s[u].threshold&&null!=s[u].threshold.range&&n(t.axes.y.groups[u],l[u].threshold.range,u,e,"y","range",s[u].threshold.range)},qr.axis.threshold.textAlign=function(t,e,n,r,a,i){var o
return a=a||0,"left"==t?o=r?"x"==e?a:n.height-a:"left"==i||"bottom"==i?"x"==e?n.height-a:a:"x"==e?a:n.width-a:"center"==t?o=r?"left"===i||"bottom"===i?"x"==e?(n.width+a)/2:(n.height-a)/2:"x"==e?(n.width-a)/2:(n.height+a)/2:"left"==i||"bottom"==i?"x"==e?(n.height-a)/2:(n.width+a)/2:"x"==e?(n.height+a)/2:(n.width-a)/2:"right"==t&&(o=r?"x"==e?n.width:0:"left"==i||"bottom"==i?"x"==e?0:n.width:"x"==e?n.height:0),o},qr.axis.threshold.line=function(){function t(h){h.each(function(h){var d=ri(this)
t.update=function(){d.transition().call(t)},i=s.chartObj(),e=s.thresholdIndex(),l=s.type(),u=s.axisObj(),c=s.values(),r=i.plotarea
var f=u.scale,g=f.range();(g=g.slice(0,g.length)).sort(function(t,e){return t-e})
var y=null!=f.bandwidth?f.bandwidth()/2:0,v=h.label
v=Nr(v,B(i.userdata,"chart.axes."+l+"axis"+("x"===l?"":"."+e)+".threshold.line.label",!0))
var m=h.marker||{},b=Wl(m.enabled,!0)
o=i.axes.rotated
var w=[],C=[],k=[],S={x:2,y:2},O=(a=i.systemConf).chart.axes.xaxis.axisline,A=a.chart.axes.yaxis[e].axisline
X(O)&&O.show&&(S.x+=+O.strokeWidth-1),X(A)&&A.show&&(S.y+=+A.strokeWidth-1)
var _,T=0,M=[],E=[],L=[],z=[],D=[],j=[],I=[],H=[],N=i.dataset.getDataType(l,e),F=!1!==Vl(h.events,"enabled"),Y=i.dataset.getColumn(l,e),V=i.dataset.getColumnIdx(l,e)
N==co&&(_=Vl(Y,co)||null),c.map(function(t,e){var r=null!=t&&""!=t?N==co?bn(t,0,_).getTime():t:null
null!=t&&""!==t&&f(r)+y>=g[0]&&f(r)+y<=g[g.length-1]&&(w[T]=r,C[T]=p(Vl(h,"label.text["+e+"]")||"",c,Y,i),k[T]=(n(h.color)?h.color[e]:h.color)||"black",M[T]=X(h.label)?(n(h.label.hAlign)?h.label.hAlign[e]:h.label.hAlign)||"center":"center",L[T]=(n(h.strokeWidth)?h.strokeWidth[e]:h.strokeWidth)||1,E[T]=n(h.dashStyle)?h.dashStyle[e]:h.dashStyle,z[T]=X(h.marker)&&h.marker.enabled?(n(h.marker.strokeWidth)?h.marker.strokeWidth[e]:h.marker.strokeWidth)||2:null,j[T]=h.marker&&h.marker.enabled?(n(h.marker.size)?h.marker.size[e]:h.marker.size)||1:null,T++)})
var W=i.container.node().getBoundingClientRect(),U={left:W.left+r.left,top:W.top+r.top,width:r.width,height:r.height,right:W.left+r.left+r.width,bottom:W.top+r.top+r.height},G=U.left,q=U.top,Z=u.component.orient(),Q={top:0,left:0,right:0,bottom:0},K=i.cache.thresholdCustomPoints=Wl(i.cache.thresholdCustomPoints,[]),$=function(t,e){return Wl(Vl(t,"events.triggerOffset"),hn(e,e.chartTypes[0].value))}(h,i)
d.attr("transform","translate("+r.left+","+r.top+")")
var J=kt(d,"g",[h],".","class","thresline-"+e),tt=i.container.selectAll("g.plotareaBorder-property").node(),et=tt.border||tt["border-"+Z],nt=tt.border||tt["border-"+ge(Z)],rt=et&&et.clr!==Qa?et.size:0,at=nt&&nt.clr!==Qa?nt.size:0,it=rt+at,ot=kt(J,"path",null!=m&&b?w:[],".","class","marker")
ot.attr("d",function(t,e){return P(n(m.symbol)?m.symbol[e]:m.symbol)(10*j[e])}).style("stroke-width",function(t,e){return z[e]||2}).style("stroke",function(t,e){return(n(m.strokeColor)?m.strokeColor[e]:m.strokeColor)||k[e]}).attr("fill",function(t,e){var r=n(m.fillColor)?m.fillColor[e]:m.fillColor
return r||(null===r?k[e]:"white")}),ot.attr("transform",function(t,n){var a=z[n]/2,o=ri(this).node().getBBox()
D[n]=o.width+rt
var s="bottom"==Z||"top"==Z?f(t)+y:"left"==Z?a+rt+o.width/2:r.width-(a+rt+o.width/2),u="bottom"==Z?r.height-o.width/2-rt-a:"top"==Z?a+o.height/2+rt:f(t)+y
return F&&K.push({x:s-D[n]/2,y:u-D[n]/2,width:D[n],height:D[n],color:k[n],text:C[n],type:"threshold-marker",triggerOffset:$,size:j[n],marker:m,point:c[n],formattedValue:yn(Y[Y.datatype],c[n],Y.datatype,i,"threshold",!1),thresholdType:l,columnIndex:V,columnInfo:Y,yColumnIndex:e,itemIndex:n,events:h.events||{}}),"translate("+s+","+u+")"})
kt(J,"line",w).attr("x1",function(t,e){return"bottom"==Z||"top"==Z?f(t)+y:"left"==Z?(D[e]||0)+z[e]:at}).attr("y1",function(t,e){return"bottom"==Z?rt:"top"==Z?(D[e]||0)+z[e]:f(t)+y}).attr("x2",function(t,e){return"bottom"==Z||"top"==Z?f(t)+y:"left"==Z?r.width-at:r.width-z[e]-(D[e]||0)}).attr("y2",function(t,e){return"bottom"==Z?r.height-z[e]-(D[e]||0):"top"==Z?r.height-at:f(t)+y}).attr("stroke",function(t,e){return"    "+k[e]}).attr("stroke-width",function(t,e){return L[e]+"px"}).attr("shaperendering","crispedges").attr("stroke-dasharray",function(t,e){return x(E[e],L[e])})
kt(J,"text",null!=v?w:[]).text(function(t,e){return R(C[e])}).attr("x",function(t,e){var n=10*j[e]+S[l]+(z[e]||2)
return"x"==l&&!o||"y"==l&&o?-qr.axis.threshold.textAlign(M[e]||"right",l,r,o,n,Z):qr.axis.threshold.textAlign(M[e]||"right",l,r,o,n,Z)}).attr("y",function(t){return f(t)+y-5}).attr("transform","x"==l&&!o||"y"==l&&o?"rotate(-90)":"rotate(0)").styles({"font-family":function(t,e){return H[e]=(n(v.fontFamily)?v.fontFamily[e]:v.fontFamily)||a.chart.fontFamily||a.canvas.fontFamily||El.fontFamily,H[e]},"font-size":function(t,e){return I[e]=qr.utils.getVal((function(t){return!!(t&&t.constructor&&t.call&&t.apply)}(v.fontSize)||n(v.fontSize)?v.fontSize[e]:v.fontSize)||a.chart.fontSize||a.canvas.fontSize),I[e]+"px"},fill:function(t,e){return(n(v.fontColor)?v.fontColor[e]:v.fontColor)||a.chart.fontColor||a.canvas.fontColor||El.fontColor},"font-weight":function(t,e){return(n(v.fontWeight)?v.fontWeight[e]:v.fontWeight)||a.chart.fontWeight||a.canvas.fontWeight||El.fontWeight},"font-style":function(t,e){return(n(v.fontStyle)?v.fontStyle[e]:v.fontStyle)||a.chart.fontStyle||a.canvas.fontStyle||El.fontStyle},"text-Anchor":function(t,e){return"left"==Z||"bottom"==Z?"center"==M[e]?"middle":"right"==M[e]?"end":"start":"center"==M[e]?"middle":"right"==M[e]?"start":"end"}}).each(function(t,e){var n,a=R(C[e]),i=10*j[e],o=Ql.getTextWidth(a,I[e],H[e])+i,l="top"===Z||"bottom"===Z?r.height:r.width
o>l&&(n=Ra(o-l,i)+it,U.left=G+n,U.top=q+n,St(this,this.textContent,this.getBoundingClientRect(),U,Br(Z),"..",Q))})})}var e,r,a,i,o,l,s,u,c
return t.parentObj=function(e){return arguments.length?(s=e,t):s},t.getMetaInfo=function(t){return{itemIndex:t.itemIndex,point:t.point,data:Fl(i.systemConf.metadata.columns[t.columnIndex],{columnindex:t.columnIndex})}},t},qr.axis.threshold.range=function(){function t(t){t.each(function(t){var o=ri(this)
r=i.chartObj(),e=i.thresholdIndex(),a=i.type()
var l=r.systemConf,s=t.label
s=Nr(s,B(r.userdata,"chart.axes."+a+"axis"+("x"===a?"":"."+e)+".threshold.range.label",!0))
var u=[],c=[],h=[],d=[],f=[],g=[],y=[],v=[],m=[],w=[],C=[],k=[],S=r.container.node().getBoundingClientRect(),O=r.plotarea,A={left:S.left+O.left,top:S.top+O.top,width:O.width,height:O.height,right:S.left+O.left+O.width,bottom:S.top+O.top+O.height},_=r.axes[a].orient,P=i.axisObj().component.orient(),T={top:0,left:0,right:0,bottom:0},M=kt(o,"g",t.show?[t]:[],".","class","thresholdrangegroup-"+a),E=r.axes.rotated
if(t.show){var L,z=r.dataset.getDataType(a,e),D=r.dataset.getColumn(a,e)
z==co&&(L=null!=D.time?D.time:null)
var j=[],I=[],H={x:2,y:2},N=l.chart.axes.xaxis.axisline,F=l.chart.axes.yaxis[e].axisline
X(N)&&N.show&&(H.x+=+N.strokeWidth-1),X(F)&&F.show&&(H.y+=+F.strokeWidth-1)
var Y=E?r.axes.y.groups[e].scale:r.axes.x.scale,V=E?r.axes.x.scale:r.axes.y.groups[e].scale,U=r.dataObject.noofBarEnabledSeries,G=null!=Y.bandwidth&&U?Y.bandwidth():0,q=null!=V.bandwidth&&U?V.bandwidth():0,Z=null==Y.bandwidth||U?0:Y.bandwidth()/2,Q=null==V.bandwidth||U?0:V.bandwidth()/2,K=0,$=("x"==a&&!E||"y"==a&&E?Y:V).domain(),J=$.length-1
t.values.map(function(e,a){(I=null!=e&&""!=e?e.map(function(t){return z==co?bn(t,0,L).getTime():t}):null)&&!(I[0]>$[J]||I[1]<$[0])&&(I[0]=Da(I[0],$[0]),I[1]=Ra(I[1],$[J]),j[K]=I,u[K]=(n(t.fillColor)?t.fillColor[a]:t.fillColor)||"grey",c[K]=W(n(t.fillOpacity)?t.fillOpacity[a]:t.fillOpacity,"0.2"),h[K]=(n(t.strokeColor)?t.strokeColor[a]:t.strokeColor)||"black",d[K]=n(t.dashStyle)?t.dashStyle[a]:t.dashStyle,f[K]=n(t.lineCap)?t.lineCap[a]:t.lineCap,g[K]=(n(t.label.hAlign)?t.label.hAlign[a]:t.label.hAlign)||"center",y[K]=p(Vl(t,"label.text["+a+"]")||"",t.values,D,r),v[K]=n(s.fontColor)?s.fontColor[a]:s.fontColor,k[K]=n(s.fontStyle)?s.fontStyle[a]:s.fontStyle,w[K]=n(s.fontFamily)?s.fontFamily[a]:s.fontFamily,C[K]=n(s.fontWeight)?s.fontWeight[a]:s.fontWeight,m[K]=s.fontSize instanceof Function||n(s.fontSize)?s.fontSize[a]:s.fontSize,K++)})
var tt=kt(M,"g",j,".","class","rangebox-"+e)
tt.append("rect"),tt.append("text")
var et=tt.select("rect"),nt=tt.select("text")
et.attrs({x:function(t){return"x"==a&&!E||"y"==a&&E?Y(t[0])+Z+r.plotarea.left:r.plotarea.left+H[a]},y:function(t){return"x"==a&&!E||"y"==a&&E?r.plotarea.top:V(t[1])+Q+r.plotarea.top},width:function(t){return"x"==a&&!E||"y"==a&&E?Y(t[1])-Y(t[0])+G:r.plotarea.width-H[a]},height:function(t){return"x"==a&&!E||"y"==a&&E?r.plotarea.height-H[a]:V(t[0])-V(t[1])+q}}).styles({fill:function(t,e){return u[e]},"fill-opacity":function(t,e){return c[e]},stroke:function(t,e){return h[e]},"stroke-dasharray":function(t,e){return x(d[e])},"stroke-linecap":function(t,e){return b(f[e],d[e])}}),nt.attrs({transform:function(t,e){var n=et.nodes()[e].getBBox(),i=qr.axis.threshold.textAlign(g[e],a,r.plotarea,E,H[a],_)
return"x"==a&&!E||"y"==a&&E?"translate("+(n.x+n.width/2)+","+(i+r.plotarea.top)+") rotate(-90)":"translate("+(i+r.plotarea.left)+","+(n.y+n.height/2)+")"},dy:"0.3em"}).styles({"font-family":function(t,e){return w[e]||l.chart.fontFamily||l.canvas.fontFamily||El.fontFamily},"font-size":function(t,e){return qr.utils.getVal(m[e]||l.chart.fontSize||l.canvas.fontSize)+"px"},fill:function(t,e){return v[e]||l.chart.fontColor||l.canvas.fontColor||El.fontColor},"font-weight":function(t,e){return C[e]||l.chart.fontWeight||l.canvas.fontWeight||El.fontWeight},"font-style":function(t,e){return k[e]||l.chart.fontStyle||l.canvas.fontStyle||El.fontStyle},"text-Anchor":function(t,e){return"center"==g[e]?"middle":"right"==g[e]?"end":"start"}}).text(function(t,e){return R(y[e])}).each(function(){St(this,this.textContent,this.getBoundingClientRect(),A,Br(P),"..",T)})}})}var e,r,a,i
return t.parentObj=function(e){return arguments.length?(i=e,t):i},t},qr.axis.threshold.overlay=function(t,e,n){var r=t.dataObject.getAxisRotated()
if("discrete"==e){var a=n.values.slice(0),i=n.overlayRange,o=n.defaultColor
return a.sort("below"==i||"equalandbelow"==i?_i:Pi),function(t,e,r,l){if(null==n.values||0==n.length)return l
for(var s=0;s<a.length;s++){var u,c=a[s]
switch(i){case"equal":u=r===c
break
case"equalandbelow":u=c>=r
break
case"equalandabove":u=r>=c
break
case"below":u=c>r
break
default:u=r>c}if(u){var h=n.values.indexOf(c)
return null==e||null==e[h]?o?l:"black":e[h]}}return l}}return"continous"==e?function(e,n,a,i){var o="x"==i?t.axes.x.scale:t.axes.y.groups[0].scale,l=a,s=n.values
if(null==s||0==s.length)return e
var u=s.slice(),c=n.color,h=n.overlayRange,d=n.defaultColor
h&&(h=h.replace("equaland",""))
var f,p=t.dataset.getDataType(i,a)
if("time"==p){var g=t.dataset.getColumn(i,a)
f=null!=g.time?g.time:null}(u=u.map(function(t){return"time"==p?bn(t,0,f).getTime():t})).sort("x"==i&&!r||"y"==i&&r?function(t,e){return e>t?-1:t>e?1:0}:function(t,e){return t>e?-1:e>t?1:0})
var y=o.domain().length,v="x"==i&&!r||"y"==i&&r?o(o.domain()[y-1])-o(o.domain()[0]):o(o.domain()[0])-o(o.domain()[y-1]),m=[]
m.push(0)
for(var x=0;x<u.length;x++){var b=(o(u[x])+(null!=o.bandwidth?o.bandwidth()/2:0))/v*100
100>b&&(m.push(b),m.push(b))}m.push(100)
var w=[];("y"==i&&"below"==h&&!r||"x"==i&&"above"==h&&!r||"y"==i&&"above"==h&&r||"x"==i&&"below"==h&&r)&&w.push(e)
for(x=0;x<u.length;x++){a=s.indexOf(u[x])
w.push(null==c||null==c[a]?d?e:"black":c[a])}("y"==i&&"above"==h&&!r||"x"==i&&"below"==h&&!r||"y"==i&&"below"==h&&r||"x"==i&&"above"==h&&r)&&w.push(e)
var C=[]
for(x=0;x<m.length;x++){var S={}
S.offset=m[x]+"%",S.color=x%2==0?w[x/2]:w[(x-1)/2],C.push(S)}var O={}
O.type="thresholdLinear",O.options={}
var A=O.options,_=r?t.axes.y.groups[0].scale:t.axes.x.scale,P=r?t.axes.x.scale:t.axes.y.groups[0].scale,T="x"==i&&!r||"y"==i&&r
A.x1=T?_(_.domain()[0]):0,A.x2=T?_(_.domain()[y-1]):0,A.y1=T?0:P(P.domain()[y-1]),A.y2=T?0:P(P.domain()[0]),A.values=u,A.color=w,A.seriesclr=e,A.overlayRange=h
var M=(T?_:P).domain()
A.scale=M[0]+"_"+M[1]
var E=t.plot.renderer.mode,L=t.chartTypes[l].name,z=t.systemConf.chart.plot.plotoptions[L],D="line"===L?z.strokeOpacity:z.fillOpacity,R=[A.x1,A.x2,A.y1,A.y2],j=k(O,R,w,D),I={offset:L,chartObj:t,offset:C,dimension:R,color:w},H="svg"==E?Dl.get(Il,"svgGradientFill",j,I):Dl.get(Ls,"canvasGradientFill",j,I)
return"svg"==E?"url("+t.defsLocation+"#"+H+")":H}:void 0},qr.annotation=function(){},qr.annotation.draw=function(t,e){"use strict"
var n=t.systemConf.notes
if(X(n)&&!0===n.enabled){var r=t.dataObject.isPolarAxisCategory
if(Wl(n.chartValues,[]).forEach(function(e){qr.annotation.addNotes(t,{coordinate:[e.x,e.y],conf:e})}),t.isAxisCategory||r||t.isGeoMap)for(var a=0,i=t.seriesdata.length;i>a;a++){var o=t.renderer[a]
"image"===t.plot.renderer.mode&&ba.setRendererProp(t,o,t.seriesdata,a,a,{image:!0})
var l,s,u=t.rendererConf[a].params,c=u.xscale,h=u.yscale,d=u.stacked,f=u.datasetIndex,p=u.axisrotated,g=u.yaxiscolumnorder,y=t.chartTypes[f].value
if(t.isGeoMap||(s=t.dataset.getDataType("x")==uo?c.domain():t.dataObject.getCategories("x")),Xe(y)){var v=Re(t.rendererConf[f],f)
l=function(e,n,r){return[t.dataObject.getTransRectValue("x",e,n,r,v),t.dataObject.getTransRectValue("y",e,n,r,v)]}}else l=function(e){var n=r?[t.plotarea_approx.x,t.plotarea_approx.y]:[0,0]
return[t.dataObject.getXYvalue(p,d,c,h,g,e,"x")+n[0],t.dataObject.getXYvalue(p,d,c,h,g,e,"y")+n[1]]}
e=qr.annotation.preprocessAnnotations(t.seriesdata,f,l,e,t,u,s)}e.forEach(function(e){qr.annotation.addNotes(t,e)})}return e=[]},qr.annotation.addNotes=function(t,e){var n,a,i,o,l=t.systemConf.notes,s=t.plotarea,u=t.canvasarea,c=u.width,h=u.height,d=e.coordinate,f=e.basedOn||"chart",p=e.data,g=e.conf||{},y=e.disabled,v=Wl(g.type,l.type,"stickyNote"),m="block"===f||"plot"===f?s:u,x=g.overflow||l.overflow||"scroll"
"block"===f&&(i="scroll"===x?"auto":"hidden",n=qt(l.maxWidth||"100%",m.width)),"block"===f&&(o="scroll"===x?"auto":"hidden",a=qt(l.maxHeight||"10%",m.height))
var b="plot"==f?r(p):"block"==f?L(g,""):r(d)
b="plot"!=f&&null!=g.id?g.id:f+b.replace(/[`~!@#$%^&*( )_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,""),g.id=b
var w=kt(t.notes,"div",[1],"#","id",f)
w.styles({width:"0",height:"0"})
var C=kt(w,"div",[e],"#","id",b)
C.styles({display:y?Za:null,position:"absolute",left:"0",top:"0","overflow-x":i,"overflow-y":o,"max-width":X(n)?n+qa:$a,"max-height":X(a)?a+qa:$a})
var k=qr.annotation["stickyNote"===v?"stickyNote":"customNote"](),S=Fl(l.options[v],e.conf||{},!0)
if(k.chartObj(t).conf(S),Pt(C,[S,t.systemConf.canvas,El],!0),C.call(k),!y){var O=C.node(),A="stickyNote"===v?Da(parseFloat(C.selectAll(".head").style("width")),parseFloat(C.selectAll(".body").style("width"))):0,_="stickyNote"===v?parseFloat(C.selectAll(".head").style("height"))+parseFloat(C.selectAll(".body").style("height")):0
d=d.map(function(e,n){var r="plot"===f?e+t.plotarea[0==n?Fo:Wo]:Y(e,t,r,O)
return isNaN(+r)?qt(e,0==n?c:h,0):r})
d=Y("plot"===f||"block"===f?g.transform:null,t,g,O,d)||d,k.coordinate(d),d=Vr(d[0],d[1],A,_,c,h),C.styles({left:d[0]+qa,top:d[1]+qa})
var P="plot"==f?p:b
return-1==Wr(l,P,f)&&Yr(l,P,"",e.coordinate,f),C}},qr.annotation.preprocessAnnotations=function(t,e,n,a,i,o,l){function s(t,e,n,r){a.push({coordinate:t,data:e,conf:n,disabled:r,basedOn:"plot"})}if(!i.destroying){var u=i.systemConf.notes
if(!X(u)||!1===u.enabled)return a
var c=u.plotValues,h=i.isAxisCategory,d=i.isNonAxisMultiSeriesCategory,f=i.dataset,p=o.stacked,g=i.plotarea,y=o.yaxiscolumnorder,v=t[e],m=Ul.pointInRectangle,x=i.dataObject.isHierarchy?v:v.data,b=(h||d)&&t.length>1?v.seriesname:null,w=i.chartTypes[e].name,C=i.dataObject.seriesNames||(i.dataObject.seriesNames=i.seriesdata.map(function(t){return t.seriesname}))
return(h&&t.length>1?c.filter(function(t){var e=t.data[t.data.length-1]
return b==e||-1==C.indexOf(e)}):c).forEach(function(e){for(var a=!1,o=e.data,u=0,c=h?x.length:1;c>u&&!a;u++)for(var k=0,S=x[u].length;S>k&&!a;k++){var O=Fr(A=x[u][k],b)
if(r(O)==r(o)){a=!0
s(_=n(A,u,k),O,e,!(!h||m(_,g))||(h||d?v.disabled:A.disabled)||!ae(f.getClr(A),i))}}if(h&&!a&&("bar"!==w||-1!=l.indexOf(f.getX(o)))){a=!0
var A=Fr(o)
p&&(A.y=f.getY(o,y),A.y0=0)
var _
s(_=n(A,0,k),A,e,!(!h||m(_,g))||!(h&&t.length>1&&-1==C.indexOf(o[o.length-1]))&&v.disabled)}if(!a&&"sunburst"===w){var P=[b,v.value]
r(P)===r(o)&&s(n(v),P,e,v.disabled)}}),a}},qr.annotation.addBlockAnnotations=function(t){var e=t.systemConf.notes
if(X(e)&&!1!==e.enabled){qr.setDefaultOptions("notes",t.systemConf,t.globalProp)
var n,r,a=(e=t.systemConf.notes).blockValues,i=t.plotarea,o=qt(e.maxWidth||"100%",i.width),l=qt(e.maxHeight||"10%",i.height),s=i.width,u=i.height,c=i.left,h=i.top,d=i.bottom
a.forEach(function(a){var f=a.hAlign,p=a.vAlign,g=a.overflow||e.overflow||"scroll",y=f===Yo,v=f===Fo,m=p===Wo,x=p===Vo
if(!(r&&m||n&&x)){var b=function(t,e,n){var r=n.getBoundingClientRect(),a=y?c+s:v?c:c+s/2,i=y?r.width:v?0:r.width/2
return Da(a-i,0)},w=function(t,e,n){var r=n.getBoundingClientRect()
return(m?h:h+u)-(m?0:r.height)},C=qr.annotation.addNotes(t,{coordinate:[b,w],conf:a,basedOn:"block"}),k=C.node(),S=k.getBoundingClientRect(),O=S.height
S.width,"fire"===g&&(k.scrollHeight>l||k.scrollWidth>o)?C.remove():(i.height=u-O,m?i.top=h+O:x&&(i.bottom=d+O)),r=r||m,n=n||x}})}},qr.annotation.stickyNote=function(){function t(t){t.each(function(t){var a=ri(this),i=e.systemConf.notes,o=e.canvasarea.width,l=e.canvasarea.height,s=e.notes,u=t.basedOn||"chart",c=(t.data,t.coordinate),h="string"==typeof c[0]&&c[0].indexOf("%")>-1,d="string"==typeof c[1]&&c[1].indexOf("%")>-1,f=n.text,p=s.selectAll(".head").size(),g=n.color,y="open"===n.mode,v=W(n.bodyWidth,100),m=W(n.bodyHeight,100),x=W(n.headWidth,15),b=W(n.headHeight,15),w=y?0:1
g=g instanceof Array?g[p%g.length]:g,Si().on("drag",function(){if(!d3.event.defaultPrevented){var t=ri(this.parentNode),e=parseFloat(t.style("left"))+d3.event.x,n=parseFloat(t.style("top"))+d3.event.y,a=Da(w%2!=0?0:v,x),s=(w%2!=0?0:m)+b
e=e>o-a?o-a:0>e?0:e,n=n>l-s?l-s:0>n?0:n,r[0]=e,r[1]=n
var c=e+qa,f=n+qa
if(t.styles({left:c,top:f}),"plot"!=u){var p=t.attr("id"),g=Wr(i,p,u);-1!=g&&(i.chartValues[g].x=h?e/o*100+"%":e,i.chartValues[g].y=d?n/l*100+"%":n)}}}),a.attr("class","group").styles({width:0,height:0,"z-index":2})
var C=kt(s,"textarea",[1])
C.styles({width:v+qa,height:m+qa,position:"absolute","border-color":Qa,"border-radius":(n.bodyBorderRadius||0)+qa,"background-color":Qa,overflow:"hidden",display:Za,resize:Za,"z-index":2,outline:Za}).on("blur",function(){var t=C.attr("eleID")
if(C.style("display",Za),null!=t){var e=ri("#"+t)
e.selectAll(".body").style("color",null),e.style("z-index",2)}}).on("input",function(){var t=ri(this)
if(t.style("display")!==Za){var e=ri("#"+t.attr("eleID")),n=e.selectAll(".body"),r=e.attr("id"),a=C.node().value,o=e.datum(),l=o.basedOn||"chart",s=o.data
n.text(a)
var u="plot"==l?s:r,h=Wr(i,u,l);-1==h?Yr(i,u,a,c,l):i[l+"Values"][h].text=a}}).text(f)
var k=kt(a,"div",[1],".","class","head")
k.attr("customColor")||k.style("background-color",g).attr("customColor",g),k.styles({width:x+qa,height:b+qa,border:n.border,"border-radius":(n.headBorderRadius||0)+qa,"z-index":"auto"})
fn(k,{click:A=function(){if(!d3.event.defaultPrevented){var t=w%2==0,e=ri(this.nextSibling),n=ri(this.parentNode)
if(C.on("blur")(),t)n.transition().delay(250).duration(0).styles({left:r[0]+qa,top:r[1]+qa})
else{var a=Vr(parseFloat(n.style("left")),parseFloat(n.style("top")),v,b+m,o,l)
n.styles({left:a[0]+qa,top:a[1]+qa})}e.style("color",null).transition().ease(ui).styles({width:t?0+qa:v+qa,height:t?0+qa:m+qa,display:t?null:"block"}),e.transition().delay(250).style("display",t?Za:null),s.selectAll(".group").style("z-index",1),n.style("z-index",2),w++}}},{tap:A})
var S=a.selectAll("div.body").empty()?{"background-color":g}:{},O=kt(a,"div",[1],".","class","body")
O.styles({width:y?v+qa:"0",height:y?m+qa:"0",display:y?null:Za,border:n.border,overflow:"hidden","box-shadow":n.shadow,"border-radius":(n.bodyBorderRadius||0)+qa,"z-index":"auto"}).styles(S).text(f)
var A
fn(O,{click:A=function(){var t=ri(this),e=ri(this.parentNode)
C.on("blur")(),C.styles({display:null,left:e.style("left"),top:parseFloat(e.style("top"))+b+qa,color:e.style("color"),"font-size":e.style("font-size"),"font-family":e.style("font-family"),"font-weight":e.style("font-weight"),"font-style":e.style("font-style")}).attr("eleID",e.attr("id")),C.node().value=t.text(),C.node().focus(),t.style("color",Qa),s.selectAll(".group").style("z-index",1),e.style("z-index",2),C.style("z-index",3)}},{tap:A})})}var e,n,r
return t.chartObj=function(n){return arguments.length?(e=n,t):e},t.conf=function(e){return arguments.length?(n=e,t):n},t.coordinate=function(e){return arguments.length?(r=e,t):r},t},qr.annotation.customNote=function(){function t(t){t.each(function(t){ri(this).html(Y(e.htmlEl,r,t.conf))})}var e,n,r
return t.coordinate=function(e){return arguments.length?(n=e,t):n},t.conf=function(n){return arguments.length?(e=n,t):e},t.chartObj=function(e){return arguments.length?(r=e,t):r},t},qr.events.zoom=function(t,e,n){"use strict"
function r(e,r,a,i){n.chart.axes[e+"axis"].disableBaseValue=!0
var o=y[e]={}
i==uo?o.categories=a:(o.minRange=a[0],o.maxRange=a[1]),t.updateScale(g[r],e,a)}function a(e,n){return e=Y(e,t,h),e=null!=e?e:n}function i(t){return{x:Ra(Da(t[0]-v.left,0),v.width),y:Ra(Da(t[1]-v.top,0),v.height)}}var o,l,s,u,c,h,d=!1,f={},p=t.svg,g=n.seriesdata.chartdata,y=n.chart.zoom,v=t.plotarea,m=y.selectionArea,w=y.resetButton,C=w.border,k=w.shadow,S=w.label,O=y.type,A=C.show,_=A?C.radius:0,P=null
k.show&&(P=Dl.get(Hl,"dropShadow",k,{chartObj:t}),P=P?"url("+t.defsLocation+"#"+P+")":null)
var T=y.events||{}
return f.zmInit=function(e){v=t.plotarea,(s=kt(p.selectAll(".seriesholder"),"rect",[1],".","class","zmarea")).styles({fill:m.fillColor||"grey","fill-opacity":m.fillOpacity})
var r=kt(t.staticPaneSVG.select(".eventgroup"),"rect",[1],".","class","zmbtn"),i=x(C.style,C.size)
r.attrs({rx:_,ry:_,filter:P}).styles({fill:w.fillColor,"fill-opacity":w.fillOpacity,stroke:C.color,"stroke-width":A?C.size:0,"stroke-dasharray":i,"stroke-linecap":b(C.lineCap,i),cursor:Ka})
fn(r,{click:f.reset},{tap:f.reset})
var o=kt(t.staticPaneSVG.select(".eventgroup"),"text",[1],".","class","zmbtn")
o.attr("dy","0.9em").style("pointer-events",Za).text(S.text),Pt(o,[S,n.chart,n.canvas,{fontColor:"white",fontSize:11},El])
var l=o.node().getBBox()
r.attrs({width:l.width+S.marginLeft+S.marginRight,height:l.height+S.marginTop+S.marginBottom}),h=r.node().getBBox(),u=a(w.x,v.left+v.width-h.width),c=a(w.y,10),r.attrs({x:u,y:c}),o.attrs({x:u+S.marginLeft,y:c+S.marginTop}),e||(s.style("visibility","hidden"),r.style("visibility","hidden"),o.style("visibility","hidden"))},f.zoomInitialized=!1,f.zmStart=function(n){O=y.type,d=!0,o=i(n)
var r={}
s.style("visibility","visible")
var a=O.indexOf("x")>-1&&!e||O.indexOf("y")>-1&&e,l=O.indexOf("y")>-1&&!e||O.indexOf("x")>-1&&e
a?r.x=o.x:r.width=v.width,l?r.y=o.y:r.height=v.height,s.attrs(r),f.zoomInitialized=!0,Y(!0,T.zoomstart,o,{x:y.x,y:y.y},t)},f.zmMove=function(n){if(O=y.type,d){var r=i(n),a={},u=O.indexOf("x")>-1&&!e||O.indexOf("y")>-1&&e,c=O.indexOf("y")>-1&&!e||O.indexOf("x")>-1&&e
Xr(d3.event)&&(o=i(Ur(t.eventHandler.trackerElement.node(),0)),r=i(Ur(t.eventHandler.trackerElement.node(),1))),l=r,u&&(a.x=(r.x<o.x?r:o).x,a.width=ja(r.x-o.x)),c&&(a.y=(r.y<o.y?r:o).y,a.height=ja(r.y-o.y)),s.attrs(a)}Y(!0,T.zoom,r,{x:y.x,y:y.y},t)},f.zmEnd=function(t){return!!f.zoomInitialized&&(Xr(d3.event)||(l=i(t)),s.attrs({height:0,width:0}).style("visibility","hidden"),d=!1,f.zoomInitialized=!1,{startPt:o,endPt:l})},f.zoomed=function(a,i,o,s){O=y.type
var u=null!=i,c=e?"y":"x",h=e?"x":"y",d=O.indexOf("x")>-1&&(u||ja(a.startPt[c]-a.endPt[c])>2),p=O.indexOf("y")>-1&&(u||ja(a.startPt[h]-a.endPt[h])>2)
if(O.indexOf("x")>-1&&(u?o[0]!=o[1]:a.startPt[c]!=a.endPt[c])||O.indexOf("y")>-1&&(u?s[0]!=s[1]:a.startPt[h]!=a.endPt[h])){if(Ye(t,n.chart.axes.events,0,"init"),d){var g=t.dataset.getDataType("x")
if(!u){var v=t.axes.x.scale,m=n.chart.axes.xaxis.reversed,x=qr.scale.invert(g,a.startPt,v,e,"x",m),b=qr.scale.invert(g,a.endPt,v,e,"x",m)
if(x>b){var w=x
x=b,b=w}o=g==uo?v.domain().slice(x,b+1,0):[x,b]}r("x",u?i:0,o,g)}if(p)for(var C=u?i:0,k=u?i+1:t.axes.y.groups.length;k>C;C++){g=t.dataset.getDataType("y",C)
if(!u){var S=t.axes.y.groups[C].scale,A=(m=n.chart.axes.yaxis[C].reversed,qr.scale.invert(g,a.startPt,S,e,"y",m)),_=qr.scale.invert(g,a.endPt,S,e,"y",m)
A>_&&(A=A+_-(_=A)),s=g==uo?S.domain().slice(A,_+1,0):[A,_]}r("y",C,s,g)}Ye(t,n.chart.axes.events,0,"onreload"),t.updatePlotareaProp(),t.plot.renderer.draw(!0),t.eventHandler.updateParams(t),f.clipMarker||(t.drawPlotareaClippath(),f.clipMarker=!0),t.drawThreshold(!0),t.staticPaneSVG.selectAll(".zmbtn").style("visibility","visible"),Y(!0,T.zoomend,l,{x:y.x,y:y.y},t)}},f.reset=function(){if(delete y.x,delete y.y,Ye(t,n.chart.axes.events,0,"init"),(O=y.type).indexOf("x")>-1&&(n.chart.axes.xaxis.disableBaseValue=!1,t.updateScale(g[0],"x",null)),O.indexOf("y")>-1)for(var e=0;e<t.axes.y.groups.length;e++)n.chart.axes.yaxis.disableBaseValue=!1,t.updateScale(g[e],"y",null)
Ye(t,n.chart.axes.events,0,"onreload"),t.updatePlotareaProp(),t.plot.renderer.draw(!0),t.eventHandler.updateParams(t),t.drawThreshold(!0)
var r=setInterval(function(){t.chartRendered&&(t.drawPlotareaClippath(),f.clipMarker=!1,clearInterval(r))},10)
t.staticPaneSVG.selectAll(".zmbtn").style("visibility","hidden"),Y(T.reset,t)},f}
var Us=function(){var t=navigator.userAgent,n={}
if(t.indexOf("OPR")>0){n.name="Opera",n.jsPrefix="webkit",n.cssPrefix="-webkit-"
var r=t.indexOf("OPR/")
n.version=e(t.substr(r+4))}else if(t.indexOf("Chrome")>0){n.name="Chrome",n.jsPrefix="webkit",n.cssPrefix="-webkit-"
r=t.indexOf("Chrome/")
n.version=e(t.substr(r+7))}else if(t.indexOf("Safari")>0){n.name="Safari",n.jsPrefix="webkit",n.cssPrefix="-webkit-"
r=t.indexOf("Version/")
n.version=e(t.substr(r+8))}else if(t.indexOf("Firefox")>0){n.name="Firefox",n.jsPrefix="Moz",n.cssPrefix="-moz-"
r=t.indexOf("Firefox/")
n.version=e(t.substr(r+8))}else if(t.indexOf("MSIE")>0){n.name="Internet Explorer",n.jsPrefix="ms",n.cssPrefix="-ms-"
r=t.indexOf("MSIE")
n.version=e(t.substr(r+5))}else n=void 0
return n},Xs=function(t,e){var n=getComputedStyle(t),r=Us()
for(var a in e)if(e.hasOwnProperty(a))if(a in n)t.style[a]=e[a]
else if(void 0!=r){var i=r.jsPrefix+a.charAt(0).toUpperCase()+a.slice(1)
t.style[i]=e[a]}},Gs=function(t,e){var n={type:"zBars",scale:1,duration:1.2},r=document.getElementById("ZCloader")
Gs.style||((r=document.createElement("style")).setAttribute("id","ZCloader"),document.head.appendChild(r),Gs.style=!0)
for(var a in e)e.hasOwnProperty(a)&&(n[a]=e[a])
var i=n.colors||["rgb(204, 32, 50)","rgb(24, 153, 74)","rgb(1, 115, 178)","rgb(253, 208, 25)"],o=i[0%i.length],l=i[1%i.length],s=i[2%i.length],u=i[3%i.length],c=Us(),h=""
if(void 0===c?(c={},c.cssPrefix=""):"Internet Explorer"===c.name&&c.version<10&&(n.type="wheel"),!t.loader){var d=document.createElement("div")
if("zBlocks"==n.type){if(!Gs.zBlocks){h="\n@"+c.cssPrefix+"keyframes "+n.type+" {"
h+="0% { left:0px; top:0px; "+c.cssPrefix+"transform:rotate(0deg) scale(1)}",h+="25% { left:40px; top:0px; "+c.cssPrefix+"transform:rotate(90deg) scale(0.5)}",h+="50% { left:40px; top:40px; "+c.cssPrefix+"transform:rotate(180deg) scale(1.0)}",h+="75% { left:0px; top:40px; "+c.cssPrefix+"transform:rotate(270deg) scale(0.5)}",h+="100% { left:0px; top:0px; "+c.cssPrefix+"transform:rotate(360deg)scale(1)} }\n",r.innerHTML+=h,Gs.zBlocks=!0}Xs(d,{display:"inline-block",verticalAlign:"middle",width:"70px",height:"70px",transform:"scale("+n.scale+")"})
var f=document.createElement("div")
f.innerHTML="&nbsp",d.appendChild(f),Xs(f,{backgroundColor:o,width:"30px",height:"30px",borderRadius:"1px",position:"absolute",top:"0",left:"0",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out"})
var p=document.createElement("div")
p.innerHTML="&nbsp",d.appendChild(p),Xs(p,{backgroundColor:l,width:"30px",height:"30px",borderRadius:"1px",position:"absolute",top:"0",left:"0",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDelay:"-"+n.duration/4*1+"s"})
var g=document.createElement("div")
g.innerHTML="&nbsp",d.appendChild(g),Xs(g,{backgroundColor:s,width:"30px",height:"30px",borderRadius:"1px",position:"absolute",top:"0",left:"0",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDelay:"-"+n.duration/4*2+"s"})
var y=document.createElement("div")
y.innerHTML="&nbsp",d.appendChild(y),Xs(y,{backgroundColor:u,width:"30px",height:"30px",borderRadius:"1px",position:"absolute",top:"0",left:"0",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDelay:"-"+n.duration/4*3+"s"}),t.loader=!0}else if("zCircle1"==n.type){if(!Gs.zCircle1){h="\n@"+c.cssPrefix+"keyframes "+n.type+" { "
h+="0% ,25%, 50%, 75%, 100%{ "+c.cssPrefix+"transform: scale(0.0);  } ",h+="12.5%  { "+c.cssPrefix+"transform: scale(1.0); background-color: "+o+";}",h+="37.5%  { "+c.cssPrefix+"transform: scale(1.0); background-color: "+l+";}",h+="62.5%  { "+c.cssPrefix+"transform: scale(1.0); background-color: "+s+";}",h+="87.5%  { "+c.cssPrefix+"transform: scale(1.0); background-color: "+u+";} }\n",r.innerHTML+=h,Gs.zCircle1=!0}Xs(d,{display:"inline-block",verticalAlign:"middle",width:"70px",height:"70px",transform:"scale("+n.scale+")"})
var v=document.createElement("div")
v.innerHTML="&nbsp",d.appendChild(v),Xs(v,{width:"100%",height:"100%",borderRadius:"50%",opacity:"0.6",position:"absolute",top:"0",left:"0",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out"}),t.loader=!0}else if("zBars"==n.type){if(!Gs.zBars){h="\n@"+c.cssPrefix+"keyframes "+n.type+" { "
h+="0%, 40%, 100% { "+c.cssPrefix+"transform: scaleY(0.4) }",h+="20% { "+c.cssPrefix+"transform: scaleY(1.0) } }\n",r.innerHTML+=h,Gs.zBars=!0}Xs(d,{display:"inline-block",verticalAlign:"middle",width:"50px",height:"30px",textAlign:"center",fontSize:"10px",transform:"scale("+n.scale+")"});(C=document.createElement("div")).innerHTML="&nbsp",d.appendChild(C),Xs(C,{backgroundColor:o,marginLeft:"1px",display:"inline-block",width:"6px",height:"100%",borderRadius:"1px",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out"});(k=document.createElement("div")).innerHTML="&nbsp",d.appendChild(k),Xs(k,{backgroundColor:l,marginLeft:"1px",display:"inline-block",width:"6px",height:"100%",borderRadius:"1px",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDelay:"-"+(n.duration-.1)+"s"});(S=document.createElement("div")).innerHTML="&nbsp",d.appendChild(S),Xs(S,{backgroundColor:s,marginLeft:"1px",display:"inline-block",width:"6px",height:"100%",borderRadius:"1px",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDelay:"-"+(n.duration-.2)+"s"});(O=document.createElement("div")).innerHTML="&nbsp",d.appendChild(O),Xs(O,{backgroundColor:u,marginLeft:"1px",display:"inline-block",width:"6px",height:"100%",borderRadius:"1px",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDelay:"-"+(n.duration-.3)+"s"}),t.loader=!0}else if("zCircle2"==n.type){if(!Gs.zCircle2){h="\n@"+c.cssPrefix+"keyframes "+n.type+" { "
h+="0%, 80%, 100% { "+c.cssPrefix+"transform: scale(0.0) }",h+="40% { "+c.cssPrefix+"transform: scale(1.0) } }\n",r.innerHTML+=h,Gs.zCircle2=!0}Xs(d,{display:"inline-block",verticalAlign:"middle",width:"72px",height:"18px",textAlign:"center",fontSize:"10px",transform:"scale("+n.scale+")"})
var m=document.createElement("div")
m.innerHTML="&nbsp",d.appendChild(m),Xs(m,{backgroundColor:o,display:"inline-block",width:"18px",height:"18px",borderRadius:"100%",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out"})
var x=document.createElement("div")
x.innerHTML="&nbsp",d.appendChild(x),Xs(x,{backgroundColor:l,display:"inline-block",width:"18px",height:"18px",borderRadius:"100%",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDelay:"-"+(n.duration-.2)+"s"})
var b=document.createElement("div")
b.innerHTML="&nbsp",d.appendChild(b),Xs(b,{backgroundColor:s,display:"inline-block",width:"18px",height:"18px",borderRadius:"100%",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDelay:"-"+(n.duration-.4)+"s"})
var w=document.createElement("div")
w.innerHTML="&nbsp",d.appendChild(w),Xs(w,{backgroundColor:u,display:"inline-block",width:"18px",height:"18px",borderRadius:"100%",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"ease-in-out",animationDelay:"-"+(n.duration-.6)+"s"}),t.loader=!0}else if("zCrossBars"==n.type){if(!Gs.zCrossBars){h="\n@"+c.cssPrefix+"keyframes "+n.type+" { "
h+="0%{left:-50%;}",h+="100%{left: 150%;} }\n",r.innerHTML+=h,Gs.zCrossBars=!0}Xs(d,{display:"inline-block",position:"relative",verticalAlign:"middle",width:"70px",height:"30px",boxSizing:"border-box",borderWidth:"2px",borderStyle:"solid",borderColor:"rgb(160, 150, 150)",borderRadius:"8px",overflow:"hidden",transform:"scale("+n.scale+")"})
var C;(C=document.createElement("div")).innerHTML="&nbsp",d.appendChild(C),Xs(C,{backgroundColor:o,width:"10px",height:"100%",position:"absolute",transform:"rotate(45deg) scaleY(2)",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDelay:"-"+n.duration+"s"})
var k;(k=document.createElement("div")).innerHTML="&nbsp",d.appendChild(k),Xs(k,{backgroundColor:l,width:"10px",height:"100%",position:"absolute",transform:"rotate(45deg) scaleY(2)",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDelay:"-"+n.duration/100*80+"s"})
var S;(S=document.createElement("div")).innerHTML="&nbsp",d.appendChild(S),Xs(S,{backgroundColor:s,width:"10px",height:"100%",position:"absolute",transform:"rotate(45deg) scaleY(2)",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDelay:"-"+n.duration/100*60+"s"})
var O;(O=document.createElement("div")).innerHTML="&nbsp",d.appendChild(O),Xs(O,{backgroundColor:u,width:"10px",height:"100%",position:"absolute",transform:"rotate(45deg) scaleY(2)",animationName:n.type,animationDuration:n.duration+"s",animationIterationCount:"infinite",animationTimingFunction:"linear",animationDelay:"-"+n.duration/100*40+"s"}),t.loader=!0}else Xs(d,{display:"inline-block",verticalAlign:"middle",width:"30px",height:"30px",position:"absolute",backgroundImage:"url('"+qr.imageFilePath+"loader_"+n.type+".gif')",backgroundSize:"30px 30px",backgroundRepeat:"no-repeat",backgroundPosition:"center"})
return d}}
it(Gr,In),zn.SeriesTypes.set("geoheatmap",Gr),Gr.prototype.render=function(t){var e=this,n=e.geoMap,r=n.dataObject.getUserMapFeatures(),a=e.plotOptions,i=a.gradients,o=n.systemConf.map,l=ki(["radial","linear"]).has(i.type)
e.features=[],e.seriesdataAfterUpdate=e.series.data,e.series.disabled||rt(e.series.data,function(t){rt(t,function(t,n){var s=e.geoMap.dataset.getGeo(t)
if(r.has(s)){var u=r.get(s),c=null
if(l){var h=Ps.getFeatureGradientBBox(u,i.type,e.geoMap.geo.utils.geoPath)
c=[h.width,h.height],u.transform={x:h.x,y:h.y}}u.styles={fillColor:e.fillColor(e.index,t,null,null,e.plotOptions.fillOpacity,c),strokeColor:e.strokeColor(e.index,t,Wl(a.strokeColor,o.strokeColor),null,a.strokeOpacity,n),strokeWidth:a.strokeWidth,strokeStyle:a.strokeStyle,fillOpacity:Wl(a.fillOpacity,1),strokeOpacity:Wl(a.strokeOpacity,1)},e.features.push(u)}})}),t?e.mapLayer.update(e.features):e.mapLayer=e.geoMap.addLayer(e.features,null,"series-"+e.index,"feature",o.useMeshOutline)},qr.getFormattedValue=yn,qr.generateFormatSpecifier=mn,qr.appendElement=kt,qr.tempCanvasContext=Pa,qr.getRawColor=ie,qr.setGlobalPatternSVG=function(t){El.patternSVG=t},t.$ZC=typeof t.$ZC===qr?t.$ZC:qr}(window)
