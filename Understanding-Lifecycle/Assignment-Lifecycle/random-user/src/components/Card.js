import React from "react";
import Loader from "../components/Loader";

export default class Card extends React.Component {
  constructor(props) {
    super();
    this.state = {
      data: null,
      clickedIcon: "fas fa-user",
    };
  }

  // componentDidMount
  componentDidMount() {
    this.fetchRandomUser();
  }

  // fetchRandomUser
  fetchRandomUser = () => {
    fetch("https://randomuser.me/api/")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        this.setState({ data: data.results[0] });
      })
      .catch((err) => console.log(err));
  };

  // handleClick
  handleClick = (event) => {
    let value = event.target.className;
    this.setState({
      clickedIcon: value,
    });
  };

  // Render information based on the clicked icon
  renderIconInfo() {
    const { clickedIcon, data } = this.state;
    console.log(clickedIcon, "rendorIconInfo checkkkkkk");
    if (!data) return null; // Safety check in case data is null

    switch (clickedIcon) {
      case "fas fa-user":
        return (
          <>
            <p>My name is</p>
            <h3>{`${data.name?.first} ${data.name?.last}`}</h3>
          </>
        );
      case "fas fa-envelope-open":
        return (
          <>
            <p>My email is</p>
            <h3>{`${data.email}`}</h3>
          </>
        );
      case "fas fa-address-card":
        return (
          <>
            <p>My address is</p>
            <h3>{`${data.location?.street?.name}, ${data.location?.city}, ${data.location?.country}`}</h3>
          </>
        );
      case "fas fa-phone-alt":
        return (
          <>
            <p>My phone number is</p>
            <h3>{`${data.phone}`}</h3>
          </>
        );
      case "fas fa-unlock":
        return (
          <>
            <p>Password hint</p>
            <h3>{`${data.login?.password || ""}`}</h3>
          </>
        );
      default:
        return null;
    }
    // }
  }

  // render after fetching data
  render() {
    // console.log(this.state.data, "render");
    let result = this.state.data;

    if (!this.state.data) {
      return (
        <div className="card">
          <Loader />
        </div>
      );
    }

    return (
      <>
        <div className="card">
          <img src={result.picture.large} alt="user" />
          {this.renderIconInfo()}
          <div className="card-details" onClick={this.handleClick}>
            <i className="fas fa-user" onClick={this.handleClick}></i>
            <i className="fas fa-envelope-open" onClick={this.handleClick}></i>
            <i className="fas fa-address-card" onClick={this.handleClick}></i>
            <i className="fas fa-phone-alt" onClick={this.handleClick}></i>
            <i className="fas fa-unlock" onClick={this.handleClick}></i>
          </div>
          <button onClick={this.fetchRandomUser}>Random user</button>
        </div>
      </>
    );
  }
}
