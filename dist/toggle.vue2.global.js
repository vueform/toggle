var VueformToggle=function(e){"use strict";function l(e,l,a,t,n,d,u,o,i,r){"boolean"!=typeof u&&(i=o,o=u,u=!1);const c="function"==typeof a?a.options:a;let s;if(e&&e.render&&(c.render=e.render,c.staticRenderFns=e.staticRenderFns,c._compiled=!0,n&&(c.functional=!0)),t&&(c._scopeId=t),d?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),l&&l.call(this,i(e)),e&&e._registeredComponents&&e._registeredComponents.add(d)},c._ssrRegister=s):l&&(s=u?function(e){l.call(this,r(e,this.$root.$options.shadowRoot))}:function(e){l.call(this,o(e))}),s)if(c.functional){const e=c.render;c.render=function(l,a){return s.call(a),e(l,a)}}else{const e=c.beforeCreate;c.beforeCreate=e?[].concat(e,s):[s]}return a}const a={name:"Toggle",emits:["input","update:modelValue","change"],props:{...{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1}},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},disabled:{type:Boolean,required:!1,default:!1},required:{type:Boolean,required:!1,default:!1},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},onLabel:{type:[String,Object],required:!1,default:""},offLabel:{type:[String,Object],required:!1,default:""},classes:{type:Object,required:!1,default:()=>({})},labelledby:{type:String,required:!1},describedby:{type:String,required:!1},aria:{required:!1,type:Object,default:()=>({})}},setup(l,a){const t=function(l,a,t){const{value:n,modelValue:d,falseValue:u,trueValue:o,disabled:i}=e.toRefs(l),r=d&&void 0!==d.value?d:n,c=e.computed((()=>r.value===o.value)),s=e=>{a.emit("input",e),a.emit("update:modelValue",e),a.emit("change",e)},f=()=>{s(o.value)},g=()=>{s(u.value)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(r.value)&&-1===[u.value,o.value].indexOf(r.value)&&g(),-1!==[!0,1,"1","on"].indexOf(r.value)&&-1===[u.value,o.value].indexOf(r.value)&&f(),{externalValue:r,checked:c,update:s,check:f,uncheck:g,handleInput:e=>{s(e.target.checked?o.value:u.value)},handleClick:()=>{i.value||(c.value?g():f())}}}(l,a),n=function(l,a,t){const{trueValue:n,falseValue:d,onLabel:u,offLabel:o}=e.toRefs(l),i=t.checked,r=t.update;return{label:e.computed((()=>{let e=i.value?u.value:o.value;return e||(e="&nbsp;"),e})),toggle:()=>{r(i.value?d.value:n.value)},on:()=>{r(n.value)},off:()=>{r(d.value)}}}(l,0,{checked:t.checked,update:t.update}),d=function(l,a,t){const n=e.toRefs(l),d=n.disabled,u=t.checked,o=e.computed((()=>({container:"toggle-container",toggle:"toggle",toggleOn:"toggle-on",toggleOff:"toggle-off",toggleOnDisabled:"toggle-on-disabled",toggleOffDisabled:"toggle-off-disabled",handle:"toggle-handle",handleOn:"toggle-handle-on",handleOff:"toggle-handle-off",handleOnDisabled:"toggle-handle-on-disabled",handleOffDisabled:"toggle-handle-off-disabled",label:"toggle-label",...n.classes.value})));return{classList:e.computed((()=>({container:o.value.container,toggle:[o.value.toggle,d.value?u.value?o.value.toggleOnDisabled:o.value.toggleOffDisabled:u.value?o.value.toggleOn:o.value.toggleOff],handle:[o.value.handle,d.value?u.value?o.value.handleOnDisabled:o.value.handleOffDisabled:u.value?o.value.handleOn:o.value.handleOff],label:o.value.label})))}}(l,0,{checked:t.checked}),u=function(l,a,t){const{disabled:n}=e.toRefs(l),d=t.check,u=t.uncheck,o=t.checked;return{handleSpace:()=>{n.value||(o.value?u():d())}}}(l,0,{check:t.check,uncheck:t.uncheck,checked:t.checked});return{...t,...d,...n,...u}}};var t=function(){var e=this,l=e.$createElement,a=e._self._c||l;return a("div",e._b({class:e.classList.container,attrs:{tabindex:e.disabled?void 0:0,"aria-checked":e.checked,"aria-describedby":e.describedby,"aria-labelledby":e.labelledby,role:"switch"},on:{keypress:function(l){return!l.type.indexOf("key")&&e._k(l.keyCode,"space",32,l.key,[" ","Spacebar"])?null:(l.preventDefault(),e.handleSpace.apply(null,arguments))}}},"div",e.aria,!1),[a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{type:"checkbox",id:e.id,name:e.name,disabled:e.disabled},domProps:{value:e.trueValue,checked:e.checked}}),e._v(" "),a("div",{class:e.classList.toggle,on:{click:e.handleClick}},[a("span",{class:e.classList.handle}),e._v(" "),e._t("label",(function(){return[a("span",{class:e.classList.label,domProps:{innerHTML:e._s(e.label)}})]}),{checked:e.checked,classList:e.classList}),e._v(" "),e.required?a("input",{style:{appearance:"none",height:"1px",margin:"0",padding:"0",fontSize:"0",background:"transparent",position:"absolute",width:"100%",bottom:"0",outline:"none"},attrs:{type:"checkbox","aria-hidden":"true",tabindex:"-1",required:""},domProps:{checked:e.checked}}):e._e()],2)])};t._withStripped=!0;return l({render:t,staticRenderFns:[]},undefined,a,undefined,false,undefined,!1,void 0,void 0,void 0)}(Vue);
