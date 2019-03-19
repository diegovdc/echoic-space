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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__53032_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__53032_SHARP_));
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
var seq__53033 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__53034 = null;
var count__53035 = (0);
var i__53036 = (0);
while(true){
if((i__53036 < count__53035)){
var n = cljs.core._nth.call(null,chunk__53034,i__53036);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__53037 = seq__53033;
var G__53038 = chunk__53034;
var G__53039 = count__53035;
var G__53040 = (i__53036 + (1));
seq__53033 = G__53037;
chunk__53034 = G__53038;
count__53035 = G__53039;
i__53036 = G__53040;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53033);
if(temp__5457__auto__){
var seq__53033__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53033__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__53033__$1);
var G__53041 = cljs.core.chunk_rest.call(null,seq__53033__$1);
var G__53042 = c__4337__auto__;
var G__53043 = cljs.core.count.call(null,c__4337__auto__);
var G__53044 = (0);
seq__53033 = G__53041;
chunk__53034 = G__53042;
count__53035 = G__53043;
i__53036 = G__53044;
continue;
} else {
var n = cljs.core.first.call(null,seq__53033__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__53045 = cljs.core.next.call(null,seq__53033__$1);
var G__53046 = null;
var G__53047 = (0);
var G__53048 = (0);
seq__53033 = G__53045;
chunk__53034 = G__53046;
count__53035 = G__53047;
i__53036 = G__53048;
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
return cljs.core.some.call(null,(function (p__53049){
var vec__53050 = p__53049;
var _ = cljs.core.nth.call(null,vec__53050,(0),null);
var v = cljs.core.nth.call(null,vec__53050,(1),null);
var and__3925__auto__ = v;
if(cljs.core.truth_(and__3925__auto__)){
return v.call(null,dep);
} else {
return and__3925__auto__;
}
}),cljs.core.filter.call(null,(function (p__53053){
var vec__53054 = p__53053;
var k = cljs.core.nth.call(null,vec__53054,(0),null);
var v = cljs.core.nth.call(null,vec__53054,(1),null);
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

var seq__53066_53074 = cljs.core.seq.call(null,deps);
var chunk__53067_53075 = null;
var count__53068_53076 = (0);
var i__53069_53077 = (0);
while(true){
if((i__53069_53077 < count__53068_53076)){
var dep_53078 = cljs.core._nth.call(null,chunk__53067_53075,i__53069_53077);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_53078;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_53078));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_53078,(depth + (1)),state);
} else {
}


var G__53079 = seq__53066_53074;
var G__53080 = chunk__53067_53075;
var G__53081 = count__53068_53076;
var G__53082 = (i__53069_53077 + (1));
seq__53066_53074 = G__53079;
chunk__53067_53075 = G__53080;
count__53068_53076 = G__53081;
i__53069_53077 = G__53082;
continue;
} else {
var temp__5457__auto___53083 = cljs.core.seq.call(null,seq__53066_53074);
if(temp__5457__auto___53083){
var seq__53066_53084__$1 = temp__5457__auto___53083;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53066_53084__$1)){
var c__4337__auto___53085 = cljs.core.chunk_first.call(null,seq__53066_53084__$1);
var G__53086 = cljs.core.chunk_rest.call(null,seq__53066_53084__$1);
var G__53087 = c__4337__auto___53085;
var G__53088 = cljs.core.count.call(null,c__4337__auto___53085);
var G__53089 = (0);
seq__53066_53074 = G__53086;
chunk__53067_53075 = G__53087;
count__53068_53076 = G__53088;
i__53069_53077 = G__53089;
continue;
} else {
var dep_53090 = cljs.core.first.call(null,seq__53066_53084__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_53090;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_53090));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_53090,(depth + (1)),state);
} else {
}


var G__53091 = cljs.core.next.call(null,seq__53066_53084__$1);
var G__53092 = null;
var G__53093 = (0);
var G__53094 = (0);
seq__53066_53074 = G__53091;
chunk__53067_53075 = G__53092;
count__53068_53076 = G__53093;
i__53069_53077 = G__53094;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__53070){
var vec__53071 = p__53070;
var seq__53072 = cljs.core.seq.call(null,vec__53071);
var first__53073 = cljs.core.first.call(null,seq__53072);
var seq__53072__$1 = cljs.core.next.call(null,seq__53072);
var x = first__53073;
var xs = seq__53072__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__53071,seq__53072,first__53073,seq__53072__$1,x,xs,get_deps__$1){
return (function (p1__53057_SHARP_){
return clojure.set.difference.call(null,p1__53057_SHARP_,x);
});})(vec__53071,seq__53072,first__53073,seq__53072__$1,x,xs,get_deps__$1))
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
var seq__53095 = cljs.core.seq.call(null,provides);
var chunk__53096 = null;
var count__53097 = (0);
var i__53098 = (0);
while(true){
if((i__53098 < count__53097)){
var prov = cljs.core._nth.call(null,chunk__53096,i__53098);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53099_53107 = cljs.core.seq.call(null,requires);
var chunk__53100_53108 = null;
var count__53101_53109 = (0);
var i__53102_53110 = (0);
while(true){
if((i__53102_53110 < count__53101_53109)){
var req_53111 = cljs.core._nth.call(null,chunk__53100_53108,i__53102_53110);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53111,prov);


var G__53112 = seq__53099_53107;
var G__53113 = chunk__53100_53108;
var G__53114 = count__53101_53109;
var G__53115 = (i__53102_53110 + (1));
seq__53099_53107 = G__53112;
chunk__53100_53108 = G__53113;
count__53101_53109 = G__53114;
i__53102_53110 = G__53115;
continue;
} else {
var temp__5457__auto___53116 = cljs.core.seq.call(null,seq__53099_53107);
if(temp__5457__auto___53116){
var seq__53099_53117__$1 = temp__5457__auto___53116;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53099_53117__$1)){
var c__4337__auto___53118 = cljs.core.chunk_first.call(null,seq__53099_53117__$1);
var G__53119 = cljs.core.chunk_rest.call(null,seq__53099_53117__$1);
var G__53120 = c__4337__auto___53118;
var G__53121 = cljs.core.count.call(null,c__4337__auto___53118);
var G__53122 = (0);
seq__53099_53107 = G__53119;
chunk__53100_53108 = G__53120;
count__53101_53109 = G__53121;
i__53102_53110 = G__53122;
continue;
} else {
var req_53123 = cljs.core.first.call(null,seq__53099_53117__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53123,prov);


var G__53124 = cljs.core.next.call(null,seq__53099_53117__$1);
var G__53125 = null;
var G__53126 = (0);
var G__53127 = (0);
seq__53099_53107 = G__53124;
chunk__53100_53108 = G__53125;
count__53101_53109 = G__53126;
i__53102_53110 = G__53127;
continue;
}
} else {
}
}
break;
}


var G__53128 = seq__53095;
var G__53129 = chunk__53096;
var G__53130 = count__53097;
var G__53131 = (i__53098 + (1));
seq__53095 = G__53128;
chunk__53096 = G__53129;
count__53097 = G__53130;
i__53098 = G__53131;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__53095);
if(temp__5457__auto__){
var seq__53095__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53095__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__53095__$1);
var G__53132 = cljs.core.chunk_rest.call(null,seq__53095__$1);
var G__53133 = c__4337__auto__;
var G__53134 = cljs.core.count.call(null,c__4337__auto__);
var G__53135 = (0);
seq__53095 = G__53132;
chunk__53096 = G__53133;
count__53097 = G__53134;
i__53098 = G__53135;
continue;
} else {
var prov = cljs.core.first.call(null,seq__53095__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__53103_53136 = cljs.core.seq.call(null,requires);
var chunk__53104_53137 = null;
var count__53105_53138 = (0);
var i__53106_53139 = (0);
while(true){
if((i__53106_53139 < count__53105_53138)){
var req_53140 = cljs.core._nth.call(null,chunk__53104_53137,i__53106_53139);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53140,prov);


var G__53141 = seq__53103_53136;
var G__53142 = chunk__53104_53137;
var G__53143 = count__53105_53138;
var G__53144 = (i__53106_53139 + (1));
seq__53103_53136 = G__53141;
chunk__53104_53137 = G__53142;
count__53105_53138 = G__53143;
i__53106_53139 = G__53144;
continue;
} else {
var temp__5457__auto___53145__$1 = cljs.core.seq.call(null,seq__53103_53136);
if(temp__5457__auto___53145__$1){
var seq__53103_53146__$1 = temp__5457__auto___53145__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53103_53146__$1)){
var c__4337__auto___53147 = cljs.core.chunk_first.call(null,seq__53103_53146__$1);
var G__53148 = cljs.core.chunk_rest.call(null,seq__53103_53146__$1);
var G__53149 = c__4337__auto___53147;
var G__53150 = cljs.core.count.call(null,c__4337__auto___53147);
var G__53151 = (0);
seq__53103_53136 = G__53148;
chunk__53104_53137 = G__53149;
count__53105_53138 = G__53150;
i__53106_53139 = G__53151;
continue;
} else {
var req_53152 = cljs.core.first.call(null,seq__53103_53146__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_53152,prov);


var G__53153 = cljs.core.next.call(null,seq__53103_53146__$1);
var G__53154 = null;
var G__53155 = (0);
var G__53156 = (0);
seq__53103_53136 = G__53153;
chunk__53104_53137 = G__53154;
count__53105_53138 = G__53155;
i__53106_53139 = G__53156;
continue;
}
} else {
}
}
break;
}


var G__53157 = cljs.core.next.call(null,seq__53095__$1);
var G__53158 = null;
var G__53159 = (0);
var G__53160 = (0);
seq__53095 = G__53157;
chunk__53096 = G__53158;
count__53097 = G__53159;
i__53098 = G__53160;
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
var seq__53161_53165 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__53162_53166 = null;
var count__53163_53167 = (0);
var i__53164_53168 = (0);
while(true){
if((i__53164_53168 < count__53163_53167)){
var ns_53169 = cljs.core._nth.call(null,chunk__53162_53166,i__53164_53168);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53169);


var G__53170 = seq__53161_53165;
var G__53171 = chunk__53162_53166;
var G__53172 = count__53163_53167;
var G__53173 = (i__53164_53168 + (1));
seq__53161_53165 = G__53170;
chunk__53162_53166 = G__53171;
count__53163_53167 = G__53172;
i__53164_53168 = G__53173;
continue;
} else {
var temp__5457__auto___53174 = cljs.core.seq.call(null,seq__53161_53165);
if(temp__5457__auto___53174){
var seq__53161_53175__$1 = temp__5457__auto___53174;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53161_53175__$1)){
var c__4337__auto___53176 = cljs.core.chunk_first.call(null,seq__53161_53175__$1);
var G__53177 = cljs.core.chunk_rest.call(null,seq__53161_53175__$1);
var G__53178 = c__4337__auto___53176;
var G__53179 = cljs.core.count.call(null,c__4337__auto___53176);
var G__53180 = (0);
seq__53161_53165 = G__53177;
chunk__53162_53166 = G__53178;
count__53163_53167 = G__53179;
i__53164_53168 = G__53180;
continue;
} else {
var ns_53181 = cljs.core.first.call(null,seq__53161_53175__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_53181);


var G__53182 = cljs.core.next.call(null,seq__53161_53175__$1);
var G__53183 = null;
var G__53184 = (0);
var G__53185 = (0);
seq__53161_53165 = G__53182;
chunk__53162_53166 = G__53183;
count__53163_53167 = G__53184;
i__53164_53168 = G__53185;
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
var G__53186__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__53186 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53187__i = 0, G__53187__a = new Array(arguments.length -  0);
while (G__53187__i < G__53187__a.length) {G__53187__a[G__53187__i] = arguments[G__53187__i + 0]; ++G__53187__i;}
  args = new cljs.core.IndexedSeq(G__53187__a,0,null);
} 
return G__53186__delegate.call(this,args);};
G__53186.cljs$lang$maxFixedArity = 0;
G__53186.cljs$lang$applyTo = (function (arglist__53188){
var args = cljs.core.seq(arglist__53188);
return G__53186__delegate(args);
});
G__53186.cljs$core$IFn$_invoke$arity$variadic = G__53186__delegate;
return G__53186;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__53189_SHARP_,p2__53190_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53189_SHARP_)].join('')),p2__53190_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__53191_SHARP_,p2__53192_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__53191_SHARP_)].join(''),p2__53192_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__53193 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__53193.addCallback(((function (G__53193){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__53193))
);

G__53193.addErrback(((function (G__53193){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__53193))
);

return G__53193;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e53194){if((e53194 instanceof Error)){
var e = e53194;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53194;

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
}catch (e53195){if((e53195 instanceof Error)){
var e = e53195;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e53195;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__53196 = cljs.core._EQ_;
var expr__53197 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__53196.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__53197))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__53196.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__53197))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__53196.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__53197))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__53196,expr__53197){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__53196,expr__53197))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__53199,callback){
var map__53200 = p__53199;
var map__53200__$1 = ((((!((map__53200 == null)))?(((((map__53200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53200):map__53200);
var file_msg = map__53200__$1;
var request_url = cljs.core.get.call(null,map__53200__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3936__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__53200,map__53200__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__53200,map__53200__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__){
return (function (state_53238){
var state_val_53239 = (state_53238[(1)]);
if((state_val_53239 === (7))){
var inst_53234 = (state_53238[(2)]);
var state_53238__$1 = state_53238;
var statearr_53240_53266 = state_53238__$1;
(statearr_53240_53266[(2)] = inst_53234);

(statearr_53240_53266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (1))){
var state_53238__$1 = state_53238;
var statearr_53241_53267 = state_53238__$1;
(statearr_53241_53267[(2)] = null);

(statearr_53241_53267[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (4))){
var inst_53204 = (state_53238[(7)]);
var inst_53204__$1 = (state_53238[(2)]);
var state_53238__$1 = (function (){var statearr_53242 = state_53238;
(statearr_53242[(7)] = inst_53204__$1);

return statearr_53242;
})();
if(cljs.core.truth_(inst_53204__$1)){
var statearr_53243_53268 = state_53238__$1;
(statearr_53243_53268[(1)] = (5));

} else {
var statearr_53244_53269 = state_53238__$1;
(statearr_53244_53269[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (15))){
var inst_53217 = (state_53238[(8)]);
var inst_53219 = (state_53238[(9)]);
var inst_53221 = inst_53219.call(null,inst_53217);
var state_53238__$1 = state_53238;
var statearr_53245_53270 = state_53238__$1;
(statearr_53245_53270[(2)] = inst_53221);

(statearr_53245_53270[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (13))){
var inst_53228 = (state_53238[(2)]);
var state_53238__$1 = state_53238;
var statearr_53246_53271 = state_53238__$1;
(statearr_53246_53271[(2)] = inst_53228);

(statearr_53246_53271[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (6))){
var state_53238__$1 = state_53238;
var statearr_53247_53272 = state_53238__$1;
(statearr_53247_53272[(2)] = null);

(statearr_53247_53272[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (17))){
var inst_53225 = (state_53238[(2)]);
var state_53238__$1 = state_53238;
var statearr_53248_53273 = state_53238__$1;
(statearr_53248_53273[(2)] = inst_53225);

(statearr_53248_53273[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (3))){
var inst_53236 = (state_53238[(2)]);
var state_53238__$1 = state_53238;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53238__$1,inst_53236);
} else {
if((state_val_53239 === (12))){
var state_53238__$1 = state_53238;
var statearr_53249_53274 = state_53238__$1;
(statearr_53249_53274[(2)] = null);

(statearr_53249_53274[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (2))){
var state_53238__$1 = state_53238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53238__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_53239 === (11))){
var inst_53209 = (state_53238[(10)]);
var inst_53215 = figwheel.client.file_reloading.blocking_load.call(null,inst_53209);
var state_53238__$1 = state_53238;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53238__$1,(14),inst_53215);
} else {
if((state_val_53239 === (9))){
var inst_53209 = (state_53238[(10)]);
var state_53238__$1 = state_53238;
if(cljs.core.truth_(inst_53209)){
var statearr_53250_53275 = state_53238__$1;
(statearr_53250_53275[(1)] = (11));

} else {
var statearr_53251_53276 = state_53238__$1;
(statearr_53251_53276[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (5))){
var inst_53210 = (state_53238[(11)]);
var inst_53204 = (state_53238[(7)]);
var inst_53209 = cljs.core.nth.call(null,inst_53204,(0),null);
var inst_53210__$1 = cljs.core.nth.call(null,inst_53204,(1),null);
var state_53238__$1 = (function (){var statearr_53252 = state_53238;
(statearr_53252[(11)] = inst_53210__$1);

(statearr_53252[(10)] = inst_53209);

return statearr_53252;
})();
if(cljs.core.truth_(inst_53210__$1)){
var statearr_53253_53277 = state_53238__$1;
(statearr_53253_53277[(1)] = (8));

} else {
var statearr_53254_53278 = state_53238__$1;
(statearr_53254_53278[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (14))){
var inst_53219 = (state_53238[(9)]);
var inst_53209 = (state_53238[(10)]);
var inst_53217 = (state_53238[(2)]);
var inst_53218 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_53219__$1 = cljs.core.get.call(null,inst_53218,inst_53209);
var state_53238__$1 = (function (){var statearr_53255 = state_53238;
(statearr_53255[(8)] = inst_53217);

(statearr_53255[(9)] = inst_53219__$1);

return statearr_53255;
})();
if(cljs.core.truth_(inst_53219__$1)){
var statearr_53256_53279 = state_53238__$1;
(statearr_53256_53279[(1)] = (15));

} else {
var statearr_53257_53280 = state_53238__$1;
(statearr_53257_53280[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (16))){
var inst_53217 = (state_53238[(8)]);
var inst_53223 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_53217);
var state_53238__$1 = state_53238;
var statearr_53258_53281 = state_53238__$1;
(statearr_53258_53281[(2)] = inst_53223);

(statearr_53258_53281[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (10))){
var inst_53230 = (state_53238[(2)]);
var state_53238__$1 = (function (){var statearr_53259 = state_53238;
(statearr_53259[(12)] = inst_53230);

return statearr_53259;
})();
var statearr_53260_53282 = state_53238__$1;
(statearr_53260_53282[(2)] = null);

(statearr_53260_53282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53239 === (8))){
var inst_53210 = (state_53238[(11)]);
var inst_53212 = eval(inst_53210);
var state_53238__$1 = state_53238;
var statearr_53261_53283 = state_53238__$1;
(statearr_53261_53283[(2)] = inst_53212);

(statearr_53261_53283[(1)] = (10));


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
});})(c__51025__auto__))
;
return ((function (switch__50721__auto__,c__51025__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__50722__auto__ = null;
var figwheel$client$file_reloading$state_machine__50722__auto____0 = (function (){
var statearr_53262 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53262[(0)] = figwheel$client$file_reloading$state_machine__50722__auto__);

(statearr_53262[(1)] = (1));

return statearr_53262;
});
var figwheel$client$file_reloading$state_machine__50722__auto____1 = (function (state_53238){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_53238);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e53263){if((e53263 instanceof Object)){
var ex__50725__auto__ = e53263;
var statearr_53264_53284 = state_53238;
(statearr_53264_53284[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53238);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53263;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53285 = state_53238;
state_53238 = G__53285;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__50722__auto__ = function(state_53238){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__50722__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__50722__auto____1.call(this,state_53238);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__50722__auto____0;
figwheel$client$file_reloading$state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__50722__auto____1;
return figwheel$client$file_reloading$state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__))
})();
var state__51027__auto__ = (function (){var statearr_53265 = f__51026__auto__.call(null);
(statearr_53265[(6)] = c__51025__auto__);

return statearr_53265;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__))
);

return c__51025__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__53287 = arguments.length;
switch (G__53287) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__53289,callback){
var map__53290 = p__53289;
var map__53290__$1 = ((((!((map__53290 == null)))?(((((map__53290.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53290.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53290):map__53290);
var file_msg = map__53290__$1;
var namespace = cljs.core.get.call(null,map__53290__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__53290,map__53290__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__53290,map__53290__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__53292){
var map__53293 = p__53292;
var map__53293__$1 = ((((!((map__53293 == null)))?(((((map__53293.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53293.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53293):map__53293);
var file_msg = map__53293__$1;
var namespace = cljs.core.get.call(null,map__53293__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__53295){
var map__53296 = p__53295;
var map__53296__$1 = ((((!((map__53296 == null)))?(((((map__53296.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53296.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53296):map__53296);
var file_msg = map__53296__$1;
var namespace = cljs.core.get.call(null,map__53296__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__53298,callback){
var map__53299 = p__53298;
var map__53299__$1 = ((((!((map__53299 == null)))?(((((map__53299.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53299.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53299):map__53299);
var file_msg = map__53299__$1;
var request_url = cljs.core.get.call(null,map__53299__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__53299__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__51025__auto___53349 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto___53349,out){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto___53349,out){
return (function (state_53334){
var state_val_53335 = (state_53334[(1)]);
if((state_val_53335 === (1))){
var inst_53308 = cljs.core.seq.call(null,files);
var inst_53309 = cljs.core.first.call(null,inst_53308);
var inst_53310 = cljs.core.next.call(null,inst_53308);
var inst_53311 = files;
var state_53334__$1 = (function (){var statearr_53336 = state_53334;
(statearr_53336[(7)] = inst_53310);

(statearr_53336[(8)] = inst_53311);

(statearr_53336[(9)] = inst_53309);

return statearr_53336;
})();
var statearr_53337_53350 = state_53334__$1;
(statearr_53337_53350[(2)] = null);

(statearr_53337_53350[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (2))){
var inst_53311 = (state_53334[(8)]);
var inst_53317 = (state_53334[(10)]);
var inst_53316 = cljs.core.seq.call(null,inst_53311);
var inst_53317__$1 = cljs.core.first.call(null,inst_53316);
var inst_53318 = cljs.core.next.call(null,inst_53316);
var inst_53319 = (inst_53317__$1 == null);
var inst_53320 = cljs.core.not.call(null,inst_53319);
var state_53334__$1 = (function (){var statearr_53338 = state_53334;
(statearr_53338[(10)] = inst_53317__$1);

(statearr_53338[(11)] = inst_53318);

return statearr_53338;
})();
if(inst_53320){
var statearr_53339_53351 = state_53334__$1;
(statearr_53339_53351[(1)] = (4));

} else {
var statearr_53340_53352 = state_53334__$1;
(statearr_53340_53352[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (3))){
var inst_53332 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53334__$1,inst_53332);
} else {
if((state_val_53335 === (4))){
var inst_53317 = (state_53334[(10)]);
var inst_53322 = figwheel.client.file_reloading.reload_js_file.call(null,inst_53317);
var state_53334__$1 = state_53334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53334__$1,(7),inst_53322);
} else {
if((state_val_53335 === (5))){
var inst_53328 = cljs.core.async.close_BANG_.call(null,out);
var state_53334__$1 = state_53334;
var statearr_53341_53353 = state_53334__$1;
(statearr_53341_53353[(2)] = inst_53328);

(statearr_53341_53353[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (6))){
var inst_53330 = (state_53334[(2)]);
var state_53334__$1 = state_53334;
var statearr_53342_53354 = state_53334__$1;
(statearr_53342_53354[(2)] = inst_53330);

(statearr_53342_53354[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53335 === (7))){
var inst_53318 = (state_53334[(11)]);
var inst_53324 = (state_53334[(2)]);
var inst_53325 = cljs.core.async.put_BANG_.call(null,out,inst_53324);
var inst_53311 = inst_53318;
var state_53334__$1 = (function (){var statearr_53343 = state_53334;
(statearr_53343[(8)] = inst_53311);

(statearr_53343[(12)] = inst_53325);

return statearr_53343;
})();
var statearr_53344_53355 = state_53334__$1;
(statearr_53344_53355[(2)] = null);

(statearr_53344_53355[(1)] = (2));


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
});})(c__51025__auto___53349,out))
;
return ((function (switch__50721__auto__,c__51025__auto___53349,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto____0 = (function (){
var statearr_53345 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53345[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto__);

(statearr_53345[(1)] = (1));

return statearr_53345;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto____1 = (function (state_53334){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_53334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e53346){if((e53346 instanceof Object)){
var ex__50725__auto__ = e53346;
var statearr_53347_53356 = state_53334;
(statearr_53347_53356[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53357 = state_53334;
state_53334 = G__53357;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto__ = function(state_53334){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto____1.call(this,state_53334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto___53349,out))
})();
var state__51027__auto__ = (function (){var statearr_53348 = f__51026__auto__.call(null);
(statearr_53348[(6)] = c__51025__auto___53349);

return statearr_53348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto___53349,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__53358,opts){
var map__53359 = p__53358;
var map__53359__$1 = ((((!((map__53359 == null)))?(((((map__53359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53359):map__53359);
var eval_body = cljs.core.get.call(null,map__53359__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__53359__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e53361){var e = e53361;
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
return (function (p1__53362_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53362_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__53363){
var vec__53364 = p__53363;
var k = cljs.core.nth.call(null,vec__53364,(0),null);
var v = cljs.core.nth.call(null,vec__53364,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__53367){
var vec__53368 = p__53367;
var k = cljs.core.nth.call(null,vec__53368,(0),null);
var v = cljs.core.nth.call(null,vec__53368,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__53374,p__53375){
var map__53376 = p__53374;
var map__53376__$1 = ((((!((map__53376 == null)))?(((((map__53376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53376):map__53376);
var opts = map__53376__$1;
var before_jsload = cljs.core.get.call(null,map__53376__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__53376__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__53376__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__53377 = p__53375;
var map__53377__$1 = ((((!((map__53377 == null)))?(((((map__53377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53377):map__53377);
var msg = map__53377__$1;
var files = cljs.core.get.call(null,map__53377__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__53377__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__53377__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__51025__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__51026__auto__ = (function (){var switch__50721__auto__ = ((function (c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_53531){
var state_val_53532 = (state_53531[(1)]);
if((state_val_53532 === (7))){
var inst_53394 = (state_53531[(7)]);
var inst_53393 = (state_53531[(8)]);
var inst_53391 = (state_53531[(9)]);
var inst_53392 = (state_53531[(10)]);
var inst_53399 = cljs.core._nth.call(null,inst_53392,inst_53394);
var inst_53400 = figwheel.client.file_reloading.eval_body.call(null,inst_53399,opts);
var inst_53401 = (inst_53394 + (1));
var tmp53533 = inst_53393;
var tmp53534 = inst_53391;
var tmp53535 = inst_53392;
var inst_53391__$1 = tmp53534;
var inst_53392__$1 = tmp53535;
var inst_53393__$1 = tmp53533;
var inst_53394__$1 = inst_53401;
var state_53531__$1 = (function (){var statearr_53536 = state_53531;
(statearr_53536[(11)] = inst_53400);

(statearr_53536[(7)] = inst_53394__$1);

(statearr_53536[(8)] = inst_53393__$1);

(statearr_53536[(9)] = inst_53391__$1);

(statearr_53536[(10)] = inst_53392__$1);

return statearr_53536;
})();
var statearr_53537_53620 = state_53531__$1;
(statearr_53537_53620[(2)] = null);

(statearr_53537_53620[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (20))){
var inst_53434 = (state_53531[(12)]);
var inst_53442 = figwheel.client.file_reloading.sort_files.call(null,inst_53434);
var state_53531__$1 = state_53531;
var statearr_53538_53621 = state_53531__$1;
(statearr_53538_53621[(2)] = inst_53442);

(statearr_53538_53621[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (27))){
var state_53531__$1 = state_53531;
var statearr_53539_53622 = state_53531__$1;
(statearr_53539_53622[(2)] = null);

(statearr_53539_53622[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (1))){
var inst_53383 = (state_53531[(13)]);
var inst_53380 = before_jsload.call(null,files);
var inst_53381 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_53382 = (function (){return ((function (inst_53383,inst_53380,inst_53381,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53371_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53371_SHARP_);
});
;})(inst_53383,inst_53380,inst_53381,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53383__$1 = cljs.core.filter.call(null,inst_53382,files);
var inst_53384 = cljs.core.not_empty.call(null,inst_53383__$1);
var state_53531__$1 = (function (){var statearr_53540 = state_53531;
(statearr_53540[(14)] = inst_53380);

(statearr_53540[(13)] = inst_53383__$1);

(statearr_53540[(15)] = inst_53381);

return statearr_53540;
})();
if(cljs.core.truth_(inst_53384)){
var statearr_53541_53623 = state_53531__$1;
(statearr_53541_53623[(1)] = (2));

} else {
var statearr_53542_53624 = state_53531__$1;
(statearr_53542_53624[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (24))){
var state_53531__$1 = state_53531;
var statearr_53543_53625 = state_53531__$1;
(statearr_53543_53625[(2)] = null);

(statearr_53543_53625[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (39))){
var inst_53484 = (state_53531[(16)]);
var state_53531__$1 = state_53531;
var statearr_53544_53626 = state_53531__$1;
(statearr_53544_53626[(2)] = inst_53484);

(statearr_53544_53626[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (46))){
var inst_53526 = (state_53531[(2)]);
var state_53531__$1 = state_53531;
var statearr_53545_53627 = state_53531__$1;
(statearr_53545_53627[(2)] = inst_53526);

(statearr_53545_53627[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (4))){
var inst_53428 = (state_53531[(2)]);
var inst_53429 = cljs.core.List.EMPTY;
var inst_53430 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_53429);
var inst_53431 = (function (){return ((function (inst_53428,inst_53429,inst_53430,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53372_SHARP_){
var and__3925__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__53372_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__53372_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__53372_SHARP_))));
} else {
return and__3925__auto__;
}
});
;})(inst_53428,inst_53429,inst_53430,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53432 = cljs.core.filter.call(null,inst_53431,files);
var inst_53433 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_53434 = cljs.core.concat.call(null,inst_53432,inst_53433);
var state_53531__$1 = (function (){var statearr_53546 = state_53531;
(statearr_53546[(17)] = inst_53428);

(statearr_53546[(18)] = inst_53430);

(statearr_53546[(12)] = inst_53434);

return statearr_53546;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_53547_53628 = state_53531__$1;
(statearr_53547_53628[(1)] = (16));

} else {
var statearr_53548_53629 = state_53531__$1;
(statearr_53548_53629[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (15))){
var inst_53418 = (state_53531[(2)]);
var state_53531__$1 = state_53531;
var statearr_53549_53630 = state_53531__$1;
(statearr_53549_53630[(2)] = inst_53418);

(statearr_53549_53630[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (21))){
var inst_53444 = (state_53531[(19)]);
var inst_53444__$1 = (state_53531[(2)]);
var inst_53445 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_53444__$1);
var state_53531__$1 = (function (){var statearr_53550 = state_53531;
(statearr_53550[(19)] = inst_53444__$1);

return statearr_53550;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53531__$1,(22),inst_53445);
} else {
if((state_val_53532 === (31))){
var inst_53529 = (state_53531[(2)]);
var state_53531__$1 = state_53531;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53531__$1,inst_53529);
} else {
if((state_val_53532 === (32))){
var inst_53484 = (state_53531[(16)]);
var inst_53489 = inst_53484.cljs$lang$protocol_mask$partition0$;
var inst_53490 = (inst_53489 & (64));
var inst_53491 = inst_53484.cljs$core$ISeq$;
var inst_53492 = (cljs.core.PROTOCOL_SENTINEL === inst_53491);
var inst_53493 = ((inst_53490) || (inst_53492));
var state_53531__$1 = state_53531;
if(cljs.core.truth_(inst_53493)){
var statearr_53551_53631 = state_53531__$1;
(statearr_53551_53631[(1)] = (35));

} else {
var statearr_53552_53632 = state_53531__$1;
(statearr_53552_53632[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (40))){
var inst_53506 = (state_53531[(20)]);
var inst_53505 = (state_53531[(2)]);
var inst_53506__$1 = cljs.core.get.call(null,inst_53505,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_53507 = cljs.core.get.call(null,inst_53505,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_53508 = cljs.core.not_empty.call(null,inst_53506__$1);
var state_53531__$1 = (function (){var statearr_53553 = state_53531;
(statearr_53553[(20)] = inst_53506__$1);

(statearr_53553[(21)] = inst_53507);

return statearr_53553;
})();
if(cljs.core.truth_(inst_53508)){
var statearr_53554_53633 = state_53531__$1;
(statearr_53554_53633[(1)] = (41));

} else {
var statearr_53555_53634 = state_53531__$1;
(statearr_53555_53634[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (33))){
var state_53531__$1 = state_53531;
var statearr_53556_53635 = state_53531__$1;
(statearr_53556_53635[(2)] = false);

(statearr_53556_53635[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (13))){
var inst_53404 = (state_53531[(22)]);
var inst_53408 = cljs.core.chunk_first.call(null,inst_53404);
var inst_53409 = cljs.core.chunk_rest.call(null,inst_53404);
var inst_53410 = cljs.core.count.call(null,inst_53408);
var inst_53391 = inst_53409;
var inst_53392 = inst_53408;
var inst_53393 = inst_53410;
var inst_53394 = (0);
var state_53531__$1 = (function (){var statearr_53557 = state_53531;
(statearr_53557[(7)] = inst_53394);

(statearr_53557[(8)] = inst_53393);

(statearr_53557[(9)] = inst_53391);

(statearr_53557[(10)] = inst_53392);

return statearr_53557;
})();
var statearr_53558_53636 = state_53531__$1;
(statearr_53558_53636[(2)] = null);

(statearr_53558_53636[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (22))){
var inst_53444 = (state_53531[(19)]);
var inst_53447 = (state_53531[(23)]);
var inst_53452 = (state_53531[(24)]);
var inst_53448 = (state_53531[(25)]);
var inst_53447__$1 = (state_53531[(2)]);
var inst_53448__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53447__$1);
var inst_53449 = (function (){var all_files = inst_53444;
var res_SINGLEQUOTE_ = inst_53447__$1;
var res = inst_53448__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_53444,inst_53447,inst_53452,inst_53448,inst_53447__$1,inst_53448__$1,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__53373_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__53373_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_53444,inst_53447,inst_53452,inst_53448,inst_53447__$1,inst_53448__$1,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53450 = cljs.core.filter.call(null,inst_53449,inst_53447__$1);
var inst_53451 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_53452__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_53451);
var inst_53453 = cljs.core.not_empty.call(null,inst_53452__$1);
var state_53531__$1 = (function (){var statearr_53559 = state_53531;
(statearr_53559[(23)] = inst_53447__$1);

(statearr_53559[(26)] = inst_53450);

(statearr_53559[(24)] = inst_53452__$1);

(statearr_53559[(25)] = inst_53448__$1);

return statearr_53559;
})();
if(cljs.core.truth_(inst_53453)){
var statearr_53560_53637 = state_53531__$1;
(statearr_53560_53637[(1)] = (23));

} else {
var statearr_53561_53638 = state_53531__$1;
(statearr_53561_53638[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (36))){
var state_53531__$1 = state_53531;
var statearr_53562_53639 = state_53531__$1;
(statearr_53562_53639[(2)] = false);

(statearr_53562_53639[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (41))){
var inst_53506 = (state_53531[(20)]);
var inst_53510 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_53511 = cljs.core.map.call(null,inst_53510,inst_53506);
var inst_53512 = cljs.core.pr_str.call(null,inst_53511);
var inst_53513 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53512)].join('');
var inst_53514 = figwheel.client.utils.log.call(null,inst_53513);
var state_53531__$1 = state_53531;
var statearr_53563_53640 = state_53531__$1;
(statearr_53563_53640[(2)] = inst_53514);

(statearr_53563_53640[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (43))){
var inst_53507 = (state_53531[(21)]);
var inst_53517 = (state_53531[(2)]);
var inst_53518 = cljs.core.not_empty.call(null,inst_53507);
var state_53531__$1 = (function (){var statearr_53564 = state_53531;
(statearr_53564[(27)] = inst_53517);

return statearr_53564;
})();
if(cljs.core.truth_(inst_53518)){
var statearr_53565_53641 = state_53531__$1;
(statearr_53565_53641[(1)] = (44));

} else {
var statearr_53566_53642 = state_53531__$1;
(statearr_53566_53642[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (29))){
var inst_53444 = (state_53531[(19)]);
var inst_53447 = (state_53531[(23)]);
var inst_53484 = (state_53531[(16)]);
var inst_53450 = (state_53531[(26)]);
var inst_53452 = (state_53531[(24)]);
var inst_53448 = (state_53531[(25)]);
var inst_53480 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_53483 = (function (){var all_files = inst_53444;
var res_SINGLEQUOTE_ = inst_53447;
var res = inst_53448;
var files_not_loaded = inst_53450;
var dependencies_that_loaded = inst_53452;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53444,inst_53447,inst_53484,inst_53450,inst_53452,inst_53448,inst_53480,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53482){
var map__53567 = p__53482;
var map__53567__$1 = ((((!((map__53567 == null)))?(((((map__53567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53567):map__53567);
var namespace = cljs.core.get.call(null,map__53567__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53444,inst_53447,inst_53484,inst_53450,inst_53452,inst_53448,inst_53480,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53484__$1 = cljs.core.group_by.call(null,inst_53483,inst_53450);
var inst_53486 = (inst_53484__$1 == null);
var inst_53487 = cljs.core.not.call(null,inst_53486);
var state_53531__$1 = (function (){var statearr_53569 = state_53531;
(statearr_53569[(28)] = inst_53480);

(statearr_53569[(16)] = inst_53484__$1);

return statearr_53569;
})();
if(inst_53487){
var statearr_53570_53643 = state_53531__$1;
(statearr_53570_53643[(1)] = (32));

} else {
var statearr_53571_53644 = state_53531__$1;
(statearr_53571_53644[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (44))){
var inst_53507 = (state_53531[(21)]);
var inst_53520 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_53507);
var inst_53521 = cljs.core.pr_str.call(null,inst_53520);
var inst_53522 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_53521)].join('');
var inst_53523 = figwheel.client.utils.log.call(null,inst_53522);
var state_53531__$1 = state_53531;
var statearr_53572_53645 = state_53531__$1;
(statearr_53572_53645[(2)] = inst_53523);

(statearr_53572_53645[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (6))){
var inst_53425 = (state_53531[(2)]);
var state_53531__$1 = state_53531;
var statearr_53573_53646 = state_53531__$1;
(statearr_53573_53646[(2)] = inst_53425);

(statearr_53573_53646[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (28))){
var inst_53450 = (state_53531[(26)]);
var inst_53477 = (state_53531[(2)]);
var inst_53478 = cljs.core.not_empty.call(null,inst_53450);
var state_53531__$1 = (function (){var statearr_53574 = state_53531;
(statearr_53574[(29)] = inst_53477);

return statearr_53574;
})();
if(cljs.core.truth_(inst_53478)){
var statearr_53575_53647 = state_53531__$1;
(statearr_53575_53647[(1)] = (29));

} else {
var statearr_53576_53648 = state_53531__$1;
(statearr_53576_53648[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (25))){
var inst_53448 = (state_53531[(25)]);
var inst_53464 = (state_53531[(2)]);
var inst_53465 = cljs.core.not_empty.call(null,inst_53448);
var state_53531__$1 = (function (){var statearr_53577 = state_53531;
(statearr_53577[(30)] = inst_53464);

return statearr_53577;
})();
if(cljs.core.truth_(inst_53465)){
var statearr_53578_53649 = state_53531__$1;
(statearr_53578_53649[(1)] = (26));

} else {
var statearr_53579_53650 = state_53531__$1;
(statearr_53579_53650[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (34))){
var inst_53500 = (state_53531[(2)]);
var state_53531__$1 = state_53531;
if(cljs.core.truth_(inst_53500)){
var statearr_53580_53651 = state_53531__$1;
(statearr_53580_53651[(1)] = (38));

} else {
var statearr_53581_53652 = state_53531__$1;
(statearr_53581_53652[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (17))){
var state_53531__$1 = state_53531;
var statearr_53582_53653 = state_53531__$1;
(statearr_53582_53653[(2)] = recompile_dependents);

(statearr_53582_53653[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (3))){
var state_53531__$1 = state_53531;
var statearr_53583_53654 = state_53531__$1;
(statearr_53583_53654[(2)] = null);

(statearr_53583_53654[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (12))){
var inst_53421 = (state_53531[(2)]);
var state_53531__$1 = state_53531;
var statearr_53584_53655 = state_53531__$1;
(statearr_53584_53655[(2)] = inst_53421);

(statearr_53584_53655[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (2))){
var inst_53383 = (state_53531[(13)]);
var inst_53390 = cljs.core.seq.call(null,inst_53383);
var inst_53391 = inst_53390;
var inst_53392 = null;
var inst_53393 = (0);
var inst_53394 = (0);
var state_53531__$1 = (function (){var statearr_53585 = state_53531;
(statearr_53585[(7)] = inst_53394);

(statearr_53585[(8)] = inst_53393);

(statearr_53585[(9)] = inst_53391);

(statearr_53585[(10)] = inst_53392);

return statearr_53585;
})();
var statearr_53586_53656 = state_53531__$1;
(statearr_53586_53656[(2)] = null);

(statearr_53586_53656[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (23))){
var inst_53444 = (state_53531[(19)]);
var inst_53447 = (state_53531[(23)]);
var inst_53450 = (state_53531[(26)]);
var inst_53452 = (state_53531[(24)]);
var inst_53448 = (state_53531[(25)]);
var inst_53455 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_53457 = (function (){var all_files = inst_53444;
var res_SINGLEQUOTE_ = inst_53447;
var res = inst_53448;
var files_not_loaded = inst_53450;
var dependencies_that_loaded = inst_53452;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53444,inst_53447,inst_53450,inst_53452,inst_53448,inst_53455,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53456){
var map__53587 = p__53456;
var map__53587__$1 = ((((!((map__53587 == null)))?(((((map__53587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53587):map__53587);
var request_url = cljs.core.get.call(null,map__53587__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53444,inst_53447,inst_53450,inst_53452,inst_53448,inst_53455,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53458 = cljs.core.reverse.call(null,inst_53452);
var inst_53459 = cljs.core.map.call(null,inst_53457,inst_53458);
var inst_53460 = cljs.core.pr_str.call(null,inst_53459);
var inst_53461 = figwheel.client.utils.log.call(null,inst_53460);
var state_53531__$1 = (function (){var statearr_53589 = state_53531;
(statearr_53589[(31)] = inst_53455);

return statearr_53589;
})();
var statearr_53590_53657 = state_53531__$1;
(statearr_53590_53657[(2)] = inst_53461);

(statearr_53590_53657[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (35))){
var state_53531__$1 = state_53531;
var statearr_53591_53658 = state_53531__$1;
(statearr_53591_53658[(2)] = true);

(statearr_53591_53658[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (19))){
var inst_53434 = (state_53531[(12)]);
var inst_53440 = figwheel.client.file_reloading.expand_files.call(null,inst_53434);
var state_53531__$1 = state_53531;
var statearr_53592_53659 = state_53531__$1;
(statearr_53592_53659[(2)] = inst_53440);

(statearr_53592_53659[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (11))){
var state_53531__$1 = state_53531;
var statearr_53593_53660 = state_53531__$1;
(statearr_53593_53660[(2)] = null);

(statearr_53593_53660[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (9))){
var inst_53423 = (state_53531[(2)]);
var state_53531__$1 = state_53531;
var statearr_53594_53661 = state_53531__$1;
(statearr_53594_53661[(2)] = inst_53423);

(statearr_53594_53661[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (5))){
var inst_53394 = (state_53531[(7)]);
var inst_53393 = (state_53531[(8)]);
var inst_53396 = (inst_53394 < inst_53393);
var inst_53397 = inst_53396;
var state_53531__$1 = state_53531;
if(cljs.core.truth_(inst_53397)){
var statearr_53595_53662 = state_53531__$1;
(statearr_53595_53662[(1)] = (7));

} else {
var statearr_53596_53663 = state_53531__$1;
(statearr_53596_53663[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (14))){
var inst_53404 = (state_53531[(22)]);
var inst_53413 = cljs.core.first.call(null,inst_53404);
var inst_53414 = figwheel.client.file_reloading.eval_body.call(null,inst_53413,opts);
var inst_53415 = cljs.core.next.call(null,inst_53404);
var inst_53391 = inst_53415;
var inst_53392 = null;
var inst_53393 = (0);
var inst_53394 = (0);
var state_53531__$1 = (function (){var statearr_53597 = state_53531;
(statearr_53597[(7)] = inst_53394);

(statearr_53597[(8)] = inst_53393);

(statearr_53597[(9)] = inst_53391);

(statearr_53597[(10)] = inst_53392);

(statearr_53597[(32)] = inst_53414);

return statearr_53597;
})();
var statearr_53598_53664 = state_53531__$1;
(statearr_53598_53664[(2)] = null);

(statearr_53598_53664[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (45))){
var state_53531__$1 = state_53531;
var statearr_53599_53665 = state_53531__$1;
(statearr_53599_53665[(2)] = null);

(statearr_53599_53665[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (26))){
var inst_53444 = (state_53531[(19)]);
var inst_53447 = (state_53531[(23)]);
var inst_53450 = (state_53531[(26)]);
var inst_53452 = (state_53531[(24)]);
var inst_53448 = (state_53531[(25)]);
var inst_53467 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_53469 = (function (){var all_files = inst_53444;
var res_SINGLEQUOTE_ = inst_53447;
var res = inst_53448;
var files_not_loaded = inst_53450;
var dependencies_that_loaded = inst_53452;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53444,inst_53447,inst_53450,inst_53452,inst_53448,inst_53467,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__53468){
var map__53600 = p__53468;
var map__53600__$1 = ((((!((map__53600 == null)))?(((((map__53600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53600):map__53600);
var namespace = cljs.core.get.call(null,map__53600__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__53600__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53444,inst_53447,inst_53450,inst_53452,inst_53448,inst_53467,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53470 = cljs.core.map.call(null,inst_53469,inst_53448);
var inst_53471 = cljs.core.pr_str.call(null,inst_53470);
var inst_53472 = figwheel.client.utils.log.call(null,inst_53471);
var inst_53473 = (function (){var all_files = inst_53444;
var res_SINGLEQUOTE_ = inst_53447;
var res = inst_53448;
var files_not_loaded = inst_53450;
var dependencies_that_loaded = inst_53452;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53444,inst_53447,inst_53450,inst_53452,inst_53448,inst_53467,inst_53469,inst_53470,inst_53471,inst_53472,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_53444,inst_53447,inst_53450,inst_53452,inst_53448,inst_53467,inst_53469,inst_53470,inst_53471,inst_53472,state_val_53532,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_53474 = setTimeout(inst_53473,(10));
var state_53531__$1 = (function (){var statearr_53602 = state_53531;
(statearr_53602[(33)] = inst_53472);

(statearr_53602[(34)] = inst_53467);

return statearr_53602;
})();
var statearr_53603_53666 = state_53531__$1;
(statearr_53603_53666[(2)] = inst_53474);

(statearr_53603_53666[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (16))){
var state_53531__$1 = state_53531;
var statearr_53604_53667 = state_53531__$1;
(statearr_53604_53667[(2)] = reload_dependents);

(statearr_53604_53667[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (38))){
var inst_53484 = (state_53531[(16)]);
var inst_53502 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53484);
var state_53531__$1 = state_53531;
var statearr_53605_53668 = state_53531__$1;
(statearr_53605_53668[(2)] = inst_53502);

(statearr_53605_53668[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (30))){
var state_53531__$1 = state_53531;
var statearr_53606_53669 = state_53531__$1;
(statearr_53606_53669[(2)] = null);

(statearr_53606_53669[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (10))){
var inst_53404 = (state_53531[(22)]);
var inst_53406 = cljs.core.chunked_seq_QMARK_.call(null,inst_53404);
var state_53531__$1 = state_53531;
if(inst_53406){
var statearr_53607_53670 = state_53531__$1;
(statearr_53607_53670[(1)] = (13));

} else {
var statearr_53608_53671 = state_53531__$1;
(statearr_53608_53671[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (18))){
var inst_53438 = (state_53531[(2)]);
var state_53531__$1 = state_53531;
if(cljs.core.truth_(inst_53438)){
var statearr_53609_53672 = state_53531__$1;
(statearr_53609_53672[(1)] = (19));

} else {
var statearr_53610_53673 = state_53531__$1;
(statearr_53610_53673[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (42))){
var state_53531__$1 = state_53531;
var statearr_53611_53674 = state_53531__$1;
(statearr_53611_53674[(2)] = null);

(statearr_53611_53674[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (37))){
var inst_53497 = (state_53531[(2)]);
var state_53531__$1 = state_53531;
var statearr_53612_53675 = state_53531__$1;
(statearr_53612_53675[(2)] = inst_53497);

(statearr_53612_53675[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53532 === (8))){
var inst_53404 = (state_53531[(22)]);
var inst_53391 = (state_53531[(9)]);
var inst_53404__$1 = cljs.core.seq.call(null,inst_53391);
var state_53531__$1 = (function (){var statearr_53613 = state_53531;
(statearr_53613[(22)] = inst_53404__$1);

return statearr_53613;
})();
if(inst_53404__$1){
var statearr_53614_53676 = state_53531__$1;
(statearr_53614_53676[(1)] = (10));

} else {
var statearr_53615_53677 = state_53531__$1;
(statearr_53615_53677[(1)] = (11));

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
});})(c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__50721__auto__,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto____0 = (function (){
var statearr_53616 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53616[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto__);

(statearr_53616[(1)] = (1));

return statearr_53616;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto____1 = (function (state_53531){
while(true){
var ret_value__50723__auto__ = (function (){try{while(true){
var result__50724__auto__ = switch__50721__auto__.call(null,state_53531);
if(cljs.core.keyword_identical_QMARK_.call(null,result__50724__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__50724__auto__;
}
break;
}
}catch (e53617){if((e53617 instanceof Object)){
var ex__50725__auto__ = e53617;
var statearr_53618_53678 = state_53531;
(statearr_53618_53678[(5)] = ex__50725__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53531);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53617;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__50723__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53679 = state_53531;
state_53531 = G__53679;
continue;
} else {
return ret_value__50723__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto__ = function(state_53531){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto____1.call(this,state_53531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__50722__auto__;
})()
;})(switch__50721__auto__,c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__51027__auto__ = (function (){var statearr_53619 = f__51026__auto__.call(null);
(statearr_53619[(6)] = c__51025__auto__);

return statearr_53619;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__51027__auto__);
});})(c__51025__auto__,map__53376,map__53376__$1,opts,before_jsload,on_jsload,reload_dependents,map__53377,map__53377__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__51025__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__53682,link){
var map__53683 = p__53682;
var map__53683__$1 = ((((!((map__53683 == null)))?(((((map__53683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53683.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53683):map__53683);
var file = cljs.core.get.call(null,map__53683__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__53683,map__53683__$1,file){
return (function (p1__53680_SHARP_,p2__53681_SHARP_){
if(cljs.core._EQ_.call(null,p1__53680_SHARP_,p2__53681_SHARP_)){
return p1__53680_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__53683,map__53683__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__53686){
var map__53687 = p__53686;
var map__53687__$1 = ((((!((map__53687 == null)))?(((((map__53687.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53687.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53687):map__53687);
var match_length = cljs.core.get.call(null,map__53687__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__53687__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__53685_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__53685_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__53689_SHARP_,p2__53690_SHARP_){
return cljs.core.assoc.call(null,p1__53689_SHARP_,cljs.core.get.call(null,p2__53690_SHARP_,key),p2__53690_SHARP_);
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
var loaded_f_datas_53691 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_53691);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_53691);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__53692,p__53693){
var map__53694 = p__53692;
var map__53694__$1 = ((((!((map__53694 == null)))?(((((map__53694.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53694.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53694):map__53694);
var on_cssload = cljs.core.get.call(null,map__53694__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__53695 = p__53693;
var map__53695__$1 = ((((!((map__53695 == null)))?(((((map__53695.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53695.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53695):map__53695);
var files_msg = map__53695__$1;
var files = cljs.core.get.call(null,map__53695__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1552956593391
