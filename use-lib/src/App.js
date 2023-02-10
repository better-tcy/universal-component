import { useEffect, useRef } from 'react'
import { renderComponent, Test } from './universal-component'

function App() {

  const dom = useRef(null)

  useEffect(() => {
    renderComponent(Test, dom.current)
  }, [])

  return (
    <div ref={dom}></div>
  )
}

export default App
