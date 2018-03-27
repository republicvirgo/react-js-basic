import React, { Component } from 'react';

export default class ComponentsLifecycle extends Component {
  state = {
    number: 0,
    update: true
  }

  componentWillMount () {
    setTimeout(() => {
      console.log('Mounting - Step.1 \ncomponentWillMount()  \n=> Komponen Props & State di Loading')
    }, 1000)
  }

  componentDidMount () {
    setTimeout(() => {
      console.log('Mounting - Step.2 \ncomponentDidMount()  \n=> Komponen Props & State berhasil di Loading')
    }, 4000)
  }

  shouldComponentUpdate (newProps, newState) {
    setTimeout(() => {
      console.log('Updation - Step.1 \nshouldComponentUpdate() \n=> Komponen Props / State akan di Update');
    }, 1000)

    if (newState.update) {
      setTimeout(() => {
        console.log('==> Status Komponen State = TRUE');
      }, 1000)

      return true;
    } else {
      setTimeout(() => {
        console.log('==> Status Komponen State = FALSE');
      }, 1000)

      return false;
    }
  }

  componentWillUpdate (nextProps, nextState) {
    setTimeout(() => {
      console.log('Updation - Step.2 \ncomponentWillUpdate() \n=> Komponen Props / State di Update');
    }, 2000)
  }

  componentDidUpdate (prevProps, prevState) {
    setTimeout(() => {
      console.log('Updation - Step.3 \ncomponentDidUpdate() \n=> Komponen Props / State Berhasil di Update')
    }, 3000)
  }

  componentWillUnmount () {
    console.log('Unmounting - componentWillUnmount() => Komponen Props & State di Hapus')
  }

  increment () {
    this.setState({
      number: this.state.number + 1, 
      update: true
    })
  }

  dontUpdate () {
    this.setState({
      number: this.state.number + 1, 
      update: false
    })
  }

  render() {
    setTimeout(() => {
      console.log('Render Function \nrender() \n=> Komponen Props & State ditampilkan di Layar')
    }, 3000)

    return (
      <div>
        <h3>Components Lifecycle</h3>
        <h3>{this.state.number}</h3>
        <button onClick={this.increment.bind(this)}>Tambah Nilai dan Status State Update = TRUE</button>
        &nbsp;
        <button onClick={this.dontUpdate.bind(this)}>Tambah Nilai Tapi Status State Update = FALSE</button>
      </div>
    );
  }
}