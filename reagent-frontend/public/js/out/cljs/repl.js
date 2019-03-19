// Compiled by ClojureScript 1.10.312 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__53700){
var map__53701 = p__53700;
var map__53701__$1 = ((((!((map__53701 == null)))?(((((map__53701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53701):map__53701);
var m = map__53701__$1;
var n = cljs.core.get.call(null,map__53701__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__53701__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53703_53725 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53704_53726 = null;
var count__53705_53727 = (0);
var i__53706_53728 = (0);
while(true){
if((i__53706_53728 < count__53705_53727)){
var f_53729 = cljs.core._nth.call(null,chunk__53704_53726,i__53706_53728);
cljs.core.println.call(null,"  ",f_53729);


var G__53730 = seq__53703_53725;
var G__53731 = chunk__53704_53726;
var G__53732 = count__53705_53727;
var G__53733 = (i__53706_53728 + (1));
seq__53703_53725 = G__53730;
chunk__53704_53726 = G__53731;
count__53705_53727 = G__53732;
i__53706_53728 = G__53733;
continue;
} else {
var temp__5457__auto___53734 = cljs.core.seq.call(null,seq__53703_53725);
if(temp__5457__auto___53734){
var seq__53703_53735__$1 = temp__5457__auto___53734;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53703_53735__$1)){
var c__4337__auto___53736 = cljs.core.chunk_first.call(null,seq__53703_53735__$1);
var G__53737 = cljs.core.chunk_rest.call(null,seq__53703_53735__$1);
var G__53738 = c__4337__auto___53736;
var G__53739 = cljs.core.count.call(null,c__4337__auto___53736);
var G__53740 = (0);
seq__53703_53725 = G__53737;
chunk__53704_53726 = G__53738;
count__53705_53727 = G__53739;
i__53706_53728 = G__53740;
continue;
} else {
var f_53741 = cljs.core.first.call(null,seq__53703_53735__$1);
cljs.core.println.call(null,"  ",f_53741);


var G__53742 = cljs.core.next.call(null,seq__53703_53735__$1);
var G__53743 = null;
var G__53744 = (0);
var G__53745 = (0);
seq__53703_53725 = G__53742;
chunk__53704_53726 = G__53743;
count__53705_53727 = G__53744;
i__53706_53728 = G__53745;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_53746 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3936__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_53746);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_53746)))?cljs.core.second.call(null,arglists_53746):arglists_53746));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__53707_53747 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__53708_53748 = null;
var count__53709_53749 = (0);
var i__53710_53750 = (0);
while(true){
if((i__53710_53750 < count__53709_53749)){
var vec__53711_53751 = cljs.core._nth.call(null,chunk__53708_53748,i__53710_53750);
var name_53752 = cljs.core.nth.call(null,vec__53711_53751,(0),null);
var map__53714_53753 = cljs.core.nth.call(null,vec__53711_53751,(1),null);
var map__53714_53754__$1 = ((((!((map__53714_53753 == null)))?(((((map__53714_53753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53714_53753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53714_53753):map__53714_53753);
var doc_53755 = cljs.core.get.call(null,map__53714_53754__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53756 = cljs.core.get.call(null,map__53714_53754__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53752);

cljs.core.println.call(null," ",arglists_53756);

if(cljs.core.truth_(doc_53755)){
cljs.core.println.call(null," ",doc_53755);
} else {
}


var G__53757 = seq__53707_53747;
var G__53758 = chunk__53708_53748;
var G__53759 = count__53709_53749;
var G__53760 = (i__53710_53750 + (1));
seq__53707_53747 = G__53757;
chunk__53708_53748 = G__53758;
count__53709_53749 = G__53759;
i__53710_53750 = G__53760;
continue;
} else {
var temp__5457__auto___53761 = cljs.core.seq.call(null,seq__53707_53747);
if(temp__5457__auto___53761){
var seq__53707_53762__$1 = temp__5457__auto___53761;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53707_53762__$1)){
var c__4337__auto___53763 = cljs.core.chunk_first.call(null,seq__53707_53762__$1);
var G__53764 = cljs.core.chunk_rest.call(null,seq__53707_53762__$1);
var G__53765 = c__4337__auto___53763;
var G__53766 = cljs.core.count.call(null,c__4337__auto___53763);
var G__53767 = (0);
seq__53707_53747 = G__53764;
chunk__53708_53748 = G__53765;
count__53709_53749 = G__53766;
i__53710_53750 = G__53767;
continue;
} else {
var vec__53716_53768 = cljs.core.first.call(null,seq__53707_53762__$1);
var name_53769 = cljs.core.nth.call(null,vec__53716_53768,(0),null);
var map__53719_53770 = cljs.core.nth.call(null,vec__53716_53768,(1),null);
var map__53719_53771__$1 = ((((!((map__53719_53770 == null)))?(((((map__53719_53770.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53719_53770.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53719_53770):map__53719_53770);
var doc_53772 = cljs.core.get.call(null,map__53719_53771__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_53773 = cljs.core.get.call(null,map__53719_53771__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_53769);

cljs.core.println.call(null," ",arglists_53773);

if(cljs.core.truth_(doc_53772)){
cljs.core.println.call(null," ",doc_53772);
} else {
}


var G__53774 = cljs.core.next.call(null,seq__53707_53762__$1);
var G__53775 = null;
var G__53776 = (0);
var G__53777 = (0);
seq__53707_53747 = G__53774;
chunk__53708_53748 = G__53775;
count__53709_53749 = G__53776;
i__53710_53750 = G__53777;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__53721 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__53722 = null;
var count__53723 = (0);
var i__53724 = (0);
while(true){
if((i__53724 < count__53723)){
var role = cljs.core._nth.call(null,chunk__53722,i__53724);
var temp__5457__auto___53778__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___53778__$1)){
var spec_53779 = temp__5457__auto___53778__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_53779));
} else {
}


var G__53780 = seq__53721;
var G__53781 = chunk__53722;
var G__53782 = count__53723;
var G__53783 = (i__53724 + (1));
seq__53721 = G__53780;
chunk__53722 = G__53781;
count__53723 = G__53782;
i__53724 = G__53783;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__53721);
if(temp__5457__auto____$1){
var seq__53721__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__53721__$1)){
var c__4337__auto__ = cljs.core.chunk_first.call(null,seq__53721__$1);
var G__53784 = cljs.core.chunk_rest.call(null,seq__53721__$1);
var G__53785 = c__4337__auto__;
var G__53786 = cljs.core.count.call(null,c__4337__auto__);
var G__53787 = (0);
seq__53721 = G__53784;
chunk__53722 = G__53785;
count__53723 = G__53786;
i__53724 = G__53787;
continue;
} else {
var role = cljs.core.first.call(null,seq__53721__$1);
var temp__5457__auto___53788__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___53788__$2)){
var spec_53789 = temp__5457__auto___53788__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_53789));
} else {
}


var G__53790 = cljs.core.next.call(null,seq__53721__$1);
var G__53791 = null;
var G__53792 = (0);
var G__53793 = (0);
seq__53721 = G__53790;
chunk__53722 = G__53791;
count__53723 = G__53792;
i__53724 = G__53793;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1552956593548
