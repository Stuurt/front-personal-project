//import { useState } from 'react'
import './App.css'
import {Card} from "./components/card/card.tsx";
import { useHairData } from "./hooks/useHairData.ts";

function App() {
    const { data } = useHairData();

  return (
    <div className="container">
        <h1>Barbearia</h1>
        <div className="card-grid">
            {data?.map(hairData => <Card
                price={hairData.price}
                title={hairData.image}
                image={hairData.title}
                />
            )}
        </div>
    </div>
  )
}

export default App
