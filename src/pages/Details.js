import axios from 'axios';
import ImageCarousel from '../components/ImageCarousel';
import Source from '../components/Source';
import React from 'react';
import '../styling/Details.css'
import { dateToString } from '../util';
 
class Details extends React.Component {
  componentDidMount() {
    const { match: { params } } = this.props;
    axios.get(`/details/${params.userId}`)
      .then(({ data: user }) => {
        this.setState({ user });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.props.location.submission.images && <ImageCarousel imageList={this.props.location.submission.images}/>}
        <div className="card-body">
          <h1 className="title-event">{}</h1>
          {this.props.location.submission.subjectName && <h2 className="title-location"> {this.props.location.submission.subjectName}</h2>}
          <br></br>
          <div className="row=title">
            {this.props.location.submission.location && <h3 className="submitter-location">  {this.props.location.submission.location}</h3>}
            {dateToString(this.props.location.submission.eventDate) && <h3 className="submitter-location">  {dateToString(this.props.location.submission.eventDate)} </h3>}
            {this.props.location.submission.description && <p> {this.props.location.submission.description}</p>}
          </div>
          <br></br>
        </div>
        <Source sourceList={this.props.location.submission.sources}/>
      </React.Fragment>
    );
  }
}

export default Details;