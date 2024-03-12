import React from "react";

const NonAbiativeIcon = ({ title, titleId, ...props }, svgRef) => {
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
        d: "M25.0833 31.374L17.9612 45.5151M25.0833 31.374C24.2492 30.9539 23.8904 29.9539 24.2673 29.0994L35.3804 3.8982C36.1118 2.23963 38.0835 1.53227 39.7024 2.34764C41.3213 3.16301 41.9268 5.16836 41.0296 6.74341L27.3968 30.6756C26.9345 31.4871 25.9175 31.7942 25.0833 31.374Z"
    }));
}

const ForwardRef = React.forwardRef(NonAbiativeIcon);
export default ForwardRef;