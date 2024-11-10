import React, { useEffect, useRef, useState } from "react";
import "./service.scss";
import Footer from "../../components/footer/Footer";
import { BsChevronRight } from "react-icons/bs";
import ServiceDescription from "./Single_Service_Description/ServiceDescription";
import { useDispatch, useSelector } from "react-redux";
import { get_file_action } from "../../state/actions/FilesAction";
import { useLocation, useParams } from "react-router-dom";
import {
  get_service_action,
  get_services_action,
} from "../../state/actions/ServicesAction";
import { get_products_action } from "../../state/actions/ProductAction";
export default function Service() {
  const [showDesc, setShowDesc] = useState(false);
  const [product, setProduct] = useState(null);
  const selectRef = useRef([]);
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  const service = useSelector((state) => state.get_service);
  const services = useSelector((state) => state.get_services);
  const products = useSelector((state) => state.get_products);

  const location = useLocation();
  const { id } = useParams();
  console.log(id);
  console.log(files);
  useEffect(() => {
    dispatch(get_service_action(id));
    dispatch(get_products_action(id));
    dispatch(get_services_action());
    console.log(selectRef.current);
  }, [dispatch, location]);

  const handleTypeChange = (name) => {
    window.scrollTo(0, 0);
    selectRef.current.map((item) => {
      if (item.name === name) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
      return item;
    });

    location.state.type = name;
    selectRef.current.length > 0 &&
      selectRef.current.map((item) => {
        console.log(name, item?.innerText);
        if (item.innerText.toLowerCase().replace("é", "e").includes(name)) {
          item.classList.add("selected");
        }
        return item;
      });

    dispatch(get_file_action("services", "service-" + name));
    console.log(selectRef.current);
  };
  const handleTri = () => {};
  return (
    <div className={`single-service ${showDesc ? "serv-desc" : ""}`}>
      <div className="single-service-content">
        {!showDesc && (
          <div className="single-service-banner">
            <img src={service?.data?.image} alt="" />
            <h1>
              Categorie{" "}
              {service?.data?.name?.toString()[0].toUpperCase() +
                service?.data?.name?.slice(1)}
            </h1>
          </div>
        )}
        {showDesc ? (
          <ServiceDescription
            product={product}
            element={
              <h1>
                Catégorie :{" "}
                <span className="categ" onClick={() => setShowDesc(false)}>
                  {service?.data?.name}
                </span>
              </h1>
            }
          />
        ) : (
          <div className="content">
            <div className="products">
              <h1>Related</h1>
              {/* {services?.data?.map((item) => (
                <div
                  className="product-element"
                  name={item.name}
                  key={item.id}
                  ref={(ref) => ref !== null && selectRef.current.push(ref)}
                  onClick={(e) =>
                    window.location.replace("/service/" + item.id)
                  }
                >
                  <img src={item.image} alt="" className="logo" />
                  <h3 className="name">{item.name}</h3>
                  <BsChevronRight />
                </div>
              ))} */}
            </div>
            <div className="service">
              <br />
              <div className="resultat-trouve">
                <span>{products?.data?.length} resultat trouvé</span>
                <select
                  defaultValue={"tri-popularite"}
                  name="tri"
                  onChange={handleTri}
                  id=""
                >
                  <option value="tri-recent">
                    Tri du plus récent du plus ancien
                  </option>
                  <option value="tri-popularite">Tri par popularité</option>
                  <option value="tri-tarrif-croissant">
                    Tri par tarif croissant
                  </option>
                  <option value="tri-tarif-decroissant">
                    Tri par tarif decroissant
                  </option>
                </select>
              </div>
              <div className="elements">
                {products?.data?.map((item, index) => (
                  <div className="element" key={index}>
                    <div className="elt_data">
                      <img src={item?.image} alt="" />
                      <p className="desc">{item?.name}</p>
                      <p className="desc">{item?.description}</p>
                    </div>
                    <div className="lire-la-suite"></div>
                    <button
                      onClick={() => {
                        setShowDesc(true);
                        setProduct(item);
                      }}
                    >
                      LIRE LA SUITE
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
