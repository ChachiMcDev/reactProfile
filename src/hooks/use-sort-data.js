import { useState } from "react";
import { GoArrowDown, GoArrowUp } from "react-icons/go";

const UseSortData = (config, data) => {

    const [sortOrder, setSortOrder] = useState(null)
    const [sortBy, setSortBy] = useState(null)


    const setSortColumn = (label) => {
        if (sortBy && label !== sortBy) {
            setSortOrder('asc')
            setSortBy(label)
            return
        }

        if (sortOrder === null) {
            setSortOrder('asc')
            setSortBy(label)
        } else if (sortOrder === 'asc') {
            setSortOrder('desc')
            setSortBy(label)
        } else if (sortOrder === 'desc') {
            setSortOrder(null)
            setSortBy(null)
        }
    }



    let sortedData = data
    if (sortOrder && sortBy) {
        const { sortValue } = config.find((column) => column.label === sortBy)

        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)
            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof valueA === 'string') {
                return valueA.localeCompare(valueB) * reverseOrder
            } else {
                return (valueA - valueB) * reverseOrder
            }
        })
    }


    const sortIcons = (label, sortBy, sortOrder) => {
        if (label !== sortBy) {
            return <div>
                <GoArrowUp />
                <GoArrowDown />
            </div>
        }

        if (sortOrder === null) {
            return <div>
                <GoArrowUp />
                <GoArrowDown />
            </div>
        } else if (sortOrder === 'asc') {
            return <div>
                <GoArrowUp />
            </div>
        } else if (sortOrder === 'desc') {
            return <div>
                <GoArrowDown />
            </div>
        }
    }



    return {
        sortedData,
        setSortColumn,
        sortBy,
        sortOrder,
        sortIcons
    }

}


export default UseSortData