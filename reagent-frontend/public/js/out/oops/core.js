// Compiled by ClojureScript 1.10.312 {}
goog.provide('oops.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.object');
goog.require('oops.sdefs');
goog.require('oops.state');
goog.require('oops.config');
goog.require('oops.messages');
goog.require('oops.helpers');
goog.require('oops.schema');
oops.core.report_error_dynamically = (function oops$core$report_error_dynamically(msg,data){
if(oops.state.was_error_reported_QMARK_.call(null)){
return null;
} else {
oops.state.mark_error_reported_BANG_.call(null);

var G__48428 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__48428)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__48428)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__48428)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48428)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__48429 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__48429)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__48429)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__48429)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48429)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4520__auto__ = [];
var len__4517__auto___48437 = arguments.length;
var i__4518__auto___48438 = (0);
while(true){
if((i__4518__auto___48438 < len__4517__auto___48437)){
args__4520__auto__.push((arguments[i__4518__auto___48438]));

var G__48439 = (i__4518__auto___48438 + (1));
i__4518__auto___48438 = G__48439;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__48432){
var vec__48433 = p__48432;
var info = cljs.core.nth.call(null,vec__48433,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__48436_48440 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__48436_48440)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__48436_48440)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__48436_48440)){
} else {
if(cljs.core._EQ_.call(null,null,G__48436_48440)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48436_48440)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq48430){
var G__48431 = cljs.core.first.call(null,seq48430);
var seq48430__$1 = cljs.core.next.call(null,seq48430);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48431,seq48430__$1);
});

oops.core.validate_object_access_dynamically = (function oops$core$validate_object_access_dynamically(obj,mode,key,push_QMARK_,check_key_read_QMARK_,check_key_write_QMARK_){
if(((((cljs.core._EQ_.call(null,mode,(0))) && ((void 0 === obj))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"undefined",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((((cljs.core._EQ_.call(null,mode,(0))) && ((obj == null))))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"nil",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isBoolean(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"boolean",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isNumber(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"number",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isString(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"string",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):((cljs.core.not.call(null,goog.isObject(obj)))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"non-object",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return false;
})()
):(cljs.core.truth_(goog.isDateLike(obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"date-like",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_type_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs type",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):(cljs.core.truth_(oops.helpers.cljs_instance_QMARK_.call(null,obj))?((cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301)))?true:(function (){
oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"flavor","flavor",-1331636636),"cljs instance",new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

return true;
})()
):true
)))))))))){
if(cljs.core.truth_(push_QMARK_)){
oops.state.add_key_to_current_path_BANG_.call(null,key);

oops.state.set_last_access_modifier_BANG_.call(null,mode);
} else {
}

var and__3925__auto__ = (cljs.core.truth_(check_key_read_QMARK_)?((((cljs.core._EQ_.call(null,mode,(0))) && (cljs.core.not.call(null,goog.object.containsKey(obj,key)))))?oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null)):true):true);
if(cljs.core.truth_(and__3925__auto__)){
if(cljs.core.truth_(check_key_write_QMARK_)){
var temp__5459__auto__ = oops.helpers.get_property_descriptor.call(null,obj,key);
if((temp__5459__auto__ == null)){
if(cljs.core.truth_(oops.helpers.is_object_frozen_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
if(cljs.core.truth_(oops.helpers.is_object_sealed_QMARK_.call(null,obj))){
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
} else {
return true;

}
}
} else {
var descriptor_48441 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_48441);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_48442 = temp__5459__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_48442,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
if(((cljs.core._EQ_.call(null,mode,(1))) && ((fn == null)))){
return true;
} else {
if(cljs.core.truth_(goog.isFunction(fn))){
return true;
} else {
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"soft?","soft?",-1339668477),cljs.core._EQ_.call(null,mode,(1)),new cljs.core.Keyword(null,"fn","fn",-1175266204),fn,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));

}
}
});
oops.core.punch_key_dynamically_BANG_ = (function oops$core$punch_key_dynamically_BANG_(obj,key){
var child_factory_48444 = oops.config.get_child_factory.call(null);
var child_factory_48444__$1 = (function (){var G__48445 = child_factory_48444;
var G__48445__$1 = (((G__48445 instanceof cljs.core.Keyword))?G__48445.fqn:null);
switch (G__48445__$1) {
case "js-obj":
return ((function (G__48445,G__48445__$1,child_factory_48444){
return (function (){
return {};
});
;})(G__48445,G__48445__$1,child_factory_48444))

break;
case "js-array":
return ((function (G__48445,G__48445__$1,child_factory_48444){
return (function (){
return [];
});
;})(G__48445,G__48445__$1,child_factory_48444))

break;
default:
return child_factory_48444;

}
})();

var child_obj_48443 = child_factory_48444__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_48443);
} else {
}

return child_obj_48443;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_48449 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_48449);

return selector_path_48449;
} else {
var selector_path_48450 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_48450);

return selector_path_48450;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_48451 = temp__5461__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_48451);
}
});
oops.core.get_key_dynamically = (function oops$core$get_key_dynamically(obj,key,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,false)){
return (obj[key]);
} else {
return null;
}
});
oops.core.set_key_dynamically = (function oops$core$set_key_dynamically(obj,key,val,mode){
if(oops.core.validate_object_access_dynamically.call(null,obj,mode,key,true,true,true)){
return (obj[key] = val);
} else {
return null;
}
});
oops.core.get_selector_dynamically = (function oops$core$get_selector_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_48460 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_48460,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_48453 = (function (){var path_48452 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_48452,(0));

return path_48452;
})();
var len_48454 = path_48453.length;
var i_48455 = (0);
var obj_48456 = obj;
while(true){
if((i_48455 < len_48454)){
var mode_48457 = (path_48453[i_48455]);
var key_48458 = (path_48453[(i_48455 + (1))]);
var next_obj_48459 = oops.core.get_key_dynamically.call(null,obj_48456,key_48458,mode_48457);
var G__48461 = mode_48457;
switch (G__48461) {
case (0):
var G__48463 = (i_48455 + (2));
var G__48464 = next_obj_48459;
i_48455 = G__48463;
obj_48456 = G__48464;
continue;

break;
case (1):
if(!((next_obj_48459 == null))){
var G__48465 = (i_48455 + (2));
var G__48466 = next_obj_48459;
i_48455 = G__48465;
obj_48456 = G__48466;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_48459 == null))){
var G__48467 = (i_48455 + (2));
var G__48468 = next_obj_48459;
i_48455 = G__48467;
obj_48456 = G__48468;
continue;
} else {
var G__48469 = (i_48455 + (2));
var G__48470 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48456,key_48458);
i_48455 = G__48469;
obj_48456 = G__48470;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48461)].join('')));

}
} else {
return obj_48456;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_48496 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_48496,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_48472 = (function (){var path_48471 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_48471,(0));

return path_48471;
})();
var len_48473 = path_48472.length;
if((len_48473 < (4))){
return [obj,(function (){var path_48475 = path_48472;
var len_48476 = path_48475.length;
var i_48477 = (0);
var obj_48478 = obj;
while(true){
if((i_48477 < len_48476)){
var mode_48479 = (path_48475[i_48477]);
var key_48480 = (path_48475[(i_48477 + (1))]);
var next_obj_48481 = oops.core.get_key_dynamically.call(null,obj_48478,key_48480,mode_48479);
var G__48497 = mode_48479;
switch (G__48497) {
case (0):
var G__48501 = (i_48477 + (2));
var G__48502 = next_obj_48481;
i_48477 = G__48501;
obj_48478 = G__48502;
continue;

break;
case (1):
if(!((next_obj_48481 == null))){
var G__48503 = (i_48477 + (2));
var G__48504 = next_obj_48481;
i_48477 = G__48503;
obj_48478 = G__48504;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_48481 == null))){
var G__48505 = (i_48477 + (2));
var G__48506 = next_obj_48481;
i_48477 = G__48505;
obj_48478 = G__48506;
continue;
} else {
var G__48507 = (i_48477 + (2));
var G__48508 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48478,key_48480);
i_48477 = G__48507;
obj_48478 = G__48508;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48497)].join('')));

}
} else {
return obj_48478;
}
break;
}
})()];
} else {
var target_obj_48474 = (function (){var path_48482 = path_48472.slice((0),(len_48473 - (2)));
var len_48483 = path_48482.length;
var i_48484 = (0);
var obj_48485 = obj;
while(true){
if((i_48484 < len_48483)){
var mode_48486 = (path_48482[i_48484]);
var key_48487 = (path_48482[(i_48484 + (1))]);
var next_obj_48488 = oops.core.get_key_dynamically.call(null,obj_48485,key_48487,mode_48486);
var G__48498 = mode_48486;
switch (G__48498) {
case (0):
var G__48510 = (i_48484 + (2));
var G__48511 = next_obj_48488;
i_48484 = G__48510;
obj_48485 = G__48511;
continue;

break;
case (1):
if(!((next_obj_48488 == null))){
var G__48512 = (i_48484 + (2));
var G__48513 = next_obj_48488;
i_48484 = G__48512;
obj_48485 = G__48513;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_48488 == null))){
var G__48514 = (i_48484 + (2));
var G__48515 = next_obj_48488;
i_48484 = G__48514;
obj_48485 = G__48515;
continue;
} else {
var G__48516 = (i_48484 + (2));
var G__48517 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48485,key_48487);
i_48484 = G__48516;
obj_48485 = G__48517;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48498)].join('')));

}
} else {
return obj_48485;
}
break;
}
})();
return [target_obj_48474,(function (){var path_48489 = [(path_48472[(len_48473 - (2))]),(path_48472[(len_48473 - (1))])];
var len_48490 = path_48489.length;
var i_48491 = (0);
var obj_48492 = target_obj_48474;
while(true){
if((i_48491 < len_48490)){
var mode_48493 = (path_48489[i_48491]);
var key_48494 = (path_48489[(i_48491 + (1))]);
var next_obj_48495 = oops.core.get_key_dynamically.call(null,obj_48492,key_48494,mode_48493);
var G__48499 = mode_48493;
switch (G__48499) {
case (0):
var G__48519 = (i_48491 + (2));
var G__48520 = next_obj_48495;
i_48491 = G__48519;
obj_48492 = G__48520;
continue;

break;
case (1):
if(!((next_obj_48495 == null))){
var G__48521 = (i_48491 + (2));
var G__48522 = next_obj_48495;
i_48491 = G__48521;
obj_48492 = G__48522;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_48495 == null))){
var G__48523 = (i_48491 + (2));
var G__48524 = next_obj_48495;
i_48491 = G__48523;
obj_48492 = G__48524;
continue;
} else {
var G__48525 = (i_48491 + (2));
var G__48526 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48492,key_48494);
i_48491 = G__48525;
obj_48492 = G__48526;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48499)].join('')));

}
} else {
return obj_48492;
}
break;
}
})()];
}
} else {
return null;
}
});
oops.core.set_selector_dynamically = (function oops$core$set_selector_dynamically(obj,selector,val){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_48541 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_48541,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_48528 = (function (){var path_48527 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_48527,(1));

return path_48527;
})();
var len_48531 = path_48528.length;
var parent_obj_path_48532 = path_48528.slice((0),(len_48531 - (2)));
var key_48529 = (path_48528[(len_48531 - (1))]);
var mode_48530 = (path_48528[(len_48531 - (2))]);
var parent_obj_48533 = (function (){var path_48534 = parent_obj_path_48532;
var len_48535 = path_48534.length;
var i_48536 = (0);
var obj_48537 = obj;
while(true){
if((i_48536 < len_48535)){
var mode_48538 = (path_48534[i_48536]);
var key_48539 = (path_48534[(i_48536 + (1))]);
var next_obj_48540 = oops.core.get_key_dynamically.call(null,obj_48537,key_48539,mode_48538);
var G__48542 = mode_48538;
switch (G__48542) {
case (0):
var G__48544 = (i_48536 + (2));
var G__48545 = next_obj_48540;
i_48536 = G__48544;
obj_48537 = G__48545;
continue;

break;
case (1):
if(!((next_obj_48540 == null))){
var G__48546 = (i_48536 + (2));
var G__48547 = next_obj_48540;
i_48536 = G__48546;
obj_48537 = G__48547;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_48540 == null))){
var G__48548 = (i_48536 + (2));
var G__48549 = next_obj_48540;
i_48536 = G__48548;
obj_48537 = G__48549;
continue;
} else {
var G__48550 = (i_48536 + (2));
var G__48551 = oops.core.punch_key_dynamically_BANG_.call(null,obj_48537,key_48539);
i_48536 = G__48550;
obj_48537 = G__48551;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__48542)].join('')));

}
} else {
return obj_48537;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_48533,key_48529,val,mode_48530);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1552956586674
