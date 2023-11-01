import classes from "./Hero.module.css"
import heroImg from "./../../assets/HeroSection.png"
import {Button} from "./../../Components/importComponents"

const Hero = () => {
  return (
    <div className={classes.Hero}>
        <div className={classes.Right}>
            <h1 className={classes.HeroTitle}>
                <span className={classes.HeroSpan}>بدء التقدم</span>
                <br/>
                لمفاضلة القبول الجامعي للعام الدراسي 2023 - 2024
            </h1>
            <Button 
            desc = "تقدم الآن"/>
        </div>
        <div className={classes.Left}>
            <img src={heroImg} alt="last news img" />
        </div>

    </div>
  )
}

export default Hero