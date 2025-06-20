import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log(count)
  }, [count])

  return (
    <div className="mx-auto">
      <h1 className="text-lg text-purple-500">Vite + React</h1>
      <div>
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </div>
  )
}

export default App
