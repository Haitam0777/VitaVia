import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";

import "./aboutUs.scss";
import { get_file_action } from "../../state/actions/FilesAction";

export default function AboutUs() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [index, setIndex] = useState(-6);
  const [showImg, setShowImg] = useState(false);
  const [imgToShow, setImgToShow] = useState("");
  const files = useSelector((state) => state.files);
  const dispatch = useDispatch();

  window.addEventListener("scroll", () => {
    setIsScrolled(window.scrollY === 0 ? false : true);
    reveal();
  });

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(get_file_action("products", "about-us"));
  }, [dispatch]);
  function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  const handleShowImg = (link) => {
    if (link) {
      setShowImg(true);
      setImgToShow(link);
      document.getElementsByTagName("body")[0].style.overflow = "hidden";
    } else {
      setShowImg(false);
      document.getElementsByTagName("body")[0].style.overflow = "auto";
    }
  };
  const handleImages = () => {
    if (index > 46) {
      setIndex(-6);
    } else {
      setIndex(index + 1);
    }
  };
  const handleImageReverse = () => {
    if (index < -6) {
      setIndex(46);
    } else {
      setIndex(index - 1);
    }
  };
  return (
    <>
      <div className="aboutus">
        {showImg && (
          <div className="showImg">
            <div
              className="backgroundShowImg"
              onClick={() => handleShowImg()}
            ></div>
            <div className="img">
              <img src={imgToShow} alt="" />
              <span onClick={() => handleShowImg()}>
                <AiOutlineClose />
              </span>
            </div>
          </div>
        )}
        <>
          <div className="aboutUsImg">
            <img src={files.files?.at(0)?.image} alt="" />
          </div>
          <div className="textForImg">
            <p onClick={handleImages}>Vita Via</p>
            <div
              className={`arrowDown ${isScrolled && "scrolled"}`}
              onClick={handleImageReverse}
            >
              <FaChevronDown />
            </div>
          </div>
          <div className="products reveal">
            <div className="productsText">
              <h4>
                Expert confirmé dans l'approvisionnement de viande halal
                certifiée en gros.
              </h4>
              <p>
                Vita Open Shop, a l'ambition de servir au mieux chacun de ses
                clients selon ses demandes en toute flexibilité. Que vous soyez
                bouchers, commerçants, restaurateurs ou autre revendeurs, à
                travers la France et à l'international, nous assurons pour vous
                une viande halal de qualité et un large choix de produits carnés
                en frais, avec la garantie d'un tarif abattoir. Nous proposons
                également du matériel professionnel spécialisé afin de vous
                apporter un équipement complet répondant à vos besoins.
              </p>
            </div>
            <div className="productImgs">
              {files.files &&
                files.files
                  ?.filter((item) => !item?.name.includes("art"))
                  .map((item) => (
                    <img
                      src={item?.image}
                      alt=""
                      onClick={() => handleShowImg(item?.image)}
                    />
                  ))}
            </div>
            <div className="productHistory reveal">
              <h2>Notre Mission</h2>
              <div>
                <p>
                  <b>
                    {" "}
                    Gérer toute la chaîne de production, de la qualité et du
                    bien-être animal à l'abattage des bêtes, en passant par le
                    conditionnement, jusqu'à la livraison dans vos points de
                    vente, tout en garantissant le caractère halal strict et la
                    sécurité alimentaire et sanitaire maximale.
                  </b>
                </p>
              </div>
              <h1>Nos partenaires en toute transparence </h1>
              <div>
                <p>
                  Chez Vita open shop, nous avons fait le choix de travailler
                  avec des abattoirs partenaires en France et en Espagne
                  répondant à ces critères : l'abattoir Tendriade à Chateaubourg
                  et Moha Carnes en Espagne
                </p>
                <p>
                  Le halal contrôlé, au cœur de nos valeurs : Chaque production
                  est strictement supervisée par un organisme indépendant de
                  certification halal répondant au cahier des charges suivant.
                </p>
              </div>
              <div>
                <p>
                  Présence sur site de l'arrivée des animaux jusque scellage des
                  produits finaux
                </p>
                <p>
                  Vérification du respect total des règles d’hygiène et
                  sanitaire.
                </p>
                <p>Un abattage manuel par un musulman pratiquant.</p>
                <p>
                  Abattage rituel sans étourdissement (sans électronarcose, sans
                  assommage, sans gazage).
                </p>
              </div>
            </div>
          </div>
        </>
        <Footer />
      </div>
    </>
  );
}
