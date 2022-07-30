import SecondaryButton from "../../../Components/SecondaryButton";
import ListElement from "./ListElement";
function Addresses() {
    return (
        <div class='d-inline-flex flex-column gap-2'>
            <div class='body'>Адреса заведений</div>
            <ListElement>Санкт-Петербург, Невский пр-т. 28</ListElement>
            <ListElement>Санкт-Петербург, Казанская ул, 7</ListElement>
            <SecondaryButton>Добавить филиал</SecondaryButton>
        </div>
    );
}

export default Addresses;