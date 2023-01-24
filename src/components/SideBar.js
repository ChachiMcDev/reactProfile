import LinkTo from "./LinkTo";

const SideBar = () => {

    const links = [
        {
            label: 'Dropdown',
            path: '/dropdown'
        },
        {
            label: 'Accordian',
            path: '/accordian'
        },
        {
            label: 'Buttons',
            path: '/buttons'
        },
        {
            label: 'Modal',
            path: '/modal'
        },
        {
            label: 'Table',
            path: '/table'
        },
        {
            label: 'Counter',
            path: '/countit'
        },
        {
            label: 'CounterWithReducer',
            path: '/reducecountit'
        },
        {
            label: 'ImmerCounterWithReducer',
            path: '/immercountit'
        }
    ]

    const renderedLinks = links.map((link) => {

        return <LinkTo
            activeClassName='font-bold border-l-4 border-blue-500 pl-2'
            className='mb-3'
            key={link.label}
            to={link.path}>Go to: {link.label}</LinkTo>
    })



    return (
        <div className="sticky top-0 flex flex-col items-start">
            <h1 className="component-examples border rounded p-3 shadow bg-white w-full">Component Examples</h1>
            {renderedLinks}
        </div>
    )
}


export default SideBar