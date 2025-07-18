import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CDN_URL } from "../utils/constants"; // Assuming CDN_URL is defined in constants.js
import { useContext } from "react";
import userContext from "../utils/userContext"; // Importing userContext to access user data

const CategoriesInMenu = ({category ,expanded, onChange}) => {
    const data =useContext(userContext); // Using useContext to access user context data
  return (
    <div className="flex justify-center">
      <Accordion
      expanded={expanded}
      onChange={onChange}
      className="shadow-lg m-2 p-2 w-[1000px]">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography>
            <span className="font-bold text-lg">
              {category?.title} ({category?.itemCards?.length})
            </span>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {category?.itemCards?.map((item, index) => (
            <div key={index} className="flex justify-center w-full m-2 p-2">
              <Card sx={{ width: "70%" }}>
                <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                  <CardContent sx={{ flex: 1 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item?.card?.info?.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item?.card?.info?.price ? <span className="font-bold">₹{item?.card?.info?.price / 100}</span> : "Price not available"}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      {item?.card?.info?.description}
                    </Typography>
                    <Typography variant="body2" sx={{ color: "text.secondary" }}>
                      User : {data.loggedInUser}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    component="img"
                    alt="green iguana"
                    height="140"
                    sx={{ width: 140, objectFit: "cover" }}
                    image={CDN_URL+item?.card?.info?.imageId}
                  />
                </div>
              </Card>

              <span className="font-bold">{item.title}</span>
              <span className="text-gray-500"> - {item.description}</span>
            </div>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default CategoriesInMenu;
