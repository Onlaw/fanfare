// @flow

import React from 'react'
import type { Node } from 'react'

type Props = {
  children: Node,
  className?: string,
}

export const Panel = ({ children, className }: Props) => (
  <dd className={className}>{children}</dd>
)
