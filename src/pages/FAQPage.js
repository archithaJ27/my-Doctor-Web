import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FAQSection from "../components/FAQSection";

function FAQPage() {
  return (
    <>
      <Navbar />
      <main style={styles.main}>
        <h1 style={styles.heading}>Frequently Asked Questions</h1>
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}

const styles = {
  main: {
    minHeight: "78vh",
    padding: "54px 4vw 64px 4vw",
    background: "#f9faf7"
  },
  heading: {
    textAlign: "center",
    color: "#2d7a36",
    fontWeight: 700,
    fontSize: "2rem",
    marginBottom: 36,
    fontFamily: "'Inter', sans-serif"
  }
};

export default FAQPage;
