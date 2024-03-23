'use client';

import React, { useState, useEffect } from "react";
import { usePopper } from "react-popper";
import cx from "classnames";
import { Icon } from "@/app/_components/base";


const LangSelector = () => {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState("en");
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

    const onSelectHandler = ({ item }) => {
        setSelected(item.value);
        setOpen(false);
    };

    const wrapperButtonClass = cx("outline-none border-none active:outline-none active:border-none text-left");

    // data
    const langData = [
        { title: "English (en)", value: "en", selected: "English (en)" },
        { title: "Czech (cs)", value: "cs", selected: "Czech (cs)" },
    ];

    return (
        <div className="relative h-fit">
            <button type="button" ref={setReferenceElement} className={wrapperButtonClass} onClick={() => setOpen(true)}>
                <div className="flex items-center gap-[4px]">
                    <span className="uppercase">{selected}</span>
                    <Icon icon="IconChevronDown" />
                </div>
            </button>

            {open && (
                <div
                    ref={setPopperElement}
                    className={cx("min-w-full max-w-lg w-max z-30 ")}
                    style={styles.popper}
                    {...attributes.popper}
                >
                    <div className="flex flex-col px-4 py-3 rounded-[8px] bg-white shadow-md border gap-4 max-h-[328px] overflow-x-auto">

                        {langData.map((item, index) => {

                            const itemClass = cx("mr-[20px]", {
                                "font-medium": item.value === selected,
                                "opacity-50": item.value !== selected,
                            });
        
                            return (
                                <button
                                    type="button"
                                    key={`${index+1}-id:select-${item.value}`}
                                    className="flex outline-none focus:outline-none text-left items-center justify-between hover:font-medium"
                                    onClick={() => onSelectHandler({ item })}
                                >
                                    <span className={itemClass}>{item.title}</span>
                                    {item.value === selected && <Icon icon="IconSquareRoundedCheck" size={20} color="text-primary" />}
                                </button>
                            );
                        })}

                    </div>
                </div>
            )}
        </div>
    );
};

export default LangSelector;
