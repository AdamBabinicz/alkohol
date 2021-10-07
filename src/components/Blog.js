import React, { useState } from "react";
import "./Blog.css";
import img from "../img/6.png";
import img1 from "../img/prdm2.jpg";
import img2 from "../img/mao.jpg";
import Popup from "./Popup";

function Blog() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [state] = useState({
    title0: "Alkohol to depresant",
    // img0: img0,
    p0: "“Substancje psychoaktywne będące depresantami wywołują uwalnianie się neuroprzekaźników, które działają hamująco na układ nerwowy, czyli sygnały między komórkami nerwowymi przekazywane są wolniej. Odczuwane jest to jako odprężenie, relaks, a także przyjemność. W przypadku alkoholu jest to konkretnie wpływanie na receptory GABA. Istotne znaczenie w owym osiąganiu przyjemności jest dodatkowe uwalnianie się dopaminy i serotoniny pod wpływem alkoholu, a także oddziałuje on na receptory opioidowe.“",
    em0: "stopuzaleznieniom.pl/artykuly/fakty-o-alkoholu/alkohol-to-depresant-co-to-znaczy/",
    title1: "Enzym kluczem do walki z chorobą alkoholową",
    // img1: img1,
    p1: "“PRDM2 reguluje ekspresję kilku genów potrzebnych do zachowania efektywnej sygnalizacji pomiędzy neuronami. Gdy enzymu jest zbyt mało, w rejonie komórek odpowiedzialnych za hamowanie impulsów sygnały przestają być przekazywane” – tłumaczy koordynator badania (DOI: 10.1038/MP.2016.131) prof. Markus Heilig. Zdaniem naukowców deficyt enzymu PRDM2 ponosi winę za niemożność powstrzymania się od spełniania chwilowych zachcianek i przewidywania długoterminowych konsekwencji swoich działań. Osoby z niedoborem PRDM2 są impulsywne, podatne na natychmiastową gratyfikację i wrażliwe na wpływ negatywnych czynników (np. stresu). To sprawia, że raz po raz znów wpadają w sidła nałogu.“",
    em1: "www.national-geographic.pl/artykul/juz-wiemy-jak-to-sie-dzieje-enzym-kluczem-do-walki-z-choroba-alkoholowa",
    title2: "Inhibitory MAO - leki, które mówią 'STOP' depresji",
    // img0: img0,
    p2: "“Inhibitory MAO blokują rozpad neuroprzekaźników w mózgu. Podnoszą w ten sposób stężenie dopaminy, serotoniny i noradrenaliny. Dzięki temu pozytywnie wpływają na aktywność psychomotoryczną, koncentrację, nastrój oraz jakość snu. Są to jednak niestety leki które należy stosować ostrożnie, zawsze zgodnie z zaleceniami lekarza, ze względu na dużą liczbę interakcji oraz działań niepożądanych.“",
    em2: "www.poradnikzdrowie.pl/zdrowie/apteczka/inhibitory-mao-leki-ktore-mowia-stop-depresji-aa-CM1d-a9JU-ZkeS.html",
  });

  return (
    <div className="blog component__space" id="nauka">
      <div className="heading">
        <h2 className="heading__title">Nadzieja w nauce</h2>
        <p className="heading__text p__color">
          Farmakologiczne obniżanie poziomu neuroprzekaźnika GABA może okazać
          się lekiem na alkoholizm
        </p>
        {/* <p className="heading__text p__color"></p> */}
        <p className="heading__text p__color">
          <em>https://www.focus.pl/artykul/pigulka-na-alkoholizm</em>
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={img} alt="..." className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="blog__meta absolute">
                <h4 className="project__text">Neuroprzekaźnik GABA</h4>
                <h5 className="project__text__p">
                  <a
                    href="https://zdrowie.gazeta.pl/Zdrowie/7,101580,25034222,gaba-neuroprzekaznik-z-ktorym-medycyna-wiaze-duze-nadzieje.html"
                    target="_blank"
                  >
                    zdrowie.gazeta.pl
                  </a>
                </h5>
                <button
                  className="blog project__btn btn"
                  onClick={() => setButtonPopup(true)}
                >
                  Zobacz
                </button>
                <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                  <h3 style={{ fontSize: "15px" }}>{state.title0}</h3> <br />
                  {/* <img src={state.img0} alt="..." /> */}
                  <span>{state.p0}</span>
                  <br />
                  <em>{state.em0}</em>
                </Popup>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={img1} alt="..." className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="blog__meta absolute">
                <h4 className="project__text">Enzym PRDM2</h4>
                <h5 className="project__text__p">
                  <a
                    href="https://www.national-geographic.pl/artykul/juz-wiemy-jak-to-sie-dzieje-enzym-kluczem-do-walki-z-choroba-alkoholowa"
                    target="_blank"
                  >
                    national-geographic.pl
                  </a>
                </h5>
                <button
                  className="blog project__btn btn"
                  onClick={() => setButtonPopup1(true)}
                >
                  Zobacz
                </button>
                <Popup trigger={buttonPopup1} setTrigger={setButtonPopup1}>
                  <h3 style={{ fontSize: "15px" }}>{state.title1}</h3> <br />
                  {/* <img src={state.img0} alt="..." /> */}
                  <span>{state.p1}</span>
                  <br />
                  <em>{state.em1}</em>
                </Popup>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={img2} alt="..." className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="blog__meta absolute">
                <h4 className="project__text">Enzym MAO-A</h4>
                <h5 className="project__text__p">
                  <a
                    href="https://pieknoumyslu.com/neurobiologia-alkoholizmu-czy-wiesz-jak-alkohol-wplywa-na-mozg/"
                    target="_blank"
                  >
                    pieknoumyslu.com
                  </a>
                </h5>
                <button
                  className="blog project__btn btn"
                  onClick={() => setButtonPopup2(true)}
                >
                  Zobacz
                </button>
                <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                  <h3 style={{ fontSize: "15px" }}>{state.title2}</h3> <br />
                  {/* <img src={state.img0} alt="..." /> */}
                  <span>{state.p2}</span>
                  <br />
                  <em>{state.em2}</em>
                </Popup>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
