// @flow

import React, { Component } from 'react'
import { Accordion } from '../components/Accordion'
import type { Node } from 'react'

export class Fanfare extends Component<
  {
    className?: string,
    allowMultiple: boolean,
    activeAccordions: Array<string | number>,
    children: ({ getItemProps: Function }) => Node,
  },
  {
    activeAccordions: Array<string | number>,
  },
> {
  state = { activeAccordions: this.props.activeAccordions || [] }

  accordionItems = {}

  handleClick = (id: string | number): void => {
    this.toggleAccordion(id)
  }

  handleKeyDown = (e: SyntheticKeyboardEvent<*>): void => {
    // @todo: There has to be a better way to do this!
    const focusedElement = document.activeElement
    let focusedAccordion

    if (focusedElement) {
      focusedAccordion =
        focusedElement.tagName === 'BUTTON'
          ? focusedElement
          : focusedElement.parentElement
    }

    const currentIndex = parseInt(
      Object.keys(this.accordionItems).filter(
        i => this.accordionItems[i].ref === focusedAccordion,
      ),
      10,
    )

    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
      e.preventDefault()

      const moveIndexAmount = e.key === 'ArrowUp' ? -1 : 1
      const indexToFocus = this.cycleAccordionIndex(
        currentIndex,
        moveIndexAmount,
      )

      if (indexToFocus) {
        this.accordionItems[indexToFocus].ref.focus()
      }
    }
  }

  setRef = (id: string | number, ref: HTMLButtonElement): void => {
    const existingReference = Object.keys(this.accordionItems).filter(
      r => this.accordionItems[r].id === id,
    )[0]

    if (!existingReference) {
      // Subtract 1 to stay zero-based
      const numberOfRefs = Object.keys(this.accordionItems).length - 1

      this.accordionItems[numberOfRefs + 1] = { id, ref }
    }
  }

  cycleAccordionIndex = (
    currentIndex: number,
    amount: number,
  ): void | number => {
    const lastIndex = Object.keys(this.accordionItems).length - 1

    if (lastIndex < 0) {
      return
    }

    if (currentIndex === null) {
      currentIndex = amount > 0 ? -1 : lastIndex + 1
    }

    let newIndex = currentIndex + amount

    if (newIndex < 0) {
      newIndex = lastIndex
    } else if (newIndex > lastIndex) {
      newIndex = 0
    }

    return newIndex
  }

  toggleAccordion = (id: number | string) => {
    this.setState(state => {
      const { activeAccordions } = state
      const indexOf = activeAccordions.indexOf(id)
      let accordionItems = [...activeAccordions]

      if (this.props.allowMultiple) {
        accordionItems =
          indexOf === -1
            ? [...activeAccordions, id]
            : activeAccordions.filter(i => i !== id)
      } else {
        accordionItems = indexOf === -1 ? [id] : []
      }

      return { activeAccordions: accordionItems }
    })
  }

  getItemProps = ({ ...props }: ?Object) => {
    const { activeAccordions } = this.state

    return {
      ...props,
      activeAccordions,
      onClick: this.handleClick,
      onKeyDown: this.handleKeyDown,
      setRef: this.setRef,
    }
  }

  render() {
    const { children, className } = this.props
    const { activeAccordions } = this.state

    return (
      <Accordion className={className}>
        {children({
          activeAccordions,
          getItemProps: this.getItemProps,
        })}
      </Accordion>
    )
  }
}
