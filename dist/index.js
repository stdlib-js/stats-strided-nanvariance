"use strict";var t=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var i=t(function(R,u){
var q=require('@stdlib/stats-strided-nanvariancepn/dist').ndarray;function d(a,r,e,n,o){return q(a,r,e,n,o)}u.exports=d
});var v=t(function(b,s){
var y=require('@stdlib/strided-base-stride2offset/dist'),f=i();function p(a,r,e,n){return f(a,r,e,n,y(a,n))}s.exports=p
});var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),c=v(),l=i();x(c,"ndarray",l);module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
