// Compiled by ClojureScript 1.10.312 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3936__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3936__auto__){
return or__3936__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3936__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__45638_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__45638_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__45639 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__45640 = null;
var count__45641 = (0);
var i__45642 = (0);
while(true){
if((i__45642 < count__45641)){
var n = cljs.core._nth.call(null,chunk__45640,i__45642);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45643 = seq__45639;
var G__45644 = chunk__45640;
var G__45645 = count__45641;
var G__45646 = (i__45642 + (1));
seq__45639 = G__45643;
chunk__45640 = G__45644;
count__45641 = G__45645;
i__45642 = G__45646;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45639);
if(temp__5457__auto__){
var seq__45639__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45639__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__45639__$1);
var G__45647 = cljs.core.chunk_rest.call(null,seq__45639__$1);
var G__45648 = c__4337__auto__;
var G__45649 = cljs.core.count.call(null,c__4337__auto__);
var G__45650 = (0);
seq__45639 = G__45647;
chunk__45640 = G__45648;
count__45641 = G__45649;
i__45642 = G__45650;
continue;
} else {
var n = cljs.core.first.call(null,seq__45639__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__45651 = cljs.core.next.call(null,seq__45639__$1);
var G__45652 = null;
var G__45653 = (0);
var G__45654 = (0);
seq__45639 = G__45651;
chunk__45640 = G__45652;
count__45641 = G__45653;
i__45642 = G__45654;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__45655){
var vec__45656 = p__45655;
var _ = cljs.core.nth.call(null,vec__45656,(0),null);
var v = cljs.core.nth.call(null,vec__45656,(1),null);
var and__3925__auto__ = v;
if(cljs.core.truth_(and__3925__auto__)){
return v.call(null,dep);
} else {
return and__3925__auto__;
}
}),cljs.core.filter.call(null,(function (p__45659){
var vec__45660 = p__45659;
var k = cljs.core.nth.call(null,vec__45660,(0),null);
var v = cljs.core.nth.call(null,vec__45660,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__45672_45680 = cljs.core.seq.call(null,deps);
var chunk__45673_45681 = null;
var count__45674_45682 = (0);
var i__45675_45683 = (0);
while(true){
if((i__45675_45683 < count__45674_45682)){
var dep_45684 = cljs.core._nth.call(null,chunk__45673_45681,i__45675_45683);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_45684;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45684));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45684,(depth + (1)),state);
} else {
}


var G__45685 = seq__45672_45680;
var G__45686 = chunk__45673_45681;
var G__45687 = count__45674_45682;
var G__45688 = (i__45675_45683 + (1));
seq__45672_45680 = G__45685;
chunk__45673_45681 = G__45686;
count__45674_45682 = G__45687;
i__45675_45683 = G__45688;
continue;
} else {
var temp__5457__auto___45689 = cljs.core.seq.call(null,seq__45672_45680);
if(temp__5457__auto___45689){
var seq__45672_45690__$1 = temp__5457__auto___45689;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45672_45690__$1)){
var c__4337__auto___45691 = cljs.core.chunk_first.call(null,seq__45672_45690__$1);
var G__45692 = cljs.core.chunk_rest.call(null,seq__45672_45690__$1);
var G__45693 = c__4337__auto___45691;
var G__45694 = cljs.core.count.call(null,c__4337__auto___45691);
var G__45695 = (0);
seq__45672_45680 = G__45692;
chunk__45673_45681 = G__45693;
count__45674_45682 = G__45694;
i__45675_45683 = G__45695;
continue;
} else {
var dep_45696 = cljs.core.first.call(null,seq__45672_45690__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_45696;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_45696));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_45696,(depth + (1)),state);
} else {
}


var G__45697 = cljs.core.next.call(null,seq__45672_45690__$1);
var G__45698 = null;
var G__45699 = (0);
var G__45700 = (0);
seq__45672_45680 = G__45697;
chunk__45673_45681 = G__45698;
count__45674_45682 = G__45699;
i__45675_45683 = G__45700;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__45676){
var vec__45677 = p__45676;
var seq__45678 = cljs.core.seq.call(null,vec__45677);
var first__45679 = cljs.core.first.call(null,seq__45678);
var seq__45678__$1 = cljs.core.next.call(null,seq__45678);
var x = first__45679;
var xs = seq__45678__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__45677,seq__45678,first__45679,seq__45678__$1,x,xs,get_deps__$1){
return (function (p1__45663_SHARP_){
return clojure.set.difference.call(null,p1__45663_SHARP_,x);
});})(vec__45677,seq__45678,first__45679,seq__45678__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__45701 = cljs.core.seq.call(null,provides);
var chunk__45702 = null;
var count__45703 = (0);
var i__45704 = (0);
while(true){
if((i__45704 < count__45703)){
var prov = cljs.core._nth.call(null,chunk__45702,i__45704);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45705_45713 = cljs.core.seq.call(null,requires);
var chunk__45706_45714 = null;
var count__45707_45715 = (0);
var i__45708_45716 = (0);
while(true){
if((i__45708_45716 < count__45707_45715)){
var req_45717 = cljs.core._nth.call(null,chunk__45706_45714,i__45708_45716);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45717,prov);


var G__45718 = seq__45705_45713;
var G__45719 = chunk__45706_45714;
var G__45720 = count__45707_45715;
var G__45721 = (i__45708_45716 + (1));
seq__45705_45713 = G__45718;
chunk__45706_45714 = G__45719;
count__45707_45715 = G__45720;
i__45708_45716 = G__45721;
continue;
} else {
var temp__5457__auto___45722 = cljs.core.seq.call(null,seq__45705_45713);
if(temp__5457__auto___45722){
var seq__45705_45723__$1 = temp__5457__auto___45722;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45705_45723__$1)){
var c__4337__auto___45724 = cljs.core.chunk_first.call(null,seq__45705_45723__$1);
var G__45725 = cljs.core.chunk_rest.call(null,seq__45705_45723__$1);
var G__45726 = c__4337__auto___45724;
var G__45727 = cljs.core.count.call(null,c__4337__auto___45724);
var G__45728 = (0);
seq__45705_45713 = G__45725;
chunk__45706_45714 = G__45726;
count__45707_45715 = G__45727;
i__45708_45716 = G__45728;
continue;
} else {
var req_45729 = cljs.core.first.call(null,seq__45705_45723__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45729,prov);


var G__45730 = cljs.core.next.call(null,seq__45705_45723__$1);
var G__45731 = null;
var G__45732 = (0);
var G__45733 = (0);
seq__45705_45713 = G__45730;
chunk__45706_45714 = G__45731;
count__45707_45715 = G__45732;
i__45708_45716 = G__45733;
continue;
}
} else {
}
}
break;
}


var G__45734 = seq__45701;
var G__45735 = chunk__45702;
var G__45736 = count__45703;
var G__45737 = (i__45704 + (1));
seq__45701 = G__45734;
chunk__45702 = G__45735;
count__45703 = G__45736;
i__45704 = G__45737;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__45701);
if(temp__5457__auto__){
var seq__45701__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45701__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__45701__$1);
var G__45738 = cljs.core.chunk_rest.call(null,seq__45701__$1);
var G__45739 = c__4337__auto__;
var G__45740 = cljs.core.count.call(null,c__4337__auto__);
var G__45741 = (0);
seq__45701 = G__45738;
chunk__45702 = G__45739;
count__45703 = G__45740;
i__45704 = G__45741;
continue;
} else {
var prov = cljs.core.first.call(null,seq__45701__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__45709_45742 = cljs.core.seq.call(null,requires);
var chunk__45710_45743 = null;
var count__45711_45744 = (0);
var i__45712_45745 = (0);
while(true){
if((i__45712_45745 < count__45711_45744)){
var req_45746 = cljs.core._nth.call(null,chunk__45710_45743,i__45712_45745);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45746,prov);


var G__45747 = seq__45709_45742;
var G__45748 = chunk__45710_45743;
var G__45749 = count__45711_45744;
var G__45750 = (i__45712_45745 + (1));
seq__45709_45742 = G__45747;
chunk__45710_45743 = G__45748;
count__45711_45744 = G__45749;
i__45712_45745 = G__45750;
continue;
} else {
var temp__5457__auto___45751__$1 = cljs.core.seq.call(null,seq__45709_45742);
if(temp__5457__auto___45751__$1){
var seq__45709_45752__$1 = temp__5457__auto___45751__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45709_45752__$1)){
var c__4337__auto___45753 = cljs.core.chunk_first.call(null,seq__45709_45752__$1);
var G__45754 = cljs.core.chunk_rest.call(null,seq__45709_45752__$1);
var G__45755 = c__4337__auto___45753;
var G__45756 = cljs.core.count.call(null,c__4337__auto___45753);
var G__45757 = (0);
seq__45709_45742 = G__45754;
chunk__45710_45743 = G__45755;
count__45711_45744 = G__45756;
i__45712_45745 = G__45757;
continue;
} else {
var req_45758 = cljs.core.first.call(null,seq__45709_45752__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_45758,prov);


var G__45759 = cljs.core.next.call(null,seq__45709_45752__$1);
var G__45760 = null;
var G__45761 = (0);
var G__45762 = (0);
seq__45709_45742 = G__45759;
chunk__45710_45743 = G__45760;
count__45711_45744 = G__45761;
i__45712_45745 = G__45762;
continue;
}
} else {
}
}
break;
}


var G__45763 = cljs.core.next.call(null,seq__45701__$1);
var G__45764 = null;
var G__45765 = (0);
var G__45766 = (0);
seq__45701 = G__45763;
chunk__45702 = G__45764;
count__45703 = G__45765;
i__45704 = G__45766;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__45767_45771 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__45768_45772 = null;
var count__45769_45773 = (0);
var i__45770_45774 = (0);
while(true){
if((i__45770_45774 < count__45769_45773)){
var ns_45775 = cljs.core._nth.call(null,chunk__45768_45772,i__45770_45774);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45775);


var G__45776 = seq__45767_45771;
var G__45777 = chunk__45768_45772;
var G__45778 = count__45769_45773;
var G__45779 = (i__45770_45774 + (1));
seq__45767_45771 = G__45776;
chunk__45768_45772 = G__45777;
count__45769_45773 = G__45778;
i__45770_45774 = G__45779;
continue;
} else {
var temp__5457__auto___45780 = cljs.core.seq.call(null,seq__45767_45771);
if(temp__5457__auto___45780){
var seq__45767_45781__$1 = temp__5457__auto___45780;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45767_45781__$1)){
var c__4337__auto___45782 = cljs.core.chunk_first.call(null,seq__45767_45781__$1);
var G__45783 = cljs.core.chunk_rest.call(null,seq__45767_45781__$1);
var G__45784 = c__4337__auto___45782;
var G__45785 = cljs.core.count.call(null,c__4337__auto___45782);
var G__45786 = (0);
seq__45767_45771 = G__45783;
chunk__45768_45772 = G__45784;
count__45769_45773 = G__45785;
i__45770_45774 = G__45786;
continue;
} else {
var ns_45787 = cljs.core.first.call(null,seq__45767_45781__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_45787);


var G__45788 = cljs.core.next.call(null,seq__45767_45781__$1);
var G__45789 = null;
var G__45790 = (0);
var G__45791 = (0);
seq__45767_45771 = G__45788;
chunk__45768_45772 = G__45789;
count__45769_45773 = G__45790;
i__45770_45774 = G__45791;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3936__auto__ = goog.require__;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__45792__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__45792 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__45793__i = 0, G__45793__a = new Array(arguments.length -  0);
while (G__45793__i < G__45793__a.length) {G__45793__a[G__45793__i] = arguments[G__45793__i + 0]; ++G__45793__i;}
  args = new cljs.core.IndexedSeq(G__45793__a,0,null);
} 
return G__45792__delegate.call(this,args);};
G__45792.cljs$lang$maxFixedArity = 0;
G__45792.cljs$lang$applyTo = (function (arglist__45794){
var args = cljs.core.seq(arglist__45794);
return G__45792__delegate(args);
});
G__45792.cljs$core$IFn$_invoke$arity$variadic = G__45792__delegate;
return G__45792;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__45795_SHARP_,p2__45796_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45795_SHARP_)].join('')),p2__45796_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__45797_SHARP_,p2__45798_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__45797_SHARP_)].join(''),p2__45798_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__45799 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__45799.addCallback(((function (G__45799){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__45799))
);

G__45799.addErrback(((function (G__45799){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__45799))
);

return G__45799;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e45800){if((e45800 instanceof Error)){
var e = e45800;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45800;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e45801){if((e45801 instanceof Error)){
var e = e45801;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e45801;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__45802 = cljs.core._EQ_;
var expr__45803 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__45802.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__45803))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__45802.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__45803))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__45802.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__45803))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__45802,expr__45803){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__45802,expr__45803))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__45805,callback){
var map__45806 = p__45805;
var map__45806__$1 = ((((!((map__45806 == null)))?(((((map__45806.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45806.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45806):map__45806);
var file_msg = map__45806__$1;
var request_url = cljs.core.get.call(null,map__45806__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3936__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__45806,map__45806__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__45806,map__45806__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__){
return (function (state_45844){
var state_val_45845 = (state_45844[(1)]);
if((state_val_45845 === (7))){
var inst_45840 = (state_45844[(2)]);
var state_45844__$1 = state_45844;
var statearr_45846_45872 = state_45844__$1;
(statearr_45846_45872[(2)] = inst_45840);

(statearr_45846_45872[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (1))){
var state_45844__$1 = state_45844;
var statearr_45847_45873 = state_45844__$1;
(statearr_45847_45873[(2)] = null);

(statearr_45847_45873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (4))){
var inst_45810 = (state_45844[(7)]);
var inst_45810__$1 = (state_45844[(2)]);
var state_45844__$1 = (function (){var statearr_45848 = state_45844;
(statearr_45848[(7)] = inst_45810__$1);

return statearr_45848;
})();
if(cljs.core.truth_(inst_45810__$1)){
var statearr_45849_45874 = state_45844__$1;
(statearr_45849_45874[(1)] = (5));

} else {
var statearr_45850_45875 = state_45844__$1;
(statearr_45850_45875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (15))){
var inst_45825 = (state_45844[(8)]);
var inst_45823 = (state_45844[(9)]);
var inst_45827 = inst_45825.call(null,inst_45823);
var state_45844__$1 = state_45844;
var statearr_45851_45876 = state_45844__$1;
(statearr_45851_45876[(2)] = inst_45827);

(statearr_45851_45876[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (13))){
var inst_45834 = (state_45844[(2)]);
var state_45844__$1 = state_45844;
var statearr_45852_45877 = state_45844__$1;
(statearr_45852_45877[(2)] = inst_45834);

(statearr_45852_45877[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (6))){
var state_45844__$1 = state_45844;
var statearr_45853_45878 = state_45844__$1;
(statearr_45853_45878[(2)] = null);

(statearr_45853_45878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (17))){
var inst_45831 = (state_45844[(2)]);
var state_45844__$1 = state_45844;
var statearr_45854_45879 = state_45844__$1;
(statearr_45854_45879[(2)] = inst_45831);

(statearr_45854_45879[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (3))){
var inst_45842 = (state_45844[(2)]);
var state_45844__$1 = state_45844;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45844__$1,inst_45842);
} else {
if((state_val_45845 === (12))){
var state_45844__$1 = state_45844;
var statearr_45855_45880 = state_45844__$1;
(statearr_45855_45880[(2)] = null);

(statearr_45855_45880[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (2))){
var state_45844__$1 = state_45844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45844__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_45845 === (11))){
var inst_45815 = (state_45844[(10)]);
var inst_45821 = figwheel.client.file_reloading.blocking_load.call(null,inst_45815);
var state_45844__$1 = state_45844;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45844__$1,(14),inst_45821);
} else {
if((state_val_45845 === (9))){
var inst_45815 = (state_45844[(10)]);
var state_45844__$1 = state_45844;
if(cljs.core.truth_(inst_45815)){
var statearr_45856_45881 = state_45844__$1;
(statearr_45856_45881[(1)] = (11));

} else {
var statearr_45857_45882 = state_45844__$1;
(statearr_45857_45882[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (5))){
var inst_45810 = (state_45844[(7)]);
var inst_45816 = (state_45844[(11)]);
var inst_45815 = cljs.core.nth.call(null,inst_45810,(0),null);
var inst_45816__$1 = cljs.core.nth.call(null,inst_45810,(1),null);
var state_45844__$1 = (function (){var statearr_45858 = state_45844;
(statearr_45858[(10)] = inst_45815);

(statearr_45858[(11)] = inst_45816__$1);

return statearr_45858;
})();
if(cljs.core.truth_(inst_45816__$1)){
var statearr_45859_45883 = state_45844__$1;
(statearr_45859_45883[(1)] = (8));

} else {
var statearr_45860_45884 = state_45844__$1;
(statearr_45860_45884[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (14))){
var inst_45825 = (state_45844[(8)]);
var inst_45815 = (state_45844[(10)]);
var inst_45823 = (state_45844[(2)]);
var inst_45824 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_45825__$1 = cljs.core.get.call(null,inst_45824,inst_45815);
var state_45844__$1 = (function (){var statearr_45861 = state_45844;
(statearr_45861[(8)] = inst_45825__$1);

(statearr_45861[(9)] = inst_45823);

return statearr_45861;
})();
if(cljs.core.truth_(inst_45825__$1)){
var statearr_45862_45885 = state_45844__$1;
(statearr_45862_45885[(1)] = (15));

} else {
var statearr_45863_45886 = state_45844__$1;
(statearr_45863_45886[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (16))){
var inst_45823 = (state_45844[(9)]);
var inst_45829 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_45823);
var state_45844__$1 = state_45844;
var statearr_45864_45887 = state_45844__$1;
(statearr_45864_45887[(2)] = inst_45829);

(statearr_45864_45887[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (10))){
var inst_45836 = (state_45844[(2)]);
var state_45844__$1 = (function (){var statearr_45865 = state_45844;
(statearr_45865[(12)] = inst_45836);

return statearr_45865;
})();
var statearr_45866_45888 = state_45844__$1;
(statearr_45866_45888[(2)] = null);

(statearr_45866_45888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45845 === (8))){
var inst_45816 = (state_45844[(11)]);
var inst_45818 = eval(inst_45816);
var state_45844__$1 = state_45844;
var statearr_45867_45889 = state_45844__$1;
(statearr_45867_45889[(2)] = inst_45818);

(statearr_45867_45889[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
}
});})(c__43631__auto__))
;
return ((function (switch__43541__auto__,c__43631__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__43542__auto__ = null;
var figwheel$client$file_reloading$state_machine__43542__auto____0 = (function (){
var statearr_45868 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45868[(0)] = figwheel$client$file_reloading$state_machine__43542__auto__);

(statearr_45868[(1)] = (1));

return statearr_45868;
});
var figwheel$client$file_reloading$state_machine__43542__auto____1 = (function (state_45844){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_45844);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e45869){if((e45869 instanceof Object)){
var ex__43545__auto__ = e45869;
var statearr_45870_45890 = state_45844;
(statearr_45870_45890[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45844);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45891 = state_45844;
state_45844 = G__45891;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__43542__auto__ = function(state_45844){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__43542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__43542__auto____1.call(this,state_45844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__43542__auto____0;
figwheel$client$file_reloading$state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__43542__auto____1;
return figwheel$client$file_reloading$state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__))
})();
var state__43633__auto__ = (function (){var statearr_45871 = f__43632__auto__.call(null);
(statearr_45871[(6)] = c__43631__auto__);

return statearr_45871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__))
);

return c__43631__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__45893 = arguments.length;
switch (G__45893) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__45895,callback){
var map__45896 = p__45895;
var map__45896__$1 = ((((!((map__45896 == null)))?(((((map__45896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45896):map__45896);
var file_msg = map__45896__$1;
var namespace = cljs.core.get.call(null,map__45896__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__45896,map__45896__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__45896,map__45896__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__45898){
var map__45899 = p__45898;
var map__45899__$1 = ((((!((map__45899 == null)))?(((((map__45899.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45899.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45899):map__45899);
var file_msg = map__45899__$1;
var namespace = cljs.core.get.call(null,map__45899__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__45901){
var map__45902 = p__45901;
var map__45902__$1 = ((((!((map__45902 == null)))?(((((map__45902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45902.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45902):map__45902);
var file_msg = map__45902__$1;
var namespace = cljs.core.get.call(null,map__45902__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3925__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3925__auto__){
var or__3936__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var or__3936__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3936__auto____$1)){
return or__3936__auto____$1;
} else {
var or__3936__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3936__auto____$2)){
return or__3936__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3925__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__45904,callback){
var map__45905 = p__45904;
var map__45905__$1 = ((((!((map__45905 == null)))?(((((map__45905.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45905.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45905):map__45905);
var file_msg = map__45905__$1;
var request_url = cljs.core.get.call(null,map__45905__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__45905__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__43631__auto___45955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto___45955,out){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto___45955,out){
return (function (state_45940){
var state_val_45941 = (state_45940[(1)]);
if((state_val_45941 === (1))){
var inst_45914 = cljs.core.seq.call(null,files);
var inst_45915 = cljs.core.first.call(null,inst_45914);
var inst_45916 = cljs.core.next.call(null,inst_45914);
var inst_45917 = files;
var state_45940__$1 = (function (){var statearr_45942 = state_45940;
(statearr_45942[(7)] = inst_45915);

(statearr_45942[(8)] = inst_45917);

(statearr_45942[(9)] = inst_45916);

return statearr_45942;
})();
var statearr_45943_45956 = state_45940__$1;
(statearr_45943_45956[(2)] = null);

(statearr_45943_45956[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45941 === (2))){
var inst_45917 = (state_45940[(8)]);
var inst_45923 = (state_45940[(10)]);
var inst_45922 = cljs.core.seq.call(null,inst_45917);
var inst_45923__$1 = cljs.core.first.call(null,inst_45922);
var inst_45924 = cljs.core.next.call(null,inst_45922);
var inst_45925 = (inst_45923__$1 == null);
var inst_45926 = cljs.core.not.call(null,inst_45925);
var state_45940__$1 = (function (){var statearr_45944 = state_45940;
(statearr_45944[(11)] = inst_45924);

(statearr_45944[(10)] = inst_45923__$1);

return statearr_45944;
})();
if(inst_45926){
var statearr_45945_45957 = state_45940__$1;
(statearr_45945_45957[(1)] = (4));

} else {
var statearr_45946_45958 = state_45940__$1;
(statearr_45946_45958[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45941 === (3))){
var inst_45938 = (state_45940[(2)]);
var state_45940__$1 = state_45940;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45940__$1,inst_45938);
} else {
if((state_val_45941 === (4))){
var inst_45923 = (state_45940[(10)]);
var inst_45928 = figwheel.client.file_reloading.reload_js_file.call(null,inst_45923);
var state_45940__$1 = state_45940;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45940__$1,(7),inst_45928);
} else {
if((state_val_45941 === (5))){
var inst_45934 = cljs.core.async.close_BANG_.call(null,out);
var state_45940__$1 = state_45940;
var statearr_45947_45959 = state_45940__$1;
(statearr_45947_45959[(2)] = inst_45934);

(statearr_45947_45959[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45941 === (6))){
var inst_45936 = (state_45940[(2)]);
var state_45940__$1 = state_45940;
var statearr_45948_45960 = state_45940__$1;
(statearr_45948_45960[(2)] = inst_45936);

(statearr_45948_45960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_45941 === (7))){
var inst_45924 = (state_45940[(11)]);
var inst_45930 = (state_45940[(2)]);
var inst_45931 = cljs.core.async.put_BANG_.call(null,out,inst_45930);
var inst_45917 = inst_45924;
var state_45940__$1 = (function (){var statearr_45949 = state_45940;
(statearr_45949[(12)] = inst_45931);

(statearr_45949[(8)] = inst_45917);

return statearr_45949;
})();
var statearr_45950_45961 = state_45940__$1;
(statearr_45950_45961[(2)] = null);

(statearr_45950_45961[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__43631__auto___45955,out))
;
return ((function (switch__43541__auto__,c__43631__auto___45955,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto____0 = (function (){
var statearr_45951 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_45951[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto__);

(statearr_45951[(1)] = (1));

return statearr_45951;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto____1 = (function (state_45940){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_45940);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e45952){if((e45952 instanceof Object)){
var ex__43545__auto__ = e45952;
var statearr_45953_45962 = state_45940;
(statearr_45953_45962[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45940);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45963 = state_45940;
state_45940 = G__45963;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto__ = function(state_45940){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto____1.call(this,state_45940);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto___45955,out))
})();
var state__43633__auto__ = (function (){var statearr_45954 = f__43632__auto__.call(null);
(statearr_45954[(6)] = c__43631__auto___45955);

return statearr_45954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto___45955,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__45964,opts){
var map__45965 = p__45964;
var map__45965__$1 = ((((!((map__45965 == null)))?(((((map__45965.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45965.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45965):map__45965);
var eval_body = cljs.core.get.call(null,map__45965__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__45965__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3925__auto__ = eval_body;
if(cljs.core.truth_(and__3925__auto__)){
return typeof eval_body === 'string';
} else {
return and__3925__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e45967){var e = e45967;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__45968_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45968_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__45969){
var vec__45970 = p__45969;
var k = cljs.core.nth.call(null,vec__45970,(0),null);
var v = cljs.core.nth.call(null,vec__45970,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__45973){
var vec__45974 = p__45973;
var k = cljs.core.nth.call(null,vec__45974,(0),null);
var v = cljs.core.nth.call(null,vec__45974,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__45980,p__45981){
var map__45982 = p__45980;
var map__45982__$1 = ((((!((map__45982 == null)))?(((((map__45982.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45982.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45982):map__45982);
var opts = map__45982__$1;
var before_jsload = cljs.core.get.call(null,map__45982__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__45982__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__45982__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__45983 = p__45981;
var map__45983__$1 = ((((!((map__45983 == null)))?(((((map__45983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__45983):map__45983);
var msg = map__45983__$1;
var files = cljs.core.get.call(null,map__45983__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__45983__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__45983__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__43631__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__43632__auto__ = (function (){var switch__43541__auto__ = ((function (c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_46137){
var state_val_46138 = (state_46137[(1)]);
if((state_val_46138 === (7))){
var inst_45997 = (state_46137[(7)]);
var inst_46000 = (state_46137[(8)]);
var inst_45998 = (state_46137[(9)]);
var inst_45999 = (state_46137[(10)]);
var inst_46005 = cljs.core._nth.call(null,inst_45998,inst_46000);
var inst_46006 = figwheel.client.file_reloading.eval_body.call(null,inst_46005,opts);
var inst_46007 = (inst_46000 + (1));
var tmp46139 = inst_45997;
var tmp46140 = inst_45998;
var tmp46141 = inst_45999;
var inst_45997__$1 = tmp46139;
var inst_45998__$1 = tmp46140;
var inst_45999__$1 = tmp46141;
var inst_46000__$1 = inst_46007;
var state_46137__$1 = (function (){var statearr_46142 = state_46137;
(statearr_46142[(7)] = inst_45997__$1);

(statearr_46142[(11)] = inst_46006);

(statearr_46142[(8)] = inst_46000__$1);

(statearr_46142[(9)] = inst_45998__$1);

(statearr_46142[(10)] = inst_45999__$1);

return statearr_46142;
})();
var statearr_46143_46226 = state_46137__$1;
(statearr_46143_46226[(2)] = null);

(statearr_46143_46226[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (20))){
var inst_46040 = (state_46137[(12)]);
var inst_46048 = figwheel.client.file_reloading.sort_files.call(null,inst_46040);
var state_46137__$1 = state_46137;
var statearr_46144_46227 = state_46137__$1;
(statearr_46144_46227[(2)] = inst_46048);

(statearr_46144_46227[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (27))){
var state_46137__$1 = state_46137;
var statearr_46145_46228 = state_46137__$1;
(statearr_46145_46228[(2)] = null);

(statearr_46145_46228[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (1))){
var inst_45989 = (state_46137[(13)]);
var inst_45986 = before_jsload.call(null,files);
var inst_45987 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_45988 = (function (){return ((function (inst_45989,inst_45986,inst_45987,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45977_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45977_SHARP_);
});
;})(inst_45989,inst_45986,inst_45987,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_45989__$1 = cljs.core.filter.call(null,inst_45988,files);
var inst_45990 = cljs.core.not_empty.call(null,inst_45989__$1);
var state_46137__$1 = (function (){var statearr_46146 = state_46137;
(statearr_46146[(14)] = inst_45986);

(statearr_46146[(15)] = inst_45987);

(statearr_46146[(13)] = inst_45989__$1);

return statearr_46146;
})();
if(cljs.core.truth_(inst_45990)){
var statearr_46147_46229 = state_46137__$1;
(statearr_46147_46229[(1)] = (2));

} else {
var statearr_46148_46230 = state_46137__$1;
(statearr_46148_46230[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (24))){
var state_46137__$1 = state_46137;
var statearr_46149_46231 = state_46137__$1;
(statearr_46149_46231[(2)] = null);

(statearr_46149_46231[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (39))){
var inst_46090 = (state_46137[(16)]);
var state_46137__$1 = state_46137;
var statearr_46150_46232 = state_46137__$1;
(statearr_46150_46232[(2)] = inst_46090);

(statearr_46150_46232[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (46))){
var inst_46132 = (state_46137[(2)]);
var state_46137__$1 = state_46137;
var statearr_46151_46233 = state_46137__$1;
(statearr_46151_46233[(2)] = inst_46132);

(statearr_46151_46233[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (4))){
var inst_46034 = (state_46137[(2)]);
var inst_46035 = cljs.core.List.EMPTY;
var inst_46036 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_46035);
var inst_46037 = (function (){return ((function (inst_46034,inst_46035,inst_46036,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45978_SHARP_){
var and__3925__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__45978_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__45978_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__45978_SHARP_))));
} else {
return and__3925__auto__;
}
});
;})(inst_46034,inst_46035,inst_46036,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46038 = cljs.core.filter.call(null,inst_46037,files);
var inst_46039 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_46040 = cljs.core.concat.call(null,inst_46038,inst_46039);
var state_46137__$1 = (function (){var statearr_46152 = state_46137;
(statearr_46152[(12)] = inst_46040);

(statearr_46152[(17)] = inst_46036);

(statearr_46152[(18)] = inst_46034);

return statearr_46152;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_46153_46234 = state_46137__$1;
(statearr_46153_46234[(1)] = (16));

} else {
var statearr_46154_46235 = state_46137__$1;
(statearr_46154_46235[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (15))){
var inst_46024 = (state_46137[(2)]);
var state_46137__$1 = state_46137;
var statearr_46155_46236 = state_46137__$1;
(statearr_46155_46236[(2)] = inst_46024);

(statearr_46155_46236[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (21))){
var inst_46050 = (state_46137[(19)]);
var inst_46050__$1 = (state_46137[(2)]);
var inst_46051 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_46050__$1);
var state_46137__$1 = (function (){var statearr_46156 = state_46137;
(statearr_46156[(19)] = inst_46050__$1);

return statearr_46156;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_46137__$1,(22),inst_46051);
} else {
if((state_val_46138 === (31))){
var inst_46135 = (state_46137[(2)]);
var state_46137__$1 = state_46137;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_46137__$1,inst_46135);
} else {
if((state_val_46138 === (32))){
var inst_46090 = (state_46137[(16)]);
var inst_46095 = inst_46090.cljs$lang$protocol_mask$partition0$;
var inst_46096 = (inst_46095 & (64));
var inst_46097 = inst_46090.cljs$core$ISeq$;
var inst_46098 = (cljs.core.PROTOCOL_SENTINEL === inst_46097);
var inst_46099 = ((inst_46096) || (inst_46098));
var state_46137__$1 = state_46137;
if(cljs.core.truth_(inst_46099)){
var statearr_46157_46237 = state_46137__$1;
(statearr_46157_46237[(1)] = (35));

} else {
var statearr_46158_46238 = state_46137__$1;
(statearr_46158_46238[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (40))){
var inst_46112 = (state_46137[(20)]);
var inst_46111 = (state_46137[(2)]);
var inst_46112__$1 = cljs.core.get.call(null,inst_46111,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_46113 = cljs.core.get.call(null,inst_46111,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_46114 = cljs.core.not_empty.call(null,inst_46112__$1);
var state_46137__$1 = (function (){var statearr_46159 = state_46137;
(statearr_46159[(21)] = inst_46113);

(statearr_46159[(20)] = inst_46112__$1);

return statearr_46159;
})();
if(cljs.core.truth_(inst_46114)){
var statearr_46160_46239 = state_46137__$1;
(statearr_46160_46239[(1)] = (41));

} else {
var statearr_46161_46240 = state_46137__$1;
(statearr_46161_46240[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (33))){
var state_46137__$1 = state_46137;
var statearr_46162_46241 = state_46137__$1;
(statearr_46162_46241[(2)] = false);

(statearr_46162_46241[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (13))){
var inst_46010 = (state_46137[(22)]);
var inst_46014 = cljs.core.chunk_first.call(null,inst_46010);
var inst_46015 = cljs.core.chunk_rest.call(null,inst_46010);
var inst_46016 = cljs.core.count.call(null,inst_46014);
var inst_45997 = inst_46015;
var inst_45998 = inst_46014;
var inst_45999 = inst_46016;
var inst_46000 = (0);
var state_46137__$1 = (function (){var statearr_46163 = state_46137;
(statearr_46163[(7)] = inst_45997);

(statearr_46163[(8)] = inst_46000);

(statearr_46163[(9)] = inst_45998);

(statearr_46163[(10)] = inst_45999);

return statearr_46163;
})();
var statearr_46164_46242 = state_46137__$1;
(statearr_46164_46242[(2)] = null);

(statearr_46164_46242[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (22))){
var inst_46054 = (state_46137[(23)]);
var inst_46058 = (state_46137[(24)]);
var inst_46053 = (state_46137[(25)]);
var inst_46050 = (state_46137[(19)]);
var inst_46053__$1 = (state_46137[(2)]);
var inst_46054__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46053__$1);
var inst_46055 = (function (){var all_files = inst_46050;
var res_SINGLEQUOTE_ = inst_46053__$1;
var res = inst_46054__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_46054,inst_46058,inst_46053,inst_46050,inst_46053__$1,inst_46054__$1,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__45979_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__45979_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_46054,inst_46058,inst_46053,inst_46050,inst_46053__$1,inst_46054__$1,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46056 = cljs.core.filter.call(null,inst_46055,inst_46053__$1);
var inst_46057 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_46058__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_46057);
var inst_46059 = cljs.core.not_empty.call(null,inst_46058__$1);
var state_46137__$1 = (function (){var statearr_46165 = state_46137;
(statearr_46165[(23)] = inst_46054__$1);

(statearr_46165[(24)] = inst_46058__$1);

(statearr_46165[(25)] = inst_46053__$1);

(statearr_46165[(26)] = inst_46056);

return statearr_46165;
})();
if(cljs.core.truth_(inst_46059)){
var statearr_46166_46243 = state_46137__$1;
(statearr_46166_46243[(1)] = (23));

} else {
var statearr_46167_46244 = state_46137__$1;
(statearr_46167_46244[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (36))){
var state_46137__$1 = state_46137;
var statearr_46168_46245 = state_46137__$1;
(statearr_46168_46245[(2)] = false);

(statearr_46168_46245[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (41))){
var inst_46112 = (state_46137[(20)]);
var inst_46116 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_46117 = cljs.core.map.call(null,inst_46116,inst_46112);
var inst_46118 = cljs.core.pr_str.call(null,inst_46117);
var inst_46119 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46118)].join('');
var inst_46120 = figwheel.client.utils.log.call(null,inst_46119);
var state_46137__$1 = state_46137;
var statearr_46169_46246 = state_46137__$1;
(statearr_46169_46246[(2)] = inst_46120);

(statearr_46169_46246[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (43))){
var inst_46113 = (state_46137[(21)]);
var inst_46123 = (state_46137[(2)]);
var inst_46124 = cljs.core.not_empty.call(null,inst_46113);
var state_46137__$1 = (function (){var statearr_46170 = state_46137;
(statearr_46170[(27)] = inst_46123);

return statearr_46170;
})();
if(cljs.core.truth_(inst_46124)){
var statearr_46171_46247 = state_46137__$1;
(statearr_46171_46247[(1)] = (44));

} else {
var statearr_46172_46248 = state_46137__$1;
(statearr_46172_46248[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (29))){
var inst_46054 = (state_46137[(23)]);
var inst_46090 = (state_46137[(16)]);
var inst_46058 = (state_46137[(24)]);
var inst_46053 = (state_46137[(25)]);
var inst_46056 = (state_46137[(26)]);
var inst_46050 = (state_46137[(19)]);
var inst_46086 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_46089 = (function (){var all_files = inst_46050;
var res_SINGLEQUOTE_ = inst_46053;
var res = inst_46054;
var files_not_loaded = inst_46056;
var dependencies_that_loaded = inst_46058;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46054,inst_46090,inst_46058,inst_46053,inst_46056,inst_46050,inst_46086,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46088){
var map__46173 = p__46088;
var map__46173__$1 = ((((!((map__46173 == null)))?(((((map__46173.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46173.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46173):map__46173);
var namespace = cljs.core.get.call(null,map__46173__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46054,inst_46090,inst_46058,inst_46053,inst_46056,inst_46050,inst_46086,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46090__$1 = cljs.core.group_by.call(null,inst_46089,inst_46056);
var inst_46092 = (inst_46090__$1 == null);
var inst_46093 = cljs.core.not.call(null,inst_46092);
var state_46137__$1 = (function (){var statearr_46175 = state_46137;
(statearr_46175[(28)] = inst_46086);

(statearr_46175[(16)] = inst_46090__$1);

return statearr_46175;
})();
if(inst_46093){
var statearr_46176_46249 = state_46137__$1;
(statearr_46176_46249[(1)] = (32));

} else {
var statearr_46177_46250 = state_46137__$1;
(statearr_46177_46250[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (44))){
var inst_46113 = (state_46137[(21)]);
var inst_46126 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_46113);
var inst_46127 = cljs.core.pr_str.call(null,inst_46126);
var inst_46128 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_46127)].join('');
var inst_46129 = figwheel.client.utils.log.call(null,inst_46128);
var state_46137__$1 = state_46137;
var statearr_46178_46251 = state_46137__$1;
(statearr_46178_46251[(2)] = inst_46129);

(statearr_46178_46251[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (6))){
var inst_46031 = (state_46137[(2)]);
var state_46137__$1 = state_46137;
var statearr_46179_46252 = state_46137__$1;
(statearr_46179_46252[(2)] = inst_46031);

(statearr_46179_46252[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (28))){
var inst_46056 = (state_46137[(26)]);
var inst_46083 = (state_46137[(2)]);
var inst_46084 = cljs.core.not_empty.call(null,inst_46056);
var state_46137__$1 = (function (){var statearr_46180 = state_46137;
(statearr_46180[(29)] = inst_46083);

return statearr_46180;
})();
if(cljs.core.truth_(inst_46084)){
var statearr_46181_46253 = state_46137__$1;
(statearr_46181_46253[(1)] = (29));

} else {
var statearr_46182_46254 = state_46137__$1;
(statearr_46182_46254[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (25))){
var inst_46054 = (state_46137[(23)]);
var inst_46070 = (state_46137[(2)]);
var inst_46071 = cljs.core.not_empty.call(null,inst_46054);
var state_46137__$1 = (function (){var statearr_46183 = state_46137;
(statearr_46183[(30)] = inst_46070);

return statearr_46183;
})();
if(cljs.core.truth_(inst_46071)){
var statearr_46184_46255 = state_46137__$1;
(statearr_46184_46255[(1)] = (26));

} else {
var statearr_46185_46256 = state_46137__$1;
(statearr_46185_46256[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (34))){
var inst_46106 = (state_46137[(2)]);
var state_46137__$1 = state_46137;
if(cljs.core.truth_(inst_46106)){
var statearr_46186_46257 = state_46137__$1;
(statearr_46186_46257[(1)] = (38));

} else {
var statearr_46187_46258 = state_46137__$1;
(statearr_46187_46258[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (17))){
var state_46137__$1 = state_46137;
var statearr_46188_46259 = state_46137__$1;
(statearr_46188_46259[(2)] = recompile_dependents);

(statearr_46188_46259[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (3))){
var state_46137__$1 = state_46137;
var statearr_46189_46260 = state_46137__$1;
(statearr_46189_46260[(2)] = null);

(statearr_46189_46260[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (12))){
var inst_46027 = (state_46137[(2)]);
var state_46137__$1 = state_46137;
var statearr_46190_46261 = state_46137__$1;
(statearr_46190_46261[(2)] = inst_46027);

(statearr_46190_46261[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (2))){
var inst_45989 = (state_46137[(13)]);
var inst_45996 = cljs.core.seq.call(null,inst_45989);
var inst_45997 = inst_45996;
var inst_45998 = null;
var inst_45999 = (0);
var inst_46000 = (0);
var state_46137__$1 = (function (){var statearr_46191 = state_46137;
(statearr_46191[(7)] = inst_45997);

(statearr_46191[(8)] = inst_46000);

(statearr_46191[(9)] = inst_45998);

(statearr_46191[(10)] = inst_45999);

return statearr_46191;
})();
var statearr_46192_46262 = state_46137__$1;
(statearr_46192_46262[(2)] = null);

(statearr_46192_46262[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (23))){
var inst_46054 = (state_46137[(23)]);
var inst_46058 = (state_46137[(24)]);
var inst_46053 = (state_46137[(25)]);
var inst_46056 = (state_46137[(26)]);
var inst_46050 = (state_46137[(19)]);
var inst_46061 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_46063 = (function (){var all_files = inst_46050;
var res_SINGLEQUOTE_ = inst_46053;
var res = inst_46054;
var files_not_loaded = inst_46056;
var dependencies_that_loaded = inst_46058;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46054,inst_46058,inst_46053,inst_46056,inst_46050,inst_46061,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46062){
var map__46193 = p__46062;
var map__46193__$1 = ((((!((map__46193 == null)))?(((((map__46193.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46193.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46193):map__46193);
var request_url = cljs.core.get.call(null,map__46193__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46054,inst_46058,inst_46053,inst_46056,inst_46050,inst_46061,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46064 = cljs.core.reverse.call(null,inst_46058);
var inst_46065 = cljs.core.map.call(null,inst_46063,inst_46064);
var inst_46066 = cljs.core.pr_str.call(null,inst_46065);
var inst_46067 = figwheel.client.utils.log.call(null,inst_46066);
var state_46137__$1 = (function (){var statearr_46195 = state_46137;
(statearr_46195[(31)] = inst_46061);

return statearr_46195;
})();
var statearr_46196_46263 = state_46137__$1;
(statearr_46196_46263[(2)] = inst_46067);

(statearr_46196_46263[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (35))){
var state_46137__$1 = state_46137;
var statearr_46197_46264 = state_46137__$1;
(statearr_46197_46264[(2)] = true);

(statearr_46197_46264[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (19))){
var inst_46040 = (state_46137[(12)]);
var inst_46046 = figwheel.client.file_reloading.expand_files.call(null,inst_46040);
var state_46137__$1 = state_46137;
var statearr_46198_46265 = state_46137__$1;
(statearr_46198_46265[(2)] = inst_46046);

(statearr_46198_46265[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (11))){
var state_46137__$1 = state_46137;
var statearr_46199_46266 = state_46137__$1;
(statearr_46199_46266[(2)] = null);

(statearr_46199_46266[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (9))){
var inst_46029 = (state_46137[(2)]);
var state_46137__$1 = state_46137;
var statearr_46200_46267 = state_46137__$1;
(statearr_46200_46267[(2)] = inst_46029);

(statearr_46200_46267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (5))){
var inst_46000 = (state_46137[(8)]);
var inst_45999 = (state_46137[(10)]);
var inst_46002 = (inst_46000 < inst_45999);
var inst_46003 = inst_46002;
var state_46137__$1 = state_46137;
if(cljs.core.truth_(inst_46003)){
var statearr_46201_46268 = state_46137__$1;
(statearr_46201_46268[(1)] = (7));

} else {
var statearr_46202_46269 = state_46137__$1;
(statearr_46202_46269[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (14))){
var inst_46010 = (state_46137[(22)]);
var inst_46019 = cljs.core.first.call(null,inst_46010);
var inst_46020 = figwheel.client.file_reloading.eval_body.call(null,inst_46019,opts);
var inst_46021 = cljs.core.next.call(null,inst_46010);
var inst_45997 = inst_46021;
var inst_45998 = null;
var inst_45999 = (0);
var inst_46000 = (0);
var state_46137__$1 = (function (){var statearr_46203 = state_46137;
(statearr_46203[(7)] = inst_45997);

(statearr_46203[(32)] = inst_46020);

(statearr_46203[(8)] = inst_46000);

(statearr_46203[(9)] = inst_45998);

(statearr_46203[(10)] = inst_45999);

return statearr_46203;
})();
var statearr_46204_46270 = state_46137__$1;
(statearr_46204_46270[(2)] = null);

(statearr_46204_46270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (45))){
var state_46137__$1 = state_46137;
var statearr_46205_46271 = state_46137__$1;
(statearr_46205_46271[(2)] = null);

(statearr_46205_46271[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (26))){
var inst_46054 = (state_46137[(23)]);
var inst_46058 = (state_46137[(24)]);
var inst_46053 = (state_46137[(25)]);
var inst_46056 = (state_46137[(26)]);
var inst_46050 = (state_46137[(19)]);
var inst_46073 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_46075 = (function (){var all_files = inst_46050;
var res_SINGLEQUOTE_ = inst_46053;
var res = inst_46054;
var files_not_loaded = inst_46056;
var dependencies_that_loaded = inst_46058;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46054,inst_46058,inst_46053,inst_46056,inst_46050,inst_46073,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__46074){
var map__46206 = p__46074;
var map__46206__$1 = ((((!((map__46206 == null)))?(((((map__46206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46206):map__46206);
var namespace = cljs.core.get.call(null,map__46206__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__46206__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46054,inst_46058,inst_46053,inst_46056,inst_46050,inst_46073,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46076 = cljs.core.map.call(null,inst_46075,inst_46054);
var inst_46077 = cljs.core.pr_str.call(null,inst_46076);
var inst_46078 = figwheel.client.utils.log.call(null,inst_46077);
var inst_46079 = (function (){var all_files = inst_46050;
var res_SINGLEQUOTE_ = inst_46053;
var res = inst_46054;
var files_not_loaded = inst_46056;
var dependencies_that_loaded = inst_46058;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46054,inst_46058,inst_46053,inst_46056,inst_46050,inst_46073,inst_46075,inst_46076,inst_46077,inst_46078,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_46054,inst_46058,inst_46053,inst_46056,inst_46050,inst_46073,inst_46075,inst_46076,inst_46077,inst_46078,state_val_46138,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_46080 = setTimeout(inst_46079,(10));
var state_46137__$1 = (function (){var statearr_46208 = state_46137;
(statearr_46208[(33)] = inst_46078);

(statearr_46208[(34)] = inst_46073);

return statearr_46208;
})();
var statearr_46209_46272 = state_46137__$1;
(statearr_46209_46272[(2)] = inst_46080);

(statearr_46209_46272[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (16))){
var state_46137__$1 = state_46137;
var statearr_46210_46273 = state_46137__$1;
(statearr_46210_46273[(2)] = reload_dependents);

(statearr_46210_46273[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (38))){
var inst_46090 = (state_46137[(16)]);
var inst_46108 = cljs.core.apply.call(null,cljs.core.hash_map,inst_46090);
var state_46137__$1 = state_46137;
var statearr_46211_46274 = state_46137__$1;
(statearr_46211_46274[(2)] = inst_46108);

(statearr_46211_46274[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (30))){
var state_46137__$1 = state_46137;
var statearr_46212_46275 = state_46137__$1;
(statearr_46212_46275[(2)] = null);

(statearr_46212_46275[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (10))){
var inst_46010 = (state_46137[(22)]);
var inst_46012 = cljs.core.chunked_seq_QMARK_.call(null,inst_46010);
var state_46137__$1 = state_46137;
if(inst_46012){
var statearr_46213_46276 = state_46137__$1;
(statearr_46213_46276[(1)] = (13));

} else {
var statearr_46214_46277 = state_46137__$1;
(statearr_46214_46277[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (18))){
var inst_46044 = (state_46137[(2)]);
var state_46137__$1 = state_46137;
if(cljs.core.truth_(inst_46044)){
var statearr_46215_46278 = state_46137__$1;
(statearr_46215_46278[(1)] = (19));

} else {
var statearr_46216_46279 = state_46137__$1;
(statearr_46216_46279[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (42))){
var state_46137__$1 = state_46137;
var statearr_46217_46280 = state_46137__$1;
(statearr_46217_46280[(2)] = null);

(statearr_46217_46280[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (37))){
var inst_46103 = (state_46137[(2)]);
var state_46137__$1 = state_46137;
var statearr_46218_46281 = state_46137__$1;
(statearr_46218_46281[(2)] = inst_46103);

(statearr_46218_46281[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46138 === (8))){
var inst_45997 = (state_46137[(7)]);
var inst_46010 = (state_46137[(22)]);
var inst_46010__$1 = cljs.core.seq.call(null,inst_45997);
var state_46137__$1 = (function (){var statearr_46219 = state_46137;
(statearr_46219[(22)] = inst_46010__$1);

return statearr_46219;
})();
if(inst_46010__$1){
var statearr_46220_46282 = state_46137__$1;
(statearr_46220_46282[(1)] = (10));

} else {
var statearr_46221_46283 = state_46137__$1;
(statearr_46221_46283[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
}
}
}
}
}
}
});})(c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__43541__auto__,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto____0 = (function (){
var statearr_46222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46222[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto__);

(statearr_46222[(1)] = (1));

return statearr_46222;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto____1 = (function (state_46137){
while(true){
var ret_value__43543__auto__ = (function (){try{while(true){
var result__43544__auto__ = switch__43541__auto__.call(null,state_46137);
if(cljs.core.keyword_identical_QMARK_.call(null,result__43544__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__43544__auto__;
}
break;
}
}catch (e46223){if((e46223 instanceof Object)){
var ex__43545__auto__ = e46223;
var statearr_46224_46284 = state_46137;
(statearr_46224_46284[(5)] = ex__43545__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_46137);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46223;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__43543__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__46285 = state_46137;
state_46137 = G__46285;
continue;
} else {
return ret_value__43543__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto__ = function(state_46137){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto____1.call(this,state_46137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__43542__auto__;
})()
;})(switch__43541__auto__,c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__43633__auto__ = (function (){var statearr_46225 = f__43632__auto__.call(null);
(statearr_46225[(6)] = c__43631__auto__);

return statearr_46225;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__43633__auto__);
});})(c__43631__auto__,map__45982,map__45982__$1,opts,before_jsload,on_jsload,reload_dependents,map__45983,map__45983__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__43631__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__46288,link){
var map__46289 = p__46288;
var map__46289__$1 = ((((!((map__46289 == null)))?(((((map__46289.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46289.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46289):map__46289);
var file = cljs.core.get.call(null,map__46289__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__46289,map__46289__$1,file){
return (function (p1__46286_SHARP_,p2__46287_SHARP_){
if(cljs.core._EQ_.call(null,p1__46286_SHARP_,p2__46287_SHARP_)){
return p1__46286_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__46289,map__46289__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__46292){
var map__46293 = p__46292;
var map__46293__$1 = ((((!((map__46293 == null)))?(((((map__46293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46293):map__46293);
var match_length = cljs.core.get.call(null,map__46293__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__46293__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__46291_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__46291_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__46295_SHARP_,p2__46296_SHARP_){
return cljs.core.assoc.call(null,p1__46295_SHARP_,cljs.core.get.call(null,p2__46296_SHARP_,key),p2__46296_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_46297 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_46297);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_46297);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__46298,p__46299){
var map__46300 = p__46298;
var map__46300__$1 = ((((!((map__46300 == null)))?(((((map__46300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46300):map__46300);
var on_cssload = cljs.core.get.call(null,map__46300__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__46301 = p__46299;
var map__46301__$1 = ((((!((map__46301 == null)))?(((((map__46301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46301.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__46301):map__46301);
var files_msg = map__46301__$1;
var files = cljs.core.get.call(null,map__46301__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1553997027636
