import React from "react";

const AbiativeIcon = ({ title, titleId, ...props }, svgRef) => {
    return /*#__PURE__*/React.createElement("svg", Object.assign({
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 50 50",
        strokeWidth: 0,
        stroke: "currentColor",
        fill: "none",
        "aria-hidden": "true",
        ref: svgRef,
        "aria-labelledby": titleId
    }, props), title ? React.createElement("title", {
        id: titleId
    }, title) : null, React.createElement("path", {
        strokeLinecap: "round",
        // strokeLinejoin: "round",
        // fillRule: "evenodd",
        // clipRule: "evenodd",
        d: "M25.0833 31.374L17.9612 45.5151M25.0833 31.374C24.2491 30.9539 23.8904 29.9539 24.2672 29.0994L35.3804 3.8982C36.1117 2.23963 38.0835 1.53227 39.7024 2.34764C41.3213 3.16301 41.9268 5.16836 41.0295 6.74341L27.3968 30.6756C26.9345 31.4871 25.9174 31.7942 25.0833 31.374ZM24.2241 43.776L29.393 42.0697M24.6845 47.9915L30.8988 47.6366M15.6302 39.4477L13.924 34.2788M11.9691 41.5874L8.55469 36.3831"
    }));
}

const ForwardRef = React.forwardRef(AbiativeIcon);
export default ForwardRef;