(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{326:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{},o=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(a).filter(function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),o.forEach(function(t){n(e,t,a[t])})}return e}a.d(t,"a",function(){return o})},329:function(e,t,a){"use strict";var n=a(6),o=a(39),i=a(15),s=a(323),r=a(0),c=a.n(r),l=a(70),u=a.n(l),p=a(321),h=a.n(p),d=a(322),m={active:u.a.bool,"aria-label":u.a.string,block:u.a.bool,color:u.a.string,disabled:u.a.bool,outline:u.a.bool,tag:d.q,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),onClick:u.a.func,size:u.a.string,children:u.a.node,className:u.a.string,cssModule:u.a.object,close:u.a.bool},b=function(e){function t(t){var a;return(a=e.call(this,t)||this).onClick=a.onClick.bind(Object(s.a)(Object(s.a)(a))),a}Object(i.a)(t,e);var a=t.prototype;return a.onClick=function(e){this.props.disabled?e.preventDefault():this.props.onClick&&this.props.onClick(e)},a.render=function(){var e=this.props,t=e.active,a=e["aria-label"],i=e.block,s=e.className,r=e.close,l=e.cssModule,u=e.color,p=e.outline,m=e.size,b=e.tag,g=e.innerRef,f=Object(o.a)(e,["active","aria-label","block","className","close","cssModule","color","outline","size","tag","innerRef"]);r&&"undefined"===typeof f.children&&(f.children=c.a.createElement("span",{"aria-hidden":!0},"\xd7"));var v="btn"+(p?"-outline":"")+"-"+u,O=Object(d.m)(h()(s,{close:r},r||"btn",r||v,!!m&&"btn-"+m,!!i&&"btn-block",{active:t,disabled:this.props.disabled}),l);f.href&&"button"===b&&(b="a");var j=r?"Close":null;return c.a.createElement(b,Object(n.a)({type:"button"===b&&f.onClick?"button":void 0},f,{className:O,ref:g,onClick:this.onClick,"aria-label":a||j}))},t}(c.a.Component);b.propTypes=m,b.defaultProps={color:"secondary",tag:"button"},t.a=b},330:function(e,t,a){"use strict";var n=a(6),o=a(39),i=a(0),s=a.n(i),r=a(70),c=a.n(r),l=a(321),u=a.n(l),p=a(322),h={tag:p.q,inverse:c.a.bool,color:c.a.string,block:Object(p.h)(c.a.bool,'Please use the props "body"'),body:c.a.bool,outline:c.a.bool,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var t=e.className,a=e.cssModule,i=e.color,r=e.block,c=e.body,l=e.inverse,h=e.outline,d=e.tag,m=e.innerRef,b=Object(o.a)(e,["className","cssModule","color","block","body","inverse","outline","tag","innerRef"]),g=Object(p.m)(u()(t,"card",!!l&&"text-white",!(!r&&!c)&&"card-body",!!i&&(h?"border":"bg")+"-"+i),a);return s.a.createElement(d,Object(n.a)({},b,{className:g,ref:m}))};d.propTypes=h,d.defaultProps={tag:"div"},t.a=d},331:function(e,t,a){"use strict";var n=a(6),o=a(39),i=a(0),s=a.n(i),r=a(70),c=a.n(r),l=a(321),u=a.n(l),p=a(322),h={tag:p.q,className:c.a.string,cssModule:c.a.object,innerRef:c.a.oneOfType([c.a.object,c.a.string,c.a.func])},d=function(e){var t=e.className,a=e.cssModule,i=e.innerRef,r=e.tag,c=Object(o.a)(e,["className","cssModule","innerRef","tag"]),l=Object(p.m)(u()(t,"card-body"),a);return s.a.createElement(r,Object(n.a)({},c,{className:l,ref:i}))};d.propTypes=h,d.defaultProps={tag:"div"},t.a=d},332:function(e,t,a){"use strict";var n=a(6),o=a(39),i=a(0),s=a.n(i),r=a(70),c=a.n(r),l=a(321),u=a.n(l),p=a(322),h={tag:p.q,className:c.a.string,cssModule:c.a.object},d=function(e){var t=e.className,a=e.cssModule,i=e.tag,r=Object(o.a)(e,["className","cssModule","tag"]),c=Object(p.m)(u()(t,"card-header"),a);return s.a.createElement(i,Object(n.a)({},r,{className:c}))};d.propTypes=h,d.defaultProps={tag:"div"},t.a=d},380:function(e,t,a){"use strict";var n=a(6),o=a(15),i=a(323),s=a(0),r=a.n(s),c=a(70),l=a.n(c),u=a(326),p=a(39),h=a(106),d=a.n(h),m=a(321),b=a.n(m),g=a(333),f=a(322),v={children:l.a.node.isRequired,className:l.a.string,placement:l.a.string,placementPrefix:l.a.string,arrowClassName:l.a.string,hideArrow:l.a.bool,tag:f.q,isOpen:l.a.bool.isRequired,cssModule:l.a.object,offset:l.a.oneOfType([l.a.string,l.a.number]),fallbackPlacement:l.a.oneOfType([l.a.string,l.a.array]),flip:l.a.bool,container:f.r,target:f.r.isRequired,modifiers:l.a.object,boundariesElement:l.a.oneOfType([l.a.string,f.a])},O={popperManager:l.a.object.isRequired},j=function(e){function t(t){var a;return(a=e.call(this,t)||this).handlePlacementChange=a.handlePlacementChange.bind(Object(i.a)(Object(i.a)(a))),a.setTargetNode=a.setTargetNode.bind(Object(i.a)(Object(i.a)(a))),a.getTargetNode=a.getTargetNode.bind(Object(i.a)(Object(i.a)(a))),a.getRef=a.getRef.bind(Object(i.a)(Object(i.a)(a))),a.state={},a}Object(o.a)(t,e);var a=t.prototype;return a.getChildContext=function(){return{popperManager:{setTargetNode:this.setTargetNode,getTargetNode:this.getTargetNode}}},a.componentDidUpdate=function(){this._element&&this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus&&this._element.childNodes[0].focus()},a.setTargetNode=function(e){this.targetNode=e},a.getTargetNode=function(){return this.targetNode},a.getContainerNode=function(){return Object(f.k)(this.props.container)},a.getRef=function(e){this._element=e},a.handlePlacementChange=function(e){return this.state.placement!==e.placement&&this.setState({placement:e.placement}),e},a.renderChildren=function(){var e=this.props,t=e.cssModule,a=e.children,o=(e.isOpen,e.flip),i=(e.target,e.offset),s=e.fallbackPlacement,c=e.placementPrefix,l=e.arrowClassName,h=e.hideArrow,d=e.className,m=e.tag,v=(e.container,e.modifiers),O=e.boundariesElement,j=Object(p.a)(e,["cssModule","children","isOpen","flip","target","offset","fallbackPlacement","placementPrefix","arrowClassName","hideArrow","className","tag","container","modifiers","boundariesElement"]),y=Object(f.m)(b()("arrow",l),t),T=(this.state.placement||j.placement).split("-")[0],E=Object(f.m)(b()(d,c?c+"-"+T:T),this.props.cssModule),N=Object(u.a)({offset:{offset:i},flip:{enabled:o,behavior:s},preventOverflow:{boundariesElement:O},update:{enabled:!0,order:950,fn:this.handlePlacementChange}},v);return r.a.createElement(g.c,Object(n.a)({modifiers:N},j,{component:m,className:E,"x-placement":this.state.placement||j.placement}),a,!h&&r.a.createElement(g.a,{className:y}))},a.render=function(){return this.setTargetNode(Object(f.k)(this.props.target)),this.props.isOpen?"inline"===this.props.container?this.renderChildren():d.a.createPortal(r.a.createElement("div",{ref:this.getRef},this.renderChildren()),this.getContainerNode()):null},t}(r.a.Component);j.propTypes=v,j.defaultProps={boundariesElement:"scrollParent",placement:"auto",hideArrow:!1,isOpen:!1,offset:0,fallbackPlacement:"flip",flip:!0,container:"body",modifiers:{}},j.childContextTypes=O;var y=j;a.d(t,"b",function(){return T});var T={placement:l.a.oneOf(f.b),target:f.r.isRequired,container:f.r,isOpen:l.a.bool,disabled:l.a.bool,hideArrow:l.a.bool,boundariesElement:l.a.oneOfType([l.a.string,f.a]),className:l.a.string,innerClassName:l.a.string,arrowClassName:l.a.string,cssModule:l.a.object,toggle:l.a.func,autohide:l.a.bool,placementPrefix:l.a.string,delay:l.a.oneOfType([l.a.shape({show:l.a.number,hide:l.a.number}),l.a.number]),modifiers:l.a.object,offset:l.a.oneOfType([l.a.string,l.a.number]),innerRef:l.a.oneOfType([l.a.func,l.a.string,l.a.object]),trigger:l.a.string},E={show:0,hide:250},N={isOpen:!1,hideArrow:!1,autohide:!1,delay:E,toggle:function(){},trigger:"click"};function w(e,t){return t&&(e===t||t.contains(e))}var C=function(e){function t(t){var a;return(a=e.call(this,t)||this)._target=null,a.addTargetEvents=a.addTargetEvents.bind(Object(i.a)(Object(i.a)(a))),a.handleDocumentClick=a.handleDocumentClick.bind(Object(i.a)(Object(i.a)(a))),a.removeTargetEvents=a.removeTargetEvents.bind(Object(i.a)(Object(i.a)(a))),a.toggle=a.toggle.bind(Object(i.a)(Object(i.a)(a))),a.showWithDelay=a.showWithDelay.bind(Object(i.a)(Object(i.a)(a))),a.hideWithDelay=a.hideWithDelay.bind(Object(i.a)(Object(i.a)(a))),a.onMouseOverTooltipContent=a.onMouseOverTooltipContent.bind(Object(i.a)(Object(i.a)(a))),a.onMouseLeaveTooltipContent=a.onMouseLeaveTooltipContent.bind(Object(i.a)(Object(i.a)(a))),a.show=a.show.bind(Object(i.a)(Object(i.a)(a))),a.hide=a.hide.bind(Object(i.a)(Object(i.a)(a))),a.onEscKeyDown=a.onEscKeyDown.bind(Object(i.a)(Object(i.a)(a))),a.getRef=a.getRef.bind(Object(i.a)(Object(i.a)(a))),a}Object(o.a)(t,e);var a=t.prototype;return a.componentDidMount=function(){this.updateTarget()},a.componentWillUnmount=function(){this.removeTargetEvents()},a.onMouseOverTooltipContent=function(){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&this._hideTimeout&&this.clearHideTimeout()},a.onMouseLeaveTooltipContent=function(e){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._showTimeout&&this.clearShowTimeout(),e.persist(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide")))},a.onEscKeyDown=function(e){"Escape"===e.key&&this.hide(e)},a.getRef=function(e){var t=this.props.innerRef;t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),this._popover=e},a.getDelay=function(e){var t=this.props.delay;return"object"===typeof t?isNaN(t[e])?E[e]:t[e]:t},a.show=function(e){this.props.isOpen||(this.clearShowTimeout(),this.toggle(e))},a.showWithDelay=function(e){this._hideTimeout&&this.clearHideTimeout(),this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay("show"))},a.hide=function(e){this.props.isOpen&&(this.clearHideTimeout(),this.toggle(e))},a.hideWithDelay=function(e){this._showTimeout&&this.clearShowTimeout(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide"))},a.clearShowTimeout=function(){clearTimeout(this._showTimeout),this._showTimeout=void 0},a.clearHideTimeout=function(){clearTimeout(this._hideTimeout),this._hideTimeout=void 0},a.handleDocumentClick=function(e){var t=this.props.trigger.split(" ");t.indexOf("legacy")>-1&&(this.props.isOpen||w(e.target,this._target))?(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen&&!w(e.target,this._popover)?this.hideWithDelay(e):this.showWithDelay(e)):t.indexOf("click")>-1&&w(e.target,this._target)&&(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen?this.hideWithDelay(e):this.showWithDelay(e))},a.addTargetEvents=function(){var e=this;if(this.props.trigger){var t=this.props.trigger.split(" ");-1===t.indexOf("manual")&&((t.indexOf("click")>-1||t.indexOf("legacy")>-1)&&["click","touchstart"].forEach(function(t){return document.addEventListener(t,e.handleDocumentClick,!0)}),this._target&&(t.indexOf("hover")>-1&&(this._target.addEventListener("mouseover",this.showWithDelay,!0),this._target.addEventListener("mouseout",this.hideWithDelay,!0)),t.indexOf("focus")>-1&&(this._target.addEventListener("focusin",this.show,!0),this._target.addEventListener("focusout",this.hide,!0)),this._target.addEventListener("keydown",this.onEscKeyDown,!0)))}},a.removeTargetEvents=function(){var e=this;this._target&&(this._target.removeEventListener("mouseover",this.showWithDelay,!0),this._target.removeEventListener("mouseout",this.hideWithDelay,!0),this._target.removeEventListener("keydown",this.onEscKeyDown,!0),this._target.removeEventListener("focusin",this.show,!0),this._target.removeEventListener("focusout",this.hide,!0)),["click","touchstart"].forEach(function(t){return document.removeEventListener(t,e.handleDocumentClick,!0)})},a.updateTarget=function(){var e=Object(f.k)(this.props.target);e!==this._target&&(this.removeTargetEvents(),this._target=e,this.addTargetEvents())},a.toggle=function(e){return this.props.disabled?e&&e.preventDefault():this.props.toggle(e)},a.render=function(){if(!this.props.isOpen)return null;this.updateTarget();var e=this.props,t=e.className,a=e.cssModule,o=e.innerClassName,i=e.target,s=e.isOpen,c=e.hideArrow,l=e.boundariesElement,u=e.placement,p=e.placementPrefix,h=e.arrowClassName,d=e.container,m=e.modifiers,b=e.offset,g=Object(f.n)(this.props,Object.keys(T)),v=Object(f.m)(t,a),O=Object(f.m)(o,a);return r.a.createElement(y,{className:v,target:i,isOpen:s,hideArrow:c,boundariesElement:l,placement:u,placementPrefix:p,arrowClassName:h,container:d,modifiers:m,offset:b,cssModule:a},r.a.createElement("div",Object(n.a)({},g,{ref:this.getRef,className:O,role:"tooltip","aria-hidden":s,onMouseOver:this.onMouseOverTooltipContent,onMouseLeave:this.onMouseLeaveTooltipContent,onKeyDown:this.onEscKeyDown})))},t}(r.a.Component);C.propTypes=T,C.defaultProps=N;t.a=C},570:function(e,t,a){"use strict";a.r(t);var n=a(100),o=a(101),i=a(104),s=a(102),r=a(105),c=a(103),l=a(0),u=a.n(l),p=a(329),h=a(6),d=a(321),m=a.n(d),b=a(380),g=function(e){var t=m()("popover","show",e.className),a=m()("popover-inner",e.innerClassName);return u.a.createElement(b.a,Object(h.a)({},e,{className:t,innerClassName:a}))};g.propTypes=b.b,g.defaultProps={placement:"right",placementPrefix:"bs-popover",trigger:"click"};var f=g,v=a(39),O=a(70),j=a.n(O),y=a(322),T={tag:y.q,className:j.a.string,cssModule:j.a.object},E=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(v.a)(e,["className","cssModule","tag"]),i=Object(y.m)(m()(t,"popover-header"),a);return u.a.createElement(n,Object(h.a)({},o,{className:i}))};E.propTypes=T,E.defaultProps={tag:"h3"};var N=E,w={tag:y.q,className:j.a.string,cssModule:j.a.object},C=function(e){var t=e.className,a=e.cssModule,n=e.tag,o=Object(v.a)(e,["className","cssModule","tag"]),i=Object(y.m)(m()(t,"popover-body"),a);return u.a.createElement(n,Object(h.a)({},o,{className:i}))};C.propTypes=w,C.defaultProps={tag:"div"};var k=C,P=a(330),_=a(332),M=a(331),D=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).toggle=a.toggle.bind(Object(r.a)(a)),a.state={popoverOpen:!1},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return u.a.createElement("span",null,u.a.createElement(p.a,{className:"mr-1",color:"secondary",id:"Popover-"+this.props.id,onClick:this.toggle},this.props.item.text),u.a.createElement(f,{placement:this.props.item.placement,isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle,trigger:"legacy",delay:0},u.a.createElement(N,null,"Popover Title"),u.a.createElement(k,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))}}]),t}(l.Component),x=function(e){function t(e){var a;return Object(n.a)(this,t),(a=Object(i.a)(this,Object(s.a)(t).call(this,e))).toggle=a.toggle.bind(Object(r.a)(a)),a.state={popoverOpen:!1,popovers:[{placement:"top",text:"Top"},{placement:"bottom",text:"Bottom"},{placement:"left",text:"Left"},{placement:"right",text:"Right"}]},a}return Object(c.a)(t,e),Object(o.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},u.a.createElement(P.a,null,u.a.createElement(_.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Popovers"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement("a",{href:"https://reactstrap.github.io/components/popovers/",rel:"noreferrer noopener",target:"_blank",className:"card-header-action"},u.a.createElement("small",{className:"text-muted"},"docs")))),u.a.createElement(M.a,null,u.a.createElement(p.a,{id:"Popover1",onClick:this.toggle},"Launch Popover"),u.a.createElement(f,{placement:"bottom",isOpen:this.state.popoverOpen,target:"Popover1",toggle:this.toggle},u.a.createElement(N,null,"Popover Title"),u.a.createElement(k,null,"Sed posuere consectetur est at lobortis. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.")))),u.a.createElement(P.a,null,u.a.createElement(_.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"Popovers"),u.a.createElement("small",null," list")),u.a.createElement(M.a,null,this.state.popovers.map(function(e,t){return u.a.createElement(D,{key:t,item:e,id:t})}))))}}]),t}(l.Component);t.default=x}}]);
//# sourceMappingURL=30.ad54b046.chunk.js.map