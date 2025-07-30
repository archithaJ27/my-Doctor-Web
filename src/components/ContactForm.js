function ContactForm() {
  return (
    <form style={styles.form} onSubmit={e => e.preventDefault()}>
      <input placeholder="Your Name" type="text" required style={styles.input} />
      <input placeholder="Your Email" type="email" required style={styles.input} />
      <textarea placeholder="Your Message" required rows={5} style={styles.textarea} />
      <button type="submit" style={styles.button}>Send Message</button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: 440,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 19,
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 2px 12px #e5e9e9",
    padding: "34px 32px"
  },
  input: {
    border: "1.2px solid #d6e4cc",
    borderRadius: 6,
    padding: "14px 13px",
    fontSize: "1rem",
    fontFamily: "'Inter', sans-serif"
  },
  textarea: {
    border: "1.2px solid #d6e4cc",
    borderRadius: 6,
    padding: "14px 13px",
    fontSize: "1rem",
    fontFamily: "'Inter', sans-serif"
  },
  button: {
    background: "linear-gradient(90deg, #4bbb7f 40%, #2d7a36 100%)",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1.1rem",
    border: "none",
    borderRadius: 8,
    padding: "13px 34px",
    marginTop: 10,
    fontFamily: "'Inter', sans-serif",
    cursor: "pointer"
  }
};

export default ContactForm;
