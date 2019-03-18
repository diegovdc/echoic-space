// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('oops.config');
goog.require('cljs.core');
goog.require('cljs.core.constants');
oops.config.get_initial_runtime_config = (function oops$config$get_initial_runtime_config(){
return cljs.core.PersistentHashMap.fromArrays([cljs.core.cst$kw$unexpected_DASH_empty_DASH_selector,cljs.core.cst$kw$warning_DASH_reporting,cljs.core.cst$kw$use_DASH_envelope,cljs.core.cst$kw$error_DASH_reporting,cljs.core.cst$kw$object_DASH_is_DASH_frozen,cljs.core.cst$kw$expected_DASH_function_DASH_value,cljs.core.cst$kw$child_DASH_factory,cljs.core.cst$kw$invalid_DASH_selector,cljs.core.cst$kw$unexpected_DASH_punching_DASH_selector,cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.cst$kw$object_DASH_is_DASH_sealed,cljs.core.cst$kw$unexpected_DASH_object_DASH_value,cljs.core.cst$kw$unexpected_DASH_soft_DASH_selector,cljs.core.cst$kw$missing_DASH_object_DASH_key,cljs.core.cst$kw$object_DASH_key_DASH_not_DASH_writable],[cljs.core.cst$kw$warn,cljs.core.cst$kw$console,true,cljs.core.cst$kw$throw,cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$js_DASH_obj,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,true,cljs.core.cst$kw$error,cljs.core.cst$kw$error,cljs.core.cst$kw$warn,cljs.core.cst$kw$error,cljs.core.cst$kw$error]);
});
oops.config._STAR_runtime_config_STAR_ = oops.config.get_initial_runtime_config();
oops.config.set_current_runtime_config_BANG_ = (function oops$config$set_current_runtime_config_BANG_(new_config){
if(cljs.core.map_QMARK_(new_config)){
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
var len__4517__auto___28795 = arguments.length;
var i__4518__auto___28796 = (0);
while(true){
if((i__4518__auto___28796 < len__4517__auto___28795)){
args__4520__auto__.push((arguments[i__4518__auto___28796]));

var G__28797 = (i__4518__auto___28796 + (1));
i__4518__auto___28796 = G__28797;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f_or_map,args){
if(cljs.core.map_QMARK_(f_or_map)){
return oops.config.update_current_runtime_config_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([f_or_map], 0));
} else {
return oops.config.set_current_runtime_config_BANG_(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_or_map,oops.config.get_current_runtime_config(),args));
}
});

oops.config.update_current_runtime_config_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.update_current_runtime_config_BANG_.cljs$lang$applyTo = (function (seq28793){
var G__28794 = cljs.core.first(seq28793);
var seq28793__$1 = cljs.core.next(seq28793);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28794,seq28793__$1);
});

oops.config.get_config_key = (function oops$config$get_config_key(var_args){
var args__4520__auto__ = [];
var len__4517__auto___28805 = arguments.length;
var i__4518__auto___28806 = (0);
while(true){
if((i__4518__auto___28806 < len__4517__auto___28805)){
args__4520__auto__.push((arguments[i__4518__auto___28806]));

var G__28807 = (i__4518__auto___28806 + (1));
i__4518__auto___28806 = G__28807;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__28800){
var vec__28801 = p__28800;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801,(0),null);
var G__28804 = (function (){var or__3936__auto__ = config;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})();
return (key.cljs$core$IFn$_invoke$arity$1 ? key.cljs$core$IFn$_invoke$arity$1(G__28804) : key.call(null,G__28804));
});

oops.config.get_config_key.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.get_config_key.cljs$lang$applyTo = (function (seq28798){
var G__28799 = cljs.core.first(seq28798);
var seq28798__$1 = cljs.core.next(seq28798);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28799,seq28798__$1);
});

oops.config.has_config_key_QMARK_ = (function oops$config$has_config_key_QMARK_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___28814 = arguments.length;
var i__4518__auto___28815 = (0);
while(true){
if((i__4518__auto___28815 < len__4517__auto___28814)){
args__4520__auto__.push((arguments[i__4518__auto___28815]));

var G__28816 = (i__4518__auto___28815 + (1));
i__4518__auto___28815 = G__28816;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

oops.config.has_config_key_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (key,p__28810){
var vec__28811 = p__28810;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28811,(0),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$oops$config_SLASH_not_DASH_found,cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__3936__auto__ = config;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return oops.config.get_current_runtime_config();
}
})(),key,cljs.core.cst$kw$oops$config_SLASH_not_DASH_found));
});

oops.config.has_config_key_QMARK_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
oops.config.has_config_key_QMARK_.cljs$lang$applyTo = (function (seq28808){
var G__28809 = cljs.core.first(seq28808);
var seq28808__$1 = cljs.core.next(seq28808);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__28809,seq28808__$1);
});

oops.config.get_error_reporting = (function oops$config$get_error_reporting(var_args){
var args__4520__auto__ = [];
var len__4517__auto___28822 = arguments.length;
var i__4518__auto___28823 = (0);
while(true){
if((i__4518__auto___28823 < len__4517__auto___28822)){
args__4520__auto__.push((arguments[i__4518__auto___28823]));

var G__28824 = (i__4518__auto___28823 + (1));
i__4518__auto___28823 = G__28824;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.get_error_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__28818){
var vec__28819 = p__28818;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28819,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$error_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_error_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_error_reporting.cljs$lang$applyTo = (function (seq28817){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28817));
});

oops.config.get_warning_reporting = (function oops$config$get_warning_reporting(var_args){
var args__4520__auto__ = [];
var len__4517__auto___28830 = arguments.length;
var i__4518__auto___28831 = (0);
while(true){
if((i__4518__auto___28831 < len__4517__auto___28830)){
args__4520__auto__.push((arguments[i__4518__auto___28831]));

var G__28832 = (i__4518__auto___28831 + (1));
i__4518__auto___28831 = G__28832;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.get_warning_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__28826){
var vec__28827 = p__28826;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28827,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$warning_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_warning_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_warning_reporting.cljs$lang$applyTo = (function (seq28825){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28825));
});

oops.config.get_suppress_reporting = (function oops$config$get_suppress_reporting(var_args){
var args__4520__auto__ = [];
var len__4517__auto___28838 = arguments.length;
var i__4518__auto___28839 = (0);
while(true){
if((i__4518__auto___28839 < len__4517__auto___28838)){
args__4520__auto__.push((arguments[i__4518__auto___28839]));

var G__28840 = (i__4518__auto___28839 + (1));
i__4518__auto___28839 = G__28840;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.get_suppress_reporting.cljs$core$IFn$_invoke$arity$variadic = (function (p__28834){
var vec__28835 = p__28834;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$suppress_DASH_reporting,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_suppress_reporting.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_suppress_reporting.cljs$lang$applyTo = (function (seq28833){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28833));
});

oops.config.get_child_factory = (function oops$config$get_child_factory(var_args){
var args__4520__auto__ = [];
var len__4517__auto___28846 = arguments.length;
var i__4518__auto___28847 = (0);
while(true){
if((i__4518__auto___28847 < len__4517__auto___28846)){
args__4520__auto__.push((arguments[i__4518__auto___28847]));

var G__28848 = (i__4518__auto___28847 + (1));
i__4518__auto___28847 = G__28848;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.get_child_factory.cljs$core$IFn$_invoke$arity$variadic = (function (p__28842){
var vec__28843 = p__28842;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28843,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$child_DASH_factory,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0));
});

oops.config.get_child_factory.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.get_child_factory.cljs$lang$applyTo = (function (seq28841){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28841));
});

oops.config.set_child_factory_BANG_ = (function oops$config$set_child_factory_BANG_(new_factory_fn){
return oops.config.update_current_runtime_config_BANG_(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$child_DASH_factory,new_factory_fn], null));
});
oops.config.throw_errors_from_macro_call_sites_QMARK_ = (function oops$config$throw_errors_from_macro_call_sites_QMARK_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___28854 = arguments.length;
var i__4518__auto___28855 = (0);
while(true){
if((i__4518__auto___28855 < len__4517__auto___28854)){
args__4520__auto__.push((arguments[i__4518__auto___28855]));

var G__28856 = (i__4518__auto___28855 + (1));
i__4518__auto___28855 = G__28856;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28850){
var vec__28851 = p__28850;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28851,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$throw_DASH_errors_DASH_from_DASH_macro_DASH_call_DASH_sites,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.throw_errors_from_macro_call_sites_QMARK_.cljs$lang$applyTo = (function (seq28849){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28849));
});

oops.config.use_envelope_QMARK_ = (function oops$config$use_envelope_QMARK_(var_args){
var args__4520__auto__ = [];
var len__4517__auto___28862 = arguments.length;
var i__4518__auto___28863 = (0);
while(true){
if((i__4518__auto___28863 < len__4517__auto___28862)){
args__4520__auto__.push((arguments[i__4518__auto___28863]));

var G__28864 = (i__4518__auto___28863 + (1));
i__4518__auto___28863 = G__28864;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

oops.config.use_envelope_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (p__28858){
var vec__28859 = p__28858;
var config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28859,(0),null);
return oops.config.get_config_key.cljs$core$IFn$_invoke$arity$variadic(cljs.core.cst$kw$use_DASH_envelope,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([config], 0)) === true;
});

oops.config.use_envelope_QMARK_.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
oops.config.use_envelope_QMARK_.cljs$lang$applyTo = (function (seq28857){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq28857));
});

