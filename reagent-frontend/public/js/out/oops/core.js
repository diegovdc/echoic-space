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

var G__55842 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__55842)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__55842)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__55842)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55842)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__55843 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__55843)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__55843)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__55843)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55843)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4520__auto__ = [];
var len__4517__auto___55851 = arguments.length;
var i__4518__auto___55852 = (0);
while(true){
if((i__4518__auto___55852 < len__4517__auto___55851)){
args__4520__auto__.push((arguments[i__4518__auto___55852]));

var G__55853 = (i__4518__auto___55852 + (1));
i__4518__auto___55852 = G__55853;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__55846){
var vec__55847 = p__55846;
var info = cljs.core.nth.call(null,vec__55847,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__55850_55854 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__55850_55854)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__55850_55854)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__55850_55854)){
} else {
if(cljs.core._EQ_.call(null,null,G__55850_55854)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55850_55854)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq55844){
var G__55845 = cljs.core.first.call(null,seq55844);
var seq55844__$1 = cljs.core.next.call(null,seq55844);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55845,seq55844__$1);
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
var descriptor_55855 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_55855);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_55856 = temp__5459__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_55856,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_55858 = oops.config.get_child_factory.call(null);
var child_factory_55858__$1 = (function (){var G__55859 = child_factory_55858;
var G__55859__$1 = (((G__55859 instanceof cljs.core.Keyword))?G__55859.fqn:null);
switch (G__55859__$1) {
case "js-obj":
return ((function (G__55859,G__55859__$1,child_factory_55858){
return (function (){
return {};
});
;})(G__55859,G__55859__$1,child_factory_55858))

break;
case "js-array":
return ((function (G__55859,G__55859__$1,child_factory_55858){
return (function (){
return [];
});
;})(G__55859,G__55859__$1,child_factory_55858))

break;
default:
return child_factory_55858;

}
})();

var child_obj_55857 = child_factory_55858__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_55857);
} else {
}

return child_obj_55857;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_55863 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_55863);

return selector_path_55863;
} else {
var selector_path_55864 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_55864);

return selector_path_55864;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_55865 = temp__5461__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_55865);
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_55874 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_55874,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_55867 = (function (){var path_55866 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_55866,(0));

return path_55866;
})();
var len_55868 = path_55867.length;
var i_55869 = (0);
var obj_55870 = obj;
while(true){
if((i_55869 < len_55868)){
var mode_55871 = (path_55867[i_55869]);
var key_55872 = (path_55867[(i_55869 + (1))]);
var next_obj_55873 = oops.core.get_key_dynamically.call(null,obj_55870,key_55872,mode_55871);
var G__55875 = mode_55871;
switch (G__55875) {
case (0):
var G__55877 = (i_55869 + (2));
var G__55878 = next_obj_55873;
i_55869 = G__55877;
obj_55870 = G__55878;
continue;

break;
case (1):
if(!((next_obj_55873 == null))){
var G__55879 = (i_55869 + (2));
var G__55880 = next_obj_55873;
i_55869 = G__55879;
obj_55870 = G__55880;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_55873 == null))){
var G__55881 = (i_55869 + (2));
var G__55882 = next_obj_55873;
i_55869 = G__55881;
obj_55870 = G__55882;
continue;
} else {
var G__55883 = (i_55869 + (2));
var G__55884 = oops.core.punch_key_dynamically_BANG_.call(null,obj_55870,key_55872);
i_55869 = G__55883;
obj_55870 = G__55884;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55875)].join('')));

}
} else {
return obj_55870;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_55910 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_55910,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_55886 = (function (){var path_55885 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_55885,(0));

return path_55885;
})();
var len_55887 = path_55886.length;
if((len_55887 < (4))){
return [obj,(function (){var path_55889 = path_55886;
var len_55890 = path_55889.length;
var i_55891 = (0);
var obj_55892 = obj;
while(true){
if((i_55891 < len_55890)){
var mode_55893 = (path_55889[i_55891]);
var key_55894 = (path_55889[(i_55891 + (1))]);
var next_obj_55895 = oops.core.get_key_dynamically.call(null,obj_55892,key_55894,mode_55893);
var G__55911 = mode_55893;
switch (G__55911) {
case (0):
var G__55915 = (i_55891 + (2));
var G__55916 = next_obj_55895;
i_55891 = G__55915;
obj_55892 = G__55916;
continue;

break;
case (1):
if(!((next_obj_55895 == null))){
var G__55917 = (i_55891 + (2));
var G__55918 = next_obj_55895;
i_55891 = G__55917;
obj_55892 = G__55918;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_55895 == null))){
var G__55919 = (i_55891 + (2));
var G__55920 = next_obj_55895;
i_55891 = G__55919;
obj_55892 = G__55920;
continue;
} else {
var G__55921 = (i_55891 + (2));
var G__55922 = oops.core.punch_key_dynamically_BANG_.call(null,obj_55892,key_55894);
i_55891 = G__55921;
obj_55892 = G__55922;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55911)].join('')));

}
} else {
return obj_55892;
}
break;
}
})()];
} else {
var target_obj_55888 = (function (){var path_55896 = path_55886.slice((0),(len_55887 - (2)));
var len_55897 = path_55896.length;
var i_55898 = (0);
var obj_55899 = obj;
while(true){
if((i_55898 < len_55897)){
var mode_55900 = (path_55896[i_55898]);
var key_55901 = (path_55896[(i_55898 + (1))]);
var next_obj_55902 = oops.core.get_key_dynamically.call(null,obj_55899,key_55901,mode_55900);
var G__55912 = mode_55900;
switch (G__55912) {
case (0):
var G__55924 = (i_55898 + (2));
var G__55925 = next_obj_55902;
i_55898 = G__55924;
obj_55899 = G__55925;
continue;

break;
case (1):
if(!((next_obj_55902 == null))){
var G__55926 = (i_55898 + (2));
var G__55927 = next_obj_55902;
i_55898 = G__55926;
obj_55899 = G__55927;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_55902 == null))){
var G__55928 = (i_55898 + (2));
var G__55929 = next_obj_55902;
i_55898 = G__55928;
obj_55899 = G__55929;
continue;
} else {
var G__55930 = (i_55898 + (2));
var G__55931 = oops.core.punch_key_dynamically_BANG_.call(null,obj_55899,key_55901);
i_55898 = G__55930;
obj_55899 = G__55931;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55912)].join('')));

}
} else {
return obj_55899;
}
break;
}
})();
return [target_obj_55888,(function (){var path_55903 = [(path_55886[(len_55887 - (2))]),(path_55886[(len_55887 - (1))])];
var len_55904 = path_55903.length;
var i_55905 = (0);
var obj_55906 = target_obj_55888;
while(true){
if((i_55905 < len_55904)){
var mode_55907 = (path_55903[i_55905]);
var key_55908 = (path_55903[(i_55905 + (1))]);
var next_obj_55909 = oops.core.get_key_dynamically.call(null,obj_55906,key_55908,mode_55907);
var G__55913 = mode_55907;
switch (G__55913) {
case (0):
var G__55933 = (i_55905 + (2));
var G__55934 = next_obj_55909;
i_55905 = G__55933;
obj_55906 = G__55934;
continue;

break;
case (1):
if(!((next_obj_55909 == null))){
var G__55935 = (i_55905 + (2));
var G__55936 = next_obj_55909;
i_55905 = G__55935;
obj_55906 = G__55936;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_55909 == null))){
var G__55937 = (i_55905 + (2));
var G__55938 = next_obj_55909;
i_55905 = G__55937;
obj_55906 = G__55938;
continue;
} else {
var G__55939 = (i_55905 + (2));
var G__55940 = oops.core.punch_key_dynamically_BANG_.call(null,obj_55906,key_55908);
i_55905 = G__55939;
obj_55906 = G__55940;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55913)].join('')));

}
} else {
return obj_55906;
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_55955 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_55955,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_55942 = (function (){var path_55941 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_55941,(1));

return path_55941;
})();
var len_55945 = path_55942.length;
var parent_obj_path_55946 = path_55942.slice((0),(len_55945 - (2)));
var key_55943 = (path_55942[(len_55945 - (1))]);
var mode_55944 = (path_55942[(len_55945 - (2))]);
var parent_obj_55947 = (function (){var path_55948 = parent_obj_path_55946;
var len_55949 = path_55948.length;
var i_55950 = (0);
var obj_55951 = obj;
while(true){
if((i_55950 < len_55949)){
var mode_55952 = (path_55948[i_55950]);
var key_55953 = (path_55948[(i_55950 + (1))]);
var next_obj_55954 = oops.core.get_key_dynamically.call(null,obj_55951,key_55953,mode_55952);
var G__55956 = mode_55952;
switch (G__55956) {
case (0):
var G__55958 = (i_55950 + (2));
var G__55959 = next_obj_55954;
i_55950 = G__55958;
obj_55951 = G__55959;
continue;

break;
case (1):
if(!((next_obj_55954 == null))){
var G__55960 = (i_55950 + (2));
var G__55961 = next_obj_55954;
i_55950 = G__55960;
obj_55951 = G__55961;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_55954 == null))){
var G__55962 = (i_55950 + (2));
var G__55963 = next_obj_55954;
i_55950 = G__55962;
obj_55951 = G__55963;
continue;
} else {
var G__55964 = (i_55950 + (2));
var G__55965 = oops.core.punch_key_dynamically_BANG_.call(null,obj_55951,key_55953);
i_55950 = G__55964;
obj_55951 = G__55965;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55956)].join('')));

}
} else {
return obj_55951;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_55947,key_55943,val,mode_55944);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1574224105637
