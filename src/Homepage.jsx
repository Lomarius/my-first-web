import React from 'react'

function Homepage() {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
                fontFamily: 'sans-serif',
            }}
        >
            <header
                style={{
                    color: 'white',
                    padding: '20px',
                    textAlign: 'center',
                    backgroundColor: '#0077ff',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}
            >
                <h2 style={{ margin: 0 }}>AQUAEXOTIC</h2>
                <input style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    borderRadius: '10px',
                }} type="text" placeholder="Search..." />
                <button>Search</button>
                <button>Search</button>
            </header>
        </div>
    )
}

export default Homepage
