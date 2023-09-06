import style from "../Assets/Styling/loading.module.css";

const Loading = ()=>{
    return(
        <div className={style.center}>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
            <div className={style.wave}></div>
        </div>
    )
}

export default Loading;
