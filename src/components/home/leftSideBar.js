
// LeftSidebar.js
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Paper from "@mui/material/Paper";

const LeftSidebar = ({ activeItem, setActiveItem }) => {

  const handleItemClick = (itemIndex) => {
    setActiveItem(itemIndex);
    const contentRef = document.getElementById(`content-${itemIndex}`);
    if (contentRef) {
      contentRef.scrollIntoView({ behavior: "smooth" });
    }
  };


  const listItemStyle = {
    color: activeItem === 1 ? '#2196f3' : 'black',
    padding: "5px",
  };
  const listItemStyle2 = {
    color: activeItem === 2 ? '#2196f3' : 'black',
    padding: "5px",
  };
  const listItemStyle3 = {
    color: activeItem === 3 ? '#2196f3' : 'black',
    padding: "5px",
  };
  const listItemStyle4 = {
    color: activeItem === 4 ? '#2196f3' : 'black',
    padding: "5px",
  };
  const listItemStyle5 = {
    color: activeItem === 5 ? '#2196f3' : 'black',
    padding: "5px",
  };
  const listItemStyle6 = {
    color: activeItem === 6 ? '#2196f3' : 'black',
    padding: "5px",
  };
  const listItemStyle7 = {
    color: activeItem === 7 ? '#2196f3' : 'black',
    padding: "5px",
  };
  const listItemStyle8 = {
    color: activeItem === 8 ? '#2196f3' : 'black',
    padding: "5px",
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

        <ListItem sx={{ display: "flex", justifyContent: "center" }}>
          {/* <img src="/assets/myImg/ammu-4.png" alt="My-Img" style={{width: "300px"}} /> */}
          <img src="/assets/myImg/ammu-5.png" alt="My-Img" style={{ width: "150px", height: "150px", borderRadius: "75px" }} />
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
                fontSize: "13px",
                letterSpacing: "13px"
              },
            }}
          />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(1)}
          style={listItemStyle}>
          <ListItemText className="leftNav" primary="Home"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "13px",

              },
            }}
          />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(2)}
          style={listItemStyle2}>
          <ListItemText className="leftNav" primary="About"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "13px"
              },
            }}
          />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(3)}
          style={listItemStyle3}>
          <ListItemText className="leftNav" primary="Links"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "13px"
              },
            }}
          />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(4)}
          style={listItemStyle4}>
          <ListItemText className="leftNav" primary="Skills"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "13px"
              },
            }}
          />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(5)}
          style={listItemStyle5}>
          <ListItemText className="leftNav" primary="Education"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "13px"
              },
            }}
          />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(6)}
          style={listItemStyle6}>
          <ListItemText className="leftNav" primary="Experience"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "13px"
              },
            }}
          />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(7)}
          style={listItemStyle7}>
          <ListItemText className="leftNav" primary="Projects"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "13px"
              },
            }}
          />
        </ListItem>

        <ListItem button onClick={() => handleItemClick(8)}
          style={listItemStyle8}>
          <ListItemText className="leftNav" primary="Contact"
            primaryTypographyProps={{
              style: {
                textAlign: "center",
                fontSize: "13px"
              },
            }}
          />
        </ListItem>

        <ListItem sx={{display: "flex", justifyContent: "center", textAlign: "center", padding: "20px"}}>
          © Copyright arthi©2024 All rights reserved @ arthi | 
        </ListItem>

      </List>
    </Paper>
  );
};

export default LeftSidebar;
