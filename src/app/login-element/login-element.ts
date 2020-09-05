import { LitElement, html, customElement } from 'lit-element';


@customElement('login-element')
export class LoginElement extends LitElement {
    userDetails: any = {}
    constructor() {
        super();
    }
    password = '';
    onPassword({ target: { value } }) { this.password = value }

    email = '';
    onEmail({ target: { value } }) { this.email = value }

    render() {
        return html`<div>
    <form>
        <div>
            <div>  
                <label> User Name</label>
                <input type='email' name="email" .value="${this.email}"
                @change="${this.onEmail}" >
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
        var message = this.shadowRoot.getElementById('message') as HTMLElement
        message.innerHTML = ''
        if (!this.email) {
            message.innerHTML = 'user name require'
            return
        }
        if (!this.password) {
            message.innerHTML = 'password require'
            return
        }
        const payload = {
            email: this.email,
            password: this.password
        };
        //   redirectTo:'http://localhost:3000'
        // fetch(this.conf.url, {
        //     'method':'POST',
        //     body: JSON.stringify(payload)
        // }).then((data)=>{
           
        //     message.innerHTML = 'logged in successfully'
        //    // location.href = this.conf.redirectTo
        // },(data)=>{
        //     message.innerHTML = data
        // }
        // )

        let myEvent = new CustomEvent('my-event', { 
            detail:payload,
            bubbles: true, 
            composed: true });
          this.dispatchEvent(myEvent);
    }

}