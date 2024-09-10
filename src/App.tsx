import React from "react";
import "./App.css";
import nyImage from "./NY.jpg"; // Import the image
import { Button } from "react-bootstrap";
import { Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Hello guys</h1>
                UM COS420 with React Hooks and TypeScript
            </header>

            <p>
                Edit <code>src/App.tsx</code> and save. This page will
                automaticstatally reload. Siddhartha Bajracharya. Hello World.
            </p>

            <Container>
                <Row>
                    <Col>
                        <div
                            style={{
                                width: "100px", // Adjust width as needed
                                height: "100px", // Adjust height as needed
                                backgroundColor: "red",
                                marginBottom: "10px", // Optional margin
                            }}
                        ></div>
                        <div
                            style={{ border: "3px solid blue", padding: "2px" }}
                        >
                            <p>Bordered Stuff</p>
                        </div>
                        Unordered List:
                        <ol>
                            <li>Uno</li>
                            <li>Dos</li>
                            <li>Tres</li>
                        </ol>
                    </Col>

                    <Col>
                        <div
                            style={{
                                width: "100px", // Adjust width as needed
                                height: "100px", // Adjust height as needed
                                backgroundColor: "red",
                                marginBottom: "10px", // Optional margin
                            }}
                        ></div>
                        <img
                            src={nyImage}
                            alt="New York"
                            style={{ width: "800px", height: "450px" }}
                        />
                        <Button
                            onClick={() => {
                                console.log("Hello World!");
                            }}
                        >
                            Log Hello World
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
