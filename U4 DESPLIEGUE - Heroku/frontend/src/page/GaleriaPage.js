import '../../src/style/components/page/galeriaPage.css'
const GaleriaPage = (props) =>{
    return(
        <main class="contenedor">
            <div class="fila fila-flex galeria">
                <div class="col-lg-12 -col-md-12 col-sm-12 col-xs-12">
                    <h1>Galerias</h1>
                </div>
            </div>
            
            <div class="fila fila-flex holder galerias">
                
                <div class="foto col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <img src="/img/galerias1.jpeg" alt="" />
                </div>
                <div class="foto col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <img src="/img/galerias2.jpeg" alt="" />
                </div>
                <div class="foto col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <img src="/img/galerias3.jpeg" alt="" />
                </div>
                <div class="foto col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <img src="/img/galerias4.jpeg" alt="" />
                </div>
                <div class="foto col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <img src="/img/galerias5.jpeg" alt="" />
                </div>
                <div class="foto col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <img src="/img/galerias6.jpeg" alt="" />
                </div>
                <div class="foto col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <img src="/img/galerias7.jpeg" alt="" />
                </div>
                <div class="foto col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <img src="/img/galerias8.jpeg" alt="" />
                </div>
                <div class="foto col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <img src="/img/galerias9.jpeg" alt="" />
                </div>
            </div>
        </main>
    );
}

export default GaleriaPage;