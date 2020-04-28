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
            <flip-card>
						<section slot="front-content">
							<header class="banner"><i class="fab fa-js-square"></i> JavaScript</header>
							<main>
								<h1 class="card-title"><i class="fas fa-filter"></i>array.filter()</h1>
								<ol>
									<li>Takes an array</li>
									<li>A callback function filters the array</li>
									<li>Filter is applied to each array item</li>
									<li>If the value matches the filter (truthy), it's added to a new array</li>
									<li>If it doesn't match (falsy), ignore it</li>
									<li>Returns a new array</li>
								</ol>
							</main>
						</section>
						
						<section slot="back-content">
							<header class="banner"><i class="fab fa-js-square"></i> JavaScript</header>
							<main>
								<h1 class="card-title"><i class="fas fa-filter"></i>array.filter()</h1>
								<ul>
									<li><code>var fruits = ['pear', 'banana', 'plum'];</code></li>
									<li class="comment">Fruits contains an array with 3 strings</li>
									<li><code>const result = fruits.filter(fruit =&gt; fruit.length &lt; 5); </code></li>
									<li class="comment">Fruit represents each array item</li>
									<li><code>console.log(result);</code></li>
									<li class="comment">Values less than 5 characters are added to a new array and stored in result</li>
									<li><code>// output: Array ['pear', 'plum']</code></li>
								</ul>
							</main>
						</section>
					</flip-card>            
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