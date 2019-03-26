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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__32771_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__32771_SHARP_));
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
var seq__32772 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__32773 = null;
var count__32774 = (0);
var i__32775 = (0);
while(true){
if((i__32775 < count__32774)){
var n = cljs.core._nth.call(null,chunk__32773,i__32775);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32776 = seq__32772;
var G__32777 = chunk__32773;
var G__32778 = count__32774;
var G__32779 = (i__32775 + (1));
seq__32772 = G__32776;
chunk__32773 = G__32777;
count__32774 = G__32778;
i__32775 = G__32779;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32772);
if(temp__5457__auto__){
var seq__32772__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32772__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__32772__$1);
var G__32780 = cljs.core.chunk_rest.call(null,seq__32772__$1);
var G__32781 = c__4337__auto__;
var G__32782 = cljs.core.count.call(null,c__4337__auto__);
var G__32783 = (0);
seq__32772 = G__32780;
chunk__32773 = G__32781;
count__32774 = G__32782;
i__32775 = G__32783;
continue;
} else {
var n = cljs.core.first.call(null,seq__32772__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__32784 = cljs.core.next.call(null,seq__32772__$1);
var G__32785 = null;
var G__32786 = (0);
var G__32787 = (0);
seq__32772 = G__32784;
chunk__32773 = G__32785;
count__32774 = G__32786;
i__32775 = G__32787;
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
return cljs.core.some.call(null,(function (p__32788){
var vec__32789 = p__32788;
var _ = cljs.core.nth.call(null,vec__32789,(0),null);
var v = cljs.core.nth.call(null,vec__32789,(1),null);
var and__3925__auto__ = v;
if(cljs.core.truth_(and__3925__auto__)){
return v.call(null,dep);
} else {
return and__3925__auto__;
}
}),cljs.core.filter.call(null,(function (p__32792){
var vec__32793 = p__32792;
var k = cljs.core.nth.call(null,vec__32793,(0),null);
var v = cljs.core.nth.call(null,vec__32793,(1),null);
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

var seq__32805_32813 = cljs.core.seq.call(null,deps);
var chunk__32806_32814 = null;
var count__32807_32815 = (0);
var i__32808_32816 = (0);
while(true){
if((i__32808_32816 < count__32807_32815)){
var dep_32817 = cljs.core._nth.call(null,chunk__32806_32814,i__32808_32816);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_32817;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32817));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32817,(depth + (1)),state);
} else {
}


var G__32818 = seq__32805_32813;
var G__32819 = chunk__32806_32814;
var G__32820 = count__32807_32815;
var G__32821 = (i__32808_32816 + (1));
seq__32805_32813 = G__32818;
chunk__32806_32814 = G__32819;
count__32807_32815 = G__32820;
i__32808_32816 = G__32821;
continue;
} else {
var temp__5457__auto___32822 = cljs.core.seq.call(null,seq__32805_32813);
if(temp__5457__auto___32822){
var seq__32805_32823__$1 = temp__5457__auto___32822;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32805_32823__$1)){
var c__4337__auto___32824 = cljs.core.chunk_first.call(null,seq__32805_32823__$1);
var G__32825 = cljs.core.chunk_rest.call(null,seq__32805_32823__$1);
var G__32826 = c__4337__auto___32824;
var G__32827 = cljs.core.count.call(null,c__4337__auto___32824);
var G__32828 = (0);
seq__32805_32813 = G__32825;
chunk__32806_32814 = G__32826;
count__32807_32815 = G__32827;
i__32808_32816 = G__32828;
continue;
} else {
var dep_32829 = cljs.core.first.call(null,seq__32805_32823__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_32829;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_32829));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_32829,(depth + (1)),state);
} else {
}


var G__32830 = cljs.core.next.call(null,seq__32805_32823__$1);
var G__32831 = null;
var G__32832 = (0);
var G__32833 = (0);
seq__32805_32813 = G__32830;
chunk__32806_32814 = G__32831;
count__32807_32815 = G__32832;
i__32808_32816 = G__32833;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__32809){
var vec__32810 = p__32809;
var seq__32811 = cljs.core.seq.call(null,vec__32810);
var first__32812 = cljs.core.first.call(null,seq__32811);
var seq__32811__$1 = cljs.core.next.call(null,seq__32811);
var x = first__32812;
var xs = seq__32811__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__32810,seq__32811,first__32812,seq__32811__$1,x,xs,get_deps__$1){
return (function (p1__32796_SHARP_){
return clojure.set.difference.call(null,p1__32796_SHARP_,x);
});})(vec__32810,seq__32811,first__32812,seq__32811__$1,x,xs,get_deps__$1))
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
var seq__32834 = cljs.core.seq.call(null,provides);
var chunk__32835 = null;
var count__32836 = (0);
var i__32837 = (0);
while(true){
if((i__32837 < count__32836)){
var prov = cljs.core._nth.call(null,chunk__32835,i__32837);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32838_32846 = cljs.core.seq.call(null,requires);
var chunk__32839_32847 = null;
var count__32840_32848 = (0);
var i__32841_32849 = (0);
while(true){
if((i__32841_32849 < count__32840_32848)){
var req_32850 = cljs.core._nth.call(null,chunk__32839_32847,i__32841_32849);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32850,prov);


var G__32851 = seq__32838_32846;
var G__32852 = chunk__32839_32847;
var G__32853 = count__32840_32848;
var G__32854 = (i__32841_32849 + (1));
seq__32838_32846 = G__32851;
chunk__32839_32847 = G__32852;
count__32840_32848 = G__32853;
i__32841_32849 = G__32854;
continue;
} else {
var temp__5457__auto___32855 = cljs.core.seq.call(null,seq__32838_32846);
if(temp__5457__auto___32855){
var seq__32838_32856__$1 = temp__5457__auto___32855;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32838_32856__$1)){
var c__4337__auto___32857 = cljs.core.chunk_first.call(null,seq__32838_32856__$1);
var G__32858 = cljs.core.chunk_rest.call(null,seq__32838_32856__$1);
var G__32859 = c__4337__auto___32857;
var G__32860 = cljs.core.count.call(null,c__4337__auto___32857);
var G__32861 = (0);
seq__32838_32846 = G__32858;
chunk__32839_32847 = G__32859;
count__32840_32848 = G__32860;
i__32841_32849 = G__32861;
continue;
} else {
var req_32862 = cljs.core.first.call(null,seq__32838_32856__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32862,prov);


var G__32863 = cljs.core.next.call(null,seq__32838_32856__$1);
var G__32864 = null;
var G__32865 = (0);
var G__32866 = (0);
seq__32838_32846 = G__32863;
chunk__32839_32847 = G__32864;
count__32840_32848 = G__32865;
i__32841_32849 = G__32866;
continue;
}
} else {
}
}
break;
}


var G__32867 = seq__32834;
var G__32868 = chunk__32835;
var G__32869 = count__32836;
var G__32870 = (i__32837 + (1));
seq__32834 = G__32867;
chunk__32835 = G__32868;
count__32836 = G__32869;
i__32837 = G__32870;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__32834);
if(temp__5457__auto__){
var seq__32834__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32834__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__32834__$1);
var G__32871 = cljs.core.chunk_rest.call(null,seq__32834__$1);
var G__32872 = c__4337__auto__;
var G__32873 = cljs.core.count.call(null,c__4337__auto__);
var G__32874 = (0);
seq__32834 = G__32871;
chunk__32835 = G__32872;
count__32836 = G__32873;
i__32837 = G__32874;
continue;
} else {
var prov = cljs.core.first.call(null,seq__32834__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__32842_32875 = cljs.core.seq.call(null,requires);
var chunk__32843_32876 = null;
var count__32844_32877 = (0);
var i__32845_32878 = (0);
while(true){
if((i__32845_32878 < count__32844_32877)){
var req_32879 = cljs.core._nth.call(null,chunk__32843_32876,i__32845_32878);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32879,prov);


var G__32880 = seq__32842_32875;
var G__32881 = chunk__32843_32876;
var G__32882 = count__32844_32877;
var G__32883 = (i__32845_32878 + (1));
seq__32842_32875 = G__32880;
chunk__32843_32876 = G__32881;
count__32844_32877 = G__32882;
i__32845_32878 = G__32883;
continue;
} else {
var temp__5457__auto___32884__$1 = cljs.core.seq.call(null,seq__32842_32875);
if(temp__5457__auto___32884__$1){
var seq__32842_32885__$1 = temp__5457__auto___32884__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32842_32885__$1)){
var c__4337__auto___32886 = cljs.core.chunk_first.call(null,seq__32842_32885__$1);
var G__32887 = cljs.core.chunk_rest.call(null,seq__32842_32885__$1);
var G__32888 = c__4337__auto___32886;
var G__32889 = cljs.core.count.call(null,c__4337__auto___32886);
var G__32890 = (0);
seq__32842_32875 = G__32887;
chunk__32843_32876 = G__32888;
count__32844_32877 = G__32889;
i__32845_32878 = G__32890;
continue;
} else {
var req_32891 = cljs.core.first.call(null,seq__32842_32885__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_32891,prov);


var G__32892 = cljs.core.next.call(null,seq__32842_32885__$1);
var G__32893 = null;
var G__32894 = (0);
var G__32895 = (0);
seq__32842_32875 = G__32892;
chunk__32843_32876 = G__32893;
count__32844_32877 = G__32894;
i__32845_32878 = G__32895;
continue;
}
} else {
}
}
break;
}


var G__32896 = cljs.core.next.call(null,seq__32834__$1);
var G__32897 = null;
var G__32898 = (0);
var G__32899 = (0);
seq__32834 = G__32896;
chunk__32835 = G__32897;
count__32836 = G__32898;
i__32837 = G__32899;
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
var seq__32900_32904 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__32901_32905 = null;
var count__32902_32906 = (0);
var i__32903_32907 = (0);
while(true){
if((i__32903_32907 < count__32902_32906)){
var ns_32908 = cljs.core._nth.call(null,chunk__32901_32905,i__32903_32907);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32908);


var G__32909 = seq__32900_32904;
var G__32910 = chunk__32901_32905;
var G__32911 = count__32902_32906;
var G__32912 = (i__32903_32907 + (1));
seq__32900_32904 = G__32909;
chunk__32901_32905 = G__32910;
count__32902_32906 = G__32911;
i__32903_32907 = G__32912;
continue;
} else {
var temp__5457__auto___32913 = cljs.core.seq.call(null,seq__32900_32904);
if(temp__5457__auto___32913){
var seq__32900_32914__$1 = temp__5457__auto___32913;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32900_32914__$1)){
var c__4337__auto___32915 = cljs.core.chunk_first.call(null,seq__32900_32914__$1);
var G__32916 = cljs.core.chunk_rest.call(null,seq__32900_32914__$1);
var G__32917 = c__4337__auto___32915;
var G__32918 = cljs.core.count.call(null,c__4337__auto___32915);
var G__32919 = (0);
seq__32900_32904 = G__32916;
chunk__32901_32905 = G__32917;
count__32902_32906 = G__32918;
i__32903_32907 = G__32919;
continue;
} else {
var ns_32920 = cljs.core.first.call(null,seq__32900_32914__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_32920);


var G__32921 = cljs.core.next.call(null,seq__32900_32914__$1);
var G__32922 = null;
var G__32923 = (0);
var G__32924 = (0);
seq__32900_32904 = G__32921;
chunk__32901_32905 = G__32922;
count__32902_32906 = G__32923;
i__32903_32907 = G__32924;
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
var G__32925__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__32925 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32926__i = 0, G__32926__a = new Array(arguments.length -  0);
while (G__32926__i < G__32926__a.length) {G__32926__a[G__32926__i] = arguments[G__32926__i + 0]; ++G__32926__i;}
  args = new cljs.core.IndexedSeq(G__32926__a,0,null);
} 
return G__32925__delegate.call(this,args);};
G__32925.cljs$lang$maxFixedArity = 0;
G__32925.cljs$lang$applyTo = (function (arglist__32927){
var args = cljs.core.seq(arglist__32927);
return G__32925__delegate(args);
});
G__32925.cljs$core$IFn$_invoke$arity$variadic = G__32925__delegate;
return G__32925;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__32928_SHARP_,p2__32929_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32928_SHARP_)].join('')),p2__32929_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__32930_SHARP_,p2__32931_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32930_SHARP_)].join(''),p2__32931_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__32932 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__32932.addCallback(((function (G__32932){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__32932))
);

G__32932.addErrback(((function (G__32932){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__32932))
);

return G__32932;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e32933){if((e32933 instanceof Error)){
var e = e32933;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32933;

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
}catch (e32934){if((e32934 instanceof Error)){
var e = e32934;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e32934;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__32935 = cljs.core._EQ_;
var expr__32936 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__32935.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__32936))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__32935.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__32936))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__32935.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__32936))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__32935,expr__32936){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__32935,expr__32936))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__32938,callback){
var map__32939 = p__32938;
var map__32939__$1 = ((((!((map__32939 == null)))?(((((map__32939.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32939.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32939):map__32939);
var file_msg = map__32939__$1;
var request_url = cljs.core.get.call(null,map__32939__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3936__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__32939,map__32939__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__32939,map__32939__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32021__auto__){
return (function (){
var f__32022__auto__ = (function (){var switch__31998__auto__ = ((function (c__32021__auto__){
return (function (state_32977){
var state_val_32978 = (state_32977[(1)]);
if((state_val_32978 === (7))){
var inst_32973 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
var statearr_32979_33005 = state_32977__$1;
(statearr_32979_33005[(2)] = inst_32973);

(statearr_32979_33005[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (1))){
var state_32977__$1 = state_32977;
var statearr_32980_33006 = state_32977__$1;
(statearr_32980_33006[(2)] = null);

(statearr_32980_33006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (4))){
var inst_32943 = (state_32977[(7)]);
var inst_32943__$1 = (state_32977[(2)]);
var state_32977__$1 = (function (){var statearr_32981 = state_32977;
(statearr_32981[(7)] = inst_32943__$1);

return statearr_32981;
})();
if(cljs.core.truth_(inst_32943__$1)){
var statearr_32982_33007 = state_32977__$1;
(statearr_32982_33007[(1)] = (5));

} else {
var statearr_32983_33008 = state_32977__$1;
(statearr_32983_33008[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (15))){
var inst_32958 = (state_32977[(8)]);
var inst_32956 = (state_32977[(9)]);
var inst_32960 = inst_32958.call(null,inst_32956);
var state_32977__$1 = state_32977;
var statearr_32984_33009 = state_32977__$1;
(statearr_32984_33009[(2)] = inst_32960);

(statearr_32984_33009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (13))){
var inst_32967 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
var statearr_32985_33010 = state_32977__$1;
(statearr_32985_33010[(2)] = inst_32967);

(statearr_32985_33010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (6))){
var state_32977__$1 = state_32977;
var statearr_32986_33011 = state_32977__$1;
(statearr_32986_33011[(2)] = null);

(statearr_32986_33011[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (17))){
var inst_32964 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
var statearr_32987_33012 = state_32977__$1;
(statearr_32987_33012[(2)] = inst_32964);

(statearr_32987_33012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (3))){
var inst_32975 = (state_32977[(2)]);
var state_32977__$1 = state_32977;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32977__$1,inst_32975);
} else {
if((state_val_32978 === (12))){
var state_32977__$1 = state_32977;
var statearr_32988_33013 = state_32977__$1;
(statearr_32988_33013[(2)] = null);

(statearr_32988_33013[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (2))){
var state_32977__$1 = state_32977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32977__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_32978 === (11))){
var inst_32948 = (state_32977[(10)]);
var inst_32954 = figwheel.client.file_reloading.blocking_load.call(null,inst_32948);
var state_32977__$1 = state_32977;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32977__$1,(14),inst_32954);
} else {
if((state_val_32978 === (9))){
var inst_32948 = (state_32977[(10)]);
var state_32977__$1 = state_32977;
if(cljs.core.truth_(inst_32948)){
var statearr_32989_33014 = state_32977__$1;
(statearr_32989_33014[(1)] = (11));

} else {
var statearr_32990_33015 = state_32977__$1;
(statearr_32990_33015[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (5))){
var inst_32943 = (state_32977[(7)]);
var inst_32949 = (state_32977[(11)]);
var inst_32948 = cljs.core.nth.call(null,inst_32943,(0),null);
var inst_32949__$1 = cljs.core.nth.call(null,inst_32943,(1),null);
var state_32977__$1 = (function (){var statearr_32991 = state_32977;
(statearr_32991[(10)] = inst_32948);

(statearr_32991[(11)] = inst_32949__$1);

return statearr_32991;
})();
if(cljs.core.truth_(inst_32949__$1)){
var statearr_32992_33016 = state_32977__$1;
(statearr_32992_33016[(1)] = (8));

} else {
var statearr_32993_33017 = state_32977__$1;
(statearr_32993_33017[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (14))){
var inst_32948 = (state_32977[(10)]);
var inst_32958 = (state_32977[(8)]);
var inst_32956 = (state_32977[(2)]);
var inst_32957 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_32958__$1 = cljs.core.get.call(null,inst_32957,inst_32948);
var state_32977__$1 = (function (){var statearr_32994 = state_32977;
(statearr_32994[(8)] = inst_32958__$1);

(statearr_32994[(9)] = inst_32956);

return statearr_32994;
})();
if(cljs.core.truth_(inst_32958__$1)){
var statearr_32995_33018 = state_32977__$1;
(statearr_32995_33018[(1)] = (15));

} else {
var statearr_32996_33019 = state_32977__$1;
(statearr_32996_33019[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (16))){
var inst_32956 = (state_32977[(9)]);
var inst_32962 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_32956);
var state_32977__$1 = state_32977;
var statearr_32997_33020 = state_32977__$1;
(statearr_32997_33020[(2)] = inst_32962);

(statearr_32997_33020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (10))){
var inst_32969 = (state_32977[(2)]);
var state_32977__$1 = (function (){var statearr_32998 = state_32977;
(statearr_32998[(12)] = inst_32969);

return statearr_32998;
})();
var statearr_32999_33021 = state_32977__$1;
(statearr_32999_33021[(2)] = null);

(statearr_32999_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32978 === (8))){
var inst_32949 = (state_32977[(11)]);
var inst_32951 = eval(inst_32949);
var state_32977__$1 = state_32977;
var statearr_33000_33022 = state_32977__$1;
(statearr_33000_33022[(2)] = inst_32951);

(statearr_33000_33022[(1)] = (10));


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
});})(c__32021__auto__))
;
return ((function (switch__31998__auto__,c__32021__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__31999__auto__ = null;
var figwheel$client$file_reloading$state_machine__31999__auto____0 = (function (){
var statearr_33001 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33001[(0)] = figwheel$client$file_reloading$state_machine__31999__auto__);

(statearr_33001[(1)] = (1));

return statearr_33001;
});
var figwheel$client$file_reloading$state_machine__31999__auto____1 = (function (state_32977){
while(true){
var ret_value__32000__auto__ = (function (){try{while(true){
var result__32001__auto__ = switch__31998__auto__.call(null,state_32977);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32001__auto__;
}
break;
}
}catch (e33002){if((e33002 instanceof Object)){
var ex__32002__auto__ = e33002;
var statearr_33003_33023 = state_32977;
(statearr_33003_33023[(5)] = ex__32002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32977);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33002;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33024 = state_32977;
state_32977 = G__33024;
continue;
} else {
return ret_value__32000__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__31999__auto__ = function(state_32977){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__31999__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__31999__auto____1.call(this,state_32977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__31999__auto____0;
figwheel$client$file_reloading$state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__31999__auto____1;
return figwheel$client$file_reloading$state_machine__31999__auto__;
})()
;})(switch__31998__auto__,c__32021__auto__))
})();
var state__32023__auto__ = (function (){var statearr_33004 = f__32022__auto__.call(null);
(statearr_33004[(6)] = c__32021__auto__);

return statearr_33004;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32023__auto__);
});})(c__32021__auto__))
);

return c__32021__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__33026 = arguments.length;
switch (G__33026) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33028,callback){
var map__33029 = p__33028;
var map__33029__$1 = ((((!((map__33029 == null)))?(((((map__33029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33029):map__33029);
var file_msg = map__33029__$1;
var namespace = cljs.core.get.call(null,map__33029__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33029,map__33029__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33029,map__33029__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33031){
var map__33032 = p__33031;
var map__33032__$1 = ((((!((map__33032 == null)))?(((((map__33032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33032):map__33032);
var file_msg = map__33032__$1;
var namespace = cljs.core.get.call(null,map__33032__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33034){
var map__33035 = p__33034;
var map__33035__$1 = ((((!((map__33035 == null)))?(((((map__33035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33035):map__33035);
var file_msg = map__33035__$1;
var namespace = cljs.core.get.call(null,map__33035__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33037,callback){
var map__33038 = p__33037;
var map__33038__$1 = ((((!((map__33038 == null)))?(((((map__33038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33038):map__33038);
var file_msg = map__33038__$1;
var request_url = cljs.core.get.call(null,map__33038__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33038__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32021__auto___33088 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32021__auto___33088,out){
return (function (){
var f__32022__auto__ = (function (){var switch__31998__auto__ = ((function (c__32021__auto___33088,out){
return (function (state_33073){
var state_val_33074 = (state_33073[(1)]);
if((state_val_33074 === (1))){
var inst_33047 = cljs.core.seq.call(null,files);
var inst_33048 = cljs.core.first.call(null,inst_33047);
var inst_33049 = cljs.core.next.call(null,inst_33047);
var inst_33050 = files;
var state_33073__$1 = (function (){var statearr_33075 = state_33073;
(statearr_33075[(7)] = inst_33050);

(statearr_33075[(8)] = inst_33048);

(statearr_33075[(9)] = inst_33049);

return statearr_33075;
})();
var statearr_33076_33089 = state_33073__$1;
(statearr_33076_33089[(2)] = null);

(statearr_33076_33089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (2))){
var inst_33050 = (state_33073[(7)]);
var inst_33056 = (state_33073[(10)]);
var inst_33055 = cljs.core.seq.call(null,inst_33050);
var inst_33056__$1 = cljs.core.first.call(null,inst_33055);
var inst_33057 = cljs.core.next.call(null,inst_33055);
var inst_33058 = (inst_33056__$1 == null);
var inst_33059 = cljs.core.not.call(null,inst_33058);
var state_33073__$1 = (function (){var statearr_33077 = state_33073;
(statearr_33077[(10)] = inst_33056__$1);

(statearr_33077[(11)] = inst_33057);

return statearr_33077;
})();
if(inst_33059){
var statearr_33078_33090 = state_33073__$1;
(statearr_33078_33090[(1)] = (4));

} else {
var statearr_33079_33091 = state_33073__$1;
(statearr_33079_33091[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (3))){
var inst_33071 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33073__$1,inst_33071);
} else {
if((state_val_33074 === (4))){
var inst_33056 = (state_33073[(10)]);
var inst_33061 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33056);
var state_33073__$1 = state_33073;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33073__$1,(7),inst_33061);
} else {
if((state_val_33074 === (5))){
var inst_33067 = cljs.core.async.close_BANG_.call(null,out);
var state_33073__$1 = state_33073;
var statearr_33080_33092 = state_33073__$1;
(statearr_33080_33092[(2)] = inst_33067);

(statearr_33080_33092[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (6))){
var inst_33069 = (state_33073[(2)]);
var state_33073__$1 = state_33073;
var statearr_33081_33093 = state_33073__$1;
(statearr_33081_33093[(2)] = inst_33069);

(statearr_33081_33093[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33074 === (7))){
var inst_33057 = (state_33073[(11)]);
var inst_33063 = (state_33073[(2)]);
var inst_33064 = cljs.core.async.put_BANG_.call(null,out,inst_33063);
var inst_33050 = inst_33057;
var state_33073__$1 = (function (){var statearr_33082 = state_33073;
(statearr_33082[(7)] = inst_33050);

(statearr_33082[(12)] = inst_33064);

return statearr_33082;
})();
var statearr_33083_33094 = state_33073__$1;
(statearr_33083_33094[(2)] = null);

(statearr_33083_33094[(1)] = (2));


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
});})(c__32021__auto___33088,out))
;
return ((function (switch__31998__auto__,c__32021__auto___33088,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto____0 = (function (){
var statearr_33084 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33084[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto__);

(statearr_33084[(1)] = (1));

return statearr_33084;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto____1 = (function (state_33073){
while(true){
var ret_value__32000__auto__ = (function (){try{while(true){
var result__32001__auto__ = switch__31998__auto__.call(null,state_33073);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32001__auto__;
}
break;
}
}catch (e33085){if((e33085 instanceof Object)){
var ex__32002__auto__ = e33085;
var statearr_33086_33095 = state_33073;
(statearr_33086_33095[(5)] = ex__32002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33073);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33096 = state_33073;
state_33073 = G__33096;
continue;
} else {
return ret_value__32000__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto__ = function(state_33073){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto____1.call(this,state_33073);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__31999__auto__;
})()
;})(switch__31998__auto__,c__32021__auto___33088,out))
})();
var state__32023__auto__ = (function (){var statearr_33087 = f__32022__auto__.call(null);
(statearr_33087[(6)] = c__32021__auto___33088);

return statearr_33087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32023__auto__);
});})(c__32021__auto___33088,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33097,opts){
var map__33098 = p__33097;
var map__33098__$1 = ((((!((map__33098 == null)))?(((((map__33098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33098):map__33098);
var eval_body = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33098__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e33100){var e = e33100;
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
return (function (p1__33101_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33101_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33102){
var vec__33103 = p__33102;
var k = cljs.core.nth.call(null,vec__33103,(0),null);
var v = cljs.core.nth.call(null,vec__33103,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33106){
var vec__33107 = p__33106;
var k = cljs.core.nth.call(null,vec__33107,(0),null);
var v = cljs.core.nth.call(null,vec__33107,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33113,p__33114){
var map__33115 = p__33113;
var map__33115__$1 = ((((!((map__33115 == null)))?(((((map__33115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33115):map__33115);
var opts = map__33115__$1;
var before_jsload = cljs.core.get.call(null,map__33115__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33115__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33115__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33116 = p__33114;
var map__33116__$1 = ((((!((map__33116 == null)))?(((((map__33116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33116.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33116):map__33116);
var msg = map__33116__$1;
var files = cljs.core.get.call(null,map__33116__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33116__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33116__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32021__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32022__auto__ = (function (){var switch__31998__auto__ = ((function (c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33270){
var state_val_33271 = (state_33270[(1)]);
if((state_val_33271 === (7))){
var inst_33133 = (state_33270[(7)]);
var inst_33131 = (state_33270[(8)]);
var inst_33132 = (state_33270[(9)]);
var inst_33130 = (state_33270[(10)]);
var inst_33138 = cljs.core._nth.call(null,inst_33131,inst_33133);
var inst_33139 = figwheel.client.file_reloading.eval_body.call(null,inst_33138,opts);
var inst_33140 = (inst_33133 + (1));
var tmp33272 = inst_33131;
var tmp33273 = inst_33132;
var tmp33274 = inst_33130;
var inst_33130__$1 = tmp33274;
var inst_33131__$1 = tmp33272;
var inst_33132__$1 = tmp33273;
var inst_33133__$1 = inst_33140;
var state_33270__$1 = (function (){var statearr_33275 = state_33270;
(statearr_33275[(7)] = inst_33133__$1);

(statearr_33275[(8)] = inst_33131__$1);

(statearr_33275[(11)] = inst_33139);

(statearr_33275[(9)] = inst_33132__$1);

(statearr_33275[(10)] = inst_33130__$1);

return statearr_33275;
})();
var statearr_33276_33359 = state_33270__$1;
(statearr_33276_33359[(2)] = null);

(statearr_33276_33359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (20))){
var inst_33173 = (state_33270[(12)]);
var inst_33181 = figwheel.client.file_reloading.sort_files.call(null,inst_33173);
var state_33270__$1 = state_33270;
var statearr_33277_33360 = state_33270__$1;
(statearr_33277_33360[(2)] = inst_33181);

(statearr_33277_33360[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (27))){
var state_33270__$1 = state_33270;
var statearr_33278_33361 = state_33270__$1;
(statearr_33278_33361[(2)] = null);

(statearr_33278_33361[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (1))){
var inst_33122 = (state_33270[(13)]);
var inst_33119 = before_jsload.call(null,files);
var inst_33120 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33121 = (function (){return ((function (inst_33122,inst_33119,inst_33120,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33110_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33110_SHARP_);
});
;})(inst_33122,inst_33119,inst_33120,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33122__$1 = cljs.core.filter.call(null,inst_33121,files);
var inst_33123 = cljs.core.not_empty.call(null,inst_33122__$1);
var state_33270__$1 = (function (){var statearr_33279 = state_33270;
(statearr_33279[(14)] = inst_33119);

(statearr_33279[(15)] = inst_33120);

(statearr_33279[(13)] = inst_33122__$1);

return statearr_33279;
})();
if(cljs.core.truth_(inst_33123)){
var statearr_33280_33362 = state_33270__$1;
(statearr_33280_33362[(1)] = (2));

} else {
var statearr_33281_33363 = state_33270__$1;
(statearr_33281_33363[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (24))){
var state_33270__$1 = state_33270;
var statearr_33282_33364 = state_33270__$1;
(statearr_33282_33364[(2)] = null);

(statearr_33282_33364[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (39))){
var inst_33223 = (state_33270[(16)]);
var state_33270__$1 = state_33270;
var statearr_33283_33365 = state_33270__$1;
(statearr_33283_33365[(2)] = inst_33223);

(statearr_33283_33365[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (46))){
var inst_33265 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33284_33366 = state_33270__$1;
(statearr_33284_33366[(2)] = inst_33265);

(statearr_33284_33366[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (4))){
var inst_33167 = (state_33270[(2)]);
var inst_33168 = cljs.core.List.EMPTY;
var inst_33169 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33168);
var inst_33170 = (function (){return ((function (inst_33167,inst_33168,inst_33169,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33111_SHARP_){
var and__3925__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33111_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33111_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33111_SHARP_))));
} else {
return and__3925__auto__;
}
});
;})(inst_33167,inst_33168,inst_33169,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33171 = cljs.core.filter.call(null,inst_33170,files);
var inst_33172 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33173 = cljs.core.concat.call(null,inst_33171,inst_33172);
var state_33270__$1 = (function (){var statearr_33285 = state_33270;
(statearr_33285[(12)] = inst_33173);

(statearr_33285[(17)] = inst_33169);

(statearr_33285[(18)] = inst_33167);

return statearr_33285;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33286_33367 = state_33270__$1;
(statearr_33286_33367[(1)] = (16));

} else {
var statearr_33287_33368 = state_33270__$1;
(statearr_33287_33368[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (15))){
var inst_33157 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33288_33369 = state_33270__$1;
(statearr_33288_33369[(2)] = inst_33157);

(statearr_33288_33369[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (21))){
var inst_33183 = (state_33270[(19)]);
var inst_33183__$1 = (state_33270[(2)]);
var inst_33184 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33183__$1);
var state_33270__$1 = (function (){var statearr_33289 = state_33270;
(statearr_33289[(19)] = inst_33183__$1);

return statearr_33289;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33270__$1,(22),inst_33184);
} else {
if((state_val_33271 === (31))){
var inst_33268 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33270__$1,inst_33268);
} else {
if((state_val_33271 === (32))){
var inst_33223 = (state_33270[(16)]);
var inst_33228 = inst_33223.cljs$lang$protocol_mask$partition0$;
var inst_33229 = (inst_33228 & (64));
var inst_33230 = inst_33223.cljs$core$ISeq$;
var inst_33231 = (cljs.core.PROTOCOL_SENTINEL === inst_33230);
var inst_33232 = ((inst_33229) || (inst_33231));
var state_33270__$1 = state_33270;
if(cljs.core.truth_(inst_33232)){
var statearr_33290_33370 = state_33270__$1;
(statearr_33290_33370[(1)] = (35));

} else {
var statearr_33291_33371 = state_33270__$1;
(statearr_33291_33371[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (40))){
var inst_33245 = (state_33270[(20)]);
var inst_33244 = (state_33270[(2)]);
var inst_33245__$1 = cljs.core.get.call(null,inst_33244,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33246 = cljs.core.get.call(null,inst_33244,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33247 = cljs.core.not_empty.call(null,inst_33245__$1);
var state_33270__$1 = (function (){var statearr_33292 = state_33270;
(statearr_33292[(21)] = inst_33246);

(statearr_33292[(20)] = inst_33245__$1);

return statearr_33292;
})();
if(cljs.core.truth_(inst_33247)){
var statearr_33293_33372 = state_33270__$1;
(statearr_33293_33372[(1)] = (41));

} else {
var statearr_33294_33373 = state_33270__$1;
(statearr_33294_33373[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (33))){
var state_33270__$1 = state_33270;
var statearr_33295_33374 = state_33270__$1;
(statearr_33295_33374[(2)] = false);

(statearr_33295_33374[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (13))){
var inst_33143 = (state_33270[(22)]);
var inst_33147 = cljs.core.chunk_first.call(null,inst_33143);
var inst_33148 = cljs.core.chunk_rest.call(null,inst_33143);
var inst_33149 = cljs.core.count.call(null,inst_33147);
var inst_33130 = inst_33148;
var inst_33131 = inst_33147;
var inst_33132 = inst_33149;
var inst_33133 = (0);
var state_33270__$1 = (function (){var statearr_33296 = state_33270;
(statearr_33296[(7)] = inst_33133);

(statearr_33296[(8)] = inst_33131);

(statearr_33296[(9)] = inst_33132);

(statearr_33296[(10)] = inst_33130);

return statearr_33296;
})();
var statearr_33297_33375 = state_33270__$1;
(statearr_33297_33375[(2)] = null);

(statearr_33297_33375[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (22))){
var inst_33183 = (state_33270[(19)]);
var inst_33186 = (state_33270[(23)]);
var inst_33187 = (state_33270[(24)]);
var inst_33191 = (state_33270[(25)]);
var inst_33186__$1 = (state_33270[(2)]);
var inst_33187__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33186__$1);
var inst_33188 = (function (){var all_files = inst_33183;
var res_SINGLEQUOTE_ = inst_33186__$1;
var res = inst_33187__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33183,inst_33186,inst_33187,inst_33191,inst_33186__$1,inst_33187__$1,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33112_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33112_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33183,inst_33186,inst_33187,inst_33191,inst_33186__$1,inst_33187__$1,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33189 = cljs.core.filter.call(null,inst_33188,inst_33186__$1);
var inst_33190 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33191__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33190);
var inst_33192 = cljs.core.not_empty.call(null,inst_33191__$1);
var state_33270__$1 = (function (){var statearr_33298 = state_33270;
(statearr_33298[(26)] = inst_33189);

(statearr_33298[(23)] = inst_33186__$1);

(statearr_33298[(24)] = inst_33187__$1);

(statearr_33298[(25)] = inst_33191__$1);

return statearr_33298;
})();
if(cljs.core.truth_(inst_33192)){
var statearr_33299_33376 = state_33270__$1;
(statearr_33299_33376[(1)] = (23));

} else {
var statearr_33300_33377 = state_33270__$1;
(statearr_33300_33377[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (36))){
var state_33270__$1 = state_33270;
var statearr_33301_33378 = state_33270__$1;
(statearr_33301_33378[(2)] = false);

(statearr_33301_33378[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (41))){
var inst_33245 = (state_33270[(20)]);
var inst_33249 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33250 = cljs.core.map.call(null,inst_33249,inst_33245);
var inst_33251 = cljs.core.pr_str.call(null,inst_33250);
var inst_33252 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33251)].join('');
var inst_33253 = figwheel.client.utils.log.call(null,inst_33252);
var state_33270__$1 = state_33270;
var statearr_33302_33379 = state_33270__$1;
(statearr_33302_33379[(2)] = inst_33253);

(statearr_33302_33379[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (43))){
var inst_33246 = (state_33270[(21)]);
var inst_33256 = (state_33270[(2)]);
var inst_33257 = cljs.core.not_empty.call(null,inst_33246);
var state_33270__$1 = (function (){var statearr_33303 = state_33270;
(statearr_33303[(27)] = inst_33256);

return statearr_33303;
})();
if(cljs.core.truth_(inst_33257)){
var statearr_33304_33380 = state_33270__$1;
(statearr_33304_33380[(1)] = (44));

} else {
var statearr_33305_33381 = state_33270__$1;
(statearr_33305_33381[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (29))){
var inst_33183 = (state_33270[(19)]);
var inst_33189 = (state_33270[(26)]);
var inst_33223 = (state_33270[(16)]);
var inst_33186 = (state_33270[(23)]);
var inst_33187 = (state_33270[(24)]);
var inst_33191 = (state_33270[(25)]);
var inst_33219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33222 = (function (){var all_files = inst_33183;
var res_SINGLEQUOTE_ = inst_33186;
var res = inst_33187;
var files_not_loaded = inst_33189;
var dependencies_that_loaded = inst_33191;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33183,inst_33189,inst_33223,inst_33186,inst_33187,inst_33191,inst_33219,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33221){
var map__33306 = p__33221;
var map__33306__$1 = ((((!((map__33306 == null)))?(((((map__33306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33306):map__33306);
var namespace = cljs.core.get.call(null,map__33306__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33183,inst_33189,inst_33223,inst_33186,inst_33187,inst_33191,inst_33219,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33223__$1 = cljs.core.group_by.call(null,inst_33222,inst_33189);
var inst_33225 = (inst_33223__$1 == null);
var inst_33226 = cljs.core.not.call(null,inst_33225);
var state_33270__$1 = (function (){var statearr_33308 = state_33270;
(statearr_33308[(16)] = inst_33223__$1);

(statearr_33308[(28)] = inst_33219);

return statearr_33308;
})();
if(inst_33226){
var statearr_33309_33382 = state_33270__$1;
(statearr_33309_33382[(1)] = (32));

} else {
var statearr_33310_33383 = state_33270__$1;
(statearr_33310_33383[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (44))){
var inst_33246 = (state_33270[(21)]);
var inst_33259 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33246);
var inst_33260 = cljs.core.pr_str.call(null,inst_33259);
var inst_33261 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33260)].join('');
var inst_33262 = figwheel.client.utils.log.call(null,inst_33261);
var state_33270__$1 = state_33270;
var statearr_33311_33384 = state_33270__$1;
(statearr_33311_33384[(2)] = inst_33262);

(statearr_33311_33384[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (6))){
var inst_33164 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33312_33385 = state_33270__$1;
(statearr_33312_33385[(2)] = inst_33164);

(statearr_33312_33385[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (28))){
var inst_33189 = (state_33270[(26)]);
var inst_33216 = (state_33270[(2)]);
var inst_33217 = cljs.core.not_empty.call(null,inst_33189);
var state_33270__$1 = (function (){var statearr_33313 = state_33270;
(statearr_33313[(29)] = inst_33216);

return statearr_33313;
})();
if(cljs.core.truth_(inst_33217)){
var statearr_33314_33386 = state_33270__$1;
(statearr_33314_33386[(1)] = (29));

} else {
var statearr_33315_33387 = state_33270__$1;
(statearr_33315_33387[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (25))){
var inst_33187 = (state_33270[(24)]);
var inst_33203 = (state_33270[(2)]);
var inst_33204 = cljs.core.not_empty.call(null,inst_33187);
var state_33270__$1 = (function (){var statearr_33316 = state_33270;
(statearr_33316[(30)] = inst_33203);

return statearr_33316;
})();
if(cljs.core.truth_(inst_33204)){
var statearr_33317_33388 = state_33270__$1;
(statearr_33317_33388[(1)] = (26));

} else {
var statearr_33318_33389 = state_33270__$1;
(statearr_33318_33389[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (34))){
var inst_33239 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
if(cljs.core.truth_(inst_33239)){
var statearr_33319_33390 = state_33270__$1;
(statearr_33319_33390[(1)] = (38));

} else {
var statearr_33320_33391 = state_33270__$1;
(statearr_33320_33391[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (17))){
var state_33270__$1 = state_33270;
var statearr_33321_33392 = state_33270__$1;
(statearr_33321_33392[(2)] = recompile_dependents);

(statearr_33321_33392[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (3))){
var state_33270__$1 = state_33270;
var statearr_33322_33393 = state_33270__$1;
(statearr_33322_33393[(2)] = null);

(statearr_33322_33393[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (12))){
var inst_33160 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33323_33394 = state_33270__$1;
(statearr_33323_33394[(2)] = inst_33160);

(statearr_33323_33394[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (2))){
var inst_33122 = (state_33270[(13)]);
var inst_33129 = cljs.core.seq.call(null,inst_33122);
var inst_33130 = inst_33129;
var inst_33131 = null;
var inst_33132 = (0);
var inst_33133 = (0);
var state_33270__$1 = (function (){var statearr_33324 = state_33270;
(statearr_33324[(7)] = inst_33133);

(statearr_33324[(8)] = inst_33131);

(statearr_33324[(9)] = inst_33132);

(statearr_33324[(10)] = inst_33130);

return statearr_33324;
})();
var statearr_33325_33395 = state_33270__$1;
(statearr_33325_33395[(2)] = null);

(statearr_33325_33395[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (23))){
var inst_33183 = (state_33270[(19)]);
var inst_33189 = (state_33270[(26)]);
var inst_33186 = (state_33270[(23)]);
var inst_33187 = (state_33270[(24)]);
var inst_33191 = (state_33270[(25)]);
var inst_33194 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33196 = (function (){var all_files = inst_33183;
var res_SINGLEQUOTE_ = inst_33186;
var res = inst_33187;
var files_not_loaded = inst_33189;
var dependencies_that_loaded = inst_33191;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33183,inst_33189,inst_33186,inst_33187,inst_33191,inst_33194,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33195){
var map__33326 = p__33195;
var map__33326__$1 = ((((!((map__33326 == null)))?(((((map__33326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33326.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33326):map__33326);
var request_url = cljs.core.get.call(null,map__33326__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33183,inst_33189,inst_33186,inst_33187,inst_33191,inst_33194,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33197 = cljs.core.reverse.call(null,inst_33191);
var inst_33198 = cljs.core.map.call(null,inst_33196,inst_33197);
var inst_33199 = cljs.core.pr_str.call(null,inst_33198);
var inst_33200 = figwheel.client.utils.log.call(null,inst_33199);
var state_33270__$1 = (function (){var statearr_33328 = state_33270;
(statearr_33328[(31)] = inst_33194);

return statearr_33328;
})();
var statearr_33329_33396 = state_33270__$1;
(statearr_33329_33396[(2)] = inst_33200);

(statearr_33329_33396[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (35))){
var state_33270__$1 = state_33270;
var statearr_33330_33397 = state_33270__$1;
(statearr_33330_33397[(2)] = true);

(statearr_33330_33397[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (19))){
var inst_33173 = (state_33270[(12)]);
var inst_33179 = figwheel.client.file_reloading.expand_files.call(null,inst_33173);
var state_33270__$1 = state_33270;
var statearr_33331_33398 = state_33270__$1;
(statearr_33331_33398[(2)] = inst_33179);

(statearr_33331_33398[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (11))){
var state_33270__$1 = state_33270;
var statearr_33332_33399 = state_33270__$1;
(statearr_33332_33399[(2)] = null);

(statearr_33332_33399[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (9))){
var inst_33162 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33333_33400 = state_33270__$1;
(statearr_33333_33400[(2)] = inst_33162);

(statearr_33333_33400[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (5))){
var inst_33133 = (state_33270[(7)]);
var inst_33132 = (state_33270[(9)]);
var inst_33135 = (inst_33133 < inst_33132);
var inst_33136 = inst_33135;
var state_33270__$1 = state_33270;
if(cljs.core.truth_(inst_33136)){
var statearr_33334_33401 = state_33270__$1;
(statearr_33334_33401[(1)] = (7));

} else {
var statearr_33335_33402 = state_33270__$1;
(statearr_33335_33402[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (14))){
var inst_33143 = (state_33270[(22)]);
var inst_33152 = cljs.core.first.call(null,inst_33143);
var inst_33153 = figwheel.client.file_reloading.eval_body.call(null,inst_33152,opts);
var inst_33154 = cljs.core.next.call(null,inst_33143);
var inst_33130 = inst_33154;
var inst_33131 = null;
var inst_33132 = (0);
var inst_33133 = (0);
var state_33270__$1 = (function (){var statearr_33336 = state_33270;
(statearr_33336[(32)] = inst_33153);

(statearr_33336[(7)] = inst_33133);

(statearr_33336[(8)] = inst_33131);

(statearr_33336[(9)] = inst_33132);

(statearr_33336[(10)] = inst_33130);

return statearr_33336;
})();
var statearr_33337_33403 = state_33270__$1;
(statearr_33337_33403[(2)] = null);

(statearr_33337_33403[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (45))){
var state_33270__$1 = state_33270;
var statearr_33338_33404 = state_33270__$1;
(statearr_33338_33404[(2)] = null);

(statearr_33338_33404[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (26))){
var inst_33183 = (state_33270[(19)]);
var inst_33189 = (state_33270[(26)]);
var inst_33186 = (state_33270[(23)]);
var inst_33187 = (state_33270[(24)]);
var inst_33191 = (state_33270[(25)]);
var inst_33206 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33208 = (function (){var all_files = inst_33183;
var res_SINGLEQUOTE_ = inst_33186;
var res = inst_33187;
var files_not_loaded = inst_33189;
var dependencies_that_loaded = inst_33191;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33183,inst_33189,inst_33186,inst_33187,inst_33191,inst_33206,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33207){
var map__33339 = p__33207;
var map__33339__$1 = ((((!((map__33339 == null)))?(((((map__33339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33339):map__33339);
var namespace = cljs.core.get.call(null,map__33339__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33339__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33183,inst_33189,inst_33186,inst_33187,inst_33191,inst_33206,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33209 = cljs.core.map.call(null,inst_33208,inst_33187);
var inst_33210 = cljs.core.pr_str.call(null,inst_33209);
var inst_33211 = figwheel.client.utils.log.call(null,inst_33210);
var inst_33212 = (function (){var all_files = inst_33183;
var res_SINGLEQUOTE_ = inst_33186;
var res = inst_33187;
var files_not_loaded = inst_33189;
var dependencies_that_loaded = inst_33191;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33183,inst_33189,inst_33186,inst_33187,inst_33191,inst_33206,inst_33208,inst_33209,inst_33210,inst_33211,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33183,inst_33189,inst_33186,inst_33187,inst_33191,inst_33206,inst_33208,inst_33209,inst_33210,inst_33211,state_val_33271,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33213 = setTimeout(inst_33212,(10));
var state_33270__$1 = (function (){var statearr_33341 = state_33270;
(statearr_33341[(33)] = inst_33211);

(statearr_33341[(34)] = inst_33206);

return statearr_33341;
})();
var statearr_33342_33405 = state_33270__$1;
(statearr_33342_33405[(2)] = inst_33213);

(statearr_33342_33405[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (16))){
var state_33270__$1 = state_33270;
var statearr_33343_33406 = state_33270__$1;
(statearr_33343_33406[(2)] = reload_dependents);

(statearr_33343_33406[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (38))){
var inst_33223 = (state_33270[(16)]);
var inst_33241 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33223);
var state_33270__$1 = state_33270;
var statearr_33344_33407 = state_33270__$1;
(statearr_33344_33407[(2)] = inst_33241);

(statearr_33344_33407[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (30))){
var state_33270__$1 = state_33270;
var statearr_33345_33408 = state_33270__$1;
(statearr_33345_33408[(2)] = null);

(statearr_33345_33408[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (10))){
var inst_33143 = (state_33270[(22)]);
var inst_33145 = cljs.core.chunked_seq_QMARK_.call(null,inst_33143);
var state_33270__$1 = state_33270;
if(inst_33145){
var statearr_33346_33409 = state_33270__$1;
(statearr_33346_33409[(1)] = (13));

} else {
var statearr_33347_33410 = state_33270__$1;
(statearr_33347_33410[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (18))){
var inst_33177 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
if(cljs.core.truth_(inst_33177)){
var statearr_33348_33411 = state_33270__$1;
(statearr_33348_33411[(1)] = (19));

} else {
var statearr_33349_33412 = state_33270__$1;
(statearr_33349_33412[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (42))){
var state_33270__$1 = state_33270;
var statearr_33350_33413 = state_33270__$1;
(statearr_33350_33413[(2)] = null);

(statearr_33350_33413[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (37))){
var inst_33236 = (state_33270[(2)]);
var state_33270__$1 = state_33270;
var statearr_33351_33414 = state_33270__$1;
(statearr_33351_33414[(2)] = inst_33236);

(statearr_33351_33414[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33271 === (8))){
var inst_33130 = (state_33270[(10)]);
var inst_33143 = (state_33270[(22)]);
var inst_33143__$1 = cljs.core.seq.call(null,inst_33130);
var state_33270__$1 = (function (){var statearr_33352 = state_33270;
(statearr_33352[(22)] = inst_33143__$1);

return statearr_33352;
})();
if(inst_33143__$1){
var statearr_33353_33415 = state_33270__$1;
(statearr_33353_33415[(1)] = (10));

} else {
var statearr_33354_33416 = state_33270__$1;
(statearr_33354_33416[(1)] = (11));

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
});})(c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__31998__auto__,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto____0 = (function (){
var statearr_33355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33355[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto__);

(statearr_33355[(1)] = (1));

return statearr_33355;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto____1 = (function (state_33270){
while(true){
var ret_value__32000__auto__ = (function (){try{while(true){
var result__32001__auto__ = switch__31998__auto__.call(null,state_33270);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32001__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32001__auto__;
}
break;
}
}catch (e33356){if((e33356 instanceof Object)){
var ex__32002__auto__ = e33356;
var statearr_33357_33417 = state_33270;
(statearr_33357_33417[(5)] = ex__32002__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33270);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32000__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33418 = state_33270;
state_33270 = G__33418;
continue;
} else {
return ret_value__32000__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto__ = function(state_33270){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto____1.call(this,state_33270);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__31999__auto__;
})()
;})(switch__31998__auto__,c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32023__auto__ = (function (){var statearr_33358 = f__32022__auto__.call(null);
(statearr_33358[(6)] = c__32021__auto__);

return statearr_33358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32023__auto__);
});})(c__32021__auto__,map__33115,map__33115__$1,opts,before_jsload,on_jsload,reload_dependents,map__33116,map__33116__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32021__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__33421,link){
var map__33422 = p__33421;
var map__33422__$1 = ((((!((map__33422 == null)))?(((((map__33422.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33422.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33422):map__33422);
var file = cljs.core.get.call(null,map__33422__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__33422,map__33422__$1,file){
return (function (p1__33419_SHARP_,p2__33420_SHARP_){
if(cljs.core._EQ_.call(null,p1__33419_SHARP_,p2__33420_SHARP_)){
return p1__33419_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__33422,map__33422__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__33425){
var map__33426 = p__33425;
var map__33426__$1 = ((((!((map__33426 == null)))?(((((map__33426.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33426.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33426):map__33426);
var match_length = cljs.core.get.call(null,map__33426__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__33426__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__33424_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__33424_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__33428_SHARP_,p2__33429_SHARP_){
return cljs.core.assoc.call(null,p1__33428_SHARP_,cljs.core.get.call(null,p2__33429_SHARP_,key),p2__33429_SHARP_);
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
var loaded_f_datas_33430 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_33430);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_33430);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__33431,p__33432){
var map__33433 = p__33431;
var map__33433__$1 = ((((!((map__33433 == null)))?(((((map__33433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33433):map__33433);
var on_cssload = cljs.core.get.call(null,map__33433__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__33434 = p__33432;
var map__33434__$1 = ((((!((map__33434 == null)))?(((((map__33434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33434):map__33434);
var files_msg = map__33434__$1;
var files = cljs.core.get.call(null,map__33434__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1553577426516
