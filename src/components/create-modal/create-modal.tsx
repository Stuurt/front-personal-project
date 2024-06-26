import {useEffect, useState} from "react";
import {useHairDataMutate} from "../../hooks/useHairDataMutate.ts";
import {HairData} from "../../interface/HairData.ts";

import "./modal.css"

interface InputProps {
    label: string,
    value: string | number,
    updateValue(value: any): void
}

const Input = ({ label, value, updateValue } : InputProps) => {
    return (
        <>
            <label>{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)}></input>
        </>
    )
}

interface ModalProps {
    closeModal(): void
}

export function CreateModal( {closeModal}: ModalProps){
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [image, setImage] = useState("");
    const { mutate, isSuccess, isLoading } = useHairDataMutate();

    const submit = () => {
        const hairData: HairData = {
            title,
            price,
            image
        }
        mutate(hairData)
    }

    useEffect(() => {
        if(!isSuccess) return
        closeModal();
    }, [isSuccess])

    return(
        <div className ="modal-overlay">
            <div className ="modal-body">
                <h2>Cadastre um novo item na Barbearia</h2>
                <form className="input-container">
                    <Input label="title" value={title} updateValue={setTitle} />
                    <Input label="price" value={price} updateValue={setPrice} />
                    <Input label="image" value={image} updateValue={setImage} />
                </form>
                <button onClick={submit} className="btn-secondary">
                    {isLoading ? 'postando...' : 'postar'}
                </button>
            </div>
        </div>
    )
}