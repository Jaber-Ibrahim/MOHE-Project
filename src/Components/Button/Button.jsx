/* eslint-disable react/prop-types */
import classes from "./Button.module.css"

const Button = (props) => {
  return (
    <div className={!props.class ? `${classes.Button}` : `${classes.Button} ${classes.Light}` }>
        {props.desc}
    </div>
  )
}

export default Button