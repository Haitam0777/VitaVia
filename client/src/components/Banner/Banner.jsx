import React, { useEffect, useRef } from "react";
import "./banner.scss";
import { AiOutlineQuestion, AiOutlineWhatsApp } from "react-icons/ai";
import { IoConstructSharp } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaPlus } from "react-icons/fa";
import SwiperCore, {
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  Controller,
  Thumbs,
} from "swiper";
import "swiper/swiper-bundle.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RiServiceFill } from "react-icons/ri";
import {
  BsClock,
  BsHandIndex,
  BsHandIndexFill,
  BsPencil,
  BsTelephone,
} from "react-icons/bs";
import { MdDone, MdFastfood, MdMoney, MdOutlineEmail } from "react-icons/md";
import { Map } from "../Map/Map";
import { GiRotaryPhone } from "react-icons/gi";
import { MdOutlinePhonelinkRing } from "react-icons/md";
import { get_file_action } from "../../state/actions/FilesAction";
import { get_services_action } from "../../state/actions/ServicesAction";
import halalImage from "../../images/halal.png";
import priceImage from "../../images/cash.png";
import deliveryImage from "../../images/truck.png";
import advisorImage from "../../images/salute.png";
import timeSavingImage from "../../images/chrono.png";
import CategorieSlide from "../../components/CategorieSlide/CategorieSlide";

SwiperCore.use([
  Autoplay,
  Navigation,
  Pagination,
  EffectFade,
  Controller,
  Thumbs,
]);

export default function Banner() {
  const linkRef = useRef();
  const files = useSelector((stt) => stt.files);
  const services = useSelector((stt) => stt.get_services);
  const dispatch = useDispatch();

  const inViewport = (entries, observer) => {
    entries.forEach((entry) => {
      entry.target.classList.toggle("is-inViewport", entry.isIntersecting);
    });
  };

  useEffect(() => {
    const Obs = new IntersectionObserver(inViewport);
    const obsOptions = {};
    const ELs_inViewport = document.querySelectorAll("[data-inviewport]");
    ELs_inViewport.forEach((EL) => {
      Obs.observe(EL, obsOptions);
    });
    dispatch(get_file_action("products", "home"));

    dispatch(get_services_action());
  }, [dispatch]);

  return (
    <div className="banner">
      <div className="firstImage">
        <div className="slogan">
          <div className="title">VOUS ÊTES UN PROFESSIONNEL ?</div>
          <div className="info">
            <p className="definition"></p>
            <span>
              Vous recherchez un fournisseur de viande halal contrôlée de
              qualité à prix abattoir ? Ou du matériel professionnel ? <br />
              N'attendez plus!
            </span>
            <div style={{ display: "flex", gap: "100px" }}>
              <Link to="/contactUs">
                <button
                  className="btn btn-danger"
                  style={{ padding: "15px 30px", fontSize: "18px" }}
                >
                  Je veux etre rappelé
                </button>
              </Link>
              <Link to="/Services">
                <button
                  className="btn btn-success"
                  style={{ padding: "15px 30px", fontSize: "18px" }}
                >
                  Voir les produits
                </button>
              </Link>
            </div>
          </div>
          <p></p>
        </div>
      </div>
      <div className="banner-content">
        <div className="nos-services">
          <div className="title" data-inviewport="show-title">
            <h1>Nos produits</h1>
          </div>
          <div className="nos-services-content" data-inviewport="show-service">
            <CategorieSlide />
          </div>
        </div>
        <div className="nos-avantages">
          <div className="avantage qualite" data-inviewport="show-advantages">
            <img src={halalImage} alt="Halal contrôlé" />
            <h1>
              Halal contrôlé: abattage manuel, sans aucune forme d'assommage ni
              électronarcose.
            </h1>
          </div>
          <div className="avantage qualite" data-inviewport="show-advantages">
            <img src={priceImage} alt="Garantie prix direct abattoir" />
            <h1>Garantie prix direct abattoir</h1>
          </div>
          <div
            className="avantage disponibilite"
            data-inviewport="show-advantages"
          >
            <img src={deliveryImage} alt="Livraison en 48h" />
            <h1>
              Livraison en 48h partout en France et livraison internationale
            </h1>
          </div>
          <div
            className="avantage disponibilite"
            data-inviewport="show-advantages"
          >
            <img src={advisorImage} alt="Conseiller commercial" />
            <h1>Un conseiller commercial dédié 7j/7</h1>
          </div>
          <div
            className="avantage creativite"
            data-inviewport="show-advantages"
          >
            <img src={timeSavingImage} alt="Gagnez du temps" />
            <h1>Gagnez du temps sur le sourcing de vos produits boucherie</h1>
          </div>
        </div>

        <div className="qui-sommes-nous">
          <div className="title">
            <h1>
              <br />
              A propos de Vita Via
              <br />
              <br />
            </h1>
          </div>
          <div className="desc">
            <p>
              Spécialiste depuis près de 10 ans dans le marché de la viande
              halal pour les professionnels, Habib Meliani lance en 2022 VITA
              Open Shop. Son objectif est de mettre au service de ses clients
              toute son expertise dans l'approvisionnement de produits carnés
              halal et non alimentaire pour les professionnels
            </p>
            <p>
              Riche d'une expérience terrain variée auprès d'acteurs
              agroalimentaires, il maîtrise les rouages et les enjeux du
              secteur. Véritable passionné, il accompagne les entreprises des
              métiers de bouche pour répondre à leurs besoins.
            </p>
          </div>
        </div>
        <div className="nous-contacter">
          <div className="title">
            <h1>
              <br />
              Contactez Nous
              <br />
            </h1>
          </div>
          <div className="info">
            <div className="info-title">
              <h1>Vita Via</h1>
            </div>
            <div className="info-content">
              <div className="row">
                <h4>Téléphone</h4>
                <br/>
                <h4>
                  +33 6 67 61 12 61
                </h4>
              </div>
              <div className="row">
                <h4>Email</h4>
                <h4>
                  direction@openshopc.fr
                </h4>
              </div>
            </div>
          </div>
          <div className="form">
            <div className="form-content">
              <div className="row">
                <input type="text" placeholder="Nom Complet" />
                <input type="text" placeholder="Nom de Société" />
              </div>
              <div className="row">
                <input type="email" name="" id="" placeholder="Email" />
                <input type="tel" pattern="[0-9]*" placeholder="Téléphone Mobile" />
              </div>
              <div className="row">
                <textarea
                  name=""
                  id=""
                  cols="110"
                  rows="25"
                  placeholder="Votre message "
                ></textarea>
              </div>
              <div className="row">
                <div className="envoyer">
                  <button>Envoyer</button>
                </div>
              </div>
              <h1>
                <br />
                Localisation sur Maps
                <br />
              </h1>
            </div>
            <div className="map">
              <Map />
            </div>
          </div>
        </div>
      </div>
      <div className="text">
        <div className="whatsapp">
          <a
            href="https://wa.me/"
            class="whatsapp_float"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiOutlineWhatsApp />
          </a>
        </div>
      </div>
    </div>
  );
}
