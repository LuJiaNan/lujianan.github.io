import { useEffect } from "react";
import {getUsersAsync, getUserAsync, addUserAsync} from '../../utils/api'

export const NoMatch = () => {
    useEffect(() => {
        getUsersAsync().then(res => {
            // console.log(res)
        })
        getUserAsync({
            id: 123
        }).then(res => {
            console.log('当前用户：' + res.data.name)
        })

    },[])

    const addUser = () => {
        addUserAsync({
            name: '小明',
            age: 10,
            sex: "男"
        }).then(res => {
            // console.log(res.message)
        })
    }
    return (
        <button onClick={addUser}>add</button>
    )
}