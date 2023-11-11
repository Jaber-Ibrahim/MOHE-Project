import classes from "./style.module.css";
import { Card } from "../../Components/importComponents";
import service1 from "../../assets/service1.png";
import service2 from "../../assets/service2.png";
import service3 from "../../assets/service3.png";
import service4 from "../../assets/service4.png";
import service5 from "../../assets/service5.png";
import service6 from "../../assets/service6.png";
import service7 from "../../assets/service7.png";
import service8 from "../../assets/service8.png";


const TheServices = () => {
  return (
    <div className={classes.container}>
      <Card img={service1} title="شارك برأيك" />
      <Card img={service2} title="دليل الجامعات" />
      <Card img={service3} title="النشرة البريدية" />
      <Card img={service4} title="استفسارات" />
      <Card img={service5} title="احصائيات "  title2=" و مؤشرات"    />
      <Card img={service6} title="اللجنة الوطنية " title2="  للتبادل الطلابي"   />
      <Card img={service7} title="دليل منظومة " title2="التعليم العالي" />
      <Card img={service8} title="المكتبات " title2=" الالكترونية"  />
    </div>
  );
};

export default TheServices;
