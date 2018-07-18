// @flow

import React, { Component, type Node } from 'react'

export class Header extends Component<{
  children: Node,
  className?: string,
}> {
  render() {
    const { children, className, ...props } = this.props

    return (
      <dt className={className} {...props}>
        {children}
      </dt>
    )
  }
}
