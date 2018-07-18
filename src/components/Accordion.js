// @flow

import React, { type Node } from 'react'

export const Accordion = ({
  children,
  className,
  ...props
}: {
  children: Node,
  className?: string,
}) => (
  <dl className={className} {...props} role="presentation">
    {children}
  </dl>
)
