import React from "react";
import Typography from "@material-ui/core/Typography";
import styled from "@emotion/styled";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import axios from "axios";
import {withSnackbar} from "notistack";
import {setUser} from "../utils/user";

const LoginPage = styled.div`
  text-align: center;
  padding-top: 25px;
`;

class Login extends React.Component {

  state = {
    name: '',
    code: ''
  };

  nameChange = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  codeChange = (e) => {
    this.setState({
      code: e.target.value
    });
  };

  tryLogin = () => {
    axios
      .post('/login.php', {
        user: this.state.name,
        code: this.state.code
      })
      .then((response) => {
        console.log(response.data);
        if (response.data.code !== 100) {
          this.props.enqueueSnackbar(response.data.message, {
            variant: 'error'
          });
        } else {
          setUser(this.state.name, response.data.uid);
          this.props.enqueueSnackbar('Logged in.', {
            variant: 'success'
          });
          this.props.history.push('/');
        }
      })
      .catch(() => {
        this.props.enqueueSnackbar('Error logging in.', {
          variant: 'error'
        });
      });
  };

  render() {
    return (
      <LoginPage>
        <Typography variant='h5' style={{fontFamily: 'Dosis'}}>
          Login
        </Typography>
        <TextField
          label='Name'
          value={this.state.name}
          onChange={this.nameChange}
          margin='dense'
          variant='outlined'
        />
        <TextField
          label='Code'
          value={this.state.code}
          onChange={this.codeChange}
          margin='dense'
          variant='outlined'
          type='password'
        />
        <Button variant='outlined' color='primary' onClick={this.tryLogin}
                style={{display: 'block', margin: '0 auto', marginTop: '10px'}}>
          Login
        </Button>
      </LoginPage>
    );
  }

}

export default withSnackbar(Login);