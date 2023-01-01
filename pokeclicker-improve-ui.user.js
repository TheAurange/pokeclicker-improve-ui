// ==UserScript==
// @name        [PokeClicker] Improve UI
// @author      Aurange
// @version     1.2
// @match       https://www.pokeclicker.com/
// ==/UserScript==

"use strict";

let runner = setInterval(function(){
  if(App.game){
    clearInterval(runner);

    document.querySelectorAll("div.card-header[data-toggle]").forEach(e => e.click());
    ItemHandler.stoneSelected("Leaf_stone");
    EffectEngineRunner.decrementMultiplier();

    new MutationObserver(function(mutationList, observer){
      if(document.querySelector("div#toaster > div.toast.bg-success")){
        observer.disconnect();

        setTimeout(function(){
          document.querySelector("div#toaster > div.toast.bg-success > div.toast-header > button").click();
        }, 5000);
      }
    }).observe(document, {
      childList: true,
      subtree: true
    });
  }
}, 0);
