import React, {Component} from 'react';
import NavBar from '../NavBar/NavBar';
import Card from '../FurniCard/FurniCard';
import Wave from '../common/Wave';
import './FurniPage.css';
import axios from 'axios';

/* Furniture page class */
class FurniPage extends Component {

    /* TODO - need to pass in data through props in the future */
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    /*componentWillMount() {
        const token = localStorage.getItem('usertoken');
        axios({
            method: 'get',
            url: '',
            withCredentials: false,
            crossdomain: true,
            // data: reqData,
            responseType: 'json',
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then((response) => {
            console.log(response.data);
            let code = response.data.status;
            if (code === 200) {
              this.setState({
                data:response.data 
              });
            } else if(code === 613) {
                this.setState({empty: true});
            } else if(code === 400) {
                localStorage.removeItem('usertoken');
                this.props.history.push('/login');
            }
        }).catch((error) => {
            console.log("get history error: " + error);
        });
    }

    */

/* Render part */
render () {
    return (
        <div className="furni-sub-cate">
            {/* TODO - should check for loginStatus */}
            <NavBar />
            <div className="furni">
            <div className="furni-page">
                <h2>Sub-category Title</h2>
                <Wave/>
            {/* end of furni-page tag */}
            </div>
            </div>
                    {/* TODO - data of this section should be read in through a JSON file requested from the back-end */}
                    <div className="Card-group">
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 1"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 2"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 3"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 4"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 5"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 6"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 7"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 8"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 9"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 10"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 11"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 12"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 13"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 14"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 15"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 16"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 17"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 18"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 19"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                    <Card 
                        title="Furniture-demo" 
                        text="description for Furniture 20"
                        image={require('../../static/images/wallpaper1.png')}
                    />
                </div>

            {/* TODO - Should be a section of shit like "all rights reserved" */}
        {/* End of the last DIV  - everything should be above this tag */}
        </div>
    );
}

/* End of class FurniturePage */
}

/* Export FurniturePage */
export default FurniPage