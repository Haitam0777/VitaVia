import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { set_files_action } from "../../state/actions/FilesAction";
import Button from "react-bootstrap/Button";
import "./element.scss";
import {
  delete_service_action,
  set_service_action,
} from "../../state/actions/ServicesAction";
import AdminProduct from "../Product/AdminProduct";
import {
  delete_product_action,
  get_products_action,
  set_product_action,
} from "../../state/actions/ProductAction";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Controller } from "swiper";
import { MdAdd } from "react-icons/md";
import { BsTrash } from "react-icons/bs";

SwiperCore.use([Navigation, Pagination, Controller]);
export default function Element({ type = "", item }) {
  const [name, setName] = useState(item.name);
  const [description, setDescription] = useState(item.description);
  const [image, setImage] = useState("");
  const [images, setImages] = useState([]);
  const [delImages, setDelImages] = useState([]);
  const [showProds, setShowProds] = useState(false);

  const admin = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  const fileInputRef = useRef();
  const imageInputRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    setName(item.name);
    setDescription(item.description);
    setImages(item.images);
  }, [item]);
  const changeImg = (e) => {
    imageRef.current.src = URL.createObjectURL(e.target.files[0]);
    setImage(e.target.files[0]);
  };

  console.log(image, item, type);
  const update_data = (e) => {
    try {
      e.preventDefault();
      let data = new FormData();

      data.append("picture", image);
      data.append("name", name);
      data.append("description", description);

      data.append(
        "types",
        image?.name?.includes("MOV") || image?.name?.includes("mp4")
          ? ["mov", "mp4"]
          : ["jpg", "jpeg", "png"]
      );
      data.append("type", type.includes("service-") ? "services" : "products");
      data.append("table", type.includes("service-") ? "services" : "products");
      data.append("id", item?.id);

      if (type.includes("service-")) {
        dispatch(set_service_action(data, admin.data.token));
        return;
      } else if (type.includes("product")) {
        data.append("service_id", item?.id);
        delImages.map((item) => data.append("delete-" + item.id, item.id));
        images?.map((item, idx) => data.append("images-" + idx, item));
        dispatch(set_product_action(data, admin.data.token));
        return;
      }
      dispatch(set_files_action(data, admin.data.token));
    } catch (error) {
      console.log(error);
    }
  };

  const deleteService = () => {
    dispatch(delete_service_action(item?.id, admin.data.token));
  };

  const deleteProd = () => {
    dispatch(delete_product_action(item?.id, admin.data.token));
    dispatch(get_products_action(item?.service_id));
  };

  const handleAddImg = () => {
    imageInputRef.current.click();
  };

  const addImgs = (e) => {
    setImages([...images, ...e.target.files]);
  };

  const deleteImg = (idx) => {
    setDelImages([...delImages, images.find((item, index) => index === idx)]);
    setImages(images.filter((item, index) => index !== idx));
  };
  return (
    <div className="element-container">
      {type.includes("service-") && (
        <AdminProduct
          service_id={item?.id}
          service_name={item?.name}
          setShow={setShowProds}
          show={showProds}
        />
      )}
      <div className="element-content">
        <input
          type="file"
          name="new-file"
          accept="image/* ,video/*"
          onChange={(e) => changeImg(e)}
          ref={(ref) => ref !== null && (fileInputRef.current = ref)}
          style={{ display: "none" }}
          id=""
        />
        <input
          type="file"
          name="new-images"
          accept="image/*"
          multiple
          onChange={(e) => addImgs(e)}
          ref={(ref) => ref !== null && (imageInputRef.current = ref)}
          style={{ display: "none" }}
          id=""
        />
        <div className="image">
          {item.image.includes("MOV") || item.image.includes("mp4") ? (
            <video
              src={item.image}
              controls
              ref={(ref) => ref !== null && (imageRef.current = ref)}
              onClick={() => fileInputRef.current.click()}
            ></video>
          ) : type.includes("product") ? (
            <Swiper
              slidesPerView={1}
              direction={"horizontal"}
              spaceBetween={50}
              navigation
              className="swiper"
              width={500}
              style={{
                maxWidth: 500,
              }}
            >
              <Button
                variant="primary"
                onClick={handleAddImg}
                style={{ marginLeft: 5 }}
                className="add_img_btn"
              >
                <MdAdd />
              </Button>
              <SwiperSlide>
                <img
                  src={item.image}
                  alt=""
                  ref={(ref) => ref !== null && (imageRef.current = ref)}
                  onClick={() => fileInputRef.current.click()}
                />{" "}
              </SwiperSlide>
              {images.map((item, index) => (
                <SwiperSlide key={index}>
                  <img src={item.path || URL.createObjectURL(item)} alt="" />
                  <Button
                    variant="danger"
                    onClick={() => deleteImg(index)}
                    style={{ marginLeft: 5 }}
                    className="delete_img_btn"
                  >
                    <BsTrash />
                  </Button>
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <img
              src={item.image}
              alt=""
              ref={(ref) => ref !== null && (imageRef.current = ref)}
              onClick={() => fileInputRef.current.click()}
            />
          )}
        </div>
        <div className="info">
          <p className="name">{name}</p>
          {description !== "undefined" && (
            <p className="description">{description}</p>
          )}
        </div>
        {type.includes("service-") ||
          (type.includes("product") && (
            <div className="services-container">
              <div className="change-name">
                <input
                  type="text"
                  defaultValue={name}
                  onChange={(e) => setName(e.target.value)}
                  name="change-name"
                  id=""
                />
              </div>

              <div className="change-description">
                <textarea
                  name="change-description"
                  defaultValue={description}
                  onChange={(e) => setDescription(e.target.value)}
                  id=""
                  cols="40"
                  rows="10"
                ></textarea>
              </div>
            </div>
          ))}
        <div className="modifier">
          <button className="modifier-button" onClick={(e) => update_data(e)}>
            Modifier
          </button>
          {type.includes("service-") && (
            <>
              <Button variant="info" onClick={() => setShowProds(true)}>
                Products
              </Button>
              <Button variant="danger" onClick={deleteService}>
                Delete
              </Button>
            </>
          )}
          {type.includes("product") && (
            <>
              <Button variant="danger" onClick={deleteProd}>
                Delete
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
