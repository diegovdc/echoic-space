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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36233_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36233_SHARP_));
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
var seq__36234 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36235 = null;
var count__36236 = (0);
var i__36237 = (0);
while(true){
if((i__36237 < count__36236)){
var n = cljs.core._nth.call(null,chunk__36235,i__36237);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36238 = seq__36234;
var G__36239 = chunk__36235;
var G__36240 = count__36236;
var G__36241 = (i__36237 + (1));
seq__36234 = G__36238;
chunk__36235 = G__36239;
count__36236 = G__36240;
i__36237 = G__36241;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36234);
if(temp__5457__auto__){
var seq__36234__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36234__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__36234__$1);
var G__36242 = cljs.core.chunk_rest.call(null,seq__36234__$1);
var G__36243 = c__4337__auto__;
var G__36244 = cljs.core.count.call(null,c__4337__auto__);
var G__36245 = (0);
seq__36234 = G__36242;
chunk__36235 = G__36243;
count__36236 = G__36244;
i__36237 = G__36245;
continue;
} else {
var n = cljs.core.first.call(null,seq__36234__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__36246 = cljs.core.next.call(null,seq__36234__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__36234 = G__36246;
chunk__36235 = G__36247;
count__36236 = G__36248;
i__36237 = G__36249;
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
return cljs.core.some.call(null,(function (p__36250){
var vec__36251 = p__36250;
var _ = cljs.core.nth.call(null,vec__36251,(0),null);
var v = cljs.core.nth.call(null,vec__36251,(1),null);
var and__3925__auto__ = v;
if(cljs.core.truth_(and__3925__auto__)){
return v.call(null,dep);
} else {
return and__3925__auto__;
}
}),cljs.core.filter.call(null,(function (p__36254){
var vec__36255 = p__36254;
var k = cljs.core.nth.call(null,vec__36255,(0),null);
var v = cljs.core.nth.call(null,vec__36255,(1),null);
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

var seq__36267_36275 = cljs.core.seq.call(null,deps);
var chunk__36268_36276 = null;
var count__36269_36277 = (0);
var i__36270_36278 = (0);
while(true){
if((i__36270_36278 < count__36269_36277)){
var dep_36279 = cljs.core._nth.call(null,chunk__36268_36276,i__36270_36278);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_36279;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36279));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36279,(depth + (1)),state);
} else {
}


var G__36280 = seq__36267_36275;
var G__36281 = chunk__36268_36276;
var G__36282 = count__36269_36277;
var G__36283 = (i__36270_36278 + (1));
seq__36267_36275 = G__36280;
chunk__36268_36276 = G__36281;
count__36269_36277 = G__36282;
i__36270_36278 = G__36283;
continue;
} else {
var temp__5457__auto___36284 = cljs.core.seq.call(null,seq__36267_36275);
if(temp__5457__auto___36284){
var seq__36267_36285__$1 = temp__5457__auto___36284;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36267_36285__$1)){
var c__4337__auto___36286 = cljs.core.chunk_first.call(null,seq__36267_36285__$1);
var G__36287 = cljs.core.chunk_rest.call(null,seq__36267_36285__$1);
var G__36288 = c__4337__auto___36286;
var G__36289 = cljs.core.count.call(null,c__4337__auto___36286);
var G__36290 = (0);
seq__36267_36275 = G__36287;
chunk__36268_36276 = G__36288;
count__36269_36277 = G__36289;
i__36270_36278 = G__36290;
continue;
} else {
var dep_36291 = cljs.core.first.call(null,seq__36267_36285__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_36291;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_36291));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_36291,(depth + (1)),state);
} else {
}


var G__36292 = cljs.core.next.call(null,seq__36267_36285__$1);
var G__36293 = null;
var G__36294 = (0);
var G__36295 = (0);
seq__36267_36275 = G__36292;
chunk__36268_36276 = G__36293;
count__36269_36277 = G__36294;
i__36270_36278 = G__36295;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36271){
var vec__36272 = p__36271;
var seq__36273 = cljs.core.seq.call(null,vec__36272);
var first__36274 = cljs.core.first.call(null,seq__36273);
var seq__36273__$1 = cljs.core.next.call(null,seq__36273);
var x = first__36274;
var xs = seq__36273__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36272,seq__36273,first__36274,seq__36273__$1,x,xs,get_deps__$1){
return (function (p1__36258_SHARP_){
return clojure.set.difference.call(null,p1__36258_SHARP_,x);
});})(vec__36272,seq__36273,first__36274,seq__36273__$1,x,xs,get_deps__$1))
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
var seq__36296 = cljs.core.seq.call(null,provides);
var chunk__36297 = null;
var count__36298 = (0);
var i__36299 = (0);
while(true){
if((i__36299 < count__36298)){
var prov = cljs.core._nth.call(null,chunk__36297,i__36299);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36300_36308 = cljs.core.seq.call(null,requires);
var chunk__36301_36309 = null;
var count__36302_36310 = (0);
var i__36303_36311 = (0);
while(true){
if((i__36303_36311 < count__36302_36310)){
var req_36312 = cljs.core._nth.call(null,chunk__36301_36309,i__36303_36311);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36312,prov);


var G__36313 = seq__36300_36308;
var G__36314 = chunk__36301_36309;
var G__36315 = count__36302_36310;
var G__36316 = (i__36303_36311 + (1));
seq__36300_36308 = G__36313;
chunk__36301_36309 = G__36314;
count__36302_36310 = G__36315;
i__36303_36311 = G__36316;
continue;
} else {
var temp__5457__auto___36317 = cljs.core.seq.call(null,seq__36300_36308);
if(temp__5457__auto___36317){
var seq__36300_36318__$1 = temp__5457__auto___36317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36300_36318__$1)){
var c__4337__auto___36319 = cljs.core.chunk_first.call(null,seq__36300_36318__$1);
var G__36320 = cljs.core.chunk_rest.call(null,seq__36300_36318__$1);
var G__36321 = c__4337__auto___36319;
var G__36322 = cljs.core.count.call(null,c__4337__auto___36319);
var G__36323 = (0);
seq__36300_36308 = G__36320;
chunk__36301_36309 = G__36321;
count__36302_36310 = G__36322;
i__36303_36311 = G__36323;
continue;
} else {
var req_36324 = cljs.core.first.call(null,seq__36300_36318__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36324,prov);


var G__36325 = cljs.core.next.call(null,seq__36300_36318__$1);
var G__36326 = null;
var G__36327 = (0);
var G__36328 = (0);
seq__36300_36308 = G__36325;
chunk__36301_36309 = G__36326;
count__36302_36310 = G__36327;
i__36303_36311 = G__36328;
continue;
}
} else {
}
}
break;
}


var G__36329 = seq__36296;
var G__36330 = chunk__36297;
var G__36331 = count__36298;
var G__36332 = (i__36299 + (1));
seq__36296 = G__36329;
chunk__36297 = G__36330;
count__36298 = G__36331;
i__36299 = G__36332;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__36296);
if(temp__5457__auto__){
var seq__36296__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36296__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__36296__$1);
var G__36333 = cljs.core.chunk_rest.call(null,seq__36296__$1);
var G__36334 = c__4337__auto__;
var G__36335 = cljs.core.count.call(null,c__4337__auto__);
var G__36336 = (0);
seq__36296 = G__36333;
chunk__36297 = G__36334;
count__36298 = G__36335;
i__36299 = G__36336;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36296__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36304_36337 = cljs.core.seq.call(null,requires);
var chunk__36305_36338 = null;
var count__36306_36339 = (0);
var i__36307_36340 = (0);
while(true){
if((i__36307_36340 < count__36306_36339)){
var req_36341 = cljs.core._nth.call(null,chunk__36305_36338,i__36307_36340);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36341,prov);


var G__36342 = seq__36304_36337;
var G__36343 = chunk__36305_36338;
var G__36344 = count__36306_36339;
var G__36345 = (i__36307_36340 + (1));
seq__36304_36337 = G__36342;
chunk__36305_36338 = G__36343;
count__36306_36339 = G__36344;
i__36307_36340 = G__36345;
continue;
} else {
var temp__5457__auto___36346__$1 = cljs.core.seq.call(null,seq__36304_36337);
if(temp__5457__auto___36346__$1){
var seq__36304_36347__$1 = temp__5457__auto___36346__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36304_36347__$1)){
var c__4337__auto___36348 = cljs.core.chunk_first.call(null,seq__36304_36347__$1);
var G__36349 = cljs.core.chunk_rest.call(null,seq__36304_36347__$1);
var G__36350 = c__4337__auto___36348;
var G__36351 = cljs.core.count.call(null,c__4337__auto___36348);
var G__36352 = (0);
seq__36304_36337 = G__36349;
chunk__36305_36338 = G__36350;
count__36306_36339 = G__36351;
i__36307_36340 = G__36352;
continue;
} else {
var req_36353 = cljs.core.first.call(null,seq__36304_36347__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36353,prov);


var G__36354 = cljs.core.next.call(null,seq__36304_36347__$1);
var G__36355 = null;
var G__36356 = (0);
var G__36357 = (0);
seq__36304_36337 = G__36354;
chunk__36305_36338 = G__36355;
count__36306_36339 = G__36356;
i__36307_36340 = G__36357;
continue;
}
} else {
}
}
break;
}


var G__36358 = cljs.core.next.call(null,seq__36296__$1);
var G__36359 = null;
var G__36360 = (0);
var G__36361 = (0);
seq__36296 = G__36358;
chunk__36297 = G__36359;
count__36298 = G__36360;
i__36299 = G__36361;
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
var seq__36362_36366 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36363_36367 = null;
var count__36364_36368 = (0);
var i__36365_36369 = (0);
while(true){
if((i__36365_36369 < count__36364_36368)){
var ns_36370 = cljs.core._nth.call(null,chunk__36363_36367,i__36365_36369);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36370);


var G__36371 = seq__36362_36366;
var G__36372 = chunk__36363_36367;
var G__36373 = count__36364_36368;
var G__36374 = (i__36365_36369 + (1));
seq__36362_36366 = G__36371;
chunk__36363_36367 = G__36372;
count__36364_36368 = G__36373;
i__36365_36369 = G__36374;
continue;
} else {
var temp__5457__auto___36375 = cljs.core.seq.call(null,seq__36362_36366);
if(temp__5457__auto___36375){
var seq__36362_36376__$1 = temp__5457__auto___36375;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36362_36376__$1)){
var c__4337__auto___36377 = cljs.core.chunk_first.call(null,seq__36362_36376__$1);
var G__36378 = cljs.core.chunk_rest.call(null,seq__36362_36376__$1);
var G__36379 = c__4337__auto___36377;
var G__36380 = cljs.core.count.call(null,c__4337__auto___36377);
var G__36381 = (0);
seq__36362_36366 = G__36378;
chunk__36363_36367 = G__36379;
count__36364_36368 = G__36380;
i__36365_36369 = G__36381;
continue;
} else {
var ns_36382 = cljs.core.first.call(null,seq__36362_36376__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36382);


var G__36383 = cljs.core.next.call(null,seq__36362_36376__$1);
var G__36384 = null;
var G__36385 = (0);
var G__36386 = (0);
seq__36362_36366 = G__36383;
chunk__36363_36367 = G__36384;
count__36364_36368 = G__36385;
i__36365_36369 = G__36386;
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
var G__36387__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36387 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36388__i = 0, G__36388__a = new Array(arguments.length -  0);
while (G__36388__i < G__36388__a.length) {G__36388__a[G__36388__i] = arguments[G__36388__i + 0]; ++G__36388__i;}
  args = new cljs.core.IndexedSeq(G__36388__a,0,null);
} 
return G__36387__delegate.call(this,args);};
G__36387.cljs$lang$maxFixedArity = 0;
G__36387.cljs$lang$applyTo = (function (arglist__36389){
var args = cljs.core.seq(arglist__36389);
return G__36387__delegate(args);
});
G__36387.cljs$core$IFn$_invoke$arity$variadic = G__36387__delegate;
return G__36387;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__36390_SHARP_,p2__36391_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36390_SHARP_)].join('')),p2__36391_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__36392_SHARP_,p2__36393_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__36392_SHARP_)].join(''),p2__36393_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__36394 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__36394.addCallback(((function (G__36394){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__36394))
);

G__36394.addErrback(((function (G__36394){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__36394))
);

return G__36394;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36395){if((e36395 instanceof Error)){
var e = e36395;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36395;

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
}catch (e36396){if((e36396 instanceof Error)){
var e = e36396;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36396;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36397 = cljs.core._EQ_;
var expr__36398 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36397.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36398))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__36397.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36398))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__36397.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36398))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__36397,expr__36398){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36397,expr__36398))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36400,callback){
var map__36401 = p__36400;
var map__36401__$1 = ((((!((map__36401 == null)))?(((((map__36401.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36401.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36401):map__36401);
var file_msg = map__36401__$1;
var request_url = cljs.core.get.call(null,map__36401__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3936__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__36401,map__36401__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36401,map__36401__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__){
return (function (state_36439){
var state_val_36440 = (state_36439[(1)]);
if((state_val_36440 === (7))){
var inst_36435 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36441_36467 = state_36439__$1;
(statearr_36441_36467[(2)] = inst_36435);

(statearr_36441_36467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (1))){
var state_36439__$1 = state_36439;
var statearr_36442_36468 = state_36439__$1;
(statearr_36442_36468[(2)] = null);

(statearr_36442_36468[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (4))){
var inst_36405 = (state_36439[(7)]);
var inst_36405__$1 = (state_36439[(2)]);
var state_36439__$1 = (function (){var statearr_36443 = state_36439;
(statearr_36443[(7)] = inst_36405__$1);

return statearr_36443;
})();
if(cljs.core.truth_(inst_36405__$1)){
var statearr_36444_36469 = state_36439__$1;
(statearr_36444_36469[(1)] = (5));

} else {
var statearr_36445_36470 = state_36439__$1;
(statearr_36445_36470[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (15))){
var inst_36418 = (state_36439[(8)]);
var inst_36420 = (state_36439[(9)]);
var inst_36422 = inst_36420.call(null,inst_36418);
var state_36439__$1 = state_36439;
var statearr_36446_36471 = state_36439__$1;
(statearr_36446_36471[(2)] = inst_36422);

(statearr_36446_36471[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (13))){
var inst_36429 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36447_36472 = state_36439__$1;
(statearr_36447_36472[(2)] = inst_36429);

(statearr_36447_36472[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (6))){
var state_36439__$1 = state_36439;
var statearr_36448_36473 = state_36439__$1;
(statearr_36448_36473[(2)] = null);

(statearr_36448_36473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (17))){
var inst_36426 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
var statearr_36449_36474 = state_36439__$1;
(statearr_36449_36474[(2)] = inst_36426);

(statearr_36449_36474[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (3))){
var inst_36437 = (state_36439[(2)]);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36439__$1,inst_36437);
} else {
if((state_val_36440 === (12))){
var state_36439__$1 = state_36439;
var statearr_36450_36475 = state_36439__$1;
(statearr_36450_36475[(2)] = null);

(statearr_36450_36475[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (2))){
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36440 === (11))){
var inst_36410 = (state_36439[(10)]);
var inst_36416 = figwheel.client.file_reloading.blocking_load.call(null,inst_36410);
var state_36439__$1 = state_36439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36439__$1,(14),inst_36416);
} else {
if((state_val_36440 === (9))){
var inst_36410 = (state_36439[(10)]);
var state_36439__$1 = state_36439;
if(cljs.core.truth_(inst_36410)){
var statearr_36451_36476 = state_36439__$1;
(statearr_36451_36476[(1)] = (11));

} else {
var statearr_36452_36477 = state_36439__$1;
(statearr_36452_36477[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (5))){
var inst_36405 = (state_36439[(7)]);
var inst_36411 = (state_36439[(11)]);
var inst_36410 = cljs.core.nth.call(null,inst_36405,(0),null);
var inst_36411__$1 = cljs.core.nth.call(null,inst_36405,(1),null);
var state_36439__$1 = (function (){var statearr_36453 = state_36439;
(statearr_36453[(10)] = inst_36410);

(statearr_36453[(11)] = inst_36411__$1);

return statearr_36453;
})();
if(cljs.core.truth_(inst_36411__$1)){
var statearr_36454_36478 = state_36439__$1;
(statearr_36454_36478[(1)] = (8));

} else {
var statearr_36455_36479 = state_36439__$1;
(statearr_36455_36479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (14))){
var inst_36410 = (state_36439[(10)]);
var inst_36420 = (state_36439[(9)]);
var inst_36418 = (state_36439[(2)]);
var inst_36419 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36420__$1 = cljs.core.get.call(null,inst_36419,inst_36410);
var state_36439__$1 = (function (){var statearr_36456 = state_36439;
(statearr_36456[(8)] = inst_36418);

(statearr_36456[(9)] = inst_36420__$1);

return statearr_36456;
})();
if(cljs.core.truth_(inst_36420__$1)){
var statearr_36457_36480 = state_36439__$1;
(statearr_36457_36480[(1)] = (15));

} else {
var statearr_36458_36481 = state_36439__$1;
(statearr_36458_36481[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (16))){
var inst_36418 = (state_36439[(8)]);
var inst_36424 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36418);
var state_36439__$1 = state_36439;
var statearr_36459_36482 = state_36439__$1;
(statearr_36459_36482[(2)] = inst_36424);

(statearr_36459_36482[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (10))){
var inst_36431 = (state_36439[(2)]);
var state_36439__$1 = (function (){var statearr_36460 = state_36439;
(statearr_36460[(12)] = inst_36431);

return statearr_36460;
})();
var statearr_36461_36483 = state_36439__$1;
(statearr_36461_36483[(2)] = null);

(statearr_36461_36483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36440 === (8))){
var inst_36411 = (state_36439[(11)]);
var inst_36413 = eval(inst_36411);
var state_36439__$1 = state_36439;
var statearr_36462_36484 = state_36439__$1;
(statearr_36462_36484[(2)] = inst_36413);

(statearr_36462_36484[(1)] = (10));


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
});})(c__34226__auto__))
;
return ((function (switch__34136__auto__,c__34226__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34137__auto__ = null;
var figwheel$client$file_reloading$state_machine__34137__auto____0 = (function (){
var statearr_36463 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36463[(0)] = figwheel$client$file_reloading$state_machine__34137__auto__);

(statearr_36463[(1)] = (1));

return statearr_36463;
});
var figwheel$client$file_reloading$state_machine__34137__auto____1 = (function (state_36439){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_36439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e36464){if((e36464 instanceof Object)){
var ex__34140__auto__ = e36464;
var statearr_36465_36485 = state_36439;
(statearr_36465_36485[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36486 = state_36439;
state_36439 = G__36486;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34137__auto__ = function(state_36439){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34137__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34137__auto____1.call(this,state_36439);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34137__auto____0;
figwheel$client$file_reloading$state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34137__auto____1;
return figwheel$client$file_reloading$state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__))
})();
var state__34228__auto__ = (function (){var statearr_36466 = f__34227__auto__.call(null);
(statearr_36466[(6)] = c__34226__auto__);

return statearr_36466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__))
);

return c__34226__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__36488 = arguments.length;
switch (G__36488) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36490,callback){
var map__36491 = p__36490;
var map__36491__$1 = ((((!((map__36491 == null)))?(((((map__36491.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36491.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36491):map__36491);
var file_msg = map__36491__$1;
var namespace = cljs.core.get.call(null,map__36491__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36491,map__36491__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36491,map__36491__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36493){
var map__36494 = p__36493;
var map__36494__$1 = ((((!((map__36494 == null)))?(((((map__36494.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36494.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36494):map__36494);
var file_msg = map__36494__$1;
var namespace = cljs.core.get.call(null,map__36494__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36496){
var map__36497 = p__36496;
var map__36497__$1 = ((((!((map__36497 == null)))?(((((map__36497.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36497.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36497):map__36497);
var file_msg = map__36497__$1;
var namespace = cljs.core.get.call(null,map__36497__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36499,callback){
var map__36500 = p__36499;
var map__36500__$1 = ((((!((map__36500 == null)))?(((((map__36500.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36500.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36500):map__36500);
var file_msg = map__36500__$1;
var request_url = cljs.core.get.call(null,map__36500__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36500__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34226__auto___36550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto___36550,out){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto___36550,out){
return (function (state_36535){
var state_val_36536 = (state_36535[(1)]);
if((state_val_36536 === (1))){
var inst_36509 = cljs.core.seq.call(null,files);
var inst_36510 = cljs.core.first.call(null,inst_36509);
var inst_36511 = cljs.core.next.call(null,inst_36509);
var inst_36512 = files;
var state_36535__$1 = (function (){var statearr_36537 = state_36535;
(statearr_36537[(7)] = inst_36510);

(statearr_36537[(8)] = inst_36511);

(statearr_36537[(9)] = inst_36512);

return statearr_36537;
})();
var statearr_36538_36551 = state_36535__$1;
(statearr_36538_36551[(2)] = null);

(statearr_36538_36551[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (2))){
var inst_36518 = (state_36535[(10)]);
var inst_36512 = (state_36535[(9)]);
var inst_36517 = cljs.core.seq.call(null,inst_36512);
var inst_36518__$1 = cljs.core.first.call(null,inst_36517);
var inst_36519 = cljs.core.next.call(null,inst_36517);
var inst_36520 = (inst_36518__$1 == null);
var inst_36521 = cljs.core.not.call(null,inst_36520);
var state_36535__$1 = (function (){var statearr_36539 = state_36535;
(statearr_36539[(10)] = inst_36518__$1);

(statearr_36539[(11)] = inst_36519);

return statearr_36539;
})();
if(inst_36521){
var statearr_36540_36552 = state_36535__$1;
(statearr_36540_36552[(1)] = (4));

} else {
var statearr_36541_36553 = state_36535__$1;
(statearr_36541_36553[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (3))){
var inst_36533 = (state_36535[(2)]);
var state_36535__$1 = state_36535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36535__$1,inst_36533);
} else {
if((state_val_36536 === (4))){
var inst_36518 = (state_36535[(10)]);
var inst_36523 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36518);
var state_36535__$1 = state_36535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36535__$1,(7),inst_36523);
} else {
if((state_val_36536 === (5))){
var inst_36529 = cljs.core.async.close_BANG_.call(null,out);
var state_36535__$1 = state_36535;
var statearr_36542_36554 = state_36535__$1;
(statearr_36542_36554[(2)] = inst_36529);

(statearr_36542_36554[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (6))){
var inst_36531 = (state_36535[(2)]);
var state_36535__$1 = state_36535;
var statearr_36543_36555 = state_36535__$1;
(statearr_36543_36555[(2)] = inst_36531);

(statearr_36543_36555[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36536 === (7))){
var inst_36519 = (state_36535[(11)]);
var inst_36525 = (state_36535[(2)]);
var inst_36526 = cljs.core.async.put_BANG_.call(null,out,inst_36525);
var inst_36512 = inst_36519;
var state_36535__$1 = (function (){var statearr_36544 = state_36535;
(statearr_36544[(12)] = inst_36526);

(statearr_36544[(9)] = inst_36512);

return statearr_36544;
})();
var statearr_36545_36556 = state_36535__$1;
(statearr_36545_36556[(2)] = null);

(statearr_36545_36556[(1)] = (2));


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
});})(c__34226__auto___36550,out))
;
return ((function (switch__34136__auto__,c__34226__auto___36550,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto____0 = (function (){
var statearr_36546 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36546[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto__);

(statearr_36546[(1)] = (1));

return statearr_36546;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto____1 = (function (state_36535){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_36535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e36547){if((e36547 instanceof Object)){
var ex__34140__auto__ = e36547;
var statearr_36548_36557 = state_36535;
(statearr_36548_36557[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36547;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36558 = state_36535;
state_36535 = G__36558;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto__ = function(state_36535){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto____1.call(this,state_36535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto___36550,out))
})();
var state__34228__auto__ = (function (){var statearr_36549 = f__34227__auto__.call(null);
(statearr_36549[(6)] = c__34226__auto___36550);

return statearr_36549;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto___36550,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36559,opts){
var map__36560 = p__36559;
var map__36560__$1 = ((((!((map__36560 == null)))?(((((map__36560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36560):map__36560);
var eval_body = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36560__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36562){var e = e36562;
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
return (function (p1__36563_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36563_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36564){
var vec__36565 = p__36564;
var k = cljs.core.nth.call(null,vec__36565,(0),null);
var v = cljs.core.nth.call(null,vec__36565,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36568){
var vec__36569 = p__36568;
var k = cljs.core.nth.call(null,vec__36569,(0),null);
var v = cljs.core.nth.call(null,vec__36569,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36575,p__36576){
var map__36577 = p__36575;
var map__36577__$1 = ((((!((map__36577 == null)))?(((((map__36577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36577):map__36577);
var opts = map__36577__$1;
var before_jsload = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36577__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36578 = p__36576;
var map__36578__$1 = ((((!((map__36578 == null)))?(((((map__36578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36578):map__36578);
var msg = map__36578__$1;
var files = cljs.core.get.call(null,map__36578__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36578__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36578__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34226__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34227__auto__ = (function (){var switch__34136__auto__ = ((function (c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36732){
var state_val_36733 = (state_36732[(1)]);
if((state_val_36733 === (7))){
var inst_36593 = (state_36732[(7)]);
var inst_36592 = (state_36732[(8)]);
var inst_36595 = (state_36732[(9)]);
var inst_36594 = (state_36732[(10)]);
var inst_36600 = cljs.core._nth.call(null,inst_36593,inst_36595);
var inst_36601 = figwheel.client.file_reloading.eval_body.call(null,inst_36600,opts);
var inst_36602 = (inst_36595 + (1));
var tmp36734 = inst_36593;
var tmp36735 = inst_36592;
var tmp36736 = inst_36594;
var inst_36592__$1 = tmp36735;
var inst_36593__$1 = tmp36734;
var inst_36594__$1 = tmp36736;
var inst_36595__$1 = inst_36602;
var state_36732__$1 = (function (){var statearr_36737 = state_36732;
(statearr_36737[(7)] = inst_36593__$1);

(statearr_36737[(8)] = inst_36592__$1);

(statearr_36737[(9)] = inst_36595__$1);

(statearr_36737[(11)] = inst_36601);

(statearr_36737[(10)] = inst_36594__$1);

return statearr_36737;
})();
var statearr_36738_36821 = state_36732__$1;
(statearr_36738_36821[(2)] = null);

(statearr_36738_36821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (20))){
var inst_36635 = (state_36732[(12)]);
var inst_36643 = figwheel.client.file_reloading.sort_files.call(null,inst_36635);
var state_36732__$1 = state_36732;
var statearr_36739_36822 = state_36732__$1;
(statearr_36739_36822[(2)] = inst_36643);

(statearr_36739_36822[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (27))){
var state_36732__$1 = state_36732;
var statearr_36740_36823 = state_36732__$1;
(statearr_36740_36823[(2)] = null);

(statearr_36740_36823[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (1))){
var inst_36584 = (state_36732[(13)]);
var inst_36581 = before_jsload.call(null,files);
var inst_36582 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36583 = (function (){return ((function (inst_36584,inst_36581,inst_36582,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36572_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36572_SHARP_);
});
;})(inst_36584,inst_36581,inst_36582,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36584__$1 = cljs.core.filter.call(null,inst_36583,files);
var inst_36585 = cljs.core.not_empty.call(null,inst_36584__$1);
var state_36732__$1 = (function (){var statearr_36741 = state_36732;
(statearr_36741[(14)] = inst_36582);

(statearr_36741[(13)] = inst_36584__$1);

(statearr_36741[(15)] = inst_36581);

return statearr_36741;
})();
if(cljs.core.truth_(inst_36585)){
var statearr_36742_36824 = state_36732__$1;
(statearr_36742_36824[(1)] = (2));

} else {
var statearr_36743_36825 = state_36732__$1;
(statearr_36743_36825[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (24))){
var state_36732__$1 = state_36732;
var statearr_36744_36826 = state_36732__$1;
(statearr_36744_36826[(2)] = null);

(statearr_36744_36826[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (39))){
var inst_36685 = (state_36732[(16)]);
var state_36732__$1 = state_36732;
var statearr_36745_36827 = state_36732__$1;
(statearr_36745_36827[(2)] = inst_36685);

(statearr_36745_36827[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (46))){
var inst_36727 = (state_36732[(2)]);
var state_36732__$1 = state_36732;
var statearr_36746_36828 = state_36732__$1;
(statearr_36746_36828[(2)] = inst_36727);

(statearr_36746_36828[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (4))){
var inst_36629 = (state_36732[(2)]);
var inst_36630 = cljs.core.List.EMPTY;
var inst_36631 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36630);
var inst_36632 = (function (){return ((function (inst_36629,inst_36630,inst_36631,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36573_SHARP_){
var and__3925__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36573_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36573_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36573_SHARP_))));
} else {
return and__3925__auto__;
}
});
;})(inst_36629,inst_36630,inst_36631,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36633 = cljs.core.filter.call(null,inst_36632,files);
var inst_36634 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36635 = cljs.core.concat.call(null,inst_36633,inst_36634);
var state_36732__$1 = (function (){var statearr_36747 = state_36732;
(statearr_36747[(12)] = inst_36635);

(statearr_36747[(17)] = inst_36631);

(statearr_36747[(18)] = inst_36629);

return statearr_36747;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36748_36829 = state_36732__$1;
(statearr_36748_36829[(1)] = (16));

} else {
var statearr_36749_36830 = state_36732__$1;
(statearr_36749_36830[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (15))){
var inst_36619 = (state_36732[(2)]);
var state_36732__$1 = state_36732;
var statearr_36750_36831 = state_36732__$1;
(statearr_36750_36831[(2)] = inst_36619);

(statearr_36750_36831[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (21))){
var inst_36645 = (state_36732[(19)]);
var inst_36645__$1 = (state_36732[(2)]);
var inst_36646 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36645__$1);
var state_36732__$1 = (function (){var statearr_36751 = state_36732;
(statearr_36751[(19)] = inst_36645__$1);

return statearr_36751;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36732__$1,(22),inst_36646);
} else {
if((state_val_36733 === (31))){
var inst_36730 = (state_36732[(2)]);
var state_36732__$1 = state_36732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36732__$1,inst_36730);
} else {
if((state_val_36733 === (32))){
var inst_36685 = (state_36732[(16)]);
var inst_36690 = inst_36685.cljs$lang$protocol_mask$partition0$;
var inst_36691 = (inst_36690 & (64));
var inst_36692 = inst_36685.cljs$core$ISeq$;
var inst_36693 = (cljs.core.PROTOCOL_SENTINEL === inst_36692);
var inst_36694 = ((inst_36691) || (inst_36693));
var state_36732__$1 = state_36732;
if(cljs.core.truth_(inst_36694)){
var statearr_36752_36832 = state_36732__$1;
(statearr_36752_36832[(1)] = (35));

} else {
var statearr_36753_36833 = state_36732__$1;
(statearr_36753_36833[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (40))){
var inst_36707 = (state_36732[(20)]);
var inst_36706 = (state_36732[(2)]);
var inst_36707__$1 = cljs.core.get.call(null,inst_36706,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36708 = cljs.core.get.call(null,inst_36706,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36709 = cljs.core.not_empty.call(null,inst_36707__$1);
var state_36732__$1 = (function (){var statearr_36754 = state_36732;
(statearr_36754[(21)] = inst_36708);

(statearr_36754[(20)] = inst_36707__$1);

return statearr_36754;
})();
if(cljs.core.truth_(inst_36709)){
var statearr_36755_36834 = state_36732__$1;
(statearr_36755_36834[(1)] = (41));

} else {
var statearr_36756_36835 = state_36732__$1;
(statearr_36756_36835[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (33))){
var state_36732__$1 = state_36732;
var statearr_36757_36836 = state_36732__$1;
(statearr_36757_36836[(2)] = false);

(statearr_36757_36836[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (13))){
var inst_36605 = (state_36732[(22)]);
var inst_36609 = cljs.core.chunk_first.call(null,inst_36605);
var inst_36610 = cljs.core.chunk_rest.call(null,inst_36605);
var inst_36611 = cljs.core.count.call(null,inst_36609);
var inst_36592 = inst_36610;
var inst_36593 = inst_36609;
var inst_36594 = inst_36611;
var inst_36595 = (0);
var state_36732__$1 = (function (){var statearr_36758 = state_36732;
(statearr_36758[(7)] = inst_36593);

(statearr_36758[(8)] = inst_36592);

(statearr_36758[(9)] = inst_36595);

(statearr_36758[(10)] = inst_36594);

return statearr_36758;
})();
var statearr_36759_36837 = state_36732__$1;
(statearr_36759_36837[(2)] = null);

(statearr_36759_36837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (22))){
var inst_36653 = (state_36732[(23)]);
var inst_36645 = (state_36732[(19)]);
var inst_36649 = (state_36732[(24)]);
var inst_36648 = (state_36732[(25)]);
var inst_36648__$1 = (state_36732[(2)]);
var inst_36649__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36648__$1);
var inst_36650 = (function (){var all_files = inst_36645;
var res_SINGLEQUOTE_ = inst_36648__$1;
var res = inst_36649__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36653,inst_36645,inst_36649,inst_36648,inst_36648__$1,inst_36649__$1,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36574_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36574_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36653,inst_36645,inst_36649,inst_36648,inst_36648__$1,inst_36649__$1,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36651 = cljs.core.filter.call(null,inst_36650,inst_36648__$1);
var inst_36652 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36653__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36652);
var inst_36654 = cljs.core.not_empty.call(null,inst_36653__$1);
var state_36732__$1 = (function (){var statearr_36760 = state_36732;
(statearr_36760[(23)] = inst_36653__$1);

(statearr_36760[(24)] = inst_36649__$1);

(statearr_36760[(25)] = inst_36648__$1);

(statearr_36760[(26)] = inst_36651);

return statearr_36760;
})();
if(cljs.core.truth_(inst_36654)){
var statearr_36761_36838 = state_36732__$1;
(statearr_36761_36838[(1)] = (23));

} else {
var statearr_36762_36839 = state_36732__$1;
(statearr_36762_36839[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (36))){
var state_36732__$1 = state_36732;
var statearr_36763_36840 = state_36732__$1;
(statearr_36763_36840[(2)] = false);

(statearr_36763_36840[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (41))){
var inst_36707 = (state_36732[(20)]);
var inst_36711 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36712 = cljs.core.map.call(null,inst_36711,inst_36707);
var inst_36713 = cljs.core.pr_str.call(null,inst_36712);
var inst_36714 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36713)].join('');
var inst_36715 = figwheel.client.utils.log.call(null,inst_36714);
var state_36732__$1 = state_36732;
var statearr_36764_36841 = state_36732__$1;
(statearr_36764_36841[(2)] = inst_36715);

(statearr_36764_36841[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (43))){
var inst_36708 = (state_36732[(21)]);
var inst_36718 = (state_36732[(2)]);
var inst_36719 = cljs.core.not_empty.call(null,inst_36708);
var state_36732__$1 = (function (){var statearr_36765 = state_36732;
(statearr_36765[(27)] = inst_36718);

return statearr_36765;
})();
if(cljs.core.truth_(inst_36719)){
var statearr_36766_36842 = state_36732__$1;
(statearr_36766_36842[(1)] = (44));

} else {
var statearr_36767_36843 = state_36732__$1;
(statearr_36767_36843[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (29))){
var inst_36653 = (state_36732[(23)]);
var inst_36645 = (state_36732[(19)]);
var inst_36649 = (state_36732[(24)]);
var inst_36648 = (state_36732[(25)]);
var inst_36685 = (state_36732[(16)]);
var inst_36651 = (state_36732[(26)]);
var inst_36681 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36684 = (function (){var all_files = inst_36645;
var res_SINGLEQUOTE_ = inst_36648;
var res = inst_36649;
var files_not_loaded = inst_36651;
var dependencies_that_loaded = inst_36653;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36653,inst_36645,inst_36649,inst_36648,inst_36685,inst_36651,inst_36681,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36683){
var map__36768 = p__36683;
var map__36768__$1 = ((((!((map__36768 == null)))?(((((map__36768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36768.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36768):map__36768);
var namespace = cljs.core.get.call(null,map__36768__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36653,inst_36645,inst_36649,inst_36648,inst_36685,inst_36651,inst_36681,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36685__$1 = cljs.core.group_by.call(null,inst_36684,inst_36651);
var inst_36687 = (inst_36685__$1 == null);
var inst_36688 = cljs.core.not.call(null,inst_36687);
var state_36732__$1 = (function (){var statearr_36770 = state_36732;
(statearr_36770[(28)] = inst_36681);

(statearr_36770[(16)] = inst_36685__$1);

return statearr_36770;
})();
if(inst_36688){
var statearr_36771_36844 = state_36732__$1;
(statearr_36771_36844[(1)] = (32));

} else {
var statearr_36772_36845 = state_36732__$1;
(statearr_36772_36845[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (44))){
var inst_36708 = (state_36732[(21)]);
var inst_36721 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36708);
var inst_36722 = cljs.core.pr_str.call(null,inst_36721);
var inst_36723 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36722)].join('');
var inst_36724 = figwheel.client.utils.log.call(null,inst_36723);
var state_36732__$1 = state_36732;
var statearr_36773_36846 = state_36732__$1;
(statearr_36773_36846[(2)] = inst_36724);

(statearr_36773_36846[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (6))){
var inst_36626 = (state_36732[(2)]);
var state_36732__$1 = state_36732;
var statearr_36774_36847 = state_36732__$1;
(statearr_36774_36847[(2)] = inst_36626);

(statearr_36774_36847[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (28))){
var inst_36651 = (state_36732[(26)]);
var inst_36678 = (state_36732[(2)]);
var inst_36679 = cljs.core.not_empty.call(null,inst_36651);
var state_36732__$1 = (function (){var statearr_36775 = state_36732;
(statearr_36775[(29)] = inst_36678);

return statearr_36775;
})();
if(cljs.core.truth_(inst_36679)){
var statearr_36776_36848 = state_36732__$1;
(statearr_36776_36848[(1)] = (29));

} else {
var statearr_36777_36849 = state_36732__$1;
(statearr_36777_36849[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (25))){
var inst_36649 = (state_36732[(24)]);
var inst_36665 = (state_36732[(2)]);
var inst_36666 = cljs.core.not_empty.call(null,inst_36649);
var state_36732__$1 = (function (){var statearr_36778 = state_36732;
(statearr_36778[(30)] = inst_36665);

return statearr_36778;
})();
if(cljs.core.truth_(inst_36666)){
var statearr_36779_36850 = state_36732__$1;
(statearr_36779_36850[(1)] = (26));

} else {
var statearr_36780_36851 = state_36732__$1;
(statearr_36780_36851[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (34))){
var inst_36701 = (state_36732[(2)]);
var state_36732__$1 = state_36732;
if(cljs.core.truth_(inst_36701)){
var statearr_36781_36852 = state_36732__$1;
(statearr_36781_36852[(1)] = (38));

} else {
var statearr_36782_36853 = state_36732__$1;
(statearr_36782_36853[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (17))){
var state_36732__$1 = state_36732;
var statearr_36783_36854 = state_36732__$1;
(statearr_36783_36854[(2)] = recompile_dependents);

(statearr_36783_36854[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (3))){
var state_36732__$1 = state_36732;
var statearr_36784_36855 = state_36732__$1;
(statearr_36784_36855[(2)] = null);

(statearr_36784_36855[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (12))){
var inst_36622 = (state_36732[(2)]);
var state_36732__$1 = state_36732;
var statearr_36785_36856 = state_36732__$1;
(statearr_36785_36856[(2)] = inst_36622);

(statearr_36785_36856[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (2))){
var inst_36584 = (state_36732[(13)]);
var inst_36591 = cljs.core.seq.call(null,inst_36584);
var inst_36592 = inst_36591;
var inst_36593 = null;
var inst_36594 = (0);
var inst_36595 = (0);
var state_36732__$1 = (function (){var statearr_36786 = state_36732;
(statearr_36786[(7)] = inst_36593);

(statearr_36786[(8)] = inst_36592);

(statearr_36786[(9)] = inst_36595);

(statearr_36786[(10)] = inst_36594);

return statearr_36786;
})();
var statearr_36787_36857 = state_36732__$1;
(statearr_36787_36857[(2)] = null);

(statearr_36787_36857[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (23))){
var inst_36653 = (state_36732[(23)]);
var inst_36645 = (state_36732[(19)]);
var inst_36649 = (state_36732[(24)]);
var inst_36648 = (state_36732[(25)]);
var inst_36651 = (state_36732[(26)]);
var inst_36656 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36658 = (function (){var all_files = inst_36645;
var res_SINGLEQUOTE_ = inst_36648;
var res = inst_36649;
var files_not_loaded = inst_36651;
var dependencies_that_loaded = inst_36653;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36653,inst_36645,inst_36649,inst_36648,inst_36651,inst_36656,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36657){
var map__36788 = p__36657;
var map__36788__$1 = ((((!((map__36788 == null)))?(((((map__36788.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36788.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36788):map__36788);
var request_url = cljs.core.get.call(null,map__36788__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36653,inst_36645,inst_36649,inst_36648,inst_36651,inst_36656,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36659 = cljs.core.reverse.call(null,inst_36653);
var inst_36660 = cljs.core.map.call(null,inst_36658,inst_36659);
var inst_36661 = cljs.core.pr_str.call(null,inst_36660);
var inst_36662 = figwheel.client.utils.log.call(null,inst_36661);
var state_36732__$1 = (function (){var statearr_36790 = state_36732;
(statearr_36790[(31)] = inst_36656);

return statearr_36790;
})();
var statearr_36791_36858 = state_36732__$1;
(statearr_36791_36858[(2)] = inst_36662);

(statearr_36791_36858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (35))){
var state_36732__$1 = state_36732;
var statearr_36792_36859 = state_36732__$1;
(statearr_36792_36859[(2)] = true);

(statearr_36792_36859[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (19))){
var inst_36635 = (state_36732[(12)]);
var inst_36641 = figwheel.client.file_reloading.expand_files.call(null,inst_36635);
var state_36732__$1 = state_36732;
var statearr_36793_36860 = state_36732__$1;
(statearr_36793_36860[(2)] = inst_36641);

(statearr_36793_36860[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (11))){
var state_36732__$1 = state_36732;
var statearr_36794_36861 = state_36732__$1;
(statearr_36794_36861[(2)] = null);

(statearr_36794_36861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (9))){
var inst_36624 = (state_36732[(2)]);
var state_36732__$1 = state_36732;
var statearr_36795_36862 = state_36732__$1;
(statearr_36795_36862[(2)] = inst_36624);

(statearr_36795_36862[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (5))){
var inst_36595 = (state_36732[(9)]);
var inst_36594 = (state_36732[(10)]);
var inst_36597 = (inst_36595 < inst_36594);
var inst_36598 = inst_36597;
var state_36732__$1 = state_36732;
if(cljs.core.truth_(inst_36598)){
var statearr_36796_36863 = state_36732__$1;
(statearr_36796_36863[(1)] = (7));

} else {
var statearr_36797_36864 = state_36732__$1;
(statearr_36797_36864[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (14))){
var inst_36605 = (state_36732[(22)]);
var inst_36614 = cljs.core.first.call(null,inst_36605);
var inst_36615 = figwheel.client.file_reloading.eval_body.call(null,inst_36614,opts);
var inst_36616 = cljs.core.next.call(null,inst_36605);
var inst_36592 = inst_36616;
var inst_36593 = null;
var inst_36594 = (0);
var inst_36595 = (0);
var state_36732__$1 = (function (){var statearr_36798 = state_36732;
(statearr_36798[(7)] = inst_36593);

(statearr_36798[(8)] = inst_36592);

(statearr_36798[(9)] = inst_36595);

(statearr_36798[(10)] = inst_36594);

(statearr_36798[(32)] = inst_36615);

return statearr_36798;
})();
var statearr_36799_36865 = state_36732__$1;
(statearr_36799_36865[(2)] = null);

(statearr_36799_36865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (45))){
var state_36732__$1 = state_36732;
var statearr_36800_36866 = state_36732__$1;
(statearr_36800_36866[(2)] = null);

(statearr_36800_36866[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (26))){
var inst_36653 = (state_36732[(23)]);
var inst_36645 = (state_36732[(19)]);
var inst_36649 = (state_36732[(24)]);
var inst_36648 = (state_36732[(25)]);
var inst_36651 = (state_36732[(26)]);
var inst_36668 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36670 = (function (){var all_files = inst_36645;
var res_SINGLEQUOTE_ = inst_36648;
var res = inst_36649;
var files_not_loaded = inst_36651;
var dependencies_that_loaded = inst_36653;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36653,inst_36645,inst_36649,inst_36648,inst_36651,inst_36668,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36669){
var map__36801 = p__36669;
var map__36801__$1 = ((((!((map__36801 == null)))?(((((map__36801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36801):map__36801);
var namespace = cljs.core.get.call(null,map__36801__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36801__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36653,inst_36645,inst_36649,inst_36648,inst_36651,inst_36668,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36671 = cljs.core.map.call(null,inst_36670,inst_36649);
var inst_36672 = cljs.core.pr_str.call(null,inst_36671);
var inst_36673 = figwheel.client.utils.log.call(null,inst_36672);
var inst_36674 = (function (){var all_files = inst_36645;
var res_SINGLEQUOTE_ = inst_36648;
var res = inst_36649;
var files_not_loaded = inst_36651;
var dependencies_that_loaded = inst_36653;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36653,inst_36645,inst_36649,inst_36648,inst_36651,inst_36668,inst_36670,inst_36671,inst_36672,inst_36673,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36653,inst_36645,inst_36649,inst_36648,inst_36651,inst_36668,inst_36670,inst_36671,inst_36672,inst_36673,state_val_36733,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36675 = setTimeout(inst_36674,(10));
var state_36732__$1 = (function (){var statearr_36803 = state_36732;
(statearr_36803[(33)] = inst_36668);

(statearr_36803[(34)] = inst_36673);

return statearr_36803;
})();
var statearr_36804_36867 = state_36732__$1;
(statearr_36804_36867[(2)] = inst_36675);

(statearr_36804_36867[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (16))){
var state_36732__$1 = state_36732;
var statearr_36805_36868 = state_36732__$1;
(statearr_36805_36868[(2)] = reload_dependents);

(statearr_36805_36868[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (38))){
var inst_36685 = (state_36732[(16)]);
var inst_36703 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36685);
var state_36732__$1 = state_36732;
var statearr_36806_36869 = state_36732__$1;
(statearr_36806_36869[(2)] = inst_36703);

(statearr_36806_36869[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (30))){
var state_36732__$1 = state_36732;
var statearr_36807_36870 = state_36732__$1;
(statearr_36807_36870[(2)] = null);

(statearr_36807_36870[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (10))){
var inst_36605 = (state_36732[(22)]);
var inst_36607 = cljs.core.chunked_seq_QMARK_.call(null,inst_36605);
var state_36732__$1 = state_36732;
if(inst_36607){
var statearr_36808_36871 = state_36732__$1;
(statearr_36808_36871[(1)] = (13));

} else {
var statearr_36809_36872 = state_36732__$1;
(statearr_36809_36872[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (18))){
var inst_36639 = (state_36732[(2)]);
var state_36732__$1 = state_36732;
if(cljs.core.truth_(inst_36639)){
var statearr_36810_36873 = state_36732__$1;
(statearr_36810_36873[(1)] = (19));

} else {
var statearr_36811_36874 = state_36732__$1;
(statearr_36811_36874[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (42))){
var state_36732__$1 = state_36732;
var statearr_36812_36875 = state_36732__$1;
(statearr_36812_36875[(2)] = null);

(statearr_36812_36875[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (37))){
var inst_36698 = (state_36732[(2)]);
var state_36732__$1 = state_36732;
var statearr_36813_36876 = state_36732__$1;
(statearr_36813_36876[(2)] = inst_36698);

(statearr_36813_36876[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36733 === (8))){
var inst_36605 = (state_36732[(22)]);
var inst_36592 = (state_36732[(8)]);
var inst_36605__$1 = cljs.core.seq.call(null,inst_36592);
var state_36732__$1 = (function (){var statearr_36814 = state_36732;
(statearr_36814[(22)] = inst_36605__$1);

return statearr_36814;
})();
if(inst_36605__$1){
var statearr_36815_36877 = state_36732__$1;
(statearr_36815_36877[(1)] = (10));

} else {
var statearr_36816_36878 = state_36732__$1;
(statearr_36816_36878[(1)] = (11));

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
});})(c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34136__auto__,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto____0 = (function (){
var statearr_36817 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36817[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto__);

(statearr_36817[(1)] = (1));

return statearr_36817;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto____1 = (function (state_36732){
while(true){
var ret_value__34138__auto__ = (function (){try{while(true){
var result__34139__auto__ = switch__34136__auto__.call(null,state_36732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34139__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34139__auto__;
}
break;
}
}catch (e36818){if((e36818 instanceof Object)){
var ex__34140__auto__ = e36818;
var statearr_36819_36879 = state_36732;
(statearr_36819_36879[(5)] = ex__34140__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36818;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34138__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36880 = state_36732;
state_36732 = G__36880;
continue;
} else {
return ret_value__34138__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto__ = function(state_36732){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto____1.call(this,state_36732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34137__auto__;
})()
;})(switch__34136__auto__,c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34228__auto__ = (function (){var statearr_36820 = f__34227__auto__.call(null);
(statearr_36820[(6)] = c__34226__auto__);

return statearr_36820;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34228__auto__);
});})(c__34226__auto__,map__36577,map__36577__$1,opts,before_jsload,on_jsload,reload_dependents,map__36578,map__36578__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34226__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36883,link){
var map__36884 = p__36883;
var map__36884__$1 = ((((!((map__36884 == null)))?(((((map__36884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36884):map__36884);
var file = cljs.core.get.call(null,map__36884__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__36884,map__36884__$1,file){
return (function (p1__36881_SHARP_,p2__36882_SHARP_){
if(cljs.core._EQ_.call(null,p1__36881_SHARP_,p2__36882_SHARP_)){
return p1__36881_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__36884,map__36884__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36887){
var map__36888 = p__36887;
var map__36888__$1 = ((((!((map__36888 == null)))?(((((map__36888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36888):map__36888);
var match_length = cljs.core.get.call(null,map__36888__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36888__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36886_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36886_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36890_SHARP_,p2__36891_SHARP_){
return cljs.core.assoc.call(null,p1__36890_SHARP_,cljs.core.get.call(null,p2__36891_SHARP_,key),p2__36891_SHARP_);
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
var loaded_f_datas_36892 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36892);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36892);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36893,p__36894){
var map__36895 = p__36893;
var map__36895__$1 = ((((!((map__36895 == null)))?(((((map__36895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36895):map__36895);
var on_cssload = cljs.core.get.call(null,map__36895__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36896 = p__36894;
var map__36896__$1 = ((((!((map__36896 == null)))?(((((map__36896.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36896.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36896):map__36896);
var files_msg = map__36896__$1;
var files = cljs.core.get.call(null,map__36896__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1552590669014
