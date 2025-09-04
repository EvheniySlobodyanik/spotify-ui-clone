import InstagramIcon from "../../assets/main/instagram.svg?react";
import TwitterIcon from "../../assets/main/twitter.svg?react";
import FacebookIcon from "../../assets/main/facebook.svg?react";

import styles from "./Main.module.scss";

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

      <div className={styles.recommendationsContainer}>
        <h1 className={styles.heading}>Recommended for you</h1>

        <button type="button" className={styles.showBtn}>
          Show all
        </button>
      </div>

      <div className={styles.chartsContainer}>
        <h1 className={styles.heading}>Featured charts</h1>

        <button type="button" className={styles.showBtn}>
          Show all
        </button>
      </div>

      <div className={styles.episodesContainer}>
        <h1 className={styles.heading}>Episodes you might like</h1>

        <button type="button" className={styles.showBtn}>
          Show all
        </button>
      </div>

      <div className={styles.showsContainer}>
        <h1 className={styles.heading}>Shows to try</h1>

        <button type="button" className={styles.showBtn}>
          Show all
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
