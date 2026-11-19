import React from 'react'
import './Homepage.css'

function Homepage() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <header className="page-container">
                <div className="logo-container">
                    <img className="logo-image" src="/images/Logo.png" alt="AQUAEXOTIC Logo" />
                    <h2 className="homepage-title">AQUAEXOTIC</h2>
                </div>

                <input className="search-container" type="text" placeholder="Search..." />
                
                <div className="button-container">
                    <button>Search</button>
                    <button>Search</button>
                </div>
            </header>
        </div>
    )
}

export default Homepage
