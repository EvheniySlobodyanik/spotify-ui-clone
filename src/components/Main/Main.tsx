import InstagramIcon from "../../assets/main/social/instagram.svg?react";
import TwitterIcon from "../../assets/main/social/twitter.svg?react";
import FacebookIcon from "../../assets/main/social/facebook.svg?react";

import styles from "./Main.module.scss";

const songCovers = [
  { src: "../../assets/main//covers/cixgo.jpg", alt: "cixgo hot album" },
  { src: "../../assets/main//covers/clasic.jpg", alt: "clasic hot album" },
  { src: "../../assets/main//covers/cover.jpg", alt: "cover hot album" },
  { src: "../../assets/main//covers/dj-pyro.jpg", alt: "dj-pyro hot album" },
  { src: "../../assets/main//covers/eyes-on-you.jpg", alt: "eyes hot album" },
  { src: "../../assets/main//covers/lil-baby.jpg", alt: "lil-nigga hot album" },
  {
    src: "../../assets/main//covers/ryan-jones.jpg",
    alt: "ryan-jones hot album",
  },
  { src: "../../assets/main//covers/see-you.jpg", alt: "see hot album" },
  { src: "../../assets/main//covers/vintage.jpg", alt: "vintage hot album" },
  { src: "../../assets/main//covers/white.jpg", alt: "white boy hot album" },
];

const headings = [
  "Recommended for you",
  "Featured charts",
  "Episodes you may like",
  "Shows to try",
];

export function Main() {
  return (
    <main className={styles.main}>
      <div className={styles.header}>
        <button type="button" className={styles.allBtn}>
          All
        </button>

        <button type="button" className={styles.musicBtn}>
          Music
        </button>

        <button type="button" className={styles.podcastsBtn}>
          Podcasts
        </button>
      </div>

      <div className={styles.horizontalDivider} />

      <div className={styles.footerContainer}>
        <ul className={styles.list}></ul>

        <ul className={styles.list}></ul>

        <ul className={styles.list}></ul>

        <ul className={styles.list}></ul>

        <address className={styles.socialLinksContainer}>
          <a className={styles.socialLink}>
            <InstagramIcon />
          </a>

          <a className={styles.socialLink}>
            <TwitterIcon />
          </a>

          <a className={styles.socialLink}>
            <FacebookIcon />
          </a>
        </address>
      </div>

      <div className={styles.horizontalDivider} />

      <div className={styles.rightsContainer}>
        <address className={styles.documentsLinksContainer}>
          <a className={styles.documentLink}></a>

          <a className={styles.documentLink}></a>

          <a className={styles.documentLink}></a>

          <a className={styles.documentLink}></a>

          <a className={styles.documentLink}></a>

          <a className={styles.documentLink}></a>
        </address>

        <p className={styles.copyrightLogo}>© 2025 Spotify AB</p>
      </div>
    </main>
  );
}
