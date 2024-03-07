import React from 'react';
import cx from 'classnames';

const DefaultContainer = ({ children, className }) => {
    const containerClassName = cx(
        "relative w-full xl:max-w-[1200px] 2xl:max-w-[1360px] 3xl:max-w-[1440px] 4xl:max-w-[1680px] mx-auto px-6 xl:px-0",
        className
    );
    return <div className={containerClassName}>{children}</div>;
};

export default DefaultContainer;
