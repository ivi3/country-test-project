import Image from "next/image";
import Link from "next/link";
import {APP_PATH} from "../config/paths";

export default function CountryCard({
                                        flag,alpha3Code, name, population, region, capital
                                    }) {
    return (
        <section className="relative rounded-md overflow-hidden shadow-md animate-in zoom-in-50 dark:bg-[#2b3743]">
            <Link href={APP_PATH.DETAILS_PAGE(alpha3Code)} className="absolute inset-0 z-50"/>
            <div className="relative w-full aspect-video">
                <Image priority className="w-full h-48 object-cover" fill src={flag} alt={name}/>
            </div>
            <div className="pt-4 p-8">
                <h2 className="text-xl font-bold mb-2">{name}</h2>
                <p><strong>Population:</strong> {population.toLocaleString()}</p>
                <p><strong>Region:</strong> {region}</p>
                <p><strong>Capital:</strong> {capital}</p>
            </div>
        </section>
    )
}