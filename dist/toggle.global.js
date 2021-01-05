var VueformToggle=function(e,t){"use strict";var u={name:"Toggle",emits:["input","update:modelValue","change"],props:{...{value:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1},modelValue:{validator:function(e){return e=>-1!==["number","string","boolean"].indexOf(typeof e)||null==e},required:!1}},id:{type:[String,Number],required:!1,default:"toggle"},name:{type:[String,Number],required:!1,default:"toggle"},falseValue:{type:[String,Number,Boolean],required:!1,default:!1},trueValue:{type:[String,Number,Boolean],required:!1,default:!0},offLabel:{type:[String,Object],required:!1,default:""},onLabel:{type:[String,Object],required:!1,default:""},width:{type:Number,required:!1,default:54},height:{type:Number,required:!1,default:24},speed:{type:Number,required:!1,default:300},offBackground:{type:String,required:!1,default:"#d4e0e7"},onBackground:{type:String,required:!1,default:"#41b883"},offTextColor:{type:String,required:!1,default:"#888888"},onTextColor:{type:String,required:!1,default:"#ffffff"},handleColor:{type:String,required:!1,default:"#ffffff"},fontSize:{type:String,required:!1,default:"13px"}},setup(t,u){const l=function(t,u,l){var n=e.toRefs(t),r=n.value,o=n.modelValue,a=n.falseValue,d=n.trueValue,i=void 0!==u.expose?o:r,f=function(e){u.emit("input",e),u.emit("update:modelValue",e),u.emit("change",e)};return-1!==[null,void 0,!1,0,"0","off"].indexOf(i.value)&&f(a.value),-1!==[!0,1,"1","on"].indexOf(i.value)&&f(d.value),{inputValue:i,update:f,handleInput:function(e){f(e.target.checked?d.value:a.value)}}}(t,u),n=function(t,u,l){var n=e.toRefs(t),r=n.width,o=n.height,a=n.speed,d=n.offBackground,i=n.onBackground,f=n.offTextColor,g=n.onTextColor,c=n.fontSize,p=n.handleColor;return{cssVars:e.computed((function(){return{"--toggle-off-background":d.value,"--toggle-on-background":i.value,"--toggle-off-text-color":f.value,"--toggle-on-text-color":g.value,"--toggle-handle-color":p.value,"--toggle-height":o.value+"px","--toggle-width":r.value+"px","--toggle-speed":a.value/1e3+"s","--toggle-radius":o.value/2+"px","--toggle-handle-size":o.value-6+"px","--toggle-handle-right-on":o.value-3+"px","--toggle-font-size":c.value}}))}}(t),r=function(t,u,l){var n=e.toRefs(t),r=n.trueValue,o=n.falseValue,a=l.inputValue,d=l.update,i=e.computed((function(){return a.value===r.value}));return{checked:i,toggle:function(){d(i.value?o.value:r.value)},on:function(){d(r.value)},off:function(){d(o.value)}}}(t,0,{inputValue:l.inputValue,update:l.update});return{...l,...n,...r}}};return u.render=function(e,u,l,n,r,o){return t.openBlock(),t.createBlock("div",{class:"toggle-input",style:e.cssVars},[t.createVNode("input",{type:"checkbox",name:l.name,id:l.id,checked:e.checked,trueValue:l.trueValue,falseValue:l.falseValue,onInput:u[1]||(u[1]=(...t)=>e.handleInput&&e.handleInput(...t))},null,40,["name","id","checked","trueValue","falseValue"]),t.createVNode("label",{for:l.id},[t.renderSlot(e.$slots,"on",{},(()=>[t.createVNode("span",{class:"toggle-on",innerHTML:l.onLabel},null,8,["innerHTML"])])),t.renderSlot(e.$slots,"off",{},(()=>[t.createVNode("span",{class:"toggle-off",innerHTML:l.offLabel},null,8,["innerHTML"])]))],8,["for"])],4)},u.__file="src/Toggle.vue",u}(Vue,Vue);
