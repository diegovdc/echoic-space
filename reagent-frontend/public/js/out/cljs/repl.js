// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42327){
var map__42328 = p__42327;
var map__42328__$1 = ((((!((map__42328 == null)))?(((((map__42328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42328):map__42328);
var m = map__42328__$1;
var n = cljs.core.get.call(null,map__42328__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42328__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__42330_42352 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42331_42353 = null;
var count__42332_42354 = (0);
var i__42333_42355 = (0);
while(true){
if((i__42333_42355 < count__42332_42354)){
var f_42356 = cljs.core._nth.call(null,chunk__42331_42353,i__42333_42355);
cljs.core.println.call(null,"  ",f_42356);


var G__42357 = seq__42330_42352;
var G__42358 = chunk__42331_42353;
var G__42359 = count__42332_42354;
var G__42360 = (i__42333_42355 + (1));
seq__42330_42352 = G__42357;
chunk__42331_42353 = G__42358;
count__42332_42354 = G__42359;
i__42333_42355 = G__42360;
continue;
} else {
var temp__5457__auto___42361 = cljs.core.seq.call(null,seq__42330_42352);
if(temp__5457__auto___42361){
var seq__42330_42362__$1 = temp__5457__auto___42361;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42330_42362__$1)){
var c__4337__auto___42363 = cljs.core.chunk_first.call(null,seq__42330_42362__$1);
var G__42364 = cljs.core.chunk_rest.call(null,seq__42330_42362__$1);
var G__42365 = c__4337__auto___42363;
var G__42366 = cljs.core.count.call(null,c__4337__auto___42363);
var G__42367 = (0);
seq__42330_42352 = G__42364;
chunk__42331_42353 = G__42365;
count__42332_42354 = G__42366;
i__42333_42355 = G__42367;
continue;
} else {
var f_42368 = cljs.core.first.call(null,seq__42330_42362__$1);
cljs.core.println.call(null,"  ",f_42368);


var G__42369 = cljs.core.next.call(null,seq__42330_42362__$1);
var G__42370 = null;
var G__42371 = (0);
var G__42372 = (0);
seq__42330_42352 = G__42369;
chunk__42331_42353 = G__42370;
count__42332_42354 = G__42371;
i__42333_42355 = G__42372;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42373 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42373);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42373)))?cljs.core.second.call(null,arglists_42373):arglists_42373));
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
var seq__42334_42374 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42335_42375 = null;
var count__42336_42376 = (0);
var i__42337_42377 = (0);
while(true){
if((i__42337_42377 < count__42336_42376)){
var vec__42338_42378 = cljs.core._nth.call(null,chunk__42335_42375,i__42337_42377);
var name_42379 = cljs.core.nth.call(null,vec__42338_42378,(0),null);
var map__42341_42380 = cljs.core.nth.call(null,vec__42338_42378,(1),null);
var map__42341_42381__$1 = ((((!((map__42341_42380 == null)))?(((((map__42341_42380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42341_42380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42341_42380):map__42341_42380);
var doc_42382 = cljs.core.get.call(null,map__42341_42381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42383 = cljs.core.get.call(null,map__42341_42381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42379);

cljs.core.println.call(null," ",arglists_42383);

if(cljs.core.truth_(doc_42382)){
cljs.core.println.call(null," ",doc_42382);
} else {
}


var G__42384 = seq__42334_42374;
var G__42385 = chunk__42335_42375;
var G__42386 = count__42336_42376;
var G__42387 = (i__42337_42377 + (1));
seq__42334_42374 = G__42384;
chunk__42335_42375 = G__42385;
count__42336_42376 = G__42386;
i__42337_42377 = G__42387;
continue;
} else {
var temp__5457__auto___42388 = cljs.core.seq.call(null,seq__42334_42374);
if(temp__5457__auto___42388){
var seq__42334_42389__$1 = temp__5457__auto___42388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42334_42389__$1)){
var c__4337__auto___42390 = cljs.core.chunk_first.call(null,seq__42334_42389__$1);
var G__42391 = cljs.core.chunk_rest.call(null,seq__42334_42389__$1);
var G__42392 = c__4337__auto___42390;
var G__42393 = cljs.core.count.call(null,c__4337__auto___42390);
var G__42394 = (0);
seq__42334_42374 = G__42391;
chunk__42335_42375 = G__42392;
count__42336_42376 = G__42393;
i__42337_42377 = G__42394;
continue;
} else {
var vec__42343_42395 = cljs.core.first.call(null,seq__42334_42389__$1);
var name_42396 = cljs.core.nth.call(null,vec__42343_42395,(0),null);
var map__42346_42397 = cljs.core.nth.call(null,vec__42343_42395,(1),null);
var map__42346_42398__$1 = ((((!((map__42346_42397 == null)))?(((((map__42346_42397.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42346_42397.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42346_42397):map__42346_42397);
var doc_42399 = cljs.core.get.call(null,map__42346_42398__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42400 = cljs.core.get.call(null,map__42346_42398__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42396);

cljs.core.println.call(null," ",arglists_42400);

if(cljs.core.truth_(doc_42399)){
cljs.core.println.call(null," ",doc_42399);
} else {
}


var G__42401 = cljs.core.next.call(null,seq__42334_42389__$1);
var G__42402 = null;
var G__42403 = (0);
var G__42404 = (0);
seq__42334_42374 = G__42401;
chunk__42335_42375 = G__42402;
count__42336_42376 = G__42403;
i__42337_42377 = G__42404;
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

var seq__42348 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42349 = null;
var count__42350 = (0);
var i__42351 = (0);
while(true){
if((i__42351 < count__42350)){
var role = cljs.core._nth.call(null,chunk__42349,i__42351);
var temp__5457__auto___42405__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___42405__$1)){
var spec_42406 = temp__5457__auto___42405__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42406));
} else {
}


var G__42407 = seq__42348;
var G__42408 = chunk__42349;
var G__42409 = count__42350;
var G__42410 = (i__42351 + (1));
seq__42348 = G__42407;
chunk__42349 = G__42408;
count__42350 = G__42409;
i__42351 = G__42410;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__42348);
if(temp__5457__auto____$1){
var seq__42348__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42348__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__42348__$1);
var G__42411 = cljs.core.chunk_rest.call(null,seq__42348__$1);
var G__42412 = c__4337__auto__;
var G__42413 = cljs.core.count.call(null,c__4337__auto__);
var G__42414 = (0);
seq__42348 = G__42411;
chunk__42349 = G__42412;
count__42350 = G__42413;
i__42351 = G__42414;
continue;
} else {
var role = cljs.core.first.call(null,seq__42348__$1);
var temp__5457__auto___42415__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___42415__$2)){
var spec_42416 = temp__5457__auto___42415__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42416));
} else {
}


var G__42417 = cljs.core.next.call(null,seq__42348__$1);
var G__42418 = null;
var G__42419 = (0);
var G__42420 = (0);
seq__42348 = G__42417;
chunk__42349 = G__42418;
count__42350 = G__42419;
i__42351 = G__42420;
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

//# sourceMappingURL=repl.js.map?rel=1553576548802
