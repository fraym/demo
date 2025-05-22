import { FC } from "react";
import styles from "./Loading.module.scss";

export const Loading: FC = () => {
    return (
        <div className={styles.loaderContainer}>
            <div className={styles.loader}></div>
        </div>
    );
};
