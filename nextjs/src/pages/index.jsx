import Head from 'next/head'
// import Link from 'next/link'
// import { useAuth } from '@/hooks/auth'
import axios from "../lib/axios";
import React, { useEffect } from 'react';

export default function Home() {
    // const { user } = useAuth({ middleware: 'guest' })
    // axios.get("/").then(response => {
    //     console.log(response.data);
    // });

    useEffect(() => {
        axios.get("/").then((res) => {
        const data = res.data;
        console.log(data);
       });
      }, []);

    return (
        <>
            <Head>
                <title>Laravel Next.js</title>
            </Head>

            <h1></h1>

        </>
    )
}
