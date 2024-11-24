import Button from "../../ui/Button.jsx";
import {useState} from "react";
import Modal from "../../ui/Modal.jsx";
import CreateCabinForm from "./CreateCabinForm.jsx";
import CabinTable from "./CabinTable.jsx";

// function AddCabin(){
//     const [isOpenModal, setOpenModal] = useState(false);
//
//     return (
//         <div>
//             <Button onClick={() => setOpenModal((show) => !show)}>
//                 Add new cabin
//             </Button>
//             {isOpenModal && (<Modal onClose={()=>setOpenModal(false)}>
//                 <CreateCabinForm onCloseModal={()=>setOpenModal(false)}/>
//             </Modal>)}
//         </div>
//     )
// }

function  AddCabin() {
    return (
        <div>
            <Modal>
                <Modal.Open opens='cabin-form'>
                    <Button>Add new cabin</Button>
                </Modal.Open>
                <Modal.Window name='cabin-form'>
                    <CreateCabinForm/>
                </Modal.Window>

                {/*<Modal.Open opens='table'>*/}
                {/*    <Button>Show table</Button>*/}
                {/*</Modal.Open>*/}
                {/*<Modal.Window name='table'>*/}
                {/*    <CabinTable/>*/}
                {/*</Modal.Window>*/}
            </Modal>
        </div>
    )
}

export default AddCabin;