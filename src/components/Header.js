// @flow

import React from 'react'
import type { Node } from 'react'

type Props = {
  children: Node,
  className?: string,
}

export const Header = ({ children, className }: Props) => (
  <dt className={className}>{children}</dt>
)
