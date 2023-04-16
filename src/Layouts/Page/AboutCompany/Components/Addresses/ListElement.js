import styled from 'styled-components';
import SecondaryButton from '../../../../../Components/SecondaryButton';
import EditIcon from '../../../../../Icons/EditIcon';
import RemoveIcon from '../../../../../Icons/RemoveIcon';
import IconOnlyButton from '../../../../../Components/IconOnlyButton.js';

const Option = styled.div`
    width: 333px;
    color: #0F172A;
`;

function ListElement(props) {
    return (
        <div className='d-flex flex-row align-items-center align-self-stretch gap-1 p-3'>
            <Option className='flex-grow-1 p-2 me-2'>{props.children}</Option>
            <IconOnlyButton icon={<EditIcon/>}/>
            <IconOnlyButton icon={<RemoveIcon/>}/>
        </div>
    );
}

export default ListElement;