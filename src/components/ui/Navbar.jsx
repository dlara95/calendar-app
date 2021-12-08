import React from 'react';

export const Navbar = () => {
    return (
        <div className="navbar navbar-dark bg-dark mb-4">
            <span className="navbar-brand">
                Noah
            </span>

            <button className="btn btn-outline-danger">
                <i className="fas fa-sign-out-alt"></i> 
                <span> salir</span>
            </button>
            
        </div>
    )
}
