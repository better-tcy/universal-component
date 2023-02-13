import { useEffect, useRef } from 'react'
import { renderComponent, Test } from './universal-component'

function App() {

  const dom = useRef(null)

  useEffect(() => {
    renderComponent(Test, {
      text: '哈哈',
      onCallBack: (e) => { console.log(e) }
    }, dom.current)
  }, [])

  return (
    <div ref={dom}></div>
  )
}

export default App
