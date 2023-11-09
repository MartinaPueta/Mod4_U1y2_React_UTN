import '../styles/components/pages/ContactoPage.css';
import React from 'react';

const ContactoPage = (props) => {
    return (
        <body>
        <div className="fondo-contacto">
        <div className= "header">
            <div className="servicios">
                <h2>Contactanos</h2>
            </div>
        </div>
    </div> 
    <main className="contacto">
        <div>
            <h2>Contacto Rápido</h2>
            <form action="" method="" className="formulario">
                <p>
                    <label for="nombre">Nombre</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="email">Email</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="telefono">Telefono</label>
                    <input type="text" name=""/>
                </p>
                <p>
                    <label for="mensaje"> Mensaje</label>
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                </p>
                <p>
                    <input type="submit" value="Enviar"/>
                </p>
            </form>
        </div>
        <div className="datos">
            <h2>Tambien puedes encontrarnos en:</h2>
            <ul>
                <li>(Direccion)</li>
                <li>(Numero de telefono)</li>
                <li>Facebook:</li>
                <li>Instagram:</li>
            </ul>
        </div>
    </main>
</body>
    );
}
export default ContactoPage;