# Fanfare 🎺

A minimal, accessible accordion component for React using the [render prop pattern](https://reactjs.org/docs/render-props.html). Until version 1.0 is reached the API should be considered in development and subject to change.

## Notice

Fanfare is "bring-your-own-styling", meaning nothing is styled or hidden by default. You can either import the provided `Header` and `Panel` components and style them yourself, or provide your own components in their stead. I like to use [react-animate-height](https://github.com/Stanko/react-animate-height) for handling the sliding animation.

## Installation

This module can be installed with [Yarn](https://yarnpkg.com/):

```bash
 yarn add fanfare
```

or if you prefer NPM, `npm install --save fanfare`.

## Usage

With React 16.2 fragments:

```jsx
import { Fanfare, Item, Header, Panel } from 'fanfare'

const App = () => (
  <Fanfare allowMultiple>
    {({ getItemProps }) => (
      <Fragment>
        <Item id="first" {...getItemProps()}>
          {({ getHeaderProps, getPanelProps }) => (
            <Fragment>
              <Header {...getHeaderProps()}>
                <div>First accordion item</div>
              </Header>

              <Panel {...getPanelProps()}>
                <div>Hidden accordion content</div>
              </Panel>
            </Fragment>
          )}
        </Item>

        <Item id="second" {...getItemProps()}>
          {({ getHeaderProps, getPanelProps }) => (
            <Fragment>
              <Header {...getHeaderProps()}>
                <div>Second accordion item</div>
              </Header>

              <Panel {...getPanelProps()}>
                <div>Other hidden accordion content</div>
              </Panel>
            </Fragment>
          )}
        </Item>
      </Fragment>
    )}
  </Fanfare>
)
```

## Props

### allowMultiple

> `boolean` | optional, defaults to `false`

Determines whether or not to allow multiple accordion items to be opened at the same time. Unless set to `true`, the accordion will default to only allowing one open item at a time.

### children

> `function` | required

Render function. See [Render function](#render-function)

## Render function

### Prop getters

These functions must be used on their corresponding elements. They help set props and accessibility values.

#### getItemProps

This method must be applied on every accordion `Item`. It's used to set click handlers and give access to the state controlling which accordion items are open.

#### getHeaderProps

This method must be applied on the accordion `Header`.

#### getPanelProps

This method must be applied on the accordion `Panel`.

## Examples

Still to come.

## License

MIT
