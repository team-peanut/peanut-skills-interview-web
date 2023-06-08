import React from 'react'
import classNames from "classnames";


import styles from './ActionButton.module.scss';

export interface Props {
    children?: React.ReactNode
    className?: string
}

function ActionButton({children, className}: Props): JSX.Element {

    return (
        <button type="button" className={classNames(styles.wrapper, className)}>{children}</button>
    );
};

export default ActionButton;
