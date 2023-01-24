import { useEffect, useState, useRef } from 'react'
import { AiFillCustomerService } from "react-icons/ai";
import Panel from './Panel';


const Dropdown = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const divEl = useRef()


    useEffect(() => {
        const handler = (event) => {
            if (!divEl.current) {
                return
            }
            if (!divEl.current.contains(event.target)) {
                setIsOpen(false)
            }
        }

        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handleClick = () => {
        setIsOpen(!isOpen)
    }

    const handleOptionClick = ({ label, value }) => {
        setIsOpen(false)
        onChange({ label, value })
    }

    const renderOptions = options.map(({ id, label, value }) => {
        return (
            <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick({ label, value })} key={id}>
                {label}
            </div>
        )
    })

    //const content = selection ? selection.label : 'Select...'

    return (
        <div ref={divEl} className='w-48 relative'>
            <Panel className='flex justify-between items-center cursor-pointer' onClick={handleClick}>
                {value ? <div className='flex justify-content'> <span className='pr-1' >{value.label}</span>  <AiFillCustomerService color={value.value} /> </div> : 'Select...'}
            </Panel>

            {isOpen ? <Panel className='absolute top-full'>{renderOptions} </Panel> : null}
        </div>
    )
}

export default Dropdown