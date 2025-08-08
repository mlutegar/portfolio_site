import React, {useContext} from "react";
import "./Works.scss";
import {works} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Works() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!works.display) {
    return null;
  }

  const WebsiteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
      <path d="M5.16699 19.375H25.8337" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M5.16699 11.625H25.8337" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.5 27.125C21.9203 27.125 27.125 21.9203 27.125 15.5C27.125 9.07969 21.9203 3.875 15.5 3.875C9.07969 3.875 3.875 9.07969 3.875 15.5C3.875 21.9203 9.07969 27.125 15.5 27.125Z"
        stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15.5003 26.8902L14.5778 27.7942C14.8206 28.0422 15.1532 28.1818 15.5003 28.1818C15.8473 28.1818 16.1798 28.0422 16.4228 27.7942L15.5003 26.8902ZM15.5003 4.10993L16.4228 3.2059C16.1798 2.95799 15.8473 2.81827 15.5003 2.81827C15.1532 2.81827 14.8206 2.95799 14.5776 3.2059L15.5003 4.10993ZM18.8586 15.5001C18.8586 19.5831 17.2271 23.2824 14.5778 25.9861L16.4228 27.7942C19.5263 24.6272 21.4419 20.286 21.4419 15.5001H18.8586ZM14.5776 5.01397C17.2271 7.71773 18.8586 11.4171 18.8586 15.5001H21.4419C21.4419 10.7141 19.5263 6.37295 16.4228 3.2059L14.5776 5.01397ZM12.1419 15.5001C12.1419 11.4171 13.7733 7.71773 16.4228 5.01397L14.5776 3.2059C11.4742 6.37295 9.55859 10.7141 9.55859 15.5001H12.1419ZM16.4228 25.9861C13.7733 23.2824 12.1419 19.5831 12.1419 15.5001H9.55859C9.55859 20.286 11.4743 24.6272 14.5778 27.7942L16.4228 25.9861Z"
        fill="black" />
    </svg>
  );

  const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
      <g clipPath="url(#clip0_47_130)">
        <path fillRule="evenodd" clipRule="evenodd"
              d="M12.5 0C19.4037 0 25 5.73741 25 12.8162C25 18.4774 21.4225 23.2799 16.4587 24.9762C15.825 25.1024 15.6 24.7022 15.6 24.361C15.6 23.9385 15.615 22.5585 15.615 20.8435C15.615 19.6485 15.215 18.8686 14.7663 18.4711C17.55 18.1536 20.475 17.0697 20.475 12.1472C20.475 10.7472 19.99 9.60478 19.1875 8.70728C19.3175 8.38353 19.7462 7.07994 19.065 5.31494C19.065 5.31494 18.0175 4.97153 15.6312 6.62903C14.6325 6.34528 13.5625 6.20251 12.5 6.19751C11.4375 6.20251 10.3688 6.34528 9.37125 6.62903C6.9825 4.97153 5.9325 5.31494 5.9325 5.31494C5.25375 7.07994 5.6825 8.38353 5.81125 8.70728C5.0125 9.60478 4.52375 10.7472 4.52375 12.1472C4.52375 17.0572 7.4425 18.1577 10.2188 18.4814C9.86125 18.8014 9.5375 19.366 9.425 20.1947C8.7125 20.5222 6.9025 21.089 5.7875 19.1302C5.7875 19.1302 5.12625 17.8988 3.87125 17.8088C3.87125 17.8088 2.6525 17.7926 3.78625 18.5876C3.78625 18.5876 4.605 18.9814 5.17375 20.4626C5.17375 20.4626 5.9075 22.7501 9.385 21.9751C9.39125 23.0463 9.4025 24.056 9.4025 24.361C9.4025 24.6997 9.1725 25.0962 8.54875 24.9774C3.58125 23.2837 0 18.4787 0 12.8162C0 5.73741 5.5975 0 12.5 0Z"
              fill="black" />
      </g>
      <defs>
        <clipPath id="clip0_47_130">
          <rect width="25" height="25" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="works-main" id="works">
        <div className="works-header">
          <h1 className="works-title">{works.title}</h1>
          <p className="works-subtitle">{works.subtitle}</p>
        </div>

        <div className="works-grid">
          {works.projects.map((project, i) => {
            const isWebsite = project.footerLink?.some(link => link.name === "Visitar Site");
            
            return (
              <div key={i} className="work-card">
                <div className="work-card-container">
                  <div
                    className="work-card-image"
                    style={{
                      background: `url(${project.image}) lightgray -0.186px 0px / cover no-repeat`
                    }}
                  ></div>
                  <h3 className="work-card-title">{project.projectName}</h3>
                  <p className="work-card-description">{project.projectDesc}</p>
                  <div className="work-card-icons">
                    {isWebsite ? <WebsiteIcon /> : <GithubIcon />}
                    {project.footerLink?.map((link, linkIndex) => (
                      <div
                        key={linkIndex}
                        className="work-icon-clickable"
                        onClick={() => openUrlInNewTab(link.url)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Fade>
  );
}