import React from "react";
import { Grid, IconButton, Paper, Radio, styled } from "@mui/material";

import icon from "../assets/perspective-dice-random-icon-469x512-mm6xb9so.png";
import onlineIcon from "../assets/Yellow_icon.svg.png";
import offlineIcon from "../assets/circle-xxl.png";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";

const CustomTicketCard = ({ ticket, getUserAvailability, priorityIcons }) => {
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
              marginBottom: "0.2rem",
            }}
          >
            {ticket.id}
          </p>
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
              src={
                getUserAvailability(ticket.userId) ? onlineIcon : offlineIcon
              }
              alt={getUserAvailability(ticket.userId) ? "Online" : "Offline"}
              style={{
                width: "10px",
                height: "10px",
                position: "absolute",
                top: "10px",
                left: "10px",
              }}
            />
          </div>
        </div>
        <p
          style={{
            margin: "0",
            fontSize: 15,
            fontWeight: "600",
            marginBottom: "1rem",
          }}
        >
          {ticket.title}
        </p>
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
              style={{
                marginRight: 4,
                padding: 0,
                marginBottom: "0.1rem",
              }}
            />
            <span style={{ fontSize: 12 }}>{ticket.tag[0]}</span>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};

const CustomLabel = styled("label")({
  display: "flex",
  alignItems: "center",
  padding: "0px",
});

const TicketGroupStatus = ({
  data,
  groupedTickets_status,
  priorityIcons,
  statusIcons,
  statusValues,
}) => {
  const getUserAvailability = (userId) => {
    const user = data.users.find((user) => user.id === userId);
    return user?.available || false;
  };

  return (
    <React.Fragment>
      {statusValues.map((status) => (
        <Grid item lg={2.4} key={status} padding={2}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <CustomLabel>
              <img
                src={statusIcons[status]}
                alt="Status Icon"
                style={{ width: 16, height: 16, marginRight: 4 }}
              />
              <h4
                style={{ margin: "0", fontWeight: "500", marginLeft: "0.8rem" }}
              >
                {status}
              </h4>
              <h4
                style={{
                  margin: "0",
                  fontWeight: "400",
                  marginLeft: "0.5rem",
                }}
              >
                {groupedTickets_status[status]?.length || 0}
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
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {groupedTickets_status[status]
              ? groupedTickets_status[status].map((ticket) => (
                  <li key={ticket.id} style={{ marginBottom: "8px" }}>
                    <CustomTicketCard
                      ticket={ticket}
                      getUserAvailability={getUserAvailability}
                      priorityIcons={priorityIcons}
                    />
                  </li>
                ))
              : null}
          </ul>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default TicketGroupStatus;
