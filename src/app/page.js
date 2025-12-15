import Heropage from "./components/Heropage";
import SupportCards from "./components/SupportCards";
import TeamPage from "./components/TeamPage";
import SFRCTpage from "./components/SFRCTpage";
import Middlesection from "./components/Middlesection";
import GalleryPage from "./components/Gallerypage";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <div>
    <Heropage/>
      <SupportCards />
      <TeamPage/>
      <SFRCTpage/>
      <Middlesection/>
      <GalleryPage/>
      <Footer/>

    </div>
  );
}
