import React from "react";
import styles from "@styles/Modules/Shared.module.scss";

export const DefaultButton = ({ icon = <></>, title = "", onClick = () => null }) => {
  return (
    <button className={styles.defaultButton} onClick={onClick}>
      {!!icon && icon}
      <span>{title}</span>
    </button>
  );
};
