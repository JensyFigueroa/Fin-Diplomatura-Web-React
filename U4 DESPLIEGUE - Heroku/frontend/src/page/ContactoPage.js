/* 4.- importamos las siguientes 2 librerias */
import { useState } from "react"; /* Manejar los estados */
import axios from 'axios'; /* Para las peticiones */

import { NavLink } from "react-router-dom";
import '../../src/style/components/page/contactoPage.css'

const ContactoPage = (props) =>{

    /* 5.- Agregamos el siguiente codigo para el envio de mail */
    const initialForm = {
        nombre: '',
        email: '',
        telefono: '',
        mensaje: '',
    }

    const [sending, setSending] = useState(false);
    const [msg, setMsg] = useState('');
    const [formData, setFormData] = useState(initialForm);

    const handleChange = e => {
        const {name, value} = e.target;
        setFormData(oldData => ({
            ...oldData,
            [name]: value //forma dinamica 
        }));
    }

    const handleSubmit = async e => {
        e.preventDefault();
        setMsg('');
        setSending(true);

        const response = await axios.post('http://localhost:3000/api/contacto', formData);
        setSending(false);
        setMsg(response.data.message);
        if (response.data.error == false) {
            setFormData(initialForm)
        }

    }
    /* Fin de codigo de nuevo código */

    return(
        <main>
        <div class="contenedor holder">
            <div class="fila-flex columnas">
                <div class="left col-lg-6 col-md-6">
                    <h2>Contacto Rápido</h2>
                    <form class="formulario" action="/contacto" method="post"  onSubmit={handleSubmit}>
                        <p>
                            <label for="">Nombre</label>
                            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Email</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} />
                        </p>
                        <p>
                            <label for="">Teléfono</label>
                            <input type="text" name="telefono" value={formData.telefono} onChange={handleChange}/>
                        </p>
                        <p>
                            <label for="">Comentario</label>
                            <textarea name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                        </p>
                        <p class="acciones">
                            <input type="submit" value="Enviar" class="btn-enviar"/>
                        </p>
                        {sending ? <p>Enviando...</p> : null}
                        {msg ? <p>{msg}</p> : null}
                    </form>
                </div>
        
                <div class="right col-lg-6 col-md-6">
                    <h2>Otras vias de contacto</h2>
                    <p>También puedes comunicarte por las siguientes vias...</p>
                    <ul class="rSociales">
                        <li>Teléfono: 9999-9999</li>
                        <li>Email: contacto@lorem-ipsum.com</li><br/>
                        <li><h3>Redes Sociales</h3></li>
  
                        <li><a href="http://www.facebook.com" target="_blank"><i class="fab fa-facebook-square"></i>  Facebook</a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i>  Instagram</a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i class="fab fa-twitter-square"></i>  Twitter</a></li>
                    </ul>
                </div> 
            </div> 
        </div>
    </main>
    );
}

export default ContactoPage