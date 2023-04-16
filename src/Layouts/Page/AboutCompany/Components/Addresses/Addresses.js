import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='cgap-4 border border-grey rounded-2'>
            <div className='title ps-4 m-4'>Адреса заведений</div>
            <div className='d-inline-flex flex-column gap-2'>
                <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                <div className='p-5 m-5'>
                <SecondaryButton>Добавить филиал</SecondaryButton>
                </div>
            </div>
        </div>
    );
}

export default Addresses;