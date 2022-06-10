import React, { useContext, useState } from "react";
import styles from "./Navigation.module.css";
import { BiSearchAlt } from "react-icons/bi";
import { Data } from "../../App";

const Navigation = () => {
  const [Text, setText] = useState("");
  const { NewSearch, setNewSearch } = useContext(Data);
  return (
    <div className={`${styles.Navigation}`}>
      <div className={`${styles.left}`}>MYFLIX.COM</div>
      <div className={`${styles.right}`}>
        <div className={`${styles.right_1}`}>
          <input
            className={`${styles.inputPlace}`}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Type movie name and search icon"
          />
          <BiSearchAlt
            className={`${styles.icon}`}
            size="1.5rem"
            onClick={() => {
              setNewSearch(Text);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navigation;
