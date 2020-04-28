import { LitElement, html, css } from 'lit-element';
class ComponentePrincipal extends LitElement {
    static get styles() {
        return css`

        .categorias{
            float:left;
            display: inline-block;
            width:20%;
            background-color:#493318;
            color: #fff;
        }
        .resultado{
            
            float:left;
            display: inline-block;
            width:36%;
        }
        .informacion{
            float:left;
            display: inline-block;
            width: 40%;
        }
        `;
    }

    static get properties() {
        return {
            resultados: {type: Object},
            libroEnviar:{type: Object}
        };
    }
    constructor(){
        super();
        this.resultados =[];
        this.libroEnviar;
    }

    render() {
        return html`
            <div class="categorias">
                <listado-categorias  @librosCategoria="${this.librosRecibidos}"></listado-categorias> <!--  Es el componente donde se muestra listado de categorias -->
            </div>
            
            <div class="resultado">
                ${this.resultados.map(item => html`<resultado-libros .libro="${item}" @libroinformacion="${this.informacionLibro}"></resultado-libros>`)} <!--  Es el componente el listado de libros de una categoria seleccionada -->
            </div>
            <div class="informacion">
                <informacion-libro .libro="${this.libroEnviar}"></informacion-libro> <!--  Es el componente  donde se muestra la información del libro -->
            </div>
            
        `;
    }
    //se recibe los libros de una categoria seleecionada y se enviar al componente resultado libros para ser mostrada 
    librosRecibidos(a){
        this.resultados = [];
        this.resultados=a.detail;
        console.log("componente principal",a.detail);
    }
    //Se recibe la informacion del componente resultado libros y copia la información del libro a la propiedad libro enviar, para que sea enviada al componente informacion libro 
    informacionLibro(a){
        console.log("componente principal informacion libro", a);
        this.libroEnviar = a.detail;
    }   


}
customElements.define('componente-principal', ComponentePrincipal);