import classes from "./LastNewsCard.module.css"
import { Button } from "../importComponents"
const LastNewsCard = () => {
  
    return (
    <div className={classes.card}>
        <h1 className={classes.H1}>تدعو وزارة التعليم العالي والبحث العلمي الطلاب المتقدمين لمفاضلات القبول الجامعي للعام الدراسي 2024-2023 بالمبادرة إلى تسديد رسوم المفاضلة وتدعو من لم يتقدم بعد إلى التقدم للمفاضلة علما أن موعد انتهاء...</h1>
        <Button desc="اقرأ المزيد"/>
        
    </div>
  )
}

export default LastNewsCard