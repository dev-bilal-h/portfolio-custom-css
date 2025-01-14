import "@/styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* Copyright section with dynamic year */}
        <p className="copyright">
          &copy; {new Date().getFullYear()} Bilal Hassan. All Rights Reserved.
        </p>
        <div className="links">
          {/* Link to GitHub profile */}
          <a
            href="https://github.com/dev-bilal-h"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            GitHub
          </a>
          {/* Link to LinkedIn profile */}
          <a
            href="https://www.linkedin.com/in/bilal-hassan-webdev"
            target="_blank"
            rel="noopener noreferrer"
            className="link"
          >
            LinkedIn
          </a>
          {/* Link to email */}
          <a href="mailto:siddiquibilal882@gmail.com" className="link">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
