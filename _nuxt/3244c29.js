(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{411:function(e,t,r){var content=r(489);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(26).default)("02d83fa8",content,!0,{sourceMap:!1})},488:function(e,t,r){"use strict";r(411)},489:function(e,t,r){var o=r(25)((function(i){return i[1]}));o.push([e.i,'.reviews[data-v-8485986c]{color:var(--light)}.reviews .container[data-v-8485986c]{background:var(--main);border-radius:max(30px,min(4.1666666667cqi,60px));padding-bottom:max(50px,min(6.9444444444cqi,100px));padding-top:max(50px,min(6.9444444444cqi,100px))}@media(min-width:768px){.reviews__row[data-v-8485986c]{align-items:center;display:flex;justify-content:space-between}}.reviews__row.active .reviews__play[data-v-8485986c],.reviews__row.active .reviews__video[data-v-8485986c]:after{opacity:0;visibility:hidden}.reviews__row.active .reviews__info[data-v-8485986c]{left:0}.reviews__video[data-v-8485986c]{background:#f5f5f5;border-radius:max(30px,min(4.1666666667cqi,60px));margin-bottom:30px;overflow:hidden;position:relative;width:calc(100% - 20px)}@media(max-width:767px){.reviews__video[data-v-8485986c]{margin-left:auto;margin-right:auto}}@media(min-width:768px){.reviews__video[data-v-8485986c]{margin-bottom:0;width:57.1929824561%}}.reviews__video iframe[data-v-8485986c],.reviews__video video[data-v-8485986c]{display:block;height:auto;width:100%}.reviews__video[data-v-8485986c]:after{background:#f5f5f5;content:"";height:100%;left:0;position:absolute;top:0;transition:.3s ease;width:100%;z-index:2}.reviews__info[data-v-8485986c]{border-radius:max(30px,min(4.1666666667cqi,60px));color:var(--light);font-size:16px;font-weight:400;position:relative;transition:.5s ease;z-index:2}@media(min-width:768px){.reviews__info[data-v-8485986c]{background:var(--second);left:-67px;padding:43px 50px;width:48.6842105263%}}.reviews__play[data-v-8485986c]{background:none;border:none;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);transition:.3s ease;z-index:3}.reviews h2[data-v-8485986c]{margin-bottom:20px}@media(max-width:767px){.reviews h2[data-v-8485986c]{text-align:center}}.reviews p[data-v-8485986c]{margin-bottom:max(30px,min(4.1666666667cqi,60px))}@media(max-width:767px){.reviews p[data-v-8485986c]{text-align:center}}.reviews__slider[data-v-8485986c]{position:relative}.reviews__menu[data-v-8485986c]{display:flex;justify-content:space-between;position:absolute;z-index:10}@media(max-width:767px){.reviews__menu[data-v-8485986c]{left:-15px;right:-15px;top:70px}}@media(min-width:768px){.reviews__menu[data-v-8485986c]{bottom:10px;right:7%;width:375px}}.reviews__btn[data-v-8485986c]{background:none;border:none;margin:0;padding:0}.reviews__btn[data-v-8485986c]:active{opacity:.5}.reviews__btn[data-v-8485986c]:disabled{cursor:default;opacity:.3}@media(max-width:767px){.reviews__nav[data-v-8485986c]{display:none}}.reviews__nav button[data-v-8485986c]{background:var(--light);border:none;border-radius:50%;height:8px;margin:0;padding:0;width:8px}.reviews__nav button.tns-nav-active[data-v-8485986c]{border-radius:4px;height:2px;transition:width .5s ease .1s,height .3s ease;width:100px}.reviews__nav button[data-v-8485986c]:not(:first-child){margin-left:30px}',""]),o.locals={},e.exports=o},519:function(e,t,r){"use strict";r.r(t);var o=r(29),n={data:function(){var e;return{reviewsSldier:(e={items:1,loop:!1,nav:!1,navPosition:"bottom"},Object(o.a)(e,"nav",!0),Object(o.a)(e,"navContainer","#reviews__nav"),Object(o.a)(e,"controlsPosition","bottom"),Object(o.a)(e,"prevButton",".reviews__btn-prev"),Object(o.a)(e,"nextButton",".reviews__btn-next"),Object(o.a)(e,"gutter",5),e),items:[{video:"https://www.w3schools.com/html/mov_bbb.mp4",msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare"},{video:"https://www.w3schools.com/html/mov_bbb.mp4",msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare"},{video:"https://www.w3schools.com/html/mov_bbb.mp4",msg:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque commodo vulputate metus, vel facilisis diam mattis vitae. Aliquam elit tortor, pretium id pharetra non, gravida sit amet est. Aliquam hendrerit augue massa, at vehicula urna mollis quis. Etiam eros quam, molestie eu ipsum vitae, ornare"}]}},methods:{playVideo:function(e){var t=this;this.$refs["reviews__video_".concat(e)][0].play(),this.$refs["reviews__".concat(e)][0].classList.add("active"),this.$refs["reviews__video_".concat(e)][0].addEventListener("ended",(function(){t.$refs["reviews__".concat(e)][0].classList.remove("active")}),!1)}}},v=(r(488),r(5)),component=Object(v.a)(n,(function(){var e=this,t=e._self._c;return t("section",{staticClass:"reviews"},[t("div",{staticClass:"container"},[t("h2",[e._v("ОТЗЫВЫ")]),e._v(" "),t("p",[e._v("Более 3000 завершенных проектов")]),e._v(" "),t("div",{staticClass:"reviews__slider"},[t("vue-tiny-slider",e._b({ref:"reviewsSldier"},"vue-tiny-slider",e.reviewsSldier,!1),e._l(e.items,(function(r,o){return t("div",{staticClass:"reviews__item"},[t("div",{ref:"reviews__".concat(o),refInFor:!0,staticClass:"reviews__row"},[t("div",{staticClass:"reviews__video"},[t("video",{ref:"reviews__video_".concat(o),refInFor:!0,attrs:{width:"100%",controls:"",src:r.video}}),e._v(" "),t("button",{key:"reviews__play_".concat(o),staticClass:"reviews__play",on:{click:function(t){return t.preventDefault(),e.playVideo(o)}}},[t("svg",{attrs:{width:"54",height:"55",viewBox:"0 0 54 55",fill:"none",xmlns:"http://www.w3.org/2000/svg"}},[t("path",{attrs:{d:"M53 27.5009C53 41.9022 41.3569 53.5722 27 53.5722C12.6431 53.5722 1 41.9022 1 27.5009C1 13.0997 12.6431 1.42969 27 1.42969C41.3569 1.42969 53 13.0997 53 27.5009Z",stroke:"#AAAAAA","stroke-width":"2"}}),t("path",{attrs:{d:"M22.4156 16.2353L21.236 17.4149C21.0785 17.5721 21 17.7531 21 17.9579C21 18.1621 21.0785 18.343 21.236 18.5002L30.5086 27.7733L21.2363 37.046C21.0788 37.2033 21.0002 37.3842 21.0002 37.5887C21.0002 37.7932 21.0788 37.9742 21.2363 38.1314L22.4159 39.3109C22.5731 39.4684 22.7541 39.5469 22.9586 39.5469C23.163 39.5469 23.344 39.4681 23.5011 39.3109L34.4962 28.316C34.6535 28.1588 34.7321 27.9778 34.7321 27.7733C34.7321 27.5689 34.6535 27.3881 34.4962 27.231L23.5011 16.2353C23.3439 16.0781 23.1629 16 22.9586 16C22.7541 16 22.5731 16.0781 22.4156 16.2353Z",fill:"#AAAAAA"}})])])]),e._v(" "),t("div",{staticClass:"reviews__info",domProps:{innerHTML:e._s(r.msg)}})])])})),0),e._v(" "),t("div",{staticClass:"reviews__menu"},[t("button",{staticClass:"reviews__btn reviews__btn-prev"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"24",viewBox:"0 0 14 24",fill:"none"}},[t("path",{attrs:{d:"M12.3169 23.3116L13.4964 22.132C13.6539 21.9748 13.7324 21.7937 13.7324 21.589C13.7324 21.3848 13.6539 21.2038 13.4964 21.0466L4.22381 11.7736L13.4962 2.50089C13.6537 2.34362 13.7322 2.16264 13.7322 1.95818C13.7322 1.75365 13.6537 1.57266 13.4962 1.41548L12.3165 0.236023C12.1593 0.0785091 11.9784 0 11.7738 0C11.5695 0 11.3885 0.0787571 11.2313 0.236023L0.236205 11.2309C0.0789385 11.388 0.000346184 11.5691 0.000346184 11.7736C0.000346184 11.978 0.0789385 12.1588 0.236205 12.3159L11.2313 23.3116C11.3886 23.4688 11.5695 23.5469 11.7738 23.5469C11.9784 23.5469 12.1593 23.4688 12.3169 23.3116Z",fill:"white"}})])]),e._v(" "),t("div",{staticClass:"reviews__nav",attrs:{id:"reviews__nav"}},e._l(e.items,(function(e,r){return t("button")})),0),e._v(" "),t("button",{staticClass:"reviews__btn reviews__btn-next"},[t("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"24",viewBox:"0 0 14 24",fill:"none"}},[t("path",{attrs:{d:"M1.41556 0.235277L0.236023 1.4149C0.0785091 1.57208 0 1.75315 0 1.95785C0 2.16206 0.0785091 2.34304 0.236023 2.50023L9.50861 11.7733L0.236271 21.046C0.0787572 21.2033 0.000247787 21.3842 0.000247787 21.5887C0.000247787 21.7932 0.0787572 21.9742 0.236271 22.1314L1.41589 23.3109C1.57308 23.4684 1.75406 23.5469 1.9586 23.5469C2.16297 23.5469 2.34395 23.4681 2.50114 23.3109L13.4962 12.316C13.6535 12.1588 13.7321 11.9778 13.7321 11.7733C13.7321 11.5689 13.6535 11.3881 13.4962 11.231L2.50114 0.235277C2.34387 0.0780945 2.16289 0 1.9586 0C1.75406 0 1.57308 0.0780945 1.41556 0.235277Z",fill:"white"}})])])])],1)])])}),[],!1,null,"8485986c",null);t.default=component.exports}}]);