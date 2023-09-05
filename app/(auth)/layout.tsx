import {FC, ReactNode} from 'react'

type Props = {
    children: ReactNode
}
const Layout: FC<Props> = ({children}) => {
    return <div className='flex items-center justify-center h-full'>{children}</div>
}
export default Layout