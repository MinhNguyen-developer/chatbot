import {FC} from 'react'
import {SignIn} from "@clerk/nextjs";

type Props = {}
const Page: FC<Props> = () => {
    return <SignIn />
}
export default Page