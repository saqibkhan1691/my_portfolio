export default function Navbar({ setPage }) {
  return (
    <nav className="navbar">

      <h2 className="logo">Saqib Khan</h2>

      <div className="nav-links">

        <button onClick={() => setPage("home")}>Home</button>

        <button onClick={() => setPage("projects")}>Projects</button>

        <button onClick={() => setPage("resume")}>Resume</button>

        <button onClick={() => setPage("contact")}>Contact</button>

      </div>

    </nav>
  );
}
