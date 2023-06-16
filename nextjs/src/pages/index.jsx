import Head from 'next/head'
import axios from "../lib/axios";
import useSWR from 'swr'

export default function Home() {
		function getLaravelVersion() {
			const { data, error, isLoading } = useSWR('/',axios);
			
			if (error) return "failed to load";
			if (isLoading) return "loading...";
			try {
				return data.data.Laravel;
			} catch (e) {
				return "loading...";
			}
		}
		const data = {
			version: -1
		}

		data.version = getLaravelVersion();
    return (
        <>
            <Head>
                <title>Laravel Next.js</title>
            </Head>

            <h1>Laravel version: {data.version}</h1>

        </>
    )
}
