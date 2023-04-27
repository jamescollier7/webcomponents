// web component
class HelloWorld extends HTMLElement {
  
  // because this extends HTMLElement, call super() first
  // then do other initializations
  constructor() {
    super();
    this.name = 'World';
  }
  
  // connect component
  connectedCallback() {
    this.textContent = `Hello ${ this.name }!`;
  }
  
  // component attributes
  static get observedAttributes() {
    return ['name'];
  }
  
  // attribute change
  attributeChangedCallback(property, oldValue, newValue) {
    if(property == 'name' && oldValue !== newValue){
      this.name = newValue
    }
  }
  
}

// register component
customElements.define( 'hello-world', HelloWorld );
