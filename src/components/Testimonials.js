function Testimonials() {
  const data = [
    {
      name: "Dr. Pooja Deshmukh, BAMS",
      stars: 5,
      text: "Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.",
      avatar: "https://via.placeholder.com/56x56?text=PD"
    },
    {
      name: "Dr. Rajesh Iyer, Ayurvedic Practitioner",
      stars: 5,
      text: "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them the trustworthy choice for those looking to embrace a healthier lifestyle.",
      avatar: "https://via.placeholder.com/56x56?text=RI"
    },
    {
      name: "Dr. Ananya Sharma, BAMS",
      stars: 5,
      text: "As an Ayurvedic doctor, I appreciate Amrutam’s commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I’ve personally seen positive results in my patients using their products.",
      avatar: "https://via.placeholder.com/56x56?text=AS"
    }
  ];

  return (
    <section style={styles.section}>
      <h2 style={styles.title}>What other Ayurvedic Doctors are Saying</h2>
      <div style={styles.subtitle}>
        Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!
      </div>
      <div style={styles.cardsRow}>
        {data.map((t, i) => (
          <div style={styles.card} key={i}>
            <img src={t.avatar} alt={t.name} style={styles.avatar} />
            <div style={styles.name}>{t.name}</div>
            <div style={styles.stars}>{"★".repeat(t.stars)}</div>
            <div style={styles.text}>"{t.text}"</div>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  section: {
    background: "#fdf9ea",
    padding: "70px 0 54px 0",
    textAlign: "center",
    fontFamily: "'Inter', sans-serif"
  },
  title: {
    color: "#2d7a36",
    fontWeight: 700,
    marginBottom: 16,
    fontSize: "2rem"
  },
  subtitle: {
    color: "#586161",
    fontSize: 16,
    maxWidth: 670,
    margin: "0 auto 28px auto",
    fontWeight: 500
  },
  cardsRow: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 30,
    marginTop: 5
  },
  card: {
    background: "#fffbea",
    borderRadius: 16,
    padding: "32px 22px 26px 22px",
    boxShadow: "0 2px 12px #f4ecd6",
    minWidth: 260,
    maxWidth: 330,
    flex: "1 1 260px",
    margin: "0 5px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: "50%",
    marginBottom: 14,
    objectFit: "cover"
  },
  name: {
    color: "#326a33",
    fontWeight: 700,
    marginBottom: 7,
    fontSize: 15.8,
    textAlign: "center"
  },
  stars: {
    color: "#ffb700",
    fontWeight: 700,
    fontSize: 17,
    marginBottom: 15,
    letterSpacing: "0.1em"
  },
  text: {
    color: "#5c685e",
    fontSize: 15,
    fontWeight: 500,
    fontStyle: "italic"
  }
};

export default Testimonials;
