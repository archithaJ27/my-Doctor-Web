function WhyChooseUs() {
  return (
    <section style={styles.main}>
      <h2 style={styles.title}>Why Doctors Choose Us?</h2>
      <div style={styles.sub}>
        Unlock the Benefits of Smarter Healthcare Management and Patient Care
      </div>
      <div style={styles.flexRow}>
        <div style={styles.callCardWrap}>
          <div style={styles.callCircle}><span role="img" aria-label="Phone">📞</span></div>
          <div style={styles.doctorCard}>
            <img
              src="data:image/jpeg;base64,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"
              alt="Doctor"
              style={styles.avatar}
            />
            <div>
              <div style={{ fontWeight: 600 }}>Dr. Prema Narang</div>
              <div style={{ color: "#779a7e", fontSize: 13 }}>Gynecology + 2 others</div>
              <div style={{ color: "#afafaf", fontSize: 12 }}>7 years of Experience</div>
            </div>
          </div>
          <div style={styles.connectingBox}>
            <div style={{fontWeight:600}}>Connecting...</div>
            <div style={{fontSize:13, color:"#2d7a36", marginTop:2}}>
              You will receive a call shortly from <span style={{fontWeight:500}}>+91 0123-456-789</span>
              <br />
              Pick up the phone to start your free 5-min session.
            </div>
          </div>
        </div>
        <div style={styles.infoBox}>
          <div style={styles.highlight}>Instant FREE 5-Mins Call</div>
          <div style={styles.infoText}>
            We understand the importance of building trust with your patients.
            That’s why Amrutam offers a <b>free 5–minute call</b>, helping you connect instantly and foster lasting patient relationships with ease.
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  main: {
    background: "#f8fbf3",
    padding: "58px 0 46px",
    textAlign: "center"
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#2d7a36",
    marginBottom: "6px"
  },
  sub: {
    color: "#4a665b",
    fontWeight: 500,
    marginBottom: "38px",
    fontSize: "1.07rem",
  },
  flexRow: {
    display: "flex",
    justifyContent: "center",
    gap: "46px",
    flexWrap: "wrap",
    alignItems: "flex-start"
  },
  callCardWrap: {
    background: "#fff",
    borderRadius: 22,
    boxShadow: "0 2px 18px #ceddce44",
    padding: 30,
    minWidth: 300,
    maxWidth: 350,
    marginBottom: 20
  },
  callCircle: {
    width: 46,
    height: 46,
    borderRadius: "50%",
    background: "#f2f7ee",
    margin: "0 auto 22px auto",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 21
  },
  doctorCard: {
    display: "flex",
    gap: 16,
    background: "#f8fbf3",
    borderRadius: 14,
    padding: "10px 10px",
    marginBottom: 16,
    alignItems: "center"
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: "50%",
    objectFit: "cover"
  },
  connectingBox: {
    background: "#eaffd3",
    borderRadius: 12,
    padding: "14px",
    fontSize: "1rem",
    marginTop:6,
    color: "#215027"
  },
  infoBox: {
    textAlign: "left",
    background: "#fff",
    borderRadius: 18,
    padding: "38px 40px 30px 40px",
    minWidth: 320,
    boxShadow: "0 2px 20px #c6edc066",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    maxWidth: 354
  },
  highlight: {
    fontSize: "1.24rem",
    fontWeight: 700,
    color: "#2d7a36",
    marginBottom: 12,
    background: "#eaffd3",
    borderRadius: 7,
    padding: "4px 11px 4px 7px",
    display: "inline-block"
  },
  infoText: {
    fontSize: "1.07rem",
    color: "#405a46"
  }
};

export default WhyChooseUs;
