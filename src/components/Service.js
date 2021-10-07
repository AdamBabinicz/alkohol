import React from "react";
import "./Service.css";
import { HiCode } from "react-icons/hi";

function Service() {
  return (
    <div className="service component__space" id="etapy">
      <div className="heading">
        <h2 className="heading__title">Fazy alkoholizmu w/g Jellinka</h2>
        <p className="heading__text p__color">
          Jak rozwija się choroba alkoholowa?
        </p>
        <p className="heading__text p__color">Objawy ostrzegawcze</p>
        <p className="heading__text p__color">
          <em>https://hh24.pl/fazy-alkoholizmu</em>
        </p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <HiCode />
              </div>
              <div className="service__meta">
                <h2 className="service__text">Faza wstępna</h2>
                <p className="service__text p__color">
                  To stadium choroby alkoholowej zaczyna się niewinnie i trudno
                  odróżnić je od picia przyjętej przez społeczeństwo normy. Z
                  czasem zauważasz, że picie przy różnych okazjach, np.
                  towarzyskich, relaksuje Cię, poprawia samopoczucie i dodaje
                  pewności siebie. Ten etap może trwać nawet kilka lat. Rośnie
                  fascynacja alkoholem, sięgasz po niego coraz częściej i w
                  większych ilościach, bo Twoja tolerancja wzrasta i
                  potrzebujesz większej dawki, aby uzyskać te same efekty, co
                  wcześniej.
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <HiCode />
              </div>
              <div className="service__meta">
                <h2 className="service__text">Faza ostrzegawcza</h2>
                <p className="service__text p__color">
                  Zaczynasz szukać okazji, aby sięgnąć po alkohol. Częściej
                  spotykasz się z ludźmi, aby mieć pretekst do picia. Zaczynasz
                  też pić samotnie, a nawet w ukryciu. Wypierasz, że możesz mieć
                  problem z nadużyciem alkoholu. Częstsze spożywanie alkoholu
                  może prowadzić do luk w pamięci.
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <HiCode />
              </div>
              <div className="service__meta">
                <h2 className="service__text">Faza krytyczna</h2>
                <p className="service__text p__color">
                  Tracisz kontrolę nad piciem, zaniedbujesz obowiązki i relacje.
                  Porzucasz dotychczasowe zainteresowania, pasje i hobby.
                  Problem alkoholowy jest już bardzo widoczny, odczuwa je Twoje
                  otoczenie. Coraz częściej zaczynasz dzień od wypicia “klina”,
                  żeby złagodzić kaca z dnia poprzedniego. Masz poczucie winy
                  związane z zaniedbywaniem bliskich i swoich obowiązków, a
                  także próbami obarczania winą innych. Mogą wystąpić myśli
                  samobójcze.
                </p>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <HiCode />
              </div>
              <div className="service__meta">
                <h2 className="service__text">Faza przewlekła</h2>
                <p className="service__text p__color">
                  Tutaj ciągi alkoholowe trwają nawet kilkanaście dni, a przerwa
                  w piciu powoduje silne skutki uboczne, jak wymioty, drgawki,
                  podwyższone ciśnienie. To objawy tzw. zespołu abstynencyjnego.
                  Problemy psychiczne pogłębiają się – występują epizody
                  depresyjne, stany lękowe, a także problemy z pamięcią i
                  koncentracją. Może wystąpić delirium, czyli psychozy
                  alkoholowe. Może dojść do utraty pracy i konfliktów z
                  bliskimi, a nawet rozpadu relacji. Skupienie na alkoholu jest
                  ciągłe i intensywne, staje się on naszym celem życiowym.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
