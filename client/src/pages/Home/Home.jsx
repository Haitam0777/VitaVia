import React, { useEffect } from "react";
import "./home.scss";
import Banner from "../../components/Banner/Banner";
import { get_file_action } from "../../state/actions/FilesAction";
import { useDispatch, useSelector } from "react-redux";

export default function Home() {
  const files = useSelector((state) => state.files);
  const dispatch = useDispatch();
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(get_file_action("products", "home"));
  }, [dispatch]);
  return (
    <>
      <div class="bg">
        <img src={files.files && files.files[0].image} alt="" />
      </div>
      {/* <div class="bg bg2"></div>
                <div class="bg bg3"></div>
            */}
      <main>
        <Banner />
      </main>
    </>
  );
}
