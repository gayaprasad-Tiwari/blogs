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
        return html`
        <style>
        h2{
            border-bottom:1px solid #000000;
            padding-bottom: 10px;
        }
        .form-container{
            padding: 10px 0;
            }
         .form-container>div{
                display: flex;
                margin: 10px;
         }
         .form-container>div label{
                  width: 20%;
                  line-height: 38px;
                }

         .form-container>div .input{
                  width: 70%;
                  padding: 10px;
                }
                
              
              .form-button-outer{
                border-top: 1px solid;
                margin: 25px 10px;
                padding: 25px 0;
               
              }
              .button{
                background:#0cfdba ;
                width: auto;
                padding: 10px 40px;
                font-size: 18px;
                text-transform: uppercase;
                border: 0 none;
                color: #000000;
              }
              #message{
                  color:red;
              }
          
        </style>
        <div>
        <h2>Log in Form</h2>
    <form>
        <div class="form-container">
            <div>
                <label> Email *</label>
                <input type='email' class="input" name="email" .value="${this.email}"
                @change="${this.onEmail}" >
            </div>
            <div>
                <label> Password *</label>
                <input type='password'  class="input"  name="password" .value="${this.password}"
                @change="${this.onPassword}" >
            </div>
            <div id="message">
            </div>
            <div class="form-button-outer">
            <button type='button' class="button"  @keyup.enter="${this.submitForm}" @click="${this.submitForm}" >Login</button>
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

        const myEvent = new CustomEvent('my-event', {
            detail: payload,
            bubbles: true,
            composed: true
        });
        this.dispatchEvent(myEvent);
    }

}
