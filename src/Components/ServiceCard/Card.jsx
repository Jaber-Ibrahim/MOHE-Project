import classes from  "./style.module.css"

const Card = (props) => { 
    
    return ( 
        <div className ={classes.serviceCard}>
            <img src={props.img} alt=""/>
            <h1>{props.title}</h1>
        </div>
    );
}
export default Card