const invalidOperationMessage = 'Invalid OP'

export const initialState = {
  currentValue: '0',
  operator: null,
  previousValue: null,
}

export const handleNumber = (value: number, state: { currentValue: string; }) => {
  if (state.currentValue === '0') {
    return {currentValue: `${value}`}
  }

  return {
    currentValue: `${state.currentValue}${value}`,
  }
}

export const handleEqual = (state: { currentValue: string; previousValue: string; operator?: string }) => {
  const {currentValue, previousValue, operator} = state

  const current = parseFloat(currentValue)
  const previous = parseFloat(previousValue)
  const resetState = {
    operator: null,
    previousValue: null,
  }

  if (operator === '/') {
    return {
      currentValue: current === 0.0 ? invalidOperationMessage : String(previous / current),
      ...resetState,
    }
  }

  if (operator === '*') {
    return {
      currentValue: previous * current,
      ...resetState,
    }
  }

  if (operator === '+') {
    return {
      currentValue: previous + current,
      ...resetState,
    }
  }

  if (operator === '-') {
    return {
      currentValue: previous - current,
      ...resetState,
    }
  }
  return state
}

export const handlePercent = (state: { currentValue: string; previousValue: string; operator?: string }) => {
  const {currentValue, previousValue, operator} = state

  const current = parseFloat(currentValue)
  const previous = parseFloat(previousValue)
  const resetState = {
    operator: null,
    previousValue: null,
  }
  if (operator === '/') {
    return {
      currentValue: previous / (current / 100),
      ...resetState,
    }
  }

  if (operator === '*') {
    return {
      currentValue: previous * current / 100,
      ...resetState,
    }
  }

  if (operator === '+') {
    return {
      currentValue: previous + (previous * current / 100),
      ...resetState,
    }
  }

  if (operator === '-') {
    return {
      currentValue: previous - (previous * current / 100),
      ...resetState,
    }
  }
  return state
}

export const handleDelete = (state: { currentValue: string; }) => {
  return {
    currentValue: state.currentValue.length !== 1 ? state.currentValue.substring(0, state.currentValue.length - 1) : '0',
  }
}

const calculator = (type: string, value: number, state: { currentValue: string; previousValue: string; operator?: string; }) => {
  if (state.currentValue === invalidOperationMessage) {
    state.currentValue = '0'
  }
  switch (type) {
    case 'number':
      return handleNumber(value, state)
    case 'operator':
      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: '0',
      }
    case 'equal':
      return handleEqual(state)
    case 'delete':
      return handleDelete(state)
    case 'clear':
      return initialState
    case 'percentage':
      return handlePercent(state)
    default:
      return state
  }
}

export default calculator
