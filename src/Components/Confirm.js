const Confirm = ({clickedNoBtn, clickedYesBtn, id}) => {

    const clickedNo = () =>{
        clickedNoBtn(false)
    }

    const clickedYes = () =>{
        clickedYesBtn(id)
        clickedNoBtn(false)
    }

    return(
        <>
            <div className="confirmDialogContainer">
                <div className="confirmDialog">
                    <h1>Are you sure?</h1>
                    <p>By clicking yes you will delete this note.</p>
                    <button className="btnNo" onClick={clickedNo} >No</button>
                    <button className="btnYes" onClick={clickedYes} >Yes</button>
                </div>
            </div>
        </>
    )
}

export default Confirm