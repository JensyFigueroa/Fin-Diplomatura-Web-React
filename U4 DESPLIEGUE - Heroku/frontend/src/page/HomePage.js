import '../../src/style/components/layout/Main.css'
import '../../src/style/components/layout/MediaQuerys.css'
import { Link } from "react-router-dom";

const HomePage = (props) =>{
    return(
        <main>
            <div class="holder">
                <div class="contenedor">
                    <div class="fila fila-flex">
                        <div class="carousel slide col-lg-12 col-md-12 col-sm-12 col-xs-12" id="carouselExampleIndicators" data-bs-ride="carousel">
                            
                            <div class="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                            </div>
                            
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img src="/img/recetas1.jpeg" class="d-block" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="/img/recetasComidas.jpg" class="d-block" alt="..."/>
                                </div>
                                <div class="carousel-item">
                                    <img src="/img/recetas-para-ninos.jpg" class="d-block" alt="..."/>
                                </div>
                            </div>

                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>

            </div>

            
            <div class="contenedor">
                <div class="">
                        <div class="col-sm-6 col-xs-12" ></div>
                        <h2>Bienvenidos</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id fugit atque facere tempora magni doloremque accusantium aperiam. Harum eveniet consequatur autem, praesentium similique, libero inventore excepturi voluptatem error numquam alias voluptatum, et laboriosam cupiditate deleniti odit quisquam mollitia ullam quas. Fugiat eaque blanditiis architecto ipsum illum inventore numquam, aperiam alias.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>            
                </div>
            </div>
           
                
        </div>

            <div class="bloque-categorias">
                <div class="categorias">
                    <div class="categoria col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <Link exact to="/desayunos"><img src="/img/desayuno1.jpeg" alt=""/></Link>
                        <p>Recetas para Desayunos</p>
                    </div>
                     
                    <div class="categoria col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <Link exact to="/almuerzos"><img src="/img/almuerzo1.jpeg" alt=""/></Link>
                        <p>Recetas para almuerzos</p>
                    </div>

                    <div class="categoria col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <Link exact to="/cenas"><img src="/img/cena1.jpeg" alt=""/></Link>
                        <span>Recetas para Cenas</span>
                    </div>

                    <div class="categoria col-lg-3 col-md-3 col-sm-6 col-xs-6">
                        <Link exact to="/postres"><img src="/img/postre1.jpeg" alt=""/></Link>
                        <span>Recetas para Postres</span>
                    </div> 
                </div>
            </div>
            
    </main>

        
    );
}

export default HomePage;