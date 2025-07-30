import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.navLinksContainer}>
        <NavLink 
          to="/" 
          className="nav-link" 
          style={({ isActive }) => ({
            ...styles.link,
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#2d7a36" : "#333"
          })}
        >
          Home
        </NavLink>
        <NavLink 
          to="/faq" 
          className="nav-link" 
          style={({ isActive }) => ({
            ...styles.link,
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#2d7a36" : "#333"
          })}
        >
          FAQ
        </NavLink>
        <NavLink 
          to="/contact" 
          className="nav-link" 
          style={({ isActive }) => ({
            ...styles.link,
            fontWeight: isActive ? "bold" : "normal",
            color: isActive ? "#2d7a36" : "#333"
          })}
        >
          Contact
        </NavLink>
        {/* <NavLink to="/contact" className="nav-link">Contact</NavLink> */}

      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",  // Align nav items to the right
    padding: "1rem 2rem",
    backgroundColor: "#f9faf7",  // Light background, change as needed
    boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)"
  },
  navLinksContainer: {
    display: "flex",
    gap: "2rem",    // Spacing between buttons/links
    alignItems: "center"
  },
  link: {
    textDecoration: "none",
    fontSize: "1.1rem",
    color: "#333",
    cursor: "pointer",
    transition: "color 0.2s ease"
  }
};

export default Navbar;



