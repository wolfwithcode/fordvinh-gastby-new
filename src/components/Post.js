import React from "react"
import { Card, Button } from "react-bootstrap"

const Post = props => (
  <div className="p-3">
    <Card>
      <Card.Img variant="top" alt={props.alt || "xe ford"} src={props.image} />
      <Card.Body>
        <Card.Title dangerouslySetInnerHTML={{ __html: props.title }} />
        
          <div dangerouslySetInnerHTML={{ __html: props.excerpt }} />
        
        <Button variant="warning" href={props.readMore}>
          Xem
        </Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post
