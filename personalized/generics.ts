// S - state
// T - type
// K - key
// V - value
// E - element

function useState<T extends number | string = string>() {
  let state: T

  function get() {
    return state
  }

  function set(newValue: T) {
    state = newValue
  }

  return { get, set }
}

let newState = useState<string | number>()
newState.get()
newState.set(123)
newState.set('Lucas')