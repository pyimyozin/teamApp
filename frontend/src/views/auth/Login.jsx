import Card from "react-bootstrap/Card"
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import background from "../../assets/image/login.jpg";
import "/assets/css/login.css";

export default function Login() {

  return (
    <Card className="m-auto flex-row shadow mt-5">
      <Card.Img src={background} />
      <Card.Body>
        <Form>
          <Form.Group className="mb-3" controlId="code">
            <Form.Control type="text" placeholder="Enter Id" />
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Control type="password" placeholder="Enter Password" />
          </Form.Group>
          <hr />
          <Button className="w-100">Login</Button>
        </Form>
      </Card.Body>
    </Card>
  );
}
