import { BasicLayout } from '@/layouts/BasicLayout'
import React from 'react'

interface Props {
    
}

const Home = (props: Props) => {
    return (
        <BasicLayout>
            <h1 className="text-2xl font-bold">TailwindCSS Snippets</h1>
        </BasicLayout>
    )
}

export default Home
