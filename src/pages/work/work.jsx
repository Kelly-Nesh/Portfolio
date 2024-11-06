import "./work.css";

export function Work() {
  return (
    <section id="work">
      <h2>My Work</h2>
      <div className="row flex-wrap">
        <div className="col-sm-6 col-md-4">
          <div className="project">
            <div className="pr-img">
              <img src="assets/sekucu.png" alt="sekucu website" />
            </div>
            <div className="pr-name">
              <h4>SEKU Christian Union</h4>
              <p>Campus Christian Union Website</p>
              <a
                href="https://sekucu.org"
                target="_blank"
                role="button"
                title="view project"
                className="d-inline-block mx-auto btn btn-outline-info"
              >
                View
              </a>
            </div>
          </div>
          <div className="project">
            <div className="pr-img">
              <img src="assets/uzima.png" alt="sekucu website" />
            </div>
            <div className="pr-name">
              <h4>Uzima Center</h4>
              <a
                href="https://uzimachurch.leetech.top"
                target="_blank"
                role="button"
                title="view project"
                className="d-inline-block mx-auto btn btn-outline-info"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="project">
            <div className="pr-img">
              <img
                src="./assets/screenlyrics.png"
                alt="screenlyrics-lyrics website"
              />
            </div>
            <div className="pr-name text-center">
              <h4>Gospel Lyrics Website</h4>
              <a
                href="https://screenlyrics.leetech.top"
                target="_blank"
                role="button"
                title="view project"
                className="d-inline-block mx-auto btn btn-outline-info"
              >
                View
              </a>
            </div>
          </div>
          <div className="project">
            <div className="pr-img">
              <img src="assets/convo.png" alt="convo products" />
            </div>
            <div className="pr-name">
              <h4>Convo Africa</h4>
              <p className="text-center">
                I assist in creating product pages and making changes to the
                website
              </p>
              <a
                href="https://convo.africa"
                target="_blank"
                role="button"
                title="view project"
                className="d-inline-block mx-auto btn btn-outline-info"
              >
                View
              </a>
            </div>
          </div>
        </div>
        <div className="col-sm-6 col-md-4">
          <div className="project">
            <div className="pr-img">
              <img src="assets/fairprice.png" alt="fairprice salon website" />
            </div>
            <div className="pr-name">
              <h4>Fairprice Salon</h4>
              <a
                href="https://fairpricesalon.leetech.top"
                target="_blank"
                role="button"
                title="view project"
                className="d-inline-block mx-auto btn btn-outline-info"
              >
                View
              </a>
            </div>
          </div>
          <div className="project">
            <div className="pr-img">
              <img src="./assets/branch-chat.png" alt="CS Webapp" />
            </div>
            <div className="pr-name text-center">
              <h4>Customer Service Messaging Webapp</h4>
              <p>With a livechat feature</p>
              <a
                href="https://github.com/Kelly-Nesh/Branch-Chat"
                target="_blank"
                role="button"
                title="view project"
                className="d-inline-block mx-auto btn btn-outline-info"
              >
                View
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
