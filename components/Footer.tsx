import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer: NextPage = () => {
  return <footer className={styles.footer}>Michal © 2022</footer>;
};

export default Footer;
