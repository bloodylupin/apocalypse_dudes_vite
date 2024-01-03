import { useEffect, useState } from "react";
import CookieConsent, { getCookieConsentValue } from "react-cookie-consent";
import ReactGA from "react-ga4";

export default function CookieBar() {
  const [isConsent, setIsConsent] = useState(false);

  useEffect(() => {
    const c = getCookieConsentValue();

    if (!c) return;

    ReactGA.initialize("G-TCTEX89XRD");
  }, [isConsent]);

  return (
    <CookieConsent
      location="bottom"
      buttonText="Accept"
      //   cookieName="myAwesomeCookieName2"
      //   buttonClasses="btn btn-success rounded-lg"
      style={{ background: "#2B373B" }}
      buttonStyle={{
        color: "#fff",
        backgroundColor: "green",
        borderRadius: "1rem",
        margin: ".5rem",
      }}
      enableDeclineButton
      flipButtons
      declineButtonStyle={{
        color: "red",
        backgroundColor: "transparent",
        border: "1px solid red",
        borderRadius: "1rem",
        margin: ".5rem",
      }}
      declineButtonText="decline"
      expires={150}
      onAccept={() => {
        setIsConsent(true);
      }}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
}
