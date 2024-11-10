import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller } from "swiper";
import "./serviceDescription.scss";
import { useSelector } from "react-redux";
export default function ServiceDescription({ element, product }) {
  SwiperCore.use([Navigation, Pagination, Controller]);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [service, setService] = useState("");
  const [prodData, setProdData] = useState({});
  const [currentImg, setCurrentImg] = useState("");
  const products = useSelector((state) => state.get_products);

  useEffect(() => {
    setProdData(product);
    setCurrentImg(product?.image);
  }, [product]);

  const handle_service_change = (e, chosen) => {
    setService(service + e.target.name);
    setProdData(chosen);
    setCurrentImg(chosen?.image);
  };
  console.log(prodData);
  return (
    <div className="service-desc">
      {element}
      <br />
      <div className="images-wrapper">
        <div style={{ width: "40%" }}>
          <div className="main-image">
            <img src={currentImg} alt="" />
          </div>
          {prodData.images?.length > 0 && (
            <div className="images">
              <Swiper
                slidesPerView={5}
                direction={"horizontal"}
                navigation
                className="swiper"
              >
                <SwiperSlide onClick={() => setCurrentImg(prodData?.image)}>
                  <img className="image" src={prodData?.image} alt="" />
                </SwiperSlide>
                {prodData?.images?.map((item, index) => (
                  <SwiperSlide
                    key={index}
                    onClick={() => setCurrentImg(item?.path)}
                  >
                    <img
                      key={index}
                      className="image"
                      src={item?.path}
                      alt=""
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
        </div>
        <div className="info-wrapper">
          <div className="information">
            <h2>
              <b>{prodData?.name}</b>
            </h2>
          </div>
          <div className="description">
            <div className="desc-text">
              <p>{prodData?.description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="service-informations">
        <div className="produits-similaires">
          <div className="produits-similaires-titre">
            <h1>Vous pourriez aussi aimer:</h1>
          </div>
          <div className="elements">
            <Swiper
              slidesPerView={
                window.innerWidth > 500 ? (window.innerWidth > 900 ? 4 : 2) : 1
              }
              direction={"horizontal"}
              centeredSlidesBounds
              spaceBetween={150}
              navigation
              className="swiper"
            >
              {products?.data
                ?.filter((item) => item.id !== prodData.id)
                .map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="element">
                      <div className="elt_data">
                        <img src={item.image} alt="" />
                        <p className="desc">{item.name}</p>
                        <p className="desc">{item.description}</p>
                      </div>
                      <div className="lire-la-suite"></div>
                      <button
                        name="adhesif"
                        onClick={(e) => handle_service_change(e, item)}
                      >
                        LIRE LA SUITE
                      </button>
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
