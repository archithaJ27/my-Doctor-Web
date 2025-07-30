function ForumSection() {
  return (
    <section style={styles.section}>
      <div style={styles.row}>
        {/* Forum Description Block */}
        <div style={styles.colLeft}>
          <h2 style={styles.title}>Forum for Meaningful Connections</h2>
          <p style={styles.desc}>
            We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients, answer questions,
            while the <b>‘Thoughts’</b> section allows you to share deeper Ayurvedic wisdom.
          </p>
          {/* Simulated forum card UI, like in screenshot */}
          <div style={styles.forumCard}>
            <div style={styles.forumHeader}>Forum</div>
            <div style={styles.qaRow}>
              <div style={styles.forumAvatar} />
              <div>
                <b>Dr. Naimin Saty</b>
                <div style={styles.forumSub}>
                  Thought: Can Ayurveda help with stress and mental health issues?
                </div>
              </div>
            </div>
            <hr style={styles.hr} />
            <div style={styles.singleQuestion}>
              <b>Anonymous</b>
              <div style={styles.forumQ}>
                Can Ayurveda help with stress and mental health issues?<br />
                <span style={{ color: "#8e8e8e", fontSize: 14 }}>
                  Ayurveda can help with stress, anxiety, and emotional balance using medicine and therapies...
                </span>
              </div>
            </div>
          </div>
        </div>
        {/* Session Mode Block */}
        <div style={styles.colRight}>
          <h2 style={styles.title}>Choose Your Session Mode</h2>
          <div style={styles.desc}>
            Amrutam offers you to connect with patients via <b>Instant Chat</b>, <b>Instant Call</b>,
            or <b>Schedule Video Call</b>. Each option offers flexibility and personalized care to suit individual needs.
          </div>
          <div style={styles.sessionCard}>
            <div style={styles.sessionRow}>
              <button style={styles.sessBtn}>Free Call<br /><span style={styles.sessSub}>₹15/5 Min</span></button>
              <button style={styles.sessBtn}>Video<br /><span style={styles.sessSub}>₹15/5 Min</span></button>
              <button style={styles.sessBtn}>Chat<br /><span style={styles.sessSub}>₹15/5 Min</span></button>
            </div>
            <div style={styles.patientInfo}>
              <div style={{ fontSize: 13, color: "#888" }}>Hi Dr. Prema, here are my details:</div>
              <div style={styles.ptRow}><b>Name:</b> Geetanjali Shah</div>
              <div style={styles.ptRow}><b>Age:</b> 34 &nbsp;&nbsp; <b>Gender:</b> Female</div>
              <div style={styles.ptRow}><b>Height:</b> 134 cm &nbsp;&nbsp; <b>Weight:</b> 64 kg</div>
              <div style={styles.ptRow}><b>Concern:</b> Immunity</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#fff6e9",
    padding: "56px 2vw 46px 2vw",
    fontFamily: "'Inter', sans-serif"
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 40,
    maxWidth: 1200,
    margin: "0 auto"
  },
  colLeft: {
    flex: "1 1 380px",
    minWidth: 350,
    maxWidth: 540,
  },
  colRight: {
    flex: "1 1 370px",
    minWidth: 340,
    maxWidth: 420,
  },
  title: {
    fontSize: 23,
    color: "#2d7a36",
    fontWeight: 700,
    marginBottom: 16,
  },
  desc: {
    color: "#544c31",
    fontSize: 15.4,
    marginBottom: 20,
    lineHeight: 1.7,
  },
  /* Forum card */
  forumCard: {
    background: "#f2f7ee",
    borderRadius: 14,
    boxShadow: "0 2px 10px #e1efd3",
    padding: 22,
    marginTop: 15,
    maxWidth: 400,
  },
  forumHeader: {
    color: "#6bb283",
    fontWeight: 700,
    marginBottom: 14,
    fontSize: 17,
    letterSpacing: 1,
  },
  qaRow: {
    display: "flex", gap: 13, alignItems: "center", marginBottom: 7,
  },
  forumAvatar: {
    width: 36, height: 36, borderRadius: "50%",
    background: "#d2ecd5", display: "inline-block"
  },
  forumSub: {
    fontSize: 14.2,
    color: "#325e35",
    background: "#eaffd3",
    padding: "3.5px 9px",
    borderRadius: "8px",
    marginTop: 2
  },
  singleQuestion: { marginTop: 15 },
  forumQ: {
    marginTop: 7,
    fontSize: 15,
    fontWeight: 500
  },
  hr: { margin: "10px 0 0 0", borderColor: "#eee" },
  /* Session mode card */
  sessionCard: {
    background: "#f2f7ee",
    borderRadius: 15,
    boxShadow: "0 2px 10px #e0f3e3",
    padding: "20px 24px",
    marginTop: 17,
    maxWidth: 340,
  },
  sessionRow: {
    display: "flex",
    gap: 10,
    justifyContent: "space-between",
    marginBottom: 20,
    marginTop: 4,
  },
  sessBtn: {
    flex: 1,
    background: "#eaffd3",
    color: "#2d7a36",
    border: "none",
    borderRadius: 7,
    fontWeight: 700,
    fontSize: 15,
    padding: "10px 0 5px 0",
    margin: "0 2px",
    minWidth: 87,
    minHeight: 48,
    cursor: "pointer",
    outline: "none"
  },
  sessSub: {
    fontWeight: 500,
    color: "#678b68",
    fontSize: 13,
    display: "block",
    marginTop: 4,
  },
  patientInfo: {
    marginTop: 13,
    background: "#fff",
    borderRadius: 10,
    fontSize: 15,
    color: "#426044",
    padding: "12px 14px",
    boxShadow: "0 1px 6px #e5eed4",
  },
  ptRow: { marginBottom: 2, fontSize: 15 },
};

export default ForumSection;
