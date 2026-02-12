export default function Resume() {
  return (
//     <section id="resume" className="glass section">
//       <h2>Resume</h2>

//       <p>Download my resume to know more about my skills and experience.</p>

//       <a
//         href="/resume.pdf"
//         target="_blank"
//         className="resume-btn"
//       >
//         Download Resume
//       </a>
//     </section>
//   );
// }


<section className="hero">
  <div className="section-card">

    <h2>Resume</h2>

    <p className="project">
      Download my resume to know more about my skills and experience.
    </p>

    <a href="/resume.pdf" download>
      <button className="resume-btn">
        Download Resume
      </button>
    </a>

  </div>
</section>
  );
}