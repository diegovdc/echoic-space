
shadow.cljs.devtools.client.env.module_loaded('browser-main');

try { browser.main.init(); } catch (e) { console.error("An error occurred when calling (browser.main/init)"); throw(e); }