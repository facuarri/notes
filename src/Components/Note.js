import Confirm from "./Confirm"
import { useState } from "react"

const Note = ({title, content, id, onDelete}) =>{

    const [isClicked, setIsClicked] = useState(false)

/*     const handleClick = () => {
        onDelete(id)
        setIsClicked(true)
    } */

/*     const handleClick = () => {
        setIsClicked(true)
        if(window.confirm()){
            (onDelete(id))
        }
    } */

    const handleClick = () =>{
        setIsClicked(true)
    }

    return(
        <>
            {isClicked && <Confirm clickedNoBtn={setIsClicked} clickedYesBtn={onDelete} id={id} />}
            <div className="note">
                <h1>{title}</h1>
                <p>{content}</p>
                <button onClick={handleClick} ><i class="far fa-trash-alt"></i></button>
            </div>
        </>
    )
}

export default Note