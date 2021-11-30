import '../../style/components/layout/Header.css'
import '../../style/components/layout/MediaQuerys.css'

const Header = (props) => {
    return(

        <header class="contenedor">
            <div class="fila">
                {/* <div class="navbar navbar-expand-lg col-lg-12 col-md-12 col-ms-12 col-xs-12"> */}
                <div class="login col-lg-12 col-md-12 col-ms-12 col-xs-12">  
                    <a class="btn btn-danger" href="http://localhost:3000/admin/login"><i class="fas fa-sign-in-alt"></i>   Login</a>
                </div>
            </div>
                <div class="fila fila-flex">
                    <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                        <img class="logoAnima" src="img/logo.png" alt=""/>
                    </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <h1 class="animacion" id="animacion">Recetas Faciles</h1>
                </div>
                <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                    <img class="logoAnima" src="img/logo.png" alt="" />
                </div>
            </div>
    </header>
        
        
    );
}

export default Header;