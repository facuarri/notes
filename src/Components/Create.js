import { useState } from "react"

const Create = ({onAdd}) => {

    const [note, setNote] = useState({title:"", content:""})

    const handleChange = (event) => {
        const {name, value} = event.target
        setNote((prevValues) => {
            return{
            ...prevValues,
            [name]: value
            }})
    }

    const handleClick = (e) => {
            onAdd(note)
            e.preventDefault()
            setNote({title:"", content:""})
            setIsClicked(false)
    }

    const [isClicked, setIsClicked] = useState(false)

    const clickedTitle = () =>{
        setIsClicked(true)
    }

    return(
        <div>
            <form>
                {isClicked && <input name="title" value={note.title} type="text" placeholder="Note title" onChange={handleChange} />}
                <textarea name="content" value={note.content} placeholder="Take a note..." rows={isClicked ? "3" : "1"} onClick={clickedTitle} onChange={handleChange} />
                {isClicked && <button onClick={handleClick}><i class="fas fa-plus"></i></button>}
            </form>
        </div>
    )
}

export default Create