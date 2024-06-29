import React, { ChangeEvent } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import styles from "./DarkMode.module.scss";

const DarkMode: React.FC = () => {
  const preferenceDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  const preferenceLight = window.matchMedia(
    "(prefers-color-scheme: light)"
  ).matches;

  const setDarkMode = (): void => {
    document.querySelector("body")?.setAttribute("data-theme", "dark");
    localStorage.setItem("mode", "dark");
  };

  const setLightMode = (): void => {
    document.querySelector("body")?.setAttribute("data-theme", "light");
    localStorage.setItem("mode", "light");
  };

  const selectedMode: string | null = localStorage.getItem("mode");

  if (preferenceDark) {
    setDarkMode();
  }

  if (preferenceLight) {
    setLightMode();
  }

  if (selectedMode === "dark") {
    setDarkMode();
  }

  if (selectedMode === "light") {
    setLightMode();
  }

  const onChangeMode = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.checked) setDarkMode();
    else setLightMode();
  };

  return (
    <div className={styles.toggleContainer}>
      <input
        type="checkbox"
        id="darkMode-toggle"
        className={styles.darkModeToggle}
        onChange={onChangeMode}
        defaultChecked={selectedMode === "dark"}
      />
      <label htmlFor="darkMode-toggle">
        <MdDarkMode className={styles.darkIcon} />
        <MdOutlineLightMode className={styles.lightIcon} />
      </label>
    </div>
  );
};

export default DarkMode;
