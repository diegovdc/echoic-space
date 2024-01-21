goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___31574 = arguments.length;
var i__5770__auto___31575 = (0);
while(true){
if((i__5770__auto___31575 < len__5769__auto___31574)){
args__5775__auto__.push((arguments[i__5770__auto___31575]));

var G__31576 = (i__5770__auto___31575 + (1));
i__5770__auto___31575 = G__31576;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq31076){
var G__31077 = cljs.core.first(seq31076);
var seq31076__$1 = cljs.core.next(seq31076);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__31077,seq31076__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__31081 = cljs.core.seq(sources);
var chunk__31082 = null;
var count__31083 = (0);
var i__31084 = (0);
while(true){
if((i__31084 < count__31083)){
var map__31089 = chunk__31082.cljs$core$IIndexed$_nth$arity$2(null,i__31084);
var map__31089__$1 = cljs.core.__destructure_map(map__31089);
var src = map__31089__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31089__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31089__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31089__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31089__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31090){var e_31578 = e31090;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_31578);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_31578.message)].join('')));
}

var G__31579 = seq__31081;
var G__31580 = chunk__31082;
var G__31581 = count__31083;
var G__31582 = (i__31084 + (1));
seq__31081 = G__31579;
chunk__31082 = G__31580;
count__31083 = G__31581;
i__31084 = G__31582;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31081);
if(temp__5804__auto__){
var seq__31081__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31081__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31081__$1);
var G__31583 = cljs.core.chunk_rest(seq__31081__$1);
var G__31584 = c__5568__auto__;
var G__31585 = cljs.core.count(c__5568__auto__);
var G__31586 = (0);
seq__31081 = G__31583;
chunk__31082 = G__31584;
count__31083 = G__31585;
i__31084 = G__31586;
continue;
} else {
var map__31091 = cljs.core.first(seq__31081__$1);
var map__31091__$1 = cljs.core.__destructure_map(map__31091);
var src = map__31091__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31091__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31091__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31091__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31091__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e31092){var e_31587 = e31092;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_31587);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_31587.message)].join('')));
}

var G__31588 = cljs.core.next(seq__31081__$1);
var G__31589 = null;
var G__31590 = (0);
var G__31591 = (0);
seq__31081 = G__31588;
chunk__31082 = G__31589;
count__31083 = G__31590;
i__31084 = G__31591;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__31104 = cljs.core.seq(js_requires);
var chunk__31105 = null;
var count__31106 = (0);
var i__31107 = (0);
while(true){
if((i__31107 < count__31106)){
var js_ns = chunk__31105.cljs$core$IIndexed$_nth$arity$2(null,i__31107);
var require_str_31592 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_31592);


var G__31593 = seq__31104;
var G__31594 = chunk__31105;
var G__31595 = count__31106;
var G__31596 = (i__31107 + (1));
seq__31104 = G__31593;
chunk__31105 = G__31594;
count__31106 = G__31595;
i__31107 = G__31596;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31104);
if(temp__5804__auto__){
var seq__31104__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31104__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31104__$1);
var G__31597 = cljs.core.chunk_rest(seq__31104__$1);
var G__31598 = c__5568__auto__;
var G__31599 = cljs.core.count(c__5568__auto__);
var G__31600 = (0);
seq__31104 = G__31597;
chunk__31105 = G__31598;
count__31106 = G__31599;
i__31107 = G__31600;
continue;
} else {
var js_ns = cljs.core.first(seq__31104__$1);
var require_str_31601 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_31601);


var G__31602 = cljs.core.next(seq__31104__$1);
var G__31603 = null;
var G__31604 = (0);
var G__31605 = (0);
seq__31104 = G__31602;
chunk__31105 = G__31603;
count__31106 = G__31604;
i__31107 = G__31605;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__31109){
var map__31110 = p__31109;
var map__31110__$1 = cljs.core.__destructure_map(map__31110);
var msg = map__31110__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31110__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31110__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31111(s__31112){
return (new cljs.core.LazySeq(null,(function (){
var s__31112__$1 = s__31112;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__31112__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__31118 = cljs.core.first(xs__6360__auto__);
var map__31118__$1 = cljs.core.__destructure_map(map__31118);
var src = map__31118__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31118__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__31112__$1,map__31118,map__31118__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31110,map__31110__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31111_$_iter__31113(s__31114){
return (new cljs.core.LazySeq(null,((function (s__31112__$1,map__31118,map__31118__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31110,map__31110__$1,msg,info,reload_info){
return (function (){
var s__31114__$1 = s__31114;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__31114__$1);
if(temp__5804__auto____$1){
var s__31114__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__31114__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__31114__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__31116 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__31115 = (0);
while(true){
if((i__31115 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__31115);
cljs.core.chunk_append(b__31116,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__31607 = (i__31115 + (1));
i__31115 = G__31607;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__31116),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31111_$_iter__31113(cljs.core.chunk_rest(s__31114__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__31116),null);
}
} else {
var warning = cljs.core.first(s__31114__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31111_$_iter__31113(cljs.core.rest(s__31114__$2)));
}
} else {
return null;
}
break;
}
});})(s__31112__$1,map__31118,map__31118__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31110,map__31110__$1,msg,info,reload_info))
,null,null));
});})(s__31112__$1,map__31118,map__31118__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__31110,map__31110__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__31111(cljs.core.rest(s__31112__$1)));
} else {
var G__31608 = cljs.core.rest(s__31112__$1);
s__31112__$1 = G__31608;
continue;
}
} else {
var G__31609 = cljs.core.rest(s__31112__$1);
s__31112__$1 = G__31609;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__31120_31610 = cljs.core.seq(warnings);
var chunk__31121_31611 = null;
var count__31122_31612 = (0);
var i__31123_31613 = (0);
while(true){
if((i__31123_31613 < count__31122_31612)){
var map__31126_31614 = chunk__31121_31611.cljs$core$IIndexed$_nth$arity$2(null,i__31123_31613);
var map__31126_31615__$1 = cljs.core.__destructure_map(map__31126_31614);
var w_31616 = map__31126_31615__$1;
var msg_31617__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31615__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_31618 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31615__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31619 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31615__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_31620 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31126_31615__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_31620)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_31618),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_31619),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_31617__$1)].join(''));


var G__31621 = seq__31120_31610;
var G__31622 = chunk__31121_31611;
var G__31623 = count__31122_31612;
var G__31624 = (i__31123_31613 + (1));
seq__31120_31610 = G__31621;
chunk__31121_31611 = G__31622;
count__31122_31612 = G__31623;
i__31123_31613 = G__31624;
continue;
} else {
var temp__5804__auto___31625 = cljs.core.seq(seq__31120_31610);
if(temp__5804__auto___31625){
var seq__31120_31626__$1 = temp__5804__auto___31625;
if(cljs.core.chunked_seq_QMARK_(seq__31120_31626__$1)){
var c__5568__auto___31627 = cljs.core.chunk_first(seq__31120_31626__$1);
var G__31628 = cljs.core.chunk_rest(seq__31120_31626__$1);
var G__31629 = c__5568__auto___31627;
var G__31630 = cljs.core.count(c__5568__auto___31627);
var G__31631 = (0);
seq__31120_31610 = G__31628;
chunk__31121_31611 = G__31629;
count__31122_31612 = G__31630;
i__31123_31613 = G__31631;
continue;
} else {
var map__31127_31632 = cljs.core.first(seq__31120_31626__$1);
var map__31127_31633__$1 = cljs.core.__destructure_map(map__31127_31632);
var w_31634 = map__31127_31633__$1;
var msg_31635__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31127_31633__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_31636 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31127_31633__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_31637 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31127_31633__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_31638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31127_31633__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_31638)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_31636),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_31637),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_31635__$1)].join(''));


var G__31639 = cljs.core.next(seq__31120_31626__$1);
var G__31640 = null;
var G__31641 = (0);
var G__31642 = (0);
seq__31120_31610 = G__31639;
chunk__31121_31611 = G__31640;
count__31122_31612 = G__31641;
i__31123_31613 = G__31642;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__31108_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__31108_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__31128){
var map__31129 = p__31128;
var map__31129__$1 = cljs.core.__destructure_map(map__31129);
var msg = map__31129__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31129__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31129__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__31130 = cljs.core.seq(updates);
var chunk__31132 = null;
var count__31133 = (0);
var i__31134 = (0);
while(true){
if((i__31134 < count__31133)){
var path = chunk__31132.cljs$core$IIndexed$_nth$arity$2(null,i__31134);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__31391_31643 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__31395_31644 = null;
var count__31396_31645 = (0);
var i__31397_31646 = (0);
while(true){
if((i__31397_31646 < count__31396_31645)){
var node_31647 = chunk__31395_31644.cljs$core$IIndexed$_nth$arity$2(null,i__31397_31646);
if(cljs.core.not(node_31647.shadow$old)){
var path_match_31648 = shadow.cljs.devtools.client.browser.match_paths(node_31647.getAttribute("href"),path);
if(cljs.core.truth_(path_match_31648)){
var new_link_31649 = (function (){var G__31447 = node_31647.cloneNode(true);
G__31447.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_31648),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__31447;
})();
(node_31647.shadow$old = true);

(new_link_31649.onload = ((function (seq__31391_31643,chunk__31395_31644,count__31396_31645,i__31397_31646,seq__31130,chunk__31132,count__31133,i__31134,new_link_31649,path_match_31648,node_31647,path,map__31129,map__31129__$1,msg,updates,reload_info){
return (function (e){
var seq__31448_31650 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__31450_31651 = null;
var count__31451_31652 = (0);
var i__31452_31653 = (0);
while(true){
if((i__31452_31653 < count__31451_31652)){
var map__31456_31654 = chunk__31450_31651.cljs$core$IIndexed$_nth$arity$2(null,i__31452_31653);
var map__31456_31655__$1 = cljs.core.__destructure_map(map__31456_31654);
var task_31656 = map__31456_31655__$1;
var fn_str_31657 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31456_31655__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31658 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31456_31655__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31659 = goog.getObjectByName(fn_str_31657,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31658)].join(''));

(fn_obj_31659.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31659.cljs$core$IFn$_invoke$arity$2(path,new_link_31649) : fn_obj_31659.call(null,path,new_link_31649));


var G__31660 = seq__31448_31650;
var G__31661 = chunk__31450_31651;
var G__31662 = count__31451_31652;
var G__31663 = (i__31452_31653 + (1));
seq__31448_31650 = G__31660;
chunk__31450_31651 = G__31661;
count__31451_31652 = G__31662;
i__31452_31653 = G__31663;
continue;
} else {
var temp__5804__auto___31664 = cljs.core.seq(seq__31448_31650);
if(temp__5804__auto___31664){
var seq__31448_31665__$1 = temp__5804__auto___31664;
if(cljs.core.chunked_seq_QMARK_(seq__31448_31665__$1)){
var c__5568__auto___31666 = cljs.core.chunk_first(seq__31448_31665__$1);
var G__31667 = cljs.core.chunk_rest(seq__31448_31665__$1);
var G__31668 = c__5568__auto___31666;
var G__31669 = cljs.core.count(c__5568__auto___31666);
var G__31670 = (0);
seq__31448_31650 = G__31667;
chunk__31450_31651 = G__31668;
count__31451_31652 = G__31669;
i__31452_31653 = G__31670;
continue;
} else {
var map__31457_31671 = cljs.core.first(seq__31448_31665__$1);
var map__31457_31672__$1 = cljs.core.__destructure_map(map__31457_31671);
var task_31673 = map__31457_31672__$1;
var fn_str_31674 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31457_31672__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31675 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31457_31672__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31676 = goog.getObjectByName(fn_str_31674,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31675)].join(''));

(fn_obj_31676.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31676.cljs$core$IFn$_invoke$arity$2(path,new_link_31649) : fn_obj_31676.call(null,path,new_link_31649));


var G__31677 = cljs.core.next(seq__31448_31665__$1);
var G__31678 = null;
var G__31679 = (0);
var G__31680 = (0);
seq__31448_31650 = G__31677;
chunk__31450_31651 = G__31678;
count__31451_31652 = G__31679;
i__31452_31653 = G__31680;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_31647);
});})(seq__31391_31643,chunk__31395_31644,count__31396_31645,i__31397_31646,seq__31130,chunk__31132,count__31133,i__31134,new_link_31649,path_match_31648,node_31647,path,map__31129,map__31129__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_31648], 0));

goog.dom.insertSiblingAfter(new_link_31649,node_31647);


var G__31681 = seq__31391_31643;
var G__31682 = chunk__31395_31644;
var G__31683 = count__31396_31645;
var G__31684 = (i__31397_31646 + (1));
seq__31391_31643 = G__31681;
chunk__31395_31644 = G__31682;
count__31396_31645 = G__31683;
i__31397_31646 = G__31684;
continue;
} else {
var G__31685 = seq__31391_31643;
var G__31686 = chunk__31395_31644;
var G__31687 = count__31396_31645;
var G__31688 = (i__31397_31646 + (1));
seq__31391_31643 = G__31685;
chunk__31395_31644 = G__31686;
count__31396_31645 = G__31687;
i__31397_31646 = G__31688;
continue;
}
} else {
var G__31689 = seq__31391_31643;
var G__31690 = chunk__31395_31644;
var G__31691 = count__31396_31645;
var G__31692 = (i__31397_31646 + (1));
seq__31391_31643 = G__31689;
chunk__31395_31644 = G__31690;
count__31396_31645 = G__31691;
i__31397_31646 = G__31692;
continue;
}
} else {
var temp__5804__auto___31693 = cljs.core.seq(seq__31391_31643);
if(temp__5804__auto___31693){
var seq__31391_31694__$1 = temp__5804__auto___31693;
if(cljs.core.chunked_seq_QMARK_(seq__31391_31694__$1)){
var c__5568__auto___31695 = cljs.core.chunk_first(seq__31391_31694__$1);
var G__31696 = cljs.core.chunk_rest(seq__31391_31694__$1);
var G__31697 = c__5568__auto___31695;
var G__31698 = cljs.core.count(c__5568__auto___31695);
var G__31699 = (0);
seq__31391_31643 = G__31696;
chunk__31395_31644 = G__31697;
count__31396_31645 = G__31698;
i__31397_31646 = G__31699;
continue;
} else {
var node_31700 = cljs.core.first(seq__31391_31694__$1);
if(cljs.core.not(node_31700.shadow$old)){
var path_match_31701 = shadow.cljs.devtools.client.browser.match_paths(node_31700.getAttribute("href"),path);
if(cljs.core.truth_(path_match_31701)){
var new_link_31702 = (function (){var G__31458 = node_31700.cloneNode(true);
G__31458.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_31701),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__31458;
})();
(node_31700.shadow$old = true);

(new_link_31702.onload = ((function (seq__31391_31643,chunk__31395_31644,count__31396_31645,i__31397_31646,seq__31130,chunk__31132,count__31133,i__31134,new_link_31702,path_match_31701,node_31700,seq__31391_31694__$1,temp__5804__auto___31693,path,map__31129,map__31129__$1,msg,updates,reload_info){
return (function (e){
var seq__31459_31703 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__31461_31704 = null;
var count__31462_31705 = (0);
var i__31463_31706 = (0);
while(true){
if((i__31463_31706 < count__31462_31705)){
var map__31469_31707 = chunk__31461_31704.cljs$core$IIndexed$_nth$arity$2(null,i__31463_31706);
var map__31469_31708__$1 = cljs.core.__destructure_map(map__31469_31707);
var task_31709 = map__31469_31708__$1;
var fn_str_31710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31469_31708__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31469_31708__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31712 = goog.getObjectByName(fn_str_31710,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31711)].join(''));

(fn_obj_31712.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31712.cljs$core$IFn$_invoke$arity$2(path,new_link_31702) : fn_obj_31712.call(null,path,new_link_31702));


var G__31713 = seq__31459_31703;
var G__31714 = chunk__31461_31704;
var G__31715 = count__31462_31705;
var G__31716 = (i__31463_31706 + (1));
seq__31459_31703 = G__31713;
chunk__31461_31704 = G__31714;
count__31462_31705 = G__31715;
i__31463_31706 = G__31716;
continue;
} else {
var temp__5804__auto___31717__$1 = cljs.core.seq(seq__31459_31703);
if(temp__5804__auto___31717__$1){
var seq__31459_31718__$1 = temp__5804__auto___31717__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31459_31718__$1)){
var c__5568__auto___31719 = cljs.core.chunk_first(seq__31459_31718__$1);
var G__31720 = cljs.core.chunk_rest(seq__31459_31718__$1);
var G__31721 = c__5568__auto___31719;
var G__31722 = cljs.core.count(c__5568__auto___31719);
var G__31723 = (0);
seq__31459_31703 = G__31720;
chunk__31461_31704 = G__31721;
count__31462_31705 = G__31722;
i__31463_31706 = G__31723;
continue;
} else {
var map__31470_31724 = cljs.core.first(seq__31459_31718__$1);
var map__31470_31725__$1 = cljs.core.__destructure_map(map__31470_31724);
var task_31726 = map__31470_31725__$1;
var fn_str_31727 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31470_31725__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31470_31725__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31729 = goog.getObjectByName(fn_str_31727,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31728)].join(''));

(fn_obj_31729.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31729.cljs$core$IFn$_invoke$arity$2(path,new_link_31702) : fn_obj_31729.call(null,path,new_link_31702));


var G__31732 = cljs.core.next(seq__31459_31718__$1);
var G__31733 = null;
var G__31734 = (0);
var G__31735 = (0);
seq__31459_31703 = G__31732;
chunk__31461_31704 = G__31733;
count__31462_31705 = G__31734;
i__31463_31706 = G__31735;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_31700);
});})(seq__31391_31643,chunk__31395_31644,count__31396_31645,i__31397_31646,seq__31130,chunk__31132,count__31133,i__31134,new_link_31702,path_match_31701,node_31700,seq__31391_31694__$1,temp__5804__auto___31693,path,map__31129,map__31129__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_31701], 0));

goog.dom.insertSiblingAfter(new_link_31702,node_31700);


var G__31736 = cljs.core.next(seq__31391_31694__$1);
var G__31737 = null;
var G__31738 = (0);
var G__31739 = (0);
seq__31391_31643 = G__31736;
chunk__31395_31644 = G__31737;
count__31396_31645 = G__31738;
i__31397_31646 = G__31739;
continue;
} else {
var G__31740 = cljs.core.next(seq__31391_31694__$1);
var G__31741 = null;
var G__31742 = (0);
var G__31743 = (0);
seq__31391_31643 = G__31740;
chunk__31395_31644 = G__31741;
count__31396_31645 = G__31742;
i__31397_31646 = G__31743;
continue;
}
} else {
var G__31744 = cljs.core.next(seq__31391_31694__$1);
var G__31745 = null;
var G__31746 = (0);
var G__31747 = (0);
seq__31391_31643 = G__31744;
chunk__31395_31644 = G__31745;
count__31396_31645 = G__31746;
i__31397_31646 = G__31747;
continue;
}
}
} else {
}
}
break;
}


var G__31748 = seq__31130;
var G__31749 = chunk__31132;
var G__31750 = count__31133;
var G__31751 = (i__31134 + (1));
seq__31130 = G__31748;
chunk__31132 = G__31749;
count__31133 = G__31750;
i__31134 = G__31751;
continue;
} else {
var G__31752 = seq__31130;
var G__31753 = chunk__31132;
var G__31754 = count__31133;
var G__31755 = (i__31134 + (1));
seq__31130 = G__31752;
chunk__31132 = G__31753;
count__31133 = G__31754;
i__31134 = G__31755;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__31130);
if(temp__5804__auto__){
var seq__31130__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31130__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__31130__$1);
var G__31756 = cljs.core.chunk_rest(seq__31130__$1);
var G__31757 = c__5568__auto__;
var G__31758 = cljs.core.count(c__5568__auto__);
var G__31759 = (0);
seq__31130 = G__31756;
chunk__31132 = G__31757;
count__31133 = G__31758;
i__31134 = G__31759;
continue;
} else {
var path = cljs.core.first(seq__31130__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__31471_31764 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__31475_31765 = null;
var count__31476_31766 = (0);
var i__31477_31767 = (0);
while(true){
if((i__31477_31767 < count__31476_31766)){
var node_31768 = chunk__31475_31765.cljs$core$IIndexed$_nth$arity$2(null,i__31477_31767);
if(cljs.core.not(node_31768.shadow$old)){
var path_match_31769 = shadow.cljs.devtools.client.browser.match_paths(node_31768.getAttribute("href"),path);
if(cljs.core.truth_(path_match_31769)){
var new_link_31770 = (function (){var G__31509 = node_31768.cloneNode(true);
G__31509.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_31769),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__31509;
})();
(node_31768.shadow$old = true);

(new_link_31770.onload = ((function (seq__31471_31764,chunk__31475_31765,count__31476_31766,i__31477_31767,seq__31130,chunk__31132,count__31133,i__31134,new_link_31770,path_match_31769,node_31768,path,seq__31130__$1,temp__5804__auto__,map__31129,map__31129__$1,msg,updates,reload_info){
return (function (e){
var seq__31510_31771 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__31512_31772 = null;
var count__31513_31773 = (0);
var i__31514_31774 = (0);
while(true){
if((i__31514_31774 < count__31513_31773)){
var map__31518_31775 = chunk__31512_31772.cljs$core$IIndexed$_nth$arity$2(null,i__31514_31774);
var map__31518_31776__$1 = cljs.core.__destructure_map(map__31518_31775);
var task_31777 = map__31518_31776__$1;
var fn_str_31778 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31518_31776__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31779 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31518_31776__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31780 = goog.getObjectByName(fn_str_31778,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31779)].join(''));

(fn_obj_31780.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31780.cljs$core$IFn$_invoke$arity$2(path,new_link_31770) : fn_obj_31780.call(null,path,new_link_31770));


var G__31781 = seq__31510_31771;
var G__31782 = chunk__31512_31772;
var G__31783 = count__31513_31773;
var G__31784 = (i__31514_31774 + (1));
seq__31510_31771 = G__31781;
chunk__31512_31772 = G__31782;
count__31513_31773 = G__31783;
i__31514_31774 = G__31784;
continue;
} else {
var temp__5804__auto___31785__$1 = cljs.core.seq(seq__31510_31771);
if(temp__5804__auto___31785__$1){
var seq__31510_31786__$1 = temp__5804__auto___31785__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31510_31786__$1)){
var c__5568__auto___31787 = cljs.core.chunk_first(seq__31510_31786__$1);
var G__31788 = cljs.core.chunk_rest(seq__31510_31786__$1);
var G__31789 = c__5568__auto___31787;
var G__31790 = cljs.core.count(c__5568__auto___31787);
var G__31791 = (0);
seq__31510_31771 = G__31788;
chunk__31512_31772 = G__31789;
count__31513_31773 = G__31790;
i__31514_31774 = G__31791;
continue;
} else {
var map__31519_31792 = cljs.core.first(seq__31510_31786__$1);
var map__31519_31793__$1 = cljs.core.__destructure_map(map__31519_31792);
var task_31794 = map__31519_31793__$1;
var fn_str_31795 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31519_31793__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31796 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31519_31793__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31797 = goog.getObjectByName(fn_str_31795,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31796)].join(''));

(fn_obj_31797.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31797.cljs$core$IFn$_invoke$arity$2(path,new_link_31770) : fn_obj_31797.call(null,path,new_link_31770));


var G__31798 = cljs.core.next(seq__31510_31786__$1);
var G__31799 = null;
var G__31800 = (0);
var G__31801 = (0);
seq__31510_31771 = G__31798;
chunk__31512_31772 = G__31799;
count__31513_31773 = G__31800;
i__31514_31774 = G__31801;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_31768);
});})(seq__31471_31764,chunk__31475_31765,count__31476_31766,i__31477_31767,seq__31130,chunk__31132,count__31133,i__31134,new_link_31770,path_match_31769,node_31768,path,seq__31130__$1,temp__5804__auto__,map__31129,map__31129__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_31769], 0));

goog.dom.insertSiblingAfter(new_link_31770,node_31768);


var G__31802 = seq__31471_31764;
var G__31803 = chunk__31475_31765;
var G__31804 = count__31476_31766;
var G__31805 = (i__31477_31767 + (1));
seq__31471_31764 = G__31802;
chunk__31475_31765 = G__31803;
count__31476_31766 = G__31804;
i__31477_31767 = G__31805;
continue;
} else {
var G__31806 = seq__31471_31764;
var G__31807 = chunk__31475_31765;
var G__31808 = count__31476_31766;
var G__31809 = (i__31477_31767 + (1));
seq__31471_31764 = G__31806;
chunk__31475_31765 = G__31807;
count__31476_31766 = G__31808;
i__31477_31767 = G__31809;
continue;
}
} else {
var G__31810 = seq__31471_31764;
var G__31811 = chunk__31475_31765;
var G__31812 = count__31476_31766;
var G__31813 = (i__31477_31767 + (1));
seq__31471_31764 = G__31810;
chunk__31475_31765 = G__31811;
count__31476_31766 = G__31812;
i__31477_31767 = G__31813;
continue;
}
} else {
var temp__5804__auto___31818__$1 = cljs.core.seq(seq__31471_31764);
if(temp__5804__auto___31818__$1){
var seq__31471_31819__$1 = temp__5804__auto___31818__$1;
if(cljs.core.chunked_seq_QMARK_(seq__31471_31819__$1)){
var c__5568__auto___31820 = cljs.core.chunk_first(seq__31471_31819__$1);
var G__31821 = cljs.core.chunk_rest(seq__31471_31819__$1);
var G__31822 = c__5568__auto___31820;
var G__31823 = cljs.core.count(c__5568__auto___31820);
var G__31824 = (0);
seq__31471_31764 = G__31821;
chunk__31475_31765 = G__31822;
count__31476_31766 = G__31823;
i__31477_31767 = G__31824;
continue;
} else {
var node_31825 = cljs.core.first(seq__31471_31819__$1);
if(cljs.core.not(node_31825.shadow$old)){
var path_match_31826 = shadow.cljs.devtools.client.browser.match_paths(node_31825.getAttribute("href"),path);
if(cljs.core.truth_(path_match_31826)){
var new_link_31827 = (function (){var G__31520 = node_31825.cloneNode(true);
G__31520.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_31826),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__31520;
})();
(node_31825.shadow$old = true);

(new_link_31827.onload = ((function (seq__31471_31764,chunk__31475_31765,count__31476_31766,i__31477_31767,seq__31130,chunk__31132,count__31133,i__31134,new_link_31827,path_match_31826,node_31825,seq__31471_31819__$1,temp__5804__auto___31818__$1,path,seq__31130__$1,temp__5804__auto__,map__31129,map__31129__$1,msg,updates,reload_info){
return (function (e){
var seq__31521_31828 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__31523_31829 = null;
var count__31524_31830 = (0);
var i__31525_31831 = (0);
while(true){
if((i__31525_31831 < count__31524_31830)){
var map__31529_31832 = chunk__31523_31829.cljs$core$IIndexed$_nth$arity$2(null,i__31525_31831);
var map__31529_31833__$1 = cljs.core.__destructure_map(map__31529_31832);
var task_31834 = map__31529_31833__$1;
var fn_str_31835 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31529_31833__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31836 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31529_31833__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31837 = goog.getObjectByName(fn_str_31835,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31836)].join(''));

(fn_obj_31837.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31837.cljs$core$IFn$_invoke$arity$2(path,new_link_31827) : fn_obj_31837.call(null,path,new_link_31827));


var G__31838 = seq__31521_31828;
var G__31839 = chunk__31523_31829;
var G__31840 = count__31524_31830;
var G__31841 = (i__31525_31831 + (1));
seq__31521_31828 = G__31838;
chunk__31523_31829 = G__31839;
count__31524_31830 = G__31840;
i__31525_31831 = G__31841;
continue;
} else {
var temp__5804__auto___31842__$2 = cljs.core.seq(seq__31521_31828);
if(temp__5804__auto___31842__$2){
var seq__31521_31843__$1 = temp__5804__auto___31842__$2;
if(cljs.core.chunked_seq_QMARK_(seq__31521_31843__$1)){
var c__5568__auto___31844 = cljs.core.chunk_first(seq__31521_31843__$1);
var G__31845 = cljs.core.chunk_rest(seq__31521_31843__$1);
var G__31846 = c__5568__auto___31844;
var G__31847 = cljs.core.count(c__5568__auto___31844);
var G__31848 = (0);
seq__31521_31828 = G__31845;
chunk__31523_31829 = G__31846;
count__31524_31830 = G__31847;
i__31525_31831 = G__31848;
continue;
} else {
var map__31530_31849 = cljs.core.first(seq__31521_31843__$1);
var map__31530_31850__$1 = cljs.core.__destructure_map(map__31530_31849);
var task_31851 = map__31530_31850__$1;
var fn_str_31852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31530_31850__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_31853 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31530_31850__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_31854 = goog.getObjectByName(fn_str_31852,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_31853)].join(''));

(fn_obj_31854.cljs$core$IFn$_invoke$arity$2 ? fn_obj_31854.cljs$core$IFn$_invoke$arity$2(path,new_link_31827) : fn_obj_31854.call(null,path,new_link_31827));


var G__31855 = cljs.core.next(seq__31521_31843__$1);
var G__31856 = null;
var G__31857 = (0);
var G__31858 = (0);
seq__31521_31828 = G__31855;
chunk__31523_31829 = G__31856;
count__31524_31830 = G__31857;
i__31525_31831 = G__31858;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_31825);
});})(seq__31471_31764,chunk__31475_31765,count__31476_31766,i__31477_31767,seq__31130,chunk__31132,count__31133,i__31134,new_link_31827,path_match_31826,node_31825,seq__31471_31819__$1,temp__5804__auto___31818__$1,path,seq__31130__$1,temp__5804__auto__,map__31129,map__31129__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_31826], 0));

goog.dom.insertSiblingAfter(new_link_31827,node_31825);


var G__31859 = cljs.core.next(seq__31471_31819__$1);
var G__31860 = null;
var G__31861 = (0);
var G__31862 = (0);
seq__31471_31764 = G__31859;
chunk__31475_31765 = G__31860;
count__31476_31766 = G__31861;
i__31477_31767 = G__31862;
continue;
} else {
var G__31863 = cljs.core.next(seq__31471_31819__$1);
var G__31864 = null;
var G__31865 = (0);
var G__31866 = (0);
seq__31471_31764 = G__31863;
chunk__31475_31765 = G__31864;
count__31476_31766 = G__31865;
i__31477_31767 = G__31866;
continue;
}
} else {
var G__31867 = cljs.core.next(seq__31471_31819__$1);
var G__31868 = null;
var G__31869 = (0);
var G__31870 = (0);
seq__31471_31764 = G__31867;
chunk__31475_31765 = G__31868;
count__31476_31766 = G__31869;
i__31477_31767 = G__31870;
continue;
}
}
} else {
}
}
break;
}


var G__31871 = cljs.core.next(seq__31130__$1);
var G__31872 = null;
var G__31873 = (0);
var G__31874 = (0);
seq__31130 = G__31871;
chunk__31132 = G__31872;
count__31133 = G__31873;
i__31134 = G__31874;
continue;
} else {
var G__31875 = cljs.core.next(seq__31130__$1);
var G__31876 = null;
var G__31877 = (0);
var G__31878 = (0);
seq__31130 = G__31875;
chunk__31132 = G__31876;
count__31133 = G__31877;
i__31134 = G__31878;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__31540){
var map__31541 = p__31540;
var map__31541__$1 = cljs.core.__destructure_map(map__31541);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31541__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__31542,done,error){
var map__31543 = p__31542;
var map__31543__$1 = cljs.core.__destructure_map(map__31543);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31543__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__31549,done,error){
var map__31550 = p__31549;
var map__31550__$1 = cljs.core.__destructure_map(map__31550);
var msg = map__31550__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31550__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31550__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31550__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__31551){
var map__31552 = p__31551;
var map__31552__$1 = cljs.core.__destructure_map(map__31552);
var src = map__31552__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31552__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__31555 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__31555) : done.call(null,G__31555));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__31556){
var map__31557 = p__31556;
var map__31557__$1 = cljs.core.__destructure_map(map__31557);
var msg__$1 = map__31557__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31557__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e31558){var ex = e31558;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__31559){
var map__31560 = p__31559;
var map__31560__$1 = cljs.core.__destructure_map(map__31560);
var env = map__31560__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31560__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__31563){
var map__31564 = p__31563;
var map__31564__$1 = cljs.core.__destructure_map(map__31564);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31564__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31564__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__31569){
var map__31570 = p__31569;
var map__31570__$1 = cljs.core.__destructure_map(map__31570);
var svc = map__31570__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31570__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
