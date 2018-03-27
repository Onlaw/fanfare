// @flow

import React, { PureComponent } from 'react'
import type { Node } from 'react'

type Props = {
  children: Node,
  className?: string,
}

export class Header extends PureComponent<Props> {
  render() {
    const { children, className, ...props } = this.props

    return (
      <dt className={className} {...props}>
        {children}
      </dt>
    )
  }
}
