import React, { Component } from 'react';
import NavBar from '../NavBar/NavBar';
import Wave from '../common/Wave';
import './message.css';
import axios from 'axios';
import Mcard from './message_card';

class message_set extends Component{
  constructor(props){
    super(props);
    this.state={
      empty:false,
      contact_view: [],
    };
  }

  componentWillMount() {

      const token = localStorage.getItem('usertoken');

      let config = {
          headers: {"Authorization": `Bearer ${token}`},
      }

      axios.get('http://127.0.0.1:5000/contact_form/', config)
      .then((response) => {
          console.log(response.data);
          let code = response.data.status;
          if (code === 200) {
            var contact_view=[];
            var data = JSON.parse(response.data.contact_form_list);
            console.log(data)
            for (var i = 0; i < data.length; i++) {
                var contact_form = data[i];
                contact_view.push(
                  <Mcard
                    username={contact_form.buyer_username}
                    title={contact_form.title}
                    contact_form_id={contact_form._id.$oid}
                  />
                )
            }
            this.setState({contact_view});
          } else if(code === 321 || code === 613) {
              this.setState({empty: true});
          } else if(code === 400) {
              localStorage.removeItem('usertoken');
              this.props.history.push('/login');
          }
      }).catch((error) => {
          console.log("get furniture in subcategory: " + error);
      });
  }


  render() {
      return (
          <div>
              {/* Part one - NavBar - logic needed*/}
              <NavBar/>
              <div className="heading">
                  <h2>My messages</h2>
                  <Wave/>
                  {/* end of furni-page tag */}
              </div>

              {/* cards of furnitures wished,should be from backend*/}
              <div className="Card-group">
              {
                  this.state.empty
                  ?
                  <div>Your message is empty.</div>
                  : this.state.contact_view.length === 0 ?
                    null :
                    this.state.contact_view
              }
              </div>

          {/* end of  DIV */}
          </div>
      );
  }
}
export default message_set