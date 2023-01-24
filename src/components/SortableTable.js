import Table from "./Table";
import UseSortData from "../hooks/use-sort-data";


const SortableTable = (props) => {

    const { config, data } = props
    const { sortedData, setSortColumn, sortIcons, sortBy, sortOrder } = UseSortData(config, data)

    const updatedConfig = config.map((column) => {
        if (!column.sortValue) {

            return column
        }
        return {
            ...column,
            header: () => <th className={`${column.addClassToSortables} cursor-pointer hover:bg-gray-300 `} onClick={() => setSortColumn(column.label)}>
                <div className="flex items-center">
                    {sortIcons(column.label, sortBy, sortOrder)}
                    {column.label}
                </div>

            </th>
        }
    })

    return <Table {...props} config={updatedConfig} data={sortedData} />
}



export default SortableTable