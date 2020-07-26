import React, { useState, useCallback, useEffect, useRef } from 'react';
import logo from './logo.svg';
import SideMenu from './SideMenu';
import './App.css';

function App() {
    const [ isSideMenuVisible, setIsSideMenuVisible ] = useState<boolean>( false );
    const sideMenuRef = useRef<HTMLDivElement>( document.createElement( 'div' ) );
    const sideMenuButtonRef = useRef<HTMLButtonElement>( document.createElement( 'button' ) );

    const onClickSideMenuButton = useCallback( ( event: React.MouseEvent<HTMLButtonElement>) => {
        setIsSideMenuVisible( true );
    }, []);

    useEffect( () => {
        document.addEventListener( 'click', ( event: any ) => {
            const { target } = event;
            console.log( sideMenuRef.current.contains( target ) );
            if ( sideMenuRef.current.contains( target ) || sideMenuButtonRef.current.contains( target ) ) {
                return;
            }
            setIsSideMenuVisible( false );
        } );
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <SideMenu
                    ref={ sideMenuRef }
                    isVisible={ isSideMenuVisible } />
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.tsx</code> and save to reload.
                </p>
                <button
                    ref={ sideMenuButtonRef }
                    onClick={ onClickSideMenuButton }>
                    Show SideMenu
                </button>
            </header>
        </div>
    );
}

export default App;
