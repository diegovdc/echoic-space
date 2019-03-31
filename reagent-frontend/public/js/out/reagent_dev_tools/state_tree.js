// Compiled by ClojureScript 1.10.312 {}
goog.provide('reagent_dev_tools.state_tree');
goog.require('cljs.core');
goog.require('reagent_dev_tools.styles');
goog.require('reagent.core');
if((typeof reagent_dev_tools !== 'undefined') && (typeof reagent_dev_tools.state_tree !== 'undefined') && (typeof reagent_dev_tools.state_tree.state_tree !== 'undefined')){
} else {
reagent_dev_tools.state_tree.state_tree = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent_dev_tools.state_tree.toggle = (function reagent_dev_tools$state_tree$toggle(v,ks,open_QMARK_){
if(cljs.core.truth_((function (){var or__3936__auto__ = cljs.core.not.call(null,cljs.core.get_in.call(null,v,ks));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open_QMARK_;
}
})())){
return cljs.core.assoc_in.call(null,v,ks,cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.assoc_in.call(null,v,ks,null);
}
});
reagent_dev_tools.state_tree.key__GT_string = (function reagent_dev_tools$state_tree$key__GT_string(k){
if((k instanceof cljs.core.Keyword)){
var s = cljs.core.namespace.call(null,k);
var n = cljs.core.name.call(null,k);
return [":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(s)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n)].join(''):n))].join('');
} else {
return k;
}
});
reagent_dev_tools.state_tree.type__GT_class = (function reagent_dev_tools$state_tree$type__GT_class(v){
if((v instanceof cljs.core.Keyword)){
return "reagent-dev-tools__keyword";
} else {
if(typeof v === 'string'){
return "reagent-dev-tools__string";
} else {
if(typeof v === 'number'){
return "reagent-dev-tools__number";
} else {
return null;
}
}
}
});
reagent_dev_tools.state_tree.tree = (function reagent_dev_tools$state_tree$tree(open,open_fn,v,ks){
if(cljs.core.coll_QMARK_.call(null,v)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$tree_$_iter__42190(s__42191){
return (new cljs.core.LazySeq(null,(function (){
var s__42191__$1 = s__42191;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__42191__$1);
if(temp__5457__auto__){
var s__42191__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42191__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__42191__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__42193 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__42192 = (0);
while(true){
if((i__42192 < size__4309__auto__)){
var vec__42194 = cljs.core._nth.call(null,c__4308__auto__,i__42192);
var k = cljs.core.nth.call(null,vec__42194,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__42194,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
cljs.core.chunk_append.call(null,b__42193,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42192,open__$1,ks__$1,vec__42194,k,v__$1,c__4308__auto__,size__4309__auto__,b__42193,s__42191__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(i__42192,open__$1,ks__$1,vec__42194,k,v__$1,c__4308__auto__,size__4309__auto__,b__42193,s__42191__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__42192,open__$1,ks__$1,vec__42194,k,v__$1,c__4308__auto__,size__4309__auto__,b__42193,s__42191__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__42197 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__42198 = null;
var count__42199 = (0);
var i__42200 = (0);
while(true){
if((i__42200 < count__42199)){
var vec__42201 = cljs.core._nth.call(null,chunk__42198,i__42200);
var k__$1 = cljs.core.nth.call(null,vec__42201,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42201,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__42220 = seq__42197;
var G__42221 = chunk__42198;
var G__42222 = count__42199;
var G__42223 = (i__42200 + (1));
seq__42197 = G__42220;
chunk__42198 = G__42221;
count__42199 = G__42222;
i__42200 = G__42223;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__42197);
if(temp__5457__auto____$1){
var seq__42197__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42197__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__42197__$1);
var G__42224 = cljs.core.chunk_rest.call(null,seq__42197__$1);
var G__42225 = c__4337__auto__;
var G__42226 = cljs.core.count.call(null,c__4337__auto__);
var G__42227 = (0);
seq__42197 = G__42224;
chunk__42198 = G__42225;
count__42199 = G__42226;
i__42200 = G__42227;
continue;
} else {
var vec__42204 = cljs.core.first.call(null,seq__42197__$1);
var k__$1 = cljs.core.nth.call(null,vec__42204,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42204,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__42228 = cljs.core.next.call(null,seq__42197__$1);
var G__42229 = null;
var G__42230 = (0);
var G__42231 = (0);
seq__42197 = G__42228;
chunk__42198 = G__42229;
count__42199 = G__42230;
i__42200 = G__42231;
continue;
}
} else {
return null;
}
}
break;
}
});})(i__42192,open__$1,ks__$1,vec__42194,k,v__$1,c__4308__auto__,size__4309__auto__,b__42193,s__42191__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null));

var G__42232 = (i__42192 + (1));
i__42192 = G__42232;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42193),reagent_dev_tools$state_tree$tree_$_iter__42190.call(null,cljs.core.chunk_rest.call(null,s__42191__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42193),null);
}
} else {
var vec__42207 = cljs.core.first.call(null,s__42191__$2);
var k = cljs.core.nth.call(null,vec__42207,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__42207,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__42207,k,v__$1,s__42191__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(open__$1,ks__$1,vec__42207,k,v__$1,s__42191__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__42207,k,v__$1,s__42191__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__42210 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__42211 = null;
var count__42212 = (0);
var i__42213 = (0);
while(true){
if((i__42213 < count__42212)){
var vec__42214 = cljs.core._nth.call(null,chunk__42211,i__42213);
var k__$1 = cljs.core.nth.call(null,vec__42214,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42214,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__42233 = seq__42210;
var G__42234 = chunk__42211;
var G__42235 = count__42212;
var G__42236 = (i__42213 + (1));
seq__42210 = G__42233;
chunk__42211 = G__42234;
count__42212 = G__42235;
i__42213 = G__42236;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__42210);
if(temp__5457__auto____$1){
var seq__42210__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42210__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__42210__$1);
var G__42237 = cljs.core.chunk_rest.call(null,seq__42210__$1);
var G__42238 = c__4337__auto__;
var G__42239 = cljs.core.count.call(null,c__4337__auto__);
var G__42240 = (0);
seq__42210 = G__42237;
chunk__42211 = G__42238;
count__42212 = G__42239;
i__42213 = G__42240;
continue;
} else {
var vec__42217 = cljs.core.first.call(null,seq__42210__$1);
var k__$1 = cljs.core.nth.call(null,vec__42217,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__42217,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__42241 = cljs.core.next.call(null,seq__42210__$1);
var G__42242 = null;
var G__42243 = (0);
var G__42244 = (0);
seq__42210 = G__42241;
chunk__42211 = G__42242;
count__42212 = G__42243;
i__42213 = G__42244;
continue;
}
} else {
return null;
}
}
break;
}
});})(open__$1,ks__$1,vec__42207,k,v__$1,s__42191__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null),reagent_dev_tools$state_tree$tree_$_iter__42190.call(null,cljs.core.rest.call(null,s__42191__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,((cljs.core.map_QMARK_.call(null,v))?v:cljs.core.zipmap.call(null,cljs.core.range.call(null),v)));
})()], null);
} else {
if((v == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),"nil"], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre.reagent-dev-tools__pre","pre.reagent-dev-tools__pre",556469413),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,v)], null),cljs.core.pr_str.call(null,v)], null);

}
}
});
reagent_dev_tools.state_tree.state_tree_panel = (function reagent_dev_tools$state_tree$state_tree_panel(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$state_tree_panel_$_iter__42245(s__42246){
return (new cljs.core.LazySeq(null,(function (){
var s__42246__$1 = s__42246;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__42246__$1);
if(temp__5457__auto__){
var s__42246__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__42246__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__42246__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__42248 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__42247 = (0);
while(true){
if((i__42247 < size__4309__auto__)){
var vec__42249 = cljs.core._nth.call(null,c__4308__auto__,i__42247);
var name = cljs.core.nth.call(null,vec__42249,(0),null);
var map__42252 = cljs.core.nth.call(null,vec__42249,(1),null);
var map__42252__$1 = ((((!((map__42252 == null)))?(((((map__42252.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42252.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42252):map__42252);
var atom = cljs.core.get.call(null,map__42252__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__42252__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
cljs.core.chunk_append.call(null,b__42248,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (i__42247,vec__42249,name,map__42252,map__42252__$1,atom,open,c__4308__auto__,size__4309__auto__,b__42248,s__42246__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(i__42247,vec__42249,name,map__42252,map__42252__$1,atom,open,c__4308__auto__,size__4309__auto__,b__42248,s__42246__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null));

var G__42259 = (i__42247 + (1));
i__42247 = G__42259;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42248),reagent_dev_tools$state_tree$state_tree_panel_$_iter__42245.call(null,cljs.core.chunk_rest.call(null,s__42246__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__42248),null);
}
} else {
var vec__42254 = cljs.core.first.call(null,s__42246__$2);
var name = cljs.core.nth.call(null,vec__42254,(0),null);
var map__42257 = cljs.core.nth.call(null,vec__42254,(1),null);
var map__42257__$1 = ((((!((map__42257 == null)))?(((((map__42257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42257):map__42257);
var atom = cljs.core.get.call(null,map__42257__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__42257__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (vec__42254,name,map__42257,map__42257__$1,atom,open,s__42246__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(vec__42254,name,map__42257,map__42257__$1,atom,open,s__42246__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null),reagent_dev_tools$state_tree$state_tree_panel_$_iter__42245.call(null,cljs.core.rest.call(null,s__42246__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4310__auto__.call(null,cljs.core.deref.call(null,reagent_dev_tools.state_tree.state_tree));
})())], null);
});
reagent_dev_tools.state_tree.register_state_atom = (function reagent_dev_tools$state_tree$register_state_atom(atom_name,atom){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [atom_name,new cljs.core.Keyword(null,"atom","atom",-397043653)], null),atom);
});

//# sourceMappingURL=state_tree.js.map?rel=1553997024664
