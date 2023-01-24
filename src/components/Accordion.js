import { useState } from "react"
import { GoArrowDown, GoArrowLeft } from "react-icons/go";

const Accordion = ({ items }) => {

    const negOne = -1
    const [expandedIndex, setExpandedIndex] = useState(negOne)

    const handleClick = (nextIndex) => {
        //  isExpanded ? setExpandedIndex(negOne) : setExpandedIndex(index)
        console.log('stale version of expandindex', expandedIndex)
        setExpandedIndex((currentExpandedIndex) => {
            console.log('up to date version', currentExpandedIndex)
            if (currentExpandedIndex === nextIndex) {
                return -1
            } else {
                return nextIndex
            }
        })
    }



    const renderedItems = items.map(({ label, content, id }, index) => {
        const isExpanded = index === expandedIndex
        const arrowIcon = (<span className="text-2xl pl-3">{isExpanded ? <GoArrowDown /> : <GoArrowLeft />}</span>)

        return (
            <div key={id}>
                <div
                    className="flex p-3 bg-gray-50 border-b items-center cursor-pointer"
                    onClick={() => handleClick(index)}>
                    {label}
                    {arrowIcon}
                </div>

                {isExpanded ? <div className="border-b p-5">{content}</div> : null}
            </div>
        )
    })

    return (
        <div className="border-x border-t rounded">{renderedItems}</div>
    )
}

export default Accordion