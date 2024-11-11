
import Banner from "../../components/Banner/Banner";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./home.scss";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.post("/get-files", {
          table: "products",
          page: "home"
        });
        
        if (response.data && response.data.length > 0) {
          setImageUrl(response.data[0].IMAGE); // Récupérer le chemin de l'image
        }
      } catch (error) {
        console.error("Erreur lors de la récupération de l'image :", error);
      }
    };


    fetchImage();
  }, []);


  return (
    <div>
      <div className='bg'>
        <div className="backgroundShadow"></div>
        <img src={"/images/products/1718860979149.jpeg"} className="backgroundImg" alt="" />
      </div>
      <main>
      <Banner />
      </main>
    </div>
  );
}