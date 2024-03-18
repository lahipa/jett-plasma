import React from 'react';
import data from './data.json';
import cx from 'classnames';

const Heading = ({ children, variant = 'heading-4', className }) => {
    return (
        <h4
            className={cx(data[variant].className, "font-medium", className)}
            style={data[variant].style}
        >
            {children}
        </h4>
    );
};

export default Heading;
