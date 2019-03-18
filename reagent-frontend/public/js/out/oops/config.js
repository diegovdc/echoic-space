// Compiled by ClojureScript 1.10.312 {}
goog.provide('oops.config');
goog.require('cljs.core');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"unexpected-empty-selector","unexpected-empty-selector",-572791900),new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),new cljs.core.Keyword(null,"object-is-frozen","object-is-frozen",-1391578096),new cljs.core.Keyword(null,"expected-function-value","expected-function-value",-1399123630),new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new cljs.core.Keyword(null,"invalid-selector","invalid-selector",1262807990),new cljs.core.Keyword(null,"unexpected-punching-selector","unexpected-punching-selector",-1934135338),new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),new cljs.core.Keyword(null,"object-is-sealed","object-is-sealed",-1791813926),new cljs.core.Keyword(null,"unexpected-object-value","unexpected-object-value",-1214439301),new cljs.core.Keyword(null,"unexpected-soft-selector","unexpected-soft-selector",-1117708580),new cljs.core.Keyword(null,"missing-object-key","missing-object-key",-1300201731),new cljs.core.Keyword(null,"object-key-not-writable","object-key-not-writable",206336031)],[new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"console","console",1228072057),true,new cljs.core.Keyword(null,"throw","throw",-1044625833),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"js-obj","js-obj",-1298148277),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),true,new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032)]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config.call(null);
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_.call(null,new_config)){
} else {
throw (new Error("Assert failed: (map? new-config)"));
}

oops.config._STAR_runtime_config_STAR_ = new_config;

return new_config;
});
oops.config.get_current_runtime_config = (function oops$config$get_current_runtime_config(){
return oops.config._STAR_runtime_config_STAR_;
});
oops.config.update_current_runtime_config_BANG_ = (function oops$config$update_current_runtime_config_BANG_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___26921 = arguments.length;
var i__4518__auto___26922 = (0);
while(true){
if((i__4518__auto___26922 < len__4517__auto___26921)){
args__4520__auto__.push((arguments[i__4518__auto___26922]));

var G__26923 = (i__4518__auto___26922 + (1));
i__4518__auto___26922 = G__26923;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_.call(null,f_or_map)){
return oops.config.update_current_runtime_config_BANG_.call(null,cljs.core.merge,f_or_map);
} else {
return oops.config.set_current_runtime_config_BANG_.call(null,cljs.core.apply.call(null,f_or_map,oops.config.get_current_runtime_config.call(null),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq26919){
var G__26920 = cljs.core.first.call(null,seq26919);
var seq26919__$1 = cljs.core.next.call(null,seq26919);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26920,seq26919__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__4520__auto__ = [];
var len__4517__auto___26930 = arguments.length;
var i__4518__auto___26931 = (0);
while(true){
if((i__4518__auto___26931 < len__4517__auto___26930)){
args__4520__auto__.push((arguments[i__4518__auto___26931]));

var G__26932 = (i__4518__auto___26931 + (1));
i__4518__auto___26931 = G__26932;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__26926){
var vec__26927 = p__26926;
var config = cljs.core.nth.call(null,vec__26927,(0),null);
return key.call(null,(function (){var or__3936__auto__ = config;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})());
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.get_config_key.cljs$lang$applyTo = (function (seq26924){
var G__26925 = cljs.core.first.call(null,seq26924);
var seq26924__$1 = cljs.core.next.call(null,seq26924);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26925,seq26924__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___26939 = arguments.length;
var i__4518__auto___26940 = (0);
while(true){
if((i__4518__auto___26940 < len__4517__auto___26939)){
args__4520__auto__.push((arguments[i__4518__auto___26940]));

var G__26941 = (i__4518__auto___26940 + (1));
i__4518__auto___26940 = G__26941;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__26935){
var vec__26936 = p__26935;
var config = cljs.core.nth.call(null,vec__26936,(0),null);
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457),cljs.core.get.call(null,(function (){var or__3936__auto__ = config;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return oops.config.get_current_runtime_config.call(null);
}
})(),key,new cljs.core.Keyword("oops.config","not-found","oops.config/not-found",105443457)));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq26933){
var G__26934 = cljs.core.first.call(null,seq26933);
var seq26933__$1 = cljs.core.next.call(null,seq26933);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26934,seq26933__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__4520__auto__ = [];
var len__4517__auto___26947 = arguments.length;
var i__4518__auto___26948 = (0);
while(true){
if((i__4518__auto___26948 < len__4517__auto___26947)){
args__4520__auto__.push((arguments[i__4518__auto___26948]));

var G__26949 = (i__4518__auto___26948 + (1));
i__4518__auto___26948 = G__26949;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__26943){
var vec__26944 = p__26943;
var config = cljs.core.nth.call(null,vec__26944,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"error-reporting","error-reporting",1274700782),config);
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq26942){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26942));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__4520__auto__ = [];
var len__4517__auto___26955 = arguments.length;
var i__4518__auto___26956 = (0);
while(true){
if((i__4518__auto___26956 < len__4517__auto___26955)){
args__4520__auto__.push((arguments[i__4518__auto___26956]));

var G__26957 = (i__4518__auto___26956 + (1));
i__4518__auto___26956 = G__26957;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__26951){
var vec__26952 = p__26951;
var config = cljs.core.nth.call(null,vec__26952,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"warning-reporting","warning-reporting",-319054391),config);
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq26950){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26950));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__4520__auto__ = [];
var len__4517__auto___26963 = arguments.length;
var i__4518__auto___26964 = (0);
while(true){
if((i__4518__auto___26964 < len__4517__auto___26963)){
args__4520__auto__.push((arguments[i__4518__auto___26964]));

var G__26965 = (i__4518__auto___26964 + (1));
i__4518__auto___26964 = G__26965;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__26959){
var vec__26960 = p__26959;
var config = cljs.core.nth.call(null,vec__26960,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"suppress-reporting","suppress-reporting",43885458),config);
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq26958){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26958));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__4520__auto__ = [];
var len__4517__auto___26971 = arguments.length;
var i__4518__auto___26972 = (0);
while(true){
if((i__4518__auto___26972 < len__4517__auto___26971)){
args__4520__auto__.push((arguments[i__4518__auto___26972]));

var G__26973 = (i__4518__auto___26972 + (1));
i__4518__auto___26972 = G__26973;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__26967){
var vec__26968 = p__26967;
var config = cljs.core.nth.call(null,vec__26968,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),config);
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_child_factory.cljs$lang$applyTo = (function (seq26966){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26966));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"child-factory","child-factory",-1019029066),new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___26979 = arguments.length;
var i__4518__auto___26980 = (0);
while(true){
if((i__4518__auto___26980 < len__4517__auto___26979)){
args__4520__auto__.push((arguments[i__4518__auto___26980]));

var G__26981 = (i__4518__auto___26980 + (1));
i__4518__auto___26980 = G__26981;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26975){
var vec__26976 = p__26975;
var config = cljs.core.nth.call(null,vec__26976,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"throw-errors-from-macro-call-sites","throw-errors-from-macro-call-sites",-1338743049),config) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq26974){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26974));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___26987 = arguments.length;
var i__4518__auto___26988 = (0);
while(true){
if((i__4518__auto___26988 < len__4517__auto___26987)){
args__4520__auto__.push((arguments[i__4518__auto___26988]));

var G__26989 = (i__4518__auto___26988 + (1));
i__4518__auto___26988 = G__26989;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__26983){
var vec__26984 = p__26983;
var config = cljs.core.nth.call(null,vec__26984,(0),null);
return oops.config.get_config_key.call(null,new cljs.core.Keyword(null,"use-envelope","use-envelope",-2007197780),config) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq26982){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq26982));
});


//# sourceMappingURL=config.js.map?rel=1552590639003
