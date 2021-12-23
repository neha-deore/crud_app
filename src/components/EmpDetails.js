import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Table,
} from "react-bootstrap";

function EmpDetails() {
  const [data, setData] = useState([]);

  const namee = useRef(null);
  const age = useRef(null);
  const desc = useRef(null);

  const onSubmit = (e) => {
    e.preventDefault();
    //console.warn(data);
    let info = {
      name: namee.current.value,
      age: age.current.value,
      desc: desc.current.value,
    };

    setData([...data, info]);

    // reset();
  };

  const upDate = (index, item) => {
    document.getElementById("n").value = item.name;
    document.getElementById("a").value = item.age;
    document.getElementById("d").value = item.desc;
    data.splice(index, 1);
    setData([...data]);
  };

  const delItem = (index) => {
    console.warn(index);
    data.splice(index, 1);
    setData([...data]);
    //console.warn(data);
  };

  return (
    <>
      <Container>
        <br />

        <Card style={{ padding: "10px" }}>
          <Card.Body>
            <Form>
              <Row className="mb-3">
                <Col>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    id="n"
                    ref={namee}
                    type="text"
                    placeholder="Enter Your Name"
                    required
                    className="abc"
                  />
                </Col>
                <Col>
                  <Form.Label>Age</Form.Label>
                  <Form.Control
                    id="a"
                    ref={age}
                    type="number"
                    placeholder="Enter Your Age"
                    required
                  />
                </Col>
                <Col>
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    id="d"
                    ref={desc}
                    as="textarea"
                    rows={1}
                    placeholder="Tell me something about you"
                    required
                  />
                </Col>
              </Row>
              <Button
                id="b1"
                type="submit"
                variant="primary"
                onClick={(e) => onSubmit(e)}
              >
                Add EMP
              </Button>
            </Form>
          </Card.Body>
        </Card>
        <br />
        <Table striped hover>
          <thead>
            <tr>
              <th>Sr.No.</th>
              <th>Name</th>
              <th>Age</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.age}</td>
                  <td>{item.desc}</td>
                  <td>
                    <Button
                      id="b2"
                      variant="warning"
                      onClick={() => upDate(index, item)}
                    >
                      Update
                    </Button>
                    &nbsp;
                    <Button
                      id="b3"
                      variant="danger"
                      onClick={() => delItem(index)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default EmpDetails;
