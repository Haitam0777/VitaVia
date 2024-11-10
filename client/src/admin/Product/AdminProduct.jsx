import React, { useEffect, useState } from "react";
import "./product.scss";

import Offcanvas from "react-bootstrap/Offcanvas";
import { useDispatch, useSelector } from "react-redux";
import {
  add_product_action,
  get_products_action,
} from "../../state/actions/ProductAction";
import Element from "../element/Element";
import Button from "react-bootstrap/esm/Button";
import { MdAdd } from "react-icons/md";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import Image from "react-bootstrap/esm/Image";

export default function AdminProduct({
  service_id,
  service_name,
  show,
  setShow,
}) {
  const products = useSelector((state) => state.get_products);
  const admin = useSelector((state) => state.admin);

  const [addProd, setAddProd] = useState(false);
  const [image, setImage] = useState();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    if (show) dispatch(get_products_action(service_id));
  }, [dispatch, service_id, show]);

  const handleShow = () => setAddProd(true);

  const handleClose = () => setShow(false);
  const handleCloseModal = () => setAddProd(false);

  const handleFileChange = (e) => {
    setImage(e.target.files[0]);
  };

  const add_prod = async (e) => {
    e.preventDefault();
    handleCloseModal();
    try {
      let data = new FormData();

      data.append("picture", image);
      data.append("name", name);
      data.append("description", description);
      data.append("service_id", service_id);
      data.append("types", ["jpg", "jpeg", "png"]);

      dispatch(add_product_action(data, admin.data.token));
      setImage(null);
      setName("");
      setDescription("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Offcanvas
      className="admin_prod"
      show={show}
      onHide={handleClose}
      placement="top"
    >
      {addProd && (
        <Modal show={addProd} onHide={handleCloseModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Product</Modal.Title>
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
                placeholder="main image"
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
            <Button variant="secondary" onClick={handleCloseModal}>
              Close
            </Button>
            <Button variant="primary" onClick={add_prod}>
              Add Product
            </Button>
          </Modal.Footer>
        </Modal>
      )}
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Produits {service_name} </Offcanvas.Title>
        <Button
          variant="primary"
          onClick={handleShow}
          style={{ marginLeft: 5 }}
        >
          <MdAdd />
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
        }}
      >
        {products?.data?.map((item) => (
          <Element key={item.id} item={item} type="product" />
        ))}
      </Offcanvas.Body>
    </Offcanvas>
  );
}
