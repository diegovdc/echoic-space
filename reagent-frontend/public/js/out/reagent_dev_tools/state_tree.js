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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$tree_$_iter__32785(s__32786){
return (new cljs.core.LazySeq(null,(function (){
var s__32786__$1 = s__32786;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32786__$1);
if(temp__5457__auto__){
var s__32786__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32786__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__32786__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__32788 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__32787 = (0);
while(true){
if((i__32787 < size__4309__auto__)){
var vec__32789 = cljs.core._nth.call(null,c__4308__auto__,i__32787);
var k = cljs.core.nth.call(null,vec__32789,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__32789,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
cljs.core.chunk_append.call(null,b__32788,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32787,open__$1,ks__$1,vec__32789,k,v__$1,c__4308__auto__,size__4309__auto__,b__32788,s__32786__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(i__32787,open__$1,ks__$1,vec__32789,k,v__$1,c__4308__auto__,size__4309__auto__,b__32788,s__32786__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32787,open__$1,ks__$1,vec__32789,k,v__$1,c__4308__auto__,size__4309__auto__,b__32788,s__32786__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__32792 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__32793 = null;
var count__32794 = (0);
var i__32795 = (0);
while(true){
if((i__32795 < count__32794)){
var vec__32796 = cljs.core._nth.call(null,chunk__32793,i__32795);
var k__$1 = cljs.core.nth.call(null,vec__32796,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32796,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__32815 = seq__32792;
var G__32816 = chunk__32793;
var G__32817 = count__32794;
var G__32818 = (i__32795 + (1));
seq__32792 = G__32815;
chunk__32793 = G__32816;
count__32794 = G__32817;
i__32795 = G__32818;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32792);
if(temp__5457__auto____$1){
var seq__32792__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32792__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__32792__$1);
var G__32819 = cljs.core.chunk_rest.call(null,seq__32792__$1);
var G__32820 = c__4337__auto__;
var G__32821 = cljs.core.count.call(null,c__4337__auto__);
var G__32822 = (0);
seq__32792 = G__32819;
chunk__32793 = G__32820;
count__32794 = G__32821;
i__32795 = G__32822;
continue;
} else {
var vec__32799 = cljs.core.first.call(null,seq__32792__$1);
var k__$1 = cljs.core.nth.call(null,vec__32799,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32799,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__32823 = cljs.core.next.call(null,seq__32792__$1);
var G__32824 = null;
var G__32825 = (0);
var G__32826 = (0);
seq__32792 = G__32823;
chunk__32793 = G__32824;
count__32794 = G__32825;
i__32795 = G__32826;
continue;
}
} else {
return null;
}
}
break;
}
});})(i__32787,open__$1,ks__$1,vec__32789,k,v__$1,c__4308__auto__,size__4309__auto__,b__32788,s__32786__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null));

var G__32827 = (i__32787 + (1));
i__32787 = G__32827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32788),reagent_dev_tools$state_tree$tree_$_iter__32785.call(null,cljs.core.chunk_rest.call(null,s__32786__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32788),null);
}
} else {
var vec__32802 = cljs.core.first.call(null,s__32786__$2);
var k = cljs.core.nth.call(null,vec__32802,(0),null);
var v__$1 = cljs.core.nth.call(null,vec__32802,(1),null);
var open__$1 = cljs.core.get.call(null,open,k);
var ks__$1 = cljs.core.conj.call(null,ks,k);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.reagent-dev-tools__li","li.reagent-dev-tools__li",-548246051),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle","span.reagent-dev-tools__li-toggle",1442150107),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__32802,k,v__$1,s__32786__$2,temp__5457__auto__){
return (function (){
return open_fn.call(null,ks__$1,false);
});})(open__$1,ks__$1,vec__32802,k,v__$1,s__32786__$2,temp__5457__auto__))
,new cljs.core.Keyword(null,"title","title",636505583),"Toggle this collection",new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.coll_QMARK_.call(null,v__$1))?"reagent-dev-tools__li-toggle--active":null)], null),((cljs.core.coll_QMARK_.call(null,v__$1))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle-icon","span.reagent-dev-tools__li-toggle-icon",-1313662001),(cljs.core.truth_(open__$1)?"-":"+")], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),reagent_dev_tools.state_tree.type__GT_class.call(null,k)], null),reagent_dev_tools.state_tree.key__GT_string.call(null,k)], null)," "], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre","span.reagent-dev-tools__li-toggle.reagent-dev-tools__li-toggle--active.reagent-dev-tools__pre",666810634),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Toggle collection items",new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (open__$1,ks__$1,vec__32802,k,v__$1,s__32786__$2,temp__5457__auto__){
return (function (_){
var open_all_QMARK_ = cljs.core.some.call(null,cljs.core.nil_QMARK_,cljs.core.vals.call(null,open__$1));
var seq__32805 = cljs.core.seq.call(null,((cljs.core.map_QMARK_.call(null,v__$1))?v__$1:cljs.core.zipmap.call(null,cljs.core.range.call(null),v__$1)));
var chunk__32806 = null;
var count__32807 = (0);
var i__32808 = (0);
while(true){
if((i__32808 < count__32807)){
var vec__32809 = cljs.core._nth.call(null,chunk__32806,i__32808);
var k__$1 = cljs.core.nth.call(null,vec__32809,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32809,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__32828 = seq__32805;
var G__32829 = chunk__32806;
var G__32830 = count__32807;
var G__32831 = (i__32808 + (1));
seq__32805 = G__32828;
chunk__32806 = G__32829;
count__32807 = G__32830;
i__32808 = G__32831;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__32805);
if(temp__5457__auto____$1){
var seq__32805__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32805__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__32805__$1);
var G__32832 = cljs.core.chunk_rest.call(null,seq__32805__$1);
var G__32833 = c__4337__auto__;
var G__32834 = cljs.core.count.call(null,c__4337__auto__);
var G__32835 = (0);
seq__32805 = G__32832;
chunk__32806 = G__32833;
count__32807 = G__32834;
i__32808 = G__32835;
continue;
} else {
var vec__32812 = cljs.core.first.call(null,seq__32805__$1);
var k__$1 = cljs.core.nth.call(null,vec__32812,(0),null);
var ___$1 = cljs.core.nth.call(null,vec__32812,(1),null);
open_fn.call(null,cljs.core.conj.call(null,ks__$1,k__$1),open_all_QMARK_);


var G__32836 = cljs.core.next.call(null,seq__32805__$1);
var G__32837 = null;
var G__32838 = (0);
var G__32839 = (0);
seq__32805 = G__32836;
chunk__32806 = G__32837;
count__32807 = G__32838;
i__32808 = G__32839;
continue;
}
} else {
return null;
}
}
break;
}
});})(open__$1,ks__$1,vec__32802,k,v__$1,s__32786__$2,temp__5457__auto__))
], null),((cljs.core.coll_QMARK_.call(null,v__$1))?((cljs.core.map_QMARK_.call(null,v__$1))?"{}":((cljs.core.vector_QMARK_.call(null,v__$1))?"[]":((cljs.core.set_QMARK_.call(null,v__$1))?"#{}":((cljs.core.list_QMARK_.call(null,v__$1))?"()":null)))):null)], null),(cljs.core.truth_((function (){var or__3936__auto__ = !(cljs.core.coll_QMARK_.call(null,v__$1));
if(or__3936__auto__){
return or__3936__auto__;
} else {
return open__$1;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open__$1,open_fn,v__$1,ks__$1], null):null)], null),reagent_dev_tools$state_tree$tree_$_iter__32785.call(null,cljs.core.rest.call(null,s__32786__$2)));
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
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.doall.call(null,(function (){var iter__4310__auto__ = (function reagent_dev_tools$state_tree$state_tree_panel_$_iter__32840(s__32841){
return (new cljs.core.LazySeq(null,(function (){
var s__32841__$1 = s__32841;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32841__$1);
if(temp__5457__auto__){
var s__32841__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32841__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__32841__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__32843 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__32842 = (0);
while(true){
if((i__32842 < size__4309__auto__)){
var vec__32844 = cljs.core._nth.call(null,c__4308__auto__,i__32842);
var name = cljs.core.nth.call(null,vec__32844,(0),null);
var map__32847 = cljs.core.nth.call(null,vec__32844,(1),null);
var map__32847__$1 = ((((!((map__32847 == null)))?(((((map__32847.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32847.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32847):map__32847);
var atom = cljs.core.get.call(null,map__32847__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__32847__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
cljs.core.chunk_append.call(null,b__32843,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (i__32842,vec__32844,name,map__32847,map__32847__$1,atom,open,c__4308__auto__,size__4309__auto__,b__32843,s__32841__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(i__32842,vec__32844,name,map__32847,map__32847__$1,atom,open,c__4308__auto__,size__4309__auto__,b__32843,s__32841__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null));

var G__32854 = (i__32842 + (1));
i__32842 = G__32854;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32843),reagent_dev_tools$state_tree$state_tree_panel_$_iter__32840.call(null,cljs.core.chunk_rest.call(null,s__32841__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32843),null);
}
} else {
var vec__32849 = cljs.core.first.call(null,s__32841__$2);
var name = cljs.core.nth.call(null,vec__32849,(0),null);
var map__32852 = cljs.core.nth.call(null,vec__32849,(1),null);
var map__32852__$1 = ((((!((map__32852 == null)))?(((((map__32852.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32852.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32852):map__32852);
var atom = cljs.core.get.call(null,map__32852__$1,new cljs.core.Keyword(null,"atom","atom",-397043653));
var open = cljs.core.get.call(null,map__32852__$1,new cljs.core.Keyword(null,"open","open",-1763596448));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),name], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),name], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.state_tree.tree,open,((function (vec__32849,name,map__32852,map__32852__$1,atom,open,s__32841__$2,temp__5457__auto__){
return (function (ks,open_QMARK_){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.state_tree.state_tree,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [name,new cljs.core.Keyword(null,"open","open",-1763596448)], null),reagent_dev_tools.state_tree.toggle,ks,open_QMARK_);
});})(vec__32849,name,map__32852,map__32852__$1,atom,open,s__32841__$2,temp__5457__auto__))
,cljs.core.deref.call(null,atom),cljs.core.PersistentVector.EMPTY], null)], null),reagent_dev_tools$state_tree$state_tree_panel_$_iter__32840.call(null,cljs.core.rest.call(null,s__32841__$2)));
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

//# sourceMappingURL=state_tree.js.map?rel=1552590666224
