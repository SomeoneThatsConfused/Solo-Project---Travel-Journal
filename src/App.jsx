import './App.css'
import Card from './components/card/card'
import Data from './assets/data'
function App() {
  const cardComponents = Data.map(data => {
    return <Card key={data.id} data={data} />
  })
  return (
    <>
      {cardComponents}
    </>
  )
}

export default App
