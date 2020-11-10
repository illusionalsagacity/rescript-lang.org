// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Util from "../common/Util.js";
import * as React from "react";
import * as Belt_List from "bs-platform/lib/es6/belt_List.js";

function NameInitialsAvatar(Props) {
  var displayName = Props.displayName;
  var match = Belt_List.fromArray(displayName.split(" "));
  var initials;
  if (match) {
    var match$1 = match.tl;
    var first = match.hd;
    if (match$1) {
      var match$2 = match$1.tl;
      var exit = 0;
      if (match$2 && !match$2.tl) {
        initials = first[0] + match$2.hd[0];
      } else {
        exit = 1;
      }
      if (exit === 1) {
        initials = first[0] + match$1.hd[0];
      }
      
    } else {
      initials = first[0];
    }
  } else {
    initials = "";
  }
  return React.createElement("div", {
              className: "block uppercase h-full w-full flex items-center justify-center rounded-full"
            }, React.createElement("span", {
                  className: "text-xl text-night"
                }, Util.ReactStuff.s(initials)));
}

var make = NameInitialsAvatar;

export {
  make ,
  
}
/* react Not a pure module */
