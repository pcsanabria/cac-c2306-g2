//********************************** Ejemplo 1
const header = Vue.createApp({
    data(){
        return{
            menu: 'menu_template',  
            footer: 'footer_template',  
        }
    },
    components: {
        menu_template: {
            template: `<aside id="menu">
                <div><a href="#">Inicio</a></div>
                <div><a href="#">Locales</a></div>
                <div id="logo">
                    <img src="images/logo.png" alt="Beer House">
                </div>
                <div><a href="menu.html">Menu</a></div>
                <div><a href="#">Contacto</a></div>
            </aside>`},
        'footer_template': {
            template: `<footer>
                        <div class="col">
                            <div class="col_1_2">Copyright © 2023. Todos los derechos reservados.</div>
                            <div class="col_1_2" id="redes">
                                <a href="https://www.facebook.com"><i class="fa-brands fa-facebook"></i></a>
                                <a href="https://www.instagram.com"><i class="fa-brands fa-instagram"></i></a>
                            </div>
                        </div>
                    </footer>`}
        
    }
}).mount("#content")
