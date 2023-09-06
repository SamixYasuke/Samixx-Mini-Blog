import style from "../Assets/Styling/error.module.css";

const Error = ( {error} )=>{
    return(
        <div className={style.error}>
            <h1>{error}</h1>
        </div>
    )
}

export default Error;
