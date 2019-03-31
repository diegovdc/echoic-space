// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__46306){
var map__46307 = p__46306;
var map__46307__$1 = ((((!((map__46307 == null)))?(((((map__46307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46307):map__46307);
var m = map__46307__$1;
var n = cljs.core.get.call(null,map__46307__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__46307__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__46309_46331 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46310_46332 = null;
var count__46311_46333 = (0);
var i__46312_46334 = (0);
while(true){
if((i__46312_46334 < count__46311_46333)){
var f_46335 = cljs.core._nth.call(null,chunk__46310_46332,i__46312_46334);
cljs.core.println.call(null,"  ",f_46335);


var G__46336 = seq__46309_46331;
var G__46337 = chunk__46310_46332;
var G__46338 = count__46311_46333;
var G__46339 = (i__46312_46334 + (1));
seq__46309_46331 = G__46336;
chunk__46310_46332 = G__46337;
count__46311_46333 = G__46338;
i__46312_46334 = G__46339;
continue;
} else {
var temp__5457__auto___46340 = cljs.core.seq.call(null,seq__46309_46331);
if(temp__5457__auto___46340){
var seq__46309_46341__$1 = temp__5457__auto___46340;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46309_46341__$1)){
var c__4337__auto___46342 = cljs.core.chunk_first.call(null,seq__46309_46341__$1);
var G__46343 = cljs.core.chunk_rest.call(null,seq__46309_46341__$1);
var G__46344 = c__4337__auto___46342;
var G__46345 = cljs.core.count.call(null,c__4337__auto___46342);
var G__46346 = (0);
seq__46309_46331 = G__46343;
chunk__46310_46332 = G__46344;
count__46311_46333 = G__46345;
i__46312_46334 = G__46346;
continue;
} else {
var f_46347 = cljs.core.first.call(null,seq__46309_46341__$1);
cljs.core.println.call(null,"  ",f_46347);


var G__46348 = cljs.core.next.call(null,seq__46309_46341__$1);
var G__46349 = null;
var G__46350 = (0);
var G__46351 = (0);
seq__46309_46331 = G__46348;
chunk__46310_46332 = G__46349;
count__46311_46333 = G__46350;
i__46312_46334 = G__46351;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_46352 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_46352);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_46352)))?cljs.core.second.call(null,arglists_46352):arglists_46352));
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
var seq__46313_46353 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__46314_46354 = null;
var count__46315_46355 = (0);
var i__46316_46356 = (0);
while(true){
if((i__46316_46356 < count__46315_46355)){
var vec__46317_46357 = cljs.core._nth.call(null,chunk__46314_46354,i__46316_46356);
var name_46358 = cljs.core.nth.call(null,vec__46317_46357,(0),null);
var map__46320_46359 = cljs.core.nth.call(null,vec__46317_46357,(1),null);
var map__46320_46360__$1 = ((((!((map__46320_46359 == null)))?(((((map__46320_46359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46320_46359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46320_46359):map__46320_46359);
var doc_46361 = cljs.core.get.call(null,map__46320_46360__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46362 = cljs.core.get.call(null,map__46320_46360__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46358);

cljs.core.println.call(null," ",arglists_46362);

if(cljs.core.truth_(doc_46361)){
cljs.core.println.call(null," ",doc_46361);
} else {
}


var G__46363 = seq__46313_46353;
var G__46364 = chunk__46314_46354;
var G__46365 = count__46315_46355;
var G__46366 = (i__46316_46356 + (1));
seq__46313_46353 = G__46363;
chunk__46314_46354 = G__46364;
count__46315_46355 = G__46365;
i__46316_46356 = G__46366;
continue;
} else {
var temp__5457__auto___46367 = cljs.core.seq.call(null,seq__46313_46353);
if(temp__5457__auto___46367){
var seq__46313_46368__$1 = temp__5457__auto___46367;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46313_46368__$1)){
var c__4337__auto___46369 = cljs.core.chunk_first.call(null,seq__46313_46368__$1);
var G__46370 = cljs.core.chunk_rest.call(null,seq__46313_46368__$1);
var G__46371 = c__4337__auto___46369;
var G__46372 = cljs.core.count.call(null,c__4337__auto___46369);
var G__46373 = (0);
seq__46313_46353 = G__46370;
chunk__46314_46354 = G__46371;
count__46315_46355 = G__46372;
i__46316_46356 = G__46373;
continue;
} else {
var vec__46322_46374 = cljs.core.first.call(null,seq__46313_46368__$1);
var name_46375 = cljs.core.nth.call(null,vec__46322_46374,(0),null);
var map__46325_46376 = cljs.core.nth.call(null,vec__46322_46374,(1),null);
var map__46325_46377__$1 = ((((!((map__46325_46376 == null)))?(((((map__46325_46376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46325_46376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46325_46376):map__46325_46376);
var doc_46378 = cljs.core.get.call(null,map__46325_46377__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_46379 = cljs.core.get.call(null,map__46325_46377__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_46375);

cljs.core.println.call(null," ",arglists_46379);

if(cljs.core.truth_(doc_46378)){
cljs.core.println.call(null," ",doc_46378);
} else {
}


var G__46380 = cljs.core.next.call(null,seq__46313_46368__$1);
var G__46381 = null;
var G__46382 = (0);
var G__46383 = (0);
seq__46313_46353 = G__46380;
chunk__46314_46354 = G__46381;
count__46315_46355 = G__46382;
i__46316_46356 = G__46383;
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

var seq__46327 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__46328 = null;
var count__46329 = (0);
var i__46330 = (0);
while(true){
if((i__46330 < count__46329)){
var role = cljs.core._nth.call(null,chunk__46328,i__46330);
var temp__5457__auto___46384__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46384__$1)){
var spec_46385 = temp__5457__auto___46384__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46385));
} else {
}


var G__46386 = seq__46327;
var G__46387 = chunk__46328;
var G__46388 = count__46329;
var G__46389 = (i__46330 + (1));
seq__46327 = G__46386;
chunk__46328 = G__46387;
count__46329 = G__46388;
i__46330 = G__46389;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__46327);
if(temp__5457__auto____$1){
var seq__46327__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__46327__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__46327__$1);
var G__46390 = cljs.core.chunk_rest.call(null,seq__46327__$1);
var G__46391 = c__4337__auto__;
var G__46392 = cljs.core.count.call(null,c__4337__auto__);
var G__46393 = (0);
seq__46327 = G__46390;
chunk__46328 = G__46391;
count__46329 = G__46392;
i__46330 = G__46393;
continue;
} else {
var role = cljs.core.first.call(null,seq__46327__$1);
var temp__5457__auto___46394__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___46394__$2)){
var spec_46395 = temp__5457__auto___46394__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_46395));
} else {
}


var G__46396 = cljs.core.next.call(null,seq__46327__$1);
var G__46397 = null;
var G__46398 = (0);
var G__46399 = (0);
seq__46327 = G__46396;
chunk__46328 = G__46397;
count__46329 = G__46398;
i__46330 = G__46399;
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

//# sourceMappingURL=repl.js.map?rel=1553997027778
