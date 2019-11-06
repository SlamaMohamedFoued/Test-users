import React, { Component } from "react";
import { connect } from "react-redux";
import { updateUser } from "../../actions/userActions";
import { Card, Button, Modal, Form } from "react-bootstrap";

class UpdateUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show2: false,
      user: {}
    };
  }
  setModalShow2 = show => {
    this.setState({
      show2: show
    });
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };
  componentDidMount() {
    this.setState({
      user: this.props.users.filter(user => user._id == this.props.id)[0]
    });
  }

  render() {
    return (
      <div>
        <i
          className="fas fa-pen fa-2x icon"
          onClick={() => this.setModalShow2(true)}
        ></i>
        <Modal
          show={this.state.show2}
          onHide={() => this.setModalShow2(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Modifier User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.user.name}
                  name="name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.user.surname}
                  name="surname"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>birthYear</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.user.birthYear}
                  name="birthYear"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>birthPlace</Form.Label>
                <Form.Control
                  type="text"
                  value={this.state.user.birthPlace}
                  name="birthPlace"
                  onChange={this.handleChange}
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button
              type="submit"
              onClick={() => {
                this.setModalShow2(false);
                this.props.updateUser(this.state);
              }}
            >
              Ajouter
            </Button>
            <Button onClick={() => this.setModalShow2(false)}>Annuler</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    users: state.users
  };
};
export default connect(
  mapStateToProps,
  { updateUser }
)(UpdateUser);
