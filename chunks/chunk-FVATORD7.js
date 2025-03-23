// @ts-nocheck
/* eslint-disable */
/* This file was generated by Unframer for Framer project 7e9385cf9f6db9aa "Alter (copy)", do not edit manually */
// /:https://framerusercontent.com/modules/LKQfoCxzCQjj1dSa2BKe/ksowUqOGRGDBCEgGNHmy/Two_line_wrap.js
import { jsx as _jsx } from "react/jsx-runtime";
function withTwoLineEllipsis(Component) {
  return (props) => {
    const newStyle = { ...props.style, display: "-webkit-box", WebkitBoxOrient: "vertical", overflow: "hidden", WebkitLineClamp: 2, textOverflow: "ellipsis" };
    return /* @__PURE__ */ _jsx(Component, { ...props, style: newStyle });
  };
}

// /:https://framerusercontent.com/modules/D7B7TGHewzy2SchEo8Jg/62aMGovv2wnNNgKhNahh/fR_gr4i2T.js
import { fontStore } from "unframer";
fontStore.loadFonts(["Inter-SemiBold", "Inter-Bold", "Inter-BoldItalic", "Inter-SemiBoldItalic"]);
var fonts = [{ explicitInter: true, fonts: [{ family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/hyOgCu0Xnghbimh0pE8QTvtt2AU.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/NeGmSOXrPBfEFIy5YZeHq17LEDA.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/oYaAX5himiTPYuN8vLWnqBbfD2s.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/lEJLP4R0yuCaMCjSXYHtJw72M.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/cRJyLNuTJR5jbyKzGi33wU9cqIQ.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/1ZFS7N918ojhhd0nQWdj3jz4w.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/A0Wcc7NgXMjUuFdquHDrIZpzZw0.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/DpPBYI0sL4fYLgAkX8KXOPVt7c.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/4RAEQdEOrcnDkhHiiCbJOw92Lk.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/1K3W8DizY3v4emK8Mb08YHxTbs.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/tUSCtfYVM1I1IchuyCwz9gDdQ.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/VgYFWiwsAC5OYxAycRXXvhze58.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/DXD0Q7LSl7HEvDzucnyLnGBHM.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "normal", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/GIryZETIX4IFypco5pYZONKhJIo.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/H89BbHkbHDzlxZzxi8uPzTsp90.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/u6gJwDuwB143kpNK1T1MDKDWkMc.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/43sJ6MfOPh1LCJt46OvyDuSbA6o.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/wccHG0r4gBDAIRhfHiOlq6oEkqw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/WZ367JPwf9bRW6LdTHN8rXgSjw.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/QxmhnWTzLtyjIiZcfaLIJ8EFBXU.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/2A4Xx7CngadFGlVV4xrO06OBHY.woff2", weight: "700" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F", url: "https://framerusercontent.com/assets/vxBnBhH8768IFAXAb4Qf6wQHKs.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116", url: "https://framerusercontent.com/assets/zSsEuoJdh8mcFVk976C05ZfQr8.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+1F00-1FFF", url: "https://framerusercontent.com/assets/b8ezwLrN7h2AUoPEENcsTMVJ0.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0370-03FF", url: "https://framerusercontent.com/assets/mvNEIBLyHbscgHtwfsByjXUz3XY.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF", url: "https://framerusercontent.com/assets/6FI2EneKzM3qBy5foOZXey7coCA.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD", url: "https://framerusercontent.com/assets/qrVgiXNd6RuQjETYQiVQ9nqCk.woff2", weight: "600" }, { family: "Inter", source: "framer", style: "italic", unicodeRange: "U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB", url: "https://framerusercontent.com/assets/NHHeAKJVP0ZWHk5YZnQQChIsBM.woff2", weight: "600" }] }];
var css = ['.framer-9rAUl .framer-styles-preset-wm8y1t:not(.rich-text-wrapper), .framer-9rAUl .framer-styles-preset-wm8y1t.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-9rAUl .framer-styles-preset-wm8y1t:not(.rich-text-wrapper), .framer-9rAUl .framer-styles-preset-wm8y1t.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-9rAUl .framer-styles-preset-wm8y1t:not(.rich-text-wrapper), .framer-9rAUl .framer-styles-preset-wm8y1t.rich-text-wrapper p { --framer-font-family: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-family-italic: "Inter", "Inter Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 600; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 600; --framer-letter-spacing: 0em; --framer-line-height: 150%; --framer-paragraph-spacing: 20px; --framer-text-alignment: center; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className = "framer-9rAUl";

// /:https://framerusercontent.com/modules/hbYwgglCWpjLp3TilNqQ/bgl21mp34Jlt2f6Q8kfY/Z4rzRSIez.js
import { fontStore as fontStore2 } from "unframer";
fontStore2.loadFonts(["FS;Plus Jakarta Sans-regular", "FS;Plus Jakarta Sans-bold", "FS;Plus Jakarta Sans-bold italic", "FS;Plus Jakarta Sans-italic"]);
var fonts2 = [{ explicitInter: true, fonts: [{ family: "Plus Jakarta Sans", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/TX2N2Q6ZO2LBO34H72H5RVJTBQFGU4GV/ZICVNTLTT4V7CCIJPWNY363N6LIP2AET/OUUAK2X2MEGEKC6ULA4CFSBY4PE5EGPV.woff2", weight: "400" }, { family: "Plus Jakarta Sans", source: "fontshare", style: "normal", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/AJVGEOXGB2ALQKAZEK2LDOLCVBCMCOIT/LDEP4R7SNNABDEG433DCQGM2A7YCBHLU/OWABOLGBAKFVLPZ756IYS6EKYKU54K3I.woff2", weight: "700" }, { family: "Plus Jakarta Sans", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/57U2OK2BISA74Z4RT4CRD5GR4O3PNVPY/K4TDAPUNBYK24HOCNW4JIOTEXSAE2BEF/GV5XODI2YD2DJA5RVTMJOSDHYESL7IYT.woff2", weight: "700" }, { family: "Plus Jakarta Sans", source: "fontshare", style: "italic", url: "https://framerusercontent.com/third-party-assets/fontshare/wf/UCVXDNZGT5A6V6IG4FWRDHOLGWGQQV4M/TH4CJJ2LCTVPQVYTQSEXOUCHE4FDIZON/LPCI46BISLFAK3QOD4U4IAMRBITTSFAP.woff2", weight: "400" }] }];
var css2 = ['.framer-qiCoj .framer-styles-preset-bdsobh:not(.rich-text-wrapper), .framer-qiCoj .framer-styles-preset-bdsobh.rich-text-wrapper h1 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 72px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }', '@media (max-width: 1199px) and (min-width: 810px) { .framer-qiCoj .framer-styles-preset-bdsobh:not(.rich-text-wrapper), .framer-qiCoj .framer-styles-preset-bdsobh.rich-text-wrapper h1 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 56px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }', '@media (max-width: 809px) and (min-width: 0px) { .framer-qiCoj .framer-styles-preset-bdsobh:not(.rich-text-wrapper), .framer-qiCoj .framer-styles-preset-bdsobh.rich-text-wrapper h1 { --framer-font-family: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-bold-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-family-italic: "Plus Jakarta Sans", "Plus Jakarta Sans Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 40px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 120%; --framer-paragraph-spacing: 0px; --framer-text-alignment: center; --framer-text-color: var(--token-6396e7f2-0645-4f69-9a36-80e94f8ee015, #16101e); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; } }'];
var className2 = "framer-qiCoj";

export {
  withTwoLineEllipsis,
  fonts,
  css,
  className,
  fonts2,
  css2,
  className2
};
