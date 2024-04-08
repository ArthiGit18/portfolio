// LeftSidebar.js
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

const LeftSidebar = ({ onItemSelected }) => {
  const handleItemClick = (index) => {
    onItemSelected(index);
  };

  return (
    <Paper
      elevation={3}
      style={{
        position: "sticky",
        top: 0,
        height: "100vh",
        overflowY: "auto",
        width: "900px",
        backgroundColor: "#e7e7ee",
      }}
    >
      <List>
        <ListItem>
          {/* <img src="/assets/myImg/ammu-4.png" alt="My-Img" style={{width: "300px"}} /> */}
          {/* <img src="/assets/myImg/ammu-2.jpeg" alt="My-Img" style={{width: "300px"}} /> */}
        </ListItem>
        <ListItem>
          <ListItemText
            primary="Arthi A"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "30px",
                fontWeight: "700",
              },
            }}
          />
        </ListItem>

        <ListItem>
          <ListItemText
            primary="WEB DEVELOPER"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "10px",
              },
            }}
          />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(1)}>
          <ListItemText className="leftNav" primary="Home" />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(2)}>
          <ListItemText className="leftNav" primary="About" />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(3)}>
          <ListItemText className="leftNav" primary="Links" />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(3)}>
          <ListItemText className="leftNav" primary="Projects" />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(3)}>
          <ListItemText className="leftNav" primary="Contact" />
        </ListItem>
        {/* Add more items as needed */}
      </List>
    </Paper>
  );
};

export default LeftSidebar;
