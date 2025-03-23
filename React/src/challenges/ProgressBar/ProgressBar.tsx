import style from "./ProgressBar.module.scss";

const ProgressBar = ({ count = 0 }) => {
  return (
    <div className={style["progress-bar-container"]}>
      <div className={style["progress"]} style={{ width: `${count}%` }}>
        <span className={style["precentage-label"]}>{count}%</span>
      </div>
    </div>
  );
};

export default ProgressBar;
