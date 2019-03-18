// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('oops.messages');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.messages.post_process_message = (function oops$messages$post_process_message(msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Oops"),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('');
});
if((typeof oops !== 'undefined') && (typeof oops.messages !== 'undefined') && (typeof oops.messages.runtime_message !== 'undefined')){
} else {
oops.messages.runtime_message = (function (){var method_table__4400__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.cst$kw$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("oops.messages","runtime-message"),((function (method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__){
return (function() { 
var G__30552__delegate = function (type,_){
return type;
};
var G__30552 = function (type,var_args){
var _ = null;
if (arguments.length > 1) {
var G__30553__i = 0, G__30553__a = new Array(arguments.length -  1);
while (G__30553__i < G__30553__a.length) {G__30553__a[G__30553__i] = arguments[G__30553__i + 1]; ++G__30553__i;}
  _ = new cljs.core.IndexedSeq(G__30553__a,0,null);
} 
return G__30552__delegate.call(this,type,_);};
G__30552.cljs$lang$maxFixedArity = 1;
G__30552.cljs$lang$applyTo = (function (arglist__30554){
var type = cljs.core.first(arglist__30554);
var _ = cljs.core.rest(arglist__30554);
return G__30552__delegate(type,_);
});
G__30552.cljs$core$IFn$_invoke$arity$variadic = G__30552__delegate;
return G__30552;
})()
;})(method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__))
,cljs.core.cst$kw$default,hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,(function (_type,info){
var map__30555 = info;
var map__30555__$1 = ((((!((map__30555 == null)))?(((((map__30555.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30555.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30555):map__30555);
var flavor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30555__$1,cljs.core.cst$kw$flavor);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30555__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join('')) : oops.messages.post_process_message.call(null,["Unexpected object value (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(flavor),")",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,(function (_type,info){
var map__30557 = info;
var map__30557__$1 = ((((!((map__30557 == null)))?(((((map__30557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30557.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30557):map__30557);
var soft_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30557__$1,cljs.core.cst$kw$soft_QMARK_);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30557__$1,cljs.core.cst$kw$path);
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30557__$1,cljs.core.cst$kw$fn);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Expected a function",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?[" or nil"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join('')) : oops.messages.post_process_message.call(null,["Expected a function",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(soft_QMARK_)?[" or nil"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.empty_QMARK_(path))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),", got <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.typeOf(fn)),"> instead"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,(function (_type,info){
var map__30559 = info;
var map__30559__$1 = ((((!((map__30559 == null)))?(((((map__30559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30559):map__30559);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30559__$1,cljs.core.cst$kw$key);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30559__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join('')) : oops.messages.post_process_message.call(null,["Missing expected object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,(function (_type,info){
var map__30561 = info;
var map__30561__$1 = ((((!((map__30561 == null)))?(((((map__30561.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30561.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30561):map__30561);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,cljs.core.cst$kw$key);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,cljs.core.cst$kw$path);
var frozen_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30561__$1,cljs.core.cst$kw$frozen_QMARK_);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"' is not writable",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frozen_QMARK_)?[" because the object is frozen"].join(''):null))].join('')) : oops.messages.post_process_message.call(null,["Object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"' is not writable",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join(''))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(frozen_QMARK_)?[" because the object is frozen"].join(''):null))].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$object_DASH_is_DASH_sealed,(function (_type,info){
var map__30563 = info;
var map__30563__$1 = ((((!((map__30563 == null)))?(((((map__30563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30563):map__30563);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30563__$1,cljs.core.cst$kw$key);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30563__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is sealed"].join('')) : oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is sealed"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$object_DASH_is_DASH_frozen,(function (_type,info){
var map__30565 = info;
var map__30565__$1 = ((((!((map__30565 == null)))?(((((map__30565.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30565.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30565):map__30565);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,cljs.core.cst$kw$key);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__30565__$1,cljs.core.cst$kw$path);
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is frozen"].join('')) : oops.messages.post_process_message.call(null,["Cannot create object key '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((cljs.core.empty_QMARK_(path)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path,key))))?null:[" on key path '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"'"].join('')))," because the object is frozen"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$invalid_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1("Invalid selector") : oops.messages.post_process_message.call(null,"Invalid selector"));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected empty selector"].join('')) : oops.messages.post_process_message.call(null,["Unexpected empty selector"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected punching selector (\"!\" makes sense only with oset!)"].join('')) : oops.messages.post_process_message.call(null,["Unexpected punching selector (\"!\" makes sense only with oset!)"].join('')));
}));
oops.messages.runtime_message.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,(function (_type){
return (oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1 ? oops.messages.post_process_message.cljs$core$IFn$_invoke$arity$1(["Unexpected soft selector (\"?\" does not make sense with oset!)"].join('')) : oops.messages.post_process_message.call(null,["Unexpected soft selector (\"?\" does not make sense with oset!)"].join('')));
}));
