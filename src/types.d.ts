type Name = string; 

type AddName = (newName: string) => void; 

type ModalProps = {
    modalOpen: boolean; 
}

type ModalContentProps = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}