import React, {Component} from 'react';
import ParticleBackground from './Components/ParticleBackground/ParticleBackground';
import './App.scss';
import Title from './Components/Dashboard/Title';
import Sidebar from './Components/Dashboard/Sidebar';
import RepoList from './Components/Dashboard/RepoList';
import SearchBox from './Components/Dashboard/SearchBox';

class App extends Component {
  constructor() {
    super();
      this.state = {
        repos: [],
        commits: [],
        searchfield: ''
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
        <RepoList repos={filteredRepos}/>
      </div>
    </div>
  );
}

};

export default App;
