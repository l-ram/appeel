import React, {Component} from 'react';
import ParticleBackground from './Components/ParticleBackground/ParticleBackground';
import './App.css';
import Title from './Components/Dashboard/Title';
import Sidebar from './Components/Dashboard/Sidebar';
import RepoList from './Components/Dashboard/RepoList';
import SearchBox from './Components/Dashboard/SearchBox';
import FocusedRepo from './Components/FocusedRepo';

class App extends Component {
  constructor() {
    super();
      this.state = {
        repos: [],
        commits: [],
        searchfield: '',
        FocusedRepo: null
      }
  };

componentDidMount() {
    fetch('https://api.github.com/users/l-ram/repos')
    .then(response => response.json())
    .then(users => this.setState({ repos: users}));
}

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value });
  }

  onClickRepo = (repo) => {
    this.setState({FocusedRepo: repo})
  }

render () {
  const filteredRepos = this.state.repos.filter(repos => {
		return  repos.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
	})
    return(
      <div class="App">
        <ParticleBackground className ="particles"/>
        <div class="flex1"><Title></Title></div>
        <div class="flex2"><Sidebar></Sidebar></div>
        <div class="flex3">
          <SearchBox searchChange={this.onSearchChange}/>
          {!this.state.FocusedRepo && <RepoList repos={filteredRepos} onClickRepo={this.onClickRepo}/>}
          {this.state.FocusedRepo && <FocusedRepo repo={this.state.FocusedRepo}/>}
        </div>
      </div>
  );
    }
};

export default App;
