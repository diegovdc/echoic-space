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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$tree_$_iter__56211(s__56212){
return (new cljs.core.LazySeq(null,(function (){
var s__56212__$1 = s__56212;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__56212__$1);
if(temp__5457__auto__){
var s__56212__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56212__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__56212__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__56214 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__56213 = (0);
while(true){
if((i__56213 < size__4309__auto__)){
var vec__56215 = cljs.core._nth.call(null,c__4308__auto__,i__56213);
var k = cljs.core.nth.call(null,vec__56215,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__56215,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
cljs.core.chunk_append.call(null,b__56214,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56213,open__$1,ks__$1,vec__56215,k,v__$1,c__4308__auto__,size__4309__auto__,b__56214,s__56212__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(i__56213,open__$1,ks__$1,vec__56215,k,v__$1,c__4308__auto__,size__4309__auto__,b__56214,s__56212__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__56213,open__$1,ks__$1,vec__56215,k,v__$1,c__4308__auto__,size__4309__auto__,b__56214,s__56212__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__56218 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__56219 = null;
var count__56220 = (0);
var i__56221 = (0);
while(true){
if((i__56221 < count__56220)){
var vec__56222 = cljs.core._nth.call(null,chunk__56219,i__56221);
var k__$1 = cljs.core.nth.call(null,vec__56222,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__56222,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__56241 = seq__56218;
var G__56242 = chunk__56219;
var G__56243 = count__56220;
var G__56244 = (i__56221 + (1));
seq__56218 = G__56241;
chunk__56219 = G__56242;
count__56220 = G__56243;
i__56221 = G__56244;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__56218);
if(temp__5457__auto____$1){
var seq__56218__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56218__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__56218__$1);
var G__56245 = cljs.core.chunk_rest.call(null,seq__56218__$1);
var G__56246 = c__4337__auto__;
var G__56247 = cljs.core.count.call(null,c__4337__auto__);
var G__56248 = (0);
seq__56218 = G__56245;
chunk__56219 = G__56246;
count__56220 = G__56247;
i__56221 = G__56248;
continue;
} else {
var vec__56225 = cljs.core.first.call(null,seq__56218__$1);
var k__$1 = cljs.core.nth.call(null,vec__56225,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__56225,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__56249 = cljs.core.next.call(null,seq__56218__$1);
var G__56250 = null;
var G__56251 = (0);
var G__56252 = (0);
seq__56218 = G__56249;
chunk__56219 = G__56250;
count__56220 = G__56251;
i__56221 = G__56252;
continue;
}
} else {
return null;
}
}
break;
}
});})(i__56213,open__$1,ks__$1,vec__56215,k,v__$1,c__4308__auto__,size__4309__auto__,b__56214,s__56212__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null));

var G__56253 = (i__56213 + (1));
i__56213 = G__56253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56214),reagent_dev_tools$state_tree$tree_$_iter__56211.call(null,cljs.core.chunk_rest.call(null,s__56212__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56214),null);
}
} else {
var vec__56228 = cljs.core.first.call(null,s__56212__$2);
var k = cljs.core.nth.call(null,vec__56228,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__56228,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__56228,k,v__$1,s__56212__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(open__$1,ks__$1,vec__56228,k,v__$1,s__56212__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__56228,k,v__$1,s__56212__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__56231 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__56232 = null;
var count__56233 = (0);
var i__56234 = (0);
while(true){
if((i__56234 < count__56233)){
var vec__56235 = cljs.core._nth.call(null,chunk__56232,i__56234);
var k__$1 = cljs.core.nth.call(null,vec__56235,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__56235,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__56254 = seq__56231;
var G__56255 = chunk__56232;
var G__56256 = count__56233;
var G__56257 = (i__56234 + (1));
seq__56231 = G__56254;
chunk__56232 = G__56255;
count__56233 = G__56256;
i__56234 = G__56257;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__56231);
if(temp__5457__auto____$1){
var seq__56231__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56231__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__56231__$1);
var G__56258 = cljs.core.chunk_rest.call(null,seq__56231__$1);
var G__56259 = c__4337__auto__;
var G__56260 = cljs.core.count.call(null,c__4337__auto__);
var G__56261 = (0);
seq__56231 = G__56258;
chunk__56232 = G__56259;
count__56233 = G__56260;
i__56234 = G__56261;
continue;
} else {
var vec__56238 = cljs.core.first.call(null,seq__56231__$1);
var k__$1 = cljs.core.nth.call(null,vec__56238,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__56238,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__56262 = cljs.core.next.call(null,seq__56231__$1);
var G__56263 = null;
var G__56264 = (0);
var G__56265 = (0);
seq__56231 = G__56262;
chunk__56232 = G__56263;
count__56233 = G__56264;
i__56234 = G__56265;
continue;
}
} else {
return null;
}
}
break;
}
});})(open__$1,ks__$1,vec__56228,k,v__$1,s__56212__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null),reagent_dev_tools$state_tree$tree_$_iter__56211.call(null,cljs.core.rest.call(null,s__56212__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$state_tree_panel_$_iter__56266(s__56267){
return (new cljs.core.LazySeq(null,(function (){
var s__56267__$1 = s__56267;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__56267__$1);
if(temp__5457__auto__){
var s__56267__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__56267__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__56267__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__56269 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__56268 = (0);
while(true){
if((i__56268 < size__4309__auto__)){
var vec__56270 = cljs.core._nth.call(null,c__4308__auto__,i__56268);
var name = cljs.core.nth.call(null,vec__56270,(0),null);
var map__56273 = cljs.core.nth.call(null,vec__56270,(1),null);
var map__56273__$1 = ((((!((map__56273 == null)))?(((((map__56273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56273):map__56273);
var atom = cljs.core.get.call(null,map__56273__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__56273__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
cljs.core.chunk_append.call(null,b__56269,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (i__56268,vec__56270,name,map__56273,map__56273__$1,atom,open,c__4308__auto__,size__4309__auto__,b__56269,s__56267__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(i__56268,vec__56270,name,map__56273,map__56273__$1,atom,open,c__4308__auto__,size__4309__auto__,b__56269,s__56267__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null));

var G__56280 = (i__56268 + (1));
i__56268 = G__56280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56269),reagent_dev_tools$state_tree$state_tree_panel_$_iter__56266.call(null,cljs.core.chunk_rest.call(null,s__56267__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__56269),null);
}
} else {
var vec__56275 = cljs.core.first.call(null,s__56267__$2);
var name = cljs.core.nth.call(null,vec__56275,(0),null);
var map__56278 = cljs.core.nth.call(null,vec__56275,(1),null);
var map__56278__$1 = ((((!((map__56278 == null)))?(((((map__56278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56278):map__56278);
var atom = cljs.core.get.call(null,map__56278__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__56278__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (vec__56275,name,map__56278,map__56278__$1,atom,open,s__56267__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(vec__56275,name,map__56278,map__56278__$1,atom,open,s__56267__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null),reagent_dev_tools$state_tree$state_tree_panel_$_iter__56266.call(null,cljs.core.rest.call(null,s__56267__$2)));
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

//# sourceMappingURL=state_tree.js.map?rel=1574224106095
