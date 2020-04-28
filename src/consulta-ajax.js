import { LitElement, html, css } from 'lit-element';
import '@polymer/iron-ajax/iron-ajax.js';


class ConsultaAjax extends LitElement {
    static get styles() {
        return css`...`
    }

    static get properties() {
        return {
            urlconsulta:{type: String, reflect: true},
            ejecutar:{type: Boolean}
        };
    }

    constructor(){
        super();
        this.ejecutar = false;
    }

    get peticionajax(){
        return html`
        <div>  
            <iron-ajax
                auto
                url="${this.urlconsulta}"
                handle-as="json"
                @response="${this._realizarBusqueda}">
            </iron-ajax>
        </div>
    `;
    }
 

    render() {
        return html`
            <div>
                ${this.peticionajax}
            </div>
        `;
    }
    
    //Metodo que enviar en un evento la información recibida del consumo AJAX

    _realizarBusqueda(e){
        this.dispatchEvent(new CustomEvent('recibirdatos', {
            detail: e.detail.__data.response
        }));
        this.ejecutar = false;
    }

}
customElements.define('consulta-ajax', ConsultaAjax);


