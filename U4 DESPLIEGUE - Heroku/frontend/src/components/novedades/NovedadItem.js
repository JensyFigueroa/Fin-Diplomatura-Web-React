/* 23 Creamos la carpeta novedades y agregamos NovedadItem.js con el siguiente
codigo  */
/* import React from 'react'; */

const NovedadItem = (props) => {
    const {title, subtitle, body, imagen} = props;

    return (
        <main>
            <div class="holder novedades">
                <div className="novedades">
                    <h4>{title}</h4>
                    <h5>{subtitle}</h5>
                    <img src= {imagen}/>
                    <div dangerouslySetInnerHTML={{ __html: body}}/>
                    <hr/>
                </div>
            </div>
        </main>
    );
}

export default NovedadItem; 