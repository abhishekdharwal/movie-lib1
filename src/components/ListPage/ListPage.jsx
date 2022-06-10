import React, { useContext, useEffect, useState } from "react";
import styles from "./ListPage.module.css";
import { Data } from "../../App";
const ListPage = () => {
  const { listWithMovie, setlistWithMovie, GlobalID, setGlobalID } =
    useContext(Data);
  console.log(listWithMovie);
  const [ListName, setListName] = useState("");
  const [ListArray, setListArray] = useState([]);

  useEffect(() => {
    listWithMovie.forEach((ele, ind, arr) => {
      if (GlobalID === ele.uuid) {
        console.log("showing");
        setListName(ele.Name);
        setListArray(ele.Movies);
        console.log(ListArray);
      }
    });
  }, []);

  console.log(ListArray);

  return (
    <div>
      <div className={styles.ListPage}>{ListName}</div>
      <div className={styles.photo}>
        {ListArray.map((ele, ind) => (
          <div className={styles.row}>
            <div className={styles.col}>
              <img className={styles.imgaee} src={`${ele.Poster}`} alt="phot" />
              <div>{ele.Title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListPage;
