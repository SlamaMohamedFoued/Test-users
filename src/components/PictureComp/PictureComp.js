// import React, { Component } from "react";

// class PictureComp extends Component {
//   render() {
//     return <div>

//     </div>;
//   }
// }

// export default PictureComp;

import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./PictureComp.css";

class PictureComp extends Component {
  render() {
    const { picture, index } = this.props;
    return (
      <Card className="card">
        <CardActionArea>
          <CardMedia
            className="media"
            image={picture.pictureLink}
            title="Contemplative Reptile"
          />
          <div></div>
          <CardContent className="cardContent">
            <Typography variant="body2" color="textSecondary" component="p">
              Picture {index + 1}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <i className="fas fa-trash fa-2x icon"></i>
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <i className="fas fa-eye fa-2x icon"></i>
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
  }
}

export default PictureComp;
