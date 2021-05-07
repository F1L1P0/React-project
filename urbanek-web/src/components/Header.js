
import React from 'react';
import ReactDOM from 'react-dom';

const Header = () => 
<div className="app">

   <div className="bg-header">
        <div className="wing">
            <section className="mb-2">
                <div className="container">
                    <div className="row justify-content-between BO-underline">
                        <div className="col-4 d-flex align-items-center">
                            <a href="mailto:eshop@bana.cz" className="BO-navigation">eshop@bana.cz</a>
                        </div>
                        <div className="col-8 d-flex justify-content-end">
                            <a className="p-2 BO-navigation" href="./">Úvod</a>
                            <a className="p-2 BO-navigation">O nás</a>
                            <a className="p-2 BO-navigation">Přihlášení</a>
                            <a className="p-2 BO-navigation">Registrace</a>
                            <a className="p-2 BO-navigation" href="./Contact">Kontakt</a>
                        </div>
                    </div>
                </div>
                    <div className="btns">
                        <a className="nav-btn" href="#link1"></a>
                    </div>
            </section>
        </div>
   </div>
            <section id="link1">
                
            </section>
</div>
export default Header;