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

var G__36070 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__36070)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__36070)){
var G__36072 = (console["error"]);
var G__36073 = msg;
var G__36074 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__36071 = oops.state.get_console_reporter();
return (fexpr__36071.cljs$core$IFn$_invoke$arity$3 ? fexpr__36071.cljs$core$IFn$_invoke$arity$3(G__36072,G__36073,G__36074) : fexpr__36071.call(null,G__36072,G__36073,G__36074));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__36070)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36070)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__36075 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__36075)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__36075)){
var G__36077 = (console["warn"]);
var G__36078 = msg;
var G__36079 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__36076 = oops.state.get_console_reporter();
return (fexpr__36076.cljs$core$IFn$_invoke$arity$3 ? fexpr__36076.cljs$core$IFn$_invoke$arity$3(G__36077,G__36078,G__36079) : fexpr__36076.call(null,G__36077,G__36078,G__36079));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__36075)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36075)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4520__auto__ = [];
var len__4517__auto___36086 = arguments.length;
var i__4518__auto___36087 = (0);
while(true){
if((i__4518__auto___36087 < len__4517__auto___36086)){
args__4520__auto__.push((arguments[i__4518__auto___36087]));

var G__36088 = (i__4518__auto___36087 + (1));
i__4518__auto___36087 = G__36088;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__36082){
var vec__36083 = p__36082;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq36080){
var G__36081 = cljs.core.first(seq36080);
var seq36080__$1 = cljs.core.next(seq36080);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36081,seq36080__$1);
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
var descriptor_36089 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_36089);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_36090 = temp__5459__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_36090,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_36090,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_36092 = oops.config.get_child_factory();
var child_factory_36092__$1 = (function (){var G__36093 = child_factory_36092;
var G__36093__$1 = (((G__36093 instanceof cljs.core.Keyword))?G__36093.fqn:null);
switch (G__36093__$1) {
case "js-obj":
return ((function (G__36093,G__36093__$1,child_factory_36092){
return (function (){
return {};
});
;})(G__36093,G__36093__$1,child_factory_36092))

break;
case "js-array":
return ((function (G__36093,G__36093__$1,child_factory_36092){
return (function (){
return [];
});
;})(G__36093,G__36093__$1,child_factory_36092))

break;
default:
return child_factory_36092;

}
})();

var child_obj_36091 = (child_factory_36092__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_36092__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_36092__$1.call(null,obj,key));
(obj[key] = child_obj_36091);

return child_obj_36091;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_36097 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_36097);

return selector_path_36097;
} else {
var selector_path_36098 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_36098);

return selector_path_36098;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_36099 = temp__5461__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_36099);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_36101 = (function (){var path_36100 = oops.core.build_path_dynamically(selector);

return path_36100;
})();
var len_36102 = path_36101.length;
var i_36103 = (0);
var obj_36104 = obj;
while(true){
if((i_36103 < len_36102)){
var mode_36105 = (path_36101[i_36103]);
var key_36106 = (path_36101[(i_36103 + (1))]);
var next_obj_36107 = oops.core.get_key_dynamically(obj_36104,key_36106,mode_36105);
var G__36108 = mode_36105;
switch (G__36108) {
case (0):
var G__36110 = (i_36103 + (2));
var G__36111 = next_obj_36107;
i_36103 = G__36110;
obj_36104 = G__36111;
continue;

break;
case (1):
if(!((next_obj_36107 == null))){
var G__36112 = (i_36103 + (2));
var G__36113 = next_obj_36107;
i_36103 = G__36112;
obj_36104 = G__36113;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36107 == null))){
var G__36114 = (i_36103 + (2));
var G__36115 = next_obj_36107;
i_36103 = G__36114;
obj_36104 = G__36115;
continue;
} else {
var G__36116 = (i_36103 + (2));
var G__36117 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36104,key_36106) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36104,key_36106));
i_36103 = G__36116;
obj_36104 = G__36117;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36108)].join('')));

}
} else {
return obj_36104;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_36119 = (function (){var path_36118 = oops.core.build_path_dynamically(selector);

return path_36118;
})();
var len_36120 = path_36119.length;
if((len_36120 < (4))){
return [obj,(function (){var path_36122 = path_36119;
var len_36123 = path_36122.length;
var i_36124 = (0);
var obj_36125 = obj;
while(true){
if((i_36124 < len_36123)){
var mode_36126 = (path_36122[i_36124]);
var key_36127 = (path_36122[(i_36124 + (1))]);
var next_obj_36128 = oops.core.get_key_dynamically(obj_36125,key_36127,mode_36126);
var G__36143 = mode_36126;
switch (G__36143) {
case (0):
var G__36147 = (i_36124 + (2));
var G__36148 = next_obj_36128;
i_36124 = G__36147;
obj_36125 = G__36148;
continue;

break;
case (1):
if(!((next_obj_36128 == null))){
var G__36149 = (i_36124 + (2));
var G__36150 = next_obj_36128;
i_36124 = G__36149;
obj_36125 = G__36150;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36128 == null))){
var G__36151 = (i_36124 + (2));
var G__36152 = next_obj_36128;
i_36124 = G__36151;
obj_36125 = G__36152;
continue;
} else {
var G__36153 = (i_36124 + (2));
var G__36154 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36125,key_36127) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36125,key_36127));
i_36124 = G__36153;
obj_36125 = G__36154;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36143)].join('')));

}
} else {
return obj_36125;
}
break;
}
})()];
} else {
var target_obj_36121 = (function (){var path_36129 = path_36119.slice((0),(len_36120 - (2)));
var len_36130 = path_36129.length;
var i_36131 = (0);
var obj_36132 = obj;
while(true){
if((i_36131 < len_36130)){
var mode_36133 = (path_36129[i_36131]);
var key_36134 = (path_36129[(i_36131 + (1))]);
var next_obj_36135 = oops.core.get_key_dynamically(obj_36132,key_36134,mode_36133);
var G__36144 = mode_36133;
switch (G__36144) {
case (0):
var G__36156 = (i_36131 + (2));
var G__36157 = next_obj_36135;
i_36131 = G__36156;
obj_36132 = G__36157;
continue;

break;
case (1):
if(!((next_obj_36135 == null))){
var G__36158 = (i_36131 + (2));
var G__36159 = next_obj_36135;
i_36131 = G__36158;
obj_36132 = G__36159;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36135 == null))){
var G__36160 = (i_36131 + (2));
var G__36161 = next_obj_36135;
i_36131 = G__36160;
obj_36132 = G__36161;
continue;
} else {
var G__36162 = (i_36131 + (2));
var G__36163 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36132,key_36134) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36132,key_36134));
i_36131 = G__36162;
obj_36132 = G__36163;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36144)].join('')));

}
} else {
return obj_36132;
}
break;
}
})();
return [target_obj_36121,(function (){var path_36136 = [(path_36119[(len_36120 - (2))]),(path_36119[(len_36120 - (1))])];
var len_36137 = path_36136.length;
var i_36138 = (0);
var obj_36139 = target_obj_36121;
while(true){
if((i_36138 < len_36137)){
var mode_36140 = (path_36136[i_36138]);
var key_36141 = (path_36136[(i_36138 + (1))]);
var next_obj_36142 = oops.core.get_key_dynamically(obj_36139,key_36141,mode_36140);
var G__36145 = mode_36140;
switch (G__36145) {
case (0):
var G__36165 = (i_36138 + (2));
var G__36166 = next_obj_36142;
i_36138 = G__36165;
obj_36139 = G__36166;
continue;

break;
case (1):
if(!((next_obj_36142 == null))){
var G__36167 = (i_36138 + (2));
var G__36168 = next_obj_36142;
i_36138 = G__36167;
obj_36139 = G__36168;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36142 == null))){
var G__36169 = (i_36138 + (2));
var G__36170 = next_obj_36142;
i_36138 = G__36169;
obj_36139 = G__36170;
continue;
} else {
var G__36171 = (i_36138 + (2));
var G__36172 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36139,key_36141) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36139,key_36141));
i_36138 = G__36171;
obj_36139 = G__36172;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36145)].join('')));

}
} else {
return obj_36139;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_36174 = (function (){var path_36173 = oops.core.build_path_dynamically(selector);

return path_36173;
})();
var len_36177 = path_36174.length;
var parent_obj_path_36178 = path_36174.slice((0),(len_36177 - (2)));
var key_36175 = (path_36174[(len_36177 - (1))]);
var mode_36176 = (path_36174[(len_36177 - (2))]);
var parent_obj_36179 = (function (){var path_36180 = parent_obj_path_36178;
var len_36181 = path_36180.length;
var i_36182 = (0);
var obj_36183 = obj;
while(true){
if((i_36182 < len_36181)){
var mode_36184 = (path_36180[i_36182]);
var key_36185 = (path_36180[(i_36182 + (1))]);
var next_obj_36186 = oops.core.get_key_dynamically(obj_36183,key_36185,mode_36184);
var G__36187 = mode_36184;
switch (G__36187) {
case (0):
var G__36189 = (i_36182 + (2));
var G__36190 = next_obj_36186;
i_36182 = G__36189;
obj_36183 = G__36190;
continue;

break;
case (1):
if(!((next_obj_36186 == null))){
var G__36191 = (i_36182 + (2));
var G__36192 = next_obj_36186;
i_36182 = G__36191;
obj_36183 = G__36192;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_36186 == null))){
var G__36193 = (i_36182 + (2));
var G__36194 = next_obj_36186;
i_36182 = G__36193;
obj_36183 = G__36194;
continue;
} else {
var G__36195 = (i_36182 + (2));
var G__36196 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_36183,key_36185) : oops.core.punch_key_dynamically_BANG_.call(null,obj_36183,key_36185));
i_36182 = G__36195;
obj_36183 = G__36196;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36187)].join('')));

}
} else {
return obj_36183;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_36179,key_36175,val,mode_36176);
});
