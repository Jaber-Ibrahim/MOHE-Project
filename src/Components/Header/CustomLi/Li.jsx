const Li = (props) => {
  return (
    <li className={props.class}>
        <a href="/">{props.title}</a>
    </li>
  )
}

export default Li