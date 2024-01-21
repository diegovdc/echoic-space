goog.provide('cljs.analyzer.impl.namespaces');
/**
 * Given a libspec return a map of :as-alias alias, if was present. Return the
 * libspec with :as-alias elided. If the libspec was *only* :as-alias do not
 * return it.
 */
cljs.analyzer.impl.namespaces.check_and_remove_as_alias = (function cljs$analyzer$impl$namespaces$check_and_remove_as_alias(libspec){
if((((libspec instanceof cljs.core.Symbol)) || ((libspec instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec], null);
} else {
var vec__33789 = libspec;
var seq__33790 = cljs.core.seq(vec__33789);
var first__33791 = cljs.core.first(seq__33790);
var seq__33790__$1 = cljs.core.next(seq__33790);
var lib = first__33791;
var spec = seq__33790__$1;
var libspec__$1 = vec__33789;
var vec__33810 = cljs.core.split_with(cljs.core.complement(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),null], null), null)),spec);
var pre_spec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(0),null);
var vec__33813 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33810,(1),null);
var seq__33814 = cljs.core.seq(vec__33813);
var first__33815 = cljs.core.first(seq__33814);
var seq__33814__$1 = cljs.core.next(seq__33814);
var _ = first__33815;
var first__33815__$1 = cljs.core.first(seq__33814__$1);
var seq__33814__$2 = cljs.core.next(seq__33814__$1);
var alias = first__33815__$1;
var post_spec = seq__33814__$2;
var post = vec__33813;
if(cljs.core.seq(post)){
var libspec_SINGLEQUOTE_ = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [lib], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(pre_spec,post_spec));
if((alias instanceof cljs.core.Symbol)){
} else {
throw (new Error(["Assert failed: ",[":as-alias must be followed by a symbol, got: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias)].join(''),"\n","(symbol? alias)"].join('')));
}

var G__33816 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"as-alias","as-alias",82482467),cljs.core.PersistentArrayMap.createAsIfByAssoc([alias,lib])], null);
if((cljs.core.count(libspec_SINGLEQUOTE_) > (1))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33816,new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec_SINGLEQUOTE_);
} else {
return G__33816;
}
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"libspec","libspec",1228503756),libspec__$1], null);
}
}
});
cljs.analyzer.impl.namespaces.check_as_alias_duplicates = (function cljs$analyzer$impl$namespaces$check_as_alias_duplicates(as_aliases,new_as_aliases){
var seq__33819 = cljs.core.seq(new_as_aliases);
var chunk__33820 = null;
var count__33821 = (0);
var i__33822 = (0);
while(true){
if((i__33822 < count__33821)){
var vec__33833 = chunk__33820.cljs$core$IIndexed$_nth$arity$2(null,i__33822);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33833,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33833,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__33856 = seq__33819;
var G__33857 = chunk__33820;
var G__33858 = count__33821;
var G__33859 = (i__33822 + (1));
seq__33819 = G__33856;
chunk__33820 = G__33857;
count__33821 = G__33858;
i__33822 = G__33859;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33819);
if(temp__5804__auto__){
var seq__33819__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33819__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33819__$1);
var G__33860 = cljs.core.chunk_rest(seq__33819__$1);
var G__33861 = c__5568__auto__;
var G__33862 = cljs.core.count(c__5568__auto__);
var G__33863 = (0);
seq__33819 = G__33860;
chunk__33820 = G__33861;
count__33821 = G__33862;
i__33822 = G__33863;
continue;
} else {
var vec__33836 = cljs.core.first(seq__33819__$1);
var alias = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33836,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33836,(1),null);
if((!(cljs.core.contains_QMARK_(as_aliases,alias)))){
} else {
throw (new Error(["Assert failed: ",["Duplicate :as-alias ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(alias),", already in use for lib ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(as_aliases,alias))].join(''),"\n","(not (contains? as-aliases alias))"].join('')));
}


var G__33864 = cljs.core.next(seq__33819__$1);
var G__33865 = null;
var G__33866 = (0);
var G__33867 = (0);
seq__33819 = G__33864;
chunk__33820 = G__33865;
count__33821 = G__33866;
i__33822 = G__33867;
continue;
}
} else {
return null;
}
}
break;
}
});
/**
 * Given libspecs, elide all :as-alias. Return a map of :libspecs (filtered)
 * and :as-aliases.
 */
cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_libspecs(var_args){
var G__33841 = arguments.length;
switch (G__33841) {
case 1:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$1 = (function (libspecs){
return cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2 = (function (libspecs,as_aliases){
var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),as_aliases,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__$1,libspec){
var map__33844 = cljs.analyzer.impl.namespaces.check_and_remove_as_alias(libspec);
var map__33844__$1 = cljs.core.__destructure_map(map__33844);
var as_alias = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33844__$1,new cljs.core.Keyword(null,"as-alias","as-alias",82482467));
var libspec__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33844__$1,new cljs.core.Keyword(null,"libspec","libspec",1228503756));
cljs.analyzer.impl.namespaces.check_as_alias_duplicates(new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798).cljs$core$IFn$_invoke$arity$1(ret__$1),as_alias);

var G__33845 = ret__$1;
var G__33845__$1 = (cljs.core.truth_(libspec__$1)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__33845,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,libspec__$1):G__33845);
if(cljs.core.truth_(as_alias)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__33845__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_alias);
} else {
return G__33845__$1;
}
}),ret,libspecs);
}));

(cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$lang$maxFixedArity = 2);

cljs.analyzer.impl.namespaces.elide_aliases_from_ns_specs = (function cljs$analyzer$impl$namespaces$elide_aliases_from_ns_specs(ns_specs){

var ret = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.PersistentVector.EMPTY], null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__33847,p__33848){
var map__33849 = p__33847;
var map__33849__$1 = cljs.core.__destructure_map(map__33849);
var ret__$1 = map__33849__$1;
var as_aliases = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33849__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var vec__33850 = p__33848;
var seq__33851 = cljs.core.seq(vec__33850);
var first__33852 = cljs.core.first(seq__33851);
var seq__33851__$1 = cljs.core.next(seq__33851);
var spec_key = first__33852;
var libspecs = seq__33851__$1;
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"refer-clojure","refer-clojure",813784440),spec_key)))){
var map__33853 = cljs.analyzer.impl.namespaces.elide_aliases_from_libspecs.cljs$core$IFn$_invoke$arity$2(libspecs,as_aliases);
var map__33853__$1 = cljs.core.__destructure_map(map__33853);
var as_aliases__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33853__$1,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798));
var libspecs__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33853__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195));
var G__33854 = ret__$1;
var G__33854__$1 = (((!(cljs.core.empty_QMARK_(as_aliases__$1))))?cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__33854,new cljs.core.Keyword(null,"as-aliases","as-aliases",1485064798),cljs.core.merge,as_aliases__$1):G__33854);
if((!(cljs.core.empty_QMARK_(libspecs__$1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__33854__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs__$1));
} else {
return G__33854__$1;
}
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(ret__$1,new cljs.core.Keyword(null,"libspecs","libspecs",59807195),cljs.core.conj,cljs.core.list_STAR_.cljs$core$IFn$_invoke$arity$2(spec_key,libspecs));
}
}),ret,ns_specs);
});

//# sourceMappingURL=cljs.analyzer.impl.namespaces.js.map
