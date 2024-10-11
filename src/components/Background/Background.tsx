// import ValorantScreen from "../../assets/video/Valorant.mp4";
// import ValorantWallpaper from "../../assets/video/Valorant-2.mp4";
import BgScreen from "../../assets/image/background.jpg";

import "./Background.scss";

export default function Background() {
  return (
    <section className="Background">
      {/* <video autoPlay loop muted>
        <source src={ValorantWallpaper} type="video/mp4" />
      </video> */}
      <img src={BgScreen} />
    </section>
  );
}
