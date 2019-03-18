// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('views.sonos');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('frontend.state');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('jayq.core');
goog.require('oops.core');
goog.require('frontend.helpers');
views.sonos.is_mobile_or_tablet = (function (){var fexpr__31193 = (function (){var target_obj_31194 = deps;
var next_obj_31195 = (target_obj_31194["isMobileOrTablet"]);
return next_obj_31195;
})();
return (fexpr__31193.cljs$core$IFn$_invoke$arity$0 ? fexpr__31193.cljs$core$IFn$_invoke$arity$0() : fexpr__31193.call(null));
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
views.sonos.toggle_play = (function views$sonos$toggle_play(trackToPlay){
return (function (){
if(cljs.core.not((function (){var G__31197 = cljs.core.cst$kw$is_DASH_playing;
var fexpr__31196 = cljs.core.deref(frontend.state.player_state);
return (fexpr__31196.cljs$core$IFn$_invoke$arity$1 ? fexpr__31196.cljs$core$IFn$_invoke$arity$1(G__31197) : fexpr__31196.call(null,G__31197));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$is_DASH_playing,true);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$now_DASH_playing,trackToPlay);

return reagent.core.after_render((function (){
document.getElementById("audio-player").play();

return views.sonos.scroll_trackname();
}));
} else {
document.getElementById("audio-player").pause();

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$is_DASH_playing,false);
}
});
});
views.sonos.play_random = (function views$sonos$play_random(){
var track = cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__31198_SHARP_){
var and__3925__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__31198_SHARP_),(function (){var G__31202 = cljs.core.cst$kw$now_DASH_playing;
var fexpr__31201 = cljs.core.deref(frontend.state.player_state);
return (fexpr__31201.cljs$core$IFn$_invoke$arity$1 ? fexpr__31201.cljs$core$IFn$_invoke$arity$1(G__31202) : fexpr__31201.call(null,G__31202));
})());
if(and__3925__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__31198_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$file_name], null));
} else {
return and__3925__auto__;
}
}),(function (){var G__31204 = cljs.core.cst$kw$music;
var fexpr__31203 = cljs.core.deref(frontend.state.app_state);
return (fexpr__31203.cljs$core$IFn$_invoke$arity$1 ? fexpr__31203.cljs$core$IFn$_invoke$arity$1(G__31204) : fexpr__31203.call(null,G__31204));
})())));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frontend.state.player_state,cljs.core.assoc,cljs.core.cst$kw$is_DASH_playing,false);

var fexpr__31205 = views.sonos.toggle_play(track);
return (fexpr__31205.cljs$core$IFn$_invoke$arity$0 ? fexpr__31205.cljs$core$IFn$_invoke$arity$0() : fexpr__31205.call(null));
});
views.sonos.player = (function views$sonos$player(state){
var now_playing = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing], null));
var file_name = cljs.core.cst$kw$file_name.cljs$core$IFn$_invoke$arity$2(now_playing,"");
var src = frontend.helpers.make_audio_url(now_playing);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"player"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$audio,new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$id,"audio-player",cljs.core.cst$kw$onTimeUpdate,views.sonos.update_track_data,cljs.core.cst$kw$onEnded,views.sonos.play_random,cljs.core.cst$kw$src,src,cljs.core.cst$kw$encType,"audio/mpeg",cljs.core.cst$kw$autoPlay,false], null)], null)], null);
});
views.sonos.track_name_SINGLEQUOTE_ = (function views$sonos$track_name_SINGLEQUOTE_(is_playing,track_name,track_slug,playable_track_if_in_single){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing") : views.sonos.b.call(null,"playing")),cljs.core.cst$kw$id,(views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing") : views.sonos.b.call(null,"playing"))], null),(cljs.core.truth_(is_playing)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$href,["/music/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(track_slug)].join('')], null):new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_click,views.sonos.toggle_play(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(playable_track_if_in_single))], null))], 0)),(cljs.core.truth_(is_playing)?track_name:"escucha")], null);
});
views.sonos.frwd_btn = (function views$sonos$frwd_btn(icon,is_playing){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing-next-track") : views.sonos.b.call(null,"playing-next-track")))," fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(is_playing)?(icon.cljs$core$IFn$_invoke$arity$1 ? icon.cljs$core$IFn$_invoke$arity$1("fa-forward") : icon.call(null,"fa-forward")):null))].join(''),cljs.core.cst$kw$on_DASH_click,views.sonos.play_random], null)], null);
});
views.sonos.tracks_with_audio = (function views$sonos$tracks_with_audio(tracks){
cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__31206_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__31206_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$file_name], null)));
}));

return tracks;
});
views.sonos.play_btn = (function views$sonos$play_btn(icon,is_playing){
var tracks = views.sonos.tracks_with_audio(cljs.core.cst$kw$music.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state)));
var single = cljs.core.cst$kw$single.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state));
var is_single = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((function (){var G__31209 = cljs.core.cst$kw$page;
var fexpr__31208 = cljs.core.deref(frontend.state.app_state);
return (fexpr__31208.cljs$core$IFn$_invoke$arity$1 ? fexpr__31208.cljs$core$IFn$_invoke$arity$1(G__31209) : fexpr__31208.call(null,G__31209));
})(),cljs.core.cst$kw$music_DASH_single);
var track_to_play = ((is_single)?frontend.helpers.find_first(((function (tracks,single,is_single){
return (function (p1__31207_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(p1__31207_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$slug], null),single));
});})(tracks,single,is_single))
,tracks):frontend.helpers.safe_rand_nth(cljs.core.PersistentArrayMap.EMPTY,tracks));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$i,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(function (){var G__31210 = ["icon-play fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((icon.cljs$core$IFn$_invoke$arity$1 ? icon.cljs$core$IFn$_invoke$arity$1("fa-pause") : icon.call(null,"fa-pause")))].join('');
return (views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1(G__31210) : views.sonos.sonos.call(null,G__31210));
})(),cljs.core.cst$kw$on_DASH_click,views.sonos.toggle_play(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(track_to_play))], null)], null);
});
views.sonos.main = (function views$sonos$main(){
var is_playing = (function (){var G__31214 = cljs.core.cst$kw$is_DASH_playing;
var fexpr__31213 = cljs.core.deref(frontend.state.player_state);
return (fexpr__31213.cljs$core$IFn$_invoke$arity$1 ? fexpr__31213.cljs$core$IFn$_invoke$arity$1(G__31214) : fexpr__31213.call(null,G__31214));
})();
var track_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$track_name], null));
var track_slug = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$slug], null));
var icon = ((function (is_playing,track_name,track_slug){
return (function (p1__31211_SHARP_){
if(cljs.core.truth_(is_playing)){
return p1__31211_SHARP_;
} else {
return "fa-play";
}
});})(is_playing,track_name,track_slug))
;
var playable_track_if_in_single = cljs.core.some(((function (is_playing,track_name,track_slug,icon){
return (function (p1__31212_SHARP_){
var and__3925__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$single.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__31212_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$slug], null)));
if(and__3925__auto__){
var and__3925__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__31212_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$attributes,cljs.core.cst$kw$file_name], null));
if(cljs.core.truth_(and__3925__auto____$1)){
return p1__31212_SHARP_;
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
});})(is_playing,track_name,track_slug,icon))
,cljs.core.cst$kw$music.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing-container") : views.sonos.b.call(null,"playing-container")),cljs.core.cst$kw$id,(views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing-container") : views.sonos.b.call(null,"playing-container"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.b.cljs$core$IFn$_invoke$arity$1 ? views.sonos.b.cljs$core$IFn$_invoke$arity$1("playing-overflower") : views.sonos.b.call(null,"playing-overflower")))].join('')], null),views.sonos.track_name_SINGLEQUOTE_(is_playing,track_name,track_slug,playable_track_if_in_single)], null),views.sonos.frwd_btn(icon,is_playing),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("duration") : views.sonos.sonos.call(null,"duration"))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,(views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("elapsed") : views.sonos.sonos.call(null,"elapsed")),cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$track_DASH_data,cljs.core.cst$kw$percentage], null),"0")),"%"].join('')], null)], null)], null),views.sonos.play_btn(icon,is_playing),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,(views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time-container") : views.sonos.sonos.call(null,"time-container"))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time ") : views.sonos.sonos.call(null,"time "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time-elapsed") : views.sonos.sonos.call(null,"time-elapsed")))].join('')], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$track_DASH_data,cljs.core.cst$kw$elapsed], null),"00:00")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time ") : views.sonos.sonos.call(null,"time "))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((views.sonos.sonos.cljs$core$IFn$_invoke$arity$1 ? views.sonos.sonos.cljs$core$IFn$_invoke$arity$1("time-total") : views.sonos.sonos.call(null,"time-total")))].join('')], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$track_DASH_data,cljs.core.cst$kw$duration], null),"00:00")], null),views.sonos.player(frontend.state.player_state)], null)], null)], null);
});
