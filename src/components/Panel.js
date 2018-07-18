// @flow

import React, { type Node } from 'react'

export const Panel = ({
  children,
  className,
  ...props
}: {
  children: Node,
  className?: string,
}) => (
  <dd className={className} {...props}>
    {children}
  </dd>
)
