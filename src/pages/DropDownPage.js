import { useState } from "react";
import DropDown from "../components/Dropdown";


function DropDownPage(props) {

    const [selection, setSelection] = useState(null)

    const options = [
        {
            id: 1,
            label: 'Red',
            value: 'red'
        },
        {
            id: 2,
            label: 'Green',
            value: 'green'
        },
        {
            id: 3,
            label: 'Blue',
            value: 'blue'
        }
    ]

    const handleSelect = (option) => {
        setSelection(option)
        // const wtf = (currOption) => { if (currOption === option) { return option } }
        // console.log(wtf(option))
        console.log(props)
    }

    return (


        <div className="flex">
            <DropDown
                options={options}
                value={selection}
                onChange={handleSelect}
            />
        </div>

    );




}


export default DropDownPage;
