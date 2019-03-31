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
}catch (e46594){if((e46594 instanceof Error)){
var e = e46594;
return "Error: Unable to stringify";
} else {
throw e46594;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__46597 = arguments.length;
switch (G__46597) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__46595_SHARP_){
if(typeof p1__46595_SHARP_ === 'string'){
return p1__46595_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__46595_SHARP_);
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
var len__4517__auto___46600 = arguments.length;
var i__4518__auto___46601 = (0);
while(true){
if((i__4518__auto___46601 < len__4517__auto___46600)){
args__4520__auto__.push((arguments[i__4518__auto___46601]));

var G__46602 = (i__4518__auto___46601 + (1));
i__4518__auto___46601 = G__46602;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq46599){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46599));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___46604 = arguments.length;
var i__4518__auto___46605 = (0);
while(true){
if((i__4518__auto___46605 < len__4517__auto___46604)){
args__4520__auto__.push((arguments[i__4518__auto___46605]));

var G__46606 = (i__4518__auto___46605 + (1));
i__4518__auto___46605 = G__46606;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq46603){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq46603));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__46607){
var map__46608 = p__46607;
var map__46608__$1 = ((((!((map__46608 == null)))?(((((map__46608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46608):map__46608);
var message = cljs.core.get.call(null,map__46608__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__46608__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__43631__auto___46687 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___46687,ch){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___46687,ch){
return (function (state_46659){
var state_val_46660 = (state_46659[(1)]);
if((state_val_46660 === (7))){
var inst_46655 = (state_46659[(2)]);
var state_46659__$1 = state_46659;
var statearr_46661_46688 = state_46659__$1;
(statearr_46661_46688[(2)] = inst_46655);

(statearr_46661_46688[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (1))){
var state_46659__$1 = state_46659;
var statearr_46662_46689 = state_46659__$1;
(statearr_46662_46689[(2)] = null);

(statearr_46662_46689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (4))){
var inst_46612 = (state_46659[(7)]);
var inst_46612__$1 = (state_46659[(2)]);
var state_46659__$1 = (function (){var statearr_46663 = state_46659;
(statearr_46663[(7)] = inst_46612__$1);

return statearr_46663;
})();
if(cljs.core.truth_(inst_46612__$1)){
var statearr_46664_46690 = state_46659__$1;
(statearr_46664_46690[(1)] = (5));

} else {
var statearr_46665_46691 = state_46659__$1;
(statearr_46665_46691[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (15))){
var inst_46619 = (state_46659[(8)]);
var inst_46634 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46619);
var inst_46635 = cljs.core.first.call(null,inst_46634);
var inst_46636 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_46635);
var inst_46637 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46636)].join('');
var inst_46638 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_46637);
var state_46659__$1 = state_46659;
var statearr_46666_46692 = state_46659__$1;
(statearr_46666_46692[(2)] = inst_46638);

(statearr_46666_46692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (13))){
var inst_46643 = (state_46659[(2)]);
var state_46659__$1 = state_46659;
var statearr_46667_46693 = state_46659__$1;
(statearr_46667_46693[(2)] = inst_46643);

(statearr_46667_46693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (6))){
var state_46659__$1 = state_46659;
var statearr_46668_46694 = state_46659__$1;
(statearr_46668_46694[(2)] = null);

(statearr_46668_46694[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (17))){
var inst_46641 = (state_46659[(2)]);
var state_46659__$1 = state_46659;
var statearr_46669_46695 = state_46659__$1;
(statearr_46669_46695[(2)] = inst_46641);

(statearr_46669_46695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (3))){
var inst_46657 = (state_46659[(2)]);
var state_46659__$1 = state_46659;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46659__$1,inst_46657);
} else {
if((state_val_46660 === (12))){
var inst_46618 = (state_46659[(9)]);
var inst_46632 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_46618,opts);
var state_46659__$1 = state_46659;
if(cljs.core.truth_(inst_46632)){
var statearr_46670_46696 = state_46659__$1;
(statearr_46670_46696[(1)] = (15));

} else {
var statearr_46671_46697 = state_46659__$1;
(statearr_46671_46697[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (2))){
var state_46659__$1 = state_46659;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46659__$1,(4),ch);
} else {
if((state_val_46660 === (11))){
var inst_46619 = (state_46659[(8)]);
var inst_46624 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46625 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_46619);
var inst_46626 = cljs.core.async.timeout.call(null,(1000));
var inst_46627 = [inst_46625,inst_46626];
var inst_46628 = (new cljs.core.PersistentVector(null,2,(5),inst_46624,inst_46627,null));
var state_46659__$1 = state_46659;
return cljs.core.async.ioc_alts_BANG_.call(null,state_46659__$1,(14),inst_46628);
} else {
if((state_val_46660 === (9))){
var inst_46619 = (state_46659[(8)]);
var inst_46645 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_46646 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_46619);
var inst_46647 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46646);
var inst_46648 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46647)].join('');
var inst_46649 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_46648);
var state_46659__$1 = (function (){var statearr_46672 = state_46659;
(statearr_46672[(10)] = inst_46645);

return statearr_46672;
})();
var statearr_46673_46698 = state_46659__$1;
(statearr_46673_46698[(2)] = inst_46649);

(statearr_46673_46698[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (5))){
var inst_46612 = (state_46659[(7)]);
var inst_46614 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_46615 = (new cljs.core.PersistentArrayMap(null,2,inst_46614,null));
var inst_46616 = (new cljs.core.PersistentHashSet(null,inst_46615,null));
var inst_46617 = figwheel.client.focus_msgs.call(null,inst_46616,inst_46612);
var inst_46618 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_46617);
var inst_46619 = cljs.core.first.call(null,inst_46617);
var inst_46620 = figwheel.client.autoload_QMARK_.call(null);
var state_46659__$1 = (function (){var statearr_46674 = state_46659;
(statearr_46674[(9)] = inst_46618);

(statearr_46674[(8)] = inst_46619);

return statearr_46674;
})();
if(cljs.core.truth_(inst_46620)){
var statearr_46675_46699 = state_46659__$1;
(statearr_46675_46699[(1)] = (8));

} else {
var statearr_46676_46700 = state_46659__$1;
(statearr_46676_46700[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (14))){
var inst_46630 = (state_46659[(2)]);
var state_46659__$1 = state_46659;
var statearr_46677_46701 = state_46659__$1;
(statearr_46677_46701[(2)] = inst_46630);

(statearr_46677_46701[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (16))){
var state_46659__$1 = state_46659;
var statearr_46678_46702 = state_46659__$1;
(statearr_46678_46702[(2)] = null);

(statearr_46678_46702[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (10))){
var inst_46651 = (state_46659[(2)]);
var state_46659__$1 = (function (){var statearr_46679 = state_46659;
(statearr_46679[(11)] = inst_46651);

return statearr_46679;
})();
var statearr_46680_46703 = state_46659__$1;
(statearr_46680_46703[(2)] = null);

(statearr_46680_46703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46660 === (8))){
var inst_46618 = (state_46659[(9)]);
var inst_46622 = figwheel.client.reload_file_state_QMARK_.call(null,inst_46618,opts);
var state_46659__$1 = state_46659;
if(cljs.core.truth_(inst_46622)){
var statearr_46681_46704 = state_46659__$1;
(statearr_46681_46704[(1)] = (11));

} else {
var statearr_46682_46705 = state_46659__$1;
(statearr_46682_46705[(1)] = (12));

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
});})(c__43631__auto___46687,ch))
;
return ((function (switch__43541__auto__,c__43631__auto___46687,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__43542__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__43542__auto____0 = (function (){
var statearr_46683 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46683[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__43542__auto__);

(statearr_46683[(1)] = (1));

return statearr_46683;
});
var figwheel$client$file_reloader_plugin_$_state_machine__43542__auto____1 = (function (state_46659){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_46659);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e46684){if((e46684 instanceof Object)){
var ex__43545__auto__ = e46684;
var statearr_46685_46706 = state_46659;
(statearr_46685_46706[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46659);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46684;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46707 = state_46659;
state_46659 = G__46707;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__43542__auto__ = function(state_46659){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__43542__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__43542__auto____1.call(this,state_46659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__43542__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__43542__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___46687,ch))
})();
var state__43633__auto__ = (function (){var statearr_46686 = f__43632__auto__.call(null);
(statearr_46686[(6)] = c__43631__auto___46687);

return statearr_46686;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___46687,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__46708_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__46708_SHARP_));
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
var base_path_46712 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_46712){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_46710 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_46711 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_46710,_STAR_print_fn_STAR_46711,sb,base_path_46712){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_46710,_STAR_print_fn_STAR_46711,sb,base_path_46712))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = ((!(typeof result_value === 'string'))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_46711;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_46710;
}}catch (e46709){if((e46709 instanceof Error)){
var e = e46709;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_46712], null));
} else {
var e = e46709;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_46712))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__46713){
var map__46714 = p__46713;
var map__46714__$1 = ((((!((map__46714 == null)))?(((((map__46714.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46714.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46714):map__46714);
var opts = map__46714__$1;
var build_id = cljs.core.get.call(null,map__46714__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__46714,map__46714__$1,opts,build_id){
return (function (p__46716){
var vec__46717 = p__46716;
var seq__46718 = cljs.core.seq.call(null,vec__46717);
var first__46719 = cljs.core.first.call(null,seq__46718);
var seq__46718__$1 = cljs.core.next.call(null,seq__46718);
var map__46720 = first__46719;
var map__46720__$1 = ((((!((map__46720 == null)))?(((((map__46720.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46720.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46720):map__46720);
var msg = map__46720__$1;
var msg_name = cljs.core.get.call(null,map__46720__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46718__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__46717,seq__46718,first__46719,seq__46718__$1,map__46720,map__46720__$1,msg,msg_name,_,map__46714,map__46714__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__46717,seq__46718,first__46719,seq__46718__$1,map__46720,map__46720__$1,msg,msg_name,_,map__46714,map__46714__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__46714,map__46714__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__46722){
var vec__46723 = p__46722;
var seq__46724 = cljs.core.seq.call(null,vec__46723);
var first__46725 = cljs.core.first.call(null,seq__46724);
var seq__46724__$1 = cljs.core.next.call(null,seq__46724);
var map__46726 = first__46725;
var map__46726__$1 = ((((!((map__46726 == null)))?(((((map__46726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46726):map__46726);
var msg = map__46726__$1;
var msg_name = cljs.core.get.call(null,map__46726__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46724__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__46728){
var map__46729 = p__46728;
var map__46729__$1 = ((((!((map__46729 == null)))?(((((map__46729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46729):map__46729);
var on_compile_warning = cljs.core.get.call(null,map__46729__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__46729__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__46729,map__46729__$1,on_compile_warning,on_compile_fail){
return (function (p__46731){
var vec__46732 = p__46731;
var seq__46733 = cljs.core.seq.call(null,vec__46732);
var first__46734 = cljs.core.first.call(null,seq__46733);
var seq__46733__$1 = cljs.core.next.call(null,seq__46733);
var map__46735 = first__46734;
var map__46735__$1 = ((((!((map__46735 == null)))?(((((map__46735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46735.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46735):map__46735);
var msg = map__46735__$1;
var msg_name = cljs.core.get.call(null,map__46735__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__46733__$1;
var pred__46737 = cljs.core._EQ_;
var expr__46738 = msg_name;
if(cljs.core.truth_(pred__46737.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__46738))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__46737.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__46738))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__46729,map__46729__$1,on_compile_warning,on_compile_fail))
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
var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__,msg_hist,msg_names,msg){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__,msg_hist,msg_names,msg){
return (function (state_46827){
var state_val_46828 = (state_46827[(1)]);
if((state_val_46828 === (7))){
var inst_46747 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46747)){
var statearr_46829_46876 = state_46827__$1;
(statearr_46829_46876[(1)] = (8));

} else {
var statearr_46830_46877 = state_46827__$1;
(statearr_46830_46877[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (20))){
var inst_46821 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46831_46878 = state_46827__$1;
(statearr_46831_46878[(2)] = inst_46821);

(statearr_46831_46878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (27))){
var inst_46817 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46832_46879 = state_46827__$1;
(statearr_46832_46879[(2)] = inst_46817);

(statearr_46832_46879[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (1))){
var inst_46740 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46740)){
var statearr_46833_46880 = state_46827__$1;
(statearr_46833_46880[(1)] = (2));

} else {
var statearr_46834_46881 = state_46827__$1;
(statearr_46834_46881[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (24))){
var inst_46819 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46835_46882 = state_46827__$1;
(statearr_46835_46882[(2)] = inst_46819);

(statearr_46835_46882[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (4))){
var inst_46825 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46827__$1,inst_46825);
} else {
if((state_val_46828 === (15))){
var inst_46823 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46836_46883 = state_46827__$1;
(statearr_46836_46883[(2)] = inst_46823);

(statearr_46836_46883[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (21))){
var inst_46776 = (state_46827[(2)]);
var inst_46777 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46778 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46777);
var state_46827__$1 = (function (){var statearr_46837 = state_46827;
(statearr_46837[(7)] = inst_46776);

return statearr_46837;
})();
var statearr_46838_46884 = state_46827__$1;
(statearr_46838_46884[(2)] = inst_46778);

(statearr_46838_46884[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (31))){
var inst_46806 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46806)){
var statearr_46839_46885 = state_46827__$1;
(statearr_46839_46885[(1)] = (34));

} else {
var statearr_46840_46886 = state_46827__$1;
(statearr_46840_46886[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (32))){
var inst_46815 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46841_46887 = state_46827__$1;
(statearr_46841_46887[(2)] = inst_46815);

(statearr_46841_46887[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (33))){
var inst_46802 = (state_46827[(2)]);
var inst_46803 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46804 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46803);
var state_46827__$1 = (function (){var statearr_46842 = state_46827;
(statearr_46842[(8)] = inst_46802);

return statearr_46842;
})();
var statearr_46843_46888 = state_46827__$1;
(statearr_46843_46888[(2)] = inst_46804);

(statearr_46843_46888[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (13))){
var inst_46761 = figwheel.client.heads_up.clear.call(null);
var state_46827__$1 = state_46827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(16),inst_46761);
} else {
if((state_val_46828 === (22))){
var inst_46782 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46783 = figwheel.client.heads_up.append_warning_message.call(null,inst_46782);
var state_46827__$1 = state_46827;
var statearr_46844_46889 = state_46827__$1;
(statearr_46844_46889[(2)] = inst_46783);

(statearr_46844_46889[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (36))){
var inst_46813 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46845_46890 = state_46827__$1;
(statearr_46845_46890[(2)] = inst_46813);

(statearr_46845_46890[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (29))){
var inst_46793 = (state_46827[(2)]);
var inst_46794 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46795 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46794);
var state_46827__$1 = (function (){var statearr_46846 = state_46827;
(statearr_46846[(9)] = inst_46793);

return statearr_46846;
})();
var statearr_46847_46891 = state_46827__$1;
(statearr_46847_46891[(2)] = inst_46795);

(statearr_46847_46891[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (6))){
var inst_46742 = (state_46827[(10)]);
var state_46827__$1 = state_46827;
var statearr_46848_46892 = state_46827__$1;
(statearr_46848_46892[(2)] = inst_46742);

(statearr_46848_46892[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (28))){
var inst_46789 = (state_46827[(2)]);
var inst_46790 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46791 = figwheel.client.heads_up.display_warning.call(null,inst_46790);
var state_46827__$1 = (function (){var statearr_46849 = state_46827;
(statearr_46849[(11)] = inst_46789);

return statearr_46849;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(29),inst_46791);
} else {
if((state_val_46828 === (25))){
var inst_46787 = figwheel.client.heads_up.clear.call(null);
var state_46827__$1 = state_46827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(28),inst_46787);
} else {
if((state_val_46828 === (34))){
var inst_46808 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46827__$1 = state_46827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(37),inst_46808);
} else {
if((state_val_46828 === (17))){
var inst_46767 = (state_46827[(2)]);
var inst_46768 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46769 = figwheel.client.auto_jump_to_error.call(null,opts,inst_46768);
var state_46827__$1 = (function (){var statearr_46850 = state_46827;
(statearr_46850[(12)] = inst_46767);

return statearr_46850;
})();
var statearr_46851_46893 = state_46827__$1;
(statearr_46851_46893[(2)] = inst_46769);

(statearr_46851_46893[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (3))){
var inst_46759 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46759)){
var statearr_46852_46894 = state_46827__$1;
(statearr_46852_46894[(1)] = (13));

} else {
var statearr_46853_46895 = state_46827__$1;
(statearr_46853_46895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (12))){
var inst_46755 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46854_46896 = state_46827__$1;
(statearr_46854_46896[(2)] = inst_46755);

(statearr_46854_46896[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (2))){
var inst_46742 = (state_46827[(10)]);
var inst_46742__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_46827__$1 = (function (){var statearr_46855 = state_46827;
(statearr_46855[(10)] = inst_46742__$1);

return statearr_46855;
})();
if(cljs.core.truth_(inst_46742__$1)){
var statearr_46856_46897 = state_46827__$1;
(statearr_46856_46897[(1)] = (5));

} else {
var statearr_46857_46898 = state_46827__$1;
(statearr_46857_46898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (23))){
var inst_46785 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46785)){
var statearr_46858_46899 = state_46827__$1;
(statearr_46858_46899[(1)] = (25));

} else {
var statearr_46859_46900 = state_46827__$1;
(statearr_46859_46900[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (35))){
var state_46827__$1 = state_46827;
var statearr_46860_46901 = state_46827__$1;
(statearr_46860_46901[(2)] = null);

(statearr_46860_46901[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (19))){
var inst_46780 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46780)){
var statearr_46861_46902 = state_46827__$1;
(statearr_46861_46902[(1)] = (22));

} else {
var statearr_46862_46903 = state_46827__$1;
(statearr_46862_46903[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (11))){
var inst_46751 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46863_46904 = state_46827__$1;
(statearr_46863_46904[(2)] = inst_46751);

(statearr_46863_46904[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (9))){
var inst_46753 = figwheel.client.heads_up.clear.call(null);
var state_46827__$1 = state_46827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(12),inst_46753);
} else {
if((state_val_46828 === (5))){
var inst_46744 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_46827__$1 = state_46827;
var statearr_46864_46905 = state_46827__$1;
(statearr_46864_46905[(2)] = inst_46744);

(statearr_46864_46905[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (14))){
var inst_46771 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46771)){
var statearr_46865_46906 = state_46827__$1;
(statearr_46865_46906[(1)] = (18));

} else {
var statearr_46866_46907 = state_46827__$1;
(statearr_46866_46907[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (26))){
var inst_46797 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_46827__$1 = state_46827;
if(cljs.core.truth_(inst_46797)){
var statearr_46867_46908 = state_46827__$1;
(statearr_46867_46908[(1)] = (30));

} else {
var statearr_46868_46909 = state_46827__$1;
(statearr_46868_46909[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (16))){
var inst_46763 = (state_46827[(2)]);
var inst_46764 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46765 = figwheel.client.heads_up.display_exception.call(null,inst_46764);
var state_46827__$1 = (function (){var statearr_46869 = state_46827;
(statearr_46869[(13)] = inst_46763);

return statearr_46869;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(17),inst_46765);
} else {
if((state_val_46828 === (30))){
var inst_46799 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46800 = figwheel.client.heads_up.display_warning.call(null,inst_46799);
var state_46827__$1 = state_46827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(33),inst_46800);
} else {
if((state_val_46828 === (10))){
var inst_46757 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46870_46910 = state_46827__$1;
(statearr_46870_46910[(2)] = inst_46757);

(statearr_46870_46910[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (18))){
var inst_46773 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_46774 = figwheel.client.heads_up.display_exception.call(null,inst_46773);
var state_46827__$1 = state_46827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(21),inst_46774);
} else {
if((state_val_46828 === (37))){
var inst_46810 = (state_46827[(2)]);
var state_46827__$1 = state_46827;
var statearr_46871_46911 = state_46827__$1;
(statearr_46871_46911[(2)] = inst_46810);

(statearr_46871_46911[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46828 === (8))){
var inst_46749 = figwheel.client.heads_up.flash_loaded.call(null);
var state_46827__$1 = state_46827;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46827__$1,(11),inst_46749);
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
});})(c__43631__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__43541__auto__,c__43631__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto____0 = (function (){
var statearr_46872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46872[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto__);

(statearr_46872[(1)] = (1));

return statearr_46872;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto____1 = (function (state_46827){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_46827);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e46873){if((e46873 instanceof Object)){
var ex__43545__auto__ = e46873;
var statearr_46874_46912 = state_46827;
(statearr_46874_46912[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46827);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46873;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46913 = state_46827;
state_46827 = G__46913;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto__ = function(state_46827){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto____1.call(this,state_46827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__,msg_hist,msg_names,msg))
})();
var state__43633__auto__ = (function (){var statearr_46875 = f__43632__auto__.call(null);
(statearr_46875[(6)] = c__43631__auto__);

return statearr_46875;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__,msg_hist,msg_names,msg))
);

return c__43631__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__43631__auto___46942 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___46942,ch){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___46942,ch){
return (function (state_46928){
var state_val_46929 = (state_46928[(1)]);
if((state_val_46929 === (1))){
var state_46928__$1 = state_46928;
var statearr_46930_46943 = state_46928__$1;
(statearr_46930_46943[(2)] = null);

(statearr_46930_46943[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (2))){
var state_46928__$1 = state_46928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46928__$1,(4),ch);
} else {
if((state_val_46929 === (3))){
var inst_46926 = (state_46928[(2)]);
var state_46928__$1 = state_46928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46928__$1,inst_46926);
} else {
if((state_val_46929 === (4))){
var inst_46916 = (state_46928[(7)]);
var inst_46916__$1 = (state_46928[(2)]);
var state_46928__$1 = (function (){var statearr_46931 = state_46928;
(statearr_46931[(7)] = inst_46916__$1);

return statearr_46931;
})();
if(cljs.core.truth_(inst_46916__$1)){
var statearr_46932_46944 = state_46928__$1;
(statearr_46932_46944[(1)] = (5));

} else {
var statearr_46933_46945 = state_46928__$1;
(statearr_46933_46945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (5))){
var inst_46916 = (state_46928[(7)]);
var inst_46918 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_46916);
var state_46928__$1 = state_46928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46928__$1,(8),inst_46918);
} else {
if((state_val_46929 === (6))){
var state_46928__$1 = state_46928;
var statearr_46934_46946 = state_46928__$1;
(statearr_46934_46946[(2)] = null);

(statearr_46934_46946[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (7))){
var inst_46924 = (state_46928[(2)]);
var state_46928__$1 = state_46928;
var statearr_46935_46947 = state_46928__$1;
(statearr_46935_46947[(2)] = inst_46924);

(statearr_46935_46947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46929 === (8))){
var inst_46920 = (state_46928[(2)]);
var state_46928__$1 = (function (){var statearr_46936 = state_46928;
(statearr_46936[(8)] = inst_46920);

return statearr_46936;
})();
var statearr_46937_46948 = state_46928__$1;
(statearr_46937_46948[(2)] = null);

(statearr_46937_46948[(1)] = (2));


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
});})(c__43631__auto___46942,ch))
;
return ((function (switch__43541__auto__,c__43631__auto___46942,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__43542__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__43542__auto____0 = (function (){
var statearr_46938 = [null,null,null,null,null,null,null,null,null];
(statearr_46938[(0)] = figwheel$client$heads_up_plugin_$_state_machine__43542__auto__);

(statearr_46938[(1)] = (1));

return statearr_46938;
});
var figwheel$client$heads_up_plugin_$_state_machine__43542__auto____1 = (function (state_46928){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_46928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e46939){if((e46939 instanceof Object)){
var ex__43545__auto__ = e46939;
var statearr_46940_46949 = state_46928;
(statearr_46940_46949[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46950 = state_46928;
state_46928 = G__46950;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__43542__auto__ = function(state_46928){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__43542__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__43542__auto____1.call(this,state_46928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__43542__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__43542__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___46942,ch))
})();
var state__43633__auto__ = (function (){var statearr_46941 = f__43632__auto__.call(null);
(statearr_46941[(6)] = c__43631__auto___46942);

return statearr_46941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___46942,ch))
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
var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__){
return (function (state_46956){
var state_val_46957 = (state_46956[(1)]);
if((state_val_46957 === (1))){
var inst_46951 = cljs.core.async.timeout.call(null,(3000));
var state_46956__$1 = state_46956;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46956__$1,(2),inst_46951);
} else {
if((state_val_46957 === (2))){
var inst_46953 = (state_46956[(2)]);
var inst_46954 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_46956__$1 = (function (){var statearr_46958 = state_46956;
(statearr_46958[(7)] = inst_46953);

return statearr_46958;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46956__$1,inst_46954);
} else {
return null;
}
}
});})(c__43631__auto__))
;
return ((function (switch__43541__auto__,c__43631__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__43542__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__43542__auto____0 = (function (){
var statearr_46959 = [null,null,null,null,null,null,null,null];
(statearr_46959[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__43542__auto__);

(statearr_46959[(1)] = (1));

return statearr_46959;
});
var figwheel$client$enforce_project_plugin_$_state_machine__43542__auto____1 = (function (state_46956){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_46956);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e46960){if((e46960 instanceof Object)){
var ex__43545__auto__ = e46960;
var statearr_46961_46963 = state_46956;
(statearr_46961_46963[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46956);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46960;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46964 = state_46956;
state_46956 = G__46964;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__43542__auto__ = function(state_46956){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__43542__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__43542__auto____1.call(this,state_46956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__43542__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__43542__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__))
})();
var state__43633__auto__ = (function (){var statearr_46962 = f__43632__auto__.call(null);
(statearr_46962[(6)] = c__43631__auto__);

return statearr_46962;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__))
);

return c__43631__auto__;
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
var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__,figwheel_version,temp__5457__auto__){
return (function (state_46971){
var state_val_46972 = (state_46971[(1)]);
if((state_val_46972 === (1))){
var inst_46965 = cljs.core.async.timeout.call(null,(2000));
var state_46971__$1 = state_46971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46971__$1,(2),inst_46965);
} else {
if((state_val_46972 === (2))){
var inst_46967 = (state_46971[(2)]);
var inst_46968 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_46969 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_46968);
var state_46971__$1 = (function (){var statearr_46973 = state_46971;
(statearr_46973[(7)] = inst_46967);

return statearr_46973;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46971__$1,inst_46969);
} else {
return null;
}
}
});})(c__43631__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__43541__auto__,c__43631__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto____0 = (function (){
var statearr_46974 = [null,null,null,null,null,null,null,null];
(statearr_46974[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto__);

(statearr_46974[(1)] = (1));

return statearr_46974;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto____1 = (function (state_46971){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_46971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e46975){if((e46975 instanceof Object)){
var ex__43545__auto__ = e46975;
var statearr_46976_46978 = state_46971;
(statearr_46976_46978[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46975;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46979 = state_46971;
state_46971 = G__46979;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto__ = function(state_46971){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto____1.call(this,state_46971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__,figwheel_version,temp__5457__auto__))
})();
var state__43633__auto__ = (function (){var statearr_46977 = f__43632__auto__.call(null);
(statearr_46977[(6)] = c__43631__auto__);

return statearr_46977;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__,figwheel_version,temp__5457__auto__))
);

return c__43631__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__46980){
var map__46981 = p__46980;
var map__46981__$1 = ((((!((map__46981 == null)))?(((((map__46981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46981):map__46981);
var file = cljs.core.get.call(null,map__46981__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__46981__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__46981__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__46983 = "";
var G__46983__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46983),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__46983);
var G__46983__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46983__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__46983__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = line;
if(cljs.core.truth_(and__3925__auto__)){
return column;
} else {
return and__3925__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46983__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__46983__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__46984){
var map__46985 = p__46984;
var map__46985__$1 = ((((!((map__46985 == null)))?(((((map__46985.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46985.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46985):map__46985);
var ed = map__46985__$1;
var exception_data = cljs.core.get.call(null,map__46985__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__46985__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_46988 = (function (){var G__46987 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46987)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__46987;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_46988);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__46989){
var map__46990 = p__46989;
var map__46990__$1 = ((((!((map__46990 == null)))?(((((map__46990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46990):map__46990);
var w = map__46990__$1;
var message = cljs.core.get.call(null,map__46990__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__46992 = cljs.core.seq.call(null,plugins);
var chunk__46993 = null;
var count__46994 = (0);
var i__46995 = (0);
while(true){
if((i__46995 < count__46994)){
var vec__46996 = cljs.core._nth.call(null,chunk__46993,i__46995);
var k = cljs.core.nth.call(null,vec__46996,(0),null);
var plugin = cljs.core.nth.call(null,vec__46996,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47002 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46992,chunk__46993,count__46994,i__46995,pl_47002,vec__46996,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_47002.call(null,msg_hist);
});})(seq__46992,chunk__46993,count__46994,i__46995,pl_47002,vec__46996,k,plugin))
);
} else {
}


var G__47003 = seq__46992;
var G__47004 = chunk__46993;
var G__47005 = count__46994;
var G__47006 = (i__46995 + (1));
seq__46992 = G__47003;
chunk__46993 = G__47004;
count__46994 = G__47005;
i__46995 = G__47006;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__46992);
if(temp__5457__auto__){
var seq__46992__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46992__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__46992__$1);
var G__47007 = cljs.core.chunk_rest.call(null,seq__46992__$1);
var G__47008 = c__4337__auto__;
var G__47009 = cljs.core.count.call(null,c__4337__auto__);
var G__47010 = (0);
seq__46992 = G__47007;
chunk__46993 = G__47008;
count__46994 = G__47009;
i__46995 = G__47010;
continue;
} else {
var vec__46999 = cljs.core.first.call(null,seq__46992__$1);
var k = cljs.core.nth.call(null,vec__46999,(0),null);
var plugin = cljs.core.nth.call(null,vec__46999,(1),null);
if(cljs.core.truth_(plugin)){
var pl_47011 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__46992,chunk__46993,count__46994,i__46995,pl_47011,vec__46999,k,plugin,seq__46992__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_47011.call(null,msg_hist);
});})(seq__46992,chunk__46993,count__46994,i__46995,pl_47011,vec__46999,k,plugin,seq__46992__$1,temp__5457__auto__))
);
} else {
}


var G__47012 = cljs.core.next.call(null,seq__46992__$1);
var G__47013 = null;
var G__47014 = (0);
var G__47015 = (0);
seq__46992 = G__47012;
chunk__46993 = G__47013;
count__46994 = G__47014;
i__46995 = G__47015;
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
var G__47017 = arguments.length;
switch (G__47017) {
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

var seq__47018_47023 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__47019_47024 = null;
var count__47020_47025 = (0);
var i__47021_47026 = (0);
while(true){
if((i__47021_47026 < count__47020_47025)){
var msg_47027 = cljs.core._nth.call(null,chunk__47019_47024,i__47021_47026);
figwheel.client.socket.handle_incoming_message.call(null,msg_47027);


var G__47028 = seq__47018_47023;
var G__47029 = chunk__47019_47024;
var G__47030 = count__47020_47025;
var G__47031 = (i__47021_47026 + (1));
seq__47018_47023 = G__47028;
chunk__47019_47024 = G__47029;
count__47020_47025 = G__47030;
i__47021_47026 = G__47031;
continue;
} else {
var temp__5457__auto___47032 = cljs.core.seq.call(null,seq__47018_47023);
if(temp__5457__auto___47032){
var seq__47018_47033__$1 = temp__5457__auto___47032;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47018_47033__$1)){
var c__4337__auto___47034 = cljs.core.chunk_first.call(null,seq__47018_47033__$1);
var G__47035 = cljs.core.chunk_rest.call(null,seq__47018_47033__$1);
var G__47036 = c__4337__auto___47034;
var G__47037 = cljs.core.count.call(null,c__4337__auto___47034);
var G__47038 = (0);
seq__47018_47023 = G__47035;
chunk__47019_47024 = G__47036;
count__47020_47025 = G__47037;
i__47021_47026 = G__47038;
continue;
} else {
var msg_47039 = cljs.core.first.call(null,seq__47018_47033__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_47039);


var G__47040 = cljs.core.next.call(null,seq__47018_47033__$1);
var G__47041 = null;
var G__47042 = (0);
var G__47043 = (0);
seq__47018_47023 = G__47040;
chunk__47019_47024 = G__47041;
count__47020_47025 = G__47042;
i__47021_47026 = G__47043;
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
var len__4517__auto___47048 = arguments.length;
var i__4518__auto___47049 = (0);
while(true){
if((i__4518__auto___47049 < len__4517__auto___47048)){
args__4520__auto__.push((arguments[i__4518__auto___47049]));

var G__47050 = (i__4518__auto___47049 + (1));
i__4518__auto___47049 = G__47050;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__47045){
var map__47046 = p__47045;
var map__47046__$1 = ((((!((map__47046 == null)))?(((((map__47046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47046):map__47046);
var opts = map__47046__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq47044){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq47044));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e47051){if((e47051 instanceof Error)){
var e = e47051;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e47051;

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
return (function (p__47052){
var map__47053 = p__47052;
var map__47053__$1 = ((((!((map__47053 == null)))?(((((map__47053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__47053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47053):map__47053);
var msg_name = cljs.core.get.call(null,map__47053__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1553997028533
