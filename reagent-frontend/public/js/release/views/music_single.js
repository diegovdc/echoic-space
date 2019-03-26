// Compiled by ClojureScript 1.10.312 {:static-fns true, :optimize-constants true}
goog.provide('views.music_single');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('views.helpers');
goog.require('frontend.helpers');
goog.require('views.sonos');
goog.require('frontend.state');
goog.require('goog.events');
goog.require('reagent.core');
goog.require('jayq.core');
goog.require('oops.core');
views.music_single.log = deps.log;
views.music_single.get_offset_top = (function views$music_single$get_offset_top(id){
var G__30911 = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(jayq.core.offset.cljs$core$IFn$_invoke$arity$1(jayq.core.$.cljs$core$IFn$_invoke$arity$1(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''))));
var fexpr__30910 = ((function (G__30911){
return (function (p1__30909_SHARP_){
return (p1__30909_SHARP_ - (26));
});})(G__30911))
;
return fexpr__30910(G__30911);
});
views.music_single.go_to_hash = (function views$music_single$go_to_hash(hash){
if(cljs.core.truth_(hash)){
return frontend.helpers.scroll_to(views.music_single.get_offset_top(hash));
} else {
return frontend.helpers.set_scroll((0));
}
});
views.music_single.get_bg_img = (function views$music_single$get_bg_img(post_attrs){
return ["/music/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(post_attrs)),"/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$backgroundImage.cljs$core$IFn$_invoke$arity$1(post_attrs))].join('');
});
views.music_single.bg_img = (function views$music_single$bg_img(url){
return new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$background_DASH_image,["url(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(url),")"].join('')], null);
});
views.music_single.image = (function views$music_single$image(url,child_node){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"single__img--main",cljs.core.cst$kw$style,views.music_single.bg_img(url)], null),child_node], null);
});
views.music_single.title = (function views$music_single$title(post){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,views.music_single.get_bg_img(post))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"single__ttl"], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(post)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"single__ttl-container"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$id,"single-ttl",cljs.core.cst$kw$class,"single__ttl single__ttl--with-img",cljs.core.cst$kw$style,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$fontSizes,"200px"], null),views.music_single.bg_img(views.music_single.get_bg_img(post))], 0))], null),cljs.core.cst$kw$title.cljs$core$IFn$_invoke$arity$1(post)], null)], null);

}
});
views.music_single._play_button = (function views$music_single$_play_button(post_attrs,action){

var playing_this_track_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frontend.state.player_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$now_DASH_playing,cljs.core.cst$kw$track_name], null)),cljs.core.cst$kw$track_name.cljs$core$IFn$_invoke$arity$1(post_attrs));
var should_change_track_QMARK_ = !(playing_this_track_QMARK_);
var icon = (cljs.core.truth_((function (){var and__3925__auto__ = playing_this_track_QMARK_;
if(and__3925__auto__){
var G__30915 = cljs.core.cst$kw$is_DASH_playing;
var fexpr__30914 = cljs.core.deref(frontend.state.player_state);
return (fexpr__30914.cljs$core$IFn$_invoke$arity$1 ? fexpr__30914.cljs$core$IFn$_invoke$arity$1(G__30915) : fexpr__30914.call(null,G__30915));
} else {
return and__3925__auto__;
}
})())?"fa-pause":"fa-play");
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,["single__play fa ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(icon)].join(''),cljs.core.cst$kw$style,views.music_single.bg_img(views.music_single.get_bg_img(post_attrs)),cljs.core.cst$kw$on_DASH_click,(action.cljs$core$IFn$_invoke$arity$2 ? action.cljs$core$IFn$_invoke$arity$2(post_attrs,should_change_track_QMARK_) : action.call(null,post_attrs,should_change_track_QMARK_))], null)], null);
});
views.music_single.toggle_play_video = (function views$music_single$toggle_play_video(post_attrs){
var onPlayerReady = (function (e){
console.log("event",e);

console.log("target",e.target);

e.target.playVideo();

e.target.a.webkitRequestFullScreen();

return frontend.helpers.scroll_to(views.music_single.get_offset_top("single__video-player-container"));
});
return ((function (onPlayerReady){
return (function (){
var player = (new YT.Player("player",(function (){var obj30917 = {"videoId":cljs.core.cst$kw$youtube_id.cljs$core$IFn$_invoke$arity$1(post_attrs),"events":(function (){var obj30919 = {"onReady":onPlayerReady};
return obj30919;
})()};
return obj30917;
})()));
return null;
});
;})(onPlayerReady))
});
views.music_single.play_button = (function views$music_single$play_button(post_attrs){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,(function (){var G__30920 = cljs.core.cst$kw$is_video;
return (post_attrs.cljs$core$IFn$_invoke$arity$1 ? post_attrs.cljs$core$IFn$_invoke$arity$1(G__30920) : post_attrs.call(null,G__30920));
})())){
return views.music_single._play_button(post_attrs,views.music_single.toggle_play_video);
} else {
return views.music_single._play_button(post_attrs,views.sonos.toggle_play);

}
});
views.music_single.show_info_cb = (function views$music_single$show_info_cb(local_state){
return (function (){
cljs.core.reset_BANG_(local_state,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(local_state),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_info,cljs.core.not((function (){var G__30923 = cljs.core.cst$kw$show_DASH_info;
var fexpr__30922 = cljs.core.deref(local_state);
return (fexpr__30922.cljs$core$IFn$_invoke$arity$1 ? fexpr__30922.cljs$core$IFn$_invoke$arity$1(G__30923) : fexpr__30922.call(null,G__30923));
})())], null)], 0)));

return reagent.core.after_render((function (){
return frontend.helpers.scroll_to(((cljs.core.not((function (){var G__30925 = cljs.core.cst$kw$show_DASH_info;
var fexpr__30924 = cljs.core.deref(local_state);
return (fexpr__30924.cljs$core$IFn$_invoke$arity$1 ? fexpr__30924.cljs$core$IFn$_invoke$arity$1(G__30925) : fexpr__30924.call(null,G__30925));
})()))?(0):(function (){var G__30927 = cljs.core.cst$kw$top.cljs$core$IFn$_invoke$arity$1(jayq.core.offset.cljs$core$IFn$_invoke$arity$1(jayq.core.$.cljs$core$IFn$_invoke$arity$1(".markdown-body")));
var fexpr__30926 = ((function (G__30927){
return (function (p1__30921_SHARP_){
return (p1__30921_SHARP_ - (26));
});})(G__30927))
;
return fexpr__30926(G__30927);
})()));
}));
});
});
views.music_single.show_info = (function views$music_single$show_info(img_url,local_state){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$span,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$class,"single__show-info",cljs.core.cst$kw$style,views.music_single.bg_img(img_url),cljs.core.cst$kw$on_DASH_click,views.music_single.show_info_cb(local_state)], null),"..."], null);
});
views.music_single.video = (function views$music_single$video(post_attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,"player"], null)], null);
});
views.music_single.print_post = (function views$music_single$print_post(post,local_state){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,post)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"not found"], null);
} else {
var post_attrs = cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(post);
var img_url = views.music_single.get_bg_img(post_attrs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,views.helpers.page_container_bg_img(["single--",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(post_attrs))].join(''),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,""], null),views.music_single.image(img_url,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,views.music_single.title(post_attrs),views.music_single.play_button(post_attrs),views.music_single.show_info(img_url,local_state)], null)),(cljs.core.truth_(cljs.core.cst$kw$is_video.cljs$core$IFn$_invoke$arity$1(post_attrs))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"single__video-player-container",cljs.core.cst$kw$id,"single__video-player-container"], null),views.music_single.video(post_attrs)], null):null)], null),(cljs.core.truth_((function (){var G__30929 = cljs.core.cst$kw$show_DASH_info;
var fexpr__30928 = cljs.core.deref(local_state);
return (fexpr__30928.cljs$core$IFn$_invoke$arity$1 ? fexpr__30928.cljs$core$IFn$_invoke$arity$1(G__30929) : fexpr__30928.call(null,G__30929));
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"markdown-body",cljs.core.cst$kw$dangerouslySetInnerHTML,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$__html,cljs.core.cst$kw$body.cljs$core$IFn$_invoke$arity$1(post)], null)], null)], null)], null):null))], null);

}
});
views.music_single.find_post = (function views$music_single$find_post(tracks,slug){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__30930_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$slug.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$attributes.cljs$core$IFn$_invoke$arity$1(p1__30930_SHARP_)),slug);
}),tracks));
});
views.music_single.main = (function views$music_single$main(singleSlug,hash){
var local_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$show_DASH_info,true], null));
var tracks = cljs.core.cst$kw$music.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(frontend.state.app_state));
var post = views.music_single.find_post(tracks,singleSlug);
var printed_post = ((function (local_state,tracks,post){
return (function (){
return views.music_single.print_post(post,local_state);
});})(local_state,tracks,post))
;
return cljs.core.with_meta(printed_post,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$component_DASH_did_DASH_mount,((function (local_state,tracks,post,printed_post){
return (function (){
return views.music_single.go_to_hash(hash);
});})(local_state,tracks,post,printed_post))
], null));
});
