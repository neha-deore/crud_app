import React from "react";
import { Container, Table, Button } from "react-bootstrap";

function DispDelUP({ data, setData }) {
  const upDate = (index, item) => {};

  const delItem = (index) => {
    console.warn(index);
    data.splice(index, 1);
    setData([...data]);
    //console.warn(data);
  };

  return (
    <>
      <Container className="text-center">
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
                      variant="warning"
                      onClick={() => upDate(index, item)}
                    >
                      Update
                    </Button>
                    &nbsp;
                    <Button variant="danger" onClick={() => delItem(index)}>
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

export default DispDelUP;
