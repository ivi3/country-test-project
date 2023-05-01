import useSWR from 'swr'
import Header from '../layouts/Header'
import CountryCard from '../components/CountryCard'
import Head from "next/head";
import SelectForm from "../components/SelectForm";
import SearchCountry from "../components/SearchCountry";
import {useEffect, useMemo, useRef, useState} from "react";
import {fetcher} from "../config/api";
import Loading from "../layouts/Loading";


export default function Home() {
    const {data, error} = useSWR('https://restcountries.com/v2/all', fetcher)
    const [filterByCountry, setFilterByCountry] = useState("")
    const [filterByRegion, setFilterByRegion] = useState("")
    const filteredData = useMemo(() => {
        let _data = data
        if (filterByCountry) {
            _data = _data
                .filter((country) => (country.name.toLocaleLowerCase().includes(filterByCountry.toLocaleLowerCase())))
        }
        if (filterByRegion) {
            _data = _data
                .filter((country) => (country.region.toLocaleLowerCase().includes(filterByRegion.toLocaleLowerCase())))
        }
        return _data
    }, [data, filterByCountry, filterByRegion])


    if (error) return <div>Error loading data</div>
    if (!data) return <Loading/>

    return (<>
            <Head>
                <title>REST Countries V2 API</title>
            </Head>
            <main className="container mx-auto px-4 py-8">
                <div className="flex justify-between flex-wrap mb-10 md:mb-0">
                    <SearchCountry {...{filterByCountry, setFilterByCountry}}/>
                    <SelectForm {...{filterByRegion, setFilterByRegion}}/>
                </div>
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-16">
                    {filteredData.map((country,k) => {
                        return <CountryCard key={k + country.alpha3Code} {...country}/>
                    })}
                </section>
            </main>
        </>)
}

