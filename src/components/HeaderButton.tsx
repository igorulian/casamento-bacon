import { ComponentProps } from "react";



const HeaderButton = (props:ComponentProps<'button'>) => (
    <button className="text-black">
        {props.children}         
    </button>
)

export default HeaderButton