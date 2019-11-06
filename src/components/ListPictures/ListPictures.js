import React, { Component } from "react";
import { connect } from "react-redux";
import { getPictures } from "../../actions/picturesActions";
import PictureComp from "../PictureComp/PictureComp";

class ListPictures extends Component {
  componentDidMount() {
    let id = this.props.match.params.userId;
    this.props.getPictures(id);
  }

  render() {
    console.log(this.props.pictures);
    return (
      <div>
        {this.props.pictures.map((picture, index) => (
          <PictureComp picture={picture} key={picture._id} index={index} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pictures: state.pictures
  };
};

export default connect(
  mapStateToProps,
  { getPictures }
)(ListPictures);
