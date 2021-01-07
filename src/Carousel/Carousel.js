import React, { Component } from "react";
import "./carousel.scss";
class Carousel extends Component {

    state = {
        previd: "#slide-1",
        nextid: "#slide-3"
    }
    prev = () => {
        let id = +this.state.previd.slice((this.state.previd.indexOf("-") + 1)) - 1;
        if (id > 0) {
            this.setState({ previd: `#slide-${id}`, nextid: `#slide-${id + 2}` });
            this.highlightCenter(id + 2, true)
        }
    }
    next = () => {
        let id = +this.state.nextid.slice((this.state.nextid.indexOf("-") + 1)) + 1;
        if (id <= this.props.items.length) {
            this.setState({ nextid: `#slide-${id}`, previd: `#slide-${id - 2}` });
            this.highlightCenter(id - 2, false)
        }
    }
    highlightCenter = (id, isPrev) => {
        if (id > 0 && !isPrev) {
            let centerItem = document.getElementById(`slide-${id + 1}`);
            let prevItem = document.getElementById(`slide-${id}`);
            if (prevItem) {
                this.unstyleItem(prevItem)
            }
            this.styleCenterItem(centerItem)
        } else {
            let centerItem = document.getElementById(`slide-${id - 1}`);
            let nextItem = document.getElementById(`slide-${id}`);
            if (nextItem) {
                this.unstyleItem(nextItem)
            }
            this.styleCenterItem(centerItem)
        }
    }
    styleCenterItem = (centerItem) => {
        centerItem.style.border = "6px solid black";
        centerItem.style.borderRadius = "1%";
        centerItem.style.height = "300px";
    }
    unstyleItem = (item) => {
        item.style.border = "none"
        item.style.height = "250px";

    }
    componentDidMount() {
        let id = +this.state.previd.slice((this.state.previd.indexOf("-") + 1));
        this.highlightCenter(id);
    }
    render() {
        return (
            <>


                <div className="carousel" >

                    <div class="slider">
                        <div class="slides">
                            {this.props.items.map((el, index) => {
                                return (<div id={`slide-${index + 1}`}>
                                    <div>
                                        <img src={el.image} alt={el.name} className="img" />
                                    </div>
                                    <div className="detail">
                                        <div>{el.name}</div>
                                        <div>&#8377;{el.price}</div>
                                        <div>{el.category}</div>
                                    </div>
                                </div>)
                            })}

                        </div>
                    </div>
                    <a href={this.state.previd} className="control prev" onClick={this.prev}>
                        <span>&lt;</span>
                    </a>
                    <a href={this.state.nextid} className="control next" onClick={this.next}>
                        <span>&gt;</span>
                    </a>

                </div>
            </>
        );
    }
}

export default Carousel;