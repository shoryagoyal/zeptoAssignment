import { useDispatch } from 'react-redux';
import { addToChipsList } from '../utils/slices/chipsSlice';

function SearchResult(props) {
    const dispatch = useDispatch();
    const { name, email, userId, avatar } = props;
    function addUserToChipList() {
        dispatch(
            addToChipsList({
                id: userId,
                name: name,
                avatar: avatar,
            }),
        );
    }
    function searchResultClickHandler() {
        addUserToChipList();
        props.clearInput();
    }
    return (
        <div
            className="flex w-[100%] px-[7%] py-3 cursor-pointer hover:bg-slate-200"
            onClick={searchResultClickHandler}
        >
            <div>
                <img src={avatar} className="h-8 w-8 rounded-full mr-3" />
            </div>
            <div className="w-[35%] mr-2 text-black">{name}</div>
            <div className="w-[35%]  text-slate-500">{email}</div>
        </div>
    );
}

export default SearchResult;
