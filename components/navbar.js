import React, {useState} from 'react'
import Link from 'next/link';
import Head from 'next/head';
import Image from 'next/image';

function Navbar(){
    return(
        <>
            <nav className="nav">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                       Smasher <i className="fab fa-typo3"/>
                    </Link>
                </div>
            </nav>
        </>
    )
}