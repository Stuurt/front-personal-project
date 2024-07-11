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


    /* Esse return representa meu conteudo do site, o CSS corresponde a #heading */

  return (
      <div className="container">
          <header id="heading">
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
          </header>
          <div id="rodape">
              <li>Contato</li>
              <li>Sobre nos</li>
              <li>Termos</li>
              <li>Politica de privacidade</li>
              <li>Ajuda e suporte</li>
          </div>
      </div>

  )
}

export default App
