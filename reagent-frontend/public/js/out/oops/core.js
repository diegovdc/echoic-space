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

var G__41644 = oops.config.get_error_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__41644)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__41644)){
return oops.state.get_console_reporter.call(null).call(null,(console["error"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__41644)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41644)].join('')));

}
}
}
}
});
oops.core.report_warning_dynamically = (function oops$core$report_warning_dynamically(msg,data){
var G__41645 = oops.config.get_warning_reporting.call(null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"throw","throw",-1044625833),G__41645)){
throw oops.state.prepare_error_from_call_site.call(null,msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"console","console",1228072057),G__41645)){
return oops.state.get_console_reporter.call(null).call(null,(console["warn"]),msg,oops.helpers.wrap_data_in_enveloper_if_possible.call(null,oops.config.use_envelope_QMARK_.call(null),data));
} else {
if(cljs.core._EQ_.call(null,false,G__41645)){
return null;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41645)].join('')));

}
}
}
});
oops.core.report_if_needed_dynamically = (function oops$core$report_if_needed_dynamically(var_args){
var args__4520__auto__ = [];
var len__4517__auto___41653 = arguments.length;
var i__4518__auto___41654 = (0);
while(true){
if((i__4518__auto___41654 < len__4517__auto___41653)){
args__4520__auto__.push((arguments[i__4518__auto___41654]));

var G__41655 = (i__4518__auto___41654 + (1));
i__4518__auto___41654 = G__41655;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.core.report_if_needed_dynamically.cljs$core$IFn$_invoke$arity$variadic = (function (msg_id,p__41648){
var vec__41649 = p__41648;
var info = cljs.core.nth.call(null,vec__41649,(0),null);

if(cljs.core.contains_QMARK_.call(null,oops.config.get_suppress_reporting.call(null),msg_id)){
} else {
var G__41652_41656 = oops.config.get_config_key.call(null,msg_id);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),G__41652_41656)){
oops.core.report_warning_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"error","error",-978969032),G__41652_41656)){
oops.core.report_error_dynamically.call(null,oops.messages.runtime_message.call(null,msg_id,info),info);
} else {
if(cljs.core._EQ_.call(null,false,G__41652_41656)){
} else {
if(cljs.core._EQ_.call(null,null,G__41652_41656)){
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41652_41656)].join('')));

}
}
}
}
}

return null;
});

oops.core.report_if_needed_dynamically.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.core.report_if_needed_dynamically.cljs$lang$applyTo = (function (seq41646){
var G__41647 = cljs.core.first.call(null,seq41646);
var seq41646__$1 = cljs.core.next.call(null,seq41646);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__41647,seq41646__$1);
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
var descriptor_41657 = temp__5459__auto__;
var temp__5459__auto____$1 = oops.helpers.determine_property_non_writable_reason.call(null,descriptor_41657);
if((temp__5459__auto____$1 == null)){
return true;
} else {
var reason_41658 = temp__5459__auto____$1;
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),oops.state.get_key_path_str.call(null),new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"frozen?","frozen?",613726824),oops.helpers.is_object_frozen_QMARK_.call(null,obj),new cljs.core.Keyword(null,"reason","reason",-2070751759),reason_41658,new cljs.core.Keyword(null,"obj","obj",981763962),oops.state.get_target_object.call(null)], null));
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
var child_factory_41660 = oops.config.get_child_factory.call(null);
var child_factory_41660__$1 = (function (){var G__41661 = child_factory_41660;
var G__41661__$1 = (((G__41661 instanceof cljs.core.Keyword))?G__41661.fqn:null);
switch (G__41661__$1) {
case "js-obj":
return ((function (G__41661,G__41661__$1,child_factory_41660){
return (function (){
return {};
});
;})(G__41661,G__41661__$1,child_factory_41660))

break;
case "js-array":
return ((function (G__41661,G__41661__$1,child_factory_41660){
return (function (){
return [];
});
;})(G__41661,G__41661__$1,child_factory_41660))

break;
default:
return child_factory_41660;

}
})();

var child_obj_41659 = child_factory_41660__$1.call(null,obj,key);
if(oops.core.validate_object_access_dynamically.call(null,obj,(2),key,false,true,true)){
(obj[key] = child_obj_41659);
} else {
}

return child_obj_41659;
});
oops.core.build_path_dynamically = (function oops$core$build_path_dynamically(selector){
if(((typeof selector === 'string') || ((selector instanceof cljs.core.Keyword)))){
var selector_path_41665 = [];
oops.schema.prepare_simple_path_BANG_.call(null,selector,selector_path_41665);

return selector_path_41665;
} else {
var selector_path_41666 = [];
oops.schema.prepare_path_BANG_.call(null,selector,selector_path_41666);

return selector_path_41666;

}
});
oops.core.check_path_dynamically = (function oops$core$check_path_dynamically(path,op){
var temp__5461__auto__ = oops.schema.check_dynamic_path_BANG_.call(null,path,op);
if((temp__5461__auto__ == null)){
return null;
} else {
var issue_41667 = temp__5461__auto__;
return cljs.core.apply.call(null,oops.core.report_if_needed_dynamically,issue_41667);
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_41676 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_41676,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_41669 = (function (){var path_41668 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_41668,(0));

return path_41668;
})();
var len_41670 = path_41669.length;
var i_41671 = (0);
var obj_41672 = obj;
while(true){
if((i_41671 < len_41670)){
var mode_41673 = (path_41669[i_41671]);
var key_41674 = (path_41669[(i_41671 + (1))]);
var next_obj_41675 = oops.core.get_key_dynamically.call(null,obj_41672,key_41674,mode_41673);
var G__41677 = mode_41673;
switch (G__41677) {
case (0):
var G__41679 = (i_41671 + (2));
var G__41680 = next_obj_41675;
i_41671 = G__41679;
obj_41672 = G__41680;
continue;

break;
case (1):
if(!((next_obj_41675 == null))){
var G__41681 = (i_41671 + (2));
var G__41682 = next_obj_41675;
i_41671 = G__41681;
obj_41672 = G__41682;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_41675 == null))){
var G__41683 = (i_41671 + (2));
var G__41684 = next_obj_41675;
i_41671 = G__41683;
obj_41672 = G__41684;
continue;
} else {
var G__41685 = (i_41671 + (2));
var G__41686 = oops.core.punch_key_dynamically_BANG_.call(null,obj_41672,key_41674);
i_41671 = G__41685;
obj_41672 = G__41686;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41677)].join('')));

}
} else {
return obj_41672;
}
break;
}
} else {
return null;
}
});
oops.core.get_selector_call_info_dynamically = (function oops$core$get_selector_call_info_dynamically(obj,selector){
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_41712 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_41712,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_41688 = (function (){var path_41687 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_41687,(0));

return path_41687;
})();
var len_41689 = path_41688.length;
if((len_41689 < (4))){
return [obj,(function (){var path_41691 = path_41688;
var len_41692 = path_41691.length;
var i_41693 = (0);
var obj_41694 = obj;
while(true){
if((i_41693 < len_41692)){
var mode_41695 = (path_41691[i_41693]);
var key_41696 = (path_41691[(i_41693 + (1))]);
var next_obj_41697 = oops.core.get_key_dynamically.call(null,obj_41694,key_41696,mode_41695);
var G__41713 = mode_41695;
switch (G__41713) {
case (0):
var G__41717 = (i_41693 + (2));
var G__41718 = next_obj_41697;
i_41693 = G__41717;
obj_41694 = G__41718;
continue;

break;
case (1):
if(!((next_obj_41697 == null))){
var G__41719 = (i_41693 + (2));
var G__41720 = next_obj_41697;
i_41693 = G__41719;
obj_41694 = G__41720;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_41697 == null))){
var G__41721 = (i_41693 + (2));
var G__41722 = next_obj_41697;
i_41693 = G__41721;
obj_41694 = G__41722;
continue;
} else {
var G__41723 = (i_41693 + (2));
var G__41724 = oops.core.punch_key_dynamically_BANG_.call(null,obj_41694,key_41696);
i_41693 = G__41723;
obj_41694 = G__41724;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41713)].join('')));

}
} else {
return obj_41694;
}
break;
}
})()];
} else {
var target_obj_41690 = (function (){var path_41698 = path_41688.slice((0),(len_41689 - (2)));
var len_41699 = path_41698.length;
var i_41700 = (0);
var obj_41701 = obj;
while(true){
if((i_41700 < len_41699)){
var mode_41702 = (path_41698[i_41700]);
var key_41703 = (path_41698[(i_41700 + (1))]);
var next_obj_41704 = oops.core.get_key_dynamically.call(null,obj_41701,key_41703,mode_41702);
var G__41714 = mode_41702;
switch (G__41714) {
case (0):
var G__41726 = (i_41700 + (2));
var G__41727 = next_obj_41704;
i_41700 = G__41726;
obj_41701 = G__41727;
continue;

break;
case (1):
if(!((next_obj_41704 == null))){
var G__41728 = (i_41700 + (2));
var G__41729 = next_obj_41704;
i_41700 = G__41728;
obj_41701 = G__41729;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_41704 == null))){
var G__41730 = (i_41700 + (2));
var G__41731 = next_obj_41704;
i_41700 = G__41730;
obj_41701 = G__41731;
continue;
} else {
var G__41732 = (i_41700 + (2));
var G__41733 = oops.core.punch_key_dynamically_BANG_.call(null,obj_41701,key_41703);
i_41700 = G__41732;
obj_41701 = G__41733;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41714)].join('')));

}
} else {
return obj_41701;
}
break;
}
})();
return [target_obj_41690,(function (){var path_41705 = [(path_41688[(len_41689 - (2))]),(path_41688[(len_41689 - (1))])];
var len_41706 = path_41705.length;
var i_41707 = (0);
var obj_41708 = target_obj_41690;
while(true){
if((i_41707 < len_41706)){
var mode_41709 = (path_41705[i_41707]);
var key_41710 = (path_41705[(i_41707 + (1))]);
var next_obj_41711 = oops.core.get_key_dynamically.call(null,obj_41708,key_41710,mode_41709);
var G__41715 = mode_41709;
switch (G__41715) {
case (0):
var G__41735 = (i_41707 + (2));
var G__41736 = next_obj_41711;
i_41707 = G__41735;
obj_41708 = G__41736;
continue;

break;
case (1):
if(!((next_obj_41711 == null))){
var G__41737 = (i_41707 + (2));
var G__41738 = next_obj_41711;
i_41707 = G__41737;
obj_41708 = G__41738;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_41711 == null))){
var G__41739 = (i_41707 + (2));
var G__41740 = next_obj_41711;
i_41707 = G__41739;
obj_41708 = G__41740;
continue;
} else {
var G__41741 = (i_41707 + (2));
var G__41742 = oops.core.punch_key_dynamically_BANG_.call(null,obj_41708,key_41710);
i_41707 = G__41741;
obj_41708 = G__41742;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41715)].join('')));

}
} else {
return obj_41708;
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
if(cljs.core.truth_(((cljs.core.not.call(null,cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector)))?(function (){var explanation_41757 = cljs.spec.alpha.explain_data.call(null,new cljs.core.Keyword("oops.sdefs","obj-selector","oops.sdefs/obj-selector",655346305),selector);
return oops.core.report_if_needed_dynamically.call(null,new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"explanation","explanation",-1426612608),explanation_41757,new cljs.core.Keyword(null,"selector","selector",762528866),selector], null));
})():true))){
var path_41744 = (function (){var path_41743 = oops.core.build_path_dynamically.call(null,selector);
oops.core.check_path_dynamically.call(null,path_41743,(1));

return path_41743;
})();
var len_41747 = path_41744.length;
var parent_obj_path_41748 = path_41744.slice((0),(len_41747 - (2)));
var key_41745 = (path_41744[(len_41747 - (1))]);
var mode_41746 = (path_41744[(len_41747 - (2))]);
var parent_obj_41749 = (function (){var path_41750 = parent_obj_path_41748;
var len_41751 = path_41750.length;
var i_41752 = (0);
var obj_41753 = obj;
while(true){
if((i_41752 < len_41751)){
var mode_41754 = (path_41750[i_41752]);
var key_41755 = (path_41750[(i_41752 + (1))]);
var next_obj_41756 = oops.core.get_key_dynamically.call(null,obj_41753,key_41755,mode_41754);
var G__41758 = mode_41754;
switch (G__41758) {
case (0):
var G__41760 = (i_41752 + (2));
var G__41761 = next_obj_41756;
i_41752 = G__41760;
obj_41753 = G__41761;
continue;

break;
case (1):
if(!((next_obj_41756 == null))){
var G__41762 = (i_41752 + (2));
var G__41763 = next_obj_41756;
i_41752 = G__41762;
obj_41753 = G__41763;
continue;
} else {
return null;
}

break;
case (2):
if(!((next_obj_41756 == null))){
var G__41764 = (i_41752 + (2));
var G__41765 = next_obj_41756;
i_41752 = G__41764;
obj_41753 = G__41765;
continue;
} else {
var G__41766 = (i_41752 + (2));
var G__41767 = oops.core.punch_key_dynamically_BANG_.call(null,obj_41753,key_41755);
i_41752 = G__41766;
obj_41753 = G__41767;
continue;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__41758)].join('')));

}
} else {
return obj_41753;
}
break;
}
})();
return oops.core.set_key_dynamically.call(null,parent_obj_41749,key_41745,val,mode_41746);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1553997023395
