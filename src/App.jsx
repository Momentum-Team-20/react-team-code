import { useState } from "react"

function App() {
  const emojis = ["🌸", "⚡️", "👻", "👽", "🐬", "🍄"]
  const back = "🍕"

  return (
    <main>
      <div className="cardContainer">
        {emojis.map((emoji) => (
          // <div>{emoji}</div>
          <Card
            front_card={emoji}
            back_card={back}
          />
        ))}
      </div>
    </main>
  )
}

function Card({ front_card, back_card }) {
  // finish writing useState for flipping card over
  const [ isFlipped, setIsFlipped ] = useState(false)

const handleFlippedCard = (event) => {
  console.log("flipping card")
  if (!isFlipped) {
    setIsFlipped(true)
  } 
} 

  return (
    <div>
      <div>{front_card}</div>
      <div onClick={handleFlippedCard}>{back_card}</div>
    </div>
  )
}


export default App

