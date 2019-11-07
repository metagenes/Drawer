import React, { useState, Component } from "react";
import {
  Button,
  Card,
  Badge,
  Nav,
  NavLink,
  Jumbotron,
  Container,
  Form,
  Modal
} from "react-bootstrap";
// import SweetAlert from "react-bootstrap-sweetalert";
import "./ModalEdit";
import ModalEdit from "./ModalEdit";

class Detail extends Component {
  // export default props => {
  constructor(props) {
    super(props);

    this.state = {
      alert: null
    };
  }

  // deleteThisGoal() {
  //   const getAlert = () => (
  //     <SweetAlert success title="Are you sure to delete this ??" onConfirm={() => this.hideAlert()}>
  //       Data Deleted
  //     </SweetAlert>
  //   );

  //   this.setState({
  //     alert: getAlert()
  //   });
  // }

  hideAlert() {
    console.log("Hiding alert...");
    this.setState({
      alert: null
    });
  }
  render() {
    return (
      <Card>
        <Card.Header>
          <Nav variant="pills" defaultActiveKey="">
            <Nav.Item>
              <Nav.Link variant="warning" href="/">
                Back
              </Nav.Link>
            </Nav.Item>
            <ModalEdit />

            <Nav.Item>
              <Nav.Link href="#" onClick={() => this.deleteThisGoal()}>
                Delete {this.state.alert}
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Img src="//covers.openlibrary.org/b/id/542870-M.jpg" style={{ height: "30rem" }}></Card.Img>

          <div className="col-md-8">
            <Button variant="warning" style={{ marginTop: "20PX" }}>
              Drama
            </Button>
            <h2>Book title</h2>
            <Card.Text>04 August 2018</Card.Text>

            <Card.Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              vehicula cursus nisl, a hendrerit lacus laoreet imperdiet.
              Curabitur purus purus, volutpat mattis sapien nec, molestie
              feugiat felis. Vivamus congue eget ligula in dapibus. Proin
              posuere ligula orci, a tincidunt purus pharetra ut. Aenean eget
              varius dui. Phasellus pellentesque consectetur arcu, sed imperdiet
              mi. Etiam lobortis turpis eget enim venenatis semper. Morbi varius
              vitae dui vitae congue. Ut ornare arcu arcu, ut aliquet ex
              pharetra a. Ut interdum pretium quam, at vulputate risus pretium
              tincidunt. Morbi non consequat magna. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut pellentesque elit at massa rutrum,
              vel euismod nunc malesuada. Maecenas non est ut mi viverra feugiat
              nec quis ex. Quisque ex orci, blandit vel iaculis ac, fermentum at
              tortor. Nam id tortor risus.
            </Card.Text>
          </div>
          {/* <Card.Text variant="warning">Available</Card.Text> */}
          {/* <Button variant="success" style={{ marginTop: "50px" }}>
            Available
          </Button> */}
          <h3
            style={{ marginTop: "40px", backgroundColor: "warning" }}
            variant="warning"
          >
            Available
          </h3>
          <div style={{ marginTop: "100px" }}>
            <Button variant="warning">Borrow</Button>
          </div>
        </Card.Body>
      </Card>
    );
  }
}

export default Detail;
