import Text from "./components/Text/Text"
import Button from "./components/Button/Button"
import Card from "./components/Card/Card"

function App() {
  return (
    <>
      <Text>This is a simple text component.</Text>
      <Button><p>Click Me</p></Button>
      <span style={{ marginLeft: 12 }} />
      <Button blue><p>Click Me</p></Button>
      <hr />
      <hr />
      <Card />
    </>
  )
}

export default App
