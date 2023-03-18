"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/waving-hand/index.ts
var waving_hand_exports = {};
__export(waving_hand_exports, {
  WavingHand: () => MemoizedWavingHand
});
module.exports = __toCommonJS(waving_hand_exports);

// src/components/waving-hand/waving-hand.tsx
var import_react = require("react");

// src/components/waving-hand/lib.ts
var TOKEN_MAP = {
  1: "I",
  2: "II",
  3: "III",
  4: "IV",
  5: "V",
  6: "VI"
};
var positiveNumberSchema = (x) => {
  if (x >= 0)
    return x;
  throw new Error(
    "[loop] property needs to be a natural number which means it needs to be equal to or greater than 0."
  );
};
var romanize = (num) => TOKEN_MAP[num];

// src/components/waving-hand/type.ts
var FSP = /* @__PURE__ */ ((FSP2) => {
  FSP2["I"] = "\u{1F44B}\u{1F3FB}";
  FSP2["II"] = "\u{1F44B}\u{1F3FC}";
  FSP2["III"] = "\u{1F44B}";
  FSP2["IV"] = "\u{1F44B}\u{1F3FD}";
  FSP2["V"] = "\u{1F44B}\u{1F3FE}";
  FSP2["VI"] = "\u{1F44B}\u{1F3FF}";
  return FSP2;
})(FSP || {});

// src/components/waving-hand/waving-hand.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var WavingHand = ({
  size = "1rem",
  type = 3,
  motion = false,
  loop = 0,
  style,
  className,
  ...restAttributes
}) => {
  const computedStyle = (0, import_react.useMemo)(() => {
    const animationIterationCount = loop !== 0 && motion ? positiveNumberSchema(loop) : "infinite";
    return {
      fontSize: size,
      ...motion && { animationIterationCount },
      ...style
    };
  }, [size, motion, loop, style]);
  const computedClassName = (0, import_react.useMemo)(
    () => [motion ? "motion" : "", className].filter(Boolean).join(" "),
    [motion, className]
  );
  const content = (0, import_react.useMemo)(() => FSP[romanize(type)], [type]);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { style: computedStyle, className: computedClassName, ...restAttributes, children: content });
};
var MemoizedWavingHand = (0, import_react.memo)(WavingHand);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  WavingHand
});
