
import React from "react";

const Header = () => 
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
</section>

export default Header;