import React from "react";
import { useState } from "react";
import classNames from "classnames";

function ToggleSwitch() {
  const [isSelected, setSelected] = useState(false);

  const toggleSelected = () => {
    setSelected(!isSelected);

    // Get the container element by its class name
    const container = document.querySelector(".container");
    const innerContainer = document.querySelector('.innerContainer');

    // Check if isSelected is true
    if (isSelected) {
      // Add styles when isSelected is true
      container.style.backgroundColor = "grey";
      innerContainer.style.marginLeft = '60px';
    }

    else {
        // Add styles when isSelected is false
        container.style.backgroundColor = 'green';
        innerContainer.style.marginLeft = '0px';
      }

    // Add transition effect
    container.style.transition = "background-color margin 0.5s ease-in";
  };

  return (
    <div className="container">
      <span className="innerContainer" onClick={toggleSelected} />
    </div>
  );
}

export default ToggleSwitch;
