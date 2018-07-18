// @flow

import { Component } from 'react'
import type { Node } from 'react'

export class Item extends Component<{
  activeAccordions: Array<string | number>,
  children: ({
    getButtonProps: Function,
    getPanelProps: Function,
  }) => Node,
  id: string | number,
  startOpen?: boolean,
  onClick: (id: string | number) => void,
  onKeyDown: () => void,
  setRef: (id: string | number, ref: HTMLButtonElement) => void,
}> {
  componentDidMount() {
    const { id, startOpen, onClick } = this.props

    if (startOpen) {
      onClick(id)
    }
  }

  getButtonProps = () => {
    const { activeAccordions, id, onClick, onKeyDown, setRef } = this.props
    const isOpen = activeAccordions.includes(id)

    return {
      'aria-controls': `accordion-panel-${id}`,
      'aria-expanded': isOpen,
      id: `accordion-${id}`,
      isOpen,
      onClick: () => {
        onClick(id)
      },
      onKeyDown,
      setRef,
    }
  }

  getPanelProps = () => {
    const { activeAccordions, id } = this.props
    const isOpen = activeAccordions.includes(id)

    return {
      'aria-labelledby': `accordion-${id}`,
      id: `accordion-panel-${id}`,
      isOpen,
      role: 'region',
    }
  }

  render() {
    return this.props.children({
      getButtonProps: this.getButtonProps,
      getPanelProps: this.getPanelProps,
    })
  }
}
