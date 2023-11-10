/* eslint-disable react/prop-types */
import classes from "./Button.module.css"

const Button = (props) => {
  return (
    <button className={!props.class ? `${classes.Button}` : `${classes.Button} ${classes.Light}` }>
        {props.desc}
    </button>
  )
}

export default Button