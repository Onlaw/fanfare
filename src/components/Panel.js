// @flow

import React from 'react'
import type { Node } from 'react'

type Props = {
  children: Node,
  className?: string,
}

export const Panel = ({ children, className, ...props }: Props) => (
  <dd className={className} {...props}>
    {children}
  </dd>
)
