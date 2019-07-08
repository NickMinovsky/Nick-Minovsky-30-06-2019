import React from "react";

import { Card } from "react-bootstrap";
import "./FavoriteItem.css";

const FavoriteItem = props => {
  return (
    <Card className="favItem">
      <Card.Body>
        <Card.Text>{props.city}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default FavoriteItem;
