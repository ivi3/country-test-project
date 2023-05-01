import React from 'react';
import useSWR from "swr";
import Head from "next/head";
import {fetcher} from "../../config/api";
import {useRouter} from "next/router";
import BackIcon from "../../assets/icons/back.svg"
import Loading from "../../layouts/Loading";
import mitt from "next/dist/shared/lib/mitt";
import Image from "next/image";
import Link from "next/link";

function DetailsPage({code}) {
    const router = useRouter()
    const {data, mutate,error} = useSWR(`https://restcountries.com/v2/alpha/${code}`, fetcher)
    const {data: allData, error: allError} = useSWR('https://restcountries.com/v2/all', fetcher)

    if (error) return <button onClick={()=>{
        mutate()
    }}>Try Again</button>
    if (!data) return <Loading/>

    return (
        <div>
            <Head>
                <title>{`${data?.name ?? "Country Details Page"}`}</title>
            </Head>
            <main className="container mx-auto px-4 py-16">
                <div className="mb-10 sm:mb-16">
                    <button onClick={router.back} className="flex items-center gap-2 shadow rounded-lg px-4 py-2 dark:bg-[#2b3743] dark:[&_svg]:fill-white">
                        <BackIcon/>
                        <span>Back</span>
                    </button>
                </div>
                <div className="flex max-lg:flex-wrap gap-10 sm:gap-20">
                    <div className="max-lg:h-80 h-96 basis-full lg:basis-5/12 relative">
                        <Image className="object-contain md:object-cover lg:p-4 rounded-2xl lg:dark:bg-[#2b3743] aspect-video"
                               fill
                               src={data?.flag}
                               alt={data?.name}/>
                    </div>
                    <div className="basis-full lg:basis-7/12 py-5">
                        <h1 className={"text-2xl font-bold mb-8"}>
                            {data?.name}
                        </h1>
                        <ul className={"grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"}>
                            <li>
                                <span className="font-bold">Native Name: </span>
                                <span>{data?.nativeName}</span>
                            </li>
                            <li>
                                <span className="font-bold">Population: </span>
                                <span>{data?.population.toLocaleString()}</span>
                            </li>
                            <li>
                                <span className="font-bold">Region: </span>
                                <span>{data?.region}</span>
                            </li>
                            <li>
                                <span className="font-bold">Sub Region: </span>
                                <span>{data?.subregion}</span>
                            </li>
                            <li>
                                <span className="font-bold">Capital: </span>
                                <span>{data?.capital}</span>
                            </li>
                            <li className="max-sm:mt-8">
                                <span className="font-bold">Top Level: </span>
                                <span>{data?.topLevelDomain?.[0]}</span>
                            </li>
                            <li>
                                <span className="font-bold">Currencies: </span>
                                <span>{data?.currencies?.[0]?.name}</span>
                            </li>
                            <li className="max-sm:mb-8">
                                <span className="font-bold">Languages: </span>
                                <span>{data?.languages?.map(i => (i.name)).join(", ")}</span>
                            </li>
                        </ul>

                        <div className="flex items-start flex-wrap sm:flex-nowrap gap-5">
                            <span className="font-bold flex-none">Border Countries:</span>
                            { data?.borders && <div className="flex items-center gap-3 flex-wrap flex-auto">
                                { (allData && !allError) ?
                                    data.borders.map((v,k)=> (
                                            <Link className="shadow px-6 py-2 text-center align-middle rounded dark:bg-[#2b3743]" key={k} href={`/country/${v}`}>
                                            {
                                                allData.find((vv)=>{
                                                    return vv.alpha3Code === v
                                                })?.name
                                            }
                                            </Link>
                                    ))
                                :
                                    data?.borders?.map(country => (
                                        <Link className="shadow px-6 py-2 text-center align-middle rounded dark:bg-[#2b3743]" key={country} href={`/country/${country}`}>
                                            {country}
                                        </Link>
                                    ))
                                }
                            </div>
                            }
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

DetailsPage.getInitialProps = async ({query}) => {
    const {code} = query

    return {code}
}

export default DetailsPage