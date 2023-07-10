//********************************** Ejemplo 1
const header = Vue.createApp({
    data(){
        return{
            menu: 'menu_template',              
        }
    },
    components: {
        menu_template: {
            template: `<aside id="menu">
                <div><a href="index.html">Inicio</a></div>
                <div><a href="locales.html">Locales</a></div>
                <div id="logo">
                    <img src="images/logo.png" alt="Beer House">
                </div>
                <div><a href="menu.html">Menu</a></div>
                <div><a href="contacto.html">Contacto</a></div>
                <div><a href="carrito.html">🛒</a></div>
            </aside>`}        
    }
}).mount("#header")
