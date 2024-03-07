'use client';

import React, { useState, useEffect } from "react";
import { Icon } from "@/app/@components/base";
import { usePopper } from "react-popper";
import cx from "classnames";


const LangSelector = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("");
    const [popperElement, setPopperElement] = useState(null);
    const [referenceElement, setReferenceElement] = useState(null);

    const { styles, attributes, update } = usePopper(referenceElement, popperElement, {
        placement: "bottom-end",
        modifiers: [{ name: "offset", options: { offset: [0, 8] } }],
    });

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (referenceElement && referenceElement.contains(e.target)) return;
            if (popperElement && !popperElement.contains(e.target)) setOpen(false);
        };

        document.addEventListener("mouseup", handleClickOutside);
        return () => document.removeEventListener("mouseup", handleClickOutside);
    }, [popperElement, referenceElement]);

    const wrapperButtonClass = cx("outline-none border-none active:outline-none active:border-none text-left")

    return (
        <div className="relative h-fit">
            <button type="button" ref={setReferenceElement} className={wrapperButtonClass}>
                <div className="flex items-center gap-[4px]">
                    <span>EN</span>
                    <Icon icon="IconChevronDown" />
                </div>
            </button>
        </div>
    );
};

export default LangSelector;
