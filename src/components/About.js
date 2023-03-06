import React, { useState } from "react";
import "./About.css";
import img from "../img/4.png";
import { AiFillCaretUp } from "react-icons/ai";
import Popup from "./Popup";

function About() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [state] = useState({
    title0: "Miałeś chamie złoty róg",
    // img0: img0,
    p0: "“— Przestałeś pić po terapii? — Na chwilę. Potem wróciłem do nałogu. Myślałem, że mogę przestać pić, że poradzę sobie z tym, ale myliłem się. Zacząłem pić jeszcze bardziej. Dochodziło do sytuacji, że potrafiłem zbierać złom, żeby mieć na nalewkę. To był już totalny upadek. Wtedy dowiedziałem się, że nie ma jednego dna, ale nieskończenie wiele, a każde straszniejsze od poprzedniego. Za kroplę alkoholu byłem gotów sprzedać diabłu życie. Pojechałem do Warszawy, tam byłem już nie tylko alkoholikiem ale i bezdomnym. Oszukałem wszystkich: rodzinę, przyjaciół i znajomych tylko po to, żeby mieć na alkohol.“",
    em0: "gazetaolsztynska.pl/braniewo/585335,Wyznania-alkoholika-Nie-ma-jednego-dna-jest-pieklo.html",
    title1: "Nie ma jednego dna, jest piekło",
    // img1: img1,
    p1: "“Człowiek uzależnia się bardzo szybko, szczególnie jeśli zacznie się pić w młodym wieku. Przekracza się bramy, za którymi jest piekło. Alkohol tak naprawdę nic nie daje. To jest ułuda, wrażenie lekkości, otwarcia, ale potem zabiera ci wszystko. Im więcej czujesz korzyści po alkoholu, tym więcej ci zabierze.“",
    em1: "gazetaolsztynska.pl/braniewo/585335,Wyznania-alkoholika-Nie-ma-jednego-dna-jest-pieklo.html",
  });
  // UP TO TOP BTN
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });

  return (
    <div className="about component__space" id="ja">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={img} alt="..." className="about__img" />
          </div>
          <div className="col__2">
            <h2 className="about__heading">Alkoholizm to mój zawód</h2>
            <div className="about__meta">
              <p className="about__text p__color">
                "Nie ma dla mnie pór roku, zjawisk atmosferycznych, upałów czy
                mrozów, miesięcy, dni tygodnia, pór dnia - czy nocy, nie ma
                miejsca i&nbsp;domu ze ścianami i&nbsp;sufitem, nie ma
                świętości, świąt, autorytetów, ani zasad, nie ma instytucji
                i&nbsp;urzędów, nie ma rodziny i&nbsp;przyjaciół, nie ma snu
                i&nbsp;odpoczynku, nie ma pandemii.
              </p>
              <p className="about__text p__color">
                Najbliżsi odchodzą niepostrzeżenie, w&nbsp;czasie moich ciągów
                alkoholowych. Nie jestem z&nbsp;nimi w&nbsp;chwili śmierci, ani
                na ich pogrzebach. Nie pracuję, ale zawsze mam “małpkę“ przy
                sobie lub puszkę piwa. Nie mam żony ani dzieci, nie łożę na
                swoje utrzymanie, nie płacę rachunków, mandatów, ani podatków,
                nie obawiam się o&nbsp;swoją przyszłość.
              </p>
              <p className="about__text p__color">
                Nie mam telefonu, telewizora, komputera, konta bankowego, nie
                odbieram korespondencji, nikt nie może się ze mną skontaktować.
                Nie obchodzi mnie polityka, ani żadne wydarzenia na świecie. Nie
                jestem zarejestrowany w urzędzie pracy i&nbsp;nie jestem
                ubezpieczony.
              </p>
              <p className="about__text p__color">
                Załatwiam się w&nbsp;łóżko, jestem w&nbsp;IV (ostatniej) fazie
                chronicznej choroby alkoholowej. Z&nbsp;czasem stałem się
                ekspertem od&nbsp;alkoholizmu."
              </p>
              <div className="about__button d__flex align__items__center">
                <button
                  className="about btn pointer"
                  onClick={() => setButtonPopup(true)}
                >
                  Czytaj
                </button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <h3 style={{ fontSize: "15px" }}>{state.title0}</h3> <br />
                  {/* <img src={state.img0} alt="..." /> */}
                  <span>{state.p0}</span>
                  <br />
                  <em>{state.em0}</em>
                </Popup>
                <button
                  className="about btn pointer"
                  onClick={() => setButtonPopup1(true)}
                >
                  Więcej
                </button>
                <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                  <h3 style={{ fontSize: "15px" }}>{state.title1}</h3> <br />
                  {/* <img src={state.img1} alt="..." /> */}
                  <span>{state.p1}</span>
                  <br />
                  <em>{state.em1}</em>
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <AiFillCaretUp />
        </a>
      </div>
    </div>
  );
}

export default About;
