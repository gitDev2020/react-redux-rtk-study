import { createSlice } from '@reduxjs/toolkit';

let initSate = {
    product: {
        title: "Galaxy S100",
        description: " Android, экран 5.8\" AMOLED (1440x2960), Exynos 8895, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты\n" +
        "                    памяти, камера 12 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный",
        imgUrl: 'https://content2.onliner.by/catalog/device/header/272d80e5c1b51824c5034a0dffb29254.jpeg'
    },
    comments: [
        {
            id: 1,
            text: 'Cool device'
        },
        {
            id: 2,
            text: 'Shit device'
        },
        {
            id: 3,
            text: 'Yoyoo'
        }
    ]
}

const productSlice = createSlice({
    name: "productPage",
    initialState: initSate,
    reducers: {
        addComment: (state, action) => {
            const newComment = {
                id: state.comment.length + 1,
                text: action.payload
            }
            state.comment.push(newComment)
        }
    }
})

export const { addComment } = productSlice.actions;
export default productSlice.reducer;