// Compiled by ClojureScript 1.10.312 {}
goog.provide('views.sonos');
goog.require('cljs.core');
goog.require('frontend.state');
goog.require('clojure.string');
goog.require('reagent.core');
goog.require('jayq.core');
goog.require('oops.core');
goog.require('frontend.helpers');
views.sonos.is_mobile_or_tablet = (function (){var target_obj_35176 = deps;
var _STAR_runtime_state_STAR_35178 = oops.state._STAR_runtime_state_STAR_;
oops.state._STAR_runtime_state_STAR_ = oops.state.prepare_state.call(null,target_obj_35176,(new Error()),function(){arguments[0].apply(console,Array.prototype.slice.call(arguments,1))});

try{var next_obj_35177 = ((oops.core.validate_object_access_dynamically.call(null,target_obj_35176,(0),"isMobileOrTablet",true,true,false))?(target_obj_35176["isMobileOrTablet"]):null);
return next_obj_35177;
}finally {oops.state._STAR_runtime_state_STAR_ = _STAR_runtime_state_STAR_35178;
}})().call(null);
views.sonos.log = deps.log;
views.sonos.b = cljs.core.partial.call(null,cljs.core.str,"menu-main__");
views.sonos.sonos = cljs.core.partial.call(null,cljs.core.str,"sonos-player__");
views.sonos.update_track_data = (function views$sonos$update_track_data(e){
var current_time = e.target.currentTime;
var duration = e.target.duration;
var result = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),frontend.helpers.secondsToMinutes.call(null,duration),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),frontend.helpers.secondsToMinutes.call(null,current_time),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),frontend.helpers.percentage.call(null,current_time,duration)], null);
return cljs.core.swap_BANG_.call(null,frontend.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"track-data","track-data",-2061070323),result);
});
views.sonos.scroll_trackname = (function views$sonos$scroll_trackname(){
var container = jayq.core.$.call(null,"#menu-main__playing-container");
var track_name = jayq.core.$.call(null,"#menu-main__playing");
var diff = (jayq.core.width.call(null,container) - jayq.core.width.call(null,track_name));
var should_scroll = (diff < (0));
var position = cljs.core.atom.call(null,diff);
track_name.stop();

jayq.core.css.call(null,track_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));

if(should_scroll){
var to_the_left = ((function (container,track_name,diff,should_scroll,position){
return (function views$sonos$scroll_trackname_$_to_the_left(){
return jayq.core.anim.call(null,track_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),diff], null),(7000),to_the_right);
});})(container,track_name,diff,should_scroll,position))
;
var to_the_right = ((function (container,track_name,diff,should_scroll,position){
return (function views$sonos$scroll_trackname_$_to_the_right(){
return jayq.core.anim.call(null,track_name,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"left","left",-399115937),(0)], null),(7000),to_the_left);
});})(container,track_name,diff,should_scroll,position))
;
return to_the_left.call(null);
} else {
return null;
}
});
views.sonos.toggle_play = (function views$sonos$toggle_play(trackToPlay){
return (function (){
if(cljs.core.not.call(null,cljs.core.deref.call(null,frontend.state.player_state).call(null,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457)))){
cljs.core.swap_BANG_.call(null,frontend.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457),true);

if(cljs.core.not.call(null,new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.player_state)))){
cljs.core.swap_BANG_.call(null,frontend.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),trackToPlay);
} else {
}

cljs.core.swap_BANG_.call(null,frontend.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279),false);

return reagent.core.after_render.call(null,(function (){
document.getElementById("audio-player").play();

return views.sonos.scroll_trackname.call(null);
}));
} else {
document.getElementById("audio-player").pause();

cljs.core.swap_BANG_.call(null,frontend.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457),false);

return cljs.core.swap_BANG_.call(null,frontend.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279),true);
}
});
});
views.sonos.play_random = (function views$sonos$play_random(){
var track = new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth.call(null,cljs.core.filter.call(null,(function (p1__35179_SHARP_){
var and__3925__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__35179_SHARP_),cljs.core.deref.call(null,frontend.state.player_state).call(null,new cljs.core.Keyword(null,"now-playing","now-playing",1487806653)));
if(and__3925__auto__){
return cljs.core.get_in.call(null,p1__35179_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"file_name","file_name",2030201601)], null));
} else {
return and__3925__auto__;
}
}),cljs.core.deref.call(null,frontend.state.app_state).call(null,new cljs.core.Keyword(null,"music","music",-1063514396)))));
cljs.core.swap_BANG_.call(null,frontend.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457),false);

return views.sonos.toggle_play.call(null,track).call(null);
});
views.sonos.player = (function views$sonos$player(state){
var now_playing = cljs.core.get_in.call(null,cljs.core.deref.call(null,state),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653)], null));
var file_name = new cljs.core.Keyword(null,"file_name","file_name",2030201601).cljs$core$IFn$_invoke$arity$2(now_playing,"");
var src = frontend.helpers.make_audio_url.call(null,now_playing);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"player"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"audio","audio",1819127321),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"audio-player",new cljs.core.Keyword(null,"onTimeUpdate","onTimeUpdate",-1509882350),views.sonos.update_track_data,new cljs.core.Keyword(null,"onEnded","onEnded",1393313720),views.sonos.play_random,new cljs.core.Keyword(null,"src","src",-1651076051),src,new cljs.core.Keyword(null,"encType","encType",1733182873),"audio/mpeg",new cljs.core.Keyword(null,"autoPlay","autoPlay",-561263241),false], null)], null)], null);
});
views.sonos.track_name_SINGLEQUOTE_ = (function views$sonos$track_name_SINGLEQUOTE_(is_playing,is_paused,track_name,track_slug,playable_track_if_in_single){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),views.sonos.b.call(null,"playing"),new cljs.core.Keyword(null,"id","id",-1388402092),views.sonos.b.call(null,"playing")], null),(cljs.core.truth_(is_playing)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["/music/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(track_slug)].join('')], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),views.sonos.toggle_play.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(playable_track_if_in_single))], null))),(cljs.core.truth_((function (){var or__3936__auto__ = is_playing;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return is_paused;
}
})())?track_name:"escucha")], null);
});
views.sonos.frwd_btn = (function views$sonos$frwd_btn(icon,is_playing){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(views.sonos.b.call(null,"playing-next-track"))," fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(is_playing)?icon.call(null,"fa-forward"):null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),views.sonos.play_random], null)], null);
});
views.sonos.tracks_with_audio = (function views$sonos$tracks_with_audio(tracks){
cljs.core.filter.call(null,(function (p1__35180_SHARP_){
return cljs.core.not_EQ_.call(null,null,cljs.core.get_in.call(null,p1__35180_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"file_name","file_name",2030201601)], null)));
}));

return tracks;
});
/**
 * Play button for the lower bar of sonos
 */
views.sonos.play_btn = (function views$sonos$play_btn(icon,is_playing){
var tracks = views.sonos.tracks_with_audio.call(null,new cljs.core.Keyword(null,"music","music",-1063514396).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.app_state)));
var single = new cljs.core.Keyword(null,"single","single",1551466437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.app_state));
var is_single = cljs.core._EQ_.call(null,cljs.core.deref.call(null,frontend.state.app_state).call(null,new cljs.core.Keyword(null,"page","page",849072397)),new cljs.core.Keyword(null,"music-single","music-single",-2070977446));
var track_to_play = ((is_single)?frontend.helpers.find_first.call(null,((function (tracks,single,is_single){
return (function (p1__35181_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.get_in.call(null,p1__35181_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slug","slug",2029314850)], null),single));
});})(tracks,single,is_single))
,tracks):frontend.helpers.safe_rand_nth.call(null,cljs.core.PersistentArrayMap.EMPTY,tracks));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),views.sonos.sonos.call(null,["icon-play fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon.call(null,"fa-pause"))].join('')),new cljs.core.Keyword(null,"on-click","on-click",1632826543),views.sonos.toggle_play.call(null,new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(track_to_play))], null)], null);
});
views.sonos.main = (function views$sonos$main(){
var is_playing = cljs.core.deref.call(null,frontend.state.player_state).call(null,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457));
var is_paused = cljs.core.deref.call(null,frontend.state.player_state).call(null,new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279));
var track_name = cljs.core.get_in.call(null,cljs.core.deref.call(null,frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"track_name","track_name",1331132230)], null));
var track_slug = cljs.core.get_in.call(null,cljs.core.deref.call(null,frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"slug","slug",2029314850)], null));
var icon = ((function (is_playing,is_paused,track_name,track_slug){
return (function (p1__35182_SHARP_){
if(cljs.core.truth_(is_playing)){
return p1__35182_SHARP_;
} else {
return "fa-play";
}
});})(is_playing,is_paused,track_name,track_slug))
;
var playable_track_if_in_single = cljs.core.some.call(null,((function (is_playing,is_paused,track_name,track_slug,icon){
return (function (p1__35183_SHARP_){
var and__3925__auto__ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"single","single",1551466437).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.app_state)),cljs.core.get_in.call(null,p1__35183_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"slug","slug",2029314850)], null)));
if(and__3925__auto__){
var and__3925__auto____$1 = cljs.core.get_in.call(null,p1__35183_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"file_name","file_name",2030201601)], null));
if(cljs.core.truth_(and__3925__auto____$1)){
return p1__35183_SHARP_;
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
});})(is_playing,is_paused,track_name,track_slug,icon))
,new cljs.core.Keyword(null,"music","music",-1063514396).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,frontend.state.app_state)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),views.sonos.b.call(null,"playing-container"),new cljs.core.Keyword(null,"id","id",-1388402092),views.sonos.b.call(null,"playing-container")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(views.sonos.b.call(null,"playing-overflower"))].join('')], null),views.sonos.track_name_SINGLEQUOTE_.call(null,is_playing,is_paused,track_name,track_slug,playable_track_if_in_single)], null),views.sonos.frwd_btn.call(null,icon,is_playing),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),views.sonos.sonos.call(null,"duration")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),views.sonos.sonos.call(null,"elapsed"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.call(null,cljs.core.deref.call(null,frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track-data","track-data",-2061070323),new cljs.core.Keyword(null,"percentage","percentage",-1610213650)], null),"0")),"%"].join('')], null)], null)], null),views.sonos.play_btn.call(null,icon,is_playing),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),views.sonos.sonos.call(null,"time-container")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(views.sonos.sonos.call(null,"time ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(views.sonos.sonos.call(null,"time-elapsed"))].join('')], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track-data","track-data",-2061070323),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)], null),"00:00")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(views.sonos.sonos.call(null,"time ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(views.sonos.sonos.call(null,"time-total"))].join('')], null),cljs.core.get_in.call(null,cljs.core.deref.call(null,frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track-data","track-data",-2061070323),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),"00:00")], null),views.sonos.player.call(null,frontend.state.player_state)], null)], null)], null);
});

//# sourceMappingURL=sonos.js.map?rel=1552936137024
