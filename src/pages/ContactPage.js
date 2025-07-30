import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

function ContactPage() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.sub}>
          Have a question, feedback, or need support? Fill out the form below or reach us directly at <b>support@amrutam.global</b>
        </p>
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    minHeight: "75vh",
    padding: "54px 4vw 64px 4vw",
    background: "#f9faf7",
    fontFamily: "'Inter', sans-serif"
  },
  heading: {
    textAlign: "center",
    color: "#2d7a36",
    fontWeight: 700,
    fontSize: "2rem",
    marginBottom: 10
  },
  sub: {
    textAlign: "center",
    color: "#586161",
    fontSize: 16,
    marginBottom: 36
  }
};

export default ContactPage;
