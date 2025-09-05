import ConnectDeviceIcon from "../../assets/footer/connect-device.svg?react";
import FullscreenIcon from "../../assets/footer/fullscreen.svg?react";
import MixIcon from "../../assets/footer/mix.svg?react";
import PauseIcon from "../../assets/footer/pause.svg?react";
import QueueIcon from "../../assets/footer/queue.svg?react";
import RepeatIcon from "../../assets/footer/repeat.svg?react";
import SkipBackIcon from "../../assets/footer/skip-back.svg?react";
import SkipForwardIcon from "../../assets/footer/skip-forward.svg?react";
import SoundIcon from "../../assets/footer/sound.svg?react";
import SquareIcon from "../../assets/footer/square-icon.svg?react";

import styles from "./Footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftContainer}></div>

      <div className={styles.centerContainer}>
        <div
          className={styles.centerTopContainer}
          role="group"
          aria-label="Playback controls"
        >
          <button
            type="button"
            className={styles.mixBtn}
            aria-label="Shuffle"
            disabled
          >
            <MixIcon aria-hidden="true" />
          </button>

          <button
            type="button"
            className={styles.skipBackBtn}
            aria-label="Previous track"
            disabled
          >
            <SkipBackIcon aria-hidden="true" />
          </button>

          <button
            type="button"
            className={styles.pauseBtn}
            aria-label="Play/Pause"
            disabled
          >
            <PauseIcon aria-hidden="true" />
          </button>

          <button
            type="button"
            className={styles.skipForwardBtn}
            aria-label="Next track"
            disabled
          >
            <SkipForwardIcon aria-hidden="true" />
          </button>

          <button
            type="button"
            className={styles.repeatBtn}
            aria-label="Repeat"
            disabled
          >
            <RepeatIcon aria-hidden="true" />
          </button>
        </div>

        <div
          className={styles.centerBottomContainer}
          role="group"
          aria-label="Song progress"
        >
          <span className={styles.leftTimer} aria-label="Elapsed time">
            -:--
          </span>

          <input
            type="range"
            className={styles.inputSongDuration}
            aria-label="Song progress"
            disabled
          />

          <span className={styles.rightTimer} aria-label="Total time">
            -:--
          </span>
        </div>
      </div>

      <div className={styles.rightContainer}>
        <button
          type="button"
          className={styles.squareBtn}
          aria-label="Toggle lyrics"
          disabled
        >
          <SquareIcon aria-hidden="true" />
        </button>

        <button type="button" className={styles.queueBtn} aria-label="Queue">
          <QueueIcon aria-hidden="true" />
        </button>

        <button
          type="button"
          className={styles.connectDeviceBtn}
          aria-label="Connect to a device"
        >
          <ConnectDeviceIcon aria-hidden="true" />
        </button>

        <div
          className={styles.soundContainer}
          role="group"
          aria-label="Volume controls"
        >
          <button
            type="button"
            className={styles.soundBtn}
            aria-label="Mute or unmute"
          >
            <SoundIcon aria-hidden="true" />
          </button>

          <input
            type="range"
            className={styles.inputSoundChanger}
            aria-label="Volume"
          />
        </div>

        <button
          type="button"
          className={styles.fullscreenBtn}
          aria-label="Toggle fullscreen"
          disabled
        >
          <FullscreenIcon aria-hidden="true" />
        </button>
      </div>
    </footer>
  );
}
