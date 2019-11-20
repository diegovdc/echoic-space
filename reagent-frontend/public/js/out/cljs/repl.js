// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__58934){
var map__58935 = p__58934;
var map__58935__$1 = ((((!((map__58935 == null)))?(((((map__58935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58935):map__58935);
var m = map__58935__$1;
var n = cljs.core.get.call(null,map__58935__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__58935__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__58937_58959 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58938_58960 = null;
var count__58939_58961 = (0);
var i__58940_58962 = (0);
while(true){
if((i__58940_58962 < count__58939_58961)){
var f_58963 = cljs.core._nth.call(null,chunk__58938_58960,i__58940_58962);
cljs.core.println.call(null,"  ",f_58963);


var G__58964 = seq__58937_58959;
var G__58965 = chunk__58938_58960;
var G__58966 = count__58939_58961;
var G__58967 = (i__58940_58962 + (1));
seq__58937_58959 = G__58964;
chunk__58938_58960 = G__58965;
count__58939_58961 = G__58966;
i__58940_58962 = G__58967;
continue;
} else {
var temp__5457__auto___58968 = cljs.core.seq.call(null,seq__58937_58959);
if(temp__5457__auto___58968){
var seq__58937_58969__$1 = temp__5457__auto___58968;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58937_58969__$1)){
var c__4337__auto___58970 = cljs.core.chunk_first.call(null,seq__58937_58969__$1);
var G__58971 = cljs.core.chunk_rest.call(null,seq__58937_58969__$1);
var G__58972 = c__4337__auto___58970;
var G__58973 = cljs.core.count.call(null,c__4337__auto___58970);
var G__58974 = (0);
seq__58937_58959 = G__58971;
chunk__58938_58960 = G__58972;
count__58939_58961 = G__58973;
i__58940_58962 = G__58974;
continue;
} else {
var f_58975 = cljs.core.first.call(null,seq__58937_58969__$1);
cljs.core.println.call(null,"  ",f_58975);


var G__58976 = cljs.core.next.call(null,seq__58937_58969__$1);
var G__58977 = null;
var G__58978 = (0);
var G__58979 = (0);
seq__58937_58959 = G__58976;
chunk__58938_58960 = G__58977;
count__58939_58961 = G__58978;
i__58940_58962 = G__58979;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58980 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_58980);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_58980)))?cljs.core.second.call(null,arglists_58980):arglists_58980));
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
var seq__58941_58981 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58942_58982 = null;
var count__58943_58983 = (0);
var i__58944_58984 = (0);
while(true){
if((i__58944_58984 < count__58943_58983)){
var vec__58945_58985 = cljs.core._nth.call(null,chunk__58942_58982,i__58944_58984);
var name_58986 = cljs.core.nth.call(null,vec__58945_58985,(0),null);
var map__58948_58987 = cljs.core.nth.call(null,vec__58945_58985,(1),null);
var map__58948_58988__$1 = ((((!((map__58948_58987 == null)))?(((((map__58948_58987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58948_58987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58948_58987):map__58948_58987);
var doc_58989 = cljs.core.get.call(null,map__58948_58988__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58990 = cljs.core.get.call(null,map__58948_58988__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_58986);

cljs.core.println.call(null," ",arglists_58990);

if(cljs.core.truth_(doc_58989)){
cljs.core.println.call(null," ",doc_58989);
} else {
}


var G__58991 = seq__58941_58981;
var G__58992 = chunk__58942_58982;
var G__58993 = count__58943_58983;
var G__58994 = (i__58944_58984 + (1));
seq__58941_58981 = G__58991;
chunk__58942_58982 = G__58992;
count__58943_58983 = G__58993;
i__58944_58984 = G__58994;
continue;
} else {
var temp__5457__auto___58995 = cljs.core.seq.call(null,seq__58941_58981);
if(temp__5457__auto___58995){
var seq__58941_58996__$1 = temp__5457__auto___58995;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58941_58996__$1)){
var c__4337__auto___58997 = cljs.core.chunk_first.call(null,seq__58941_58996__$1);
var G__58998 = cljs.core.chunk_rest.call(null,seq__58941_58996__$1);
var G__58999 = c__4337__auto___58997;
var G__59000 = cljs.core.count.call(null,c__4337__auto___58997);
var G__59001 = (0);
seq__58941_58981 = G__58998;
chunk__58942_58982 = G__58999;
count__58943_58983 = G__59000;
i__58944_58984 = G__59001;
continue;
} else {
var vec__58950_59002 = cljs.core.first.call(null,seq__58941_58996__$1);
var name_59003 = cljs.core.nth.call(null,vec__58950_59002,(0),null);
var map__58953_59004 = cljs.core.nth.call(null,vec__58950_59002,(1),null);
var map__58953_59005__$1 = ((((!((map__58953_59004 == null)))?(((((map__58953_59004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58953_59004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58953_59004):map__58953_59004);
var doc_59006 = cljs.core.get.call(null,map__58953_59005__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_59007 = cljs.core.get.call(null,map__58953_59005__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_59003);

cljs.core.println.call(null," ",arglists_59007);

if(cljs.core.truth_(doc_59006)){
cljs.core.println.call(null," ",doc_59006);
} else {
}


var G__59008 = cljs.core.next.call(null,seq__58941_58996__$1);
var G__59009 = null;
var G__59010 = (0);
var G__59011 = (0);
seq__58941_58981 = G__59008;
chunk__58942_58982 = G__59009;
count__58943_58983 = G__59010;
i__58944_58984 = G__59011;
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

var seq__58955 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__58956 = null;
var count__58957 = (0);
var i__58958 = (0);
while(true){
if((i__58958 < count__58957)){
var role = cljs.core._nth.call(null,chunk__58956,i__58958);
var temp__5457__auto___59012__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___59012__$1)){
var spec_59013 = temp__5457__auto___59012__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59013));
} else {
}


var G__59014 = seq__58955;
var G__59015 = chunk__58956;
var G__59016 = count__58957;
var G__59017 = (i__58958 + (1));
seq__58955 = G__59014;
chunk__58956 = G__59015;
count__58957 = G__59016;
i__58958 = G__59017;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__58955);
if(temp__5457__auto____$1){
var seq__58955__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58955__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__58955__$1);
var G__59018 = cljs.core.chunk_rest.call(null,seq__58955__$1);
var G__59019 = c__4337__auto__;
var G__59020 = cljs.core.count.call(null,c__4337__auto__);
var G__59021 = (0);
seq__58955 = G__59018;
chunk__58956 = G__59019;
count__58957 = G__59020;
i__58958 = G__59021;
continue;
} else {
var role = cljs.core.first.call(null,seq__58955__$1);
var temp__5457__auto___59022__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___59022__$2)){
var spec_59023 = temp__5457__auto___59022__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_59023));
} else {
}


var G__59024 = cljs.core.next.call(null,seq__58955__$1);
var G__59025 = null;
var G__59026 = (0);
var G__59027 = (0);
seq__58955 = G__59024;
chunk__58956 = G__59025;
count__58957 = G__59026;
i__58958 = G__59027;
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

//# sourceMappingURL=repl.js.map?rel=1574224107287
