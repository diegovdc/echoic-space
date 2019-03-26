// Compiled by ClojureScript 1.10.312 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e34286){if((e34286 instanceof Error)){
var e = e34286;
return "Error: Unable to stringify";
} else {
throw e34286;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34289 = arguments.length;
switch (G__34289) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34287_SHARP_){
if(typeof p1__34287_SHARP_ === 'string'){
return p1__34287_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34287_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34292 = arguments.length;
var i__4518__auto___34293 = (0);
while(true){
if((i__4518__auto___34293 < len__4517__auto___34292)){
args__4520__auto__.push((arguments[i__4518__auto___34293]));

var G__34294 = (i__4518__auto___34293 + (1));
i__4518__auto___34293 = G__34294;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34291){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34291));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34296 = arguments.length;
var i__4518__auto___34297 = (0);
while(true){
if((i__4518__auto___34297 < len__4517__auto___34296)){
args__4520__auto__.push((arguments[i__4518__auto___34297]));

var G__34298 = (i__4518__auto___34297 + (1));
i__4518__auto___34297 = G__34298;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34295){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34295));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34299){
var map__34300 = p__34299;
var map__34300__$1 = ((((!((map__34300 == null)))?(((((map__34300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34300):map__34300);
var message = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34300__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3936__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3925__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3925__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3925__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32021__auto___34379 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32021__auto___34379,ch){
return (function (){
var f__32022__auto__ = (function (){var switch__31998__auto__ = ((function (c__32021__auto___34379,ch){
return (function (state_34351){
var state_val_34352 = (state_34351[(1)]);
if((state_val_34352 === (7))){
var inst_34347 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
var statearr_34353_34380 = state_34351__$1;
(statearr_34353_34380[(2)] = inst_34347);

(statearr_34353_34380[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (1))){
var state_34351__$1 = state_34351;
var statearr_34354_34381 = state_34351__$1;
(statearr_34354_34381[(2)] = null);

(statearr_34354_34381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (4))){
var inst_34304 = (state_34351[(7)]);
var inst_34304__$1 = (state_34351[(2)]);
var state_34351__$1 = (function (){var statearr_34355 = state_34351;
(statearr_34355[(7)] = inst_34304__$1);

return statearr_34355;
})();
if(cljs.core.truth_(inst_34304__$1)){
var statearr_34356_34382 = state_34351__$1;
(statearr_34356_34382[(1)] = (5));

} else {
var statearr_34357_34383 = state_34351__$1;
(statearr_34357_34383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (15))){
var inst_34311 = (state_34351[(8)]);
var inst_34326 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34311);
var inst_34327 = cljs.core.first.call(null,inst_34326);
var inst_34328 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34327);
var inst_34329 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34328)].join('');
var inst_34330 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34329);
var state_34351__$1 = state_34351;
var statearr_34358_34384 = state_34351__$1;
(statearr_34358_34384[(2)] = inst_34330);

(statearr_34358_34384[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (13))){
var inst_34335 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
var statearr_34359_34385 = state_34351__$1;
(statearr_34359_34385[(2)] = inst_34335);

(statearr_34359_34385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (6))){
var state_34351__$1 = state_34351;
var statearr_34360_34386 = state_34351__$1;
(statearr_34360_34386[(2)] = null);

(statearr_34360_34386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (17))){
var inst_34333 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
var statearr_34361_34387 = state_34351__$1;
(statearr_34361_34387[(2)] = inst_34333);

(statearr_34361_34387[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (3))){
var inst_34349 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34351__$1,inst_34349);
} else {
if((state_val_34352 === (12))){
var inst_34310 = (state_34351[(9)]);
var inst_34324 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34310,opts);
var state_34351__$1 = state_34351;
if(cljs.core.truth_(inst_34324)){
var statearr_34362_34388 = state_34351__$1;
(statearr_34362_34388[(1)] = (15));

} else {
var statearr_34363_34389 = state_34351__$1;
(statearr_34363_34389[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (2))){
var state_34351__$1 = state_34351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34351__$1,(4),ch);
} else {
if((state_val_34352 === (11))){
var inst_34311 = (state_34351[(8)]);
var inst_34316 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34317 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34311);
var inst_34318 = cljs.core.async.timeout.call(null,(1000));
var inst_34319 = [inst_34317,inst_34318];
var inst_34320 = (new cljs.core.PersistentVector(null,2,(5),inst_34316,inst_34319,null));
var state_34351__$1 = state_34351;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34351__$1,(14),inst_34320);
} else {
if((state_val_34352 === (9))){
var inst_34311 = (state_34351[(8)]);
var inst_34337 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34338 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34311);
var inst_34339 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34338);
var inst_34340 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34339)].join('');
var inst_34341 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34340);
var state_34351__$1 = (function (){var statearr_34364 = state_34351;
(statearr_34364[(10)] = inst_34337);

return statearr_34364;
})();
var statearr_34365_34390 = state_34351__$1;
(statearr_34365_34390[(2)] = inst_34341);

(statearr_34365_34390[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (5))){
var inst_34304 = (state_34351[(7)]);
var inst_34306 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34307 = (new cljs.core.PersistentArrayMap(null,2,inst_34306,null));
var inst_34308 = (new cljs.core.PersistentHashSet(null,inst_34307,null));
var inst_34309 = figwheel.client.focus_msgs.call(null,inst_34308,inst_34304);
var inst_34310 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34309);
var inst_34311 = cljs.core.first.call(null,inst_34309);
var inst_34312 = figwheel.client.autoload_QMARK_.call(null);
var state_34351__$1 = (function (){var statearr_34366 = state_34351;
(statearr_34366[(9)] = inst_34310);

(statearr_34366[(8)] = inst_34311);

return statearr_34366;
})();
if(cljs.core.truth_(inst_34312)){
var statearr_34367_34391 = state_34351__$1;
(statearr_34367_34391[(1)] = (8));

} else {
var statearr_34368_34392 = state_34351__$1;
(statearr_34368_34392[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (14))){
var inst_34322 = (state_34351[(2)]);
var state_34351__$1 = state_34351;
var statearr_34369_34393 = state_34351__$1;
(statearr_34369_34393[(2)] = inst_34322);

(statearr_34369_34393[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (16))){
var state_34351__$1 = state_34351;
var statearr_34370_34394 = state_34351__$1;
(statearr_34370_34394[(2)] = null);

(statearr_34370_34394[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (10))){
var inst_34343 = (state_34351[(2)]);
var state_34351__$1 = (function (){var statearr_34371 = state_34351;
(statearr_34371[(11)] = inst_34343);

return statearr_34371;
})();
var statearr_34372_34395 = state_34351__$1;
(statearr_34372_34395[(2)] = null);

(statearr_34372_34395[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34352 === (8))){
var inst_34310 = (state_34351[(9)]);
var inst_34314 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34310,opts);
var state_34351__$1 = state_34351;
if(cljs.core.truth_(inst_34314)){
var statearr_34373_34396 = state_34351__$1;
(statearr_34373_34396[(1)] = (11));

} else {
var statearr_34374_34397 = state_34351__$1;
(statearr_34374_34397[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32021__auto___34379,ch))
;
return ((function (switch__31998__auto__,c__32021__auto___34379,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__31999__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__31999__auto____0 = (function (){
var statearr_34375 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34375[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__31999__auto__);

(statearr_34375[(1)] = (1));

return statearr_34375;
});
var figwheel$client$file_reloader_plugin_$_state_machine__31999__auto____1 = (function (state_34351){
while(true){
var ret_value__32000__auto__ = (function (){try{while(true){
var result__32001__auto__ = switch__31998__auto__.call(null,state_34351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32001__auto__;
}
break;
}
}catch (e34376){if((e34376 instanceof Object)){
var ex__32002__auto__ = e34376;
var statearr_34377_34398 = state_34351;
(statearr_34377_34398[(5)] = ex__32002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34376;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34399 = state_34351;
state_34351 = G__34399;
continue;
} else {
return ret_value__32000__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__31999__auto__ = function(state_34351){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__31999__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__31999__auto____1.call(this,state_34351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__31999__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__31999__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__31999__auto__;
})()
;})(switch__31998__auto__,c__32021__auto___34379,ch))
})();
var state__32023__auto__ = (function (){var statearr_34378 = f__32022__auto__.call(null);
(statearr_34378[(6)] = c__32021__auto___34379);

return statearr_34378;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32023__auto__);
});})(c__32021__auto___34379,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34400_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34400_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_34404 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34404){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_34402 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_34403 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_34402,_STAR_print_fn_STAR_34403,sb,base_path_34404){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_34402,_STAR_print_fn_STAR_34403,sb,base_path_34404))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = ((!(typeof result_value === 'string'))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_34403;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_34402;
}}catch (e34401){if((e34401 instanceof Error)){
var e = e34401;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34404], null));
} else {
var e = e34401;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_34404))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34405){
var map__34406 = p__34405;
var map__34406__$1 = ((((!((map__34406 == null)))?(((((map__34406.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34406.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34406):map__34406);
var opts = map__34406__$1;
var build_id = cljs.core.get.call(null,map__34406__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34406,map__34406__$1,opts,build_id){
return (function (p__34408){
var vec__34409 = p__34408;
var seq__34410 = cljs.core.seq.call(null,vec__34409);
var first__34411 = cljs.core.first.call(null,seq__34410);
var seq__34410__$1 = cljs.core.next.call(null,seq__34410);
var map__34412 = first__34411;
var map__34412__$1 = ((((!((map__34412 == null)))?(((((map__34412.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34412.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34412):map__34412);
var msg = map__34412__$1;
var msg_name = cljs.core.get.call(null,map__34412__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34410__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34409,seq__34410,first__34411,seq__34410__$1,map__34412,map__34412__$1,msg,msg_name,_,map__34406,map__34406__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34409,seq__34410,first__34411,seq__34410__$1,map__34412,map__34412__$1,msg,msg_name,_,map__34406,map__34406__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34406,map__34406__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34414){
var vec__34415 = p__34414;
var seq__34416 = cljs.core.seq.call(null,vec__34415);
var first__34417 = cljs.core.first.call(null,seq__34416);
var seq__34416__$1 = cljs.core.next.call(null,seq__34416);
var map__34418 = first__34417;
var map__34418__$1 = ((((!((map__34418 == null)))?(((((map__34418.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34418.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34418):map__34418);
var msg = map__34418__$1;
var msg_name = cljs.core.get.call(null,map__34418__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34416__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34420){
var map__34421 = p__34420;
var map__34421__$1 = ((((!((map__34421 == null)))?(((((map__34421.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34421.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34421):map__34421);
var on_compile_warning = cljs.core.get.call(null,map__34421__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34421__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34421,map__34421__$1,on_compile_warning,on_compile_fail){
return (function (p__34423){
var vec__34424 = p__34423;
var seq__34425 = cljs.core.seq.call(null,vec__34424);
var first__34426 = cljs.core.first.call(null,seq__34425);
var seq__34425__$1 = cljs.core.next.call(null,seq__34425);
var map__34427 = first__34426;
var map__34427__$1 = ((((!((map__34427 == null)))?(((((map__34427.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34427.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34427):map__34427);
var msg = map__34427__$1;
var msg_name = cljs.core.get.call(null,map__34427__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34425__$1;
var pred__34429 = cljs.core._EQ_;
var expr__34430 = msg_name;
if(cljs.core.truth_(pred__34429.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34430))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34429.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34430))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34421,map__34421__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32021__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32022__auto__ = (function (){var switch__31998__auto__ = ((function (c__32021__auto__,msg_hist,msg_names,msg){
return (function (state_34519){
var state_val_34520 = (state_34519[(1)]);
if((state_val_34520 === (7))){
var inst_34439 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34439)){
var statearr_34521_34568 = state_34519__$1;
(statearr_34521_34568[(1)] = (8));

} else {
var statearr_34522_34569 = state_34519__$1;
(statearr_34522_34569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (20))){
var inst_34513 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34523_34570 = state_34519__$1;
(statearr_34523_34570[(2)] = inst_34513);

(statearr_34523_34570[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (27))){
var inst_34509 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34524_34571 = state_34519__$1;
(statearr_34524_34571[(2)] = inst_34509);

(statearr_34524_34571[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (1))){
var inst_34432 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34432)){
var statearr_34525_34572 = state_34519__$1;
(statearr_34525_34572[(1)] = (2));

} else {
var statearr_34526_34573 = state_34519__$1;
(statearr_34526_34573[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (24))){
var inst_34511 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34527_34574 = state_34519__$1;
(statearr_34527_34574[(2)] = inst_34511);

(statearr_34527_34574[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (4))){
var inst_34517 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34519__$1,inst_34517);
} else {
if((state_val_34520 === (15))){
var inst_34515 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34528_34575 = state_34519__$1;
(statearr_34528_34575[(2)] = inst_34515);

(statearr_34528_34575[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (21))){
var inst_34468 = (state_34519[(2)]);
var inst_34469 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34470 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34469);
var state_34519__$1 = (function (){var statearr_34529 = state_34519;
(statearr_34529[(7)] = inst_34468);

return statearr_34529;
})();
var statearr_34530_34576 = state_34519__$1;
(statearr_34530_34576[(2)] = inst_34470);

(statearr_34530_34576[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (31))){
var inst_34498 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34498)){
var statearr_34531_34577 = state_34519__$1;
(statearr_34531_34577[(1)] = (34));

} else {
var statearr_34532_34578 = state_34519__$1;
(statearr_34532_34578[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (32))){
var inst_34507 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34533_34579 = state_34519__$1;
(statearr_34533_34579[(2)] = inst_34507);

(statearr_34533_34579[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (33))){
var inst_34494 = (state_34519[(2)]);
var inst_34495 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34496 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34495);
var state_34519__$1 = (function (){var statearr_34534 = state_34519;
(statearr_34534[(8)] = inst_34494);

return statearr_34534;
})();
var statearr_34535_34580 = state_34519__$1;
(statearr_34535_34580[(2)] = inst_34496);

(statearr_34535_34580[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (13))){
var inst_34453 = figwheel.client.heads_up.clear.call(null);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(16),inst_34453);
} else {
if((state_val_34520 === (22))){
var inst_34474 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34475 = figwheel.client.heads_up.append_warning_message.call(null,inst_34474);
var state_34519__$1 = state_34519;
var statearr_34536_34581 = state_34519__$1;
(statearr_34536_34581[(2)] = inst_34475);

(statearr_34536_34581[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (36))){
var inst_34505 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34537_34582 = state_34519__$1;
(statearr_34537_34582[(2)] = inst_34505);

(statearr_34537_34582[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (29))){
var inst_34485 = (state_34519[(2)]);
var inst_34486 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34487 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34486);
var state_34519__$1 = (function (){var statearr_34538 = state_34519;
(statearr_34538[(9)] = inst_34485);

return statearr_34538;
})();
var statearr_34539_34583 = state_34519__$1;
(statearr_34539_34583[(2)] = inst_34487);

(statearr_34539_34583[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (6))){
var inst_34434 = (state_34519[(10)]);
var state_34519__$1 = state_34519;
var statearr_34540_34584 = state_34519__$1;
(statearr_34540_34584[(2)] = inst_34434);

(statearr_34540_34584[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (28))){
var inst_34481 = (state_34519[(2)]);
var inst_34482 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34483 = figwheel.client.heads_up.display_warning.call(null,inst_34482);
var state_34519__$1 = (function (){var statearr_34541 = state_34519;
(statearr_34541[(11)] = inst_34481);

return statearr_34541;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(29),inst_34483);
} else {
if((state_val_34520 === (25))){
var inst_34479 = figwheel.client.heads_up.clear.call(null);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(28),inst_34479);
} else {
if((state_val_34520 === (34))){
var inst_34500 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(37),inst_34500);
} else {
if((state_val_34520 === (17))){
var inst_34459 = (state_34519[(2)]);
var inst_34460 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34461 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34460);
var state_34519__$1 = (function (){var statearr_34542 = state_34519;
(statearr_34542[(12)] = inst_34459);

return statearr_34542;
})();
var statearr_34543_34585 = state_34519__$1;
(statearr_34543_34585[(2)] = inst_34461);

(statearr_34543_34585[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (3))){
var inst_34451 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34451)){
var statearr_34544_34586 = state_34519__$1;
(statearr_34544_34586[(1)] = (13));

} else {
var statearr_34545_34587 = state_34519__$1;
(statearr_34545_34587[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (12))){
var inst_34447 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34546_34588 = state_34519__$1;
(statearr_34546_34588[(2)] = inst_34447);

(statearr_34546_34588[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (2))){
var inst_34434 = (state_34519[(10)]);
var inst_34434__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34519__$1 = (function (){var statearr_34547 = state_34519;
(statearr_34547[(10)] = inst_34434__$1);

return statearr_34547;
})();
if(cljs.core.truth_(inst_34434__$1)){
var statearr_34548_34589 = state_34519__$1;
(statearr_34548_34589[(1)] = (5));

} else {
var statearr_34549_34590 = state_34519__$1;
(statearr_34549_34590[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (23))){
var inst_34477 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34477)){
var statearr_34550_34591 = state_34519__$1;
(statearr_34550_34591[(1)] = (25));

} else {
var statearr_34551_34592 = state_34519__$1;
(statearr_34551_34592[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (35))){
var state_34519__$1 = state_34519;
var statearr_34552_34593 = state_34519__$1;
(statearr_34552_34593[(2)] = null);

(statearr_34552_34593[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (19))){
var inst_34472 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34472)){
var statearr_34553_34594 = state_34519__$1;
(statearr_34553_34594[(1)] = (22));

} else {
var statearr_34554_34595 = state_34519__$1;
(statearr_34554_34595[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (11))){
var inst_34443 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34555_34596 = state_34519__$1;
(statearr_34555_34596[(2)] = inst_34443);

(statearr_34555_34596[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (9))){
var inst_34445 = figwheel.client.heads_up.clear.call(null);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(12),inst_34445);
} else {
if((state_val_34520 === (5))){
var inst_34436 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34519__$1 = state_34519;
var statearr_34556_34597 = state_34519__$1;
(statearr_34556_34597[(2)] = inst_34436);

(statearr_34556_34597[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (14))){
var inst_34463 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34463)){
var statearr_34557_34598 = state_34519__$1;
(statearr_34557_34598[(1)] = (18));

} else {
var statearr_34558_34599 = state_34519__$1;
(statearr_34558_34599[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (26))){
var inst_34489 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34519__$1 = state_34519;
if(cljs.core.truth_(inst_34489)){
var statearr_34559_34600 = state_34519__$1;
(statearr_34559_34600[(1)] = (30));

} else {
var statearr_34560_34601 = state_34519__$1;
(statearr_34560_34601[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (16))){
var inst_34455 = (state_34519[(2)]);
var inst_34456 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34457 = figwheel.client.heads_up.display_exception.call(null,inst_34456);
var state_34519__$1 = (function (){var statearr_34561 = state_34519;
(statearr_34561[(13)] = inst_34455);

return statearr_34561;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(17),inst_34457);
} else {
if((state_val_34520 === (30))){
var inst_34491 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34492 = figwheel.client.heads_up.display_warning.call(null,inst_34491);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(33),inst_34492);
} else {
if((state_val_34520 === (10))){
var inst_34449 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34562_34602 = state_34519__$1;
(statearr_34562_34602[(2)] = inst_34449);

(statearr_34562_34602[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (18))){
var inst_34465 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34466 = figwheel.client.heads_up.display_exception.call(null,inst_34465);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(21),inst_34466);
} else {
if((state_val_34520 === (37))){
var inst_34502 = (state_34519[(2)]);
var state_34519__$1 = state_34519;
var statearr_34563_34603 = state_34519__$1;
(statearr_34563_34603[(2)] = inst_34502);

(statearr_34563_34603[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34520 === (8))){
var inst_34441 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34519__$1 = state_34519;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34519__$1,(11),inst_34441);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__32021__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__31998__auto__,c__32021__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto____0 = (function (){
var statearr_34564 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34564[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto__);

(statearr_34564[(1)] = (1));

return statearr_34564;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto____1 = (function (state_34519){
while(true){
var ret_value__32000__auto__ = (function (){try{while(true){
var result__32001__auto__ = switch__31998__auto__.call(null,state_34519);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32001__auto__;
}
break;
}
}catch (e34565){if((e34565 instanceof Object)){
var ex__32002__auto__ = e34565;
var statearr_34566_34604 = state_34519;
(statearr_34566_34604[(5)] = ex__32002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34519);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34605 = state_34519;
state_34519 = G__34605;
continue;
} else {
return ret_value__32000__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto__ = function(state_34519){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto____1.call(this,state_34519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__31999__auto__;
})()
;})(switch__31998__auto__,c__32021__auto__,msg_hist,msg_names,msg))
})();
var state__32023__auto__ = (function (){var statearr_34567 = f__32022__auto__.call(null);
(statearr_34567[(6)] = c__32021__auto__);

return statearr_34567;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32023__auto__);
});})(c__32021__auto__,msg_hist,msg_names,msg))
);

return c__32021__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32021__auto___34634 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32021__auto___34634,ch){
return (function (){
var f__32022__auto__ = (function (){var switch__31998__auto__ = ((function (c__32021__auto___34634,ch){
return (function (state_34620){
var state_val_34621 = (state_34620[(1)]);
if((state_val_34621 === (1))){
var state_34620__$1 = state_34620;
var statearr_34622_34635 = state_34620__$1;
(statearr_34622_34635[(2)] = null);

(statearr_34622_34635[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (2))){
var state_34620__$1 = state_34620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34620__$1,(4),ch);
} else {
if((state_val_34621 === (3))){
var inst_34618 = (state_34620[(2)]);
var state_34620__$1 = state_34620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34620__$1,inst_34618);
} else {
if((state_val_34621 === (4))){
var inst_34608 = (state_34620[(7)]);
var inst_34608__$1 = (state_34620[(2)]);
var state_34620__$1 = (function (){var statearr_34623 = state_34620;
(statearr_34623[(7)] = inst_34608__$1);

return statearr_34623;
})();
if(cljs.core.truth_(inst_34608__$1)){
var statearr_34624_34636 = state_34620__$1;
(statearr_34624_34636[(1)] = (5));

} else {
var statearr_34625_34637 = state_34620__$1;
(statearr_34625_34637[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (5))){
var inst_34608 = (state_34620[(7)]);
var inst_34610 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34608);
var state_34620__$1 = state_34620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34620__$1,(8),inst_34610);
} else {
if((state_val_34621 === (6))){
var state_34620__$1 = state_34620;
var statearr_34626_34638 = state_34620__$1;
(statearr_34626_34638[(2)] = null);

(statearr_34626_34638[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (7))){
var inst_34616 = (state_34620[(2)]);
var state_34620__$1 = state_34620;
var statearr_34627_34639 = state_34620__$1;
(statearr_34627_34639[(2)] = inst_34616);

(statearr_34627_34639[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34621 === (8))){
var inst_34612 = (state_34620[(2)]);
var state_34620__$1 = (function (){var statearr_34628 = state_34620;
(statearr_34628[(8)] = inst_34612);

return statearr_34628;
})();
var statearr_34629_34640 = state_34620__$1;
(statearr_34629_34640[(2)] = null);

(statearr_34629_34640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__32021__auto___34634,ch))
;
return ((function (switch__31998__auto__,c__32021__auto___34634,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__31999__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__31999__auto____0 = (function (){
var statearr_34630 = [null,null,null,null,null,null,null,null,null];
(statearr_34630[(0)] = figwheel$client$heads_up_plugin_$_state_machine__31999__auto__);

(statearr_34630[(1)] = (1));

return statearr_34630;
});
var figwheel$client$heads_up_plugin_$_state_machine__31999__auto____1 = (function (state_34620){
while(true){
var ret_value__32000__auto__ = (function (){try{while(true){
var result__32001__auto__ = switch__31998__auto__.call(null,state_34620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32001__auto__;
}
break;
}
}catch (e34631){if((e34631 instanceof Object)){
var ex__32002__auto__ = e34631;
var statearr_34632_34641 = state_34620;
(statearr_34632_34641[(5)] = ex__32002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34631;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34642 = state_34620;
state_34620 = G__34642;
continue;
} else {
return ret_value__32000__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__31999__auto__ = function(state_34620){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__31999__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__31999__auto____1.call(this,state_34620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__31999__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__31999__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__31999__auto__;
})()
;})(switch__31998__auto__,c__32021__auto___34634,ch))
})();
var state__32023__auto__ = (function (){var statearr_34633 = f__32022__auto__.call(null);
(statearr_34633[(6)] = c__32021__auto___34634);

return statearr_34633;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32023__auto__);
});})(c__32021__auto___34634,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32021__auto__){
return (function (){
var f__32022__auto__ = (function (){var switch__31998__auto__ = ((function (c__32021__auto__){
return (function (state_34648){
var state_val_34649 = (state_34648[(1)]);
if((state_val_34649 === (1))){
var inst_34643 = cljs.core.async.timeout.call(null,(3000));
var state_34648__$1 = state_34648;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34648__$1,(2),inst_34643);
} else {
if((state_val_34649 === (2))){
var inst_34645 = (state_34648[(2)]);
var inst_34646 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_34648__$1 = (function (){var statearr_34650 = state_34648;
(statearr_34650[(7)] = inst_34645);

return statearr_34650;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34648__$1,inst_34646);
} else {
return null;
}
}
});})(c__32021__auto__))
;
return ((function (switch__31998__auto__,c__32021__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__31999__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__31999__auto____0 = (function (){
var statearr_34651 = [null,null,null,null,null,null,null,null];
(statearr_34651[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__31999__auto__);

(statearr_34651[(1)] = (1));

return statearr_34651;
});
var figwheel$client$enforce_project_plugin_$_state_machine__31999__auto____1 = (function (state_34648){
while(true){
var ret_value__32000__auto__ = (function (){try{while(true){
var result__32001__auto__ = switch__31998__auto__.call(null,state_34648);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32001__auto__;
}
break;
}
}catch (e34652){if((e34652 instanceof Object)){
var ex__32002__auto__ = e34652;
var statearr_34653_34655 = state_34648;
(statearr_34653_34655[(5)] = ex__32002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34648);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34652;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34656 = state_34648;
state_34648 = G__34656;
continue;
} else {
return ret_value__32000__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__31999__auto__ = function(state_34648){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__31999__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__31999__auto____1.call(this,state_34648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__31999__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__31999__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__31999__auto__;
})()
;})(switch__31998__auto__,c__32021__auto__))
})();
var state__32023__auto__ = (function (){var statearr_34654 = f__32022__auto__.call(null);
(statearr_34654[(6)] = c__32021__auto__);

return statearr_34654;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32023__auto__);
});})(c__32021__auto__))
);

return c__32021__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32021__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__32022__auto__ = (function (){var switch__31998__auto__ = ((function (c__32021__auto__,figwheel_version,temp__5457__auto__){
return (function (state_34663){
var state_val_34664 = (state_34663[(1)]);
if((state_val_34664 === (1))){
var inst_34657 = cljs.core.async.timeout.call(null,(2000));
var state_34663__$1 = state_34663;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34663__$1,(2),inst_34657);
} else {
if((state_val_34664 === (2))){
var inst_34659 = (state_34663[(2)]);
var inst_34660 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_34661 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_34660);
var state_34663__$1 = (function (){var statearr_34665 = state_34663;
(statearr_34665[(7)] = inst_34659);

return statearr_34665;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34663__$1,inst_34661);
} else {
return null;
}
}
});})(c__32021__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__31998__auto__,c__32021__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto____0 = (function (){
var statearr_34666 = [null,null,null,null,null,null,null,null];
(statearr_34666[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto__);

(statearr_34666[(1)] = (1));

return statearr_34666;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto____1 = (function (state_34663){
while(true){
var ret_value__32000__auto__ = (function (){try{while(true){
var result__32001__auto__ = switch__31998__auto__.call(null,state_34663);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32001__auto__;
}
break;
}
}catch (e34667){if((e34667 instanceof Object)){
var ex__32002__auto__ = e34667;
var statearr_34668_34670 = state_34663;
(statearr_34668_34670[(5)] = ex__32002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34663);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34667;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34671 = state_34663;
state_34663 = G__34671;
continue;
} else {
return ret_value__32000__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto__ = function(state_34663){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto____1.call(this,state_34663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__31999__auto__;
})()
;})(switch__31998__auto__,c__32021__auto__,figwheel_version,temp__5457__auto__))
})();
var state__32023__auto__ = (function (){var statearr_34669 = f__32022__auto__.call(null);
(statearr_34669[(6)] = c__32021__auto__);

return statearr_34669;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32023__auto__);
});})(c__32021__auto__,figwheel_version,temp__5457__auto__))
);

return c__32021__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__34672){
var map__34673 = p__34672;
var map__34673__$1 = ((((!((map__34673 == null)))?(((((map__34673.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34673.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34673):map__34673);
var file = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__34673__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__34675 = "";
var G__34675__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34675),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__34675);
var G__34675__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34675__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__34675__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = line;
if(cljs.core.truth_(and__3925__auto__)){
return column;
} else {
return and__3925__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34675__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__34675__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__34676){
var map__34677 = p__34676;
var map__34677__$1 = ((((!((map__34677 == null)))?(((((map__34677.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34677.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34677):map__34677);
var ed = map__34677__$1;
var exception_data = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__34677__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_34680 = (function (){var G__34679 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34679)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__34679;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_34680);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__34681){
var map__34682 = p__34681;
var map__34682__$1 = ((((!((map__34682 == null)))?(((((map__34682.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34682.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34682):map__34682);
var w = map__34682__$1;
var message = cljs.core.get.call(null,map__34682__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3925__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3925__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__34684 = cljs.core.seq.call(null,plugins);
var chunk__34685 = null;
var count__34686 = (0);
var i__34687 = (0);
while(true){
if((i__34687 < count__34686)){
var vec__34688 = cljs.core._nth.call(null,chunk__34685,i__34687);
var k = cljs.core.nth.call(null,vec__34688,(0),null);
var plugin = cljs.core.nth.call(null,vec__34688,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34694 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34684,chunk__34685,count__34686,i__34687,pl_34694,vec__34688,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_34694.call(null,msg_hist);
});})(seq__34684,chunk__34685,count__34686,i__34687,pl_34694,vec__34688,k,plugin))
);
} else {
}


var G__34695 = seq__34684;
var G__34696 = chunk__34685;
var G__34697 = count__34686;
var G__34698 = (i__34687 + (1));
seq__34684 = G__34695;
chunk__34685 = G__34696;
count__34686 = G__34697;
i__34687 = G__34698;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__34684);
if(temp__5457__auto__){
var seq__34684__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34684__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__34684__$1);
var G__34699 = cljs.core.chunk_rest.call(null,seq__34684__$1);
var G__34700 = c__4337__auto__;
var G__34701 = cljs.core.count.call(null,c__4337__auto__);
var G__34702 = (0);
seq__34684 = G__34699;
chunk__34685 = G__34700;
count__34686 = G__34701;
i__34687 = G__34702;
continue;
} else {
var vec__34691 = cljs.core.first.call(null,seq__34684__$1);
var k = cljs.core.nth.call(null,vec__34691,(0),null);
var plugin = cljs.core.nth.call(null,vec__34691,(1),null);
if(cljs.core.truth_(plugin)){
var pl_34703 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__34684,chunk__34685,count__34686,i__34687,pl_34703,vec__34691,k,plugin,seq__34684__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_34703.call(null,msg_hist);
});})(seq__34684,chunk__34685,count__34686,i__34687,pl_34703,vec__34691,k,plugin,seq__34684__$1,temp__5457__auto__))
);
} else {
}


var G__34704 = cljs.core.next.call(null,seq__34684__$1);
var G__34705 = null;
var G__34706 = (0);
var G__34707 = (0);
seq__34684 = G__34704;
chunk__34685 = G__34705;
count__34686 = G__34706;
i__34687 = G__34707;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__34709 = arguments.length;
switch (G__34709) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__34710_34715 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__34711_34716 = null;
var count__34712_34717 = (0);
var i__34713_34718 = (0);
while(true){
if((i__34713_34718 < count__34712_34717)){
var msg_34719 = cljs.core._nth.call(null,chunk__34711_34716,i__34713_34718);
figwheel.client.socket.handle_incoming_message.call(null,msg_34719);


var G__34720 = seq__34710_34715;
var G__34721 = chunk__34711_34716;
var G__34722 = count__34712_34717;
var G__34723 = (i__34713_34718 + (1));
seq__34710_34715 = G__34720;
chunk__34711_34716 = G__34721;
count__34712_34717 = G__34722;
i__34713_34718 = G__34723;
continue;
} else {
var temp__5457__auto___34724 = cljs.core.seq.call(null,seq__34710_34715);
if(temp__5457__auto___34724){
var seq__34710_34725__$1 = temp__5457__auto___34724;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34710_34725__$1)){
var c__4337__auto___34726 = cljs.core.chunk_first.call(null,seq__34710_34725__$1);
var G__34727 = cljs.core.chunk_rest.call(null,seq__34710_34725__$1);
var G__34728 = c__4337__auto___34726;
var G__34729 = cljs.core.count.call(null,c__4337__auto___34726);
var G__34730 = (0);
seq__34710_34715 = G__34727;
chunk__34711_34716 = G__34728;
count__34712_34717 = G__34729;
i__34713_34718 = G__34730;
continue;
} else {
var msg_34731 = cljs.core.first.call(null,seq__34710_34725__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_34731);


var G__34732 = cljs.core.next.call(null,seq__34710_34725__$1);
var G__34733 = null;
var G__34734 = (0);
var G__34735 = (0);
seq__34710_34715 = G__34732;
chunk__34711_34716 = G__34733;
count__34712_34717 = G__34734;
i__34713_34718 = G__34735;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4520__auto__ = [];
var len__4517__auto___34740 = arguments.length;
var i__4518__auto___34741 = (0);
while(true){
if((i__4518__auto___34741 < len__4517__auto___34740)){
args__4520__auto__.push((arguments[i__4518__auto___34741]));

var G__34742 = (i__4518__auto___34741 + (1));
i__4518__auto___34741 = G__34742;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__34737){
var map__34738 = p__34737;
var map__34738__$1 = ((((!((map__34738 == null)))?(((((map__34738.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34738.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34738):map__34738);
var opts = map__34738__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq34736){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34736));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e34743){if((e34743 instanceof Error)){
var e = e34743;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e34743;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__34744){
var map__34745 = p__34744;
var map__34745__$1 = ((((!((map__34745 == null)))?(((((map__34745.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34745.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34745):map__34745);
var msg_name = cljs.core.get.call(null,map__34745__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1553577428314
