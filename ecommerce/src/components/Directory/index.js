import React from 'react';
import Coasters from './../../assets/coasters-example.jpg';
import "./styles.scss";

const Directory = props => {
    return (
        <div className="directory"> 
            <div className="wrap">
                <div
                    className="item"
                    style={{
                        backgroundImage: `url(${Coasters})`
                    }}
                >
                    <a>
                        Shop coasters
                    </a>
                </div>  
            </div>
        </div>
    );
};

export default Directory