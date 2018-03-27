// @flow

import React from 'react'
import type { Node } from 'react'

type Props = {
  children: Node,
  className?: string,
}

export const Accordion = ({ children, className, ...props }: Props) => (
  <dl className={className} {...props} role="presentation">
    {children}
  </dl>
)
