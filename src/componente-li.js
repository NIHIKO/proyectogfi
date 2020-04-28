import { LitElement, html, css } from 'lit-element';

class ComponenteLi extends LitElement {
    static get styles() {
        return css`
        .cajon{
            display:block;
            width: 100%;
	        height: 30px;
            color: #FFF;
            overflow: hidden;
            padding: 5px;
            text­align: justify;
            cursor:pointer;
        }
        `
    }

    static get properties() {
        return {
            texto:{type: String},
            idasignado:{type: Number},
            urlConsultaCategoria: {type: String},
            categoriaConsultar: {type: Object}
        };
    }
    constructor(){
        super();
        this.texto = "";
        this.idasignado = "";
        this.urlConsultaCategoria = "";
        this.categoriaConsultar = "";

    }
    
    render() {
        return html`
        <consulta-ajax .urlconsulta="${this.urlConsultaCategoria}" .ejecutar="${this.ejecutar}" @recibirdatos="${this.mostrarRespuestaCategoria}"></consulta-ajax>
        <div class="cajon" id="${this.idasignado}" @click="${this.consultarCategoria}">${this.texto}</div>
        `;
    }
    
    consultarCategoria(){
        this.peticionajax;
        this.urlConsultaCategoria = "https://www.etnassoft.com/api/v1/get/?num_items=18&category_id="+this.idasignado;
    }

    mostrarRespuestaCategoria(a){
        this.dispatchEvent(new CustomEvent('recibirLibrosCategoria', {
            detail: a.detail
        }));
        this.urlConsultaCategoria = "";
    }
}
customElements.define('componente-li', ComponenteLi);