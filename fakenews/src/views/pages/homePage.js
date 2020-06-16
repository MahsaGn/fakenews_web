import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "../styles/homePage.css";
import * as homePageAction from "../../core/homePage/homePage_action";
import Header from "../components/header";
import SearchPlaceBar from "../components/searchPlaceBar";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "../styles/style.css";
import Steps from "./steps";

class homePage extends React.Component {
  state = {
    placeCards: []
  };

  componentWillMount = async () => {
    console.log("in component");
    // await this.props.homePagePlace();
    // if (this.props.homePlaceLoaded) {
    //   let palces = this.props.places_info.map(d => (
    //     <PlaceCard
    //       title={d.title}
    //       src={d.image1}
    //       discriptions={d.categpries}
    //       id={d.id}
    //     />
    //   ));
    //   this.setState({
    //     placeCards: palces
    //   });
    // }
  };

  render() {
    return (
      <div>
        <Header />
        <div className="maindiv">
            <h2 className="home_text">
              عبارت مورد نظر خود را جستجو کنید
            </h2>
            <SearchPlaceBar className="searchbar" />
        </div>
      </div>
    );
  }
}
// const mapStateToProps = state => {
//   return {
//     places_info: state.homePage_reducer.homePlace_info,
//     homePlaceLoaded: state.homePage_reducer.homePlaceLoaded
//   };
// };

// const mapDispatchToProps = dispatch => {
//   return {
//     homePagePlace: () => dispatch(homePageAction.homePage())
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(homePage);
export default homePage;