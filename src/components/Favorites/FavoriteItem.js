import React from "react";

import { Card, Button } from "react-bootstrap";

const FavoriteItem = () => {
  return (
    <div className="layout">
      <div id="home" className="top-div2">
        <div className="fav-container">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>{this.props.city}</Card.Text>
              <Button variant="primary">Remove from favorites</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
