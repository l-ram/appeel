# Appeel
Repo and commit fetch dashboard with Github API

This project is built in React

# Running the project

Dependencies:

Install 'react', 'react-scripts', 'react-tsparticles' and 'tsparticles'

Then run: NPM start

# ES6 Functions

I've made use of the following ES6 arrow functions:

In App.jsx:

  onSearchChange = (event) => {
    this.setState({searchfield: event.target.value });
  }

  onClickRepo = (repo) => {
    this.setState({FocusedRepo: repo})
  }




