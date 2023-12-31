import IconShownImg from "/assets/SVG/eye-closed-svgrepo-com.svg";
import IconHiddenImg from "/assets/SVG/eye-watch-opened-public-svgrepo-com.svg";
import IconGitHubImg from "/assets/SVG/iconmonstr-github-1.svg";
import IconLinkedInImg from "/assets/SVG/iconmonstr-linkedin-3.svg";
import IconCVImg from "/assets/SVG/iconmonstr-cv-3.svg";

export const IconShown = () => {
  return <img src={IconShownImg} alt="show" />;
};

export const IconHidden = () => {
  return <img src={IconHiddenImg} alt="hide" />;
};

export const IconGitHub = () => {
  return <img src={IconGitHubImg} alt="Github" />;
};

export const IconLinkedIn = () => {
  return <img src={IconLinkedInImg} alt="LinkedIn" />;
};

export const IconCV = () => {
  return <img src={IconCVImg} alt="CV" />;
};
