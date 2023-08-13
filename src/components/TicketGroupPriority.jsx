import React from "react";
import { Grid, IconButton, Paper, Radio } from "@mui/material";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import CircleIcon from "@mui/icons-material/Circle";
import AddIcon from "@mui/icons-material/Add";

import icon from "../assets/perspective-dice-random-icon-469x512-mm6xb9so.png";
import inProgressIcon from "../assets/work-in-progress.png";
import onlineIcon from "../assets/Yellow_icon.svg.png";
import backlogIcon from "../assets/Daco_4816812.png";
import cancelIcon from "../assets/cancel-button.png";
import doneIcon from "../assets/PngItem_5284486.png";
import offlineIcon from "../assets/circle-xxl.png";
import todoIcon from "../assets/pngwing.com.png";

const statusIcons = {
  Backlog: backlogIcon,
  Todo: todoIcon,
  "In progress": inProgressIcon,
  Done: doneIcon,
  Canceled: cancelIcon,
};

const TicketGroup_Status = ({ data, groupedTickets_status }) => {
  const getUserAvailability = (userId) => {
    const user = data.users.find((user) => user.id === userId);
    return user?.available || false;
  };

  return (
    <React.Fragment>
      {statusValues.map((status) => (
        <Grid item lg={2.4} key={status} padding={2}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <label
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0px",
              }}
            >
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
            </label>
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
                                getUserAvailability(ticket.userId)
                                  ? onlineIcon
                                  : offlineIcon
                              }
                              alt={
                                getUserAvailability(ticket.userId)
                                  ? "Online"
                                  : "Offline"
                              }
                              style={{
                                width: "10px",
                                height: "10px",
                                position: "absolute",
                                top: "10px",
                                left: "10px", // Adjust the left position as needed
                              }}
                            />
                          </div>
                        </div>
                        <p
                          style={{
                            margin: "0",
                            fontSize: 15,
                            fontWeight: "bold",
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
                          <IconButton style={{ padding: 0, marginRight: 15 }}>
                            <MoreHorizIcon style={{ fontSize: 14 }} />
                          </IconButton>
                          <Radio
                            icon={<CircleIcon style={{ fontSize: 14 }} />}
                            checkedIcon={
                              <CircleIcon style={{ fontSize: 14 }} />
                            }
                            color="default"
                            size="small"
                            style={{ marginRight: 4, padding: 0 }}
                          />
                          <span style={{ fontSize: 12 }}>{ticket.tag[0]}</span>
                        </div>
                      </div>
                    </Paper>
                  </li>
                ))
              : null}
          </ul>
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default TicketGroup_Status;
