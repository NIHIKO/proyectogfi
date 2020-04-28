import { LitElement, html, css } from 'lit-element';

class InformacionLibro extends LitElement {
    static get styles() {
        return css`
            :host{
                
                font-family: Roboto;
            }
            .principal{
                display: block;
                width: 100%;
                
            }
            .imagen{
                float:left;
                display: inline-block;
                min-width: 100%;

                padding: 5px;
            }
            .imagen img{
                width: 100%;
            }
            .informacion{
                float:left;
                display: inline-block;
                width: 100%;
                background-color:#aab3b3;
                color: black;
                margin: 5px;
                padding: 10px;
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
            <div class="principal">
            <div class="imagen">
                <img src="${this.libro.cover}">
            </div>
            <div class="informacion">
                <h2><b>Titulo: </b>${this.libro.title}</h2>
                <h3><b>Autor: </b>${this.libro.author}</h3>
                <h4><b>Fecha de Publicación:</b> ${this.libro.publisher_date}</h4>
                <h4><b>Idioma: </b> ${this.libro.language}</h4>
                <p><b>Contenido: </b>${this.libro.content}</p>
            </div>
        </div>
        `
    }

    updated(changedProperties) {
        changedProperties.forEach((oldValue, propName) => {
          console.log(`${propName} changed. oldValue: ${oldValue}`);
        });
    }
}
customElements.define('informacion-libro', InformacionLibro);