import classes from "./LastNewsCard.module.css"
import { Button } from "../importComponents"
const LastNewsCard = (props) => {
  
    return (
    <div className={classes.card}>
        <h1 className={classes.H1}>{props.title}</h1>
        <Button desc="اقرأ المزيد"/>
        
    </div>
  )
}

export default LastNewsCard