import twitterIcon from "../assets/twitter-icon.png";
import facebookIcon from "../assets/Facebook-icon.png";
import instagramIcon from "../assets/Instagram-icon.png";
import githubIcon from "../assets/Github-icon.png";

export default function Footer() {
  return (
    <div className="footer">
      <div className="icon">
        <img src={twitterIcon} alt="twitter-icon" />
        <img src={facebookIcon} alt="facebook-icon" />
        <img src={instagramIcon} alt="instagram-icon" />
        <img src={githubIcon} alt="github-icon" />
      </div>
    </div>
  );
}
