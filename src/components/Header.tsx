import { ComponentProps } from "react";

const HeaderButton = (props:ComponentProps<'button'>) => (
    <button className="text-zinc-800 text-sm">
        {props.children}         
    </button>
)

const HeaderContainer = ({children, ...props}:ComponentProps<'button'>) => {
    return (
        <header {...props} className="bg-white sticky top-0 w-full p-4 flex items-center justify-around">  
            {children}
        </header>
    )
}


const Header = {
    Container: HeaderContainer,
    Button: HeaderButton
}

export default Header