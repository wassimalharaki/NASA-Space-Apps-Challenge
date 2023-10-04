(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[582],{7536:function(t){t.exports=function(){function t(e,r,n){function a(s,i){if(!r[s]){if(!e[s]){if(o)return o(s,!0);var p=new Error("Cannot find module '"+s+"'");throw p.code="MODULE_NOT_FOUND",p}var u=r[s]={exports:{}};e[s][0].call(u.exports,(function(t){return a(e[s][1][t]||t)}),u,u.exports,t,e,r,n)}return r[s].exports}for(var o=void 0,s=0;s<n.length;s++)a(n[s]);return a}return t}()({1:[function(t,e,r){"use strict";var n=t("../renderer/Renderer"),a=t("../helpers/layerAPIBuilder");function o(t){var e={animation:t,elements:t.renderer.elements.map((function(e){return a(e,t)})),boundingRect:null,scaleData:null};function r(){return t.currentFrame}function o(){return t.currentFrame/t.frameRate}function s(t,e){var r,n=t.length;for(r=0;r<n;r+=1)t.getPropertyAtIndex(r).setValue(e)}function i(t,e){var r,n=t.length,a=[];for(r=0;r<n;r+=1)a.push(t.getPropertyAtIndex(r).toKeypathLayerPoint(e));return 1===a.length?a[0]:a}function p(t,e){var r,n=t.length,a=[];for(r=0;r<n;r+=1)a.push(t.getPropertyAtIndex(r).fromKeypathLayerPoint(e));return 1===a.length?a[0]:a}function u(e){var r,n,a,o=t.animationData.w,s=t.animationData.h,i=o/s,p=e.width,u=e.height,c=p/u,h=t.renderer.renderConfig.preserveAspectRatio.split(" ");return r="meet"===h[1]?c>i?u/s:p/o:c>i?p/o:u/s,n=h[0].substr(0,4),{scaleYOffset:"YMin"===(a=h[0].substr(4))?0:"YMid"===a?(u-s*r)/2:u-s*r,scaleXOffset:"xMin"===n?0:"xMid"===n?(p-o*r)/2:p-o*r,scale:r}}function c(r){r=t.wrapper,e.boundingRect=r.getBoundingClientRect(),e.scaleData=u(e.boundingRect)}function h(r){if(!t.wrapper||!t.wrapper.getBoundingClientRect)return r;e.boundingRect||c();var n=e.boundingRect,a=[r[0]-n.left,r[1]-n.top],o=e.scaleData;return a[0]=(a[0]-o.scaleXOffset)/o.scale,a[1]=(a[1]-o.scaleYOffset)/o.scale,a}function l(r){if(!t.wrapper||!t.wrapper.getBoundingClientRect)return r;e.boundingRect||c();var n,a=e.boundingRect,o=e.scaleData;return n=[(n=[r[0]*o.scale+o.scaleXOffset,r[1]*o.scale+o.scaleYOffset])[0]+a.left,n[1]+a.top]}function f(){return e.scaleData}var y={recalculateSize:c,getScaleData:f,toContainerPoint:h,fromContainerPoint:l,getCurrentFrame:r,getCurrentTime:o,addValueCallback:s,toKeypathLayerPoint:i,fromKeypathLayerPoint:p};return Object.assign({},n(e),y)}e.exports=o},{"../helpers/layerAPIBuilder":6,"../renderer/Renderer":42}],2:[function(t,e,r){"use strict";e.exports=","},{}],3:[function(t,e,r){"use strict";e.exports={0:0,1:1,2:2,3:3,4:4,5:5,13:13,comp:0,composition:0,solid:1,image:2,null:3,shape:4,text:5,camera:13}},{}],4:[function(t,e,r){"use strict";e.exports={LAYER_TRANSFORM:"transform"}},{}],5:[function(t,e,r){"use strict";var n=t("../enums/key_path_separator"),a=t("./stringSanitizer");e.exports=function(t){var e=t.split(n),r=e.shift();return{selector:a(r),propertyPath:e.join(n)}}},{"../enums/key_path_separator":2,"./stringSanitizer":7}],6:[function(t,e,r){"use strict";var n=t("../layer/text/TextElement"),a=t("../layer/shape/Shape"),o=t("../layer/null_element/NullElement"),s=t("../layer/solid/SolidElement"),i=t("../layer/image/ImageElement"),p=t("../layer/camera/Camera"),u=t("../layer/LayerBase");e.exports=function(e,r){var c=e.data.ty,h=t("../layer/composition/Composition");switch(c){case 0:return h(e,r);case 1:return s(e,r);case 2:return i(e,r);case 3:return o(e,r);case 4:return a(e,r,e.data.shapes,e.itemsData);case 5:return n(e,r);case 13:return p(e,r);default:return u(e,r)}}},{"../layer/LayerBase":13,"../layer/camera/Camera":15,"../layer/composition/Composition":16,"../layer/image/ImageElement":20,"../layer/null_element/NullElement":21,"../layer/shape/Shape":22,"../layer/solid/SolidElement":35,"../layer/text/TextElement":38}],7:[function(t,e,r){"use strict";function n(t){return t.trim()}e.exports=n},{}],8:[function(t,e,r){"use strict";var n=t("./typedArrays"),a=function(){var t=Math.cos,e=Math.sin,r=Math.tan,a=Math.round;function o(){return this.props[0]=1,this.props[1]=0,this.props[2]=0,this.props[3]=0,this.props[4]=0,this.props[5]=1,this.props[6]=0,this.props[7]=0,this.props[8]=0,this.props[9]=0,this.props[10]=1,this.props[11]=0,this.props[12]=0,this.props[13]=0,this.props[14]=0,this.props[15]=1,this}function s(r){if(0===r)return this;var n=t(r),a=e(r);return this._t(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1)}function i(r){if(0===r)return this;var n=t(r),a=e(r);return this._t(1,0,0,0,0,n,-a,0,0,a,n,0,0,0,0,1)}function p(r){if(0===r)return this;var n=t(r),a=e(r);return this._t(n,0,a,0,0,1,0,0,-a,0,n,0,0,0,0,1)}function u(r){if(0===r)return this;var n=t(r),a=e(r);return this._t(n,-a,0,0,a,n,0,0,0,0,1,0,0,0,0,1)}function c(t,e){return this._t(1,e,t,1,0,0)}function h(t,e){return this.shear(r(t),r(e))}function l(n,a){var o=t(a),s=e(a);return this._t(o,s,0,0,-s,o,0,0,0,0,1,0,0,0,0,1)._t(1,0,0,0,r(n),1,0,0,0,0,1,0,0,0,0,1)._t(o,-s,0,0,s,o,0,0,0,0,1,0,0,0,0,1)}function f(t,e,r){return r=isNaN(r)?1:r,1==t&&1==e&&1==r?this:this._t(t,0,0,0,0,e,0,0,0,0,r,0,0,0,0,1)}function y(t,e,r,n,a,o,s,i,p,u,c,h,l,f,y,m){return this.props[0]=t,this.props[1]=e,this.props[2]=r,this.props[3]=n,this.props[4]=a,this.props[5]=o,this.props[6]=s,this.props[7]=i,this.props[8]=p,this.props[9]=u,this.props[10]=c,this.props[11]=h,this.props[12]=l,this.props[13]=f,this.props[14]=y,this.props[15]=m,this}function m(t,e,r){return r=r||0,0!==t||0!==e||0!==r?this._t(1,0,0,0,0,1,0,0,0,0,1,0,t,e,r,1):this}function v(t,e,r,n,a,o,s,i,p,u,c,h,l,f,y,m){var v=this.props;if(1===t&&0===e&&0===r&&0===n&&0===a&&1===o&&0===s&&0===i&&0===p&&0===u&&1===c&&0===h)return v[12]=v[12]*t+v[15]*l,v[13]=v[13]*o+v[15]*f,v[14]=v[14]*c+v[15]*y,v[15]=v[15]*m,this._identityCalculated=!1,this;var P=v[0],d=v[1],g=v[2],x=v[3],_=v[4],T=v[5],k=v[6],S=v[7],K=v[8],b=v[9],O=v[10],L=v[11],V=v[12],N=v[13],R=v[14],A=v[15];return v[0]=P*t+d*a+g*p+x*l,v[1]=P*e+d*o+g*u+x*f,v[2]=P*r+d*s+g*c+x*y,v[3]=P*n+d*i+g*h+x*m,v[4]=_*t+T*a+k*p+S*l,v[5]=_*e+T*o+k*u+S*f,v[6]=_*r+T*s+k*c+S*y,v[7]=_*n+T*i+k*h+S*m,v[8]=K*t+b*a+O*p+L*l,v[9]=K*e+b*o+O*u+L*f,v[10]=K*r+b*s+O*c+L*y,v[11]=K*n+b*i+O*h+L*m,v[12]=V*t+N*a+R*p+A*l,v[13]=V*e+N*o+R*u+A*f,v[14]=V*r+N*s+R*c+A*y,v[15]=V*n+N*i+R*h+A*m,this._identityCalculated=!1,this}function P(){return this._identityCalculated||(this._identity=!(1!==this.props[0]||0!==this.props[1]||0!==this.props[2]||0!==this.props[3]||0!==this.props[4]||1!==this.props[5]||0!==this.props[6]||0!==this.props[7]||0!==this.props[8]||0!==this.props[9]||1!==this.props[10]||0!==this.props[11]||0!==this.props[12]||0!==this.props[13]||0!==this.props[14]||1!==this.props[15]),this._identityCalculated=!0),this._identity}function d(t){for(var e=0;e<16;){if(t.props[e]!==this.props[e])return!1;e+=1}return!0}function g(t){var e;for(e=0;e<16;e+=1)t.props[e]=this.props[e]}function x(t){var e;for(e=0;e<16;e+=1)this.props[e]=t[e]}function _(t,e,r){return{x:t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],y:t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],z:t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}}function T(t,e,r){return t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12]}function k(t,e,r){return t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13]}function S(t,e,r){return t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]}function K(t){var e=this.props[0]*this.props[5]-this.props[1]*this.props[4],r=this.props[5]/e,n=-this.props[1]/e,a=-this.props[4]/e,o=this.props[0]/e,s=(this.props[4]*this.props[13]-this.props[5]*this.props[12])/e,i=-(this.props[0]*this.props[13]-this.props[1]*this.props[12])/e;return[t[0]*r+t[1]*a+s,t[0]*n+t[1]*o+i,0]}function b(t){var e,r=t.length,n=[];for(e=0;e<r;e+=1)n[e]=K(t[e]);return n}function O(t,e,r){var a=n("float32",6);if(this.isIdentity())a[0]=t[0],a[1]=t[1],a[2]=e[0],a[3]=e[1],a[4]=r[0],a[5]=r[1];else{var o=this.props[0],s=this.props[1],i=this.props[4],p=this.props[5],u=this.props[12],c=this.props[13];a[0]=t[0]*o+t[1]*i+u,a[1]=t[0]*s+t[1]*p+c,a[2]=e[0]*o+e[1]*i+u,a[3]=e[0]*s+e[1]*p+c,a[4]=r[0]*o+r[1]*i+u,a[5]=r[0]*s+r[1]*p+c}return a}function L(t,e,r){return this.isIdentity()?[t,e,r]:[t*this.props[0]+e*this.props[4]+r*this.props[8]+this.props[12],t*this.props[1]+e*this.props[5]+r*this.props[9]+this.props[13],t*this.props[2]+e*this.props[6]+r*this.props[10]+this.props[14]]}function V(t,e){return this.isIdentity()?t+","+e:t*this.props[0]+e*this.props[4]+this.props[12]+","+(t*this.props[1]+e*this.props[5]+this.props[13])}function N(){for(var t=0,e=this.props,r="matrix3d(",n=1e4;t<16;)r+=a(e[t]*n)/n,r+=15===t?")":",",t+=1;return r}function R(){var t=1e4,e=this.props;return"matrix("+a(e[0]*t)/t+","+a(e[1]*t)/t+","+a(e[4]*t)/t+","+a(e[5]*t)/t+","+a(e[12]*t)/t+","+a(e[13]*t)/t+")"}function A(){this.reset=o,this.rotate=s,this.rotateX=i,this.rotateY=p,this.rotateZ=u,this.skew=h,this.skewFromAxis=l,this.shear=c,this.scale=f,this.setTransform=y,this.translate=m,this.transform=v,this.applyToPoint=_,this.applyToX=T,this.applyToY=k,this.applyToZ=S,this.applyToPointArray=L,this.applyToTriplePoints=O,this.applyToPointStringified=V,this.toCSS=N,this.to2dCSS=R,this.clone=g,this.cloneFromProps=x,this.equals=d,this.inversePoints=b,this.inversePoint=K,this._t=this.transform,this.isIdentity=P,this._identity=!0,this._identityCalculated=!1,this.props=n("float32",16),this.reset()}return function(){return new A}}();e.exports=a},{"./typedArrays":9}],9:[function(t,e,r){"use strict";var n=function(){function t(t,e){var r,n=0,a=[];switch(t){case"int16":case"uint8c":r=1;break;default:r=1.1}for(n=0;n<e;n+=1)a.push(r);return a}function e(t,e){return"float32"===t?new Float32Array(e):"int16"===t?new Int16Array(e):"uint8c"===t?new Uint8ClampedArray(e):void 0}return"function"===typeof Uint8ClampedArray&&"function"===typeof Float32Array?e:t}();e.exports=n},{}],10:[function(t,e,r){"use strict";var n=t("./animation/AnimationItem");function a(t){return Object.assign({},n(t))}e.exports={createAnimationApi:a}},{"./animation/AnimationItem":1}],11:[function(t,e,r){"use strict";var n=t("../helpers/keyPathBuilder"),a=t("../enums/layer_types");function o(t,e){function r(){return t.length}function s(t,e){return t.filter((function(t){return t.getTargetLayer().data.ty===a[e]}))}function i(t,e){return t.filter((function(t){return t.getTargetLayer().data.nm===e}))}function p(t,e){return t.filter((function(t){return!!t.hasProperty(e)&&t.getProperty(e)}))}function u(e){return o(s(t,e),"layer")}function c(e){return o(i(t,e),"layer")}function h(e){return o(t.filter((function(t){return t.hasProperty(e)})).map((function(t){return t.getProperty(e)})),"property")}function l(e){return o(p(t,e).map((function(t){return t.getProperty(e)})),"property")}function f(t){var r,a,o,s=n(t),i=s.selector;return"renderer"===e||"layer"===e?(r=c(i),a=u(i),o=0===r.length&&0===a.length?l(i):r.concat(a),s.propertyPath?o.getKeyPath(s.propertyPath):o):"property"===e?(o=h(i),s.propertyPath?o.getKeyPath(s.propertyPath):o):void 0}function y(r){var n=r.getElements();return o(t.concat(n),e)}function m(){return t}function v(e){return t[e]}var P={getKeyPath:f,concat:y,getElements:m,getPropertyAtIndex:v};return Object.defineProperty(P,"length",{get:r}),P}e.exports=o},{"../enums/layer_types":3,"../helpers/keyPathBuilder":5}],12:[function(t,e,r){"use strict";function n(t){function e(e,r){for(var n=t.properties||[],a=0,o=n.length;a<o;){if(n[a].name===e)return n[a].value;a+=1}return null}function r(t){return!!e(t)}function n(t){return e(t)}function a(e){return t.parent.fromKeypathLayerPoint(e)}function o(e){return t.parent.toKeypathLayerPoint(e)}return{hasProperty:r,getProperty:n,fromKeypathLayerPoint:a,toKeypathLayerPoint:o}}t("../enums/key_path_separator"),t("../enums/property_names"),e.exports=n},{"../enums/key_path_separator":2,"../enums/property_names":4}],13:[function(t,e,r){"use strict";var n=t("../key_path/KeyPathNode"),a=t("./transform/Transform"),o=t("./effects/Effects"),s=t("../helpers/transformationMatrix");function i(t){var e=a(t.element.finalTransform.mProp,t),r=o(t.element.effectsManager.effectElements||[],t);function i(){t.properties.push({name:"transform",value:e},{name:"Transform",value:e},{name:"Effects",value:r},{name:"effects",value:r})}function p(e){var r=t.element;t.parent.toKeypathLayerPoint&&(e=t.parent.toKeypathLayerPoint(e));var n=s();if(t.getProperty("Transform").getTargetTransform().applyToMatrix(n),r.hierarchy&&r.hierarchy.length){var a,o=r.hierarchy.length;for(a=0;a<o;a+=1)r.hierarchy[a].finalTransform.mProp.applyToMatrix(n)}return n.inversePoint(e)}function u(e){var r=t.element,n=s();if(t.getProperty("Transform").getTargetTransform().applyToMatrix(n),r.hierarchy&&r.hierarchy.length){var a,o=r.hierarchy.length;for(a=0;a<o;a+=1)r.hierarchy[a].finalTransform.mProp.applyToMatrix(n)}return e=n.applyToPointArray(e[0],e[1],e[2]||0),t.parent.fromKeypathLayerPoint?t.parent.fromKeypathLayerPoint(e):e}function c(){return t.element}var h={getTargetLayer:c,toKeypathLayerPoint:p,fromKeypathLayerPoint:u};return i(),Object.assign(t,n(t),h)}e.exports=i},{"../helpers/transformationMatrix":8,"../key_path/KeyPathNode":12,"./effects/Effects":19,"./transform/Transform":39}],14:[function(t,e,r){"use strict";var n=t("../enums/layer_types"),a=t("../helpers/layerAPIBuilder");function o(t){function e(){return t.length}function r(t,e){return t.filter((function(t){return t.data.ty===n[e]}))}function s(t,e){return t.filter((function(t){return t.data.nm===e}))}function i(){return o(t)}function p(e){return o(r(t,e))}function u(e){return o(s(t,e))}function c(e){return e>=t.length?[]:a(t[parseInt(e)])}function h(e,r){e.reduce((function(e,r){var n=r;return e[r]=function(){var e=arguments;return t.map((function(t){var r=a(t);return r[n]?r[n].apply(null,e):null}))},e}),y)}function l(){return t}function f(e){return t.concat(e.getTargetElements())}var y={getLayers:i,getLayersByType:p,getLayersByName:u,layer:c,concat:f,getTargetElements:l};return h(["setTranslate","getType","getDuration"]),h(["setText","getText","setDocumentData","canResizeFont","setMinimumFontSize"]),Object.defineProperty(y,"length",{get:e}),y}e.exports=o},{"../enums/layer_types":3,"../helpers/layerAPIBuilder":6}],15:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={},o={element:t,parent:e,properties:s()};function s(){return[{name:"Point of Interest",value:a(t.a,e)},{name:"Zoom",value:a(t.pe,e)},{name:"Position",value:a(t.p,e)},{name:"X Rotation",value:a(t.rx,e)},{name:"Y Rotation",value:a(t.ry,e)},{name:"Z Rotation",value:a(t.rz,e)},{name:"Orientation",value:a(t.or,e)}]}function i(){return o.element}var p={getTargetLayer:i};return Object.assign(r,n(o),p)}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],16:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathList"),a=t("../LayerBase"),o=t("../../helpers/layerAPIBuilder"),s=(t("../../property/Property"),t("./TimeRemap"));function i(t,e){var r={},i={element:t,parent:e,properties:u()};function p(e,r){var n=null,a={name:e.nm};function s(){return n||(n=o(t.elements[r],i)),n}return Object.defineProperty(a,"value",{get:s}),a}function u(){var e=t.layers.map(p);return[{name:"Time Remap",value:s(t.tm)}].concat(e)}var c={};return Object.assign(r,a(i),n(i.elements,"layer"),c)}e.exports=i},{"../../helpers/layerAPIBuilder":6,"../../key_path/KeyPathList":11,"../../property/Property":40,"../LayerBase":13,"./TimeRemap":17}],17:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/ValueProperty");function o(t,e){var r,o={property:t,parent:e},s=!1,i=0,p=0,u=0,c=0,h=!0,l=1,f=!1,y=!1,m=[],v={time:-1};function P(t,e,r){f=!1,r&&(x(),c=t),y&&console.log(t,e),u=Date.now(),i=t,p=e,T()}function d(){var t=m.shift();P(t[0],t[1])}function g(t,e){m.push([t,e])}function x(){m.length=0}function _(t){if(i===p)c=i;else if(!f){var e=Date.now(),r=l*(e-u)/1e3;u=e,i<p?(c+=r)>p&&(m.length?d():h?c%=p-i:c=p):(c-=r)<p&&(m.length?d():c=h?i-(p-c):p),y&&console.log(c)}return R.onEnterFrame&&v.time!==c&&(v.time=c,R.onEnterFrame(v)),c}function T(){s||(s=!0,r=R.setValue(_,y))}function k(t,e){f=!1,e&&x(),T(),p=t}function S(){return s?c:t.v/t.mult}function K(t){h=t}function b(t){l=t}function O(t){y=t}function L(){f=!0}function V(){r&&(r(),o.property=null,o.parent=null)}var N={playSegment:P,playTo:k,queueSegment:g,clearQueue:x,setLoop:K,setSpeed:b,pause:L,setDebugging:O,getCurrentTime:S,onEnterFrame:null,destroy:V},R={};return Object.assign(R,N,a(o),n(o))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/ValueProperty":41}],18:[function(t,e,r){"use strict";var n=t("../../property/Property");function a(t,e){return n(t.p,e)}e.exports=a},{"../../property/Property":40}],19:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:i()};function s(t,r){return{name:t.data?t.data.nm:r.toString(),value:t.data?o(t.effectElements,e):a(t.p,e)}}function i(){var e,r=t.length,n=[];for(e=0;e<r;e+=1)n.push(s(t[e],e));return n}var p={};return Object.assign(p,n(r))}t("./EffectElement"),e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40,"./EffectElement":18}],20:[function(t,e,r){"use strict";var n=t("../LayerBase");function a(t){var e={element:t,parent:parent,properties:r()};function r(){return[]}var a={};return Object.assign({},n(e),a)}e.exports=a},{"../LayerBase":13}],21:[function(t,e,r){"use strict";var n=t("../LayerBase");function a(t,e){var r={},a={element:t,parent:e,properties:o()};function o(){return[]}var s={};return Object.assign(r,n(a),s)}e.exports=a},{"../LayerBase":13}],22:[function(t,e,r){"use strict";var n=t("../LayerBase"),a=t("./ShapeContents");function o(t,e){var r={properties:[],parent:e,element:t},o=a(t.data.shapes,t.itemsData,r);function s(){r.properties.push({name:"Contents",value:o})}var i={};return s(),Object.assign(r,n(r),i)}e.exports=o},{"../LayerBase":13,"./ShapeContents":23}],23:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=(t("../../property/Property"),t("./ShapeRectangle")),o=t("./ShapeFill"),s=t("./ShapeStroke"),i=t("./ShapeEllipse"),p=t("./ShapeGradientFill"),u=t("./ShapeGradientStroke"),c=t("./ShapeTrimPaths"),h=t("./ShapeRepeater"),l=t("./ShapePolystar"),f=t("./ShapeRoundCorners"),y=t("./ShapePath"),m=t("../transform/Transform"),v=t("../../helpers/transformationMatrix");function P(t,e,r){var d={properties:_(),parent:r},g=[];function x(r,n){var v={name:r.nm};return Object.defineProperty(v,"value",{get:function(){return g[n]?g[n]:("gr"===r.ty?v=P(t[n].it,e[n].it,d):"rc"===r.ty?v=a(e[n],d):"el"===r.ty?v=i(e[n],d):"fl"===r.ty?v=o(e[n],d):"st"===r.ty?v=s(e[n],d):"gf"===r.ty?v=p(e[n],d):"gs"===r.ty?v=u(e[n],d):"tm"===r.ty?v=c(e[n],d):"rp"===r.ty?v=h(e[n],d):"sr"===r.ty?v=l(e[n],d):"rd"===r.ty?v=f(e[n],d):"sh"===r.ty?v=y(e[n],d):"tr"===r.ty?v=m(e[n].transform.mProps,d):console.log(r.ty),g[n]=v,v);var v}}),v}function _(){return t.map((function(t,e){return x(t,e)}))}function T(t){if(d.hasProperty("Transform")){var e=v();d.getProperty("Transform").getTargetTransform().applyToMatrix(e),t=e.applyToPointArray(t[0],t[1],t[2]||0)}return d.parent.fromKeypathLayerPoint(t)}function k(t){if(t=d.parent.toKeypathLayerPoint(t),d.hasProperty("Transform")){var e=v();d.getProperty("Transform").getTargetTransform().applyToMatrix(e),t=e.inversePoint(t)}return t}var S={fromKeypathLayerPoint:T,toKeypathLayerPoint:k};return Object.assign(d,n(d),S)}e.exports=P},{"../../helpers/transformationMatrix":8,"../../key_path/KeyPathNode":12,"../../property/Property":40,"../transform/Transform":39,"./ShapeEllipse":24,"./ShapeFill":25,"./ShapeGradientFill":26,"./ShapeGradientStroke":27,"./ShapePath":28,"./ShapePolystar":29,"./ShapeRectangle":30,"./ShapeRepeater":31,"./ShapeRoundCorners":32,"./ShapeStroke":33,"./ShapeTrimPaths":34}],24:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"Size",value:a(t.sh.s,e)},{name:"Position",value:a(t.sh.p,e)}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],25:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"Color",value:a(t.c,e)},{name:"Opacity",value:{setValue:a(t.o,e)}}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],26:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"Start Point",value:a(t.s,e)},{name:"End Point",value:a(t.s,e)},{name:"Opacity",value:a(t.o,e)},{name:"Highlight Length",value:a(t.h,e)},{name:"Highlight Angle",value:a(t.a,e)},{name:"Colors",value:a(t.g.prop,e)}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],27:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"Start Point",value:a(t.s,e)},{name:"End Point",value:a(t.e,e)},{name:"Opacity",value:a(t.o,e)},{name:"Highlight Length",value:a(t.h,e)},{name:"Highlight Angle",value:a(t.a,e)},{name:"Colors",value:a(t.g.prop,e)},{name:"Stroke Width",value:a(t.w,e)}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],28:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"path",value:a(t.sh,e)}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],29:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"Points",value:a(t.sh.pt,e)},{name:"Position",value:a(t.sh.p,e)},{name:"Rotation",value:a(t.sh.r,e)},{name:"Inner Radius",value:a(t.sh.ir,e)},{name:"Outer Radius",value:a(t.sh.or,e)},{name:"Inner Roundness",value:a(t.sh.is,e)},{name:"Outer Roundness",value:a(t.sh.os,e)}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],30:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"Size",value:a(t.sh.s,e)},{name:"Position",value:a(t.sh.p,e)},{name:"Roundness",value:a(t.sh.r,e)}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],31:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property"),o=t("../transform/Transform");function s(t,e){var r={parent:e,properties:s()};function s(){return[{name:"Copies",value:a(t.c,e)},{name:"Offset",value:a(t.o,e)},{name:"Transform",value:o(t.tr,e)}]}var i={};return Object.assign(i,n(r))}e.exports=s},{"../../key_path/KeyPathNode":12,"../../property/Property":40,"../transform/Transform":39}],32:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"Radius",value:a(t.rd,e)}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],33:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"Color",value:a(t.c,e)},{name:"Stroke Width",value:a(t.w,e)},{name:"Opacity",value:a(t.o,e)}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],34:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={parent:e,properties:o()};function o(){return[{name:"Start",value:a(t.s,e)},{name:"End",value:a(t.e,e)},{name:"Offset",value:a(t.o,e)}]}var s={};return Object.assign(s,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],35:[function(t,e,r){"use strict";var n=t("../LayerBase");function a(t,e){var r={element:t,parent:e,properties:a()};function a(){return[]}var o={};return Object.assign({},n(r),o)}e.exports=a},{"../LayerBase":13}],36:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=(t("../../property/Property"),t("./TextAnimator"));function o(t,e){var r={},o={element:t,parent:e,properties:p()};function s(e){var r,n=function(n){var a=e(t.textProperty.currentData);return r!==a?(r=a,Object.assign({},n,a,{__complete:!1})):n};t.textProperty.addEffect(n)}function i(){var e,r,n=[],o=t.textAnimator._animatorsData,s=o.length;for(e=0;e<s;e+=1)r=a(o[e]),n.push({name:t.textAnimator._textData.a[e].nm||"Animator "+(e+1),value:r});return n}function p(){return[{name:"Source",value:{setValue:s}}].concat(i())}var u={};return Object.assign(r,u,n(o))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40,"./TextAnimator":37}],37:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t){var e={},r={properties:K()};function o(e){a(t.a.a).setValue(e)}function s(e){a(t.a.fb).setValue(e)}function i(e){a(t.a.fc).setValue(e)}function p(e){a(t.a.fh).setValue(e)}function u(e){a(t.a.fs).setValue(e)}function c(e){a(t.a.fo).setValue(e)}function h(e){a(t.a.o).setValue(e)}function l(e){a(t.a.p).setValue(e)}function f(e){a(t.a.rx).setValue(e)}function y(e){a(t.a.ry).setValue(e)}function m(e){a(t.a.s).setValue(e)}function v(e){a(t.a.sa).setValue(e)}function P(e){a(t.a.sc).setValue(e)}function d(e){a(t.a.sk).setValue(e)}function g(e){a(t.a.so).setValue(e)}function x(e){a(t.a.sw).setValue(e)}function _(e){a(t.a.sb).setValue(e)}function T(e){a(t.a.sh).setValue(e)}function k(e){a(t.a.ss).setValue(e)}function S(e){a(t.a.t).setValue(e)}function K(){return[{name:"Anchor Point",value:{setValue:o}},{name:"Fill Brightness",value:{setValue:s}},{name:"Fill Color",value:{setValue:i}},{name:"Fill Hue",value:{setValue:p}},{name:"Fill Saturation",value:{setValue:u}},{name:"Fill Opacity",value:{setValue:c}},{name:"Opacity",value:{setValue:h}},{name:"Position",value:{setValue:l}},{name:"Rotation X",value:{setValue:f}},{name:"Rotation Y",value:{setValue:y}},{name:"Scale",value:{setValue:m}},{name:"Skew Axis",value:{setValue:v}},{name:"Stroke Color",value:{setValue:P}},{name:"Skew",value:{setValue:d}},{name:"Stroke Width",value:{setValue:x}},{name:"Tracking Amount",value:{setValue:S}},{name:"Stroke Opacity",value:{setValue:g}},{name:"Stroke Brightness",value:{setValue:_}},{name:"Stroke Saturation",value:{setValue:k}},{name:"Stroke Hue",value:{setValue:T}}]}var b={};return Object.assign(e,b,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],38:[function(t,e,r){"use strict";var n=t("../LayerBase"),a=t("./Text");function o(t){var e={},r=a(t),o={element:t,properties:s()};function s(){return[{name:"text",value:r},{name:"Text",value:r}]}function i(){return t.textProperty.currentData.t}function p(t,e){u({t:t},e)}function u(e,r){return t.updateDocumentData(e,r)}function c(e){return t.canResizeFont(e)}function h(e){return t.setMinimumFontSize(e)}var l={getText:i,setText:p,canResizeFont:c,setDocumentData:u,setMinimumFontSize:h};return Object.assign(e,n(o),l)}e.exports=o},{"../LayerBase":13,"./Text":36}],39:[function(t,e,r){"use strict";var n=t("../../key_path/KeyPathNode"),a=t("../../property/Property");function o(t,e){var r={properties:o()};function o(){return[{name:"Anchor Point",value:a(t.a,e)},{name:"Point of Interest",value:a(t.a,e)},{name:"Position",value:a(t.p,e)},{name:"Scale",value:a(t.s,e)},{name:"Rotation",value:a(t.r,e)},{name:"X Position",value:a(t.px,e)},{name:"Y Position",value:a(t.py,e)},{name:"Z Position",value:a(t.pz,e)},{name:"X Rotation",value:a(t.rx,e)},{name:"Y Rotation",value:a(t.ry,e)},{name:"Z Rotation",value:a(t.rz,e)},{name:"Opacity",value:a(t.o,e)}]}function s(){return t}var i={getTargetTransform:s};return Object.assign(i,n(r))}e.exports=o},{"../../key_path/KeyPathNode":12,"../../property/Property":40}],40:[function(t,e,r){"use strict";var n=t("../key_path/KeyPathNode"),a=t("./ValueProperty");function o(t,e){var r={property:t,parent:e};function o(){r.property=null,r.parent=null}var s={destroy:o};return Object.assign({},s,a(r),n(r))}e.exports=o},{"../key_path/KeyPathNode":12,"./ValueProperty":41}],41:[function(t,e,r){"use strict";var n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function a(t){function e(e){var r=t.property;if(r&&r.addEffect)return"function"===typeof e?r.addEffect(e):"multidimensional"===r.propType&&"object"===("undefined"===typeof e?"undefined":n(e))&&2===e.length||"unidimensional"===r.propType&&"number"===typeof e?r.addEffect((function(){return e})):void 0}function r(){return t.property.v}return{setValue:e,getValue:r}}e.exports=a},{}],42:[function(t,e,r){"use strict";var n=t("../layer/LayerList"),a=t("../key_path/KeyPathList");function o(t){function e(){return t.animation.animType}return t._type="renderer",Object.assign({getRendererType:e},n(t.elements),a(t.elements,"renderer"))}e.exports=o},{"../key_path/KeyPathList":11,"../layer/LayerList":14}]},{},[10])(10)}}]);