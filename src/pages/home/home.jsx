import { About } from "../about/about";
import { Footer } from "../../components/footer/footer";
import { Header } from "../../components/header/header";
import { Divider, HRSpacer } from "../../components/spacer_divider/divider";
import { Knowledge } from "../knowledge/knowledge";
import { Work } from "../work/work";
import { Spacer } from "../../components/spacer_divider/spacer";

export function Home() {
  return (
    <div className="container-xl">
      <main>
        <Header />
        <HRSpacer />
        <About />
        <div className="clearfix"></div>
        <HRSpacer />
        <Knowledge />
        <HRSpacer />
        <Work />
        <Divider />
        <Spacer/>
      </main>
      <Footer />
    </div>
  );
}
