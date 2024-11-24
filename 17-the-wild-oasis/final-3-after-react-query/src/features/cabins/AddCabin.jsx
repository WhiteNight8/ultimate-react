import Button from "../../ui/Button.jsx";
import {useState} from "react";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";

function AddCabin(){
    const [isOpenModal, setOpenModal] = useState(false);

    return (
        <div>
            <Button onClick={() => setOpenModal((show) => !show)}>
                Add new cabin
            </Button>
            {isOpenModal && (<Modal onClose={()=>setOpenModal(false)}>
                <CreateCabinForm onCloseModal={()=>setOpenModal(false)}/>
            </Modal>)}
        </div>
    )
}

export default AddCabin;