import * as React from "react";

import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function ImgMediaCard({
  article_id,
  title,
  overview,
  timestamp,
  location,
  image_url,
  fxn,
}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia component="img" alt={title} height="140" image={image_url} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Published: {timestamp}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Location: {location}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={(e) => fxn(article_id)}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
}
