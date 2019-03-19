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
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e53988){if((e53988 instanceof Error)){
var e = e53988;
return "Error: Unable to stringify";
} else {
throw e53988;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__53991 = arguments.length;
switch (G__53991) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__53989_SHARP_){
if(typeof p1__53989_SHARP_ === 'string'){
return p1__53989_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__53989_SHARP_);
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
var len__4517__auto___53994 = arguments.length;
var i__4518__auto___53995 = (0);
while(true){
if((i__4518__auto___53995 < len__4517__auto___53994)){
args__4520__auto__.push((arguments[i__4518__auto___53995]));

var G__53996 = (i__4518__auto___53995 + (1));
i__4518__auto___53995 = G__53996;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq53993){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53993));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___53998 = arguments.length;
var i__4518__auto___53999 = (0);
while(true){
if((i__4518__auto___53999 < len__4517__auto___53998)){
args__4520__auto__.push((arguments[i__4518__auto___53999]));

var G__54000 = (i__4518__auto___53999 + (1));
i__4518__auto___53999 = G__54000;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq53997){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq53997));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__54001){
var map__54002 = p__54001;
var map__54002__$1 = ((((!((map__54002 == null)))?(((((map__54002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54002):map__54002);
var message = cljs.core.get.call(null,map__54002__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__54002__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__51025__auto___54081 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___54081,ch){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___54081,ch){
return (function (state_54053){
var state_val_54054 = (state_54053[(1)]);
if((state_val_54054 === (7))){
var inst_54049 = (state_54053[(2)]);
var state_54053__$1 = state_54053;
var statearr_54055_54082 = state_54053__$1;
(statearr_54055_54082[(2)] = inst_54049);

(statearr_54055_54082[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (1))){
var state_54053__$1 = state_54053;
var statearr_54056_54083 = state_54053__$1;
(statearr_54056_54083[(2)] = null);

(statearr_54056_54083[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (4))){
var inst_54006 = (state_54053[(7)]);
var inst_54006__$1 = (state_54053[(2)]);
var state_54053__$1 = (function (){var statearr_54057 = state_54053;
(statearr_54057[(7)] = inst_54006__$1);

return statearr_54057;
})();
if(cljs.core.truth_(inst_54006__$1)){
var statearr_54058_54084 = state_54053__$1;
(statearr_54058_54084[(1)] = (5));

} else {
var statearr_54059_54085 = state_54053__$1;
(statearr_54059_54085[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (15))){
var inst_54013 = (state_54053[(8)]);
var inst_54028 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54013);
var inst_54029 = cljs.core.first.call(null,inst_54028);
var inst_54030 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_54029);
var inst_54031 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54030)].join('');
var inst_54032 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_54031);
var state_54053__$1 = state_54053;
var statearr_54060_54086 = state_54053__$1;
(statearr_54060_54086[(2)] = inst_54032);

(statearr_54060_54086[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (13))){
var inst_54037 = (state_54053[(2)]);
var state_54053__$1 = state_54053;
var statearr_54061_54087 = state_54053__$1;
(statearr_54061_54087[(2)] = inst_54037);

(statearr_54061_54087[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (6))){
var state_54053__$1 = state_54053;
var statearr_54062_54088 = state_54053__$1;
(statearr_54062_54088[(2)] = null);

(statearr_54062_54088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (17))){
var inst_54035 = (state_54053[(2)]);
var state_54053__$1 = state_54053;
var statearr_54063_54089 = state_54053__$1;
(statearr_54063_54089[(2)] = inst_54035);

(statearr_54063_54089[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (3))){
var inst_54051 = (state_54053[(2)]);
var state_54053__$1 = state_54053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54053__$1,inst_54051);
} else {
if((state_val_54054 === (12))){
var inst_54012 = (state_54053[(9)]);
var inst_54026 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_54012,opts);
var state_54053__$1 = state_54053;
if(cljs.core.truth_(inst_54026)){
var statearr_54064_54090 = state_54053__$1;
(statearr_54064_54090[(1)] = (15));

} else {
var statearr_54065_54091 = state_54053__$1;
(statearr_54065_54091[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (2))){
var state_54053__$1 = state_54053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54053__$1,(4),ch);
} else {
if((state_val_54054 === (11))){
var inst_54013 = (state_54053[(8)]);
var inst_54018 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_54019 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_54013);
var inst_54020 = cljs.core.async.timeout.call(null,(1000));
var inst_54021 = [inst_54019,inst_54020];
var inst_54022 = (new cljs.core.PersistentVector(null,2,(5),inst_54018,inst_54021,null));
var state_54053__$1 = state_54053;
return cljs.core.async.ioc_alts_BANG_.call(null,state_54053__$1,(14),inst_54022);
} else {
if((state_val_54054 === (9))){
var inst_54013 = (state_54053[(8)]);
var inst_54039 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_54040 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_54013);
var inst_54041 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_54040);
var inst_54042 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_54041)].join('');
var inst_54043 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_54042);
var state_54053__$1 = (function (){var statearr_54066 = state_54053;
(statearr_54066[(10)] = inst_54039);

return statearr_54066;
})();
var statearr_54067_54092 = state_54053__$1;
(statearr_54067_54092[(2)] = inst_54043);

(statearr_54067_54092[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (5))){
var inst_54006 = (state_54053[(7)]);
var inst_54008 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_54009 = (new cljs.core.PersistentArrayMap(null,2,inst_54008,null));
var inst_54010 = (new cljs.core.PersistentHashSet(null,inst_54009,null));
var inst_54011 = figwheel.client.focus_msgs.call(null,inst_54010,inst_54006);
var inst_54012 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_54011);
var inst_54013 = cljs.core.first.call(null,inst_54011);
var inst_54014 = figwheel.client.autoload_QMARK_.call(null);
var state_54053__$1 = (function (){var statearr_54068 = state_54053;
(statearr_54068[(9)] = inst_54012);

(statearr_54068[(8)] = inst_54013);

return statearr_54068;
})();
if(cljs.core.truth_(inst_54014)){
var statearr_54069_54093 = state_54053__$1;
(statearr_54069_54093[(1)] = (8));

} else {
var statearr_54070_54094 = state_54053__$1;
(statearr_54070_54094[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (14))){
var inst_54024 = (state_54053[(2)]);
var state_54053__$1 = state_54053;
var statearr_54071_54095 = state_54053__$1;
(statearr_54071_54095[(2)] = inst_54024);

(statearr_54071_54095[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (16))){
var state_54053__$1 = state_54053;
var statearr_54072_54096 = state_54053__$1;
(statearr_54072_54096[(2)] = null);

(statearr_54072_54096[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (10))){
var inst_54045 = (state_54053[(2)]);
var state_54053__$1 = (function (){var statearr_54073 = state_54053;
(statearr_54073[(11)] = inst_54045);

return statearr_54073;
})();
var statearr_54074_54097 = state_54053__$1;
(statearr_54074_54097[(2)] = null);

(statearr_54074_54097[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54054 === (8))){
var inst_54012 = (state_54053[(9)]);
var inst_54016 = figwheel.client.reload_file_state_QMARK_.call(null,inst_54012,opts);
var state_54053__$1 = state_54053;
if(cljs.core.truth_(inst_54016)){
var statearr_54075_54098 = state_54053__$1;
(statearr_54075_54098[(1)] = (11));

} else {
var statearr_54076_54099 = state_54053__$1;
(statearr_54076_54099[(1)] = (12));

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
});})(c__51025__auto___54081,ch))
;
return ((function (switch__50721__auto__,c__51025__auto___54081,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__50722__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__50722__auto____0 = (function (){
var statearr_54077 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54077[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__50722__auto__);

(statearr_54077[(1)] = (1));

return statearr_54077;
});
var figwheel$client$file_reloader_plugin_$_state_machine__50722__auto____1 = (function (state_54053){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_54053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e54078){if((e54078 instanceof Object)){
var ex__50725__auto__ = e54078;
var statearr_54079_54100 = state_54053;
(statearr_54079_54100[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54078;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54101 = state_54053;
state_54053 = G__54101;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__50722__auto__ = function(state_54053){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__50722__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__50722__auto____1.call(this,state_54053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__50722__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__50722__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___54081,ch))
})();
var state__51027__auto__ = (function (){var statearr_54080 = f__51026__auto__.call(null);
(statearr_54080[(6)] = c__51025__auto___54081);

return statearr_54080;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___54081,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__54102_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__54102_SHARP_));
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
var base_path_54106 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_54106){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_54104 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_54105 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_54104,_STAR_print_fn_STAR_54105,sb,base_path_54106){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_54104,_STAR_print_fn_STAR_54105,sb,base_path_54106))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_54105;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_54104;
}}catch (e54103){if((e54103 instanceof Error)){
var e = e54103;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_54106], null));
} else {
var e = e54103;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_54106))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__54107){
var map__54108 = p__54107;
var map__54108__$1 = ((((!((map__54108 == null)))?(((((map__54108.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54108.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54108):map__54108);
var opts = map__54108__$1;
var build_id = cljs.core.get.call(null,map__54108__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__54108,map__54108__$1,opts,build_id){
return (function (p__54110){
var vec__54111 = p__54110;
var seq__54112 = cljs.core.seq.call(null,vec__54111);
var first__54113 = cljs.core.first.call(null,seq__54112);
var seq__54112__$1 = cljs.core.next.call(null,seq__54112);
var map__54114 = first__54113;
var map__54114__$1 = ((((!((map__54114 == null)))?(((((map__54114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54114):map__54114);
var msg = map__54114__$1;
var msg_name = cljs.core.get.call(null,map__54114__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54112__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__54111,seq__54112,first__54113,seq__54112__$1,map__54114,map__54114__$1,msg,msg_name,_,map__54108,map__54108__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__54111,seq__54112,first__54113,seq__54112__$1,map__54114,map__54114__$1,msg,msg_name,_,map__54108,map__54108__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__54108,map__54108__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__54116){
var vec__54117 = p__54116;
var seq__54118 = cljs.core.seq.call(null,vec__54117);
var first__54119 = cljs.core.first.call(null,seq__54118);
var seq__54118__$1 = cljs.core.next.call(null,seq__54118);
var map__54120 = first__54119;
var map__54120__$1 = ((((!((map__54120 == null)))?(((((map__54120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54120):map__54120);
var msg = map__54120__$1;
var msg_name = cljs.core.get.call(null,map__54120__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54118__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__54122){
var map__54123 = p__54122;
var map__54123__$1 = ((((!((map__54123 == null)))?(((((map__54123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54123):map__54123);
var on_compile_warning = cljs.core.get.call(null,map__54123__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__54123__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__54123,map__54123__$1,on_compile_warning,on_compile_fail){
return (function (p__54125){
var vec__54126 = p__54125;
var seq__54127 = cljs.core.seq.call(null,vec__54126);
var first__54128 = cljs.core.first.call(null,seq__54127);
var seq__54127__$1 = cljs.core.next.call(null,seq__54127);
var map__54129 = first__54128;
var map__54129__$1 = ((((!((map__54129 == null)))?(((((map__54129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54129):map__54129);
var msg = map__54129__$1;
var msg_name = cljs.core.get.call(null,map__54129__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__54127__$1;
var pred__54131 = cljs.core._EQ_;
var expr__54132 = msg_name;
if(cljs.core.truth_(pred__54131.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__54132))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__54131.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__54132))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__54123,map__54123__$1,on_compile_warning,on_compile_fail))
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
var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__,msg_hist,msg_names,msg){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__,msg_hist,msg_names,msg){
return (function (state_54221){
var state_val_54222 = (state_54221[(1)]);
if((state_val_54222 === (7))){
var inst_54141 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
if(cljs.core.truth_(inst_54141)){
var statearr_54223_54270 = state_54221__$1;
(statearr_54223_54270[(1)] = (8));

} else {
var statearr_54224_54271 = state_54221__$1;
(statearr_54224_54271[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (20))){
var inst_54215 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54225_54272 = state_54221__$1;
(statearr_54225_54272[(2)] = inst_54215);

(statearr_54225_54272[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (27))){
var inst_54211 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54226_54273 = state_54221__$1;
(statearr_54226_54273[(2)] = inst_54211);

(statearr_54226_54273[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (1))){
var inst_54134 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_54221__$1 = state_54221;
if(cljs.core.truth_(inst_54134)){
var statearr_54227_54274 = state_54221__$1;
(statearr_54227_54274[(1)] = (2));

} else {
var statearr_54228_54275 = state_54221__$1;
(statearr_54228_54275[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (24))){
var inst_54213 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54229_54276 = state_54221__$1;
(statearr_54229_54276[(2)] = inst_54213);

(statearr_54229_54276[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (4))){
var inst_54219 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54221__$1,inst_54219);
} else {
if((state_val_54222 === (15))){
var inst_54217 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54230_54277 = state_54221__$1;
(statearr_54230_54277[(2)] = inst_54217);

(statearr_54230_54277[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (21))){
var inst_54170 = (state_54221[(2)]);
var inst_54171 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54172 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54171);
var state_54221__$1 = (function (){var statearr_54231 = state_54221;
(statearr_54231[(7)] = inst_54170);

return statearr_54231;
})();
var statearr_54232_54278 = state_54221__$1;
(statearr_54232_54278[(2)] = inst_54172);

(statearr_54232_54278[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (31))){
var inst_54200 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_54221__$1 = state_54221;
if(cljs.core.truth_(inst_54200)){
var statearr_54233_54279 = state_54221__$1;
(statearr_54233_54279[(1)] = (34));

} else {
var statearr_54234_54280 = state_54221__$1;
(statearr_54234_54280[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (32))){
var inst_54209 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54235_54281 = state_54221__$1;
(statearr_54235_54281[(2)] = inst_54209);

(statearr_54235_54281[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (33))){
var inst_54196 = (state_54221[(2)]);
var inst_54197 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54198 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54197);
var state_54221__$1 = (function (){var statearr_54236 = state_54221;
(statearr_54236[(8)] = inst_54196);

return statearr_54236;
})();
var statearr_54237_54282 = state_54221__$1;
(statearr_54237_54282[(2)] = inst_54198);

(statearr_54237_54282[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (13))){
var inst_54155 = figwheel.client.heads_up.clear.call(null);
var state_54221__$1 = state_54221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54221__$1,(16),inst_54155);
} else {
if((state_val_54222 === (22))){
var inst_54176 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54177 = figwheel.client.heads_up.append_warning_message.call(null,inst_54176);
var state_54221__$1 = state_54221;
var statearr_54238_54283 = state_54221__$1;
(statearr_54238_54283[(2)] = inst_54177);

(statearr_54238_54283[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (36))){
var inst_54207 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54239_54284 = state_54221__$1;
(statearr_54239_54284[(2)] = inst_54207);

(statearr_54239_54284[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (29))){
var inst_54187 = (state_54221[(2)]);
var inst_54188 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54189 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54188);
var state_54221__$1 = (function (){var statearr_54240 = state_54221;
(statearr_54240[(9)] = inst_54187);

return statearr_54240;
})();
var statearr_54241_54285 = state_54221__$1;
(statearr_54241_54285[(2)] = inst_54189);

(statearr_54241_54285[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (6))){
var inst_54136 = (state_54221[(10)]);
var state_54221__$1 = state_54221;
var statearr_54242_54286 = state_54221__$1;
(statearr_54242_54286[(2)] = inst_54136);

(statearr_54242_54286[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (28))){
var inst_54183 = (state_54221[(2)]);
var inst_54184 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54185 = figwheel.client.heads_up.display_warning.call(null,inst_54184);
var state_54221__$1 = (function (){var statearr_54243 = state_54221;
(statearr_54243[(11)] = inst_54183);

return statearr_54243;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54221__$1,(29),inst_54185);
} else {
if((state_val_54222 === (25))){
var inst_54181 = figwheel.client.heads_up.clear.call(null);
var state_54221__$1 = state_54221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54221__$1,(28),inst_54181);
} else {
if((state_val_54222 === (34))){
var inst_54202 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54221__$1 = state_54221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54221__$1,(37),inst_54202);
} else {
if((state_val_54222 === (17))){
var inst_54161 = (state_54221[(2)]);
var inst_54162 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54163 = figwheel.client.auto_jump_to_error.call(null,opts,inst_54162);
var state_54221__$1 = (function (){var statearr_54244 = state_54221;
(statearr_54244[(12)] = inst_54161);

return statearr_54244;
})();
var statearr_54245_54287 = state_54221__$1;
(statearr_54245_54287[(2)] = inst_54163);

(statearr_54245_54287[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (3))){
var inst_54153 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_54221__$1 = state_54221;
if(cljs.core.truth_(inst_54153)){
var statearr_54246_54288 = state_54221__$1;
(statearr_54246_54288[(1)] = (13));

} else {
var statearr_54247_54289 = state_54221__$1;
(statearr_54247_54289[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (12))){
var inst_54149 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54248_54290 = state_54221__$1;
(statearr_54248_54290[(2)] = inst_54149);

(statearr_54248_54290[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (2))){
var inst_54136 = (state_54221[(10)]);
var inst_54136__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_54221__$1 = (function (){var statearr_54249 = state_54221;
(statearr_54249[(10)] = inst_54136__$1);

return statearr_54249;
})();
if(cljs.core.truth_(inst_54136__$1)){
var statearr_54250_54291 = state_54221__$1;
(statearr_54250_54291[(1)] = (5));

} else {
var statearr_54251_54292 = state_54221__$1;
(statearr_54251_54292[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (23))){
var inst_54179 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_54221__$1 = state_54221;
if(cljs.core.truth_(inst_54179)){
var statearr_54252_54293 = state_54221__$1;
(statearr_54252_54293[(1)] = (25));

} else {
var statearr_54253_54294 = state_54221__$1;
(statearr_54253_54294[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (35))){
var state_54221__$1 = state_54221;
var statearr_54254_54295 = state_54221__$1;
(statearr_54254_54295[(2)] = null);

(statearr_54254_54295[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (19))){
var inst_54174 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_54221__$1 = state_54221;
if(cljs.core.truth_(inst_54174)){
var statearr_54255_54296 = state_54221__$1;
(statearr_54255_54296[(1)] = (22));

} else {
var statearr_54256_54297 = state_54221__$1;
(statearr_54256_54297[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (11))){
var inst_54145 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54257_54298 = state_54221__$1;
(statearr_54257_54298[(2)] = inst_54145);

(statearr_54257_54298[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (9))){
var inst_54147 = figwheel.client.heads_up.clear.call(null);
var state_54221__$1 = state_54221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54221__$1,(12),inst_54147);
} else {
if((state_val_54222 === (5))){
var inst_54138 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_54221__$1 = state_54221;
var statearr_54258_54299 = state_54221__$1;
(statearr_54258_54299[(2)] = inst_54138);

(statearr_54258_54299[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (14))){
var inst_54165 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_54221__$1 = state_54221;
if(cljs.core.truth_(inst_54165)){
var statearr_54259_54300 = state_54221__$1;
(statearr_54259_54300[(1)] = (18));

} else {
var statearr_54260_54301 = state_54221__$1;
(statearr_54260_54301[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (26))){
var inst_54191 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_54221__$1 = state_54221;
if(cljs.core.truth_(inst_54191)){
var statearr_54261_54302 = state_54221__$1;
(statearr_54261_54302[(1)] = (30));

} else {
var statearr_54262_54303 = state_54221__$1;
(statearr_54262_54303[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (16))){
var inst_54157 = (state_54221[(2)]);
var inst_54158 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54159 = figwheel.client.heads_up.display_exception.call(null,inst_54158);
var state_54221__$1 = (function (){var statearr_54263 = state_54221;
(statearr_54263[(13)] = inst_54157);

return statearr_54263;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54221__$1,(17),inst_54159);
} else {
if((state_val_54222 === (30))){
var inst_54193 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54194 = figwheel.client.heads_up.display_warning.call(null,inst_54193);
var state_54221__$1 = state_54221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54221__$1,(33),inst_54194);
} else {
if((state_val_54222 === (10))){
var inst_54151 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54264_54304 = state_54221__$1;
(statearr_54264_54304[(2)] = inst_54151);

(statearr_54264_54304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (18))){
var inst_54167 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_54168 = figwheel.client.heads_up.display_exception.call(null,inst_54167);
var state_54221__$1 = state_54221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54221__$1,(21),inst_54168);
} else {
if((state_val_54222 === (37))){
var inst_54204 = (state_54221[(2)]);
var state_54221__$1 = state_54221;
var statearr_54265_54305 = state_54221__$1;
(statearr_54265_54305[(2)] = inst_54204);

(statearr_54265_54305[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54222 === (8))){
var inst_54143 = figwheel.client.heads_up.flash_loaded.call(null);
var state_54221__$1 = state_54221;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54221__$1,(11),inst_54143);
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
});})(c__51025__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__50721__auto__,c__51025__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto____0 = (function (){
var statearr_54266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54266[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto__);

(statearr_54266[(1)] = (1));

return statearr_54266;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto____1 = (function (state_54221){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_54221);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e54267){if((e54267 instanceof Object)){
var ex__50725__auto__ = e54267;
var statearr_54268_54306 = state_54221;
(statearr_54268_54306[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54221);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54307 = state_54221;
state_54221 = G__54307;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto__ = function(state_54221){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto____1.call(this,state_54221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__,msg_hist,msg_names,msg))
})();
var state__51027__auto__ = (function (){var statearr_54269 = f__51026__auto__.call(null);
(statearr_54269[(6)] = c__51025__auto__);

return statearr_54269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__,msg_hist,msg_names,msg))
);

return c__51025__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__51025__auto___54336 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___54336,ch){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___54336,ch){
return (function (state_54322){
var state_val_54323 = (state_54322[(1)]);
if((state_val_54323 === (1))){
var state_54322__$1 = state_54322;
var statearr_54324_54337 = state_54322__$1;
(statearr_54324_54337[(2)] = null);

(statearr_54324_54337[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54323 === (2))){
var state_54322__$1 = state_54322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54322__$1,(4),ch);
} else {
if((state_val_54323 === (3))){
var inst_54320 = (state_54322[(2)]);
var state_54322__$1 = state_54322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54322__$1,inst_54320);
} else {
if((state_val_54323 === (4))){
var inst_54310 = (state_54322[(7)]);
var inst_54310__$1 = (state_54322[(2)]);
var state_54322__$1 = (function (){var statearr_54325 = state_54322;
(statearr_54325[(7)] = inst_54310__$1);

return statearr_54325;
})();
if(cljs.core.truth_(inst_54310__$1)){
var statearr_54326_54338 = state_54322__$1;
(statearr_54326_54338[(1)] = (5));

} else {
var statearr_54327_54339 = state_54322__$1;
(statearr_54327_54339[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54323 === (5))){
var inst_54310 = (state_54322[(7)]);
var inst_54312 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_54310);
var state_54322__$1 = state_54322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54322__$1,(8),inst_54312);
} else {
if((state_val_54323 === (6))){
var state_54322__$1 = state_54322;
var statearr_54328_54340 = state_54322__$1;
(statearr_54328_54340[(2)] = null);

(statearr_54328_54340[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54323 === (7))){
var inst_54318 = (state_54322[(2)]);
var state_54322__$1 = state_54322;
var statearr_54329_54341 = state_54322__$1;
(statearr_54329_54341[(2)] = inst_54318);

(statearr_54329_54341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54323 === (8))){
var inst_54314 = (state_54322[(2)]);
var state_54322__$1 = (function (){var statearr_54330 = state_54322;
(statearr_54330[(8)] = inst_54314);

return statearr_54330;
})();
var statearr_54331_54342 = state_54322__$1;
(statearr_54331_54342[(2)] = null);

(statearr_54331_54342[(1)] = (2));


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
});})(c__51025__auto___54336,ch))
;
return ((function (switch__50721__auto__,c__51025__auto___54336,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__50722__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__50722__auto____0 = (function (){
var statearr_54332 = [null,null,null,null,null,null,null,null,null];
(statearr_54332[(0)] = figwheel$client$heads_up_plugin_$_state_machine__50722__auto__);

(statearr_54332[(1)] = (1));

return statearr_54332;
});
var figwheel$client$heads_up_plugin_$_state_machine__50722__auto____1 = (function (state_54322){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_54322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e54333){if((e54333 instanceof Object)){
var ex__50725__auto__ = e54333;
var statearr_54334_54343 = state_54322;
(statearr_54334_54343[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54344 = state_54322;
state_54322 = G__54344;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__50722__auto__ = function(state_54322){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__50722__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__50722__auto____1.call(this,state_54322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__50722__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__50722__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___54336,ch))
})();
var state__51027__auto__ = (function (){var statearr_54335 = f__51026__auto__.call(null);
(statearr_54335[(6)] = c__51025__auto___54336);

return statearr_54335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___54336,ch))
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
var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__){
return (function (state_54350){
var state_val_54351 = (state_54350[(1)]);
if((state_val_54351 === (1))){
var inst_54345 = cljs.core.async.timeout.call(null,(3000));
var state_54350__$1 = state_54350;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54350__$1,(2),inst_54345);
} else {
if((state_val_54351 === (2))){
var inst_54347 = (state_54350[(2)]);
var inst_54348 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_54350__$1 = (function (){var statearr_54352 = state_54350;
(statearr_54352[(7)] = inst_54347);

return statearr_54352;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54350__$1,inst_54348);
} else {
return null;
}
}
});})(c__51025__auto__))
;
return ((function (switch__50721__auto__,c__51025__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__50722__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__50722__auto____0 = (function (){
var statearr_54353 = [null,null,null,null,null,null,null,null];
(statearr_54353[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__50722__auto__);

(statearr_54353[(1)] = (1));

return statearr_54353;
});
var figwheel$client$enforce_project_plugin_$_state_machine__50722__auto____1 = (function (state_54350){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_54350);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e54354){if((e54354 instanceof Object)){
var ex__50725__auto__ = e54354;
var statearr_54355_54357 = state_54350;
(statearr_54355_54357[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54350);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54354;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54358 = state_54350;
state_54350 = G__54358;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__50722__auto__ = function(state_54350){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__50722__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__50722__auto____1.call(this,state_54350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__50722__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__50722__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__))
})();
var state__51027__auto__ = (function (){var statearr_54356 = f__51026__auto__.call(null);
(statearr_54356[(6)] = c__51025__auto__);

return statearr_54356;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__))
);

return c__51025__auto__;
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
var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__,figwheel_version,temp__5457__auto__){
return (function (state_54365){
var state_val_54366 = (state_54365[(1)]);
if((state_val_54366 === (1))){
var inst_54359 = cljs.core.async.timeout.call(null,(2000));
var state_54365__$1 = state_54365;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54365__$1,(2),inst_54359);
} else {
if((state_val_54366 === (2))){
var inst_54361 = (state_54365[(2)]);
var inst_54362 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_54363 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_54362);
var state_54365__$1 = (function (){var statearr_54367 = state_54365;
(statearr_54367[(7)] = inst_54361);

return statearr_54367;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54365__$1,inst_54363);
} else {
return null;
}
}
});})(c__51025__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__50721__auto__,c__51025__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto____0 = (function (){
var statearr_54368 = [null,null,null,null,null,null,null,null];
(statearr_54368[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto__);

(statearr_54368[(1)] = (1));

return statearr_54368;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto____1 = (function (state_54365){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_54365);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e54369){if((e54369 instanceof Object)){
var ex__50725__auto__ = e54369;
var statearr_54370_54372 = state_54365;
(statearr_54370_54372[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54365);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54373 = state_54365;
state_54365 = G__54373;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto__ = function(state_54365){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto____1.call(this,state_54365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__,figwheel_version,temp__5457__auto__))
})();
var state__51027__auto__ = (function (){var statearr_54371 = f__51026__auto__.call(null);
(statearr_54371[(6)] = c__51025__auto__);

return statearr_54371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__,figwheel_version,temp__5457__auto__))
);

return c__51025__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__54374){
var map__54375 = p__54374;
var map__54375__$1 = ((((!((map__54375 == null)))?(((((map__54375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54375):map__54375);
var file = cljs.core.get.call(null,map__54375__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__54375__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__54375__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__54377 = "";
var G__54377__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54377),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__54377);
var G__54377__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54377__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__54377__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = line;
if(cljs.core.truth_(and__3925__auto__)){
return column;
} else {
return and__3925__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54377__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__54377__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__54378){
var map__54379 = p__54378;
var map__54379__$1 = ((((!((map__54379 == null)))?(((((map__54379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54379):map__54379);
var ed = map__54379__$1;
var formatted_exception = cljs.core.get.call(null,map__54379__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__54379__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__54379__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__54381_54385 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__54382_54386 = null;
var count__54383_54387 = (0);
var i__54384_54388 = (0);
while(true){
if((i__54384_54388 < count__54383_54387)){
var msg_54389 = cljs.core._nth.call(null,chunk__54382_54386,i__54384_54388);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54389);


var G__54390 = seq__54381_54385;
var G__54391 = chunk__54382_54386;
var G__54392 = count__54383_54387;
var G__54393 = (i__54384_54388 + (1));
seq__54381_54385 = G__54390;
chunk__54382_54386 = G__54391;
count__54383_54387 = G__54392;
i__54384_54388 = G__54393;
continue;
} else {
var temp__5457__auto___54394 = cljs.core.seq.call(null,seq__54381_54385);
if(temp__5457__auto___54394){
var seq__54381_54395__$1 = temp__5457__auto___54394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54381_54395__$1)){
var c__4337__auto___54396 = cljs.core.chunk_first.call(null,seq__54381_54395__$1);
var G__54397 = cljs.core.chunk_rest.call(null,seq__54381_54395__$1);
var G__54398 = c__4337__auto___54396;
var G__54399 = cljs.core.count.call(null,c__4337__auto___54396);
var G__54400 = (0);
seq__54381_54385 = G__54397;
chunk__54382_54386 = G__54398;
count__54383_54387 = G__54399;
i__54384_54388 = G__54400;
continue;
} else {
var msg_54401 = cljs.core.first.call(null,seq__54381_54395__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_54401);


var G__54402 = cljs.core.next.call(null,seq__54381_54395__$1);
var G__54403 = null;
var G__54404 = (0);
var G__54405 = (0);
seq__54381_54385 = G__54402;
chunk__54382_54386 = G__54403;
count__54383_54387 = G__54404;
i__54384_54388 = G__54405;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__54406){
var map__54407 = p__54406;
var map__54407__$1 = ((((!((map__54407 == null)))?(((((map__54407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54407):map__54407);
var w = map__54407__$1;
var message = cljs.core.get.call(null,map__54407__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"public/js/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"public/js/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
var seq__54409 = cljs.core.seq.call(null,plugins);
var chunk__54410 = null;
var count__54411 = (0);
var i__54412 = (0);
while(true){
if((i__54412 < count__54411)){
var vec__54413 = cljs.core._nth.call(null,chunk__54410,i__54412);
var k = cljs.core.nth.call(null,vec__54413,(0),null);
var plugin = cljs.core.nth.call(null,vec__54413,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54419 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54409,chunk__54410,count__54411,i__54412,pl_54419,vec__54413,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_54419.call(null,msg_hist);
});})(seq__54409,chunk__54410,count__54411,i__54412,pl_54419,vec__54413,k,plugin))
);
} else {
}


var G__54420 = seq__54409;
var G__54421 = chunk__54410;
var G__54422 = count__54411;
var G__54423 = (i__54412 + (1));
seq__54409 = G__54420;
chunk__54410 = G__54421;
count__54411 = G__54422;
i__54412 = G__54423;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__54409);
if(temp__5457__auto__){
var seq__54409__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54409__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__54409__$1);
var G__54424 = cljs.core.chunk_rest.call(null,seq__54409__$1);
var G__54425 = c__4337__auto__;
var G__54426 = cljs.core.count.call(null,c__4337__auto__);
var G__54427 = (0);
seq__54409 = G__54424;
chunk__54410 = G__54425;
count__54411 = G__54426;
i__54412 = G__54427;
continue;
} else {
var vec__54416 = cljs.core.first.call(null,seq__54409__$1);
var k = cljs.core.nth.call(null,vec__54416,(0),null);
var plugin = cljs.core.nth.call(null,vec__54416,(1),null);
if(cljs.core.truth_(plugin)){
var pl_54428 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__54409,chunk__54410,count__54411,i__54412,pl_54428,vec__54416,k,plugin,seq__54409__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_54428.call(null,msg_hist);
});})(seq__54409,chunk__54410,count__54411,i__54412,pl_54428,vec__54416,k,plugin,seq__54409__$1,temp__5457__auto__))
);
} else {
}


var G__54429 = cljs.core.next.call(null,seq__54409__$1);
var G__54430 = null;
var G__54431 = (0);
var G__54432 = (0);
seq__54409 = G__54429;
chunk__54410 = G__54430;
count__54411 = G__54431;
i__54412 = G__54432;
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
var G__54434 = arguments.length;
switch (G__54434) {
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

var seq__54435_54440 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__54436_54441 = null;
var count__54437_54442 = (0);
var i__54438_54443 = (0);
while(true){
if((i__54438_54443 < count__54437_54442)){
var msg_54444 = cljs.core._nth.call(null,chunk__54436_54441,i__54438_54443);
figwheel.client.socket.handle_incoming_message.call(null,msg_54444);


var G__54445 = seq__54435_54440;
var G__54446 = chunk__54436_54441;
var G__54447 = count__54437_54442;
var G__54448 = (i__54438_54443 + (1));
seq__54435_54440 = G__54445;
chunk__54436_54441 = G__54446;
count__54437_54442 = G__54447;
i__54438_54443 = G__54448;
continue;
} else {
var temp__5457__auto___54449 = cljs.core.seq.call(null,seq__54435_54440);
if(temp__5457__auto___54449){
var seq__54435_54450__$1 = temp__5457__auto___54449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54435_54450__$1)){
var c__4337__auto___54451 = cljs.core.chunk_first.call(null,seq__54435_54450__$1);
var G__54452 = cljs.core.chunk_rest.call(null,seq__54435_54450__$1);
var G__54453 = c__4337__auto___54451;
var G__54454 = cljs.core.count.call(null,c__4337__auto___54451);
var G__54455 = (0);
seq__54435_54440 = G__54452;
chunk__54436_54441 = G__54453;
count__54437_54442 = G__54454;
i__54438_54443 = G__54455;
continue;
} else {
var msg_54456 = cljs.core.first.call(null,seq__54435_54450__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_54456);


var G__54457 = cljs.core.next.call(null,seq__54435_54450__$1);
var G__54458 = null;
var G__54459 = (0);
var G__54460 = (0);
seq__54435_54440 = G__54457;
chunk__54436_54441 = G__54458;
count__54437_54442 = G__54459;
i__54438_54443 = G__54460;
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
var len__4517__auto___54465 = arguments.length;
var i__4518__auto___54466 = (0);
while(true){
if((i__4518__auto___54466 < len__4517__auto___54465)){
args__4520__auto__.push((arguments[i__4518__auto___54466]));

var G__54467 = (i__4518__auto___54466 + (1));
i__4518__auto___54466 = G__54467;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__54462){
var map__54463 = p__54462;
var map__54463__$1 = ((((!((map__54463 == null)))?(((((map__54463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54463):map__54463);
var opts = map__54463__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq54461){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq54461));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e54468){if((e54468 instanceof Error)){
var e = e54468;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e54468;

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
return (function (p__54469){
var map__54470 = p__54469;
var map__54470__$1 = ((((!((map__54470 == null)))?(((((map__54470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__54470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54470):map__54470);
var msg_name = cljs.core.get.call(null,map__54470__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1552956594154
