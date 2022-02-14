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
      <div className="pText">   <p>Имя (обязательно)</p> 
          <p>Телефон (обязательно)</p>
          <p>Компания (обязательно)</p></div>
      <form>
       
          <input type="text" placeholder="Ваше имя" />
        
          <input type="number" placeholder="Ваш телефонный номер" />
          
          <input type="text" placeholder="Ваша компания"  />
          

      </form>
      <button>Отправить</button>
    </div>
  );
}

export default ContactForm;
