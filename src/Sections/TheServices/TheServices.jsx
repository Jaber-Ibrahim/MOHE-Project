import classes from "./style.module.css";
import { Card } from "../../Components/importComponents";
import service1 from "../../assets/service1.png";

import axios from "./../../Components/axios/customAxios"
import { useState , useEffect } from "react";

const TheServices = () => {

  const [services2, setservices2] = useState("");
  let Myservices2;

    useEffect( () => {
      axios.get("7c79aa97-057c-4137-8885-1fe20de402e2",services2)
                .then((response) => {
                  setservices2(response.data.data);
                })
                .catch((error) => {
                  console.log(error);
                });
      }, []);

      if(services2) {
        Myservices2 = services2.map((card,index) => {
          return (
            <Card key={`${index} ${card.name}`} img={service1} title={card.name} />

          )
        })
      }


  return (
    <div className={classes.container}>
      {Myservices2}
    </div>
  );
};

export default TheServices;
