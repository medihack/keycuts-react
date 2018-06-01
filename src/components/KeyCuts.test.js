/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import KeyCuts from './KeyCuts'

describe('Keycuts without children', () => {
  test('should be created successfully', () => {
    const component = renderer.create(<KeyCuts />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should have an attached keys object', () => {
    const component = renderer.create(<KeyCuts />)
    const keys = component.getInstance().keys
    expect(keys).not.toBeNull()
  })

  test('should bind handler', () => {
    const component = renderer.create(
      <KeyCuts
        bind={{
          'a + b': () => {}
        }}
      />
    )
    const keys = component.getInstance().keys
    expect(keys._handlers.length).toBe(1)
  })

  test('should add watcher', () => {
    const component = renderer.create(<KeyCuts watch={[() => {}]} />)
    const keys = component.getInstance().keys
    expect(keys._watchers.length).toBe(1)
  })
})

describe('Keycuts without children', () => {
  test('should be created successfully', () => {
    const component = renderer.create(
      <KeyCuts>
        <input />
      </KeyCuts>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
