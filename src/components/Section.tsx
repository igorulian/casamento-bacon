import { Lora } from 'next/font/google'
import { ReactNode } from 'react'


type Props = {
    children: string
}

const lora = Lora({ subsets: ['latin']})

const SectionTitle = ({ children }:Props) => (
    <h4 className={'text-white'}> {children} </h4>
)

type ContainerProps = { 
    children?: ReactNode
}

const SectionContainer = ({ children }:ContainerProps) => (
    <section className='flex flex-col w-full p-8 justify-center bg-primary'>
        {children}
    </section>
)
const Section = {
    Container: SectionContainer,
    Title: SectionTitle
}


export default Section