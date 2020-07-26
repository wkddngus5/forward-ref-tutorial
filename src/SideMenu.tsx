import React, { forwardRef, LegacyRef } from 'react';
import './SideMenu.css';

function SideMenu( props: { isVisible: boolean }, ref: LegacyRef<HTMLDivElement> ) {
    return (
        <div
            ref={ ref }
            className={ `side-menu ${ props.isVisible ? 'is-visible' : '' }` }>
            Hi, I'm SideMenu
        </div>
    );
}

export default forwardRef( SideMenu );
