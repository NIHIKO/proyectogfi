import { LitElement, html, css } from 'lit-element';

class ResultadoLibros extends LitElement {
    static get styles() {
        return css`
        :host{
            display: inline-block;
            height: 200px; 
            width: 150px;
        }
        :host * {
            box-sizing: border-box;
        }
        #container {
            position: relative;
            height: 100%;
            width: 100%;
            perspective: 1000px;
            text-align: center;
        }
        #front{
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.8), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);
            border: solid 1px #929292;
            cursor:pointer;
        }
        `
    }

    static get properties() {
        return {
            libro:{type: Object}
        };
    }
    constructor(){
        super();
        this.libro;
    }


    render() {
        return html`
        <div id="container" >
            <div id="front" >
            <img src="${this.libro.cover}" style="height: 200px; width: 150px;" @click="${this.enviarLibro}"/>
            </div>
        </div>
            
        `;
    }
    // Este metodo dispara un evento con la informacion del libro seleccionado
    enviarLibro(){
        this.dispatchEvent(new CustomEvent('libroinformacion', {
            detail: this.libro
        }));
    }
   
}
customElements.define('resultado-libros', ResultadoLibros);