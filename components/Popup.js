"use client";
import { useEffect, useRef } from "react";

const PopupWrapper = ({ open, setOpen, children }) => {
    const popupRef = useRef();
    useEffect(() => {
        if (open) popupRef?.current?.showModal();
        else popupRef?.current?.close();
        return () => {
            popupRef?.current?.close();
        };
    }, [open]);
    return (
        <dialog
            ref={popupRef}
            className="backdrop:bg-[rgba(0,0,0,0.5)] h-max w-max bg-prussian_blue border-0 outline-none rounded-lg px-[4.5rem] lg:px-[4rem] py-4"
            onClose={() => {
                setOpen(false);
            }}
        >
            <img
                src="/icons/Close.png"
                className="icon-fit absolute right-8 top-8 w-5 h-5 object-contain"
                role="button"
                onClick={() => {
                    setOpen(false);
                    popupRef?.current?.close();
                }}
            />
            {children}
        </dialog>
    );
};

export default PopupWrapper;
