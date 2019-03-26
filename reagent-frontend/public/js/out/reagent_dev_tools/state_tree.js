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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$tree_$_iter__38211(s__38212){
return (new cljs.core.LazySeq(null,(function (){
var s__38212__$1 = s__38212;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38212__$1);
if(temp__5457__auto__){
var s__38212__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38212__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__38212__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__38214 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__38213 = (0);
while(true){
if((i__38213 < size__4309__auto__)){
var vec__38215 = cljs.core._nth.call(null,c__4308__auto__,i__38213);
var k = cljs.core.nth.call(null,vec__38215,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__38215,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
cljs.core.chunk_append.call(null,b__38214,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38213,open__$1,ks__$1,vec__38215,k,v__$1,c__4308__auto__,size__4309__auto__,b__38214,s__38212__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(i__38213,open__$1,ks__$1,vec__38215,k,v__$1,c__4308__auto__,size__4309__auto__,b__38214,s__38212__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__38213,open__$1,ks__$1,vec__38215,k,v__$1,c__4308__auto__,size__4309__auto__,b__38214,s__38212__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__38218 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__38219 = null;
var count__38220 = (0);
var i__38221 = (0);
while(true){
if((i__38221 < count__38220)){
var vec__38222 = cljs.core._nth.call(null,chunk__38219,i__38221);
var k__$1 = cljs.core.nth.call(null,vec__38222,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38222,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__38241 = seq__38218;
var G__38242 = chunk__38219;
var G__38243 = count__38220;
var G__38244 = (i__38221 + (1));
seq__38218 = G__38241;
chunk__38219 = G__38242;
count__38220 = G__38243;
i__38221 = G__38244;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38218);
if(temp__5457__auto____$1){
var seq__38218__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38218__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__38218__$1);
var G__38245 = cljs.core.chunk_rest.call(null,seq__38218__$1);
var G__38246 = c__4337__auto__;
var G__38247 = cljs.core.count.call(null,c__4337__auto__);
var G__38248 = (0);
seq__38218 = G__38245;
chunk__38219 = G__38246;
count__38220 = G__38247;
i__38221 = G__38248;
continue;
} else {
var vec__38225 = cljs.core.first.call(null,seq__38218__$1);
var k__$1 = cljs.core.nth.call(null,vec__38225,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38225,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__38249 = cljs.core.next.call(null,seq__38218__$1);
var G__38250 = null;
var G__38251 = (0);
var G__38252 = (0);
seq__38218 = G__38249;
chunk__38219 = G__38250;
count__38220 = G__38251;
i__38221 = G__38252;
continue;
}
} else {
return null;
}
}
break;
}
});})(i__38213,open__$1,ks__$1,vec__38215,k,v__$1,c__4308__auto__,size__4309__auto__,b__38214,s__38212__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null));

var G__38253 = (i__38213 + (1));
i__38213 = G__38253;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38214),reagent_dev_tools$state_tree$tree_$_iter__38211.call(null,cljs.core.chunk_rest.call(null,s__38212__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38214),null);
}
} else {
var vec__38228 = cljs.core.first.call(null,s__38212__$2);
var k = cljs.core.nth.call(null,vec__38228,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__38228,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__38228,k,v__$1,s__38212__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(open__$1,ks__$1,vec__38228,k,v__$1,s__38212__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__38228,k,v__$1,s__38212__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__38231 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__38232 = null;
var count__38233 = (0);
var i__38234 = (0);
while(true){
if((i__38234 < count__38233)){
var vec__38235 = cljs.core._nth.call(null,chunk__38232,i__38234);
var k__$1 = cljs.core.nth.call(null,vec__38235,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38235,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__38254 = seq__38231;
var G__38255 = chunk__38232;
var G__38256 = count__38233;
var G__38257 = (i__38234 + (1));
seq__38231 = G__38254;
chunk__38232 = G__38255;
count__38233 = G__38256;
i__38234 = G__38257;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38231);
if(temp__5457__auto____$1){
var seq__38231__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38231__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__38231__$1);
var G__38258 = cljs.core.chunk_rest.call(null,seq__38231__$1);
var G__38259 = c__4337__auto__;
var G__38260 = cljs.core.count.call(null,c__4337__auto__);
var G__38261 = (0);
seq__38231 = G__38258;
chunk__38232 = G__38259;
count__38233 = G__38260;
i__38234 = G__38261;
continue;
} else {
var vec__38238 = cljs.core.first.call(null,seq__38231__$1);
var k__$1 = cljs.core.nth.call(null,vec__38238,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__38238,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__38262 = cljs.core.next.call(null,seq__38231__$1);
var G__38263 = null;
var G__38264 = (0);
var G__38265 = (0);
seq__38231 = G__38262;
chunk__38232 = G__38263;
count__38233 = G__38264;
i__38234 = G__38265;
continue;
}
} else {
return null;
}
}
break;
}
});})(open__$1,ks__$1,vec__38228,k,v__$1,s__38212__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null),reagent_dev_tools$state_tree$tree_$_iter__38211.call(null,cljs.core.rest.call(null,s__38212__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$state_tree_panel_$_iter__38266(s__38267){
return (new cljs.core.LazySeq(null,(function (){
var s__38267__$1 = s__38267;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38267__$1);
if(temp__5457__auto__){
var s__38267__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38267__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__38267__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__38269 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__38268 = (0);
while(true){
if((i__38268 < size__4309__auto__)){
var vec__38270 = cljs.core._nth.call(null,c__4308__auto__,i__38268);
var name = cljs.core.nth.call(null,vec__38270,(0),null);
var map__38273 = cljs.core.nth.call(null,vec__38270,(1),null);
var map__38273__$1 = ((((!((map__38273 == null)))?(((((map__38273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38273):map__38273);
var atom = cljs.core.get.call(null,map__38273__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__38273__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
cljs.core.chunk_append.call(null,b__38269,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (i__38268,vec__38270,name,map__38273,map__38273__$1,atom,open,c__4308__auto__,size__4309__auto__,b__38269,s__38267__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(i__38268,vec__38270,name,map__38273,map__38273__$1,atom,open,c__4308__auto__,size__4309__auto__,b__38269,s__38267__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null));

var G__38280 = (i__38268 + (1));
i__38268 = G__38280;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38269),reagent_dev_tools$state_tree$state_tree_panel_$_iter__38266.call(null,cljs.core.chunk_rest.call(null,s__38267__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38269),null);
}
} else {
var vec__38275 = cljs.core.first.call(null,s__38267__$2);
var name = cljs.core.nth.call(null,vec__38275,(0),null);
var map__38278 = cljs.core.nth.call(null,vec__38275,(1),null);
var map__38278__$1 = ((((!((map__38278 == null)))?(((((map__38278.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38278.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38278):map__38278);
var atom = cljs.core.get.call(null,map__38278__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__38278__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (vec__38275,name,map__38278,map__38278__$1,atom,open,s__38267__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(vec__38275,name,map__38278,map__38278__$1,atom,open,s__38267__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null),reagent_dev_tools$state_tree$state_tree_panel_$_iter__38266.call(null,cljs.core.rest.call(null,s__38267__$2)));
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

//# sourceMappingURL=state_tree.js.map?rel=1553576545197
