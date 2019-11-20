// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_()){
return null;
} else {
oops.state.mark_error_reported_BANG_();

var G__36072 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__36072)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__36072)){
var G__36074 = (console["error"]);
var G__36075 = msg;
var G__36076 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__36073 = oops.state.get_console_reporter();
return (fexpr__36073.cljs$core$IFn$_invoke$arity$3 ? fexpr__36073.cljs$core$IFn$_invoke$arity$3(G__36074,G__36075,G__36076) : fexpr__36073.call(null,G__36074,G__36075,G__36076));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__36072)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36072)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__36077 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__36077)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__36077)){
var G__36079 = (console["warn"]);
var G__36080 = msg;
var G__36081 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__36078 = oops.state.get_console_reporter();
return (fexpr__36078.cljs$core$IFn$_invoke$arity$3 ? fexpr__36078.cljs$core$IFn$_invoke$arity$3(G__36079,G__36080,G__36081) : fexpr__36078.call(null,G__36079,G__36080,G__36081));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__36077)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36077)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4520__auto__ = [];
var len__4517__auto___36088 = arguments.length;
var i__4518__auto___36089 = (0);
while(true){
if((i__4518__auto___36089 < len__4517__auto___36088)){
args__4520__auto__.push((arguments[i__4518__auto___36089]));

var G__36090 = (i__4518__auto___36089 + (1));
i__4518__auto___36089 = G__36090;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__36084){
var vec__36085 = p__36084;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36085,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq36082){
var G__36083 = cljs.core.first(seq36082);
var seq36082__$1 = cljs.core.next(seq36082);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36083,seq36082__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"undefined",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"nil",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"boolean",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"number",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"string",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):((cljs.core.not(goog.isObject(obj)))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"non-object",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"date-like",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs type",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_(obj))?((cljs.core.contains_QMARK_(oops.config.get_suppress_reporting(),cljs.core.cst$kw$unexpected_DASH_object_DASH_value))?true:(function (){
(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$flavor,"cljs instance",cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_(key);

oops.state.set_last_access_modifier_BANG_(mode);
} else {
}

var and__3925__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(0))) && (cljs.core.not(goog.object.containsKey(obj,key)))))?(oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$missing_DASH_object_DASH_key,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null))):true):true);
if(cljs.core.truth_(and__3925__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5459__auto__ = oops.helpers.get_property_descriptor(obj,key);
if((temp__5459__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_frozen,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_(obj))){
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_is_DASH_sealed,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
} else {
return true;

}
}
} else {
var descriptor_36091 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_36091);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_36092 = temp__5459__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_36092,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_36092,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
}
}
} else {
return true;
}
} else {
return and__3925__auto__;
}
} else {
return null;
}
});
oops.core.validate_fn_call_dynamically = (function oops$core$validate_fn_call_dynamically(fn,mode){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$expected_DASH_function_DASH_value,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$soft_QMARK_,cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,(1)),cljs.core.cst$kw$fn,fn,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_36094 = oops.config.get_child_factory();
var child_factory_36094__$1 = (function (){var G__36095 = child_factory_36094;
var G__36095__$1 = (((G__36095 instanceof cljs.core.Keyword))?G__36095.fqn:null);
switch (G__36095__$1) {
case "js-obj":
return ((function (G__36095,G__36095__$1,child_factory_36094){
return (function (){
return {};
});
;})(G__36095,G__36095__$1,child_factory_36094))

break;
case "js-array":
return ((function (G__36095,G__36095__$1,child_factory_36094){
return (function (){
return [];
});
;})(G__36095,G__36095__$1,child_factory_36094))

break;
default:
return child_factory_36094;

}
})();

var child_obj_36093 = (child_factory_36094__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_36094__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_36094__$1.call(null,obj,key));
(obj[key] = child_obj_36093);

return child_obj_36093;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_36099 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_36099);

return selector_path_36099;
} else {
var selector_path_36100 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_36100);

return selector_path_36100;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_36101 = temp__5461__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_36101);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_36103 = (function (){var path_36102 = oops.core.build_path_dynamically(selector);

return path_36102;
})();
var len_36104 = path_36103.length;
var i_36105 = (0);
var obj_36106 = obj;
while(true){
if((i_36105 < len_36104)){
var mode_36107 = (path_36103[i_36105]);
var key_36108 = (path_36103[(i_36105 + (1))]);
var next_obj_36109 = oops.core.get_key_dynamically(obj_36106,key_36108,mode_36107);
var G__36110 = mode_36107;
switch (G__36110) {
case (0):
var G__36112 = (i_36105 + (2));
var G__36113 = next_obj_36109;
i_36105 = G__36112;
obj_36106 = G__36113;
continue;

break;
case (1):
if(!((next_obj_36109 == null))){
var G__36114 = (i_36105 + (2));
var G__36115 = next_obj_36109;
i_36105 = G__36114;
obj_36106 = G__36115;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36109 == null))){
var G__36116 = (i_36105 + (2));
var G__36117 = next_obj_36109;
i_36105 = G__36116;
obj_36106 = G__36117;
continue;
} else {
var G__36118 = (i_36105 + (2));
var G__36119 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36106,key_36108) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36106,key_36108));
i_36105 = G__36118;
obj_36106 = G__36119;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36110)].join('')));

}
} else {
return obj_36106;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_36121 = (function (){var path_36120 = oops.core.build_path_dynamically(selector);

return path_36120;
})();
var len_36122 = path_36121.length;
if((len_36122 < (4))){
return [obj,(function (){var path_36124 = path_36121;
var len_36125 = path_36124.length;
var i_36126 = (0);
var obj_36127 = obj;
while(true){
if((i_36126 < len_36125)){
var mode_36128 = (path_36124[i_36126]);
var key_36129 = (path_36124[(i_36126 + (1))]);
var next_obj_36130 = oops.core.get_key_dynamically(obj_36127,key_36129,mode_36128);
var G__36145 = mode_36128;
switch (G__36145) {
case (0):
var G__36149 = (i_36126 + (2));
var G__36150 = next_obj_36130;
i_36126 = G__36149;
obj_36127 = G__36150;
continue;

break;
case (1):
if(!((next_obj_36130 == null))){
var G__36151 = (i_36126 + (2));
var G__36152 = next_obj_36130;
i_36126 = G__36151;
obj_36127 = G__36152;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36130 == null))){
var G__36153 = (i_36126 + (2));
var G__36154 = next_obj_36130;
i_36126 = G__36153;
obj_36127 = G__36154;
continue;
} else {
var G__36155 = (i_36126 + (2));
var G__36156 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36127,key_36129) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36127,key_36129));
i_36126 = G__36155;
obj_36127 = G__36156;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36145)].join('')));

}
} else {
return obj_36127;
}
break;
}
})()];
} else {
var target_obj_36123 = (function (){var path_36131 = path_36121.slice((0),(len_36122 - (2)));
var len_36132 = path_36131.length;
var i_36133 = (0);
var obj_36134 = obj;
while(true){
if((i_36133 < len_36132)){
var mode_36135 = (path_36131[i_36133]);
var key_36136 = (path_36131[(i_36133 + (1))]);
var next_obj_36137 = oops.core.get_key_dynamically(obj_36134,key_36136,mode_36135);
var G__36146 = mode_36135;
switch (G__36146) {
case (0):
var G__36158 = (i_36133 + (2));
var G__36159 = next_obj_36137;
i_36133 = G__36158;
obj_36134 = G__36159;
continue;

break;
case (1):
if(!((next_obj_36137 == null))){
var G__36160 = (i_36133 + (2));
var G__36161 = next_obj_36137;
i_36133 = G__36160;
obj_36134 = G__36161;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36137 == null))){
var G__36162 = (i_36133 + (2));
var G__36163 = next_obj_36137;
i_36133 = G__36162;
obj_36134 = G__36163;
continue;
} else {
var G__36164 = (i_36133 + (2));
var G__36165 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36134,key_36136) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36134,key_36136));
i_36133 = G__36164;
obj_36134 = G__36165;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36146)].join('')));

}
} else {
return obj_36134;
}
break;
}
})();
return [target_obj_36123,(function (){var path_36138 = [(path_36121[(len_36122 - (2))]),(path_36121[(len_36122 - (1))])];
var len_36139 = path_36138.length;
var i_36140 = (0);
var obj_36141 = target_obj_36123;
while(true){
if((i_36140 < len_36139)){
var mode_36142 = (path_36138[i_36140]);
var key_36143 = (path_36138[(i_36140 + (1))]);
var next_obj_36144 = oops.core.get_key_dynamically(obj_36141,key_36143,mode_36142);
var G__36147 = mode_36142;
switch (G__36147) {
case (0):
var G__36167 = (i_36140 + (2));
var G__36168 = next_obj_36144;
i_36140 = G__36167;
obj_36141 = G__36168;
continue;

break;
case (1):
if(!((next_obj_36144 == null))){
var G__36169 = (i_36140 + (2));
var G__36170 = next_obj_36144;
i_36140 = G__36169;
obj_36141 = G__36170;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36144 == null))){
var G__36171 = (i_36140 + (2));
var G__36172 = next_obj_36144;
i_36140 = G__36171;
obj_36141 = G__36172;
continue;
} else {
var G__36173 = (i_36140 + (2));
var G__36174 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36141,key_36143) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36141,key_36143));
i_36140 = G__36173;
obj_36141 = G__36174;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36147)].join('')));

}
} else {
return obj_36141;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_36176 = (function (){var path_36175 = oops.core.build_path_dynamically(selector);

return path_36175;
})();
var len_36179 = path_36176.length;
var parent_obj_path_36180 = path_36176.slice((0),(len_36179 - (2)));
var key_36177 = (path_36176[(len_36179 - (1))]);
var mode_36178 = (path_36176[(len_36179 - (2))]);
var parent_obj_36181 = (function (){var path_36182 = parent_obj_path_36180;
var len_36183 = path_36182.length;
var i_36184 = (0);
var obj_36185 = obj;
while(true){
if((i_36184 < len_36183)){
var mode_36186 = (path_36182[i_36184]);
var key_36187 = (path_36182[(i_36184 + (1))]);
var next_obj_36188 = oops.core.get_key_dynamically(obj_36185,key_36187,mode_36186);
var G__36189 = mode_36186;
switch (G__36189) {
case (0):
var G__36191 = (i_36184 + (2));
var G__36192 = next_obj_36188;
i_36184 = G__36191;
obj_36185 = G__36192;
continue;

break;
case (1):
if(!((next_obj_36188 == null))){
var G__36193 = (i_36184 + (2));
var G__36194 = next_obj_36188;
i_36184 = G__36193;
obj_36185 = G__36194;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36188 == null))){
var G__36195 = (i_36184 + (2));
var G__36196 = next_obj_36188;
i_36184 = G__36195;
obj_36185 = G__36196;
continue;
} else {
var G__36197 = (i_36184 + (2));
var G__36198 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36185,key_36187) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36185,key_36187));
i_36184 = G__36197;
obj_36185 = G__36198;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36189)].join('')));

}
} else {
return obj_36185;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_36181,key_36177,val,mode_36178);
});
