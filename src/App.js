import React from "react";
import "./App.css";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";

function App() {
    return (
        <div className="App">
            <Nav activeKey="/home">
                <Nav.Item>
                    <Nav.Link href="/home">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="/about">About Us</Nav.Link>
                </Nav.Item>
            </Nav>
            <h1>Hello World</h1>
            <button type="button" className="btn btn-primary btn-lg">
                Click
            </button>

            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>

                <Form.Group>
                    <Form.Label>Form Dropdown with favorite movies</Form.Label>
                    <Form.Control as="select">
                        <option>Inception</option>
                        <option>Forrest Gump</option>
                        <option>Shawshank Redemption</option>
                        <option>Spiderman: Into the Spiderverse</option>
                        <option>Avengers: Endgame</option>
                    </Form.Control>
                </Form.Group>
            </Form>
            <div className="App-Card">
                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="/images/earth.jpeg"
                        alt="earth"
                    />
                    <Card.Body>
                        <Card.Title>3rd Rock</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Around the World</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="/images/earth.jpeg"
                        alt="earth"
                    />
                    <Card.Body>
                        <Card.Title>3rd Rock</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Around the World</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: "18rem" }}>
                    <Card.Img
                        variant="top"
                        src="/images/earth.jpeg"
                        alt="earth"
                    />
                    <Card.Body>
                        <Card.Title>3rd Rock</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Around the World</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className="App-Table">
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Larry </td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <Table>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    );
}

export default App;
