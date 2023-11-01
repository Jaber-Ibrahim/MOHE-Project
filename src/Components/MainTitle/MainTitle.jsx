import classes from "./MainTitle.module.css"

const MainTitle = (props) => {
  return (
      <h1 className={classes.MainTitle}>{props.title}</h1>
  )
}

export default MainTitle