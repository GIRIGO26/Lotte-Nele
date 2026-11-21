/* Einhoerner gegen Dinos - das Brett in 3D. Enthaelt three.js (MIT-Lizenz, https://threejs.org). */
(()=>{var Zh=0,Kl=1,Jh=2;var Ni=1,$h=2,Ts=3,di=0,Be=1,fn=2,Ui=0,As=1,pi=2,Ql=3,jl=4,Kh=5;var Fi=100,Qh=101,jh=102,tu=103,eu=104,nu=200,iu=201,su=202,ru=203,tc=204,ec=205,au=206,ou=207,lu=208,cu=209,hu=210,uu=211,fu=212,du=213,pu=214,Sa=0,ba=1,Ea=2,os=3,wa=4,Ta=5,Aa=6,Ra=7,so=0,mu=1,gu=2,Ln=0,nc=1,ic=2,sc=3,rc=4,ac=5,oc=6,Tr=7;var lc=300,Oi=301,Rs=302,ro=303,ao=304,Ca=1e3,Rn=1001,Ia=1002,Ne=1003,_u=1004;var Ar=1005;var $e=1006,oo=1007;var Yn=1008;var en=1009,cc=1010,hc=1011,Cs=1012,lo=1013,Sn=1014,dn=1015,bn=1016,co=1017,ho=1018,Bi=1020,uc=35902,fc=35899,dc=1021,pc=1022,En=1023,Vn=1026,Zn=1027,uo=1028,fo=1029,mi=1030,po=1031;var mo=1033,Rr=33776,Cr=33777,Ir=33778,Pr=33779,go=35840,_o=35841,xo=35842,yo=35843,vo=36196,Mo=37492,So=37496,bo=37488,Eo=37489,Lr=37490,wo=37491,To=37808,Ao=37809,Ro=37810,Co=37811,Io=37812,Po=37813,Lo=37814,Do=37815,No=37816,Uo=37817,Fo=37818,Oo=37819,Bo=37820,zo=37821,ko=36492,Go=36494,Ho=36495,Vo=36283,Wo=36284,Dr=36285,Xo=36286;var $s=2300,Pa=2301,va=2302,Ol=2303,Bl=2400,zl=2401,kl=2402;var xu=3200;var Nr=0,yu=1,Jn="",Je="srgb",Ks="srgb-linear",Qs="linear",he="srgb";var Ma=7680;var vu=519,Mu=512,Su=513,bu=514,mc=515,Eu=516,wu=517,gc=518,_c=519,xc=35044;var yc="300 es",cn=2e3,ls=2001;function Ff(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Of(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Tu(){let i=js("canvas");return i.style.display="block",i}var hh={},cs=null;function tr(...i){let t="THREE."+i.shift();cs?cs("log",t,...i):console.log(t,...i)}function Au(i){let t=i[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=i[1];e&&e.isStackTrace?i[0]+=" "+e.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function kt(...i){i=Au(i);let t="THREE."+i.shift();if(cs)cs("warn",t,...i);else{let e=i[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...i)}}function zt(...i){i=Au(i);let t="THREE."+i.shift();if(cs)cs("error",t,...i);else{let e=i[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...i)}}function Ri(...i){let t=i.join(" ");t in hh||(hh[t]=!0,kt(...i))}function Ru(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var Cu={[Sa]:Sa,[Ea]:Aa,[wa]:wa,[os]:Ta,[ba]:ba,[Aa]:Ea,[Ra]:Ra,[Ta]:os},Cn=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let s=n[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ve=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ul=Math.PI/180,La=180/Math.PI;function gi(){let i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ve[i&255]+Ve[i>>8&255]+Ve[i>>16&255]+Ve[i>>24&255]+"-"+Ve[t&255]+Ve[t>>8&255]+"-"+Ve[t>>16&15|64]+Ve[t>>24&255]+"-"+Ve[e&63|128]+Ve[e>>8&255]+"-"+Ve[e>>16&255]+Ve[e>>24&255]+Ve[n&255]+Ve[n>>8&255]+Ve[n>>16&255]+Ve[n>>24&255]).toLowerCase()}function Kt(i,t,e){return Math.max(t,Math.min(e,i))}function Bf(i,t){return(i%t+t)%t}function fl(i,t,e){return(1-e)*i+e*t}function Iu(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function qo(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Pu(i,t){if(t.constructor===Float32Array)return i;let e=qo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/e,-1)}function Lu(i,t){if(t.constructor===Float32Array)return i;let e=qo(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*e)}var wc=class wc{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wc.prototype.isVector2=!0;var it=wc,hn=class{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],p=r[a+2],x=r[a+3];if(d!==x||l!==u||c!==f||h!==p){let g=l*u+c*f+h*p+d*x;g<0&&(u=-u,f=-f,p=-p,x=-x,g=-g);let m=1-o;if(g<.9995){let v=Math.acos(g),E=Math.sin(v);m=Math.sin(m*v)/E,o=Math.sin(o*v)/E,l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+p*o,d=d*m+x*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],p=r[a+3];return t[e]=o*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-o*f,t[e+2]=c*p+h*f+o*u-l*d,t[e+3]=h*p-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),p=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:kt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Kt(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Tc=class Tc{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(uh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(uh.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return dl.copy(this).projectOnVector(t),this.sub(dl)}reflect(t){return this.sub(dl.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(Kt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tc.prototype.isVector3=!0;var L=Tc,dl=new L,uh=new hn,Ac=class Ac{constructor(t,e,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],x=s[0],g=s[3],m=s[6],v=s[1],E=s[4],S=s[7],A=s[2],w=s[5],_=s[8];return r[0]=a*x+o*v+l*A,r[3]=a*g+o*E+l*w,r[6]=a*m+o*S+l*_,r[1]=c*x+h*v+d*A,r[4]=c*g+h*E+d*w,r[7]=c*m+h*S+d*_,r[2]=u*x+f*v+p*A,r[5]=u*g+f*E+p*w,r[8]=u*m+f*S+p*_,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,p=e*d+n*u+s*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/p;return t[0]=d*x,t[1]=(s*c-h*n)*x,t[2]=(o*n-s*a)*x,t[3]=u*x,t[4]=(h*e-s*l)*x,t[5]=(s*r-o*e)*x,t[6]=f*x,t[7]=(n*l-c*e)*x,t[8]=(a*e-n*r)*x,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Ri("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(pl.makeScale(t,e)),this}rotate(t){return Ri("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(pl.makeRotation(-t)),this}translate(t,e){return Ri("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(pl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Ac.prototype.isMatrix3=!0;var Vt=Ac,pl=new Vt,fh=new Vt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dh=new Vt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function zf(){let i={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===he&&(s.r=Hn(s.r),s.g=Hn(s.g),s.b=Hn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===he&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Jn?Qs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Ks]:{primaries:t,whitePoint:n,transfer:Qs,toXYZ:fh,fromXYZ:dh,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Je},outputColorSpaceConfig:{drawingBufferColorSpace:Je}},[Je]:{primaries:t,whitePoint:n,transfer:he,toXYZ:fh,fromXYZ:dh,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Je}}}),i}var se=zf();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Hi,Da=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Hi===void 0&&(Hi=js("canvas")),Hi.width=t.width,Hi.height=t.height;let s=Hi.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),n=Hi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=js("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Hn(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return kt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},kf=0,hs=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:kf++}),this.uuid=gi(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ml(s[a].image)):r.push(ml(s[a]))}else r=ml(s);n.url=r}return e||(t.images[this.uuid]=n),n}};function ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Da.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(kt("Texture: Unable to serialize Texture."),{})}var Gf=0,gl=new L,Ke=class i extends Cn{constructor(t=i.DEFAULT_IMAGE,e=i.DEFAULT_MAPPING,n=Rn,s=Rn,r=$e,a=Yn,o=En,l=en,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=gi(),this.name="",this.source=new hs(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new it(0,0),this.repeat=new it(1,1),this.center=new it(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Vt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(gl).x}get height(){return this.source.getSize(gl).y}get depth(){return this.source.getSize(gl).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){kt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==lc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ca:t.x=t.x-Math.floor(t.x);break;case Rn:t.x=t.x<0?0:1;break;case Ia:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ca:t.y=t.y-Math.floor(t.y);break;case Rn:t.y=t.y<0?0:1;break;case Ia:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Ke.DEFAULT_IMAGE=null;Ke.DEFAULT_MAPPING=lc;Ke.DEFAULT_ANISOTROPY=1;var Rc=class Rc{constructor(t=0,e=0,n=0,s=1){this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],x=l[2],g=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let E=(c+1)/2,S=(f+1)/2,A=(m+1)/2,w=(h+u)/4,_=(d+x)/4,b=(p+g)/4;return E>S&&E>A?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=_/n):S>A?S<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),n=w/s,r=b/s):A<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(A),n=_/r,s=b/r),this.set(n,s,r,e),this}let v=Math.sqrt((g-p)*(g-p)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(g-p)/v,this.y=(d-x)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Kt(this.x,t.x,e.x),this.y=Kt(this.y,t.y,e.y),this.z=Kt(this.z,t.z,e.z),this.w=Kt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Kt(this.x,t,e),this.y=Kt(this.y,t,e),this.z=Kt(this.z,t,e),this.w=Kt(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Kt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Rc.prototype.isVector4=!0;var xe=Rc,Na=class extends Cn{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$e,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new xe(0,0,t,e),this.scissorTest=!1,this.viewport=new xe(0,0,t,e),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new Ke({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:$e,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new hs(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},rn=class extends Na{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},er=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ua=class extends Ke{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ne,this.minFilter=Ne,this.wrapR=Rn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var io=class io{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,p,x,g){let m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new io().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,s=1/Vi.setFromMatrixColumn(t,0).length(),r=1/Vi.setFromMatrixColumn(t,1).length(),a=1/Vi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-x*c,e[9]=-o*l,e[2]=x-u*c,e[6]=p+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u+x*o,e[4]=p*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-p,e[6]=x+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,x=c*d;e[0]=u-x*o,e[4]=-a*d,e[8]=p+f*o,e[1]=f+p*o,e[5]=a*h,e[9]=x-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,p=o*h,x=o*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+x,e[1]=l*d,e[5]=x*c+u,e[9]=f*c-p,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=x-u*d,e[8]=p*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-x*d}else if(t.order==="XZY"){let u=a*l,f=a*c,p=o*l,x=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+x,e[5]=a*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=o*h,e[10]=x*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Hf,t,Vf)}lookAt(t,e,n){let s=this.elements;return nn.subVectors(t,e),nn.lengthSq()===0&&(nn.z=1),nn.normalize(),Qn.crossVectors(n,nn),Qn.lengthSq()===0&&(Math.abs(n.z)===1?nn.x+=1e-4:nn.z+=1e-4,nn.normalize(),Qn.crossVectors(n,nn)),Qn.normalize(),qr.crossVectors(nn,Qn),s[0]=Qn.x,s[4]=qr.x,s[8]=nn.x,s[1]=Qn.y,s[5]=qr.y,s[9]=nn.y,s[2]=Qn.z,s[6]=qr.z,s[10]=nn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],x=n[6],g=n[10],m=n[14],v=n[3],E=n[7],S=n[11],A=n[15],w=s[0],_=s[4],b=s[8],U=s[12],C=s[1],N=s[5],F=s[9],V=s[13],I=s[2],k=s[6],X=s[10],G=s[14],et=s[3],W=s[7],Q=s[11],tt=s[15];return r[0]=a*w+o*C+l*I+c*et,r[4]=a*_+o*N+l*k+c*W,r[8]=a*b+o*F+l*X+c*Q,r[12]=a*U+o*V+l*G+c*tt,r[1]=h*w+d*C+u*I+f*et,r[5]=h*_+d*N+u*k+f*W,r[9]=h*b+d*F+u*X+f*Q,r[13]=h*U+d*V+u*G+f*tt,r[2]=p*w+x*C+g*I+m*et,r[6]=p*_+x*N+g*k+m*W,r[10]=p*b+x*F+g*X+m*Q,r[14]=p*U+x*V+g*G+m*tt,r[3]=v*w+E*C+S*I+A*et,r[7]=v*_+E*N+S*k+A*W,r[11]=v*b+E*F+S*X+A*Q,r[15]=v*U+E*V+S*G+A*tt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],x=t[7],g=t[11],m=t[15],v=l*f-c*u,E=o*f-c*d,S=o*u-l*d,A=a*f-c*h,w=a*u-l*h,_=a*d-o*h;return e*(x*v-g*E+m*S)-n*(p*v-g*A+m*w)+s*(p*E-x*A+m*_)-r*(p*S-x*w+g*_)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],x=t[13],g=t[14],m=t[15],v=e*o-n*a,E=e*l-s*a,S=e*c-r*a,A=n*l-s*o,w=n*c-r*o,_=s*c-r*l,b=h*x-d*p,U=h*g-u*p,C=h*m-f*p,N=d*g-u*x,F=d*m-f*x,V=u*m-f*g,I=v*V-E*F+S*N+A*C-w*U+_*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let k=1/I;return t[0]=(o*V-l*F+c*N)*k,t[1]=(s*F-n*V-r*N)*k,t[2]=(x*_-g*w+m*A)*k,t[3]=(u*w-d*_-f*A)*k,t[4]=(l*C-a*V-c*U)*k,t[5]=(e*V-s*C+r*U)*k,t[6]=(g*S-p*_-m*E)*k,t[7]=(h*_-u*S+f*E)*k,t[8]=(a*F-o*C+c*b)*k,t[9]=(n*C-e*F-r*b)*k,t[10]=(p*w-x*S+m*v)*k,t[11]=(d*S-h*w-f*v)*k,t[12]=(o*U-a*N-l*b)*k,t[13]=(e*N-n*U+s*b)*k,t[14]=(x*E-p*A-g*v)*k,t[15]=(h*A-d*E+u*v)*k,this}scale(t){let e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,p=r*d,x=a*h,g=a*d,m=o*d,v=l*c,E=l*h,S=l*d,A=n.x,w=n.y,_=n.z;return s[0]=(1-(x+m))*A,s[1]=(f+S)*A,s[2]=(p-E)*A,s[3]=0,s[4]=(f-S)*w,s[5]=(1-(u+m))*w,s[6]=(g+v)*w,s[7]=0,s[8]=(p+E)*_,s[9]=(g-v)*_,s[10]=(1-(u+x))*_,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let a=Vi.set(s[0],s[1],s[2]).length(),o=Vi.set(s[4],s[5],s[6]).length(),l=Vi.set(s[8],s[9],s[10]).length();r<0&&(a=-a),_n.copy(this);let c=1/a,h=1/o,d=1/l;return _n.elements[0]*=c,_n.elements[1]*=c,_n.elements[2]*=c,_n.elements[4]*=h,_n.elements[5]*=h,_n.elements[6]*=h,_n.elements[8]*=d,_n.elements[9]*=d,_n.elements[10]*=d,e.setFromRotationMatrix(_n),n.x=a,n.y=o,n.z=l,this}makePerspective(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s),p,x;if(l)p=r/(a-r),x=a*r/(a-r);else if(o===cn)p=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===ls)p=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=cn,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-s),u=-(e+t)/(e-t),f=-(n+s)/(n-s),p,x;if(l)p=1/(a-r),x=a/(a-r);else if(o===cn)p=-2/(a-r),x=-(a+r)/(a-r);else if(o===ls)p=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};io.prototype.isMatrix4=!0;var ae=io,Vi=new L,_n=new ae,Hf=new L(0,0,0),Vf=new L(1,1,1),Qn=new L,qr=new L,nn=new L,ph=new ae,mh=new hn,un=class i{constructor(t=0,e=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:kt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ph.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ph,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return mh.setFromEuler(this),this.setFromQuaternion(mh,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};un.DEFAULT_ORDER="XYZ";var us=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Wf=0,gh=new L,Wi=new hn,Fn=new ae,Yr=new L,Bs=new L,Xf=new L,qf=new hn,_h=new L(1,0,0),xh=new L(0,1,0),yh=new L(0,0,1),vh={type:"added"},Yf={type:"removed"},Xi={type:"childadded",child:null},_l={type:"childremoved",child:null},Te=class i extends Cn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let t=new L,e=new un,n=new hn,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ae},normalMatrix:{value:new Vt}}),this.matrix=new ae,this.matrixWorld=new ae,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new us,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.multiply(Wi),this}rotateOnWorldAxis(t,e){return Wi.setFromAxisAngle(t,e),this.quaternion.premultiply(Wi),this}rotateX(t){return this.rotateOnAxis(_h,t)}rotateY(t){return this.rotateOnAxis(xh,t)}rotateZ(t){return this.rotateOnAxis(yh,t)}translateOnAxis(t,e){return gh.copy(t).applyQuaternion(this.quaternion),this.position.add(gh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_h,t)}translateY(t){return this.translateOnAxis(xh,t)}translateZ(t){return this.translateOnAxis(yh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Yr.copy(t):Yr.set(t,e,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(Bs,Yr,this.up):Fn.lookAt(Yr,Bs,this.up),this.quaternion.setFromRotationMatrix(Fn),s&&(Fn.extractRotation(s.matrixWorld),Wi.setFromRotationMatrix(Fn),this.quaternion.premultiply(Wi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(vh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),_l.child=t,this.dispatchEvent(_l),_l.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Fn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Fn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(vh),Xi.child=t,this.dispatchEvent(Xi),Xi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*s,r[13]+=n-r[1]*e-r[5]*n-r[9]*s,r[14]+=s-r[2]*e-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),p=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let s=t.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Te.DEFAULT_UP=new L(0,1,0);Te.DEFAULT_MATRIX_AUTO_UPDATE=!0;Te.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Xe=class extends Te{constructor(){super(),this.isGroup=!0,this.type="Group"}},Zf={type:"move"},fs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let x of t.hand.values()){let g=e.getJointPose(x,n),m=this._getHandJoint(c,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Zf)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Xe;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},Du={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function xl(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}var Gt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,se.colorSpaceToWorking(this,e),this}setRGB(t,e,n,s=se.workingColorSpace){return this.r=t,this.g=e,this.b=n,se.colorSpaceToWorking(this,s),this}setHSL(t,e,n,s=se.workingColorSpace){if(t=Bf(t,1),e=Kt(e,0,1),n=Kt(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=xl(a,r,t+1/3),this.g=xl(a,r,t),this.b=xl(a,r,t-1/3)}return se.colorSpaceToWorking(this,s),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&kt("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:kt("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);kt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Je){let n=Du[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return se.workingToColorSpace(We.copy(this),t),Math.round(Kt(We.r*255,0,255))*65536+Math.round(Kt(We.g*255,0,255))*256+Math.round(Kt(We.b*255,0,255))}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=se.workingColorSpace){se.workingToColorSpace(We.copy(this),e);let n=We.r,s=We.g,r=We.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=se.workingColorSpace){return se.workingToColorSpace(We.copy(this),e),t.r=We.r,t.g=We.g,t.b=We.b,t}getStyle(t=Je){se.workingToColorSpace(We.copy(this),t);let e=We.r,n=We.g,s=We.b;return t!==Je?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(Zr);let n=fl(jn.h,Zr.h,e),s=fl(jn.s,Zr.s,e),r=fl(jn.l,Zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},We=new Gt;Gt.NAMES=Du;var ii=class extends Te{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new un,this.environmentIntensity=1,this.environmentRotation=new un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},xn=new L,On=new L,yl=new L,Bn=new L,qi=new L,Yi=new L,Mh=new L,vl=new L,Ml=new L,Sl=new L,bl=new xe,El=new xe,wl=new xe,Gn=class i{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),xn.subVectors(t,e),s.cross(xn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){xn.subVectors(s,e),On.subVectors(n,e),yl.subVectors(t,e);let a=xn.dot(xn),o=xn.dot(On),l=xn.dot(yl),c=On.dot(On),h=On.dot(yl),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,p=(a*h-o*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Bn)===null?!1:Bn.x>=0&&Bn.y>=0&&Bn.x+Bn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Bn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Bn.x),l.addScaledVector(a,Bn.y),l.addScaledVector(o,Bn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return bl.setScalar(0),El.setScalar(0),wl.setScalar(0),bl.fromBufferAttribute(t,e),El.fromBufferAttribute(t,n),wl.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(bl,r.x),a.addScaledVector(El,r.y),a.addScaledVector(wl,r.z),a}static isFrontFacing(t,e,n,s){return xn.subVectors(n,e),On.subVectors(t,e),xn.cross(On).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return xn.subVectors(this.c,this.b),On.subVectors(this.a,this.b),xn.cross(On).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return i.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return i.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return i.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return i.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return i.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,s=this.b,r=this.c,a,o;qi.subVectors(s,n),Yi.subVectors(r,n),vl.subVectors(t,n);let l=qi.dot(vl),c=Yi.dot(vl);if(l<=0&&c<=0)return e.copy(n);Ml.subVectors(t,s);let h=qi.dot(Ml),d=Yi.dot(Ml);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),e.copy(n).addScaledVector(qi,a);Sl.subVectors(t,r);let f=qi.dot(Sl),p=Yi.dot(Sl);if(p>=0&&f<=p)return e.copy(r);let x=f*c-l*p;if(x<=0&&c>=0&&p<=0)return o=c/(c-p),e.copy(n).addScaledVector(Yi,o);let g=h*p-f*d;if(g<=0&&d-h>=0&&f-p>=0)return Mh.subVectors(r,s),o=(d-h)/(d-h+(f-p)),e.copy(s).addScaledVector(Mh,o);let m=1/(g+x+u);return a=x*m,o=u*m,e.copy(n).addScaledVector(qi,a).addScaledVector(Yi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},In=class{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,yn):yn.fromBufferAttribute(r,a),yn.applyMatrix4(t.matrixWorld),this.expandByPoint(yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Jr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Jr.copy(n.boundingBox)),Jr.applyMatrix4(t.matrixWorld),this.union(Jr)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,yn),yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(zs),$r.subVectors(this.max,zs),Zi.subVectors(t.a,zs),Ji.subVectors(t.b,zs),$i.subVectors(t.c,zs),ti.subVectors(Ji,Zi),ei.subVectors($i,Ji),bi.subVectors(Zi,$i);let e=[0,-ti.z,ti.y,0,-ei.z,ei.y,0,-bi.z,bi.y,ti.z,0,-ti.x,ei.z,0,-ei.x,bi.z,0,-bi.x,-ti.y,ti.x,0,-ei.y,ei.x,0,-bi.y,bi.x,0];return!Tl(e,Zi,Ji,$i,$r)||(e=[1,0,0,0,1,0,0,0,1],!Tl(e,Zi,Ji,$i,$r))?!1:(Kr.crossVectors(ti,ei),e=[Kr.x,Kr.y,Kr.z],Tl(e,Zi,Ji,$i,$r))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},zn=[new L,new L,new L,new L,new L,new L,new L,new L],yn=new L,Jr=new In,Zi=new L,Ji=new L,$i=new L,ti=new L,ei=new L,bi=new L,zs=new L,$r=new L,Kr=new L,Ei=new L;function Tl(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Ei.fromArray(i,r);let o=s.x*Math.abs(Ei.x)+s.y*Math.abs(Ei.y)+s.z*Math.abs(Ei.z),l=t.dot(Ei),c=e.dot(Ei),h=n.dot(Ei);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var we=new L,Qr=new it,Jf=0,Se=class extends Cn{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Jf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xc,this.updateRanges=[],this.gpuType=dn,this.version=0,this._normalizationScale=t!==void 0?qo(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Qr.fromBufferAttribute(this,e),Qr.applyMatrix3(t),this.setXY(e,Qr.x,Qr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix3(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyMatrix4(t),this.setXYZ(e,we.x,we.y,we.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.applyNormalMatrix(t),this.setXYZ(e,we.x,we.y,we.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)we.fromBufferAttribute(this,e),we.transformDirection(t),this.setXYZ(e,we.x,we.y,we.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pu(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Lu(t,this.array)}};var nr=class extends Se{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ir=class extends Se{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var pe=class extends Se{constructor(t,e,n){super(new Float32Array(t),e,n)}},$f=new In,ks=new L,Al=new L,Wn=class{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):$f.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ks.subVectors(t,this.center);let e=ks.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ks,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Al.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ks.copy(t.center).add(Al)),this.expandByPoint(ks.copy(t.center).sub(Al))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},Kf=0,ln=new ae,Rl=new Te,Ki=new L,sn=new In,Gs=new In,De=new L,Ae=class i extends Cn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ff(t)?ir:nr)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Vt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return ln.makeRotationFromQuaternion(t),this.applyMatrix4(ln),this}rotateX(t){return ln.makeRotationX(t),this.applyMatrix4(ln),this}rotateY(t){return ln.makeRotationY(t),this.applyMatrix4(ln),this}rotateZ(t){return ln.makeRotationZ(t),this.applyMatrix4(ln),this}translate(t,e,n){return ln.makeTranslation(t,e,n),this.applyMatrix4(ln),this}scale(t,e,n){return ln.makeScale(t,e,n),this.applyMatrix4(ln),this}lookAt(t){return Rl.lookAt(t),Rl.updateMatrix(),this.applyMatrix4(Rl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ki).negate(),this.translate(Ki.x,Ki.y,Ki.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new pe(n,3))}else{let n=Math.min(t.length,e.count);for(let s=0;s<n;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&kt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new In);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){let r=e[n];sn.setFromBufferAttribute(r),this.morphTargetsRelative?(De.addVectors(this.boundingBox.min,sn.min),this.boundingBox.expandByPoint(De),De.addVectors(this.boundingBox.max,sn.max),this.boundingBox.expandByPoint(De)):(this.boundingBox.expandByPoint(sn.min),this.boundingBox.expandByPoint(sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Wn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){let n=this.boundingSphere.center;if(sn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];Gs.setFromBufferAttribute(o),this.morphTargetsRelative?(De.addVectors(sn.min,Gs.min),sn.expandByPoint(De),De.addVectors(sn.max,Gs.max),sn.expandByPoint(De)):(sn.expandByPoint(Gs.min),sn.expandByPoint(Gs.max))}sn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)De.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(De));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)De.fromBufferAttribute(o,c),l&&(Ki.fromBufferAttribute(t,c),De.add(Ki)),s=Math.max(s,n.distanceToSquared(De))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Se(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let U=0;U<n.count;U++)o[U]=new L,l[U]=new L;let h=new L,d=new L,u=new L,f=new it,p=new it,x=new it,g=new L,m=new L;function v(U,C,N){c[U]=c[C]=c[N]=1,h.fromBufferAttribute(n,U),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,U),p.fromBufferAttribute(r,C),x.fromBufferAttribute(r,N),d.sub(h),u.sub(h),p.sub(f),x.sub(f);let F=1/(p.x*x.y-x.x*p.y);isFinite(F)&&(g.copy(d).multiplyScalar(x.y).addScaledVector(u,-p.y).multiplyScalar(F),m.copy(u).multiplyScalar(p.x).addScaledVector(d,-x.x).multiplyScalar(F),o[U].add(g),o[C].add(g),o[N].add(g),l[U].add(m),l[C].add(m),l[N].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let U=0,C=E.length;U<C;++U){let N=E[U],F=N.start,V=N.count;for(let I=F,k=F+V;I<k;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let S=new L,A=new L,w=new L,_=new L;function b(U){w.fromBufferAttribute(s,U),_.copy(w);let C=o[U];S.copy(C),S.sub(w.multiplyScalar(w.dot(C))).normalize(),A.crossVectors(_,C);let F=A.dot(l[U])<0?-1:1;a.setXYZW(U,S.x,S.y,S.z,F)}for(let U=0,C=n.count;U<C;++U)c[U]&&b(U);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new Se(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,d=new L;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)De.fromBufferAttribute(t,e),De.normalize(),t.setXYZ(e,De.x,De.y,De.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[p++]=c[f++]}return new Se(u,h,d)}if(this.index===null)return kt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,n);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},sr=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xc,this.updateRanges=[],this.version=0,this.uuid=gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Sh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Sh(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Sh(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=gi()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Ze=new L,ds=class i{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s,this._normalizationScale=t!==void 0?qo(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyMatrix4(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.applyNormalMatrix(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ze.fromBufferAttribute(this,e),Ze.transformDirection(t),this.setXYZ(e,Ze.x,Ze.y,Ze.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){tr("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new Se(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new i(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){tr("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):Pu(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):Lu(t,this.data.array)}},Cl=new L,Qf=new L,jf=new Vt,vn=class{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let s=Cl.subVectors(n,e).cross(Qf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let s=t.delta(Cl),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||jf.getNormalMatrix(t),s=this.coplanarPoint(Cl).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},td=0,Mn=class extends Cn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:td++}),this.uuid=gi(),this.name="",this.type="Material",this.blending=As,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tc,this.blendDst=ec,this.blendEquation=Fi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=vu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ma,this.stencilZFail=Ma,this.stencilZPass=Ma,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new vn().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new it().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new it().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},ps=class extends Mn{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Qi,Hs=new L,ji=new L,ts=new L,es=new it,Vs=new it,Nu=new ae,jr=new L,Ws=new L,ta=new L,bh=new it,Il=new it,Eh=new it,rr=class extends Te{constructor(t=new ps){if(super(),this.isSprite=!0,this.type="Sprite",Qi===void 0){Qi=new Ae;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new sr(e,5);Qi.setIndex([0,1,2,0,2,3]),Qi.setAttribute("position",new ds(n,3,0,!1)),Qi.setAttribute("uv",new ds(n,2,3,!1))}this.geometry=Qi,this.material=t,this.center=new it(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ji.setFromMatrixScale(this.matrixWorld),Nu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ts.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ji.multiplyScalar(-ts.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ea(jr.set(-.5,-.5,0),ts,a,ji,s,r),ea(Ws.set(.5,-.5,0),ts,a,ji,s,r),ea(ta.set(.5,.5,0),ts,a,ji,s,r),bh.set(0,0),Il.set(1,0),Eh.set(1,1);let o=t.ray.intersectTriangle(jr,Ws,ta,!1,Hs);if(o===null&&(ea(Ws.set(-.5,.5,0),ts,a,ji,s,r),Il.set(0,1),o=t.ray.intersectTriangle(jr,ta,Ws,!1,Hs),o===null))return;let l=t.ray.origin.distanceTo(Hs);l<t.near||l>t.far||e.push({distance:l,point:Hs.clone(),uv:Gn.getInterpolation(Hs,jr,Ws,ta,bh,Il,Eh,new it),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function ea(i,t,e,n,s,r){es.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Vs.x=r*es.x-s*es.y,Vs.y=s*es.x+r*es.y):Vs.copy(es),i.copy(t),i.x+=Vs.x,i.y+=Vs.y,i.applyMatrix4(Nu)}var kn=new L,Pl=new L,na=new L,ia=new L,ms=class{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,kn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=kn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(kn.copy(this.origin).addScaledVector(this.direction,e),kn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Pl.copy(t).add(e).multiplyScalar(.5),na.copy(e).sub(t).normalize(),ia.copy(this.origin).sub(Pl);let r=t.distanceTo(e)*.5,a=-this.direction.dot(na),o=ia.dot(this.direction),l=-ia.dot(na),c=ia.lengthSq(),h=Math.abs(1-a*a),d,u,f,p;if(h>0)if(d=a*l-o,u=a*o-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(Pl).addScaledVector(na,u),f}intersectSphere(t,e){if(t.radius<0)return null;kn.subVectors(t.center,this.origin);let n=kn.dot(this.direction),s=kn.dot(kn)-n*n,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,kn)!==null}intersectTriangle(t,e,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,p=e.x-a.x,x=e.y-a.y,g=e.z-a.z,m=n.x-a.x,v=n.y-a.y,E=n.z-a.z,S=Math.abs(l),A=Math.abs(c),w=Math.abs(h),_,b,U,C,N,F,V,I,k,X,G,et;if(S>=A&&S>=w?(U=l,F=d,k=p,et=m,l>=0?(_=c,b=h,C=u,N=f,V=x,I=g,X=v,G=E):(_=h,b=c,C=f,N=u,V=g,I=x,X=E,G=v)):A>=w?(U=c,F=u,k=x,et=v,c>=0?(_=h,b=l,C=f,N=d,V=g,I=p,X=E,G=m):(_=l,b=h,C=d,N=f,V=p,I=g,X=m,G=E)):(U=h,F=f,k=g,et=E,h>=0?(_=l,b=c,C=d,N=u,V=p,I=x,X=m,G=v):(_=c,b=l,C=u,N=d,V=x,I=p,X=v,G=m)),U===0)return null;let W=_/U,Q=b/U,tt=1/U,Et=C-W*F,Ot=N-Q*F,Y=V-W*k,_t=I-Q*k,wt=X-W*et,Nt=G-Q*et,xt=wt*_t-Nt*Y,Ut=Et*Nt-Ot*wt,ge=Y*Ot-_t*Et;if(s){if(xt<0||Ut<0||ge<0)return null}else if((xt<0||Ut<0||ge<0)&&(xt>0||Ut>0||ge>0))return null;let Bt=xt+Ut+ge;if(Bt===0)return null;let $t=tt*(xt*F+Ut*k+ge*et);return(Bt>0?$t<0:$t>0)?null:this.at($t/Bt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},si=class extends Mn{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=so,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},wh=new ae,wi=new ms,sa=new Wn,Th=new L,ra=new L,aa=new L,oa=new L,Ll=new L,la=new L,Ah=new L,ca=new L,ce=class extends Te{constructor(t=new Ae,e=new si){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){la.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Ll.fromBufferAttribute(d,t),a?la.addScaledVector(Ll,h):la.addScaledVector(Ll.sub(e),h))}e.add(la)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(r),wi.copy(t.ray).recast(t.near),!(sa.containsPoint(wi.origin)===!1&&(wi.intersectSphere(sa,Th)===null||wi.origin.distanceToSquared(Th)>(t.far-t.near)**2))&&(wh.copy(r).invert(),wi.copy(t.ray).applyMatrix4(wh),!(n.boundingBox!==null&&wi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,wi)))}_computeIntersections(t,e,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),E=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,A=E;S<A;S+=3){let w=o.getX(S),_=o.getX(S+1),b=o.getX(S+2);s=ha(this,m,t,n,c,h,d,w,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=o.getX(g),E=o.getX(g+1),S=o.getX(g+2);s=ha(this,a,t,n,c,h,d,v,E,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){let g=u[p],m=a[g.materialIndex],v=Math.max(g.start,f.start),E=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let S=v,A=E;S<A;S+=3){let w=S,_=S+1,b=S+2;s=ha(this,m,t,n,c,h,d,w,_,b),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{let p=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let g=p,m=x;g<m;g+=3){let v=g,E=g+1,S=g+2;s=ha(this,a,t,n,c,h,d,v,E,S),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}};function ed(i,t,e,n,s,r,a,o){let l;if(t.side===Be?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===di,o),l===null)return null;ca.copy(o),ca.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(ca);return c<e.near||c>e.far?null:{distance:c,point:ca.clone(),object:i}}function ha(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,ra),i.getVertexPosition(l,aa),i.getVertexPosition(c,oa);let h=ed(i,t,e,n,ra,aa,oa,Ah);if(h){let d=new L;Gn.getBarycoord(Ah,ra,aa,oa,d),s&&(h.uv=Gn.getInterpolatedAttribute(s,o,l,c,d,new it)),r&&(h.uv1=Gn.getInterpolatedAttribute(r,o,l,c,d,new it)),a&&(h.normal=Gn.getInterpolatedAttribute(a,o,l,c,d,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new L,materialIndex:0};Gn.getNormal(ra,aa,oa,u.normal),h.face=u,h.barycoord=d}return h}var ar=class extends Ke{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ne,h=Ne,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var gs=class extends Se{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},ns=new ae,Rh=new ae,ua=[],Ch=new In,nd=new ae,Xs=new ce,qs=new Wn,or=class extends ce{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new gs(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,nd)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new In),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),Ch.copy(t.boundingBox).applyMatrix4(ns),this.boundingBox.union(Ch)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Wn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,ns),qs.copy(t.boundingSphere).applyMatrix4(ns),this.boundingSphere.union(qs)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),this.morphTexture=t.morphTexture!==null?t.morphTexture.clone():null,this.instanceColor=t.instanceColor!==null?t.instanceColor.clone():null,this.count=t.count,this.boundingBox=t.boundingBox!==null?t.boundingBox.clone():null,this.boundingSphere=t.boundingSphere!==null?t.boundingSphere.clone():null,this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){let n=this.matrixWorld,s=this.count;if(Xs.geometry=this.geometry,Xs.material=this.material,Xs.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qs.copy(this.boundingSphere),qs.applyMatrix4(n),t.ray.intersectsSphere(qs)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,ns),Rh.multiplyMatrices(n,ns),Xs.matrixWorld=Rh,Xs.raycast(t,ua);for(let a=0,o=ua.length;a<o;a++){let l=ua[a];l.instanceId=r,l.object=this,e.push(l)}ua.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new gs(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new ar(new Float32Array(s*this.count),s,this.count,uo,dn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ti=new Wn,id=new it(.5,.5),fa=new L,ri=class{constructor(t=new vn,e=new vn,n=new vn,s=new vn,r=new vn,a=new vn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=cn,n=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],x=r[9],g=r[10],m=r[11],v=r[12],E=r[13],S=r[14],A=r[15];if(s[0].setComponents(c-a,f-h,m-p,A-v).normalize(),s[1].setComponents(c+a,f+h,m+p,A+v).normalize(),s[2].setComponents(c+o,f+d,m+x,A+E).normalize(),s[3].setComponents(c-o,f-d,m-x,A-E).normalize(),n)s[4].setComponents(l,u,g,S).normalize(),s[5].setComponents(c-l,f-u,m-g,A-S).normalize();else if(s[4].setComponents(c-l,f-u,m-g,A-S).normalize(),e===cn)s[5].setComponents(c+l,f+u,m+g,A+S).normalize();else if(e===ls)s[5].setComponents(l,u,g,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ti.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ti.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ti)}intersectsSprite(t){Ti.center.set(0,0,0);let e=id.distanceTo(t.center);return Ti.radius=.7071067811865476+e,Ti.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ti)}intersectsSphere(t){let e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let s=e[n];if(fa.x=s.normal.x>0?t.max.x:t.min.x,fa.y=s.normal.y>0?t.max.y:t.min.y,fa.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(fa)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Ih=new ae,Fa=class i{constructor(){this.coordinateSystem=cn,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let s=0;s<e.length;s++){let r=e[s];Ih.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new ri),n[s].setFromProjectionMatrix(Ih,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let s=0;s<t._count;s++)e[s]===void 0&&(e[s]=new ri),e[s].copy(n[s]);return this._count=t._count,this}clone(){return new i().copy(this)}};var Ci=class extends Mn{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Ph=new ae,Gl=new ms,da=new Wn,pa=new L,_s=class extends Te{constructor(t=new Ae,e=new Ci){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),da.copy(n.boundingSphere),da.applyMatrix4(s),da.radius+=r,t.ray.intersectsSphere(da)===!1)return;Ph.copy(s).invert(),Gl.copy(t.ray).applyMatrix4(Ph);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=u,x=f;p<x;p++){let g=c.getX(p);pa.fromBufferAttribute(d,g),Lh(pa,g,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let p=u,x=f;p<x;p++)pa.fromBufferAttribute(d,p),Lh(pa,p,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Lh(i,t,e,n,s,r,a){let o=Gl.distanceSqToPoint(i);if(o<e){let l=new L;Gl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var lr=class extends Ke{constructor(t=[],e=Oi,n,s,r,a,o,l,c,h){super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},cr=class extends Ke{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Xn=class extends Ke{constructor(t,e,n=Sn,s,r,a,o=Ne,l=Ne,c,h=Vn,d=1){if(h!==Vn&&h!==Zn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new hs(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},hr=class extends Xn{constructor(t,e=Sn,n=Oi,s,r,a=Ne,o=Ne,l,c=Vn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},ur=class extends Ke{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},je=class i extends Ae{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,a,r,0),p("z","y","x",1,-1,n,e,-t,a,r,1),p("x","z","y",1,1,t,n,e,s,a,2),p("x","z","y",1,-1,t,n,-e,s,a,3),p("x","y","z",1,-1,t,e,n,s,r,4),p("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2));function p(x,g,m,v,E,S,A,w,_,b,U){let C=S/_,N=A/b,F=S/2,V=A/2,I=w/2,k=_+1,X=b+1,G=0,et=0,W=new L;for(let Q=0;Q<X;Q++){let tt=Q*N-V;for(let Et=0;Et<k;Et++){let Ot=Et*C-F;W[x]=Ot*v,W[g]=tt*E,W[m]=I,c.push(W.x,W.y,W.z),W[x]=0,W[g]=0,W[m]=w>0?1:-1,h.push(W.x,W.y,W.z),d.push(Et/_),d.push(1-Q/b),G+=1}}for(let Q=0;Q<b;Q++)for(let tt=0;tt<_;tt++){let Et=u+tt+k*Q,Ot=u+tt+k*(Q+1),Y=u+(tt+1)+k*(Q+1),_t=u+(tt+1)+k*Q;l.push(Et,Ot,_t),l.push(Ot,Y,_t),et+=6}o.addGroup(f,et,U),f+=et,u+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var ai=class i extends Ae{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],p=0,x=[],g=n/2,m=0;v(),a===!1&&(t>0&&E(!0),e>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new pe(d,3)),this.setAttribute("normal",new pe(u,3)),this.setAttribute("uv",new pe(f,2));function v(){let S=new L,A=new L,w=0,_=(e-t)/n;for(let b=0;b<=r;b++){let U=[],C=b/r,N=C*(e-t)+t;for(let F=0;F<=s;F++){let V=F/s,I=V*l+o,k=Math.sin(I),X=Math.cos(I);A.x=N*k,A.y=-C*n+g,A.z=N*X,d.push(A.x,A.y,A.z),S.set(k,_,X).normalize(),u.push(S.x,S.y,S.z),f.push(V,1-C),U.push(p++)}x.push(U)}for(let b=0;b<s;b++)for(let U=0;U<r;U++){let C=x[U][b],N=x[U+1][b],F=x[U+1][b+1],V=x[U][b+1];(t>0||U!==0)&&(h.push(C,N,V),w+=3),(e>0||U!==r-1)&&(h.push(N,F,V),w+=3)}c.addGroup(m,w,0),m+=w}function E(S){let A=p,w=new it,_=new L,b=0,U=S===!0?t:e,C=S===!0?1:-1;for(let F=1;F<=s;F++)d.push(0,g*C,0),u.push(0,C,0),f.push(.5,.5),p++;let N=p;for(let F=0;F<=s;F++){let I=F/s*l+o,k=Math.cos(I),X=Math.sin(I);_.x=U*X,_.y=g*C,_.z=U*k,d.push(_.x,_.y,_.z),u.push(0,C,0),w.x=k*.5+.5,w.y=X*.5*C+.5,f.push(w.x,w.y),p++}for(let F=0;F<s;F++){let V=A+F,I=N+F;S===!0?h.push(I,I+1,V):h.push(I+1,I,V),b+=3}c.addGroup(m,b,S===!0?1:2),m+=b}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},xs=class i extends ai{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new i(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var an=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){kt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),s=0,r=n.length,a;e?a=e:a=t*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new it:new L);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new L,s=[],r=[],a=[],o=new L,l=new ae;for(let f=0;f<=t;f++){let p=f/t;s[f]=this.getTangentAt(p,new L)}r[0]=new L,a[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let p=Math.acos(Kt(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Kt(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(s[p],f*p)),a[p].crossVectors(s[p],r[p])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}},ys=class extends an{constructor(t=0,e=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new it){let n=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Oa=class extends ys{constructor(t,e,n,s,r,a){super(t,e,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+t*r+e*a+n*o}}}var Dh=new L,Nh=new L,Dl=new vc,Nl=new vc,Ul=new vc,Ba=class extends an{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new L){let n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Nh.subVectors(s[0],s[1]).add(s[0]),c=Nh);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Dh.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Dh),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),x=Math.pow(d.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(h),f);x<1e-4&&(x=1),p<1e-4&&(p=x),g<1e-4&&(g=x),Dl.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,x,g),Nl.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,x,g),Ul.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,x,g)}else this.curveType==="catmullrom"&&(Dl.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),Nl.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Ul.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Dl.calc(l),Nl.calc(l),Ul.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new L().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Uh(i,t,e,n,s){let r=(n-t)*.5,a=(s-e)*.5,o=i*i,l=i*o;return(2*e-2*n+r+a)*l+(-3*e+3*n-2*r-a)*o+r*i+e}function sd(i,t){let e=1-i;return e*e*t}function rd(i,t){return 2*(1-i)*i*t}function ad(i,t){return i*i*t}function Zs(i,t,e,n){return sd(i,t)+rd(i,e)+ad(i,n)}function od(i,t){let e=1-i;return e*e*e*t}function ld(i,t){let e=1-i;return 3*e*e*i*t}function cd(i,t){return 3*(1-i)*i*i*t}function hd(i,t){return i*i*i*t}function Js(i,t,e,n,s){return od(i,t)+ld(i,e)+cd(i,n)+hd(i,s)}var fr=class extends an{constructor(t=new it,e=new it,n=new it,s=new it){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(t,s.x,r.x,a.x,o.x),Js(t,s.y,r.y,a.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},za=class extends an{constructor(t=new L,e=new L,n=new L,s=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=s}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Js(t,s.x,r.x,a.x,o.x),Js(t,s.y,r.y,a.y,o.y),Js(t,s.z,r.z,a.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},dr=class extends an{constructor(t=new it,e=new it){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new it){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new it){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ka=class extends an{constructor(t=new L,e=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new L){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new L){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},pr=class extends an{constructor(t=new it,e=new it,n=new it){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new it){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(t,s.x,r.x,a.x),Zs(t,s.y,r.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ga=class extends an{constructor(t=new L,e=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new L){let n=e,s=this.v0,r=this.v1,a=this.v2;return n.set(Zs(t,s.x,r.x,a.x),Zs(t,s.y,r.y,a.y),Zs(t,s.z,r.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ii=class extends an{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new it){let n=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Uh(o,l.x,c.x,h.x,d.x),Uh(o,l.y,c.y,h.y,d.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let s=t.points[e];this.points.push(new it().fromArray(s))}return this}},Hl=Object.freeze({__proto__:null,ArcCurve:Oa,CatmullRomCurve3:Ba,CubicBezierCurve:fr,CubicBezierCurve3:za,EllipseCurve:ys,LineCurve:dr,LineCurve3:ka,QuadraticBezierCurve:pr,QuadraticBezierCurve3:Ga,SplineCurve:Ii}),Ha=class extends an{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let n=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Hl[n](e,t))}return this}getPoint(t,e){let n=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let n=0,s=this.curves.length;n<s;n++)e+=this.curves[n].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(e.push(h),n=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this.cacheLengths=null,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,n=this.curves.length;e<n;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,n=t.curves.length;e<n;e++){let s=t.curves[e];this.curves.push(new Hl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},mr=class extends Ha{constructor(t){super(),this.type="Path",this.currentPoint=new it,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,n=t.length;e<n;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let n=new dr(this.currentPoint.clone(),new it(t,e));return this.curves.push(n),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,n,s){let r=new pr(this.currentPoint.clone(),new it(t,e),new it(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(t,e,n,s,r,a){let o=new fr(this.currentPoint.clone(),new it(t,e),new it(n,s),new it(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),n=new Ii(e);return this.curves.push(n),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,n,s,r,a),this}absarc(t,e,n,s,r,a){return this.absellipse(t,e,n,n,s,r,a),this}ellipse(t,e,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,n,s,r,a,o,l),this}absellipse(t,e,n,s,r,a,o,l){let c=new ys(t,e,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},vs=class extends mr{constructor(t){super(t),this.uuid=gi(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let n=0,s=this.holes.length;n<s;n++)e[n]=this.holes[n].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,n=this.holes.length;e<n;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,n=t.holes.length;e<n;e++){let s=t.holes[e];this.holes.push(new mr().fromJSON(s))}return this}};function ud(i,t,e=2){let n=t&&t.length,s=n?t[0]*e:i.length,r=Uu(i,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=gd(i,t,r,e)),i.length>80*e){o=i[0],l=i[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=i[u],p=i[u+1];f<o&&(o=f),p<l&&(l=p),f>h&&(h=f),p>d&&(d=p)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return gr(r,a,e,o,l,c,0),a}function Uu(i,t,e,n,s){let r;if(s===Ad(i,t,e,n)>0)for(let a=t;a<e;a+=n)r=Fh(a/n|0,i[a],i[a+1],r);else for(let a=e-n;a>=t;a-=n)r=Fh(a/n|0,i[a],i[a+1],r);return r&&Ms(r,r.next)&&(xr(r),r=r.next),r}function Pi(i,t){if(!i)return i;t||(t=i);let e=i,n;do if(n=!1,!e.steiner&&(Ms(e,e.next)||ve(e.prev,e,e.next)===0)){if(xr(e),e=t=e.prev,e===e.next)break;n=!0}else e=e.next;while(n||e!==t);return t}function gr(i,t,e,n,s,r,a){if(!i)return;!a&&r&&Md(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?dd(i,n,s,r):fd(i)){t.push(l.i,i.i,c.i),xr(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=pd(Pi(i),t),gr(i,t,e,n,s,r,2)):a===2&&md(i,t,e,n,s,r):gr(Pi(i),t,e,n,s,r,1);break}}}function fd(i){let t=i.prev,e=i,n=i.next;if(ve(t,e,n)>=0)return!1;let s=t.x,r=e.x,a=n.x,o=t.y,l=e.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),p=n.next;for(;p!==t;){if(p.x>=h&&p.x<=u&&p.y>=d&&p.y<=f&&Ys(s,o,r,l,a,c,p.x,p.y)&&ve(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function dd(i,t,e,n){let s=i.prev,r=i,a=i.next;if(ve(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),p=Math.min(h,d,u),x=Math.max(o,l,c),g=Math.max(h,d,u),m=Vl(f,p,t,e,n),v=Vl(x,g,t,e,n),E=i.prevZ,S=i.nextZ;for(;E&&E.z>=m&&S&&S.z<=v;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=g&&E!==s&&E!==a&&Ys(o,h,l,d,c,u,E.x,E.y)&&ve(E.prev,E,E.next)>=0||(E=E.prevZ,S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==a&&Ys(o,h,l,d,c,u,S.x,S.y)&&ve(S.prev,S,S.next)>=0))return!1;S=S.nextZ}for(;E&&E.z>=m;){if(E.x>=f&&E.x<=x&&E.y>=p&&E.y<=g&&E!==s&&E!==a&&Ys(o,h,l,d,c,u,E.x,E.y)&&ve(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;S&&S.z<=v;){if(S.x>=f&&S.x<=x&&S.y>=p&&S.y<=g&&S!==s&&S!==a&&Ys(o,h,l,d,c,u,S.x,S.y)&&ve(S.prev,S,S.next)>=0)return!1;S=S.nextZ}return!0}function pd(i,t){let e=i;do{let n=e.prev,s=e.next.next;!Ms(n,s)&&Ou(n,e,e.next,s)&&_r(n,s)&&_r(s,n)&&(t.push(n.i,e.i,s.i),xr(e),xr(e.next),e=i=s),e=e.next}while(e!==i);return Pi(e)}function md(i,t,e,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&Ed(a,o)){let l=Bu(a,o);a=Pi(a,a.next),l=Pi(l,l.next),gr(a,t,e,n,s,r,0),gr(l,t,e,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function gd(i,t,e,n){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*n,l=r<a-1?t[r+1]*n:i.length,c=Uu(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(bd(c))}s.sort(_d);for(let r=0;r<s.length;r++)e=xd(s[r],e);return e}function _d(i,t){let e=i.x-t.x;if(e===0&&(e=i.y-t.y,e===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=n-s}return e}function xd(i,t){let e=yd(i,t);if(!e)return t;let n=Bu(e,i);return Pi(n,n.next),Pi(e,e.next)}function yd(i,t){let e=t,n=i.x,s=i.y,r=-1/0,a;if(Ms(i,e))return e;do{if(Ms(i,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=n&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===n))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(n>=e.x&&e.x>=l&&n!==e.x&&Fu(s<c?n:r,s,l,c,s<c?r:n,s,e.x,e.y)){let d=Math.abs(s-e.y)/(n-e.x);_r(e,i)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&vd(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function vd(i,t){return ve(i.prev,i,t.prev)<0&&ve(t.next,i,i.next)<0}function Md(i,t,e,n){let s=i;do s.z===0&&(s.z=Vl(s.x,s.y,t,e,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Sd(s)}function Sd(i){let t,e=1;do{let n=i,s;i=null;let r=null;for(t=0;n;){t++;let a=n,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,e*=2}while(t>1);return i}function Vl(i,t,e,n,s){return i=(i-e)*s|0,t=(t-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,i|t<<1}function bd(i){let t=i,e=i;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==i);return e}function Fu(i,t,e,n,s,r,a,o){return(s-a)*(t-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(n-o)}function Ys(i,t,e,n,s,r,a,o){return!(i===a&&t===o)&&Fu(i,t,e,n,s,r,a,o)}function Ed(i,t){return i.next.i!==t.i&&i.prev.i!==t.i&&!wd(i,t)&&(_r(i,t)&&_r(t,i)&&Td(i,t)&&(ve(i.prev,i,t.prev)||ve(i,t.prev,t))||Ms(i,t)&&ve(i.prev,i,i.next)>0&&ve(t.prev,t,t.next)>0)}function ve(i,t,e){return(t.y-i.y)*(e.x-t.x)-(t.x-i.x)*(e.y-t.y)}function Ms(i,t){return i.x===t.x&&i.y===t.y}function Ou(i,t,e,n){let s=ga(ve(i,t,e)),r=ga(ve(i,t,n)),a=ga(ve(e,n,i)),o=ga(ve(e,n,t));return!!(s!==r&&a!==o||s===0&&ma(i,e,t)||r===0&&ma(i,n,t)||a===0&&ma(e,i,n)||o===0&&ma(e,t,n))}function ma(i,t,e){return t.x<=Math.max(i.x,e.x)&&t.x>=Math.min(i.x,e.x)&&t.y<=Math.max(i.y,e.y)&&t.y>=Math.min(i.y,e.y)}function ga(i){return i>0?1:i<0?-1:0}function wd(i,t){let e=i;do{if(e.i!==i.i&&e.next.i!==i.i&&e.i!==t.i&&e.next.i!==t.i&&Ou(e,e.next,i,t))return!0;e=e.next}while(e!==i);return!1}function _r(i,t){return ve(i.prev,i,i.next)<0?ve(i,t,i.next)>=0&&ve(i,i.prev,t)>=0:ve(i,t,i.prev)<0||ve(i,i.next,t)<0}function Td(i,t){let e=i,n=!1,s=(i.x+t.x)/2,r=(i.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(n=!n),e=e.next;while(e!==i);return n}function Bu(i,t){let e=Wl(i.i,i.x,i.y),n=Wl(t.i,t.x,t.y),s=i.next,r=t.prev;return i.next=t,t.prev=i,e.next=s,s.prev=e,n.next=e,e.prev=n,r.next=n,n.prev=r,n}function Fh(i,t,e,n){let s=Wl(i,t,e);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function xr(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function Wl(i,t,e){return{i,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Ad(i,t,e,n){let s=0;for(let r=t,a=e-n;r<e;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var Xl=class{static triangulate(t,e,n=2){return ud(t,e,n)}},Ai=class i{static area(t){let e=t.length,n=0;for(let s=e-1,r=0;r<e;s=r++)n+=t[s].x*t[r].y-t[r].x*t[s].y;return n*.5}static isClockWise(t){return i.area(t)<0}static triangulateShape(t,e){let n=[],s=[],r=[];Oh(t),Bh(n,t);let a=t.length;e.forEach(Oh);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Bh(n,e[l]);let o=Xl.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Oh(i){let t=i.length;t>2&&i[t-1].equals(i[0])&&i.pop()}function Bh(i,t){for(let e=0;e<t.length;e++)i.push(t[e].x),i.push(t[e].y)}var yr=class i extends Ae{constructor(t=new vs([new it(.5,.5),new it(-.5,.5),new it(-.5,-.5),new it(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let n=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new pe(s,3)),this.setAttribute("uv",new pe(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,p=e.bevelSize!==void 0?e.bevelSize:f-.1,x=e.bevelOffset!==void 0?e.bevelOffset:0,g=e.bevelSegments!==void 0?e.bevelSegments:3,m=e.extrudePath,v=e.UVGenerator!==void 0?e.UVGenerator:Rd,E,S=!1,A,w,_,b;if(m){E=m.getSpacedPoints(h),S=!0,u=!1;let j=m.isCatmullRomCurve3?m.closed:!1;A=m.computeFrenetFrames(h,j),w=new L,_=new L,b=new L}u||(g=0,f=0,p=0,x=0);let U=o.extractPoints(c),C=U.shape,N=U.holes;if(!Ai.isClockWise(C)){C=C.reverse();for(let j=0,ct=N.length;j<ct;j++){let at=N[j];Ai.isClockWise(at)&&(N[j]=at.reverse())}}function V(j){let at=10000000000000001e-36,bt=j[0];for(let gt=1;gt<=j.length;gt++){let qt=gt%j.length,Pt=j[qt],te=Pt.x-bt.x,ee=Pt.y-bt.y,oe=te*te+ee*ee,D=Math.max(Math.abs(Pt.x),Math.abs(Pt.y),Math.abs(bt.x),Math.abs(bt.y)),be=at*D*D;if(oe<=be){j.splice(qt,1),gt--;continue}bt=Pt}}V(C),N.forEach(V);let I=N.length,k=C;for(let j=0;j<I;j++){let ct=N[j];C=C.concat(ct)}function X(j,ct,at){return ct||zt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(ct,at)}let G=C.length;function et(j,ct,at){let bt,gt,qt,Pt=j.x-ct.x,te=j.y-ct.y,ee=at.x-j.x,oe=at.y-j.y,D=Pt*Pt+te*te,be=Pt*oe-te*ee;if(Math.abs(be)>Number.EPSILON){let Qt=Math.sqrt(D),fe=Math.sqrt(ee*ee+oe*oe),dt=ct.x-te/Qt,Me=ct.y+Pt/Qt,Ft=at.x-oe/fe,Ht=at.y+ee/fe,T=((Ft-dt)*oe-(Ht-Me)*ee)/(Pt*oe-te*ee);bt=dt+Pt*T-j.x,gt=Me+te*T-j.y;let y=bt*bt+gt*gt;if(y<=2)return new it(bt,gt);qt=Math.sqrt(y/2)}else{let Qt=!1;Pt>Number.EPSILON?ee>Number.EPSILON&&(Qt=!0):Pt<-Number.EPSILON?ee<-Number.EPSILON&&(Qt=!0):Math.sign(te)===Math.sign(oe)&&(Qt=!0),Qt?(bt=-te,gt=Pt,qt=Math.sqrt(D)):(bt=Pt,gt=te,qt=Math.sqrt(D/2))}return new it(bt/qt,gt/qt)}let W=[];for(let j=0,ct=k.length,at=ct-1,bt=j+1;j<ct;j++,at++,bt++)at===ct&&(at=0),bt===ct&&(bt=0),W[j]=et(k[j],k[at],k[bt]);let Q=[],tt,Et=W.concat();for(let j=0,ct=I;j<ct;j++){let at=N[j];tt=[];for(let bt=0,gt=at.length,qt=gt-1,Pt=bt+1;bt<gt;bt++,qt++,Pt++)qt===gt&&(qt=0),Pt===gt&&(Pt=0),tt[bt]=et(at[bt],at[qt],at[Pt]);Q.push(tt),Et=Et.concat(tt)}let Ot;if(g===0)Ot=Ai.triangulateShape(k,N);else{let j=[],ct=[];for(let at=0;at<g;at++){let bt=at/g,gt=f*Math.cos(bt*Math.PI/2),qt=p*Math.sin(bt*Math.PI/2)+x;for(let Pt=0,te=k.length;Pt<te;Pt++){let ee=X(k[Pt],W[Pt],qt);Ut(ee.x,ee.y,-gt),bt===0&&j.push(ee)}for(let Pt=0,te=I;Pt<te;Pt++){let ee=N[Pt];tt=Q[Pt];let oe=[];for(let D=0,be=ee.length;D<be;D++){let Qt=X(ee[D],tt[D],qt);Ut(Qt.x,Qt.y,-gt),bt===0&&oe.push(Qt)}bt===0&&ct.push(oe)}}Ot=Ai.triangulateShape(j,ct)}let Y=Ot.length,_t=p+x;for(let j=0;j<G;j++){let ct=u?X(C[j],Et[j],_t):C[j];S?(_.copy(A.normals[0]).multiplyScalar(ct.x),w.copy(A.binormals[0]).multiplyScalar(ct.y),b.copy(E[0]).add(_).add(w),Ut(b.x,b.y,b.z)):Ut(ct.x,ct.y,0)}for(let j=1;j<=h;j++)for(let ct=0;ct<G;ct++){let at=u?X(C[ct],Et[ct],_t):C[ct];S?(_.copy(A.normals[j]).multiplyScalar(at.x),w.copy(A.binormals[j]).multiplyScalar(at.y),b.copy(E[j]).add(_).add(w),Ut(b.x,b.y,b.z)):Ut(at.x,at.y,d/h*j)}for(let j=g-1;j>=0;j--){let ct=j/g,at=f*Math.cos(ct*Math.PI/2),bt=p*Math.sin(ct*Math.PI/2)+x;for(let gt=0,qt=k.length;gt<qt;gt++){let Pt=X(k[gt],W[gt],bt);Ut(Pt.x,Pt.y,d+at)}for(let gt=0,qt=N.length;gt<qt;gt++){let Pt=N[gt];tt=Q[gt];for(let te=0,ee=Pt.length;te<ee;te++){let oe=X(Pt[te],tt[te],bt);S?Ut(oe.x,oe.y+E[h-1].y,E[h-1].x+at):Ut(oe.x,oe.y,d+at)}}}wt(),Nt();function wt(){let j=s.length/3;if(u){let ct=0,at=G*ct;for(let bt=0;bt<Y;bt++){let gt=Ot[bt];ge(gt[2]+at,gt[1]+at,gt[0]+at)}ct=h+g*2,at=G*ct;for(let bt=0;bt<Y;bt++){let gt=Ot[bt];ge(gt[0]+at,gt[1]+at,gt[2]+at)}}else{for(let ct=0;ct<Y;ct++){let at=Ot[ct];ge(at[2],at[1],at[0])}for(let ct=0;ct<Y;ct++){let at=Ot[ct];ge(at[0]+G*h,at[1]+G*h,at[2]+G*h)}}n.addGroup(j,s.length/3-j,0)}function Nt(){let j=s.length/3,ct=0;xt(k,ct),ct+=k.length;for(let at=0,bt=N.length;at<bt;at++){let gt=N[at];xt(gt,ct),ct+=gt.length}n.addGroup(j,s.length/3-j,1)}function xt(j,ct){let at=j.length;for(;--at>=0;){let bt=at,gt=at-1;gt<0&&(gt=j.length-1);for(let qt=0,Pt=h+g*2;qt<Pt;qt++){let te=G*qt,ee=G*(qt+1),oe=ct+bt+te,D=ct+gt+te,be=ct+gt+ee,Qt=ct+bt+ee;Bt(oe,D,be,Qt)}}}function Ut(j,ct,at){l.push(j),l.push(ct),l.push(at)}function ge(j,ct,at){$t(j),$t(ct),$t(at);let bt=s.length/3,gt=v.generateTopUV(n,s,bt-3,bt-2,bt-1);jt(gt[0]),jt(gt[1]),jt(gt[2])}function Bt(j,ct,at,bt){$t(j),$t(ct),$t(bt),$t(ct),$t(at),$t(bt);let gt=s.length/3,qt=v.generateSideWallUV(n,s,gt-6,gt-3,gt-2,gt-1);jt(qt[0]),jt(qt[1]),jt(qt[3]),jt(qt[1]),jt(qt[2]),jt(qt[3])}function $t(j){s.push(l[j*3+0]),s.push(l[j*3+1]),s.push(l[j*3+2])}function jt(j){r.push(j.x),r.push(j.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,n=this.parameters.options;return Cd(e,n,t)}static fromJSON(t,e){let n=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];n.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new Hl[s.type]().fromJSON(s)),new i(n,t.options)}},Rd={generateTopUV:function(i,t,e,n,s){let r=t[e*3],a=t[e*3+1],o=t[n*3],l=t[n*3+1],c=t[s*3],h=t[s*3+1];return[new it(r,a),new it(o,l),new it(c,h)]},generateSideWallUV:function(i,t,e,n,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[n*3],h=t[n*3+1],d=t[n*3+2],u=t[s*3],f=t[s*3+1],p=t[s*3+2],x=t[r*3],g=t[r*3+1],m=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new it(a,1-l),new it(c,1-d),new it(u,1-p),new it(x,1-m)]:[new it(o,1-l),new it(h,1-d),new it(f,1-p),new it(g,1-m)]}};function Cd(i,t,e){if(e.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}var Ss=class i extends Ae{constructor(t=[new it(0,-.5),new it(.5,0),new it(0,.5)],e=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:n,phiLength:s},e=Math.floor(e),s=Kt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new L,u=new it,f=new L,p=new L,x=new L,g=0,m=0;for(let v=0;v<=t.length-1;v++)switch(v){case 0:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,x.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:x.normalize(),l.push(x.x,x.y,x.z);break;default:g=t[v+1].x-t[v].x,m=t[v+1].y-t[v].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),l.push(f.x,f.y,f.z),x.copy(p)}for(let v=0;v<=e;v++){let E=n+v*h*s,S=Math.sin(E),A=Math.cos(E);for(let w=0;w<=t.length-1;w++){d.x=t[w].x*S,d.y=t[w].y,d.z=t[w].x*A,a.push(d.x,d.y,d.z),u.x=v/e,u.y=w/(t.length-1),o.push(u.x,u.y);let _=l[3*w+0]*S,b=l[3*w+1],U=l[3*w+0]*A;c.push(_,b,U)}}for(let v=0;v<e;v++)for(let E=0;E<t.length-1;E++){let S=E+v*t.length,A=S,w=S+t.length,_=S+t.length+1,b=S+1;r.push(A,w,b),r.push(_,b,w)}this.setIndex(r),this.setAttribute("position",new pe(a,3)),this.setAttribute("uv",new pe(o,2)),this.setAttribute("normal",new pe(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.points,t.segments,t.phiStart,t.phiLength)}};var qn=class i extends Ae{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],p=[],x=[],g=[];for(let m=0;m<h;m++){let v=m*u-a;for(let E=0;E<c;E++){let S=E*d-r;p.push(S,-v,0),x.push(0,0,1),g.push(E/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let E=v+c*m,S=v+c*(m+1),A=v+1+c*(m+1),w=v+1+c*m;f.push(E,S,w),f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.width,t.height,t.widthSegments,t.heightSegments)}};var oi=class i extends Ae{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new L,u=new L,f=[],p=[],x=[],g=[];for(let m=0;m<=n;m++){let v=[],E=m/n,S=a+E*o,A=t*Math.cos(S),w=Math.sqrt(t*t-A*A),_=0;m===0&&a===0?_=.5/e:m===n&&l===Math.PI&&(_=-.5/e);for(let b=0;b<=e;b++){let U=b/e,C=s+U*r;d.x=-w*Math.cos(C),d.y=A,d.z=w*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),g.push(U+_,1-E),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<e;v++){let E=h[m][v+1],S=h[m][v],A=h[m+1][v],w=h[m+1][v+1];(m!==0||a>0)&&f.push(E,S,w),(m!==n-1||l<Math.PI)&&f.push(S,A,w)}this.setIndex(f),this.setAttribute("position",new pe(p,3)),this.setAttribute("normal",new pe(x,3)),this.setAttribute("uv",new pe(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var vr=class i extends Ae{constructor(t=1,e=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new L,f=new L,p=new L;for(let x=0;x<=n;x++){let g=a+x/n*o;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(t+e*Math.cos(g))*Math.cos(v),f.y=(t+e*Math.cos(g))*Math.sin(v),f.z=e*Math.sin(g),c.push(f.x,f.y,f.z),u.x=t*Math.cos(v),u.y=t*Math.sin(v),p.subVectors(f,u).normalize(),h.push(p.x,p.y,p.z),d.push(m/s),d.push(x/n)}}for(let x=1;x<=n;x++)for(let g=1;g<=s;g++){let m=(s+1)*x+g-1,v=(s+1)*(x-1)+g-1,E=(s+1)*(x-1)+g,S=(s+1)*x+g;l.push(m,v,S),l.push(v,E,S)}this.setIndex(l),this.setAttribute("position",new pe(c,3)),this.setAttribute("normal",new pe(h,3)),this.setAttribute("uv",new pe(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new i(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}};function zi(i){let t={};for(let e in i){t[e]={};for(let n in i[e]){let s=i[e][n];if(zh(s))s.isRenderTargetTexture?(kt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone();else if(Array.isArray(s))if(zh(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][n]=r}else t[e][n]=s.slice();else t[e][n]=s}}return t}function qe(i){let t={};for(let e=0;e<i.length;e++){let n=zi(i[e]);for(let s in n)t[s]=n[s]}return t}function zh(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Id(i){let t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Mc(i){let t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:se.workingColorSpace}var zu={clone:zi,merge:qe},Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Pn=class extends Mn{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zi(t.uniforms),this.uniformsGroups=Id(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let s=t.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=e[s.value]||null;break;case"c":this.uniforms[n].value=new Gt().setHex(s.value);break;case"v2":this.uniforms[n].value=new it().fromArray(s.value);break;case"v3":this.uniforms[n].value=new L().fromArray(s.value);break;case"v4":this.uniforms[n].value=new xe().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ae().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},Va=class extends Pn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},tn=class extends Mn{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Li=class extends tn{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new it(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Kt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Gt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Gt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Gt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(t){this._diffuseRoughness>0!=t>0&&this.version++,this._diffuseRoughness=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(t){this._retroreflectivity>0!=t>0&&this.version++,this._retroreflectivity=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}get iridescenceThicknessRange(){return Ri('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(t){Ri('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=t[0],this.iridescenceThicknessMaximum=t[1]}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.diffuseRoughness=t.diffuseRoughness,this.diffuseRoughnessMap=t.diffuseRoughnessMap,this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum,this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.retroreflectivity=t.retroreflectivity,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Di=class extends Mn{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nr,this.normalScale=new it(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new un,this.combine=so,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Wa=class extends Mn{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Xa=class extends Mn{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function is(i,t){return!i||i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function _a(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var li=class{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,s=e[n],r=e[n-1];n:{t:{let a;e:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},qa=class extends li{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Bl,endingEnd:Bl}}intervalChanged_(t,e,n){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case zl:r=t,o=2*e-n;break;case kl:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case zl:a=t,l=2*n-e;break;case kl:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(s-e),x=p*p,g=x*p,m=-u*g+2*u*x-u*p,v=(1+u)*g+(-1.5-2*u)*x+(-.5+u)*p+1,E=(-1-f)*g+(1.5+f)*x+.5*p,S=f*g-f*x;for(let A=0;A!==o;++A)r[A]=m*a[h+A]+v*a[c+A]+E*a[l+A]+S*a[d+A];return r}},Ya=class extends li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Za=class extends li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}},Ja=class extends li{interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(s-e),x=1-p;for(let g=0;g!==o;++g)r[g]=a[c+g]*x+a[l+g]*p;return r}let u=o*2,f=t-1;for(let p=0;p!==o;++p){let x=a[c+p],g=a[l+p],m=f*u+p*2,v=d[m],E=d[m+1],S=t*u+p*2,A=h[S],w=h[S+1],_=Nd(n,e,v,A,s);r[p]=ku(_,x,E,w,g)}return r}};function ku(i,t,e,n,s){let r=1-i;return r*r*r*t+3*r*r*i*e+3*r*i*i*n+i*i*i*s}function Dd(i,t,e,n,s){let r=1-i;return 3*r*r*(e-t)+6*r*i*(n-e)+3*i*i*(s-n)}function Nd(i,t,e,n,s){let r=(i-t)/(s-t);for(let a=0;a<8;a++){let o=ku(r,t,e,n,s)-i;if(Math.abs(o)<1e-10)break;let l=Dd(r,t,e,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var on=class{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=is(e,this.TimeBufferType),this.values=is(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:is(t.times,Array),values:is(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s),_a(t.settings)&&(n.settings={inTangents:is(t.settings.inTangents,Array),outTangents:is(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Za(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Ya(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new qa(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Ja(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case $s:e=this.InterpolantFactoryMethodDiscrete;break;case Pa:e=this.InterpolantFactoryMethodLinear;break;case va:e=this.InterpolantFactoryMethodSmooth;break;case Ol:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $s;case this.InterpolantFactoryMethodLinear:return Pa;case this.InterpolantFactoryMethodSmooth:return va;case this.InterpolantFactoryMethodBezier:return Ol}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t;_a(this.settings)&&(kh(this.settings.inTangents,t),kh(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t;_a(this.settings)&&(Gh(this.settings.inTangents,t),Gh(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,s=this.values,r=n.length;r===0&&(zt("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){zt("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){zt("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&Of(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){zt("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===va,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let x=e[d+p];if(x!==e[u+p]||x!==e[f+p]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,_a(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function kh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]+=t}function Gh(i,t){for(let e=0,n=i.length;e!==n;e+=2)i[e]*=t}on.prototype.ValueTypeName="";on.prototype.TimeBufferType=Float32Array;on.prototype.ValueBufferType=Float32Array;on.prototype.DefaultInterpolation=Pa;var ci=class extends on{constructor(t,e,n){super(t,e,n)}};ci.prototype.ValueTypeName="bool";ci.prototype.ValueBufferType=Array;ci.prototype.DefaultInterpolation=$s;ci.prototype.InterpolantFactoryMethodLinear=void 0;ci.prototype.InterpolantFactoryMethodSmooth=void 0;var $a=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};$a.prototype.ValueTypeName="color";var Ka=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};Ka.prototype.ValueTypeName="number";var Qa=class extends li{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)hn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Mr=class extends on{constructor(t,e,n,s){super(t,e,n,s)}InterpolantFactoryMethodLinear(t){return new Qa(this.times,this.values,this.getValueSize(),t)}};Mr.prototype.ValueTypeName="quaternion";Mr.prototype.InterpolantFactoryMethodSmooth=void 0;var hi=class extends on{constructor(t,e,n){super(t,e,n)}};hi.prototype.ValueTypeName="string";hi.prototype.ValueBufferType=Array;hi.prototype.DefaultInterpolation=$s;hi.prototype.InterpolantFactoryMethodLinear=void 0;hi.prototype.InterpolantFactoryMethodSmooth=void 0;var ja=class extends on{constructor(t,e,n,s){super(t,e,n,s)}};ja.prototype.ValueTypeName="vector";var to=class{constructor(t,e,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Gu=new to,eo=class{constructor(t){this.manager=t!==void 0?t:Gu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};eo.DEFAULT_MATERIAL_NAME="__DEFAULT";var bs=class extends Te{static registerNode(t){this.prototype._lightNode=t}constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Es=class extends bs{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},Fl=new ae,Hh=new L,Vh=new L,Sr=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new it(512,512),this.mapType=en,this.map=null,this.mapPass=null,this.matrix=new ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ri,this._frameExtents=new it(1,1),this._viewportCount=1,this._viewports=[new xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Hh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hh),Vh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Vh),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,s){Fl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Fl,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===ls||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(Fl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.mapType=t.mapType,this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.mapType=this.mapType,t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},xa=new L,ya=new hn,An=new L,br=class extends Te{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ae,this.projectionMatrix=new ae,this.projectionMatrixInverse=new ae,this.coordinateSystem=cn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(xa,ya,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,An.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(xa,ya,An),An.x===1&&An.y===1&&An.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xa,ya,An.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ni=new L,Wh=new it,Xh=new it,Oe=class extends br{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=La*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ul*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return La*2*Math.atan(Math.tan(ul*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){ni.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ni.x,ni.y).multiplyScalar(-t/ni.z),ni.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ni.x,ni.y).multiplyScalar(-t/ni.z)}getViewSize(t,e){return this.getViewBounds(t,Wh,Xh),e.subVectors(Xh,Wh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ul*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ql=class extends Sr{constructor(){super(new Oe(90,1,.5,500)),this.isPointLightShadow=!0}},ui=class extends bs{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ql}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Er=class extends br{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Yl=class extends Sr{constructor(){super(new Er(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fi=class extends bs{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Te.DEFAULT_UP),this.updateMatrix(),this.target=new Te,this.shadow=new Yl}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ss=-90,rs=1,ws=class extends Te{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Oe(ss,rs,t,e);s.layers=this.layers,this.add(s);let r=new Oe(ss,rs,t,e);r.layers=this.layers,this.add(r);let a=new Oe(ss,rs,t,e);a.layers=this.layers,this.add(a);let o=new Oe(ss,rs,t,e);o.layers=this.layers,this.add(o);let l=new Oe(ss,rs,t,e);l.layers=this.layers,this.add(l);let c=new Oe(ss,rs,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===cn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ls)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let x=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let g=!1;t.isWebGLRenderer===!0?g=t.state.buffers.depth.getReversed():g=t.reversedDepthBuffer,t.setRenderTarget(n,0,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=x,t.setRenderTarget(n,5,s),g&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},no=class extends Oe{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Sc="\\[\\]\\.:\\/",Ud=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",Fd="[^"+Sc.replace("\\.","")+"]",Od=/((?:WC+[\/:])*)/.source.replace("WC",bc),Bd=/(WCOD+)?/.source.replace("WCOD",Fd),zd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),kd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),Gd=new RegExp("^"+Od+Bd+zd+kd+"$"),Hd=["material","materials","bones","map"],Zl=class{constructor(t,e,n){let s=n||_e.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},_e=class i{constructor(t,e,n){this.path=e,this.parsedPath=n||i.parseTrackName(e),this.node=i.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new i.Composite(t,e,n):new i(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Ud,"")}static parseTrackName(t){let e=Gd.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);Hd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=i.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){kt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;zt("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};_e.Composite=Zl;_e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};_e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};_e.prototype.GetterByBindingType=[_e.prototype._getValue_direct,_e.prototype._getValue_array,_e.prototype._getValue_arrayElement,_e.prototype._getValue_toArray];_e.prototype.SetterByBindingTypeAndVersioning=[[_e.prototype._setValue_direct,_e.prototype._setValue_direct_setNeedsUpdate,_e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_array,_e.prototype._setValue_array_setNeedsUpdate,_e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_arrayElement,_e.prototype._setValue_arrayElement_setNeedsUpdate,_e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[_e.prototype._setValue_fromArray,_e.prototype._setValue_fromArray_setNeedsUpdate,_e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var tx=new Float32Array(1);var qh=new ae,wr=class{constructor(t,e,n=0,s=1/0){this.ray=new ms(t,e),this.near=n,this.far=s,this.camera=null,this.layers=new us,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(t,e){this.ray.set(t,e)}setFromCamera(t,e){e.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(t.x,t.y,.5).unproject(e).sub(this.ray.origin).normalize(),this.camera=e):e.isOrthographicCamera?(this.ray.origin.set(t.x,t.y,e.projectionMatrix.elements[14]).unproject(e),this.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),this.camera=e):zt("Raycaster: Unsupported camera type: "+e.type)}setFromXRController(t){return qh.identity().extractRotation(t.matrixWorld),this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(qh),this}intersectObject(t,e=!0,n=[]){return Jl(t,this,n,e),n.sort(Yh),n}intersectObjects(t,e=!0,n=[]){for(let s=0,r=t.length;s<r;s++)Jl(t[s],this,n,e);return n.sort(Yh),n}};function Yh(i,t){return i.distance-t.distance}function Jl(i,t,e,n){let s=!0;if(i.layers.test(t.layers)&&i.raycast(t,e)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)Jl(r[a],t,e,!0)}}var Cc=class Cc{constructor(t,e,n,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=s,this}};Cc.prototype.isMatrix2=!0;var $l=Cc;function Ec(i,t,e,n){let s=Vd(n);switch(e){case dc:return i*t;case uo:return i*t/s.components*s.byteLength;case fo:return i*t/s.components*s.byteLength;case mi:return i*t*2/s.components*s.byteLength;case po:return i*t*2/s.components*s.byteLength;case pc:return i*t*3/s.components*s.byteLength;case En:return i*t*4/s.components*s.byteLength;case mo:return i*t*4/s.components*s.byteLength;case Rr:case Cr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ir:case Pr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case _o:case yo:return Math.max(i,16)*Math.max(t,8)/4;case go:case xo:return Math.max(i,8)*Math.max(t,8)/2;case vo:case Mo:case bo:case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case So:case Lr:case wo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ro:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Io:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Oo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case zo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ko:case Go:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Vo:case Wo:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Dr:case Xo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Vd(i){switch(i){case en:case cc:return{byteLength:1,components:1};case Cs:case hc:case bn:return{byteLength:2,components:1};case co:case ho:return{byteLength:2,components:4};case Sn:case lo:case dn:return{byteLength:4,components:1};case uc:case fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?kt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function hf(){let i=null,t=!1,e=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&i!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function Jd(i){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],x=d[f];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let x=d[f];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var $d=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kd=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Qd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,tp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,np=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ip=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,op=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lp=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,cp=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,hp=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,gp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,_p=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,xp=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yp=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,vp=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Mp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Cp=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ip=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Lp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Dp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Np=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Up=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Fp=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Op=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Bp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,zp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Gp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Hp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Yp=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Zp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Jp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,$p=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Kp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Qp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,jp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,em=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,im=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,sm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,rm=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,am=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,om=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cm=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,um=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,fm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,dm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,pm=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,xm=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ym=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,vm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Sm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,bm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Em=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,wm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Am=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Rm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Im=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Nm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Fm=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Bm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,km=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Gm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Vm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Wm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ym=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Jm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$m=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,t0=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,e0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,n0=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,i0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,s0=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,r0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,a0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,o0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,l0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,h0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,f0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,p0=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,m0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,g0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,_0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,x0=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,v0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,M0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,S0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,b0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,E0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,w0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,A0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,R0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Jt={alphahash_fragment:$d,alphahash_pars_fragment:Kd,alphamap_fragment:Qd,alphamap_pars_fragment:jd,alphatest_fragment:tp,alphatest_pars_fragment:ep,aomap_fragment:np,aomap_pars_fragment:ip,batching_pars_vertex:sp,batching_vertex:rp,begin_vertex:ap,beginnormal_vertex:op,bsdfs:lp,iridescence_fragment:cp,bumpmap_pars_fragment:hp,clipping_planes_fragment:up,clipping_planes_pars_fragment:fp,clipping_planes_pars_vertex:dp,clipping_planes_vertex:pp,color_fragment:mp,color_pars_fragment:gp,color_pars_vertex:_p,color_vertex:xp,common:yp,defaultnormal_vertex:vp,displacementmap_pars_vertex:Mp,displacementmap_vertex:Sp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ep,colorspace_fragment:wp,colorspace_pars_fragment:Tp,envmap_fragment:Ap,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Cp,envmap_pars_vertex:Ip,envmap_physical_pars_fragment:Gp,envmap_vertex:Pp,fog_vertex:Lp,fog_pars_vertex:Dp,fog_fragment:Np,fog_pars_fragment:Up,gradientmap_pars_fragment:Fp,lightmap_pars_fragment:Op,lights_lambert_fragment:Bp,lights_lambert_pars_fragment:zp,lights_pars_begin:kp,lights_toon_fragment:Hp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:qp,lights_physical_pars_fragment:Yp,lights_fragment_begin:Zp,lights_fragment_maps:Jp,lights_fragment_end:$p,lightprobes_pars_fragment:Kp,logdepthbuf_fragment:Qp,logdepthbuf_pars_fragment:jp,logdepthbuf_pars_vertex:tm,logdepthbuf_vertex:em,map_fragment:nm,map_pars_fragment:im,map_particle_fragment:sm,map_particle_pars_fragment:rm,metalnessmap_fragment:am,metalnessmap_pars_fragment:om,morphinstance_vertex:lm,morphcolor_vertex:cm,morphnormal_vertex:hm,morphtarget_pars_vertex:um,morphtarget_vertex:fm,normal_fragment_begin:dm,normal_fragment_maps:pm,normal_pars_fragment:mm,normal_pars_vertex:gm,normal_vertex:_m,normalmap_pars_fragment:xm,clearcoat_normal_fragment_begin:ym,clearcoat_normal_fragment_maps:vm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:Sm,opaque_fragment:bm,packing:Em,premultiplied_alpha_fragment:wm,project_vertex:Tm,dithering_fragment:Am,dithering_pars_fragment:Rm,roughnessmap_fragment:Cm,roughnessmap_pars_fragment:Im,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Dm,shadowmask_pars_fragment:Nm,skinbase_vertex:Um,skinning_pars_vertex:Fm,skinning_vertex:Om,skinnormal_vertex:Bm,specularmap_fragment:zm,specularmap_pars_fragment:km,tonemapping_fragment:Gm,tonemapping_pars_fragment:Hm,transmission_fragment:Vm,transmission_pars_fragment:Wm,uv_pars_fragment:Xm,uv_pars_vertex:qm,uv_vertex:Ym,worldpos_vertex:Zm,background_vert:Jm,background_frag:$m,backgroundCube_vert:Km,backgroundCube_frag:Qm,cube_vert:jm,cube_frag:t0,depth_vert:e0,depth_frag:n0,distance_vert:i0,distance_frag:s0,equirect_vert:r0,equirect_frag:a0,linedashed_vert:o0,linedashed_frag:l0,meshbasic_vert:c0,meshbasic_frag:h0,meshlambert_vert:u0,meshlambert_frag:f0,meshmatcap_vert:d0,meshmatcap_frag:p0,meshnormal_vert:m0,meshnormal_frag:g0,meshphong_vert:_0,meshphong_frag:x0,meshphysical_vert:y0,meshphysical_frag:v0,meshtoon_vert:M0,meshtoon_frag:S0,points_vert:b0,points_frag:E0,shadow_vert:w0,shadow_frag:T0,sprite_vert:A0,sprite_frag:R0},vt={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Vt}},envmap:{envMap:{value:null},envMapRotation:{value:new Vt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Vt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Vt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Vt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Vt},normalScale:{value:new it(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Vt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Vt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Vt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Vt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0},uvTransform:{value:new Vt}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new it(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Vt},alphaMap:{value:null},alphaMapTransform:{value:new Vt},alphaTest:{value:0}}},Nn={basic:{uniforms:qe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:qe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:qe([vt.common,vt.specularmap,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:qe([vt.common,vt.envmap,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.roughnessmap,vt.metalnessmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:qe([vt.common,vt.aomap,vt.lightmap,vt.emissivemap,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.gradientmap,vt.fog,vt.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:qe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,vt.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:qe([vt.points,vt.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:qe([vt.common,vt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:qe([vt.common,vt.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:qe([vt.common,vt.bumpmap,vt.normalmap,vt.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:qe([vt.sprite,vt.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Vt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Vt}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:qe([vt.common,vt.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:qe([vt.lights,vt.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Nn.physical={uniforms:qe([Nn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Vt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Vt},clearcoatNormalScale:{value:new it(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Vt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Vt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Vt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Vt},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Vt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Vt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Vt},transmissionSamplerSize:{value:new it},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Vt},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Vt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Vt},anisotropyVector:{value:new it},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Vt}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Yo={r:0,b:0,g:0},C0=new ae,uf=new Vt;uf.set(-1,0,0,0,1,0,0,0,1);function I0(i,t,e,n,s,r){let a=new Gt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let E=v.isScene===!0?v.background:null;if(E&&E.isTexture){let S=v.backgroundBlurriness>0;E=t.get(E,S)}return E}function p(v){let E=!1,S=f(v);S===null?g(a,o):S&&S.isColor&&(g(S,1),E=!0);let A=i.xr.getEnvironmentBlendMode();A==="additive"?e.buffers.color.setClear(0,0,0,1,r):A==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(v,E){let S=f(E);S&&S.isCubeTexture?(c===void 0&&(c=new ce(new je(1,1,1),new Pn({name:"BackgroundCubeMaterial",uniforms:zi(Nn.backgroundCube.uniforms),vertexShader:Nn.backgroundCube.vertexShader,fragmentShader:Nn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(A,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=S,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(C0.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(uf),c.material.toneMapped=se.getTransfer(S.colorSpace)!==he,(h!==S||d!==S.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):S&&S.isTexture&&(l===void 0&&(l=new ce(new qn(2,2),new Pn({name:"BackgroundMaterial",uniforms:zi(Nn.background.uniforms),vertexShader:Nn.background.vertexShader,fragmentShader:Nn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=S,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=se.getTransfer(S.colorSpace)!==he,S.matrixAutoUpdate===!0&&S.updateMatrix(),l.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=S,d=S.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function g(v,E){v.getRGB(Yo,Mc(i)),e.buffers.color.setClear(Yo.r,Yo.g,Yo.b,E,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,E=1){a.set(v),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,g(a,o)},render:p,addToRenderList:x,dispose:m}}function P0(i,t){let e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(N,F,V,I,k){let X=!1,G=d(N,I,V,F);r!==G&&(r=G,c(r.object)),X=f(N,I,V,k),X&&p(N,I,V,k),k!==null&&t.update(k,i.ELEMENT_ARRAY_BUFFER),(X||a)&&(a=!1,S(N,F,V,I),k!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return i.createVertexArray()}function c(N){return i.bindVertexArray(N)}function h(N){return i.deleteVertexArray(N)}function d(N,F,V,I){let k=I.wireframe===!0,X=n[F.id];X===void 0&&(X={},n[F.id]=X);let G=N.isInstancedMesh===!0?N.id:0,et=X[G];et===void 0&&(et={},X[G]=et);let W=et[V.id];W===void 0&&(W={},et[V.id]=W);let Q=W[k];return Q===void 0&&(Q=u(l()),W[k]=Q),Q}function u(N){let F=[],V=[],I=[];for(let k=0;k<e;k++)F[k]=0,V[k]=0,I[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:V,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,F,V,I){let k=r.attributes,X=F.attributes,G=0,et=V.getAttributes();for(let W in et)if(et[W].location>=0){let tt=k[W],Et=X[W];if(Et===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Et=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Et=N.instanceColor)),tt===void 0||tt.attribute!==Et||Et&&tt.data!==Et.data)return!0;G++}return r.attributesNum!==G||r.index!==I}function p(N,F,V,I){let k={},X=F.attributes,G=0,et=V.getAttributes();for(let W in et)if(et[W].location>=0){let tt=X[W];tt===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(tt=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(tt=N.instanceColor));let Et={};Et.attribute=tt,tt&&tt.data&&(Et.data=tt.data),k[W]=Et,G++}r.attributes=k,r.attributesNum=G,r.index=I}function x(){let N=r.newAttributes;for(let F=0,V=N.length;F<V;F++)N[F]=0}function g(N){m(N,0)}function m(N,F){let V=r.newAttributes,I=r.enabledAttributes,k=r.attributeDivisors;V[N]=1,I[N]===0&&(i.enableVertexAttribArray(N),I[N]=1),k[N]!==F&&(i.vertexAttribDivisor(N,F),k[N]=F)}function v(){let N=r.newAttributes,F=r.enabledAttributes;for(let V=0,I=F.length;V<I;V++)F[V]!==N[V]&&(i.disableVertexAttribArray(V),F[V]=0)}function E(N,F,V,I,k,X,G){G===!0?i.vertexAttribIPointer(N,F,V,k,X):i.vertexAttribPointer(N,F,V,I,k,X)}function S(N,F,V,I){x();let k=I.attributes,X=V.getAttributes(),G=F.defaultAttributeValues;for(let et in X){let W=X[et];if(W.location>=0){let Q=k[et];if(Q===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(Q=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(Q=N.instanceColor)),Q!==void 0){let tt=Q.normalized,Et=Q.itemSize,Ot=t.get(Q);if(Ot===void 0)continue;let Y=Ot.buffer,_t=Ot.type,wt=Ot.bytesPerElement,Nt=_t===i.INT||_t===i.UNSIGNED_INT||Q.gpuType===lo;if(Q.isInterleavedBufferAttribute){let xt=Q.data,Ut=xt.isInterleavedBuffer===!0?xt.stride:xt.itemSize,ge=Q.offset;if(xt.isInstancedInterleavedBuffer||xt.isInstancedBufferAttribute){for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt,xt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=xt.meshPerAttribute*xt.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)g(W.location+Bt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let Bt=0;Bt<W.locationSize;Bt++)E(W.location+Bt,Et/W.locationSize,_t,tt,Ut*wt,(ge+Et/W.locationSize*Bt)*wt,Nt)}else{if(Q.isInstancedBufferAttribute){for(let xt=0;xt<W.locationSize;xt++)m(W.location+xt,Q.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let xt=0;xt<W.locationSize;xt++)g(W.location+xt);i.bindBuffer(i.ARRAY_BUFFER,Y);for(let xt=0;xt<W.locationSize;xt++)E(W.location+xt,Et/W.locationSize,_t,tt,Et*wt,Et/W.locationSize*xt*wt,Nt)}}else if(G!==void 0){let tt=G[et];if(tt!==void 0)switch(tt.length){case 2:i.vertexAttrib2fv(W.location,tt);break;case 3:i.vertexAttrib3fv(W.location,tt);break;case 4:i.vertexAttrib4fv(W.location,tt);break;default:i.vertexAttrib1fv(W.location,tt)}}}}v()}function A(){U();for(let N in n){let F=n[N];for(let V in F){let I=F[V];for(let k in I){let X=I[k];for(let G in X)h(X[G].object),delete X[G];delete I[k]}}delete n[N]}}function w(N){if(n[N.id]===void 0)return;let F=n[N.id];for(let V in F){let I=F[V];for(let k in I){let X=I[k];for(let G in X)h(X[G].object),delete X[G];delete I[k]}}delete n[N.id]}function _(N){for(let F in n){let V=n[F];for(let I in V){let k=V[I];if(k[N.id]===void 0)continue;let X=k[N.id];for(let G in X)h(X[G].object),delete X[G];delete k[N.id]}}}function b(N){for(let F in n){let V=n[F],I=N.isInstancedMesh===!0?N.id:0,k=V[I];if(k!==void 0){for(let X in k){let G=k[X];for(let et in G)h(G[et].object),delete G[et];delete k[X]}delete V[I],Object.keys(V).length===0&&delete n[F]}}}function U(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:U,resetDefaultState:C,dispose:A,releaseStatesOfGeometry:w,releaseStatesOfObject:b,releaseStatesOfProgram:_,initAttributes:x,enableAttribute:g,disableUnusedAttributes:v}}function L0(i,t,e){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),e.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function D0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let _=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==En&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let b=_===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(_!==en&&_!==dn&&!b&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(kt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&kt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&kt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),A=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:v,maxVaryings:E,maxFragmentUniforms:S,maxSamples:A,samples:w}}function N0(i){let t=this,e=null,n=0,s=!1,r=!1,a=new vn,o=new Vt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,x=d.clipIntersection,g=d.clipShadows,m=i.get(d);if(!s||p===null||p.length===0||r&&!g)r?h(null):c();else{let v=r?0:n,E=v*4,S=m.clippingState||null;l.value=S,S=h(p,u,E,f);for(let A=0;A!==E;++A)S[A]=e[A];m.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let x=d!==null?d.length:0,g=null;if(x!==0){if(g=l.value,p!==!0||g===null){let m=f+x*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(g===null||g.length<m)&&(g=new Float32Array(m));for(let E=0,S=f;E!==x;++E,S+=4)a.copy(d[E]).applyMatrix4(v,o),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}var Or=class extends rn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new lr(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new je(5,5,5),r=new Pn({name:"CubemapFromEquirect",uniforms:zi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:Ui});r.uniforms.tEquirect.value=e;let a=new ce(s,r),o=e.minFilter;return e.minFilter===Yn&&(e.minFilter=$e),new ws(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}},Hu=256,U0=3,F0=20,ff=256,df=16,O0=3,B0=new L,z0=new Gt,Ps=class i{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new ws(1,10,null),this._boxMesh=new ce(new je(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,s=100,r={}){let{size:a=256,position:o=B0}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,x=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,x===null&&(t.background=l.getClearColor(z0));let g=new ws(n,s,h);return g.position.copy(o),g.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=x,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Xu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(Hu,Iu(t))}_fromTexture(t,e){t.mapping===Oi||t.mapping===Rs?this._setSize(t.image.length===0?Hu:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=Vu(t,!1,!1),n=Math.log2(t)-U0;for(let s=0;s<=n;s++)e.texture.mipmaps.push({width:t>>s,height:t>>s});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Vu(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let a=t.width>>e;t.viewport.set(0,0,a,a),r.update(this._renderer,s),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Oi||t.mapping===Rs?(this._cubemapMaterial===null&&(this._cubemapMaterial=Xu()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Wu()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=k0(),this._integrationMaterial=G0());let e=this._cubeSize,n=t.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/df);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-O0)r.roughness.value=o,this._renderCube(t,a,this._integrationMaterial);else{let l=o>0?Math.log2(e)+.5*Math.log2(6/(ff*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(t,a,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=H0());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(t,0,n),s.envMap.value=t.texture,this._renderCube(r,0,n)}};function Vu(i,t,e){return new Or(i,{minFilter:Yn,generateMipmaps:t,type:bn,colorSpace:Ks,depthBuffer:e})}function Br(i,t,e){return new Pn({name:i,uniforms:t,vertexShader:Jt.cube_vert,fragmentShader:e,side:Be,blending:Ui,depthTest:!1,depthWrite:!1})}function k0(){return Br("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${ff}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function G0(){return Br("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:df}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function H0(){return Br("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${F0}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Wu(){return Br("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Xu(){return Br("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function V0(i){let t=new WeakMap,e=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ro||f===ao)if(t.has(u)){let p=t.get(u).texture;return o(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let x=new Or(p.height);return x.fromEquirectangularTexture(i,u),t.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===ro||f===ao,x=f===Oi||f===Rs;if(p||x){let g=e.get(u),m=g!==void 0?g.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Ps(i)),g=p?n.fromEquirectangular(u,g):n.fromCubemap(u,g),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),g.texture;if(g!==void 0)return g.texture;{let v=u.image;return p&&v&&v.height>0||x&&v&&l(v)?(n===null&&(n=new Ps(i)),g=p?n.fromEquirectangular(u):n.fromCubemap(u),g.texture.pmremVersion=u.pmremVersion,e.set(u,g),u.addEventListener("dispose",h),g.texture):null}}}return u}function o(u,f){return f===ro?u.mapping=Oi:f===ao&&(u.mapping=Rs),u}function l(u){let f=0,p=6;for(let x=0;x<p;x++)u[x]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function W0(i){let t={};function e(n){if(t[n]!==void 0)return t[n];let s=i.getExtension(n);return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let s=e(n);return s===null&&Ri("WebGLRenderer: "+n+" extension not supported."),s}}}function X0(i,t,e,n){let s={},r=new WeakMap,a=new FinalizationRegistry(p=>delete s[p]);function o(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let g in p.attributes)t.remove(p.attributes[g]);p.removeEventListener("dispose",o),delete s[p.id],a.unregister(p);let x=r.get(p);x&&(t.remove(x),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,x){return s[x.id]!==void 0||(x.addEventListener("dispose",o),s[x.id]=new WeakRef(x),a.register(x,x.id,x),e.memory.geometries++),x}function h(p){let x=p.attributes;for(let g in x)t.update(x[g],i.ARRAY_BUFFER)}function d(p){let x=p.index,g=p.attributes.position,m=0;if(g===void 0)return;let v=x!==null?x.array.length:g.array.length/3-1,E=g.count>=65535?ir:nr,S=new E(Math.ceil(v/3)*6,1),A=S.array;if(x!==null){let _=x.array;m=x.version;for(let b=0,U=0;b<v;b+=3){let C=_[b+0],N=_[b+1],F=_[b+2];A[U++]=C,A[U++]=N,A[U++]=N,A[U++]=F,A[U++]=F,A[U++]=C}}else{m=g.version;for(let _=0,b=0;_<v;_+=3){let U=_+0,C=_+1,N=_+2;A[b++]=U,A[b++]=C,A[b++]=C,A[b++]=N,A[b++]=N,A[b++]=U}}S.version=m;let w=r.get(p);w&&t.remove(w),r.set(p,S)}function u(p){let x=r.get(p);if(x){let g=p.index;g!==null&&x.version<g.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in s){let x=s[p].deref();x!==void 0&&l(x)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function q0(i,t,e){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),e.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let x=0;for(let g=0;g<f;g++)x+=u[g];e.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function Y0(i){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:zt("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Z0(i,t,e){let n=new WeakMap,s=new xe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let U=function(){_.dispose(),n.delete(o),o.removeEventListener("dispose",U)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],E=0;f===!0&&(E=1),p===!0&&(E=2),x===!0&&(E=3);let S=o.attributes.position.count*E,A=1;S>t.maxTextureSize&&(A=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);let w=new Float32Array(S*A*4*d),_=new er(w,S,A,d);_.type=dn,_.needsUpdate=!0;let b=E*4;for(let C=0;C<d;C++){let N=g[C],F=m[C],V=v[C],I=S*A*4*C;for(let k=0;k<N.count;k++){let X=k*b;f===!0&&(s.fromBufferAttribute(N,k),w[I+X+0]=s.x,w[I+X+1]=s.y,w[I+X+2]=s.z,w[I+X+3]=0),p===!0&&(s.fromBufferAttribute(F,k),w[I+X+4]=s.x,w[I+X+5]=s.y,w[I+X+6]=s.z,w[I+X+7]=0),x===!0&&(s.fromBufferAttribute(V,k),w[I+X+8]=s.x,w[I+X+9]=s.y,w[I+X+10]=s.z,w[I+X+11]=V.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new it(S,A)},n.set(o,u),o.addEventListener("dispose",U)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function J0(i,t,e,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}var $0={[nc]:"LINEAR_TONE_MAPPING",[ic]:"REINHARD_TONE_MAPPING",[sc]:"CINEON_TONE_MAPPING",[rc]:"ACES_FILMIC_TONE_MAPPING",[oc]:"AGX_TONE_MAPPING",[Tr]:"NEUTRAL_TONE_MAPPING",[ac]:"CUSTOM_TONE_MAPPING"};function K0(i,t,e,n,s,r){let a=new rn(t,e,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new Ae;h.setAttribute("position",new pe([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new pe([0,2,0,0,2,0],2));let d=new Va({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ce(h,d),f=new Er(-1,1,1,-1,0,1),p=null,x=null,g=!1,m,v=null,E=[],S=!1;this.setSize=function(A,w){a.setSize(A,w),o!==null&&o.setSize(A,w),l!==null&&l.setSize(A,w);for(let _=0;_<E.length;_++){let b=E[_];b.setSize&&b.setSize(A,w)}},this.setEffects=function(A){E=A,S=E.length>0&&E[0].isRenderPass===!0;let w=a.width,_=a.height;E.length>0&&o===null&&(o=new rn(w,_,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new rn(w,_,{type:bn,depthBuffer:!1,stencilBuffer:!1}));let b=s===!0&&E.some(U=>U.needsDepthTexture===!0);b!==(a.depthTexture!==null)&&(b===!0&&c===null&&(c=new Xn(w,_),r===!0&&(c.format=Zn,c.type=Bi)),a.dispose(),a.depthTexture=b?c:null,a.resolveDepthBuffer=b,a.storeMultisampledDepthBuffer=b);for(let U=0;U<E.length;U++){let C=E[U];C.setSize&&C.setSize(w,_),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(A,w){if(g||A.toneMapping===Ln&&E.length===0)return!1;if(v=w,w!==null){let _=w.width,b=w.height;(a.width!==_||a.height!==b)&&this.setSize(_,b)}return S===!1&&A.setRenderTarget(a),m=A.toneMapping,A.toneMapping=Ln,!0},this.hasRenderPass=function(){return S},this.end=function(A,w){A.toneMapping=m,g=!0;let _=a,b=o;for(let U=0;U<E.length;U++){let C=E[U];C.enabled!==!1&&(C.render(A,b,_,w),C.needsSwap!==!1&&(_=b,b=b===o?l:o))}if(p!==A.outputColorSpace||x!==A.toneMapping){p=A.outputColorSpace,x=A.toneMapping,d.defines={},se.getTransfer(p)===he&&(d.defines.SRGB_TRANSFER="");let U=$0[x];U&&(d.defines[U]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,A.setRenderTarget(v),A.render(u,f),v=null,g=!1},this.isCompositing=function(){return g},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var pf=new Ke,mf=new Xn(1,1),gf=new hr(1),_f=new er,xf=new Ua,yf=new lr,qu=[],Yu=[],Zu=new Float32Array(16),Ju=new Float32Array(9),$u=new Float32Array(4);function Ls(i,t,e){let n=i[0];if(n<=0||n>0)return i;let s=t*e,r=qu[s];if(r===void 0&&(r=new Float32Array(s),qu[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function Re(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ce(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function $o(i,t){let e=Yu[t];e===void 0&&(e=new Int32Array(t),Yu[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function Q0(i,t){let e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function j0(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2fv(this.addr,t),Ce(e,t)}}function tg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Re(e,t))return;i.uniform3fv(this.addr,t),Ce(e,t)}}function eg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4fv(this.addr,t),Ce(e,t)}}function ng(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;$u.set(n),i.uniformMatrix2fv(this.addr,!1,$u),Ce(e,n)}}function ig(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Ju.set(n),i.uniformMatrix3fv(this.addr,!1,Ju),Ce(e,n)}}function sg(i,t){let e=this.cache,n=t.elements;if(n===void 0){if(Re(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ce(e,t)}else{if(Re(e,n))return;Zu.set(n),i.uniformMatrix4fv(this.addr,!1,Zu),Ce(e,n)}}function rg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function ag(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2iv(this.addr,t),Ce(e,t)}}function og(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3iv(this.addr,t),Ce(e,t)}}function lg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4iv(this.addr,t),Ce(e,t)}}function cg(i,t){let e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function hg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Re(e,t))return;i.uniform2uiv(this.addr,t),Ce(e,t)}}function ug(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Re(e,t))return;i.uniform3uiv(this.addr,t),Ce(e,t)}}function fg(i,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Re(e,t))return;i.uniform4uiv(this.addr,t),Ce(e,t)}}function Ko(i){return i.version===0&&(i.compareFunction=_c,i.needsUpdate=!0),i}function dg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ko(mf):r=pf,e.setTexture2D(t||r,s)}function pg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||xf,s)}function mg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ko(gf):r=yf,e.setTextureCube(t||r,s)}function gg(i,t,e){let n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||_f,s)}function _g(i){switch(i){case 5126:return Q0;case 35664:return j0;case 35665:return tg;case 35666:return eg;case 35674:return ng;case 35675:return ig;case 35676:return sg;case 5124:case 35670:return rg;case 35667:case 35671:return ag;case 35668:case 35672:return og;case 35669:case 35673:return lg;case 5125:return cg;case 36294:return hg;case 36295:return ug;case 36296:return fg;case 35678:case 36198:case 36298:case 36306:case 35682:return dg;case 35679:case 36299:case 36307:return pg;case 35680:case 36300:case 36308:case 36293:return mg;case 36289:case 36303:case 36311:case 36292:return gg}}function xg(i,t){i.uniform1fv(this.addr,t)}function yg(i,t){let e=Ls(t,this.size,2);i.uniform2fv(this.addr,e)}function vg(i,t){let e=Ls(t,this.size,3);i.uniform3fv(this.addr,e)}function Mg(i,t){let e=Ls(t,this.size,4);i.uniform4fv(this.addr,e)}function Sg(i,t){let e=Ls(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function bg(i,t){let e=Ls(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Eg(i,t){let e=Ls(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function wg(i,t){i.uniform1iv(this.addr,t)}function Tg(i,t){i.uniform2iv(this.addr,t)}function Ag(i,t){i.uniform3iv(this.addr,t)}function Rg(i,t){i.uniform4iv(this.addr,t)}function Cg(i,t){i.uniform1uiv(this.addr,t)}function Ig(i,t){i.uniform2uiv(this.addr,t)}function Pg(i,t){i.uniform3uiv(this.addr,t)}function Lg(i,t){i.uniform4uiv(this.addr,t)}function Dg(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Ko(mf):a=pf;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Ng(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||xf,r[a])}function Ug(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Ko(gf):a=yf;for(let o=0;o!==s;++o)e.setTextureCube(t[o]||a,r[o])}function Fg(i,t,e){let n=this.cache,s=t.length,r=$o(e,s);Re(n,r)||(i.uniform1iv(this.addr,r),Ce(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||_f,r[a])}function Og(i){switch(i){case 5126:return xg;case 35664:return yg;case 35665:return vg;case 35666:return Mg;case 35674:return Sg;case 35675:return bg;case 35676:return Eg;case 5124:case 35670:return wg;case 35667:case 35671:return Tg;case 35668:case 35672:return Ag;case 35669:case 35673:return Rg;case 5125:return Cg;case 36294:return Ig;case 36295:return Pg;case 36296:return Lg;case 35678:case 36198:case 36298:case 36306:case 35682:return Dg;case 35679:case 36299:case 36307:return Ng;case 35680:case 36300:case 36308:case 36293:return Ug;case 36289:case 36303:case 36311:case 36292:return Fg}}var Lc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=_g(e.type)}},Dc=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Og(e.type)}},Nc=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],n)}}},Ic=/(\w+)(\])?(\[|\.)?/g;function Ku(i,t){i.seq.push(t),i.map[t.id]=t}function Bg(i,t,e){let n=i.name,s=n.length;for(Ic.lastIndex=0;;){let r=Ic.exec(n),a=Ic.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Ku(e,c===void 0?new Lc(o,i,t):new Dc(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Nc(o),Ku(e,d)),e=d}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Bg(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,n,s){let r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){let s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let n=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&n.push(a)}return n}};function Qu(i,t,e){let n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}var zg=37297,kg=0;function Gg(i,t){let e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}var ju=new Vt;function Hg(i){se._getMatrix(ju,se.workingColorSpace,i);let t=`mat3( ${ju.elements.map(e=>e.toFixed(4))} )`;switch(se.getTransfer(i)){case Qs:return[t,"LinearTransferOETF"];case he:return[t,"sRGBTransferOETF"];default:return kt("WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function tf(i,t,e){let n=i.getShaderParameter(t,i.COMPILE_STATUS),r=(i.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+Gg(i.getShaderSource(t),o)}else return r}function Vg(i,t){let e=Hg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Wg={[nc]:"Linear",[ic]:"Reinhard",[sc]:"Cineon",[rc]:"ACESFilmic",[oc]:"AgX",[Tr]:"Neutral",[ac]:"Custom"};function Xg(i,t){let e=Wg[t];return e===void 0?(kt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Zo=new L;function qg(){se.getLuminanceCoefficients(Zo);let i=Zo.x.toFixed(4),t=Zo.y.toFixed(4),e=Zo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Fr).join(`
`)}function Zg(i){let t=[];for(let e in i){let n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Jg(i,t){let e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(t,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Fr(i){return i!==""}function ef(i,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function nf(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var $g=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uc(i){return i.replace($g,Kg)}function Kg(i,t){let e=Jt[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return Uc(e)}var Qg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function sf(i){return i.replace(Qg,jg)}function jg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function rf(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var t_={[Ni]:"SHADOWMAP_TYPE_PCF",[Ts]:"SHADOWMAP_TYPE_VSM"};function e_(i){return t_[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var n_={[Rs]:"ENVMAP_MODE_REFRACTION"};function i_(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":n_[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var s_={[so]:"ENVMAP_BLENDING_MULTIPLY",[mu]:"ENVMAP_BLENDING_MIX",[gu]:"ENVMAP_BLENDING_ADD"};function r_(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":s_[i.combine]||"ENVMAP_BLENDING_NONE"}function a_(i,t,e,n){let s=i.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=e_(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=i_(e),d=r_(e),u=Yg(e),f=Zg(r),p=s.createProgram(),x,g,m=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(x=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Fr).join(`
`),x.length>0&&(x+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(Fr).join(`
`),g.length>0&&(g+=`
`)):(x=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Fr).join(`
`),g=[rf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Ln?"#define TONE_MAPPING":"",e.toneMapping!==Ln?Jt.tonemapping_pars_fragment:"",e.toneMapping!==Ln?Xg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Jt.colorspace_pars_fragment,Vg("linearToOutputTexel",e.outputColorSpace),qg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Fr).join(`
`)),a=Uc(a),a=ef(a,e),a=nf(a,e),o=Uc(o),o=ef(o,e),o=nf(o,e),a=sf(a),o=sf(o),e.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,x=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+x,g=["#define varying in",e.glslVersion===yc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===yc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let v=m+x+a,E=m+g+o,S=Qu(s,s.VERTEX_SHADER,v),A=Qu(s,s.FRAGMENT_SHADER,E);s.attachShader(p,S),s.attachShader(p,A),e.index0AttributeName!==void 0?s.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(p,0,"position"),s.linkProgram(p);function w(C){if(i.debug.checkShaderErrors){let N=s.getProgramInfoLog(p)||"",F=s.getShaderInfoLog(S)||"",V=s.getShaderInfoLog(A)||"",I=N.trim(),k=F.trim(),X=V.trim(),G=!0,et=!0;if(s.getProgramParameter(p,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,p,S,A);else{let W=tf(s,S,"vertex"),Q=tf(s,A,"fragment");zt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(p,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+Q)}else I!==""?kt("WebGLProgram: Program Info Log:",I):(k===""||X==="")&&(et=!1);et&&(C.diagnostics={runnable:G,programLog:I,vertexShader:{log:k,prefix:x},fragmentShader:{log:X,prefix:g}})}s.deleteShader(S),s.deleteShader(A),_=new Is(s,p),b=Jg(s,p)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let U=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return U===!1&&(U=s.getProgramParameter(p,zg)),U},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=kg++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=S,this.fragmentShader=A,this}var o_=0,Fc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Oc(t),e.set(t,n)),n}},Oc=class{constructor(t){this.id=o_++,this.code=t,this.usedTimes=0}};function l_(i){return i===mi||i===Lr||i===Dr}function c_(i,t,e,n,s,r){let a=new us,o=new Fc,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return l.add(_),_===0?"uv":`uv${_}`}function p(_,b,U,C,N,F){let V=C.fog,I=N.geometry,k=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,X=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,G=t.get(_.envMap||k,X),et=u[_.type],W=n.precision;_.precision!==null&&(W=n.getMaxPrecision(_.precision),W!==_.precision&&kt("WebGLProgram.getParameters:",_.precision,"not supported, using",W,"instead."));let Q=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,tt=Q!==void 0?Q.length:0,Et=0;I.morphAttributes.position!==void 0&&(Et=1),I.morphAttributes.normal!==void 0&&(Et=2),I.morphAttributes.color!==void 0&&(Et=3);let Ot,Y,_t,wt;if(et){let yt=Nn[et];Ot=yt.vertexShader,Y=yt.fragmentShader}else{Ot=_.vertexShader,Y=_.fragmentShader;let yt=o.getVertexShaderStage(_),ue=o.getFragmentShaderStage(_);o.update(_,yt,ue),_t=yt.id,wt=ue.id}let Nt=i.getRenderTarget(),xt=i.state.buffers.depth.getReversed(),Ut=N.isInstancedMesh===!0,ge=N.isBatchedMesh===!0,Bt=!!_.map,$t=!!_.matcap,jt=!!G,j=jt&&G.isPMREMTexture===!0,ct=!!_.aoMap,at=!!_.lightMap,bt=!!_.bumpMap&&_.wireframe===!1,gt=!!_.normalMap,qt=!!_.displacementMap,Pt=!!_.emissiveMap,te=!!_.metalnessMap,ee=!!_.roughnessMap,oe=_.anisotropy>0,D=_.clearcoat>0,be=_.diffuseRoughness>0,Qt=_.dispersion>0,fe=_.retroreflectivity>0,dt=_.iridescence>0,Me=_.sheen>0,Ft=_.transmission>0,Ht=oe&&!!_.anisotropyMap,T=D&&!!_.clearcoatMap,y=D&&!!_.clearcoatNormalMap,B=D&&!!_.clearcoatRoughnessMap,nt=be&&!!_.diffuseRoughnessMap,K=dt&&!!_.iridescenceMap,ot=dt&&!!_.iridescenceThicknessMap,pt=Me&&!!_.sheenColorMap,Z=Me&&!!_.sheenRoughnessMap,J=!!_.specularMap,ht=!!_.specularColorMap,R=!!_.specularIntensityMap,$=Ft&&!!_.transmissionMap,q=Ft&&!!_.thicknessMap,ut=!!_.gradientMap,rt=!!_.alphaMap,lt=_.alphaTest>0,Lt=!!_.alphaHash,Zt=!!_.extensions,st=Ln;_.toneMapped&&(Nt===null||Nt.isXRRenderTarget===!0)&&(st=i.toneMapping);let Dt=j?G.isCompressedCubeTexture?G.image[0].mipmaps:G.mipmaps:null,Yt={shaderID:et,shaderType:_.type,shaderName:_.name,vertexShader:Ot,fragmentShader:Y,defines:_.defines,customVertexShaderID:_t,customFragmentShaderID:wt,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:W,batching:ge,batchingColor:ge&&N._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&N.instanceColor!==null,instancingMorph:Ut&&N.morphTexture!==null,outputColorSpace:Nt===null?i.outputColorSpace:Nt.isXRRenderTarget===!0?Nt.texture.colorSpace:se.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:Bt,matcap:$t,envMap:jt,envMapMode:jt&&G.mapping,envMapPMREM:j,envMapMaxLod:j?Dt.length-1:null,envMapSize:j?Dt[0].width:null,aoMap:ct,lightMap:at,bumpMap:bt,normalMap:gt,displacementMap:qt,emissiveMap:Pt,normalMapObjectSpace:gt&&_.normalMapType===yu,normalMapTangentSpace:gt&&_.normalMapType===Nr,packedNormalMap:gt&&_.normalMapType===Nr&&l_(_.normalMap.format),metalnessMap:te,roughnessMap:ee,anisotropy:oe,anisotropyMap:Ht,clearcoat:D,clearcoatMap:T,clearcoatNormalMap:y,clearcoatRoughnessMap:B,diffuseRoughness:be,diffuseRoughnessMap:nt,dispersion:Qt,retroreflection:fe,iridescence:dt,iridescenceMap:K,iridescenceThicknessMap:ot,sheen:Me,sheenColorMap:pt,sheenRoughnessMap:Z,specularMap:J,specularColorMap:ht,specularIntensityMap:R,transmission:Ft,transmissionMap:$,thicknessMap:q,gradientMap:ut,opaque:_.transparent===!1&&_.blending===As&&_.alphaToCoverage===!1,alphaMap:rt,alphaTest:lt,alphaHash:Lt,combine:_.combine,mapUv:Bt&&f(_.map.channel),aoMapUv:ct&&f(_.aoMap.channel),lightMapUv:at&&f(_.lightMap.channel),bumpMapUv:bt&&f(_.bumpMap.channel),normalMapUv:gt&&f(_.normalMap.channel),displacementMapUv:qt&&f(_.displacementMap.channel),emissiveMapUv:Pt&&f(_.emissiveMap.channel),metalnessMapUv:te&&f(_.metalnessMap.channel),roughnessMapUv:ee&&f(_.roughnessMap.channel),anisotropyMapUv:Ht&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:y&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:nt&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:K&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ot&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:pt&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Z&&f(_.sheenRoughnessMap.channel),specularMapUv:J&&f(_.specularMap.channel),specularColorMapUv:ht&&f(_.specularColorMap.channel),specularIntensityMapUv:R&&f(_.specularIntensityMap.channel),transmissionMapUv:$&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:rt&&f(_.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(gt||oe),vertexNormals:!!I.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Bt||rt),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||I.attributes.normal===void 0&&gt===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:tt,morphTextureStride:Et,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:F.filter(yt=>yt.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&U.length>0,shadowMapType:i.shadowMap.type,toneMapping:st,decodeVideoTexture:Bt&&_.map.isVideoTexture===!0&&se.getTransfer(_.map.colorSpace)===he,decodeVideoTextureEmissive:Pt&&_.emissiveMap.isVideoTexture===!0&&se.getTransfer(_.emissiveMap.colorSpace)===he,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===fn,flipSided:_.side===Be,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Zt&&_.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&_.extensions.multiDraw===!0||ge)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Yt.vertexUv1s=l.has(1),Yt.vertexUv2s=l.has(2),Yt.vertexUv3s=l.has(3),l.clear(),Yt}function x(_){let b=[];if(_.shaderID?b.push(_.shaderID):(b.push(_.customVertexShaderID),b.push(_.customFragmentShaderID)),_.defines!==void 0)for(let U in _.defines)b.push(U),b.push(_.defines[U]);return _.isRawShaderMaterial===!1&&(g(b,_),m(b,_),b.push(i.outputColorSpace)),b.push(_.customProgramCacheKey),b.join()}function g(_,b){_.push(b.precision),_.push(b.outputColorSpace),_.push(b.envMapMode),_.push(b.envMapPMREM),_.push(b.envMapMaxLod),_.push(b.envMapSize),_.push(b.mapUv),_.push(b.alphaMapUv),_.push(b.lightMapUv),_.push(b.aoMapUv),_.push(b.bumpMapUv),_.push(b.normalMapUv),_.push(b.displacementMapUv),_.push(b.emissiveMapUv),_.push(b.metalnessMapUv),_.push(b.roughnessMapUv),_.push(b.anisotropyMapUv),_.push(b.clearcoatMapUv),_.push(b.clearcoatNormalMapUv),_.push(b.clearcoatRoughnessMapUv),_.push(b.diffuseRoughnessMapUv),_.push(b.iridescenceMapUv),_.push(b.iridescenceThicknessMapUv),_.push(b.sheenColorMapUv),_.push(b.sheenRoughnessMapUv),_.push(b.specularMapUv),_.push(b.specularColorMapUv),_.push(b.specularIntensityMapUv),_.push(b.transmissionMapUv),_.push(b.thicknessMapUv),_.push(b.combine),_.push(b.fogExp2),_.push(b.sizeAttenuation),_.push(b.morphTargetsCount),_.push(b.numSunLights),_.push(b.numDirLights),_.push(b.numPointLights),_.push(b.numSpotLights),_.push(b.numSpotLightMaps),_.push(b.numHemiLights),_.push(b.numRectAreaLights),_.push(b.numSunLightShadows),_.push(b.numDirLightShadows),_.push(b.numPointLightShadows),_.push(b.numSpotLightShadows),_.push(b.numSpotLightShadowsWithMaps),_.push(b.numLightProbes),_.push(b.numLightProbeGrids),_.push(b.shadowMapType),_.push(b.toneMapping),_.push(b.numClippingPlanes),_.push(b.numClipIntersection),_.push(b.depthPacking)}function m(_,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.diffuseRoughness&&a.enable(25),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function v(_){let b=u[_.type],U;if(b){let C=Nn[b];U=zu.clone(C.uniforms)}else U=_.uniforms;return U}function E(_,b){let U=h.get(b);return U!==void 0?++U.usedTimes:(U=new a_(i,b,_,s),c.push(U),h.set(b,U)),U}function S(_){if(--_.usedTimes===0){let b=c.indexOf(_);c[b]=c[c.length-1],c.pop(),h.delete(_.cacheKey),_.destroy()}}function A(_){o.remove(_)}function w(){o.dispose()}return{getParameters:p,getProgramCacheKey:x,getUniforms:v,acquireProgram:E,releaseProgram:S,releaseShaderCache:A,programs:c,dispose:w}}function h_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function u_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.materialVariant!==t.materialVariant?i.materialVariant-t.materialVariant:i.z!==t.z?i.z-t.z:i.id-t.id}function af(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function of(){let i=[],t=0,e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,p,x,g,m){let v=i[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:g,group:m},i[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=a(u),v.groupOrder=x,v.renderOrder=u.renderOrder,v.z=g,v.group=m),t++,v}function l(u,f,p,x,g,m,v){v.reversedDepth===!0&&(g=-g);let E=o(u,f,p,x,g,m);p.transmission>0?n.push(E):p.transparent===!0?s.push(E):e.push(E)}function c(u,f,p,x,g,m){let v=o(u,f,p,x,g,m);p.transmission>0?n.unshift(v):p.transparent===!0?s.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||u_),n.length>1&&n.sort(f||af),s.length>1&&s.sort(f||af)}function d(){for(let u=t,f=i.length;u<f;u++){let p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function f_(){let i=new WeakMap;function t(n,s){let r=i.get(n),a;return r===void 0?(a=new of,i.set(n,[a])):s>=r.length?(a=new of,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function d_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new L,color:new Gt};break;case"SpotLight":e={position:new L,direction:new L,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function p_(){let i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new it,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}var m_=0;function g_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function __(i){let t=new d_,e=p_(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let s=new L,r=new ae,a=new ae;function o(c){let h=0,d=0,u=0;for(let F=0;F<9;F++)n.probe[F].set(0,0,0);let f=0,p=0,x=0,g=0,m=0,v=0,E=0,S=0,A=0,w=0,_=0,b=0,U=0,C=0;c.sort(g_);for(let F=0,V=c.length;F<V;F++){let I=c[F],k=I.color,X=I.intensity,G=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===mi?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=k.r*X,d+=k.g*X,u+=k.b*X;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],X);C++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[p]=tt,n.sunShadowMap[p]=et;let Et=Q.getViewportCount();for(let Ot=0;Ot<Et;Ot++)n.sunShadowMatrix[x+Ot]=Q.getMatrix(Ot),n.sunShadowCascade[x+Ot]=Q._cascadeData[Ot];x+=Et,p++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.directionalShadow[g]=tt,n.directionalShadowMap[g]=et,n.directionalShadowMatrix[g]=I.shadow.matrix,A++}n.directional[g]=W,g++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(k).multiplyScalar(X),W.distance=G,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;let Q=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,Q.updateMatrices(I),I.castShadow&&U++),n.spotLightMatrix[v]=Q.matrix,I.castShadow){let tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,n.spotShadow[v]=tt,n.spotShadowMap[v]=et,_++}v++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(k).multiplyScalar(X),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=W,E++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let Q=I.shadow,tt=e.get(I);tt.shadowIntensity=Q.intensity,tt.shadowBias=Q.bias,tt.shadowNormalBias=Q.normalBias,tt.shadowRadius=Q.radius,tt.shadowMapSize=Q.mapSize,tt.shadowCameraNear=Q.camera.near,tt.shadowCameraFar=Q.camera.far,n.pointShadow[m]=tt,n.pointShadowMap[m]=et,n.pointShadowMatrix[m]=I.shadow.matrix,w++}n.point[m]=W,m++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(X),W.groundColor.copy(I.groundColor).multiplyScalar(X),n.hemi[S]=W,S++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=vt.LTC_FLOAT_1,n.rectAreaLTC2=vt.LTC_FLOAT_2):(n.rectAreaLTC1=vt.LTC_HALF_1,n.rectAreaLTC2=vt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==g||N.pointLength!==m||N.spotLength!==v||N.rectAreaLength!==E||N.hemiLength!==S||N.numSunShadows!==p||N.numDirectionalShadows!==A||N.numPointShadows!==w||N.numSpotShadows!==_||N.numSpotMaps!==b||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=g,n.spot.length=v,n.rectArea.length=E,n.point.length=m,n.hemi.length=S,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=A,n.directionalShadowMap.length=A,n.directionalShadowMatrix.length=A,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+b-U,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=U,n.numLightProbes=C,N.sunLength=f,N.directionalLength=g,N.pointLength=m,N.spotLength=v,N.rectAreaLength=E,N.hemiLength=S,N.numSunShadows=p,N.numDirectionalShadows=A,N.numPointShadows=w,N.numSpotShadows=_,N.numSpotMaps=b,N.numLightProbes=C,n.version=m_++)}function l(c,h){let d=0,u=0,f=0,p=0,x=0,g=0,m=h.matrixWorldInverse;for(let v=0,E=c.length;v<E;v++){let S=c[v];if(S.isSunLight){let A=n.sun[d];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),d++}else if(S.isDirectionalLight){let A=n.directional[u];A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),u++}else if(S.isSpotLight){let A=n.spot[p];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),A.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),A.direction.sub(s),A.direction.transformDirection(m),p++}else if(S.isRectAreaLight){let A=n.rectArea[x];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),A.halfWidth.set(S.width*.5,0,0),A.halfHeight.set(0,S.height*.5,0),A.halfWidth.applyMatrix4(a),A.halfHeight.applyMatrix4(a),x++}else if(S.isPointLight){let A=n.point[f];A.position.setFromMatrixPosition(S.matrixWorld),A.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){let A=n.hemi[g];A.direction.setFromMatrixPosition(S.matrixWorld),A.direction.transformDirection(m),g++}}}return{setup:o,setupView:l,state:n}}function lf(i){let t=new __(i),e=[],n=[],s=[];function r(d){h.camera=d,e.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):e.push(d)}function o(d){n.push(d)}function l(){t.setup(e),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function x_(i){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new lf(i),t.set(s,[o])):r>=a.length?(o=new lf(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var y_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,v_=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,M_=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],S_=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],cf=new ae,Ur=new L,Pc=new L;function b_(i,t,e){let n=new ri,s=new it,r=new it,a=new xe,o=new Wa,l=new Xa,c={},h=e.maxTextureSize,d={[di]:Be,[Be]:di,[fn]:fn},u=new Pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new it},radius:{value:4}},vertexShader:y_,fragmentShader:v_}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new Ae;p.setAttribute("position",new Se(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ce(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ni;let m=this.type;this.render=function(w,_,b){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||w.length===0)return;this.type===$h&&(kt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ni);let U=i.getRenderTarget(),C=i.getActiveCubeFace(),N=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ui),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let V=m!==this.type;V&&_.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(k=>k.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,k=w.length;I<k;I++){let X=w[I],G=X.shadow;if(G===void 0){kt("WebGLShadowMap:",X,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);let et=G.getFrameExtents();s.multiply(et),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,G.mapSize.y=r.y));let W=i.state.buffers.depth.getReversed();if(G.camera._reversedDepth=W,G.map===null||V===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Ts){if(X.isPointLight){kt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new rn(s.x,s.y,{format:mi,type:bn,minFilter:$e,magFilter:$e,generateMipmaps:!1}),G.map.texture.name=X.name+".shadowMap",G.map.depthTexture=new Xn(s.x,s.y,dn),G.map.depthTexture.name=X.name+".shadowMapDepth",G.map.depthTexture.format=Vn,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ne,G.map.depthTexture.magFilter=Ne}else X.isPointLight?(G.map=new Or(s.x),G.map.depthTexture=new hr(s.x,Sn)):(G.map=new rn(s.x,s.y),G.map.depthTexture=new Xn(s.x,s.y,Sn)),G.map.depthTexture.name=X.name+".shadowMap",G.map.depthTexture.format=Vn,this.type===Ni?(G.map.depthTexture.compareFunction=W?gc:mc,G.map.depthTexture.minFilter=$e,G.map.depthTexture.magFilter=$e):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=Ne,G.map.depthTexture.magFilter=Ne);G.camera.updateProjectionMatrix()}G.map.isWebGLCubeRenderTarget!==!0&&(G.map.width!==s.x||G.map.height!==s.y)&&G.map.setSize(s.x,s.y);let Q=G.map.isWebGLCubeRenderTarget?6:G.getViewportCount();X.isPointLight!==!0&&G.updateMatrices(X,b);let tt=(G.camera.layers.mask&4294967294)!==0?G.camera.layers:b.layers;for(let Et=0;Et<Q;Et++){let Ot=G.getCamera(Et);if(X.isPointLight){let Y=G.camera,_t=G.matrix,wt=X.distance||Y.far;wt!==Y.far&&(Y.far=wt,Y.updateProjectionMatrix()),Ur.setFromMatrixPosition(X.matrixWorld),Y.position.copy(Ur),Pc.copy(Y.position),Pc.add(M_[Et]),Y.up.copy(S_[Et]),Y.lookAt(Pc),Y.updateMatrixWorld(),_t.makeTranslation(-Ur.x,-Ur.y,-Ur.z),cf.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),G._frustum.setFromProjectionMatrix(cf,Y.coordinateSystem,Y.reversedDepth)}if(G.map.isWebGLCubeRenderTarget)i.setRenderTarget(G.map,Et),i.clear();else{Et===0&&(i.setRenderTarget(G.map),i.clear());let Y=G.getViewport(Et);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),F.viewport(a)}n=G.getFrustum(Et),S(_,b,Ot,X,tt,this.type)}G.isPointLightShadow!==!0&&this.type===Ts&&v(G,b),G.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(U,C,N)};function v(w,_){let b=t.update(x);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new rn(s.x,s.y,{format:mi,type:bn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,b,u,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,b,f,x,null)}function E(w,_,b,U){let C=null,N=b.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(N!==void 0)C=N;else if(C=b.isPointLight===!0?l:o,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let F=C.uuid,V=_.uuid,I=c[F];I===void 0&&(I={},c[F]=I);let k=I[V];k===void 0&&(k=C.clone(),I[V]=k,_.addEventListener("dispose",A)),C=k}if(C.visible=_.visible,C.wireframe=_.wireframe,U===Ts?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:d[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let F=i.properties.get(C);F.light=b}return C}function S(w,_,b,U,C,N){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&N===Ts)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,w.matrixWorld);let I=t.update(w),k=w.material;if(Array.isArray(k)){let X=I.groups;for(let G=0,et=X.length;G<et;G++){let W=X[G],Q=k[W.materialIndex];if(Q&&Q.visible){let tt=E(w,Q,U,N);w.onBeforeShadow(i,w,_,b,I,tt,W),i.renderBufferDirect(b,null,I,tt,w,W),w.onAfterShadow(i,w,_,b,I,tt,W)}}}else if(k.visible){let X=E(w,k,U,N);w.onBeforeShadow(i,w,_,b,I,X,null),i.renderBufferDirect(b,null,I,X,w,null),w.onAfterShadow(i,w,_,b,I,X,null)}}let V=w.children;for(let I=0,k=V.length;I<k;I++)S(V[I],_,b,U,C,N)}function A(w){w.target.removeEventListener("dispose",A);for(let b in c){let U=c[b],C=w.target.uuid;C in U&&(U[C].dispose(),delete U[C])}}}function E_(i,t){function e(){let R=!1,$=new xe,q=null,ut=new xe(0,0,0,0);return{setMask:function(rt){q!==rt&&!R&&(i.colorMask(rt,rt,rt,rt),q=rt)},setLocked:function(rt){R=rt},setClear:function(rt,lt,Lt,Zt,st){st===!0&&(rt*=Zt,lt*=Zt,Lt*=Zt),$.set(rt,lt,Lt,Zt),ut.equals($)===!1&&(i.clearColor(rt,lt,Lt,Zt),ut.copy($))},reset:function(){R=!1,q=null,ut.set(-1,0,0,0)}}}function n(){let R=!1,$=!1,q=null,ut=null,rt=null;return{setReversed:function(lt){if($!==lt){let Lt=t.get("EXT_clip_control");lt?Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.ZERO_TO_ONE_EXT):Lt.clipControlEXT(Lt.LOWER_LEFT_EXT,Lt.NEGATIVE_ONE_TO_ONE_EXT),$=lt;let Zt=rt;rt=null,this.setClear(Zt)}},getReversed:function(){return $},setTest:function(lt){lt?xt(i.DEPTH_TEST):Ut(i.DEPTH_TEST)},setMask:function(lt){q!==lt&&!R&&(i.depthMask(lt),q=lt)},setFunc:function(lt){if($&&(lt=Cu[lt]),ut!==lt){switch(lt){case Sa:i.depthFunc(i.NEVER);break;case ba:i.depthFunc(i.ALWAYS);break;case Ea:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case wa:i.depthFunc(i.EQUAL);break;case Ta:i.depthFunc(i.GEQUAL);break;case Aa:i.depthFunc(i.GREATER);break;case Ra:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ut=lt}},setLocked:function(lt){R=lt},setClear:function(lt){rt!==lt&&(rt=lt,$&&(lt=1-lt),i.clearDepth(lt))},reset:function(){R=!1,q=null,ut=null,rt=null,$=!1}}}function s(){let R=!1,$=null,q=null,ut=null,rt=null,lt=null,Lt=null,Zt=null,st=null;return{setTest:function(Dt){R||(Dt?xt(i.STENCIL_TEST):Ut(i.STENCIL_TEST))},setMask:function(Dt){$!==Dt&&!R&&(i.stencilMask(Dt),$=Dt)},setFunc:function(Dt,Yt,yt){(q!==Dt||ut!==Yt||rt!==yt)&&(i.stencilFunc(Dt,Yt,yt),q=Dt,ut=Yt,rt=yt)},setOp:function(Dt,Yt,yt){(lt!==Dt||Lt!==Yt||Zt!==yt)&&(i.stencilOp(Dt,Yt,yt),lt=Dt,Lt=Yt,Zt=yt)},setLocked:function(Dt){R=Dt},setClear:function(Dt){st!==Dt&&(i.clearStencil(Dt),st=Dt)},reset:function(){R=!1,$=null,q=null,ut=null,rt=null,lt=null,Lt=null,Zt=null,st=null}}}let r=new e,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,E=null,S=null,A=null,w=null,_=null,b=new Gt(0,0,0),U=0,C=!1,N=null,F=null,V=null,I=null,k=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),G=!1,et=0,W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),G=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),G=et>=2);let Q=null,tt={},Et=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),Y=new xe().fromArray(Et),_t=new xe().fromArray(Ot);function wt(R,$,q,ut){let rt=new Uint8Array(4),lt=i.createTexture();i.bindTexture(R,lt),i.texParameteri(R,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(R,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Lt=0;Lt<q;Lt++)R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY?i.texImage3D($,0,i.RGBA,1,1,ut,0,i.RGBA,i.UNSIGNED_BYTE,rt):i.texImage2D($+Lt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,rt);return lt}let Nt={};Nt[i.TEXTURE_2D]=wt(i.TEXTURE_2D,i.TEXTURE_2D,1),Nt[i.TEXTURE_CUBE_MAP]=wt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Nt[i.TEXTURE_2D_ARRAY]=wt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Nt[i.TEXTURE_3D]=wt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xt(i.DEPTH_TEST),a.setFunc(os),bt(!1),gt(Kl),xt(i.CULL_FACE),ct(Ui);function xt(R){h[R]!==!0&&(i.enable(R),h[R]=!0)}function Ut(R){h[R]!==!1&&(i.disable(R),h[R]=!1)}function ge(R,$){return u[R]!==$?(i.bindFramebuffer(R,$),u[R]=$,R===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=$),R===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=$),!0):!1}function Bt(R,$){let q=p,ut=!1;if(R){q=f.get($),q===void 0&&(q=[],f.set($,q));let rt=R.textures;if(q.length!==rt.length||q[0]!==i.COLOR_ATTACHMENT0){for(let lt=0,Lt=rt.length;lt<Lt;lt++)q[lt]=i.COLOR_ATTACHMENT0+lt;q.length=rt.length,ut=!0}}else q[0]!==i.BACK&&(q[0]=i.BACK,ut=!0);ut&&i.drawBuffers(q)}function $t(R){return x!==R?(i.useProgram(R),x=R,!0):!1}let jt={[Fi]:i.FUNC_ADD,[Qh]:i.FUNC_SUBTRACT,[jh]:i.FUNC_REVERSE_SUBTRACT};jt[tu]=i.MIN,jt[eu]=i.MAX;let j={[nu]:i.ZERO,[iu]:i.ONE,[su]:i.SRC_COLOR,[tc]:i.SRC_ALPHA,[hu]:i.SRC_ALPHA_SATURATE,[lu]:i.DST_COLOR,[au]:i.DST_ALPHA,[ru]:i.ONE_MINUS_SRC_COLOR,[ec]:i.ONE_MINUS_SRC_ALPHA,[cu]:i.ONE_MINUS_DST_COLOR,[ou]:i.ONE_MINUS_DST_ALPHA,[uu]:i.CONSTANT_COLOR,[fu]:i.ONE_MINUS_CONSTANT_COLOR,[du]:i.CONSTANT_ALPHA,[pu]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(R,$,q,ut,rt,lt,Lt,Zt,st,Dt){if(R===Ui){g===!0&&(Ut(i.BLEND),g=!1);return}if(g===!1&&(xt(i.BLEND),g=!0),R!==Kh){if(R!==m||Dt!==C){if((v!==Fi||A!==Fi)&&(i.blendEquation(i.FUNC_ADD),v=Fi,A=Fi),Dt)switch(R){case As:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pi:i.blendFunc(i.ONE,i.ONE);break;case Ql:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case jl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:zt("WebGLState: Invalid blending: ",R);break}else switch(R){case As:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case pi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ql:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case jl:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",R);break}E=null,S=null,w=null,_=null,b.set(0,0,0),U=0,m=R,C=Dt}return}rt=rt||$,lt=lt||q,Lt=Lt||ut,($!==v||rt!==A)&&(i.blendEquationSeparate(jt[$],jt[rt]),v=$,A=rt),(q!==E||ut!==S||lt!==w||Lt!==_)&&(i.blendFuncSeparate(j[q],j[ut],j[lt],j[Lt]),E=q,S=ut,w=lt,_=Lt),(Zt.equals(b)===!1||st!==U)&&(i.blendColor(Zt.r,Zt.g,Zt.b,st),b.copy(Zt),U=st),m=R,C=!1}function at(R,$){R.side===fn?Ut(i.CULL_FACE):xt(i.CULL_FACE);let q=R.side===Be;$&&(q=!q),bt(q),R.blending===As&&R.transparent===!1?ct(Ui):ct(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),a.setFunc(R.depthFunc),a.setTest(R.depthTest),a.setMask(R.depthWrite),r.setMask(R.colorWrite);let ut=R.stencilWrite;o.setTest(ut),ut&&(o.setMask(R.stencilWriteMask),o.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),o.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),Pt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?xt(i.SAMPLE_ALPHA_TO_COVERAGE):Ut(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(R){N!==R&&(R?i.frontFace(i.CW):i.frontFace(i.CCW),N=R)}function gt(R){R!==Zh?(xt(i.CULL_FACE),R!==F&&(R===Kl?i.cullFace(i.BACK):R===Jh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ut(i.CULL_FACE),F=R}function qt(R){R!==V&&(G&&i.lineWidth(R),V=R)}function Pt(R,$,q){R?(xt(i.POLYGON_OFFSET_FILL),(I!==$||k!==q)&&(I=$,k=q,a.getReversed()&&($=-$,q=-q),i.polygonOffset($,q))):Ut(i.POLYGON_OFFSET_FILL)}function te(R){R?xt(i.SCISSOR_TEST):Ut(i.SCISSOR_TEST)}function ee(R){R===void 0&&(R=i.TEXTURE0+X-1),Q!==R&&(i.activeTexture(R),Q=R)}function oe(R,$,q){q===void 0&&(Q===null?q=i.TEXTURE0+X-1:q=Q);let ut=tt[q];ut===void 0&&(ut={type:void 0,texture:void 0},tt[q]=ut),(ut.type!==R||ut.texture!==$)&&(Q!==q&&(i.activeTexture(q),Q=q),i.bindTexture(R,$||Nt[R]),ut.type=R,ut.texture=$)}function D(){let R=tt[Q];R!==void 0&&R.type!==void 0&&(i.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function be(){try{i.compressedTexImage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function Qt(){try{i.compressedTexImage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function fe(){try{i.texSubImage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function dt(){try{i.texSubImage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function Me(){try{i.compressedTexSubImage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function Ft(){try{i.compressedTexSubImage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function Ht(){try{i.texStorage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function T(){try{i.texStorage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function y(){try{i.texImage2D(...arguments)}catch(R){zt("WebGLState:",R)}}function B(){try{i.texImage3D(...arguments)}catch(R){zt("WebGLState:",R)}}function nt(R){return d[R]!==void 0?d[R]:i.getParameter(R)}function K(R,$){d[R]!==$&&(i.pixelStorei(R,$),d[R]=$)}function ot(R){Y.equals(R)===!1&&(i.scissor(R.x,R.y,R.z,R.w),Y.copy(R))}function pt(R){_t.equals(R)===!1&&(i.viewport(R.x,R.y,R.z,R.w),_t.copy(R))}function Z(R,$){let q=c.get($);q===void 0&&(q=new WeakMap,c.set($,q));let ut=q.get(R);ut===void 0&&(ut=i.getUniformBlockIndex($,R.name),i.uniformBlockBinding($,ut,ut),q.set(R,ut))}function J(R,$,q){let rt=c.get($).get(R);l[rt]!==q&&(i.bindBufferBase(i.UNIFORM_BUFFER,rt,q),l[rt]=q)}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},Q=null,tt={},u={},l={},f=new WeakMap,p=[],x=null,g=!1,m=null,v=null,E=null,S=null,A=null,w=null,_=null,b=new Gt(0,0,0),U=0,C=!1,N=null,F=null,V=null,I=null,k=null,Y.set(0,0,i.canvas.width,i.canvas.height),_t.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xt,disable:Ut,bindFramebuffer:ge,drawBuffers:Bt,useProgram:$t,setBlending:ct,setMaterial:at,setFlipSided:bt,setCullFace:gt,setLineWidth:qt,setPolygonOffset:Pt,setScissorTest:te,activeTexture:ee,bindTexture:oe,unbindTexture:D,compressedTexImage2D:be,compressedTexImage3D:Qt,texImage2D:y,texImage3D:B,pixelStorei:K,getParameter:nt,updateUBOMapping:Z,uniformBlockBinding:J,texStorage2D:Ht,texStorage3D:T,texSubImage2D:fe,texSubImage3D:dt,compressedTexSubImage2D:Me,compressedTexSubImage3D:Ft,scissor:ot,viewport:pt,reset:ht}}function w_(i,t,e,n,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new it,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,x=new FinalizationRegistry(T=>p.delete(T)),g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(T,y){return g?new OffscreenCanvas(T,y):js("canvas")}function v(T,y,B){let nt=1,K=Ht(T);if((K.width>B||K.height>B)&&(nt=B/Math.max(K.width,K.height)),nt<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ot=Math.floor(nt*K.width),pt=Math.floor(nt*K.height);u===void 0&&(u=m(ot,pt));let Z=y?m(ot,pt):u;return Z.width=ot,Z.height=pt,Z.getContext("2d").drawImage(T,0,0,ot,pt),kt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+ot+"x"+pt+")."),Z}else return"data"in T&&kt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),T;return T}function E(T){return T.generateMipmaps}function S(T){i.generateMipmap(T)}function A(T){return T.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?i.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(T,y,B,nt,K,ot=!1){if(T!==null){if(i[T]!==void 0)return i[T];kt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let pt;nt&&(pt=t.get("EXT_texture_norm16"),pt||kt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Z=y;if(y===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8),B===i.UNSIGNED_SHORT&&pt&&(Z=pt.R16_EXT),B===i.SHORT&&pt&&(Z=pt.R16_SNORM_EXT)),y===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),y===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8),B===i.UNSIGNED_SHORT&&pt&&(Z=pt.RG16_EXT),B===i.SHORT&&pt&&(Z=pt.RG16_SNORM_EXT)),y===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&(B===i.UNSIGNED_SHORT&&pt&&(Z=pt.RGB16_EXT),B===i.SHORT&&pt&&(Z=pt.RGB16_SNORM_EXT),B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),B===i.UNSIGNED_INT_10F_11F_11F_REV&&(Z=i.R11F_G11F_B10F)),y===i.RGBA){let J=ot?Qs:se.getTransfer(K);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=J===he?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT&&pt&&(Z=pt.RGBA16_EXT),B===i.SHORT&&pt&&(Z=pt.RGBA16_SNORM_EXT),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(T,y){let B;return T?y===null||y===Sn||y===Bi?B=i.DEPTH24_STENCIL8:y===dn?B=i.DEPTH32F_STENCIL8:y===Cs&&(B=i.DEPTH24_STENCIL8,kt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Sn||y===Bi?B=i.DEPTH_COMPONENT24:y===dn?B=i.DEPTH_COMPONENT32F:y===Cs&&(B=i.DEPTH_COMPONENT16),B}function b(T,y){return E(T)===!0||T.isFramebufferTexture&&T.minFilter!==Ne&&T.minFilter!==$e?Math.log2(Math.max(y.width,y.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?y.mipmaps.length:1}function U(T){let y=new WeakRef(T);n.get(T).__ref=y,p.add(y),x.register(T,y,y)}function C(T){let y=n.get(T).__ref;y!==void 0&&(p.delete(y),x.unregister(y))}function N(T){V(T.target)}function F(T){I(T.target)}function V(T){T.removeEventListener("dispose",N),C(T),X(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function I(T){T.removeEventListener("dispose",F),C(T),et(T)}function k(){for(let T of p){let y=T.deref();y!==void 0&&(y.isRenderTarget===!0?I(y):V(y))}p.clear(),d.clear()}function X(T){let y=n.get(T);if(y.__webglInit===void 0)return;let B=T.source,nt=f.get(B);if(nt){let K=nt[y.__cacheKey];K.usedTimes--,K.usedTimes===0&&G(T),Object.keys(nt).length===0&&f.delete(B)}n.remove(T)}function G(T){let y=n.get(T);i.deleteTexture(y.__webglTexture);let B=T.source,nt=f.get(B);delete nt[y.__cacheKey],a.memory.textures--}function et(T){let y=n.get(T);y.__depthDisposeCallback&&y.__depthDisposeCallback();let B=T.depthTexture;if(B&&B.renderTarget===T&&V(B),T.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(y.__webglFramebuffer[K]))for(let ot=0;ot<y.__webglFramebuffer[K].length;ot++)i.deleteFramebuffer(y.__webglFramebuffer[K][ot]);else i.deleteFramebuffer(y.__webglFramebuffer[K]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[K])}else{if(Array.isArray(y.__webglFramebuffer))for(let K=0;K<y.__webglFramebuffer.length;K++)i.deleteFramebuffer(y.__webglFramebuffer[K]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let K=0;K<y.__webglColorRenderbuffer.length;K++)y.__webglColorRenderbuffer[K]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[K]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let nt=T.textures;for(let K=0,ot=nt.length;K<ot;K++){let pt=n.get(nt[K]);pt.__webglTexture&&(i.deleteTexture(pt.__webglTexture),a.memory.textures--),n.remove(nt[K])}n.remove(T)}let W=0;function Q(){W=0}function tt(){return W}function Et(T){W=T}function Ot(){let T=W;return T>=s.maxTextures&&kt("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),W+=1,T}function Y(T){let y=[];return y.push(T.wrapS),y.push(T.wrapT),y.push(T.wrapR||0),y.push(T.magFilter),y.push(T.minFilter),y.push(T.anisotropy),y.push(T.internalFormat),y.push(T.format),y.push(T.type),y.push(T.generateMipmaps),y.push(T.mipmapsAutoUpdate),y.push(T.premultiplyAlpha),y.push(T.flipY),y.push(T.unpackAlignment),y.push(T.colorSpace),y.join()}function _t(T,y){let B=n.get(T);if(T.isVideoTexture&&Me(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let nt=T.image;if(nt===null)kt("WebGLRenderer: Texture marked for update but no image data found.");else if(nt.complete===!1)kt("WebGLRenderer: Texture marked for update but image is incomplete");else{at(B,T,y);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+y)}function wt(T,y){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){at(B,T,y);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+y)}function Nt(T,y){let B=n.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){at(B,T,y);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+y)}function xt(T,y){let B=n.get(T);if(T.version>0&&B.__version!==T.version){bt(B,T,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+y)}let Ut={[Ca]:i.REPEAT,[Rn]:i.CLAMP_TO_EDGE,[Ia]:i.MIRRORED_REPEAT},ge={[Ne]:i.NEAREST,[_u]:i.NEAREST_MIPMAP_NEAREST,[Ar]:i.NEAREST_MIPMAP_LINEAR,[$e]:i.LINEAR,[oo]:i.LINEAR_MIPMAP_NEAREST,[Yn]:i.LINEAR_MIPMAP_LINEAR},Bt={[Mu]:i.NEVER,[_c]:i.ALWAYS,[Su]:i.LESS,[mc]:i.LEQUAL,[bu]:i.EQUAL,[gc]:i.GEQUAL,[Eu]:i.GREATER,[wu]:i.NOTEQUAL};function $t(T,y){if(y.type===dn&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===$e||y.magFilter===oo||y.magFilter===Ar||y.magFilter===Yn||y.minFilter===$e||y.minFilter===oo||y.minFilter===Ar||y.minFilter===Yn)&&kt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(T,i.TEXTURE_WRAP_S,Ut[y.wrapS]),i.texParameteri(T,i.TEXTURE_WRAP_T,Ut[y.wrapT]),(T===i.TEXTURE_3D||T===i.TEXTURE_2D_ARRAY)&&i.texParameteri(T,i.TEXTURE_WRAP_R,Ut[y.wrapR]),i.texParameteri(T,i.TEXTURE_MAG_FILTER,ge[y.magFilter]),i.texParameteri(T,i.TEXTURE_MIN_FILTER,ge[y.minFilter]),y.compareFunction&&(i.texParameteri(T,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(T,i.TEXTURE_COMPARE_FUNC,Bt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Ne||y.minFilter!==Ar&&y.minFilter!==Yn||y.type===dn&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){let B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function jt(T,y){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,y.addEventListener("dispose",N),U(y));let nt=y.source,K=f.get(nt);K===void 0&&(K={},f.set(nt,K));let ot=Y(y);if(ot!==T.__cacheKey){K[ot]===void 0&&(K[ot]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),K[ot].usedTimes++;let pt=K[T.__cacheKey];pt!==void 0&&(K[T.__cacheKey].usedTimes--,pt.usedTimes===0&&G(y)),T.__cacheKey=ot,T.__webglTexture=K[ot].texture}return B}function j(T,y,B){return Math.floor(Math.floor(T/B)/y)}function ct(T,y,B,nt){let ot=T.updateRanges;if(ot.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,y.width,y.height,B,nt,y.data);else{ot.sort((R,$)=>R.start-$.start);let pt=0;for(let R=1;R<ot.length;R++){let $=ot[pt],q=ot[R],ut=$.start+$.count,rt=j(q.start,y.width,4),lt=j($.start,y.width,4);q.start<=ut+1&&rt===lt&&j(q.start+q.count-1,y.width,4)===rt?$.count=Math.max($.count,q.start+q.count-$.start):(++pt,ot[pt]=q)}ot.length=pt+1;let Z=e.getParameter(i.UNPACK_ROW_LENGTH),J=e.getParameter(i.UNPACK_SKIP_PIXELS),ht=e.getParameter(i.UNPACK_SKIP_ROWS);e.pixelStorei(i.UNPACK_ROW_LENGTH,y.width);for(let R=0,$=ot.length;R<$;R++){let q=ot[R],ut=Math.floor(q.start/4),rt=Math.ceil(q.count/4),lt=ut%y.width,Lt=Math.floor(ut/y.width),Zt=rt,st=1;e.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),e.pixelStorei(i.UNPACK_SKIP_ROWS,Lt),e.texSubImage2D(i.TEXTURE_2D,0,lt,Lt,Zt,st,B,nt,y.data)}T.clearUpdateRanges(),e.pixelStorei(i.UNPACK_ROW_LENGTH,Z),e.pixelStorei(i.UNPACK_SKIP_PIXELS,J),e.pixelStorei(i.UNPACK_SKIP_ROWS,ht)}}function at(T,y,B){let nt=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(nt=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(nt=i.TEXTURE_3D);let K=jt(T,y),ot=y.source;e.bindTexture(nt,T.__webglTexture,i.TEXTURE0+B);let pt=n.get(ot);if(ot.version!==pt.__version||K===!0){if(e.activeTexture(i.TEXTURE0+B),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let st=se.getPrimaries(se.workingColorSpace),Dt=y.colorSpace===Jn?null:se.getPrimaries(y.colorSpace),Yt=y.colorSpace===Jn||st===Dt?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Yt)}e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment);let J=v(y.image,!1,s.maxTextureSize);J=Ft(y,J);let ht=r.convert(y.format,y.colorSpace),R=r.convert(y.type),$=w(y.internalFormat,ht,R,y.normalized,y.colorSpace,y.isVideoTexture);$t(nt,y);let q,ut=y.mipmaps,rt=y.isVideoTexture!==!0,lt=pt.__version===void 0||K===!0,Lt=ot.dataReady,Zt=b(y,J);if(y.isDepthTexture)$=_(y.format===Zn,y.type),lt&&(rt?e.texStorage2D(i.TEXTURE_2D,1,$,J.width,J.height):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ht,R,null));else if(y.isDataTexture)if(ut.length>0){rt&&lt&&e.texStorage2D(i.TEXTURE_2D,Zt,$,ut[0].width,ut[0].height);for(let st=0,Dt=ut.length;st<Dt;st++)q=ut[st],rt?Lt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,q.width,q.height,ht,R,q.data):e.texImage2D(i.TEXTURE_2D,st,$,q.width,q.height,0,ht,R,q.data);y.generateMipmaps=!1}else rt?(lt&&e.texStorage2D(i.TEXTURE_2D,Zt,$,J.width,J.height),Lt&&ct(y,J,ht,R)):e.texImage2D(i.TEXTURE_2D,0,$,J.width,J.height,0,ht,R,J.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){rt&&lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,$,ut[0].width,ut[0].height,J.depth);for(let st=0,Dt=ut.length;st<Dt;st++)if(q=ut[st],y.format!==En)if(ht!==null)if(rt){if(Lt)if(y.layerUpdates.size>0){let Yt=Ec(q.width,q.height,y.format,y.type);for(let yt of y.layerUpdates){let ue=q.data.subarray(yt*Yt/q.data.BYTES_PER_ELEMENT,(yt+1)*Yt/q.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,yt,q.width,q.height,1,ht,ue)}}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,J.depth,ht,q.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,$,q.width,q.height,J.depth,0,q.data,0,0);else kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else rt?Lt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,q.width,q.height,J.depth,ht,R,q.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,$,q.width,q.height,J.depth,0,ht,R,q.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{rt&&lt&&e.texStorage2D(i.TEXTURE_2D,Zt,$,ut[0].width,ut[0].height);for(let st=0,Dt=ut.length;st<Dt;st++)q=ut[st],y.format!==En?ht!==null?rt?Lt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,q.width,q.height,ht,q.data):e.compressedTexImage2D(i.TEXTURE_2D,st,$,q.width,q.height,0,q.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):rt?Lt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,q.width,q.height,ht,R,q.data):e.texImage2D(i.TEXTURE_2D,st,$,q.width,q.height,0,ht,R,q.data)}else if(y.isDataArrayTexture)if(rt){if(lt&&e.texStorage3D(i.TEXTURE_2D_ARRAY,Zt,$,J.width,J.height,J.depth),Lt)if(y.layerUpdates.size>0){let st=Ec(J.width,J.height,y.format,y.type);for(let Dt of y.layerUpdates){let Yt=J.data.subarray(Dt*st/J.data.BYTES_PER_ELEMENT,(Dt+1)*st/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Dt,J.width,J.height,1,ht,R,Yt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ht,R,J.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,$,J.width,J.height,J.depth,0,ht,R,J.data);else if(y.isData3DTexture)rt?(lt&&e.texStorage3D(i.TEXTURE_3D,Zt,$,J.width,J.height,J.depth),Lt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ht,R,J.data)):e.texImage3D(i.TEXTURE_3D,0,$,J.width,J.height,J.depth,0,ht,R,J.data);else if(y.isFramebufferTexture){if(lt)if(rt)e.texStorage2D(i.TEXTURE_2D,Zt,$,J.width,J.height);else{let st=J.width,Dt=J.height;for(let Yt=0;Yt<Zt;Yt++)e.texImage2D(i.TEXTURE_2D,Yt,$,st,Dt,0,ht,R,null),st>>=1,Dt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in i){let st=i.canvas;if(st.hasAttribute("layoutsubtree")||st.setAttribute("layoutsubtree","true"),J.parentNode!==st){st.appendChild(J),d.add(y),st.onpaint=Dt=>{let Yt=Dt.changedElements;for(let yt of d)Yt.includes(yt.image)&&(yt.needsUpdate=!0)},st.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,J);else{let Yt=i.RGBA,yt=i.RGBA,ue=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Yt,yt,ue,J)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ut.length>0){if(rt&&lt){let st=Ht(ut[0]);e.texStorage2D(i.TEXTURE_2D,Zt,$,st.width,st.height)}for(let st=0,Dt=ut.length;st<Dt;st++)q=ut[st],rt?Lt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,ht,R,q):e.texImage2D(i.TEXTURE_2D,st,$,ht,R,q);y.generateMipmaps=!1}else if(rt){if(lt){let st=Ht(J);e.texStorage2D(i.TEXTURE_2D,Zt,$,st.width,st.height)}Lt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ht,R,J)}else e.texImage2D(i.TEXTURE_2D,0,$,ht,R,J);E(y)&&y.mipmapsAutoUpdate===!0&&S(nt),pt.__version=ot.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function bt(T,y,B){if(y.image.length!==6)return;let nt=jt(T,y),K=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,T.__webglTexture,i.TEXTURE0+B);let ot=n.get(K);if(K.version!==ot.__version||nt===!0){e.activeTexture(i.TEXTURE0+B);let pt=se.getPrimaries(se.workingColorSpace),Z=y.colorSpace===Jn?null:se.getPrimaries(y.colorSpace),J=y.colorSpace===Jn||pt===Z?i.NONE:i.BROWSER_DEFAULT_WEBGL;e.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,J);let ht=y.isCompressedTexture||y.image[0].isCompressedTexture,R=y.image[0]&&y.image[0].isDataTexture,$=[];for(let yt=0;yt<6;yt++)!ht&&!R?$[yt]=v(y.image[yt],!0,s.maxCubemapSize):$[yt]=R?y.image[yt].image:y.image[yt],$[yt]=Ft(y,$[yt]);let q=$[0],ut=r.convert(y.format,y.colorSpace),rt=r.convert(y.type),lt=w(y.internalFormat,ut,rt,y.normalized,y.colorSpace),Lt=y.isVideoTexture!==!0,Zt=ot.__version===void 0||nt===!0,st=K.dataReady,Dt=b(y,q);$t(i.TEXTURE_CUBE_MAP,y);let Yt;if(y.isDepthTexture){if(lt=_(y.format===Zn,y.type),Zt)if(Lt)e.texStorage2D(i.TEXTURE_CUBE_MAP,1,lt,q.width,q.height);else for(let yt=0;yt<6;yt++)e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,q.width,q.height,0,ut,rt,null)}else if(ht){Lt&&Zt&&e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,lt,q.width,q.height);for(let yt=0;yt<6;yt++){Yt=$[yt].mipmaps;for(let ue=0;ue<Yt.length;ue++){let Pe=Yt[ue];y.format!==En?ut!==null?Lt?st&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ue,0,0,Pe.width,Pe.height,ut,Pe.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ue,lt,Pe.width,Pe.height,0,Pe.data):kt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Lt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ue,0,0,Pe.width,Pe.height,ut,rt,Pe.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ue,lt,Pe.width,Pe.height,0,ut,rt,Pe.data)}}}else{if(Yt=y.mipmaps,Lt&&Zt){Yt.length>0&&Dt++;let yt=Ht($[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,Dt,lt,yt.width,yt.height)}for(let yt=0;yt<6;yt++)if(R){Lt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,$[yt].width,$[yt].height,ut,rt,$[yt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,$[yt].width,$[yt].height,0,ut,rt,$[yt].data);for(let ue=0;ue<Yt.length;ue++){let $n=Yt[ue].image[yt].image;Lt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ue+1,0,0,$n.width,$n.height,ut,rt,$n.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ue+1,lt,$n.width,$n.height,0,ut,rt,$n.data)}}else{Lt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,0,0,ut,rt,$[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,0,lt,ut,rt,$[yt]);for(let ue=0;ue<Yt.length;ue++){let Pe=Yt[ue];Lt?st&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ue+1,0,0,ut,rt,Pe.image[yt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+yt,ue+1,lt,ut,rt,Pe.image[yt])}}}E(y)&&y.mipmapsAutoUpdate===!0&&S(i.TEXTURE_CUBE_MAP),ot.__version=K.version,y.onUpdate&&y.onUpdate(y)}T.__version=y.version}function gt(T,y,B,nt,K,ot){let pt=r.convert(B.format,B.colorSpace),Z=r.convert(B.type),J=w(B.internalFormat,pt,Z,B.normalized,B.colorSpace),ht=n.get(y),R=n.get(B);if(R.__renderTarget=y,!ht.__hasExternalTextures){let $=Math.max(1,y.width>>ot),q=Math.max(1,y.height>>ot);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,ot,J,$,q,y.depth,0,pt,Z,null):e.texImage2D(K,ot,J,$,q,0,pt,Z,null)}e.bindFramebuffer(i.FRAMEBUFFER,T),dt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,nt,K,R.__webglTexture,0,fe(y)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,nt,K,R.__webglTexture,ot),e.bindFramebuffer(i.FRAMEBUFFER,null)}function qt(T,y,B){if(i.bindRenderbuffer(i.RENDERBUFFER,T),y.depthBuffer){let nt=y.depthTexture,K=nt&&nt.isDepthTexture?nt.type:null,ot=_(y.stencilBuffer,K),pt=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;dt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(y),ot,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(y),ot,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,ot,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,pt,i.RENDERBUFFER,T)}else{let nt=y.textures;for(let K=0;K<nt.length;K++){let ot=nt[K],pt=r.convert(ot.format,ot.colorSpace),Z=r.convert(ot.type),J=w(ot.internalFormat,pt,Z,ot.normalized,ot.colorSpace);dt(y)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,fe(y),J,y.width,y.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,fe(y),J,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,J,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pt(T,y,B){let nt=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(i.FRAMEBUFFER,T),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let K=n.get(y.depthTexture);K.__renderTarget=y;let ot=nt?y.depthTexture.image[0]:y.depthTexture.image;(!K.__webglTexture||ot.width!==y.width||ot.height!==y.height)&&(ot.width=y.width,ot.height=y.height,y.depthTexture.needsUpdate=!0),nt?xt(y.depthTexture,0):_t(y.depthTexture,0);let pt=K.__webglTexture,Z=fe(y),J=nt?i.TEXTURE_CUBE_MAP_POSITIVE_X+B:i.TEXTURE_2D,ht=y.depthTexture.format===Zn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(y.depthTexture.format===Vn)dt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,J,pt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ht,J,pt,0);else if(y.depthTexture.format===Zn)dt(y)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ht,J,pt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,ht,J,pt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(T){let y=n.get(T),B=T.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==T.depthTexture){let nt=T.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),nt){let K=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,nt.removeEventListener("dispose",K)};nt.addEventListener("dispose",K),y.__depthDisposeCallback=K}y.__boundDepthTexture=nt}if(T.depthTexture&&!y.__autoAllocateDepthBuffer)if(B)for(let nt=0;nt<6;nt++)Pt(y.__webglFramebuffer[nt],T,nt);else T.texture.mipmaps.length>0?Pt(y.__webglFramebuffer[0],T,0):Pt(y.__webglFramebuffer,T,0);else if(B){y.__webglDepthbuffer=[];for(let nt=0;nt<6;nt++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[nt]),y.__webglDepthbuffer[nt]===void 0)y.__webglDepthbuffer[nt]=i.createRenderbuffer(),qt(y.__webglDepthbuffer[nt],T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=y.__webglDepthbuffer[nt];i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ot)}}else if(T.texture.mipmaps.length>0?e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),qt(y.__webglDepthbuffer,T,!1);else{let K=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ot=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ot),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,ot)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function ee(T,y,B){let nt=n.get(T);y!==void 0&&gt(nt.__webglFramebuffer,T,T.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&te(T)}function oe(T){let y=T.texture,B=n.get(T),nt=n.get(y);T.addEventListener("dispose",F),U(T);let K=T.textures,ot=T.isWebGLCubeRenderTarget===!0,pt=K.length>1;if(pt||(nt.__webglTexture===void 0&&(nt.__webglTexture=i.createTexture()),nt.__version=y.version,a.memory.textures++),ot){B.__webglFramebuffer=[];for(let Z=0;Z<6;Z++)if(y.mipmaps.length>0){B.__webglFramebuffer[Z]=[];for(let J=0;J<y.mipmaps.length;J++)B.__webglFramebuffer[Z][J]=i.createFramebuffer()}else B.__webglFramebuffer[Z]=i.createFramebuffer()}else{if(y.mipmaps.length>0){B.__webglFramebuffer=[];for(let Z=0;Z<y.mipmaps.length;Z++)B.__webglFramebuffer[Z]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(pt)for(let Z=0,J=K.length;Z<J;Z++){let ht=n.get(K[Z]);ht.__webglTexture===void 0&&(ht.__webglTexture=i.createTexture(),a.memory.textures++)}if(T.samples>0&&dt(T)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let Z=0;Z<K.length;Z++){let J=K[Z];B.__webglColorRenderbuffer[Z]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[Z]);let ht=r.convert(J.format,J.colorSpace),R=r.convert(J.type),$=w(J.internalFormat,ht,R,J.normalized,J.colorSpace,T.isXRRenderTarget===!0),q=fe(T);i.renderbufferStorageMultisample(i.RENDERBUFFER,q,$,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Z,i.RENDERBUFFER,B.__webglColorRenderbuffer[Z])}i.bindRenderbuffer(i.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),qt(B.__webglDepthRenderbuffer,T,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ot){e.bindTexture(i.TEXTURE_CUBE_MAP,nt.__webglTexture),$t(i.TEXTURE_CUBE_MAP,y);for(let Z=0;Z<6;Z++)if(y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)gt(B.__webglFramebuffer[Z][J],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,J);else gt(B.__webglFramebuffer[Z],T,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0);E(y)?S(i.TEXTURE_CUBE_MAP):y.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}else if(pt){for(let Z=0,J=K.length;Z<J;Z++){let ht=K[Z],R=n.get(ht),$=i.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture($,R.__webglTexture),$t($,ht),gt(B.__webglFramebuffer,T,ht,i.COLOR_ATTACHMENT0+Z,$,0),E(ht)&&S($)}e.unbindTexture()}else{let Z=i.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(Z,nt.__webglTexture),$t(Z,y),y.mipmaps.length>0)for(let J=0;J<y.mipmaps.length;J++)gt(B.__webglFramebuffer[J],T,y,i.COLOR_ATTACHMENT0,Z,J);else gt(B.__webglFramebuffer,T,y,i.COLOR_ATTACHMENT0,Z,0);E(y)?S(Z):y.mipmaps.length>0&&i.texParameteri(Z,i.TEXTURE_MAX_LEVEL,y.mipmaps.length-1),e.unbindTexture()}T.depthBuffer&&te(T)}function D(T){let y=T.textures;for(let B=0,nt=y.length;B<nt;B++){let K=y[B];if(E(K)&&K.mipmapsAutoUpdate===!0){let ot=A(T),pt=n.get(K).__webglTexture;e.bindTexture(ot,pt),S(ot),e.unbindTexture()}}}let be=[];function Qt(T){if(T.samples>0){if(dt(T)===!1){let y=T.textures,B=T.width,nt=T.height,K=i.COLOR_BUFFER_BIT,ot=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,pt=n.get(T),Z=y.length>1;if(Z)for(let ht=0;ht<y.length;ht++)e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,pt.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglFramebuffer);for(let ht=0;ht<y.length;ht++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),Z){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);let R=n.get(y[ht]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,R,0)}i.blitFramebuffer(0,0,B,nt,0,0,B,nt,K,i.NEAREST),l===!0&&(be.length=0,be.push(i.COLOR_ATTACHMENT0+ht),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&be.push(ot),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,be))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Z)for(let ht=0;ht<y.length;ht++){e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,pt.__webglColorRenderbuffer[ht]);let R=n.get(y[ht]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,pt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,R,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,pt.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&l){let y=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function fe(T){return Math.min(s.maxSamples,T.samples)}function dt(T){let y=n.get(T);return T.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Me(T){let y=a.render.frame;h.get(T)!==y&&(h.set(T,y),T.update())}function Ft(T,y){let B=T.colorSpace,nt=T.format,K=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Ks&&B!==Jn&&(se.getTransfer(B)===he?(nt!==En||K!==en)&&kt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",B)),y}function Ht(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=Ot,this.resetTextureUnits=Q,this.getTextureUnits=tt,this.setTextureUnits=Et,this.setTexture2D=_t,this.setTexture2DArray=wt,this.setTexture3D=Nt,this.setTextureCube=xt,this.rebindTextures=ee,this.setupRenderTarget=oe,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Qt,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=dt,this.dispose=k}function T_(i,t){function e(n,s=Jn){let r,a=se.getTransfer(s);if(n===en)return i.UNSIGNED_BYTE;if(n===co)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ho)return i.UNSIGNED_SHORT_5_5_5_1;if(n===uc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===fc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===cc)return i.BYTE;if(n===hc)return i.SHORT;if(n===Cs)return i.UNSIGNED_SHORT;if(n===lo)return i.INT;if(n===Sn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===bn)return i.HALF_FLOAT;if(n===dc)return i.ALPHA;if(n===pc)return i.RGB;if(n===En)return i.RGBA;if(n===Vn)return i.DEPTH_COMPONENT;if(n===Zn)return i.DEPTH_STENCIL;if(n===uo)return i.RED;if(n===fo)return i.RED_INTEGER;if(n===mi)return i.RG;if(n===po)return i.RG_INTEGER;if(n===mo)return i.RGBA_INTEGER;if(n===Rr||n===Cr||n===Ir||n===Pr)if(a===he)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Rr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Rr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Cr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ir)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Pr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===go||n===_o||n===xo||n===yo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===go)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===_o)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===vo||n===Mo||n===So||n===bo||n===Eo||n===Lr||n===wo)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===vo||n===Mo)return a===he?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===So)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===bo)return r.COMPRESSED_R11_EAC;if(n===Eo)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Lr)return r.COMPRESSED_RG11_EAC;if(n===wo)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===To||n===Ao||n===Ro||n===Co||n===Io||n===Po||n===Lo||n===Do||n===No||n===Uo||n===Fo||n===Oo||n===Bo||n===zo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===To)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ao)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ro)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Co)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Io)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Lo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===No)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Uo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Fo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Oo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Bo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===zo)return a===he?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ko||n===Go||n===Ho)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ko)return a===he?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Go)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ho)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Vo||n===Wo||n===Dr||n===Xo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vo)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Wo)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Dr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Xo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Bi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}var A_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,R_=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Bc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ur(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Pn({vertexShader:A_,fragmentShader:R_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new ce(new qn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},zc=class extends Cn{constructor(t,e){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,x=typeof XRWebGLBinding<"u",g=new Bc,m={},v=e.getContextAttributes(),E=null,S=null,A=[],w=[],_=new it,b=null,U=null,C=new Oe;C.viewport=new xe;let N=new Oe;N.viewport=new xe;let F=[C,N],V=new no,I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let _t=A[Y];return _t===void 0&&(_t=new fs,A[Y]=_t),_t.getTargetRaySpace()},this.getControllerGrip=function(Y){let _t=A[Y];return _t===void 0&&(_t=new fs,A[Y]=_t),_t.getGripSpace()},this.getHand=function(Y){let _t=A[Y];return _t===void 0&&(_t=new fs,A[Y]=_t),_t.getHandSpace()};function X(Y){let _t=w.indexOf(Y.inputSource);if(_t===-1)return;let wt=A[_t];wt!==void 0&&(wt.update(Y.inputSource,Y.frame,c||a),wt.dispatchEvent({type:Y.type,data:Y.inputSource}))}function G(){s.removeEventListener("select",X),s.removeEventListener("selectstart",X),s.removeEventListener("selectend",X),s.removeEventListener("squeeze",X),s.removeEventListener("squeezestart",X),s.removeEventListener("squeezeend",X),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",et);for(let Y=0;Y<A.length;Y++){let _t=w[Y];_t!==null&&(w[Y]=null,A[Y].disconnect(_t))}I=null,k=null,g.reset();for(let Y in m)delete m[Y];if(t.setRenderTarget(E),f=null,u=null,d=null,s=null,S=null,Ot.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(_.width,_.height,!1),U!==null){let Y=U.camera;Y.fov=U.fov,Y.zoom=U.zoom,Y.updateProjectionMatrix(),U=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,n.isPresenting===!0&&kt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&kt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(E=t.getRenderTarget(),s.addEventListener("select",X),s.addEventListener("selectstart",X),s.addEventListener("selectend",X),s.addEventListener("squeeze",X),s.addEventListener("squeezestart",X),s.addEventListener("squeezeend",X),s.addEventListener("end",G),s.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(_),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let wt=null,Nt=null,xt=null;v.depth&&(xt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,wt=v.stencil?Zn:Vn,Nt=v.stencil?Bi:Sn);let Ut={colorFormat:e.RGBA8,depthFormat:xt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Ut),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),S=new rn(u.textureWidth,u.textureHeight,{format:En,type:en,depthTexture:new Xn(u.textureWidth,u.textureHeight,Nt,void 0,void 0,void 0,void 0,void 0,void 0,wt),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let wt={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,wt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new rn(f.framebufferWidth,f.framebufferHeight,{format:En,type:en,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ot.setContext(s),Ot.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function et(Y){for(let _t=0;_t<Y.removed.length;_t++){let wt=Y.removed[_t],Nt=w.indexOf(wt);Nt>=0&&(w[Nt]=null,A[Nt].disconnect(wt))}for(let _t=0;_t<Y.added.length;_t++){let wt=Y.added[_t],Nt=w.indexOf(wt);if(Nt===-1){for(let Ut=0;Ut<A.length;Ut++)if(Ut>=w.length){w.push(wt),Nt=Ut;break}else if(w[Ut]===null){w[Ut]=wt,Nt=Ut;break}if(Nt===-1)break}let xt=A[Nt];xt&&xt.connect(wt)}}function W(Y,_t){_t===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(_t.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let _t=Y.near,wt=Y.far;g.texture!==null&&(g.depthNear>0&&(_t=g.depthNear),g.depthFar>0&&(wt=g.depthFar)),V.near=N.near=C.near=_t,V.far=N.far=C.far=wt,(I!==V.near||k!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,k=V.far),V.layers.mask=Y.layers.mask|6,C.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Nt=Y.parent,xt=V.cameras;W(V,Nt);for(let Ut=0;Ut<xt.length;Ut++)W(xt[Ut],Nt);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),U===null&&Y.isPerspectiveCamera&&(U={camera:Y,fov:Y.fov,zoom:Y.zoom}),Q(Y,V,Nt)};function Q(Y,_t,wt){wt===null?Y.matrix.copy(_t.matrixWorld):(Y.matrix.copy(wt.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(_t.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(_t.projectionMatrix),Y.projectionMatrixInverse.copy(_t.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=La*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(Y){l=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(V)},this.getCameraTexture=function(Y){return m[Y]};let tt=null;function Et(Y,_t){if(h=_t.getViewerPose(c||a),p=_t,h!==null){let wt=h.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Nt=!1;wt.length!==V.cameras.length&&(V.cameras.length=0,Nt=!0);for(let Bt=0;Bt<wt.length;Bt++){let $t=wt[Bt],jt=null;if(f!==null)jt=f.getViewport($t);else{let ct=d.getViewSubImage(u,$t);jt=ct.viewport,Bt===0&&(t.setRenderTargetTextures(S,ct.colorTexture,ct.depthStencilTexture),t.setRenderTarget(S))}let j=F[Bt];j===void 0&&(j=new Oe,j.layers.enable(Bt),j.viewport=new xe,F[Bt]=j),j.matrix.fromArray($t.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray($t.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(jt.x,jt.y,jt.width,jt.height),Bt===0&&(V.matrix.copy(j.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Nt===!0&&V.cameras.push(j)}let xt=s.enabledFeatures;if(xt&&xt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=n.getBinding();let Bt=d.getDepthInformation(wt[0]);Bt&&Bt.isValid&&Bt.texture&&g.init(Bt,s.renderState)}if(xt&&xt.includes("camera-access")&&x){t.state.unbindTexture(),d=n.getBinding();for(let Bt=0;Bt<wt.length;Bt++){let $t=wt[Bt].camera;if($t){let jt=m[$t];jt||(jt=new ur,m[$t]=jt);let j=d.getCameraImage($t);jt.sourceTexture=j}}}}for(let wt=0;wt<A.length;wt++){let Nt=w[wt],xt=A[wt];Nt!==null&&xt!==void 0&&xt.update(Nt,_t,c||a)}tt&&tt(Y,_t),_t.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_t}),p=null}let Ot=new hf;Ot.setAnimationLoop(Et),this.setAnimationLoop=function(Y){tt=Y},this.dispose=function(){}}},C_=new ae,vf=new Vt;vf.set(-1,0,0,0,1,0,0,0,1);function I_(i,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,Mc(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,v,E,S){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(g,m):m.isMeshLambertMaterial?(r(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(g,m),d(g,m)):m.isMeshPhongMaterial?(r(g,m),h(g,m),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(g,m),u(g,m),m.isMeshPhysicalMaterial&&f(g,m,S)):m.isMeshMatcapMaterial?(r(g,m),p(g,m)):m.isMeshDepthMaterial?r(g,m):m.isMeshDistanceMaterial?(r(g,m),x(g,m)):m.isMeshNormalMaterial?r(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,v,E):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Be&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Be&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);let v=t.get(m),E=v.envMap,S=v.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(C_.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(vf),g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,v,E){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*v,g.scale.value=E*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function d(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,v){g.ior.value=m.ior,m.diffuseRoughness>0&&(g.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(g.diffuseRoughnessMap.value=m.diffuseRoughnessMap,e(m.diffuseRoughnessMap,g.diffuseRoughnessMapTransform))),m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.retroreflectivity>0&&(g.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,g.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){let v=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function P_(i,t,e,n){let s={},r={};function a(v,E){let S=E.program;n.uniformBlockBinding(v,S,s[v.id])}function o(v,E){let S=s[v.id];S===void 0&&(p(v),S=l(v),s[v.id]=S,v.addEventListener("dispose",g));let A=E.program;n.updateUBOMapping(v,A);let w=t.render.frame;r[v.id]!==w&&(c(v),r[v.id]=w)}function l(v){let E=i.createBuffer(),S=v.__size,A=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,S,A),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function c(v){let E=s[v.id],S=v.uniforms,A=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,_=S.length;w<_;w++){let b=S[w];if(Array.isArray(b))for(let U=0,C=b.length;U<C;U++)h(b[U],w,U,A);else h(b,w,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,E,S,A){if(u(v,E,S,A)===!0){let w=v.__offset,_=v.value;if(Array.isArray(_)){let b=0;for(let U=0;U<_.length;U++){let C=_[U],N=x(C,!0);d(C,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,v.__data)}}function d(v,E,S){typeof v=="number"||typeof v=="boolean"?E[S]=v:v.isMatrix3?(E[S]=v.elements[0],E[S+1]=v.elements[1],E[S+2]=v.elements[2],E[S+3]=0,E[S+4]=v.elements[3],E[S+5]=v.elements[4],E[S+6]=v.elements[5],E[S+7]=0,E[S+8]=v.elements[6],E[S+9]=v.elements[7],E[S+10]=v.elements[8],E[S+11]=0):ArrayBuffer.isView(v)?E.set(v.subarray(0,E.length-S),S):v.toArray(E,S)}function u(v,E,S,A){let w=v.value,_=E+"_"+S;if(Array.isArray(w)){A[_]===void 0&&(A[_]=[]);let b=A[_],U=!1;for(let C=0;C<w.length;C++)f(w[C],b,C)===!0&&(U=!0);return U}return f(w,A,_)}function f(v,E,S){if(E[S]===void 0)return typeof v=="number"||typeof v=="boolean"?E[S]=v:ArrayBuffer.isView(v)?E[S]=v.slice():E[S]=v.clone(),!0;{let A=E[S];if(typeof v=="number"||typeof v=="boolean"){if(A!==v)return E[S]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(A.equals(v)===!1)return A.copy(v),!0}}return!1}function p(v){let E=v.uniforms,S=0,A=16;for(let _=0,b=E.length;_<b;_++){let U=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,N=U.length;C<N;C++){let F=U[C],V=Array.isArray(F.value)?F.value:[F.value],I=Array.isArray(E[_])||Array.isArray(F.value),k=S;for(let G=0,et=V.length;G<et;G++){let W=V[G],Q=x(W,I),tt=S%A,Et=tt%Q.boundary,Ot=tt+Et;S+=Et,Ot!==0&&A-Ot<Q.storage&&(S+=A-Ot),G===0&&(k=S),S+=Q.storage}let X=F.type==="int"?Int32Array:F.type==="uint"?Uint32Array:Float32Array;F.__data=new X((S-k)/Float32Array.BYTES_PER_ELEMENT),F.__offset=k}}let w=S%A;return w>0&&(S+=A-w),v.__size=S,v.__cache={},this}function x(v,E){let S={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(S.boundary=4,S.storage=4):v.isVector2?(S.boundary=8,S.storage=8):v.isVector3||v.isColor?(S.boundary=16,S.storage=12):v.isVector4?(S.boundary=16,S.storage=16):v.isMatrix3?(S.boundary=16,S.storage=48):v.isMatrix4?(S.boundary=16,S.storage=64):v.isTexture?kt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(S.boundary=16,S.storage=v.byteLength):kt("WebGLRenderer: Unsupported uniform value type.",v),E===!0&&(S.boundary=16,S.storage=Math.ceil(S.storage/16)*16),S}function g(v){let E=v.target;E.removeEventListener("dispose",g),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var L_=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Dn=null;function D_(){return Dn===null&&(Dn=new ar(L_,16,16,mi,bn),Dn.name="DFG_LUT",Dn.minFilter=$e,Dn.magFilter=$e,Dn.wrapS=Rn,Dn.wrapT=Rn,Dn.generateMipmaps=!1,Dn.needsUpdate=!0),Dn}var Jo=class{constructor(t={}){let{canvas:e=Tu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=en}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;let x=f,g=new Set([mo,po,fo]),m=new Set([en,Sn,Cs,Bi,co,ho]),v=new Uint32Array(4),E=new Int32Array(4),S={textures:[],min:[],max:[],resolution:[]},A=null,w=null,_=[],b=[],U=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ln,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,F=null,V=null,I=null,k=null;this._outputColorSpace=Je;let X=0,G=0,et=null,W=-1,Q=null,tt=new xe,Et=new xe,Ot=null,Y=new Gt(0),_t=0,wt=e.width,Nt=e.height,xt=1,Ut=null,ge=null,Bt=new xe(0,0,wt,Nt),$t=new xe(0,0,wt,Nt),jt=!1,j=new ri,ct=new Fa,at=!1,bt=!1,gt=new ae,qt=new L,Pt=new xe,te={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ee=!1;function oe(){return et===null?xt:1}let D=n;function be(M,P){return e.getContext(M,P)}let Qt,fe,dt,Me,Ft,Ht,T,y,B,nt,K,ot,pt,Z,J,ht,R,$,q,ut,rt,lt,Lt;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",Dt,!1),e.addEventListener("webglcontextrestored",Yt,!1),e.addEventListener("webglcontextcreationerror",yt,!1),D===null){let P="webgl2";if(D=be(P,M),D===null)throw be(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Zt()}catch(M){throw e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),zt("WebGLRenderer: "+M.message),M}function Zt(){Qt=new W0(D),Qt.init(),rt=new T_(D,Qt),fe=new D0(D,Qt,t,rt),dt=new E_(D,Qt),fe.reversedDepthBuffer&&u&&dt.buffers.depth.setReversed(!0),V=D.createFramebuffer(),I=D.createFramebuffer(),k=D.createFramebuffer(),Me=new Y0(D),Ft=new h_,Ht=new w_(D,Qt,dt,Ft,fe,rt,Me),T=new V0(C),y=new Jd(D),lt=new P0(D,y),B=new X0(D,y,Me,lt),nt=new J0(D,B,y,lt,Me),$=new Z0(D,fe,Ht),J=new N0(Ft),K=new c_(C,T,Qt,fe,lt,J),ot=new I_(C,Ft),pt=new f_,Z=new x_(Qt),R=new I0(C,T,dt,nt,p,l),ht=new b_(C,nt,fe),Lt=new P_(D,Me,fe,dt),q=new L0(D,Qt,Me),ut=new q0(D,Qt,Me),Me.programs=K.programs,C.capabilities=fe,C.extensions=Qt,C.properties=Ft,C.renderLists=pt,C.shadowMap=ht,C.state=dt,C.info=Me}x!==en&&(U=new K0(x,e.width,e.height,o,s,r));let st=new zc(C,D);this.xr=st,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let M=Qt.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=Qt.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return xt},this.setPixelRatio=function(M){M!==void 0&&(xt=M,this.setSize(wt,Nt,!1))},this.getSize=function(M){return M.set(wt,Nt)},this.setSize=function(M,P,H=!0){if(st.isPresenting){kt("WebGLRenderer: Can't change size while VR device is presenting.");return}wt=M,Nt=P,e.width=Math.floor(M*xt),e.height=Math.floor(P*xt),H===!0&&(e.style.width=M+"px",e.style.height=P+"px"),U!==null&&U.setSize(e.width,e.height),this.setViewport(0,0,M,P)},this.getDrawingBufferSize=function(M){return M.set(wt*xt,Nt*xt).floor()},this.setDrawingBufferSize=function(M,P,H){wt=M,Nt=P,xt=H,e.width=Math.floor(M*H),e.height=Math.floor(P*H),this.setViewport(0,0,M,P)},this.setEffects=function(M){if(x===en){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let P=0;P<M.length;P++)if(M[P].isOutputPass===!0){kt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(tt)},this.getViewport=function(M){return M.copy(Bt)},this.setViewport=function(M,P,H,O){M.isVector4?Bt.set(M.x,M.y,M.z,M.w):Bt.set(M,P,H,O),dt.viewport(tt.copy(Bt).multiplyScalar(oe()).round())},this.getScissor=function(M){return M.copy($t)},this.setScissor=function(M,P,H,O){M.isVector4?$t.set(M.x,M.y,M.z,M.w):$t.set(M,P,H,O),dt.scissor(Et.copy($t).multiplyScalar(oe()).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(M){dt.setScissorTest(jt=M)},this.setOpaqueSort=function(M){Ut=M},this.setTransparentSort=function(M){ge=M},this.getClearColor=function(M){return M.copy(R.getClearColor())},this.setClearColor=function(){R.setClearColor(...arguments)},this.getClearAlpha=function(){return R.getClearAlpha()},this.setClearAlpha=function(){R.setClearAlpha(...arguments)},this.clear=function(M=!0,P=!0,H=!0){let O=0;if(M){let z=!1;if(et!==null){let mt=et.texture.format;z=g.has(mt)}if(z){let mt=et.texture.type,Tt=m.has(mt),ft=R.getClearColor(),Mt=R.getClearAlpha(),Ct=ft.r,Xt=ft.g,ne=ft.b;Tt?(v[0]=Ct,v[1]=Xt,v[2]=ne,v[3]=Mt,D.clearBufferuiv(D.COLOR,0,v)):(E[0]=Ct,E[1]=Xt,E[2]=ne,E[3]=Mt,D.clearBufferiv(D.COLOR,0,E))}else O|=D.COLOR_BUFFER_BIT}P&&(O|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),H&&(O|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&D.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),F=M},this.dispose=function(){e.removeEventListener("webglcontextlost",Dt,!1),e.removeEventListener("webglcontextrestored",Yt,!1),e.removeEventListener("webglcontextcreationerror",yt,!1),R.dispose(),pt.dispose(),Z.dispose(),Ht.dispose(),Ft.dispose(),T.dispose(),nt.dispose(),B.dispose(),lt.dispose(),Lt.dispose(),K.dispose(),st.dispose(),st.removeEventListener("sessionstart",th),st.removeEventListener("sessionend",eh),vi.stop()};function Dt(M){M.preventDefault(),tr("WebGLRenderer: Context Lost."),N=!0}function Yt(){tr("WebGLRenderer: Context Restored."),N=!1;let M=Me.autoReset,P=ht.enabled,H=ht.autoUpdate,O=ht.needsUpdate,z=ht.type;Zt(),Me.autoReset=M,ht.enabled=P,ht.autoUpdate=H,ht.needsUpdate=O,ht.type=z}function yt(M){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function ue(M){let P=M.target;P.removeEventListener("dispose",ue),Pe(P)}function Pe(M){$n(M),Ft.remove(M)}function $n(M){let P=Ft.get(M).programs;P!==void 0&&(P.forEach(function(H){K.releaseProgram(H)}),M.isShaderMaterial&&K.releaseShaderCache(M))}this.renderBufferDirect=function(M,P,H,O,z,mt){P===null&&(P=te);let Tt=z.isMesh&&z.matrixWorld.determinantAffine()<0,ft=Df(M,P,H,O,z);dt.setMaterial(O,Tt);let Mt=H.index,Ct=1;if(O.wireframe===!0){if(Mt=B.getWireframeAttribute(H),Mt===void 0)return;Ct=2}let Xt=H.drawRange,ne=H.attributes.position,At=Xt.start*Ct,ie=(Xt.start+Xt.count)*Ct;mt!==null&&(At=Math.max(At,mt.start*Ct),ie=Math.min(ie,(mt.start+mt.count)*Ct)),Mt!==null?(At=Math.max(At,0),ie=Math.min(ie,Mt.count)):ne!=null&&(At=Math.max(At,0),ie=Math.min(ie,ne.count));let Ee=ie-At;if(Ee<0||Ee===1/0)return;lt.setup(z,O,ft,H,Mt);let me,de=q;if(Mt!==null&&(me=y.get(Mt),de=ut,de.setIndex(me)),z.isMesh)O.wireframe===!0?(dt.setLineWidth(O.wireframeLinewidth*oe()),de.setMode(D.LINES)):de.setMode(D.TRIANGLES);else if(z.isLine){let Ge=O.linewidth;Ge===void 0&&(Ge=1),dt.setLineWidth(Ge*oe()),z.isLineSegments?de.setMode(D.LINES):z.isLineLoop?de.setMode(D.LINE_LOOP):de.setMode(D.LINE_STRIP)}else z.isPoints?de.setMode(D.POINTS):z.isSprite&&de.setMode(D.TRIANGLES);if(z.isBatchedMesh)if(Qt.get("WEBGL_multi_draw"))de.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Ge=z._multiDrawStarts,Rt=z._multiDrawCounts,Ye=z._multiDrawCount,le=Mt?y.get(Mt).bytesPerElement:1,Mi=Ft.get(O).currentProgram.getUniforms();for(let He=0;He<Ye;He++)Mi.setValue(D,"_gl_DrawID",He),de.render(Ge[He]/le,Rt[He])}else if(z.isInstancedMesh)de.renderInstances(At,Ee,z.count);else if(H.isInstancedBufferGeometry){let Ge=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Rt=Math.min(H.instanceCount,Ge);de.renderInstances(At,Ee,Rt)}else de.render(At,Ee)};function jc(M,P,H,O){F!==null&&M.isNodeMaterial&&F.setObject(O,M),at===!0&&J.setState(M,H,!1),M.transparent===!0&&M.side===fn&&M.forceSinglePass===!1?(M.side=Be,M.needsUpdate=!0,Os(M,P,O),M.side=di,M.needsUpdate=!0,Os(M,P,O),M.side=fn):Os(M,P,O)}this.compile=function(M,P,H=null){H===null&&(H=M),F!==null&&F.renderStart(M,P,H),w=Z.get(H),w.init(P),b.push(w),H.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),M!==H&&M.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(w.pushLight(z),z.castShadow&&w.pushShadow(z))}),w.setupLights(),F!==null&&F.updateLights(w.state.lightsArray),bt=this.localClippingEnabled,at=J.init(this.clippingPlanes,bt),at===!0&&J.setGlobalState(this.clippingPlanes,P),F!==null&&ht.render(w.state.shadowsArray,H,P);let O=new Set;return M.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let mt=z.material;if(mt)if(Array.isArray(mt))for(let Tt=0;Tt<mt.length;Tt++){let ft=mt[Tt];jc(ft,H,P,z),O.add(ft)}else jc(mt,H,P,z),O.add(mt)}),w=b.pop(),F!==null&&F.renderEnd(),O},this.compileAsync=function(M,P,H=null){let O=this.compile(M,P,H);return new Promise(z=>{function mt(){if(O.forEach(function(Tt){let Mt=Ft.get(Tt).currentProgram;(Mt===void 0||Mt.isReady())&&O.delete(Tt)}),O.size===0){z(M);return}setTimeout(mt,10)}Qt.get("KHR_parallel_shader_compile")!==null?mt():setTimeout(mt,10)})};let cl=null;function Pf(M){cl&&cl(M)}function th(){vi.stop()}function eh(){vi.start()}let vi=new hf;vi.setAnimationLoop(Pf),typeof self<"u"&&vi.setContext(self),this.setAnimationLoop=function(M){cl=M,st.setAnimationLoop(M),M===null?vi.stop():vi.start()},st.addEventListener("sessionstart",th),st.addEventListener("sessionend",eh),this.render=function(M,P){if(P!==void 0&&P.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;F!==null&&F.renderStart(M,P);let H=st.enabled===!0&&st.isPresenting===!0,O=U!==null&&(et===null||H)&&U.begin(C,et);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),st.enabled===!0&&st.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(st.cameraAutoUpdate===!0&&st.updateCamera(P),P=st.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,P,et),w=Z.get(M,b.length),w.init(P),w.state.textureUnits=Ht.getTextureUnits(),b.push(w),gt.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?ct.setFromArrayCamera(P):j.setFromProjectionMatrix(gt,cn,P.reversedDepth),bt=this.localClippingEnabled,at=J.init(this.clippingPlanes,bt),A=pt.get(M,_.length),A.init(),_.push(A),this.info.render.frame++,st.enabled===!0&&st.isPresenting===!0){let Tt=C.xr.getDepthSensingMesh();Tt!==null&&hl(Tt,P,-1/0,C.sortObjects)}hl(M,P,0,C.sortObjects),A.finish(),F!==null&&F.updateLights(w.state.lightsArray),C.sortObjects===!0&&A.sort(Ut,ge),ee=st.enabled===!1||st.isPresenting===!1||st.hasDepthSensing()===!1,ee&&R.addToRenderList(A,M),this.info.autoReset===!0&&this.info.reset(),at===!0&&J.beginShadows();let z=w.state.shadowsArray;if(ht.render(z,M,P),at===!0&&J.endShadows(),(O&&U.hasRenderPass())===!1){let Tt=A.opaque,ft=A.transmissive;if(w.setupLights(),P.isArrayCamera){let Mt=P.cameras;if(ft.length>0)for(let Ct=0,Xt=Mt.length;Ct<Xt;Ct++){let ne=Mt[Ct];ih(Tt,ft,M,ne)}ee&&R.render(M);for(let Ct=0,Xt=Mt.length;Ct<Xt;Ct++){let ne=Mt[Ct];nh(A,M,ne,ne.viewport)}}else ft.length>0&&ih(Tt,ft,M,P),ee&&R.render(M),nh(A,M,P)}et!==null&&G===0&&(Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et)),O&&U.end(C),M.isScene===!0&&M.onAfterRender(C,M,P),lt.resetDefaultState(),W=-1,Q=null,b.pop(),b.length>0?(w=b[b.length-1],Ht.setTextureUnits(w.state.textureUnits),at===!0&&J.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?A=_[_.length-1]:A=null,F!==null&&F.renderEnd()};function hl(M,P,H,O){if(M.visible===!1)return;if(M.layers.test(P.layers)){if(M.isGroup)H=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(P);else if(M.isLight)w.pushLight(M),M.castShadow&&w.pushShadow(M);else if(M.isSprite){let Tt=P.isArrayCamera?ct:j;if(!M.frustumCulled||M.intersectsFrustum(Tt)){O&&Pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(gt);let ft=nt.update(M),Mt=M.material;Mt.visible&&A.push(M,ft,Mt,H,Pt.z,null,P)}}else if(M.isMesh||M.isLine||M.isPoints){let Tt=P.isArrayCamera?ct:j;if(!M.frustumCulled||M.intersectsFrustum(Tt)){let ft=nt.update(M),Mt=M.material;if(O&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pt.copy(M.boundingSphere.center)):(ft.boundingSphere===null&&ft.computeBoundingSphere(),Pt.copy(ft.boundingSphere.center)),Pt.applyMatrix4(M.matrixWorld).applyMatrix4(gt)),Array.isArray(Mt)){let Ct=ft.groups;for(let Xt=0,ne=Ct.length;Xt<ne;Xt++){let At=Ct[Xt],ie=Mt[At.materialIndex];ie&&ie.visible&&A.push(M,ft,ie,H,Pt.z,At,P)}}else Mt.visible&&A.push(M,ft,Mt,H,Pt.z,null,P)}}}let mt=M.children;for(let Tt=0,ft=mt.length;Tt<ft;Tt++)hl(mt[Tt],P,H,O)}function nh(M,P,H,O){let{opaque:z,transmissive:mt,transparent:Tt}=M;w.setupLightsView(H),at===!0&&J.setGlobalState(C.clippingPlanes,H),O&&dt.viewport(tt.copy(O)),z.length>0&&Wr(z,P,H),mt.length>0&&Wr(mt,P,H),Tt.length>0&&Wr(Tt,P,H),dt.buffers.depth.setTest(!0),dt.buffers.depth.setMask(!0),dt.buffers.color.setMask(!0),dt.setPolygonOffset(!1)}function ih(M,P,H,O){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[O.id]===void 0){let At=Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[O.id]=new rn(1,1,{generateMipmaps:!0,type:At?bn:en,minFilter:Yn,samples:Math.max(4,fe.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:se.workingColorSpace})}let mt=w.state.transmissionRenderTarget[O.id],Tt=O.viewport||tt;mt.setSize(Tt.z*C.transmissionResolutionScale,Tt.w*C.transmissionResolutionScale);let ft=C.getRenderTarget(),Mt=C.getActiveCubeFace(),Ct=C.getActiveMipmapLevel();C.setRenderTarget(mt),C.getClearColor(Y),_t=C.getClearAlpha(),_t<1&&C.setClearColor(16777215,.5),C.clear(),ee&&R.render(H);let Xt=C.toneMapping;C.toneMapping=Ln;let ne=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),w.setupLightsView(O),at===!0&&J.setGlobalState(C.clippingPlanes,O),Wr(M,H,O),Ht.updateMultisampleRenderTarget(mt),Ht.updateRenderTargetMipmap(mt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let At=!1;for(let ie=0,Ee=P.length;ie<Ee;ie++){let me=P[ie],{object:de,geometry:Ge,material:Rt,group:Ye}=me;if(Rt.side===fn&&de.layers.test(O.layers)){let le=Rt.side;Rt.side=Be,Rt.needsUpdate=!0,sh(de,H,O,Ge,Rt,Ye),Rt.side=le,Rt.needsUpdate=!0,At=!0}}At===!0&&(Ht.updateMultisampleRenderTarget(mt),Ht.updateRenderTargetMipmap(mt))}C.setRenderTarget(ft,Mt,Ct),C.setClearColor(Y,_t),ne!==void 0&&(O.viewport=ne),C.toneMapping=Xt}function Wr(M,P,H){let O=P.isScene===!0?P.overrideMaterial:null;for(let z=0,mt=M.length;z<mt;z++){let Tt=M[z],{object:ft,geometry:Mt,group:Ct}=Tt,Xt=Tt.material;Xt.allowOverride===!0&&O!==null&&(Xt=O),ft.layers.test(H.layers)&&sh(ft,P,H,Mt,Xt,Ct)}}function sh(M,P,H,O,z,mt){F!==null&&z.isNodeMaterial&&F.setObject(M,z),M.onBeforeRender(C,P,H,O,z,mt),M.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),z.onBeforeRender(C,P,H,O,M,mt),z.transparent===!0&&z.side===fn&&z.forceSinglePass===!1?(z.side=Be,z.needsUpdate=!0,C.renderBufferDirect(H,P,O,z,M,mt),z.side=di,z.needsUpdate=!0,C.renderBufferDirect(H,P,O,z,M,mt),z.side=fn):C.renderBufferDirect(H,P,O,z,M,mt),M.onAfterRender(C,P,H,O,z,mt)}function rh(M){let P=0;for(let H of M)H.texture!==null&&P++;return P}function Os(M,P,H){P.isScene!==!0&&(P=te);let O=Ft.get(M),z=w.state.lights,mt=w.state.shadowsArray,Tt=z.state.version,ft=K.getParameters(M,z.state,mt,P,H,w.state.lightProbeGridArray),Mt=K.getProgramCacheKey(ft),Ct=O.programs;O.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;let Xt=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;O.envMap=T.get(M.envMap||O.environment,Xt),O.envMapRotation=O.environment!==null&&M.envMap===null?P.environmentRotation:M.envMapRotation,Ct===void 0&&(M.addEventListener("dispose",ue),Ct=new Map,O.programs=Ct,O.programVariants=new Map);let ne=Ct.get(Mt);if(ne!==void 0){if(O.currentProgram===ne&&O.lightsStateVersion===Tt)return oh(M,ft),ne}else ft.uniforms=K.getUniforms(M),F!==null&&M.isNodeMaterial&&F.build(M,H,ft),M.onBeforeCompile(ft,C),ne=K.acquireProgram(ft,Mt),Ct.set(Mt,ne),O.uniforms=ft.uniforms;let At=O.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=J.uniform),oh(M,ft),O.needsLights=Uf(M),O.lightsStateVersion=Tt,O.needsLights&&(At.ambientLightColor.value=z.state.ambient,At.lightProbe.value=z.state.probe,At.sunLights.value=z.state.sun,At.sunLightShadows.value=z.state.sunShadow,At.directionalLights.value=z.state.directional,At.directionalLightShadows.value=z.state.directionalShadow,At.spotLights.value=z.state.spot,At.spotLightShadows.value=z.state.spotShadow,At.rectAreaLights.value=z.state.rectArea,At.ltc_1.value=z.state.rectAreaLTC1,At.ltc_2.value=z.state.rectAreaLTC2,At.pointLights.value=z.state.point,At.pointLightShadows.value=z.state.pointShadow,At.hemisphereLights.value=z.state.hemi,At.sunShadowMatrix.value=z.state.sunShadowMatrix,At.sunShadowCascade.value=z.state.sunShadowCascade,At.directionalShadowMatrix.value=z.state.directionalShadowMatrix,At.spotLightMatrix.value=z.state.spotLightMatrix,At.spotLightMap.value=z.state.spotLightMap,At.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=rh(w.state.lightProbeGridArray),O.currentProgram=ne,O.uniformsList=null,ne}function Lf(M,P,H,O,z){let mt=Ft.get(M),Tt=mt.currentProgram.id+","+O+","+z,ft=mt.programVariants.get(Tt);return ft===void 0?(ft=Os(M,P,H),mt.programVariants.set(Tt,ft)):(mt.currentProgram=ft,mt.uniformsList=null,mt.outputColorSpace=O,mt.toneMapping=z),ft}function ah(M){if(M.uniformsList===null){let P=M.currentProgram.getUniforms();M.uniformsList=Is.seqWithValue(P.seq,M.uniforms)}return M.uniformsList}function oh(M,P){let H=Ft.get(M);H.outputColorSpace=P.outputColorSpace,H.batching=P.batching,H.batchingColor=P.batchingColor,H.instancing=P.instancing,H.instancingColor=P.instancingColor,H.instancingMorph=P.instancingMorph,H.skinning=P.skinning,H.morphTargets=P.morphTargets,H.morphNormals=P.morphNormals,H.morphColors=P.morphColors,H.morphTargetsCount=P.morphTargetsCount,H.numClippingPlanes=P.numClippingPlanes,H.numIntersection=P.numClipIntersection,H.vertexAlphas=P.vertexAlphas,H.vertexTangents=P.vertexTangents,H.toneMapping=P.toneMapping}function Df(M,P,H,O,z){P.isScene!==!0&&(P=te),Ht.resetTextureUnits();let mt=P.fog,Tt=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,ft=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:se.workingColorSpace,Mt=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ct=T.get(O.envMap||Tt,Mt),Xt=O.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,ne=!!H.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),At=!!H.morphAttributes.position,ie=!!H.morphAttributes.normal,Ee=!!H.morphAttributes.color,me=Ln;O.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(me=C.toneMapping);let de=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ge=de!==void 0?de.length:0,Rt=Ft.get(O),Ye=w.state.lights;if(at===!0&&(bt===!0||M!==Q)){let ye=M===Q&&O.id===W;J.setState(O,M,ye)}let le=!1,Mi=!1;O.version===Rt.__version?Rt.needsLights&&Rt.lightsStateVersion!==Ye.state.version||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==Ct||O.fog===!0&&Rt.fog!==mt||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==J.numPlanes||Rt.numIntersection!==J.numIntersection)||Rt.vertexAlphas!==Xt||Rt.vertexTangents!==ne||Rt.morphTargets!==At||Rt.morphNormals!==ie||Rt.morphColors!==Ee||Rt.morphTargetsCount!==Ge||Rt.numLightProbeGrids!==rh(w.state.lightProbeGridArray)?le=!0:(Rt.outputColorSpace!==ft||Rt.toneMapping!==me)&&(Mi=!0):(le=!0,Rt.__version=O.version);let He=Rt.currentProgram;(le===!0||Mi===!0)&&(He=Mi===!0?Lf(O,P,z,ft,me):Os(O,P,z),F&&O.isNodeMaterial&&F.onUpdateProgram(O,He,Rt));let Xr=!1,Kn=!1,Si=!1,re=He.getUniforms(),Fe=Rt.uniforms;if(dt.useProgram(He.program)&&(Xr=!0,Kn=!0,Si=!0),O.id!==W&&(W=O.id,Kn=!0),Xr||Q!==M){dt.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),re.setValue(D,"projectionMatrix",M.projectionMatrix),re.setValue(D,"viewMatrix",M.matrixWorldInverse);let Le=re.map.cameraPosition;Le!==void 0&&Le.setValue(D,qt.setFromMatrixPosition(M.matrixWorld)),fe.logarithmicDepthBuffer&&re.setValue(D,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&re.setValue(D,"isOrthographic",M.isOrthographicCamera===!0),Q!==M&&(Q=M,Kn=!0,Si=!0)}if(Rt.needsLights&&(Ye.state.sunShadowMap.length>0&&re.setValue(D,"sunShadowMap",Ye.state.sunShadowMap,Ht),Ye.state.directionalShadowMap.length>0&&re.setValue(D,"directionalShadowMap",Ye.state.directionalShadowMap,Ht),Ye.state.spotShadowMap.length>0&&re.setValue(D,"spotShadowMap",Ye.state.spotShadowMap,Ht),Ye.state.pointShadowMap.length>0&&re.setValue(D,"pointShadowMap",Ye.state.pointShadowMap,Ht)),z.isSkinnedMesh){re.setOptional(D,z,"bindMatrix"),re.setOptional(D,z,"bindMatrixInverse");let ye=z.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),re.setValue(D,"boneTexture",ye.boneTexture,Ht))}z.isBatchedMesh&&(re.setOptional(D,z,"batchingTexture"),re.setValue(D,"batchingTexture",z._matricesTexture,Ht),re.setOptional(D,z,"batchingIdTexture"),re.setValue(D,"batchingIdTexture",z._indirectTexture,Ht),re.setOptional(D,z,"batchingColorTexture"),z._colorsTexture!==null&&re.setValue(D,"batchingColorTexture",z._colorsTexture,Ht));let gn=H.morphAttributes;if((gn.position!==void 0||gn.normal!==void 0||gn.color!==void 0)&&$.update(z,H,He),(Kn||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,re.setValue(D,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(Fe.envMapIntensity.value=P.environmentIntensity),Fe.dfgLUT!==void 0&&(Fe.dfgLUT.value=D_()),Kn){if(re.setValue(D,"toneMappingExposure",C.toneMappingExposure),Rt.needsLights&&Nf(Fe,Si),mt&&O.fog===!0&&ot.refreshFogUniforms(Fe,mt),ot.refreshMaterialUniforms(Fe,O,xt,Nt,w.state.transmissionRenderTarget[M.id]),Rt.needsLights&&Rt.numLightProbeGrids>0){let ye=S,Le=0;for(let Un of w.state.lightProbeGridArray)Un.texture!==null&&(ye.textures[Le]=Un.texture,ye.min[Le]=Un.boundingBox.min,ye.max[Le]=Un.boundingBox.max,ye.resolution[Le]=Un.resolution,Le++);for(let Un in ye)ye[Un].length=Le;Fe.probesSH.value=ye.textures,Fe.probesMin.value=ye.min,Fe.probesMax.value=ye.max,Fe.probesResolution.value=ye.resolution}Is.upload(D,ah(Rt),Fe,Ht)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Is.upload(D,ah(Rt),Fe,Ht),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&re.setValue(D,"center",z.center),re.setValue(D,"modelViewMatrix",z.modelViewMatrix),re.setValue(D,"normalMatrix",z.normalMatrix),re.setValue(D,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let ye=O.uniformsGroups;for(let Le=0,Un=ye.length;Le<Un;Le++){let ch=ye[Le];Lt.update(ch,He),Lt.bind(ch,He)}}return He}function Nf(M,P){M.ambientLightColor.needsUpdate=P,M.lightProbe.needsUpdate=P,M.sunLights.needsUpdate=P,M.sunLightShadows.needsUpdate=P,M.directionalLights.needsUpdate=P,M.directionalLightShadows.needsUpdate=P,M.pointLights.needsUpdate=P,M.pointLightShadows.needsUpdate=P,M.spotLights.needsUpdate=P,M.spotLightShadows.needsUpdate=P,M.rectAreaLights.needsUpdate=P,M.hemisphereLights.needsUpdate=P}function Uf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return X},this.getActiveMipmapLevel=function(){return G},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(M,P,H){let O=Ft.get(M);O.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),Ft.get(M.texture).__webglTexture=P,Ft.get(M.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:H,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,P){let H=Ft.get(M);H.__webglFramebuffer=P,H.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(M,P=0,H=0){et=M,X=P,G=H;let O=null,z=!1,mt=!1;if(M){let ft=Ft.get(M);if(ft.__useDefaultFramebuffer!==void 0){dt.bindFramebuffer(D.FRAMEBUFFER,ft.__webglFramebuffer),tt.copy(M.viewport),Et.copy(M.scissor),Ot=M.scissorTest,dt.viewport(tt),dt.scissor(Et),dt.setScissorTest(Ot),W=-1;return}else if(ft.__webglFramebuffer===void 0)Ht.setupRenderTarget(M);else if(ft.__hasExternalTextures)Ht.rebindTextures(M,Ft.get(M.texture).__webglTexture,Ft.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let Xt=M.depthTexture;if(ft.__boundDepthTexture!==Xt){if(Xt!==null&&Ft.has(Xt)&&(M.width!==Xt.image.width||M.height!==Xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(M)}}let Mt=M.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(mt=!0);let Ct=Ft.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Ct[P])?O=Ct[P][H]:O=Ct[P],z=!0):M.samples>0&&Ht.useMultisampledRTT(M)===!1?O=Ft.get(M).__webglMultisampledFramebuffer:Array.isArray(Ct)?O=Ct[H]:O=Ct,tt.copy(M.viewport),Et.copy(M.scissor),Ot=M.scissorTest}else tt.copy(Bt).multiplyScalar(xt).floor(),Et.copy($t).multiplyScalar(xt).floor(),Ot=jt;if(H!==0&&(O=V),dt.bindFramebuffer(D.FRAMEBUFFER,O)&&dt.drawBuffers(M,O),dt.viewport(tt),dt.scissor(Et),dt.setScissorTest(Ot),z){let ft=Ft.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,ft.__webglTexture,H)}else if(mt){let ft=P;for(let Mt=0;Mt<M.textures.length;Mt++){let Ct=Ft.get(M.textures[Mt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Mt,Ct.__webglTexture,H,ft)}}else if(M!==null&&H!==0){let ft=Ft.get(M.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ft.__webglTexture,H)}W=-1};function lh(M){let P=Ft.get(M);return(P.__readFormat!==M.format||P.__readType!==M.type)&&(P.__readFormat=M.format,P.__readType=M.type,P.__formatReadable=fe.textureFormatReadable(M.format),P.__typeReadable=fe.textureTypeReadable(M.type)),P}this.readRenderTargetPixels=function(M,P,H,O,z,mt,Tt,ft=0){if(!(M&&M.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Mt=Mt[Tt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt){dt.bindFramebuffer(D.FRAMEBUFFER,Mt);try{let Ct=M.textures[ft],Xt=Ct.format,ne=Ct.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ft);let At=lh(Ct);if(At.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(At.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=M.width-O&&H>=0&&H<=M.height-z&&D.readPixels(P,H,O,z,rt.convert(Xt),rt.convert(ne),mt)}finally{let Ct=et!==null?Ft.get(et).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(M,P,H,O,z,mt,Tt,ft=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Ft.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&Tt!==void 0&&(Mt=Mt[Tt],Array.isArray(Mt)&&(Mt=Mt[0])),Mt)if(P>=0&&P<=M.width-O&&H>=0&&H<=M.height-z){dt.bindFramebuffer(D.FRAMEBUFFER,Mt);let Ct=M.textures[ft],Xt=Ct.format,ne=Ct.type;M.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+ft);let At=lh(Ct);if(At.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(At.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let ie=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,ie),D.bufferData(D.PIXEL_PACK_BUFFER,mt.byteLength,D.STREAM_READ),D.readPixels(P,H,O,z,rt.convert(Xt),rt.convert(ne),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Ee=et!==null?Ft.get(et).__webglFramebuffer:null;dt.bindFramebuffer(D.FRAMEBUFFER,Ee);let me=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await Ru(D,me,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,ie),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,mt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(ie),D.deleteSync(me),mt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,P=null,H=0){let O=Math.pow(2,-H),z=Math.floor(M.image.width*O),mt=Math.floor(M.image.height*O),Tt=P!==null?P.x:0,ft=P!==null?P.y:0;Ht.setTexture2D(M,0),D.copyTexSubImage2D(D.TEXTURE_2D,H,0,0,Tt,ft,z,mt),dt.unbindTexture()},this.copyTextureToTexture=function(M,P,H=null,O=null,z=0,mt=0){let Tt,ft,Mt,Ct,Xt,ne,At,ie,Ee,me=M.isCompressedTexture?M.mipmaps[mt]:M.image;if(H!==null)Tt=H.max.x-H.min.x,ft=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,Ct=H.min.x,Xt=H.min.y,ne=H.isBox3?H.min.z:0;else{let re=Math.pow(2,-z);Tt=Math.floor(me.width*re),ft=Math.floor(me.height*re),M.isDataArrayTexture?Mt=me.depth:M.isData3DTexture?Mt=Math.floor(me.depth*re):Mt=1,Ct=0,Xt=0,ne=0}O!==null?(At=O.x,ie=O.y,Ee=O.z):(At=0,ie=0,Ee=0);let de=rt.convert(P.format),Ge=rt.convert(P.type),Rt;P.isData3DTexture?(Ht.setTexture3D(P,0),Rt=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ht.setTexture2DArray(P,0),Rt=D.TEXTURE_2D_ARRAY):(Ht.setTexture2D(P,0),Rt=D.TEXTURE_2D),dt.activeTexture(D.TEXTURE0),dt.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),dt.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),dt.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let Ye=dt.getParameter(D.UNPACK_ROW_LENGTH),le=dt.getParameter(D.UNPACK_IMAGE_HEIGHT),Mi=dt.getParameter(D.UNPACK_SKIP_PIXELS),He=dt.getParameter(D.UNPACK_SKIP_ROWS),Xr=dt.getParameter(D.UNPACK_SKIP_IMAGES);dt.pixelStorei(D.UNPACK_ROW_LENGTH,me.width),dt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,me.height),dt.pixelStorei(D.UNPACK_SKIP_PIXELS,Ct),dt.pixelStorei(D.UNPACK_SKIP_ROWS,Xt),dt.pixelStorei(D.UNPACK_SKIP_IMAGES,ne);let Kn=M.isDataArrayTexture||M.isData3DTexture,Si=P.isDataArrayTexture||P.isData3DTexture;if(M.isDepthTexture){let re=Ft.get(M),Fe=Ft.get(P),gn=Ft.get(re.__renderTarget),ye=Ft.get(Fe.__renderTarget);dt.bindFramebuffer(D.READ_FRAMEBUFFER,gn.__webglFramebuffer),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Le=0;Le<Mt;Le++)Kn&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.get(M).__webglTexture,z,ne+Le),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ft.get(P).__webglTexture,mt,Ee+Le)),D.blitFramebuffer(Ct,Xt,Ct+Tt,Xt+ft,At,ie,At+Tt,ie+ft,D.DEPTH_BUFFER_BIT,D.NEAREST);dt.bindFramebuffer(D.READ_FRAMEBUFFER,null),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(z!==0||M.isRenderTargetTexture||Ft.has(M)){let re=Ft.get(M),Fe=Ft.get(P);dt.bindFramebuffer(D.READ_FRAMEBUFFER,I),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,k);for(let gn=0;gn<Mt;gn++)Kn?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,re.__webglTexture,z,ne+gn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,re.__webglTexture,z),Si?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Fe.__webglTexture,mt,Ee+gn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Fe.__webglTexture,mt),z!==0?D.blitFramebuffer(Ct,Xt,Ct+Tt,Xt+ft,At,ie,At+Tt,ie+ft,D.COLOR_BUFFER_BIT,D.NEAREST):Si?D.copyTexSubImage3D(Rt,mt,At,ie,Ee+gn,Ct,Xt,Tt,ft):D.copyTexSubImage2D(Rt,mt,At,ie,Ct,Xt,Tt,ft);dt.bindFramebuffer(D.READ_FRAMEBUFFER,null),dt.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Si?M.isDataTexture||M.isData3DTexture?D.texSubImage3D(Rt,mt,At,ie,Ee,Tt,ft,Mt,de,Ge,me.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(Rt,mt,At,ie,Ee,Tt,ft,Mt,de,me.data):D.texSubImage3D(Rt,mt,At,ie,Ee,Tt,ft,Mt,de,Ge,me):M.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,mt,At,ie,Tt,ft,de,Ge,me.data):M.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,mt,At,ie,me.width,me.height,de,me.data):D.texSubImage2D(D.TEXTURE_2D,mt,At,ie,Tt,ft,de,Ge,me);dt.pixelStorei(D.UNPACK_ROW_LENGTH,Ye),dt.pixelStorei(D.UNPACK_IMAGE_HEIGHT,le),dt.pixelStorei(D.UNPACK_SKIP_PIXELS,Mi),dt.pixelStorei(D.UNPACK_SKIP_ROWS,He),dt.pixelStorei(D.UNPACK_SKIP_IMAGES,Xr),mt===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&D.generateMipmap(Rt),dt.unbindTexture()},this.initRenderTarget=function(M){Ft.get(M).__webglFramebuffer===void 0&&Ht.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?Ht.setTextureCube(M,0):M.isData3DTexture?Ht.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?Ht.setTexture2DArray(M,0):Ht.setTexture2D(M,0),dt.unbindTexture()},this.resetState=function(){X=0,G=0,et=null,dt.reset(),lt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return cn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=se._getDrawingBufferColorSpace(t),e.unpackColorSpace=se._getUnpackColorSpace()}};var Qo=class extends ii{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new je;t.deleteAttribute("uv");let e=new tn({side:Be}),n=new tn,s=new ui(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new ce(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new or(t,n,6),o=new Te;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new ce(t,Ds(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new ce(t,Ds(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new ce(t,Ds(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new ce(t,Ds(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new ce(t,Ds(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new ce(t,Ds(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function Ds(i){return new Di({color:0,emissive:16777215,emissiveIntensity:i})}var zr=new L;function pn(i,t,e,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;zr.copy(t),zr[n]=0,zr.normalize();let c=.5*a/(a+o),h=1-zr.angleTo(i)/l;return Math.sign(zr[e])===1?h*c:o/(a+o)+c+c*(1-h)}var jo=class i extends je{constructor(t=1,e=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(t/2,e/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new L,c=new L,h=new L(t,e,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,p=d.length/6,x=new L,g=.5/a;for(let m=0,v=0;m<d.length;m+=3,v+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/p)){case 0:x.set(1,0,0),f[v+0]=pn(x,c,"z","y",r,n),f[v+1]=1-pn(x,c,"y","z",r,e);break;case 1:x.set(-1,0,0),f[v+0]=1-pn(x,c,"z","y",r,n),f[v+1]=1-pn(x,c,"y","z",r,e);break;case 2:x.set(0,1,0),f[v+0]=1-pn(x,c,"x","z",r,t),f[v+1]=pn(x,c,"z","x",r,n);break;case 3:x.set(0,-1,0),f[v+0]=1-pn(x,c,"x","z",r,t),f[v+1]=1-pn(x,c,"z","x",r,n);break;case 4:x.set(0,0,1),f[v+0]=1-pn(x,c,"x","y",r,t),f[v+1]=1-pn(x,c,"y","x",r,e);break;case 5:x.set(0,0,-1),f[v+0]=pn(x,c,"x","y",r,t),f[v+1]=1-pn(x,c,"y","x",r,e);break}}static fromJSON(t){return new i(t.width,t.height,t.depth,t.segments,t.radius)}};function bf(i,t=!1){let e=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},a={},o=i[0].morphTargetsRelative,l=new Ae;l.morphTargetsRelative=o;let c=0;for(let h=0;h<i.length;++h){let d=i[h],u=0,f=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let p in d.attributes){if(!n.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;r[p]===void 0&&(r[p]=[]),r[p].push(d.attributes[p]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let p in d.morphAttributes){if(!s.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(d.morphAttributes[p].length!==i[0].morphAttributes[p].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+p+'" morph attribute.'),null;a[p]===void 0&&(a[p]=[]),a[p].push(d.morphAttributes[p]),f++}if(f!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(t){let p;if(e)p=d.index.count;else if(d.attributes.position!==void 0)p=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,h),c+=p}}if(e){let h=0,d=[];for(let u=0;u<i.length;++u){let f=i[u].index;for(let p=0;p<f.count;++p)d.push(f.getX(p)+h);h+=i[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=Sf(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][u]);let p=Sf(f);if(!p)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(p)}}}return l}function Sf(i){let t,e,n,s=-1,r=0;for(let c=0;c<i.length;++c){let h=i[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new Se(a,e,n),l=0;for(let c=0;c<i.length;++c){let h=i[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let p=0;p<e;p++){let x=h.getComponent(u,p);o.setComponent(u+d,p,x)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var N_=(i,t)=>new it(i,t),Ef=["#ff6b81","#ffa94d","#ffe066","#69db7c","#4dabf7","#b197fc"],kc=class{constructor(){this.t={koerper:[],klein:[],gold:[]}}teil(t,e,n,s,r,a){let o=e.index?e.toNonIndexed():e.clone();for(let f of Object.keys(o.attributes))f!=="position"&&f!=="normal"&&f!=="uv"&&o.deleteAttribute(f);let l=a==null?[1,1,1]:typeof a=="number"?[a,a,a]:a,c=new un(r?r[0]:0,r?r[1]:0,r?r[2]:0,"YXZ");o.applyMatrix4(new ae().compose(new L(s?s[0]:0,s?s[1]:0,s?s[2]:0),new hn().setFromEuler(c),new L(l[0],l[1],l[2])));let h=new Gt(n),d=o.attributes.position.count,u=new Float32Array(d*3);for(let f=0;f<d;f++)u[f*3]=h.r,u[f*3+1]=h.g,u[f*3+2]=h.b;return o.setAttribute("color",new Se(u,3)),this.t[t].push(o),this}fertig(){let t={};for(let e of Object.keys(this.t))this.t[e].length&&(t[e]=bf(this.t[e],!1),this.t[e].forEach(n=>n.dispose()));return t}},Ie={},Wt=()=>Ie.kugel||(Ie.kugel=new oi(1,28,20)),ze=()=>Ie.kugelG||(Ie.kugelG=new oi(1,14,10)),wn=()=>Ie.kegel||(Ie.kegel=new xs(1,1,16)),Gi=()=>Ie.kegelG||(Ie.kegelG=new xs(1,1,8)),mn=()=>Ie.walze||(Ie.walze=new ai(1,1,1,28)),_i=()=>Ie.kasten||(Ie.kasten=new je(1,1,1)),ki=()=>Ie.ring||(Ie.ring=new vr(1,.2,10,28));function Qe(i,t,e,n){let s=i.map(r=>N_(r[0],r[1]));return t!==!1&&(s=new Ii(s).getPoints(i.length*7)),s.forEach(r=>{r.x<5e-4&&(r.x=5e-4)}),n?new Ss(s,28,e,n):new Ss(s,40)}function U_(){if(Ie.herz)return Ie.herz;let i=new vs;return i.moveTo(0,-.5),i.bezierCurveTo(-.9,.1,-.5,.75,0,.3),i.bezierCurveTo(.5,.75,.9,.1,0,-.5),Ie.herz=new yr(i,{depth:.25,bevelEnabled:!0,bevelSize:.08,bevelThickness:.08,bevelSegments:3,curveSegments:10}),Ie.herz.translate(0,0,-.12),Ie.herz}function Ns(i,t,e){i.teil("klein",Qe([[0,0],[e*.93,0],[e,.02],[e,.075],[e*.93,.1],[e*.8,.108],[0,.108]],!1),t.base),i.teil("klein",Qe([[e*.99,.03],[e*1.035,.045],[e*.99,.06]],!1),t.base2)}function tl(i,t,e,n,s,r){let a=r??.5;i.teil("koerper",Qe([[e*.8,.1],[e*.82,.125],[e*.66,.16],[e*.52,.2],[e*(.36+a*.1),.2+(s-.2)*.35],[n*1.08,.2+(s-.2)*.75],[n,s]]),t.body)}function el(i,t,e,n,s){i.teil("koerper",Qe([[e*.55,n-.035],[e,n-.012],[e*1.02,n+.008],[e*.6,n+.04]]),s||t.body)}function Ue(i,t,e,n,s){let r=Array.isArray(t)?t[0]:t,a=Array.isArray(t)?t[1]:t,o=Array.isArray(t)?t[2]:t,l=s??1;return[i[0]+Math.sin(e)*Math.cos(n)*r*l,i[1]+Math.sin(n)*a*l,i[2]+Math.cos(e)*Math.cos(n)*o*l]}function kr(i,t,e,n,s,r){r=r||{};let a=r.a||.42,o=r.e==null?.1:r.e,l=s*.2;for(let c of[-1,1])i.teil("klein",Wt(),"#1d1330",Ue(e,n,c*a,o,.97),[-o,c*a,0],[l,l*1.18,l*.6]),i.teil("klein",ze(),"#ffffff",Ue(e,n,c*a-.07,o+.1,1.045),null,l*.34),i.teil("klein",ze(),"#ffffff",Ue(e,n,c*a+.06,o-.07,1.05),null,l*.16),i.teil("klein",Wt(),t.cheek,Ue(e,n,c*(a+.36),o-.3,.97),[.3-o,c*(a+.36),0],[s*.19,s*.13,s*.05]);if(!r.ohneSchnauze){let c=Ue(e,n,0,o-.42,.93);i.teil("klein",Wt(),t.belly,c,[.35,0,0],[s*.33,s*.24,s*.22]);for(let h of[-1,1])i.teil("klein",ze(),"#c9648f",[c[0]+h*s*.11,c[1]+s*.03,c[2]+s*.19],null,[s*.035,s*.05,s*.03])}}function nl(i,t,e,n,s,r){r=r||{};let a=r.a||.62,o=r.e||.95;for(let l of[-1,1]){let c=Ue(e,n,l*a,o,1);i.teil("koerper",wn(),t.body,[c[0],c[1]+s*.12,c[2]-s*.02],[-.1,0,-l*.35],[s*.13,s*.42,s*.1]),i.teil("klein",wn(),t.cheek,[c[0],c[1]+s*.1,c[2]+s*.035],[-.1,0,-l*.35],[s*.075,s*.3,s*.05])}}function Gr(i,t,e,n,s,r){let a=r??.3;i.teil("gold",wn(),t.horn,[e[0],e[1]+Math.cos(a)*n/2,e[2]+Math.sin(a)*n/2],[a,0,0],[s,n,s]);for(let o=0;o<4;o++){let l=.08+o*.2;i.teil("gold",ki(),t.horn,[e[0],e[1]+Math.cos(a)*n*l,e[2]+Math.sin(a)*n*l],[a+Math.PI/2,0,.5],[s*(1-l)*.95,s*(1-l)*.95,s*.9])}}function Hr(i,t,e,n,s,r){r=r||{};let a=r.a||.44,o=r.e==null?.16:r.e,l=s*.21;for(let c of[-1,1])i.teil("klein",Wt(),"#ffffff",Ue(e,n,c*a,o,.96),[-o,c*a,0],[l,l*1.05,l*.62]),i.teil("klein",Wt(),"#1d1330",Ue(e,n,c*a*.93,o-.02,1.06),[-o,c*a,0],[l*.56,l*.62,l*.3]),i.teil("klein",ze(),"#ffffff",Ue(e,n,c*a*.93-.06,o+.06,1.12),null,l*.2),i.teil("klein",Wt(),t.a2,Ue(e,n,c*a,o+.3,1.02),[-o-.2,c*a,c*(r.lieb?.12:-.42)],[l*1.25,l*.3,l*.5]),i.teil("klein",Wt(),t.cheek,Ue(e,n,c*(a+.4),o-.36,.97),[.3-o,c*(a+.4),0],[s*.17,s*.11,s*.05]);if(!r.ohneSchnauze){let c=Ue(e,n,0,o-.5,.9);i.teil("koerper",Wt(),t.belly,c,[.3,0,0],[s*.42,s*.25,s*.3]);for(let h of[-1,1])i.teil("klein",ze(),t.a2,[c[0]+h*s*.13,c[1]+s*.12,c[2]+s*.24],null,[s*.035,s*.045,s*.03]);for(let h=-1;h<=1;h++)i.teil("klein",Gi(),"#ffffff",[c[0]+h*s*.17,c[1]-s*.16,c[2]+s*(.22-Math.abs(h)*.05)],[Math.PI,0,0],[s*.065,s*.15,s*.055])}}function il(i,t,e,n,s,r,a){for(let o=0;o<e;o++){let l=e===1?0:o/(e-1),c=n+(s-n)*l,h=r(l),d=a*(1-.35*Math.abs(l-.35));i.teil("klein",Gi(),t.a1,[0,c,h-d*.5],[-Math.PI/2+.5,0,0],[d*.42,d*1.15,d*.42])}}function Us(i,t,e){i.teil("koerper",wn(),t.body,[0,.19,-e*.78],[-1.15,0,0],[.085,.36,.075]),i.teil("klein",Gi(),t.a1,[0,.31,-e*1.2],[-.5,0,0],[.035,.09,.035])}function F_(i,t,e){Ns(i,t,.3),tl(i,t,.3,.105,.36,.2),el(i,t,.17,.385,e?t.belly:t.a1);let s=[0,.57,0],r=.185;return i.teil("koerper",Wt(),t.body,s,null,[r,r*.97,r]),e===0?(kr(i,t,s,r,.26,{a:.4,e:.05}),nl(i,t,s,r,.26,{a:.6,e:.9}),Gr(i,t,Ue(s,r,0,.95,.9),.13,.03,.22),Ef.slice(0,3).forEach((a,o)=>i.teil("klein",ze(),[t.a1,t.a2,t.a3][o],Ue(s,r,Math.PI+(o-1)*.4,.55-Math.abs(o-1)*.1,1),null,.055))):(Hr(i,t,s,r,.26,{a:.42,e:.12,lieb:!0}),il(i,t,3,.77,.56,a=>-.04-a*.14,.085),Us(i,t,.3)),.78}function O_(i,t,e){let s=t.wall;Ns(i,t,.33),i.teil("koerper",Qe([[.33*.8,.1],[.33*.82,.125],[.33*.7,.16],[.215,.2],[.2,.42],[.195,.6],[.22,.66],[.27,.7],[.275,.76],[.25,.78],[0,.78]]),s);for(let o=0;o<6;o++){let l=o/6*Math.PI*2+Math.PI/6;i.teil("koerper",_i(),s,[Math.sin(l)*.215,.835,Math.cos(l)*.215],[0,l,0],[.135,.13,.085]),e&&i.teil("klein",Gi(),t.a1,[Math.sin(l)*.215,.935,Math.cos(l)*.215],null,[.035,.075,.035])}i.teil("klein",mn(),e?t.a2:t.a1,[0,.785,0],null,[.2,.02,.2]),i.teil("klein",Qe([[.196,.615],[.228,.628],[.228,.648],[.21,.66]],!1),e?t.a2:t.a1),i.teil("klein",Qe([[.212,.2],[.232,.212],[.232,.236],[.21,.25]],!1),e?t.a2:t.a1);let r=[0,.47,0],a=[.2,.2,.2];if(e===0)kr(i,t,r,a,.24,{a:.42,e:.12,ohneSchnauze:!0}),i.teil("klein",U_(),t.a1,[0,.335,.208],[.03,0,0],[.075,.075,.05]),i.teil("gold",mn(),t.horn,[0,.95,0],null,[.012,.34,.012]),Ef.slice(0,3).forEach((o,l)=>i.teil("klein",_i(),[t.a1,t.a2,t.a3][l],[.07,1.085-l*.03,0],null,[.13-l*.02,.03,.012]));else{Hr(i,t,r,a,.24,{a:.42,e:.12,ohneSchnauze:!0});for(let o=-1;o<=1;o++)i.teil("klein",Gi(),"#ffffff",[o*.06,.345,.2],[Math.PI,0,0],[.026,.06,.022]);i.teil("klein",Wt(),t.a2,[0,.375,.195],null,[.12,.016,.03]),Us(i,t,.33)}return e?.97:1.1}function B_(i,t,e){Ns(i,t,.32),tl(i,t,.32,.085,.6,.35),el(i,t,.175,.63,e?t.belly:t.a1),i.teil("koerper",Qe([[.09,.66],[.155,.72],[.185,.82],[.17,.93],[.115,1.04],[.05,1.13],[0,1.16]]),t.body),i.teil("klein",_i(),e?t.a2:t.a1,[.062,1,.07],[0,0,-.72],[.3,.03,.3]),i.teil("gold",Wt(),t.horn,[0,1.185,0],null,.05);let s=[0,.83,0],r=[.185,.2,.185];return e===0?(kr(i,t,s,r,.25,{a:.42,e:-.02}),nl(i,t,[0,.8,0],[.2,.17,.16],.24,{a:1.25,e:.55}),Gr(i,t,[0,.97,.125],.13,.028,.5)):(Hr(i,t,s,r,.25,{a:.44,e:0}),il(i,t,5,1.08,.5,a=>-.1-Math.sin(a*Math.PI)*.09+a*.03,.085),Us(i,t,.32)),1.24}function z_(i,t,e){Ns(i,t,.35),tl(i,t,.35,.095,.8,.6),el(i,t,.2,.835,e?t.belly:t.a1),i.teil("koerper",Qe([[.1,.86],[.13,.9],[.1,.94]]),t.body);let s=[0,1.06,0],r=.185;i.teil("koerper",Wt(),t.body,s,null,r),i.teil("gold",Qe([[.1,1.2],[.125,1.205],[.175,1.3],[.16,1.31],[.115,1.235],[0,1.23]],!1),"#ffd24d");for(let a=0;a<8;a++){let o=a/8*Math.PI*2;i.teil("gold",wn(),"#ffd24d",[Math.sin(o)*.158,1.325,Math.cos(o)*.158],[.25,o,0],[.03,.09,.03]),i.teil("klein",ze(),a%2?t.a1:"#ffffff",[Math.sin(o)*.17,1.385,Math.cos(o)*.17],null,.03)}if(i.teil("klein",Wt(),t.a1,[0,1.27,0],null,[.1,.07,.1]),i.teil("gold",Wt(),"#ffd24d",[0,1.36,0],null,.045),e===0){kr(i,t,s,r,.27,{a:.42,e:0}),nl(i,t,s,r,.25,{a:1.2,e:.5}),Gr(i,t,Ue(s,r,0,.62,.92),.15,.03,.75);let a=[t.a1,t.a2,t.a3,t.a1,t.a2];for(let o=0;o<5;o++)for(let l=0;l<6;l++){let c=Math.PI+(o-2)*.36,h=l/5;i.teil("klein",ze(),a[o],[Math.sin(c)*(.17+h*.03),1.13-h*.5-Math.abs(o-2)*.03,Math.cos(c)*(.17+h*.03)-h*.02],null,[.058,.07,.058])}for(let o of[-1,1])i.teil("klein",_i(),"#1d1330",Ue(s,r,o*.62,.17,1),[0,o*.62,o*-.5],[.05,.012,.012])}else{Hr(i,t,s,r,.27,{a:.44,e:.06,lieb:!0}),i.teil("koerper",Wt(),t.a2,[0,1.1,-.1],[-.35,0,0],[.29,.27,.05]);for(let a=0;a<7;a++){let o=(a-3)*.42;i.teil("klein",Gi(),t.a1,[Math.sin(o)*.28,1.12+Math.cos(o)*.25,-.17-Math.cos(o)*.08],[-.35,0,-o],[.035,.1,.03])}for(let a of[-1,1])i.teil("klein",_i(),"#1d1330",Ue(s,r,a*.66,.24,1),[0,a*.66,a*-.5],[.05,.012,.012]);Us(i,t,.35)}return 1.42}function k_(i,t,e){Ns(i,t,.37),tl(i,t,.37,.105,.86,.7),el(i,t,.215,.9,"#ffffff"),i.teil("klein",Qe([[.1,.9],[.19,.86],[.25,.7],[.29,.5],[.31,.36],[.285,.35],[.26,.5],[.22,.69],[.16,.84],[.09,.88]],!0,Math.PI-1.75,3.5),"#e23c56"),i.teil("klein",Qe([[.275,.33],[.325,.345],[.325,.385],[.28,.4]],!0,Math.PI-1.78,3.56),"#ffffff"),i.teil("koerper",Qe([[.11,.93],[.14,.97],[.11,1.01]]),t.body);let s=[0,1.14,0],r=.2;i.teil("koerper",Wt(),t.body,s,null,r),i.teil("gold",Qe([[.11,1.285],[.15,1.29],[.165,1.33],[.19,1.43],[.17,1.44],[.14,1.36],[0,1.36]],!1),"#ffd24d");for(let a=0;a<5;a++){let o=a/5*Math.PI*2;i.teil("gold",wn(),"#ffd24d",[Math.sin(o)*.178,1.47,Math.cos(o)*.178],[.2,o,0],[.04,.12,.04]),i.teil("klein",ze(),a%2?"#58c9f5":"#ff5fa2",[Math.sin(o)*.168,1.345,Math.cos(o)*.168],null,.026)}return i.teil("klein",Wt(),"#e23c56",[0,1.4,0],null,[.13,.1,.13]),i.teil("gold",_i(),"#ffd24d",[0,1.6,0],null,[.045,.2,.045]),i.teil("gold",_i(),"#ffd24d",[0,1.62,0],null,[.14,.045,.045]),i.teil("gold",Wt(),"#ffd24d",[0,1.5,0],null,.04),e===0?(kr(i,t,s,r,.29,{a:.42,e:0}),nl(i,t,s,r,.27,{a:1.2,e:.52}),Gr(i,t,Ue(s,r,0,.6,.92),.16,.032,.8)):(Hr(i,t,s,r,.29,{a:.44,e:.08}),il(i,t,3,1.2,.98,a=>-.17-a*.02,.09),Us(i,t,.37)),1.72}function G_(i,t,e){if(Ns(i,t,.33),i.teil("koerper",Qe([[.33*.8,.1],[.33*.82,.125],[.33*.66,.16],[.2,.2],[.17,.3],[0,.34]]),t.body),e===0){i.teil("koerper",mn(),t.body,[0,.52,-.01],[.2,0,0],[.14,.5,.15]),i.teil("koerper",Wt(),t.body,[0,.3,-.03],null,[.17,.12,.17]);let r=[0,.87,.07];i.teil("koerper",Wt(),t.body,r,[.3,0,0],[.165,.175,.2]),i.teil("koerper",Wt(),t.body,[0,.78,.23],[.5,0,0],[.125,.115,.17]),i.teil("klein",Wt(),t.belly,[0,.745,.3],[.5,0,0],[.11,.095,.1]);for(let o of[-1,1])i.teil("klein",ze(),"#c9648f",[o*.045,.765,.385],null,[.012,.02,.012]),i.teil("klein",Wt(),"#1d1330",[o*.148,.9,.14],[0,o*1.05,0],[.05,.06,.03]),i.teil("klein",ze(),"#ffffff",[o*.162,.925,.16],null,.017),i.teil("klein",Wt(),t.cheek,[o*.135,.8,.2],[0,o*1,0],[.045,.03,.014]),i.teil("koerper",wn(),t.body,[o*.09,1.07,0],[-.15,0,-o*.3],[.04,.13,.03]),i.teil("klein",wn(),t.cheek,[o*.09,1.065,.012],[-.15,0,-o*.3],[.022,.09,.016]);Gr(i,t,[0,1,.13],.26,.036,.42);let a=[t.a1,t.a2,t.a3,"#69db7c","#ffa94d",t.a1];for(let o=0;o<7;o++){let l=o/6;i.teil("klein",ze(),a[o%a.length],[0,1.05-l*.66,-.08-Math.sin(l*Math.PI)*.1-l*.03],null,[.075,.08,.085])}return 1.28}i.teil("koerper",mn(),t.body,[0,.52,-.02],[.16,0,0],[.16,.5,.17]),i.teil("koerper",Wt(),t.body,[0,.3,-.03],null,[.19,.13,.19]),i.teil("koerper",Wt(),t.belly,[0,.5,.075],[.16,0,0],[.11,.24,.1]);let s=[0,.88,.04];i.teil("koerper",Wt(),t.body,s,[.15,0,0],[.18,.17,.2]),i.teil("koerper",Wt(),t.body,[0,.85,.24],[.12,0,0],[.15,.1,.2]),i.teil("koerper",Wt(),t.belly,[0,.745,.2],[.42,0,0],[.125,.055,.175]),i.teil("klein",Wt(),"#c9415a",[0,.775,.22],[.3,0,0],[.1,.03,.15]);for(let r=0;r<7;r++){let a=(r-3)*.42;i.teil("klein",Gi(),"#ffffff",[Math.sin(a)*.13,.79,.24+Math.cos(a)*.17],[Math.PI,0,0],[.024,.062,.022])}for(let r of[-1,1])i.teil("klein",ze(),t.a2,[r*.05,.905,.425],null,[.016,.02,.014]),i.teil("klein",Wt(),"#ffffff",[r*.155,.95,.1],[0,r*1,0],[.055,.058,.03]),i.teil("klein",Wt(),"#1d1330",[r*.175,.948,.115],[0,r*1,0],[.03,.034,.016]),i.teil("klein",ze(),"#ffffff",[r*.188,.962,.128],null,.011),i.teil("klein",Wt(),t.a2,[r*.155,1.015,.11],[0,r*1,r*-.4],[.07,.02,.035]);return il(i,t,6,1.07,.42,r=>-.1-Math.sin(r*Math.PI)*.1-r*.04,.1),Us(i,t,.33),1.14}var H_=[null,F_,G_,B_,O_,z_,k_],Gc=[[0,.78,1.28,1.24,1.1,1.42,1.72],[0,.78,1.14,1.24,.97,1.42,1.72]],V_=[[null,[.74,0,.95],[1.02,.03,.8],[1.17,0,.62],[.92,0,1.12],[1.38,0,.85],[1.7,0,.6]],[null,[.75,0,.95],[1.04,.03,.9],[1.17,0,.62],[.96,0,1.12],[1.38,0,.85],[1.7,0,.6]]];function W_(i,t,e){let n=e[0],s=e[1],r=e[2]*.26,a=(o,l,c,h,d)=>i.teil("klein",o,l,[c[0]*r,n+c[1]*r,s+c[2]*r],h,typeof d=="number"?d*r:[d[0]*r,d[1]*r,d[2]*r]);if(t==="party"){a(wn(),"#ff5fa2",[0,.55,0],[0,0,.12],[.5,1.1,.5]);for(let o=0;o<3;o++)a(ki(),o%2?"#ffd24d":"#58c9f5",[-.02-o*.03,.2+o*.3,0],[Math.PI/2,0,.12],[.42-o*.12,.42-o*.12,.25]);a(Wt(),"#ffd24d",[-.14,1.12,0],null,.14)}else if(t==="zauber"){a(mn(),"#5b3fc4",[0,.04,0],null,[.85,.07,.85]),a(wn(),"#6a48c9",[.02,.72,0],[0,0,-.1],[.52,1.35,.52]),a(ki(),"#ffd24d",[0,.14,0],[Math.PI/2,0,0],[.5,.5,.3]);for(let o=0;o<3;o++)a(ze(),"#ffe066",[Math.sin(o*2.1)*.3*(1-o*.2),.42+o*.3,Math.cos(o*2.1)*.3*(1-o*.2)],null,.07)}else if(t==="pirat")a(Wt(),"#2a2338",[0,.25,0],null,[.62,.42,.5]),a(Wt(),"#2a2338",[0,.18,.1],[.5,0,0],[.95,.5,.12]),a(Wt(),"#ffffff",[0,.3,.2],null,[.13,.13,.05]),a(ki(),"#ffd24d",[0,.06,0],[Math.PI/2,0,0],[.58,.48,.2]);else if(t==="cowboy"){a(mn(),"#a8703a",[0,.05,0],[0,0,0],[1.05,.06,.8]),a(mn(),"#b97d44",[0,.36,0],null,[.48,.56,.42]),a(Wt(),"#b97d44",[0,.64,0],null,[.5,.14,.44]),a(ki(),"#6b3f1b",[0,.14,0],[Math.PI/2,0,0],[.5,.44,.22]);for(let o of[-1,1])a(Wt(),"#a8703a",[o*.92,.14,0],[0,0,o*.7],[.22,.07,.6])}else if(t==="zylinder")a(mn(),"#2a2338",[0,.04,0],null,[.8,.06,.8]),a(mn(),"#352c47",[0,.52,0],null,[.5,.9,.5]),a(mn(),"#e23c56",[0,.18,0],null,[.52,.16,.52]);else if(t==="blumen"){a(ki(),"#4fae6a",[0,.06,0],[Math.PI/2,0,0],[.56,.56,.5]);let o=["#ff6fae","#ffd24d","#58c9f5","#ffffff","#ff8a3d","#b78cff"];for(let l=0;l<6;l++){let c=l/6*Math.PI*2;a(ze(),o[l],[Math.sin(c)*.56,.1,Math.cos(c)*.56],null,.2),a(ze(),"#ffe066",[Math.sin(c)*.62,.16,Math.cos(c)*.62],null,.08)}}else if(t==="propeller")a(Wt(),"#58c9f5",[0,.1,0],null,[.6,.42,.6]),a(Wt(),"#ff5fa2",[0,.12,0],null,[.2,.43,.61]),a(Wt(),"#ffd24d",[0,.08,.38],[.2,0,0],[.5,.06,.4]),a(mn(),"#2a2338",[0,.6,0],null,[.04,.22,.04]),a(_i(),"#ffd24d",[0,.72,0],[0,.5,.08],[1.1,.04,.16]),a(Wt(),"#e23c56",[0,.74,0],null,.09);else if(t==="nikolaus")a(ki(),"#ffffff",[0,.1,0],[Math.PI/2,0,0],[.56,.56,.9]),a(wn(),"#e23c56",[.08,.6,0],[0,0,-.35],[.54,1.1,.54]),a(Wt(),"#ffffff",[.3,1.1,0],null,.17);else if(t==="koch"){a(mn(),"#ffffff",[0,.3,0],null,[.46,.6,.46]);for(let o=0;o<5;o++){let l=o/5*Math.PI*2;a(Wt(),"#ffffff",[Math.sin(l)*.3,.72,Math.cos(l)*.3],null,.32)}a(Wt(),"#ffffff",[0,.82,0],null,.34)}}function Hc(i){let t=new Li({vertexColors:!0,roughness:i?.42:.3,metalness:0,clearcoat:i?.55:.9,clearcoatRoughness:i?.3:.16,envMapIntensity:1});i||(t.iridescence=.5,t.iridescenceIOR=1.35);let e=new tn({vertexColors:!0,roughness:.28,metalness:.02,envMapIntensity:.9}),n=new tn({vertexColors:!0,roughness:.22,metalness:1,envMapIntensity:1.25});return{koerper:t,klein:e,gold:n}}function wf(i,t,e,n){let s=new kc;return H_[t](s,e,i),n&&W_(s,n,V_[i][t]),s.fertig()}var ke=typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches,Tn=typeof window<"u"&&window.DREI_TEST||null,xi=1.04,X_={p:1,n:.97,b:.96,r:1,q:.92,k:.88},Wc={p:1,n:2,b:3,r:4,q:5,k:6},yi=()=>performance.now(),Vr=(i,t,e)=>Math.max(t,Math.min(e,i)),Xc=i=>i<.5?2*i*i:1-2*(1-i)*(1-i),Jc=i=>1-Math.pow(1-i,3),Rf=i=>Math.floor(Math.random()*i),$c=i=>i[Rf(i.length)],q_=["#ff5d73","#ffa44d","#ffe14d","#6fdd7a","#58c9f5","#b78cff","#ffffff"],Y_=["#ffb347","#ffe14d","#ff7a3d","#ffffff"],Z_={u:["ZISCH!","ZACK!","HUI!","FUNKEL!","PLING!"],d:["HAPS!","RUMMS!","GRRR!","KRACH!","SCHNAPP!"]},qc=(i,t)=>{let e=document.createElement(i);return t&&(e.className=t),e},It={r:null,env:null,mats:null,geist:null,netze:{},owner:null,laeuft:!1,ok:!(Tn&&Tn.aus),dpr:1,test:!!Tn};function J_(i,t){let e=Data.SKINS[i?"d":"u"];return(e.find(n=>n.id===t)||e[0]).c}function Tf(i){let t=new Ps(i);It.env=t.fromScene(new Qo,.04).texture,t.dispose()}function Kc(){if(It.r)return It.r;let i=new Jo({antialias:!0,alpha:!0,powerPreference:"high-performance"}),t=!!(Tn&&Tn.leicht);return It.dpr=t?1:Math.min(window.devicePixelRatio||1,2),i.setPixelRatio(It.dpr),i.toneMapping=Tr,i.toneMappingExposure=1,i.shadowMap.enabled=!t,i.shadowMap.type=Ni,i.setClearColor(0,0),i.domElement.className="leinwand",t||Tf(i),i.domElement.addEventListener("webglcontextrestored",()=>{try{Tf(i),It.owner&&(It.owner.scene.environment=It.env)}catch{}}),It.mats=t?[0,1].map(()=>{let e=new Di({vertexColors:!0});return{koerper:e,klein:e,gold:e}}):[Hc(0),Hc(1)],It.geist=It.mats.map(e=>{let n={};for(let s in e)n[s]=e[s].clone(),n[s].transparent=!0,n[s].opacity=.3,n[s].depthWrite=!1;return n}),It.r=i,i}function Cf(i,t,e,n){let s=i+":"+t+":"+(e||"")+":"+(n||"");return It.netze[s]||(It.netze[s]=wf(i,t,J_(i,e),n||""))}function If(i){window.requestAnimationFrame(If);let t=It.owner;if(t&&t.stage.clientWidth>0&&!document.hidden)try{t.tick(i)}catch(e){It.fehler||(It.fehler=e,console.error(e))}}var Vc={},sl=null;function $_(i,t,e,n,s){let r=i==="d"?1:0,a=Wc[t]||1,o=s||288,l=r+t+(e||"")+(n||"")+o;if(Vc[l])return Vc[l];if(!It.ok||Tn&&Tn.bilder===!1)return null;try{let c=Kc();if(!sl){let v=new ii;v.environment=It.env,v.environmentIntensity=.5,v.add(new Es("#ffe9f6","#5a48a8",.6));let E=new fi("#fff3e0",3.4);E.position.set(-3,6,5),v.add(E);let S=new fi("#9fb6ff",1.4);S.position.set(4,3,-5),v.add(S),sl={s:v,cam:new Oe(22,1,.1,50),halter:new Xe},v.add(sl.halter)}let h=sl,d=Cf(r,a,e,n),u=Gc[r][a]+(n?.22:.04);h.halter.clear();for(let v of["koerper","klein","gold"])d[v]&&h.halter.add(new ce(d[v],It.mats[r][v]));h.halter.rotation.y=r?-.42:.42;let f=Math.max(u,.92)*2.72+.35;h.cam.position.set(0,u*.5+f*.26,f),h.cam.lookAt(0,u*.485,0);let p=new it;c.getSize(p);let x=c.getPixelRatio();c.setPixelRatio(1),c.setSize(o,o,!1);let g=c.shadowMap.enabled;c.shadowMap.enabled=!1,c.render(h.s,h.cam);let m=c.domElement.toDataURL("image/png");return c.shadowMap.enabled=g,c.setPixelRatio(x),c.setSize(p.x||300,p.y||150,!1),It.owner&&It.owner.stage.clientWidth>0&&(It.owner.fit(),Tn&&Tn.still||c.render(It.owner.scene,It.owner.cam)),Vc[l]=m}catch{return It.ok=!1,null}}function al(i){let t=document.createElement("canvas");return t.width=t.height=i,t}function ol(i){let t=new cr(i);return t.colorSpace=Je,t.anisotropy=4,t}function Yc(i,t,e){let n=parseInt(i.slice(1),16),s=parseInt(t.slice(1),16),r=a=>Math.round((n>>a&255)+((s>>a&255)-(n>>a&255))*e);return"#"+(1<<24|r(16)<<16|r(8)<<8|r(0)).toString(16).slice(1)}function Fs(i){let t=al(128);return i(t.getContext("2d")),ol(t)}var rl=null;function Qc(){return rl||(rl={mv:((t,e,n)=>Fs(s=>{let r=s.createRadialGradient(64,64,8,64,64,62);r.addColorStop(0,n),r.addColorStop(.45,n.replace(/[\d.]+\)$/,"0.55)")),r.addColorStop(1,n.replace(/[\d.]+\)$/,"0)")),s.fillStyle=r,s.fillRect(0,0,128,128),s.beginPath(),s.arc(64,64,30,0,7),r=s.createRadialGradient(54,52,3,64,64,32),r.addColorStop(0,t),r.addColorStop(1,e),s.fillStyle=r,s.fill(),s.lineWidth=7,s.strokeStyle="#2c1b47",s.stroke()}))("#e6fff0","#2fd47a","rgba(70,224,138,0.95)"),dmv:Fs(t=>{let e=t.createRadialGradient(64,64,8,64,64,62);e.addColorStop(0,"rgba(255,90,77,0.9)"),e.addColorStop(1,"rgba(255,90,77,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),t.beginPath();let n=30,s=34,r=34,a=60;t.moveTo(s+n*.5,r),t.arcTo(s+a,r,s+a,r+a,16),t.arcTo(s+a,r+a,s,r+a,16),t.arcTo(s,r+a,s,r,16),t.arcTo(s,r,s+a,r,16),t.closePath(),t.fillStyle="#ff5a4d",t.fill(),t.lineWidth=7,t.strokeStyle="#2c1b47",t.stroke(),t.fillStyle="#fff",t.font="900 46px system-ui, sans-serif",t.textAlign="center",t.textBaseline="middle",t.fillText("!",64,66)}),foe:Fs(t=>{t.beginPath(),t.arc(64,64,28,0,7),t.fillStyle="rgba(255,255,255,0.92)",t.fill(),t.setLineDash([12,9]),t.lineWidth=7,t.strokeStyle="#2c1b47",t.stroke()}),cap:Fs(t=>{t.beginPath(),t.arc(64,64,50,0,7),t.lineWidth=17,t.strokeStyle="#2c1b47",t.stroke(),t.lineWidth=10,t.strokeStyle="#46e08a",t.stroke()}),dcap:Fs(t=>{t.beginPath(),t.arc(64,64,50,0,7),t.lineWidth=17,t.strokeStyle="#2c1b47",t.stroke(),t.setLineDash([22,14]),t.lineWidth=10,t.strokeStyle="#ff5a4d",t.stroke()}),schein:Fs(t=>{let e=t.createRadialGradient(64,64,2,64,64,62);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.3,"rgba(255,255,255,0.5)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128)})},rl)}function Zc(i,t){this.stage=i,this.o=t||{},this.flip=!1,this.locked=!1,this.flat=!1,this.turned=!1,this.cur=36,this.pcs={},this.groups={},this.arrowGroups={},this.pv=null,this.pills=[],this.tws=[],this.frei=[],this.hats={u:"",d:""},this.rainbow=null,this.thema=null,this.skin={u:"",d:""},this.sq=46,this.W=400,this.H=400,this.L=400,this.c={az:0,el:57,dist:16,tx:0,ty:.25,tz:0,zoom:1},this.z={az:0,el:57,tx:0,tz:0,zoom:1},this.fest={dist:16,tz:0},i.classList.add("stage","drei"),this.elGlow=qc("div","unterlicht"),this.hud=qc("div","hud"),i.appendChild(this.elGlow),i.appendChild(this.hud),this.baue(),this.bind();let e=()=>this.fit();this._fit=e,window.ResizeObserver&&(this.ro=new ResizeObserver(e),this.ro.observe(i)),window.addEventListener("resize",e),document.fonts&&document.fonts.ready&&document.fonts.ready.then(()=>{this.scene&&this.maleBrett()}),this.fit(),It.laeuft||(It.laeuft=!0,window.requestAnimationFrame(If))}var St=Zc.prototype;St.baue=function(){Kc();let i=this.scene=new ii;i.environment=It.env,i.environmentIntensity=.4,this.cam=new Oe(30,1,.5,80),i.add(new Es("#ffe9f6","#40308a",.26));let t=this.key=new fi("#fff3e0",3.9);t.castShadow=!0,t.shadow.mapSize.set(2048,2048);let e=t.shadow.camera;e.left=-6.4,e.right=6.4,e.top=6.4,e.bottom=-6.4,e.near=2,e.far=30,t.shadow.radius=3,t.shadow.bias=-4e-4,t.shadow.normalBias=.02,i.add(t),i.add(t.target),this.rim=new fi("#a9bcff",1.9),i.add(this.rim),this.lSel=new ui("#ffe9a0",0,3.2,1.6),i.add(this.lSel),this.lRot=new ui("#ff3b3b",0,3.4,1.5),i.add(this.lRot),this.cBrett=al(1024),this.tBrett=ol(this.cBrett),this.mRahmen=new tn({color:"#6a48c9",roughness:.22,metalness:.05,envMapIntensity:1});let n=new ce(new jo(8.9,.5,8.9,5,.16),this.mRahmen);n.position.y=-.252,n.receiveShadow=!0,i.add(n),this.mFeld=new tn({map:this.tBrett,roughness:.3,metalness:0,envMapIntensity:.7});let s=new ce(new qn(8,8),this.mFeld);s.rotation.x=-Math.PI/2,s.position.y=.002,s.receiveShadow=!0,i.add(s);let r=new tn({color:"#ffd24d",metalness:1,roughness:.25,envMapIntensity:1.2});for(let l=0;l<4;l++){let c=new ce(new je(8.2,.035,.09),r);c.position.set(l<2?0:l===2?-4.05:4.05,.012,l<2?l?4.05:-4.05:0),l>=2&&(c.rotation.y=Math.PI/2),i.add(c)}this.steine=[];for(let l=0;l<4;l++){let c=new Li({color:l%2?"#58c9f5":"#ff6fae",roughness:.1,clearcoat:1,emissive:l%2?"#1f6f9a":"#a12a68",emissiveIntensity:.6}),h=new ce(new oi(.13,16,12),c);h.position.set(l%2?4.22:-4.22,.02,l<2?4.22:-4.22),h.scale.y=.6,i.add(h),this.steine.push(h)}let a=l=>{let c=al(1024),h=ol(c),d=new ce(new qn(8,8),new si({map:h,transparent:!0,depthWrite:!1,toneMapped:!1}));return d.rotation.x=-Math.PI/2,d.position.y=l,d.renderOrder=1,i.add(d),{c,g:c.getContext("2d"),t:h,m:d}};this.ovA=a(.006),this.ovB=a(.009);let o=Qc();if(this.schein=new ce(new qn(15,15),new si({map:o.schein,transparent:!0,depthWrite:!1,blending:pi,color:"#8a6cf0",opacity:.55,toneMapped:!1})),this.schein.rotation.x=-Math.PI/2,this.schein.position.y=-.9,i.add(this.schein),!ke){let c=new Float32Array(210),h=new Float32Array(210),d=new Gt;this.staubV=[];for(let f=0;f<70;f++){let p=Math.random()*6.28,x=4.9+Math.random()*2.6;c[f*3]=Math.cos(p)*x,c[f*3+1]=-1+Math.random()*5,c[f*3+2]=Math.sin(p)*x,this.staubV.push(.12+Math.random()*.3),d.set($c(["#ffffff","#fff3a8","#ffd0ea","#bfeaff"])),h[f*3]=d.r,h[f*3+1]=d.g,h[f*3+2]=d.b}let u=new Ae;u.setAttribute("position",new Se(c,3)),u.setAttribute("color",new Se(h,3)),this.staub=new _s(u,new Ci({size:.16,map:o.schein,vertexColors:!0,transparent:!0,opacity:.8,depthWrite:!1,blending:pi,toneMapped:!1})),i.add(this.staub)}this.gFig=new Xe,i.add(this.gFig),this.gPkt=new Xe,i.add(this.gPkt),this.gSaeule=new Xe,i.add(this.gSaeule),this.gFunken=new Xe,i.add(this.gFunken),this.setzeThema(Data.BOARDS[0])};St.setzeThema=function(i){this.thema=i,this.mRahmen.color.set(i.rim),this.schein.material.color.set(Yc(i.d,"#ffffff",.15)),this.maleBrett()};St.maleBrett=function(){let i=this.thema,t=this.cBrett.getContext("2d"),e=128;for(let n=0;n<8;n++)for(let s=0;s<8;s++){let r=s,a=7-n,o=(r+a)%2===0,l=o?Yc(i.d,"#2c1b6e",.2):Yc(i.l,i.d,.2);o&&this.rainbow&&(l=this.rainbow[(r+a)/2%this.rainbow.length]),t.fillStyle=l,t.fillRect(s*e,n*e,e,e);let c=t.createLinearGradient(s*e,n*e,s*e+e,n*e+e);c.addColorStop(0,"rgba(255,255,255,0.26)"),c.addColorStop(.5,"rgba(255,255,255,0)"),c.addColorStop(1,"rgba(30,12,70,0.16)"),t.fillStyle=c,t.fillRect(s*e,n*e,e,e),t.strokeStyle="rgba(255,255,255,0.22)",t.lineWidth=3,t.strokeRect(s*e+2.5,n*e+2.5,e-5,e-5)}for(let n=0;n<4;n++){let s=n<2?t.createLinearGradient(0,n?1024:0,0,n?978:46):t.createLinearGradient(n===2?0:1024,0,n===2?46:978,0);s.addColorStop(0,"rgba(30,12,70,0.34)"),s.addColorStop(1,"rgba(30,12,70,0)"),t.fillStyle=s,t.fillRect(0,0,1024,1024)}t.fillStyle="rgba(44,27,71,0.55)",t.font="700 24px DynaPuff, system-ui, sans-serif",t.textBaseline="middle",t.textAlign="center";for(let n=0;n<8;n++)t.fillText("abcdefgh"[n],n*e+e-16,8*e-15),t.fillText(String(8-n),14,n*e+18),t.save(),t.translate(n*e+16,15),t.rotate(Math.PI),t.fillText("abcdefgh"[n],0,0),t.restore(),t.save(),t.translate(8*e-14,n*e+e-18),t.rotate(Math.PI),t.fillText(String(8-n),0,0),t.restore();this.tBrett.needsUpdate=!0};St.fit=function(){let i=this.stage.clientWidth,t=this.stage.clientHeight;if(!i||!t)return;let e=Kc();(It.owner!==this||e.domElement.parentNode!==this.stage)&&(It.owner=this,this.stage.insertBefore(e.domElement,this.hud)),this.W=i,this.H=t,this.L=Math.min(i,t),e.setPixelRatio(It.dpr),e.setSize(i,t,!1),this.cam.aspect=i/t,this.cam.fov=i/t<.8?34:30,this.cam.updateProjectionMatrix(),this.z.el=i/t<.8?60:57,this.fahrt||(this.c.el=this.z.el);let n=[];for(let p of[-4.5,4.5])n.push([p,0,4.5],[p,-.5,4.5],[p,0,-4.5],[p*.82,1.62,-3.5],[p,.3,0]);let s=Object.assign({},this.c),r=0,a=16;for(let p=0;p<4;p++){let x=6,g=60;for(let E=0;E<22;E++){a=(x+g)/2,this.stelle(0,this.z.el,a,0,r);let S=!0;for(let A of n){let w=new L(A[0],A[1],A[2]).project(this.cam);if(Math.abs(w.x)>.975||Math.abs(w.y)>.965){S=!1;break}}S?g=a:x=a}a=g,this.stelle(0,this.z.el,a,0,r);let m=9,v=-9;for(let E of n){let S=new L(E[0],E[1],E[2]).project(this.cam);m=Math.min(m,S.y),v=Math.max(v,S.y)}r-=(m+v)/2*a*Math.tan(this.cam.fov*Math.PI/360)/Math.sin(this.z.el*Math.PI/180)*.9}this.fest.dist=a,this.fest.tz=r,Object.assign(this.c,s),this.c.dist=a,this.richte();let o=this.stage.style,l=this.proj(4,4),c=this.proj(5,4);this.sq=Math.abs(c.x-l.x)||40,o.setProperty("--sq",this.sq.toFixed(2)+"px"),o.setProperty("--L",(this.sq*8.4).toFixed(1)+"px");let h=this.elGlow.style,d=this.proj(0,0),u=this.proj(8,8),f=this.proj(0,8);h.left=(f.x-this.sq*1.6).toFixed(0)+"px",h.width=(u.x-f.x+this.sq*3.2).toFixed(0)+"px",h.top=(d.y-this.sq*.4).toFixed(0)+"px",h.height=(u.y-d.y+this.sq*1.8).toFixed(0)+"px"};St.stelle=function(i,t,e,n,s){let r=Vr(t,5,89.2)*Math.PI/180,a=Math.sin(i),o=Math.cos(i),l=n*o+s*a,c=-n*a+s*o;this.cam.position.set(l+a*Math.cos(r)*e,this.c.ty+Math.sin(r)*e,c+o*Math.cos(r)*e),this.cam.up.set(0,1,0),this.cam.lookAt(l,this.c.ty,c),this.cam.updateMatrixWorld(!0)};St.richte=function(){let i=this.c;this.stelle(i.az,i.el,this.fest.dist/i.zoom,i.tx,this.fest.tz*(i.zoom>1?1/i.zoom:1)+i.tz),this.cur=90-i.el;let t=Math.sin(i.az),e=Math.cos(i.az);this.key.position.set(-4.5*e+5*t,10,4.5*t+5*e),this.rim.position.set(5*e-7*t,4,-5*t-7*e)};St.setFlat=function(){};St.look=function(){};St.welt=function(i,t,e){let n=new L(i,t,e).project(this.cam);return{x:(n.x+1)/2*this.W,y:(1-n.y)/2*this.H}};St.proj=function(i,t){let e=this.welt(i-4,0,t-4),n=this.welt(i-3.5,0,t-4),s=this.welt(i-4.5,0,t-4);return{x:e.x,y:e.y,s:Math.abs(n.x-s.x)/(this.sq||1)||1}};St.xy=function(i){return{x:i&7,y:7-(i>>4)}};St.sqPt=function(i){let t=this.xy(i);return this.proj(t.x+.5,t.y+.5)};St.headOf=function(i){let t=i._bx-3.5,e=i._by-3.5,n=this.welt(t,i.hh*.72+i.lift,e),s=this.welt(t-.5,0,e),r=this.welt(t+.5,0,e);return{x:n.x,y:n.y,s:Math.abs(r.x-s.x)/(this.sq||1)||1}};St.headPt=function(i){let t=this.pcs[i];return t?this.headOf(t):this.sqPt(i)};St.setFlip=function(i){i=!!i,i!==this.flip&&(this.flip=i,this.z.az=i?Math.PI:0,this.c.az=this.z.az,this.richte())};St.swing=function(i){return new Promise(t=>{if(ke){i(),t();return}let e=this.z.el;this.fahrt=!0,this.tw(330,n=>{this.c.el=e+(89-e)*n*n},()=>{i(),this.tw(330,n=>{let s=1-n;this.c.el=e+(89-e)*s*s},()=>{this.c.el=e,this.fahrt=!1,t()})})})};St.flyIn=function(i){if(ke)return;let t=this.z.el,e=this.z.az;this.fahrt=!0,this.tw(i,n=>{let s=Jc(n);this.c.el=24+(t-24)*s,this.c.az=e+.75*(1-s),this.c.zoom=.72+.28*s},()=>{this.c.el=t,this.c.az=e,this.c.zoom=1,this.fahrt=!1})};St.setRainbow=function(i){this.rainbow=i||null,this.maleBrett()};St.setLook=function(i){let t=Sys.S,e=Data.BOARDS.find(a=>a.id===t.equip.board)||Data.BOARDS[0],n={u:i.u||"",d:i.d||""},s={u:t.equip.u,d:t.equip.d},r=n.u!==this.hats.u||n.d!==this.hats.d||s.u!==this.skin.u||s.d!==this.skin.d;if(this.hats=n,this.skin=s,e!==this.thema&&this.setzeThema(e),r)for(let a in this.pcs)this.kleide(this.pcs[a])};St.tw=function(i,t,e){let n={t0:yi(),ms:Math.max(1,i),fn:t,done:e,stop:!1};return this.tws.push(n),n};St.kleide=function(i){let t=i._team==="d"?1:0,e=Cf(t,Wc[i._kind],this.skin[i._team],this.hats[i._team]);i.body.clear(),i.meshes=[];for(let n of["koerper","klein","gold"])if(e[n]){let s=new ce(e[n],It.mats[t][n]);s.castShadow=!0,s.userData.k=n,i.body.add(s),i.meshes.push(s)}i.h=Gc[t][Wc[i._kind]],i.gr=X_[i._kind]||1,i.hh=i.h*i.gr*xi,i.geist=null};St.setArt=function(i,t,e){i._team=t,i._kind=e,this.kleide(i)};St.setPos=function(i,t,e){i._bx=t,i._by=e,i.root.position.x=t-3.5,i.root.position.z=e-3.5};St.place=function(i,t){let e=this.xy(t);i._tw&&(i._tw.stop=!0),this.setPos(i,e.x,e.y)};St.glide=function(i,t,e,n){let s=this.xy(t),r=i._bx,a=i._by;if(i._tw&&(i._tw.stop=!0),!e||r===s.x&&a===s.y){this.setPos(i,s.x,s.y),n&&n();return}i._tw=this.tw(e,o=>{let l=Xc(o);this.setPos(i,r+(s.x-r)*l,a+(s.y-a)*l)},()=>{i._tw=null,n&&n()})};St.add=function(i,t,e){let n=new Xe,s=new Xe;n.add(s),s.scale.setScalar(xi);let r={_team:t,_kind:e,_sq:i,_bx:0,_by:0,root:n,body:s,meshes:[],h:1,f:{},lift:0,liftZ:0,yaw:this.c.az,yawZ:null,ph:Math.random()*6.28,a:{y:0,rx:0,ry:0,rz:0,sx:1,sy:1,dx:0,dz:0},ko:0,op:1};return n.userData.el=r,this.kleide(r),this.gFig.add(n),this.place(r,i),this.pcs[i]=r,n.rotation.y=r.yaw,r};St.drop=function(i){i._tw&&(i._tw.stop=!0),i.weg=!0,this.gFig.remove(i.root);let t=this.frei.indexOf(i);t>=0&&this.frei.splice(t,1)};St.sync=function(i){for(let t in this.pcs)this.drop(this.pcs[t]);this.pcs={},this.pv=null,i.forEach(t=>this.add(t.sq,t.team,t.kind)),this.topDots()};St.mark=function(i,t,e){i.f[t]=e!==!1,t==="ko"&&e===!1&&(i.ko=0)};St.select=function(i){for(let t in this.pcs)this.pcs[t].f.sel=!1;i!=null&&i>=0&&this.pcs[i]&&(this.pcs[i].f.sel=!0),this.selSq=i!=null&&i>=0&&this.pcs[i]?i:-1,this.selSq>=0&&this.schauHin(this.selSq,1500),this.topDots()};St.schauHin=function(i,t){if(ke)return;let e=this.xy(i);this.blick={x:e.x-3.5,z:e.y-3.5,bis:yi()+t}};St.flag=function(i,t,e){let n=this.pcs[i];n&&this.mark(n,t,e)};St.unflag=function(i){for(let t in this.pcs)this.mark(this.pcs[t],i,!1)};St.preview=function(i,t,e){this.unpreview();let n=this.pcs[i];if(!n)return;let s=this.pcs[t],r=e?this.pcs[e[0]]:null;this.pv={el:n,from:i,victim:s,el2:r,from2:e?e[0]:-1},n.f.sel=!1,this.glide(n,t,e?520:220),e&&this.huepf(n,"k",2,520),r&&(this.glide(r,e[1],640),this.huepf(r,"x",2,640)),s&&(s.f.ghost=!0)};St.unpreview=function(){let i=this.pv;i&&(this.pv=null,this.glide(i.el,i.from,220),i.el2&&this.glide(i.el2,i.from2,220),i.victim&&(i.victim.f.ghost=!1))};var K_={"m-mv":"mv","m-dmv":"dmv","m-foe":"foe","m-cap":"cap","m-dcap":"dcap"};St.setMarks=function(i,t){!t||!t.length?delete this.groups[i]:this.groups[i]=t,this.maleMarken(),this.topDots()};St.setArrows=function(i,t){!t||!t.length?delete this.arrowGroups[i]:this.arrowGroups[i]=t,this.maleMarken()};St.maleMarken=function(){let i=this.ovA.g,t=this.ovB.g,e=128;i.clearRect(0,0,1024,1024),t.clearRect(0,0,1024,1024);let n=!1,s=(o,l,c,h)=>{let d=o.createRadialGradient(l,c,0,l,c,e*.7);return h.forEach(u=>d.addColorStop(u[0],u[1])),d},r=(o,l,c,h,d,u,f)=>{o.beginPath(),o.arc(l,c,h,0,7),o.setLineDash(f||[]),o.lineWidth=u+8,o.strokeStyle="rgba(44,27,71,0.9)",o.stroke(),o.lineWidth=u,o.strokeStyle=d,o.stroke(),o.setLineDash([])};for(let o in this.groups)this.groups[o].forEach(l=>{let c=this.xy(l[0]),h=c.x*e,d=c.y*e,u=h+e/2,f=d+e/2;switch(l[1]){case"m-last":i.fillStyle="rgba(255,240,107,0.6)",i.fillRect(h,d,e,e);break;case"m-sel":i.fillStyle=s(i,u,f,[[0,"rgba(255,251,208,0.98)"],[.6,"rgba(255,225,77,0.95)"],[1,"rgba(255,208,0,0.9)"]]),i.fillRect(h,d,e,e);break;case"m-check":t.fillStyle=s(t,u,f,[[0,"rgba(255,42,42,1)"],[.55,"rgba(255,42,42,0.9)"],[1,"rgba(255,42,42,0)"]]),t.fillRect(h-e*.2,d-e*.2,e*1.4,e*1.4),n=!0;break;case"m-hint":t.fillStyle=s(t,u,f,[[0,"rgba(255,251,194,1)"],[.6,"rgba(255,212,0,0.95)"],[1,"rgba(255,212,0,0)"]]),t.fillRect(h-e*.2,d-e*.2,e*1.4,e*1.4),n=!0;break;case"m-help":r(t,u,f,e*.39,"#46e08a",15),n=!0;break;case"m-threat":r(t,u,f,e*.39,"#ff8c28",15),n=!0;break;case"m-star":{t.fillStyle=s(t,u,f,[[0,"rgba(255,225,77,0.9)"],[1,"rgba(255,225,77,0)"]]),t.fillRect(h,d,e,e),t.beginPath();for(let p=0;p<10;p++){let x=-Math.PI/2+p*Math.PI/5,g=p%2?e*.17:e*.38;t.lineTo(u+Math.cos(x)*g,f+Math.sin(x)*g)}t.closePath(),t.fillStyle="#ffd24d",t.fill(),t.lineWidth=8,t.lineJoin="round",t.strokeStyle="#2c1b47",t.stroke(),n=!0;break}}});let a={red:"#ff4d3d",green:"#46e08a"};for(let o in this.arrowGroups)this.arrowGroups[o].forEach(l=>{let c=this.xy(l.from),h=this.xy(l.to),d=c.x+.5,u=c.y+.5,f=h.x+.5,p=h.y+.5,x=f-d,g=p-u,m=Math.sqrt(x*x+g*g)||1,v=x/m,E=g/m;d+=v*.34,u+=E*.34;let S=f-v*.2,A=p-E*.2,w=S-v*.42,_=A-E*.42,b=.12,U=.3,C=[[d-E*b,u+v*b],[w-E*b,_+v*b],[w-E*U,_+v*U],[S,A],[w+E*U,_-v*U],[w+E*b,_-v*b],[d+E*b,u-v*b]];i.beginPath(),C.forEach((N,F)=>F?i.lineTo(N[0]*e,N[1]*e):i.moveTo(N[0]*e,N[1]*e)),i.closePath(),i.lineJoin="round",i.lineWidth=12,i.strokeStyle="#2c1b47",i.stroke(),i.fillStyle=a[l.cls]||"#ffd400",i.fill()});this.ovA.t.needsUpdate=!0,this.ovB.t.needsUpdate=!0,this.ovB.m.visible=n,this.puls=n};St.topDots=function(){let i=Qc(),t=this.gPkt,e=[];for(let n in this.groups)this.groups[n].forEach(s=>{let r=K_[s[1]];r&&e.push([s[0],r])});for(;t.children.length>e.length;)t.remove(t.children[t.children.length-1]);e.forEach((n,s)=>{let r=t.children[s];r||(r=new rr(new ps({map:i.mv,depthTest:!1,depthWrite:!1,transparent:!0,toneMapped:!1})),r.renderOrder=5,t.add(r)),r.material.map!==i[n[1]]&&(r.material.map=i[n[1]],r.material.needsUpdate=!0);let a=this.xy(n[0]),o=this.pcs[n[0]],l=n[1]==="cap"||n[1]==="dcap";r.position.set(a.x-3.5,l&&o?o.hh*.5:.2,a.y-3.5),r.userData.art=n[1],r.userData.neu=r.userData.sq!==n[0]?yi():r.userData.neu,r.userData.sq=n[0]}),this.pktListe=e,this.durchblick()};St.durchblick=function(){let t=(this.pktListe||[]).map((e,n)=>{let s=this.gPkt.children[n].position;return{s:this.welt(s.x,s.y,s.z),v:s.distanceTo(this.cam.position),sq:e[0]}});for(let e in this.pcs){let n=this.pcs[e],s=!1;if(t.length&&!n.f.sel&&!n.f.drag){let r=this.kapsel(n),a=n.root.position.distanceTo(this.cam.position);for(let o of t)if(o.sq!==n._sq&&a<o.v&&ll(o.s.x,o.s.y,r)<r.r*.92){s=!0;break}}n.f.durch=s}};St.kapsel=function(i){let t=i._bx-3.5,e=i._by-3.5,n=this.welt(t,.04,e),s=this.welt(t,i.hh*.92+i.lift,e),r=this.welt(t-.3*xi,.3,e),a=this.welt(t+.3*xi,.3,e);return{ax:n.x,ay:n.y,bx:s.x,by:s.y,r:Math.max(8,Math.hypot(a.x-r.x,a.y-r.y)/2)}};function ll(i,t,e){let n=e.bx-e.ax,s=e.by-e.ay,r=n*n+s*s||1,a=Vr(((i-e.ax)*n+(t-e.ay)*s)/r,0,1);return Math.hypot(i-(e.ax+n*a),t-(e.ay+s*a))}St.pillar=function(i,t,e){if(!this.gSaeuleGeo){this.gSaeuleGeo=new ai(.4,.46,3.2,28,1,!0);let r=al(64),a=r.getContext("2d"),o=a.createLinearGradient(0,0,0,64);o.addColorStop(0,"rgba(255,255,255,0)"),o.addColorStop(.55,"rgba(255,255,255,0.35)"),o.addColorStop(1,"rgba(255,255,255,0.95)"),a.fillStyle=o,a.fillRect(0,0,64,64),this.tSaeule=ol(r)}let n=this.xy(i),s=new ce(this.gSaeuleGeo,new si({map:this.tSaeule,color:t||"#ffe14d",transparent:!0,depthWrite:!1,blending:pi,side:fn,toneMapped:!1}));return s.position.set(n.x-3.5,1.6,n.y-3.5),s.renderOrder=4,s.userData.t0=yi(),this.gSaeule.add(s),e&&setTimeout(()=>this.gSaeule.remove(s),e),{remove:()=>this.gSaeule.remove(s)}};St.setPillars=function(i,t){(this.pills||[]).forEach(e=>e.remove()),this.pills=ke?[]:(i||[]).map(e=>this.pillar(e,t))};St.tag=function(i,t){if(this.elTag&&(this.elTag.remove(),this.elTag=null),i==null||i<0||!t||!this.pcs[i])return;let e=this.pcs[i],n=e._bx-3.5,s=e._by-3.5,r=this.welt(n,e.hh+.42,s),a=qc("div","schild");a.textContent=t,a.style.left=Vr(r.x,50,this.W-50).toFixed(0)+"px",a.style.top=Math.max(18,r.y).toFixed(0)+"px",this.hud.appendChild(a),this.elTag=a};St.clearAll=function(){this.groups={},this.arrowGroups={},this.maleMarken(),this.select(-1),["fear","joy","ko","ghost"].forEach(i=>this.unflag(i)),this.hud.textContent="",this.elTag=null,this.setPillars(null),this.zoom(0,!1)};St.zoom=function(i,t){if(!t||ke){this.z.zoom=1,this.z.tx=0,this.z.tz=0;return}let e=this.xy(i),n=Math.sin(this.c.az),s=Math.cos(this.c.az),r=e.x-3.5,a=e.y-3.5;this.z.zoom=1.75,this.z.tx=(r*s-a*n)*.8,this.z.tz=(r*n+a*s)*.8};St.huepf=function(i,t,e,n){if(ke)return;let s=i.a,r=e>1.5?2:1;i._hw&&(i._hw.stop=!0),i._hw=this.tw(n,a=>{let o=Math.sin(Math.PI*a);if(s.rx=s.ry=s.rz=0,s.sx=s.sy=1,t==="n")s.y=o*1.25,s.rx=Xc(a)*Math.PI*2,s.sy=1+o*.06;else if(t==="x")s.y=o*1.1,s.rz=Math.sin(Math.PI*2*a)*.25;else if(t==="r")s.y=Math.abs(Math.sin(a*Math.PI*7))*.035,s.rx=-.12*o;else if(t==="q")s.y=o*.34,s.ry=Xc(a)*Math.PI*4;else if(t==="b")s.y=o*.42,s.rx=o*.34;else if(t==="k")s.y=Math.abs(Math.sin(a*Math.PI*3))*.1,s.rz=Math.sin(a*Math.PI*6)*.17;else{let l=Math.abs(Math.sin(Math.PI*a*r));s.y=l*.42,s.sy=.9+l*.18,s.sx=1.06-l*.1}},()=>{s.y=s.rx=s.ry=s.rz=0,i._hw=this.tw(170,a=>{let o=Math.sin(Math.PI*a);s.sy=1-o*.16,s.sx=1+o*.12},()=>{s.sy=s.sx=1,i._hw=null})})};St.vanish=function(i,t,e){let n=i.a,s=ke?3:Rf(3),r=i.root.position.x,a=i.root.position.z;i.f={},i.fort=!0,this.frei.push(i);let o=640;s===0?this.tw(o,l=>{i.root.position.x=r+t*3.2*l,i.root.position.z=a+e*3.2*l,n.y=Math.sin(Math.PI*Math.min(1,l*1.15))*2.6+l*1.2,n.rz=l*11,n.rx=l*7,n.sx=n.sy=1-l*.85},()=>this.drop(i)):s===1?this.tw(o,l=>{let c=Math.min(1,l*4);if(n.sy=1-c*.93,n.sx=1+c*.55,l>.7){let h=(l-.7)/.3;n.sx=1.55*(1-h)}},()=>this.drop(i)):s===2?this.tw(o,l=>{n.ry=l*16,n.y=l*1.3,n.sx=n.sy=1-l},()=>this.drop(i)):(o=200,this.tw(o,l=>{n.sx=n.sy=1-l},()=>this.drop(i)))};St.remove=function(i,t){let e=this.pcs[i];if(e){if(delete this.pcs[i],t){this.drop(e);return}this.sparks(i,8),this.vanish(e,.6,-.3)}};St.playMove=function(i){return new Promise(t=>{this.pv&&(this.pv.victim&&(this.pv.victim.f.ghost=!1),this.pv=null);let e=this.pcs[i.from];if(!e){t();return}let n=i.capSq!=null&&i.capSq>=0?this.pcs[i.capSq]:null,s=this.xy(i.from),r=this.xy(i.to),a=r.x-s.x,o=r.y-s.y,l=Math.max(Math.abs(a),Math.abs(o)),c=Math.hypot(a,o)||1,h=e._kind,d=e._team,u=d==="u"?q_:Y_;delete this.pcs[i.from],n&&delete this.pcs[i.capSq],this.pcs[i.to]=e,e._sq=i.to,e.f.sel=e.f.drag=e.f.fear=!1,this.tag(-1);let f=n&&!i.fast&&!ke?this.strike(e,n,d,h):0;this.schauHin(i.to,1900);let p=i.fast?140:ke?200:Math.round(Math.min(700,340+l*60)*(h==="n"||h==="q"?1.25:h==="k"?1.35:1));setTimeout(()=>{if(!i.fast&&!ke&&(e.yawZ=Math.atan2(a,o)),this.glide(e,i.to,p,()=>{e.yawZ=null}),i.fast||this.huepf(e,h,l,p),!i.fast&&!ke&&this.spur(e,p,u),i.rook){let x=this.pcs[i.rook[0]];x&&(delete this.pcs[i.rook[0]],this.pcs[i.rook[1]]=x,x._sq=i.rook[1],this.glide(x,i.rook[1],p+120),this.huepf(x,"x",2,p+120))}n&&setTimeout(()=>{this.vanish(n,a/c,o/c),this.sparks(i.capSq,12,u,1.1),this.funken(i.capSq,u,26),this.ring(i.capSq,d==="u"?"#ff9cc8":"#ffb347",!0),this.flash(d==="u"?"#ffd9ec":"#ffe2b8"),this.word(i.capSq,$c(Z_[d]),d==="u"?"#ff9cc8":"#ffb347"),this.shake(),this.blitzLicht()},i.fast?30:p*.72),setTimeout(()=>{if(i.fast||(h!=="q"&&h!=="b"&&this.dust(i.to),n||this.ring(i.to,d==="u"?"#ffffff":"#ffe2b8")),i.promo){this.setArt(e,d,i.promo),this.sparks(i.to,16,["#ffd24d","#fff27a","#ffffff"],1.4),this.funken(i.to,["#ffd24d","#fff27a","#ffffff"],40),this.pillar(i.to,"#ffe14d",1100),this.ring(i.to,"#ffe14d",!0);let x=e.a;this.tw(520,g=>{let m=Jc(g);x.sx=x.sy=.3+.7*m+Math.sin(Math.PI*g)*.25,x.ry=(1-m)*9},()=>{x.sx=x.sy=1,x.ry=0})}t()},p+40)},f)})};St.strike=function(i,t,e,n){let s=i.a;if(e==="u"&&n!=="p"&&n!=="k"){let r=this.headOf(i),a=this.headOf(t),o=a.x-r.x,l=a.y-r.y,c=this.fx("strahl",r.x,r.y,"",520);c.style.width=Math.sqrt(o*o+l*l).toFixed(0)+"px";let h="rotate("+Math.atan2(l,o).toFixed(3)+"rad) ";try{c.animate([{transform:h+"scaleX(0)",opacity:1},{transform:h+"scaleX(1)",opacity:1,offset:.45},{transform:h+"scaleX(1)",opacity:1,offset:.8},{transform:h+"scaleX(1)",opacity:0}],{duration:500,fill:"forwards"})}catch{}return this.tw(300,d=>{let u=Math.sin(Math.PI*d);s.sy=1-u*.1,s.sx=1+u*.1,s.rx=-u*.25},()=>{s.sx=s.sy=1,s.rx=0}),setTimeout(()=>{t.f.fear=!0,setTimeout(()=>{t.f.fear=!1},300)},180),Sys.play("zap"),380}return e==="d"&&n!=="p"?(setTimeout(()=>{let r=this.headOf(t);this.fx("gebiss",r.x,r.y+this.sq*.1,"<i></i><i></i>",460),t.f.fear=!0,setTimeout(()=>{t.f.fear=!1},260)},180),this.tw(240,r=>{let a=Math.sin(Math.PI*r);s.sy=1-a*.14,s.sx=1+a*.16,s.rx=a*.3},()=>{s.sx=s.sy=1,s.rx=0}),Sys.play("roar"),240):0};St.funkenNetz=function(i,t,e){let n=new Float32Array(i*3),s=new Float32Array(i*3),r=[],a=new Gt;for(let c=0;c<i;c++){let h=e(c);n[c*3]=h.p[0],n[c*3+1]=h.p[1],n[c*3+2]=h.p[2],r.push(h.v),a.set($c(t)),s[c*3]=a.r,s[c*3+1]=a.g,s[c*3+2]=a.b}let o=new Ae;o.setAttribute("position",new Se(n,3)),o.setAttribute("color",new Se(s,3));let l=new _s(o,new Ci({size:.2,map:Qc().schein,vertexColors:!0,transparent:!0,depthWrite:!1,blending:pi,toneMapped:!1}));return l.userData={v:r,t0:yi()},l.renderOrder=6,this.gFunken.add(l),l};St.funken=function(i,t,e){if(ke)return;let n=this.xy(i),s=n.x-3.5,r=n.y-3.5,a=this.funkenNetz(e||24,t,()=>{let o=Math.random()*6.28,l=1.2+Math.random()*2.6;return{p:[s,.5,r],v:[Math.cos(o)*l,2.2+Math.random()*3.2,Math.sin(o)*l]}});a.userData.dauer=900,a.userData.fall=9};St.spur=function(i,t,e){let n=this.funkenNetz(26,e,()=>({p:[i.root.position.x,-5,i.root.position.z],v:[0,0,0]}));n.userData.dauer=t+500,n.userData.fall=1.2,n.userData.spur={el:i,ms:t,n:0},n.material.size=.15};St.blitzLicht=function(){this.blitz=yi()};St.dropIn=function(){if(ke)return 0;let i=Object.keys(this.pcs).map(Number).sort((t,e)=>{let n=this.xy(t),s=this.xy(e);return s.y-n.y||n.x-s.x});return this.flyIn(1500),i.forEach((t,e)=>{let n=this.pcs[t],s=180+e*30+(this.xy(t).y<4?200:0),r=n.a;r.y=14,r.sx=.9,r.sy=1.15,setTimeout(()=>{n.weg||this.tw(430,a=>{r.y=14*(1-a*a)},()=>{r.y=0,e%4===0&&Sys.play("move"),this.tw(260,a=>{let o=Math.sin(Math.PI*a);r.sy=1-o*.3*(1-a),r.sx=1+o*.24*(1-a),r.y=a>.5?Math.sin((a-.5)*2*Math.PI)*.12:0},()=>{r.sx=r.sy=1,r.y=0})})},s)}),i.length*30+950};St.tick=function(i){let t=Math.min(.05,(i-(this.last||i))/1e3);this.last=i;let e=yi();for(let u=this.tws.length-1;u>=0;u--){let f=this.tws[u];if(f.stop){this.tws.splice(u,1);continue}let p=(e-f.t0)/f.ms;if(p>=1){this.tws.splice(u,1);try{f.fn(1),f.done&&f.done()}catch(x){console.error(x)}}else try{f.fn(p)}catch(x){console.error(x)}}let n=this.c,s=this.z,r=1-Math.exp(-t*5);if(!this.fahrt){let u=s.zoom<n.zoom?Math.min(1,r*1.8):r;n.zoom+=(s.zoom-n.zoom)*u,n.tx+=(s.tx-n.tx)*u,n.tz+=(s.tz-n.tz)*u,Math.abs(s.zoom-n.zoom)<.004&&(n.zoom=s.zoom)}let a=ke||this.fahrt?0:Math.sin(i/3100)*.022,o=n.az;n.az+=a,this.richte(),n.az=o;let l=null,c=null;for(let u in this.pcs)this.bewege(this.pcs[u],i,t);for(let u=this.frei.length-1;u>=0;u--)this.bewege(this.frei[u],i,t);for(let u in this.pcs){let f=this.pcs[u];(f.f.sel||f.f.drag)&&(l=f),f.f.fear&&(c=f)}this.lSel.intensity+=((l?5:0)-this.lSel.intensity)*r*1.5,l&&this.lSel.position.set(l.root.position.x,l.hh+.9,l.root.position.z+.2),this.lRot.intensity+=((c?5+Math.sin(i/70)*2:0)-this.lRot.intensity)*r*2,c&&this.lRot.position.set(c.root.position.x,c.hh+.7,c.root.position.z+.3);let h=.5+.5*Math.sin(i/180);for(let u of this.gPkt.children){let f=u.userData.art,p=Math.min(1,(e-(u.userData.neu||0))/170),x=(f==="mv"?.5+h*.07:f==="cap"||f==="dcap"?1.02+h*.06:.52)*(.3+.7*Jc(p));u.scale.set(x,x,1)}this.puls&&(this.ovB.m.material.opacity=.62+.38*h);for(let u of this.gSaeule.children)u.material.opacity=.5+.3*Math.sin(i/150+u.position.x),u.rotation.y=i/900;for(let u of this.steine)u.material.emissiveIntensity=.5+.4*Math.sin(i/600+u.position.x);if(this.schein.material.opacity=.45+.12*Math.sin(i/1400),this.staub){let u=this.staub.geometry.attributes.position;for(let f=0;f<u.count;f++){let p=u.getY(f)+this.staubV[f]*t;p>4.2&&(p=-1.2),u.setY(f,p)}u.needsUpdate=!0}for(let u=this.gFunken.children.length-1;u>=0;u--){let f=this.gFunken.children[u],p=f.userData,x=e-p.t0,g=f.geometry.attributes.position;if(x>p.dauer){this.gFunken.remove(f),f.geometry.dispose(),f.material.dispose();continue}if(p.spur&&x<p.spur.ms){let m=p.spur.el,v=Math.floor(x/p.spur.ms*g.count);for(;p.spur.n<v&&p.spur.n<g.count;){let E=p.spur.n++;g.setXYZ(E,m.root.position.x+(Math.random()-.5)*.3,.25+m.a.y*xi+Math.random()*.6,m.root.position.z+(Math.random()-.5)*.3),p.v[E]=[(Math.random()-.5)*.4,.3+Math.random()*.5,(Math.random()-.5)*.4]}}for(let m=0;m<g.count;m++){let v=p.v[m];!v||g.getY(m)<-4||(v[1]-=p.fall*t,g.setXYZ(m,g.getX(m)+v[0]*t,g.getY(m)+v[1]*t,g.getZ(m)+v[2]*t))}g.needsUpdate=!0,f.material.opacity=Vr(1.6*(1-x/p.dauer),0,1)}let d=this.blitz?Math.max(0,1-(e-this.blitz)/260):0;this.key.intensity=3.9+d*3.2,this.pktListe&&this.pktListe.length&&(this.fahrt||Math.abs(a)>0)&&((this.bildNr=((this.bildNr||0)+1)%20)||this.durchblick()),!(Tn&&Tn.still&&!It.einmal)&&(It.einmal=!1,It.r.render(this.scene,this.cam),this.messe(t))};St.bewege=function(i,t,e){let n=i.a,s=i.f,r=i.body,a=s.drag?.55:s.sel?.2:0;i.lift+=(a-i.lift)*(1-Math.exp(-e*14));let o=i.lift+n.y*xi,l=n.rx,c=n.rz,h=n.ry,d=n.sx,u=n.sy,f=0;if(ke||(u*=1+Math.sin(t/520+i.ph)*.012),s.sel&&!s.drag&&(o+=Math.abs(Math.sin(t/210))*.07),s.fear&&(f=Math.sin(t/22+i.ph)*.035,c+=Math.sin(t/31)*.06),s.joy&&!ke){let A=Math.abs(Math.sin(t/190+i.ph));o+=A*.5,u*=.94+A*.1,h+=Math.sin(t/380+i.ph)*.5}if(i.ko+=((s.ko?1:0)-i.ko)*(1-Math.exp(-e*7)),i.ko>.002){let A=i.ko,w=Math.sin(Math.min(1,A*1.1)*Math.PI)*.12;c+=A*1.46,o+=A*.24*xi+w,f+=A*.12}let p=i.hh*.5,x=l?-p*Math.sin(l):0;l&&(o+=p*(1-Math.cos(l)));let g=xi*i.gr;r.position.set(f,o,x),r.rotation.set(l,h,c),r.scale.set(g*d,g*u,g*d);let m=i.yawZ!=null?i.yawZ:this.c.az,v=this.blick;if(v&&i.yawZ==null&&!s.sel)if(yi()>v.bis)this.blick=null;else{let A=v.x-i.root.position.x,w=v.z-i.root.position.z;if(A*A+w*w>.3){let _=Math.atan2(A,w)-m;for(;_>Math.PI;)_-=2*Math.PI;for(;_<-Math.PI;)_+=2*Math.PI;m+=Vr(_,-.75,.75)}}let E=m-i.yaw;for(;E>Math.PI;)E-=2*Math.PI;for(;E<-Math.PI;)E+=2*Math.PI;i.yaw+=E*(1-Math.exp(-e*(i.yawZ!=null?16:7))),i.root.rotation.y=i.yaw;let S=!!(s.ghost||s.durch);if(S!==!!i.geist){i.geist=S;let A=i._team==="d"?1:0,w=S?It.geist[A]:It.mats[A];for(let _ of i.meshes)_.material=w[_.userData.k],_.castShadow=!S,_.renderOrder=S?3:0}};St.messe=function(i){if(this.mN=(this.mN||0)+1,this.mS=(this.mS||0)+i,this.mN<90)return;let t=this.mS/this.mN;this.mN=0,this.mS=0,t>.034&&It.dpr>1&&!It.test&&(It.dpr=Math.max(1,It.dpr-.25),It.r.setPixelRatio(It.dpr),It.r.setSize(this.W,this.H,!1),It.dpr<=1.25&&this.key.shadow.mapSize.x>1024&&(this.key.shadow.mapSize.set(1024,1024),this.key.shadow.map&&(this.key.shadow.map.dispose(),this.key.shadow.map=null)))};St.lokal=function(i,t){let e=this.stage.getBoundingClientRect(),n=e.width/(this.stage.offsetWidth||e.width)||1;return{x:(this.turned?e.right-i:i-e.left)/n,y:(this.turned?e.bottom-t:t-e.top)/n}};St.boden=function(i,t){let e=new L(i/this.W*2-1,1-t/this.H*2,.5).unproject(this.cam),n=this.cam.position,s=e.sub(n);if(Math.abs(s.y)<1e-6)return null;let r=-n.y/s.y;return r<=0?null:{x:n.x+s.x*r,z:n.z+s.z*r}};var Af=new wr;St.trifft=function(i,t,e){Af.setFromCamera(new it(i/this.W*2-1,1-t/this.H*2),this.cam),this.gFig.updateMatrixWorld(!0);let n=[];for(let a in this.pcs){let o=this.pcs[a];o!==e&&n.push(o.root)}let s=Af.intersectObjects(n,!0);if(!s.length)return null;let r=s[0].object;for(;r&&!r.userData.el;)r=r.parent;return r?r.userData.el:null};St.hit=function(i,t,e){let n={piece:-1,floor:-1,hinter:-1},s=this.lokal(i,t),r=this.trifft(s.x,s.y,e),a=[];for(let c in this.pcs){let h=this.pcs[c];if(h===e)continue;let d=this.kapsel(h);ll(s.x,s.y,d)<=d.r&&a.push([h.root.position.distanceTo(this.cam.position),h])}a.sort((c,h)=>c[0]-h[0]);let o=r||(a.length?a[0][1]:null);if(o){n.piece=o._sq;let c=a.find(h=>h[1]!==o);c&&(n.hinter=c[1]._sq)}let l=this.boden(s.x,s.y);if(l){let c=Math.floor(l.x+4),h=Math.floor(l.z+4);c>=0&&c<8&&h>=0&&h<8&&(n.floor=(7-h)*16+c)}return n};St.sichtPunkt=function(i){let t=this.pcs[i];if(!t)return null;let e=t._bx-3.5,n=t._by-3.5;for(let s of[.86,.72,.95,.6,.45,.3,.15])for(let r of[0,-.1,.1]){let a=this.welt(e+r,t.hh*s,n);if(this.trifft(a.x,a.y,null)===t)return a}return null};St.nearCenter=function(i,t,e){let n=this.lokal(i,t),s=this.xy(e),r=this.welt(s.x-3.5,.2,s.y-3.5);return Math.hypot(n.x-r.x,n.y-r.y)<this.sq*.34};St.bind=function(){let i=this.stage,t=this,e=null;this._down=function(s){if(s.pointerType==="mouse"&&s.button!==0||(Sys.unlock(),t.locked||e))return;let r=t.hit(s.clientX,s.clientY,null),a=r.piece>=0?r.piece:r.floor;if(!(a<0)){if(r.piece>=0&&r.floor>=0&&r.floor!==r.piece&&t.o.prefer&&t.o.prefer(r.piece,r.floor,t.nearCenter(s.clientX,s.clientY,r.floor))?a=r.floor:(r.piece>=0&&r.hinter>=0&&t.o.prefer&&t.o.prefer(r.piece,r.hinter,!1)||r.piece>=0&&r.piece===t.selSq&&r.hinter>=0&&t.o.canGrab&&t.o.canGrab(r.hinter))&&(a=r.hinter),t.o.isTarget&&!t.o.isTarget(a)){let o=t.lokal(s.clientX,s.clientY),l=r.piece>=0?t.pcs[r.piece]:null,c=l&&!l.f.durch?ll(o.x,o.y,t.kapsel(l))/t.kapsel(l).r:9,h=-1,d=1;for(let u=0;u<120;u++){if(u&136){u+=7;continue}if(!t.o.isTarget(u))continue;let f=t.pcs[u],p;if(f){let x=t.kapsel(f);if(p=ll(o.x,o.y,x)/x.r,p>=c)continue}else{let x=t.xy(u),g=t.welt(x.x-3.5,.2,x.y-3.5);p=Math.hypot(o.x-g.x,o.y-g.y)/(t.sq*.34)}p<d&&(d=p,h=u)}h>=0&&(a=h)}if(s.preventDefault(),e={sq:a,x0:s.clientX,y0:s.clientY,id:s.pointerId,drag:!1,grab:!1,fresh:!1,el:null,at:a,far:s.pointerType==="mouse"?6:11},t.pcs[a]&&t.o.canGrab&&t.o.canGrab(a)&&!(t.o.isTarget&&t.o.isTarget(a))){e.grab=!0,e.el=t.pcs[a],e.fresh=t.o.onGrab?t.o.onGrab(a)!==!1:!0;try{i.setPointerCapture(s.pointerId)}catch{}}}},this._move=function(s){if(!e||s.pointerId!==e.id||!e.grab)return;let r=s.clientX-e.x0,a=s.clientY-e.y0;if(!e.drag&&r*r+a*a>e.far*e.far&&(e.drag=!0,e.el.f.drag=!0),!e.drag)return;let o=t.hit(s.clientX,s.clientY,e.el),l=o.piece>=0&&t.o.isTarget&&t.o.isTarget(o.piece)?o.piece:o.floor;l<0&&(l=e.at),l!==e.at&&(e.at=l,t.glide(e.el,l,80))};function n(s,r){if(!e||s.pointerId!==e.id)return;let a=e;e=null;try{i.releasePointerCapture(s.pointerId)}catch{}if(a.drag){a.el.f.drag=!1;let o=r?a.sq:a.at;if(o!==a.sq&&t.o.onDrop&&t.o.onDrop(a.sq,o))return;t.pcs[a.sq]===a.el&&t.glide(a.el,a.sq,120);return}r||a.grab&&a.fresh||t.o.onTap&&t.o.onTap(a.sq)}this._up=s=>n(s,!1),this._cancel=s=>n(s,!0),this._ctx=s=>s.preventDefault(),i.addEventListener("pointerdown",this._down),i.addEventListener("pointermove",this._move),i.addEventListener("pointerup",this._up),i.addEventListener("pointercancel",this._cancel),i.addEventListener("contextmenu",this._ctx)};St.destroy=function(){let i=this.stage;this.ro&&this.ro.disconnect(),window.removeEventListener("resize",this._fit),i.removeEventListener("pointerdown",this._down),i.removeEventListener("pointermove",this._move),i.removeEventListener("pointerup",this._up),i.removeEventListener("pointercancel",this._cancel),i.removeEventListener("contextmenu",this._ctx),It.owner===this&&(It.owner=null,It.r.domElement.parentNode===i&&i.removeChild(It.r.domElement)),this.elGlow.remove(),this.hud.remove(),i.classList.remove("drei"),[this.tBrett,this.ovA.t,this.ovB.t].forEach(t=>t.dispose())};function Q_(i){["fx","sparks","dust","ring","flash","word","points","bubble","bubbleAt","shake"].forEach(t=>{St[t]||(St[t]=i.prototype[t])}),St.elephant=function(){return new Promise(t=>{let e=0,n=()=>{if(Math.abs(this.c.zoom-1)>.03&&e++<40){setTimeout(n,100);return}i.prototype.elephant.call(this).then(t)};n()})}}function j_(){if(!It.ok)return!1;try{let t=document.createElement("canvas").getContext("webgl2");if(!t)It.ok=!1;else{let e=t.getExtension("WEBGL_lose_context");e&&e.loseContext()}}catch{It.ok=!1}return It.ok}window.Drei={get ok(){return It.ok},pruefe:j_,neu(i,t){Zc.prototype.fx||Q_(window.BoardView);try{return new Zc(i,t)}catch(e){return It.ok=!1,console.error(e),null}},bild:$_,zeichne(){It.einmal=!0,It.owner&&It.owner.tick(performance.now())},_k:It};})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
