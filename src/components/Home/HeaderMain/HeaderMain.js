import React from 'react';
import './HeaderMain.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTruck } from '@fortawesome/free-solid-svg-icons';

const HeaderMain = () => {
    return (
        <main className='row d-flex align-items-center header-main container'>
            <div className="col-md-6 offset-md-1">
                <h3><FontAwesomeIcon icon={faTruck} /></h3>
                <p><span className='color-change'>FAST .</span> <span className='color-change'>SECURED .</span> <span className='color-change'>ANYWHERE</span></p>
                <h1>BEST FOR <span className='text-color'>COURIER</span> & <span className='text-color'>DELIVERY</span> SERVICES</h1>
                <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, quos?</p>
                
                <div className="input-group">
                    <input placeholder='Track Your Product By ID' type="text"/>
                    <div className="input-group-append">
                        <button id="searchButton" type="button" className="btn btn-danger">Track</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;