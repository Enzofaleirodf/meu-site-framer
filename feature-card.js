// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 7e9385cf9f6db9aa "Alter (copy)", do not edit manually */
"use client";
import {
  Icon as Icon2
} from "./chunks/chunk-HAD2UBJU.js";
import {
  className as className2,
  css as css2,
  fonts as fonts2
} from "./chunks/chunk-Y27BKX5C.js";
import {
  Icon
} from "./chunks/chunk-MN2ZCSKY.js";
import {
  className,
  css,
  fonts
} from "./chunks/chunk-54UTMJYG.js";

// virtual:feature-card
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/4gkArALxZX0TfE7GDYIl/PJUNPuxRGRT21bJG6rIO/TJcguZuzc.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, addPropertyControls, ComponentViewportProvider, ControlType, cx, getFonts, getFontsFromSharedStyle, getPropertyControls, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var PhosphorFonts = getFonts(Icon2);
var Phosphor1Controls = getPropertyControls(Icon);
var serializationHash = "framer-9SkEl";
var variantClassNames = { o_NzTnw4o: "framer-v-4xc7dz" };
var transition1 = { bounce: 0.2, delay: 0, duration: 0.4, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value !== null && value !== void 0 ? value : config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ discription, height, icon, id, title, width, ...props }) => {
  var _ref, _ref1, _ref2;
  return { ...props, OA9bGq7OB: (_ref = icon !== null && icon !== void 0 ? icon : props.OA9bGq7OB) !== null && _ref !== void 0 ? _ref : "UserCircle", RRK9VpLJB: (_ref1 = discription !== null && discription !== void 0 ? discription : props.RRK9VpLJB) !== null && _ref1 !== void 0 ? _ref1 : "Select a ready-made assistant or collaborate with a specialist to create a tailored solution", TvSf0fjMO: (_ref2 = title !== null && title !== void 0 ? title : props.TvSf0fjMO) !== null && _ref2 !== void 0 ? _ref2 : "Deploy an Assistant" };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className: className3, layoutId, variant, OA9bGq7OB, TvSf0fjMO, RRK9VpLJB, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "o_NzTnw4o", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const sharedStyleClassNames = [className2, className];
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId !== null && layoutId !== void 0 ? layoutId : defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(motion.div, { ...restProps, ...gestureHandlers, className: cx(serializationHash, ...sharedStyleClassNames, "framer-4xc7dz", className3, classNames), "data-framer-name": "Variant 1", layoutDependency, layoutId: "o_NzTnw4o", ref: ref !== null && ref !== void 0 ? ref : ref1, style: { backgroundColor: "var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))", borderBottomLeftRadius: 16, borderBottomRightRadius: 16, borderTopLeftRadius: 16, borderTopRightRadius: 16, boxShadow: "0px 0.7065919983928324px 0.7065919983928324px -0.29166666666666663px rgba(16, 49, 77, 0.05356), 0px 1.8065619053231785px 1.8065619053231785px -0.5833333333333333px rgba(16, 49, 77, 0.05521), 0px 3.6217592146567767px 3.6217592146567767px -0.875px rgba(16, 49, 77, 0.05793), 0px 6.8655999097303715px 6.8655999097303715px -1.1666666666666665px rgba(16, 49, 77, 0.0628), 0px 13.646761411524492px 13.646761411524492px -1.4583333333333335px rgba(16, 49, 77, 0.07297), 0px 30px 30px -1.75px rgba(16, 49, 77, 0.0975)", ...style }, children: /* @__PURE__ */ _jsxs(motion.div, { className: "framer-48cbj9", "data-framer-name": "icon & text", layoutDependency, layoutId: "jkWlkoSsd", children: [/* @__PURE__ */ _jsx(motion.div, { className: "framer-18s1y91", "data-framer-name": "icon", layoutDependency, layoutId: "olaxDmpk_", style: { backgroundColor: "var(--token-37699ec8-6f41-4363-9a8a-9e76d6ead784, rgb(246, 251, 255))", borderBottomLeftRadius: 8, borderBottomRightRadius: 8, borderTopLeftRadius: 8, borderTopRightRadius: 8, boxShadow: "0px 0.7961918735236395px 1.4331453723425511px -0.875px rgba(16, 49, 77, 0.20522), 0px 2.414506143104518px 4.346111057588132px -1.75px rgba(16, 49, 77, 0.19551), 0px 6.382653521484461px 11.48877633867203px -2.625px rgba(16, 49, 77, 0.1717), 0px 20px 36px -3.5px rgba(16, 49, 77, 0.09)" }, children: /* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-v5p5q6-container", layoutDependency, layoutId: "iISsIa_hn-container", children: /* @__PURE__ */ _jsx(Icon2, { color: "var(--token-e4409358-08fe-4ba3-8dc3-7989b447f0b6, rgb(119, 75, 229))", height: "100%", iconSearch: "House", iconSelection: OA9bGq7OB, id: "iISsIa_hn", layoutId: "iISsIa_hn", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "duotone", width: "100%" }) }) }) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.h4, { className: "framer-styles-preset-8b8zds", "data-styles-preset": "pdnK4tFIz", children: "Deploy an Assistant" }) }), className: "framer-pzn195", fonts: ["Inter"], layoutDependency, layoutId: "uXEEmEB37", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline" }, text: TvSf0fjMO, verticalAlignment: "top", withExternalLayout: true }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { className: "framer-styles-preset-1khckfh", "data-styles-preset": "cH8AiB6P_", style: { "--framer-text-alignment": "left" }, children: "Select a ready-made assistant or collaborate with a specialist to create a tailored solution" }) }), className: "framer-16ds3tk", fonts: ["Inter"], layoutDependency, layoutId: "ZfCk4wbJu", style: { "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", opacity: 0.8 }, text: RRK9VpLJB, verticalAlignment: "top", withExternalLayout: true })] }) }) }) }) });
});
var css3 = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-9SkEl.framer-mtg2zz, .framer-9SkEl .framer-mtg2zz { display: block; }", ".framer-9SkEl.framer-4xc7dz { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 32px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 32px; position: relative; width: 352px; will-change: var(--framer-will-change-override, transform); }", ".framer-9SkEl .framer-48cbj9 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 16px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }", ".framer-9SkEl .framer-18s1y91 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 80px; height: min-content; justify-content: center; overflow: hidden; padding: 8px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-9SkEl .framer-v5p5q6-container { flex: none; height: 32px; position: relative; width: 32px; }", ".framer-9SkEl .framer-pzn195, .framer-9SkEl .framer-16ds3tk { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-9SkEl.framer-4xc7dz, .framer-9SkEl .framer-48cbj9, .framer-9SkEl .framer-18s1y91 { gap: 0px; } .framer-9SkEl.framer-4xc7dz > * { margin: 0px; margin-left: calc(32px / 2); margin-right: calc(32px / 2); } .framer-9SkEl.framer-4xc7dz > :first-child, .framer-9SkEl .framer-18s1y91 > :first-child { margin-left: 0px; } .framer-9SkEl.framer-4xc7dz > :last-child, .framer-9SkEl .framer-18s1y91 > :last-child { margin-right: 0px; } .framer-9SkEl .framer-48cbj9 > * { margin: 0px; margin-bottom: calc(16px / 2); margin-top: calc(16px / 2); } .framer-9SkEl .framer-48cbj9 > :first-child { margin-top: 0px; } .framer-9SkEl .framer-48cbj9 > :last-child { margin-bottom: 0px; } .framer-9SkEl .framer-18s1y91 > * { margin: 0px; margin-left: calc(80px / 2); margin-right: calc(80px / 2); } }", ...css2, ...css];
var FramerTJcguZuzc = withCSS(Component, css3, "framer-9SkEl");
var stdin_default = FramerTJcguZuzc;
FramerTJcguZuzc.displayName = "feature card";
FramerTJcguZuzc.defaultProps = { height: 252, width: 352 };
addPropertyControls(FramerTJcguZuzc, { OA9bGq7OB: (Phosphor1Controls === null || Phosphor1Controls === void 0 ? void 0 : Phosphor1Controls["iconSelection"]) && { ...Phosphor1Controls["iconSelection"], defaultValue: "UserCircle", description: "phosphor icon", hidden: void 0, title: "icon" }, TvSf0fjMO: { defaultValue: "Deploy an Assistant", displayTextArea: false, title: "Title", type: ControlType.String }, RRK9VpLJB: { defaultValue: "Select a ready-made assistant or collaborate with a specialist to create a tailored solution", displayTextArea: false, title: "discription", type: ControlType.String } });
addFonts(FramerTJcguZuzc, [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/EOr0mi4hNtlgWNn9if640EZzXCo.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/vQyevYAyHtARFwPqUzQGpnDs.woff2", weight: "400" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/b6Y37FthZeALduNqHicBT6FutY.woff2", weight: "400" }] }, ...PhosphorFonts, ...getFontsFromSharedStyle(fonts2), ...getFontsFromSharedStyle(fonts)], { supportsExplicitInterCodegen: true });

// virtual:feature-card
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
