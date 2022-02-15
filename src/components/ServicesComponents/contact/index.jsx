import React from "react";
import "./style.scss"
function ContactForm() {
  return (
    <div className="container">
      <div className="contact_text">
        <span>СОТРУДНИЧЕСТВО</span>
      </div>
      <div className="Textcontact">
        <h1>Есть проект? Давайте обсудим.</h1>
        <button>
          <a href="tel:%20+998973457707">Позвонить</a>
        </button>
        <p>
          Наша команда всегда готова к новым приключениям, оставляйте заявку и
          мы скоро свяжемся.
        </p>
      </div>
      <hr />
      <div className="container">
        <div className="row">
          <div className="col-4">
            <p>Имя (обязательно)</p>
            <input type="text" placeholder="Ваше имя" />
          </div>
          <div className="col-4">
            <p>tel (обязательно)</p>
            <input type="text" placeholder="Ваше имя" />
          </div>
          <div className="col-4">
            <p>company (обязательно)</p>
            <input type="text" placeholder="Ваше имя" />
          </div>
          <div className="col-4">
          <button className="submit_button">Отправить</button>
          </div>
        </div>

        
      </div>
     
      
    </div>
  );
}

export default ContactForm;
