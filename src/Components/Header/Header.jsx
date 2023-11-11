import mheLogo from "./../../assets/mohe.png"
import Search from "./../../assets/search.svg"
import Earth from "./../../assets/earth.svg"
import bars from "./../../assets/bars.svg"
import classes from "./Header.module.css"
import { useState } from "react"
import Li from "./CustomLi/Li"

const Header = () => {
  const [active,setActive] = useState (false);
  const handleList = () => {
    console.log("active is" , active)
    setActive(!active)
  }
  const data = [
    {
      title : "الرئيسية" , 
      status : "active" ,
      id : 1
    }
    ,
    {
      title : "عن الوزارة" ,
      status : "" , 
      id : 2
    }
    ,
    {
      title : "تشريعات وقوانين" , 
      status : "" , 
      id : 3
    }
    ,
    {
      title : "المركز الإعلامي" , 
      status : "" , 
      id : 4
    }
    ,
    {
      title : "الفعاليات والنشاطات" , 
      status : "" , 
      id : 5
    }
    ,
    {
      title : "شؤون الطلاب" , 
      status : "" , 
      id : 6
    }
    ,
    {
      title : "اتصل بنا" , 
      status : "" , 
      id : 7
    }
  ]

  

  const myLis = data.map((li,index) => {
    return (
      <Li 
      key = {index}  
      class={li.status ==="active" ? `${classes.Li} ${classes.active}` : `${classes.Li}`} 
      title={li.title}/>
    )
  }) 
  return (
    <nav>
      <img src={bars} alt="bars icon" className={classes.Bars} onClick={handleList}/>
      <div className={classes.Right}>
        <img src={mheLogo} alt="logo of MHE in SAR" className={classes.Logo}/>
        <ul className={active ? `${classes.List} ${classes.show}` : `${classes.List}` }>
          {myLis}
        </ul>
      </div>
      <div className={classes.Icons}>
        <img className={classes.Img} src={Search} alt="search icon" />
        <img className={classes.Img} src={Earth} alt="earth icon" />
      </div>
    </nav>
  )
}

export default Header