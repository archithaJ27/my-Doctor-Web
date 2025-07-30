function HowItWorks() {
  const steps = [
    {
      title: "Get your referral code",
      desc: "Contact us to receive your unique referral code and start the onboarding process."
    },
    {
      title: "Register on Amrutam",
      desc: "Sign up on the Amrutam Doctors app or website to join our specialist network."
    },
    {
      title: "Complete KYC",
      desc: "Fill in your details and upload the required documents for verification."
    },
    {
      title: "Start consulting",
      desc: "Once verified, begin offering consultations and helping patients."
    }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.headline}>Join Our Circle of Care</h2>
      <div style={styles.subhead}>
        Becoming a part of Amrutam is simple
      </div>
      <div style={styles.stepsRow}>
        {steps.map((step, idx) => (
          <div style={styles.stepCard} key={idx}>
            <div style={styles.stepNumber}>{idx + 1}</div>
            <div style={styles.stepTitle}>{step.title}</div>
            <div style={styles.stepDesc}>{step.desc}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#fff6e9",
    padding: "52px 2vw 52px 2vw",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif"
  },
  headline: {
    fontSize: "2rem",
    color: "#2d7a36",
    fontWeight: 700,
    marginBottom: 10,
    letterSpacing: 0.4
  },
  subhead: {
    color: "#4a665b",
    fontSize: 16.5,
    marginBottom: 28,
    fontWeight: 500
  },
  stepsRow: {
    display: "flex",
    gap: 32,
    justifyContent: "center",
    alignItems: "stretch",
    flexWrap: "wrap",
    marginTop: 20
  },
  stepCard: {
    background: "#fff",
    borderRadius: 14,
    boxShadow: "0 2px 12px #efe9d699",
    padding: "30px 22px",
    minWidth: 204,
    maxWidth: 250,
    flex: "1 1 220px",
    margin: "10px 0"
  },
  stepNumber: {
    background: "#eaffd3",
    color: "#2d7a36",
    fontWeight: 700,
    borderRadius: "50%",
    width: 36,
    height: 36,
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 19,
    marginBottom: 13,
    marginTop: -9
  },
  stepTitle: {
    fontWeight: 700,
    fontSize: 16,
    color: "#326a33",
    marginBottom: 9,
    marginTop: 4,
    letterSpacing: 0.2
  },
  stepDesc: {
    color: "#646e68",
    fontSize: 14.2,
    marginTop: 0,
    lineHeight: 1.5
  }
};

export default HowItWorks;
