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
}catch (e37189){if((e37189 instanceof Error)){
var e = e37189;
return "Error: Unable to stringify";
} else {
throw e37189;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__37192 = arguments.length;
switch (G__37192) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__37190_SHARP_){
if(typeof p1__37190_SHARP_ === 'string'){
return p1__37190_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__37190_SHARP_);
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
var len__4517__auto___37195 = arguments.length;
var i__4518__auto___37196 = (0);
while(true){
if((i__4518__auto___37196 < len__4517__auto___37195)){
args__4520__auto__.push((arguments[i__4518__auto___37196]));

var G__37197 = (i__4518__auto___37196 + (1));
i__4518__auto___37196 = G__37197;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq37194){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37194));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___37199 = arguments.length;
var i__4518__auto___37200 = (0);
while(true){
if((i__4518__auto___37200 < len__4517__auto___37199)){
args__4520__auto__.push((arguments[i__4518__auto___37200]));

var G__37201 = (i__4518__auto___37200 + (1));
i__4518__auto___37200 = G__37201;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq37198){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37198));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__37202){
var map__37203 = p__37202;
var map__37203__$1 = ((((!((map__37203 == null)))?(((((map__37203.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37203.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37203):map__37203);
var message = cljs.core.get.call(null,map__37203__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__37203__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__34226__auto___37282 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___37282,ch){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___37282,ch){
return (function (state_37254){
var state_val_37255 = (state_37254[(1)]);
if((state_val_37255 === (7))){
var inst_37250 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37256_37283 = state_37254__$1;
(statearr_37256_37283[(2)] = inst_37250);

(statearr_37256_37283[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (1))){
var state_37254__$1 = state_37254;
var statearr_37257_37284 = state_37254__$1;
(statearr_37257_37284[(2)] = null);

(statearr_37257_37284[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (4))){
var inst_37207 = (state_37254[(7)]);
var inst_37207__$1 = (state_37254[(2)]);
var state_37254__$1 = (function (){var statearr_37258 = state_37254;
(statearr_37258[(7)] = inst_37207__$1);

return statearr_37258;
})();
if(cljs.core.truth_(inst_37207__$1)){
var statearr_37259_37285 = state_37254__$1;
(statearr_37259_37285[(1)] = (5));

} else {
var statearr_37260_37286 = state_37254__$1;
(statearr_37260_37286[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (15))){
var inst_37214 = (state_37254[(8)]);
var inst_37229 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37214);
var inst_37230 = cljs.core.first.call(null,inst_37229);
var inst_37231 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_37230);
var inst_37232 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37231)].join('');
var inst_37233 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_37232);
var state_37254__$1 = state_37254;
var statearr_37261_37287 = state_37254__$1;
(statearr_37261_37287[(2)] = inst_37233);

(statearr_37261_37287[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (13))){
var inst_37238 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37262_37288 = state_37254__$1;
(statearr_37262_37288[(2)] = inst_37238);

(statearr_37262_37288[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (6))){
var state_37254__$1 = state_37254;
var statearr_37263_37289 = state_37254__$1;
(statearr_37263_37289[(2)] = null);

(statearr_37263_37289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (17))){
var inst_37236 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37264_37290 = state_37254__$1;
(statearr_37264_37290[(2)] = inst_37236);

(statearr_37264_37290[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (3))){
var inst_37252 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37254__$1,inst_37252);
} else {
if((state_val_37255 === (12))){
var inst_37213 = (state_37254[(9)]);
var inst_37227 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_37213,opts);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37227)){
var statearr_37265_37291 = state_37254__$1;
(statearr_37265_37291[(1)] = (15));

} else {
var statearr_37266_37292 = state_37254__$1;
(statearr_37266_37292[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (2))){
var state_37254__$1 = state_37254;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37254__$1,(4),ch);
} else {
if((state_val_37255 === (11))){
var inst_37214 = (state_37254[(8)]);
var inst_37219 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_37220 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_37214);
var inst_37221 = cljs.core.async.timeout.call(null,(1000));
var inst_37222 = [inst_37220,inst_37221];
var inst_37223 = (new cljs.core.PersistentVector(null,2,(5),inst_37219,inst_37222,null));
var state_37254__$1 = state_37254;
return cljs.core.async.ioc_alts_BANG_.call(null,state_37254__$1,(14),inst_37223);
} else {
if((state_val_37255 === (9))){
var inst_37214 = (state_37254[(8)]);
var inst_37240 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_37241 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_37214);
var inst_37242 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37241);
var inst_37243 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37242)].join('');
var inst_37244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_37243);
var state_37254__$1 = (function (){var statearr_37267 = state_37254;
(statearr_37267[(10)] = inst_37240);

return statearr_37267;
})();
var statearr_37268_37293 = state_37254__$1;
(statearr_37268_37293[(2)] = inst_37244);

(statearr_37268_37293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (5))){
var inst_37207 = (state_37254[(7)]);
var inst_37209 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_37210 = (new cljs.core.PersistentArrayMap(null,2,inst_37209,null));
var inst_37211 = (new cljs.core.PersistentHashSet(null,inst_37210,null));
var inst_37212 = figwheel.client.focus_msgs.call(null,inst_37211,inst_37207);
var inst_37213 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_37212);
var inst_37214 = cljs.core.first.call(null,inst_37212);
var inst_37215 = figwheel.client.autoload_QMARK_.call(null);
var state_37254__$1 = (function (){var statearr_37269 = state_37254;
(statearr_37269[(8)] = inst_37214);

(statearr_37269[(9)] = inst_37213);

return statearr_37269;
})();
if(cljs.core.truth_(inst_37215)){
var statearr_37270_37294 = state_37254__$1;
(statearr_37270_37294[(1)] = (8));

} else {
var statearr_37271_37295 = state_37254__$1;
(statearr_37271_37295[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (14))){
var inst_37225 = (state_37254[(2)]);
var state_37254__$1 = state_37254;
var statearr_37272_37296 = state_37254__$1;
(statearr_37272_37296[(2)] = inst_37225);

(statearr_37272_37296[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (16))){
var state_37254__$1 = state_37254;
var statearr_37273_37297 = state_37254__$1;
(statearr_37273_37297[(2)] = null);

(statearr_37273_37297[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (10))){
var inst_37246 = (state_37254[(2)]);
var state_37254__$1 = (function (){var statearr_37274 = state_37254;
(statearr_37274[(11)] = inst_37246);

return statearr_37274;
})();
var statearr_37275_37298 = state_37254__$1;
(statearr_37275_37298[(2)] = null);

(statearr_37275_37298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37255 === (8))){
var inst_37213 = (state_37254[(9)]);
var inst_37217 = figwheel.client.reload_file_state_QMARK_.call(null,inst_37213,opts);
var state_37254__$1 = state_37254;
if(cljs.core.truth_(inst_37217)){
var statearr_37276_37299 = state_37254__$1;
(statearr_37276_37299[(1)] = (11));

} else {
var statearr_37277_37300 = state_37254__$1;
(statearr_37277_37300[(1)] = (12));

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
});})(c__34226__auto___37282,ch))
;
return ((function (switch__34136__auto__,c__34226__auto___37282,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34137__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34137__auto____0 = (function (){
var statearr_37278 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37278[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34137__auto__);

(statearr_37278[(1)] = (1));

return statearr_37278;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34137__auto____1 = (function (state_37254){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_37254);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e37279){if((e37279 instanceof Object)){
var ex__34140__auto__ = e37279;
var statearr_37280_37301 = state_37254;
(statearr_37280_37301[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37254);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37279;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37302 = state_37254;
state_37254 = G__37302;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34137__auto__ = function(state_37254){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34137__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34137__auto____1.call(this,state_37254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34137__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34137__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___37282,ch))
})();
var state__34228__auto__ = (function (){var statearr_37281 = f__34227__auto__.call(null);
(statearr_37281[(6)] = c__34226__auto___37282);

return statearr_37281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___37282,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37303_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37303_SHARP_));
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
var base_path_37307 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37307){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_37305 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_37306 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_37305,_STAR_print_fn_STAR_37306,sb,base_path_37307){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_37305,_STAR_print_fn_STAR_37306,sb,base_path_37307))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_37306;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_37305;
}}catch (e37304){if((e37304 instanceof Error)){
var e = e37304;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37307], null));
} else {
var e = e37304;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_37307))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37308){
var map__37309 = p__37308;
var map__37309__$1 = ((((!((map__37309 == null)))?(((((map__37309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37309):map__37309);
var opts = map__37309__$1;
var build_id = cljs.core.get.call(null,map__37309__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37309,map__37309__$1,opts,build_id){
return (function (p__37311){
var vec__37312 = p__37311;
var seq__37313 = cljs.core.seq.call(null,vec__37312);
var first__37314 = cljs.core.first.call(null,seq__37313);
var seq__37313__$1 = cljs.core.next.call(null,seq__37313);
var map__37315 = first__37314;
var map__37315__$1 = ((((!((map__37315 == null)))?(((((map__37315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37315):map__37315);
var msg = map__37315__$1;
var msg_name = cljs.core.get.call(null,map__37315__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37313__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37312,seq__37313,first__37314,seq__37313__$1,map__37315,map__37315__$1,msg,msg_name,_,map__37309,map__37309__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37312,seq__37313,first__37314,seq__37313__$1,map__37315,map__37315__$1,msg,msg_name,_,map__37309,map__37309__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37309,map__37309__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37317){
var vec__37318 = p__37317;
var seq__37319 = cljs.core.seq.call(null,vec__37318);
var first__37320 = cljs.core.first.call(null,seq__37319);
var seq__37319__$1 = cljs.core.next.call(null,seq__37319);
var map__37321 = first__37320;
var map__37321__$1 = ((((!((map__37321 == null)))?(((((map__37321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37321):map__37321);
var msg = map__37321__$1;
var msg_name = cljs.core.get.call(null,map__37321__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37319__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37323){
var map__37324 = p__37323;
var map__37324__$1 = ((((!((map__37324 == null)))?(((((map__37324.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37324.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37324):map__37324);
var on_compile_warning = cljs.core.get.call(null,map__37324__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37324__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37324,map__37324__$1,on_compile_warning,on_compile_fail){
return (function (p__37326){
var vec__37327 = p__37326;
var seq__37328 = cljs.core.seq.call(null,vec__37327);
var first__37329 = cljs.core.first.call(null,seq__37328);
var seq__37328__$1 = cljs.core.next.call(null,seq__37328);
var map__37330 = first__37329;
var map__37330__$1 = ((((!((map__37330 == null)))?(((((map__37330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37330):map__37330);
var msg = map__37330__$1;
var msg_name = cljs.core.get.call(null,map__37330__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37328__$1;
var pred__37332 = cljs.core._EQ_;
var expr__37333 = msg_name;
if(cljs.core.truth_(pred__37332.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37333))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37332.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37333))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37324,map__37324__$1,on_compile_warning,on_compile_fail))
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
var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__,msg_hist,msg_names,msg){
return (function (state_37422){
var state_val_37423 = (state_37422[(1)]);
if((state_val_37423 === (7))){
var inst_37342 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37342)){
var statearr_37424_37471 = state_37422__$1;
(statearr_37424_37471[(1)] = (8));

} else {
var statearr_37425_37472 = state_37422__$1;
(statearr_37425_37472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (20))){
var inst_37416 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37426_37473 = state_37422__$1;
(statearr_37426_37473[(2)] = inst_37416);

(statearr_37426_37473[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (27))){
var inst_37412 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37427_37474 = state_37422__$1;
(statearr_37427_37474[(2)] = inst_37412);

(statearr_37427_37474[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (1))){
var inst_37335 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37335)){
var statearr_37428_37475 = state_37422__$1;
(statearr_37428_37475[(1)] = (2));

} else {
var statearr_37429_37476 = state_37422__$1;
(statearr_37429_37476[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (24))){
var inst_37414 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37430_37477 = state_37422__$1;
(statearr_37430_37477[(2)] = inst_37414);

(statearr_37430_37477[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (4))){
var inst_37420 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37422__$1,inst_37420);
} else {
if((state_val_37423 === (15))){
var inst_37418 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37431_37478 = state_37422__$1;
(statearr_37431_37478[(2)] = inst_37418);

(statearr_37431_37478[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (21))){
var inst_37371 = (state_37422[(2)]);
var inst_37372 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37373 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37372);
var state_37422__$1 = (function (){var statearr_37432 = state_37422;
(statearr_37432[(7)] = inst_37371);

return statearr_37432;
})();
var statearr_37433_37479 = state_37422__$1;
(statearr_37433_37479[(2)] = inst_37373);

(statearr_37433_37479[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (31))){
var inst_37401 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37401)){
var statearr_37434_37480 = state_37422__$1;
(statearr_37434_37480[(1)] = (34));

} else {
var statearr_37435_37481 = state_37422__$1;
(statearr_37435_37481[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (32))){
var inst_37410 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37436_37482 = state_37422__$1;
(statearr_37436_37482[(2)] = inst_37410);

(statearr_37436_37482[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (33))){
var inst_37397 = (state_37422[(2)]);
var inst_37398 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37399 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37398);
var state_37422__$1 = (function (){var statearr_37437 = state_37422;
(statearr_37437[(8)] = inst_37397);

return statearr_37437;
})();
var statearr_37438_37483 = state_37422__$1;
(statearr_37438_37483[(2)] = inst_37399);

(statearr_37438_37483[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (13))){
var inst_37356 = figwheel.client.heads_up.clear.call(null);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37422__$1,(16),inst_37356);
} else {
if((state_val_37423 === (22))){
var inst_37377 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37378 = figwheel.client.heads_up.append_warning_message.call(null,inst_37377);
var state_37422__$1 = state_37422;
var statearr_37439_37484 = state_37422__$1;
(statearr_37439_37484[(2)] = inst_37378);

(statearr_37439_37484[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (36))){
var inst_37408 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37440_37485 = state_37422__$1;
(statearr_37440_37485[(2)] = inst_37408);

(statearr_37440_37485[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (29))){
var inst_37388 = (state_37422[(2)]);
var inst_37389 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37390 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37389);
var state_37422__$1 = (function (){var statearr_37441 = state_37422;
(statearr_37441[(9)] = inst_37388);

return statearr_37441;
})();
var statearr_37442_37486 = state_37422__$1;
(statearr_37442_37486[(2)] = inst_37390);

(statearr_37442_37486[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (6))){
var inst_37337 = (state_37422[(10)]);
var state_37422__$1 = state_37422;
var statearr_37443_37487 = state_37422__$1;
(statearr_37443_37487[(2)] = inst_37337);

(statearr_37443_37487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (28))){
var inst_37384 = (state_37422[(2)]);
var inst_37385 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37386 = figwheel.client.heads_up.display_warning.call(null,inst_37385);
var state_37422__$1 = (function (){var statearr_37444 = state_37422;
(statearr_37444[(11)] = inst_37384);

return statearr_37444;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37422__$1,(29),inst_37386);
} else {
if((state_val_37423 === (25))){
var inst_37382 = figwheel.client.heads_up.clear.call(null);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37422__$1,(28),inst_37382);
} else {
if((state_val_37423 === (34))){
var inst_37403 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37422__$1,(37),inst_37403);
} else {
if((state_val_37423 === (17))){
var inst_37362 = (state_37422[(2)]);
var inst_37363 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37364 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37363);
var state_37422__$1 = (function (){var statearr_37445 = state_37422;
(statearr_37445[(12)] = inst_37362);

return statearr_37445;
})();
var statearr_37446_37488 = state_37422__$1;
(statearr_37446_37488[(2)] = inst_37364);

(statearr_37446_37488[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (3))){
var inst_37354 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37354)){
var statearr_37447_37489 = state_37422__$1;
(statearr_37447_37489[(1)] = (13));

} else {
var statearr_37448_37490 = state_37422__$1;
(statearr_37448_37490[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (12))){
var inst_37350 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37449_37491 = state_37422__$1;
(statearr_37449_37491[(2)] = inst_37350);

(statearr_37449_37491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (2))){
var inst_37337 = (state_37422[(10)]);
var inst_37337__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37422__$1 = (function (){var statearr_37450 = state_37422;
(statearr_37450[(10)] = inst_37337__$1);

return statearr_37450;
})();
if(cljs.core.truth_(inst_37337__$1)){
var statearr_37451_37492 = state_37422__$1;
(statearr_37451_37492[(1)] = (5));

} else {
var statearr_37452_37493 = state_37422__$1;
(statearr_37452_37493[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (23))){
var inst_37380 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37380)){
var statearr_37453_37494 = state_37422__$1;
(statearr_37453_37494[(1)] = (25));

} else {
var statearr_37454_37495 = state_37422__$1;
(statearr_37454_37495[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (35))){
var state_37422__$1 = state_37422;
var statearr_37455_37496 = state_37422__$1;
(statearr_37455_37496[(2)] = null);

(statearr_37455_37496[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (19))){
var inst_37375 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37375)){
var statearr_37456_37497 = state_37422__$1;
(statearr_37456_37497[(1)] = (22));

} else {
var statearr_37457_37498 = state_37422__$1;
(statearr_37457_37498[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (11))){
var inst_37346 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37458_37499 = state_37422__$1;
(statearr_37458_37499[(2)] = inst_37346);

(statearr_37458_37499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (9))){
var inst_37348 = figwheel.client.heads_up.clear.call(null);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37422__$1,(12),inst_37348);
} else {
if((state_val_37423 === (5))){
var inst_37339 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37422__$1 = state_37422;
var statearr_37459_37500 = state_37422__$1;
(statearr_37459_37500[(2)] = inst_37339);

(statearr_37459_37500[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (14))){
var inst_37366 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37366)){
var statearr_37460_37501 = state_37422__$1;
(statearr_37460_37501[(1)] = (18));

} else {
var statearr_37461_37502 = state_37422__$1;
(statearr_37461_37502[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (26))){
var inst_37392 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37422__$1 = state_37422;
if(cljs.core.truth_(inst_37392)){
var statearr_37462_37503 = state_37422__$1;
(statearr_37462_37503[(1)] = (30));

} else {
var statearr_37463_37504 = state_37422__$1;
(statearr_37463_37504[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (16))){
var inst_37358 = (state_37422[(2)]);
var inst_37359 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37360 = figwheel.client.heads_up.display_exception.call(null,inst_37359);
var state_37422__$1 = (function (){var statearr_37464 = state_37422;
(statearr_37464[(13)] = inst_37358);

return statearr_37464;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37422__$1,(17),inst_37360);
} else {
if((state_val_37423 === (30))){
var inst_37394 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37395 = figwheel.client.heads_up.display_warning.call(null,inst_37394);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37422__$1,(33),inst_37395);
} else {
if((state_val_37423 === (10))){
var inst_37352 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37465_37505 = state_37422__$1;
(statearr_37465_37505[(2)] = inst_37352);

(statearr_37465_37505[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (18))){
var inst_37368 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37369 = figwheel.client.heads_up.display_exception.call(null,inst_37368);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37422__$1,(21),inst_37369);
} else {
if((state_val_37423 === (37))){
var inst_37405 = (state_37422[(2)]);
var state_37422__$1 = state_37422;
var statearr_37466_37506 = state_37422__$1;
(statearr_37466_37506[(2)] = inst_37405);

(statearr_37466_37506[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37423 === (8))){
var inst_37344 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37422__$1 = state_37422;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37422__$1,(11),inst_37344);
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
});})(c__34226__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34136__auto__,c__34226__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto____0 = (function (){
var statearr_37467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37467[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto__);

(statearr_37467[(1)] = (1));

return statearr_37467;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto____1 = (function (state_37422){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_37422);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e37468){if((e37468 instanceof Object)){
var ex__34140__auto__ = e37468;
var statearr_37469_37507 = state_37422;
(statearr_37469_37507[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37422);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37508 = state_37422;
state_37422 = G__37508;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto__ = function(state_37422){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto____1.call(this,state_37422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__,msg_hist,msg_names,msg))
})();
var state__34228__auto__ = (function (){var statearr_37470 = f__34227__auto__.call(null);
(statearr_37470[(6)] = c__34226__auto__);

return statearr_37470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__,msg_hist,msg_names,msg))
);

return c__34226__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34226__auto___37537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___37537,ch){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___37537,ch){
return (function (state_37523){
var state_val_37524 = (state_37523[(1)]);
if((state_val_37524 === (1))){
var state_37523__$1 = state_37523;
var statearr_37525_37538 = state_37523__$1;
(statearr_37525_37538[(2)] = null);

(statearr_37525_37538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (2))){
var state_37523__$1 = state_37523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37523__$1,(4),ch);
} else {
if((state_val_37524 === (3))){
var inst_37521 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37523__$1,inst_37521);
} else {
if((state_val_37524 === (4))){
var inst_37511 = (state_37523[(7)]);
var inst_37511__$1 = (state_37523[(2)]);
var state_37523__$1 = (function (){var statearr_37526 = state_37523;
(statearr_37526[(7)] = inst_37511__$1);

return statearr_37526;
})();
if(cljs.core.truth_(inst_37511__$1)){
var statearr_37527_37539 = state_37523__$1;
(statearr_37527_37539[(1)] = (5));

} else {
var statearr_37528_37540 = state_37523__$1;
(statearr_37528_37540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (5))){
var inst_37511 = (state_37523[(7)]);
var inst_37513 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37511);
var state_37523__$1 = state_37523;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37523__$1,(8),inst_37513);
} else {
if((state_val_37524 === (6))){
var state_37523__$1 = state_37523;
var statearr_37529_37541 = state_37523__$1;
(statearr_37529_37541[(2)] = null);

(statearr_37529_37541[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (7))){
var inst_37519 = (state_37523[(2)]);
var state_37523__$1 = state_37523;
var statearr_37530_37542 = state_37523__$1;
(statearr_37530_37542[(2)] = inst_37519);

(statearr_37530_37542[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37524 === (8))){
var inst_37515 = (state_37523[(2)]);
var state_37523__$1 = (function (){var statearr_37531 = state_37523;
(statearr_37531[(8)] = inst_37515);

return statearr_37531;
})();
var statearr_37532_37543 = state_37523__$1;
(statearr_37532_37543[(2)] = null);

(statearr_37532_37543[(1)] = (2));


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
});})(c__34226__auto___37537,ch))
;
return ((function (switch__34136__auto__,c__34226__auto___37537,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34137__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34137__auto____0 = (function (){
var statearr_37533 = [null,null,null,null,null,null,null,null,null];
(statearr_37533[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34137__auto__);

(statearr_37533[(1)] = (1));

return statearr_37533;
});
var figwheel$client$heads_up_plugin_$_state_machine__34137__auto____1 = (function (state_37523){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_37523);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e37534){if((e37534 instanceof Object)){
var ex__34140__auto__ = e37534;
var statearr_37535_37544 = state_37523;
(statearr_37535_37544[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37523);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37545 = state_37523;
state_37523 = G__37545;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34137__auto__ = function(state_37523){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34137__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34137__auto____1.call(this,state_37523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34137__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34137__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___37537,ch))
})();
var state__34228__auto__ = (function (){var statearr_37536 = f__34227__auto__.call(null);
(statearr_37536[(6)] = c__34226__auto___37537);

return statearr_37536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___37537,ch))
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
var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__){
return (function (state_37551){
var state_val_37552 = (state_37551[(1)]);
if((state_val_37552 === (1))){
var inst_37546 = cljs.core.async.timeout.call(null,(3000));
var state_37551__$1 = state_37551;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37551__$1,(2),inst_37546);
} else {
if((state_val_37552 === (2))){
var inst_37548 = (state_37551[(2)]);
var inst_37549 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37551__$1 = (function (){var statearr_37553 = state_37551;
(statearr_37553[(7)] = inst_37548);

return statearr_37553;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37551__$1,inst_37549);
} else {
return null;
}
}
});})(c__34226__auto__))
;
return ((function (switch__34136__auto__,c__34226__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34137__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34137__auto____0 = (function (){
var statearr_37554 = [null,null,null,null,null,null,null,null];
(statearr_37554[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34137__auto__);

(statearr_37554[(1)] = (1));

return statearr_37554;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34137__auto____1 = (function (state_37551){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_37551);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e37555){if((e37555 instanceof Object)){
var ex__34140__auto__ = e37555;
var statearr_37556_37558 = state_37551;
(statearr_37556_37558[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37551);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37555;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37559 = state_37551;
state_37551 = G__37559;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34137__auto__ = function(state_37551){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34137__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34137__auto____1.call(this,state_37551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34137__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34137__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__))
})();
var state__34228__auto__ = (function (){var statearr_37557 = f__34227__auto__.call(null);
(statearr_37557[(6)] = c__34226__auto__);

return statearr_37557;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__))
);

return c__34226__auto__;
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
var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__,figwheel_version,temp__5457__auto__){
return (function (state_37566){
var state_val_37567 = (state_37566[(1)]);
if((state_val_37567 === (1))){
var inst_37560 = cljs.core.async.timeout.call(null,(2000));
var state_37566__$1 = state_37566;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37566__$1,(2),inst_37560);
} else {
if((state_val_37567 === (2))){
var inst_37562 = (state_37566[(2)]);
var inst_37563 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_37564 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37563);
var state_37566__$1 = (function (){var statearr_37568 = state_37566;
(statearr_37568[(7)] = inst_37562);

return statearr_37568;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37566__$1,inst_37564);
} else {
return null;
}
}
});})(c__34226__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34136__auto__,c__34226__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto____0 = (function (){
var statearr_37569 = [null,null,null,null,null,null,null,null];
(statearr_37569[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto__);

(statearr_37569[(1)] = (1));

return statearr_37569;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto____1 = (function (state_37566){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_37566);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e37570){if((e37570 instanceof Object)){
var ex__34140__auto__ = e37570;
var statearr_37571_37573 = state_37566;
(statearr_37571_37573[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37566);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37574 = state_37566;
state_37566 = G__37574;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto__ = function(state_37566){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto____1.call(this,state_37566);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34228__auto__ = (function (){var statearr_37572 = f__34227__auto__.call(null);
(statearr_37572[(6)] = c__34226__auto__);

return statearr_37572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__,figwheel_version,temp__5457__auto__))
);

return c__34226__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37575){
var map__37576 = p__37575;
var map__37576__$1 = ((((!((map__37576 == null)))?(((((map__37576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37576):map__37576);
var file = cljs.core.get.call(null,map__37576__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37576__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37576__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37578 = "";
var G__37578__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37578),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__37578);
var G__37578__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37578__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37578__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = line;
if(cljs.core.truth_(and__3925__auto__)){
return column;
} else {
return and__3925__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37578__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__37578__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37579){
var map__37580 = p__37579;
var map__37580__$1 = ((((!((map__37580 == null)))?(((((map__37580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37580):map__37580);
var ed = map__37580__$1;
var formatted_exception = cljs.core.get.call(null,map__37580__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37580__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37580__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37582_37586 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37583_37587 = null;
var count__37584_37588 = (0);
var i__37585_37589 = (0);
while(true){
if((i__37585_37589 < count__37584_37588)){
var msg_37590 = cljs.core._nth.call(null,chunk__37583_37587,i__37585_37589);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37590);


var G__37591 = seq__37582_37586;
var G__37592 = chunk__37583_37587;
var G__37593 = count__37584_37588;
var G__37594 = (i__37585_37589 + (1));
seq__37582_37586 = G__37591;
chunk__37583_37587 = G__37592;
count__37584_37588 = G__37593;
i__37585_37589 = G__37594;
continue;
} else {
var temp__5457__auto___37595 = cljs.core.seq.call(null,seq__37582_37586);
if(temp__5457__auto___37595){
var seq__37582_37596__$1 = temp__5457__auto___37595;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37582_37596__$1)){
var c__4337__auto___37597 = cljs.core.chunk_first.call(null,seq__37582_37596__$1);
var G__37598 = cljs.core.chunk_rest.call(null,seq__37582_37596__$1);
var G__37599 = c__4337__auto___37597;
var G__37600 = cljs.core.count.call(null,c__4337__auto___37597);
var G__37601 = (0);
seq__37582_37586 = G__37598;
chunk__37583_37587 = G__37599;
count__37584_37588 = G__37600;
i__37585_37589 = G__37601;
continue;
} else {
var msg_37602 = cljs.core.first.call(null,seq__37582_37596__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37602);


var G__37603 = cljs.core.next.call(null,seq__37582_37596__$1);
var G__37604 = null;
var G__37605 = (0);
var G__37606 = (0);
seq__37582_37586 = G__37603;
chunk__37583_37587 = G__37604;
count__37584_37588 = G__37605;
i__37585_37589 = G__37606;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37607){
var map__37608 = p__37607;
var map__37608__$1 = ((((!((map__37608 == null)))?(((((map__37608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37608):map__37608);
var w = map__37608__$1;
var message = cljs.core.get.call(null,map__37608__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37610 = cljs.core.seq.call(null,plugins);
var chunk__37611 = null;
var count__37612 = (0);
var i__37613 = (0);
while(true){
if((i__37613 < count__37612)){
var vec__37614 = cljs.core._nth.call(null,chunk__37611,i__37613);
var k = cljs.core.nth.call(null,vec__37614,(0),null);
var plugin = cljs.core.nth.call(null,vec__37614,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37620 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37610,chunk__37611,count__37612,i__37613,pl_37620,vec__37614,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37620.call(null,msg_hist);
});})(seq__37610,chunk__37611,count__37612,i__37613,pl_37620,vec__37614,k,plugin))
);
} else {
}


var G__37621 = seq__37610;
var G__37622 = chunk__37611;
var G__37623 = count__37612;
var G__37624 = (i__37613 + (1));
seq__37610 = G__37621;
chunk__37611 = G__37622;
count__37612 = G__37623;
i__37613 = G__37624;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37610);
if(temp__5457__auto__){
var seq__37610__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37610__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__37610__$1);
var G__37625 = cljs.core.chunk_rest.call(null,seq__37610__$1);
var G__37626 = c__4337__auto__;
var G__37627 = cljs.core.count.call(null,c__4337__auto__);
var G__37628 = (0);
seq__37610 = G__37625;
chunk__37611 = G__37626;
count__37612 = G__37627;
i__37613 = G__37628;
continue;
} else {
var vec__37617 = cljs.core.first.call(null,seq__37610__$1);
var k = cljs.core.nth.call(null,vec__37617,(0),null);
var plugin = cljs.core.nth.call(null,vec__37617,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37629 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37610,chunk__37611,count__37612,i__37613,pl_37629,vec__37617,k,plugin,seq__37610__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37629.call(null,msg_hist);
});})(seq__37610,chunk__37611,count__37612,i__37613,pl_37629,vec__37617,k,plugin,seq__37610__$1,temp__5457__auto__))
);
} else {
}


var G__37630 = cljs.core.next.call(null,seq__37610__$1);
var G__37631 = null;
var G__37632 = (0);
var G__37633 = (0);
seq__37610 = G__37630;
chunk__37611 = G__37631;
count__37612 = G__37632;
i__37613 = G__37633;
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
var G__37635 = arguments.length;
switch (G__37635) {
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

var seq__37636_37641 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37637_37642 = null;
var count__37638_37643 = (0);
var i__37639_37644 = (0);
while(true){
if((i__37639_37644 < count__37638_37643)){
var msg_37645 = cljs.core._nth.call(null,chunk__37637_37642,i__37639_37644);
figwheel.client.socket.handle_incoming_message.call(null,msg_37645);


var G__37646 = seq__37636_37641;
var G__37647 = chunk__37637_37642;
var G__37648 = count__37638_37643;
var G__37649 = (i__37639_37644 + (1));
seq__37636_37641 = G__37646;
chunk__37637_37642 = G__37647;
count__37638_37643 = G__37648;
i__37639_37644 = G__37649;
continue;
} else {
var temp__5457__auto___37650 = cljs.core.seq.call(null,seq__37636_37641);
if(temp__5457__auto___37650){
var seq__37636_37651__$1 = temp__5457__auto___37650;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37636_37651__$1)){
var c__4337__auto___37652 = cljs.core.chunk_first.call(null,seq__37636_37651__$1);
var G__37653 = cljs.core.chunk_rest.call(null,seq__37636_37651__$1);
var G__37654 = c__4337__auto___37652;
var G__37655 = cljs.core.count.call(null,c__4337__auto___37652);
var G__37656 = (0);
seq__37636_37641 = G__37653;
chunk__37637_37642 = G__37654;
count__37638_37643 = G__37655;
i__37639_37644 = G__37656;
continue;
} else {
var msg_37657 = cljs.core.first.call(null,seq__37636_37651__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37657);


var G__37658 = cljs.core.next.call(null,seq__37636_37651__$1);
var G__37659 = null;
var G__37660 = (0);
var G__37661 = (0);
seq__37636_37641 = G__37658;
chunk__37637_37642 = G__37659;
count__37638_37643 = G__37660;
i__37639_37644 = G__37661;
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
var len__4517__auto___37666 = arguments.length;
var i__4518__auto___37667 = (0);
while(true){
if((i__4518__auto___37667 < len__4517__auto___37666)){
args__4520__auto__.push((arguments[i__4518__auto___37667]));

var G__37668 = (i__4518__auto___37667 + (1));
i__4518__auto___37667 = G__37668;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37663){
var map__37664 = p__37663;
var map__37664__$1 = ((((!((map__37664 == null)))?(((((map__37664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37664):map__37664);
var opts = map__37664__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37662){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37662));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37669){if((e37669 instanceof Error)){
var e = e37669;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37669;

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
return (function (p__37670){
var map__37671 = p__37670;
var map__37671__$1 = ((((!((map__37671 == null)))?(((((map__37671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37671):map__37671);
var msg_name = cljs.core.get.call(null,map__37671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1552590669793
