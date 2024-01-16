import { useDispatch } from 'react-redux';
import { removeFromChipsList } from '../utils/slices/chipsSlice';

function Chip(props) {
    const dispatch = useDispatch();
    const { chipName, id, avatar } = props;
    return (
        <div className="flex border mr-2 mb-2 h-8 rounded-full bg-slate-200">
            <div className="mr-1">
                <img src={avatar} className="h-8 w-8 rounded-full" />
            </div>
            <div className="mr-1 flex justify-center align-center">{chipName}</div>
            <div className="mr-1 cursor-pointer" onClick={() => dispatch(removeFromChipsList(id))}>
                &#10005;
            </div>
        </div>
    );
}

export default Chip;
