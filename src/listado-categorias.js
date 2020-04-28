import { LitElement, html, css } from 'lit-element';
import './componente-li';


class ListadoCategorias extends LitElement {
    static get styles() {
        return css`
        :host{
            display:block;
        }
        .fondo{
            background-color:rgb(0, 0, 0);
            opacity:0.6;
            color: #000;
        }
        #list-categorias{
            width: 100%;
            background-color:#493318;
            color: #fff;
        }
        .list-categorias{
            text-aling: center;
        }
        `
    }

    static get properties() {
        return { 
            listadoUrl:{type: String},
            respuestaajax: {type: Object},
            ejecutar:{type: Boolean},
            listadoCategorias:{type: Array},


        };
    }
    constructor(){
        super();
        this.listadoUrl = "https://www.etnassoft.com/api/v1/get/?get_categories=all";
        this.respuestaajax;
        this.ejecutar = true;
        this.listadoCategorias = [];


    }

    render() {
        return html`
            <consulta-ajax .urlconsulta="${this.listadoUrl}" .ejecutar="${this.ejecutar}" @recibirdatos="${this.mostrarListadoCategorias}"></consulta-ajax>
            <body class="fondo">
                <div id="list-categorias">
                    <h4 class="list-categorias">Listado Categorias</h4>
                    <ul>
                        ${this.listadoCategorias.map(item => html`<componente-li .idasignado="${item.category_id}" .texto="${item.name}" @recibirLibrosCategoria="${this.mostrarLibrosCategorias}"></componente-li>`)}
                    </ul>
                </div> 
            </body>
            
        `;
    }
    //Metodo que copia la respuesta de la consulta AJAX a la propiedad listadoCategorias
    mostrarListadoCategorias(a){
        
        this.listadoCategorias = a.detail;
    }
    //Metodo que recibe los libros de la categoria seleecionada
    mostrarLibrosCategorias(b){
        if(b.detail !== null){
            
            this.dispatchEvent(new CustomEvent('librosCategoria', {
                detail: b.detail
            }));
        }
        
    }

}
customElements.define('listado-categorias', ListadoCategorias);