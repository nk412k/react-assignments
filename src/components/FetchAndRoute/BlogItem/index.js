import { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import "./index.css";

class BlogItem extends Component {
  render() {
    const url = this.props.match.url;
    const { data } = this.props;
    return (
      <Link to={`${url}/blog/${data.id}`} className="bloglist-item">
          <div className="bloglist-item-left-section">
            <img src={data.imageUrl} />
          </div>
          <div className="bloglist-item-right-section">
            <p className="bloglist-item-topic">{data.topic}</p>
            <h3 className="bloglist-item-title">{data.title}</h3>
            <div className="bloglist-item-author-container">
              <div className="bloglist-item-author">
                <img src={data.avatarUrl} />
              </div>
              <p className="bloglist-item-description">{data.author}</p>
            </div>
          </div>
      </Link>
    );
  }
}
export default withRouter(BlogItem);
