import LinkTo from "./LinkTo"


const Header = () => {
    const links = [
        {
            label: 'Home',
            path: '/'
        },
        {
            label: 'Resume',
            path: '/resume'
        },
        {
            label: 'BIO',
            path: '/bio'
        },
        {
            label: 'Projects',
            path: '/pjs'
        },
        {
            label: 'Support',
            path: '/support'
        },
    ]


    const renderedLinks = links.map((link) => {
        return <LinkTo
            activeClassName='font-bold border-l-4 border-blue-500 pl-2'
            className='mb-3'
            key={link.label}
            to={link.path}>{link.label}</LinkTo>
    })


    return (<div className="flex justify-between m-6 border rounded p-3 shadow bg-white w-90/100">
        {renderedLinks}

    </div>)
}

export default Header