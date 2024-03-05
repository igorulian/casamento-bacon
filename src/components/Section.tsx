import { Lora } from 'next/font/google'
import { ComponentProps, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'


type Props = {
    children: string
}

const lora = Lora({ subsets: ['latin']})

const SectionTitle = ({ children }:Props) => (
    <h4 className={'text-white'}> {children} </h4>
)

const SectionContainer = ({ children, ...props }:ComponentProps<'section'>) => (
    <section className={twMerge('flex flex-col h-dvh w-full p-8 bg-white', props.className)}>
        {children}
    </section>
)
const Section = {
    Container: SectionContainer,
    Title: SectionTitle
}


export default Section