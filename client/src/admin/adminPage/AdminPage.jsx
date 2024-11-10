import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { get_file_action } from "../../state/actions/FilesAction";
import Element from "../element/Element";
import "./adminPage.scss";
import {
  add_service_action,
  get_services_action,
} from "../../state/actions/ServicesAction";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { MdAdd } from "react-icons/md";
import Image from "react-bootstrap/Image";

export default function AdminPage() {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  const admin = useSelector((state) => state.admin);
  const get_services = useSelector((state) => state.get_services);
  const listRef = useRef([]);
  const [items, setItems] = useState([]);
  const [index, setIndex] = useState(0);
  const [addService, setAddService] = useState(false);
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (get_services.data) {
      setItems(get_services.data);
    }
  }, [get_services]);

  useEffect(() => {
    if (files.files) {
      setItems(files.files);
    }
  }, [files]);

  useEffect(() => {
    !admin.data && window.location.replace("/auth");
    dispatch(get_file_action("products", "home"));
  }, [admin.data, dispatch]);

  console.log(files);

  useEffect(() => {
    listRef.current.map((item) => {
      console.log(item, item.id);
      if (item.id == index) {
        item.classList.add("selected");
      } else {
        item.classList.remove("selected");
      }
      return item;
    });
  }, [index]);

  const get_files = (table, type) => {
    dispatch(get_file_action(table, type));
  };
  const get_all_services = () => {
    dispatch(get_services_action());
  };

  const handleClose = () => setAddService(false);
  const handleShow = () => setAddService(true);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const add_service = (e) => {
    e.preventDefault();
    handleClose();
    try {
      let data = new FormData();

      data.append("picture", image);
      data.append("name", name);
      data.append("description", description);
      data.append("page", "service-" + name);
      data.append("types", ["jpg", "jpeg", "png"]);
      setImage("");
      setName("");
      setDescription("");

      dispatch(add_service_action(data, admin.data.token));
    } catch (error) {
      console.log(error);
    }
  };
  console.log(image);
  return (
    <>
      {addService && (
        <Modal show={addService} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Service</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <FloatingLabel controlId="floatingInput" label="Name">
              <Form.Control
                type="text"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
              />
            </FloatingLabel>
            <br />
            <FloatingLabel
              controlId="floatingInput"
              label="Description"
              className="mb-3"
            >
              <Form.Control
                type="textarea"
                placeholder="description"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Image"
              className="mb-3"
            >
              <Form.Control
                type="file"
                accept="image/*"
                placeholder="image"
                onChange={handleFileChange}
              />
            </FloatingLabel>
            {image && (
              <Image
                src={image ? URL.createObjectURL(image) : ""}
                rounded
                width={"100%"}
              />
            )}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={add_service}>
              Add Service
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <div className="dashboard">
        <div className="left-list">
          <ul>
            <li
              id={0}
              className="home-list"
              onClick={() => {
                setIndex(0);
                get_files("products", "home");
              }}
              ref={(ref) => ref !== null && listRef.current.push(ref)}
            >
              Acceuil
            </li>
            <li
              id={1}
              className="about-us-list"
              onClick={() => {
                setIndex(1);
                get_files("products", "about-us");
              }}
              ref={(ref) => ref !== null && listRef.current.push(ref)}
            >
              A propos de nous
            </li>
            <li
              id={2}
              className="services-list"
              onClick={() => {
                setIndex(2);
                get_all_services();
              }}
              ref={(ref) => ref !== null && listRef.current.push(ref)}
            >
              Services
              <Button variant="primary" onClick={handleShow}>
                <MdAdd />
              </Button>
            </li>
            {/* <li
            className="adhesif"
            onClick={() => get_files("services", "service-adhesif")}
            ref={(ref) => ref !== null && listRef.current.push(ref)}
          >
            Service Adhésif
          </li>
          <li
            className="signelatique"
            onClick={() => get_files("services", "service-signelatique")}
            ref={(ref) => ref !== null && listRef.current.push(ref)}
          >
            Service Signelatique
          </li>
          <li
            className="totem"
            onClick={() => get_files("services", "service-totem")}
            ref={(ref) => ref !== null && listRef.current.push(ref)}
          >
            Service Totem
          </li>
          <li
            className="led"
            onClick={() => get_files("services", "service-ecrans")}
            ref={(ref) => ref !== null && listRef.current.push(ref)}
          >
            Service Écrans LED
          </li>
          <li
            className="enseigne"
            onClick={() => get_files("services", "service-enseigne")}
            ref={(ref) => ref !== null && listRef.current.push(ref)}
          >
            Service Enseigne
          </li> */}
            <li
              id={3}
              className="contactez-nous-list"
              onClick={() => {
                setIndex(3);
                get_files("products", "contactez-nous");
              }}
              ref={(ref) => ref !== null && listRef.current.push(ref)}
            >
              Contactez nous
            </li>
          </ul>
        </div>
        <div className="content">
          {items.map((item, index) => (
            <Element type={item.page} key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
