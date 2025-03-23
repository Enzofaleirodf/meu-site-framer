// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 7e9385cf9f6db9aa "Alter (copy)", do not edit manually */
"use client";
import {
  className,
  css,
  fonts
} from "../chunks/chunk-HZQQY5VA.js";
import {
  Icon
} from "../chunks/chunk-MN2ZCSKY.js";

// virtual:buttons/button
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/ssY1WPSmbosrlZsNopWj/xFQvKu0smqCpzMNsNNCI/bVvbBzZqE.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ComponentViewportProvider, ControlType, cx, getFonts, getFontsFromSharedStyle, getPropertyControls, Link, RichText, useActiveVariantCallback, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var PhosphorFonts = getFonts(Icon);
var PhosphorControls = getPropertyControls(Icon);
var cycleOrder = ["jwC47zCF6", "mmH9oevh3", "stCIAuwK4"];
var serializationHash = "framer-2VZxX";
var variantClassNames = { jwC47zCF6: "framer-v-aouqpb", mmH9oevh3: "framer-v-lvvaka", stCIAuwK4: "framer-v-8ip9ku" };
function addPropertyOverrides(overrides, ...variants) {
  const nextOverrides = {};
  variants === null || variants === void 0 ? void 0 : variants.forEach((variant) => variant && Object.assign(nextOverrides, overrides[variant]));
  return nextOverrides;
}
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var humanReadableVariantMap = { "main cta": "jwC47zCF6", "secondary cta": "mmH9oevh3", "Variant 3": "stCIAuwK4" };
var getProps = ({ click2, height, id, link, newTab, phospherIcon, title, width, ...props }) => {
  var _ref, _ref1, _ref2, _humanReadableVariantMap_props_variant, _ref3;
  return { ...props, cRoeZpcrs: (_ref = title !== null && title !== void 0 ? title : props.cRoeZpcrs) !== null && _ref !== void 0 ? _ref : "Check Case Studies ", dG05QQM_v: click2 !== null && click2 !== void 0 ? click2 : props.dG05QQM_v, GrpQ8zFBL: link !== null && link !== void 0 ? link : props.GrpQ8zFBL, RCPR2dydG: (_ref1 = phospherIcon !== null && phospherIcon !== void 0 ? phospherIcon : props.RCPR2dydG) !== null && _ref1 !== void 0 ? _ref1 : "Crown", RZWvw5mQ_: (_ref2 = newTab !== null && newTab !== void 0 ? newTab : props.RZWvw5mQ_) !== null && _ref2 !== void 0 ? _ref2 : true, variant: (_ref3 = (_humanReadableVariantMap_props_variant = humanReadableVariantMap[props.variant]) !== null && _humanReadableVariantMap_props_variant !== void 0 ? _humanReadableVariantMap_props_variant : props.variant) !== null && _ref3 !== void 0 ? _ref3 : "jwC47zCF6" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className2, layoutId, variant, cRoeZpcrs, GrpQ8zFBL, RCPR2dydG, RZWvw5mQ_, dG05QQM_v, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ cycleOrder, defaultVariant: "jwC47zCF6", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const { activeVariantCallback, delay } = useActiveVariantCallback(baseVariant);
  const onTapio568k = activeVariantCallback(async (...args) => {
    setGestureState({ isPressed: false });
    if (dG05QQM_v) {
      const res = await dG05QQM_v(...args);
      if (res === false) return false;
    }
  });
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: GrpQ8zFBL, nodeId: "jwC47zCF6", openInNewTab: RZWvw5mQ_, smoothScroll: true, children: /* @__PURE__ */ _jsx(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(serializationHash, ...sharedStyleClassNames, "framer-aouqpb", className2, classNames)} framer-3joj8o`, "data-framer-name": "main cta", "data-highlight": true, layoutDependency, layoutId: "jwC47zCF6", onTap: onTapio568k, ref: ref !== null && ref !== void 0 ? ref : ref1, style: { background: 'linear-gradient(125deg, var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(119, 75, 229)) /* {"name":"ascent"} */ -4%, var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(119, 75, 229)) /* {"name":"ascent"} */ 100%)', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopLeftRadius: 10, borderTopRightRadius: 10, boxShadow: "inset 0px 1px 2px 0px rgb(192, 176, 232), 0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(99, 69, 173, 0.34529), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(99, 69, 173, 0.33796), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(99, 69, 173, 0.32585), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(99, 69, 173, 0.30423), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(99, 69, 173, 0.25902), 0px 30px 30px -3.5px rgba(99, 69, 173, 0.15)", ...style }, variants: { mmH9oevh3: { background: 'linear-gradient(127deg, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)) /* {"name":"dark blue"} */ -68%, var(--token-b03e3eb5-0157-442a-b34c-2b15e482ece4, rgb(50, 61, 104)) /* {"name":"light blue"} */ 100%)', boxShadow: "inset 0px 1px 2px 0px rgb(184, 193, 230), 0px 0.7065919983928324px 0.7065919983928324px -0.5833333333333333px rgba(46, 64, 128, 0.34529), 0px 1.8065619053231785px 1.8065619053231785px -1.1666666666666665px rgba(46, 64, 128, 0.33796), 0px 3.6217592146567767px 3.6217592146567767px -1.75px rgba(46, 64, 128, 0.32585), 0px 6.8655999097303715px 6.8655999097303715px -2.333333333333333px rgba(46, 64, 128, 0.30423), 0px 13.646761411524492px 13.646761411524492px -2.916666666666667px rgba(46, 64, 128, 0.25902), 0px 30px 30px -3.5px rgba(46, 64, 128, 0.15)" }, stCIAuwK4: { background: 'linear-gradient(125deg, var(--token-c630804f-5e50-4893-b680-27b64d932590, rgba(94, 120, 143, 0.5)) /* {"name":"shadow"} */ -44%, var(--token-aeb15aaf-db9c-447f-8383-662c7fda9c5a, rgba(240, 248, 255, 0.9)) /* {"name":"BG | 1"} */ 100%)', boxShadow: "inset 0px 1px 2px 0px var(--token-781d11f5-bf5d-4746-9aec-b794f5ae2c6e, rgb(216, 223, 229)), 0px 0.7961918735236395px 0.7961918735236395px -0.875px rgba(121, 152, 189, 0.34204), 0px 2.414506143104518px 2.414506143104518px -1.75px rgba(121, 152, 189, 0.32585), 0px 6.382653521484461px 6.382653521484461px -2.625px rgba(121, 152, 189, 0.28617), 0px 20px 20px -3.5px rgba(121, 152, 189, 0.15)" } }, ...addPropertyOverrides({ mmH9oevh3: { "data-framer-name": "secondary cta" }, stCIAuwK4: { "data-framer-name": "Variant 3" } }, baseVariant, gestureVariant), children: /* @__PURE__ */ _jsxs(motion.div, { className: "framer-uczcf9", "data-framer-name": "icon & text", layoutDependency, layoutId: "M5FlvQFuZ", children: [/* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-12su4sl", "data-styles-preset": "StOoogDYM", children: "Check Case Studies " }) }), className: "framer-1ke1sy8", "data-framer-name": "Button", fonts: ["Inter"], layoutDependency, layoutId: "dko_m_cvc", text: cRoeZpcrs, variants: { stCIAuwK4: { "--extracted-r6o4lv": "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))" } }, verticalAlignment: "top", withExternalLayout: true, ...addPropertyOverrides({ stCIAuwK4: { children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-12su4sl", "data-styles-preset": "StOoogDYM", style: { "--framer-text-color": "var(--extracted-r6o4lv, var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41)))" }, children: "Check Case Studies " }) }) } }, baseVariant, gestureVariant) }), /* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-ms81nd-container", layoutDependency, layoutId: "bbPrAkF_m-container", children: /* @__PURE__ */ _jsx(Icon, { color: "var(--token-d4c0a0e6-8fba-45bc-8f6f-215e608cd0df, rgb(255, 255, 255))", height: "100%", iconSearch: "House", iconSelection: RCPR2dydG, id: "bbPrAkF_m", layoutId: "bbPrAkF_m", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "fill", width: "100%", ...addPropertyOverrides({ mmH9oevh3: { weight: "regular" }, stCIAuwK4: { color: "var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, rgb(14, 28, 41))", weight: "regular" } }, baseVariant, gestureVariant) }) }) })] }) }) }) }) }) });
});
var css2 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-2VZxX.framer-3joj8o, .framer-2VZxX .framer-3joj8o { display: block; }", ".framer-2VZxX.framer-aouqpb { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 6px; height: min-content; justify-content: center; overflow: hidden; padding: 12px 24px 12px 24px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-2VZxX .framer-uczcf9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: min-content; }", ".framer-2VZxX .framer-1ke1sy8 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", ".framer-2VZxX .framer-ms81nd-container { flex: none; height: 20px; position: relative; width: 20px; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-2VZxX.framer-aouqpb, .framer-2VZxX .framer-uczcf9 { gap: 0px; } .framer-2VZxX.framer-aouqpb > * { margin: 0px; margin-left: calc(6px / 2); margin-right: calc(6px / 2); } .framer-2VZxX.framer-aouqpb > :first-child, .framer-2VZxX .framer-uczcf9 > :first-child { margin-left: 0px; } .framer-2VZxX.framer-aouqpb > :last-child, .framer-2VZxX .framer-uczcf9 > :last-child { margin-right: 0px; } .framer-2VZxX .framer-uczcf9 > * { margin: 0px; margin-left: calc(8px / 2); margin-right: calc(8px / 2); } }", ".framer-2VZxX.framer-v-lvvaka .framer-1ke1sy8, .framer-2VZxX.framer-v-8ip9ku .framer-1ke1sy8 { order: 1; }", ".framer-2VZxX.framer-v-lvvaka .framer-ms81nd-container, .framer-2VZxX.framer-v-8ip9ku .framer-ms81nd-container { order: 0; }", ...css];
var FramerbVvbBzZqE = withCSS(Component, css2, "framer-2VZxX");
var stdin_default = FramerbVvbBzZqE;
FramerbVvbBzZqE.displayName = "Buttons / Button";
FramerbVvbBzZqE.defaultProps = { height: 46, width: 214 };
addPropertyControls(FramerbVvbBzZqE, { variant: { options: ["jwC47zCF6", "mmH9oevh3", "stCIAuwK4"], optionTitles: ["main cta", "secondary cta", "Variant 3"], title: "Variant", type: ControlType.Enum }, cRoeZpcrs: { defaultValue: "Check Case Studies ", displayTextArea: false, title: "Title", type: ControlType.String }, GrpQ8zFBL: { title: "Link", type: ControlType.Link }, RCPR2dydG: (PhosphorControls === null || PhosphorControls === void 0 ? void 0 : PhosphorControls["iconSelection"]) && { ...PhosphorControls["iconSelection"], defaultValue: "Crown", description: void 0, hidden: void 0, title: "phospher icon" }, RZWvw5mQ_: { defaultValue: true, title: "New Tab", type: ControlType.Boolean }, dG05QQM_v: { title: "Click 2", type: ControlType.EventHandler } });
addFonts(FramerbVvbBzZqE, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...PhosphorFonts, ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:buttons/button
import { WithFramerBreakpoints } from "unframer";
import { jsx } from "react/jsx-runtime";
var locales = [];
var defaultResponsiveVariants = {
  "base": "jwC47zCF6"
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
