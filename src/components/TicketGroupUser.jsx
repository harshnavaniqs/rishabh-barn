import React from "react";
import { Grid, IconButton, Paper, Radio, Box, styled } from "@mui/material";

import icon from "../assets/perspective-dice-random-icon-469x512-mm6xb9so.png";
import onlineIcon from "../assets/Yellow_icon.svg.png";
import offlineIcon from "../assets/circle-xxl.png";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";

const CustomLabel = styled("label")({
  display: "flex",
  alignItems: "center",
  padding: "0px",
});

const CustomTicketCard = ({ ticket, priorityIcons, statusIcons }) => {
  return (
    <Paper style={{ padding: "8px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "0.2rem",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <p
            style={{
              margin: "0",
              fontSize: 14,
              marginBottom: "0.4rem",
            }}
          >
            {ticket.id}
          </p>
        </div>
        <Box
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
          }}
        >
          <img
            src={statusIcons[ticket.status]}
            alt={ticket.status}
            style={{
              marginTop: "0.2rem",
              width: "14px",
              height: "14px",
              marginRight: "0.3rem",
            }}
          />
          <p
            style={{
              marginTop: "0",
              paddingTop: "0",
              fontSize: 15,
              fontWeight: "600",
              marginBottom: "1rem",
            }}
          >
            {ticket.title}
          </p>
        </Box>
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {priorityIcons[ticket.priority]}
          <Paper style={{ padding: "0.1rem 0.2rem 0.2rem 0.1rem" }}>
            <Radio
              icon={<CircleIcon style={{ fontSize: 14 }} />}
              checkedIcon={<CircleIcon style={{ fontSize: 14 }} />}
              color="default"
              size="small"
              style={{ marginRight: 4, padding: 0, marginBottom: "0.1rem" }}
            />
            <span style={{ fontSize: 12 }}>{ticket.tag[0]}</span>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

const TicketGroupUser = ({
  data,
  groupedTickets_user,
  priorityIcons,
  statusIcons,
}) => {
  const getUserAvailability = (userId) => {
    const user = data.users.find((user) => user.id === userId);
    return user?.available || false;
  };

  return (
    <React.Fragment>
      {Object.keys(groupedTickets_user).map((userId) => (
        <Grid item lg={2.4} key={userId} padding={2}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CustomLabel>
              <div style={{ position: "relative" }}>
                <img
                  src={icon}
                  alt="icon"
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "4px",
                  }}
                />
                <img
                  src={getUserAvailability(userId) ? onlineIcon : offlineIcon}
                  alt={getUserAvailability(userId) ? "Online" : "Offline"}
                  style={{
                    width: "10px",
                    height: "10px",
                    position: "absolute",
                    top: "10px",
                    left: "10px",
                  }}
                />
              </div>
              <h4
                style={{ margin: "0", fontWeight: "500", marginLeft: "0.8rem" }}
              >
                {data.users.map((user) =>
                  user.id === userId ? user.name : null
                )}
              </h4>
              <h4
                style={{
                  margin: "0",
                  fontWeight: "400",
                  marginLeft: "0.5rem",
                }}
              >
                {groupedTickets_user[userId]?.length || 0}
              </h4>
            </CustomLabel>
            <div style={{ marginLeft: "auto" }}>
              <IconButton>
                <AddIcon style={{ fontSize: 18 }} />
              </IconButton>
              <IconButton>
                <MoreHorizIcon
                  style={{
                    fontSize: 18,
                  }}
                />
              </IconButton>
            </div>
          </div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {groupedTickets_user[userId].map((ticket) => (
              <li key={ticket.id} style={{ marginBottom: "8px" }}>
                <CustomTicketCard
                  ticket={ticket}
                  getUserAvailability={getUserAvailability}
                  priorityIcons={priorityIcons}
                  statusIcons={statusIcons}
                />
              </li>
            ))}
          </ul>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default TicketGroupUser;