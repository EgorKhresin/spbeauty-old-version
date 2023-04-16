import PrimaryButton from "../../../../../Components/PrimaryButton";
import SecondaryButton from "../../../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div className='d-flex flex-column justify-content-between cgap-4 border border-grey rounded-2'>
            <div>
                <div className='title m-4'>Адреса заведений</div>
                <div className='d-inline-flex flex-column gap-2'>
                    <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
                    <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
                </div>
            </div>
            <div className='m-4'>
                <SecondaryButton>Добавить филиал</SecondaryButton>
            </div>
        </div>
    );
}

export default Addresses;