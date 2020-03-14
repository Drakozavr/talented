import React, { useState } from "react";

export const AddRequirement = props => {
  const { onAddRequirement } = props;
  // setRequirement - updates state
  // requirement - current is a current value.
  // useState is a replacement for this.state / this.setState for Class.
  const [requirement, setRequirement] = useState("");

  return (
    <div>
      <input
        type="text"
        value={requirement}
        placeholder="Enter Requirement"
        onChange={event => setRequirement(event.target.value)}
      />
      <button
        onClick={() => {
          onAddRequirement(requirement);
          setRequirement("");
        }}
      >
        Add Requirement
      </button>
    </div>
  );
};
