import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite'
import ButtonStyles from './styles/Buttons'
import logo from './logo.svg'

const styles = StyleSheet.create({
  App: {
    textAlign: 'center'
  },

  AppLogo: {
    animation: 'AppLogoSpin infinite 20s linear',
    height: '80px'
  },

  AppHeader: {
    backgroundColor: '#222',
    height: '150px',
    padding: '20px',
    color: 'white'
  },

  AppIntro: {
    fontSize: 'large'
  }
})

class App extends Component {
  render () {
    return (
      <div className={css(styles.App)}>
        <div className={css(styles.AppHeader)}>
          <img src={logo} className={css(styles.AppLogo)} alt='logo' />
          <h2>Welcome to React</h2>
        </div>
        <p className={css(styles.AppIntro)}>
          To get started, edit <code>src/App.js</code> and save to reload.
          <button className={css(ButtonStyles.Button)}>Click Me</button>
        </p>
      </div>
    )
  }
}

export default App
