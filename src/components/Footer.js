function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        {/* LEFT COLUMN: Get in touch + Social icons */}
        <div style={styles.column}>
          <div style={styles.footerSectionTitle}>Get in touch</div>
          <div style={styles.contactDetails}>
            <div>support@amrutam.global</div>
            <div>Amrutam Pharmaceuticals Pvt Ltd.,</div>
            <div>chitrapur ganj, Nai Sadak, Lashkar, Gwalior - 474001</div>
            <div>+91 9713171999</div>
          </div>
          <div style={styles.socials}>
            {/* Replace # with your real URLs and use actual SVGs or icons as needed */}
            <a href="#" style={styles.socialIcon}>🌐</a>
            <a href="#" style={styles.socialIcon}>🎥</a>
            <a href="#" style={styles.socialIcon}>🐦</a>
            <a href="#" style={styles.socialIcon}>📸</a>
            <a href="#" style={styles.socialIcon}>💼</a>
          </div>
        </div>

        {/* CENTER COLUMN: Information links */}
        <div style={styles.column}>
          <div style={styles.footerSectionTitle}>Information</div>
          <ul style={styles.linkList}>
            <li><a href="#" style={styles.footerLink}>About Us</a></li>
            <li><a href="#" style={styles.footerLink}>Terms and Conditions</a></li>
            <li><a href="#" style={styles.footerLink}>Privacy Policy</a></li>
            <li><a href="#" style={styles.footerLink}>Privacy Policy for Mobile Apps</a></li>
            <li><a href="#" style={styles.footerLink}>Shipping, return and cancellation Policy</a></li>
            <li><a href="#" style={styles.footerLink}>International Delivery</a></li>
            <li><a href="#" style={styles.footerLink}>For Businesses, Hotels, and Resorts</a></li>
          </ul>
        </div>

        {/* RIGHT COLUMN: Newsletter */}
        <div style={styles.column}>
          <div style={styles.footerSectionTitle}>
            Subscribe to our Newsletter and join Amrutam Family today!
          </div>
          <form style={styles.newsletterForm} onSubmit={e => e.preventDefault()}>
            <input
              type="email"
              placeholder="Your Email Address"
              style={styles.newsletterInput}
              required
            />
            <button type="submit" style={styles.newsletterBtn}>Subscribe</button>
          </form>
        </div>
      </div>
      <div style={styles.copyright}>
        © {new Date().getFullYear()} Amrutam. All rights reserved.
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    background: "#f2f7ee",
    color: "#23312b",
    padding: "2.5rem 0 0 0",
    borderTop: "1px solid #ece7d3",
    marginTop: 80,
    fontFamily: "'Inter', sans-serif",
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
    maxWidth: 1200,
    margin: "0 auto",
    justifyContent: "space-between",
    gap: 32,
    padding: "0 2vw 2.5rem 2vw",
  },
  column: {
    flex: "1 1 260px",
    minWidth: 220,
    maxWidth: 370,
    marginBottom: 16,
  },
  footerSectionTitle: {
    fontWeight: 700,
    marginBottom: 16,
    fontSize: 18,
    color: "#19532d",
  },
  contactDetails: {
    fontSize: 15,
    lineHeight: 1.5,
    marginBottom: 16,
  },
  linkList: {
    padding: 0,
    margin: 0,
    listStyle: "none",
    fontSize: 15,
    color: "#35643a",
  },
  footerLink: {
    color: "#3c4d31",
    textDecoration: "none",
    display: "block",
    marginBottom: 9,
    transition: "color 0.2s",
  },
  socials: {
    margin: "15px 0 0 0",
    display: "flex",
    gap: "12px",
  },
  socialIcon: {
    fontSize: 22,
    color: "#19532d",
    textDecoration: "none",
    padding: "4px",
    borderRadius: "50%",
    background: "#eaffd3",
    display: "inline-block",
  },
  newsletterForm: {
    display: "flex",
    gap: 0,
    marginTop: 12
  },
  newsletterInput: {
    flex: 1,
    padding: "10px 16px",
    border: "1.3px solid #c5e0b6",
    borderRadius: "25px 0 0 25px",
    outline: "none",
    fontSize: 14,
    background: "#fff",
  },
  newsletterBtn: {
    background: "#2d7a36",
    color: "#fff",
    border: "none",
    padding: "10px 25px",
    borderRadius: "0 25px 25px 0",
    cursor: "pointer",
    fontWeight: 600,
    fontSize: 14,
  },
  copyright: {
    textAlign: "center",
    fontSize: 13,
    color: "#4c6145",
    padding: "0.6rem 0 1rem 0"
  }
};

export default Footer;

