import React from "react";
import { Link } from "react-router-dom";
import "./footer.scss";
import { MdPlace } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";

export default function Footer() {
  const jours = [
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
    "Dimanche",
  ];
  return (
    <>
      <div className="productFooter">
        <div className="ste-info">
          <div className="ste-info-titre">
            <p>Vita Via</p>
          </div>
          <div className="ste-info-desc">
            Vous souhaitez une meilleure gestion de vos approvisionnement en
            viande halal contrôlée, en toute agilité, le tout à des tarifs
            abattoir imbattables ? Nos équipes vous accompagnent et répondent à
            vos questions 7j/7
          </div>
          <div className="ste-info-contact-info">
            <div className="address">
              <MdPlace className="info-icon" />
              <p><br/>3 rue de la corderie<br/>94550 chevilly la rue<br/>Grande marché international rungis</p>
            </div>
            <div className="telephone">
              <FaPhoneAlt className="info-icon" />
              <p>00 33 6 67 61 12 61</p>
            </div>
            <div className="email">
              <MdEmail className="info-icon" />
              <p>direction@opneshopc.fr</p>
            </div>
          </div>
        </div>
        <div className="sitemap">
          <div className="ste-info-titre">
            <p>Sitemap</p>
          </div>
          <div className="sitemap-links">
            <div className="sitemap-link">
              <Link to="/">
                <span>
                  <IoIosArrowForward />
                </span>
                <p>Accueil</p>
              </Link>
            </div>
            <div className="sitemap-link">
              <Link to="/aboutUs">
                <span>
                  <IoIosArrowForward />
                </span>
                <p>À propos de nous</p>
              </Link>
            </div>
            <div className="sitemap-link">
              <Link to="/contactUs">
                <span>
                  <IoIosArrowForward />
                </span>
                <p>Contactez Nous</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="horaires">
          <div className="ste-info-titre">
            <p>Horaires</p>
          </div>
          <div className="horaires-jours">
            {jours.map((item, index) => (
              <div className="horaires-jour" key={index}>
                <span className="horaires-jour-titre">{item}</span>
                <span className="horaires-jour-heurs">
                  {item === "Samedi"
                    ? "09h > 14h"
                    : item === "Dimanche"
                    ? "Fermé"
                    : "09h > 17h"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>© | VitaVia | Tous droits réservés.</p>
        <h5>
          <Link to="/contactus">Contactez Nous</Link>
        </h5>
      </div>
    </>
  );
}
