import pic from "../assets/profile-pic.jpg";
import emailIcon from "../assets/icon-email.png";
import linkedInIcon from "../assets/icon-linkedin.png";
export default function Info() {
  return (
    <div className="main--info">
      <img src={pic} alt="profile-picture" />
      <div className="main--text">
        <h2 className="main--text__name">Clement Hakizimana</h2>
        <h3 className="main--text__role">Full stack Developer</h3>
        <h4 className="main--text__website">clementHakizimana.website</h4>
      </div>
      <div className="button">
        <button className="button--email">
          <span>
            <img src={emailIcon} alt="email-icon" />
          </span>
          Email
        </button>
        <button className="button--linkedIn">
          <span>
            <img src={linkedInIcon} alt="email-icon" />
          </span>
          LinkedIn
        </button>
      </div>
    </div>
  );
}
