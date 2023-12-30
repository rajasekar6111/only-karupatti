import './product.css';
import React, { useState } from 'react';

function Product() {
    const [isZoomed, setIsZoomed] = useState(false);

    const handleZoomToggle = () => {
        setIsZoomed(!isZoomed);
    };
    return (
        <div className='flex' style={{ justifyContent: 'space-around' }}>
            <div className={`flex ${isZoomed ? 'zoomed' : ''}`} onClick={handleZoomToggle}>
                <div className='flex-column'>
                    <div>
                        <img
                            src='https://onlykarupatti.com/cdn/shop/files/AJ705499_1.webp?v=1699355395&width=1946'
                            width='40%'
                            alt=''
                        />

                        <div style={{ marginRight: '10%' }}>
                            <img
                                src='https://onlykarupatti.com/cdn/shop/files/AJ705499_1.webp?v=1699355395&width=1946'
                                width='30%'
                                alt=''
                            />
                            <img
                                src='https://onlykarupatti.com/cdn/shop/files/AJ705499_1.webp?v=1699355395&width=1946'
                                width='30%'
                                alt=''
                            />
                        </div>

                        <div className='flex' style={{ columnGap: '30px', flexWrap: 'wrap', marginLeft: '50px' }}>
                        <img
                            src='https://onlykarupatti.com/cdn/shop/files/PMM2_2.webp?v=1700589501&width=1100'
                            width='20%'
                            alt=''
                        />
                        <img
                            src='https://onlykarupatti.com/cdn/shop/files/AJ705580withwindowshadow.webp?v=1700589501&width=1100'
                            width='20%'
                            alt=''
                        /><br/>
                        <img
                            src='https://onlykarupatti.com/cdn/shop/files/AJ705577-4.webp?v=1700589497&width=1100'
                            width='20%'
                            alt=''
                        />
                    </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Product;