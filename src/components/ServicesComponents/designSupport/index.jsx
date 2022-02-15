import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.scss";
// import Carousel from "react-bootstrap/Carousel";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import AnimationPage from "../animationPage";
import ContactForm from "../contact";
function DesingSupport() {
  return (
    <div>
      <div className="BrandingSupport_container">
        <div className="cover"></div>
        <div className="BrandingSupport_bagroundimg">
          <img
            src="https://xspace.uz/wp-content/uploads/2020/06/179.png"
            alt=""
          />
        </div>
        <div className="BrandingText">
          <h1>Branding</h1>
          <p>Позвоните нам и мы ответим на все ваши вопросы</p>
          <button>
            <a href="tel:%20+998973457707">Позвонить</a>
          </button>
        </div>
      </div>
      <Container>
        <Row>
          <Col md={5}>
            <div className="Border_line">
              <p>EXTRA SERVICES</p>
              <hr />
              <h1>
                Extra-услуги. <br /> Используем лучшие каналы продвижения,
                исходя из сферы деятельности компании, такие как
                SEO-оптимизация, Google ads, контекстная реклама + ретаргетинг,
                Youtube-реклама и многое другое.
              </h1>
            </div>
          </Col>
          <Col md={1}></Col>
          <Col className="d_flex" md={3}>
            <div>
              <h6>SEO</h6>

              <hr />
              <h2>SEO-оптимизация</h2>
              <p className="d_flex_p">
                SEO-оптимизация – поисковое продвижение, направленное на
                развитие вашего web-сайта, с целью улучшения позиций по целевым
                запросам в поисковиках (Google, Яндекс, Mail.ru и др.)
              </p>
            </div>
            <br /> <br />
            <div>
              <h6>YOUTUBE</h6>
              <hr />

              <h2>Реклама в YouTube</h2>
              <p className="d_flex_p">
                Оптимальный вариант для размещения рекламного видеоролика,
                который будет показан всем пользователям YouTube, подходящим под
                необходимую аудиторию.
              </p>
            </div>
          </Col>
          <Col md={3}>
            <div>
              <h6>TARGETED ADVERTISING</h6>
              <hr />
              <h2>Контекстная рекламa</h2>
              <p className="d_flex_p">
                Контекстная реклама – максимальное попадание в целевого
                потребителя на основе формирования уникального рекламного
                предложения, исходя из интересов и актуальных запросов
                пользователей интернет-ресурсов.
              </p>
            </div>
            <br /> <br />
            <div>
              <h6>MEDIA</h6>
              <hr />
              <h2>Online медиа-реклама</h2>
              <p className="d_flex_p">
                Этот способ продвижения бренда на рынке позволяет размещать
                баннерную рекламу на всех доступных интернет-платформах, будь то
                сайт, либо мобильное приложение с нужной ЦА.
              </p>
            </div>
          </Col>
        </Row>
       

      </Container>
      <Carousel className="padding_carousel">
        <img
          style={{ width: "700px" }}
          src="https://xspace.uz/wp-content/uploads/2020/06/000000000-min-1536x1049.png"
        />
        <img style={{ width: "700px" }} src="https://xspace.uz/wp-content/uploads/2020/06/0000000-min-1536x1049.png" />
        <img style={{ width: "700px" }} src="https://xspace.uz/wp-content/uploads/2020/06/00000000-min-1536x1049.png" />
        <img style={{ width: "700px" }} src="https://xspace.uz/wp-content/uploads/2020/06/00000000-min-1536x1049.png" />
        <img style={{ width: "700px" }} src="https://xspace.uz/wp-content/uploads/2020/06/00000000-min-1536x1049.png" />
      </Carousel>
      <AnimationPage/>
      <ContactForm/>
    </div>
  );
}

export default DesingSupport;
