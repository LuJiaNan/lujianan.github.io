import {atom, selector} from 'recoil'
const textState = atom({
    key: 'textState',
    default: ''
})

const countState = selector({
    key: 'countState',
    get: ({get}) => {
        const text = get(textState);
        return text.length
    }
})

export {
    textState,
    countState
}