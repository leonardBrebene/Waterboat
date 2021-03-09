import React from 'react';
import './Addbooking.css';


class Addbooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dateFrom: "",
            dateTo: "",
            fullName:"",
            phone:""
          
        }
        
    }
    handleChange(event) {
        let value = event.target.value;
        let name = event.target.name;
        
        if (name === "dateFrom") {
            this.setState({
                dateFrom: value
            });
        }
        else if (name === "dateTo") {
            this.setState({
                dateTo: value
            });
        }

        else if (name === "fullName") {
            this.setState({
                fullName: value
            });
        
        }

        else if (name === "phone") {
            this.setState({
                phone: value
            });
        
        }
      

       
    }

    handleClick(event) {
        event.preventDefault();
        const data = {
            "dateFrom": this.state.dateFrom,
            "dateTo": this.state.dateTo,
            "fullName":this.state.fullName,
            "phone":this.state.phone  
        }

        //let that=this;
    
        fetch("http://localhost:5000/join", {
            method: "POST",
            headers: { "Content-Type": 'application/json' },
            body: JSON.stringify(data)
        })
            .then(function () {
                alert("Succes");
        })
                               
    }

    render() {
        return (
            <div className="addBooking">
                <h2>{this.state.serverMessage}</h2>
                <form action="/">
                    <div>
                        <label className="form-label">Data check-in:</label>
                        <input className="form-element" type="date" name="dateFrom" onChange={this.handleChange.bind(this)}/>
                    </div>

                    <div>
                        <label className="form-label">Data check-out:</label>
                        <input className="form-element" type="date" name="dateTo" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div>
                        <label className="form-label">Nume complet:</label>
                        <input className="form-element" type="text" name="fullName" onChange={this.handleChange.bind(this)}/>
                    </div>
                    <div>
                        <label className="form-label">Numar telefon:</label>
                        <input className="form-element" type="number" name="phone" onChange={this.handleChange.bind(this)}/>
                    </div>

                    <div>
                        <button className="form-button" onClick={this.handleClick.bind(this)}> Addbooking </button>
                    </div>
                </form>
            </div>
            );
    }
}

export default Addbooking;