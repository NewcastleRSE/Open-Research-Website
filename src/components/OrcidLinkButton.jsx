// components/OrcidLinkButton.jsx
import React from "react";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const OrcidLinkButton = ({ onOrcidLinked, text }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");
    if (code) {
      // Exchange the authorization code for an access token
      getAccessToken(code, navigate, onOrcidLinked);
    }
  }, [navigate, onOrcidLinked]);

  const linkOrcid = (e) => {
    e.preventDefault();
    const CLIENT_ID = import.meta.env.VITE_CLIENT_ID;
    const REDIRECT_URI = import.meta.env.VITE_OAUTH_URL;
    const url = `https://orcid.org/oauth/authorize?client_id=${CLIENT_ID}&response_type=code&scope=/authenticate&redirect_uri=${REDIRECT_URI}`;
    window.location.href = url;
  };

  return (
    <button onClick={linkOrcid} className={"forward"}>
      {text ? text : "Link Orcid Account"}
    </button>
  );
};

export default OrcidLinkButton;
