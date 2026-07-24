import { useState } from 'react'
import Search from './components/Search'
import FoodList from './components/FoodList'
import Nav from './components/Nav'
import Container from './components/Container'
import FoodDetails from './components/FoodDetails'

import './App.css'

function App() {
  const [foodData, setFoodData] = useState([])
  const [foodId, setFoodId] = useState("656329")

  return (
    <>
    <Nav/>
    <Search foodData={foodData} setFoodData={setFoodData}/>
    <Container>
      {/* this lower is actualyyy a child component here */}
      <InnerContainer>
      <FoodList  setFoodId={setFoodId}
      foodData={foodData} />
      </InnerContainer>
      <InnerContainer>
        <FoodDetails foodId={foodId}/>
      </InnerContainer>
    </Container>
    </>
  )
}

export default App
