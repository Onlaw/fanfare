// @flow

import React from 'react'
import type { Node } from 'react'

type Props = {
  children: Node,
  className?: string,
}

export const Accordion = ({ children, className }: Props) => (
  <dl className={className} role="presentation">
    {children}
  </dl>
)
