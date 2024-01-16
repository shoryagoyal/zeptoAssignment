import Chip from './Chip';
import { useSelector } from 'react-redux';

function ChipsContainer() {
    const chipsItem = useSelector((state) => state.chipsSlice.chipsItem);
    return (
        <div className="flex flex-wrap">
            {chipsItem.length != 0 &&
                chipsItem.map((item) => <Chip chipName={item.name} id={item} key={item.id} avatar={item.avatar} />)}
        </div>
    );
}

export default ChipsContainer;
