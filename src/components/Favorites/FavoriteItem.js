import React from "react";

const FavoriteItem = () => {
  return (
    <div className="layout">
      <div id="home" className="top-div2">
        <SearchBarFav />
        <div className="fav-container">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Text>{this.state.current.location.name}</Card.Text>
              <Button variant="primary">Remove from favorites</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FavoriteItem;
