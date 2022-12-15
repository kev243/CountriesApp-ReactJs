import React from 'react';

const Logo = () => {
    return (
        <div className="logo">
            {/* les images importer en img sont accessible en public uniquement  */}
            <img src='./logo192.png' alt='logo react'/>
            <h3>React word</h3>
            
        </div>
    );
};

export default Logo;