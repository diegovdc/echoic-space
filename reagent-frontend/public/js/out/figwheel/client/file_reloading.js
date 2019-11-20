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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__58266_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__58266_SHARP_));
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
var seq__58267 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__58268 = null;
var count__58269 = (0);
var i__58270 = (0);
while(true){
if((i__58270 < count__58269)){
var n = cljs.core._nth.call(null,chunk__58268,i__58270);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__58271 = seq__58267;
var G__58272 = chunk__58268;
var G__58273 = count__58269;
var G__58274 = (i__58270 + (1));
seq__58267 = G__58271;
chunk__58268 = G__58272;
count__58269 = G__58273;
i__58270 = G__58274;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__58267);
if(temp__5457__auto__){
var seq__58267__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58267__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__58267__$1);
var G__58275 = cljs.core.chunk_rest.call(null,seq__58267__$1);
var G__58276 = c__4337__auto__;
var G__58277 = cljs.core.count.call(null,c__4337__auto__);
var G__58278 = (0);
seq__58267 = G__58275;
chunk__58268 = G__58276;
count__58269 = G__58277;
i__58270 = G__58278;
continue;
} else {
var n = cljs.core.first.call(null,seq__58267__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__58279 = cljs.core.next.call(null,seq__58267__$1);
var G__58280 = null;
var G__58281 = (0);
var G__58282 = (0);
seq__58267 = G__58279;
chunk__58268 = G__58280;
count__58269 = G__58281;
i__58270 = G__58282;
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
return cljs.core.some.call(null,(function (p__58283){
var vec__58284 = p__58283;
var _ = cljs.core.nth.call(null,vec__58284,(0),null);
var v = cljs.core.nth.call(null,vec__58284,(1),null);
var and__3925__auto__ = v;
if(cljs.core.truth_(and__3925__auto__)){
return v.call(null,dep);
} else {
return and__3925__auto__;
}
}),cljs.core.filter.call(null,(function (p__58287){
var vec__58288 = p__58287;
var k = cljs.core.nth.call(null,vec__58288,(0),null);
var v = cljs.core.nth.call(null,vec__58288,(1),null);
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

var seq__58300_58308 = cljs.core.seq.call(null,deps);
var chunk__58301_58309 = null;
var count__58302_58310 = (0);
var i__58303_58311 = (0);
while(true){
if((i__58303_58311 < count__58302_58310)){
var dep_58312 = cljs.core._nth.call(null,chunk__58301_58309,i__58303_58311);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_58312;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_58312));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_58312,(depth + (1)),state);
} else {
}


var G__58313 = seq__58300_58308;
var G__58314 = chunk__58301_58309;
var G__58315 = count__58302_58310;
var G__58316 = (i__58303_58311 + (1));
seq__58300_58308 = G__58313;
chunk__58301_58309 = G__58314;
count__58302_58310 = G__58315;
i__58303_58311 = G__58316;
continue;
} else {
var temp__5457__auto___58317 = cljs.core.seq.call(null,seq__58300_58308);
if(temp__5457__auto___58317){
var seq__58300_58318__$1 = temp__5457__auto___58317;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58300_58318__$1)){
var c__4337__auto___58319 = cljs.core.chunk_first.call(null,seq__58300_58318__$1);
var G__58320 = cljs.core.chunk_rest.call(null,seq__58300_58318__$1);
var G__58321 = c__4337__auto___58319;
var G__58322 = cljs.core.count.call(null,c__4337__auto___58319);
var G__58323 = (0);
seq__58300_58308 = G__58320;
chunk__58301_58309 = G__58321;
count__58302_58310 = G__58322;
i__58303_58311 = G__58323;
continue;
} else {
var dep_58324 = cljs.core.first.call(null,seq__58300_58318__$1);
if(cljs.core.truth_((function (){var and__3925__auto__ = dep_58324;
if(cljs.core.truth_(and__3925__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_58324));
} else {
return and__3925__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_58324,(depth + (1)),state);
} else {
}


var G__58325 = cljs.core.next.call(null,seq__58300_58318__$1);
var G__58326 = null;
var G__58327 = (0);
var G__58328 = (0);
seq__58300_58308 = G__58325;
chunk__58301_58309 = G__58326;
count__58302_58310 = G__58327;
i__58303_58311 = G__58328;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__58304){
var vec__58305 = p__58304;
var seq__58306 = cljs.core.seq.call(null,vec__58305);
var first__58307 = cljs.core.first.call(null,seq__58306);
var seq__58306__$1 = cljs.core.next.call(null,seq__58306);
var x = first__58307;
var xs = seq__58306__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__58305,seq__58306,first__58307,seq__58306__$1,x,xs,get_deps__$1){
return (function (p1__58291_SHARP_){
return clojure.set.difference.call(null,p1__58291_SHARP_,x);
});})(vec__58305,seq__58306,first__58307,seq__58306__$1,x,xs,get_deps__$1))
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
var seq__58329 = cljs.core.seq.call(null,provides);
var chunk__58330 = null;
var count__58331 = (0);
var i__58332 = (0);
while(true){
if((i__58332 < count__58331)){
var prov = cljs.core._nth.call(null,chunk__58330,i__58332);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__58333_58341 = cljs.core.seq.call(null,requires);
var chunk__58334_58342 = null;
var count__58335_58343 = (0);
var i__58336_58344 = (0);
while(true){
if((i__58336_58344 < count__58335_58343)){
var req_58345 = cljs.core._nth.call(null,chunk__58334_58342,i__58336_58344);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58345,prov);


var G__58346 = seq__58333_58341;
var G__58347 = chunk__58334_58342;
var G__58348 = count__58335_58343;
var G__58349 = (i__58336_58344 + (1));
seq__58333_58341 = G__58346;
chunk__58334_58342 = G__58347;
count__58335_58343 = G__58348;
i__58336_58344 = G__58349;
continue;
} else {
var temp__5457__auto___58350 = cljs.core.seq.call(null,seq__58333_58341);
if(temp__5457__auto___58350){
var seq__58333_58351__$1 = temp__5457__auto___58350;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58333_58351__$1)){
var c__4337__auto___58352 = cljs.core.chunk_first.call(null,seq__58333_58351__$1);
var G__58353 = cljs.core.chunk_rest.call(null,seq__58333_58351__$1);
var G__58354 = c__4337__auto___58352;
var G__58355 = cljs.core.count.call(null,c__4337__auto___58352);
var G__58356 = (0);
seq__58333_58341 = G__58353;
chunk__58334_58342 = G__58354;
count__58335_58343 = G__58355;
i__58336_58344 = G__58356;
continue;
} else {
var req_58357 = cljs.core.first.call(null,seq__58333_58351__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58357,prov);


var G__58358 = cljs.core.next.call(null,seq__58333_58351__$1);
var G__58359 = null;
var G__58360 = (0);
var G__58361 = (0);
seq__58333_58341 = G__58358;
chunk__58334_58342 = G__58359;
count__58335_58343 = G__58360;
i__58336_58344 = G__58361;
continue;
}
} else {
}
}
break;
}


var G__58362 = seq__58329;
var G__58363 = chunk__58330;
var G__58364 = count__58331;
var G__58365 = (i__58332 + (1));
seq__58329 = G__58362;
chunk__58330 = G__58363;
count__58331 = G__58364;
i__58332 = G__58365;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__58329);
if(temp__5457__auto__){
var seq__58329__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58329__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__58329__$1);
var G__58366 = cljs.core.chunk_rest.call(null,seq__58329__$1);
var G__58367 = c__4337__auto__;
var G__58368 = cljs.core.count.call(null,c__4337__auto__);
var G__58369 = (0);
seq__58329 = G__58366;
chunk__58330 = G__58367;
count__58331 = G__58368;
i__58332 = G__58369;
continue;
} else {
var prov = cljs.core.first.call(null,seq__58329__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__58337_58370 = cljs.core.seq.call(null,requires);
var chunk__58338_58371 = null;
var count__58339_58372 = (0);
var i__58340_58373 = (0);
while(true){
if((i__58340_58373 < count__58339_58372)){
var req_58374 = cljs.core._nth.call(null,chunk__58338_58371,i__58340_58373);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58374,prov);


var G__58375 = seq__58337_58370;
var G__58376 = chunk__58338_58371;
var G__58377 = count__58339_58372;
var G__58378 = (i__58340_58373 + (1));
seq__58337_58370 = G__58375;
chunk__58338_58371 = G__58376;
count__58339_58372 = G__58377;
i__58340_58373 = G__58378;
continue;
} else {
var temp__5457__auto___58379__$1 = cljs.core.seq.call(null,seq__58337_58370);
if(temp__5457__auto___58379__$1){
var seq__58337_58380__$1 = temp__5457__auto___58379__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58337_58380__$1)){
var c__4337__auto___58381 = cljs.core.chunk_first.call(null,seq__58337_58380__$1);
var G__58382 = cljs.core.chunk_rest.call(null,seq__58337_58380__$1);
var G__58383 = c__4337__auto___58381;
var G__58384 = cljs.core.count.call(null,c__4337__auto___58381);
var G__58385 = (0);
seq__58337_58370 = G__58382;
chunk__58338_58371 = G__58383;
count__58339_58372 = G__58384;
i__58340_58373 = G__58385;
continue;
} else {
var req_58386 = cljs.core.first.call(null,seq__58337_58380__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_58386,prov);


var G__58387 = cljs.core.next.call(null,seq__58337_58380__$1);
var G__58388 = null;
var G__58389 = (0);
var G__58390 = (0);
seq__58337_58370 = G__58387;
chunk__58338_58371 = G__58388;
count__58339_58372 = G__58389;
i__58340_58373 = G__58390;
continue;
}
} else {
}
}
break;
}


var G__58391 = cljs.core.next.call(null,seq__58329__$1);
var G__58392 = null;
var G__58393 = (0);
var G__58394 = (0);
seq__58329 = G__58391;
chunk__58330 = G__58392;
count__58331 = G__58393;
i__58332 = G__58394;
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
var seq__58395_58399 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__58396_58400 = null;
var count__58397_58401 = (0);
var i__58398_58402 = (0);
while(true){
if((i__58398_58402 < count__58397_58401)){
var ns_58403 = cljs.core._nth.call(null,chunk__58396_58400,i__58398_58402);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_58403);


var G__58404 = seq__58395_58399;
var G__58405 = chunk__58396_58400;
var G__58406 = count__58397_58401;
var G__58407 = (i__58398_58402 + (1));
seq__58395_58399 = G__58404;
chunk__58396_58400 = G__58405;
count__58397_58401 = G__58406;
i__58398_58402 = G__58407;
continue;
} else {
var temp__5457__auto___58408 = cljs.core.seq.call(null,seq__58395_58399);
if(temp__5457__auto___58408){
var seq__58395_58409__$1 = temp__5457__auto___58408;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58395_58409__$1)){
var c__4337__auto___58410 = cljs.core.chunk_first.call(null,seq__58395_58409__$1);
var G__58411 = cljs.core.chunk_rest.call(null,seq__58395_58409__$1);
var G__58412 = c__4337__auto___58410;
var G__58413 = cljs.core.count.call(null,c__4337__auto___58410);
var G__58414 = (0);
seq__58395_58399 = G__58411;
chunk__58396_58400 = G__58412;
count__58397_58401 = G__58413;
i__58398_58402 = G__58414;
continue;
} else {
var ns_58415 = cljs.core.first.call(null,seq__58395_58409__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_58415);


var G__58416 = cljs.core.next.call(null,seq__58395_58409__$1);
var G__58417 = null;
var G__58418 = (0);
var G__58419 = (0);
seq__58395_58399 = G__58416;
chunk__58396_58400 = G__58417;
count__58397_58401 = G__58418;
i__58398_58402 = G__58419;
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
var G__58420__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__58420 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58421__i = 0, G__58421__a = new Array(arguments.length -  0);
while (G__58421__i < G__58421__a.length) {G__58421__a[G__58421__i] = arguments[G__58421__i + 0]; ++G__58421__i;}
  args = new cljs.core.IndexedSeq(G__58421__a,0,null);
} 
return G__58420__delegate.call(this,args);};
G__58420.cljs$lang$maxFixedArity = 0;
G__58420.cljs$lang$applyTo = (function (arglist__58422){
var args = cljs.core.seq(arglist__58422);
return G__58420__delegate(args);
});
G__58420.cljs$core$IFn$_invoke$arity$variadic = G__58420__delegate;
return G__58420;
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
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__58423_SHARP_,p2__58424_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58423_SHARP_)].join('')),p2__58424_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__58425_SHARP_,p2__58426_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__58425_SHARP_)].join(''),p2__58426_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__58427 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__58427.addCallback(((function (G__58427){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__58427))
);

G__58427.addErrback(((function (G__58427){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__58427))
);

return G__58427;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e58428){if((e58428 instanceof Error)){
var e = e58428;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e58428;

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
}catch (e58429){if((e58429 instanceof Error)){
var e = e58429;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e58429;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__58430 = cljs.core._EQ_;
var expr__58431 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__58430.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__58431))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__58430.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__58431))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__58430.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__58431))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__58430,expr__58431){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__58430,expr__58431))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__58433,callback){
var map__58434 = p__58433;
var map__58434__$1 = ((((!((map__58434 == null)))?(((((map__58434.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58434.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58434):map__58434);
var file_msg = map__58434__$1;
var request_url = cljs.core.get.call(null,map__58434__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3936__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__58434,map__58434__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__58434,map__58434__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__){
return (function (state_58472){
var state_val_58473 = (state_58472[(1)]);
if((state_val_58473 === (7))){
var inst_58468 = (state_58472[(2)]);
var state_58472__$1 = state_58472;
var statearr_58474_58500 = state_58472__$1;
(statearr_58474_58500[(2)] = inst_58468);

(statearr_58474_58500[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (1))){
var state_58472__$1 = state_58472;
var statearr_58475_58501 = state_58472__$1;
(statearr_58475_58501[(2)] = null);

(statearr_58475_58501[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (4))){
var inst_58438 = (state_58472[(7)]);
var inst_58438__$1 = (state_58472[(2)]);
var state_58472__$1 = (function (){var statearr_58476 = state_58472;
(statearr_58476[(7)] = inst_58438__$1);

return statearr_58476;
})();
if(cljs.core.truth_(inst_58438__$1)){
var statearr_58477_58502 = state_58472__$1;
(statearr_58477_58502[(1)] = (5));

} else {
var statearr_58478_58503 = state_58472__$1;
(statearr_58478_58503[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (15))){
var inst_58451 = (state_58472[(8)]);
var inst_58453 = (state_58472[(9)]);
var inst_58455 = inst_58453.call(null,inst_58451);
var state_58472__$1 = state_58472;
var statearr_58479_58504 = state_58472__$1;
(statearr_58479_58504[(2)] = inst_58455);

(statearr_58479_58504[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (13))){
var inst_58462 = (state_58472[(2)]);
var state_58472__$1 = state_58472;
var statearr_58480_58505 = state_58472__$1;
(statearr_58480_58505[(2)] = inst_58462);

(statearr_58480_58505[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (6))){
var state_58472__$1 = state_58472;
var statearr_58481_58506 = state_58472__$1;
(statearr_58481_58506[(2)] = null);

(statearr_58481_58506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (17))){
var inst_58459 = (state_58472[(2)]);
var state_58472__$1 = state_58472;
var statearr_58482_58507 = state_58472__$1;
(statearr_58482_58507[(2)] = inst_58459);

(statearr_58482_58507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (3))){
var inst_58470 = (state_58472[(2)]);
var state_58472__$1 = state_58472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58472__$1,inst_58470);
} else {
if((state_val_58473 === (12))){
var state_58472__$1 = state_58472;
var statearr_58483_58508 = state_58472__$1;
(statearr_58483_58508[(2)] = null);

(statearr_58483_58508[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (2))){
var state_58472__$1 = state_58472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58472__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_58473 === (11))){
var inst_58443 = (state_58472[(10)]);
var inst_58449 = figwheel.client.file_reloading.blocking_load.call(null,inst_58443);
var state_58472__$1 = state_58472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58472__$1,(14),inst_58449);
} else {
if((state_val_58473 === (9))){
var inst_58443 = (state_58472[(10)]);
var state_58472__$1 = state_58472;
if(cljs.core.truth_(inst_58443)){
var statearr_58484_58509 = state_58472__$1;
(statearr_58484_58509[(1)] = (11));

} else {
var statearr_58485_58510 = state_58472__$1;
(statearr_58485_58510[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (5))){
var inst_58444 = (state_58472[(11)]);
var inst_58438 = (state_58472[(7)]);
var inst_58443 = cljs.core.nth.call(null,inst_58438,(0),null);
var inst_58444__$1 = cljs.core.nth.call(null,inst_58438,(1),null);
var state_58472__$1 = (function (){var statearr_58486 = state_58472;
(statearr_58486[(11)] = inst_58444__$1);

(statearr_58486[(10)] = inst_58443);

return statearr_58486;
})();
if(cljs.core.truth_(inst_58444__$1)){
var statearr_58487_58511 = state_58472__$1;
(statearr_58487_58511[(1)] = (8));

} else {
var statearr_58488_58512 = state_58472__$1;
(statearr_58488_58512[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (14))){
var inst_58453 = (state_58472[(9)]);
var inst_58443 = (state_58472[(10)]);
var inst_58451 = (state_58472[(2)]);
var inst_58452 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_58453__$1 = cljs.core.get.call(null,inst_58452,inst_58443);
var state_58472__$1 = (function (){var statearr_58489 = state_58472;
(statearr_58489[(8)] = inst_58451);

(statearr_58489[(9)] = inst_58453__$1);

return statearr_58489;
})();
if(cljs.core.truth_(inst_58453__$1)){
var statearr_58490_58513 = state_58472__$1;
(statearr_58490_58513[(1)] = (15));

} else {
var statearr_58491_58514 = state_58472__$1;
(statearr_58491_58514[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (16))){
var inst_58451 = (state_58472[(8)]);
var inst_58457 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_58451);
var state_58472__$1 = state_58472;
var statearr_58492_58515 = state_58472__$1;
(statearr_58492_58515[(2)] = inst_58457);

(statearr_58492_58515[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (10))){
var inst_58464 = (state_58472[(2)]);
var state_58472__$1 = (function (){var statearr_58493 = state_58472;
(statearr_58493[(12)] = inst_58464);

return statearr_58493;
})();
var statearr_58494_58516 = state_58472__$1;
(statearr_58494_58516[(2)] = null);

(statearr_58494_58516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58473 === (8))){
var inst_58444 = (state_58472[(11)]);
var inst_58446 = eval(inst_58444);
var state_58472__$1 = state_58472;
var statearr_58495_58517 = state_58472__$1;
(statearr_58495_58517[(2)] = inst_58446);

(statearr_58495_58517[(1)] = (10));


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
});})(c__47988__auto__))
;
return ((function (switch__47480__auto__,c__47988__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__47481__auto__ = null;
var figwheel$client$file_reloading$state_machine__47481__auto____0 = (function (){
var statearr_58496 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58496[(0)] = figwheel$client$file_reloading$state_machine__47481__auto__);

(statearr_58496[(1)] = (1));

return statearr_58496;
});
var figwheel$client$file_reloading$state_machine__47481__auto____1 = (function (state_58472){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_58472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e58497){if((e58497 instanceof Object)){
var ex__47484__auto__ = e58497;
var statearr_58498_58518 = state_58472;
(statearr_58498_58518[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58519 = state_58472;
state_58472 = G__58519;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__47481__auto__ = function(state_58472){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__47481__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__47481__auto____1.call(this,state_58472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__47481__auto____0;
figwheel$client$file_reloading$state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__47481__auto____1;
return figwheel$client$file_reloading$state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__))
})();
var state__47990__auto__ = (function (){var statearr_58499 = f__47989__auto__.call(null);
(statearr_58499[(6)] = c__47988__auto__);

return statearr_58499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__))
);

return c__47988__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__58521 = arguments.length;
switch (G__58521) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__58523,callback){
var map__58524 = p__58523;
var map__58524__$1 = ((((!((map__58524 == null)))?(((((map__58524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58524):map__58524);
var file_msg = map__58524__$1;
var namespace = cljs.core.get.call(null,map__58524__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__58524,map__58524__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__58524,map__58524__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__58526){
var map__58527 = p__58526;
var map__58527__$1 = ((((!((map__58527 == null)))?(((((map__58527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58527.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58527):map__58527);
var file_msg = map__58527__$1;
var namespace = cljs.core.get.call(null,map__58527__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__58529){
var map__58530 = p__58529;
var map__58530__$1 = ((((!((map__58530 == null)))?(((((map__58530.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58530.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58530):map__58530);
var file_msg = map__58530__$1;
var namespace = cljs.core.get.call(null,map__58530__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__58532,callback){
var map__58533 = p__58532;
var map__58533__$1 = ((((!((map__58533 == null)))?(((((map__58533.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58533.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58533):map__58533);
var file_msg = map__58533__$1;
var request_url = cljs.core.get.call(null,map__58533__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__58533__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__47988__auto___58583 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto___58583,out){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto___58583,out){
return (function (state_58568){
var state_val_58569 = (state_58568[(1)]);
if((state_val_58569 === (1))){
var inst_58542 = cljs.core.seq.call(null,files);
var inst_58543 = cljs.core.first.call(null,inst_58542);
var inst_58544 = cljs.core.next.call(null,inst_58542);
var inst_58545 = files;
var state_58568__$1 = (function (){var statearr_58570 = state_58568;
(statearr_58570[(7)] = inst_58545);

(statearr_58570[(8)] = inst_58544);

(statearr_58570[(9)] = inst_58543);

return statearr_58570;
})();
var statearr_58571_58584 = state_58568__$1;
(statearr_58571_58584[(2)] = null);

(statearr_58571_58584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58569 === (2))){
var inst_58545 = (state_58568[(7)]);
var inst_58551 = (state_58568[(10)]);
var inst_58550 = cljs.core.seq.call(null,inst_58545);
var inst_58551__$1 = cljs.core.first.call(null,inst_58550);
var inst_58552 = cljs.core.next.call(null,inst_58550);
var inst_58553 = (inst_58551__$1 == null);
var inst_58554 = cljs.core.not.call(null,inst_58553);
var state_58568__$1 = (function (){var statearr_58572 = state_58568;
(statearr_58572[(11)] = inst_58552);

(statearr_58572[(10)] = inst_58551__$1);

return statearr_58572;
})();
if(inst_58554){
var statearr_58573_58585 = state_58568__$1;
(statearr_58573_58585[(1)] = (4));

} else {
var statearr_58574_58586 = state_58568__$1;
(statearr_58574_58586[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58569 === (3))){
var inst_58566 = (state_58568[(2)]);
var state_58568__$1 = state_58568;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58568__$1,inst_58566);
} else {
if((state_val_58569 === (4))){
var inst_58551 = (state_58568[(10)]);
var inst_58556 = figwheel.client.file_reloading.reload_js_file.call(null,inst_58551);
var state_58568__$1 = state_58568;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58568__$1,(7),inst_58556);
} else {
if((state_val_58569 === (5))){
var inst_58562 = cljs.core.async.close_BANG_.call(null,out);
var state_58568__$1 = state_58568;
var statearr_58575_58587 = state_58568__$1;
(statearr_58575_58587[(2)] = inst_58562);

(statearr_58575_58587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58569 === (6))){
var inst_58564 = (state_58568[(2)]);
var state_58568__$1 = state_58568;
var statearr_58576_58588 = state_58568__$1;
(statearr_58576_58588[(2)] = inst_58564);

(statearr_58576_58588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58569 === (7))){
var inst_58552 = (state_58568[(11)]);
var inst_58558 = (state_58568[(2)]);
var inst_58559 = cljs.core.async.put_BANG_.call(null,out,inst_58558);
var inst_58545 = inst_58552;
var state_58568__$1 = (function (){var statearr_58577 = state_58568;
(statearr_58577[(12)] = inst_58559);

(statearr_58577[(7)] = inst_58545);

return statearr_58577;
})();
var statearr_58578_58589 = state_58568__$1;
(statearr_58578_58589[(2)] = null);

(statearr_58578_58589[(1)] = (2));


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
});})(c__47988__auto___58583,out))
;
return ((function (switch__47480__auto__,c__47988__auto___58583,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto____0 = (function (){
var statearr_58579 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58579[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto__);

(statearr_58579[(1)] = (1));

return statearr_58579;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto____1 = (function (state_58568){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_58568);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e58580){if((e58580 instanceof Object)){
var ex__47484__auto__ = e58580;
var statearr_58581_58590 = state_58568;
(statearr_58581_58590[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58568);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58591 = state_58568;
state_58568 = G__58591;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto__ = function(state_58568){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto____1.call(this,state_58568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto___58583,out))
})();
var state__47990__auto__ = (function (){var statearr_58582 = f__47989__auto__.call(null);
(statearr_58582[(6)] = c__47988__auto___58583);

return statearr_58582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto___58583,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__58592,opts){
var map__58593 = p__58592;
var map__58593__$1 = ((((!((map__58593 == null)))?(((((map__58593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58593):map__58593);
var eval_body = cljs.core.get.call(null,map__58593__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__58593__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e58595){var e = e58595;
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
return (function (p1__58596_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58596_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__58597){
var vec__58598 = p__58597;
var k = cljs.core.nth.call(null,vec__58598,(0),null);
var v = cljs.core.nth.call(null,vec__58598,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__58601){
var vec__58602 = p__58601;
var k = cljs.core.nth.call(null,vec__58602,(0),null);
var v = cljs.core.nth.call(null,vec__58602,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__58608,p__58609){
var map__58610 = p__58608;
var map__58610__$1 = ((((!((map__58610 == null)))?(((((map__58610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58610):map__58610);
var opts = map__58610__$1;
var before_jsload = cljs.core.get.call(null,map__58610__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__58610__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__58610__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__58611 = p__58609;
var map__58611__$1 = ((((!((map__58611 == null)))?(((((map__58611.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58611.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58611):map__58611);
var msg = map__58611__$1;
var files = cljs.core.get.call(null,map__58611__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__58611__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__58611__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__47988__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__47989__auto__ = (function (){var switch__47480__auto__ = ((function (c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_58765){
var state_val_58766 = (state_58765[(1)]);
if((state_val_58766 === (7))){
var inst_58626 = (state_58765[(7)]);
var inst_58628 = (state_58765[(8)]);
var inst_58625 = (state_58765[(9)]);
var inst_58627 = (state_58765[(10)]);
var inst_58633 = cljs.core._nth.call(null,inst_58626,inst_58628);
var inst_58634 = figwheel.client.file_reloading.eval_body.call(null,inst_58633,opts);
var inst_58635 = (inst_58628 + (1));
var tmp58767 = inst_58626;
var tmp58768 = inst_58625;
var tmp58769 = inst_58627;
var inst_58625__$1 = tmp58768;
var inst_58626__$1 = tmp58767;
var inst_58627__$1 = tmp58769;
var inst_58628__$1 = inst_58635;
var state_58765__$1 = (function (){var statearr_58770 = state_58765;
(statearr_58770[(7)] = inst_58626__$1);

(statearr_58770[(8)] = inst_58628__$1);

(statearr_58770[(9)] = inst_58625__$1);

(statearr_58770[(11)] = inst_58634);

(statearr_58770[(10)] = inst_58627__$1);

return statearr_58770;
})();
var statearr_58771_58854 = state_58765__$1;
(statearr_58771_58854[(2)] = null);

(statearr_58771_58854[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (20))){
var inst_58668 = (state_58765[(12)]);
var inst_58676 = figwheel.client.file_reloading.sort_files.call(null,inst_58668);
var state_58765__$1 = state_58765;
var statearr_58772_58855 = state_58765__$1;
(statearr_58772_58855[(2)] = inst_58676);

(statearr_58772_58855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (27))){
var state_58765__$1 = state_58765;
var statearr_58773_58856 = state_58765__$1;
(statearr_58773_58856[(2)] = null);

(statearr_58773_58856[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (1))){
var inst_58617 = (state_58765[(13)]);
var inst_58614 = before_jsload.call(null,files);
var inst_58615 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_58616 = (function (){return ((function (inst_58617,inst_58614,inst_58615,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58605_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58605_SHARP_);
});
;})(inst_58617,inst_58614,inst_58615,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58617__$1 = cljs.core.filter.call(null,inst_58616,files);
var inst_58618 = cljs.core.not_empty.call(null,inst_58617__$1);
var state_58765__$1 = (function (){var statearr_58774 = state_58765;
(statearr_58774[(14)] = inst_58615);

(statearr_58774[(13)] = inst_58617__$1);

(statearr_58774[(15)] = inst_58614);

return statearr_58774;
})();
if(cljs.core.truth_(inst_58618)){
var statearr_58775_58857 = state_58765__$1;
(statearr_58775_58857[(1)] = (2));

} else {
var statearr_58776_58858 = state_58765__$1;
(statearr_58776_58858[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (24))){
var state_58765__$1 = state_58765;
var statearr_58777_58859 = state_58765__$1;
(statearr_58777_58859[(2)] = null);

(statearr_58777_58859[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (39))){
var inst_58718 = (state_58765[(16)]);
var state_58765__$1 = state_58765;
var statearr_58778_58860 = state_58765__$1;
(statearr_58778_58860[(2)] = inst_58718);

(statearr_58778_58860[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (46))){
var inst_58760 = (state_58765[(2)]);
var state_58765__$1 = state_58765;
var statearr_58779_58861 = state_58765__$1;
(statearr_58779_58861[(2)] = inst_58760);

(statearr_58779_58861[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (4))){
var inst_58662 = (state_58765[(2)]);
var inst_58663 = cljs.core.List.EMPTY;
var inst_58664 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_58663);
var inst_58665 = (function (){return ((function (inst_58662,inst_58663,inst_58664,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58606_SHARP_){
var and__3925__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__58606_SHARP_);
if(cljs.core.truth_(and__3925__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__58606_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__58606_SHARP_))));
} else {
return and__3925__auto__;
}
});
;})(inst_58662,inst_58663,inst_58664,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58666 = cljs.core.filter.call(null,inst_58665,files);
var inst_58667 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_58668 = cljs.core.concat.call(null,inst_58666,inst_58667);
var state_58765__$1 = (function (){var statearr_58780 = state_58765;
(statearr_58780[(17)] = inst_58664);

(statearr_58780[(18)] = inst_58662);

(statearr_58780[(12)] = inst_58668);

return statearr_58780;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_58781_58862 = state_58765__$1;
(statearr_58781_58862[(1)] = (16));

} else {
var statearr_58782_58863 = state_58765__$1;
(statearr_58782_58863[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (15))){
var inst_58652 = (state_58765[(2)]);
var state_58765__$1 = state_58765;
var statearr_58783_58864 = state_58765__$1;
(statearr_58783_58864[(2)] = inst_58652);

(statearr_58783_58864[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (21))){
var inst_58678 = (state_58765[(19)]);
var inst_58678__$1 = (state_58765[(2)]);
var inst_58679 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_58678__$1);
var state_58765__$1 = (function (){var statearr_58784 = state_58765;
(statearr_58784[(19)] = inst_58678__$1);

return statearr_58784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_58765__$1,(22),inst_58679);
} else {
if((state_val_58766 === (31))){
var inst_58763 = (state_58765[(2)]);
var state_58765__$1 = state_58765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_58765__$1,inst_58763);
} else {
if((state_val_58766 === (32))){
var inst_58718 = (state_58765[(16)]);
var inst_58723 = inst_58718.cljs$lang$protocol_mask$partition0$;
var inst_58724 = (inst_58723 & (64));
var inst_58725 = inst_58718.cljs$core$ISeq$;
var inst_58726 = (cljs.core.PROTOCOL_SENTINEL === inst_58725);
var inst_58727 = ((inst_58724) || (inst_58726));
var state_58765__$1 = state_58765;
if(cljs.core.truth_(inst_58727)){
var statearr_58785_58865 = state_58765__$1;
(statearr_58785_58865[(1)] = (35));

} else {
var statearr_58786_58866 = state_58765__$1;
(statearr_58786_58866[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (40))){
var inst_58740 = (state_58765[(20)]);
var inst_58739 = (state_58765[(2)]);
var inst_58740__$1 = cljs.core.get.call(null,inst_58739,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_58741 = cljs.core.get.call(null,inst_58739,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_58742 = cljs.core.not_empty.call(null,inst_58740__$1);
var state_58765__$1 = (function (){var statearr_58787 = state_58765;
(statearr_58787[(21)] = inst_58741);

(statearr_58787[(20)] = inst_58740__$1);

return statearr_58787;
})();
if(cljs.core.truth_(inst_58742)){
var statearr_58788_58867 = state_58765__$1;
(statearr_58788_58867[(1)] = (41));

} else {
var statearr_58789_58868 = state_58765__$1;
(statearr_58789_58868[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (33))){
var state_58765__$1 = state_58765;
var statearr_58790_58869 = state_58765__$1;
(statearr_58790_58869[(2)] = false);

(statearr_58790_58869[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (13))){
var inst_58638 = (state_58765[(22)]);
var inst_58642 = cljs.core.chunk_first.call(null,inst_58638);
var inst_58643 = cljs.core.chunk_rest.call(null,inst_58638);
var inst_58644 = cljs.core.count.call(null,inst_58642);
var inst_58625 = inst_58643;
var inst_58626 = inst_58642;
var inst_58627 = inst_58644;
var inst_58628 = (0);
var state_58765__$1 = (function (){var statearr_58791 = state_58765;
(statearr_58791[(7)] = inst_58626);

(statearr_58791[(8)] = inst_58628);

(statearr_58791[(9)] = inst_58625);

(statearr_58791[(10)] = inst_58627);

return statearr_58791;
})();
var statearr_58792_58870 = state_58765__$1;
(statearr_58792_58870[(2)] = null);

(statearr_58792_58870[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (22))){
var inst_58686 = (state_58765[(23)]);
var inst_58682 = (state_58765[(24)]);
var inst_58681 = (state_58765[(25)]);
var inst_58678 = (state_58765[(19)]);
var inst_58681__$1 = (state_58765[(2)]);
var inst_58682__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58681__$1);
var inst_58683 = (function (){var all_files = inst_58678;
var res_SINGLEQUOTE_ = inst_58681__$1;
var res = inst_58682__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_58686,inst_58682,inst_58681,inst_58678,inst_58681__$1,inst_58682__$1,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__58607_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__58607_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_58686,inst_58682,inst_58681,inst_58678,inst_58681__$1,inst_58682__$1,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58684 = cljs.core.filter.call(null,inst_58683,inst_58681__$1);
var inst_58685 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_58686__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_58685);
var inst_58687 = cljs.core.not_empty.call(null,inst_58686__$1);
var state_58765__$1 = (function (){var statearr_58793 = state_58765;
(statearr_58793[(23)] = inst_58686__$1);

(statearr_58793[(24)] = inst_58682__$1);

(statearr_58793[(25)] = inst_58681__$1);

(statearr_58793[(26)] = inst_58684);

return statearr_58793;
})();
if(cljs.core.truth_(inst_58687)){
var statearr_58794_58871 = state_58765__$1;
(statearr_58794_58871[(1)] = (23));

} else {
var statearr_58795_58872 = state_58765__$1;
(statearr_58795_58872[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (36))){
var state_58765__$1 = state_58765;
var statearr_58796_58873 = state_58765__$1;
(statearr_58796_58873[(2)] = false);

(statearr_58796_58873[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (41))){
var inst_58740 = (state_58765[(20)]);
var inst_58744 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_58745 = cljs.core.map.call(null,inst_58744,inst_58740);
var inst_58746 = cljs.core.pr_str.call(null,inst_58745);
var inst_58747 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58746)].join('');
var inst_58748 = figwheel.client.utils.log.call(null,inst_58747);
var state_58765__$1 = state_58765;
var statearr_58797_58874 = state_58765__$1;
(statearr_58797_58874[(2)] = inst_58748);

(statearr_58797_58874[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (43))){
var inst_58741 = (state_58765[(21)]);
var inst_58751 = (state_58765[(2)]);
var inst_58752 = cljs.core.not_empty.call(null,inst_58741);
var state_58765__$1 = (function (){var statearr_58798 = state_58765;
(statearr_58798[(27)] = inst_58751);

return statearr_58798;
})();
if(cljs.core.truth_(inst_58752)){
var statearr_58799_58875 = state_58765__$1;
(statearr_58799_58875[(1)] = (44));

} else {
var statearr_58800_58876 = state_58765__$1;
(statearr_58800_58876[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (29))){
var inst_58686 = (state_58765[(23)]);
var inst_58682 = (state_58765[(24)]);
var inst_58681 = (state_58765[(25)]);
var inst_58684 = (state_58765[(26)]);
var inst_58718 = (state_58765[(16)]);
var inst_58678 = (state_58765[(19)]);
var inst_58714 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_58717 = (function (){var all_files = inst_58678;
var res_SINGLEQUOTE_ = inst_58681;
var res = inst_58682;
var files_not_loaded = inst_58684;
var dependencies_that_loaded = inst_58686;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58686,inst_58682,inst_58681,inst_58684,inst_58718,inst_58678,inst_58714,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58716){
var map__58801 = p__58716;
var map__58801__$1 = ((((!((map__58801 == null)))?(((((map__58801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58801):map__58801);
var namespace = cljs.core.get.call(null,map__58801__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58686,inst_58682,inst_58681,inst_58684,inst_58718,inst_58678,inst_58714,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58718__$1 = cljs.core.group_by.call(null,inst_58717,inst_58684);
var inst_58720 = (inst_58718__$1 == null);
var inst_58721 = cljs.core.not.call(null,inst_58720);
var state_58765__$1 = (function (){var statearr_58803 = state_58765;
(statearr_58803[(16)] = inst_58718__$1);

(statearr_58803[(28)] = inst_58714);

return statearr_58803;
})();
if(inst_58721){
var statearr_58804_58877 = state_58765__$1;
(statearr_58804_58877[(1)] = (32));

} else {
var statearr_58805_58878 = state_58765__$1;
(statearr_58805_58878[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (44))){
var inst_58741 = (state_58765[(21)]);
var inst_58754 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_58741);
var inst_58755 = cljs.core.pr_str.call(null,inst_58754);
var inst_58756 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_58755)].join('');
var inst_58757 = figwheel.client.utils.log.call(null,inst_58756);
var state_58765__$1 = state_58765;
var statearr_58806_58879 = state_58765__$1;
(statearr_58806_58879[(2)] = inst_58757);

(statearr_58806_58879[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (6))){
var inst_58659 = (state_58765[(2)]);
var state_58765__$1 = state_58765;
var statearr_58807_58880 = state_58765__$1;
(statearr_58807_58880[(2)] = inst_58659);

(statearr_58807_58880[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (28))){
var inst_58684 = (state_58765[(26)]);
var inst_58711 = (state_58765[(2)]);
var inst_58712 = cljs.core.not_empty.call(null,inst_58684);
var state_58765__$1 = (function (){var statearr_58808 = state_58765;
(statearr_58808[(29)] = inst_58711);

return statearr_58808;
})();
if(cljs.core.truth_(inst_58712)){
var statearr_58809_58881 = state_58765__$1;
(statearr_58809_58881[(1)] = (29));

} else {
var statearr_58810_58882 = state_58765__$1;
(statearr_58810_58882[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (25))){
var inst_58682 = (state_58765[(24)]);
var inst_58698 = (state_58765[(2)]);
var inst_58699 = cljs.core.not_empty.call(null,inst_58682);
var state_58765__$1 = (function (){var statearr_58811 = state_58765;
(statearr_58811[(30)] = inst_58698);

return statearr_58811;
})();
if(cljs.core.truth_(inst_58699)){
var statearr_58812_58883 = state_58765__$1;
(statearr_58812_58883[(1)] = (26));

} else {
var statearr_58813_58884 = state_58765__$1;
(statearr_58813_58884[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (34))){
var inst_58734 = (state_58765[(2)]);
var state_58765__$1 = state_58765;
if(cljs.core.truth_(inst_58734)){
var statearr_58814_58885 = state_58765__$1;
(statearr_58814_58885[(1)] = (38));

} else {
var statearr_58815_58886 = state_58765__$1;
(statearr_58815_58886[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (17))){
var state_58765__$1 = state_58765;
var statearr_58816_58887 = state_58765__$1;
(statearr_58816_58887[(2)] = recompile_dependents);

(statearr_58816_58887[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (3))){
var state_58765__$1 = state_58765;
var statearr_58817_58888 = state_58765__$1;
(statearr_58817_58888[(2)] = null);

(statearr_58817_58888[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (12))){
var inst_58655 = (state_58765[(2)]);
var state_58765__$1 = state_58765;
var statearr_58818_58889 = state_58765__$1;
(statearr_58818_58889[(2)] = inst_58655);

(statearr_58818_58889[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (2))){
var inst_58617 = (state_58765[(13)]);
var inst_58624 = cljs.core.seq.call(null,inst_58617);
var inst_58625 = inst_58624;
var inst_58626 = null;
var inst_58627 = (0);
var inst_58628 = (0);
var state_58765__$1 = (function (){var statearr_58819 = state_58765;
(statearr_58819[(7)] = inst_58626);

(statearr_58819[(8)] = inst_58628);

(statearr_58819[(9)] = inst_58625);

(statearr_58819[(10)] = inst_58627);

return statearr_58819;
})();
var statearr_58820_58890 = state_58765__$1;
(statearr_58820_58890[(2)] = null);

(statearr_58820_58890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (23))){
var inst_58686 = (state_58765[(23)]);
var inst_58682 = (state_58765[(24)]);
var inst_58681 = (state_58765[(25)]);
var inst_58684 = (state_58765[(26)]);
var inst_58678 = (state_58765[(19)]);
var inst_58689 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_58691 = (function (){var all_files = inst_58678;
var res_SINGLEQUOTE_ = inst_58681;
var res = inst_58682;
var files_not_loaded = inst_58684;
var dependencies_that_loaded = inst_58686;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58686,inst_58682,inst_58681,inst_58684,inst_58678,inst_58689,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58690){
var map__58821 = p__58690;
var map__58821__$1 = ((((!((map__58821 == null)))?(((((map__58821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58821):map__58821);
var request_url = cljs.core.get.call(null,map__58821__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58686,inst_58682,inst_58681,inst_58684,inst_58678,inst_58689,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58692 = cljs.core.reverse.call(null,inst_58686);
var inst_58693 = cljs.core.map.call(null,inst_58691,inst_58692);
var inst_58694 = cljs.core.pr_str.call(null,inst_58693);
var inst_58695 = figwheel.client.utils.log.call(null,inst_58694);
var state_58765__$1 = (function (){var statearr_58823 = state_58765;
(statearr_58823[(31)] = inst_58689);

return statearr_58823;
})();
var statearr_58824_58891 = state_58765__$1;
(statearr_58824_58891[(2)] = inst_58695);

(statearr_58824_58891[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (35))){
var state_58765__$1 = state_58765;
var statearr_58825_58892 = state_58765__$1;
(statearr_58825_58892[(2)] = true);

(statearr_58825_58892[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (19))){
var inst_58668 = (state_58765[(12)]);
var inst_58674 = figwheel.client.file_reloading.expand_files.call(null,inst_58668);
var state_58765__$1 = state_58765;
var statearr_58826_58893 = state_58765__$1;
(statearr_58826_58893[(2)] = inst_58674);

(statearr_58826_58893[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (11))){
var state_58765__$1 = state_58765;
var statearr_58827_58894 = state_58765__$1;
(statearr_58827_58894[(2)] = null);

(statearr_58827_58894[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (9))){
var inst_58657 = (state_58765[(2)]);
var state_58765__$1 = state_58765;
var statearr_58828_58895 = state_58765__$1;
(statearr_58828_58895[(2)] = inst_58657);

(statearr_58828_58895[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (5))){
var inst_58628 = (state_58765[(8)]);
var inst_58627 = (state_58765[(10)]);
var inst_58630 = (inst_58628 < inst_58627);
var inst_58631 = inst_58630;
var state_58765__$1 = state_58765;
if(cljs.core.truth_(inst_58631)){
var statearr_58829_58896 = state_58765__$1;
(statearr_58829_58896[(1)] = (7));

} else {
var statearr_58830_58897 = state_58765__$1;
(statearr_58830_58897[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (14))){
var inst_58638 = (state_58765[(22)]);
var inst_58647 = cljs.core.first.call(null,inst_58638);
var inst_58648 = figwheel.client.file_reloading.eval_body.call(null,inst_58647,opts);
var inst_58649 = cljs.core.next.call(null,inst_58638);
var inst_58625 = inst_58649;
var inst_58626 = null;
var inst_58627 = (0);
var inst_58628 = (0);
var state_58765__$1 = (function (){var statearr_58831 = state_58765;
(statearr_58831[(32)] = inst_58648);

(statearr_58831[(7)] = inst_58626);

(statearr_58831[(8)] = inst_58628);

(statearr_58831[(9)] = inst_58625);

(statearr_58831[(10)] = inst_58627);

return statearr_58831;
})();
var statearr_58832_58898 = state_58765__$1;
(statearr_58832_58898[(2)] = null);

(statearr_58832_58898[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (45))){
var state_58765__$1 = state_58765;
var statearr_58833_58899 = state_58765__$1;
(statearr_58833_58899[(2)] = null);

(statearr_58833_58899[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (26))){
var inst_58686 = (state_58765[(23)]);
var inst_58682 = (state_58765[(24)]);
var inst_58681 = (state_58765[(25)]);
var inst_58684 = (state_58765[(26)]);
var inst_58678 = (state_58765[(19)]);
var inst_58701 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_58703 = (function (){var all_files = inst_58678;
var res_SINGLEQUOTE_ = inst_58681;
var res = inst_58682;
var files_not_loaded = inst_58684;
var dependencies_that_loaded = inst_58686;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58686,inst_58682,inst_58681,inst_58684,inst_58678,inst_58701,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__58702){
var map__58834 = p__58702;
var map__58834__$1 = ((((!((map__58834 == null)))?(((((map__58834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58834):map__58834);
var namespace = cljs.core.get.call(null,map__58834__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__58834__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58686,inst_58682,inst_58681,inst_58684,inst_58678,inst_58701,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58704 = cljs.core.map.call(null,inst_58703,inst_58682);
var inst_58705 = cljs.core.pr_str.call(null,inst_58704);
var inst_58706 = figwheel.client.utils.log.call(null,inst_58705);
var inst_58707 = (function (){var all_files = inst_58678;
var res_SINGLEQUOTE_ = inst_58681;
var res = inst_58682;
var files_not_loaded = inst_58684;
var dependencies_that_loaded = inst_58686;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58686,inst_58682,inst_58681,inst_58684,inst_58678,inst_58701,inst_58703,inst_58704,inst_58705,inst_58706,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_58686,inst_58682,inst_58681,inst_58684,inst_58678,inst_58701,inst_58703,inst_58704,inst_58705,inst_58706,state_val_58766,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_58708 = setTimeout(inst_58707,(10));
var state_58765__$1 = (function (){var statearr_58836 = state_58765;
(statearr_58836[(33)] = inst_58706);

(statearr_58836[(34)] = inst_58701);

return statearr_58836;
})();
var statearr_58837_58900 = state_58765__$1;
(statearr_58837_58900[(2)] = inst_58708);

(statearr_58837_58900[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (16))){
var state_58765__$1 = state_58765;
var statearr_58838_58901 = state_58765__$1;
(statearr_58838_58901[(2)] = reload_dependents);

(statearr_58838_58901[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (38))){
var inst_58718 = (state_58765[(16)]);
var inst_58736 = cljs.core.apply.call(null,cljs.core.hash_map,inst_58718);
var state_58765__$1 = state_58765;
var statearr_58839_58902 = state_58765__$1;
(statearr_58839_58902[(2)] = inst_58736);

(statearr_58839_58902[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (30))){
var state_58765__$1 = state_58765;
var statearr_58840_58903 = state_58765__$1;
(statearr_58840_58903[(2)] = null);

(statearr_58840_58903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (10))){
var inst_58638 = (state_58765[(22)]);
var inst_58640 = cljs.core.chunked_seq_QMARK_.call(null,inst_58638);
var state_58765__$1 = state_58765;
if(inst_58640){
var statearr_58841_58904 = state_58765__$1;
(statearr_58841_58904[(1)] = (13));

} else {
var statearr_58842_58905 = state_58765__$1;
(statearr_58842_58905[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (18))){
var inst_58672 = (state_58765[(2)]);
var state_58765__$1 = state_58765;
if(cljs.core.truth_(inst_58672)){
var statearr_58843_58906 = state_58765__$1;
(statearr_58843_58906[(1)] = (19));

} else {
var statearr_58844_58907 = state_58765__$1;
(statearr_58844_58907[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (42))){
var state_58765__$1 = state_58765;
var statearr_58845_58908 = state_58765__$1;
(statearr_58845_58908[(2)] = null);

(statearr_58845_58908[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (37))){
var inst_58731 = (state_58765[(2)]);
var state_58765__$1 = state_58765;
var statearr_58846_58909 = state_58765__$1;
(statearr_58846_58909[(2)] = inst_58731);

(statearr_58846_58909[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_58766 === (8))){
var inst_58638 = (state_58765[(22)]);
var inst_58625 = (state_58765[(9)]);
var inst_58638__$1 = cljs.core.seq.call(null,inst_58625);
var state_58765__$1 = (function (){var statearr_58847 = state_58765;
(statearr_58847[(22)] = inst_58638__$1);

return statearr_58847;
})();
if(inst_58638__$1){
var statearr_58848_58910 = state_58765__$1;
(statearr_58848_58910[(1)] = (10));

} else {
var statearr_58849_58911 = state_58765__$1;
(statearr_58849_58911[(1)] = (11));

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
});})(c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__47480__auto__,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto____0 = (function (){
var statearr_58850 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_58850[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto__);

(statearr_58850[(1)] = (1));

return statearr_58850;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto____1 = (function (state_58765){
while(true){
var ret_value__47482__auto__ = (function (){try{while(true){
var result__47483__auto__ = switch__47480__auto__.call(null,state_58765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__47483__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__47483__auto__;
}
break;
}
}catch (e58851){if((e58851 instanceof Object)){
var ex__47484__auto__ = e58851;
var statearr_58852_58912 = state_58765;
(statearr_58852_58912[(5)] = ex__47484__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_58765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e58851;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__47482__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__58913 = state_58765;
state_58765 = G__58913;
continue;
} else {
return ret_value__47482__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto__ = function(state_58765){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto____1.call(this,state_58765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__47481__auto__;
})()
;})(switch__47480__auto__,c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__47990__auto__ = (function (){var statearr_58853 = f__47989__auto__.call(null);
(statearr_58853[(6)] = c__47988__auto__);

return statearr_58853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__47990__auto__);
});})(c__47988__auto__,map__58610,map__58610__$1,opts,before_jsload,on_jsload,reload_dependents,map__58611,map__58611__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__47988__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__58916,link){
var map__58917 = p__58916;
var map__58917__$1 = ((((!((map__58917 == null)))?(((((map__58917.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58917.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58917):map__58917);
var file = cljs.core.get.call(null,map__58917__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__58917,map__58917__$1,file){
return (function (p1__58914_SHARP_,p2__58915_SHARP_){
if(cljs.core._EQ_.call(null,p1__58914_SHARP_,p2__58915_SHARP_)){
return p1__58914_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__58917,map__58917__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__58920){
var map__58921 = p__58920;
var map__58921__$1 = ((((!((map__58921 == null)))?(((((map__58921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58921):map__58921);
var match_length = cljs.core.get.call(null,map__58921__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__58921__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__58919_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__58919_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__58923_SHARP_,p2__58924_SHARP_){
return cljs.core.assoc.call(null,p1__58923_SHARP_,cljs.core.get.call(null,p2__58924_SHARP_,key),p2__58924_SHARP_);
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
var loaded_f_datas_58925 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_58925);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_58925);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__58926,p__58927){
var map__58928 = p__58926;
var map__58928__$1 = ((((!((map__58928 == null)))?(((((map__58928.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58928.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58928):map__58928);
var on_cssload = cljs.core.get.call(null,map__58928__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__58929 = p__58927;
var map__58929__$1 = ((((!((map__58929 == null)))?(((((map__58929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__58929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58929):map__58929);
var files_msg = map__58929__$1;
var files = cljs.core.get.call(null,map__58929__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1574224107220
