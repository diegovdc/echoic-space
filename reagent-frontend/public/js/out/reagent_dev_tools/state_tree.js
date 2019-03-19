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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$tree_$_iter__50871(s__50872){
return (new cljs.core.LazySeq(null,(function (){
var s__50872__$1 = s__50872;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__50872__$1);
if(temp__5457__auto__){
var s__50872__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50872__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__50872__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__50874 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__50873 = (0);
while(true){
if((i__50873 < size__4309__auto__)){
var vec__50875 = cljs.core._nth.call(null,c__4308__auto__,i__50873);
var k = cljs.core.nth.call(null,vec__50875,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__50875,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
cljs.core.chunk_append.call(null,b__50874,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50873,open__$1,ks__$1,vec__50875,k,v__$1,c__4308__auto__,size__4309__auto__,b__50874,s__50872__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(i__50873,open__$1,ks__$1,vec__50875,k,v__$1,c__4308__auto__,size__4309__auto__,b__50874,s__50872__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__50873,open__$1,ks__$1,vec__50875,k,v__$1,c__4308__auto__,size__4309__auto__,b__50874,s__50872__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__50878 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__50879 = null;
var count__50880 = (0);
var i__50881 = (0);
while(true){
if((i__50881 < count__50880)){
var vec__50882 = cljs.core._nth.call(null,chunk__50879,i__50881);
var k__$1 = cljs.core.nth.call(null,vec__50882,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__50882,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__50901 = seq__50878;
var G__50902 = chunk__50879;
var G__50903 = count__50880;
var G__50904 = (i__50881 + (1));
seq__50878 = G__50901;
chunk__50879 = G__50902;
count__50880 = G__50903;
i__50881 = G__50904;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__50878);
if(temp__5457__auto____$1){
var seq__50878__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50878__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__50878__$1);
var G__50905 = cljs.core.chunk_rest.call(null,seq__50878__$1);
var G__50906 = c__4337__auto__;
var G__50907 = cljs.core.count.call(null,c__4337__auto__);
var G__50908 = (0);
seq__50878 = G__50905;
chunk__50879 = G__50906;
count__50880 = G__50907;
i__50881 = G__50908;
continue;
} else {
var vec__50885 = cljs.core.first.call(null,seq__50878__$1);
var k__$1 = cljs.core.nth.call(null,vec__50885,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__50885,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__50909 = cljs.core.next.call(null,seq__50878__$1);
var G__50910 = null;
var G__50911 = (0);
var G__50912 = (0);
seq__50878 = G__50909;
chunk__50879 = G__50910;
count__50880 = G__50911;
i__50881 = G__50912;
continue;
}
} else {
return null;
}
}
break;
}
});})(i__50873,open__$1,ks__$1,vec__50875,k,v__$1,c__4308__auto__,size__4309__auto__,b__50874,s__50872__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null));

var G__50913 = (i__50873 + (1));
i__50873 = G__50913;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50874),reagent_dev_tools$state_tree$tree_$_iter__50871.call(null,cljs.core.chunk_rest.call(null,s__50872__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50874),null);
}
} else {
var vec__50888 = cljs.core.first.call(null,s__50872__$2);
var k = cljs.core.nth.call(null,vec__50888,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__50888,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__50888,k,v__$1,s__50872__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(open__$1,ks__$1,vec__50888,k,v__$1,s__50872__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__50888,k,v__$1,s__50872__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__50891 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__50892 = null;
var count__50893 = (0);
var i__50894 = (0);
while(true){
if((i__50894 < count__50893)){
var vec__50895 = cljs.core._nth.call(null,chunk__50892,i__50894);
var k__$1 = cljs.core.nth.call(null,vec__50895,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__50895,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__50914 = seq__50891;
var G__50915 = chunk__50892;
var G__50916 = count__50893;
var G__50917 = (i__50894 + (1));
seq__50891 = G__50914;
chunk__50892 = G__50915;
count__50893 = G__50916;
i__50894 = G__50917;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__50891);
if(temp__5457__auto____$1){
var seq__50891__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__50891__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__50891__$1);
var G__50918 = cljs.core.chunk_rest.call(null,seq__50891__$1);
var G__50919 = c__4337__auto__;
var G__50920 = cljs.core.count.call(null,c__4337__auto__);
var G__50921 = (0);
seq__50891 = G__50918;
chunk__50892 = G__50919;
count__50893 = G__50920;
i__50894 = G__50921;
continue;
} else {
var vec__50898 = cljs.core.first.call(null,seq__50891__$1);
var k__$1 = cljs.core.nth.call(null,vec__50898,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__50898,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__50922 = cljs.core.next.call(null,seq__50891__$1);
var G__50923 = null;
var G__50924 = (0);
var G__50925 = (0);
seq__50891 = G__50922;
chunk__50892 = G__50923;
count__50893 = G__50924;
i__50894 = G__50925;
continue;
}
} else {
return null;
}
}
break;
}
});})(open__$1,ks__$1,vec__50888,k,v__$1,s__50872__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null),reagent_dev_tools$state_tree$tree_$_iter__50871.call(null,cljs.core.rest.call(null,s__50872__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$state_tree_panel_$_iter__50926(s__50927){
return (new cljs.core.LazySeq(null,(function (){
var s__50927__$1 = s__50927;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__50927__$1);
if(temp__5457__auto__){
var s__50927__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__50927__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__50927__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__50929 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__50928 = (0);
while(true){
if((i__50928 < size__4309__auto__)){
var vec__50930 = cljs.core._nth.call(null,c__4308__auto__,i__50928);
var name = cljs.core.nth.call(null,vec__50930,(0),null);
var map__50933 = cljs.core.nth.call(null,vec__50930,(1),null);
var map__50933__$1 = ((((!((map__50933 == null)))?(((((map__50933.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50933.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50933):map__50933);
var atom = cljs.core.get.call(null,map__50933__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__50933__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
cljs.core.chunk_append.call(null,b__50929,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (i__50928,vec__50930,name,map__50933,map__50933__$1,atom,open,c__4308__auto__,size__4309__auto__,b__50929,s__50927__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(i__50928,vec__50930,name,map__50933,map__50933__$1,atom,open,c__4308__auto__,size__4309__auto__,b__50929,s__50927__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null));

var G__50940 = (i__50928 + (1));
i__50928 = G__50940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50929),reagent_dev_tools$state_tree$state_tree_panel_$_iter__50926.call(null,cljs.core.chunk_rest.call(null,s__50927__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__50929),null);
}
} else {
var vec__50935 = cljs.core.first.call(null,s__50927__$2);
var name = cljs.core.nth.call(null,vec__50935,(0),null);
var map__50938 = cljs.core.nth.call(null,vec__50935,(1),null);
var map__50938__$1 = ((((!((map__50938 == null)))?(((((map__50938.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50938.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__50938):map__50938);
var atom = cljs.core.get.call(null,map__50938__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__50938__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (vec__50935,name,map__50938,map__50938__$1,atom,open,s__50927__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(vec__50935,name,map__50938,map__50938__$1,atom,open,s__50927__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null),reagent_dev_tools$state_tree$state_tree_panel_$_iter__50926.call(null,cljs.core.rest.call(null,s__50927__$2)));
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

//# sourceMappingURL=state_tree.js.map?rel=1552956591123
