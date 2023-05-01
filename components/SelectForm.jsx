const continents = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

function SelectForm({filterByRegion, setFilterByRegion}) {

    return (
        <select
            className="md:w-80 w-full h-full text-gray-600 dark:text-gray-300 focus-within:text-gray-400 p-4 leading-tight bg-white dark:bg-[#2b3743] shadow appearance-none focus:outline-none focus:shadow-outline"
            value={filterByRegion}
            onChange={event => setFilterByRegion(event.target.value)}
        >
            <option value="">{/* Placeholder */}Filter by Region</option>
            {continents.map((continent) => (
                <option key={continent} value={continent}>
                    {continent}
                </option>
            ))}
        </select>
    );
}

export default SelectForm;