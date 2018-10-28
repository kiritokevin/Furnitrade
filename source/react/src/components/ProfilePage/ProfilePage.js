import React, { Component } from 'react';
import NavigationBar from '../common/NavigationBar';
import { Button, TextField, Paper } from "@material-ui/core";
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

// This is profile page - used to update and modify user info
// Goal & Requirements:
//      - Use container structure to divide page into a few parts
//      - Display should be "column"
//      - In each row, there could possibly be a new container, display can be
//        either "row" or "column"
//      - Use the theme colors provided in MainPage.js

// 2 major parts
//     - Part One: nav bar
//         - Nav bar should be the same
//         - title "furnitrade" and logo should redirect the user to MainPage
//         - drawer stays the same --(temporary) --(if you think you can update it, free
//           free to do so)

//     - Part Two: user info
//         - Sub-part One - Left-hand-side
//             - User Photo - include a Button for uploading new photo if user
//                 has no profile photo. Otherwise, the button is for changing
//                 profile photo
//             - User First and Last Name - Under the photo, include a "save" or
//                 "update" button
//             - (Optional) brief introduction - brief introduction of user filled by user
//                 himself or herself
//         - Sub-part Two - Right-hand-side
//             - Address information
//             - email information
//             - university information - should be a drop down menu which offers university List

// Note:
//     - feel free to redesign the layout. Keep dis shit good looking tho.
//     - feel free to use a new theme. Just make sure the color stays the same


const MainTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#42668f',
      main: '#134074',
      dark: '#0d2c51',
    },
    secondary: {
      light: '#61a5c5',
      main: '#3A8FB7',
      dark: '#286480',
    },
    inherit: {
      light: '#f7ca7f',
      main: '#F6BD60',
      dark: '#ac8443',
    },
  },
    typography: {
      fontFamily: '"Righteous", sans-serif',
    },
  });

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'Jack Ma',
      email: 'jackma@alibaba.com',
      address: 'Hangzhou, China',
      university: 'University of California, San Diego'
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
   this.setState(
       {username:event.target.username,
        email:event.target.email,
        address:event.target.address,
        univeristy:event.target.univeristy});
 }

    render() {
      return (

        <div className="profile-page-container">
            {/* Major part one - nav bar */}
            <NavigationBar className="nav-bar"/>

            {/* <div class="card">
            <img src="" alt="profile-pic"/>
            <Button class="update-pic">Update picture</Button>
            <p>
            <textarea value={this.state.firstname}></textarea>
            &nbsp; <textarea value={this.state.lastname}></textarea>
            </p>
            </div> */}

            {/* Major part two - user info */}
            <div className="user-info-container">

              {/* left hand side of user info - photo & names */}
              <div className="info-lhs">

                <img title="user-photo"
                src={require("../../static/images/test-propic.jpg")}className="user-photo"
                alt = "used to store user photo"/>
                <TextField
                  id="standard-read-only-input"
                  label="Username"
                  defaultValue={this.state.username}
                  className="info-lhs-username"
                  margin="normal"
                  InputProps={{
                      readOnly: true,
                  }}
                  variant="filled"/>
                <TextField
                    id="standard-read-only-input"
                    label="E-mail"
                    defaultValue={this.state.email}
                    className="info-lhs-email"
                    margin="normal"
                    InputProps={{readOnly: true,}}
                    variant="filled"/>
                <TextField
                    id="standard-read-only-input"
                    label="Address"
                    defaultValue={this.state.address}
                    className="info-lhs-address"
                    margin="normal"
                    InputProps={{readOnly: true,}}
                    variant="filled"/>
                <TextField
                    id="standard-read-only-input"
                    label="Address"
                    defaultValue={this.state.university}
                    className="info-lhs-university"
                    margin="normal"
                    InputProps={{readOnly: true,}}
                    variant="filled"/>
                <Button type="submit" variant="contained" color="primary">
                     Edit
                </Button>


              </div>

              {/* right hand side of user info - address */}
              <div className="info-rhs">

              </div>

            </div>

        </div>
      );
    }
  }

  export default ProfilePage;
