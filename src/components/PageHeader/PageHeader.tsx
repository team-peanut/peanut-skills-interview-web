import React from 'react'
import classNames from "classnames";

import styles from './PageHeader.module.scss';
import ActionButton from '../ActionButton/ActionButton';

export interface Props {
    className?: string
}

function PageHeader({className}: Props): JSX.Element {
    
    return (
        <header className={classNames(styles.wrapper,className)}>
            <div>
                <a href="https://www.peanut-app.io/" title="Peanut" className={styles.menu}>
                    Menu
                </a>

                <a href="https://www.peanut-app.io/" title="Peanut" className={styles.logo}>
                    Peanut
                </a>
                <ul>
                    <li><a href="/planning-for-a-baby">Planning for a Baby</a></li>
                    <li><a href="/pregnancy">Pregnancy</a></li>
                    <li><a href="/baby">Baby</a></li>
                    <li><a href="/toddler-and-child">Toddler &amp; Child</a></li>
                    <li><a href="/health-and-wellbeing">Health &amp; Wellbeing</a></li>
                    <li><a href="/menopause">Menopause</a></li>
                </ul>
                <ActionButton className={styles.button}>
                    <>Join</>
                </ActionButton>
            </div>
        </header>
    );
};

export default PageHeader;
