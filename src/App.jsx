function App() {
  const emojis = ["🌸", "⚡️", "👻", "👽", "🐬", "🍄"]
  const back = "🍕"
  return (
    <main>
      <div className="cardContainer">
        {emojis.map((emoji) => (
          {emoji}
        ))}
      </div>
    </main>
  )
}

export default App
