import styles from "./buttondownForm.module.css";

export const ButtondownForm = () => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form
        action="https://buttondown.com/api/emails/embed-subscribe/smspearman"
        method="post"
        className={styles.embeddableButtondownForm}
      >
        <label htmlFor="bd-email">Enter your email</label>
        <input type="email" name="email" id="bd-email" />
        <input type="submit" value="Subscribe" />
        <p>
          <a href="https://buttondown.com/refer/smspearman" target="_blank">
            Powered by Buttondown.
          </a>
        </p>
      </form>
    </div>
  );
};
