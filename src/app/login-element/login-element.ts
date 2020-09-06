import { LitElement, html, customElement } from 'lit-element';


@customElement('login-element')
export class LoginElement extends LitElement {
    userDetails: any = {};
    password = '';
    email = '';
    constructor() {
        super();
    }
    onPassword({ target: { value } }) { this.password = value; }
    onEmail({ target: { value } }) { this.email = value; }

    render() {
        return html`<div>
        <h2>Log in Form</h2>
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
        const message = this.shadowRoot.getElementById('message') as HTMLElement;
        message.innerHTML = '';
        if (!this.email) {
            message.innerHTML = 'user name require';
            return;
        }
        if (!this.password) {
            message.innerHTML = 'password require';
            return;
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

        const myEvent = new CustomEvent('my-event', {
            detail: payload,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(myEvent);
    }

}
