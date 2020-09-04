import { LitElement, html, customElement, property } from 'lit-element';
@customElement('login-element')
export class LoginElement extends LitElement {
    @property() name;
    userDetails: any = {}
    constructor() {
        super();
    }
    password = '';
    onPassword({ target: { value } }) { this.password = value }

    userName = '';
    onUserName({ target: { value } }) { this.userName = value }

    render() {
        return html`<div>
    <form>
        <div>
            <div>  
                <label> User Name</label>
                <input type='text' name="userName" .value="${this.userName}"
                @change="${this.onUserName}" >
            </div>
            <div>  
                <label> Password</label>
                <input type='password' name="password" .value="${this.password}"
                @change="${this.onPassword}" >
            </div>
            <div id="message">
            </div>
            <div>
            <button type='button' @click="${this.submitForm}" >Login</button>
            </div>
        </div>
    </form>
    </div>`;
    }
    submitForm() {
       var message= this.shadowRoot.getElementById('message') as HTMLElement
            message.innerHTML=''
            if (!this.userName) {
                message.innerHTML='user name require'
                return
            }
            if (!this.password) {
                message.innerHTML='password require'
                return
            }
            
            fetch('').then(()=>{})
        }

}