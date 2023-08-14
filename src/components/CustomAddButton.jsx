import React from "react";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";

const CustomAddButton = () => {
  const handleIconClick = () => {
    alert("Add Button: Implementation not included!");
  };

  return (
    <IconButton onClick={handleIconClick}>
      <AddIcon style={{ fontSize: 18 }} />
    </IconButton>
  );
};

export default CustomAddButton;
