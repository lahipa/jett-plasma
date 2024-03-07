import React from 'react';
import cx from 'classnames';

const DefaultContainer = ({ children, className }) => {
    const containerClassName = cx(
        "relative w-full xl:max-w-[1200px] 2xl:max-w-[1280px]  mx-auto px-6 xl:px-0", // 4xl:max-w-[1680px] 3xl:max-w-[1440px]
        className
    );
    return <div className={containerClassName}>{children}</div>;
};

export default DefaultContainer;
