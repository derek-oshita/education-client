type Name = string; 

type AddName = (newName: string) => void; 

type ModalProps = {
    modalOpen: boolean; 
}

type ModalContentProps = {
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}

type Post = {
    nameOfSchool: string; 
    degree: string; 
    fieldOfStudy: string; 
    startYear: number; 
    endYear: number; 
    grade: number; 
    descriptionField: string;   
}
