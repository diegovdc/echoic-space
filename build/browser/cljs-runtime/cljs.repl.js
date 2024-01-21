goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29385){
var map__29386 = p__29385;
var map__29386__$1 = cljs.core.__destructure_map(map__29386);
var m = map__29386__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29386__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29386__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29387_29570 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29388_29571 = null;
var count__29389_29572 = (0);
var i__29390_29573 = (0);
while(true){
if((i__29390_29573 < count__29389_29572)){
var f_29575 = chunk__29388_29571.cljs$core$IIndexed$_nth$arity$2(null,i__29390_29573);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29575], 0));


var G__29576 = seq__29387_29570;
var G__29577 = chunk__29388_29571;
var G__29578 = count__29389_29572;
var G__29579 = (i__29390_29573 + (1));
seq__29387_29570 = G__29576;
chunk__29388_29571 = G__29577;
count__29389_29572 = G__29578;
i__29390_29573 = G__29579;
continue;
} else {
var temp__5804__auto___29580 = cljs.core.seq(seq__29387_29570);
if(temp__5804__auto___29580){
var seq__29387_29581__$1 = temp__5804__auto___29580;
if(cljs.core.chunked_seq_QMARK_(seq__29387_29581__$1)){
var c__5568__auto___29582 = cljs.core.chunk_first(seq__29387_29581__$1);
var G__29584 = cljs.core.chunk_rest(seq__29387_29581__$1);
var G__29585 = c__5568__auto___29582;
var G__29586 = cljs.core.count(c__5568__auto___29582);
var G__29587 = (0);
seq__29387_29570 = G__29584;
chunk__29388_29571 = G__29585;
count__29389_29572 = G__29586;
i__29390_29573 = G__29587;
continue;
} else {
var f_29588 = cljs.core.first(seq__29387_29581__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_29588], 0));


var G__29590 = cljs.core.next(seq__29387_29581__$1);
var G__29591 = null;
var G__29592 = (0);
var G__29593 = (0);
seq__29387_29570 = G__29590;
chunk__29388_29571 = G__29591;
count__29389_29572 = G__29592;
i__29390_29573 = G__29593;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29594 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_29594], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_29594)))?cljs.core.second(arglists_29594):arglists_29594)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29394_29598 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29395_29599 = null;
var count__29396_29600 = (0);
var i__29397_29601 = (0);
while(true){
if((i__29397_29601 < count__29396_29600)){
var vec__29414_29602 = chunk__29395_29599.cljs$core$IIndexed$_nth$arity$2(null,i__29397_29601);
var name_29603 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29414_29602,(0),null);
var map__29417_29604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29414_29602,(1),null);
var map__29417_29605__$1 = cljs.core.__destructure_map(map__29417_29604);
var doc_29606 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29417_29605__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29607 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29417_29605__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29603], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29607], 0));

if(cljs.core.truth_(doc_29606)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29606], 0));
} else {
}


var G__29608 = seq__29394_29598;
var G__29609 = chunk__29395_29599;
var G__29610 = count__29396_29600;
var G__29611 = (i__29397_29601 + (1));
seq__29394_29598 = G__29608;
chunk__29395_29599 = G__29609;
count__29396_29600 = G__29610;
i__29397_29601 = G__29611;
continue;
} else {
var temp__5804__auto___29612 = cljs.core.seq(seq__29394_29598);
if(temp__5804__auto___29612){
var seq__29394_29617__$1 = temp__5804__auto___29612;
if(cljs.core.chunked_seq_QMARK_(seq__29394_29617__$1)){
var c__5568__auto___29618 = cljs.core.chunk_first(seq__29394_29617__$1);
var G__29619 = cljs.core.chunk_rest(seq__29394_29617__$1);
var G__29620 = c__5568__auto___29618;
var G__29621 = cljs.core.count(c__5568__auto___29618);
var G__29622 = (0);
seq__29394_29598 = G__29619;
chunk__29395_29599 = G__29620;
count__29396_29600 = G__29621;
i__29397_29601 = G__29622;
continue;
} else {
var vec__29425_29623 = cljs.core.first(seq__29394_29617__$1);
var name_29624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29425_29623,(0),null);
var map__29428_29625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29425_29623,(1),null);
var map__29428_29626__$1 = cljs.core.__destructure_map(map__29428_29625);
var doc_29627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29428_29626__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29628 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29428_29626__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_29624], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_29628], 0));

if(cljs.core.truth_(doc_29627)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_29627], 0));
} else {
}


var G__29630 = cljs.core.next(seq__29394_29617__$1);
var G__29631 = null;
var G__29632 = (0);
var G__29633 = (0);
seq__29394_29598 = G__29630;
chunk__29395_29599 = G__29631;
count__29396_29600 = G__29632;
i__29397_29601 = G__29633;
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
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__29431 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29432 = null;
var count__29433 = (0);
var i__29434 = (0);
while(true){
if((i__29434 < count__29433)){
var role = chunk__29432.cljs$core$IIndexed$_nth$arity$2(null,i__29434);
var temp__5804__auto___29634__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___29634__$1)){
var spec_29635 = temp__5804__auto___29634__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29635)], 0));
} else {
}


var G__29636 = seq__29431;
var G__29637 = chunk__29432;
var G__29638 = count__29433;
var G__29639 = (i__29434 + (1));
seq__29431 = G__29636;
chunk__29432 = G__29637;
count__29433 = G__29638;
i__29434 = G__29639;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__29431);
if(temp__5804__auto____$1){
var seq__29431__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__29431__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__29431__$1);
var G__29640 = cljs.core.chunk_rest(seq__29431__$1);
var G__29641 = c__5568__auto__;
var G__29642 = cljs.core.count(c__5568__auto__);
var G__29643 = (0);
seq__29431 = G__29640;
chunk__29432 = G__29641;
count__29433 = G__29642;
i__29434 = G__29643;
continue;
} else {
var role = cljs.core.first(seq__29431__$1);
var temp__5804__auto___29644__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___29644__$2)){
var spec_29645 = temp__5804__auto___29644__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_29645)], 0));
} else {
}


var G__29646 = cljs.core.next(seq__29431__$1);
var G__29647 = null;
var G__29648 = (0);
var G__29649 = (0);
seq__29431 = G__29646;
chunk__29432 = G__29647;
count__29433 = G__29648;
i__29434 = G__29649;
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
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29651 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__29652 = cljs.core.ex_cause(t);
via = G__29651;
t = G__29652;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29456 = datafied_throwable;
var map__29456__$1 = cljs.core.__destructure_map(map__29456);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29456__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29456__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__29456__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29457 = cljs.core.last(via);
var map__29457__$1 = cljs.core.__destructure_map(map__29457);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29457__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29457__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29457__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29458 = data;
var map__29458__$1 = cljs.core.__destructure_map(map__29458);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29458__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29459 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__29459__$1 = cljs.core.__destructure_map(map__29459);
var top_data = map__29459__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29459__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__29460 = phase;
var G__29460__$1 = (((G__29460 instanceof cljs.core.Keyword))?G__29460.fqn:null);
switch (G__29460__$1) {
case "read-source":
var map__29461 = data;
var map__29461__$1 = cljs.core.__destructure_map(map__29461);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29461__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29461__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29468 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__29468__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29468,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29468);
var G__29468__$2 = (cljs.core.truth_((function (){var fexpr__29470 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29470.cljs$core$IFn$_invoke$arity$1 ? fexpr__29470.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29470.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29468__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29468__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29468__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29468__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29474 = top_data;
var G__29474__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29474,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29474);
var G__29474__$2 = (cljs.core.truth_((function (){var fexpr__29475 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29475.cljs$core$IFn$_invoke$arity$1 ? fexpr__29475.cljs$core$IFn$_invoke$arity$1(source) : fexpr__29475.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__29474__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29474__$1);
var G__29474__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29474__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29474__$2);
var G__29474__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29474__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29474__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29474__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29474__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29476 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29476,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29476,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29476,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29476,(3),null);
var G__29479 = top_data;
var G__29479__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29479,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29479);
var G__29479__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29479__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29479__$1);
var G__29479__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29479__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29479__$2);
var G__29479__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29479__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29479__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29479__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29479__$4;
}

break;
case "execution":
var vec__29480 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29480,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__29455_SHARP_){
var or__5045__auto__ = (p1__29455_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__29484 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__29484.cljs$core$IFn$_invoke$arity$1 ? fexpr__29484.cljs$core$IFn$_invoke$arity$1(p1__29455_SHARP_) : fexpr__29484.call(null,p1__29455_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__29487 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29487__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29487,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29487);
var G__29487__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29487__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29487__$1);
var G__29487__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29487__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29487__$2);
var G__29487__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29487__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29487__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__29487__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29487__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29460__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29499){
var map__29500 = p__29499;
var map__29500__$1 = cljs.core.__destructure_map(map__29500);
var triage_data = map__29500__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29500__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29505 = phase;
var G__29505__$1 = (((G__29505 instanceof cljs.core.Keyword))?G__29505.fqn:null);
switch (G__29505__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__29506 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__29507 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29508 = loc;
var G__29509 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29511_29759 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29512_29760 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29513_29761 = true;
var _STAR_print_fn_STAR__temp_val__29514_29762 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29513_29761);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29514_29762);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29497_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29497_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29512_29760);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29511_29759);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29506,G__29507,G__29508,G__29509) : format.call(null,G__29506,G__29507,G__29508,G__29509));

break;
case "macroexpansion":
var G__29517 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__29518 = cause_type;
var G__29519 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29520 = loc;
var G__29521 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29517,G__29518,G__29519,G__29520,G__29521) : format.call(null,G__29517,G__29518,G__29519,G__29520,G__29521));

break;
case "compile-syntax-check":
var G__29523 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__29524 = cause_type;
var G__29525 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29526 = loc;
var G__29527 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29523,G__29524,G__29525,G__29526,G__29527) : format.call(null,G__29523,G__29524,G__29525,G__29526,G__29527));

break;
case "compilation":
var G__29528 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__29529 = cause_type;
var G__29530 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29531 = loc;
var G__29532 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29528,G__29529,G__29530,G__29531,G__29532) : format.call(null,G__29528,G__29529,G__29530,G__29531,G__29532));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__29533 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__29534 = symbol;
var G__29535 = loc;
var G__29536 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29537_29771 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29538_29772 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29539_29773 = true;
var _STAR_print_fn_STAR__temp_val__29540_29774 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29539_29773);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29540_29774);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__29498_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29498_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29538_29772);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29537_29771);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__29533,G__29534,G__29535,G__29536) : format.call(null,G__29533,G__29534,G__29535,G__29536));
} else {
var G__29541 = "Execution error%s at %s(%s).\n%s\n";
var G__29542 = cause_type;
var G__29543 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__29544 = loc;
var G__29545 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__29541,G__29542,G__29543,G__29544,G__29545) : format.call(null,G__29541,G__29542,G__29543,G__29544,G__29545));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29505__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
