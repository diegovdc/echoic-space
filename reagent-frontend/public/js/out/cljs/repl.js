// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36901){
var map__36902 = p__36901;
var map__36902__$1 = ((((!((map__36902 == null)))?(((((map__36902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36902):map__36902);
var m = map__36902__$1;
var n = cljs.core.get.call(null,map__36902__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36902__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36904_36926 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36905_36927 = null;
var count__36906_36928 = (0);
var i__36907_36929 = (0);
while(true){
if((i__36907_36929 < count__36906_36928)){
var f_36930 = cljs.core._nth.call(null,chunk__36905_36927,i__36907_36929);
cljs.core.println.call(null,"  ",f_36930);


var G__36931 = seq__36904_36926;
var G__36932 = chunk__36905_36927;
var G__36933 = count__36906_36928;
var G__36934 = (i__36907_36929 + (1));
seq__36904_36926 = G__36931;
chunk__36905_36927 = G__36932;
count__36906_36928 = G__36933;
i__36907_36929 = G__36934;
continue;
} else {
var temp__5457__auto___36935 = cljs.core.seq.call(null,seq__36904_36926);
if(temp__5457__auto___36935){
var seq__36904_36936__$1 = temp__5457__auto___36935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36904_36936__$1)){
var c__4337__auto___36937 = cljs.core.chunk_first.call(null,seq__36904_36936__$1);
var G__36938 = cljs.core.chunk_rest.call(null,seq__36904_36936__$1);
var G__36939 = c__4337__auto___36937;
var G__36940 = cljs.core.count.call(null,c__4337__auto___36937);
var G__36941 = (0);
seq__36904_36926 = G__36938;
chunk__36905_36927 = G__36939;
count__36906_36928 = G__36940;
i__36907_36929 = G__36941;
continue;
} else {
var f_36942 = cljs.core.first.call(null,seq__36904_36936__$1);
cljs.core.println.call(null,"  ",f_36942);


var G__36943 = cljs.core.next.call(null,seq__36904_36936__$1);
var G__36944 = null;
var G__36945 = (0);
var G__36946 = (0);
seq__36904_36926 = G__36943;
chunk__36905_36927 = G__36944;
count__36906_36928 = G__36945;
i__36907_36929 = G__36946;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36947 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36947);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36947)))?cljs.core.second.call(null,arglists_36947):arglists_36947));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36908_36948 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36909_36949 = null;
var count__36910_36950 = (0);
var i__36911_36951 = (0);
while(true){
if((i__36911_36951 < count__36910_36950)){
var vec__36912_36952 = cljs.core._nth.call(null,chunk__36909_36949,i__36911_36951);
var name_36953 = cljs.core.nth.call(null,vec__36912_36952,(0),null);
var map__36915_36954 = cljs.core.nth.call(null,vec__36912_36952,(1),null);
var map__36915_36955__$1 = ((((!((map__36915_36954 == null)))?(((((map__36915_36954.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36915_36954.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36915_36954):map__36915_36954);
var doc_36956 = cljs.core.get.call(null,map__36915_36955__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36957 = cljs.core.get.call(null,map__36915_36955__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36953);

cljs.core.println.call(null," ",arglists_36957);

if(cljs.core.truth_(doc_36956)){
cljs.core.println.call(null," ",doc_36956);
} else {
}


var G__36958 = seq__36908_36948;
var G__36959 = chunk__36909_36949;
var G__36960 = count__36910_36950;
var G__36961 = (i__36911_36951 + (1));
seq__36908_36948 = G__36958;
chunk__36909_36949 = G__36959;
count__36910_36950 = G__36960;
i__36911_36951 = G__36961;
continue;
} else {
var temp__5457__auto___36962 = cljs.core.seq.call(null,seq__36908_36948);
if(temp__5457__auto___36962){
var seq__36908_36963__$1 = temp__5457__auto___36962;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36908_36963__$1)){
var c__4337__auto___36964 = cljs.core.chunk_first.call(null,seq__36908_36963__$1);
var G__36965 = cljs.core.chunk_rest.call(null,seq__36908_36963__$1);
var G__36966 = c__4337__auto___36964;
var G__36967 = cljs.core.count.call(null,c__4337__auto___36964);
var G__36968 = (0);
seq__36908_36948 = G__36965;
chunk__36909_36949 = G__36966;
count__36910_36950 = G__36967;
i__36911_36951 = G__36968;
continue;
} else {
var vec__36917_36969 = cljs.core.first.call(null,seq__36908_36963__$1);
var name_36970 = cljs.core.nth.call(null,vec__36917_36969,(0),null);
var map__36920_36971 = cljs.core.nth.call(null,vec__36917_36969,(1),null);
var map__36920_36972__$1 = ((((!((map__36920_36971 == null)))?(((((map__36920_36971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36920_36971.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36920_36971):map__36920_36971);
var doc_36973 = cljs.core.get.call(null,map__36920_36972__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36974 = cljs.core.get.call(null,map__36920_36972__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36970);

cljs.core.println.call(null," ",arglists_36974);

if(cljs.core.truth_(doc_36973)){
cljs.core.println.call(null," ",doc_36973);
} else {
}


var G__36975 = cljs.core.next.call(null,seq__36908_36963__$1);
var G__36976 = null;
var G__36977 = (0);
var G__36978 = (0);
seq__36908_36948 = G__36975;
chunk__36909_36949 = G__36976;
count__36910_36950 = G__36977;
i__36911_36951 = G__36978;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__36922 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36923 = null;
var count__36924 = (0);
var i__36925 = (0);
while(true){
if((i__36925 < count__36924)){
var role = cljs.core._nth.call(null,chunk__36923,i__36925);
var temp__5457__auto___36979__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36979__$1)){
var spec_36980 = temp__5457__auto___36979__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36980));
} else {
}


var G__36981 = seq__36922;
var G__36982 = chunk__36923;
var G__36983 = count__36924;
var G__36984 = (i__36925 + (1));
seq__36922 = G__36981;
chunk__36923 = G__36982;
count__36924 = G__36983;
i__36925 = G__36984;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__36922);
if(temp__5457__auto____$1){
var seq__36922__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36922__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__36922__$1);
var G__36985 = cljs.core.chunk_rest.call(null,seq__36922__$1);
var G__36986 = c__4337__auto__;
var G__36987 = cljs.core.count.call(null,c__4337__auto__);
var G__36988 = (0);
seq__36922 = G__36985;
chunk__36923 = G__36986;
count__36924 = G__36987;
i__36925 = G__36988;
continue;
} else {
var role = cljs.core.first.call(null,seq__36922__$1);
var temp__5457__auto___36989__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___36989__$2)){
var spec_36990 = temp__5457__auto___36989__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_36990));
} else {
}


var G__36991 = cljs.core.next.call(null,seq__36922__$1);
var G__36992 = null;
var G__36993 = (0);
var G__36994 = (0);
seq__36922 = G__36991;
chunk__36923 = G__36992;
count__36924 = G__36993;
i__36925 = G__36994;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1552590669126
