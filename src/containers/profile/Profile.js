import React, {useState, useEffect, lazy, Suspense} from "react";
import {openSource} from "../../portfolio";
import Contact from "../contact/Contact";
import Loading from "../loading/Loading";

const renderLoader = () => <Loading />;
const GithubProfileCard = lazy(() =>
  import("../../components/githubProfileCard/GithubProfileCard")
);
export default function Profile() {
  const [prof, setProf] = useState([]);

  useEffect(() => {
    if (!(openSource.display && openSource.showGithubProfile === "true")) {
      return;
    }

    const getProfileData = async () => {
      try {
        // Resolve against Vite's base so the URL is correct both locally
        // and under the GitHub Pages base (/portfolio_site/).
        const result = await fetch(`${import.meta.env.BASE_URL}profile.json`);
        if (!result.ok) {
          throw new Error(`profile.json request failed (${result.status})`);
        }
        const response = await result.json();
        if (!response || !response.data || !response.data.user) {
          throw new Error("profile.json did not contain data.user");
        }
        setProf(response.data.user);
      } catch (error) {
        console.error(
          `${error} (because of this error GitHub contact section could not be displayed. Contact section has reverted to default)`
        );
        setProf("Error");
        openSource.showGithubProfile = "false";
      }
    };

    getProfileData();
  }, []);
  if (
    openSource.display &&
    openSource.showGithubProfile === "true" &&
    !(typeof prof === "string" || prof instanceof String)
  ) {
    return (
      <Suspense fallback={renderLoader()}>
        <GithubProfileCard prof={prof} key={prof.id} />
      </Suspense>
    );
  } else {
    return <Contact />;
  }
}
