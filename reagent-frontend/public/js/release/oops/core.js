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

var G__32602 = oops.config.get_error_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__32602)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__32602)){
var G__32604 = (console["error"]);
var G__32605 = msg;
var G__32606 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__32603 = oops.state.get_console_reporter();
return (fexpr__32603.cljs$core$IFn$_invoke$arity$3 ? fexpr__32603.cljs$core$IFn$_invoke$arity$3(G__32604,G__32605,G__32606) : fexpr__32603.call(null,G__32604,G__32605,G__32606));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__32602)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32602)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__32607 = oops.config.get_warning_reporting();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$throw,G__32607)){
throw oops.state.prepare_error_from_call_site(msg,oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$console,G__32607)){
var G__32609 = (console["warn"]);
var G__32610 = msg;
var G__32611 = oops.helpers.wrap_data_in_enveloper_if_possible(oops.config.use_envelope_QMARK_(),data);
var fexpr__32608 = oops.state.get_console_reporter();
return (fexpr__32608.cljs$core$IFn$_invoke$arity$3 ? fexpr__32608.cljs$core$IFn$_invoke$arity$3(G__32609,G__32610,G__32611) : fexpr__32608.call(null,G__32609,G__32610,G__32611));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,G__32607)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32607)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4520__auto__ = [];
var len__4517__auto___32618 = arguments.length;
var i__4518__auto___32619 = (0);
while(true){
if((i__4518__auto___32619 < len__4517__auto___32618)){
args__4520__auto__.push((arguments[i__4518__auto___32619]));

var G__32620 = (i__4518__auto___32619 + (1));
i__4518__auto___32619 = G__32620;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__32614){
var vec__32615 = p__32614;
var info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32615,(0),null);
return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq32612){
var G__32613 = cljs.core.first(seq32612);
var seq32612__$1 = cljs.core.next(seq32612);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32613,seq32612__$1);
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
var descriptor_32621 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason(descriptor_32621);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_32622 = temp__5459__auto____$1;
return (oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2 ? oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_32622,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)) : oops.core.report_if_needed_dynamically.call(null,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$path,oops.state.get_key_path_str(),cljs.core.cst$kw$key,key,cljs.core.cst$kw$frozen_QMARK_,oops.helpers.is_object_frozen_QMARK_(obj),cljs.core.cst$kw$reason,reason_32622,cljs.core.cst$kw$obj,oops.state.get_target_object()], null)));
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
var child_factory_32624 = oops.config.get_child_factory();
var child_factory_32624__$1 = (function (){var G__32625 = child_factory_32624;
var G__32625__$1 = (((G__32625 instanceof cljs.core.Keyword))?G__32625.fqn:null);
switch (G__32625__$1) {
case "js-obj":
return ((function (G__32625,G__32625__$1,child_factory_32624){
return (function (){
return {};
});
;})(G__32625,G__32625__$1,child_factory_32624))

break;
case "js-array":
return ((function (G__32625,G__32625__$1,child_factory_32624){
return (function (){
return [];
});
;})(G__32625,G__32625__$1,child_factory_32624))

break;
default:
return child_factory_32624;

}
})();

var child_obj_32623 = (child_factory_32624__$1.cljs$core$IFn$_invoke$arity$2 ? child_factory_32624__$1.cljs$core$IFn$_invoke$arity$2(obj,key) : child_factory_32624__$1.call(null,obj,key));
(obj[key] = child_obj_32623);

return child_obj_32623;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_32629 = [];
oops.schema.prepare_simple_path_BANG_(selector,selector_path_32629);

return selector_path_32629;
} else {
var selector_path_32630 = [];
oops.schema.prepare_path_BANG_(selector,selector_path_32630);

return selector_path_32630;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_(path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_32631 = temp__5461__auto__;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(oops.core.report_if_needed_dynamically,issue_32631);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
return (obj[key]);
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
return (obj[key] = val);
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
var path_32633 = (function (){var path_32632 = oops.core.build_path_dynamically(selector);

return path_32632;
})();
var len_32634 = path_32633.length;
var i_32635 = (0);
var obj_32636 = obj;
while(true){
if((i_32635 < len_32634)){
var mode_32637 = (path_32633[i_32635]);
var key_32638 = (path_32633[(i_32635 + (1))]);
var next_obj_32639 = oops.core.get_key_dynamically(obj_32636,key_32638,mode_32637);
var G__32640 = mode_32637;
switch (G__32640) {
case (0):
var G__32642 = (i_32635 + (2));
var G__32643 = next_obj_32639;
i_32635 = G__32642;
obj_32636 = G__32643;
continue;

break;
case (1):
if(!((next_obj_32639 == null))){
var G__32644 = (i_32635 + (2));
var G__32645 = next_obj_32639;
i_32635 = G__32644;
obj_32636 = G__32645;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_32639 == null))){
var G__32646 = (i_32635 + (2));
var G__32647 = next_obj_32639;
i_32635 = G__32646;
obj_32636 = G__32647;
continue;
} else {
var G__32648 = (i_32635 + (2));
var G__32649 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_32636,key_32638) : oops.core.punch_key_dynamically_BANG_.call(null,obj_32636,key_32638));
i_32635 = G__32648;
obj_32636 = G__32649;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32640)].join('')));

}
} else {
return obj_32636;
}
break;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
var path_32651 = (function (){var path_32650 = oops.core.build_path_dynamically(selector);

return path_32650;
})();
var len_32652 = path_32651.length;
if((len_32652 < (4))){
return [obj,(function (){var path_32654 = path_32651;
var len_32655 = path_32654.length;
var i_32656 = (0);
var obj_32657 = obj;
while(true){
if((i_32656 < len_32655)){
var mode_32658 = (path_32654[i_32656]);
var key_32659 = (path_32654[(i_32656 + (1))]);
var next_obj_32660 = oops.core.get_key_dynamically(obj_32657,key_32659,mode_32658);
var G__32675 = mode_32658;
switch (G__32675) {
case (0):
var G__32679 = (i_32656 + (2));
var G__32680 = next_obj_32660;
i_32656 = G__32679;
obj_32657 = G__32680;
continue;

break;
case (1):
if(!((next_obj_32660 == null))){
var G__32681 = (i_32656 + (2));
var G__32682 = next_obj_32660;
i_32656 = G__32681;
obj_32657 = G__32682;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_32660 == null))){
var G__32683 = (i_32656 + (2));
var G__32684 = next_obj_32660;
i_32656 = G__32683;
obj_32657 = G__32684;
continue;
} else {
var G__32685 = (i_32656 + (2));
var G__32686 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_32657,key_32659) : oops.core.punch_key_dynamically_BANG_.call(null,obj_32657,key_32659));
i_32656 = G__32685;
obj_32657 = G__32686;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32675)].join('')));

}
} else {
return obj_32657;
}
break;
}
})()];
} else {
var target_obj_32653 = (function (){var path_32661 = path_32651.slice((0),(len_32652 - (2)));
var len_32662 = path_32661.length;
var i_32663 = (0);
var obj_32664 = obj;
while(true){
if((i_32663 < len_32662)){
var mode_32665 = (path_32661[i_32663]);
var key_32666 = (path_32661[(i_32663 + (1))]);
var next_obj_32667 = oops.core.get_key_dynamically(obj_32664,key_32666,mode_32665);
var G__32676 = mode_32665;
switch (G__32676) {
case (0):
var G__32688 = (i_32663 + (2));
var G__32689 = next_obj_32667;
i_32663 = G__32688;
obj_32664 = G__32689;
continue;

break;
case (1):
if(!((next_obj_32667 == null))){
var G__32690 = (i_32663 + (2));
var G__32691 = next_obj_32667;
i_32663 = G__32690;
obj_32664 = G__32691;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_32667 == null))){
var G__32692 = (i_32663 + (2));
var G__32693 = next_obj_32667;
i_32663 = G__32692;
obj_32664 = G__32693;
continue;
} else {
var G__32694 = (i_32663 + (2));
var G__32695 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_32664,key_32666) : oops.core.punch_key_dynamically_BANG_.call(null,obj_32664,key_32666));
i_32663 = G__32694;
obj_32664 = G__32695;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32676)].join('')));

}
} else {
return obj_32664;
}
break;
}
})();
return [target_obj_32653,(function (){var path_32668 = [(path_32651[(len_32652 - (2))]),(path_32651[(len_32652 - (1))])];
var len_32669 = path_32668.length;
var i_32670 = (0);
var obj_32671 = target_obj_32653;
while(true){
if((i_32670 < len_32669)){
var mode_32672 = (path_32668[i_32670]);
var key_32673 = (path_32668[(i_32670 + (1))]);
var next_obj_32674 = oops.core.get_key_dynamically(obj_32671,key_32673,mode_32672);
var G__32677 = mode_32672;
switch (G__32677) {
case (0):
var G__32697 = (i_32670 + (2));
var G__32698 = next_obj_32674;
i_32670 = G__32697;
obj_32671 = G__32698;
continue;

break;
case (1):
if(!((next_obj_32674 == null))){
var G__32699 = (i_32670 + (2));
var G__32700 = next_obj_32674;
i_32670 = G__32699;
obj_32671 = G__32700;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_32674 == null))){
var G__32701 = (i_32670 + (2));
var G__32702 = next_obj_32674;
i_32670 = G__32701;
obj_32671 = G__32702;
continue;
} else {
var G__32703 = (i_32670 + (2));
var G__32704 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_32671,key_32673) : oops.core.punch_key_dynamically_BANG_.call(null,obj_32671,key_32673));
i_32670 = G__32703;
obj_32671 = G__32704;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32677)].join('')));

}
} else {
return obj_32671;
}
break;
}
})()];
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
var path_32706 = (function (){var path_32705 = oops.core.build_path_dynamically(selector);

return path_32705;
})();
var len_32709 = path_32706.length;
var parent_obj_path_32710 = path_32706.slice((0),(len_32709 - (2)));
var key_32707 = (path_32706[(len_32709 - (1))]);
var mode_32708 = (path_32706[(len_32709 - (2))]);
var parent_obj_32711 = (function (){var path_32712 = parent_obj_path_32710;
var len_32713 = path_32712.length;
var i_32714 = (0);
var obj_32715 = obj;
while(true){
if((i_32714 < len_32713)){
var mode_32716 = (path_32712[i_32714]);
var key_32717 = (path_32712[(i_32714 + (1))]);
var next_obj_32718 = oops.core.get_key_dynamically(obj_32715,key_32717,mode_32716);
var G__32719 = mode_32716;
switch (G__32719) {
case (0):
var G__32721 = (i_32714 + (2));
var G__32722 = next_obj_32718;
i_32714 = G__32721;
obj_32715 = G__32722;
continue;

break;
case (1):
if(!((next_obj_32718 == null))){
var G__32723 = (i_32714 + (2));
var G__32724 = next_obj_32718;
i_32714 = G__32723;
obj_32715 = G__32724;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_32718 == null))){
var G__32725 = (i_32714 + (2));
var G__32726 = next_obj_32718;
i_32714 = G__32725;
obj_32715 = G__32726;
continue;
} else {
var G__32727 = (i_32714 + (2));
var G__32728 = (oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2 ? oops.core.punch_key_dynamically_BANG_.cljs$core$IFn$_invoke$arity$2(obj_32715,key_32717) : oops.core.punch_key_dynamically_BANG_.call(null,obj_32715,key_32717));
i_32714 = G__32727;
obj_32715 = G__32728;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32719)].join('')));

}
} else {
return obj_32715;
}
break;
}
})();
return oops.core.set_key_dynamically(parent_obj_32711,key_32707,val,mode_32708);
});
