import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

function SignInButton() {
  const isUserLogIn = true;
  return isUserLogIn ? (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#04d361" />
      Eric Antonio
      <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button type="button" className={styles.singInButton}>
      <FaGithub color="#eba417" />
      Sing In with GitHub
    </button>
  );
}

export default SignInButton;
