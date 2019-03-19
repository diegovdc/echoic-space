// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('frontend.state');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
frontend.state.app_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$page,cljs.core.cst$kw$home,cljs.core.cst$kw$single,"",cljs.core.cst$kw$hash,null,cljs.core.cst$kw$music,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$about,cljs.core.PersistentVector.EMPTY], null));
frontend.state.player_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$track_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$duration,null,cljs.core.cst$kw$elapsed,null,cljs.core.cst$kw$percentage,null], null),cljs.core.cst$kw$is_DASH_playing,false,cljs.core.cst$kw$is_DASH_paused,false,cljs.core.cst$kw$now_DASH_playing,cljs.core.PersistentArrayMap.EMPTY], null));
