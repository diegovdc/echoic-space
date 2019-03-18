// Compiled by ClojureScript 1.10.312 {}
goog.provide('reagent_dev_tools.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent_dev_tools.styles');
goog.require('reagent_dev_tools.state_tree');
goog.require('komponentit.mixins');
goog.require('cljs.reader');
reagent_dev_tools.core.storage_key = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("reagent-dev-tools.core","state","reagent-dev-tools.core/state",1265138068))].join('');
reagent_dev_tools.core.element_id = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("reagent-dev-tools.core","dev-panel","reagent-dev-tools.core/dev-panel",1423288111))].join('');
if((typeof reagent_dev_tools !== 'undefined') && (typeof reagent_dev_tools.core !== 'undefined') && (typeof reagent_dev_tools.core.dev_state !== 'undefined')){
} else {
reagent_dev_tools.core.dev_state = (function (){var G__32857 = reagent.core.atom.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),(300)], null),(function (){try{return cljs.reader.read_string.call(null,localStorage.getItem(reagent_dev_tools.core.storage_key));
}catch (e32858){var _ = e32858;
return null;
}})()));
cljs.core.add_watch.call(null,G__32857,new cljs.core.Keyword(null,"local-storage","local-storage",-1301104068),((function (G__32857){
return (function (_,___$1,old,v){
return localStorage.setItem(reagent_dev_tools.core.storage_key,cljs.core.pr_str.call(null,cljs.core.dissoc.call(null,v,new cljs.core.Keyword(null,"mouse","mouse",478628972))));
});})(G__32857))
);

return G__32857;
})();
}
reagent_dev_tools.core.default_panels = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"state-tree","state-tree",-1533039803),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"State",new cljs.core.Keyword(null,"fn","fn",-1175266204),reagent_dev_tools.state_tree.state_tree_panel], null)], null);
reagent_dev_tools.core.dev_tool = (function reagent_dev_tools$core$dev_tool(p__32859){
var map__32860 = p__32859;
var map__32860__$1 = ((((!((map__32860 == null)))?(((((map__32860.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32860.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32860):map__32860);
var panels = cljs.core.get.call(null,map__32860__$1,new cljs.core.Keyword(null,"panels","panels",801034044),reagent_dev_tools.core.default_panels);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"style","style",-496642736),".reagent-dev-tools__panel {\n  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, Roboto, 'Helvetica Neue', sans-serif;\n  font-size: 16px;\n\n  z-index: 2000;\n  width: 100%;\n  position: fixed;\n  background: #fff;\n  text-align: left;\n  bottom: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.reagent-dev-tools__table {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\n.reagent-dev-tools__nav {\n  padding: 5px 0 0 10px;\n  margin: 0;\n  border-bottom: 1px solid #ccc;\n  display: flex;\n  background: #eee;\n  flex: 0 0 auto;\n}\n\n.reagent-dev-tools__nav-li {\n  margin-bottom: -1px;\n  margin-right: 10px;\n}\n\n.reagent-dev-tools__nav-li-a {\n  display: inline-block;\n  padding: 10px;\n  cursor: pointer;\n  background: #eee;\n  color: #666;\n  border: 1px solid #ccc;\n  border-bottom-color: #ccc;\n}\n\n.reagent-dev-tools__nav-li-a:hover {\n  background: #BDF;\n}\n\n.reagent-dev-tools__nav-li-a--active {\n  background: #fff;\n  color: #333;\n  border-bottom-color: #fff;\n}\n\n.reagent-dev-tools__spacer {\n  flex: 1 0 0%;\n}\n\n.reagent-dev-tools__nav-li-a--close-button {\n  background: #fff;\n}\n\n.reagent-dev-tools__td {\n  padding: 0;\n}\n\n.reagent-dev-tools__pre {\n  font-family: 'SFMono-Regular', 'Ubuntu Mono', Consolas, 'DejaVu Sans Mono', Menlo, monospace;\n  display: inline;\n  background: none;\n  border: 0;\n  padding: 0;\n}\n\n.reagent-dev-tools__li {\n  padding-left: 1em;\n  text-indent: -1em;\n  list-style: none;\n}\n\n.reagent-dev-tools__li-toggle {\n  padding: 2px 6px;\n}\n\n.reagent-dev-tools__li-toggle--active {\n  cursor: pointer;\n}\n\n.reagent-dev-tools__li-toggle--active:hover {\n  background: #BDF;\n}\n\n.reagent-dev-tools__li-toggle-icon {\n  display: inline-block;\n}\n\n.reagent-dev-tools__pull-right {\n  float: right;\n}\n\n/* nav-li-a-style */\n.reagent-dev-tools__toggle-btn {\n  position: fixed;\n  bottom: 0;\n  right: 0;\n  z-index: 2000;\n}\n\n.reagent-dev-tools__panel-content {\n  padding: 10px;\n  overflow-y: auto;\n}\n\n.reagent-dev-tools__sizer {\n  background: #888;\n  height: 5px;\n  cursor: ns-resize;\n  flex: 0 0 auto;\n}\n\n.reagent-dev-tools__sizer:hover {\n  background: #79D\n}\n\n.reagent-dev-tools__keyword {\n  color: #6f42c1;\n}\n\n.reagent-dev-tools__string {\n  color: #032f62;\n}\n\n.reagent-dev-tools__number {\n  color: #005cc5;\n}\n"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_dev_tools.core.dev_state)))?(function (){var current_k = new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$2(cljs.core.deref.call(null,reagent_dev_tools.core.dev_state),new cljs.core.Keyword(null,"state-tree","state-tree",-1533039803));
var current_panel = (function (){var or__3936__auto__ = cljs.core.get.call(null,panels,current_k);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return new cljs.core.Keyword(null,"state-tree","state-tree",-1533039803).cljs$core$IFn$_invoke$arity$1(panels);
}
})();
var current_content = new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(current_panel);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [komponentit.mixins.window_event_listener,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-move","on-mouse-move",-1386320874),((function (current_k,current_panel,current_content,map__32860,map__32860__$1,panels){
return (function (e){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.core.dev_state,((function (current_k,current_panel,current_content,map__32860,map__32860__$1,panels){
return (function (s){
if(cljs.core.truth_(new cljs.core.Keyword(null,"mouse","mouse",478628972).cljs$core$IFn$_invoke$arity$1(s))){
e.preventDefault();

return cljs.core.assoc.call(null,s,new cljs.core.Keyword(null,"height","height",1025178622),(function (){var x__4027__auto__ = (function (){var x__4024__auto__ = (window.innerHeight - e.clientY);
var y__4025__auto__ = (50);
return ((x__4024__auto__ > y__4025__auto__) ? x__4024__auto__ : y__4025__auto__);
})();
var y__4028__auto__ = (1000);
return ((x__4027__auto__ < y__4028__auto__) ? x__4027__auto__ : y__4028__auto__);
})());
} else {
return s;
}
});})(current_k,current_panel,current_content,map__32860,map__32860__$1,panels))
);
});})(current_k,current_panel,current_content,map__32860,map__32860__$1,panels))
,new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),((function (current_k,current_panel,current_content,map__32860,map__32860__$1,panels){
return (function (e){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.core.dev_state,cljs.core.dissoc,new cljs.core.Keyword(null,"mouse","mouse",478628972));
});})(current_k,current_panel,current_content,map__32860,map__32860__$1,panels))
], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__panel","div.reagent-dev-tools__panel",-1951578088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,reagent_dev_tools.core.dev_state))),"px"].join('')], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__sizer","div.reagent-dev-tools__sizer",-2096765794),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (current_k,current_panel,current_content,map__32860,map__32860__$1,panels){
return (function (e){
cljs.core.swap_BANG_.call(null,reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"mouse","mouse",478628972),true);

return e.preventDefault();
});})(current_k,current_panel,current_content,map__32860,map__32860__$1,panels))
], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__nav","div.reagent-dev-tools__nav",-2046412039),(function (){var iter__4310__auto__ = ((function (current_k,current_panel,current_content,map__32860,map__32860__$1,panels){
return (function reagent_dev_tools$core$dev_tool_$_iter__32862(s__32863){
return (new cljs.core.LazySeq(null,((function (current_k,current_panel,current_content,map__32860,map__32860__$1,panels){
return (function (){
var s__32863__$1 = s__32863;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32863__$1);
if(temp__5457__auto__){
var s__32863__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32863__$2)){
var c__4308__auto__ = cljs.core.chunk_first.call(null,s__32863__$2);
var size__4309__auto__ = cljs.core.count.call(null,c__4308__auto__);
var b__32865 = cljs.core.chunk_buffer.call(null,size__4309__auto__);
if((function (){var i__32864 = (0);
while(true){
if((i__32864 < size__4309__auto__)){
var vec__32866 = cljs.core._nth.call(null,c__4308__auto__,i__32864);
var k = cljs.core.nth.call(null,vec__32866,(0),null);
var map__32869 = cljs.core.nth.call(null,vec__32866,(1),null);
var map__32869__$1 = ((((!((map__32869 == null)))?(((((map__32869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32869):map__32869);
var label = cljs.core.get.call(null,map__32869__$1,new cljs.core.Keyword(null,"label","label",1718410804));
cljs.core.chunk_append.call(null,b__32865,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__nav-li","div.reagent-dev-tools__nav-li",-2142897539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,k)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.reagent-dev-tools__nav-li-a","a.reagent-dev-tools__nav-li-a",-1891887548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.keyword_identical_QMARK_.call(null,current_k,k))?"reagent-dev-tools__nav-li-a--active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__32864,vec__32866,k,map__32869,map__32869__$1,label,c__4308__auto__,size__4309__auto__,b__32865,s__32863__$2,temp__5457__auto__,current_k,current_panel,current_content,map__32860,map__32860__$1,panels){
return (function (){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),k);
});})(i__32864,vec__32866,k,map__32869,map__32869__$1,label,c__4308__auto__,size__4309__auto__,b__32865,s__32863__$2,temp__5457__auto__,current_k,current_panel,current_content,map__32860,map__32860__$1,panels))
], null),label], null)], null));

var G__32876 = (i__32864 + (1));
i__32864 = G__32876;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32865),reagent_dev_tools$core$dev_tool_$_iter__32862.call(null,cljs.core.chunk_rest.call(null,s__32863__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32865),null);
}
} else {
var vec__32871 = cljs.core.first.call(null,s__32863__$2);
var k = cljs.core.nth.call(null,vec__32871,(0),null);
var map__32874 = cljs.core.nth.call(null,vec__32871,(1),null);
var map__32874__$1 = ((((!((map__32874 == null)))?(((((map__32874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32874):map__32874);
var label = cljs.core.get.call(null,map__32874__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__nav-li","div.reagent-dev-tools__nav-li",-2142897539),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.name.call(null,k)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.reagent-dev-tools__nav-li-a","a.reagent-dev-tools__nav-li-a",-1891887548),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),((cljs.core.keyword_identical_QMARK_.call(null,current_k,k))?"reagent-dev-tools__nav-li-a--active":null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__32871,k,map__32874,map__32874__$1,label,s__32863__$2,temp__5457__auto__,current_k,current_panel,current_content,map__32860,map__32860__$1,panels){
return (function (){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"current","current",-1088038603),k);
});})(vec__32871,k,map__32874,map__32874__$1,label,s__32863__$2,temp__5457__auto__,current_k,current_panel,current_content,map__32860,map__32860__$1,panels))
], null),label], null)], null),reagent_dev_tools$core$dev_tool_$_iter__32862.call(null,cljs.core.rest.call(null,s__32863__$2)));
}
} else {
return null;
}
break;
}
});})(current_k,current_panel,current_content,map__32860,map__32860__$1,panels))
,null,null));
});})(current_k,current_panel,current_content,map__32860,map__32860__$1,panels))
;
return iter__4310__auto__.call(null,panels);
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__spacer","div.reagent-dev-tools__spacer",-1055488571)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.reagent-dev-tools__nav-li-a.reagent-dev-tools__nav-li-a--close-button","button.reagent-dev-tools__nav-li-a.reagent-dev-tools__nav-li-a--close-button",1711643088),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (current_k,current_panel,current_content,map__32860,map__32860__$1,panels){
return (function (){
return cljs.core.swap_BANG_.call(null,reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
});})(current_k,current_panel,current_content,map__32860,map__32860__$1,panels))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"\u00D7"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.reagent-dev-tools__panel-content","div.reagent-dev-tools__panel-content",-2059265195),(cljs.core.truth_(current_content)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_content], null):null)], null)], null)], null);
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.reagent-dev-tools__nav-li-a.reagent-dev-tools__toggle-btn","button.reagent-dev-tools__nav-li-a.reagent-dev-tools__toggle-btn",-183785987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__32860,map__32860__$1,panels){
return (function (_){
cljs.core.swap_BANG_.call(null,reagent_dev_tools.core.dev_state,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),true);

return null;
});})(map__32860,map__32860__$1,panels))
], null),"dev"], null))], null);
});
/**
 * Start Reagent dev tool.
 * 
 *   Options:
 * 
 *   :el (optional) The element to render the dev-tool into. If the property is given,
 *   but is nil, dev tool is not enabled. If not given, new div is created and
 *   used.
 * 
 *   :state-atom (optional) The Reagent atom to add to state-tree panel with "App state" name.
 * 
 *   :panels-fn (optional) Function which returns map of additional panels to display.
 */
reagent_dev_tools.core.start_BANG_ = (function reagent_dev_tools$core$start_BANG_(opts){
var temp__5457__auto__ = ((cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"el","el",-1618201118)))?new cljs.core.Keyword(null,"el","el",-1618201118).cljs$core$IFn$_invoke$arity$1(opts):(function (){var or__3936__auto__ = document.getElementById(reagent_dev_tools.core.element_id);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
var el = document.createElement("div");
el.id = reagent_dev_tools.core.element_id;

document.body.appendChild(el);

return el;
}
})());
if(cljs.core.truth_(temp__5457__auto__)){
var el = temp__5457__auto__;
if(cljs.core.truth_(new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(opts))){
reagent_dev_tools.state_tree.register_state_atom.call(null,"App state",new cljs.core.Keyword(null,"state-atom","state-atom",1303809857).cljs$core$IFn$_invoke$arity$1(opts));
} else {
}

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_dev_tools.core.dev_tool,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"panels","panels",801034044),cljs.core.merge.call(null,reagent_dev_tools.core.default_panels,(cljs.core.truth_(new cljs.core.Keyword(null,"panels-fn","panels-fn",-505333867).cljs$core$IFn$_invoke$arity$1(opts))?new cljs.core.Keyword(null,"panels-fn","panels-fn",-505333867).cljs$core$IFn$_invoke$arity$1(opts).call(null):null))], null)], null),el);
} else {
return null;
}
});

//# sourceMappingURL=core.js.map?rel=1552590666292
