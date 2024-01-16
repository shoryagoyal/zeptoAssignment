import { createSlice } from '@reduxjs/toolkit';

const chipsSlice = createSlice({
    name: 'chips', // This is used to identify the slice
    initialState: {
        chipsItem: [],
    },
    reducers: {
        addToChipsList: (state, action) => {
            const { id, name, avatar } = action.payload;
            let isChipPresent = false;
            const val = JSON.parse(JSON.stringify(state.chipsItem));
            for (let chip of val) {
                if (chip.id == id) {
                    isChipPresent = true;
                    break;
                }
            }
            if (!isChipPresent) {
                state.chipsItem.push({
                    name: name,
                    avatar: avatar,
                    id: id,
                });
            }
        },
        removeFromChipsList: (state, action) => {
            let chipIndex = -1;
            const val = JSON.parse(JSON.stringify(state.chipsItem));
            for (let i = 0; i < val.length; i++) {
                if (val[i].id == action.payload.id) {
                    chipIndex = i;
                    break;
                }
            }
            if (chipIndex != -1) state.chipsItem.splice(chipIndex, 1);
        },
    },
});

export const { addToChipsList, removeFromChipsList } = chipsSlice.actions;

export default chipsSlice.reducer;
