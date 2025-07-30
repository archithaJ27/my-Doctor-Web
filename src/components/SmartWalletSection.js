function SmartWalletSection() {
  return (
    <section style={styles.section}>
      <div style={styles.row}>
        {/* Smart Wallet */}
        <div style={styles.card}>
          <h2 style={styles.title}>Smart Wallet</h2>
          <p style={styles.desc}>
            We understand the need for seamless transactions. With Amrutam Wallet, you can easily withdraw payments, and for your security, a one-time password is sent to your registered mobile number during withdrawals.
          </p>
          <div style={styles.walletBox}>
            <div style={styles.walletRow}>
              <span style={styles.walletLabel}>Amrutam Account</span>
              <span style={styles.walletAmount}>₹12,000.00</span>
            </div>
            <button style={styles.walletBtn}>Request Withdrawal</button>
            <div style={styles.walletRecent}>
              <div style={{ fontWeight: 500, color: "#135222" }}>Recent Withdrawals</div>
              <div style={{ fontSize: 14, color: "#4f6643" }}>28th July 2024</div>
              <div style={{ fontWeight: 600, color: "#2d7a36" }}>₹44,000.00</div>
            </div>
          </div>
        </div>

        {/* Flexible Work Timing */}
        <div style={styles.card}>
          <h2 style={styles.title}>Flexible Work Timing</h2>
          <p style={styles.desc}>
            We recognize the importance of managing your time. With the availability toggle in the doctor’s app, you control when patients can book consultations, ensuring a balanced and stress-free practice.
          </p>
          <div style={styles.timingBox}>
            <div style={styles.doctorCard}>
              <img
                src="https://via.placeholder.com/44x44?text=Dr"
                alt="Doctor"
                style={styles.avatar}
              />
              <div style={{ marginLeft: 10 }}>
                <div style={{ fontWeight: 600, color: "#2d7a36" }}>Dr. Prerna Narang</div>
                <div style={{ fontSize: 13, color: "#386d42" }}>Max Face-to-Face Visits</div>
                <div style={{ fontSize: 12, color: "#888" }}>2 Years Experience</div>
              </div>
            </div>
            <div style={styles.flexRow}>
              <div style={styles.timingStat}>
                <div style={{ fontWeight: 600, color: "#2d7a36" }}>Available</div>
                <div style={{ color: "#235222" }}>4.8 &#9733;</div>
              </div>
              <div style={styles.timingStat}>
                <div style={{ fontWeight: 600, color: "#2d7a36" }}>Total Consults</div>
                <div style={{ color: "#235222" }}>238</div>
              </div>
            </div>
            <div style={styles.availabilityBox}>
              <span style={{ color: "#6bb283", fontWeight: 600 }}>✅ Available</span> &nbsp;|&nbsp;
              <span style={{ color: "#e6a000", fontWeight: 600 }}>⏰ Next Slot: 5pm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#faf8ee",
    padding: "54px 2vw 50px 2vw",
    fontFamily: "'Inter', sans-serif"
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 48,
    maxWidth: 1200,
    margin: "0 auto"
  },
  card: {
    background: "#fff",
    borderRadius: 18,
    boxShadow: "0 2px 16px #e7efdc99",
    padding: "38px 36px 32px 36px",
    minWidth: 340,
    maxWidth: 420,
    flex: "1 1 360px",
    marginBottom: 18
  },
  title: {
    fontSize: "1.31rem",
    color: "#2d7a36",
    fontWeight: 700,
    marginBottom: 14
  },
  desc: {
    fontSize: 15,
    color: "#6b6d62",
    marginBottom: 28,
    lineHeight: 1.58
  },
  walletBox: {
    background: "#f2f7ee",
    padding: 18,
    borderRadius: 10,
    marginTop: 11,
  },
  walletRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 9
  },
  walletLabel: {
    color: "#799c78",
    fontWeight: 600,
    fontSize: 15
  },
  walletAmount: {
    color: "#2d7a36",
    fontWeight: 700,
    fontSize: 19
  },
  walletBtn: {
    margin: "10px 0 0 0",
    background: "#2d7a36",
    color: "#fff",
    border: "none",
    borderRadius: 8,
    padding: "9px 26px",
    fontWeight: 600,
    fontSize: 15,
    cursor: "pointer"
  },
  walletRecent: {
    marginTop: 20,
    paddingTop: 17,
    borderTop: "1px solid #e6edda",
    fontSize: 15,
    textAlign: "left"
  },
  timingBox: {
    background: "#f2f7ee",
    padding: 18,
    borderRadius: 10,
    marginTop: 11,
  },
  doctorCard: {
    display: "flex",
    alignItems: "center",
    gap: 13,
    paddingBottom: 13,
    borderBottom: "1px solid #e6edda",
    marginBottom: 13
  },
  avatar: {
    width: 44, height: 44, borderRadius: "50%", objectFit: "cover"
  },
  flexRow: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: 13,
    gap: 32,
  },
  timingStat: {
    background: "#eaffd3",
    borderRadius: 10,
    padding: "9px 17px",
    minWidth: 100,
    textAlign: "center",
    fontSize: 15
  },
  availabilityBox: {
    background: "#fff",
    borderRadius: 7,
    padding: "8px 13px",
    fontWeight: 600,
    fontSize: 13,
    color: "#2d7a36",
    marginTop: 7,
    textAlign: "center"
  }
};

export default SmartWalletSection;
