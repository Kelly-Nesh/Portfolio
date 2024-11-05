import "./about.css"

export function About() {
  return (
    <section id="about">
      <div className="row justify-content-evenly">
        <div className="col-sm-6 col-md-5 d-flex">
          <div className="about heading">
            <h2 className="">About</h2>
            <h2>Kelly</h2>
          </div>
          <div className="about pic">
            <img src="assets/me2.jpg" alt="photo of kelly munene" />
          </div>
        </div>
        <hr className="divider d-md-none my-5" />
        <div className="col-sm-6 c0l-md-5">
          <p>Kelly Munene here, a software developer.</p>
          <p>
            Ever since I was little, I've been into computers. That early spark
            eventually blossomed into a love for coding late 2022. Now it's more
            than just a skill; it feels like I've discovered my true calling;
            like this is what I was meant to do!
          </p>
          <p>
            I love the energy of brainstorming with a team, but I also find
            focus and flow when coding solo.
          </p>
          <p>
            Outside of code, faith, in God, plays a big role in my life.
            Honesty, trust, and patience are my guiding lights, both in coding
            and navigating the daily grind.
          </p>
          <p>
            Stay tuned for a special "Meme Stash" section coming soon &dash;
            because let's face it, sometimes you need a side of laughter before
            you get back to finding the missing semicolon and unmatched
            parenthesis😂.
          </p>

          <p>
            Feel free to reach out if you have any project ideas or just wanna
            talk about coding (or memes!).
          </p>
          <a
            href="assets/kellymunene.pdf"
            download="Kelly_Munene_CV-leetech"
            className="btn btn-primary"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}
