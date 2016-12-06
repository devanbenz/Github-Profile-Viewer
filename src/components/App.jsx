import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './github/Profile';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: 'dd-beanz',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }

  //Get user data from github
  getUserData(){
    $.ajax({
      url:'https://api.github.com/users/'+this.state.username+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData:data});
        console.log(data);
      }.bind(this),
      error: function(xhr, status, err){
        this.setState({username:null});
        alert(err)
      }.bind(this)
    });
  }
  componentDidMount(){
    this.getUserData();
  }

  render() {
    return(
      <div>
        <Profile userData={this.state.userData}/>
      </div>
    )
  }
}
App.propTypes = {
  clientId: React.PropTypes.string,
  clientSecret: React.PropTypes.string
};
App.defaultProps = {
  clientId: '30b535c2d118cba938e5',
  clientSecret: 'e4ea82246c9cc5c6f21fb106d857563b6fefec0f'
}

export default App;