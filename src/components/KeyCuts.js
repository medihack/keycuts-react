import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Keys } from 'keycuts'

class KeyCuts extends Component {
  componentDidMount() {
    const options = this.props.options
    this.keys = new Keys(this._el, options)

    this.updateBindings()
    this.updateWatchers()

    this.pauseResume()
  }

  componentWillUnmount() {
    this.keys.stop()
    this.keys.reset()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bind !== this.props.bind) this.updateBindings()
    if (prevProps.watch !== this.props.watch) this.updateWatchers()
    if (prevProps.paused !== this.props.paused) this.pauseResume()
  }

  pauseResume = () => {
    if (this.props.paused) this.keys.stop()
    else this.keys.resume()
  }

  updateBindings = () => {
    this.keys.unbindAll()

    const bindings = this.props.bind

    if (!bindings) return

    if (typeof bindings !== 'object')
      throw new Error('Invalid bind parameter value: ' + bindings)

    for (let binding of Object.entries(bindings)) {
      const [shortcut, callback] = binding
      this.keys.bind(shortcut, callback)
    }
  }

  updateWatchers = () => {
    this.keys.unwatchAll()

    const callbacks = this.props.watch

    if (!callbacks) return

    if (!Array.isArray(callbacks))
      throw new Error('Invalid watch parameter value: ' + callbacks)

    for (let callback of callbacks) {
      this.keys.watch(callback)
    }
  }

  render() {
    return <div ref={el => (this._el = el)}>{this.props.children}</div>
  }
}

KeyCuts.propTypes = {
  children: PropTypes.element,
  options: PropTypes.object,
  bind: PropTypes.object,
  watch: PropTypes.array,
  paused: PropTypes.bool
}

export default KeyCuts
