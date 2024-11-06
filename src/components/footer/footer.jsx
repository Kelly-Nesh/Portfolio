import "./footer.css";

export function Footer() {
  return (
    <footer id="footer" className="mt-sm-3 p-3">
      <section id="contact" className="row mb-3">
        <div className="col-sm-9">
          <h3>Let's make something together</h3>
          <h3>Start a conversation</h3>
        </div>
        <div className="col-sm-3 text-center text-sm-end">
          <a
            href="mailto:cs.kelly.nesh@gmail.com?subject=Let's talk"
            className="btn btn-success text-capitalize"
          >
            contact me
          </a>
        </div>
      </section>
      <div className="row pt-sm-3">
        <div className="col-3 py-3 gap-2 h4">
          <a href="https://github.com/Kelly-Nesh">
            <img
              className="icon"
              src="assets/icons/gh.png"
              loading="lazy"
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/kelly-munene">
            <img
              className="icon"
              src="assets/icons/linkedin.png"
              loading="lazy"
            ></img>
          </a>
          <a href="mailto:munenekelly001@gmail.com">
            <img
              className="icon"
              src="assets/icons/gmail.png"
              loading="lazy"
            ></img>
          </a>
          <a href="tel:+254115510325">
            <img
              className="icon"
              src="assets/icons/phone.png"
              loading="lazy"
            ></img>
          </a>
        </div>
        <div className="col-9 col-sm-6 text-center align-self-center">
          <h4>Kelly Munene || Leetech</h4>
          &copy; 2024 <a href="https://leetech.top">leetech.top</a>. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
