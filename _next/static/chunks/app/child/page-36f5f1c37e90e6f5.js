(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[101],{6178:function(r,e,t){Promise.resolve().then(t.bind(t,8114))},8114:function(r,e,t){"use strict";t.r(e),t.d(e,{default:function(){return T}});var o=t(7437);function n(r){return"object"==typeof r&&null!=r&&!Array.isArray(r)}var i=r=>"base"===r;function a(r){return String.fromCharCode(r+(r>25?39:97))}function l(r){return function(r){let e,t="";for(e=Math.abs(r);e>52;e=e/52|0)t=a(e%52)+t;return a(e%52)+t}(function(r,e){let t=e.length;for(;t;)r=33*r^e.charCodeAt(--t);return r}(5381,r)>>>0)}var d=/\s*!(important)?/i;function s(r){return"string"==typeof r?r.replaceAll(" ","_"):r}var c=r=>{let e=new Map;return function(){for(var t=arguments.length,o=Array(t),n=0;n<t;n++)o[n]=arguments[n];let i=JSON.stringify(o);if(e.has(i))return e.get(i);let a=r(...o);return e.set(i,a),a}},g=r=>null!=r;function p(r,e){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{stop:o,getKey:i}=t;return function r(t){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(n(t)||Array.isArray(t)){let n={};for(let[d,s]of Object.entries(t)){var l;let c=null!==(l=null==i?void 0:i(d,s))&&void 0!==l?l:d,p=[...a,c];if(null==o?void 0:o(t,p))return e(t,a);let b=r(s,p);g(b)&&(n[c]=b)}return n}return e(t,a)}(r)}function b(r,e){let t=!(arguments.length>2)||void 0===arguments[2]||arguments[2],{utility:o,conditions:n}=e,{hasShorthand:i,resolveShorthand:a}=o;return p(r,r=>{var e;return Array.isArray(r)?(e=n.breakpoints.keys,r.reduce((r,t,o)=>{let n=e[o];return null!=t&&(r[n]=t),r},{})):r},{stop:r=>Array.isArray(r),getKey:t?r=>i?a(r):r:void 0})}var u={shift:r=>r,finalize:r=>r,breakpoints:{keys:[]}},m=r=>"string"==typeof r?r.replaceAll(/[\n\s]+/g," "):r,h=/([A-Z])/g,f=/^ms-/,k=c(r=>r.startsWith("--")?r:r.replace(h,"-$1").replace(f,"-ms-").toLowerCase());new RegExp("^(".concat("min|max|clamp|calc",")\\(.*\\)"));var _="(?:".concat("cm,mm,Q,in,pc,pt,px,em,ex,ch,rem,lh,rlh,vw,vh,vmin,vmax,vb,vi,svw,svh,lvw,lvh,dvw,dvh,cqw,cqh,cqi,cqb,cqmin,cqmax,%".split(",").join("|"),")");new RegExp("^[+-]?[0-9]*.?[0-9]+(?:[eE][+-]?[0-9]+)?".concat(_,"$"));let x=new Set("_hover,_focus,_focusWithin,_focusVisible,_disabled,_active,_visited,_target,_readOnly,_readWrite,_empty,_checked,_enabled,_expanded,_highlighted,_before,_after,_firstLetter,_firstLine,_marker,_selection,_file,_backdrop,_first,_last,_only,_even,_odd,_firstOfType,_lastOfType,_onlyOfType,_peerFocus,_peerHover,_peerActive,_peerFocusWithin,_peerFocusVisible,_peerDisabled,_peerChecked,_peerInvalid,_peerExpanded,_peerPlaceholderShown,_groupFocus,_groupHover,_groupActive,_groupFocusWithin,_groupFocusVisible,_groupDisabled,_groupChecked,_groupExpanded,_groupInvalid,_indeterminate,_required,_valid,_invalid,_autofill,_inRange,_outOfRange,_placeholder,_placeholderShown,_pressed,_selected,_default,_optional,_open,_closed,_fullscreen,_loading,_currentPage,_currentStep,_motionReduce,_motionSafe,_print,_landscape,_portrait,_dark,_light,_osDark,_osLight,_highContrast,_lessContrast,_moreContrast,_ltr,_rtl,_scrollbar,_scrollbarThumb,_scrollbarTrack,_horizontal,_vertical,base".split(","));function v(r){return x.has(r)||/^@|&|&$/.test(r)}let y=/^_/,S=/&|@/,w=new Map;"aspectRatio:aspect,boxDecorationBreak:decoration,zIndex:z,boxSizing:box,objectPosition:object,objectFit:object,overscrollBehavior:overscroll,overscrollBehaviorX:overscroll-x,overscrollBehaviorY:overscroll-y,position:pos,top:top,left:left,insetInline:inset-x,insetBlock:inset-y,inset:inset,insetBlockEnd:inset-b,insetBlockStart:inset-t,insetInlineEnd:end,insetInlineStart:start,right:right,bottom:bottom,float:float,visibility:vis,display:d,hideFrom:hide,hideBelow:show,flexBasis:basis,flex:flex,flexDirection:flex,flexGrow:grow,flexShrink:shrink,gridTemplateColumns:grid-cols,gridTemplateRows:grid-rows,gridColumn:col-span,gridRow:row-span,gridColumnStart:col-start,gridColumnEnd:col-end,gridAutoFlow:grid-flow,gridAutoColumns:auto-cols,gridAutoRows:auto-rows,gap:gap,gridGap:gap,gridRowGap:gap-x,gridColumnGap:gap-y,rowGap:gap-x,columnGap:gap-y,justifyContent:justify,alignContent:content,alignItems:items,alignSelf:self,padding:p,paddingLeft:pl,paddingRight:pr,paddingTop:pt,paddingBottom:pb,paddingBlock:py,paddingBlockEnd:pb,paddingBlockStart:pt,paddingInline:px,paddingInlineEnd:pe,paddingInlineStart:ps,marginLeft:ml,marginRight:mr,marginTop:mt,marginBottom:mb,margin:m,marginBlock:my,marginBlockEnd:mb,marginBlockStart:mt,marginInline:mx,marginInlineEnd:me,marginInlineStart:ms,outlineWidth:ring,outlineColor:ring,outline:ring,outlineOffset:ring,divideX:divide-x,divideY:divide-y,divideColor:divide,divideStyle:divide,width:w,inlineSize:w,minWidth:min-w,minInlineSize:min-w,maxWidth:max-w,maxInlineSize:max-w,height:h,blockSize:h,minHeight:min-h,minBlockSize:min-h,maxHeight:max-h,maxBlockSize:max-b,color:text,fontFamily:font,fontSize:fs,fontWeight:font,fontSmoothing:smoothing,fontVariantNumeric:numeric,letterSpacing:tracking,lineHeight:leading,textAlign:text,textDecoration:text-decor,textDecorationColor:text-decor,textEmphasisColor:text-emphasis,textDecorationStyle:decoration,textDecorationThickness:decoration,textUnderlineOffset:underline-offset,textTransform:text,textIndent:indent,textShadow:text-shadow,textShadowColor:text-shadow,textOverflow:text,verticalAlign:align,wordBreak:break,textWrap:text,truncate:truncate,lineClamp:clamp,listStyleType:list,listStylePosition:list,listStyleImage:list-img,backgroundPosition:bg,backgroundPositionX:bg-x,backgroundPositionY:bg-y,backgroundAttachment:bg,backgroundClip:bg-clip,background:bg,backgroundColor:bg,backgroundOrigin:bg-origin,backgroundImage:bg-img,backgroundRepeat:bg-repeat,backgroundBlendMode:bg-blend,backgroundSize:bg,backgroundGradient:bg-gradient,textGradient:text-gradient,gradientFrom:from,gradientTo:to,gradientVia:via,borderRadius:rounded,borderTopLeftRadius:rounded-tl,borderTopRightRadius:rounded-tr,borderBottomRightRadius:rounded-br,borderBottomLeftRadius:rounded-bl,borderTopRadius:rounded-t,borderRightRadius:rounded-r,borderBottomRadius:rounded-b,borderLeftRadius:rounded-l,borderStartStartRadius:rounded-ss,borderStartEndRadius:rounded-se,borderStartRadius:rounded-s,borderEndStartRadius:rounded-es,borderEndEndRadius:rounded-ee,borderEndRadius:rounded-e,border:border,borderWidth:border-w,borderTopWidth:border-tw,borderLeftWidth:border-lw,borderRightWidth:border-rw,borderBottomWidth:border-bw,borderColor:border,borderInline:border-x,borderInlineWidth:border-x,borderInlineColor:border-x,borderBlock:border-y,borderBlockWidth:border-y,borderBlockColor:border-y,borderLeft:border-l,borderLeftColor:border-l,borderInlineStart:border-s,borderInlineStartWidth:border-s,borderInlineStartColor:border-s,borderRight:border-r,borderRightColor:border-r,borderInlineEnd:border-e,borderInlineEndWidth:border-e,borderInlineEndColor:border-e,borderTop:border-t,borderTopColor:border-t,borderBottom:border-b,borderBottomColor:border-b,borderBlockEnd:border-be,borderBlockEndColor:border-be,borderBlockStart:border-bs,borderBlockStartColor:border-bs,boxShadow:shadow,boxShadowColor:shadow,mixBlendMode:mix-blend,filter:filter,brightness:brightness,contrast:contrast,grayscale:grayscale,hueRotate:hue-rotate,invert:invert,saturate:saturate,sepia:sepia,dropShadow:drop-shadow,blur:blur,backdropFilter:backdrop,backdropBlur:backdrop-blur,backdropBrightness:backdrop-brightness,backdropContrast:backdrop-contrast,backdropGrayscale:backdrop-grayscale,backdropHueRotate:backdrop-hue-rotate,backdropInvert:backdrop-invert,backdropOpacity:backdrop-opacity,backdropSaturate:backdrop-saturate,backdropSepia:backdrop-sepia,borderCollapse:border,borderSpacing:border-spacing,borderSpacingX:border-spacing-x,borderSpacingY:border-spacing-y,tableLayout:table,transitionTimingFunction:ease,transitionDelay:delay,transitionDuration:duration,transitionProperty:transition-prop,transition:transition,animation:animation,animationName:animation-name,animationDelay:animation-delay,transformOrigin:origin,scale:scale,scaleX:scale-x,scaleY:scale-y,translate:translate,translateX:translate-x,translateY:translate-y,accentColor:accent,caretColor:caret,scrollBehavior:scroll,scrollbar:scrollbar,scrollMargin:scroll-m,scrollMarginLeft:scroll-ml,scrollMarginRight:scroll-mr,scrollMarginTop:scroll-mt,scrollMarginBottom:scroll-mb,scrollMarginBlock:scroll-my,scrollMarginBlockEnd:scroll-mb,scrollMarginBlockStart:scroll-mt,scrollMarginInline:scroll-mx,scrollMarginInlineEnd:scroll-me,scrollMarginInlineStart:scroll-ms,scrollPadding:scroll-p,scrollPaddingBlock:scroll-pb,scrollPaddingBlockStart:scroll-pt,scrollPaddingBlockEnd:scroll-pb,scrollPaddingInline:scroll-px,scrollPaddingInlineEnd:scroll-pe,scrollPaddingInlineStart:scroll-ps,scrollPaddingLeft:scroll-pl,scrollPaddingRight:scroll-pr,scrollPaddingTop:scroll-pt,scrollPaddingBottom:scroll-pb,scrollSnapAlign:snap,scrollSnapStop:snap,scrollSnapType:snap,scrollSnapStrictness:strictness,scrollSnapMargin:snap-m,scrollSnapMarginTop:snap-mt,scrollSnapMarginBottom:snap-mb,scrollSnapMarginLeft:snap-ml,scrollSnapMarginRight:snap-mr,touchAction:touch,userSelect:select,fill:fill,stroke:stroke,strokeWidth:stroke-w,srOnly:sr,debug:debug,appearance:appearance,backfaceVisibility:backface,clipPath:clip-path,hyphens:hyphens,mask:mask,maskImage:mask-image,maskSize:mask-size,textSizeAdjust:text-size-adjust,container:cq,containerName:cq-name,containerType:cq-type".split(",").forEach(r=>{let[e,t]=r.split(":");w.set(e,t)});let B={conditions:{shift:function(r){return r.sort((r,e)=>{let t=v(r),o=v(e);return t&&!o?1:!t&&o?-1:0})},finalize:function(r){return r.map(r=>x.has(r)?r.replace(y,""):S.test(r)?"[".concat(s(r.trim()),"]"):r)},breakpoints:{keys:["base"]}},utility:{transform:(r,e)=>({className:"".concat(w.get(r)||k(r),"_").concat(s(e))}),toHash:(r,e)=>e(r.join(":")),resolveShorthand:r=>r}},C=function(r){let{utility:e,hash:t,conditions:o=u}=r,n=r=>[e.prefix,r].filter(Boolean).join("-"),a=(r,i)=>{let a;if(t){let t=[...o.finalize(r),i];a=n(e.toHash(t,l))}else a=[...o.finalize(r),n(i)].join(":");return a};return c(function(){let{base:t,...n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},l=b(Object.assign(n,t),r),s=new Set;return p(l,(r,t)=>{var n;let l="string"==typeof r&&d.test(r);if(null==r)return;let[c,...g]=o.shift(t),p=a(g.slice().filter(r=>!i(r)),e.transform(c,"string"==typeof(n=m(r))?n.replace(d,"").trim():n).className);l&&(p="".concat(p,"!")),s.add(p)}),Array.from(s).join(" ")})}(B),R=function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return C(I(...e))};R.raw=function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return I(...e)};let{mergeCss:I,assignCss:E}=function(r){function e(e){let t=function(){for(var r=arguments.length,e=Array(r),t=0;t<r;t++)e[t]=arguments[t];return e.filter(r=>n(r)&&Object.keys(Object.fromEntries(Object.entries(null!=r?r:{}).filter(r=>{let[e,t]=r;return void 0!==t}))).length>0)}(...e);return 1===t.length?t:t.map(e=>b(e,r))}return{mergeCss:c(function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return function r(){for(var e=arguments.length,t=Array(e),o=0;o<e;o++)t[o]=arguments[o];return t.filter(Boolean).reduce((e,t)=>(Object.keys(t).forEach(o=>{let i=e[o],a=t[o];n(i)&&n(a)?e[o]=r(i,a):e[o]=a}),e),{})}(...e(t))}),assignCss:function(){for(var r=arguments.length,t=Array(r),o=0;o<r;o++)t[o]=arguments[o];return Object.assign({},...e(t))}}}(B);var A=t(2265);let j=r=>{let{children:e}=r;return(0,o.jsx)("div",{className:R({maxWidth:"full",marginInline:"12",padding:"12"}),children:e})};function T(){let[r,e]=(0,A.useState)(!1);return(0,o.jsxs)(j,{children:[(0,o.jsx)("p",{className:R({fontSize:"l",padding:"8",border:"1px solid token(colors.green.100)","&:hover":{backgroundColor:"green.500"}}),children:"Hello World"}),(0,o.jsx)("p",{className:R({borderStyle:"dotted",borderWidth:"medium",boxShadow:"lg",fontSize:"[12px]",paddingBlock:"8",paddingInline:"4",width:"full"}),children:"test"}),(0,o.jsx)("button",{onMouseEnter:function(){e(!0)},onMouseLeave:function(){e(!1)},className:R({padding:"8",border:"1px solid token(colors.green.100)",backgroundColor:r?"green.500":"green.100"}),children:"BUTTON"}),(0,o.jsx)("div",{children:(0,o.jsx)("img",{className:R({display:"inline",width:"1/3",border:"2px solid token(colors.green.100)",verticalAlign:"top",aspectRatio:"rec-3:1"}),src:"https://via.placeholder.com/450x150",alt:""})})]})}}},function(r){r.O(0,[971,69,744],function(){return r(r.s=6178)}),_N_E=r.O()}]);