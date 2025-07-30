// src/components/DownloadAppSection.js
function DownloadAppSection() {
  return (
    <section style={styles.section}>
      <div style={styles.contentRow}>
        <div style={styles.left}>
          <h2 style={styles.title}>
            Get Started Today —<br />
            Download the App Now!
          </h2>
          <p style={styles.subtitle}>
            Simplify consultations, manage patients, and <br />
            grow your practice—all in one place.
          </p>
          <ul style={styles.features}>
            <li>
              <span style={styles.featureIcon}>🌱</span>
              Build Trust and Community with Forum
            </li>
            <li>
              <span style={styles.featureIcon}>💰</span>
              Earn More with Pay Per Conversation
            </li>
            <li>
              <span style={styles.featureIcon}>📞</span>
              Attract Patients with 5-Minute Free Call
            </li>
            <li>
              <span style={styles.featureIcon}>⚡</span>
              Instant Access to Your Earnings with Wallet
            </li>
          </ul>
          <div style={styles.storesRow}>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                style={styles.storeBadge}
                height={45}
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Download on the App Store"
                style={styles.storeBadge}
                height={45}
              />
            </a>
          </div>
        </div>
        <div style={styles.mockupBox}>
          <img
            src="https://via.placeholder.com/240x440?text=App+Mockup"
            alt="App screen mockup"
            style={styles.mockupImage}
          />
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#f2f7ee",
    padding: "64px 3vw",
    fontFamily: "'Inter', sans-serif",
  },
  contentRow: {
    maxWidth: 1200,
    margin: "0 auto",
    display: "flex",
    gap: 74,
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  left: {
    flex: 1.1,
    minWidth: 290,
    maxWidth: 540,
  },
  title: {
    fontSize: "2rem",
    fontWeight: 700,
    color: "#2d7a36",
    marginBottom: 12,
    lineHeight: 1.27,
  },
  subtitle: {
    color: "#586161",
    fontSize: 15.8,
    margin: "0 0 22px 0",
    fontWeight: 500,
  },
  features: {
    listStyle: "none",
    padding: 0,
    margin: "0 0 38px",
    fontSize: 15.6,
    color: "#425e37",
    fontWeight: 500,
  },
  featureIcon: {
    marginRight: 10,
    fontSize: 21,
    color: "#2d7a36",
    verticalAlign: "middle",
  },
  storesRow: {
    display: "flex",
    gap: 18,
    alignItems: "center",
    marginTop: 14,
  },
  storeBadge: {
    height: 44,
    maxWidth: 160,
    marginRight: 7,
    borderRadius: 6,
    background: "#fffefa",
    boxShadow: "0 2px 7px #e4f6e6",
    border: "1px solid #d7efcc",
  },
  mockupBox: {
    flex: 1,
    minWidth: 240,
    maxWidth: 340,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  mockupImage: {
    width: 240,
    height: 440,
    borderRadius: 26,
    boxShadow: "0 10px 32px #d1e6c799",
    background: "#fff",
    border: "1.7px solid #e5f2e0",
    objectFit: "cover",
  },
};

export default DownloadAppSection;
