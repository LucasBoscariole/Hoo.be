import React from "react";
import styles from "@styles/Modules/Footer.module.scss";
import { DefaultButton } from "@components/Buttons/DefaultButton";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className={styles.container}>
      <DefaultButton
        icon={
          <Image
            src="/images/hoobe-icon.png"
            alt="hoo be"
            width={24}
            height={24}
          />
        }
        title="create your hoo.be"
        onClick={() => null}
      />
      <a className={styles.login} href="#">login</a>
    </footer>
  );
};
