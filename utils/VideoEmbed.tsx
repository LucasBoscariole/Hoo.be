import React from "react";
import styles from "@styles/Modules/Shared.module.scss";

export const YoutubeEmbed = ({ embed }: { embed: string }) => (
  <div className={styles.video_responsive}>
    <iframe
      width="853"
      height="480"
      src={embed}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);
