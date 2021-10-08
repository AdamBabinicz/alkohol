import React, { useState } from "react";
import "./Project.css";
import img1 from "../img/14.jpg";
import img2 from "../img/9.jpg";
import img3 from "../img/10.jpg";
import img4 from "../img/6.jpg";
import img5 from "../img/13.jpg";
import img6 from "../img/11.jpg";
import Popup from "./Popup";

function Project() {
  const [buttonPopup, setButtonPopup] = useState(false);
  const [buttonPopup1, setButtonPopup1] = useState(false);
  const [buttonPopup2, setButtonPopup2] = useState(false);
  const [buttonPopup3, setButtonPopup3] = useState(false);
  const [buttonPopup4, setButtonPopup4] = useState(false);
  const [buttonPopup5, setButtonPopup5] = useState(false);
  const [buttonPopup6, setButtonPopup6] = useState(false);
  const [state] = useState({
    title0: "Fakty o alkoholu",
    // img0: img0,
    p0: "“Ogółem za 5,1 proc. globalnego obciążenia chorobami i urazami można winić alkohol. Najnowsze badania WHO pokazały bezpośredni związek picia alkoholu z zachorowalnością na gruźlicę oraz zarażeniem się wirusem HIV. Udowodniono również, że picie alkoholu w ciąży stwarza realne ryzyko śmierci płodu.“",
    em0: "stopuzaleznieniom.pl/artykuly/fakty-o-alkoholu/alkohol-zabija-co-10-sekund-umieralnosc-w-wyniku-spozycia-alkoholu/",
    title1: "Choroby zależne od picia alkoholu",
    // img1: img1,
    p1: "“Nadużywanie alkoholu powadzi do wielu groźnych zmian w organizmie. Szkodliwe jest zarówno regularne picie, jak i krótkotrwałe upijanie się. W następstwie picia rozwinąć się może szereg chorób, w tym wątroby, przewodu pokarmowego oraz układu krążenia. Część z nich rozwija się latami, w początkowym etapie nie dając objawów. Alkohol szkodliwie wpływa także na psychikę. Jest przyczyną uzależnienia, depresji, jak również psychoz.“",
    em1: "wylecz.to/uzaleznienia/choroby-zalezne-od-picia-alkoholu/",
    title2: "Alkohol zabija co 10 sekund",
    // img0: img0,
    p2: "“Co roku na świecie w wyniku picia alkoholu umiera ponad 3 miliony ludzi. Przez alkohol co 10 sekund człowiek traci życie, co oznacza, że picie alkoholu jest jedną z najczęstszych przyczyn zgonów na świecie. Jednocześnie wiadomo, że to Europejczycy piją najwięcej, a statystyczny Polak żyje krócej niż przeciętny mieszkaniec Unii Europejskiej.“",
    em2: "stopuzaleznieniom.pl/artykuly/fakty-o-alkoholu/alkohol-zabija-co-10-sekund-umieralnosc-w-wyniku-spozycia-alkoholu/",
    title3: "Dlaczego alkoholik jest agresywny?",
    // img1: img1,
    p3: "“Napady agresji wynikają najczęściej z chęci rozładowania nagromadzonej złości, kumulacji nieprzyjemnych odczuć i bezradności. Alkohol wpływa pobudzająco na cały organizm człowieka, blokując reakcje racjonalne. Efektem tego pobudzenia są najczęściej bójki, awantury, akty wandalizmu, stosowanie przemocy psychicznej i fizycznej w stosunku do innych osób. Zachowania impulsywne często wynikają również z trudnych doznań związanych ze stanem zespołu abstynencyjnego. Objawy głodu alkoholowego są na tyle nieprzyjemne, że alkoholik jest w stanie posunąć się do agresji, by otrzymać upragniony kieliszek.“",
    em3: "galmedic.pl/dlaczego-alkoholik-jest-agresywny/",
    title4: "Zmowa milczenia",
    // img1: img1,
    p4: "“Z raportu wynika jasno, że alkoholizm jest chorobą, która niszczy nie tylko życie osoby uzależnionej, ale również jej krewnych. Alkoholik nie jest w stanie lub nie chce uczestniczyć w życiu rodzinnym. Z kolei jego bliscy z obawy przed pijackimi ekscesami w miejscach publicznych lub w gronie znajomych unikają wszelkich kontaktów towarzyskich, wspólnych spotkań, wyjazdów etc. Zachowanie alkoholika jest bowiem nieprzewidywalne i z reguły naraża członków rodziny na kłopoty oraz przykrości, a ponadto budzi w nich poczucie wstydu i zażenowania.“",
    em4: "www.psychologia.edu.pl/czytelnia/63-terapia-uzalenienia-i-wspouzalenienia/353-problemy-alkoholowe-w-rodzinie.html",
    title5: "Jak umiera alkoholik?",
    // img1: img1,
    p5: "“Na łóżku leży mężczyzna z kilkudniowym zarostem i cały drży. Jest blady i spocony. Patrzy mi w oczy przerażonym wzrokiem.” Zimno mi, zimno…” powtarza jak mantrę. Przykrywamy go kilkoma warstwami, ale to nic nie daje. Na podłodze pełno krwi, trzeba uważać, żeby nie wdepnąć i nie roznieść po całym pokoju. W obydwu lodowatozimnych dłoniach ma wbite grube wenflony, do których ciągłym strumieniem płynie kroplówka za kroplówką.“",
    em5: "okiemlekarza.wordpress.com/2018/08/25/jak-umiera-alkoholik/",
    title6: "Alkoholik bez alkoholu umiera?",
    // img1: img1,
    p6: "“Zespół abstynencyjny o szczególnie ciężkim przebiegu może przeistoczyć się w majaczenie drżenne (po łacinie delirium tremens), zwane kolokwialnie “białą gorączką“, “delirką“. Jest to bardzo poważny stan, w którym zaburzenia pracy mózgu powodują zaburzenia świadomości (chory nie potrafi podać miejsca ani czasu, nie rozpoznaje osób mu towarzyszących), z bardzo silnym pobudzeniem psychomotorycznym i halucynacjami wzrokowymi i słuchowymi, z reguły o bardzo nieprzyjemnych dla chorego treściach. Osoba taka widzi często jakieś zwierzęta (np. szczury, pająki, robactwo), nieobecne osoby, próbuje sięgnąć po nieistniejące przedmioty, wydaje jej się, że jest w innym miejscu, wykazuje dużą aktywność ruchową, a często przejawia olbrzymi lęk (z próbami ucieczki włącznie).“",
    em6: "rozmowy.polki.pl/zdrowie,alkoholik-bez-alkoholu-umiera,1056319,1,wypowiedzi.html",
  });

  return (
    <div className="project component__space" id="skutki">
      <div className="heading">
        <h2 className="heading__title">Niektóre skutki picia wódki!</h2>
        <p className="heading__text p__color">
          Co wywołuje choroba alkoholowa?
        </p>
        <p className="heading__text p__color"></p>
        <p className="heading__text p__color">
          <em>https://hh24.pl/fazy-alkoholizmu</em>
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={img1} alt="..." className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  5,1% globalnego obciążenia chorobami
                </h4>
                <h5 className="project__text__p">👎</h5>
                <button
                  className="project__btn"
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
                  <img src={img2} alt="..." className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Ponad 200 chorób</h4>
                <h5 className="project__text__p">👨‍⚕️</h5>
                <button
                  className="project__btn"
                  onClick={() => setButtonPopup1(true)}
                >
                  Zobacz
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
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={img3} alt="..." className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">3 mln zgonów rocznie</h4>
                <h5 className="project__text__p">☠</h5>
                <button
                  className="project__btn"
                  onClick={() => setButtonPopup2(true)}
                >
                  Zobacz
                </button>
                <Popup trigger={buttonPopup2} setTrigger={setButtonPopup2}>
                  <h3 style={{ fontSize: "15px" }}>{state.title2}</h3> <br />
                  {/* <img src={state.img1} alt="..." /> */}
                  <span>{state.p2}</span>
                  <br />
                  <em>{state.em2}</em>
                </Popup>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={img4} alt="..." className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  Wzrost agresji wobec najbliższego otoczenia
                </h4>
                <h5 className="project__text__p">👿</h5>
                <button
                  className="project__btn"
                  onClick={() => setButtonPopup3(true)}
                >
                  Zobacz
                </button>
                <Popup trigger={buttonPopup3} setTrigger={setButtonPopup3}>
                  <h3 style={{ fontSize: "15px" }}>{state.title3}</h3> <br />
                  {/* <img src={state.img1} alt="..." /> */}
                  <span>{state.p3}</span>
                  <br />
                  <em>{state.em3}</em>
                </Popup>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={img5} alt="..." className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">
                  Zerwanie więzi rodzinnych i&nbsp;przyjacielskich
                </h4>
                <h5 className="project__text__p">‼</h5>
                <button
                  className="project__btn"
                  onClick={() => setButtonPopup4(true)}
                >
                  Zobacz
                </button>
                <Popup trigger={buttonPopup4} setTrigger={setButtonPopup4}>
                  <h3 style={{ fontSize: "15px" }}>{state.title4}</h3> <br />
                  {/* <img src={state.img1} alt="..." /> */}
                  <span>{state.p4}</span>
                  <br />
                  <em>{state.em4}</em>
                </Popup>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="project__box pointer relative">
              <div className="project__box__img pointer relative">
                <div className="project__img__box">
                  <img src={img6} alt="..." className="project__img" />
                </div>
                <div className="mask__effect"></div>
              </div>
              <div className="project__meta absolute">
                <h4 className="project__text">Śmierć alkoholika</h4>
                <h5 className="project__text__p">✝</h5>
                <button
                  className="project__btn"
                  onClick={() => setButtonPopup5(true)}
                >
                  Zobacz
                </button>
                <Popup trigger={buttonPopup5} setTrigger={setButtonPopup5}>
                  <h3 style={{ fontSize: "15px" }}>{state.title5}</h3> <br />
                  {/* <img src={state.img1} alt="..." /> */}
                  <span>{state.p5}</span>
                  <br />
                  <em>{state.em5}</em>
                </Popup>
              </div>
            </div>
          </div>
          <div className="view__more__btn d__flex align__items__center justify__content pxy__30">
            <button
              className="view__more pointer btn"
              onClick={() => setButtonPopup6(true)}
            >
              Więcej
            </button>
            <Popup trigger={buttonPopup6} setTrigger={setButtonPopup6}>
              <h3 style={{ fontSize: "15px" }}>{state.title6}</h3> <br />
              {/* <img src={state.img1} alt="..." /> */}
              <span>{state.p6}</span>
              <br />
              <em>{state.em6}</em>
            </Popup>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
