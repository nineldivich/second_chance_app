(()=>{"use strict";window.libsearch={search:function(e,t,n=(e=>String(e)),{caseSensitive:r=!1,mode:c="autocomplete"}={}){const o=t.trim().split(/\s+/).filter((e=>""!==e));if(0===o.length)return e;const i=new Map;return function(e,t){return e.sort(((e,n)=>{const r=t(e),c=t(n);return r<c?1:c<r?-1:0}))}(o.reduce(((t,l,s)=>{const u=s+1===o.length,g=new RegExp("(^|\\W)"+l.replace(/[.*+?^${}[\]()|\\]/g,"\\$1")+("autocomplete"===c&&u||"prefix"===c?"":"($|\\W)"),r?"mg":"img");return t.filter((r=>{const c=n(r),o=function(e,t){let n=0;for(;null!==t.exec(e);)n++;return n}(c,g);return 0!==o&&(i.set(r,(i.get(r)||0)+o/c.length*Math.log(e.length/t.length)),!0)}))}),e),(e=>i.get(e)))}}})();