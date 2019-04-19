// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('views.sonos');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('frontend.state');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('jayq.core');
goog.require('oops.core');
goog.require('views.helpers');
goog.require('frontend.helpers');
views.sonos.is_mobile_or_tablet = (function (){var fexpr__29964 = (function (){var target_obj_29965 = deps;
var next_obj_29966 = (target_obj_29965["isMobileOrTablet"]);
return next_obj_29966;
})();
return (fexpr__29964.cljs$core$IFn$_invoke$arity$0 ? fexpr__29964.cljs$core$IFn$_invoke$arity$0() : fexpr__29964.call(null));
})();
views.sonos.Howl = (function (){var target_obj_29967 = deps;
var next_obj_29968 = (target_obj_29967["Howl"]);
return next_obj_29968;
})();
views.sonos.Howler = (function (){var target_obj_29969 = deps;
var next_obj_29970 = (target_obj_29969["Howler"]);
return next_obj_29970;
})();
views.sonos.log = deps.log;
views.sonos.b = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"menu-main__");
views.sonos.sonos = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"sonos-player__");
views.sonos.update_track_data = (function views$sonos$update_track_data(e){
var current_time = e.target.currentTime;
var duration = e.target.duration;
var result = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$duration,frontend.helpers.secondsToMinutes(duration),cljs.core.cst$kw$elapsed,frontend.helpers.secondsToMinutes(current_time),cljs.core.cst$kw$percentage,frontend.helpers.percentage(current_time,duration)], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$track_DASH_data,result);
});
views.sonos.scroll_trackname = (function views$sonos$scroll_trackname(){
var container = jayq.core.$.cljs$core$IFn$_invoke$arity$1("#menu-main__playing-container");
var track_name = jayq.core.$.cljs$core$IFn$_invoke$arity$1("#menu-main__playing");
var diff = (jayq.core.width.cljs$core$IFn$_invoke$arity$1(container) - jayq.core.width.cljs$core$IFn$_invoke$arity$1(track_name));
var should_scroll = (diff < (0));
var position = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(diff);
track_name.stop();

jayq.core.css.cljs$core$IFn$_invoke$arity$2(track_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,(0)], null));

if(should_scroll){
var to_the_left = ((function (container,track_name,diff,should_scroll,position){
return (function views$sonos$scroll_trackname_$_to_the_left(){
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(track_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,diff], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(7000),to_the_right], 0));
});})(container,track_name,diff,should_scroll,position))
;
var to_the_right = ((function (container,track_name,diff,should_scroll,position){
return (function views$sonos$scroll_trackname_$_to_the_right(){
return jayq.core.anim.cljs$core$IFn$_invoke$arity$variadic(track_name,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$left,(0)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(7000),to_the_left], 0));
});})(container,track_name,diff,should_scroll,position))
;
return to_the_left();
} else {
return null;
}
});
setInterval((function (){
var howl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$howl], null));
var is_playing = cljs.core.cst$kw$is_DASH_playing.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.player_state));
if(cljs.core.truth_((function (){var and__3925__auto__ = howl;
if(cljs.core.truth_(and__3925__auto__)){
return is_playing;
} else {
return and__3925__auto__;
}
})())){
var duration = howl.duration();
var seek = howl.seek();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$track_DASH_data,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$duration,frontend.helpers.secondsToMinutes(duration),cljs.core.cst$kw$elapsed,frontend.helpers.secondsToMinutes(seek),cljs.core.cst$kw$percentage,frontend.helpers.percentage(seek,duration)], null));
} else {
return null;
}
}),(500));
views.sonos.toggle_play = (function views$sonos$toggle_play(track_to_play,should_change_track_QMARK_){
return (function (){
var previously_playing = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$howl], null),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$pause,(function (){
return null;
})], null)));
if(cljs.core.truth_((function (){var or__3936__auto__ = should_change_track_QMARK_;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.not((function (){var G__29972 = cljs.core.cst$kw$is_DASH_playing;
var fexpr__29971 = cljs.core.deref(frontend.state.player_state);
return (fexpr__29971.cljs$core$IFn$_invoke$arity$1 ? fexpr__29971.cljs$core$IFn$_invoke$arity$1(G__29972) : fexpr__29971.call(null,G__29972));
})());
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$is_DASH_playing,true);

if(cljs.core.truth_((function (){var or__3936__auto__ = should_change_track_QMARK_;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.not(cljs.core.cst$kw$is_DASH_paused.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.player_state)));
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$now_DASH_playing,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(track_to_play,cljs.core.cst$kw$howl,(new views.sonos.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frontend.helpers.make_audio_url(track_to_play)], null),cljs.core.cst$kw$html5,true], null))))));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$is_DASH_paused,false);

return reagent.core.after_render(((function (previously_playing){
return (function (){
previously_playing.pause();

cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$howl], null)).play();

return views.sonos.scroll_trackname();
});})(previously_playing))
);
} else {
cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$howl], null)).pause();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$is_DASH_playing,false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$is_DASH_paused,true);
}
});
});
views.sonos.play_random = (function views$sonos$play_random(){
var track = cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__29973_SHARP_){
var and__3925__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__29973_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$title], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$title], null)));
if(and__3925__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__29973_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$file_name], null));
} else {
return and__3925__auto__;
}
}),(function (){var G__29975 = cljs.core.cst$kw$music;
var fexpr__29974 = cljs.core.deref(frontend.state.app_state);
return (fexpr__29974.cljs$core$IFn$_invoke$arity$1 ? fexpr__29974.cljs$core$IFn$_invoke$arity$1(G__29975) : fexpr__29974.call(null,G__29975));
})())));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$is_DASH_playing,false);

var fexpr__29976 = views.sonos.toggle_play(track,true);
return (fexpr__29976.cljs$core$IFn$_invoke$arity$0 ? fexpr__29976.cljs$core$IFn$_invoke$arity$0() : fexpr__29976.call(null));
});
views.sonos.track_name_SINGLEQUOTE_ = (function views$sonos$track_name_SINGLEQUOTE_(is_playing,is_paused,track_name,track_slug,playable_track_if_in_single){
var on_click = (cljs.core.truth_(playable_track_if_in_single)?views.sonos.toggle_play(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(playable_track_if_in_single),true):views.sonos.play_random);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing") : views.sonos.b.call(null,"playing")),cljs.core.cst$kw$id,(views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing") : views.sonos.b.call(null,"playing"))], null),(cljs.core.truth_(is_playing)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/music/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(track_slug)].join('')], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,on_click], null))], 0)),(cljs.core.truth_((function (){var or__3936__auto__ = is_playing;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return is_paused;
}
})())?track_name:"escucha")], null);
});
views.sonos.frwd_btn = (function views$sonos$frwd_btn(icon,is_playing){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing-next-track") : views.sonos.b.call(null,"playing-next-track")))," fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(is_playing)?(icon.cljs$core$IFn$_invoke$arity$1 ? icon.cljs$core$IFn$_invoke$arity$1("fa-forward") : icon.call(null,"fa-forward")):null))].join(''),cljs.core.cst$kw$on_DASH_click,views.sonos.play_random], null)], null);
});
views.sonos.tracks_with_audio = (function views$sonos$tracks_with_audio(tracks){
cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__29977_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__29977_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$file_name], null)));
}));

return tracks;
});
views.sonos.find_track_to_play = cljs.core.memoize((function (is_single,single,tracks){
if(cljs.core.truth_(is_single)){
return frontend.helpers.find_first((function (p1__29978_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(single,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__29978_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$slug], null)));
}),tracks);
} else {
return frontend.helpers.safe_rand_nth(cljs.core.PersistentArrayMap.EMPTY,tracks);
}
}));
/**
 * Play button for the lower bar of sonos
 */
views.sonos.play_btn = (function views$sonos$play_btn(icon,is_playing,currently_playing_track){
var tracks = views.sonos.tracks_with_audio(views.helpers.get_entries(frontend.state.app_state));
var single = cljs.core.cst$kw$single.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state));
var is_single = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.app_state),cljs.core.cst$kw$music_DASH_single))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$page.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state)),cljs.core.cst$kw$blog_DASH_single)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(function (){var G__29979 = ["icon-play fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((icon.cljs$core$IFn$_invoke$arity$1 ? icon.cljs$core$IFn$_invoke$arity$1("fa-pause") : icon.call(null,"fa-pause")))].join('');
return (views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1(G__29979) : views.sonos.sonos.call(null,G__29979));
})(),cljs.core.cst$kw$on_DASH_click,views.sonos.toggle_play(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1((views.sonos.find_track_to_play.cljs$core$IFn$_invoke$arity$3 ? views.sonos.find_track_to_play.cljs$core$IFn$_invoke$arity$3(is_single,single,tracks) : views.sonos.find_track_to_play.call(null,is_single,single,tracks))),((((is_single) && (cljs.core.not(is_playing)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(currently_playing_track,single))))?true:false))], null)], null);
});
views.sonos.main = (function views$sonos$main(){
var is_playing = (function (){var G__29983 = cljs.core.cst$kw$is_DASH_playing;
var fexpr__29982 = cljs.core.deref(frontend.state.player_state);
return (fexpr__29982.cljs$core$IFn$_invoke$arity$1 ? fexpr__29982.cljs$core$IFn$_invoke$arity$1(G__29983) : fexpr__29982.call(null,G__29983));
})();
var is_paused = (function (){var G__29985 = cljs.core.cst$kw$is_DASH_paused;
var fexpr__29984 = cljs.core.deref(frontend.state.player_state);
return (fexpr__29984.cljs$core$IFn$_invoke$arity$1 ? fexpr__29984.cljs$core$IFn$_invoke$arity$1(G__29985) : fexpr__29984.call(null,G__29985));
})();
var track_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$track_name], null));
var track_slug = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$slug], null));
var icon = ((function (is_playing,is_paused,track_name,track_slug){
return (function (p1__29980_SHARP_){
if(cljs.core.truth_(is_playing)){
return p1__29980_SHARP_;
} else {
return "fa-play";
}
});})(is_playing,is_paused,track_name,track_slug))
;
var playable_track_if_in_single = cljs.core.some(((function (is_playing,is_paused,track_name,track_slug,icon){
return (function (p1__29981_SHARP_){
var and__3925__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$single.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__29981_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$slug], null)));
if(and__3925__auto__){
var and__3925__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__29981_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$file_name], null));
if(cljs.core.truth_(and__3925__auto____$1)){
return p1__29981_SHARP_;
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
});})(is_playing,is_paused,track_name,track_slug,icon))
,views.helpers.get_entries(frontend.state.app_state));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing-container") : views.sonos.b.call(null,"playing-container")),cljs.core.cst$kw$id,(views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing-container") : views.sonos.b.call(null,"playing-container"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing-overflower") : views.sonos.b.call(null,"playing-overflower")))].join('')], null),views.sonos.track_name_SINGLEQUOTE_(is_playing,is_paused,track_name,track_slug,playable_track_if_in_single)], null),views.sonos.frwd_btn(icon,is_playing),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("duration") : views.sonos.sonos.call(null,"duration"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("elapsed") : views.sonos.sonos.call(null,"elapsed")),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$track_DASH_data,cljs.core.cst$kw$percentage], null),"0")),"%"].join('')], null)], null)], null),views.sonos.play_btn(icon,is_playing,track_slug),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time-container") : views.sonos.sonos.call(null,"time-container"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time ") : views.sonos.sonos.call(null,"time "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time-elapsed") : views.sonos.sonos.call(null,"time-elapsed")))].join('')], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$track_DASH_data,cljs.core.cst$kw$elapsed], null),"00:00")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time ") : views.sonos.sonos.call(null,"time "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time-total") : views.sonos.sonos.call(null,"time-total")))].join('')], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$track_DASH_data,cljs.core.cst$kw$duration], null),"00:00")], null)], null)], null)], null);
});
