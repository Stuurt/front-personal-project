import { useState } from 'react'
import './App.css'
import {Card} from "./components/card/card.tsx";
import { useHairData } from "./hooks/useHairData.ts";
import {CreateModal} from "./components/create-modal/create-modal.tsx";

function App() {
    const { data } = useHairData();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(prev => !prev)
    }

  return (
    <div className="container">
        <h1>Barbearia</h1>
        <div className="card-grid">
            {data?.map(hairData => <Card
                price={hairData.price}
                title={hairData.title}
                image={hairData.image}
                />
            )}
            {isModalOpen && <CreateModal closeModal={handleOpenModal}/>}
            <button onClick={handleOpenModal}>novo</button>
        </div>
    </div>
  )
}

export default App
