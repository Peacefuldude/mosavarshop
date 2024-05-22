import React from "react";

const Footer = () => {
    return (
        <div className="w-full flex flex-row justify-between">
            <div>
                <span>&copy; All Rights Reserved - 2023</span>
            </div>
            <div>
                <span className="mx-2 text-sm border-b-2 cursor-pointer">
                    AMAQ
                </span>
                <span className="mx-2 text-sm border-b-2 cursor-pointer">
                    MDOM
                </span>
            </div>
        </div>
    );
};

export default Footer;
