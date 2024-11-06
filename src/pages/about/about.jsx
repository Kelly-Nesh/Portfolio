import "./about.css"
import me2 from "/src/assets/me2.jpg"
import { Divider } from "../../components/spacer_divider/divider";

export function About() {
  return (
    <section id="about">
      <div className="">
        <div className="col-sm-6 col-md-5 d-flex float-sm-start me-sm-4">
          <div className="about heading">
            <h2 className="">About</h2>
            <h2>Kelly</h2>
          </div>
          <div className="about pic ">
            <img src={me2} alt="photo of kelly munene" className="rounded-pill img-border"/>
          </div>
        </div>
        <Divider className="d-sm-none" />
        <div className="">
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
