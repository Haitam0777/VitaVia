import React, { useEffect } from "react";
import "./contactUs.scss";
import { Map } from "../../components/Map/Map.jsx";
import { AiOutlineSend } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { get_file_action } from "../../state/actions/FilesAction";
export default function ContactUs() {
  const dispatch = useDispatch();
  const files = useSelector((state) => state.files);
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(get_file_action("products", "contactez-nous"));
  }, [dispatch]);
  return (
    <div className="contactUs">
      <div className="contact-us-background">
        <div className="arrows-wrapper">
          <div className="contact-us-arrow-one"></div>
          <div className="contact-us-arrow-two"></div>
          <div className="contact-us-arrow-three"></div>
        </div>
      </div>
      <div className="content">
        <div className="header">
          <div className="info">
            <div className="title">
              <h1>
                <br />
                <br />
                <br />
                {window.screen.width > 700 && "Avez vous des questions?"}{" "}
                {window.screen.width > 700 && <br></br>}Contactez Nous!
              </h1>
            </div>
            <div className="desc">
              <p>
                Vous souhaitez une meilleure gestion de vos approvisionnement en
                viande halal contrôlée, en toute agilité, le tout à des tarifs
                abattoir imbattables ? Nos équipes vous accompagnent et
                répondent à vos questions 7j/7
              </p>
            </div>
          </div>
          <div className="image">
          <img src={"/images/service_prod_img/1719092421002.jpeg"} className="backgroundImg" alt="" />
          </div>
        </div>
        <div className="contact-wrapper">
          <div className="contacts-wrapper">
            <div className="contacts">
              <div className="title">
                <h1>CONTACT</h1>
              </div>
              <div className="info">
                <div className="email-and-phone">
                  <div className="left">
                    <div>
                      <h4>Email</h4>
                      <p>direction@openshopc.fr</p>
                    </div>
                    <div>
                      <h4>Telephone</h4>
                      <p>00 33 6 67 61 12 61</p>
                    </div>

                  </div>
                  <div className="right">
                    <div>
                      <h4>Addresse</h4>
                      <p>3 rue de la corderie<br/>94550 chevilly la rue<br/>Grande marché international rungis</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="send-email">
              <div className="title">
                <h1>Votre Courriel</h1>
              </div>
              <div className="form">
                <div className="row">
                  <input
                    type="text"
                    placeholder="Votre Nom Personnel/Société"
                  />
                  <input type="text" placeholder="Votre Email" />
                </div>
                <div className="row">
                  <textarea
                    name="your_message"
                    id=""
                    cols="55"
                    rows="5"
                    placeholder="Votre Message"
                  ></textarea>
                </div>
                <div className="row">
                  <button className="send">
                    <h4>Send</h4> <AiOutlineSend />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    </div>
  );
}
