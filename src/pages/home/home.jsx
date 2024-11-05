import "./footer.css";
import { About } from "../about/about";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { HRSpacer } from "../../components/spacer_divider/divider";
import { Knowledge } from "../knowledge/knowledge";
import { Work } from "../work/work";

export function Home() {
  return (
    <>
      <main>
        <Header />
        <HRSpacer />
        <About />
        <HRSpacer />
        <Knowledge />
        <Work />
      </main>
      <Footer />
    </>
  );
}
