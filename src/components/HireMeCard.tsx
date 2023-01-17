import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import IconButton, { IconButtonProps } from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import Link from "@mui/material/Link";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function RecipeReviewCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            <ContactSupportIcon />
          </Avatar>
        }
        action={
          <Link
            href="https://www.linkedin.com/in/kristaps-mitins"
            target={"_blank"}
          >
            <LinkedInIcon />
          </Link>
        }
        title="My LinkedIn"
        subheader="linkedin.com/in/kristaps-mitins"
      />
      <CardContent>
        <Typography variant="h2">
          <Link
            href="https://www.linkedin.com/in/kristaps-mitins"
            underline="hover"
            color="text.title"
            target={"_blank"}
          >
            {"Do you want to hire me?"}
          </Link>
        </Typography>
      </CardContent>
    </Card>
  );
}
