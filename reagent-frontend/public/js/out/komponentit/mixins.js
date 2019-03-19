// Compiled by ClojureScript 1.10.312 {}
goog.provide('komponentit.mixins');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.set');
goog.require('clojure.string');
komponentit.mixins.__GT_event_type = (function komponentit$mixins$__GT_event_type(k){
return clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.name.call(null,k),/^on-/,""),/-/,"");
});
komponentit.mixins.update_listeners = (function komponentit$mixins$update_listeners(el,listeners,props,this$){
return cljs.core.swap_BANG_.call(null,listeners,(function (listeners__$1){
var current_event_types = cljs.core.set.call(null,cljs.core.keys.call(null,listeners__$1));
var new_event_types = cljs.core.set.call(null,cljs.core.keys.call(null,props));
var $ = listeners__$1;
var $__$1 = cljs.core.reduce.call(null,((function ($,current_event_types,new_event_types){
return (function (listeners__$2,k){
var f = ((function ($,current_event_types,new_event_types){
return (function (e){
var f = cljs.core.get.call(null,reagent.core.props.call(null,this$),k);
return f.call(null,e);
});})($,current_event_types,new_event_types))
;
el.addEventListener(komponentit.mixins.__GT_event_type.call(null,k),f);

return cljs.core.assoc.call(null,listeners__$2,k,f);
});})($,current_event_types,new_event_types))
,$,clojure.set.difference.call(null,new_event_types,current_event_types));
return cljs.core.reduce.call(null,((function ($,$__$1,current_event_types,new_event_types){
return (function (listeners__$2,k){
el.removeEventListener(komponentit.mixins.__GT_event_type.call(null,k),cljs.core.get.call(null,listeners__$2,k));

return cljs.core.dissoc.call(null,listeners__$2,k);
});})($,$__$1,current_event_types,new_event_types))
,$__$1,clojure.set.difference.call(null,current_event_types,new_event_types));
}));
});
komponentit.mixins.window_event_listener = (function komponentit$mixins$window_event_listener(_){
var listeners = cljs.core.atom.call(null,null);
return reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"komponentit.mixins.window_event_listener_class",new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (listeners){
return (function (this$){
return komponentit.mixins.update_listeners.call(null,window,listeners,reagent.core.props.call(null,this$),this$);
});})(listeners))
,new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),((function (listeners){
return (function (this$){
return komponentit.mixins.update_listeners.call(null,window,listeners,reagent.core.props.call(null,this$),this$);
});})(listeners))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (listeners){
return (function (this$){
return komponentit.mixins.update_listeners.call(null,window,listeners,cljs.core.PersistentArrayMap.EMPTY,this$);
});})(listeners))
,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (listeners){
return (function (props,child){
return child;
});})(listeners))
], null));
});

//# sourceMappingURL=mixins.js.map?rel=1552956590973
