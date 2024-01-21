goog.provide('browser.views.sonos');
var module$js$index=shadow.js.require("module$js$index", {});
var module$node_modules$howler$dist$howler=shadow.js.require("module$node_modules$howler$dist$howler", {});
browser.views.sonos.$ = (function browser$views$sonos$$(selector){
return document.querySelector(selector);
});
browser.views.sonos.width = (function browser$views$sonos$width(_){
return console.error("please implement `width`");
});
browser.views.sonos.css = (function browser$views$sonos$css(_,___$1){
return console.error("please implement `css`");
});
browser.views.sonos.anim = (function browser$views$sonos$anim(_,___$1,___$2,___$3){
return console.error("please implement `anim`");
});
browser.views.sonos.is_mobile_or_tablet = module$js$index.isMobileOrTablet;
browser.views.sonos.b = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"menu-main__");
browser.views.sonos.sonos = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.str,"sonos-player__");
browser.views.sonos.scroll_trackname = (function browser$views$sonos$scroll_trackname(){
var container = browser.views.sonos.$("#menu-main__playing-container");
var track_name = browser.views.sonos.$("#menu-main__playing");
var diff = (browser.views.sonos.width(container) - browser.views.sonos.width(track_name));
var should_scroll = (diff < (0));
return (track_name.style.left = (0));
});
/**
 * update player info by reading it from howl (see let)
 */
browser.views.sonos.update_callback = (function browser$views$sonos$update_callback(){
var howl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"howl","howl",2017498573)], null));
var is_playing = new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.state.player_state));
if(cljs.core.truth_((function (){var and__5043__auto__ = howl;
if(cljs.core.truth_(and__5043__auto__)){
return is_playing;
} else {
return and__5043__auto__;
}
})())){
var duration = howl.duration();
var seek = howl.seek();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"track-data","track-data",-2061070323),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"duration","duration",1444101068),browser.helpers.secondsToMinutes(duration),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),browser.helpers.secondsToMinutes(seek),new cljs.core.Keyword(null,"percentage","percentage",-1610213650),browser.helpers.percentage(seek,duration)], null));
} else {
return null;
}
});
if((typeof browser !== 'undefined') && (typeof browser.views !== 'undefined') && (typeof browser.views.sonos !== 'undefined') && (typeof browser.views.sonos.update_interval !== 'undefined')){
} else {
browser.views.sonos.update_interval = setInterval((function (){
return browser.views.sonos.update_callback();
}),(200));
}
browser.views.sonos.get_offset_top = (function browser$views$sonos$get_offset_top(id){
return document.getElementById(id).offsetTop;
});
browser.views.sonos.toggle_play_video = (function browser$views$sonos$toggle_play_video(post_attrs){
var onPlayerReady = (function (e){
var player = e.target;
var start_seconds = new cljs.core.Keyword(null,"startSeconds","startSeconds",837829273).cljs$core$IFn$_invoke$arity$1(post_attrs);
console.log("event",e);

console.log("target",e.target);

player.playVideo();

if(cljs.core.truth_(start_seconds)){
player.seekTo(start_seconds);
} else {
}

return browser.helpers.scroll_to(browser.views.sonos.get_offset_top("single__video-player-container"));
});
return (function (){
try{return (new window.YT.Player("player",(function (){var obj33785 = ({"videoId":new cljs.core.Keyword(null,"youtube_id","youtube_id",1076585092).cljs$core$IFn$_invoke$arity$1(post_attrs),"events":(function (){var obj33787 = ({"onReady":onPlayerReady});
return obj33787;
})()});
return obj33785;
})()));
}catch (e33783){if((e33783 instanceof Error)){
var e = e33783;
return null;
} else {
throw e33783;

}
}});
});
browser.views.sonos.toggle_play_STAR_ = (function browser$views$sonos$toggle_play_STAR_(track_to_play,should_change_track_QMARK_){
return (function (){
console.debug("toggle-play",track_to_play);

var previously_playing = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"howl","howl",2017498573)], null),cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pause","pause",-2095325672),(function (){
return null;
})], null)));
if(cljs.core.truth_((function (){var or__5045__auto__ = should_change_track_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not((function (){var fexpr__33788 = cljs.core.deref(browser.state.player_state);
return (fexpr__33788.cljs$core$IFn$_invoke$arity$1 ? fexpr__33788.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457)) : fexpr__33788.call(null,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457)));
})());
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457),true);

if(cljs.core.truth_((function (){var or__5045__auto__ = should_change_track_QMARK_;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.not(new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.state.player_state)));
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(track_to_play,new cljs.core.Keyword(null,"howl","howl",2017498573),(new module$node_modules$howler$dist$howler.Howl(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"src","src",-1651076051),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [browser.helpers.make_audio_url(track_to_play)], null),new cljs.core.Keyword(null,"html5","html5",1541457142),true,new cljs.core.Keyword(null,"autoplay","autoplay",-1319501991),true,new cljs.core.Keyword(null,"onend","onend",-1596852449),browser.views.sonos.play_random], null))))));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279),false);

return reagent.core.after_render((function (){
previously_playing.pause();

cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"howl","howl",2017498573)], null)).play();

return browser.views.sonos.scroll_trackname();
}));
} else {
cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"howl","howl",2017498573)], null)).pause();

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457),false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279),true);
}
});
});
browser.views.sonos.toggle_play = (function browser$views$sonos$toggle_play(track_to_play,should_play_track_QMARK_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"is_video","is_video",-1178543870).cljs$core$IFn$_invoke$arity$1(track_to_play))){
return browser.views.sonos.toggle_play_video(track_to_play);
} else {
return browser.views.sonos.toggle_play_STAR_(track_to_play,should_play_track_QMARK_);
}
});
browser.views.sonos.play_random = (function browser$views$sonos$play_random(){
var track = new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(cljs.core.rand_nth(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__33792_SHARP_){
var and__5043__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__33792_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"title","title",636505583)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"title","title",636505583)], null)));
if(and__5043__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__33792_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"file_name","file_name",2030201601)], null));
} else {
return and__5043__auto__;
}
}),(function (){var fexpr__33798 = cljs.core.deref(browser.state.app_state);
return (fexpr__33798.cljs$core$IFn$_invoke$arity$1 ? fexpr__33798.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"music","music",-1063514396)) : fexpr__33798.call(null,new cljs.core.Keyword(null,"music","music",-1063514396)));
})())));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(browser.state.player_state,cljs.core.assoc,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457),false);

return browser.views.sonos.toggle_play(track,true)();
});
browser.views.sonos.track_name_SINGLEQUOTE_ = (function browser$views$sonos$track_name_SINGLEQUOTE_(is_playing,is_paused,track_name,track_slug,playable_track_if_in_single){
var attrs = new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(playable_track_if_in_single);
var on_click = (cljs.core.truth_(playable_track_if_in_single)?browser.views.sonos.toggle_play(attrs,true):browser.views.sonos.play_random);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"class","class",-2030961996),browser.views.sonos.b("playing"),new cljs.core.Keyword(null,"id","id",-1388402092),browser.views.sonos.b("playing"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),(cljs.core.truth_(is_playing)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),(function (){var G__33805 = (cljs.core.truth_(cljs.core.some((function (p1__33802_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Bit\u00E1cora",p1__33802_SHARP_);
}),new cljs.core.Keyword(null,"category","category",-593092832).cljs$core$IFn$_invoke$arity$1(attrs)))?new cljs.core.Keyword("browser.routes","blog-single","browser.routes/blog-single",768729615):new cljs.core.Keyword("browser.routes","music-single","browser.routes/music-single",-2105853526));
var G__33806 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),track_slug], null);
var fexpr__33804 = new cljs.core.Keyword(null,"routing-fn","routing-fn",1896294414).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.state.app_state));
return (fexpr__33804.cljs$core$IFn$_invoke$arity$2 ? fexpr__33804.cljs$core$IFn$_invoke$arity$2(G__33805,G__33806) : fexpr__33804.call(null,G__33805,G__33806));
})()], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),on_click], null))], 0)),(cljs.core.truth_((function (){var or__5045__auto__ = is_playing;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return is_paused;
}
})())?track_name:"escucha")], null);
});
browser.views.sonos.frwd_btn = (function browser$views$sonos$frwd_btn(icon,is_playing){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(browser.views.sonos.b("playing-next-track"))," fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(is_playing)?(icon.cljs$core$IFn$_invoke$arity$1 ? icon.cljs$core$IFn$_invoke$arity$1("fa-forward") : icon.call(null,"fa-forward")):null))].join(''),new cljs.core.Keyword(null,"on-click","on-click",1632826543),browser.views.sonos.play_random], null)], null);
});
browser.views.sonos.tracks_with_audio = (function browser$views$sonos$tracks_with_audio(tracks){
cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__33809_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(null,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__33809_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"file_name","file_name",2030201601)], null)));
}));

return tracks;
});
browser.views.sonos.find_track_to_play = cljs.core.memoize((function (is_single,single,tracks){
console.debug("is single",is_single,single,"-");

if(cljs.core.truth_(is_single)){
return browser.helpers.find_first((function (p1__33832_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(single,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__33832_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.Keyword(null,"slug","slug",2029314850)], null)));
}),tracks);
} else {
return browser.helpers.safe_rand_nth(cljs.core.PersistentArrayMap.EMPTY,tracks);
}
}));
/**
 * Play button for the lower bar of sonos
 */
browser.views.sonos.play_btn = (function browser$views$sonos$play_btn(icon,is_playing,currently_playing_track){
var tracks = browser.views.sonos.tracks_with_audio(cljs.core.flatten(cljs.core.vals(cljs.core.select_keys(cljs.core.deref(browser.state.app_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"music","music",-1063514396),new cljs.core.Keyword(null,"blog","blog",-302707364)], null)))));
var single = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.state.app_state))));
var is_single = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.state.app_state)),new cljs.core.Keyword(null,"music-single","music-single",-2070977446))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(browser.state.app_state)),new cljs.core.Keyword(null,"blog-single","blog-single",1335736031))));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i","i",-1386841315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),browser.views.sonos.sonos(["icon-play fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((icon.cljs$core$IFn$_invoke$arity$1 ? icon.cljs$core$IFn$_invoke$arity$1("fa-pause") : icon.call(null,"fa-pause")))].join('')),new cljs.core.Keyword(null,"on-click","on-click",1632826543),browser.views.sonos.toggle_play(new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(browser.views.sonos.find_track_to_play(is_single,single,tracks)),((((is_single) && (((cljs.core.not(is_playing)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(currently_playing_track,single))))))?true:false))], null)], null);
});
browser.views.sonos.get_style = (function browser$views$sonos$get_style(element){
return window.getComputedStyle(element);
});
browser.views.sonos.get_duration_bar_padding_left = (function browser$views$sonos$get_duration_bar_padding_left(){
var or__5045__auto__ = (function (){var G__33855 = document.querySelector(".sonos-player__duration");
var G__33855__$1 = (((G__33855 == null))?null:browser.views.sonos.get_style(G__33855));
var G__33855__$2 = (((G__33855__$1 == null))?null:G__33855__$1.paddingLeft);
if((G__33855__$2 == null)){
return null;
} else {
return parseInt(G__33855__$2);
}
})();
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (0);
}
});
browser.views.sonos.click_x = (function browser$views$sonos$click_x(event){
return event.clientX;
});
browser.views.sonos.window_width = (function browser$views$sonos$window_width(){
return document.body.clientWidth;
});
browser.views.sonos.set_new_track_position_BANG_ = (function browser$views$sonos$set_new_track_position_BANG_(event,track){
var x = event.clientX;
var pad = browser.views.sonos.get_duration_bar_padding_left();
var howl = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"howl","howl",2017498573)], null));
var new_position = (cljs.core.truth_(howl)?(howl.duration() * ((x - pad) / (browser.views.sonos.window_width() - pad))):null);
if(((cljs.core.not(howl)) || ((x <= pad)))){
return null;
} else {
return howl.seek(new_position);
}
});
browser.views.sonos.get_playable_track = (function browser$views$sonos$get_playable_track(app_state){
var slug = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"route","route",329891309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app_state))));
return cljs.core.some((function (p1__33869_SHARP_){
var and__5043__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slug,new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__33869_SHARP_)));
if(and__5043__auto__){
var and__5043__auto____$1 = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"file_name","file_name",2030201601).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__33869_SHARP_));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"is_video","is_video",-1178543870).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1(p1__33869_SHARP_));
}
})();
if(cljs.core.truth_(and__5043__auto____$1)){
return p1__33869_SHARP_;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}),browser.views.helpers.get_entries(app_state));
});
browser.views.sonos.main = (function browser$views$sonos$main(){
var is_playing = (function (){var fexpr__33880 = cljs.core.deref(browser.state.player_state);
return (fexpr__33880.cljs$core$IFn$_invoke$arity$1 ? fexpr__33880.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457)) : fexpr__33880.call(null,new cljs.core.Keyword(null,"is-playing","is-playing",-1699110457)));
})();
var is_paused = (function (){var fexpr__33881 = cljs.core.deref(browser.state.player_state);
return (fexpr__33881.cljs$core$IFn$_invoke$arity$1 ? fexpr__33881.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279)) : fexpr__33881.call(null,new cljs.core.Keyword(null,"is-paused","is-paused",-1607276279)));
})();
var track_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"track_name","track_name",1331132230)], null));
var track_slug = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"now-playing","now-playing",1487806653),new cljs.core.Keyword(null,"slug","slug",2029314850)], null));
var icon = (function (p1__33879_SHARP_){
if(cljs.core.truth_(is_playing)){
return p1__33879_SHARP_;
} else {
return "fa-play";
}
});
var playable_track_if_in_single = browser.views.sonos.get_playable_track(browser.state.app_state);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),browser.views.sonos.b("playing-container"),new cljs.core.Keyword(null,"id","id",-1388402092),browser.views.sonos.b("playing-container")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),cljs.core.str.cljs$core$IFn$_invoke$arity$1(browser.views.sonos.b("playing-overflower"))], null),browser.views.sonos.track_name_SINGLEQUOTE_(is_playing,is_paused,track_name,track_slug,playable_track_if_in_single)], null),browser.views.sonos.frwd_btn(icon,is_playing),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),browser.views.sonos.sonos("duration"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),browser.views.sonos.set_new_track_position_BANG_], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),browser.views.sonos.sonos("elapsed"),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((browser.views.sonos.window_width() - browser.views.sonos.get_duration_bar_padding_left()) * (cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track-data","track-data",-2061070323),new cljs.core.Keyword(null,"percentage","percentage",-1610213650)], null),(0)) / (100)))),"px"].join('')], null)], null)], null),browser.views.sonos.play_btn(icon,is_playing,track_slug),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),browser.views.sonos.sonos("time-container")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(browser.views.sonos.sonos("time ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(browser.views.sonos.sonos("time-elapsed"))].join('')], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track-data","track-data",-2061070323),new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698)], null),"00:00")], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(browser.views.sonos.sonos("time ")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(browser.views.sonos.sonos("time-total"))].join('')], null),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(browser.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"track-data","track-data",-2061070323),new cljs.core.Keyword(null,"duration","duration",1444101068)], null),"00:00")], null)], null)], null)], null);
});

//# sourceMappingURL=browser.views.sonos.js.map
