// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.pprint');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.StringBuffer');
cljs.pprint.print = (function cljs$pprint$print(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52378 = arguments.length;
var i__4518__auto___52379 = (0);
while(true){
if((i__4518__auto___52379 < len__4517__auto___52378)){
args__4520__auto__.push((arguments[i__4518__auto___52379]));

var G__52380 = (i__4518__auto___52379 + (1));
i__4518__auto___52379 = G__52380;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.pprint.print.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.print_str,more));
});

cljs.pprint.print.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.print.cljs$lang$applyTo = (function (seq52377){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52377));
});

cljs.pprint.println = (function cljs$pprint$println(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52382 = arguments.length;
var i__4518__auto___52383 = (0);
while(true){
if((i__4518__auto___52383 < len__4517__auto___52382)){
args__4520__auto__.push((arguments[i__4518__auto___52383]));

var G__52384 = (i__4518__auto___52383 + (1));
i__4518__auto___52383 = G__52384;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.pprint.println.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.print,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.println.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.println.cljs$lang$applyTo = (function (seq52381){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52381));
});

cljs.pprint.print_char = (function cljs$pprint$print_char(c){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,(function (){var pred__52385 = cljs.core._EQ_;
var expr__52386 = c;
if(cljs.core.truth_(pred__52385.call(null,"\b",expr__52386))){
return "\\backspace";
} else {
if(cljs.core.truth_(pred__52385.call(null,"\t",expr__52386))){
return "\\tab";
} else {
if(cljs.core.truth_(pred__52385.call(null,"\n",expr__52386))){
return "\\newline";
} else {
if(cljs.core.truth_(pred__52385.call(null,"\f",expr__52386))){
return "\\formfeed";
} else {
if(cljs.core.truth_(pred__52385.call(null,"\r",expr__52386))){
return "\\return";
} else {
if(cljs.core.truth_(pred__52385.call(null,"\"",expr__52386))){
return "\\\"";
} else {
if(cljs.core.truth_(pred__52385.call(null,"\\",expr__52386))){
return "\\\\";
} else {
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(c)].join('');
}
}
}
}
}
}
}
})());
});
cljs.pprint.pr = (function cljs$pprint$pr(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52389 = arguments.length;
var i__4518__auto___52390 = (0);
while(true){
if((i__4518__auto___52390 < len__4517__auto___52389)){
args__4520__auto__.push((arguments[i__4518__auto___52390]));

var G__52391 = (i__4518__auto___52390 + (1));
i__4518__auto___52390 = G__52391;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.pprint.pr.cljs$core$IFn$_invoke$arity$variadic = (function (more){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.apply.call(null,cljs.core.pr_str,more));
});

cljs.pprint.pr.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.pr.cljs$lang$applyTo = (function (seq52388){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52388));
});

cljs.pprint.prn = (function cljs$pprint$prn(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52393 = arguments.length;
var i__4518__auto___52394 = (0);
while(true){
if((i__4518__auto___52394 < len__4517__auto___52393)){
args__4520__auto__.push((arguments[i__4518__auto___52394]));

var G__52395 = (i__4518__auto___52394 + (1));
i__4518__auto___52394 = G__52395;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((0) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((0)),(0),null)):null);
return cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic(argseq__4521__auto__);
});

cljs.pprint.prn.cljs$core$IFn$_invoke$arity$variadic = (function (more){
cljs.core.apply.call(null,cljs.pprint.pr,more);

return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
});

cljs.pprint.prn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
cljs.pprint.prn.cljs$lang$applyTo = (function (seq52392){
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq52392));
});

/**
 * Returns true if n is an float.
 */
cljs.pprint.float_QMARK_ = (function cljs$pprint$float_QMARK_(n){
return ((typeof n === 'number') && (!(isNaN(n))) && (!((n === Infinity))) && (!((parseFloat(n) === parseInt(n,(10))))));
});
/**
 * Convert char to int
 */
cljs.pprint.char_code = (function cljs$pprint$char_code(c){
if(typeof c === 'number'){
return c;
} else {
if(((typeof c === 'string') && ((c.length === (1))))){
return c.charCodeAt((0));
} else {
throw (new Error("Argument to char must be a character or number"));

}
}
});
cljs.pprint.map_passing_context = (function cljs$pprint$map_passing_context(func,initial_context,lis){
var context = initial_context;
var lis__$1 = lis;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.empty_QMARK_.call(null,lis__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var this$ = cljs.core.first.call(null,lis__$1);
var remainder = cljs.core.next.call(null,lis__$1);
var vec__52396 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,context], null));
var result = cljs.core.nth.call(null,vec__52396,(0),null);
var new_context = cljs.core.nth.call(null,vec__52396,(1),null);
var G__52399 = new_context;
var G__52400 = remainder;
var G__52401 = cljs.core.conj.call(null,acc,result);
context = G__52399;
lis__$1 = G__52400;
acc = G__52401;
continue;
}
break;
}
});
cljs.pprint.consume = (function cljs$pprint$consume(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__52402 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__52402,(0),null);
var new_context = cljs.core.nth.call(null,vec__52402,(1),null);
if(cljs.core.not.call(null,result)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,new_context], null);
} else {
var G__52405 = new_context;
var G__52406 = cljs.core.conj.call(null,acc,result);
context = G__52405;
acc = G__52406;
continue;
}
break;
}
});
cljs.pprint.consume_while = (function cljs$pprint$consume_while(func,initial_context){
var context = initial_context;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__52407 = cljs.core.apply.call(null,func,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [context], null));
var result = cljs.core.nth.call(null,vec__52407,(0),null);
var continue$ = cljs.core.nth.call(null,vec__52407,(1),null);
var new_context = cljs.core.nth.call(null,vec__52407,(2),null);
if(cljs.core.not.call(null,continue$)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,context], null);
} else {
var G__52410 = new_context;
var G__52411 = cljs.core.conj.call(null,acc,result);
context = G__52410;
acc = G__52411;
continue;
}
break;
}
});
cljs.pprint.unzip_map = (function cljs$pprint$unzip_map(m){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4310__auto__ = (function cljs$pprint$unzip_map_$_iter__52412(s__52413){
return (new cljs.core.LazySeq(null,(function (){
var s__52413__$1 = s__52413;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52413__$1);
if(temp__5457__auto__){
var s__52413__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52413__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__52413__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__52415 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__52414 = (0);
while(true){
if((i__52414 < size__4309__auto__)){
var vec__52416 = cljs.core._nth.call(null,c__4308__auto__,i__52414);
var k = cljs.core.nth.call(null,vec__52416,(0),null);
var vec__52419 = cljs.core.nth.call(null,vec__52416,(1),null);
var v1 = cljs.core.nth.call(null,vec__52419,(0),null);
var v2 = cljs.core.nth.call(null,vec__52419,(1),null);
cljs.core.chunk_append.call(null,b__52415,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null));

var G__52444 = (i__52414 + (1));
i__52414 = G__52444;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52415),cljs$pprint$unzip_map_$_iter__52412.call(null,cljs.core.chunk_rest.call(null,s__52413__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52415),null);
}
} else {
var vec__52422 = cljs.core.first.call(null,s__52413__$2);
var k = cljs.core.nth.call(null,vec__52422,(0),null);
var vec__52425 = cljs.core.nth.call(null,vec__52422,(1),null);
var v1 = cljs.core.nth.call(null,vec__52425,(0),null);
var v2 = cljs.core.nth.call(null,vec__52425,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v1], null),cljs$pprint$unzip_map_$_iter__52412.call(null,cljs.core.rest.call(null,s__52413__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,m);
})()),cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4310__auto__ = (function cljs$pprint$unzip_map_$_iter__52428(s__52429){
return (new cljs.core.LazySeq(null,(function (){
var s__52429__$1 = s__52429;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52429__$1);
if(temp__5457__auto__){
var s__52429__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52429__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__52429__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__52431 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__52430 = (0);
while(true){
if((i__52430 < size__4309__auto__)){
var vec__52432 = cljs.core._nth.call(null,c__4308__auto__,i__52430);
var k = cljs.core.nth.call(null,vec__52432,(0),null);
var vec__52435 = cljs.core.nth.call(null,vec__52432,(1),null);
var v1 = cljs.core.nth.call(null,vec__52435,(0),null);
var v2 = cljs.core.nth.call(null,vec__52435,(1),null);
cljs.core.chunk_append.call(null,b__52431,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null));

var G__52445 = (i__52430 + (1));
i__52430 = G__52445;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52431),cljs$pprint$unzip_map_$_iter__52428.call(null,cljs.core.chunk_rest.call(null,s__52429__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52431),null);
}
} else {
var vec__52438 = cljs.core.first.call(null,s__52429__$2);
var k = cljs.core.nth.call(null,vec__52438,(0),null);
var vec__52441 = cljs.core.nth.call(null,vec__52438,(1),null);
var v1 = cljs.core.nth.call(null,vec__52441,(0),null);
var v2 = cljs.core.nth.call(null,vec__52441,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v2], null),cljs$pprint$unzip_map_$_iter__52428.call(null,cljs.core.rest.call(null,s__52429__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,m);
})())], null);
});
cljs.pprint.tuple_map = (function cljs$pprint$tuple_map(m,v1){

return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4310__auto__ = (function cljs$pprint$tuple_map_$_iter__52446(s__52447){
return (new cljs.core.LazySeq(null,(function (){
var s__52447__$1 = s__52447;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__52447__$1);
if(temp__5457__auto__){
var s__52447__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__52447__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__52447__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__52449 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__52448 = (0);
while(true){
if((i__52448 < size__4309__auto__)){
var vec__52450 = cljs.core._nth.call(null,c__4308__auto__,i__52448);
var k = cljs.core.nth.call(null,vec__52450,(0),null);
var v = cljs.core.nth.call(null,vec__52450,(1),null);
cljs.core.chunk_append.call(null,b__52449,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null));

var G__52456 = (i__52448 + (1));
i__52448 = G__52456;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52449),cljs$pprint$tuple_map_$_iter__52446.call(null,cljs.core.chunk_rest.call(null,s__52447__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__52449),null);
}
} else {
var vec__52453 = cljs.core.first.call(null,s__52447__$2);
var k = cljs.core.nth.call(null,vec__52453,(0),null);
var v = cljs.core.nth.call(null,vec__52453,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,v1], null)], null),cljs$pprint$tuple_map_$_iter__52446.call(null,cljs.core.rest.call(null,s__52447__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,m);
})());
});
cljs.pprint.rtrim = (function cljs$pprint$rtrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1))),c)))){
var n = (len - (1));
while(true){
if((n < (0))){
return "";
} else {
if(!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))){
return cljs.core.subs.call(null,s,(0),(n + (1)));
} else {
var G__52457 = (n - (1));
n = G__52457;
continue;

}
}
break;
}
} else {
return s;
}
});
cljs.pprint.ltrim = (function cljs$pprint$ltrim(s,c){

var len = cljs.core.count.call(null,s);
if((((len > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,(0)),c)))){
var n = (0);
while(true){
if(((cljs.core._EQ_.call(null,n,len)) || (!(cljs.core._EQ_.call(null,cljs.core.nth.call(null,s,n),c))))){
return cljs.core.subs.call(null,s,n);
} else {
var G__52458 = (n + (1));
n = G__52458;
continue;
}
break;
}
} else {
return s;
}
});
cljs.pprint.prefix_count = (function cljs$pprint$prefix_count(aseq,val){

var test = ((cljs.core.coll_QMARK_.call(null,val))?cljs.core.set.call(null,val):cljs.core.PersistentHashSet.createAsIfByAssoc([val]));
var pos = (0);
while(true){
if(((cljs.core._EQ_.call(null,pos,cljs.core.count.call(null,aseq))) || (cljs.core.not.call(null,test.call(null,cljs.core.nth.call(null,aseq,pos)))))){
return pos;
} else {
var G__52459 = (pos + (1));
pos = G__52459;
continue;
}
break;
}
});

/**
 * @interface
 */
cljs.pprint.IPrettyFlush = function(){};

cljs.pprint._ppflush = (function cljs$pprint$_ppflush(pp){
if(((!((pp == null))) && (!((pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1 == null))))){
return pp.cljs$pprint$IPrettyFlush$_ppflush$arity$1(pp);
} else {
var x__4229__auto__ = (((pp == null))?null:pp);
var m__4230__auto__ = (cljs.pprint._ppflush[goog.typeOf(x__4229__auto__)]);
if(!((m__4230__auto__ == null))){
return m__4230__auto__.call(null,pp);
} else {
var m__4230__auto____$1 = (cljs.pprint._ppflush["_"]);
if(!((m__4230__auto____$1 == null))){
return m__4230__auto____$1.call(null,pp);
} else {
throw cljs.core.missing_protocol.call(null,"IPrettyFlush.-ppflush",pp);
}
}
}
});

cljs.pprint._STAR_default_page_width_STAR_ = (72);
cljs.pprint.get_field = (function cljs$pprint$get_field(this$,sym){
return sym.call(null,cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
cljs.pprint.set_field = (function cljs$pprint$set_field(this$,sym,new_val){
return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,sym,new_val);
});
cljs.pprint.get_column = (function cljs$pprint$get_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599));
});
cljs.pprint.get_line = (function cljs$pprint$get_line(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235));
});
cljs.pprint.get_max_column = (function cljs$pprint$get_max_column(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548));
});
cljs.pprint.set_max_column = (function cljs$pprint$set_max_column(this$,new_max){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"max","max",61366548),new_max);

return null;
});
cljs.pprint.get_writer = (function cljs$pprint$get_writer(this$){
return cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322));
});
cljs.pprint.c_write_char = (function cljs$pprint$c_write_char(this$,c){
if(cljs.core._EQ_.call(null,c,"\n")){
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(0));

cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"line","line",212345235)) + (1)));
} else {
cljs.pprint.set_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"cur","cur",1153190599)) + (1)));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$,new cljs.core.Keyword(null,"base","base",185279322)),c);
});
cljs.pprint.column_writer = (function cljs$pprint$column_writer(var_args){
var G__52462 = arguments.length;
switch (G__52462) {
case 1:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$1 = (function (writer){
return cljs.pprint.column_writer.call(null,writer,cljs.pprint._STAR_default_page_width_STAR_);
});

cljs.pprint.column_writer.cljs$core$IFn$_invoke$arity$2 = (function (writer,max_columns){
var fields = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max","max",61366548),max_columns,new cljs.core.Keyword(null,"cur","cur",1153190599),(0),new cljs.core.Keyword(null,"line","line",212345235),(0),new cljs.core.Keyword(null,"base","base",185279322),writer], null));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52463 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52463 = (function (writer,max_columns,fields,meta52464){
this.writer = writer;
this.max_columns = max_columns;
this.fields = fields;
this.meta52464 = meta52464;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52463.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (fields){
return (function (_52465,meta52464__$1){
var self__ = this;
var _52465__$1 = this;
return (new cljs.pprint.t_cljs$pprint52463(self__.writer,self__.max_columns,self__.fields,meta52464__$1));
});})(fields))
;

cljs.pprint.t_cljs$pprint52463.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (fields){
return (function (_52465){
var self__ = this;
var _52465__$1 = this;
return self__.meta52464;
});})(fields))
;

cljs.pprint.t_cljs$pprint52463.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(fields))
;

cljs.pprint.t_cljs$pprint52463.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(fields))
;

cljs.pprint.t_cljs$pprint52463.prototype.cljs$core$IWriter$_write$arity$2 = ((function (fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52466 = cljs.core._EQ_;
var expr__52467 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52466.call(null,String,expr__52467))){
var s = x;
var nl = s.lastIndexOf("\n");
if((nl < (0))){
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599)) + cljs.core.count.call(null,s)));
} else {
cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"cur","cur",1153190599),((cljs.core.count.call(null,s) - nl) - (1)));

cljs.pprint.set_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235),(cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"line","line",212345235)) + cljs.core.count.call(null,cljs.core.filter.call(null,((function (s,nl,pred__52466,expr__52467,this$__$1,fields){
return (function (p1__52460_SHARP_){
return cljs.core._EQ_.call(null,p1__52460_SHARP_,"\n");
});})(s,nl,pred__52466,expr__52467,this$__$1,fields))
,s))));
}

return cljs.core._write.call(null,cljs.pprint.get_field.call(null,this$__$1,new cljs.core.Keyword(null,"base","base",185279322)),s);
} else {
if(cljs.core.truth_(pred__52466.call(null,Number,expr__52467))){
return cljs.pprint.c_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52467)].join('')));
}
}
});})(fields))
;

cljs.pprint.t_cljs$pprint52463.getBasis = ((function (fields){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta52464","meta52464",-999617522,null)], null);
});})(fields))
;

cljs.pprint.t_cljs$pprint52463.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52463.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52463";

cljs.pprint.t_cljs$pprint52463.cljs$lang$ctorPrWriter = ((function (fields){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.pprint/t_cljs$pprint52463");
});})(fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52463.
 */
cljs.pprint.__GT_t_cljs$pprint52463 = ((function (fields){
return (function cljs$pprint$__GT_t_cljs$pprint52463(writer__$1,max_columns__$1,fields__$1,meta52464){
return (new cljs.pprint.t_cljs$pprint52463(writer__$1,max_columns__$1,fields__$1,meta52464));
});})(fields))
;

}

return (new cljs.pprint.t_cljs$pprint52463(writer,max_columns,fields,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.pprint.column_writer.cljs$lang$maxFixedArity = 2;


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.logical_block = (function (parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,__meta,__extmap,__hash){
this.parent = parent;
this.section = section;
this.start_col = start_col;
this.indent = indent;
this.done_nl = done_nl;
this.intra_block_nl = intra_block_nl;
this.prefix = prefix;
this.per_line_prefix = per_line_prefix;
this.suffix = suffix;
this.logical_block_callback = logical_block_callback;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

cljs.pprint.logical_block.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k52471,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__52475 = k52471;
var G__52475__$1 = (((G__52475 instanceof cljs.core.Keyword))?G__52475.fqn:null);
switch (G__52475__$1) {
case "parent":
return self__.parent;

break;
case "section":
return self__.section;

break;
case "start-col":
return self__.start_col;

break;
case "indent":
return self__.indent;

break;
case "done-nl":
return self__.done_nl;

break;
case "intra-block-nl":
return self__.intra_block_nl;

break;
case "prefix":
return self__.prefix;

break;
case "per-line-prefix":
return self__.per_line_prefix;

break;
case "suffix":
return self__.suffix;

break;
case "logical-block-callback":
return self__.logical_block_callback;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52471,else__4193__auto__);

}
});

cljs.pprint.logical_block.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#cljs.pprint.logical-block{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"section","section",-300141526),self__.section],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback],null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52470){
var self__ = this;
var G__52470__$1 = this;
return (new cljs.core.RecordIter((0),G__52470__$1,10,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.logical_block.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.logical_block.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (10 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (1977012399 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

cljs.pprint.logical_block.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52472,other52473){
var self__ = this;
var this52472__$1 = this;
return ((!((other52473 == null))) && ((this52472__$1.constructor === other52473.constructor)) && (cljs.core._EQ_.call(null,this52472__$1.parent,other52473.parent)) && (cljs.core._EQ_.call(null,this52472__$1.section,other52473.section)) && (cljs.core._EQ_.call(null,this52472__$1.start_col,other52473.start_col)) && (cljs.core._EQ_.call(null,this52472__$1.indent,other52473.indent)) && (cljs.core._EQ_.call(null,this52472__$1.done_nl,other52473.done_nl)) && (cljs.core._EQ_.call(null,this52472__$1.intra_block_nl,other52473.intra_block_nl)) && (cljs.core._EQ_.call(null,this52472__$1.prefix,other52473.prefix)) && (cljs.core._EQ_.call(null,this52472__$1.per_line_prefix,other52473.per_line_prefix)) && (cljs.core._EQ_.call(null,this52472__$1.suffix,other52473.suffix)) && (cljs.core._EQ_.call(null,this52472__$1.logical_block_callback,other52473.logical_block_callback)) && (cljs.core._EQ_.call(null,this52472__$1.__extmap,other52473.__extmap)));
});

cljs.pprint.logical_block.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, [new cljs.core.Keyword(null,"suffix","suffix",367373057),null,new cljs.core.Keyword(null,"indent","indent",-148200125),null,new cljs.core.Keyword(null,"parent","parent",-878878779),null,new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),null,new cljs.core.Keyword(null,"start-col","start-col",668080143),null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

cljs.pprint.logical_block.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__52470){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__52476 = cljs.core.keyword_identical_QMARK_;
var expr__52477 = k__4198__auto__;
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"parent","parent",-878878779),expr__52477))){
return (new cljs.pprint.logical_block(G__52470,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"section","section",-300141526),expr__52477))){
return (new cljs.pprint.logical_block(self__.parent,G__52470,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143),expr__52477))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,G__52470,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125),expr__52477))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,G__52470,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),expr__52477))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,G__52470,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),expr__52477))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,G__52470,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),expr__52477))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,G__52470,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),expr__52477))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,G__52470,self__.suffix,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"suffix","suffix",367373057),expr__52477))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,G__52470,self__.logical_block_callback,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52476.call(null,new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),expr__52477))){
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,G__52470,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__52470),null));
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
});

cljs.pprint.logical_block.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"parent","parent",-878878779),self__.parent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"section","section",-300141526),self__.section,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-col","start-col",668080143),self__.start_col,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"indent","indent",-148200125),self__.indent,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),self__.done_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),self__.intra_block_nl,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"prefix","prefix",-265908465),self__.prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),self__.per_line_prefix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"suffix","suffix",367373057),self__.suffix,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194),self__.logical_block_callback,null))], null),self__.__extmap));
});

cljs.pprint.logical_block.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__52470){
var self__ = this;
var this__4189__auto____$1 = this;
return (new cljs.pprint.logical_block(self__.parent,self__.section,self__.start_col,self__.indent,self__.done_nl,self__.intra_block_nl,self__.prefix,self__.per_line_prefix,self__.suffix,self__.logical_block_callback,G__52470,self__.__extmap,self__.__hash));
});

cljs.pprint.logical_block.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

cljs.pprint.logical_block.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parent","parent",761652748,null),new cljs.core.Symbol(null,"section","section",1340390001,null),new cljs.core.Symbol(null,"start-col","start-col",-1986355626,null),new cljs.core.Symbol(null,"indent","indent",1492331402,null),new cljs.core.Symbol(null,"done-nl","done-nl",1259507187,null),new cljs.core.Symbol(null,"intra-block-nl","intra-block-nl",-845608894,null),new cljs.core.Symbol(null,"prefix","prefix",1374623062,null),new cljs.core.Symbol(null,"per-line-prefix","per-line-prefix",-1807493956,null),new cljs.core.Symbol(null,"suffix","suffix",2007904584,null),new cljs.core.Symbol(null,"logical-block-callback","logical-block-callback",-1041744575,null)], null);
});

cljs.pprint.logical_block.cljs$lang$type = true;

cljs.pprint.logical_block.cljs$lang$ctorPrSeq = (function (this__4226__auto__){
return (new cljs.core.List(null,"cljs.pprint/logical-block",null,(1),null));
});

cljs.pprint.logical_block.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){
return cljs.core._write.call(null,writer__4227__auto__,"cljs.pprint/logical-block");
});

/**
 * Positional factory function for cljs.pprint/logical-block.
 */
cljs.pprint.__GT_logical_block = (function cljs$pprint$__GT_logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback){
return (new cljs.pprint.logical_block(parent,section,start_col,indent,done_nl,intra_block_nl,prefix,per_line_prefix,suffix,logical_block_callback,null,null,null));
});

/**
 * Factory function for cljs.pprint/logical-block, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_logical_block = (function cljs$pprint$map__GT_logical_block(G__52474){
return (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(G__52474),new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(G__52474),new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(G__52474),new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(G__52474),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(G__52474),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(G__52474),new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(G__52474),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(G__52474),new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(G__52474),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(G__52474),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52474,new cljs.core.Keyword(null,"parent","parent",-878878779),new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"start-col","start-col",668080143),new cljs.core.Keyword(null,"indent","indent",-148200125),new cljs.core.Keyword(null,"done-nl","done-nl",-381024340),new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875),new cljs.core.Keyword(null,"prefix","prefix",-265908465),new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194))),null));
});

cljs.pprint.ancestor_QMARK_ = (function cljs$pprint$ancestor_QMARK_(parent,child){
var child__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child);
while(true){
if((child__$1 == null)){
return false;
} else {
if((parent === child__$1)){
return true;
} else {
var G__52480 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(child__$1);
child__$1 = G__52480;
continue;

}
}
break;
}
});
cljs.pprint.buffer_length = (function cljs$pprint$buffer_length(l){
var l__$1 = cljs.core.seq.call(null,l);
if(l__$1){
return (new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,l__$1)) - new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,l__$1)));
} else {
return (0);
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.buffer_blob = (function (type_tag,data,trailing_white_space,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.data = data;
this.trailing_white_space = trailing_white_space;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

cljs.pprint.buffer_blob.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k52482,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__52486 = k52482;
var G__52486__$1 = (((G__52486 instanceof cljs.core.Keyword))?G__52486.fqn:null);
switch (G__52486__$1) {
case "type-tag":
return self__.type_tag;

break;
case "data":
return self__.data;

break;
case "trailing-white-space":
return self__.trailing_white_space;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52482,else__4193__auto__);

}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#cljs.pprint.buffer-blob{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52481){
var self__ = this;
var G__52481__$1 = this;
return (new cljs.core.RecordIter((0),G__52481__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (1809113693 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52483,other52484){
var self__ = this;
var this52483__$1 = this;
return ((!((other52484 == null))) && ((this52483__$1.constructor === other52484.constructor)) && (cljs.core._EQ_.call(null,this52483__$1.type_tag,other52484.type_tag)) && (cljs.core._EQ_.call(null,this52483__$1.data,other52484.data)) && (cljs.core._EQ_.call(null,this52483__$1.trailing_white_space,other52484.trailing_white_space)) && (cljs.core._EQ_.call(null,this52483__$1.start_pos,other52484.start_pos)) && (cljs.core._EQ_.call(null,this52483__$1.end_pos,other52484.end_pos)) && (cljs.core._EQ_.call(null,this52483__$1.__extmap,other52484.__extmap)));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__52481){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__52487 = cljs.core.keyword_identical_QMARK_;
var expr__52488 = k__4198__auto__;
if(cljs.core.truth_(pred__52487.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__52488))){
return (new cljs.pprint.buffer_blob(G__52481,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52487.call(null,new cljs.core.Keyword(null,"data","data",-232669377),expr__52488))){
return (new cljs.pprint.buffer_blob(self__.type_tag,G__52481,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52487.call(null,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),expr__52488))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,G__52481,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52487.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__52488))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,G__52481,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52487.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__52488))){
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,G__52481,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__52481),null));
}
}
}
}
}
});

cljs.pprint.buffer_blob.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),self__.trailing_white_space,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.buffer_blob.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__52481){
var self__ = this;
var this__4189__auto____$1 = this;
return (new cljs.pprint.buffer_blob(self__.type_tag,self__.data,self__.trailing_white_space,self__.start_pos,self__.end_pos,G__52481,self__.__extmap,self__.__hash));
});

cljs.pprint.buffer_blob.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

cljs.pprint.buffer_blob.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"trailing-white-space","trailing-white-space",-1158428773,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.buffer_blob.cljs$lang$type = true;

cljs.pprint.buffer_blob.cljs$lang$ctorPrSeq = (function (this__4226__auto__){
return (new cljs.core.List(null,"cljs.pprint/buffer-blob",null,(1),null));
});

cljs.pprint.buffer_blob.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){
return cljs.core._write.call(null,writer__4227__auto__,"cljs.pprint/buffer-blob");
});

/**
 * Positional factory function for cljs.pprint/buffer-blob.
 */
cljs.pprint.__GT_buffer_blob = (function cljs$pprint$__GT_buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(type_tag,data,trailing_white_space,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/buffer-blob, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_buffer_blob = (function cljs$pprint$map__GT_buffer_blob(G__52485){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__52485),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__52485),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(G__52485),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__52485),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__52485),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52485,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_buffer_blob = (function cljs$pprint$make_buffer_blob(data,trailing_white_space,start_pos,end_pos){
return (new cljs.pprint.buffer_blob(new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),data,trailing_white_space,start_pos,end_pos,null,null,null));
});

cljs.pprint.buffer_blob_QMARK_ = (function cljs$pprint$buffer_blob_QMARK_(x__47838__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__47838__auto__),new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.nl_t = (function (type_tag,type,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.type = type;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

cljs.pprint.nl_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k52492,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__52496 = k52492;
var G__52496__$1 = (((G__52496 instanceof cljs.core.Keyword))?G__52496.fqn:null);
switch (G__52496__$1) {
case "type-tag":
return self__.type_tag;

break;
case "type":
return self__.type;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52492,else__4193__auto__);

}
});

cljs.pprint.nl_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#cljs.pprint.nl-t{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type","type",1174270348),self__.type],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52491){
var self__ = this;
var G__52491__$1 = this;
return (new cljs.core.RecordIter((0),G__52491__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.nl_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.nl_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (5 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-1640656800 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

cljs.pprint.nl_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52493,other52494){
var self__ = this;
var this52493__$1 = this;
return ((!((other52494 == null))) && ((this52493__$1.constructor === other52494.constructor)) && (cljs.core._EQ_.call(null,this52493__$1.type_tag,other52494.type_tag)) && (cljs.core._EQ_.call(null,this52493__$1.type,other52494.type)) && (cljs.core._EQ_.call(null,this52493__$1.logical_block,other52494.logical_block)) && (cljs.core._EQ_.call(null,this52493__$1.start_pos,other52494.start_pos)) && (cljs.core._EQ_.call(null,this52493__$1.end_pos,other52494.end_pos)) && (cljs.core._EQ_.call(null,this52493__$1.__extmap,other52494.__extmap)));
});

cljs.pprint.nl_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"type","type",1174270348),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

cljs.pprint.nl_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__52491){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__52497 = cljs.core.keyword_identical_QMARK_;
var expr__52498 = k__4198__auto__;
if(cljs.core.truth_(pred__52497.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__52498))){
return (new cljs.pprint.nl_t(G__52491,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52497.call(null,new cljs.core.Keyword(null,"type","type",1174270348),expr__52498))){
return (new cljs.pprint.nl_t(self__.type_tag,G__52491,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52497.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__52498))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,G__52491,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52497.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__52498))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,G__52491,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52497.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__52498))){
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,G__52491,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__52491),null));
}
}
}
}
}
});

cljs.pprint.nl_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type","type",1174270348),self__.type,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.nl_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__52491){
var self__ = this;
var this__4189__auto____$1 = this;
return (new cljs.pprint.nl_t(self__.type_tag,self__.type,self__.logical_block,self__.start_pos,self__.end_pos,G__52491,self__.__extmap,self__.__hash));
});

cljs.pprint.nl_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

cljs.pprint.nl_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"type","type",-1480165421,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.nl_t.cljs$lang$type = true;

cljs.pprint.nl_t.cljs$lang$ctorPrSeq = (function (this__4226__auto__){
return (new cljs.core.List(null,"cljs.pprint/nl-t",null,(1),null));
});

cljs.pprint.nl_t.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){
return cljs.core._write.call(null,writer__4227__auto__,"cljs.pprint/nl-t");
});

/**
 * Positional factory function for cljs.pprint/nl-t.
 */
cljs.pprint.__GT_nl_t = (function cljs$pprint$__GT_nl_t(type_tag,type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(type_tag,type,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/nl-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_nl_t = (function cljs$pprint$map__GT_nl_t(G__52495){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__52495),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(G__52495),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__52495),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__52495),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__52495),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52495,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_nl_t = (function cljs$pprint$make_nl_t(type,logical_block,start_pos,end_pos){
return (new cljs.pprint.nl_t(new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),type,logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.nl_t_QMARK_ = (function cljs$pprint$nl_t_QMARK_(x__47838__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__47838__auto__),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.start_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

cljs.pprint.start_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k52502,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__52506 = k52502;
var G__52506__$1 = (((G__52506 instanceof cljs.core.Keyword))?G__52506.fqn:null);
switch (G__52506__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52502,else__4193__auto__);

}
});

cljs.pprint.start_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#cljs.pprint.start-block-t{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52501){
var self__ = this;
var G__52501__$1 = this;
return (new cljs.core.RecordIter((0),G__52501__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.start_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-414877272 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52503,other52504){
var self__ = this;
var this52503__$1 = this;
return ((!((other52504 == null))) && ((this52503__$1.constructor === other52504.constructor)) && (cljs.core._EQ_.call(null,this52503__$1.type_tag,other52504.type_tag)) && (cljs.core._EQ_.call(null,this52503__$1.logical_block,other52504.logical_block)) && (cljs.core._EQ_.call(null,this52503__$1.start_pos,other52504.start_pos)) && (cljs.core._EQ_.call(null,this52503__$1.end_pos,other52504.end_pos)) && (cljs.core._EQ_.call(null,this52503__$1.__extmap,other52504.__extmap)));
});

cljs.pprint.start_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

cljs.pprint.start_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__52501){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__52507 = cljs.core.keyword_identical_QMARK_;
var expr__52508 = k__4198__auto__;
if(cljs.core.truth_(pred__52507.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__52508))){
return (new cljs.pprint.start_block_t(G__52501,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52507.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__52508))){
return (new cljs.pprint.start_block_t(self__.type_tag,G__52501,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52507.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__52508))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,G__52501,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52507.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__52508))){
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__52501,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__52501),null));
}
}
}
}
});

cljs.pprint.start_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.start_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__52501){
var self__ = this;
var this__4189__auto____$1 = this;
return (new cljs.pprint.start_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__52501,self__.__extmap,self__.__hash));
});

cljs.pprint.start_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

cljs.pprint.start_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.start_block_t.cljs$lang$type = true;

cljs.pprint.start_block_t.cljs$lang$ctorPrSeq = (function (this__4226__auto__){
return (new cljs.core.List(null,"cljs.pprint/start-block-t",null,(1),null));
});

cljs.pprint.start_block_t.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){
return cljs.core._write.call(null,writer__4227__auto__,"cljs.pprint/start-block-t");
});

/**
 * Positional factory function for cljs.pprint/start-block-t.
 */
cljs.pprint.__GT_start_block_t = (function cljs$pprint$__GT_start_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/start-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_start_block_t = (function cljs$pprint$map__GT_start_block_t(G__52505){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__52505),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__52505),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__52505),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__52505),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52505,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_start_block_t = (function cljs$pprint$make_start_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.start_block_t(new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.start_block_t_QMARK_ = (function cljs$pprint$start_block_t_QMARK_(x__47838__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__47838__auto__),new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.end_block_t = (function (type_tag,logical_block,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

cljs.pprint.end_block_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k52512,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__52516 = k52512;
var G__52516__$1 = (((G__52516 instanceof cljs.core.Keyword))?G__52516.fqn:null);
switch (G__52516__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52512,else__4193__auto__);

}
});

cljs.pprint.end_block_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#cljs.pprint.end-block-t{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52511){
var self__ = this;
var G__52511__$1 = this;
return (new cljs.core.RecordIter((0),G__52511__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.end_block_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (1365867980 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52513,other52514){
var self__ = this;
var this52513__$1 = this;
return ((!((other52514 == null))) && ((this52513__$1.constructor === other52514.constructor)) && (cljs.core._EQ_.call(null,this52513__$1.type_tag,other52514.type_tag)) && (cljs.core._EQ_.call(null,this52513__$1.logical_block,other52514.logical_block)) && (cljs.core._EQ_.call(null,this52513__$1.start_pos,other52514.start_pos)) && (cljs.core._EQ_.call(null,this52513__$1.end_pos,other52514.end_pos)) && (cljs.core._EQ_.call(null,this52513__$1.__extmap,other52514.__extmap)));
});

cljs.pprint.end_block_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

cljs.pprint.end_block_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__52511){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__52517 = cljs.core.keyword_identical_QMARK_;
var expr__52518 = k__4198__auto__;
if(cljs.core.truth_(pred__52517.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__52518))){
return (new cljs.pprint.end_block_t(G__52511,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52517.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__52518))){
return (new cljs.pprint.end_block_t(self__.type_tag,G__52511,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52517.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__52518))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,G__52511,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52517.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__52518))){
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,G__52511,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__52511),null));
}
}
}
}
});

cljs.pprint.end_block_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.end_block_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__52511){
var self__ = this;
var this__4189__auto____$1 = this;
return (new cljs.pprint.end_block_t(self__.type_tag,self__.logical_block,self__.start_pos,self__.end_pos,G__52511,self__.__extmap,self__.__hash));
});

cljs.pprint.end_block_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

cljs.pprint.end_block_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.end_block_t.cljs$lang$type = true;

cljs.pprint.end_block_t.cljs$lang$ctorPrSeq = (function (this__4226__auto__){
return (new cljs.core.List(null,"cljs.pprint/end-block-t",null,(1),null));
});

cljs.pprint.end_block_t.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){
return cljs.core._write.call(null,writer__4227__auto__,"cljs.pprint/end-block-t");
});

/**
 * Positional factory function for cljs.pprint/end-block-t.
 */
cljs.pprint.__GT_end_block_t = (function cljs$pprint$__GT_end_block_t(type_tag,logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(type_tag,logical_block,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/end-block-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_end_block_t = (function cljs$pprint$map__GT_end_block_t(G__52515){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__52515),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__52515),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__52515),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__52515),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52515,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_end_block_t = (function cljs$pprint$make_end_block_t(logical_block,start_pos,end_pos){
return (new cljs.pprint.end_block_t(new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),logical_block,start_pos,end_pos,null,null,null));
});

cljs.pprint.end_block_t_QMARK_ = (function cljs$pprint$end_block_t_QMARK_(x__47838__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__47838__auto__),new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.indent_t = (function (type_tag,logical_block,relative_to,offset,start_pos,end_pos,__meta,__extmap,__hash){
this.type_tag = type_tag;
this.logical_block = logical_block;
this.relative_to = relative_to;
this.offset = offset;
this.start_pos = start_pos;
this.end_pos = end_pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

cljs.pprint.indent_t.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k52522,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__52526 = k52522;
var G__52526__$1 = (((G__52526 instanceof cljs.core.Keyword))?G__52526.fqn:null);
switch (G__52526__$1) {
case "type-tag":
return self__.type_tag;

break;
case "logical-block":
return self__.logical_block;

break;
case "relative-to":
return self__.relative_to;

break;
case "offset":
return self__.offset;

break;
case "start-pos":
return self__.start_pos;

break;
case "end-pos":
return self__.end_pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52522,else__4193__auto__);

}
});

cljs.pprint.indent_t.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#cljs.pprint.indent-t{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos],null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52521){
var self__ = this;
var G__52521__$1 = this;
return (new cljs.core.RecordIter((0),G__52521__$1,6,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.indent_t.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.indent_t.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (6 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-1602780238 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

cljs.pprint.indent_t.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52523,other52524){
var self__ = this;
var this52523__$1 = this;
return ((!((other52524 == null))) && ((this52523__$1.constructor === other52524.constructor)) && (cljs.core._EQ_.call(null,this52523__$1.type_tag,other52524.type_tag)) && (cljs.core._EQ_.call(null,this52523__$1.logical_block,other52524.logical_block)) && (cljs.core._EQ_.call(null,this52523__$1.relative_to,other52524.relative_to)) && (cljs.core._EQ_.call(null,this52523__$1.offset,other52524.offset)) && (cljs.core._EQ_.call(null,this52523__$1.start_pos,other52524.start_pos)) && (cljs.core._EQ_.call(null,this52523__$1.end_pos,other52524.end_pos)) && (cljs.core._EQ_.call(null,this52523__$1.__extmap,other52524.__extmap)));
});

cljs.pprint.indent_t.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

cljs.pprint.indent_t.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__52521){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__52527 = cljs.core.keyword_identical_QMARK_;
var expr__52528 = k__4198__auto__;
if(cljs.core.truth_(pred__52527.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),expr__52528))){
return (new cljs.pprint.indent_t(G__52521,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52527.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),expr__52528))){
return (new cljs.pprint.indent_t(self__.type_tag,G__52521,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52527.call(null,new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),expr__52528))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,G__52521,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52527.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__52528))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,G__52521,self__.start_pos,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52527.call(null,new cljs.core.Keyword(null,"start-pos","start-pos",668789086),expr__52528))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,G__52521,self__.end_pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52527.call(null,new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),expr__52528))){
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,G__52521,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__52521),null));
}
}
}
}
}
}
});

cljs.pprint.indent_t.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),self__.type_tag,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),self__.logical_block,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),self__.relative_to,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"start-pos","start-pos",668789086),self__.start_pos,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926),self__.end_pos,null))], null),self__.__extmap));
});

cljs.pprint.indent_t.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__52521){
var self__ = this;
var this__4189__auto____$1 = this;
return (new cljs.pprint.indent_t(self__.type_tag,self__.logical_block,self__.relative_to,self__.offset,self__.start_pos,self__.end_pos,G__52521,self__.__extmap,self__.__hash));
});

cljs.pprint.indent_t.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

cljs.pprint.indent_t.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"type-tag","type-tag",-233331740,null),new cljs.core.Symbol(null,"logical-block","logical-block",1059508963,null),new cljs.core.Symbol(null,"relative-to","relative-to",1170431476,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null),new cljs.core.Symbol(null,"start-pos","start-pos",-1985646683,null),new cljs.core.Symbol(null,"end-pos","end-pos",-3352399,null)], null);
});

cljs.pprint.indent_t.cljs$lang$type = true;

cljs.pprint.indent_t.cljs$lang$ctorPrSeq = (function (this__4226__auto__){
return (new cljs.core.List(null,"cljs.pprint/indent-t",null,(1),null));
});

cljs.pprint.indent_t.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){
return cljs.core._write.call(null,writer__4227__auto__,"cljs.pprint/indent-t");
});

/**
 * Positional factory function for cljs.pprint/indent-t.
 */
cljs.pprint.__GT_indent_t = (function cljs$pprint$__GT_indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(type_tag,logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/indent-t, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_indent_t = (function cljs$pprint$map__GT_indent_t(G__52525){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(G__52525),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(G__52525),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(G__52525),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__52525),new cljs.core.Keyword(null,"start-pos","start-pos",668789086).cljs$core$IFn$_invoke$arity$1(G__52525),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926).cljs$core$IFn$_invoke$arity$1(G__52525),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52525,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267),new cljs.core.Keyword(null,"logical-block","logical-block",-581022564),new cljs.core.Keyword(null,"relative-to","relative-to",-470100051),new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"start-pos","start-pos",668789086),new cljs.core.Keyword(null,"end-pos","end-pos",-1643883926))),null));
});


cljs.pprint.make_indent_t = (function cljs$pprint$make_indent_t(logical_block,relative_to,offset,start_pos,end_pos){
return (new cljs.pprint.indent_t(new cljs.core.Keyword(null,"indent-t","indent-t",528318969),logical_block,relative_to,offset,start_pos,end_pos,null,null,null));
});

cljs.pprint.indent_t_QMARK_ = (function cljs$pprint$indent_t_QMARK_(x__47838__auto__){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(x__47838__auto__),new cljs.core.Keyword(null,"indent-t","indent-t",528318969));
});
cljs.pprint.pp_newline = (function cljs$pprint$pp_newline(){
return "\n";
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.write_token !== 'undefined')){
} else {
cljs.pprint.write_token = (function (){var method_table__4400__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","write-token"),((function (method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__){
return (function (p1__52532_SHARP_,p2__52531_SHARP_){
return new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(p2__52531_SHARP_);
});})(method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"start-block-t","start-block-t",-373430594),(function (this$,token){
var temp__5457__auto___52533 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___52533)){
var cb_52534 = temp__5457__auto___52533;
cb_52534.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
var temp__5457__auto___52535 = new cljs.core.Keyword(null,"prefix","prefix",-265908465).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(temp__5457__auto___52535)){
var prefix_52536 = temp__5457__auto___52535;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix_52536);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"end-block-t","end-block-t",1544648735),(function (this$,token){
var temp__5457__auto___52537 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___52537)){
var cb_52538 = temp__5457__auto___52537;
cb_52538.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}

var temp__5457__auto__ = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token));
if(cljs.core.truth_(temp__5457__auto__)){
var suffix = temp__5457__auto__;
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
return null;
}
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"indent-t","indent-t",528318969),(function (this$,token){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(token) + (function (){var pred__52539 = cljs.core._EQ_;
var expr__52540 = new cljs.core.Keyword(null,"relative-to","relative-to",-470100051).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(pred__52539.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__52540))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__52539.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__52540))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52540)].join('')));
}
}
})()));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"buffer-blob","buffer-blob",-1830112173),(function (this$,token){
return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(token));
}));
cljs.core._add_method.call(null,cljs.pprint.write_token,new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114),(function (this$,token){
if(cljs.core.truth_((function (){var or__3936__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"mandatory","mandatory",542802336));
if(or__3936__auto__){
return or__3936__auto__;
} else {
var and__3925__auto__ = !(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"fill","fill",883462889)));
if(and__3925__auto__){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(token)));
} else {
return and__3925__auto__;
}
}
})())){
cljs.pprint.emit_nl.call(null,this$,token);
} else {
var temp__5455__auto___52542 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto___52542)){
var tws_52543 = temp__5455__auto___52542;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52543);
} else {
}
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
}));
cljs.pprint.write_tokens = (function cljs$pprint$write_tokens(this$,tokens,force_trailing_whitespace){
var seq__52544 = cljs.core.seq.call(null,tokens);
var chunk__52545 = null;
var count__52546 = (0);
var i__52547 = (0);
while(true){
if((i__52547 < count__52546)){
var token = cljs.core._nth.call(null,chunk__52545,i__52547);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__5455__auto___52548 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto___52548)){
var tws_52549 = temp__5455__auto___52548;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52549);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_52550 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__3925__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3925__auto__)){
return tws_52550;
} else {
return and__3925__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52550);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__52551 = seq__52544;
var G__52552 = chunk__52545;
var G__52553 = count__52546;
var G__52554 = (i__52547 + (1));
seq__52544 = G__52551;
chunk__52545 = G__52552;
count__52546 = G__52553;
i__52547 = G__52554;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__52544);
if(temp__5457__auto__){
var seq__52544__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52544__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__52544__$1);
var G__52555 = cljs.core.chunk_rest.call(null,seq__52544__$1);
var G__52556 = c__4337__auto__;
var G__52557 = cljs.core.count.call(null,c__4337__auto__);
var G__52558 = (0);
seq__52544 = G__52555;
chunk__52545 = G__52556;
count__52546 = G__52557;
i__52547 = G__52558;
continue;
} else {
var token = cljs.core.first.call(null,seq__52544__$1);
if(!(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type-tag","type-tag",-1873863267).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"nl-t","nl-t",-1608382114)))){
var temp__5455__auto___52559 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto___52559)){
var tws_52560 = temp__5455__auto___52559;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52560);
} else {
}
} else {
}

cljs.pprint.write_token.call(null,this$,token);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(token));

var tws_52561 = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_((function (){var and__3925__auto__ = force_trailing_whitespace;
if(cljs.core.truth_(and__3925__auto__)){
return tws_52561;
} else {
return and__3925__auto__;
}
})())){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws_52561);

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
}


var G__52562 = cljs.core.next.call(null,seq__52544__$1);
var G__52563 = null;
var G__52564 = (0);
var G__52565 = (0);
seq__52544 = G__52562;
chunk__52545 = G__52563;
count__52546 = G__52564;
i__52547 = G__52565;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.pprint.tokens_fit_QMARK_ = (function cljs$pprint$tokens_fit_QMARK_(this$,tokens){
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
return (((maxcol == null)) || (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))) + cljs.pprint.buffer_length.call(null,tokens)) < maxcol)));
});
cljs.pprint.linear_nl_QMARK_ = (function cljs$pprint$linear_nl_QMARK_(this$,lb,section){
var or__3936__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,section));
}
});
cljs.pprint.miser_nl_QMARK_ = (function cljs$pprint$miser_nl_QMARK_(this$,lb,section){
var miser_width = cljs.pprint.get_miser_width.call(null,this$);
var maxcol = cljs.pprint.get_max_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
var and__3925__auto__ = miser_width;
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = maxcol;
if(cljs.core.truth_(and__3925__auto____$1)){
var and__3925__auto____$2 = (cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb)) >= (maxcol - miser_width));
if(and__3925__auto____$2){
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
} else {
return and__3925__auto____$2;
}
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.emit_nl_QMARK_ !== 'undefined')){
} else {
cljs.pprint.emit_nl_QMARK_ = (function (){var method_table__4400__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","emit-nl?"),((function (method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__){
return (function (t,_,___$1,___$2){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(t);
});})(method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__,hierarchy__4404__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"linear","linear",872268697),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.linear_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"miser","miser",-556060186),(function (newl,this$,section,_){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"fill","fill",883462889),(function (newl,this$,section,subsection){
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(newl);
var or__3936__auto__ = cljs.core.deref.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,subsection));
if(or__3936__auto____$1){
return or__3936__auto____$1;
} else {
return cljs.pprint.miser_nl_QMARK_.call(null,this$,lb,section);
}
}
}));
cljs.core._add_method.call(null,cljs.pprint.emit_nl_QMARK_,new cljs.core.Keyword(null,"mandatory","mandatory",542802336),(function (_,___$1,___$2,___$3){
return true;
}));
cljs.pprint.get_section = (function cljs$pprint$get_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__52566_SHARP_){
return cljs.core.not.call(null,(function (){var and__3925__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__52566_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.pprint.ancestor_QMARK_.call(null,new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__52566_SHARP_),lb);
} else {
return and__3925__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [section,cljs.core.seq.call(null,cljs.core.drop.call(null,(cljs.core.count.call(null,section) + (1)),buffer))], null);
});
cljs.pprint.get_sub_section = (function cljs$pprint$get_sub_section(buffer){
var nl = cljs.core.first.call(null,buffer);
var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var section = cljs.core.seq.call(null,cljs.core.take_while.call(null,((function (nl,lb){
return (function (p1__52567_SHARP_){
var nl_lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(p1__52567_SHARP_);
return cljs.core.not.call(null,(function (){var and__3925__auto__ = cljs.pprint.nl_t_QMARK_.call(null,p1__52567_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
var or__3936__auto__ = cljs.core._EQ_.call(null,nl_lb,lb);
if(or__3936__auto__){
return or__3936__auto__;
} else {
return cljs.pprint.ancestor_QMARK_.call(null,nl_lb,lb);
}
} else {
return and__3925__auto__;
}
})());
});})(nl,lb))
,cljs.core.next.call(null,buffer)));
return section;
});
cljs.pprint.update_nl_state = (function cljs$pprint$update_nl_state(lb){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb),true);

var lb__$1 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb);
while(true){
if(cljs.core.truth_(lb__$1)){
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"done-nl","done-nl",-381024340).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"intra-block-nl","intra-block-nl",1808826875).cljs$core$IFn$_invoke$arity$1(lb__$1),true);

var G__52568 = new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb__$1);
lb__$1 = G__52568;
continue;
} else {
return null;
}
break;
}
});
cljs.pprint.emit_nl = (function cljs$pprint$emit_nl(this$,nl){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);

var lb = new cljs.core.Keyword(null,"logical-block","logical-block",-581022564).cljs$core$IFn$_invoke$arity$1(nl);
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var istr_52569 = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(cljs.core.deref.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb)) - cljs.core.count.call(null,prefix))," "));
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),istr_52569);

return cljs.pprint.update_nl_state.call(null,lb);
});
cljs.pprint.split_at_newline = (function cljs$pprint$split_at_newline(tokens){
var pre = cljs.core.seq.call(null,cljs.core.take_while.call(null,(function (p1__52570_SHARP_){
return cljs.core.not.call(null,cljs.pprint.nl_t_QMARK_.call(null,p1__52570_SHARP_));
}),tokens));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pre,cljs.core.seq.call(null,cljs.core.drop.call(null,cljs.core.count.call(null,pre),tokens))], null);
});
cljs.pprint.write_token_string = (function cljs$pprint$write_token_string(this$,tokens){
var vec__52571 = cljs.pprint.split_at_newline.call(null,tokens);
var a = cljs.core.nth.call(null,vec__52571,(0),null);
var b = cljs.core.nth.call(null,vec__52571,(1),null);
if(cljs.core.truth_(a)){
cljs.pprint.write_tokens.call(null,this$,a,false);
} else {
}

if(cljs.core.truth_(b)){
var vec__52574 = cljs.pprint.get_section.call(null,b);
var section = cljs.core.nth.call(null,vec__52574,(0),null);
var remainder = cljs.core.nth.call(null,vec__52574,(1),null);
var newl = cljs.core.first.call(null,b);
var do_nl = cljs.pprint.emit_nl_QMARK_.call(null,newl,this$,section,cljs.pprint.get_sub_section.call(null,b));
var result = (cljs.core.truth_(do_nl)?(function (){
cljs.pprint.emit_nl.call(null,this$,newl);

return cljs.core.next.call(null,b);
})()
:b);
var long_section = cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,result));
var result__$1 = ((long_section)?(function (){var rem2 = cljs.pprint.write_token_string.call(null,this$,section);
if(cljs.core._EQ_.call(null,rem2,section)){
cljs.pprint.write_tokens.call(null,this$,section,false);

return remainder;
} else {
return cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.concat.call(null,rem2,remainder));
}
})():result);
return result__$1;
} else {
return null;
}
});
cljs.pprint.write_line = (function cljs$pprint$write_line(this$){
var buffer = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
while(true){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,buffer));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,buffer))){
var new_buffer = cljs.pprint.write_token_string.call(null,this$,buffer);
if(!((buffer === new_buffer))){
var G__52577 = new_buffer;
buffer = G__52577;
continue;
} else {
return null;
}
} else {
return null;
}
break;
}
});
cljs.pprint.add_to_buffer = (function cljs$pprint$add_to_buffer(this$,token){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.conj.call(null,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),token));

if(cljs.core.not.call(null,cljs.pprint.tokens_fit_QMARK_.call(null,this$,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))))){
return cljs.pprint.write_line.call(null,this$);
} else {
return null;
}
});
cljs.pprint.write_buffered_output = (function cljs$pprint$write_buffered_output(this$){
cljs.pprint.write_line.call(null,this$);

var temp__5455__auto__ = new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5455__auto__)){
var buf = temp__5455__auto__;
cljs.pprint.write_tokens.call(null,this$,buf,true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
cljs.pprint.write_white_space = (function cljs$pprint$write_white_space(this$){
var temp__5457__auto__ = new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto__)){
var tws = temp__5457__auto__;
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),tws);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),null);
} else {
return null;
}
});
cljs.pprint.write_initial_lines = (function cljs$pprint$write_initial_lines(this$,s){
var lines = clojure.string.split.call(null,s,"\n",(-1));
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,lines),(1))){
return s;
} else {
var prefix = new cljs.core.Keyword(null,"per-line-prefix","per-line-prefix",846941813).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)))));
var l = cljs.core.first.call(null,lines);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))))){
var oldpos_52582 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_52583 = (oldpos_52582 + cljs.core.count.call(null,l));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_52583);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,l,null,oldpos_52582,newpos_52583));

cljs.pprint.write_buffered_output.call(null,this$);
} else {
cljs.pprint.write_white_space.call(null,this$);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l);
}

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),"\n");

var seq__52578_52584 = cljs.core.seq.call(null,cljs.core.next.call(null,cljs.core.butlast.call(null,lines)));
var chunk__52579_52585 = null;
var count__52580_52586 = (0);
var i__52581_52587 = (0);
while(true){
if((i__52581_52587 < count__52580_52586)){
var l_52588__$1 = cljs.core._nth.call(null,chunk__52579_52585,i__52581_52587);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_52588__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__52589 = seq__52578_52584;
var G__52590 = chunk__52579_52585;
var G__52591 = count__52580_52586;
var G__52592 = (i__52581_52587 + (1));
seq__52578_52584 = G__52589;
chunk__52579_52585 = G__52590;
count__52580_52586 = G__52591;
i__52581_52587 = G__52592;
continue;
} else {
var temp__5457__auto___52593 = cljs.core.seq.call(null,seq__52578_52584);
if(temp__5457__auto___52593){
var seq__52578_52594__$1 = temp__5457__auto___52593;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__52578_52594__$1)){
var c__4337__auto___52595 = cljs.core.chunk_first.call(null,seq__52578_52594__$1);
var G__52596 = cljs.core.chunk_rest.call(null,seq__52578_52594__$1);
var G__52597 = c__4337__auto___52595;
var G__52598 = cljs.core.count.call(null,c__4337__auto___52595);
var G__52599 = (0);
seq__52578_52584 = G__52596;
chunk__52579_52585 = G__52597;
count__52580_52586 = G__52598;
i__52581_52587 = G__52599;
continue;
} else {
var l_52600__$1 = cljs.core.first.call(null,seq__52578_52594__$1);
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),l_52600__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),cljs.pprint.pp_newline.call(null));

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}


var G__52601 = cljs.core.next.call(null,seq__52578_52594__$1);
var G__52602 = null;
var G__52603 = (0);
var G__52604 = (0);
seq__52578_52584 = G__52601;
chunk__52579_52585 = G__52602;
count__52580_52586 = G__52603;
i__52581_52587 = G__52604;
continue;
}
} else {
}
}
break;
}

cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"buffering","buffering",-876713613),new cljs.core.Keyword(null,"writing","writing",-1486865108));

return cljs.core.last.call(null,lines);
}
});
cljs.pprint.p_write_char = (function cljs$pprint$p_write_char(this$,c){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),c);
} else {
if(cljs.core._EQ_.call(null,c,"\n")){
return cljs.pprint.write_initial_lines.call(null,this$,"\n");
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (1));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_buffer_blob.call(null,cljs.core.char$.call(null,c),null,oldpos,newpos));
}
}
});
cljs.pprint.pretty_writer = (function cljs$pprint$pretty_writer(writer,max_columns,miser_width){
var lb = (new cljs.pprint.logical_block(null,null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),null,null,null,null,null,null,null));
var fields = cljs.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437),new cljs.core.Keyword(null,"buffer-block","buffer-block",-10937307),new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267),new cljs.core.Keyword(null,"sections","sections",-886710106),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.Keyword(null,"buffer-level","buffer-level",928864731),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[lb,miser_width,lb,true,null,new cljs.core.Keyword(null,"writing","writing",-1486865108),(0),null,cljs.pprint.column_writer.call(null,writer,max_columns),(1),cljs.core.PersistentVector.EMPTY]));
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.pprint.IPrettyFlush}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52605 = (function (writer,max_columns,miser_width,lb,fields,meta52606){
this.writer = writer;
this.max_columns = max_columns;
this.miser_width = miser_width;
this.lb = lb;
this.fields = fields;
this.meta52606 = meta52606;
this.cljs$lang$protocol_mask$partition0$ = 1074167808;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (lb,fields){
return (function (_52607,meta52606__$1){
var self__ = this;
var _52607__$1 = this;
return (new cljs.pprint.t_cljs$pprint52605(self__.writer,self__.max_columns,self__.miser_width,self__.lb,self__.fields,meta52606__$1));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52605.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (lb,fields){
return (function (_52607){
var self__ = this;
var _52607__$1 = this;
return self__.meta52606;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52605.prototype.cljs$core$IDeref$_deref$arity$1 = ((function (lb,fields){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.fields;
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52605.prototype.cljs$core$IWriter$_write$arity$2 = ((function (lb,fields){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52608 = cljs.core._EQ_;
var expr__52609 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52608.call(null,String,expr__52609))){
var s0 = cljs.pprint.write_initial_lines.call(null,this$__$1,x);
var s = clojure.string.replace_first.call(null,s0,/\s+$/,"");
var white_space = cljs.core.subs.call(null,s0,cljs.core.count.call(null,s));
var mode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
if(cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$__$1);

cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),s);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"trailing-white-space","trailing-white-space",1496006996),white_space);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1)));
var newpos = (oldpos + cljs.core.count.call(null,s0));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$__$1,cljs.pprint.make_buffer_blob.call(null,s,white_space,oldpos,newpos));
}
} else {
if(cljs.core.truth_(pred__52608.call(null,Number,expr__52609))){
return cljs.pprint.p_write_char.call(null,this$__$1,x);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52609)].join('')));
}
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52605.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
cljs.pprint._ppflush.call(null,this$__$1);

return cljs.core._flush.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))));
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52605.prototype.cljs$pprint$IPrettyFlush$ = cljs.core.PROTOCOL_SENTINEL;

cljs.pprint.t_cljs$pprint52605.prototype.cljs$pprint$IPrettyFlush$_ppflush$arity$1 = ((function (lb,fields){
return (function (this$){
var self__ = this;
var this$__$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),new cljs.core.Keyword(null,"buffering","buffering",-876713613))){
cljs.pprint.write_tokens.call(null,this$__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$__$1))),true);

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$__$1),cljs.core.assoc,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.PersistentVector.EMPTY);
} else {
return cljs.pprint.write_white_space.call(null,this$__$1);
}
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52605.getBasis = ((function (lb,fields){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"max-columns","max-columns",-912112507,null),new cljs.core.Symbol(null,"miser-width","miser-width",330482090,null),new cljs.core.Symbol(null,"lb","lb",950310490,null),new cljs.core.Symbol(null,"fields","fields",-291534703,null),new cljs.core.Symbol(null,"meta52606","meta52606",1115230337,null)], null);
});})(lb,fields))
;

cljs.pprint.t_cljs$pprint52605.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52605.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52605";

cljs.pprint.t_cljs$pprint52605.cljs$lang$ctorPrWriter = ((function (lb,fields){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.pprint/t_cljs$pprint52605");
});})(lb,fields))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52605.
 */
cljs.pprint.__GT_t_cljs$pprint52605 = ((function (lb,fields){
return (function cljs$pprint$pretty_writer_$___GT_t_cljs$pprint52605(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta52606){
return (new cljs.pprint.t_cljs$pprint52605(writer__$1,max_columns__$1,miser_width__$1,lb__$1,fields__$1,meta52606));
});})(lb,fields))
;

}

return (new cljs.pprint.t_cljs$pprint52605(writer,max_columns,miser_width,lb,fields,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.start_block = (function cljs$pprint$start_block(this$,prefix,per_line_prefix,suffix){
var lb = (new cljs.pprint.logical_block(new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),null,cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,(0)),cljs.core.atom.call(null,false),cljs.core.atom.call(null,false),prefix,per_line_prefix,suffix,null,null,null,null));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),lb);

if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

var temp__5457__auto___52611 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___52611)){
var cb_52612 = temp__5457__auto___52611;
cb_52612.call(null,new cljs.core.Keyword(null,"start","start",-355208981));
} else {
}

if(cljs.core.truth_(prefix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),prefix);
} else {
}

var col = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb),col);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),col);
} else {
var oldpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos = (oldpos + (cljs.core.truth_(prefix)?cljs.core.count.call(null,prefix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos);

return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_start_block_t.call(null,lb,oldpos,newpos));
}
});
cljs.pprint.end_block = (function cljs$pprint$end_block(this$){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(lb);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

if(cljs.core.truth_(suffix)){
cljs.core._write.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),suffix);
} else {
}

var temp__5457__auto___52613 = new cljs.core.Keyword(null,"logical-block-callback","logical-block-callback",1612691194).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core.truth_(temp__5457__auto___52613)){
var cb_52614 = temp__5457__auto___52613;
cb_52614.call(null,new cljs.core.Keyword(null,"end","end",-268185958));
} else {
}
} else {
var oldpos_52615 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
var newpos_52616 = (oldpos_52615 + (cljs.core.truth_(suffix)?cljs.core.count.call(null,suffix):(0)));
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"pos","pos",-864607220),newpos_52616);

cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_end_block_t.call(null,lb,oldpos_52615,newpos_52616));
}

return cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776),new cljs.core.Keyword(null,"parent","parent",-878878779).cljs$core$IFn$_invoke$arity$1(lb));
});
cljs.pprint.nl = (function cljs$pprint$nl(this$,type){
cljs.core.swap_BANG_.call(null,cljs.core.deref.call(null,this$),cljs.core.assoc,new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"buffering","buffering",-876713613));

var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_nl_t.call(null,type,new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),pos,pos));
});
cljs.pprint.indent = (function cljs$pprint$indent(this$,relative_to,offset){
var lb = new cljs.core.Keyword(null,"logical-blocks","logical-blocks",-1466339776).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))),new cljs.core.Keyword(null,"writing","writing",-1486865108))){
cljs.pprint.write_white_space.call(null,this$);

return cljs.core.reset_BANG_.call(null,new cljs.core.Keyword(null,"indent","indent",-148200125).cljs$core$IFn$_invoke$arity$1(lb),(offset + (function (){var pred__52617 = cljs.core._EQ_;
var expr__52618 = relative_to;
if(cljs.core.truth_(pred__52617.call(null,new cljs.core.Keyword(null,"block","block",664686210),expr__52618))){
return cljs.core.deref.call(null,new cljs.core.Keyword(null,"start-col","start-col",668080143).cljs$core$IFn$_invoke$arity$1(lb));
} else {
if(cljs.core.truth_(pred__52617.call(null,new cljs.core.Keyword(null,"current","current",-1088038603),expr__52618))){
return cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$))));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52618)].join('')));
}
}
})()));
} else {
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
return cljs.pprint.add_to_buffer.call(null,this$,cljs.pprint.make_indent_t.call(null,lb,relative_to,offset,pos,pos));
}
});
cljs.pprint.get_miser_width = (function cljs$pprint$get_miser_width(this$){
return new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,this$)));
});
/**
 * Bind to true if you want write to use pretty printing
 */
cljs.pprint._STAR_print_pretty_STAR_ = true;
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint._STAR_print_pprint_dispatch_STAR_ !== 'undefined')){
} else {
/**
 * The pretty print dispatch function. Use with-pprint-dispatch or
 * set-pprint-dispatch to modify.
 */
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = null;
}
/**
 * Pretty printing will try to avoid anything going beyond this column.
 * Set it to nil to have pprint let the line be arbitrarily long. This will ignore all
 * non-mandatory newlines.
 */
cljs.pprint._STAR_print_right_margin_STAR_ = (72);
/**
 * The column at which to enter miser style. Depending on the dispatch table,
 * miser style add newlines in more places to try to keep lines short allowing for further
 * levels of nesting.
 */
cljs.pprint._STAR_print_miser_width_STAR_ = (40);
/**
 * Maximum number of lines to print in a pretty print instance (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_lines_STAR_ = null;
/**
 * Mark circular structures (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_circle_STAR_ = null;
/**
 * Mark repeated structures rather than repeat them (N.B. This is not yet used)
 */
cljs.pprint._STAR_print_shared_STAR_ = null;
/**
 * Don't print namespaces with symbols. This is particularly useful when
 * pretty printing the results of macro expansions
 */
cljs.pprint._STAR_print_suppress_namespaces_STAR_ = null;
/**
 * Print a radix specifier in front of integers and rationals. If *print-base* is 2, 8,
 * or 16, then the radix specifier used is #b, #o, or #x, respectively. Otherwise the
 * radix specifier is in the form #XXr where XX is the decimal value of *print-base* 
 */
cljs.pprint._STAR_print_radix_STAR_ = null;
/**
 * The base to use for printing integers and rationals.
 */
cljs.pprint._STAR_print_base_STAR_ = (10);
cljs.pprint._STAR_current_level_STAR_ = (0);
cljs.pprint._STAR_current_length_STAR_ = null;
cljs.pprint.table_ize = (function cljs$pprint$table_ize(t,m){
return cljs.core.apply.call(null,cljs.core.hash_map,cljs.core.mapcat.call(null,(function (p1__52620_SHARP_){
var temp__5457__auto__ = cljs.core.get.call(null,t,cljs.core.key.call(null,p1__52620_SHARP_));
if(cljs.core.truth_(temp__5457__auto__)){
var v = temp__5457__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.val.call(null,p1__52620_SHARP_)], null);
} else {
return null;
}
}),m));
});
/**
 * Return true iff x is a PrettyWriter
 */
cljs.pprint.pretty_writer_QMARK_ = (function cljs$pprint$pretty_writer_QMARK_(x){
var and__3925__auto__ = ((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IDeref$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,x));
if(and__3925__auto__){
return new cljs.core.Keyword(null,"pretty-writer","pretty-writer",-1222834267).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,x)));
} else {
return and__3925__auto__;
}
});
/**
 * Wrap base-writer in a PrettyWriter with the specified right-margin and miser-width
 */
cljs.pprint.make_pretty_writer = (function cljs$pprint$make_pretty_writer(base_writer,right_margin,miser_width){
return cljs.pprint.pretty_writer.call(null,base_writer,right_margin,miser_width);
});
/**
 * Write an object to *out* subject to the current bindings of the printer control
 * variables. Use the kw-args argument to override individual variables for this call (and
 * any recursive calls).
 * 
 * *out* must be a PrettyWriter if pretty printing is enabled. This is the responsibility
 * of the caller.
 * 
 * This method is primarily intended for use by pretty print dispatch functions that
 * already know that the pretty printer will have set up their environment appropriately.
 * Normal library clients should use the standard "write" interface. 
 */
cljs.pprint.write_out = (function cljs$pprint$write_out(object){
var length_reached = (function (){var and__3925__auto__ = cljs.pprint._STAR_current_length_STAR_;
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = cljs.core._STAR_print_length_STAR_;
if(cljs.core.truth_(and__3925__auto____$1)){
return (cljs.pprint._STAR_current_length_STAR_ >= cljs.core._STAR_print_length_STAR_);
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})();
if(!(cljs.pprint._STAR_print_pretty_STAR_)){
cljs.pprint.pr.call(null,object);
} else {
if(cljs.core.truth_(length_reached)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
} else {
if(cljs.core.truth_(cljs.pprint._STAR_current_length_STAR_)){
cljs.pprint._STAR_current_length_STAR_ = (cljs.pprint._STAR_current_length_STAR_ + (1));
} else {
}

cljs.pprint._STAR_print_pprint_dispatch_STAR_.call(null,object);
}
}

return length_reached;
});
/**
 * Write an object subject to the current bindings of the printer control variables.
 * Use the kw-args argument to override individual variables for this call (and any
 * recursive calls). Returns the string result if :stream is nil or nil otherwise.
 * 
 * The following keyword arguments can be passed with values:
 *   Keyword              Meaning                              Default value
 *   :stream              Writer for output or nil             true (indicates *out*)
 *   :base                Base to use for writing rationals    Current value of *print-base*
 *   :circle*             If true, mark circular structures    Current value of *print-circle*
 *   :length              Maximum elements to show in sublists Current value of *print-length*
 *   :level               Maximum depth                        Current value of *print-level*
 *   :lines*              Maximum lines of output              Current value of *print-lines*
 *   :miser-width         Width to enter miser mode            Current value of *print-miser-width*
 *   :dispatch            The pretty print dispatch function   Current value of *print-pprint-dispatch*
 *   :pretty              If true, do pretty printing          Current value of *print-pretty*
 *   :radix               If true, prepend a radix specifier   Current value of *print-radix*
 *   :readably*           If true, print readably              Current value of *print-readably*
 *   :right-margin        The column for the right margin      Current value of *print-right-margin*
 *   :suppress-namespaces If true, no namespaces in symbols    Current value of *print-suppress-namespaces*
 * 
 *   * = not yet supported
 */
cljs.pprint.write = (function cljs$pprint$write(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52639 = arguments.length;
var i__4518__auto___52640 = (0);
while(true){
if((i__4518__auto___52640 < len__4517__auto___52639)){
args__4520__auto__.push((arguments[i__4518__auto___52640]));

var G__52641 = (i__4518__auto___52640 + (1));
i__4518__auto___52640 = G__52641;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((1) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((1)),(0),null)):null);
return cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4521__auto__);
});

cljs.pprint.write.cljs$core$IFn$_invoke$arity$variadic = (function (object,kw_args){
var options = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stream","stream",1534941648),true], null),cljs.core.apply.call(null,cljs.core.hash_map,kw_args));
var _STAR_print_base_STAR_52625 = cljs.pprint._STAR_print_base_STAR_;
var _STAR_print_circle_STAR_52626 = cljs.pprint._STAR_print_circle_STAR_;
var _STAR_print_length_STAR_52627 = cljs.core._STAR_print_length_STAR_;
var _STAR_print_level_STAR_52628 = cljs.core._STAR_print_level_STAR_;
var _STAR_print_lines_STAR_52629 = cljs.pprint._STAR_print_lines_STAR_;
var _STAR_print_miser_width_STAR_52630 = cljs.pprint._STAR_print_miser_width_STAR_;
var _STAR_print_pprint_dispatch_STAR_52631 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pretty_STAR_52632 = cljs.pprint._STAR_print_pretty_STAR_;
var _STAR_print_radix_STAR_52633 = cljs.pprint._STAR_print_radix_STAR_;
var _STAR_print_readably_STAR_52634 = cljs.core._STAR_print_readably_STAR_;
var _STAR_print_right_margin_STAR_52635 = cljs.pprint._STAR_print_right_margin_STAR_;
var _STAR_print_suppress_namespaces_STAR_52636 = cljs.pprint._STAR_print_suppress_namespaces_STAR_;
cljs.pprint._STAR_print_base_STAR_ = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_base_STAR_);

cljs.pprint._STAR_print_circle_STAR_ = new cljs.core.Keyword(null,"circle","circle",1903212362).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_circle_STAR_);

cljs.core._STAR_print_length_STAR_ = new cljs.core.Keyword(null,"length","length",588987862).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_length_STAR_);

cljs.core._STAR_print_level_STAR_ = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_level_STAR_);

cljs.pprint._STAR_print_lines_STAR_ = new cljs.core.Keyword(null,"lines","lines",-700165781).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_lines_STAR_);

cljs.pprint._STAR_print_miser_width_STAR_ = new cljs.core.Keyword(null,"miser-width","miser-width",-1310049437).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_miser_width_STAR_);

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = new cljs.core.Keyword(null,"dispatch","dispatch",1319337009).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pprint_dispatch_STAR_);

cljs.pprint._STAR_print_pretty_STAR_ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_pretty_STAR_);

cljs.pprint._STAR_print_radix_STAR_ = new cljs.core.Keyword(null,"radix","radix",857016463).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_radix_STAR_);

cljs.core._STAR_print_readably_STAR_ = new cljs.core.Keyword(null,"readably","readably",1129599760).cljs$core$IFn$_invoke$arity$2(options,cljs.core._STAR_print_readably_STAR_);

cljs.pprint._STAR_print_right_margin_STAR_ = new cljs.core.Keyword(null,"right-margin","right-margin",-810413306).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_right_margin_STAR_);

cljs.pprint._STAR_print_suppress_namespaces_STAR_ = new cljs.core.Keyword(null,"suppress-namespaces","suppress-namespaces",2130686956).cljs$core$IFn$_invoke$arity$2(options,cljs.pprint._STAR_print_suppress_namespaces_STAR_);

try{try{var sb = (new goog.string.StringBuffer());
var optval = ((cljs.core.contains_QMARK_.call(null,options,new cljs.core.Keyword(null,"stream","stream",1534941648)))?new cljs.core.Keyword(null,"stream","stream",1534941648).cljs$core$IFn$_invoke$arity$1(options):true);
var base_writer = ((((optval === true) || ((optval == null))))?(new cljs.core.StringBufferWriter(sb)):optval);
if(cljs.pprint._STAR_print_pretty_STAR_){
var base_writer__47817__auto___52642 = base_writer;
var new_writer__47818__auto___52643 = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__47817__auto___52642));
var _STAR_out_STAR_52637_52644 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__47818__auto___52643)?cljs.pprint.make_pretty_writer.call(null,base_writer__47817__auto___52642,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__47817__auto___52642);

try{cljs.pprint.write_out.call(null,object);

cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_52637_52644;
}} else {
var _STAR_out_STAR_52638_52645 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = base_writer;

try{cljs.pprint.pr.call(null,object);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_52638_52645;
}}

if(optval === true){
cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
}

if((optval == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
return null;
}
}finally {}}finally {cljs.pprint._STAR_print_suppress_namespaces_STAR_ = _STAR_print_suppress_namespaces_STAR_52636;

cljs.pprint._STAR_print_right_margin_STAR_ = _STAR_print_right_margin_STAR_52635;

cljs.core._STAR_print_readably_STAR_ = _STAR_print_readably_STAR_52634;

cljs.pprint._STAR_print_radix_STAR_ = _STAR_print_radix_STAR_52633;

cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_52632;

cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR_52631;

cljs.pprint._STAR_print_miser_width_STAR_ = _STAR_print_miser_width_STAR_52630;

cljs.pprint._STAR_print_lines_STAR_ = _STAR_print_lines_STAR_52629;

cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_52628;

cljs.core._STAR_print_length_STAR_ = _STAR_print_length_STAR_52627;

cljs.pprint._STAR_print_circle_STAR_ = _STAR_print_circle_STAR_52626;

cljs.pprint._STAR_print_base_STAR_ = _STAR_print_base_STAR_52625;
}});

cljs.pprint.write.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.pprint.write.cljs$lang$applyTo = (function (seq52623){
var G__52624 = cljs.core.first.call(null,seq52623);
var seq52623__$1 = cljs.core.next.call(null,seq52623);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52624,seq52623__$1);
});

cljs.pprint.pprint = (function cljs$pprint$pprint(var_args){
var G__52647 = arguments.length;
switch (G__52647) {
case 1:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1 = (function (object){
var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_52648 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{cljs.pprint.pprint.call(null,object,cljs.core._STAR_out_STAR_);

return cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_52648;
}});

cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$2 = (function (object,writer){
var base_writer__47817__auto__ = writer;
var new_writer__47818__auto__ = cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,base_writer__47817__auto__));
var _STAR_out_STAR_52649 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = ((new_writer__47818__auto__)?cljs.pprint.make_pretty_writer.call(null,base_writer__47817__auto__,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_):base_writer__47817__auto__);

try{var _STAR_print_pretty_STAR_52650_52652 = cljs.pprint._STAR_print_pretty_STAR_;
cljs.pprint._STAR_print_pretty_STAR_ = true;

try{cljs.pprint.write_out.call(null,object);
}finally {cljs.pprint._STAR_print_pretty_STAR_ = _STAR_print_pretty_STAR_52650_52652;
}
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,cljs.core._STAR_out_STAR_)))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"\n");
} else {
}

return cljs.pprint._ppflush.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_52649;
}});

cljs.pprint.pprint.cljs$lang$maxFixedArity = 2;

cljs.pprint.set_pprint_dispatch = (function cljs$pprint$set_pprint_dispatch(function$){
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = function$;

return null;
});
cljs.pprint.check_enumerated_arg = (function cljs$pprint$check_enumerated_arg(arg,choices){
if(cljs.core.not.call(null,choices.call(null,arg))){
throw (new Error(["Bad argument: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arg),". It must be one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(choices)].join('')));
} else {
return null;
}
});
cljs.pprint.level_exceeded = (function cljs$pprint$level_exceeded(){
var and__3925__auto__ = cljs.core._STAR_print_level_STAR_;
if(cljs.core.truth_(and__3925__auto__)){
return (cljs.pprint._STAR_current_level_STAR_ >= cljs.core._STAR_print_level_STAR_);
} else {
return and__3925__auto__;
}
});
/**
 * Print a conditional newline to a pretty printing stream. kind specifies if the
 *   newline is :linear, :miser, :fill, or :mandatory.
 * 
 *   This function is intended for use when writing custom dispatch functions.
 * 
 *   Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_newline = (function cljs$pprint$pprint_newline(kind){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mandatory","mandatory",542802336),null,new cljs.core.Keyword(null,"miser","miser",-556060186),null,new cljs.core.Keyword(null,"fill","fill",883462889),null,new cljs.core.Keyword(null,"linear","linear",872268697),null], null), null));

return cljs.pprint.nl.call(null,cljs.core._STAR_out_STAR_,kind);
});
/**
 * Create an indent at this point in the pretty printing stream. This defines how
 * following lines are indented. relative-to can be either :block or :current depending
 * whether the indent should be computed relative to the start of the logical block or
 * the current column position. n is an offset.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 */
cljs.pprint.pprint_indent = (function cljs$pprint$pprint_indent(relative_to,n){
cljs.pprint.check_enumerated_arg.call(null,relative_to,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"block","block",664686210),null,new cljs.core.Keyword(null,"current","current",-1088038603),null], null), null));

return cljs.pprint.indent.call(null,cljs.core._STAR_out_STAR_,relative_to,n);
});
/**
 * Tab at this point in the pretty printing stream. kind specifies whether the tab
 * is :line, :section, :line-relative, or :section-relative.
 * 
 * Colnum and colinc specify the target column and the increment to move the target
 * forward if the output is already past the original target.
 * 
 * This function is intended for use when writing custom dispatch functions.
 * 
 * Output is sent to *out* which must be a pretty printing writer.
 * 
 * THIS FUNCTION IS NOT YET IMPLEMENTED.
 */
cljs.pprint.pprint_tab = (function cljs$pprint$pprint_tab(kind,colnum,colinc){
cljs.pprint.check_enumerated_arg.call(null,kind,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"section","section",-300141526),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"line-relative","line-relative",1149548219),null,new cljs.core.Keyword(null,"section-relative","section-relative",-658298724),null], null), null));

throw (new Error("pprint-tab is not yet implemented"));
});
/**
 * An implementation of a Common Lisp compatible format function. cl-format formats its
 * arguments to an output stream or string based on the format control string given. It
 * supports sophisticated formatting of structured data.
 * 
 * Writer satisfies IWriter, true to output via *print-fn* or nil to output
 * to a string, format-in is the format control string and the remaining arguments
 * are the data to be formatted.
 * 
 * The format control string is a string to be output with embedded 'format directives'
 * describing how to format the various arguments passed in.
 * 
 * If writer is nil, cl-format returns the formatted result string. Otherwise, cl-format
 * returns nil.
 * 
 * For example:
 *  (let [results [46 38 22]]
 *      (cl-format true "There ~[are~;is~:;are~]~:* ~d result~:p: ~{~d~^, ~}~%"
 *                 (count results) results))
 * 
 * Prints via *print-fn*:
 *  There are 3 results: 46, 38, 22
 * 
 * Detailed documentation on format control strings is available in the "Common Lisp the
 * Language, 2nd edition", Chapter 22 (available online at:
 * http://www.cs.cmu.edu/afs/cs.cmu.edu/project/ai-repository/ai/html/cltl/clm/node200.html#SECTION002633000000000000000)
 * and in the Common Lisp HyperSpec at
 * http://www.lispworks.com/documentation/HyperSpec/Body/22_c.htm
 */
cljs.pprint.cl_format = (function cljs$pprint$cl_format(var_args){
var args__4520__auto__ = [];
var len__4517__auto___52656 = arguments.length;
var i__4518__auto___52657 = (0);
while(true){
if((i__4518__auto___52657 < len__4517__auto___52656)){
args__4520__auto__.push((arguments[i__4518__auto___52657]));

var G__52658 = (i__4518__auto___52657 + (1));
i__4518__auto___52657 = G__52658;
continue;
} else {
}
break;
}

var argseq__4521__auto__ = ((((2) < args__4520__auto__.length))?(new cljs.core.IndexedSeq(args__4520__auto__.slice((2)),(0),null)):null);
return cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4521__auto__);
});

cljs.pprint.cl_format.cljs$core$IFn$_invoke$arity$variadic = (function (writer,format_in,args){
var compiled_format = ((typeof format_in === 'string')?cljs.pprint.compile_format.call(null,format_in):format_in);
var navigator = cljs.pprint.init_navigator.call(null,args);
return cljs.pprint.execute_format.call(null,writer,compiled_format,navigator);
});

cljs.pprint.cl_format.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
cljs.pprint.cl_format.cljs$lang$applyTo = (function (seq52653){
var G__52654 = cljs.core.first.call(null,seq52653);
var seq52653__$1 = cljs.core.next.call(null,seq52653);
var G__52655 = cljs.core.first.call(null,seq52653__$1);
var seq52653__$2 = cljs.core.next.call(null,seq52653__$1);
var self__4504__auto__ = this;
return self__4504__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52654,G__52655,seq52653__$2);
});

cljs.pprint._STAR_format_str_STAR_ = null;
cljs.pprint.format_error = (function cljs$pprint$format_error(message,offset){
var full_message = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_format_str_STAR_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,offset," "))),"^",cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n")].join('');
throw Error(full_message);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.arg_navigator = (function (seq,rest,pos,__meta,__extmap,__hash){
this.seq = seq;
this.rest = rest;
this.pos = pos;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

cljs.pprint.arg_navigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k52660,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__52664 = k52660;
var G__52664__$1 = (((G__52664 instanceof cljs.core.Keyword))?G__52664.fqn:null);
switch (G__52664__$1) {
case "seq":
return self__.seq;

break;
case "rest":
return self__.rest;

break;
case "pos":
return self__.pos;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52660,else__4193__auto__);

}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#cljs.pprint.arg-navigator{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos],null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52659){
var self__ = this;
var G__52659__$1 = this;
return (new cljs.core.RecordIter((0),G__52659__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (3 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-402038447 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52661,other52662){
var self__ = this;
var this52661__$1 = this;
return ((!((other52662 == null))) && ((this52661__$1.constructor === other52662.constructor)) && (cljs.core._EQ_.call(null,this52661__$1.seq,other52662.seq)) && (cljs.core._EQ_.call(null,this52661__$1.rest,other52662.rest)) && (cljs.core._EQ_.call(null,this52661__$1.pos,other52662.pos)) && (cljs.core._EQ_.call(null,this52661__$1.__extmap,other52662.__extmap)));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pos","pos",-864607220),null,new cljs.core.Keyword(null,"seq","seq",-1817803783),null,new cljs.core.Keyword(null,"rest","rest",-1241696419),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__52659){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__52665 = cljs.core.keyword_identical_QMARK_;
var expr__52666 = k__4198__auto__;
if(cljs.core.truth_(pred__52665.call(null,new cljs.core.Keyword(null,"seq","seq",-1817803783),expr__52666))){
return (new cljs.pprint.arg_navigator(G__52659,self__.rest,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52665.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419),expr__52666))){
return (new cljs.pprint.arg_navigator(self__.seq,G__52659,self__.pos,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52665.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220),expr__52666))){
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,G__52659,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__52659),null));
}
}
}
});

cljs.pprint.arg_navigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"seq","seq",-1817803783),self__.seq,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"rest","rest",-1241696419),self__.rest,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"pos","pos",-864607220),self__.pos,null))], null),self__.__extmap));
});

cljs.pprint.arg_navigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__52659){
var self__ = this;
var this__4189__auto____$1 = this;
return (new cljs.pprint.arg_navigator(self__.seq,self__.rest,self__.pos,G__52659,self__.__extmap,self__.__hash));
});

cljs.pprint.arg_navigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

cljs.pprint.arg_navigator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"seq","seq",-177272256,null),new cljs.core.Symbol(null,"rest","rest",398835108,null),new cljs.core.Symbol(null,"pos","pos",775924307,null)], null);
});

cljs.pprint.arg_navigator.cljs$lang$type = true;

cljs.pprint.arg_navigator.cljs$lang$ctorPrSeq = (function (this__4226__auto__){
return (new cljs.core.List(null,"cljs.pprint/arg-navigator",null,(1),null));
});

cljs.pprint.arg_navigator.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){
return cljs.core._write.call(null,writer__4227__auto__,"cljs.pprint/arg-navigator");
});

/**
 * Positional factory function for cljs.pprint/arg-navigator.
 */
cljs.pprint.__GT_arg_navigator = (function cljs$pprint$__GT_arg_navigator(seq,rest,pos){
return (new cljs.pprint.arg_navigator(seq,rest,pos,null,null,null));
});

/**
 * Factory function for cljs.pprint/arg-navigator, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_arg_navigator = (function cljs$pprint$map__GT_arg_navigator(G__52663){
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(G__52663),new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(G__52663),new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(G__52663),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52663,new cljs.core.Keyword(null,"seq","seq",-1817803783),new cljs.core.Keyword(null,"rest","rest",-1241696419),new cljs.core.Keyword(null,"pos","pos",-864607220))),null));
});

/**
 * Create a new arg-navigator from the sequence with the position set to 0
 */
cljs.pprint.init_navigator = (function cljs$pprint$init_navigator(s){
var s__$1 = cljs.core.seq.call(null,s);
return (new cljs.pprint.arg_navigator(s__$1,s__$1,(0),null,null,null));
});
cljs.pprint.next_arg = (function cljs$pprint$next_arg(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
throw Error("Not enough arguments for format definition");
}
});
cljs.pprint.next_arg_or_nil = (function cljs$pprint$next_arg_or_nil(navigator){
var rst = new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator);
if(cljs.core.truth_(rst)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,rst),(new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.next.call(null,rst),(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + (1)),null,null,null))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,navigator], null);
}
});
cljs.pprint.get_format_arg = (function cljs$pprint$get_format_arg(navigator){
var vec__52669 = cljs.pprint.next_arg.call(null,navigator);
var raw_format = cljs.core.nth.call(null,vec__52669,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52669,(1),null);
var compiled_format = ((typeof raw_format === 'string')?cljs.pprint.compile_format.call(null,raw_format):raw_format);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [compiled_format,navigator__$1], null);
});
cljs.pprint.absolute_reposition = (function cljs$pprint$absolute_reposition(navigator,position){
if((position >= new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator))){
return cljs.pprint.relative_reposition.call(null,navigator,(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) - position));
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator)),position,null,null,null));
}
});
cljs.pprint.relative_reposition = (function cljs$pprint$relative_reposition(navigator,position){
var newpos = (new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator) + position);
if((position < (0))){
return cljs.pprint.absolute_reposition.call(null,navigator,newpos);
} else {
return (new cljs.pprint.arg_navigator(new cljs.core.Keyword(null,"seq","seq",-1817803783).cljs$core$IFn$_invoke$arity$1(navigator),cljs.core.drop.call(null,position,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),newpos,null,null,null));
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
cljs.pprint.compiled_directive = (function (func,def,params,offset,__meta,__extmap,__hash){
this.func = func;
this.def = def;
this.params = params;
this.offset = offset;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4190__auto__,k__4191__auto__){
var self__ = this;
var this__4190__auto____$1 = this;
return this__4190__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4191__auto__,null);
});

cljs.pprint.compiled_directive.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4192__auto__,k52673,else__4193__auto__){
var self__ = this;
var this__4192__auto____$1 = this;
var G__52677 = k52673;
var G__52677__$1 = (((G__52677 instanceof cljs.core.Keyword))?G__52677.fqn:null);
switch (G__52677__$1) {
case "func":
return self__.func;

break;
case "def":
return self__.def;

break;
case "params":
return self__.params;

break;
case "offset":
return self__.offset;

break;
default:
return cljs.core.get.call(null,self__.__extmap,k52673,else__4193__auto__);

}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4204__auto__,writer__4205__auto__,opts__4206__auto__){
var self__ = this;
var this__4204__auto____$1 = this;
var pr_pair__4207__auto__ = ((function (this__4204__auto____$1){
return (function (keyval__4208__auto__){
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,cljs.core.pr_writer,""," ","",opts__4206__auto__,keyval__4208__auto__);
});})(this__4204__auto____$1))
;
return cljs.core.pr_sequential_writer.call(null,writer__4205__auto__,pr_pair__4207__auto__,"#cljs.pprint.compiled-directive{",", ","}",opts__4206__auto__,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"func","func",-238706040),self__.func],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"def","def",-1043430536),self__.def],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"params","params",710516235),self__.params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset],null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52672){
var self__ = this;
var G__52672__$1 = this;
return (new cljs.core.RecordIter((0),G__52672__$1,4,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator.call(null,self__.__extmap):cljs.core.nil_iter.call(null))));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4188__auto__){
var self__ = this;
var this__4188__auto____$1 = this;
return self__.__meta;
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4185__auto__){
var self__ = this;
var this__4185__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4194__auto__){
var self__ = this;
var this__4194__auto____$1 = this;
return (4 + cljs.core.count.call(null,self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4186__auto__){
var self__ = this;
var this__4186__auto____$1 = this;
var h__4048__auto__ = self__.__hash;
if(!((h__4048__auto__ == null))){
return h__4048__auto__;
} else {
var h__4048__auto____$1 = ((function (h__4048__auto__,this__4186__auto____$1){
return (function (coll__4187__auto__){
return (-829256337 ^ cljs.core.hash_unordered_coll.call(null,coll__4187__auto__));
});})(h__4048__auto__,this__4186__auto____$1))
.call(null,this__4186__auto____$1);
self__.__hash = h__4048__auto____$1;

return h__4048__auto____$1;
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52674,other52675){
var self__ = this;
var this52674__$1 = this;
return ((!((other52675 == null))) && ((this52674__$1.constructor === other52675.constructor)) && (cljs.core._EQ_.call(null,this52674__$1.func,other52675.func)) && (cljs.core._EQ_.call(null,this52674__$1.def,other52675.def)) && (cljs.core._EQ_.call(null,this52674__$1.params,other52675.params)) && (cljs.core._EQ_.call(null,this52674__$1.offset,other52675.offset)) && (cljs.core._EQ_.call(null,this52674__$1.__extmap,other52675.__extmap)));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4199__auto__,k__4200__auto__){
var self__ = this;
var this__4199__auto____$1 = this;
if(cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset","offset",296498311),null,new cljs.core.Keyword(null,"func","func",-238706040),null,new cljs.core.Keyword(null,"params","params",710516235),null,new cljs.core.Keyword(null,"def","def",-1043430536),null], null), null),k__4200__auto__)){
return cljs.core.dissoc.call(null,cljs.core._with_meta.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,this__4199__auto____$1),self__.__meta),k__4200__auto__);
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,self__.__extmap,k__4200__auto__)),null));
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4197__auto__,k__4198__auto__,G__52672){
var self__ = this;
var this__4197__auto____$1 = this;
var pred__52678 = cljs.core.keyword_identical_QMARK_;
var expr__52679 = k__4198__auto__;
if(cljs.core.truth_(pred__52678.call(null,new cljs.core.Keyword(null,"func","func",-238706040),expr__52679))){
return (new cljs.pprint.compiled_directive(G__52672,self__.def,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52678.call(null,new cljs.core.Keyword(null,"def","def",-1043430536),expr__52679))){
return (new cljs.pprint.compiled_directive(self__.func,G__52672,self__.params,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52678.call(null,new cljs.core.Keyword(null,"params","params",710516235),expr__52679))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,G__52672,self__.offset,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_(pred__52678.call(null,new cljs.core.Keyword(null,"offset","offset",296498311),expr__52679))){
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,G__52672,self__.__meta,self__.__extmap,null));
} else {
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,self__.__meta,cljs.core.assoc.call(null,self__.__extmap,k__4198__auto__,G__52672),null));
}
}
}
}
});

cljs.pprint.compiled_directive.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4202__auto__){
var self__ = this;
var this__4202__auto____$1 = this;
return cljs.core.seq.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"func","func",-238706040),self__.func,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"def","def",-1043430536),self__.def,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"params","params",710516235),self__.params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"offset","offset",296498311),self__.offset,null))], null),self__.__extmap));
});

cljs.pprint.compiled_directive.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4189__auto__,G__52672){
var self__ = this;
var this__4189__auto____$1 = this;
return (new cljs.pprint.compiled_directive(self__.func,self__.def,self__.params,self__.offset,G__52672,self__.__extmap,self__.__hash));
});

cljs.pprint.compiled_directive.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4195__auto__,entry__4196__auto__){
var self__ = this;
var this__4195__auto____$1 = this;
if(cljs.core.vector_QMARK_.call(null,entry__4196__auto__)){
return this__4195__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.call(null,entry__4196__auto__,(0)),cljs.core._nth.call(null,entry__4196__auto__,(1)));
} else {
return cljs.core.reduce.call(null,cljs.core._conj,this__4195__auto____$1,entry__4196__auto__);
}
});

cljs.pprint.compiled_directive.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"params","params",-1943919534,null),new cljs.core.Symbol(null,"offset","offset",1937029838,null)], null);
});

cljs.pprint.compiled_directive.cljs$lang$type = true;

cljs.pprint.compiled_directive.cljs$lang$ctorPrSeq = (function (this__4226__auto__){
return (new cljs.core.List(null,"cljs.pprint/compiled-directive",null,(1),null));
});

cljs.pprint.compiled_directive.cljs$lang$ctorPrWriter = (function (this__4226__auto__,writer__4227__auto__){
return cljs.core._write.call(null,writer__4227__auto__,"cljs.pprint/compiled-directive");
});

/**
 * Positional factory function for cljs.pprint/compiled-directive.
 */
cljs.pprint.__GT_compiled_directive = (function cljs$pprint$__GT_compiled_directive(func,def,params,offset){
return (new cljs.pprint.compiled_directive(func,def,params,offset,null,null,null));
});

/**
 * Factory function for cljs.pprint/compiled-directive, taking a map of keywords to field values.
 */
cljs.pprint.map__GT_compiled_directive = (function cljs$pprint$map__GT_compiled_directive(G__52676){
return (new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(G__52676),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(G__52676),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(G__52676),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(G__52676),null,cljs.core.not_empty.call(null,cljs.core.dissoc.call(null,G__52676,new cljs.core.Keyword(null,"func","func",-238706040),new cljs.core.Keyword(null,"def","def",-1043430536),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"offset","offset",296498311))),null));
});

cljs.pprint.realize_parameter = (function cljs$pprint$realize_parameter(p__52682,navigator){
var vec__52683 = p__52682;
var param = cljs.core.nth.call(null,vec__52683,(0),null);
var vec__52686 = cljs.core.nth.call(null,vec__52683,(1),null);
var raw_val = cljs.core.nth.call(null,vec__52686,(0),null);
var offset = cljs.core.nth.call(null,vec__52686,(1),null);
var vec__52689 = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),param))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196)))?cljs.pprint.next_arg.call(null,navigator):((cljs.core._EQ_.call(null,raw_val,new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.count.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)),navigator], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [raw_val,navigator], null)
)));
var real_param = cljs.core.nth.call(null,vec__52689,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__52689,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [real_param,offset], null)], null),new_navigator], null);
});
cljs.pprint.realize_parameter_list = (function cljs$pprint$realize_parameter_list(parameter_map,navigator){
var vec__52692 = cljs.pprint.map_passing_context.call(null,cljs.pprint.realize_parameter,navigator,parameter_map);
var pairs = cljs.core.nth.call(null,vec__52692,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__52692,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,pairs),new_navigator], null);
});
cljs.pprint.special_radix_markers = new cljs.core.PersistentArrayMap(null, 3, [(2),"#b",(8),"#o",(16),"#x"], null);
cljs.pprint.format_simple_number = (function cljs$pprint$format_simple_number(n){
if(cljs.core.integer_QMARK_.call(null,n)){
if(cljs.core._EQ_.call(null,cljs.pprint._STAR_print_base_STAR_,(10))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?".":null))].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.pprint._STAR_print_radix_STAR_)?(function (){var or__3936__auto__ = cljs.core.get.call(null,cljs.pprint.special_radix_markers,cljs.pprint._STAR_print_base_STAR_);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return ["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint._STAR_print_base_STAR_),"r"].join('');
}
})():null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.opt_base_str.call(null,cljs.pprint._STAR_print_base_STAR_,n))].join('');
}
} else {
return null;

}
});
cljs.pprint.format_ascii = (function cljs$pprint$format_ascii(print_func,params,arg_navigator,offsets){
var vec__52695 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__52695,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__52695,(1),null);
var base_output = (function (){var or__3936__auto__ = cljs.pprint.format_simple_number.call(null,arg);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return print_func.call(null,arg);
}
})();
var base_width = base_output.length;
var min_width = (base_width + new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params));
var width = (((min_width >= new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?min_width:(min_width + ((cljs.core.quot.call(null,((new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - min_width) - (1)),new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params)) + (1)) * new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params))));
var chars = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(width - base_width),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars),cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output)].join(''));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_output),cljs.core.str.cljs$core$IFn$_invoke$arity$1(chars)].join(''));
}

return arg_navigator__$1;
});
/**
 * returns true if a number is actually an integer (that is, has no fractional part)
 */
cljs.pprint.integral_QMARK_ = (function cljs$pprint$integral_QMARK_(x){
if(cljs.core.integer_QMARK_.call(null,x)){
return true;
} else {
if(cljs.pprint.float_QMARK_.call(null,x)){
return cljs.core._EQ_.call(null,x,Math.floor(x));
} else {
return false;

}
}
});
/**
 * Return the list of remainders (essentially the 'digits') of val in the given base
 */
cljs.pprint.remainders = (function cljs$pprint$remainders(base,val){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (p1__52698_SHARP_){
if((p1__52698_SHARP_ > (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rem.call(null,p1__52698_SHARP_,base),cljs.core.quot.call(null,p1__52698_SHARP_,base)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
}
}),val)));
});
/**
 * Return val as a string in the given base
 */
cljs.pprint.base_str = (function cljs$pprint$base_str(base,val){
if((val === (0))){
return "0";
} else {
var xlated_val = val
;
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (xlated_val){
return (function (p1__52699_SHARP_){
if((p1__52699_SHARP_ < (10))){
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"0") + p1__52699_SHARP_));
} else {
return cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,"a") + (p1__52699_SHARP_ - (10))));
}
});})(xlated_val))
,cljs.pprint.remainders.call(null,base,val)));
}
});
cljs.pprint.javascript_base_formats = new cljs.core.PersistentArrayMap(null, 3, [(8),"%o",(10),"%d",(16),"%x"], null);
/**
 * Return val as a string in the given base. No cljs format, so no improved performance.
 */
cljs.pprint.opt_base_str = (function cljs$pprint$opt_base_str(base,val){
return cljs.pprint.base_str.call(null,base,val);
});
cljs.pprint.group_by_STAR_ = (function cljs$pprint$group_by_STAR_(unit,lis){
return cljs.core.reverse.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (x){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.reverse.call(null,cljs.core.take.call(null,unit,x))),cljs.core.seq.call(null,cljs.core.drop.call(null,unit,x))], null);
}),cljs.core.reverse.call(null,lis))));
});
cljs.pprint.format_integer = (function cljs$pprint$format_integer(base,params,arg_navigator,offsets){
var vec__52701 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__52701,(0),null);
var arg_navigator__$1 = cljs.core.nth.call(null,vec__52701,(1),null);
if(cljs.core.truth_(cljs.pprint.integral_QMARK_.call(null,arg))){
var neg_52704 = (arg < (0));
var pos_arg_52705 = ((neg_52704)?(- arg):arg);
var raw_str_52706 = cljs.pprint.opt_base_str.call(null,base,pos_arg_52705);
var group_str_52707 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(function (){var groups = cljs.core.map.call(null,((function (neg_52704,pos_arg_52705,raw_str_52706,vec__52701,arg,arg_navigator__$1){
return (function (p1__52700_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,p1__52700_SHARP_);
});})(neg_52704,pos_arg_52705,raw_str_52706,vec__52701,arg,arg_navigator__$1))
,cljs.pprint.group_by_STAR_.call(null,new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083).cljs$core$IFn$_invoke$arity$1(params),raw_str_52706));
var commas = cljs.core.repeat.call(null,cljs.core.count.call(null,groups),new cljs.core.Keyword(null,"commachar","commachar",652859327).cljs$core$IFn$_invoke$arity$1(params));
return cljs.core.apply.call(null,cljs.core.str,cljs.core.next.call(null,cljs.core.interleave.call(null,commas,groups)));
})():raw_str_52706);
var signed_str_52708 = ((neg_52704)?["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_52707)].join(''):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?["+",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group_str_52707)].join(''):group_str_52707
));
var padded_str_52709 = (((signed_str_52708.length < new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params) - signed_str_52708.length),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(signed_str_52708)].join(''):signed_str_52708);
cljs.pprint.print.call(null,padded_str_52709);
} else {
cljs.pprint.format_ascii.call(null,cljs.core.print_str,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"colinc","colinc",-584873385),(1),new cljs.core.Keyword(null,"minpad","minpad",323570901),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),null);
}

return arg_navigator__$1;
});
cljs.pprint.english_cardinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zero","one","two","three","four","five","six","seven","eight","nine","ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"], null);
cljs.pprint.english_ordinal_units = new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, ["zeroth","first","second","third","fourth","fifth","sixth","seventh","eighth","ninth","tenth","eleventh","twelfth","thirteenth","fourteenth","fifteenth","sixteenth","seventeenth","eighteenth","nineteenth"], null);
cljs.pprint.english_cardinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twenty","thirty","forty","fifty","sixty","seventy","eighty","ninety"], null);
cljs.pprint.english_ordinal_tens = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","","twentieth","thirtieth","fortieth","fiftieth","sixtieth","seventieth","eightieth","ninetieth"], null);
cljs.pprint.english_scale_numbers = new cljs.core.PersistentVector(null, 22, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","thousand","million","billion","trillion","quadrillion","quintillion","sextillion","septillion","octillion","nonillion","decillion","undecillion","duodecillion","tredecillion","quattuordecillion","quindecillion","sexdecillion","septendecillion","octodecillion","novemdecillion","vigintillion"], null);
/**
 * Convert a number less than 1000 to a cardinal english string
 */
cljs.pprint.format_simple_cardinal = (function cljs$pprint$format_simple_cardinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,unit_digit):null))].join('');
})()):null))].join('');
});
/**
 * Take a sequence of parts, add scale numbers (e.g., million) and combine into a string
 *   offset is a factor of 10^3 to multiply by
 */
cljs.pprint.add_english_scales = (function cljs$pprint$add_english_scales(parts,offset){
var cnt = cljs.core.count.call(null,parts);
var acc = cljs.core.PersistentVector.EMPTY;
var pos = (cnt - (1));
var this$ = cljs.core.first.call(null,parts);
var remainder = cljs.core.next.call(null,parts);
while(true){
if((remainder == null)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,", ",acc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_.call(null,this$))) && (!(cljs.core.empty_QMARK_.call(null,acc)))))?", ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_.call(null,this$))) && (((pos + offset) > (0)))))?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join(''):null))].join('');
} else {
var G__52710 = ((cljs.core.empty_QMARK_.call(null,this$))?acc:cljs.core.conj.call(null,acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_scale_numbers,(pos + offset)))].join('')));
var G__52711 = (pos - (1));
var G__52712 = cljs.core.first.call(null,remainder);
var G__52713 = cljs.core.next.call(null,remainder);
acc = G__52710;
pos = G__52711;
this$ = G__52712;
remainder = G__52713;
continue;
}
break;
}
});
cljs.pprint.format_cardinal_english = (function cljs$pprint$format_cardinal_english(params,navigator,offsets){
var vec__52714 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52714,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52714,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zero");
} else {
var abs_arg_52717 = (((arg < (0)))?(- arg):arg);
var parts_52718 = cljs.pprint.remainders.call(null,(1000),abs_arg_52717);
if((cljs.core.count.call(null,parts_52718) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_52719 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,parts_52718);
var full_str_52720 = cljs.pprint.add_english_scales.call(null,parts_strs_52719,(0));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_str_52720)].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}
}

return navigator__$1;
});
/**
 * Convert a number less than 1000 to a ordinal english string
 *   Note this should only be used for the last one in the sequence
 */
cljs.pprint.format_simple_ordinal = (function cljs$pprint$format_simple_ordinal(num){
var hundreds = cljs.core.quot.call(null,num,(100));
var tens = cljs.core.rem.call(null,num,(100));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((hundreds > (0)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,cljs.pprint.english_cardinal_units,hundreds))," hundred"].join(''):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((hundreds > (0))) && ((tens > (0)))))?" ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((tens > (0)))?(((tens < (20)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,tens):(function (){var ten_digit = cljs.core.quot.call(null,tens,(10));
var unit_digit = cljs.core.rem.call(null,tens,(10));
if((((ten_digit > (0))) && (!((unit_digit > (0)))))){
return cljs.core.nth.call(null,cljs.pprint.english_ordinal_tens,ten_digit);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((ten_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_cardinal_tens,ten_digit):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((((ten_digit > (0))) && ((unit_digit > (0)))))?"-":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((unit_digit > (0)))?cljs.core.nth.call(null,cljs.pprint.english_ordinal_units,unit_digit):null))].join('');
}
})()):(((hundreds > (0)))?"th":null)))].join('');
});
cljs.pprint.format_ordinal_english = (function cljs$pprint$format_ordinal_english(params,navigator,offsets){
var vec__52721 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52721,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52721,(1),null);
if(cljs.core._EQ_.call(null,(0),arg)){
cljs.pprint.print.call(null,"zeroth");
} else {
var abs_arg_52724 = (((arg < (0)))?(- arg):arg);
var parts_52725 = cljs.pprint.remainders.call(null,(1000),abs_arg_52724);
if((cljs.core.count.call(null,parts_52725) <= cljs.core.count.call(null,cljs.pprint.english_scale_numbers))){
var parts_strs_52726 = cljs.core.map.call(null,cljs.pprint.format_simple_cardinal,cljs.core.drop_last.call(null,parts_52725));
var head_str_52727 = cljs.pprint.add_english_scales.call(null,parts_strs_52726,(1));
var tail_str_52728 = cljs.pprint.format_simple_ordinal.call(null,cljs.core.last.call(null,parts_52725));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((((arg < (0)))?"minus ":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((((!(cljs.core.empty_QMARK_.call(null,head_str_52727))) && (!(cljs.core.empty_QMARK_.call(null,tail_str_52728)))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_52727),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tail_str_52728)].join(''):((!(cljs.core.empty_QMARK_.call(null,head_str_52727)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(head_str_52727),"th"].join(''):tail_str_52728
)))].join(''));
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));

var low_two_digits_52729 = cljs.core.rem.call(null,arg,(100));
var not_teens_52730 = ((((11) < low_two_digits_52729)) || (((19) > low_two_digits_52729)));
var low_digit_52731 = cljs.core.rem.call(null,low_two_digits_52729,(10));
cljs.pprint.print.call(null,(((((low_digit_52731 === (1))) && (not_teens_52730)))?"st":(((((low_digit_52731 === (2))) && (not_teens_52730)))?"nd":(((((low_digit_52731 === (3))) && (not_teens_52730)))?"rd":"th"
))));
}
}

return navigator__$1;
});
cljs.pprint.old_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IIII","V","VI","VII","VIII","VIIII"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XXXX","L","LX","LXX","LXXX","LXXXX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CCCC","D","DC","DCC","DCCC","DCCCC"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
cljs.pprint.new_roman_table = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["I","II","III","IV","V","VI","VII","VIII","IX"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], null),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","MM","MMM"], null)], null);
/**
 * Format a roman numeral using the specified look-up table
 */
cljs.pprint.format_roman = (function cljs$pprint$format_roman(table,params,navigator,offsets){
var vec__52732 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52732,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52732,(1),null);
if(((typeof arg === 'number') && ((arg > (0))) && ((arg < (4000))))){
var digits_52735 = cljs.pprint.remainders.call(null,(10),arg);
var acc_52736 = cljs.core.PersistentVector.EMPTY;
var pos_52737 = (cljs.core.count.call(null,digits_52735) - (1));
var digits_52738__$1 = digits_52735;
while(true){
if(cljs.core.empty_QMARK_.call(null,digits_52738__$1)){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,acc_52736));
} else {
var digit_52739 = cljs.core.first.call(null,digits_52738__$1);
var G__52740 = ((cljs.core._EQ_.call(null,(0),digit_52739))?acc_52736:cljs.core.conj.call(null,acc_52736,cljs.core.nth.call(null,cljs.core.nth.call(null,table,pos_52737),(digit_52739 - (1)))));
var G__52741 = (pos_52737 - (1));
var G__52742 = cljs.core.next.call(null,digits_52738__$1);
acc_52736 = G__52740;
pos_52737 = G__52741;
digits_52738__$1 = G__52742;
continue;
}
break;
}
} else {
cljs.pprint.format_integer.call(null,(10),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530)," ",new cljs.core.Keyword(null,"commachar","commachar",652859327),",",new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(3),new cljs.core.Keyword(null,"colon","colon",-965200945),true], null),cljs.pprint.init_navigator.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg], null)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"mincol","mincol",1230695445),(0),new cljs.core.Keyword(null,"padchar","padchar",2018584530),(0),new cljs.core.Keyword(null,"commachar","commachar",652859327),(0),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),(0)], null));
}

return navigator__$1;
});
cljs.pprint.format_old_roman = (function cljs$pprint$format_old_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.old_roman_table,params,navigator,offsets);
});
cljs.pprint.format_new_roman = (function cljs$pprint$format_new_roman(params,navigator,offsets){
return cljs.pprint.format_roman.call(null,cljs.pprint.new_roman_table,params,navigator,offsets);
});
cljs.pprint.special_chars = new cljs.core.PersistentArrayMap(null, 5, [(8),"Backspace",(9),"Tab",(10),"Newline",(13),"Return",(32),"Space"], null);
cljs.pprint.pretty_character = (function cljs$pprint$pretty_character(params,navigator,offsets){
var vec__52743 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__52743,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52743,(1),null);
var as_int = cljs.pprint.char_code.call(null,c);
var base_char = (as_int & (127));
var meta = (as_int & (128));
var special = cljs.core.get.call(null,cljs.pprint.special_chars,base_char);
if((meta > (0))){
cljs.pprint.print.call(null,"Meta-");
} else {
}

cljs.pprint.print.call(null,(cljs.core.truth_(special)?special:(((base_char < (32)))?["Control-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.char$.call(null,(base_char + (64))))].join(''):((cljs.core._EQ_.call(null,base_char,(127)))?"Control-?":cljs.core.char$.call(null,base_char)
))));

return navigator__$1;
});
cljs.pprint.readable_character = (function cljs$pprint$readable_character(params,navigator,offsets){
var vec__52746 = cljs.pprint.next_arg.call(null,navigator);
var c = cljs.core.nth.call(null,vec__52746,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52746,(1),null);
var pred__52749_52752 = cljs.core._EQ_;
var expr__52750_52753 = new cljs.core.Keyword(null,"char-format","char-format",-1016499218).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(pred__52749_52752.call(null,"o",expr__52750_52753))){
cljs.pprint.cl_format.call(null,true,"\\o~3, '0o",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__52749_52752.call(null,"u",expr__52750_52753))){
cljs.pprint.cl_format.call(null,true,"\\u~4, '0x",cljs.pprint.char_code.call(null,c));
} else {
if(cljs.core.truth_(pred__52749_52752.call(null,null,expr__52750_52753))){
cljs.pprint.print_char.call(null,c);
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52750_52753)].join('')));
}
}
}

return navigator__$1;
});
cljs.pprint.plain_character = (function cljs$pprint$plain_character(params,navigator,offsets){
var vec__52754 = cljs.pprint.next_arg.call(null,navigator);
var char$ = cljs.core.nth.call(null,vec__52754,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52754,(1),null);
cljs.pprint.print.call(null,char$);

return navigator__$1;
});
cljs.pprint.abort_QMARK_ = (function cljs$pprint$abort_QMARK_(context){
var token = cljs.core.first.call(null,context);
return ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),token)) || (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),token)));
});
cljs.pprint.execute_sub_format = (function cljs$pprint$execute_sub_format(format,args,base_args){
return cljs.core.second.call(null,cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__52757 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__52757,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__52757,(1),null);
var vec__52760 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__52760,(0),null);
var offsets = cljs.core.nth.call(null,vec__52760,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),base_args);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format));
});
/**
 * Produce string parts for the mantissa (normalize 1-9) and exponent
 */
cljs.pprint.float_parts_base = (function cljs$pprint$float_parts_base(f){
var s = clojure.string.lower_case.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(f)].join(''));
var exploc = s.indexOf("e");
var dotloc = s.indexOf(".");
if((exploc < (0))){
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count.call(null,s) - (1)))].join('')], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),dotloc)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(dotloc + (1))))].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((dotloc - (1)))].join('')], null);
}
} else {
if((dotloc < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,(0),exploc),cljs.core.subs.call(null,s,(exploc + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),(1))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(2),exploc))].join(''),cljs.core.subs.call(null,s,(exploc + (1)))], null);
}
}
});
/**
 * Take care of leading and trailing zeros in decomposed floats
 */
cljs.pprint.float_parts = (function cljs$pprint$float_parts(f){
var vec__52763 = cljs.pprint.float_parts_base.call(null,f);
var m = cljs.core.nth.call(null,vec__52763,(0),null);
var e = cljs.core.nth.call(null,vec__52763,(1),null);
var m1 = cljs.pprint.rtrim.call(null,m,"0");
var m2 = cljs.pprint.ltrim.call(null,m1,"0");
var delta = (cljs.core.count.call(null,m1) - cljs.core.count.call(null,m2));
var e__$1 = (((((cljs.core.count.call(null,e) > (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,e,(0)),"+"))))?cljs.core.subs.call(null,e,(1)):e);
if(cljs.core.empty_QMARK_.call(null,m2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m2,(parseInt(e__$1,(10)) - delta)], null);
}
});
/**
 * Assumption: The input string consists of one or more decimal digits,
 *   and no other characters. Return a string containing one or more
 *   decimal digits containing a decimal number one larger than the input
 *   string. The output string will always be the same length as the input
 *   string, or one character longer.
 */
cljs.pprint.inc_s = (function cljs$pprint$inc_s(s){
var len_1 = (cljs.core.count.call(null,s) - (1));
var i = (len_1 | (0));
while(true){
if((i < (0))){
return cljs.core.apply.call(null,cljs.core.str,"1",cljs.core.repeat.call(null,(len_1 + (1)),"0"));
} else {
if(cljs.core._EQ_.call(null,"9",s.charAt(i))){
var G__52766 = (i - (1));
i = G__52766;
continue;
} else {
return cljs.core.apply.call(null,cljs.core.str,cljs.core.subs.call(null,s,(0),i),cljs.core.char$.call(null,(cljs.pprint.char_code.call(null,s.charAt(i)) + (1))),cljs.core.repeat.call(null,(len_1 - i),"0"));

}
}
break;
}
});
cljs.pprint.round_str = (function cljs$pprint$round_str(m,e,d,w){
if(cljs.core.truth_((function (){var or__3936__auto__ = d;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return w;
}
})())){
var len = cljs.core.count.call(null,m);
var w__$1 = (cljs.core.truth_(w)?(function (){var x__4024__auto__ = (2);
var y__4025__auto__ = w;
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})():(0));
var round_pos = (cljs.core.truth_(d)?((e + d) + (1)):(((e >= (0)))?(function (){var x__4024__auto__ = (e + (1));
var y__4025__auto__ = (w__$1 - (1));
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})():(w__$1 + e)
));
var vec__52767 = ((cljs.core._EQ_.call(null,round_pos,(0)))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [["0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(e + (1)),(1),(len + (1))], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,round_pos,len], null));
var m1 = cljs.core.nth.call(null,vec__52767,(0),null);
var e1 = cljs.core.nth.call(null,vec__52767,(1),null);
var round_pos__$1 = cljs.core.nth.call(null,vec__52767,(2),null);
var len__$1 = cljs.core.nth.call(null,vec__52767,(3),null);
if(cljs.core.truth_(round_pos__$1)){
if((round_pos__$1 < (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["0",(0),false], null);
} else {
if((len__$1 > round_pos__$1)){
var round_char = cljs.core.nth.call(null,m1,round_pos__$1);
var result = cljs.core.subs.call(null,m1,(0),round_pos__$1);
if((cljs.pprint.char_code.call(null,round_char) >= cljs.pprint.char_code.call(null,"5"))){
var round_up_result = cljs.pprint.inc_s.call(null,result);
var expanded = (cljs.core.count.call(null,round_up_result) > cljs.core.count.call(null,result));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((expanded)?cljs.core.subs.call(null,round_up_result,(0),(cljs.core.count.call(null,round_up_result) - (1))):round_up_result),e1,expanded], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [result,e1,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e,false], null);
}
});
cljs.pprint.expand_fixed = (function cljs$pprint$expand_fixed(m,e,d){
var vec__52770 = (((e < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((- e) - (1)),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join(''),(-1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,e], null));
var m1 = cljs.core.nth.call(null,vec__52770,(0),null);
var e1 = cljs.core.nth.call(null,vec__52770,(1),null);
var len = cljs.core.count.call(null,m1);
var target_len = (cljs.core.truth_(d)?((e1 + d) + (1)):(e1 + (1)));
if((len < target_len)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(m1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(target_len - len),"0")))].join('');
} else {
return m1;
}
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_decimal = (function cljs$pprint$insert_decimal(m,e){
if((e < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
var loc = (e + (1));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),loc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,loc))].join('');
}
});
cljs.pprint.get_fixed = (function cljs$pprint$get_fixed(m,e,d){
return cljs.pprint.insert_decimal.call(null,cljs.pprint.expand_fixed.call(null,m,e,d),e);
});
/**
 * Insert the decimal point at the right spot in the number to match an exponent
 */
cljs.pprint.insert_scaled_decimal = (function cljs$pprint$insert_scaled_decimal(m,k){
if((k < (0))){
return [".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(m)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,(0),k)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,m,k))].join('');
}
});
cljs.pprint.convert_ratio = (function cljs$pprint$convert_ratio(x){
return x;
});
cljs.pprint.fixed_float = (function cljs$pprint$fixed_float(params,navigator,offsets){
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var vec__52773 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52773,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52773,(1),null);
var vec__52776 = (((arg < (0)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["-",(- arg)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["+",arg], null));
var sign = cljs.core.nth.call(null,vec__52776,(0),null);
var abs = cljs.core.nth.call(null,vec__52776,(1),null);
var abs__$1 = cljs.pprint.convert_ratio.call(null,abs);
var vec__52779 = cljs.pprint.float_parts.call(null,abs__$1);
var mantissa = cljs.core.nth.call(null,vec__52779,(0),null);
var exp = cljs.core.nth.call(null,vec__52779,(1),null);
var scaled_exp = (exp + new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params));
var add_sign = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (arg < (0));
}
})();
var append_zero = ((cljs.core.not.call(null,d)) && (((cljs.core.count.call(null,mantissa) - (1)) <= scaled_exp)));
var vec__52782 = cljs.pprint.round_str.call(null,mantissa,scaled_exp,d,(cljs.core.truth_(w)?(w - (cljs.core.truth_(add_sign)?(1):(0))):null));
var rounded_mantissa = cljs.core.nth.call(null,vec__52782,(0),null);
var scaled_exp__$1 = cljs.core.nth.call(null,vec__52782,(1),null);
var expanded = cljs.core.nth.call(null,vec__52782,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp__$1 + (1)):scaled_exp__$1),d);
var fixed_repr__$1 = (cljs.core.truth_((function (){var and__3925__auto__ = w;
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = d;
if(cljs.core.truth_(and__3925__auto____$1)){
return (((d >= (1))) && (cljs.core._EQ_.call(null,fixed_repr.charAt((0)),"0")) && (cljs.core._EQ_.call(null,fixed_repr.charAt((1)),".")) && ((cljs.core.count.call(null,fixed_repr) > (w - (cljs.core.truth_(add_sign)?(1):(0))))));
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())?cljs.core.subs.call(null,fixed_repr,(1)):fixed_repr);
var prepend_zero = cljs.core._EQ_.call(null,cljs.core.first.call(null,fixed_repr__$1),".");
if(cljs.core.truth_(w)){
var len_52785 = cljs.core.count.call(null,fixed_repr__$1);
var signed_len_52786 = (cljs.core.truth_(add_sign)?(len_52785 + (1)):len_52785);
var prepend_zero_52787__$1 = ((prepend_zero) && (!((signed_len_52786 >= w))));
var append_zero_52788__$1 = ((append_zero) && (!((signed_len_52786 >= w))));
var full_len_52789 = ((((prepend_zero_52787__$1) || (append_zero_52788__$1)))?(signed_len_52786 + (1)):signed_len_52786);
if(cljs.core.truth_((function (){var and__3925__auto__ = (full_len_52789 > w);
if(and__3925__auto__){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3925__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len_52789),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_52787__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_52788__$1)?"0":null))].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign)?sign:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero)?"0":null))].join(''));
}

return navigator__$1;
});
cljs.pprint.exponential_float = (function cljs$pprint$exponential_float(params,navigator,offset){
var vec__52790 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52790,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52790,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var G__52796_52806 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var vec__52797_52807 = G__52796_52806;
var mantissa_52808 = cljs.core.nth.call(null,vec__52797_52807,(0),null);
var exp_52809 = cljs.core.nth.call(null,vec__52797_52807,(1),null);
var G__52796_52810__$1 = G__52796_52806;
while(true){
var vec__52800_52811 = G__52796_52810__$1;
var mantissa_52812__$1 = cljs.core.nth.call(null,vec__52800_52811,(0),null);
var exp_52813__$1 = cljs.core.nth.call(null,vec__52800_52811,(1),null);
var w_52814 = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d_52815 = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e_52816 = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var k_52817 = new cljs.core.Keyword(null,"k","k",-2146297393).cljs$core$IFn$_invoke$arity$1(params);
var expchar_52818 = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return "E";
}
})();
var add_sign_52819 = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (arg__$1 < (0));
}
})();
var prepend_zero_52820 = (k_52817 <= (0));
var scaled_exp_52821 = (exp_52813__$1 - (k_52817 - (1)));
var scaled_exp_str_52822 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(Math.abs(scaled_exp_52821))].join('');
var scaled_exp_str_52823__$1 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(expchar_52818),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((scaled_exp_52821 < (0)))?"-":"+")),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(e_52816)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(e_52816 - cljs.core.count.call(null,scaled_exp_str_52822)),"0")):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_52822)].join('');
var exp_width_52824 = cljs.core.count.call(null,scaled_exp_str_52823__$1);
var base_mantissa_width_52825 = cljs.core.count.call(null,mantissa_52812__$1);
var scaled_mantissa_52826 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(- k_52817),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mantissa_52812__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(d_52815)?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((d_52815 - (base_mantissa_width_52825 - (1))) - (((k_52817 < (0)))?(- k_52817):(0))),"0")):null))].join('');
var w_mantissa_52827 = (cljs.core.truth_(w_52814)?(w_52814 - exp_width_52824):null);
var vec__52803_52828 = cljs.pprint.round_str.call(null,scaled_mantissa_52826,(0),((cljs.core._EQ_.call(null,k_52817,(0)))?(d_52815 - (1)):(((k_52817 > (0)))?d_52815:(((k_52817 < (0)))?(d_52815 - (1)):null))),(cljs.core.truth_(w_mantissa_52827)?(w_mantissa_52827 - (cljs.core.truth_(add_sign_52819)?(1):(0))):null));
var rounded_mantissa_52829 = cljs.core.nth.call(null,vec__52803_52828,(0),null);
var __52830 = cljs.core.nth.call(null,vec__52803_52828,(1),null);
var incr_exp_52831 = cljs.core.nth.call(null,vec__52803_52828,(2),null);
var full_mantissa_52832 = cljs.pprint.insert_scaled_decimal.call(null,rounded_mantissa_52829,k_52817);
var append_zero_52833 = ((cljs.core._EQ_.call(null,k_52817,cljs.core.count.call(null,rounded_mantissa_52829))) && ((d_52815 == null)));
if(cljs.core.not.call(null,incr_exp_52831)){
if(cljs.core.truth_(w_52814)){
var len_52834 = (cljs.core.count.call(null,full_mantissa_52832) + exp_width_52824);
var signed_len_52835 = (cljs.core.truth_(add_sign_52819)?(len_52834 + (1)):len_52834);
var prepend_zero_52836__$1 = ((prepend_zero_52820) && (!(cljs.core._EQ_.call(null,signed_len_52835,w_52814))));
var full_len_52837 = ((prepend_zero_52836__$1)?(signed_len_52835 + (1)):signed_len_52835);
var append_zero_52838__$1 = ((append_zero_52833) && ((full_len_52837 < w_52814)));
if(cljs.core.truth_((function (){var and__3925__auto__ = (function (){var or__3936__auto__ = (full_len_52837 > w_52814);
if(or__3936__auto__){
return or__3936__auto__;
} else {
var and__3925__auto__ = e_52816;
if(cljs.core.truth_(and__3925__auto__)){
return ((exp_width_52824 - (2)) > e_52816);
} else {
return and__3925__auto__;
}
}
})();
if(cljs.core.truth_(and__3925__auto__)){
return new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3925__auto__;
}
})())){
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,w_52814,new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params))));
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,((w_52814 - full_len_52837) - ((append_zero_52838__$1)?(1):(0))),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_52819)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_52836__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_52832),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_52838__$1)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_52823__$1)].join(''));
}
} else {
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(add_sign_52819)?(((arg__$1 < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((prepend_zero_52820)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_mantissa_52832),cljs.core.str.cljs$core$IFn$_invoke$arity$1(((append_zero_52833)?"0":null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(scaled_exp_str_52823__$1)].join(''));
}
} else {
var G__52839 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rounded_mantissa_52829,(exp_52813__$1 + (1))], null);
G__52796_52810__$1 = G__52839;
continue;
}
break;
}

return navigator__$1;
});
cljs.pprint.general_float = (function cljs$pprint$general_float(params,navigator,offsets){
var vec__52840 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52840,(0),null);
var _ = cljs.core.nth.call(null,vec__52840,(1),null);
var arg__$1 = cljs.pprint.convert_ratio.call(null,arg);
var vec__52843 = cljs.pprint.float_parts.call(null,(((arg__$1 < (0)))?(- arg__$1):arg__$1));
var mantissa = cljs.core.nth.call(null,vec__52843,(0),null);
var exp = cljs.core.nth.call(null,vec__52843,(1),null);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var e = new cljs.core.Keyword(null,"e","e",1381269198).cljs$core$IFn$_invoke$arity$1(params);
var n = ((cljs.core._EQ_.call(null,arg__$1,0.0))?(0):(exp + (1)));
var ee = (cljs.core.truth_(e)?(e + (2)):(4));
var ww = (cljs.core.truth_(w)?(w - ee):null);
var d__$1 = (cljs.core.truth_(d)?d:(function (){var x__4024__auto__ = cljs.core.count.call(null,mantissa);
var y__4025__auto__ = (function (){var x__4027__auto__ = n;
var y__4028__auto__ = (7);
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})();
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})());
var dd = (d__$1 - n);
if(((((0) <= dd)) && ((dd <= d__$1)))){
var navigator__$1 = cljs.pprint.fixed_float.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"w","w",354169001),ww,new cljs.core.Keyword(null,"d","d",1972142424),dd,new cljs.core.Keyword(null,"k","k",-2146297393),(0),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"at","at",1476951349),new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params)], null),navigator,offsets);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,ee," ")));

return navigator__$1;
} else {
return cljs.pprint.exponential_float.call(null,params,navigator,offsets);
}
});
cljs.pprint.dollar_float = (function cljs$pprint$dollar_float(params,navigator,offsets){
var vec__52846 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52846,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52846,(1),null);
var vec__52849 = cljs.pprint.float_parts.call(null,Math.abs(arg));
var mantissa = cljs.core.nth.call(null,vec__52849,(0),null);
var exp = cljs.core.nth.call(null,vec__52849,(1),null);
var d = new cljs.core.Keyword(null,"d","d",1972142424).cljs$core$IFn$_invoke$arity$1(params);
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params);
var w = new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(params);
var add_sign = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (arg < (0));
}
})();
var vec__52852 = cljs.pprint.round_str.call(null,mantissa,exp,d,null);
var rounded_mantissa = cljs.core.nth.call(null,vec__52852,(0),null);
var scaled_exp = cljs.core.nth.call(null,vec__52852,(1),null);
var expanded = cljs.core.nth.call(null,vec__52852,(2),null);
var fixed_repr = cljs.pprint.get_fixed.call(null,rounded_mantissa,(cljs.core.truth_(expanded)?(scaled_exp + (1)):scaled_exp),d);
var full_repr = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - fixed_repr.indexOf(".")),"0"))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(fixed_repr)].join('');
var full_len = (cljs.core.count.call(null,full_repr) + (cljs.core.truth_(add_sign)?(1):(0)));
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3925__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3925__auto__)){
return add_sign;
} else {
return and__3925__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(w - full_len),new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params));
if(and__3925__auto__){
return add_sign;
} else {
return and__3925__auto__;
}
})())?(((arg < (0)))?"-":"+"):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(full_repr)].join(''));

return navigator__$1;
});
cljs.pprint.choice_conditional = (function cljs$pprint$choice_conditional(params,arg_navigator,offsets){
var arg = new cljs.core.Keyword(null,"selector","selector",762528866).cljs$core$IFn$_invoke$arity$1(params);
var vec__52855 = (cljs.core.truth_(arg)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [arg,arg_navigator], null):cljs.pprint.next_arg.call(null,arg_navigator));
var arg__$1 = cljs.core.nth.call(null,vec__52855,(0),null);
var navigator = cljs.core.nth.call(null,vec__52855,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (((((arg__$1 < (0))) || ((arg__$1 >= cljs.core.count.call(null,clauses)))))?cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params)):cljs.core.nth.call(null,clauses,arg__$1));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.boolean_conditional = (function cljs$pprint$boolean_conditional(params,arg_navigator,offsets){
var vec__52858 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__52858,(0),null);
var navigator = cljs.core.nth.call(null,vec__52858,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.second.call(null,clauses):cljs.core.first.call(null,clauses));
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return navigator;
}
});
cljs.pprint.check_arg_conditional = (function cljs$pprint$check_arg_conditional(params,arg_navigator,offsets){
var vec__52861 = cljs.pprint.next_arg.call(null,arg_navigator);
var arg = cljs.core.nth.call(null,vec__52861,(0),null);
var navigator = cljs.core.nth.call(null,vec__52861,(1),null);
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause = (cljs.core.truth_(arg)?cljs.core.first.call(null,clauses):null);
if(cljs.core.truth_(arg)){
if(cljs.core.truth_(clause)){
return cljs.pprint.execute_sub_format.call(null,clause,arg_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return arg_navigator;
}
} else {
return navigator;
}
});
cljs.pprint.iterate_sublist = (function cljs$pprint$iterate_sublist(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__52864 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__52864,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52864,(1),null);
var vec__52867 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__52867,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__52867,(1),null);
var args = cljs.pprint.init_navigator.call(null,arg_list);
var count = (0);
var args__$1 = args;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1),last_pos)) && ((count > (1))))){
throw Error("%{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3936__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(args__$1))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3936__auto__){
return or__3936__auto__;
} else {
var and__3925__auto__ = max_count;
if(cljs.core.truth_(and__3925__auto__)){
return (count >= max_count);
} else {
return and__3925__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,args__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__52870 = (count + (1));
var G__52871 = iter_result;
var G__52872 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(args__$1);
count = G__52870;
args__$1 = G__52871;
last_pos = G__52872;
continue;
}
}
break;
}
});
cljs.pprint.iterate_list_of_sublists = (function cljs$pprint$iterate_list_of_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__52873 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__52873,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52873,(1),null);
var vec__52876 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg_list = cljs.core.nth.call(null,vec__52876,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__52876,(1),null);
var count = (0);
var arg_list__$1 = arg_list;
while(true){
if(cljs.core.truth_((function (){var or__3936__auto__ = ((cljs.core.empty_QMARK_.call(null,arg_list__$1)) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3936__auto__){
return or__3936__auto__;
} else {
var and__3925__auto__ = max_count;
if(cljs.core.truth_(and__3925__auto__)){
return (count >= max_count);
} else {
return and__3925__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,cljs.core.first.call(null,arg_list__$1)),cljs.pprint.init_navigator.call(null,cljs.core.next.call(null,arg_list__$1)));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$2;
} else {
var G__52879 = (count + (1));
var G__52880 = cljs.core.next.call(null,arg_list__$1);
count = G__52879;
arg_list__$1 = G__52880;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_list = (function cljs$pprint$iterate_main_list(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__52881 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__52881,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52881,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
var last_pos = ((-1) | (0));
while(true){
if(((cljs.core.not.call(null,max_count)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2),last_pos)) && ((count > (1))))){
throw Error("%@{ construct not consuming any arguments: Infinite loop!");
} else {
}

if(cljs.core.truth_((function (){var or__3936__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3936__auto__){
return or__3936__auto__;
} else {
var and__3925__auto__ = max_count;
if(cljs.core.truth_(and__3925__auto__)){
return (count >= max_count);
} else {
return and__3925__auto__;
}
}
})())){
return navigator__$2;
} else {
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return cljs.core.second.call(null,iter_result);
} else {
var G__52884 = (count + (1));
var G__52885 = iter_result;
var G__52886 = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(navigator__$2);
count = G__52884;
navigator__$2 = G__52885;
last_pos = G__52886;
continue;
}
}
break;
}
});
cljs.pprint.iterate_main_sublists = (function cljs$pprint$iterate_main_sublists(params,navigator,offsets){
var max_count = new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563).cljs$core$IFn$_invoke$arity$1(params);
var param_clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var vec__52887 = ((cljs.core.empty_QMARK_.call(null,param_clause))?cljs.pprint.get_format_arg.call(null,navigator):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [param_clause,navigator], null));
var clause = cljs.core.nth.call(null,vec__52887,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52887,(1),null);
var count = (0);
var navigator__$2 = navigator__$1;
while(true){
if(cljs.core.truth_((function (){var or__3936__auto__ = ((cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator__$2))) && (((cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))) || ((count > (0))))));
if(or__3936__auto__){
return or__3936__auto__;
} else {
var and__3925__auto__ = max_count;
if(cljs.core.truth_(and__3925__auto__)){
return (count >= max_count);
} else {
return and__3925__auto__;
}
}
})())){
return navigator__$2;
} else {
var vec__52890 = cljs.pprint.next_arg_or_nil.call(null,navigator__$2);
var sublist = cljs.core.nth.call(null,vec__52890,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__52890,(1),null);
var iter_result = cljs.pprint.execute_sub_format.call(null,clause,cljs.pprint.init_navigator.call(null,sublist),navigator__$3);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007),cljs.core.first.call(null,iter_result))){
return navigator__$3;
} else {
var G__52893 = (count + (1));
var G__52894 = navigator__$3;
count = G__52893;
navigator__$2 = G__52894;
continue;
}
}
break;
}
});
cljs.pprint.logical_block_or_justify = (function cljs$pprint$logical_block_or_justify(params,navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"right-params","right-params",-1790676237).cljs$core$IFn$_invoke$arity$1(params)))){
return cljs.pprint.format_logical_block.call(null,params,navigator,offsets);
} else {
return cljs.pprint.justify_clauses.call(null,params,navigator,offsets);
}
});
cljs.pprint.render_clauses = (function cljs$pprint$render_clauses(clauses,navigator,base_navigator){
var clauses__$1 = clauses;
var acc = cljs.core.PersistentVector.EMPTY;
var navigator__$1 = navigator;
while(true){
if(cljs.core.empty_QMARK_.call(null,clauses__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,navigator__$1], null);
} else {
var clause = cljs.core.first.call(null,clauses__$1);
var vec__52895 = (function (){var sb = (new goog.string.StringBuffer());
var _STAR_out_STAR_52898 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = (new cljs.core.StringBufferWriter(sb));

try{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.execute_sub_format.call(null,clause,navigator__$1,base_navigator),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('')], null);
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_52898;
}})();
var iter_result = cljs.core.nth.call(null,vec__52895,(0),null);
var result_str = cljs.core.nth.call(null,vec__52895,(1),null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),cljs.core.first.call(null,iter_result))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,cljs.core.second.call(null,iter_result)], null);
} else {
var G__52899 = cljs.core.next.call(null,clauses__$1);
var G__52900 = cljs.core.conj.call(null,acc,result_str);
var G__52901 = iter_result;
clauses__$1 = G__52899;
acc = G__52900;
navigator__$1 = G__52901;
continue;
}
}
break;
}
});
cljs.pprint.justify_clauses = (function cljs$pprint$justify_clauses(params,navigator,offsets){
var vec__52902 = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var else$ = temp__5457__auto__;
return cljs.pprint.render_clauses.call(null,else$,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
} else {
return null;
}
})();
var vec__52905 = cljs.core.nth.call(null,vec__52902,(0),null);
var eol_str = cljs.core.nth.call(null,vec__52905,(0),null);
var new_navigator = cljs.core.nth.call(null,vec__52902,(1),null);
var navigator__$1 = (function (){var or__3936__auto__ = new_navigator;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return navigator;
}
})();
var vec__52908 = (function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"else-params","else-params",-832171646).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(temp__5457__auto__)){
var p = temp__5457__auto__;
return cljs.pprint.realize_parameter_list.call(null,p,navigator__$1);
} else {
return null;
}
})();
var else_params = cljs.core.nth.call(null,vec__52908,(0),null);
var new_navigator__$1 = cljs.core.nth.call(null,vec__52908,(1),null);
var navigator__$2 = (function (){var or__3936__auto__ = new_navigator__$1;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return navigator__$1;
}
})();
var min_remaining = (function (){var or__3936__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (0);
}
})();
var max_columns = (function (){var or__3936__auto__ = cljs.core.first.call(null,new cljs.core.Keyword(null,"max-columns","max-columns",1742323262).cljs$core$IFn$_invoke$arity$1(else_params));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.pprint.get_max_column.call(null,cljs.core._STAR_out_STAR_);
}
})();
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var vec__52911 = cljs.pprint.render_clauses.call(null,clauses,navigator__$2,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
var strs = cljs.core.nth.call(null,vec__52911,(0),null);
var navigator__$3 = cljs.core.nth.call(null,vec__52911,(1),null);
var slots = (function (){var x__4024__auto__ = (1);
var y__4025__auto__ = (((cljs.core.count.call(null,strs) - (1)) + (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(1):(0))) + (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?(1):(0)));
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})();
var chars = cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,cljs.core.count,strs));
var mincol = new cljs.core.Keyword(null,"mincol","mincol",1230695445).cljs$core$IFn$_invoke$arity$1(params);
var minpad = new cljs.core.Keyword(null,"minpad","minpad",323570901).cljs$core$IFn$_invoke$arity$1(params);
var colinc = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var minout = (chars + (slots * minpad));
var result_columns = (((minout <= mincol))?mincol:(mincol + (colinc * ((1) + cljs.core.quot.call(null,((minout - mincol) - (1)),colinc)))));
var total_pad = (result_columns - chars);
var pad = (function (){var x__4024__auto__ = minpad;
var y__4025__auto__ = cljs.core.quot.call(null,total_pad,slots);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})();
var extra_pad = (total_pad - (pad * slots));
var pad_str = cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,pad,new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params)));
if(cljs.core.truth_((function (){var and__3925__auto__ = eol_str;
if(cljs.core.truth_(and__3925__auto__)){
return (((cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))) + min_remaining) + result_columns) > max_columns);
} else {
return and__3925__auto__;
}
})())){
cljs.pprint.print.call(null,eol_str);
} else {
}

var slots_52914__$1 = slots;
var extra_pad_52915__$1 = extra_pad;
var strs_52916__$1 = strs;
var pad_only_52917 = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return ((cljs.core._EQ_.call(null,cljs.core.count.call(null,strs_52916__$1),(1))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))));
}
})();
while(true){
if(cljs.core.seq.call(null,strs_52916__$1)){
cljs.pprint.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core.not.call(null,pad_only_52917))?cljs.core.first.call(null,strs_52916__$1):null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_((function (){var or__3936__auto__ = pad_only_52917;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = cljs.core.next.call(null,strs_52916__$1);
if(or__3936__auto____$1){
return or__3936__auto____$1;
} else {
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
}
}
})())?pad_str:null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1((((extra_pad_52915__$1 > (0)))?new cljs.core.Keyword(null,"padchar","padchar",2018584530).cljs$core$IFn$_invoke$arity$1(params):null))].join(''));

var G__52918 = (slots_52914__$1 - (1));
var G__52919 = (extra_pad_52915__$1 - (1));
var G__52920 = (cljs.core.truth_(pad_only_52917)?strs_52916__$1:cljs.core.next.call(null,strs_52916__$1));
var G__52921 = false;
slots_52914__$1 = G__52918;
extra_pad_52915__$1 = G__52919;
strs_52916__$1 = G__52920;
pad_only_52917 = G__52921;
continue;
} else {
}
break;
}

return navigator__$3;
});
/**
 * Returns a proxy that wraps writer, converting all characters to lower case
 */
cljs.pprint.downcase_writer = (function cljs$pprint$downcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52922 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52922 = (function (writer,meta52923){
this.writer = writer;
this.meta52923 = meta52923;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52924,meta52923__$1){
var self__ = this;
var _52924__$1 = this;
return (new cljs.pprint.t_cljs$pprint52922(self__.writer,meta52923__$1));
});

cljs.pprint.t_cljs$pprint52922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52924){
var self__ = this;
var _52924__$1 = this;
return self__.meta52923;
});

cljs.pprint.t_cljs$pprint52922.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint52922.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52925 = cljs.core._EQ_;
var expr__52926 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52925.call(null,String,expr__52926))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
} else {
if(cljs.core.truth_(pred__52925.call(null,Number,expr__52926))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52926)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint52922.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta52923","meta52923",-1815965242,null)], null);
});

cljs.pprint.t_cljs$pprint52922.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52922.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52922";

cljs.pprint.t_cljs$pprint52922.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.pprint/t_cljs$pprint52922");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52922.
 */
cljs.pprint.__GT_t_cljs$pprint52922 = (function cljs$pprint$downcase_writer_$___GT_t_cljs$pprint52922(writer__$1,meta52923){
return (new cljs.pprint.t_cljs$pprint52922(writer__$1,meta52923));
});

}

return (new cljs.pprint.t_cljs$pprint52922(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, converting all characters to upper case
 */
cljs.pprint.upcase_writer = (function cljs$pprint$upcase_writer(writer){
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52928 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52928 = (function (writer,meta52929){
this.writer = writer;
this.meta52929 = meta52929;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52930,meta52929__$1){
var self__ = this;
var _52930__$1 = this;
return (new cljs.pprint.t_cljs$pprint52928(self__.writer,meta52929__$1));
});

cljs.pprint.t_cljs$pprint52928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52930){
var self__ = this;
var _52930__$1 = this;
return self__.meta52929;
});

cljs.pprint.t_cljs$pprint52928.prototype.cljs$core$IWriter$_flush$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});

cljs.pprint.t_cljs$pprint52928.prototype.cljs$core$IWriter$_write$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52931 = cljs.core._EQ_;
var expr__52932 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52931.call(null,String,expr__52932))){
var s = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,s));
} else {
if(cljs.core.truth_(pred__52931.call(null,Number,expr__52932))){
var c = x;
return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,cljs.core.char$.call(null,c)));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52932)].join('')));
}
}
});

cljs.pprint.t_cljs$pprint52928.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"meta52929","meta52929",1793541860,null)], null);
});

cljs.pprint.t_cljs$pprint52928.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52928.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52928";

cljs.pprint.t_cljs$pprint52928.cljs$lang$ctorPrWriter = (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.pprint/t_cljs$pprint52928");
});

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52928.
 */
cljs.pprint.__GT_t_cljs$pprint52928 = (function cljs$pprint$upcase_writer_$___GT_t_cljs$pprint52928(writer__$1,meta52929){
return (new cljs.pprint.t_cljs$pprint52928(writer__$1,meta52929));
});

}

return (new cljs.pprint.t_cljs$pprint52928(writer,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Capitalizes the words in a string. If first? is false, don't capitalize the
 *                                    first character of the string even if it's a letter.
 */
cljs.pprint.capitalize_string = (function cljs$pprint$capitalize_string(s,first_QMARK_){
var f = cljs.core.first.call(null,s);
var s__$1 = (cljs.core.truth_((function (){var and__3925__auto__ = first_QMARK_;
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = f;
if(cljs.core.truth_(and__3925__auto____$1)){
return goog.string.isUnicodeChar(f);
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,f)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(1)))].join(''):s);
return cljs.core.apply.call(null,cljs.core.str,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (f,s__$1){
return (function (s__$2){
if(cljs.core.empty_QMARK_.call(null,s__$2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null);
} else {
var m = RegExp("\\W\\w","g").exec(s__$2);
var offset = (function (){var and__3925__auto__ = m;
if(cljs.core.truth_(and__3925__auto__)){
return (m.index + (1));
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(offset)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s__$2,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s__$2,offset)))].join(''),cljs.core.subs.call(null,s__$2,(offset + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$2,null], null);
}
}
});})(f,s__$1))
,s__$1)));
});
/**
 * Returns a proxy that wraps writer, capitalizing all words
 */
cljs.pprint.capitalize_word_writer = (function cljs$pprint$capitalize_word_writer(writer){
var last_was_whitespace_QMARK_ = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52934 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52934 = (function (writer,last_was_whitespace_QMARK_,meta52935){
this.writer = writer;
this.last_was_whitespace_QMARK_ = last_was_whitespace_QMARK_;
this.meta52935 = meta52935;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (_52936,meta52935__$1){
var self__ = this;
var _52936__$1 = this;
return (new cljs.pprint.t_cljs$pprint52934(self__.writer,self__.last_was_whitespace_QMARK_,meta52935__$1));
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52934.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_52936){
var self__ = this;
var _52936__$1 = this;
return self__.meta52935;
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52934.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (last_was_whitespace_QMARK_){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52934.prototype.cljs$core$IWriter$_write$arity$2 = ((function (last_was_whitespace_QMARK_){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52937 = cljs.core._EQ_;
var expr__52938 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52937.call(null,String,expr__52938))){
var s = x;
cljs.core._write.call(null,self__.writer,cljs.pprint.capitalize_string.call(null,s.toLowerCase(),cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_)));

if((s.length > (0))){
return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(cljs.core.nth.call(null,s,(cljs.core.count.call(null,s) - (1)))));
} else {
return null;
}
} else {
if(cljs.core.truth_(pred__52937.call(null,Number,expr__52938))){
var c = cljs.core.char$.call(null,x);
var mod_c = (cljs.core.truth_(cljs.core.deref.call(null,self__.last_was_whitespace_QMARK_))?clojure.string.upper_case.call(null,c):c);
cljs.core._write.call(null,self__.writer,mod_c);

return cljs.core.reset_BANG_.call(null,self__.last_was_whitespace_QMARK_,goog.string.isEmptyOrWhitespace(c));
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52938)].join('')));
}
}
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52934.getBasis = ((function (last_was_whitespace_QMARK_){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"last-was-whitespace?","last-was-whitespace?",-1073928093,null),new cljs.core.Symbol(null,"meta52935","meta52935",-1489227686,null)], null);
});})(last_was_whitespace_QMARK_))
;

cljs.pprint.t_cljs$pprint52934.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52934.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52934";

cljs.pprint.t_cljs$pprint52934.cljs$lang$ctorPrWriter = ((function (last_was_whitespace_QMARK_){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.pprint/t_cljs$pprint52934");
});})(last_was_whitespace_QMARK_))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52934.
 */
cljs.pprint.__GT_t_cljs$pprint52934 = ((function (last_was_whitespace_QMARK_){
return (function cljs$pprint$capitalize_word_writer_$___GT_t_cljs$pprint52934(writer__$1,last_was_whitespace_QMARK___$1,meta52935){
return (new cljs.pprint.t_cljs$pprint52934(writer__$1,last_was_whitespace_QMARK___$1,meta52935));
});})(last_was_whitespace_QMARK_))
;

}

return (new cljs.pprint.t_cljs$pprint52934(writer,last_was_whitespace_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a proxy that wraps writer, capitalizing the first word
 */
cljs.pprint.init_cap_writer = (function cljs$pprint$init_cap_writer(writer){
var capped = cljs.core.atom.call(null,false);
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.t_cljs$pprint52940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IWriter}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.pprint.t_cljs$pprint52940 = (function (writer,capped,meta52941){
this.writer = writer;
this.capped = capped;
this.meta52941 = meta52941;
this.cljs$lang$protocol_mask$partition0$ = 1074135040;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.pprint.t_cljs$pprint52940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (capped){
return (function (_52942,meta52941__$1){
var self__ = this;
var _52942__$1 = this;
return (new cljs.pprint.t_cljs$pprint52940(self__.writer,self__.capped,meta52941__$1));
});})(capped))
;

cljs.pprint.t_cljs$pprint52940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (capped){
return (function (_52942){
var self__ = this;
var _52942__$1 = this;
return self__.meta52941;
});})(capped))
;

cljs.pprint.t_cljs$pprint52940.prototype.cljs$core$IWriter$_flush$arity$1 = ((function (capped){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core._flush.call(null,self__.writer);
});})(capped))
;

cljs.pprint.t_cljs$pprint52940.prototype.cljs$core$IWriter$_write$arity$2 = ((function (capped){
return (function (this$,x){
var self__ = this;
var this$__$1 = this;
var pred__52943 = cljs.core._EQ_;
var expr__52944 = cljs.core.type.call(null,x);
if(cljs.core.truth_(pred__52943.call(null,String,expr__52944))){
var s = clojure.string.lower_case.call(null,x);
if(cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped))){
var m = RegExp("\\S","g").exec(s);
var offset = (function (){var and__3925__auto__ = m;
if(cljs.core.truth_(and__3925__auto__)){
return m.index;
} else {
return and__3925__auto__;
}
})();
if(cljs.core.truth_(offset)){
cljs.core._write.call(null,self__.writer,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.call(null,s,(0),offset)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.upper_case.call(null,cljs.core.nth.call(null,s,offset))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,cljs.core.subs.call(null,s,(offset + (1)))))].join(''));

return cljs.core.reset_BANG_.call(null,self__.capped,true);
} else {
return cljs.core._write.call(null,self__.writer,s);
}
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,s));
}
} else {
if(cljs.core.truth_(pred__52943.call(null,Number,expr__52944))){
var c = cljs.core.char$.call(null,x);
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.not.call(null,cljs.core.deref.call(null,self__.capped));
if(and__3925__auto__){
return goog.string.isUnicodeChar(c);
} else {
return and__3925__auto__;
}
})())){
cljs.core.reset_BANG_.call(null,self__.capped,true);

return cljs.core._write.call(null,self__.writer,clojure.string.upper_case.call(null,c));
} else {
return cljs.core._write.call(null,self__.writer,clojure.string.lower_case.call(null,c));
}
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expr__52944)].join('')));
}
}
});})(capped))
;

cljs.pprint.t_cljs$pprint52940.getBasis = ((function (capped){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"writer","writer",1362963291,null),new cljs.core.Symbol(null,"capped","capped",-1650988402,null),new cljs.core.Symbol(null,"meta52941","meta52941",-432124496,null)], null);
});})(capped))
;

cljs.pprint.t_cljs$pprint52940.cljs$lang$type = true;

cljs.pprint.t_cljs$pprint52940.cljs$lang$ctorStr = "cljs.pprint/t_cljs$pprint52940";

cljs.pprint.t_cljs$pprint52940.cljs$lang$ctorPrWriter = ((function (capped){
return (function (this__4179__auto__,writer__4180__auto__,opt__4181__auto__){
return cljs.core._write.call(null,writer__4180__auto__,"cljs.pprint/t_cljs$pprint52940");
});})(capped))
;

/**
 * Positional factory function for cljs.pprint/t_cljs$pprint52940.
 */
cljs.pprint.__GT_t_cljs$pprint52940 = ((function (capped){
return (function cljs$pprint$init_cap_writer_$___GT_t_cljs$pprint52940(writer__$1,capped__$1,meta52941){
return (new cljs.pprint.t_cljs$pprint52940(writer__$1,capped__$1,meta52941));
});})(capped))
;

}

return (new cljs.pprint.t_cljs$pprint52940(writer,capped,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.pprint.modify_case = (function cljs$pprint$modify_case(make_writer,params,navigator,offsets){
var clause = cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params));
var _STAR_out_STAR_52946 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = make_writer.call(null,cljs.core._STAR_out_STAR_);

try{return cljs.pprint.execute_sub_format.call(null,clause,navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_52946;
}});
/**
 * Returns the IWriter passed in wrapped in a pretty writer proxy, unless it's
 * already a pretty writer. Generally, it is unnecessary to call this function, since pprint,
 * write, and cl-format all call it if they need to. However if you want the state to be
 * preserved across calls, you will want to wrap them with this.
 * 
 * For example, when you want to generate column-aware output with multiple calls to cl-format,
 * do it like in this example:
 * 
 *  (defn print-table [aseq column-width]
 *    (binding [*out* (get-pretty-writer *out*)]
 *      (doseq [row aseq]
 *        (doseq [col row]
 *          (cl-format true "~4D~7,vT" col column-width))
 *        (prn))))
 * 
 * Now when you run:
 * 
 *  user> (print-table (map #(vector % (* % %) (* % % %)) (range 1 11)) 8)
 * 
 * It prints a table of squares and cubes for the numbers from 1 to 10:
 * 
 *     1      1       1
 *     2      4       8
 *     3      9      27
 *     4     16      64
 *     5     25     125
 *     6     36     216
 *     7     49     343
 *     8     64     512
 *     9     81     729
 *    10    100    1000
 */
cljs.pprint.get_pretty_writer = (function cljs$pprint$get_pretty_writer(writer){
if(cljs.core.truth_(cljs.pprint.pretty_writer_QMARK_.call(null,writer))){
return writer;
} else {
return cljs.pprint.pretty_writer.call(null,writer,cljs.pprint._STAR_print_right_margin_STAR_,cljs.pprint._STAR_print_miser_width_STAR_);
}
});
/**
 * Make a newline if *out* is not already at the beginning of the line. If *out* is
 * not a pretty writer (which keeps track of columns), this function always outputs a newline.
 */
cljs.pprint.fresh_line = (function cljs$pprint$fresh_line(){
if(((!((cljs.core._STAR_out_STAR_ == null)))?(((((cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === cljs.core._STAR_out_STAR_.cljs$core$IDeref$))))?true:(((!cljs.core._STAR_out_STAR_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,cljs.core._STAR_out_STAR_))){
if(!(cljs.core._EQ_.call(null,(0),cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))))))){
return cljs.pprint.prn.call(null);
} else {
return null;
}
} else {
return cljs.pprint.prn.call(null);
}
});
cljs.pprint.absolute_tabulation = (function cljs$pprint$absolute_tabulation(params,navigator,offsets){
var colnum_52948 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_52949 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var current_52950 = cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_))));
var space_count_52951 = (((current_52950 < colnum_52948))?(colnum_52948 - current_52950):((cljs.core._EQ_.call(null,colinc_52949,(0)))?(0):(colinc_52949 - cljs.core.rem.call(null,(current_52950 - colnum_52948),colinc_52949))
));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_52951," ")));

return navigator;
});
cljs.pprint.relative_tabulation = (function cljs$pprint$relative_tabulation(params,navigator,offsets){
var colrel_52952 = new cljs.core.Keyword(null,"colnum","colnum",2023796854).cljs$core$IFn$_invoke$arity$1(params);
var colinc_52953 = new cljs.core.Keyword(null,"colinc","colinc",-584873385).cljs$core$IFn$_invoke$arity$1(params);
var start_col_52954 = (colrel_52952 + cljs.pprint.get_column.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,cljs.core.deref.call(null,cljs.core._STAR_out_STAR_)))));
var offset_52955 = (((colinc_52953 > (0)))?cljs.core.rem.call(null,start_col_52954,colinc_52953):(0));
var space_count_52956 = (colrel_52952 + ((cljs.core._EQ_.call(null,(0),offset_52955))?(0):(colinc_52953 - offset_52955)));
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,space_count_52956," ")));

return navigator;
});
cljs.pprint.format_logical_block = (function cljs$pprint$format_logical_block(params,navigator,offsets){
var clauses = new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(params);
var clause_count = cljs.core.count.call(null,clauses);
var prefix = (((clause_count > (1)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,clauses)))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?"(":null));
var body = cljs.core.nth.call(null,clauses,(((clause_count > (1)))?(1):(0)));
var suffix = (((clause_count > (2)))?new cljs.core.Keyword(null,"string","string",-1989541586).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.nth.call(null,clauses,(2))))):(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?")":null));
var vec__52957 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__52957,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__52957,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_52960_52962 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_52961_52963 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,suffix);

cljs.pprint.execute_sub_format.call(null,body,cljs.pprint.init_navigator.call(null,arg),new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_52961_52963;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_52960_52962;
}}


return navigator__$1;
});
cljs.pprint.set_indent = (function cljs$pprint$set_indent(params,navigator,offsets){
var relative_to = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"current","current",-1088038603):new cljs.core.Keyword(null,"block","block",664686210));
cljs.pprint.pprint_indent.call(null,relative_to,new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params));

return navigator;
});
cljs.pprint.conditional_newline = (function cljs$pprint$conditional_newline(params,navigator,offsets){
var kind = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"mandatory","mandatory",542802336):new cljs.core.Keyword(null,"fill","fill",883462889)):(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"miser","miser",-556060186):new cljs.core.Keyword(null,"linear","linear",872268697)));
cljs.pprint.pprint_newline.call(null,kind);

return navigator;
});
cljs.pprint.directive_table = cljs.core.PersistentHashMap.fromArrays(["A","S","D","B","O","X","R","P","C","F","E","G","$","%","&","|","~","\n","T","*","?","(",")","[",";","]","{","}","<",">","^","W","_","I"],[new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"A",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__52964_SHARP_,p2__52965_SHARP_,p3__52966_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.print_str,p1__52964_SHARP_,p2__52965_SHARP_,p3__52966_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"S",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__52967_SHARP_,p2__52968_SHARP_,p3__52969_SHARP_){
return cljs.pprint.format_ascii.call(null,cljs.core.pr_str,p1__52967_SHARP_,p2__52968_SHARP_,p3__52969_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"D",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__52970_SHARP_,p2__52971_SHARP_,p3__52972_SHARP_){
return cljs.pprint.format_integer.call(null,(10),p1__52970_SHARP_,p2__52971_SHARP_,p3__52972_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"B",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__52973_SHARP_,p2__52974_SHARP_,p3__52975_SHARP_){
return cljs.pprint.format_integer.call(null,(2),p1__52973_SHARP_,p2__52974_SHARP_,p3__52975_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"O",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__52976_SHARP_,p2__52977_SHARP_,p3__52978_SHARP_){
return cljs.pprint.format_integer.call(null,(8),p1__52976_SHARP_,p2__52977_SHARP_,p3__52978_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"X",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (p1__52979_SHARP_,p2__52980_SHARP_,p3__52981_SHARP_){
return cljs.pprint.format_integer.call(null,(16),p1__52979_SHARP_,p2__52980_SHARP_,p3__52981_SHARP_);
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"R",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"base","base",185279322),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"commachar","commachar",652859327),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [",",String], null),new cljs.core.Keyword(null,"commainterval","commainterval",-1980061083),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(cljs.core.first.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(params)))){
return (function (p1__52982_SHARP_,p2__52983_SHARP_,p3__52984_SHARP_){
return cljs.pprint.format_integer.call(null,new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(p1__52982_SHARP_),p1__52982_SHARP_,p2__52983_SHARP_,p3__52984_SHARP_);
});
} else {
if(cljs.core.truth_((function (){var and__3925__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3925__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3925__auto__;
}
})())){
return (function (p1__52985_SHARP_,p2__52986_SHARP_,p3__52987_SHARP_){
return cljs.pprint.format_old_roman.call(null,p1__52985_SHARP_,p2__52986_SHARP_,p3__52987_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__52988_SHARP_,p2__52989_SHARP_,p3__52990_SHARP_){
return cljs.pprint.format_new_roman.call(null,p1__52988_SHARP_,p2__52989_SHARP_,p3__52990_SHARP_);
});
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__52991_SHARP_,p2__52992_SHARP_,p3__52993_SHARP_){
return cljs.pprint.format_ordinal_english.call(null,p1__52991_SHARP_,p2__52992_SHARP_,p3__52993_SHARP_);
});
} else {
return (function (p1__52994_SHARP_,p2__52995_SHARP_,p3__52996_SHARP_){
return cljs.pprint.format_cardinal_english.call(null,p1__52994_SHARP_,p2__52995_SHARP_,p3__52996_SHARP_);
});

}
}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"P",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var navigator__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.pprint.relative_reposition.call(null,navigator,(-1)):navigator);
var strs = (cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["y","ies"], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["","s"], null));
var vec__53006 = cljs.pprint.next_arg.call(null,navigator__$1);
var arg = cljs.core.nth.call(null,vec__53006,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__53006,(1),null);
cljs.pprint.print.call(null,((cljs.core._EQ_.call(null,arg,(1)))?cljs.core.first.call(null,strs):cljs.core.second.call(null,strs)));

return navigator__$2;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"C",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"char-format","char-format",-1016499218),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.pretty_character;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.readable_character;
} else {
return cljs.pprint.plain_character;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"F",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(5),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.fixed_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"E",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.exponential_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"G",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(7),[new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"e","e",1381269198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"k","k",-2146297393),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"overflowchar","overflowchar",-1620088106),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null),new cljs.core.Keyword(null,"exponentchar","exponentchar",1986664222),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.general_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"$",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"d","d",1972142424),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),Number], null),new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.dollar_float;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"%",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4394__auto___53024 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_53025 = (0);
while(true){
if((i_53025 < n__4394__auto___53024)){
cljs.pprint.prn.call(null);

var G__53026 = (i_53025 + (1));
i_53025 = G__53026;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"&",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var cnt_53027 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
if((cnt_53027 > (0))){
cljs.pprint.fresh_line.call(null);
} else {
}

var n__4394__auto___53028 = (cnt_53027 - (1));
var i_53029 = (0);
while(true){
if((i_53029 < n__4394__auto___53028)){
cljs.pprint.prn.call(null);

var G__53030 = (i_53029 + (1));
i_53029 = G__53030;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"|",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"count","count",2139924085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n__4394__auto___53031 = new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(params__$1);
var i_53032 = (0);
while(true){
if((i_53032 < n__4394__auto___53031)){
cljs.pprint.print.call(null,"\f");

var G__53033 = (i_53032 + (1));
i_53032 = G__53033;
continue;
} else {
}
break;
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"~",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
cljs.pprint.print.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,n,"~")));

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"\n",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,arg_navigator,offsets){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
cljs.pprint.prn.call(null);
} else {
}

return arg_navigator;
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"T",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"colnum","colnum",2023796854),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (p1__52997_SHARP_,p2__52998_SHARP_,p3__52999_SHARP_){
return cljs.pprint.relative_tabulation.call(null,p1__52997_SHARP_,p2__52998_SHARP_,p3__52999_SHARP_);
});
} else {
return (function (p1__53000_SHARP_,p2__53001_SHARP_,p3__53002_SHARP_){
return cljs.pprint.absolute_tabulation.call(null,p1__53000_SHARP_,p2__53001_SHARP_,p3__53002_SHARP_);
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"*",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var n = new cljs.core.Keyword(null,"n","n",562130025).cljs$core$IFn$_invoke$arity$1(params__$1);
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params__$1))){
return cljs.pprint.absolute_reposition.call(null,navigator,n);
} else {
return cljs.pprint.relative_reposition.call(null,navigator,(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?(- n):n));
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"?",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return (function (params__$1,navigator,offsets){
var vec__53009 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__53009,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__53009,(1),null);
return cljs.pprint.execute_sub_format.call(null,subformat,navigator__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));
});
} else {
return (function (params__$1,navigator,offsets){
var vec__53012 = cljs.pprint.get_format_arg.call(null,navigator);
var subformat = cljs.core.nth.call(null,vec__53012,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__53012,(1),null);
var vec__53015 = cljs.pprint.next_arg.call(null,navigator__$1);
var subargs = cljs.core.nth.call(null,vec__53015,(0),null);
var navigator__$2 = cljs.core.nth.call(null,vec__53015,(1),null);
var sub_navigator = cljs.pprint.init_navigator.call(null,subargs);
cljs.pprint.execute_sub_format.call(null,subformat,sub_navigator,new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1));

return navigator__$2;
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"(",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),")",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),null,new cljs.core.Keyword(null,"else","else",-1508377146),null], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
var mod_case_writer = (cljs.core.truth_((function (){var and__3925__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3925__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3925__auto__;
}
})())?cljs.pprint.upcase_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.capitalize_word_writer:(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?cljs.pprint.init_cap_writer:cljs.pprint.downcase_writer
)));
return ((function (mod_case_writer){
return (function (p1__53003_SHARP_,p2__53004_SHARP_,p3__53005_SHARP_){
return cljs.pprint.modify_case.call(null,mod_case_writer,p1__53003_SHARP_,p2__53004_SHARP_,p3__53005_SHARP_);
});
;})(mod_case_writer))
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),")",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"[",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"selector","selector",762528866),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),"]",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"last","last",1105735132)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.boolean_conditional;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.check_arg_conditional;
} else {
return cljs.pprint.choice_conditional;

}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),";",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(2),[new cljs.core.Keyword(null,"min-remaining","min-remaining",962687677),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"max-columns","max-columns",1742323262),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"]",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"{",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"max-iterations","max-iterations",2021275563),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"right","right",-452581833),"}",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),false], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var and__3925__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(and__3925__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__3925__auto__;
}
})())){
return cljs.pprint.iterate_main_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_list_of_sublists;
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))){
return cljs.pprint.iterate_main_list;
} else {
return cljs.pprint.iterate_sublist;

}
}
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"}",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"<",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(4),[new cljs.core.Keyword(null,"mincol","mincol",1230695445),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"colinc","colinc",-584873385),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),Number], null),new cljs.core.Keyword(null,"minpad","minpad",323570901),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null),new cljs.core.Keyword(null,"padchar","padchar",2018584530),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ",String], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"right","right",-452581833),">",new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742),true,new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.Keyword(null,"first","first",-644103046)], null),new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.logical_block_or_justify;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),">",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return null;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"^",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(3),[new cljs.core.Keyword(null,"arg1","arg1",951899358),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg2","arg2",1729550917),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null),new cljs.core.Keyword(null,"arg3","arg3",-1486822496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return (function (params__$1,navigator,offsets){
var arg1 = new cljs.core.Keyword(null,"arg1","arg1",951899358).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg2 = new cljs.core.Keyword(null,"arg2","arg2",1729550917).cljs$core$IFn$_invoke$arity$1(params__$1);
var arg3 = new cljs.core.Keyword(null,"arg3","arg3",-1486822496).cljs$core$IFn$_invoke$arity$1(params__$1);
var exit = (cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?new cljs.core.Keyword(null,"colon-up-arrow","colon-up-arrow",244853007):new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333));
if(cljs.core.truth_((function (){var and__3925__auto__ = arg1;
if(cljs.core.truth_(and__3925__auto__)){
var and__3925__auto____$1 = arg2;
if(cljs.core.truth_(and__3925__auto____$1)){
return arg3;
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())){
if((((arg1 <= arg2)) && ((arg2 <= arg3)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_((function (){var and__3925__auto__ = arg1;
if(cljs.core.truth_(and__3925__auto__)){
return arg2;
} else {
return and__3925__auto__;
}
})())){
if(cljs.core._EQ_.call(null,arg1,arg2)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if(cljs.core.truth_(arg1)){
if(cljs.core._EQ_.call(null,arg1,(0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}
} else {
if((cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params__$1))?cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"base-args","base-args",-1268706822).cljs$core$IFn$_invoke$arity$1(params__$1))):cljs.core.empty_QMARK_.call(null,new cljs.core.Keyword(null,"rest","rest",-1241696419).cljs$core$IFn$_invoke$arity$1(navigator)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [exit,navigator], null);
} else {
return navigator;
}

}
}
}
});
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"W",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null,new cljs.core.Keyword(null,"pretty","pretty",-1916372486),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params);
}
})())){
var bindings = cljs.core.concat.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"level","level",1290497552),null,new cljs.core.Keyword(null,"length","length",588987862),null], null):cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pretty","pretty",-1916372486),true], null):cljs.core.PersistentVector.EMPTY));
return ((function (bindings){
return (function (params__$1,navigator,offsets){
var vec__53018 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__53018,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__53018,(1),null);
if(cljs.core.truth_(cljs.core.apply.call(null,cljs.pprint.write,arg,bindings))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
;})(bindings))
} else {
return (function (params__$1,navigator,offsets){
var vec__53021 = cljs.pprint.next_arg.call(null,navigator);
var arg = cljs.core.nth.call(null,vec__53021,(0),null);
var navigator__$1 = cljs.core.nth.call(null,vec__53021,(1),null);
if(cljs.core.truth_(cljs.pprint.write_out.call(null,arg))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"up-arrow","up-arrow",1705310333),navigator__$1], null);
} else {
return navigator__$1;
}
});
}
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"_",new cljs.core.Keyword(null,"params","params",710516235),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colon","colon",-965200945),null,new cljs.core.Keyword(null,"at","at",1476951349),null,new cljs.core.Keyword(null,"both","both",-393648840),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.conditional_newline;
})], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"directive","directive",793559132),"I",new cljs.core.Keyword(null,"params","params",710516235),(new cljs.core.PersistentArrayMap(null,(1),[new cljs.core.Keyword(null,"n","n",562130025),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),Number], null)],null)),new cljs.core.Keyword(null,"flags","flags",1775418075),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"colon","colon",-965200945),null], null), null),new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656),(function (params,offset){
return cljs.pprint.set_indent;
})], null)]);
cljs.pprint.param_pattern = /^([vV]|#|('.)|([+-]?\d+)|(?=,))/;
cljs.pprint.special_params = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335),null,new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196),null], null), null);
cljs.pprint.extract_param = (function cljs$pprint$extract_param(p__53034){
var vec__53035 = p__53034;
var s = cljs.core.nth.call(null,vec__53035,(0),null);
var offset = cljs.core.nth.call(null,vec__53035,(1),null);
var saw_comma = cljs.core.nth.call(null,vec__53035,(2),null);
var m = (new RegExp(cljs.pprint.param_pattern.source,"g"));
var param = m.exec(s);
if(cljs.core.truth_(param)){
var token_str = cljs.core.first.call(null,param);
var remainder = cljs.core.subs.call(null,s,m.lastIndex);
var new_offset = (offset + m.lastIndex);
if(!(cljs.core._EQ_.call(null,",",cljs.core.nth.call(null,remainder,(0))))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder,new_offset,false], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [token_str,offset], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,remainder,(1)),(new_offset + (1)),true], null)], null);
}
} else {
if(cljs.core.truth_(saw_comma)){
return cljs.pprint.format_error.call(null,"Badly formed parameters in format directive",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset], null)], null);
}
}
});
cljs.pprint.extract_params = (function cljs$pprint$extract_params(s,offset){
return cljs.pprint.consume.call(null,cljs.pprint.extract_param,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,false], null));
});
/**
 * Translate the string representation of a param to the internalized
 *                                    representation
 */
cljs.pprint.translate_param = (function cljs$pprint$translate_param(p__53038){
var vec__53039 = p__53038;
var p = cljs.core.nth.call(null,vec__53039,(0),null);
var offset = cljs.core.nth.call(null,vec__53039,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.call(null,p.length,(0)))?null:((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["V",null,"v",null], null), null),cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"parameter-from-args","parameter-from-args",-758446196):((((cljs.core._EQ_.call(null,p.length,(1))) && (cljs.core._EQ_.call(null,"#",cljs.core.nth.call(null,p,(0))))))?new cljs.core.Keyword(null,"remaining-arg-count","remaining-arg-count",-1216589335):((((cljs.core._EQ_.call(null,p.length,(2))) && (cljs.core._EQ_.call(null,"'",cljs.core.nth.call(null,p,(0))))))?cljs.core.nth.call(null,p,(1)):parseInt(p,(10))
)))),offset], null);
});
cljs.pprint.flag_defs = new cljs.core.PersistentArrayMap(null, 2, [":",new cljs.core.Keyword(null,"colon","colon",-965200945),"@",new cljs.core.Keyword(null,"at","at",1476951349)], null);
cljs.pprint.extract_flags = (function cljs$pprint$extract_flags(s,offset){
return cljs.pprint.consume.call(null,(function (p__53042){
var vec__53043 = p__53042;
var s__$1 = cljs.core.nth.call(null,vec__53043,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__53043,(1),null);
var flags = cljs.core.nth.call(null,vec__53043,(2),null);
if(cljs.core.empty_QMARK_.call(null,s__$1)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
} else {
var flag = cljs.core.get.call(null,cljs.pprint.flag_defs,cljs.core.first.call(null,s__$1));
if(cljs.core.truth_(flag)){
if(cljs.core.contains_QMARK_.call(null,flags,flag)){
return cljs.pprint.format_error.call(null,["Flag \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,s__$1)),"\" appears more than once in a directive"].join(''),offset__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s__$1,(1)),(offset__$1 + (1)),cljs.core.assoc.call(null,flags,flag,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,offset__$1], null))], null)], null);
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s__$1,offset__$1,flags], null)], null);
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,offset,cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.pprint.check_flags = (function cljs$pprint$check_flags(def,flags){
var allowed = new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(def);
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3925__auto__){
return new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3925__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\"@\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3925__auto__){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3925__auto__;
}
})())){
cljs.pprint.format_error.call(null,["\":\" is an illegal flag for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1)));
} else {
}

if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"both","both",-393648840).cljs$core$IFn$_invoke$arity$1(allowed));
if(and__3925__auto__){
var and__3925__auto____$1 = new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags);
if(cljs.core.truth_(and__3925__auto____$1)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags);
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())){
return cljs.pprint.format_error.call(null,["Cannot combine \"@\" and \":\" flags for format directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\""].join(''),(function (){var x__4027__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(flags),(1));
var y__4028__auto__ = cljs.core.nth.call(null,new cljs.core.Keyword(null,"at","at",1476951349).cljs$core$IFn$_invoke$arity$1(flags),(1));
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})());
} else {
return null;
}
});
/**
 * Takes a directive definition and the list of actual parameters and
 * a map of flags and returns a map of the parameters and flags with defaults
 * filled in. We check to make sure that there are the right types and number
 * of parameters as well.
 */
cljs.pprint.map_params = (function cljs$pprint$map_params(def,params,flags,offset){
cljs.pprint.check_flags.call(null,def,flags);

if((cljs.core.count.call(null,params) > cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)))){
cljs.pprint.format_error.call(null,cljs.pprint.cl_format.call(null,null,"Too many parameters for directive \"~C\": ~D~:* ~[were~;was~:;were~] specified but only ~D~:* ~[are~;is~:;are~] allowed",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def),cljs.core.count.call(null,params),cljs.core.count.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def))),cljs.core.second.call(null,cljs.core.first.call(null,params)));
} else {
}

cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__53046_SHARP_,p2__53047_SHARP_){
var val = cljs.core.first.call(null,p1__53046_SHARP_);
if(!((((val == null)) || (cljs.core.contains_QMARK_.call(null,cljs.pprint.special_params,val)) || (cljs.core._EQ_.call(null,cljs.core.second.call(null,cljs.core.second.call(null,p2__53047_SHARP_)),cljs.core.type.call(null,val)))))){
return cljs.pprint.format_error.call(null,["Parameter ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,cljs.core.first.call(null,p2__53047_SHARP_)))," has bad type in directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def)),"\": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type.call(null,val))].join(''),cljs.core.second.call(null,p1__53046_SHARP_));
} else {
return null;
}
}),params,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)));

return cljs.core.merge.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse.call(null,(function (){var iter__4310__auto__ = (function cljs$pprint$map_params_$_iter__53051(s__53052){
return (new cljs.core.LazySeq(null,(function (){
var s__53052__$1 = s__53052;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__53052__$1);
if(temp__5457__auto__){
var s__53052__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53052__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__53052__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__53054 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__53053 = (0);
while(true){
if((i__53053 < size__4309__auto__)){
var vec__53055 = cljs.core._nth.call(null,c__4308__auto__,i__53053);
var name = cljs.core.nth.call(null,vec__53055,(0),null);
var vec__53058 = cljs.core.nth.call(null,vec__53055,(1),null);
var default$ = cljs.core.nth.call(null,vec__53058,(0),null);
cljs.core.chunk_append.call(null,b__53054,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null));

var G__53067 = (i__53053 + (1));
i__53053 = G__53067;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53054),cljs$pprint$map_params_$_iter__53051.call(null,cljs.core.chunk_rest.call(null,s__53052__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53054),null);
}
} else {
var vec__53061 = cljs.core.first.call(null,s__53052__$2);
var name = cljs.core.nth.call(null,vec__53061,(0),null);
var vec__53064 = cljs.core.nth.call(null,vec__53061,(1),null);
var default$ = cljs.core.nth.call(null,vec__53064,(0),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [default$,offset], null)], null),cljs$pprint$map_params_$_iter__53051.call(null,cljs.core.rest.call(null,s__53052__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def));
})())),cljs.core.reduce.call(null,(function (p1__53048_SHARP_,p2__53049_SHARP_){
return cljs.core.apply.call(null,cljs.core.assoc,p1__53048_SHARP_,p2__53049_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.filter.call(null,(function (p1__53050_SHARP_){
return cljs.core.first.call(null,cljs.core.nth.call(null,p1__53050_SHARP_,(1)));
}),cljs.core.zipmap.call(null,cljs.core.keys.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(def)),params))),flags);
});
cljs.pprint.compile_directive = (function cljs$pprint$compile_directive(s,offset){
var vec__53068 = cljs.pprint.extract_params.call(null,s,offset);
var raw_params = cljs.core.nth.call(null,vec__53068,(0),null);
var vec__53071 = cljs.core.nth.call(null,vec__53068,(1),null);
var rest = cljs.core.nth.call(null,vec__53071,(0),null);
var offset__$1 = cljs.core.nth.call(null,vec__53071,(1),null);
var vec__53074 = cljs.pprint.extract_flags.call(null,rest,offset__$1);
var _ = cljs.core.nth.call(null,vec__53074,(0),null);
var vec__53077 = cljs.core.nth.call(null,vec__53074,(1),null);
var rest__$1 = cljs.core.nth.call(null,vec__53077,(0),null);
var offset__$2 = cljs.core.nth.call(null,vec__53077,(1),null);
var flags = cljs.core.nth.call(null,vec__53077,(2),null);
var directive = cljs.core.first.call(null,rest__$1);
var def = cljs.core.get.call(null,cljs.pprint.directive_table,clojure.string.upper_case.call(null,directive));
var params = (cljs.core.truth_(def)?cljs.pprint.map_params.call(null,def,cljs.core.map.call(null,cljs.pprint.translate_param,raw_params),flags,offset__$2):null);
if(cljs.core.not.call(null,directive)){
cljs.pprint.format_error.call(null,"Format string ended in the middle of a directive",offset__$2);
} else {
}

if(cljs.core.not.call(null,def)){
cljs.pprint.format_error.call(null,["Directive \"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(directive),"\" is undefined"].join(''),offset__$2);
} else {
}

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"generator-fn","generator-fn",811851656).cljs$core$IFn$_invoke$arity$1(def).call(null,params,offset__$2),def,params,offset__$2,null,null,null)),(function (){var remainder = cljs.core.subs.call(null,rest__$1,(1));
var offset__$3 = (offset__$2 + (1));
var trim_QMARK_ = ((cljs.core._EQ_.call(null,"\n",new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(def))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(params))));
var trim_count = ((trim_QMARK_)?cljs.pprint.prefix_count.call(null,remainder,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [" ","\t"], null)):(0));
var remainder__$1 = cljs.core.subs.call(null,remainder,trim_count);
var offset__$4 = (offset__$3 + trim_count);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [remainder__$1,offset__$4], null);
})()], null);
});
cljs.pprint.compile_raw_string = (function cljs$pprint$compile_raw_string(s,offset){
return (new cljs.pprint.compiled_directive((function (_,a,___$1){
cljs.pprint.print.call(null,s);

return a;
}),null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"string","string",-1989541586),s], null),offset,null,null,null));
});
cljs.pprint.right_bracket = (function cljs$pprint$right_bracket(this$){
return new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.separator_QMARK_ = (function cljs$pprint$separator_QMARK_(this$){
return new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
});
cljs.pprint.else_separator_QMARK_ = (function cljs$pprint$else_separator_QMARK_(this$){
var and__3925__auto__ = new cljs.core.Keyword(null,"separator","separator",-1628749125).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)));
if(cljs.core.truth_(and__3925__auto__)){
return new cljs.core.Keyword(null,"colon","colon",-965200945).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$));
} else {
return and__3925__auto__;
}
});
cljs.pprint.process_bracket = (function cljs$pprint$process_bracket(this$,remainder){
var vec__53080 = cljs.pprint.collect_clauses.call(null,new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),remainder);
var subex = cljs.core.nth.call(null,vec__53080,(0),null);
var remainder__$1 = cljs.core.nth.call(null,vec__53080,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.pprint.compiled_directive(new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(this$),new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$),cljs.core.merge.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),cljs.pprint.tuple_map.call(null,subex,new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$))),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(this$),null,null,null)),remainder__$1], null);
});
cljs.pprint.process_clause = (function cljs$pprint$process_clause(bracket_info,offset,remainder){
return cljs.pprint.consume.call(null,(function (remainder__$1){
if(cljs.core.empty_QMARK_.call(null,remainder__$1)){
return cljs.pprint.format_error.call(null,"No closing bracket found.",offset);
} else {
var this$ = cljs.core.first.call(null,remainder__$1);
var remainder__$2 = cljs.core.next.call(null,remainder__$1);
if(cljs.core.truth_(cljs.pprint.right_bracket.call(null,this$))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$2);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket_info),new cljs.core.Keyword(null,"directive","directive",793559132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),null,remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.else_separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"else","else",-1508377146),null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(this$),remainder__$2], null)], null);
} else {
if(cljs.core.truth_(cljs.pprint.separator_QMARK_.call(null,this$))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125),null,null,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$2], null);

}
}
}
}
}
}),remainder);
});
cljs.pprint.collect_clauses = (function cljs$pprint$collect_clauses(bracket_info,offset,remainder){
return cljs.core.second.call(null,cljs.pprint.consume.call(null,(function (p__53083){
var vec__53084 = p__53083;
var clause_map = cljs.core.nth.call(null,vec__53084,(0),null);
var saw_else = cljs.core.nth.call(null,vec__53084,(1),null);
var remainder__$1 = cljs.core.nth.call(null,vec__53084,(2),null);
var vec__53087 = cljs.pprint.process_clause.call(null,bracket_info,offset,remainder__$1);
var clause = cljs.core.nth.call(null,vec__53087,(0),null);
var vec__53090 = cljs.core.nth.call(null,vec__53087,(1),null);
var type = cljs.core.nth.call(null,vec__53090,(0),null);
var right_params = cljs.core.nth.call(null,vec__53090,(1),null);
var else_params = cljs.core.nth.call(null,vec__53090,(2),null);
var remainder__$2 = cljs.core.nth.call(null,vec__53090,(3),null);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"right-bracket","right-bracket",951856080))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,cljs.core.PersistentArrayMap.createAsIfByAssoc([(cljs.core.truth_(saw_else)?new cljs.core.Keyword(null,"else","else",-1508377146):new cljs.core.Keyword(null,"clauses","clauses",1454841241)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"right-params","right-params",-1790676237),right_params])),remainder__$2], null)], null);
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"else","else",-1508377146))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(clause_map))){
return cljs.pprint.format_error.call(null,"Two else clauses (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"An else clause (\"~:;\") is in a bracket type that doesn't support it.",offset);
} else {
if(((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))) && (cljs.core.seq.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(clause_map))))){
return cljs.pprint.format_error.call(null,"The else clause (\"~:;\") is only allowed in the first position for this directive.",offset);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"first","first",-644103046),new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"else","else",-1508377146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null),new cljs.core.Keyword(null,"else-params","else-params",-832171646),else_params], null)),false,remainder__$2], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),true,remainder__$2], null)], null);
}

}
}
}
} else {
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"separator","separator",-1628749125))){
if(cljs.core.truth_(saw_else)){
return cljs.pprint.format_error.call(null,"A plain clause (with \"~;\") follows an else clause (\"~:;\") inside bracket construction.",offset);
} else {
if(cljs.core.not.call(null,new cljs.core.Keyword(null,"allows-separator","allows-separator",-818967742).cljs$core$IFn$_invoke$arity$1(bracket_info))){
return cljs.pprint.format_error.call(null,"A separator (\"~;\") is in a bracket type that doesn't support it.",offset);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge_with.call(null,cljs.core.concat,clause_map,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [clause], null)], null)),false,remainder__$2], null)], null);

}
}
} else {
return null;
}
}
}
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"clauses","clauses",1454841241),cljs.core.PersistentVector.EMPTY], null),false,remainder], null)));
});
/**
 * Take a linearly compiled format and process the bracket directives to give it
 * the appropriate tree structure
 */
cljs.pprint.process_nesting = (function cljs$pprint$process_nesting(format){
return cljs.core.first.call(null,cljs.pprint.consume.call(null,(function (remainder){
var this$ = cljs.core.first.call(null,remainder);
var remainder__$1 = cljs.core.next.call(null,remainder);
var bracket = new cljs.core.Keyword(null,"bracket-info","bracket-info",-1600092774).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(this$));
if(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(bracket))){
return cljs.pprint.process_bracket.call(null,this$,remainder__$1);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$,remainder__$1], null);
}
}),format));
});
/**
 * Compiles format-str into a compiled format which can be used as an argument
 * to cl-format just like a plain format string. Use this function for improved
 * performance when you're using the same format string repeatedly
 */
cljs.pprint.compile_format = (function cljs$pprint$compile_format(format_str){
var _STAR_format_str_STAR_53093 = cljs.pprint._STAR_format_str_STAR_;
cljs.pprint._STAR_format_str_STAR_ = format_str;

try{return cljs.pprint.process_nesting.call(null,cljs.core.first.call(null,cljs.pprint.consume.call(null,((function (_STAR_format_str_STAR_53093){
return (function (p__53094){
var vec__53095 = p__53094;
var s = cljs.core.nth.call(null,vec__53095,(0),null);
var offset = cljs.core.nth.call(null,vec__53095,(1),null);
if(cljs.core.empty_QMARK_.call(null,s)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,s], null);
} else {
var tilde = s.indexOf("~");
if((tilde < (0))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,s,offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",(offset + s.length)], null)], null);
} else {
if((tilde === (0))){
return cljs.pprint.compile_directive.call(null,cljs.core.subs.call(null,s,(1)),(offset + (1)));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.pprint.compile_raw_string.call(null,cljs.core.subs.call(null,s,(0),tilde),offset),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,s,tilde),(tilde + offset)], null)], null);

}
}
}
});})(_STAR_format_str_STAR_53093))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [format_str,(0)], null))));
}finally {cljs.pprint._STAR_format_str_STAR_ = _STAR_format_str_STAR_53093;
}});
/**
 * determine whether a given compiled format has any directives that depend on the
 * column number or pretty printing
 */
cljs.pprint.needs_pretty = (function cljs$pprint$needs_pretty(format){
var format__$1 = format;
while(true){
if(cljs.core.empty_QMARK_.call(null,format__$1)){
return false;
} else {
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"pretty","pretty",-1916372486).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"def","def",-1043430536).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1))));
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"clauses","clauses",1454841241).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return cljs.core.some.call(null,cljs.pprint.needs_pretty,cljs.core.first.call(null,new cljs.core.Keyword(null,"else","else",-1508377146).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,format__$1)))));
}
}
})())){
return true;
} else {
var G__53098 = cljs.core.next.call(null,format__$1);
format__$1 = G__53098;
continue;
}
}
break;
}
});
/**
 * Executes the format with the arguments.
 */
cljs.pprint.execute_format = (function cljs$pprint$execute_format(var_args){
var G__53100 = arguments.length;
switch (G__53100) {
case 3:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$3 = (function (stream,format,args){
var sb = (new goog.string.StringBuffer());
var real_stream = ((((cljs.core.not.call(null,stream)) || (stream === true)))?(new cljs.core.StringBufferWriter(sb)):stream);
var wrapped_stream = (cljs.core.truth_((function (){var and__3925__auto__ = cljs.pprint.needs_pretty.call(null,format);
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,cljs.pprint.pretty_writer_QMARK_.call(null,real_stream));
} else {
return and__3925__auto__;
}
})())?cljs.pprint.get_pretty_writer.call(null,real_stream):real_stream);
var _STAR_out_STAR_53101 = cljs.core._STAR_out_STAR_;
cljs.core._STAR_out_STAR_ = wrapped_stream;

try{try{cljs.pprint.execute_format.call(null,format,args);
}finally {if(!((real_stream === wrapped_stream))){
cljs.core._flush.call(null,wrapped_stream);
} else {
}
}
if(cljs.core.not.call(null,stream)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join('');
} else {
if(stream === true){
return cljs.core.string_print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''));
} else {
return null;

}
}
}finally {cljs.core._STAR_out_STAR_ = _STAR_out_STAR_53101;
}});

cljs.pprint.execute_format.cljs$core$IFn$_invoke$arity$2 = (function (format,args){
cljs.pprint.map_passing_context.call(null,(function (element,context){
if(cljs.core.truth_(cljs.pprint.abort_QMARK_.call(null,context))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,context], null);
} else {
var vec__53102 = cljs.pprint.realize_parameter_list.call(null,new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(element),context);
var params = cljs.core.nth.call(null,vec__53102,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__53102,(1),null);
var vec__53105 = cljs.pprint.unzip_map.call(null,params);
var params__$1 = cljs.core.nth.call(null,vec__53105,(0),null);
var offsets = cljs.core.nth.call(null,vec__53105,(1),null);
var params__$2 = cljs.core.assoc.call(null,params__$1,new cljs.core.Keyword(null,"base-args","base-args",-1268706822),args__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.apply.call(null,new cljs.core.Keyword(null,"func","func",-238706040).cljs$core$IFn$_invoke$arity$1(element),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [params__$2,args__$1,offsets], null))], null);
}
}),args,format);

return null;
});

cljs.pprint.execute_format.cljs$lang$maxFixedArity = 3;

cljs.pprint.cached_compile = cljs.core.memoize.call(null,cljs.pprint.compile_format);
/**
 * Installs a function as a new method of multimethod associated with dispatch-value. 
 */
cljs.pprint.use_method = (function cljs$pprint$use_method(multifn,dispatch_val,func){
return cljs.core._add_method.call(null,multifn,dispatch_val,func);
});
cljs.pprint.reader_macros = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Symbol(null,"quote","quote",1377916282,null),"'",new cljs.core.Symbol(null,"var","var",870848730,null),"#'",new cljs.core.Symbol("clojure.core","deref","clojure.core/deref",188719157,null),"@",new cljs.core.Symbol("clojure.core","unquote","clojure.core/unquote",843087510,null),"~",new cljs.core.Symbol("cljs.core","deref","cljs.core/deref",1901963335,null),"@",new cljs.core.Symbol("cljs.core","unquote","cljs.core/unquote",1013085760,null),"~"], null);
cljs.pprint.pprint_reader_macro = (function cljs$pprint$pprint_reader_macro(alis){
var macro_char = cljs.pprint.reader_macros.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_((function (){var and__3925__auto__ = macro_char;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,alis));
} else {
return and__3925__auto__;
}
})())){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,macro_char);

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis));

return true;
} else {
return null;
}
});
cljs.pprint.pprint_simple_list = (function cljs$pprint$pprint_simple_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53109_53112 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53110_53113 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

var length_count53111_53114 = (0);
var alis_53115__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53111_53114 < cljs.core._STAR_print_length_STAR_)))){
if(alis_53115__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_53115__$1));

if(cljs.core.next.call(null,alis_53115__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__53116 = (length_count53111_53114 + (1));
var G__53117 = cljs.core.next.call(null,alis_53115__$1);
length_count53111_53114 = G__53116;
alis_53115__$1 = G__53117;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53110_53113;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53109_53112;
}}

return null;
});
cljs.pprint.pprint_list = (function cljs$pprint$pprint_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
return cljs.pprint.pprint_simple_list.call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_vector = (function cljs$pprint$pprint_vector(avec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53118_53121 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53119_53122 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count53120_53123 = (0);
var aseq_53124 = cljs.core.seq.call(null,avec);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53120_53123 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_53124){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,aseq_53124));

if(cljs.core.next.call(null,aseq_53124)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__53125 = (length_count53120_53123 + (1));
var G__53126 = cljs.core.next.call(null,aseq_53124);
length_count53120_53123 = G__53125;
aseq_53124 = G__53126;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53119_53122;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53118_53121;
}}

return null;
});
cljs.pprint.pprint_array = (function (){var format_in__47901__auto__ = "~<[~;~@{~w~^, ~:_~}~;]~:>";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__){
return (function() { 
var G__53127__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53127 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53128__i = 0, G__53128__a = new Array(arguments.length -  0);
while (G__53128__i < G__53128__a.length) {G__53128__a[G__53128__i] = arguments[G__53128__i + 0]; ++G__53128__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53128__a,0,null);
} 
return G__53127__delegate.call(this,args__47903__auto__);};
G__53127.cljs$lang$maxFixedArity = 0;
G__53127.cljs$lang$applyTo = (function (arglist__53129){
var args__47903__auto__ = cljs.core.seq(arglist__53129);
return G__53127__delegate(args__47903__auto__);
});
G__53127.cljs$core$IFn$_invoke$arity$variadic = G__53127__delegate;
return G__53127;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__))
})();
cljs.pprint.pprint_map = (function cljs$pprint$pprint_map(amap){
var vec__53130 = ((!(cljs.core.record_QMARK_.call(null,amap)))?new cljs.core.Var(function(){return cljs.core.lift_ns;},new cljs.core.Symbol("cljs.core","lift-ns","cljs.core/lift-ns",463499081,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.core","cljs.core",770546058,null),new cljs.core.Symbol(null,"lift-ns","lift-ns",602311926,null),"cljs/core.cljs",(15),(1),(10104),(10104),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null)], null)),"Returns [lifted-ns lifted-map] or nil if m can't be lifted.",(cljs.core.truth_(cljs.core.lift_ns)?cljs.core.lift_ns.cljs$lang$test:null)])).call(null,amap):null);
var ns = cljs.core.nth.call(null,vec__53130,(0),null);
var lift_map = cljs.core.nth.call(null,vec__53130,(1),null);
var amap__$1 = (function (){var or__3936__auto__ = lift_map;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return amap;
}
})();
var prefix = (cljs.core.truth_(ns)?["#:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"{"].join(''):"{");
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53133_53138 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53134_53139 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,"}");

var length_count53135_53140 = (0);
var aseq_53141 = cljs.core.seq.call(null,amap__$1);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53135_53140 < cljs.core._STAR_print_length_STAR_)))){
if(aseq_53141){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53136_53142 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53137_53143 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);

cljs.pprint.write_out.call(null,cljs.core.ffirst.call(null,aseq_53141));

cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint._STAR_current_length_STAR_ = (0);

cljs.pprint.write_out.call(null,cljs.core.fnext.call(null,cljs.core.first.call(null,aseq_53141)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53137_53143;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53136_53142;
}}


if(cljs.core.next.call(null,aseq_53141)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,", ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__53144 = (length_count53135_53140 + (1));
var G__53145 = cljs.core.next.call(null,aseq_53141);
length_count53135_53140 = G__53144;
aseq_53141 = G__53145;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53134_53139;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53133_53138;
}}

return null;
});
cljs.pprint.pprint_simple_default = (function cljs$pprint$pprint_simple_default(obj){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,obj));
});
cljs.pprint.pprint_set = (function (){var format_in__47901__auto__ = "~<#{~;~@{~w~^ ~:_~}~;}~:>";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__){
return (function() { 
var G__53146__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53146 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53147__i = 0, G__53147__a = new Array(arguments.length -  0);
while (G__53147__i < G__53147__a.length) {G__53147__a[G__53147__i] = arguments[G__53147__i + 0]; ++G__53147__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53147__a,0,null);
} 
return G__53146__delegate.call(this,args__47903__auto__);};
G__53146.cljs$lang$maxFixedArity = 0;
G__53146.cljs$lang$applyTo = (function (arglist__53148){
var args__47903__auto__ = cljs.core.seq(arglist__53148);
return G__53146__delegate(args__47903__auto__);
});
G__53146.cljs$core$IFn$_invoke$arity$variadic = G__53146__delegate;
return G__53146;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__))
})();
cljs.pprint.type_map = new cljs.core.PersistentArrayMap(null, 2, ["core$future_call","Future","core$promise","Promise"], null);
/**
 * Map ugly type names to something simpler
 */
cljs.pprint.map_ref_type = (function cljs$pprint$map_ref_type(name){
var or__3936__auto__ = (function (){var temp__5457__auto__ = cljs.core.re_find.call(null,/^[^$]+\$[^$]+/,name);
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
return cljs.pprint.type_map.call(null,match);
} else {
return null;
}
})();
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return name;
}
});
cljs.pprint.pprint_ideref = (function cljs$pprint$pprint_ideref(o){
var prefix = ["#<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.pprint.map_ref_type.call(null,cljs.core.type.call(null,o).name)),"@",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.getUid(o)),": "].join('');
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53149_53153 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53150_53154 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,prefix,null,">");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(- (cljs.core.count.call(null,prefix) - (2))));

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

cljs.pprint.write_out.call(null,(((function (){var and__3925__auto__ = ((!((o == null)))?(((((o.cljs$lang$protocol_mask$partition1$ & (1))) || ((cljs.core.PROTOCOL_SENTINEL === o.cljs$core$IPending$))))?true:(((!o.cljs$lang$protocol_mask$partition1$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPending,o));
if(and__3925__auto__){
return !(cljs.core._realized_QMARK_.call(null,o));
} else {
return and__3925__auto__;
}
})())?new cljs.core.Keyword(null,"not-delivered","not-delivered",1599158697):cljs.core.deref.call(null,o)));

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53150_53154;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53149_53153;
}}

return null;
});
cljs.pprint.pprint_pqueue = (function (){var format_in__47901__auto__ = "~<<-(~;~@{~w~^ ~_~}~;)-<~:>";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__){
return (function() { 
var G__53155__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53155 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53156__i = 0, G__53156__a = new Array(arguments.length -  0);
while (G__53156__i < G__53156__a.length) {G__53156__a[G__53156__i] = arguments[G__53156__i + 0]; ++G__53156__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53156__a,0,null);
} 
return G__53155__delegate.call(this,args__47903__auto__);};
G__53155.cljs$lang$maxFixedArity = 0;
G__53155.cljs$lang$applyTo = (function (arglist__53157){
var args__47903__auto__ = cljs.core.seq(arglist__53157);
return G__53155__delegate(args__47903__auto__);
});
G__53155.cljs$core$IFn$_invoke$arity$variadic = G__53155__delegate;
return G__53155;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__))
})();
cljs.pprint.type_dispatcher = (function cljs$pprint$type_dispatcher(obj){
if((obj instanceof cljs.core.PersistentQueue)){
return new cljs.core.Keyword(null,"queue","queue",1455835879);
} else {
if(((!((obj == null)))?(((((obj.cljs$lang$protocol_mask$partition0$ & (32768))) || ((cljs.core.PROTOCOL_SENTINEL === obj.cljs$core$IDeref$))))?true:(((!obj.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IDeref,obj))){
return new cljs.core.Keyword(null,"deref","deref",-145586795);
} else {
if((obj instanceof cljs.core.Symbol)){
return new cljs.core.Keyword(null,"symbol","symbol",-1038572696);
} else {
if(cljs.core.seq_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"list","list",765357683);
} else {
if(cljs.core.map_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"map","map",1371690461);
} else {
if(cljs.core.vector_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"vector","vector",1902966158);
} else {
if(cljs.core.set_QMARK_.call(null,obj)){
return new cljs.core.Keyword(null,"set","set",304602554);
} else {
if((obj == null)){
return null;
} else {
return new cljs.core.Keyword(null,"default","default",-1987822328);

}
}
}
}
}
}
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.simple_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for simple data structure format.
 */
cljs.pprint.simple_dispatch = (function (){var method_table__4400__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","simple-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_list);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,null,(function (){
return cljs.core._write.call(null,cljs.core._STAR_out_STAR_,cljs.core.pr_str.call(null,null));
}));
cljs.pprint.use_method.call(null,cljs.pprint.simple_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
/**
 * Figure out which kind of brackets to use
 */
cljs.pprint.brackets = (function cljs$pprint$brackets(form){
if(cljs.core.vector_QMARK_.call(null,form)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[","]"], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["(",")"], null);
}
});
/**
 * Pretty print a single reference (import, use, etc.) from a namespace decl
 */
cljs.pprint.pprint_ns_reference = (function cljs$pprint$pprint_ns_reference(reference){
if(cljs.core.sequential_QMARK_.call(null,reference)){
var vec__53159 = cljs.pprint.brackets.call(null,reference);
var start = cljs.core.nth.call(null,vec__53159,(0),null);
var end = cljs.core.nth.call(null,vec__53159,(1),null);
var vec__53162 = reference;
var seq__53163 = cljs.core.seq.call(null,vec__53162);
var first__53164 = cljs.core.first.call(null,seq__53163);
var seq__53163__$1 = cljs.core.next.call(null,seq__53163);
var keyw = first__53164;
var args = seq__53163__$1;
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53165_53175 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53166_53176 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start,null,end);

(function (){var format_in__47901__auto__ = "~w~:i";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args){
return (function() { 
var G__53177__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53177 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53178__i = 0, G__53178__a = new Array(arguments.length -  0);
while (G__53178__i < G__53178__a.length) {G__53178__a[G__53178__i] = arguments[G__53178__i + 0]; ++G__53178__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53178__a,0,null);
} 
return G__53177__delegate.call(this,args__47903__auto__);};
G__53177.cljs$lang$maxFixedArity = 0;
G__53177.cljs$lang$applyTo = (function (arglist__53179){
var args__47903__auto__ = cljs.core.seq(arglist__53179);
return G__53177__delegate(args__47903__auto__);
});
G__53177.cljs$core$IFn$_invoke$arity$variadic = G__53177__delegate;
return G__53177;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args))
})().call(null,keyw);

var args_53180__$1 = args;
while(true){
if(cljs.core.seq.call(null,args_53180__$1)){
(function (){var format_in__47901__auto__ = " ";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (args_53180__$1,format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args){
return (function() { 
var G__53181__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53181 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53182__i = 0, G__53182__a = new Array(arguments.length -  0);
while (G__53182__i < G__53182__a.length) {G__53182__a[G__53182__i] = arguments[G__53182__i + 0]; ++G__53182__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53182__a,0,null);
} 
return G__53181__delegate.call(this,args__47903__auto__);};
G__53181.cljs$lang$maxFixedArity = 0;
G__53181.cljs$lang$applyTo = (function (arglist__53183){
var args__47903__auto__ = cljs.core.seq(arglist__53183);
return G__53181__delegate(args__47903__auto__);
});
G__53181.cljs$core$IFn$_invoke$arity$variadic = G__53181__delegate;
return G__53181;
})()
;
;})(args_53180__$1,format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args))
})().call(null);

var arg_53184 = cljs.core.first.call(null,args_53180__$1);
if(cljs.core.sequential_QMARK_.call(null,arg_53184)){
var vec__53167_53185 = cljs.pprint.brackets.call(null,arg_53184);
var start_53186__$1 = cljs.core.nth.call(null,vec__53167_53185,(0),null);
var end_53187__$1 = cljs.core.nth.call(null,vec__53167_53185,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53170_53188 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53171_53189 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,start_53186__$1,null,end_53187__$1);

if(((cljs.core._EQ_.call(null,cljs.core.count.call(null,arg_53184),(3))) && ((cljs.core.second.call(null,arg_53184) instanceof cljs.core.Keyword)))){
var vec__53172_53190 = arg_53184;
var ns_53191 = cljs.core.nth.call(null,vec__53172_53190,(0),null);
var kw_53192 = cljs.core.nth.call(null,vec__53172_53190,(1),null);
var lis_53193 = cljs.core.nth.call(null,vec__53172_53190,(2),null);
(function (){var format_in__47901__auto__ = "~w ~w ";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (args_53180__$1,format_in__47901__auto__,cf__47902__auto__,vec__53172_53190,ns_53191,kw_53192,lis_53193,_STAR_current_level_STAR_53170_53188,_STAR_current_length_STAR_53171_53189,vec__53167_53185,start_53186__$1,end_53187__$1,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args){
return (function() { 
var G__53194__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53194 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53195__i = 0, G__53195__a = new Array(arguments.length -  0);
while (G__53195__i < G__53195__a.length) {G__53195__a[G__53195__i] = arguments[G__53195__i + 0]; ++G__53195__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53195__a,0,null);
} 
return G__53194__delegate.call(this,args__47903__auto__);};
G__53194.cljs$lang$maxFixedArity = 0;
G__53194.cljs$lang$applyTo = (function (arglist__53196){
var args__47903__auto__ = cljs.core.seq(arglist__53196);
return G__53194__delegate(args__47903__auto__);
});
G__53194.cljs$core$IFn$_invoke$arity$variadic = G__53194__delegate;
return G__53194;
})()
;
;})(args_53180__$1,format_in__47901__auto__,cf__47902__auto__,vec__53172_53190,ns_53191,kw_53192,lis_53193,_STAR_current_level_STAR_53170_53188,_STAR_current_length_STAR_53171_53189,vec__53167_53185,start_53186__$1,end_53187__$1,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args))
})().call(null,ns_53191,kw_53192);

if(cljs.core.sequential_QMARK_.call(null,lis_53193)){
(function (){var format_in__47901__auto__ = ((cljs.core.vector_QMARK_.call(null,lis_53193))?"~<[~;~@{~w~^ ~:_~}~;]~:>":"~<(~;~@{~w~^ ~:_~}~;)~:>");
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (args_53180__$1,format_in__47901__auto__,cf__47902__auto__,vec__53172_53190,ns_53191,kw_53192,lis_53193,_STAR_current_level_STAR_53170_53188,_STAR_current_length_STAR_53171_53189,vec__53167_53185,start_53186__$1,end_53187__$1,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args){
return (function() { 
var G__53197__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53197 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53198__i = 0, G__53198__a = new Array(arguments.length -  0);
while (G__53198__i < G__53198__a.length) {G__53198__a[G__53198__i] = arguments[G__53198__i + 0]; ++G__53198__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53198__a,0,null);
} 
return G__53197__delegate.call(this,args__47903__auto__);};
G__53197.cljs$lang$maxFixedArity = 0;
G__53197.cljs$lang$applyTo = (function (arglist__53199){
var args__47903__auto__ = cljs.core.seq(arglist__53199);
return G__53197__delegate(args__47903__auto__);
});
G__53197.cljs$core$IFn$_invoke$arity$variadic = G__53197__delegate;
return G__53197;
})()
;
;})(args_53180__$1,format_in__47901__auto__,cf__47902__auto__,vec__53172_53190,ns_53191,kw_53192,lis_53193,_STAR_current_level_STAR_53170_53188,_STAR_current_length_STAR_53171_53189,vec__53167_53185,start_53186__$1,end_53187__$1,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args))
})().call(null,lis_53193);
} else {
cljs.pprint.write_out.call(null,lis_53193);
}
} else {
cljs.core.apply.call(null,(function (){var format_in__47901__auto__ = "~w ~:i~@{~w~^ ~:_~}";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (args_53180__$1,format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53170_53188,_STAR_current_length_STAR_53171_53189,vec__53167_53185,start_53186__$1,end_53187__$1,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args){
return (function() { 
var G__53200__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53200 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53201__i = 0, G__53201__a = new Array(arguments.length -  0);
while (G__53201__i < G__53201__a.length) {G__53201__a[G__53201__i] = arguments[G__53201__i + 0]; ++G__53201__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53201__a,0,null);
} 
return G__53200__delegate.call(this,args__47903__auto__);};
G__53200.cljs$lang$maxFixedArity = 0;
G__53200.cljs$lang$applyTo = (function (arglist__53202){
var args__47903__auto__ = cljs.core.seq(arglist__53202);
return G__53200__delegate(args__47903__auto__);
});
G__53200.cljs$core$IFn$_invoke$arity$variadic = G__53200__delegate;
return G__53200;
})()
;
;})(args_53180__$1,format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53170_53188,_STAR_current_length_STAR_53171_53189,vec__53167_53185,start_53186__$1,end_53187__$1,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args))
})(),arg_53184);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53171_53189;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53170_53188;
}}


if(cljs.core.next.call(null,args_53180__$1)){
(function (){var format_in__47901__auto__ = "~_";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (args_53180__$1,format_in__47901__auto__,cf__47902__auto__,vec__53167_53185,start_53186__$1,end_53187__$1,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args){
return (function() { 
var G__53203__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53203 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53204__i = 0, G__53204__a = new Array(arguments.length -  0);
while (G__53204__i < G__53204__a.length) {G__53204__a[G__53204__i] = arguments[G__53204__i + 0]; ++G__53204__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53204__a,0,null);
} 
return G__53203__delegate.call(this,args__47903__auto__);};
G__53203.cljs$lang$maxFixedArity = 0;
G__53203.cljs$lang$applyTo = (function (arglist__53205){
var args__47903__auto__ = cljs.core.seq(arglist__53205);
return G__53203__delegate(args__47903__auto__);
});
G__53203.cljs$core$IFn$_invoke$arity$variadic = G__53203__delegate;
return G__53203;
})()
;
;})(args_53180__$1,format_in__47901__auto__,cf__47902__auto__,vec__53167_53185,start_53186__$1,end_53187__$1,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args))
})().call(null);
} else {
}
} else {
cljs.pprint.write_out.call(null,arg_53184);

if(cljs.core.next.call(null,args_53180__$1)){
(function (){var format_in__47901__auto__ = "~:_";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (args_53180__$1,format_in__47901__auto__,cf__47902__auto__,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args){
return (function() { 
var G__53206__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53206 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53207__i = 0, G__53207__a = new Array(arguments.length -  0);
while (G__53207__i < G__53207__a.length) {G__53207__a[G__53207__i] = arguments[G__53207__i + 0]; ++G__53207__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53207__a,0,null);
} 
return G__53206__delegate.call(this,args__47903__auto__);};
G__53206.cljs$lang$maxFixedArity = 0;
G__53206.cljs$lang$applyTo = (function (arglist__53208){
var args__47903__auto__ = cljs.core.seq(arglist__53208);
return G__53206__delegate(args__47903__auto__);
});
G__53206.cljs$core$IFn$_invoke$arity$variadic = G__53206__delegate;
return G__53206;
})()
;
;})(args_53180__$1,format_in__47901__auto__,cf__47902__auto__,arg_53184,_STAR_current_level_STAR_53165_53175,_STAR_current_length_STAR_53166_53176,vec__53159,start,end,vec__53162,seq__53163,first__53164,seq__53163__$1,keyw,args))
})().call(null);
} else {
}
}

var G__53209 = cljs.core.next.call(null,args_53180__$1);
args_53180__$1 = G__53209;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53166_53176;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53165_53175;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,reference);
}
});
/**
 * The pretty print dispatch chunk for the ns macro
 */
cljs.pprint.pprint_ns = (function cljs$pprint$pprint_ns(alis){
if(cljs.core.next.call(null,alis)){
var vec__53210 = alis;
var seq__53211 = cljs.core.seq.call(null,vec__53210);
var first__53212 = cljs.core.first.call(null,seq__53211);
var seq__53211__$1 = cljs.core.next.call(null,seq__53211);
var ns_sym = first__53212;
var first__53212__$1 = cljs.core.first.call(null,seq__53211__$1);
var seq__53211__$2 = cljs.core.next.call(null,seq__53211__$1);
var ns_name = first__53212__$1;
var stuff = seq__53211__$2;
var vec__53213 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__53213,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__53213,(1),null);
var vec__53216 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__53216,(0),null);
var references = cljs.core.nth.call(null,vec__53216,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53219_53221 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53220_53222 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__47901__auto__ = "~w ~1I~@_~w";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53219_53221,_STAR_current_length_STAR_53220_53222,vec__53210,seq__53211,first__53212,seq__53211__$1,ns_sym,first__53212__$1,seq__53211__$2,ns_name,stuff,vec__53213,doc_str,stuff__$1,vec__53216,attr_map,references){
return (function() { 
var G__53223__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53223 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53224__i = 0, G__53224__a = new Array(arguments.length -  0);
while (G__53224__i < G__53224__a.length) {G__53224__a[G__53224__i] = arguments[G__53224__i + 0]; ++G__53224__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53224__a,0,null);
} 
return G__53223__delegate.call(this,args__47903__auto__);};
G__53223.cljs$lang$maxFixedArity = 0;
G__53223.cljs$lang$applyTo = (function (arglist__53225){
var args__47903__auto__ = cljs.core.seq(arglist__53225);
return G__53223__delegate(args__47903__auto__);
});
G__53223.cljs$core$IFn$_invoke$arity$variadic = G__53223__delegate;
return G__53223;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53219_53221,_STAR_current_length_STAR_53220_53222,vec__53210,seq__53211,first__53212,seq__53211__$1,ns_sym,first__53212__$1,seq__53211__$2,ns_name,stuff,vec__53213,doc_str,stuff__$1,vec__53216,attr_map,references))
})().call(null,ns_sym,ns_name);

if(cljs.core.truth_((function (){var or__3936__auto__ = doc_str;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = attr_map;
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return cljs.core.seq.call(null,references);
}
}
})())){
(function (){var format_in__47901__auto__ = "~@:_";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53219_53221,_STAR_current_length_STAR_53220_53222,vec__53210,seq__53211,first__53212,seq__53211__$1,ns_sym,first__53212__$1,seq__53211__$2,ns_name,stuff,vec__53213,doc_str,stuff__$1,vec__53216,attr_map,references){
return (function() { 
var G__53226__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53226 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53227__i = 0, G__53227__a = new Array(arguments.length -  0);
while (G__53227__i < G__53227__a.length) {G__53227__a[G__53227__i] = arguments[G__53227__i + 0]; ++G__53227__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53227__a,0,null);
} 
return G__53226__delegate.call(this,args__47903__auto__);};
G__53226.cljs$lang$maxFixedArity = 0;
G__53226.cljs$lang$applyTo = (function (arglist__53228){
var args__47903__auto__ = cljs.core.seq(arglist__53228);
return G__53226__delegate(args__47903__auto__);
});
G__53226.cljs$core$IFn$_invoke$arity$variadic = G__53226__delegate;
return G__53226;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53219_53221,_STAR_current_length_STAR_53220_53222,vec__53210,seq__53211,first__53212,seq__53211__$1,ns_sym,first__53212__$1,seq__53211__$2,ns_name,stuff,vec__53213,doc_str,stuff__$1,vec__53216,attr_map,references))
})().call(null);
} else {
}

if(cljs.core.truth_(doc_str)){
cljs.pprint.cl_format.call(null,true,"\"~a\"~:[~;~:@_~]",doc_str,(function (){var or__3936__auto__ = attr_map;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.seq.call(null,references);
}
})());
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__47901__auto__ = "~w~:[~;~:@_~]";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53219_53221,_STAR_current_length_STAR_53220_53222,vec__53210,seq__53211,first__53212,seq__53211__$1,ns_sym,first__53212__$1,seq__53211__$2,ns_name,stuff,vec__53213,doc_str,stuff__$1,vec__53216,attr_map,references){
return (function() { 
var G__53229__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53229 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53230__i = 0, G__53230__a = new Array(arguments.length -  0);
while (G__53230__i < G__53230__a.length) {G__53230__a[G__53230__i] = arguments[G__53230__i + 0]; ++G__53230__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53230__a,0,null);
} 
return G__53229__delegate.call(this,args__47903__auto__);};
G__53229.cljs$lang$maxFixedArity = 0;
G__53229.cljs$lang$applyTo = (function (arglist__53231){
var args__47903__auto__ = cljs.core.seq(arglist__53231);
return G__53229__delegate(args__47903__auto__);
});
G__53229.cljs$core$IFn$_invoke$arity$variadic = G__53229__delegate;
return G__53229;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53219_53221,_STAR_current_length_STAR_53220_53222,vec__53210,seq__53211,first__53212,seq__53211__$1,ns_sym,first__53212__$1,seq__53211__$2,ns_name,stuff,vec__53213,doc_str,stuff__$1,vec__53216,attr_map,references))
})().call(null,attr_map,cljs.core.seq.call(null,references));
} else {
}

var references_53232__$1 = references;
while(true){
cljs.pprint.pprint_ns_reference.call(null,cljs.core.first.call(null,references_53232__$1));

var temp__5457__auto___53233 = cljs.core.next.call(null,references_53232__$1);
if(temp__5457__auto___53233){
var references_53234__$2 = temp__5457__auto___53233;
cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__53235 = references_53234__$2;
references_53232__$1 = G__53235;
continue;
} else {
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53220_53222;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53219_53221;
}}

return null;
} else {
return cljs.pprint.write_out.call(null,alis);
}
});
cljs.pprint.pprint_hold_first = (function (){var format_in__47901__auto__ = "~:<~w~^ ~@_~w~^ ~_~@{~w~^ ~_~}~:>";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__){
return (function() { 
var G__53236__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53236 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53237__i = 0, G__53237__a = new Array(arguments.length -  0);
while (G__53237__i < G__53237__a.length) {G__53237__a[G__53237__i] = arguments[G__53237__i + 0]; ++G__53237__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53237__a,0,null);
} 
return G__53236__delegate.call(this,args__47903__auto__);};
G__53236.cljs$lang$maxFixedArity = 0;
G__53236.cljs$lang$applyTo = (function (arglist__53238){
var args__47903__auto__ = cljs.core.seq(arglist__53238);
return G__53236__delegate(args__47903__auto__);
});
G__53236.cljs$core$IFn$_invoke$arity$variadic = G__53236__delegate;
return G__53236;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__))
})();
cljs.pprint.single_defn = (function cljs$pprint$single_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
if(cljs.core.truth_(has_doc_str_QMARK_)){
(function (){var format_in__47901__auto__ = " ~_";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__){
return (function() { 
var G__53239__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53239 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53240__i = 0, G__53240__a = new Array(arguments.length -  0);
while (G__53240__i < G__53240__a.length) {G__53240__a[G__53240__i] = arguments[G__53240__i + 0]; ++G__53240__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53240__a,0,null);
} 
return G__53239__delegate.call(this,args__47903__auto__);};
G__53239.cljs$lang$maxFixedArity = 0;
G__53239.cljs$lang$applyTo = (function (arglist__53241){
var args__47903__auto__ = cljs.core.seq(arglist__53241);
return G__53239__delegate(args__47903__auto__);
});
G__53239.cljs$core$IFn$_invoke$arity$variadic = G__53239__delegate;
return G__53239;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__))
})().call(null);
} else {
(function (){var format_in__47901__auto__ = " ~@_";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__){
return (function() { 
var G__53242__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53242 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53243__i = 0, G__53243__a = new Array(arguments.length -  0);
while (G__53243__i < G__53243__a.length) {G__53243__a[G__53243__i] = arguments[G__53243__i + 0]; ++G__53243__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53243__a,0,null);
} 
return G__53242__delegate.call(this,args__47903__auto__);};
G__53242.cljs$lang$maxFixedArity = 0;
G__53242.cljs$lang$applyTo = (function (arglist__53244){
var args__47903__auto__ = cljs.core.seq(arglist__53244);
return G__53242__delegate(args__47903__auto__);
});
G__53242.cljs$core$IFn$_invoke$arity$variadic = G__53242__delegate;
return G__53242;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__))
})().call(null);
}

return (function (){var format_in__47901__auto__ = "~{~w~^ ~_~}";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__){
return (function() { 
var G__53245__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53245 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53246__i = 0, G__53246__a = new Array(arguments.length -  0);
while (G__53246__i < G__53246__a.length) {G__53246__a[G__53246__i] = arguments[G__53246__i + 0]; ++G__53246__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53246__a,0,null);
} 
return G__53245__delegate.call(this,args__47903__auto__);};
G__53245.cljs$lang$maxFixedArity = 0;
G__53245.cljs$lang$applyTo = (function (arglist__53247){
var args__47903__auto__ = cljs.core.seq(arglist__53247);
return G__53245__delegate(args__47903__auto__);
});
G__53245.cljs$core$IFn$_invoke$arity$variadic = G__53245__delegate;
return G__53245;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.multi_defn = (function cljs$pprint$multi_defn(alis,has_doc_str_QMARK_){
if(cljs.core.seq.call(null,alis)){
return (function (){var format_in__47901__auto__ = " ~_~{~w~^ ~_~}";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__){
return (function() { 
var G__53248__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53248 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53249__i = 0, G__53249__a = new Array(arguments.length -  0);
while (G__53249__i < G__53249__a.length) {G__53249__a[G__53249__i] = arguments[G__53249__i + 0]; ++G__53249__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53249__a,0,null);
} 
return G__53248__delegate.call(this,args__47903__auto__);};
G__53248.cljs$lang$maxFixedArity = 0;
G__53248.cljs$lang$applyTo = (function (arglist__53250){
var args__47903__auto__ = cljs.core.seq(arglist__53250);
return G__53248__delegate(args__47903__auto__);
});
G__53248.cljs$core$IFn$_invoke$arity$variadic = G__53248__delegate;
return G__53248;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__))
})().call(null,alis);
} else {
return null;
}
});
cljs.pprint.pprint_defn = (function cljs$pprint$pprint_defn(alis){
if(cljs.core.next.call(null,alis)){
var vec__53251 = alis;
var seq__53252 = cljs.core.seq.call(null,vec__53251);
var first__53253 = cljs.core.first.call(null,seq__53252);
var seq__53252__$1 = cljs.core.next.call(null,seq__53252);
var defn_sym = first__53253;
var first__53253__$1 = cljs.core.first.call(null,seq__53252__$1);
var seq__53252__$2 = cljs.core.next.call(null,seq__53252__$1);
var defn_name = first__53253__$1;
var stuff = seq__53252__$2;
var vec__53254 = ((typeof cljs.core.first.call(null,stuff) === 'string')?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff),cljs.core.next.call(null,stuff)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff], null));
var doc_str = cljs.core.nth.call(null,vec__53254,(0),null);
var stuff__$1 = cljs.core.nth.call(null,vec__53254,(1),null);
var vec__53257 = ((cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,stuff__$1)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,stuff__$1),cljs.core.next.call(null,stuff__$1)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,stuff__$1], null));
var attr_map = cljs.core.nth.call(null,vec__53257,(0),null);
var stuff__$2 = cljs.core.nth.call(null,vec__53257,(1),null);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53260_53262 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53261_53263 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

(function (){var format_in__47901__auto__ = "~w ~1I~@_~w";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53260_53262,_STAR_current_length_STAR_53261_53263,vec__53251,seq__53252,first__53253,seq__53252__$1,defn_sym,first__53253__$1,seq__53252__$2,defn_name,stuff,vec__53254,doc_str,stuff__$1,vec__53257,attr_map,stuff__$2){
return (function() { 
var G__53264__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53264 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53265__i = 0, G__53265__a = new Array(arguments.length -  0);
while (G__53265__i < G__53265__a.length) {G__53265__a[G__53265__i] = arguments[G__53265__i + 0]; ++G__53265__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53265__a,0,null);
} 
return G__53264__delegate.call(this,args__47903__auto__);};
G__53264.cljs$lang$maxFixedArity = 0;
G__53264.cljs$lang$applyTo = (function (arglist__53266){
var args__47903__auto__ = cljs.core.seq(arglist__53266);
return G__53264__delegate(args__47903__auto__);
});
G__53264.cljs$core$IFn$_invoke$arity$variadic = G__53264__delegate;
return G__53264;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53260_53262,_STAR_current_length_STAR_53261_53263,vec__53251,seq__53252,first__53253,seq__53252__$1,defn_sym,first__53253__$1,seq__53252__$2,defn_name,stuff,vec__53254,doc_str,stuff__$1,vec__53257,attr_map,stuff__$2))
})().call(null,defn_sym,defn_name);

if(cljs.core.truth_(doc_str)){
(function (){var format_in__47901__auto__ = " ~_~w";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53260_53262,_STAR_current_length_STAR_53261_53263,vec__53251,seq__53252,first__53253,seq__53252__$1,defn_sym,first__53253__$1,seq__53252__$2,defn_name,stuff,vec__53254,doc_str,stuff__$1,vec__53257,attr_map,stuff__$2){
return (function() { 
var G__53267__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53267 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53268__i = 0, G__53268__a = new Array(arguments.length -  0);
while (G__53268__i < G__53268__a.length) {G__53268__a[G__53268__i] = arguments[G__53268__i + 0]; ++G__53268__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53268__a,0,null);
} 
return G__53267__delegate.call(this,args__47903__auto__);};
G__53267.cljs$lang$maxFixedArity = 0;
G__53267.cljs$lang$applyTo = (function (arglist__53269){
var args__47903__auto__ = cljs.core.seq(arglist__53269);
return G__53267__delegate(args__47903__auto__);
});
G__53267.cljs$core$IFn$_invoke$arity$variadic = G__53267__delegate;
return G__53267;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53260_53262,_STAR_current_length_STAR_53261_53263,vec__53251,seq__53252,first__53253,seq__53252__$1,defn_sym,first__53253__$1,seq__53252__$2,defn_name,stuff,vec__53254,doc_str,stuff__$1,vec__53257,attr_map,stuff__$2))
})().call(null,doc_str);
} else {
}

if(cljs.core.truth_(attr_map)){
(function (){var format_in__47901__auto__ = " ~_~w";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53260_53262,_STAR_current_length_STAR_53261_53263,vec__53251,seq__53252,first__53253,seq__53252__$1,defn_sym,first__53253__$1,seq__53252__$2,defn_name,stuff,vec__53254,doc_str,stuff__$1,vec__53257,attr_map,stuff__$2){
return (function() { 
var G__53270__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53270 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53271__i = 0, G__53271__a = new Array(arguments.length -  0);
while (G__53271__i < G__53271__a.length) {G__53271__a[G__53271__i] = arguments[G__53271__i + 0]; ++G__53271__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53271__a,0,null);
} 
return G__53270__delegate.call(this,args__47903__auto__);};
G__53270.cljs$lang$maxFixedArity = 0;
G__53270.cljs$lang$applyTo = (function (arglist__53272){
var args__47903__auto__ = cljs.core.seq(arglist__53272);
return G__53270__delegate(args__47903__auto__);
});
G__53270.cljs$core$IFn$_invoke$arity$variadic = G__53270__delegate;
return G__53270;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53260_53262,_STAR_current_length_STAR_53261_53263,vec__53251,seq__53252,first__53253,seq__53252__$1,defn_sym,first__53253__$1,seq__53252__$2,defn_name,stuff,vec__53254,doc_str,stuff__$1,vec__53257,attr_map,stuff__$2))
})().call(null,attr_map);
} else {
}

if(cljs.core.vector_QMARK_.call(null,cljs.core.first.call(null,stuff__$2))){
cljs.pprint.single_defn.call(null,stuff__$2,(function (){var or__3936__auto__ = doc_str;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return attr_map;
}
})());
} else {
cljs.pprint.multi_defn.call(null,stuff__$2,(function (){var or__3936__auto__ = doc_str;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return attr_map;
}
})());

}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53261_53263;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53260_53262;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_binding_form = (function cljs$pprint$pprint_binding_form(binding_vec){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53273_53278 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53274_53279 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"[",null,"]");

var length_count53275_53280 = (0);
var binding_53281 = binding_vec;
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53275_53280 < cljs.core._STAR_print_length_STAR_)))){
if(cljs.core.seq.call(null,binding_53281)){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53276_53282 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53277_53283 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,binding_53281));

if(cljs.core.next.call(null,binding_53281)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,binding_53281));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53277_53283;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53276_53282;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,binding_53281))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__53284 = (length_count53275_53280 + (1));
var G__53285 = cljs.core.next.call(null,cljs.core.rest.call(null,binding_53281));
length_count53275_53280 = G__53284;
binding_53281 = G__53285;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53274_53279;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53273_53278;
}}

return null;
});
cljs.pprint.pprint_let = (function cljs$pprint$pprint_let(alis){
var base_sym = cljs.core.first.call(null,alis);
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53286_53288 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53287_53289 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

if(((cljs.core.next.call(null,alis)) && (cljs.core.vector_QMARK_.call(null,cljs.core.second.call(null,alis))))){
(function (){var format_in__47901__auto__ = "~w ~1I~@_";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53286_53288,_STAR_current_length_STAR_53287_53289,base_sym){
return (function() { 
var G__53290__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53290 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53291__i = 0, G__53291__a = new Array(arguments.length -  0);
while (G__53291__i < G__53291__a.length) {G__53291__a[G__53291__i] = arguments[G__53291__i + 0]; ++G__53291__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53291__a,0,null);
} 
return G__53290__delegate.call(this,args__47903__auto__);};
G__53290.cljs$lang$maxFixedArity = 0;
G__53290.cljs$lang$applyTo = (function (arglist__53292){
var args__47903__auto__ = cljs.core.seq(arglist__53292);
return G__53290__delegate(args__47903__auto__);
});
G__53290.cljs$core$IFn$_invoke$arity$variadic = G__53290__delegate;
return G__53290;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53286_53288,_STAR_current_length_STAR_53287_53289,base_sym))
})().call(null,base_sym);

cljs.pprint.pprint_binding_form.call(null,cljs.core.second.call(null,alis));

(function (){var format_in__47901__auto__ = " ~_~{~w~^ ~_~}";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53286_53288,_STAR_current_length_STAR_53287_53289,base_sym){
return (function() { 
var G__53293__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53293 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53294__i = 0, G__53294__a = new Array(arguments.length -  0);
while (G__53294__i < G__53294__a.length) {G__53294__a[G__53294__i] = arguments[G__53294__i + 0]; ++G__53294__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53294__a,0,null);
} 
return G__53293__delegate.call(this,args__47903__auto__);};
G__53293.cljs$lang$maxFixedArity = 0;
G__53293.cljs$lang$applyTo = (function (arglist__53295){
var args__47903__auto__ = cljs.core.seq(arglist__53295);
return G__53293__delegate(args__47903__auto__);
});
G__53293.cljs$core$IFn$_invoke$arity$variadic = G__53293__delegate;
return G__53293;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53286_53288,_STAR_current_length_STAR_53287_53289,base_sym))
})().call(null,cljs.core.next.call(null,cljs.core.rest.call(null,alis)));
} else {
cljs.pprint.pprint_simple_code_list.call(null,alis);
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53287_53289;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53286_53288;
}}

return null;
});
cljs.pprint.pprint_if = (function (){var format_in__47901__auto__ = "~:<~1I~w~^ ~@_~w~@{ ~_~w~}~:>";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__){
return (function() { 
var G__53296__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53296 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53297__i = 0, G__53297__a = new Array(arguments.length -  0);
while (G__53297__i < G__53297__a.length) {G__53297__a[G__53297__i] = arguments[G__53297__i + 0]; ++G__53297__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53297__a,0,null);
} 
return G__53296__delegate.call(this,args__47903__auto__);};
G__53296.cljs$lang$maxFixedArity = 0;
G__53296.cljs$lang$applyTo = (function (arglist__53298){
var args__47903__auto__ = cljs.core.seq(arglist__53298);
return G__53296__delegate(args__47903__auto__);
});
G__53296.cljs$core$IFn$_invoke$arity$variadic = G__53296__delegate;
return G__53296;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__))
})();
cljs.pprint.pprint_cond = (function cljs$pprint$pprint_cond(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53299_53304 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53300_53305 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis));

if(cljs.core.next.call(null,alis)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var length_count53301_53306 = (0);
var alis_53307__$1 = cljs.core.next.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53301_53306 < cljs.core._STAR_print_length_STAR_)))){
if(alis_53307__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53302_53308 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53303_53309 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_53307__$1));

if(cljs.core.next.call(null,alis_53307__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_53307__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53303_53309;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53302_53308;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_53307__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__53310 = (length_count53301_53306 + (1));
var G__53311 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_53307__$1));
length_count53301_53306 = G__53310;
alis_53307__$1 = G__53311;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53300_53305;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53299_53304;
}}

return null;
});
cljs.pprint.pprint_condp = (function cljs$pprint$pprint_condp(alis){
if((cljs.core.count.call(null,alis) > (3))){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53312_53317 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53313_53318 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

cljs.core.apply.call(null,(function (){var format_in__47901__auto__ = "~w ~@_~w ~@_~w ~_";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53312_53317,_STAR_current_length_STAR_53313_53318){
return (function() { 
var G__53319__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53319 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53320__i = 0, G__53320__a = new Array(arguments.length -  0);
while (G__53320__i < G__53320__a.length) {G__53320__a[G__53320__i] = arguments[G__53320__i + 0]; ++G__53320__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53320__a,0,null);
} 
return G__53319__delegate.call(this,args__47903__auto__);};
G__53319.cljs$lang$maxFixedArity = 0;
G__53319.cljs$lang$applyTo = (function (arglist__53321){
var args__47903__auto__ = cljs.core.seq(arglist__53321);
return G__53319__delegate(args__47903__auto__);
});
G__53319.cljs$core$IFn$_invoke$arity$variadic = G__53319__delegate;
return G__53319;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_current_level_STAR_53312_53317,_STAR_current_length_STAR_53313_53318))
})(),alis);

var length_count53314_53322 = (0);
var alis_53323__$1 = cljs.core.seq.call(null,cljs.core.drop.call(null,(3),alis));
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53314_53322 < cljs.core._STAR_print_length_STAR_)))){
if(alis_53323__$1){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53315_53324 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53316_53325 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,null,null,null);


cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_53323__$1));

if(cljs.core.next.call(null,alis_53323__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"miser","miser",-556060186));

cljs.pprint.write_out.call(null,cljs.core.second.call(null,alis_53323__$1));
} else {
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53316_53325;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53315_53324;
}}


if(cljs.core.next.call(null,cljs.core.rest.call(null,alis_53323__$1))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__53326 = (length_count53314_53322 + (1));
var G__53327 = cljs.core.next.call(null,cljs.core.rest.call(null,alis_53323__$1));
length_count53314_53322 = G__53326;
alis_53323__$1 = G__53327;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53313_53318;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53312_53317;
}}

return null;
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint._STAR_symbol_map_STAR_ = cljs.core.PersistentArrayMap.EMPTY;
cljs.pprint.pprint_anon_func = (function cljs$pprint$pprint_anon_func(alis){
var args = cljs.core.second.call(null,alis);
var nlis = cljs.core.first.call(null,cljs.core.rest.call(null,cljs.core.rest.call(null,alis)));
if(cljs.core.vector_QMARK_.call(null,args)){
var _STAR_symbol_map_STAR_53330 = cljs.pprint._STAR_symbol_map_STAR_;
cljs.pprint._STAR_symbol_map_STAR_ = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,args)))?cljs.core.PersistentArrayMap.createAsIfByAssoc([cljs.core.first.call(null,args),"%"]):cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (_STAR_symbol_map_STAR_53330,args,nlis){
return (function (p1__53328_SHARP_,p2__53329_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__53328_SHARP_,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("%"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__53329_SHARP_)].join('')],null));
});})(_STAR_symbol_map_STAR_53330,args,nlis))
,args,cljs.core.range.call(null,(1),(cljs.core.count.call(null,args) + (1))))));

try{return (function (){var format_in__47901__auto__ = "~<#(~;~@{~w~^ ~_~}~;)~:>";
var cf__47902__auto__ = ((typeof format_in__47901__auto__ === 'string')?cljs.pprint.cached_compile.call(null,format_in__47901__auto__):format_in__47901__auto__);
return ((function (format_in__47901__auto__,cf__47902__auto__,_STAR_symbol_map_STAR_53330,args,nlis){
return (function() { 
var G__53331__delegate = function (args__47903__auto__){
var navigator__47904__auto__ = cljs.pprint.init_navigator.call(null,args__47903__auto__);
return cljs.pprint.execute_format.call(null,cf__47902__auto__,navigator__47904__auto__);
};
var G__53331 = function (var_args){
var args__47903__auto__ = null;
if (arguments.length > 0) {
var G__53332__i = 0, G__53332__a = new Array(arguments.length -  0);
while (G__53332__i < G__53332__a.length) {G__53332__a[G__53332__i] = arguments[G__53332__i + 0]; ++G__53332__i;}
  args__47903__auto__ = new cljs.core.IndexedSeq(G__53332__a,0,null);
} 
return G__53331__delegate.call(this,args__47903__auto__);};
G__53331.cljs$lang$maxFixedArity = 0;
G__53331.cljs$lang$applyTo = (function (arglist__53333){
var args__47903__auto__ = cljs.core.seq(arglist__53333);
return G__53331__delegate(args__47903__auto__);
});
G__53331.cljs$core$IFn$_invoke$arity$variadic = G__53331__delegate;
return G__53331;
})()
;
;})(format_in__47901__auto__,cf__47902__auto__,_STAR_symbol_map_STAR_53330,args,nlis))
})().call(null,nlis);
}finally {cljs.pprint._STAR_symbol_map_STAR_ = _STAR_symbol_map_STAR_53330;
}} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
});
cljs.pprint.pprint_simple_code_list = (function cljs$pprint$pprint_simple_code_list(alis){
if(cljs.core.truth_(cljs.pprint.level_exceeded.call(null))){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"#");
} else {
var _STAR_current_level_STAR_53334_53337 = cljs.pprint._STAR_current_level_STAR_;
var _STAR_current_length_STAR_53335_53338 = cljs.pprint._STAR_current_length_STAR_;
cljs.pprint._STAR_current_level_STAR_ = (cljs.pprint._STAR_current_level_STAR_ + (1));

cljs.pprint._STAR_current_length_STAR_ = (0);

try{cljs.pprint.start_block.call(null,cljs.core._STAR_out_STAR_,"(",null,")");

cljs.pprint.pprint_indent.call(null,new cljs.core.Keyword(null,"block","block",664686210),(1));

var length_count53336_53339 = (0);
var alis_53340__$1 = cljs.core.seq.call(null,alis);
while(true){
if(((cljs.core.not.call(null,cljs.core._STAR_print_length_STAR_)) || ((length_count53336_53339 < cljs.core._STAR_print_length_STAR_)))){
if(alis_53340__$1){
cljs.pprint.write_out.call(null,cljs.core.first.call(null,alis_53340__$1));

if(cljs.core.next.call(null,alis_53340__$1)){
cljs.core._write.call(null,cljs.core._STAR_out_STAR_," ");

cljs.pprint.pprint_newline.call(null,new cljs.core.Keyword(null,"linear","linear",872268697));

var G__53341 = (length_count53336_53339 + (1));
var G__53342 = cljs.core.next.call(null,alis_53340__$1);
length_count53336_53339 = G__53341;
alis_53340__$1 = G__53342;
continue;
} else {
}
} else {
}
} else {
cljs.core._write.call(null,cljs.core._STAR_out_STAR_,"...");
}
break;
}

cljs.pprint.end_block.call(null,cljs.core._STAR_out_STAR_);
}finally {cljs.pprint._STAR_current_length_STAR_ = _STAR_current_length_STAR_53335_53338;

cljs.pprint._STAR_current_level_STAR_ = _STAR_current_level_STAR_53334_53337;
}}

return null;
});
cljs.pprint.two_forms = (function cljs$pprint$two_forms(amap){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.mapcat.call(null,cljs.core.identity,(function (){var iter__4310__auto__ = (function cljs$pprint$two_forms_$_iter__53343(s__53344){
return (new cljs.core.LazySeq(null,(function (){
var s__53344__$1 = s__53344;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__53344__$1);
if(temp__5457__auto__){
var s__53344__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53344__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__53344__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__53346 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__53345 = (0);
while(true){
if((i__53345 < size__4309__auto__)){
var x = cljs.core._nth.call(null,c__4308__auto__,i__53345);
cljs.core.chunk_append.call(null,b__53346,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null));

var G__53347 = (i__53345 + (1));
i__53345 = G__53347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53346),cljs$pprint$two_forms_$_iter__53343.call(null,cljs.core.chunk_rest.call(null,s__53344__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53346),null);
}
} else {
var x = cljs.core.first.call(null,s__53344__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,cljs.core.name.call(null,cljs.core.first.call(null,x))),cljs.core.second.call(null,x)], null)], null),cljs$pprint$two_forms_$_iter__53343.call(null,cljs.core.rest.call(null,s__53344__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,amap);
})()));
});
cljs.pprint.add_core_ns = (function cljs$pprint$add_core_ns(amap){
var core = "clojure.core";
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (core){
return (function (p1__53348_SHARP_){
var vec__53349 = p1__53348_SHARP_;
var s = cljs.core.nth.call(null,vec__53349,(0),null);
var f = cljs.core.nth.call(null,vec__53349,(1),null);
if(cljs.core.not.call(null,(function (){var or__3936__auto__ = cljs.core.namespace.call(null,s);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.special_symbol_QMARK_.call(null,s);
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.symbol.call(null,core,cljs.core.name.call(null,s)),f], null);
} else {
return p1__53348_SHARP_;
}
});})(core))
,amap));
});
cljs.pprint._STAR_code_table_STAR_ = cljs.pprint.two_forms.call(null,cljs.pprint.add_core_ns.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,".",".",1975675962,null),new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.Symbol(null,"when-first","when-first",821699168,null),new cljs.core.Symbol(null,"if","if",1181717262,null),new cljs.core.Symbol(null,"condp","condp",1054325175,null),new cljs.core.Symbol(null,"..","..",-300507420,null),new cljs.core.Symbol(null,"defmacro","defmacro",2054157304,null),new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"loop","loop",1244978678,null),new cljs.core.Symbol(null,"struct","struct",325972931,null),new cljs.core.Symbol(null,"doseq","doseq",221164135,null),new cljs.core.Symbol(null,"if-not","if-not",-265415609,null),new cljs.core.Symbol(null,"when-not","when-not",-1223136340,null),new cljs.core.Symbol(null,"def","def",597100991,null),new cljs.core.Symbol(null,"when","when",1064114221,null),new cljs.core.Symbol(null,"with-open","with-open",172119667,null),new cljs.core.Symbol(null,"with-local-vars","with-local-vars",837642072,null),new cljs.core.Symbol(null,"defonce","defonce",-1681484013,null),new cljs.core.Symbol(null,"when-let","when-let",-1383043480,null),new cljs.core.Symbol(null,"ns","ns",2082130287,null),new cljs.core.Symbol(null,"dotimes","dotimes",-818708397,null),new cljs.core.Symbol(null,"cond","cond",1606708055,null),new cljs.core.Symbol(null,"let","let",358118826,null),new cljs.core.Symbol(null,"fn","fn",465265323,null),new cljs.core.Symbol(null,"defn-","defn-",1097765044,null),new cljs.core.Symbol(null,"locking","locking",1542862874,null),new cljs.core.Symbol(null,"->","->",-2139605430,null),new cljs.core.Symbol(null,"if-let","if-let",1803593690,null),new cljs.core.Symbol(null,"binding","binding",-2114503176,null),new cljs.core.Symbol(null,"struct-map","struct-map",-1387540878,null)],[cljs.pprint.pprint_hold_first,cljs.pprint.pprint_anon_func,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_condp,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_if,cljs.pprint.pprint_if,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_if,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_ns,cljs.pprint.pprint_let,cljs.pprint.pprint_cond,cljs.pprint.pprint_let,cljs.pprint.pprint_defn,cljs.pprint.pprint_defn,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_hold_first,cljs.pprint.pprint_let,cljs.pprint.pprint_let,cljs.pprint.pprint_hold_first])));
cljs.pprint.pprint_code_list = (function cljs$pprint$pprint_code_list(alis){
if(cljs.core.not.call(null,cljs.pprint.pprint_reader_macro.call(null,alis))){
var temp__5455__auto__ = cljs.pprint._STAR_code_table_STAR_.call(null,cljs.core.first.call(null,alis));
if(cljs.core.truth_(temp__5455__auto__)){
var special_form = temp__5455__auto__;
return special_form.call(null,alis);
} else {
return cljs.pprint.pprint_simple_code_list.call(null,alis);
}
} else {
return null;
}
});
cljs.pprint.pprint_code_symbol = (function cljs$pprint$pprint_code_symbol(sym){
var temp__5455__auto__ = sym.call(null,cljs.pprint._STAR_symbol_map_STAR_);
if(cljs.core.truth_(temp__5455__auto__)){
var arg_num = temp__5455__auto__;
return cljs.pprint.print.call(null,arg_num);
} else {
if(cljs.core.truth_(cljs.pprint._STAR_print_suppress_namespaces_STAR_)){
return cljs.pprint.print.call(null,cljs.core.name.call(null,sym));
} else {
return cljs.pprint.pr.call(null,sym);
}
}
});
if((typeof cljs !== 'undefined') && (typeof cljs.pprint !== 'undefined') && (typeof cljs.pprint.code_dispatch !== 'undefined')){
} else {
/**
 * The pretty print dispatch function for pretty printing Clojure code.
 */
cljs.pprint.code_dispatch = (function (){var method_table__4400__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4401__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4402__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4403__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4404__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"cljs.pprint","code-dispatch"),cljs.pprint.type_dispatcher,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4404__auto__,method_table__4400__auto__,prefer_table__4401__auto__,method_cache__4402__auto__,cached_hierarchy__4403__auto__));
})();
}
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"list","list",765357683),cljs.pprint.pprint_code_list);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),cljs.pprint.pprint_code_symbol);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"vector","vector",1902966158),cljs.pprint.pprint_vector);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"map","map",1371690461),cljs.pprint.pprint_map);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"set","set",304602554),cljs.pprint.pprint_set);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"queue","queue",1455835879),cljs.pprint.pprint_pqueue);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"deref","deref",-145586795),cljs.pprint.pprint_ideref);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,null,cljs.pprint.pr);
cljs.pprint.use_method.call(null,cljs.pprint.code_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),cljs.pprint.pprint_simple_default);
cljs.pprint.set_pprint_dispatch.call(null,cljs.pprint.simple_dispatch);
cljs.pprint.add_padding = (function cljs$pprint$add_padding(width,s){
var padding = (function (){var x__4024__auto__ = (0);
var y__4025__auto__ = (width - cljs.core.count.call(null,s));
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})();
return cljs.core.apply.call(null,cljs.core.str,clojure.string.join.call(null,cljs.core.repeat.call(null,padding," ")),s);
});
/**
 * Prints a collection of maps in a textual table. Prints table headings
 * ks, and then a line of output for each row, corresponding to the keys
 * in ks. If ks are not specified, use the keys of the first item in rows.
 */
cljs.pprint.print_table = (function cljs$pprint$print_table(var_args){
var G__53356 = arguments.length;
switch (G__53356) {
case 2:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$2 = (function (ks,rows){
var _STAR_print_newline_STAR_53357 = cljs.core._STAR_print_newline_STAR_;
try{if(cljs.core.seq.call(null,rows)){
var widths = cljs.core.map.call(null,((function (_STAR_print_newline_STAR_53357){
return (function (k){
return cljs.core.apply.call(null,cljs.core.max,cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)].join('')),cljs.core.map.call(null,((function (_STAR_print_newline_STAR_53357){
return (function (p1__53352_SHARP_){
return cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,p1__53352_SHARP_,k))].join(''));
});})(_STAR_print_newline_STAR_53357))
,rows));
});})(_STAR_print_newline_STAR_53357))
,ks);
var spacers = cljs.core.map.call(null,((function (widths,_STAR_print_newline_STAR_53357){
return (function (p1__53353_SHARP_){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,p1__53353_SHARP_,"-"));
});})(widths,_STAR_print_newline_STAR_53357))
,widths);
var fmt_row = ((function (widths,spacers,_STAR_print_newline_STAR_53357){
return (function (leader,divider,trailer,row){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(leader),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,cljs.core.interpose.call(null,divider,(function (){var iter__4310__auto__ = ((function (widths,spacers,_STAR_print_newline_STAR_53357){
return (function cljs$pprint$iter__53358(s__53359){
return (new cljs.core.LazySeq(null,((function (widths,spacers,_STAR_print_newline_STAR_53357){
return (function (){
var s__53359__$1 = s__53359;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__53359__$1);
if(temp__5457__auto__){
var s__53359__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53359__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__53359__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__53361 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__53360 = (0);
while(true){
if((i__53360 < size__4309__auto__)){
var vec__53362 = cljs.core._nth.call(null,c__4308__auto__,i__53360);
var col = cljs.core.nth.call(null,vec__53362,(0),null);
var width = cljs.core.nth.call(null,vec__53362,(1),null);
cljs.core.chunk_append.call(null,b__53361,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')));

var G__53373 = (i__53360 + (1));
i__53360 = G__53373;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53361),cljs$pprint$iter__53358.call(null,cljs.core.chunk_rest.call(null,s__53359__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53361),null);
}
} else {
var vec__53365 = cljs.core.first.call(null,s__53359__$2);
var col = cljs.core.nth.call(null,vec__53365,(0),null);
var width = cljs.core.nth.call(null,vec__53365,(1),null);
return cljs.core.cons.call(null,cljs.pprint.add_padding.call(null,width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(col)].join('')),cljs$pprint$iter__53358.call(null,cljs.core.rest.call(null,s__53359__$2)));
}
} else {
return null;
}
break;
}
});})(widths,spacers,_STAR_print_newline_STAR_53357))
,null,null));
});})(widths,spacers,_STAR_print_newline_STAR_53357))
;
return iter__4310__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.map.call(null,((function (iter__4310__auto__,widths,spacers,_STAR_print_newline_STAR_53357){
return (function (p1__53354_SHARP_){
return cljs.core.get.call(null,row,p1__53354_SHARP_);
});})(iter__4310__auto__,widths,spacers,_STAR_print_newline_STAR_53357))
,ks),widths));
})()))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(trailer)].join('');
});})(widths,spacers,_STAR_print_newline_STAR_53357))
;
cljs.core.println.call(null);

cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",cljs.core.zipmap.call(null,ks,ks)));

cljs.core.println.call(null,fmt_row.call(null,"|-","-+-","-|",cljs.core.zipmap.call(null,ks,spacers)));

var seq__53368 = cljs.core.seq.call(null,rows);
var chunk__53369 = null;
var count__53370 = (0);
var i__53371 = (0);
while(true){
if((i__53371 < count__53370)){
var row = cljs.core._nth.call(null,chunk__53369,i__53371);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__53374 = seq__53368;
var G__53375 = chunk__53369;
var G__53376 = count__53370;
var G__53377 = (i__53371 + (1));
seq__53368 = G__53374;
chunk__53369 = G__53375;
count__53370 = G__53376;
i__53371 = G__53377;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53368);
if(temp__5457__auto__){
var seq__53368__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53368__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__53368__$1);
var G__53378 = cljs.core.chunk_rest.call(null,seq__53368__$1);
var G__53379 = c__4337__auto__;
var G__53380 = cljs.core.count.call(null,c__4337__auto__);
var G__53381 = (0);
seq__53368 = G__53378;
chunk__53369 = G__53379;
count__53370 = G__53380;
i__53371 = G__53381;
continue;
} else {
var row = cljs.core.first.call(null,seq__53368__$1);
cljs.core.println.call(null,fmt_row.call(null,"| "," | "," |",row));


var G__53382 = cljs.core.next.call(null,seq__53368__$1);
var G__53383 = null;
var G__53384 = (0);
var G__53385 = (0);
seq__53368 = G__53382;
chunk__53369 = G__53383;
count__53370 = G__53384;
i__53371 = G__53385;
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
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_53357;
}});

cljs.pprint.print_table.cljs$core$IFn$_invoke$arity$1 = (function (rows){
return cljs.pprint.print_table.call(null,cljs.core.keys.call(null,cljs.core.first.call(null,rows)),rows);
});

cljs.pprint.print_table.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=pprint.js.map?rel=1574224101342
