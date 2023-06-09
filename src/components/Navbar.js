import React from 'react'

export const Navbar = () => {
    return (
        <header>
             <div className="site_header">

                <div className="left_logo">
                    <img id="logoDataPerformanceMobile"  src="../assets/images/logo.png"  alt="logo_bexup"/>
                </div>
                <div className="right_text">
                    <h1 className="text_p">
                        BexUp <br></br> Marcas <br></br> Modelos
                    </h1>
                </div>
            </div>
            <div className="logo">
            <img id="logoMobile" src="../assets/images/logo.png" alt="logo_qonteo" />
            </div>

        </header>
    )
}
