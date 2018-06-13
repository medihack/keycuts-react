/* eslint-env jest */

import React from 'react'
import renderer from 'react-test-renderer'

import Keycuts from './Keycuts'

describe('Keycuts without children', () => {
  test('should be created successfully', () => {
    const component = renderer.create(<Keycuts />)
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })

  test('should have an attached keys object', () => {
    const component = renderer.create(<Keycuts />)
    const keys = component.getInstance().keys
    expect(keys).not.toBeNull()
  })

  test('should bind handler', () => {
    const component = renderer.create(
      <Keycuts
        bind={{
          'a + b': () => {}
        }}
      />
    )
    const keys = component.getInstance().keys
    expect(keys._handlers.length).toBe(1)
  })

  test('should add watcher', () => {
    const component = renderer.create(<Keycuts watch={[() => {}]} />)
    const keys = component.getInstance().keys
    expect(keys._watchers.length).toBe(1)
  })
})

describe('Keycuts without children', () => {
  test('should be created successfully', () => {
    const component = renderer.create(
      <Keycuts>
        <input />
      </Keycuts>
    )
    const tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
