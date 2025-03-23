// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 7e9385cf9f6db9aa "Alter (copy)", do not edit manually */
"use client";
import {
  className,
  css,
  fonts
} from "./chunks/chunk-HZQQY5VA.js";

// virtual:submit
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/su72m43XOWKGERbePX0g/EsTTxMSs2Gf19Iod2pGT/zMJRN3Q5t.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ControlType, cx, getFontsFromSharedStyle, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS, withFX } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var MotionDivWithFX = withFX(motion.div);
var enabledGestures = { jHiMgCzvL: { hover: true, pressed: true } };
var cycleOrder = ["jHiMgCzvL", "iHkeyxyEC", "ZzqPfPlZQ", "o9mc_VpBf", "agCW4SmP9"];
var serializationHash = "framer-SrzCv";
var variantClassNames = { agCW4SmP9: "framer-v-tztv9", iHkeyxyEC: "framer-v-xvd5x9", jHiMgCzvL: "framer-v-gszhlu", o9mc_VpBf: "framer-v-1bfi658", ZzqPfPlZQ: "framer-v-125bp6c" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { delay: 0, duration: 0.2, ease: [0.44, 0, 0.56, 1], type: "tween" };
var transition2 = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: "tween" };
var animation = { opacity: 1, rotate: 360, rotateX: 0, rotateY: 0, scale: 1, skewX: 0, skewY: 0, x: 0, y: 0 };
var transformTemplate1 = (_, t) => `translateX(-50%) ${t}`;
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { Default: "jHiMgCzvL", Disabled: "ZzqPfPlZQ", Error: "agCW4SmP9", Loading: "iHkeyxyEC", Success: "o9mc_VpBf" };
var getProps = ({ height, id, width, ...props }) => {
  var _humanReadableVariantMap_props_variant, _ref;
  return { ...props, variant: (_ref = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref !== void 0 ? _ref : "jHiMgCzvL" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "jHiMgCzvL", enabledGestures, variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const isDisplayed = () => {
    if (baseVariant === "iHkeyxyEC") return false;
    return true;
  };
  const isDisplayed1 = () => {
    if (baseVariant === "iHkeyxyEC") return true;
    return false;
  };
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsxs(motion.button, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-gszhlu", className2, classNames), "data-framer-name": "Default", "data-reset": "button", layoutDependency, layoutId: "jHiMgCzvL", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { background: 'linear-gradient(127deg, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)) /* {"name":"dark blue"} */ -68%, var(--token-b03e3eb5-0157-442a-b34c-2b15e482ece4, rgb(50, 61, 104)) /* {"name":"light blue"} */ 100%)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, boxShadow: "inset 0px 1px 2px 0px rgb(184, 193, 230), 0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(46, 64, 128, 0.34529), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(46, 64, 128, 0.33796), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(46, 64, 128, 0.32585), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(46, 64, 128, 0.30423), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(46, 64, 128, 0.25902), 0px 30px 30px -3.5px rgba(46, 64, 128, 0.15)", opacity: 1, ...style }, variants: { ZzqPfPlZQ: { opacity: 0.5 } }, ...addPropertyOverrides({ "jHiMgCzvL-hover": { "data-framer-name": void 0 }, "jHiMgCzvL-pressed": { "data-framer-name": void 0 }, agCW4SmP9: { "data-framer-name": "Error" }, iHkeyxyEC: { "data-framer-name": "Loading" }, o9mc_VpBf: { "data-framer-name": "Success" }, ZzqPfPlZQ: { "data-framer-name": "Disabled" } }, baseVariant, gestureVariant), children: [isDisplayed() && /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-12su4sl", "data-styles-preset": "StOoogDYM", children: "Send Your Message" }) }), className: "framer-geotf5", fonts: ["Inter"], layoutDependency, layoutId: "H4AOwf4sB", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, variants: { agCW4SmP9: { "--extracted-r6o4lv": "rgb(255, 34, 68)" }, o9mc_VpBf: { "--extracted-r6o4lv": "rgb(255, 255, 255)" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ agCW4SmP9: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif', "--framer-font-size": "14px", "--framer-font-weight": "600", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 34, 68))" }, children: "Something went wrong" }) }), fonts: ["Inter-SemiBold"] }, o9mc_VpBf: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "SW50ZXItU2VtaUJvbGQ=", "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif', "--framer-font-size": "14px", "--framer-font-weight": "600", "--framer-text-color": "var(--extracted-r6o4lv, rgb(255, 255, 255))" }, children: "Thank you" }) }), fonts: ["Inter-SemiBold"] } }, baseVariant, gestureVariant) }), isDisplayed1() && /* @__PURE__ */ _jsx(motion.div, { className: "framer-h5h4w9", "data-framer-name": "Spinner", layoutDependency, layoutId: "L7RJ70iwo", style: { mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add", WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add" }, children: /* @__PURE__ */ _jsx(MotionDivWithFX, { __framer__loop: animation, __framer__loopEffectEnabled: true, __framer__loopRepeatDelay: 0, __framer__loopRepeatType: "loop", __framer__loopTransition: transition2, __perspectiveFX: false, __smartComponentFX: true, __targetOpacity: 1, className: "framer-6uipyv", "data-framer-name": "Conic", layoutDependency, layoutId: "ALRKoNKcm", style: { background: "conic-gradient(from 180deg at 50% 50%, #4cf 0deg, #4cf 360deg)", backgroundColor: "rgb(68, 204, 255)", mask: "none", WebkitMask: "none" }, variants: { iHkeyxyEC: { background: "conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)", backgroundColor: "rgba(0, 0, 0, 0)", mask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add", WebkitMask: "url('https://framerusercontent.com/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add" } }, children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-19ecbfu", "data-framer-name": "Rounding", layoutDependency, layoutId: "Pm7lzmzg5", style: { backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: 1, borderBottomRightRadius: 1, borderTopLeftRadius: 1, borderTopRightRadius: 1 }, transformTemplate: transformTemplate1 }) }) })] }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-SrzCv.framer-lv4ffs, .framer-SrzCv .framer-lv4ffs { display: block; }", ".framer-SrzCv.framer-gszhlu { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: visible; padding: 12px 24px 12px 24px; position: relative; width: min-content; }", ".framer-SrzCv .framer-geotf5 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }", ".framer-SrzCv .framer-h5h4w9 { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; }", ".framer-SrzCv .framer-6uipyv { bottom: 0px; flex: none; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }", ".framer-SrzCv .framer-19ecbfu { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-SrzCv.framer-gszhlu { gap: 0px; } .framer-SrzCv.framer-gszhlu > * { margin: 0px; margin-left: calc(0px / 2); margin-right: calc(0px / 2); } .framer-SrzCv.framer-gszhlu > :first-child { margin-left: 0px; } .framer-SrzCv.framer-gszhlu > :last-child { margin-right: 0px; } }", ".framer-SrzCv.framer-v-xvd5x9.framer-gszhlu, .framer-SrzCv.framer-v-125bp6c.framer-gszhlu, .framer-SrzCv.framer-v-1bfi658.framer-gszhlu, .framer-SrzCv.framer-v-tztv9.framer-gszhlu { cursor: unset; }", ".framer-SrzCv.framer-v-xvd5x9 .framer-6uipyv { overflow: hidden; }", ...css];
var FramerzMJRN3Q5t = withCSS(Component, css2, "framer-SrzCv");
var stdin_default = FramerzMJRN3Q5t;
FramerzMJRN3Q5t.displayName = "submit";
FramerzMJRN3Q5t.defaultProps = { height: 46, width: 182 };
addPropertyControls(FramerzMJRN3Q5t, { variant: { options: ["jHiMgCzvL", "iHkeyxyEC", "ZzqPfPlZQ", "o9mc_VpBf", "agCW4SmP9"], optionTitles: ["Default", "Loading", "Disabled", "Success", "Error"], title: "Variant", type: ControlType.Enum } });
addFonts(FramerzMJRN3Q5t, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }] }, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:submit
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "jHiMgCzvL"
};
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
