import InstagramIcon from "../../assets/main/social/instagram.svg?react";
import TwitterIcon from "../../assets/main/social/twitter.svg?react";
import FacebookIcon from "../../assets/main/social/facebook.svg?react";

import styles from "./Main.module.scss";

const songCovers = [
  { src: "../../assets/main/covers/cixgo.jpg", alt: "cixgo hot album" },
  { src: "../../assets/main/covers/clasic.jpg", alt: "clasic hot album" },
  { src: "../../assets/main/covers/cover.jpg", alt: "cover hot album" },
  { src: "../../assets/main/covers/dj-pyro.jpg", alt: "dj-pyro hot album" },
  { src: "../../assets/main/covers/eyes-on-you.jpg", alt: "eyes hot album" },
  { src: "../../assets/main/covers/lil-baby.jpg", alt: "lil-nigga hot album" },
  {
    src: "../../assets/main/covers/ryan-jones.jpg",
    alt: "ryan-jones hot album",
  },
  { src: "../../assets/main/covers/see-you.jpg", alt: "see hot album" },
  { src: "../../assets/main/covers/vintage.jpg", alt: "vintage hot album" },
  { src: "../../assets/main/covers/white.jpg", alt: "white boy hot album" },
];

const headings = [
  "Recommended for you",
  "Featured charts",
  "Episodes you may like",
  "Shows to try",
];

const documentLinks = [
  "Legal",
  "Safety & Privacy Center",
  "Privacy Policy",
  "Cookies",
  "About Ads",
  "Accessibility",
];

const sections = [
  {
    heading: "Company",
    items: ["About", "Jobs", "For the Record"],
  },
  {
    heading: "Communities",
    items: ["For Artists", "Developers", "Advertising", "Investors", "Vendors"],
  },
  {
    heading: "Useful links",
    items: [
      "Support",
      "Free Mobile App",
      "Popular by Country",
      "Import your music",
    ],
  },
  {
    heading: "Spotify Plans",
    items: [
      "Premium Individual",
      "Premium Duo",
      "Premium Family",
      "Premium Student",
      "Spotify Free",
    ],
  },
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

      <nav className={styles.beneficialLinksNav}>
        <div className={styles.navListsContainer}>
          {sections.map((section) => (
            <div className={styles.navContainer}>
              <h3 key={section.heading} className={styles.navHeading}>
                {section.heading}
              </h3>

              <ul className={styles.navList}>
                {section.items.map((item) => (
                  <li key={item} className={styles.navListItem}>
                    <a className={styles.listItemLink}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

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
      </nav>

      <div className={styles.horizontalDivider} />

      <div className={styles.rightsContainer}>
        <address className={styles.documentsLinksContainer}>
          {documentLinks.map((docLink, index) => (
            <a key={index} className={styles.documentLink}>
              {docLink}
            </a>
          ))}
        </address>

        <p className={styles.copyrightLogo}>© 2025 Spotify AB</p>
      </div>
    </main>
  );
}
