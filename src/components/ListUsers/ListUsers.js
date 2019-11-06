import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { connect } from "react-redux";
import {
  getUsers,
  deleteUser,
  addUser,
  updateUser
} from "../../actions/userActions";
import "./ListUsers.css";
import { Link } from "react-router-dom";
import { Card, Button, Modal, Form } from "react-bootstrap";
import UpdateUser from "../updateUser/updateUser";

const useStyles = makeStyles({
  root: {
    width: "100%"
  },
  tableWrapper: {
    maxHeight: "100%",
    overflow: "auto"
  }
});

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 5,
      show: false,
      user: {}
    };
  }

  setModalShow = show => {
    this.setState({
      show: show
    });
  };

  componentDidMount() {
    this.props.getUsers();
  }

  handleChangeRowsPerPage = event => {
    this.setState({ rowsPerPage: +event.target.value, page: 0 });
  };
  handleChangePage = (event, newPage) => {
    this.setState({ page: newPage });
  };
  handleChange = e => {
    this.setState({
      ...this.state,
      user: { ...this.state.user, [e.target.name]: e.target.value }
    });
  };
  render() {
    const columns = [
      { id: "name", label: "Name", minWidth: 170 },
      { id: "surname", label: "surname", minWidth: 170 },
      {
        id: "birthYear",
        label: "birthYear",
        minWidth: 170,
        align: "right",
        format: value => value.toLocaleString()
      },
      {
        id: "birthPlace",
        label: "birthPlace",
        minWidth: 170,
        align: "right",
        format: value => value.toLocaleString()
      },
      {
        id: "actions",
        label: "Actions",
        minWidth: 170,
        align: "right",
        format: value => value.toFixed(2)
      }
    ];

    function createData(name, surname, birthYear, birthPlace, id) {
      return { name, surname, birthYear, birthPlace, id };
    }
    // let arr = [];
    // const infos = this.props.users.map(user => {
    //   let name = user.name;
    //   let surname = user.surname;
    //   let place = user.birthPlace;
    //   let year = user.birthYear;
    //   let id = user._id;
    //   let infos = { name, surname, place, year, id };
    //   arr.push(infos);
    // });
    const rows = this.props.users.map(el =>
      createData(el.name, el.surname, el.birthPlace, el.birthYear, el._id)
    );
    const { page, rowsPerPage } = this.state;

    const onDelete = id => {
      this.props.deleteUser(id);
      this.props.getUsers();
    };

    return (
      <Paper className={useStyles.root}>
        <i
          class="fas fa-plus-square fa-2x icon plus"
          onClick={() => this.setModalShow(true)}
        ></i>
        <div className={useStyles.tableWrapper}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map(column => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(row => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                      {columns.map(column => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                            {column.id === "actions" && (
                              <div>
                                <Link to={`/pictures/${row.id}`}>
                                  <i className="fas fa-images fa-2x icon"></i>
                                </Link>
                                <UpdateUser id={row.id} />
                                {/* <i
                                  className="fas fa-pen fa-2x icon"
                                  
                                ></i> */}
                                <i
                                  className="fas fa-trash fa-2x icon"
                                  onClick={() => onDelete(row.id)}
                                ></i>
                              </div>
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            "aria-label": "previous page"
          }}
          nextIconButtonProps={{
            "aria-label": "next page"
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
        <Modal
          show={this.state.show}
          onHide={() => this.setModalShow(false)}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Ajout User
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="user name"
                  name="name"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Surname</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="user surname"
                  name="surname"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>birthYear</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="user birthYear"
                  name="birthYear"
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>birthPlace</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="user birthPlace"
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
                this.setModalShow(false);
                this.props.addUser(this.state.user);
              }}
            >
              Ajouter
            </Button>
            <Button onClick={() => this.setModalShow(false)}>Annuler</Button>
          </Modal.Footer>
        </Modal>

        {/* this modal is used for updating the user*/}
      </Paper>
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
  { getUsers, deleteUser, addUser, updateUser }
)(ListUsers);
