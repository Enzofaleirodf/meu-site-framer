// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 7e9385cf9f6db9aa "Alter (copy)", do not edit manually */
"use client";
import {
  className,
  css,
  fonts
} from "../chunks/chunk-XDICIYDD.js";
import {
  className as className2,
  css as css2,
  fonts as fonts2
} from "../chunks/chunk-54UTMJYG.js";

// virtual:cards/review-card
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/uqT4E4hiX6vvht9Kcjam/nnCv0DrnxMwZajznp6cv/AihxU9buU.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, getLoadingLazyAtYPosition, Image, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var serializationHash = "framer-fpROo";
var variantClassNames = { Of8FNQqsE: "framer-v-1qghfau" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var toResponsiveImage = (value) => {
  if (typeof value === "object" && value !== null && typeof value.src === "string") {
    return value;
  }
  return typeof value === "string" ? { src: value } : void 0;
};
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ clientInfo, clientName, clientPic, height, id, text, width, ...props }) => {
  var _ref, _ref1, _ref2, _ref3;
  return { ...props, lHMjyqM9B: (_ref = clientPic !== null && clientPic !== void 0 ? clientPic : props.lHMjyqM9B) !== null && _ref !== void 0 ? _ref : { src: "https://framerusercontent.com/images/qrjuFX1VgXGY9QNgQISp1u299GY.png" }, odyoCEm6_: (_ref1 = clientName !== null && clientName !== void 0 ? clientName : props.odyoCEm6_) !== null && _ref1 !== void 0 ? _ref1 : "Brendan Wilson", qsMuSLP7j: (_ref2 = clientInfo !== null && clientInfo !== void 0 ? clientInfo : props.qsMuSLP7j) !== null && _ref2 !== void 0 ? _ref2 : "owner of XX", RQnxNmsAq: (_ref3 = text !== null && text !== void 0 ? text : props.RQnxNmsAq) !== null && _ref3 !== void 0 ? _ref3 : "''The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.''" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, RQnxNmsAq, odyoCEm6_, qsMuSLP7j, lHMjyqM9B, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "Of8FNQqsE", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2, className];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-1qghfau", className3, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "Of8FNQqsE", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { backgroundColor: "var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))", borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16, boxShadow: "0px 0.7065919983928324px 0.7065919983928324px -0.29166666666666663px rgba(16, 49, 77, 0.05356), 0px 1.8065619053231785px 1.8065619053231785px -0.5833333333333333px rgba(16, 49, 77, 0.05521), 0px 3.6217592146567767px 3.6217592146567767px -0.875px rgba(16, 49, 77, 0.05793), 0px 6.8655999097303715px 6.8655999097303715px -1.1666666666666665px rgba(16, 49, 77, 0.0628), 0px 13.646761411524492px 13.646761411524492px -1.4583333333333335px rgba(16, 49, 77, 0.07297), 0px 30px 30px -1.75px rgba(16, 49, 77, 0.0975)", ...style }, children: /* @__PURE__ */ _jsxs(motion.div, { className: "framer-kr007y", "data-framer-name": "container", layoutDependency, layoutId: "wX3JSqzjI", style: { borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10 }, children: [/* @__PURE__ */ _jsx(motion.div, { className: "framer-1dqi9ik", "data-framer-name": "rating & text", layoutDependency, layoutId: "Zwedq8ONV", children: /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1khckfh", "data-styles-preset": "cH8AiB6P_", style: { "--framer-text-alignment": "left" }, children: "''The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.''" }) }), className: "framer-y8i1dr", "data-framer-name": "Working with design cryo has been very smooth and enjoyable process, they responds with in hours for any requests. I am subscription user by the way, Saving ton of money this way", fonts: ["Inter"], layoutDependency, layoutId: "AzFnRYJFi", text: RQnxNmsAq, verticalAlignment: "top", withExternalLayout: true }) }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-1n4e7d5", "data-framer-name": "profile", layoutDependency, layoutId: "XKLmYZbkw", children: [/* @__PURE__ */ _jsx(Image, { background: { alt: "", fit: "fill", intrinsicHeight: 400, intrinsicWidth: 400, loading: getLoadingLazyAtYPosition(((componentViewport === null || componentViewport === void 0 ? void 0 : componentViewport.y) || 0) + 32 + 0 + 0 + 140 + 96), pixelHeight: 73, pixelWidth: 73, sizes: "40px", ...toResponsiveImage(lHMjyqM9B), ...{ positionX: "center", positionY: "center" } }, className: "framer-7llheq", "data-framer-name": "pic", layoutDependency, layoutId: "EkPG3mKXn", style: { borderBottomLeftRadius: "12%", borderBottomRightRadius: "12%", borderTopLeftRadius: "12%", borderTopRightRadius: "12%", boxShadow: "0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(16, 49, 77, 0.20717), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(16, 49, 77, 0.20277), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(16, 49, 77, 0.19551), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(16, 49, 77, 0.18254), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(16, 49, 77, 0.15541), 0px 30px 30px -3.5px rgba(16, 49, 77, 0.09)" } }), /* @__PURE__ */ _jsx(motion.div, { className: "framer-1ut8otq", "data-border": true, "data-framer-name": "separator line", layoutDependency, layoutId: "Gi_xHrT5q", style: { "--border-bottom-width": "3px", "--border-color": "var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5))", "--border-left-width": "3px", "--border-right-width": "3px", "--border-style": "dotted", "--border-top-width": "3px" } }), /* @__PURE__ */ _jsxs(motion.div, { className: "framer-1p3s4o8", "data-framer-name": "text", layoutDependency, layoutId: "XGlk6ANE9", children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1khckfh", "data-styles-preset": "cH8AiB6P_", style: { "--framer-text-alignment": "left" }, children: "Brendan Wilson" }) }), className: "framer-p5ce3m", "data-framer-name": "Desirae Haluk", fonts: ["Inter"], layoutDependency, layoutId: "Kv5CAL1VY", text: odyoCEm6_, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1y7m99z", "data-styles-preset": "C0wa976Zp", children: "owner of XX" }) }), className: "framer-17ru8iq", "data-framer-name": "CEO @ Clairant Services", fonts: ["Inter"], layoutDependency, layoutId: "Fv6WWF9aO", style: { opacity: 0.8 }, text: qsMuSLP7j, verticalAlignment: "top", withExternalLayout: true })] })] })] }) }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-fpROo.framer-14r9jz8, .framer-fpROo .framer-14r9jz8 { display: block; }", ".framer-fpROo.framer-1qghfau { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px; position: relative; width: 500px; }", ".framer-fpROo .framer-kr007y { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 2; }", ".framer-fpROo .framer-1dqi9ik { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 100%; }", ".framer-fpROo .framer-y8i1dr, .framer-fpROo .framer-p5ce3m, .framer-fpROo .framer-17ru8iq { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", ".framer-fpROo .framer-1n4e7d5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 14px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }", ".framer-fpROo .framer-7llheq { aspect-ratio: 1 / 1; flex: none; height: 40px; position: relative; width: var(--framer-aspect-ratio-supported, 40px); }", ".framer-fpROo .framer-1ut8otq { align-self: stretch; flex: none; height: auto; overflow: hidden; position: relative; width: 2px; }", ".framer-fpROo .framer-1p3s4o8 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 1px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-fpROo.framer-1qghfau, .framer-fpROo .framer-kr007y, .framer-fpROo .framer-1dqi9ik, .framer-fpROo .framer-1n4e7d5, .framer-fpROo .framer-1p3s4o8 { gap: 0px; } .framer-fpROo.framer-1qghfau > *, .framer-fpROo .framer-kr007y > * { margin: 0px; margin-bottom: calc(20px / 2); margin-top: calc(20px / 2); } .framer-fpROo.framer-1qghfau > :first-child, .framer-fpROo .framer-kr007y > :first-child, .framer-fpROo .framer-1dqi9ik > :first-child, .framer-fpROo .framer-1p3s4o8 > :first-child { margin-top: 0px; } .framer-fpROo.framer-1qghfau > :last-child, .framer-fpROo .framer-kr007y > :last-child, .framer-fpROo .framer-1dqi9ik > :last-child, .framer-fpROo .framer-1p3s4o8 > :last-child { margin-bottom: 0px; } .framer-fpROo .framer-1dqi9ik > * { margin: 0px; margin-bottom: calc(10px / 2); margin-top: calc(10px / 2); } .framer-fpROo .framer-1n4e7d5 > * { margin: 0px; margin-left: calc(14px / 2); margin-right: calc(14px / 2); } .framer-fpROo .framer-1n4e7d5 > :first-child { margin-left: 0px; } .framer-fpROo .framer-1n4e7d5 > :last-child { margin-right: 0px; } .framer-fpROo .framer-1p3s4o8 > * { margin: 0px; margin-bottom: calc(0px / 2); margin-top: calc(0px / 2); } }", ...css2, ...css, '.framer-fpROo[data-border="true"]::after, .framer-fpROo [data-border="true"]::after { content: ""; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none; }'];
var FramerAihxU9buU = withCSS(Component, css3, "framer-fpROo");
var stdin_default = FramerAihxU9buU;
FramerAihxU9buU.displayName = "Cards / Review card";
FramerAihxU9buU.defaultProps = { height: 202, width: 500 };
addPropertyControls(FramerAihxU9buU, { RQnxNmsAq: { defaultValue: "''The courses are top-notch, providing in-depth knowledge that's easy to apply. Each lesson is structured to ensure you fully grasp the material.''", displayTextArea: false, title: "Text", type: ControlType.String }, odyoCEm6_: { defaultValue: "Brendan Wilson", displayTextArea: false, title: "client name", type: ControlType.String }, qsMuSLP7j: { defaultValue: "owner of XX", displayTextArea: false, placeholder: "", title: "client info", type: ControlType.String }, lHMjyqM9B: { __defaultAssetReference: "data:framer/asset-reference,qrjuFX1VgXGY9QNgQISp1u299GY.png?originalFilename=73x7dfwed.png&preferredSize=auto", title: "client pic", type: ControlType.ResponsiveImage } });
addFonts(FramerAihxU9buU, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:cards/review-card
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {};
stdin_default.Responsive = ({ locale, ...rest }) => {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: { "J986jsEGO": { "path": "/contact" }, "WBTam2e07": { "path": "/404" }, "augiA20Il": { "path": "/" }, "pxZuQniuS": { "path": "/changelog" }, "rQ6ChpM3z": { "path": "/changelog/:slug" } },
      children: /* @__PURE__ */ jsx(
        WithFramerBreakpoints,
        {
          Component: stdin_default,
          variants: defaultResponsiveVariants,
          ...rest
        }
      ),
      framerSiteId: "7e9385cf9f6db9aaff1114dcc78a4c1f2a48c399d43aa1aee82090981b59b32a",
      locale,
      locales
    }
  );
};
function ComponentWithRoot({ locale, ...rest }) {
  return /* @__PURE__ */ jsx(
    ContextProviders,
    {
      routes: {
        "J986jsEGO": {
          "path": "/contact"
        },
        "WBTam2e07": {
          "path": "/404"
        },
        "augiA20Il": {
          "path": "/"
        },
        "pxZuQniuS": {
          "path": "/changelog"
        },
        "rQ6ChpM3z": {
          "path": "/changelog/:slug"
        }
      },
      children: /* @__PURE__ */ jsx(stdin_default, { ...rest }),
      framerSiteId: "7e9385cf9f6db9aaff1114dcc78a4c1f2a48c399d43aa1aee82090981b59b32a",
      locale,
      locales
    }
  );
}
Object.assign(ComponentWithRoot, stdin_default);
export {
  ComponentWithRoot as default
};
