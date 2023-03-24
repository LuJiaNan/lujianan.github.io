import {Link,Outlet, useResolvedPath} from 'react-router-dom'
export const Item = () => {
    const path = useResolvedPath('123')
    return (
        <div>
            <Link to="123">详情</Link>
            <Outlet/>
        </div>
    )
}