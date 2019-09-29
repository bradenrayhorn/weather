import React from "react";
import "../scss/settings.scss";
import Navbar from "../components/Navbar";
import {getUser, logout} from "../utils/user";
import Button from "@material-ui/core/Button";

class Settings extends React.Component {

  state = {
    canGeolocate: false
  };

  componentDidMount() {

  }

  logout = () => {
    logout();
    this.props.history.push('/login');
  };

  render() {
    return (
      <div>
        <Navbar state='back-right'/>
        <div className='profile'>
          <div style={{fontWeight: 600}}>Account Information</div>
          <div>
            {getUser()}
          </div>
          <div>
            <Button variant='outlined' color='primary' onClick={this.logout}
                    style={{display: 'block', margin: '10px auto'}}>
              Logout
            </Button>
          </div>
        </div>
      </div>
    );
  }

}

export default Settings;