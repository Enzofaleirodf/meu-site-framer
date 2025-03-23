// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 7e9385cf9f6db9aa "Alter (copy)", do not edit manually */
"use client";
import {
  Icon
} from "./chunks/chunk-MN2ZCSKY.js";

// virtual:get-template-can-delete-this
import { Fragment as Fragment2 } from "react";
import { ContextProviders } from "unframer";

// /:https://framerusercontent.com/modules/rGk8W63qgIRZZvVJVilF/O4GYkwsId1bMQCCsxuy2/n1lHEYpP8.js
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { addFonts, ComponentViewportProvider, cx, getFonts, Link, RichText, useComponentViewport, useLocaleInfo, useVariantState, withCSS } from "unframer";
import { LayoutGroup, motion, MotionConfigContext } from "unframer";
import * as React from "react";
var PhosphorFonts = getFonts(Icon);
var serializationHash = "framer-N5aw6";
var variantClassNames = { Gj1MOkLWz: "framer-v-1gppf8s" };
var transition1 = { damping: 60, delay: 0, mass: 1, stiffness: 500, type: "spring" };
var Transition = ({ value, children }) => {
  const config = React.useContext(MotionConfigContext);
  const transition = value ?? config.transition;
  const contextValue = React.useMemo(() => ({ ...config, transition }), [JSON.stringify(transition)]);
  return /* @__PURE__ */ _jsx(MotionConfigContext.Provider, { value: contextValue, children });
};
var Variants = motion.create(React.Fragment);
var getProps = ({ height, id, width, ...props }) => {
  return { ...props };
};
var createLayoutDependency = (props, variants) => {
  if (props.layoutDependency) return variants.join("-") + props.layoutDependency;
  return variants.join("-");
};
var Component = /* @__PURE__ */ React.forwardRef(function(props, ref) {
  const { activeLocale, setLocale } = useLocaleInfo();
  const { style, className, layoutId, variant, ...restProps } = getProps(props);
  const { baseVariant, classNames, clearLoadingGesture, gestureHandlers, gestureVariant, isLoading, setGestureState, setVariant, variants } = useVariantState({ defaultVariant: "Gj1MOkLWz", variant, variantClassNames });
  const layoutDependency = createLayoutDependency(props, variants);
  const sharedStyleClassNames = [];
  const scopingClassNames = cx(serializationHash, ...sharedStyleClassNames);
  const ref1 = React.useRef(null);
  const defaultLayoutId = React.useId();
  const componentViewport = useComponentViewport();
  return /* @__PURE__ */ _jsx(LayoutGroup, { id: layoutId ?? defaultLayoutId, children: /* @__PURE__ */ _jsx(Variants, { animate: variants, initial: false, children: /* @__PURE__ */ _jsx(Transition, { value: transition1, children: /* @__PURE__ */ _jsx(Link, { href: "framer.com/projects/new?duplicate=2ONyZoOhnUNU7Cns8nNH&via=nb12", nodeId: "Gj1MOkLWz", openInNewTab: true, children: /* @__PURE__ */ _jsxs(motion.a, { ...restProps, ...gestureHandlers, className: `${cx(scopingClassNames, "framer-1gppf8s", className, classNames)} framer-1ncd0be`, "data-framer-name": "Variant 1", layoutDependency, layoutId: "Gj1MOkLWz", ref: ref ?? ref1, style: { backgroundColor: "rgb(255, 255, 255)", borderBottomLeftRadius: 11, borderBottomRightRadius: 11, borderTopLeftRadius: 11, borderTopRightRadius: 11, boxShadow: "0px 0.48174984141951427px 1.252549587690737px -1.25px rgba(0, 0, 0, 0.28796), 0px 1.8308266425947657px 4.760149270746391px -2.5px rgba(0, 0, 0, 0.25423), 0px 8px 20.8px -3.75px rgba(0, 0, 0, 0.1)", ...style }, children: [/* @__PURE__ */ _jsx(ComponentViewportProvider, { children: /* @__PURE__ */ _jsx(motion.div, { className: "framer-14sbuos-container", layoutDependency, layoutId: "QxpqawPLR-container", children: /* @__PURE__ */ _jsx(Icon, { color: "var(--token-162cc6f1-5b31-4c9d-a955-3d5570248c76, rgb(29, 31, 19))", height: "100%", iconSearch: "House", iconSelection: "Sparkle", id: "QxpqawPLR", layoutId: "QxpqawPLR", mirrored: false, selectByList: true, style: { height: "100%", width: "100%" }, weight: "fill", width: "100%" }) }) }), /* @__PURE__ */ _jsx(RichText, { __fromCanvasComponent: true, children: /* @__PURE__ */ _jsx(React.Fragment, { children: /* @__PURE__ */ _jsx(motion.p, { style: { "--font-selector": "R0Y7SW50ZXItNjAw", "--framer-font-family": '"Inter", "Inter Placeholder", sans-serif', "--framer-font-size": "12px", "--framer-font-weight": "600", "--framer-letter-spacing": "-0.4px", "--framer-line-height": "1.75em", "--framer-text-color": "var(--extracted-r6o4lv, var(--token-162cc6f1-5b31-4c9d-a955-3d5570248c76, rgb(29, 31, 19)))" }, children: "Get Alter" }) }), className: "framer-3qnmqr", fonts: ["GF;Inter-600"], layoutDependency, layoutId: "S7cgqHiN3", style: { "--extracted-r6o4lv": "var(--token-162cc6f1-5b31-4c9d-a955-3d5570248c76, rgb(29, 31, 19))", "--framer-link-text-color": "rgb(0, 153, 255)", "--framer-link-text-decoration": "underline", "--framer-paragraph-spacing": "0px" }, verticalAlignment: "top", withExternalLayout: true })] }) }) }) }) });
});
var css = ["@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }", ".framer-N5aw6.framer-1ncd0be, .framer-N5aw6 .framer-1ncd0be { display: block; }", ".framer-N5aw6.framer-1gppf8s { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 7px; height: min-content; justify-content: center; overflow: hidden; padding: 8px 14px 8px 12px; position: relative; text-decoration: none; width: min-content; will-change: var(--framer-will-change-override, transform); }", ".framer-N5aw6 .framer-14sbuos-container { flex: none; height: 18px; position: relative; width: 18px; }", ".framer-N5aw6 .framer-3qnmqr { flex: none; height: auto; position: relative; white-space: pre; width: auto; }", "@supports (background: -webkit-named-image(i)) and (not (font-palette:dark)) { .framer-N5aw6.framer-1gppf8s { gap: 0px; } .framer-N5aw6.framer-1gppf8s > * { margin: 0px; margin-left: calc(7px / 2); margin-right: calc(7px / 2); } .framer-N5aw6.framer-1gppf8s > :first-child { margin-left: 0px; } .framer-N5aw6.framer-1gppf8s > :last-child { margin-right: 0px; } }"];
var Framern1lHEYpP8 = withCSS(Component, css, "framer-N5aw6");
var stdin_default = Framern1lHEYpP8;
Framern1lHEYpP8.displayName = "Get template (can delete this)";
Framern1lHEYpP8.defaultProps = { height: 37, width: 99 };
addFonts(Framern1lHEYpP8, [{ explicitInter: true, fonts: [{ family: "Inter", source: "google", style: "normal", url: "https://fonts.gstatic.com/s/inter/v18/UcCO3FwrK3iLTeHuS_nVMrMxCp50SjIw2boKoduKmMEVuGKYMZ1rib2Bg-4.woff2", weight: "600" }] }, ...PhosphorFonts], { supportsExplicitInterCodegen: true });

// virtual:get-template-can-delete-this
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
