import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

const PRIMARY = 'primary';
const DANGER = 'danger';

const Button = props => {
    const {
        btnType = PRIMARY,
        children,
        className,
        ...restProps
    } = props;

    const classes = classNames(styles.btn, className, {
        [`${styles.primary}`]: btnType === PRIMARY,
        [`${styles.danger}`]: btnType === DANGER
    });

    return (
        <button className={classes} {...restProps}>
            {children}
        </button>
    );
};

export default Button;
