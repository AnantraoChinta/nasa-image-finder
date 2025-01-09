import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackButton.css"

interface BackButtonProps {
  loading: boolean;
}

// Functionality for the back button to navigate to landing page.
const BackButton: React.FC<BackButtonProps> = ({ loading }) => {
  const navigate = useNavigate();

  return (
    // Button is displayed only if page isn't loading.
    !loading && (
      <button className="back-button" onClick={() => navigate("/")}>
        Back
      </button>
    )
  );
};

export default BackButton;
