import { useNavigate, useParams } from "react-router-dom"
import { useRecoilState, useRecoilValue } from "recoil";
import { textState, countState} from '../store'

export const Detail = () => {
    const params = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={()=>{
                navigate('/')
            }}>{params.id}</button>
            <TextInput/>
            <Count/>
        </div>
    )
}

const TextInput = () => {
    const [text, setText] = useRecoilState(textState);
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setText(value)
    }
    return (
        <div>
            <input value={text} onChange={onChange}/>
        </div>
    )
}

const Count = () => {
    const count = useRecoilValue(countState); 
    return (
        <div>{count}</div>
    )
}
