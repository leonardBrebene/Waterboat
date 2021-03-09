import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
//import SoldiersText from "../components/SoldiersText";

class BookingList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            response_data: ""
        }
        //this.componentDidMount = this.componentDidMount.bind(this);
    }
    handleClick() {
        fetch("http://localhost:5000/get_guests")
            .then(response => response.json())
            .then(data => this.setState({ response_data: data }));
    }
    
    render() {
        return (
            <div>
                <Header />
                <button onClick={this.handleClick.bind(this)}>Get guests</button>
                {/*<ol>{this.state.response_data.map(item=><li>{item}</li>)}</ol> */}
                <Footer />
            </div>
        );
    }
}

export default BookingList;
