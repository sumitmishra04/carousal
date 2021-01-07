import React, { Component } from 'react';
import Carousel from './Carousel/Carousel';
import carouselItems from "./carouseldata";
import "./App.css"
import Test from './test';
class App extends Component {
  state = {
    categories: [],
    carouselItems: carouselItems,

  }
  componentDidMount() {
    let categories = Array.from(new Set(carouselItems.map(el => el.category)))
    this.setState({ categories })
  }

  filter = (event) => {
    console.log("EVENT", event.target.value);
    if (event.target.value === 'all') {
      this.setState({ carouselItems })
    } else {
      let filteredItems = carouselItems.filter(el => el.category === event.target.value)
      this.setState({ carouselItems: filteredItems })
    }
  }

  render() {
    return (
      <>
        <select className="select" onChange={this.filter} >
          <option value={"all"} key={"all"} > All </option>
          {this.state.categories.map(el => {
            return <option value={el} key={el} > {el}</option>
          })}

        </select>

        <Carousel items={this.state.carouselItems} />
      </>)
  }
}

export default App;
