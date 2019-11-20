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
}catch (e59222){if((e59222 instanceof Error)){
var e = e59222;
return "Error: Unable to stringify";
} else {
throw e59222;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__59225 = arguments.length;
switch (G__59225) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__59223_SHARP_){
if(typeof p1__59223_SHARP_ === 'string'){
return p1__59223_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__59223_SHARP_);
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
var len__4517__auto___59228 = arguments.length;
var i__4518__auto___59229 = (0);
while(true){
if((i__4518__auto___59229 < len__4517__auto___59228)){
args__4520__auto__.push((arguments[i__4518__auto___59229]));

var G__59230 = (i__4518__auto___59229 + (1));
i__4518__auto___59229 = G__59230;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq59227){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59227));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___59232 = arguments.length;
var i__4518__auto___59233 = (0);
while(true){
if((i__4518__auto___59233 < len__4517__auto___59232)){
args__4520__auto__.push((arguments[i__4518__auto___59233]));

var G__59234 = (i__4518__auto___59233 + (1));
i__4518__auto___59233 = G__59234;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq59231){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59231));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__59235){
var map__59236 = p__59235;
var map__59236__$1 = ((((!((map__59236 == null)))?(((((map__59236.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59236.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59236):map__59236);
var message = cljs.core.get.call(null,map__59236__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__59236__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__47988__auto___59315 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___59315,ch){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___59315,ch){
return (function (state_59287){
var state_val_59288 = (state_59287[(1)]);
if((state_val_59288 === (7))){
var inst_59283 = (state_59287[(2)]);
var state_59287__$1 = state_59287;
var statearr_59289_59316 = state_59287__$1;
(statearr_59289_59316[(2)] = inst_59283);

(statearr_59289_59316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (1))){
var state_59287__$1 = state_59287;
var statearr_59290_59317 = state_59287__$1;
(statearr_59290_59317[(2)] = null);

(statearr_59290_59317[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (4))){
var inst_59240 = (state_59287[(7)]);
var inst_59240__$1 = (state_59287[(2)]);
var state_59287__$1 = (function (){var statearr_59291 = state_59287;
(statearr_59291[(7)] = inst_59240__$1);

return statearr_59291;
})();
if(cljs.core.truth_(inst_59240__$1)){
var statearr_59292_59318 = state_59287__$1;
(statearr_59292_59318[(1)] = (5));

} else {
var statearr_59293_59319 = state_59287__$1;
(statearr_59293_59319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (15))){
var inst_59247 = (state_59287[(8)]);
var inst_59262 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59247);
var inst_59263 = cljs.core.first.call(null,inst_59262);
var inst_59264 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_59263);
var inst_59265 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59264)].join('');
var inst_59266 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_59265);
var state_59287__$1 = state_59287;
var statearr_59294_59320 = state_59287__$1;
(statearr_59294_59320[(2)] = inst_59266);

(statearr_59294_59320[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (13))){
var inst_59271 = (state_59287[(2)]);
var state_59287__$1 = state_59287;
var statearr_59295_59321 = state_59287__$1;
(statearr_59295_59321[(2)] = inst_59271);

(statearr_59295_59321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (6))){
var state_59287__$1 = state_59287;
var statearr_59296_59322 = state_59287__$1;
(statearr_59296_59322[(2)] = null);

(statearr_59296_59322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (17))){
var inst_59269 = (state_59287[(2)]);
var state_59287__$1 = state_59287;
var statearr_59297_59323 = state_59287__$1;
(statearr_59297_59323[(2)] = inst_59269);

(statearr_59297_59323[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (3))){
var inst_59285 = (state_59287[(2)]);
var state_59287__$1 = state_59287;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59287__$1,inst_59285);
} else {
if((state_val_59288 === (12))){
var inst_59246 = (state_59287[(9)]);
var inst_59260 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_59246,opts);
var state_59287__$1 = state_59287;
if(cljs.core.truth_(inst_59260)){
var statearr_59298_59324 = state_59287__$1;
(statearr_59298_59324[(1)] = (15));

} else {
var statearr_59299_59325 = state_59287__$1;
(statearr_59299_59325[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (2))){
var state_59287__$1 = state_59287;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59287__$1,(4),ch);
} else {
if((state_val_59288 === (11))){
var inst_59247 = (state_59287[(8)]);
var inst_59252 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59253 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_59247);
var inst_59254 = cljs.core.async.timeout.call(null,(1000));
var inst_59255 = [inst_59253,inst_59254];
var inst_59256 = (new cljs.core.PersistentVector(null,2,(5),inst_59252,inst_59255,null));
var state_59287__$1 = state_59287;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59287__$1,(14),inst_59256);
} else {
if((state_val_59288 === (9))){
var inst_59247 = (state_59287[(8)]);
var inst_59273 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_59274 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59247);
var inst_59275 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_59274);
var inst_59276 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_59275)].join('');
var inst_59277 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_59276);
var state_59287__$1 = (function (){var statearr_59300 = state_59287;
(statearr_59300[(10)] = inst_59273);

return statearr_59300;
})();
var statearr_59301_59326 = state_59287__$1;
(statearr_59301_59326[(2)] = inst_59277);

(statearr_59301_59326[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (5))){
var inst_59240 = (state_59287[(7)]);
var inst_59242 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_59243 = (new cljs.core.PersistentArrayMap(null,2,inst_59242,null));
var inst_59244 = (new cljs.core.PersistentHashSet(null,inst_59243,null));
var inst_59245 = figwheel.client.focus_msgs.call(null,inst_59244,inst_59240);
var inst_59246 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_59245);
var inst_59247 = cljs.core.first.call(null,inst_59245);
var inst_59248 = figwheel.client.autoload_QMARK_.call(null);
var state_59287__$1 = (function (){var statearr_59302 = state_59287;
(statearr_59302[(9)] = inst_59246);

(statearr_59302[(8)] = inst_59247);

return statearr_59302;
})();
if(cljs.core.truth_(inst_59248)){
var statearr_59303_59327 = state_59287__$1;
(statearr_59303_59327[(1)] = (8));

} else {
var statearr_59304_59328 = state_59287__$1;
(statearr_59304_59328[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (14))){
var inst_59258 = (state_59287[(2)]);
var state_59287__$1 = state_59287;
var statearr_59305_59329 = state_59287__$1;
(statearr_59305_59329[(2)] = inst_59258);

(statearr_59305_59329[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (16))){
var state_59287__$1 = state_59287;
var statearr_59306_59330 = state_59287__$1;
(statearr_59306_59330[(2)] = null);

(statearr_59306_59330[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (10))){
var inst_59279 = (state_59287[(2)]);
var state_59287__$1 = (function (){var statearr_59307 = state_59287;
(statearr_59307[(11)] = inst_59279);

return statearr_59307;
})();
var statearr_59308_59331 = state_59287__$1;
(statearr_59308_59331[(2)] = null);

(statearr_59308_59331[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59288 === (8))){
var inst_59246 = (state_59287[(9)]);
var inst_59250 = figwheel.client.reload_file_state_QMARK_.call(null,inst_59246,opts);
var state_59287__$1 = state_59287;
if(cljs.core.truth_(inst_59250)){
var statearr_59309_59332 = state_59287__$1;
(statearr_59309_59332[(1)] = (11));

} else {
var statearr_59310_59333 = state_59287__$1;
(statearr_59310_59333[(1)] = (12));

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
});})(c__47988__auto___59315,ch))
;
return ((function (switch__47480__auto__,c__47988__auto___59315,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__47481__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__47481__auto____0 = (function (){
var statearr_59311 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59311[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__47481__auto__);

(statearr_59311[(1)] = (1));

return statearr_59311;
});
var figwheel$client$file_reloader_plugin_$_state_machine__47481__auto____1 = (function (state_59287){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_59287);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e59312){if((e59312 instanceof Object)){
var ex__47484__auto__ = e59312;
var statearr_59313_59334 = state_59287;
(statearr_59313_59334[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59312;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59335 = state_59287;
state_59287 = G__59335;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__47481__auto__ = function(state_59287){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__47481__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__47481__auto____1.call(this,state_59287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__47481__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__47481__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___59315,ch))
})();
var state__47990__auto__ = (function (){var statearr_59314 = f__47989__auto__.call(null);
(statearr_59314[(6)] = c__47988__auto___59315);

return statearr_59314;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___59315,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__59336_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__59336_SHARP_));
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
var base_path_59340 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_59340){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_59338 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_59339 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_59338,_STAR_print_fn_STAR_59339,sb,base_path_59340){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_59338,_STAR_print_fn_STAR_59339,sb,base_path_59340))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = ((!(typeof result_value === 'string'))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_59339;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_59338;
}}catch (e59337){if((e59337 instanceof Error)){
var e = e59337;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_59340], null));
} else {
var e = e59337;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_59340))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__59341){
var map__59342 = p__59341;
var map__59342__$1 = ((((!((map__59342 == null)))?(((((map__59342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59342):map__59342);
var opts = map__59342__$1;
var build_id = cljs.core.get.call(null,map__59342__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__59342,map__59342__$1,opts,build_id){
return (function (p__59344){
var vec__59345 = p__59344;
var seq__59346 = cljs.core.seq.call(null,vec__59345);
var first__59347 = cljs.core.first.call(null,seq__59346);
var seq__59346__$1 = cljs.core.next.call(null,seq__59346);
var map__59348 = first__59347;
var map__59348__$1 = ((((!((map__59348 == null)))?(((((map__59348.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59348.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59348):map__59348);
var msg = map__59348__$1;
var msg_name = cljs.core.get.call(null,map__59348__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__59346__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__59345,seq__59346,first__59347,seq__59346__$1,map__59348,map__59348__$1,msg,msg_name,_,map__59342,map__59342__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__59345,seq__59346,first__59347,seq__59346__$1,map__59348,map__59348__$1,msg,msg_name,_,map__59342,map__59342__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__59342,map__59342__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__59350){
var vec__59351 = p__59350;
var seq__59352 = cljs.core.seq.call(null,vec__59351);
var first__59353 = cljs.core.first.call(null,seq__59352);
var seq__59352__$1 = cljs.core.next.call(null,seq__59352);
var map__59354 = first__59353;
var map__59354__$1 = ((((!((map__59354 == null)))?(((((map__59354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59354):map__59354);
var msg = map__59354__$1;
var msg_name = cljs.core.get.call(null,map__59354__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__59352__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__59356){
var map__59357 = p__59356;
var map__59357__$1 = ((((!((map__59357 == null)))?(((((map__59357.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59357.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59357):map__59357);
var on_compile_warning = cljs.core.get.call(null,map__59357__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__59357__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__59357,map__59357__$1,on_compile_warning,on_compile_fail){
return (function (p__59359){
var vec__59360 = p__59359;
var seq__59361 = cljs.core.seq.call(null,vec__59360);
var first__59362 = cljs.core.first.call(null,seq__59361);
var seq__59361__$1 = cljs.core.next.call(null,seq__59361);
var map__59363 = first__59362;
var map__59363__$1 = ((((!((map__59363 == null)))?(((((map__59363.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59363.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59363):map__59363);
var msg = map__59363__$1;
var msg_name = cljs.core.get.call(null,map__59363__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__59361__$1;
var pred__59365 = cljs.core._EQ_;
var expr__59366 = msg_name;
if(cljs.core.truth_(pred__59365.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__59366))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__59365.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__59366))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__59357,map__59357__$1,on_compile_warning,on_compile_fail))
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
var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__,msg_hist,msg_names,msg){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__,msg_hist,msg_names,msg){
return (function (state_59455){
var state_val_59456 = (state_59455[(1)]);
if((state_val_59456 === (7))){
var inst_59375 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
if(cljs.core.truth_(inst_59375)){
var statearr_59457_59504 = state_59455__$1;
(statearr_59457_59504[(1)] = (8));

} else {
var statearr_59458_59505 = state_59455__$1;
(statearr_59458_59505[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (20))){
var inst_59449 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59459_59506 = state_59455__$1;
(statearr_59459_59506[(2)] = inst_59449);

(statearr_59459_59506[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (27))){
var inst_59445 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59460_59507 = state_59455__$1;
(statearr_59460_59507[(2)] = inst_59445);

(statearr_59460_59507[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (1))){
var inst_59368 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_59455__$1 = state_59455;
if(cljs.core.truth_(inst_59368)){
var statearr_59461_59508 = state_59455__$1;
(statearr_59461_59508[(1)] = (2));

} else {
var statearr_59462_59509 = state_59455__$1;
(statearr_59462_59509[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (24))){
var inst_59447 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59463_59510 = state_59455__$1;
(statearr_59463_59510[(2)] = inst_59447);

(statearr_59463_59510[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (4))){
var inst_59453 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59455__$1,inst_59453);
} else {
if((state_val_59456 === (15))){
var inst_59451 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59464_59511 = state_59455__$1;
(statearr_59464_59511[(2)] = inst_59451);

(statearr_59464_59511[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (21))){
var inst_59404 = (state_59455[(2)]);
var inst_59405 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59406 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59405);
var state_59455__$1 = (function (){var statearr_59465 = state_59455;
(statearr_59465[(7)] = inst_59404);

return statearr_59465;
})();
var statearr_59466_59512 = state_59455__$1;
(statearr_59466_59512[(2)] = inst_59406);

(statearr_59466_59512[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (31))){
var inst_59434 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_59455__$1 = state_59455;
if(cljs.core.truth_(inst_59434)){
var statearr_59467_59513 = state_59455__$1;
(statearr_59467_59513[(1)] = (34));

} else {
var statearr_59468_59514 = state_59455__$1;
(statearr_59468_59514[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (32))){
var inst_59443 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59469_59515 = state_59455__$1;
(statearr_59469_59515[(2)] = inst_59443);

(statearr_59469_59515[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (33))){
var inst_59430 = (state_59455[(2)]);
var inst_59431 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59432 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59431);
var state_59455__$1 = (function (){var statearr_59470 = state_59455;
(statearr_59470[(8)] = inst_59430);

return statearr_59470;
})();
var statearr_59471_59516 = state_59455__$1;
(statearr_59471_59516[(2)] = inst_59432);

(statearr_59471_59516[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (13))){
var inst_59389 = figwheel.client.heads_up.clear.call(null);
var state_59455__$1 = state_59455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59455__$1,(16),inst_59389);
} else {
if((state_val_59456 === (22))){
var inst_59410 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59411 = figwheel.client.heads_up.append_warning_message.call(null,inst_59410);
var state_59455__$1 = state_59455;
var statearr_59472_59517 = state_59455__$1;
(statearr_59472_59517[(2)] = inst_59411);

(statearr_59472_59517[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (36))){
var inst_59441 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59473_59518 = state_59455__$1;
(statearr_59473_59518[(2)] = inst_59441);

(statearr_59473_59518[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (29))){
var inst_59421 = (state_59455[(2)]);
var inst_59422 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59423 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59422);
var state_59455__$1 = (function (){var statearr_59474 = state_59455;
(statearr_59474[(9)] = inst_59421);

return statearr_59474;
})();
var statearr_59475_59519 = state_59455__$1;
(statearr_59475_59519[(2)] = inst_59423);

(statearr_59475_59519[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (6))){
var inst_59370 = (state_59455[(10)]);
var state_59455__$1 = state_59455;
var statearr_59476_59520 = state_59455__$1;
(statearr_59476_59520[(2)] = inst_59370);

(statearr_59476_59520[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (28))){
var inst_59417 = (state_59455[(2)]);
var inst_59418 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59419 = figwheel.client.heads_up.display_warning.call(null,inst_59418);
var state_59455__$1 = (function (){var statearr_59477 = state_59455;
(statearr_59477[(11)] = inst_59417);

return statearr_59477;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59455__$1,(29),inst_59419);
} else {
if((state_val_59456 === (25))){
var inst_59415 = figwheel.client.heads_up.clear.call(null);
var state_59455__$1 = state_59455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59455__$1,(28),inst_59415);
} else {
if((state_val_59456 === (34))){
var inst_59436 = figwheel.client.heads_up.flash_loaded.call(null);
var state_59455__$1 = state_59455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59455__$1,(37),inst_59436);
} else {
if((state_val_59456 === (17))){
var inst_59395 = (state_59455[(2)]);
var inst_59396 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59397 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59396);
var state_59455__$1 = (function (){var statearr_59478 = state_59455;
(statearr_59478[(12)] = inst_59395);

return statearr_59478;
})();
var statearr_59479_59521 = state_59455__$1;
(statearr_59479_59521[(2)] = inst_59397);

(statearr_59479_59521[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (3))){
var inst_59387 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_59455__$1 = state_59455;
if(cljs.core.truth_(inst_59387)){
var statearr_59480_59522 = state_59455__$1;
(statearr_59480_59522[(1)] = (13));

} else {
var statearr_59481_59523 = state_59455__$1;
(statearr_59481_59523[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (12))){
var inst_59383 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59482_59524 = state_59455__$1;
(statearr_59482_59524[(2)] = inst_59383);

(statearr_59482_59524[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (2))){
var inst_59370 = (state_59455[(10)]);
var inst_59370__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_59455__$1 = (function (){var statearr_59483 = state_59455;
(statearr_59483[(10)] = inst_59370__$1);

return statearr_59483;
})();
if(cljs.core.truth_(inst_59370__$1)){
var statearr_59484_59525 = state_59455__$1;
(statearr_59484_59525[(1)] = (5));

} else {
var statearr_59485_59526 = state_59455__$1;
(statearr_59485_59526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (23))){
var inst_59413 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_59455__$1 = state_59455;
if(cljs.core.truth_(inst_59413)){
var statearr_59486_59527 = state_59455__$1;
(statearr_59486_59527[(1)] = (25));

} else {
var statearr_59487_59528 = state_59455__$1;
(statearr_59487_59528[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (35))){
var state_59455__$1 = state_59455;
var statearr_59488_59529 = state_59455__$1;
(statearr_59488_59529[(2)] = null);

(statearr_59488_59529[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (19))){
var inst_59408 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_59455__$1 = state_59455;
if(cljs.core.truth_(inst_59408)){
var statearr_59489_59530 = state_59455__$1;
(statearr_59489_59530[(1)] = (22));

} else {
var statearr_59490_59531 = state_59455__$1;
(statearr_59490_59531[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (11))){
var inst_59379 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59491_59532 = state_59455__$1;
(statearr_59491_59532[(2)] = inst_59379);

(statearr_59491_59532[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (9))){
var inst_59381 = figwheel.client.heads_up.clear.call(null);
var state_59455__$1 = state_59455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59455__$1,(12),inst_59381);
} else {
if((state_val_59456 === (5))){
var inst_59372 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_59455__$1 = state_59455;
var statearr_59492_59533 = state_59455__$1;
(statearr_59492_59533[(2)] = inst_59372);

(statearr_59492_59533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (14))){
var inst_59399 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_59455__$1 = state_59455;
if(cljs.core.truth_(inst_59399)){
var statearr_59493_59534 = state_59455__$1;
(statearr_59493_59534[(1)] = (18));

} else {
var statearr_59494_59535 = state_59455__$1;
(statearr_59494_59535[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (26))){
var inst_59425 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_59455__$1 = state_59455;
if(cljs.core.truth_(inst_59425)){
var statearr_59495_59536 = state_59455__$1;
(statearr_59495_59536[(1)] = (30));

} else {
var statearr_59496_59537 = state_59455__$1;
(statearr_59496_59537[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (16))){
var inst_59391 = (state_59455[(2)]);
var inst_59392 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59393 = figwheel.client.heads_up.display_exception.call(null,inst_59392);
var state_59455__$1 = (function (){var statearr_59497 = state_59455;
(statearr_59497[(13)] = inst_59391);

return statearr_59497;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59455__$1,(17),inst_59393);
} else {
if((state_val_59456 === (30))){
var inst_59427 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59428 = figwheel.client.heads_up.display_warning.call(null,inst_59427);
var state_59455__$1 = state_59455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59455__$1,(33),inst_59428);
} else {
if((state_val_59456 === (10))){
var inst_59385 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59498_59538 = state_59455__$1;
(statearr_59498_59538[(2)] = inst_59385);

(statearr_59498_59538[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (18))){
var inst_59401 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59402 = figwheel.client.heads_up.display_exception.call(null,inst_59401);
var state_59455__$1 = state_59455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59455__$1,(21),inst_59402);
} else {
if((state_val_59456 === (37))){
var inst_59438 = (state_59455[(2)]);
var state_59455__$1 = state_59455;
var statearr_59499_59539 = state_59455__$1;
(statearr_59499_59539[(2)] = inst_59438);

(statearr_59499_59539[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59456 === (8))){
var inst_59377 = figwheel.client.heads_up.flash_loaded.call(null);
var state_59455__$1 = state_59455;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59455__$1,(11),inst_59377);
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
});})(c__47988__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__47480__auto__,c__47988__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto____0 = (function (){
var statearr_59500 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59500[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto__);

(statearr_59500[(1)] = (1));

return statearr_59500;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto____1 = (function (state_59455){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_59455);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e59501){if((e59501 instanceof Object)){
var ex__47484__auto__ = e59501;
var statearr_59502_59540 = state_59455;
(statearr_59502_59540[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59455);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59541 = state_59455;
state_59455 = G__59541;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto__ = function(state_59455){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto____1.call(this,state_59455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__,msg_hist,msg_names,msg))
})();
var state__47990__auto__ = (function (){var statearr_59503 = f__47989__auto__.call(null);
(statearr_59503[(6)] = c__47988__auto__);

return statearr_59503;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__,msg_hist,msg_names,msg))
);

return c__47988__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__47988__auto___59570 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___59570,ch){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___59570,ch){
return (function (state_59556){
var state_val_59557 = (state_59556[(1)]);
if((state_val_59557 === (1))){
var state_59556__$1 = state_59556;
var statearr_59558_59571 = state_59556__$1;
(statearr_59558_59571[(2)] = null);

(statearr_59558_59571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (2))){
var state_59556__$1 = state_59556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59556__$1,(4),ch);
} else {
if((state_val_59557 === (3))){
var inst_59554 = (state_59556[(2)]);
var state_59556__$1 = state_59556;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59556__$1,inst_59554);
} else {
if((state_val_59557 === (4))){
var inst_59544 = (state_59556[(7)]);
var inst_59544__$1 = (state_59556[(2)]);
var state_59556__$1 = (function (){var statearr_59559 = state_59556;
(statearr_59559[(7)] = inst_59544__$1);

return statearr_59559;
})();
if(cljs.core.truth_(inst_59544__$1)){
var statearr_59560_59572 = state_59556__$1;
(statearr_59560_59572[(1)] = (5));

} else {
var statearr_59561_59573 = state_59556__$1;
(statearr_59561_59573[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (5))){
var inst_59544 = (state_59556[(7)]);
var inst_59546 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_59544);
var state_59556__$1 = state_59556;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59556__$1,(8),inst_59546);
} else {
if((state_val_59557 === (6))){
var state_59556__$1 = state_59556;
var statearr_59562_59574 = state_59556__$1;
(statearr_59562_59574[(2)] = null);

(statearr_59562_59574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (7))){
var inst_59552 = (state_59556[(2)]);
var state_59556__$1 = state_59556;
var statearr_59563_59575 = state_59556__$1;
(statearr_59563_59575[(2)] = inst_59552);

(statearr_59563_59575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59557 === (8))){
var inst_59548 = (state_59556[(2)]);
var state_59556__$1 = (function (){var statearr_59564 = state_59556;
(statearr_59564[(8)] = inst_59548);

return statearr_59564;
})();
var statearr_59565_59576 = state_59556__$1;
(statearr_59565_59576[(2)] = null);

(statearr_59565_59576[(1)] = (2));


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
});})(c__47988__auto___59570,ch))
;
return ((function (switch__47480__auto__,c__47988__auto___59570,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__47481__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__47481__auto____0 = (function (){
var statearr_59566 = [null,null,null,null,null,null,null,null,null];
(statearr_59566[(0)] = figwheel$client$heads_up_plugin_$_state_machine__47481__auto__);

(statearr_59566[(1)] = (1));

return statearr_59566;
});
var figwheel$client$heads_up_plugin_$_state_machine__47481__auto____1 = (function (state_59556){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_59556);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e59567){if((e59567 instanceof Object)){
var ex__47484__auto__ = e59567;
var statearr_59568_59577 = state_59556;
(statearr_59568_59577[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59556);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59578 = state_59556;
state_59556 = G__59578;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__47481__auto__ = function(state_59556){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__47481__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__47481__auto____1.call(this,state_59556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__47481__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__47481__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___59570,ch))
})();
var state__47990__auto__ = (function (){var statearr_59569 = f__47989__auto__.call(null);
(statearr_59569[(6)] = c__47988__auto___59570);

return statearr_59569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___59570,ch))
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
var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__){
return (function (state_59584){
var state_val_59585 = (state_59584[(1)]);
if((state_val_59585 === (1))){
var inst_59579 = cljs.core.async.timeout.call(null,(3000));
var state_59584__$1 = state_59584;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59584__$1,(2),inst_59579);
} else {
if((state_val_59585 === (2))){
var inst_59581 = (state_59584[(2)]);
var inst_59582 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_59584__$1 = (function (){var statearr_59586 = state_59584;
(statearr_59586[(7)] = inst_59581);

return statearr_59586;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59584__$1,inst_59582);
} else {
return null;
}
}
});})(c__47988__auto__))
;
return ((function (switch__47480__auto__,c__47988__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__47481__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__47481__auto____0 = (function (){
var statearr_59587 = [null,null,null,null,null,null,null,null];
(statearr_59587[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__47481__auto__);

(statearr_59587[(1)] = (1));

return statearr_59587;
});
var figwheel$client$enforce_project_plugin_$_state_machine__47481__auto____1 = (function (state_59584){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_59584);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e59588){if((e59588 instanceof Object)){
var ex__47484__auto__ = e59588;
var statearr_59589_59591 = state_59584;
(statearr_59589_59591[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59584);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59588;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59592 = state_59584;
state_59584 = G__59592;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__47481__auto__ = function(state_59584){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__47481__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__47481__auto____1.call(this,state_59584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__47481__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__47481__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__))
})();
var state__47990__auto__ = (function (){var statearr_59590 = f__47989__auto__.call(null);
(statearr_59590[(6)] = c__47988__auto__);

return statearr_59590;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__))
);

return c__47988__auto__;
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
var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__,figwheel_version,temp__5457__auto__){
return (function (state_59599){
var state_val_59600 = (state_59599[(1)]);
if((state_val_59600 === (1))){
var inst_59593 = cljs.core.async.timeout.call(null,(2000));
var state_59599__$1 = state_59599;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59599__$1,(2),inst_59593);
} else {
if((state_val_59600 === (2))){
var inst_59595 = (state_59599[(2)]);
var inst_59596 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_59597 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_59596);
var state_59599__$1 = (function (){var statearr_59601 = state_59599;
(statearr_59601[(7)] = inst_59595);

return statearr_59601;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59599__$1,inst_59597);
} else {
return null;
}
}
});})(c__47988__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__47480__auto__,c__47988__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto____0 = (function (){
var statearr_59602 = [null,null,null,null,null,null,null,null];
(statearr_59602[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto__);

(statearr_59602[(1)] = (1));

return statearr_59602;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto____1 = (function (state_59599){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_59599);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e59603){if((e59603 instanceof Object)){
var ex__47484__auto__ = e59603;
var statearr_59604_59606 = state_59599;
(statearr_59604_59606[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59599);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59607 = state_59599;
state_59599 = G__59607;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto__ = function(state_59599){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto____1.call(this,state_59599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__,figwheel_version,temp__5457__auto__))
})();
var state__47990__auto__ = (function (){var statearr_59605 = f__47989__auto__.call(null);
(statearr_59605[(6)] = c__47988__auto__);

return statearr_59605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__,figwheel_version,temp__5457__auto__))
);

return c__47988__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__59608){
var map__59609 = p__59608;
var map__59609__$1 = ((((!((map__59609 == null)))?(((((map__59609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59609):map__59609);
var file = cljs.core.get.call(null,map__59609__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__59609__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__59609__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__59611 = "";
var G__59611__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59611),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__59611);
var G__59611__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59611__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__59611__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = line;
if(cljs.core.truth_(and__3925__auto__)){
return column;
} else {
return and__3925__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59611__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__59611__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__59612){
var map__59613 = p__59612;
var map__59613__$1 = ((((!((map__59613 == null)))?(((((map__59613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59613):map__59613);
var ed = map__59613__$1;
var exception_data = cljs.core.get.call(null,map__59613__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__59613__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_59616 = (function (){var G__59615 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59615)," Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,exception_data))].join('');
} else {
return G__59615;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_59616);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__59617){
var map__59618 = p__59617;
var map__59618__$1 = ((((!((map__59618 == null)))?(((((map__59618.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59618.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59618):map__59618);
var w = map__59618__$1;
var message = cljs.core.get.call(null,map__59618__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__59620 = cljs.core.seq.call(null,plugins);
var chunk__59621 = null;
var count__59622 = (0);
var i__59623 = (0);
while(true){
if((i__59623 < count__59622)){
var vec__59624 = cljs.core._nth.call(null,chunk__59621,i__59623);
var k = cljs.core.nth.call(null,vec__59624,(0),null);
var plugin = cljs.core.nth.call(null,vec__59624,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59630 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__59620,chunk__59621,count__59622,i__59623,pl_59630,vec__59624,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_59630.call(null,msg_hist);
});})(seq__59620,chunk__59621,count__59622,i__59623,pl_59630,vec__59624,k,plugin))
);
} else {
}


var G__59631 = seq__59620;
var G__59632 = chunk__59621;
var G__59633 = count__59622;
var G__59634 = (i__59623 + (1));
seq__59620 = G__59631;
chunk__59621 = G__59632;
count__59622 = G__59633;
i__59623 = G__59634;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__59620);
if(temp__5457__auto__){
var seq__59620__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59620__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__59620__$1);
var G__59635 = cljs.core.chunk_rest.call(null,seq__59620__$1);
var G__59636 = c__4337__auto__;
var G__59637 = cljs.core.count.call(null,c__4337__auto__);
var G__59638 = (0);
seq__59620 = G__59635;
chunk__59621 = G__59636;
count__59622 = G__59637;
i__59623 = G__59638;
continue;
} else {
var vec__59627 = cljs.core.first.call(null,seq__59620__$1);
var k = cljs.core.nth.call(null,vec__59627,(0),null);
var plugin = cljs.core.nth.call(null,vec__59627,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59639 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__59620,chunk__59621,count__59622,i__59623,pl_59639,vec__59627,k,plugin,seq__59620__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_59639.call(null,msg_hist);
});})(seq__59620,chunk__59621,count__59622,i__59623,pl_59639,vec__59627,k,plugin,seq__59620__$1,temp__5457__auto__))
);
} else {
}


var G__59640 = cljs.core.next.call(null,seq__59620__$1);
var G__59641 = null;
var G__59642 = (0);
var G__59643 = (0);
seq__59620 = G__59640;
chunk__59621 = G__59641;
count__59622 = G__59642;
i__59623 = G__59643;
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
var G__59645 = arguments.length;
switch (G__59645) {
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

var seq__59646_59651 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__59647_59652 = null;
var count__59648_59653 = (0);
var i__59649_59654 = (0);
while(true){
if((i__59649_59654 < count__59648_59653)){
var msg_59655 = cljs.core._nth.call(null,chunk__59647_59652,i__59649_59654);
figwheel.client.socket.handle_incoming_message.call(null,msg_59655);


var G__59656 = seq__59646_59651;
var G__59657 = chunk__59647_59652;
var G__59658 = count__59648_59653;
var G__59659 = (i__59649_59654 + (1));
seq__59646_59651 = G__59656;
chunk__59647_59652 = G__59657;
count__59648_59653 = G__59658;
i__59649_59654 = G__59659;
continue;
} else {
var temp__5457__auto___59660 = cljs.core.seq.call(null,seq__59646_59651);
if(temp__5457__auto___59660){
var seq__59646_59661__$1 = temp__5457__auto___59660;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59646_59661__$1)){
var c__4337__auto___59662 = cljs.core.chunk_first.call(null,seq__59646_59661__$1);
var G__59663 = cljs.core.chunk_rest.call(null,seq__59646_59661__$1);
var G__59664 = c__4337__auto___59662;
var G__59665 = cljs.core.count.call(null,c__4337__auto___59662);
var G__59666 = (0);
seq__59646_59651 = G__59663;
chunk__59647_59652 = G__59664;
count__59648_59653 = G__59665;
i__59649_59654 = G__59666;
continue;
} else {
var msg_59667 = cljs.core.first.call(null,seq__59646_59661__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_59667);


var G__59668 = cljs.core.next.call(null,seq__59646_59661__$1);
var G__59669 = null;
var G__59670 = (0);
var G__59671 = (0);
seq__59646_59651 = G__59668;
chunk__59647_59652 = G__59669;
count__59648_59653 = G__59670;
i__59649_59654 = G__59671;
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
var len__4517__auto___59676 = arguments.length;
var i__4518__auto___59677 = (0);
while(true){
if((i__4518__auto___59677 < len__4517__auto___59676)){
args__4520__auto__.push((arguments[i__4518__auto___59677]));

var G__59678 = (i__4518__auto___59677 + (1));
i__4518__auto___59677 = G__59678;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__59673){
var map__59674 = p__59673;
var map__59674__$1 = ((((!((map__59674 == null)))?(((((map__59674.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59674.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59674):map__59674);
var opts = map__59674__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq59672){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59672));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e59679){if((e59679 instanceof Error)){
var e = e59679;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e59679;

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
return (function (p__59680){
var map__59681 = p__59680;
var map__59681__$1 = ((((!((map__59681 == null)))?(((((map__59681.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__59681.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59681):map__59681);
var msg_name = cljs.core.get.call(null,map__59681__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1574224107610
