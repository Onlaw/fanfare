// @flow

import { PureComponent } from 'react'
import type { Node } from 'react'

type Props = {
  activeAccordions: Array<string | number>,
  id: string | number,
  startOpen?: boolean,
  onClick: (id: string | number) => void,
  onKeyDown: () => void,
  render: ({ getButtonProps: Function, getPanelProps: Function }) => Node,
  setHeaderRef: (id: string | number, ref: HTMLButtonElement) => void,
}

export class Item extends PureComponent<Props> {
  componentDidMount() {
    const { id, startOpen, onClick } = this.props

    if (startOpen) {
      onClick(id)
    }
  }

  getButtonProps = () => {
    const {
      activeAccordions,
      id,
      onClick,
      onKeyDown,
      setHeaderRef,
    } = this.props
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
      ref: (ref: HTMLButtonElement) => setHeaderRef(id, ref),
      setHeaderRef,
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
    return this.props.render({
      getButtonProps: this.getButtonProps,
      getPanelProps: this.getPanelProps,
    })
  }
}
