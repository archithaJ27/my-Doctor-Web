function FeaturedSection() {
  const logos = ["TOI", "Travel+", "Livemint", "GQ", "Vogue", "YourStory", "30"];
  return (
    <section style={{ padding: "1.5rem 0", textAlign: "center" }}>
      <div style={{ fontWeight: 600 }}>Featured</div>
      <div style={{ marginTop: 12 }}>
        {logos.map(logo => (
          <span key={logo} style={{ margin: "0 15px", fontWeight: 500 }}>{logo}</span>
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;
