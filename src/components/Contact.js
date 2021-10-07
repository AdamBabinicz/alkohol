import React from "react";
import "./Contact.css";
import img from "../img/5.png";

function Contact() {
  return (
    <div className="contact component__space" id="kontakt">
      <div className="row">
        <div className="col__2">
          <div className="contact__box">
            <div className="contact__meta">
              <h2 className="hire__text">Napisz</h2>
              <p className="hire_text white">Twoja historia</p>
              <p className="hire_text white">
                <strong>☎</strong> albo email <strong>email@example.com</strong>
              </p>
            </div>
            <div className="input__box">
              <form
                // onSubmit={onSubmit}
                name="contact2"
                method="POST"
                data-netlify="true"
                action="/dziekujemy-za-wiadomosc"
              >
                <input type="hidden" name="form-name" value="contact2" />
                <input
                  type="text"
                  className="contact name"
                  placeholder="Twoje imię"
                />
                <input
                  type="email"
                  className="contact email"
                  placeholder="Twój email"
                />
                <input
                  type="text"
                  className="contact subject"
                  placeholder="Temat"
                />
                <textarea
                  name="message"
                  id="message"
                  placeholder="Wiadomość"
                ></textarea>
                <button
                  className="btn contact pointer"
                  type="submit"
                  value="Wyślij"
                >
                  Wyślij
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col__2">
          <img src={img} alt="..." className="contact__img" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
