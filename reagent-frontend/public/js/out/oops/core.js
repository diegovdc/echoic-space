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

var G__37026 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__37026)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__37026)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__37026)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37026)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__37027 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__37027)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__37027)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__37027)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37027)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37035 = arguments.length;
var i__4518__auto___37036 = (0);
while(true){
if((i__4518__auto___37036 < len__4517__auto___37035)){
args__4520__auto__.push((arguments[i__4518__auto___37036]));

var G__37037 = (i__4518__auto___37036 + (1));
i__4518__auto___37036 = G__37037;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__37030){
var vec__37031 = p__37030;
var info = cljs.core.nth.call(null,vec__37031,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__37034_37038 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__37034_37038)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__37034_37038)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__37034_37038)){
} else {
if(cljs.core._EQ_.call(null,null,G__37034_37038)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37034_37038)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq37028){
var G__37029 = cljs.core.first.call(null,seq37028);
var seq37028__$1 = cljs.core.next.call(null,seq37028);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37029,seq37028__$1);
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
var descriptor_37039 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_37039);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_37040 = temp__5459__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_37040,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_37042 = oops.config.get_child_factory.call(null);
var child_factory_37042__$1 = (function (){var G__37043 = child_factory_37042;
var G__37043__$1 = (((G__37043 instanceof cljs.core.Keyword))?G__37043.fqn:null);
switch (G__37043__$1) {
case "js-obj":
return ((function (G__37043,G__37043__$1,child_factory_37042){
return (function (){
return {};
});
;})(G__37043,G__37043__$1,child_factory_37042))

break;
case "js-array":
return ((function (G__37043,G__37043__$1,child_factory_37042){
return (function (){
return [];
});
;})(G__37043,G__37043__$1,child_factory_37042))

break;
default:
return child_factory_37042;

}
})();

var child_obj_37041 = child_factory_37042__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_37041);
} else {
}

return child_obj_37041;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_37047 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_37047);

return selector_path_37047;
} else {
var selector_path_37048 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_37048);

return selector_path_37048;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_37049 = temp__5461__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_37049);
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_37058 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_37058,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_37051 = (function (){var path_37050 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_37050,(0));

return path_37050;
})();
var len_37052 = path_37051.length;
var i_37053 = (0);
var obj_37054 = obj;
while(true){
if((i_37053 < len_37052)){
var mode_37055 = (path_37051[i_37053]);
var key_37056 = (path_37051[(i_37053 + (1))]);
var next_obj_37057 = oops.core.get_key_dynamically.call(null,obj_37054,key_37056,mode_37055);
var G__37059 = mode_37055;
switch (G__37059) {
case (0):
var G__37061 = (i_37053 + (2));
var G__37062 = next_obj_37057;
i_37053 = G__37061;
obj_37054 = G__37062;
continue;

break;
case (1):
if(!((next_obj_37057 == null))){
var G__37063 = (i_37053 + (2));
var G__37064 = next_obj_37057;
i_37053 = G__37063;
obj_37054 = G__37064;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37057 == null))){
var G__37065 = (i_37053 + (2));
var G__37066 = next_obj_37057;
i_37053 = G__37065;
obj_37054 = G__37066;
continue;
} else {
var G__37067 = (i_37053 + (2));
var G__37068 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37054,key_37056);
i_37053 = G__37067;
obj_37054 = G__37068;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37059)].join('')));

}
} else {
return obj_37054;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_37094 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_37094,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_37070 = (function (){var path_37069 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_37069,(0));

return path_37069;
})();
var len_37071 = path_37070.length;
if((len_37071 < (4))){
return [obj,(function (){var path_37073 = path_37070;
var len_37074 = path_37073.length;
var i_37075 = (0);
var obj_37076 = obj;
while(true){
if((i_37075 < len_37074)){
var mode_37077 = (path_37073[i_37075]);
var key_37078 = (path_37073[(i_37075 + (1))]);
var next_obj_37079 = oops.core.get_key_dynamically.call(null,obj_37076,key_37078,mode_37077);
var G__37095 = mode_37077;
switch (G__37095) {
case (0):
var G__37099 = (i_37075 + (2));
var G__37100 = next_obj_37079;
i_37075 = G__37099;
obj_37076 = G__37100;
continue;

break;
case (1):
if(!((next_obj_37079 == null))){
var G__37101 = (i_37075 + (2));
var G__37102 = next_obj_37079;
i_37075 = G__37101;
obj_37076 = G__37102;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37079 == null))){
var G__37103 = (i_37075 + (2));
var G__37104 = next_obj_37079;
i_37075 = G__37103;
obj_37076 = G__37104;
continue;
} else {
var G__37105 = (i_37075 + (2));
var G__37106 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37076,key_37078);
i_37075 = G__37105;
obj_37076 = G__37106;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37095)].join('')));

}
} else {
return obj_37076;
}
break;
}
})()];
} else {
var target_obj_37072 = (function (){var path_37080 = path_37070.slice((0),(len_37071 - (2)));
var len_37081 = path_37080.length;
var i_37082 = (0);
var obj_37083 = obj;
while(true){
if((i_37082 < len_37081)){
var mode_37084 = (path_37080[i_37082]);
var key_37085 = (path_37080[(i_37082 + (1))]);
var next_obj_37086 = oops.core.get_key_dynamically.call(null,obj_37083,key_37085,mode_37084);
var G__37096 = mode_37084;
switch (G__37096) {
case (0):
var G__37108 = (i_37082 + (2));
var G__37109 = next_obj_37086;
i_37082 = G__37108;
obj_37083 = G__37109;
continue;

break;
case (1):
if(!((next_obj_37086 == null))){
var G__37110 = (i_37082 + (2));
var G__37111 = next_obj_37086;
i_37082 = G__37110;
obj_37083 = G__37111;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37086 == null))){
var G__37112 = (i_37082 + (2));
var G__37113 = next_obj_37086;
i_37082 = G__37112;
obj_37083 = G__37113;
continue;
} else {
var G__37114 = (i_37082 + (2));
var G__37115 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37083,key_37085);
i_37082 = G__37114;
obj_37083 = G__37115;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37096)].join('')));

}
} else {
return obj_37083;
}
break;
}
})();
return [target_obj_37072,(function (){var path_37087 = [(path_37070[(len_37071 - (2))]),(path_37070[(len_37071 - (1))])];
var len_37088 = path_37087.length;
var i_37089 = (0);
var obj_37090 = target_obj_37072;
while(true){
if((i_37089 < len_37088)){
var mode_37091 = (path_37087[i_37089]);
var key_37092 = (path_37087[(i_37089 + (1))]);
var next_obj_37093 = oops.core.get_key_dynamically.call(null,obj_37090,key_37092,mode_37091);
var G__37097 = mode_37091;
switch (G__37097) {
case (0):
var G__37117 = (i_37089 + (2));
var G__37118 = next_obj_37093;
i_37089 = G__37117;
obj_37090 = G__37118;
continue;

break;
case (1):
if(!((next_obj_37093 == null))){
var G__37119 = (i_37089 + (2));
var G__37120 = next_obj_37093;
i_37089 = G__37119;
obj_37090 = G__37120;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37093 == null))){
var G__37121 = (i_37089 + (2));
var G__37122 = next_obj_37093;
i_37089 = G__37121;
obj_37090 = G__37122;
continue;
} else {
var G__37123 = (i_37089 + (2));
var G__37124 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37090,key_37092);
i_37089 = G__37123;
obj_37090 = G__37124;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37097)].join('')));

}
} else {
return obj_37090;
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_37139 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_37139,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_37126 = (function (){var path_37125 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_37125,(1));

return path_37125;
})();
var len_37129 = path_37126.length;
var parent_obj_path_37130 = path_37126.slice((0),(len_37129 - (2)));
var key_37127 = (path_37126[(len_37129 - (1))]);
var mode_37128 = (path_37126[(len_37129 - (2))]);
var parent_obj_37131 = (function (){var path_37132 = parent_obj_path_37130;
var len_37133 = path_37132.length;
var i_37134 = (0);
var obj_37135 = obj;
while(true){
if((i_37134 < len_37133)){
var mode_37136 = (path_37132[i_37134]);
var key_37137 = (path_37132[(i_37134 + (1))]);
var next_obj_37138 = oops.core.get_key_dynamically.call(null,obj_37135,key_37137,mode_37136);
var G__37140 = mode_37136;
switch (G__37140) {
case (0):
var G__37142 = (i_37134 + (2));
var G__37143 = next_obj_37138;
i_37134 = G__37142;
obj_37135 = G__37143;
continue;

break;
case (1):
if(!((next_obj_37138 == null))){
var G__37144 = (i_37134 + (2));
var G__37145 = next_obj_37138;
i_37134 = G__37144;
obj_37135 = G__37145;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_37138 == null))){
var G__37146 = (i_37134 + (2));
var G__37147 = next_obj_37138;
i_37134 = G__37146;
obj_37135 = G__37147;
continue;
} else {
var G__37148 = (i_37134 + (2));
var G__37149 = oops.core.punch_key_dynamically_BANG_.call(null,obj_37135,key_37137);
i_37134 = G__37148;
obj_37135 = G__37149;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37140)].join('')));

}
} else {
return obj_37135;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_37131,key_37127,val,mode_37128);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1553576542029
