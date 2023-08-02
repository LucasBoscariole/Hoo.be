/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "@styles/Modules/Hero.module.scss";
import Image from "next/image";
import { linksRedirect } from "@utils/linksRedirect";
import { YoutubeEmbed } from "@utils/VideoEmbed";

export const Hero = ({ data }: any) => {
  const { user, userSocialPlatform, content } = data;
  const { fullName, hasPhoto, imageUrl } = user;
  return (
    <div className={styles.container}>
      {hasPhoto && (
        <Image
          width={104}
          height={104}
          src={imageUrl}
          alt={fullName}
          className={styles.image_logo}
        />
      )}
      <h1 className={styles.headName}>{fullName}</h1>
      <div className={styles.flexWrapperLinks}>
        {userSocialPlatform?.map(({ socialPlatform, id, link }: any) => {
          return (
            <a href={link} target="_blank" className={styles.social} key={id}>
              {linksRedirect[socialPlatform]}
            </a>
          );
        })}
      </div>
      <div className={styles.content}>
        {content?.map(({ content }: any) => {
          const {
            id,
            hasPhoto,
            isEmbedEnabled,
            link,
            title,
            isDirectLinkEnabled,
            imageUrl,
          } = content;
          if (hasPhoto) {
            return (
              <a
                href={isDirectLinkEnabled ? link : "#"}
                key={id}
                className={styles.hasPhoto}
              >
                <img
                  src={imageUrl}
                  alt={title}
                  className={styles.backgroundImage}
                />
                <div className={styles.bottomContent}>
                  <h5>{title}</h5>
                  <Image
                    src={"/images/hoobe.svg"}
                    alt={"hoo be"}
                    width={24}
                    height={24}
                  />
                </div>
              </a>
            );
          } else if (isEmbedEnabled) {
            return <YoutubeEmbed embed={link} key={id} />;
          }
        })}
      </div>
    </div>
  );
};
