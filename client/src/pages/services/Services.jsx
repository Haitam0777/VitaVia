import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./services.scss";
import { AiOutlineCheckSquare } from "react-icons/ai";
import Footer from "../../components/footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { get_file_action } from "../../state/actions/FilesAction";
import { get_services_action } from "../../state/actions/ServicesAction";
export default function Services() {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  const services = useSelector((state) => state.get_services);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(get_services_action());
  }, [dispatch]);

  return (
    <div className="services">
      <div className="backgroundImg">
        <div className="backgroundShadow"></div>
        <img src={"/images/products/1718860979149.jpeg"} alt="" />
        <div className="banner">
          <h1>Catégories</h1>
        </div>
      </div>
      <div className="content">
        <div className="Servicestext">
          <h1>CATEGORIES</h1>
          <h4>DES PRODUITS BIEN MENÉS, DES CLIENTS SATISFAITS !</h4>
        </div>

        <div className="types">
          {services?.data?.map((item) => (
            <div className="type" key={item.id}>
              <div className="typeImg">
                <img src={item?.image} alt="" />
              </div>
              <div className="legende">
                <div className="title">
                  <AiOutlineCheckSquare className="checkIcon" />
                  <h1>{item.name}</h1>
                </div>
                <div className="description">
                  <p>{item.description}</p>
                </div>
                <div className="learnMore">
                  <Link
                    to={"/service/" + item.id}
                    state={{ type: "enseigne", id: item.id }}
                  >
                    Afficher
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
