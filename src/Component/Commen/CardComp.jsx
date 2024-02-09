import React from "react";

import {
  Card, CardBody, CardSubtitle, CardText, CardTitle, Button
} from "reactstrap"




function CardComp(props) {
  return (

    <Card
      style={{
        width: '18rem'
      }}
    >
      <img 
        alt="Sample"
        src={props.img}
        height={"200px"}
        width={"200px"}
      />
      <CardBody>
        <CardTitle tag="h5">
          {props.title}
        </CardTitle>
        <CardSubtitle
          className="mb-2 text-muted"
          tag="h6"
        >
          price:{props.price}

        </CardSubtitle>
        <CardText >
          Some quick example text to build on the card title and make up the bulk of the card's content.
        </CardText>
        <div >
          <button >30%</button>
        </div>
        <div >
        <Button >
          Button
        </Button>
        </div>
      </CardBody>
    </Card>
  )
};

export default CardComp;









