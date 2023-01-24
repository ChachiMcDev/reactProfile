import Table from "../components/Table";
import SortableTable from "../components/SortableTable"

const data = [
    {
        name: 'Orange',
        color: 'bg-orange-500',
        score: 5
    },
    {
        name: 'Apple',
        color: 'bg-red-500',
        score: 3
    },
    {
        name: 'Banana',
        color: 'bg-yellow-500',
        score: 1
    },
    {
        name: 'Lime',
        color: 'bg-green-500',
        score: 4
    },
    {
        name: 'Watermelon',
        color: 'bg-pink-500',
        score: 2
    },
    {
        name: 'Cherry',
        color: 'bg-red-800',
        score: 8
    }
]

// const data = [
//     {
//         name: 'GI Jane',
//         year: 1995,
//         stars: 5
//     },
//     {
//         name: 'LOTR',
//         year: 2000,
//         stars: 5
//     },
//     {
//         name: 'Dumb and Dumber',
//         year: 1992,
//         stars: 1
//     },
//     {
//         name: 'Goonies',
//         year: 1982,
//         stars: 3
//     }
// ]


//if you have a sort value and want to add a class use 'addClassToSortables' key/value

// const config = [
//     {
//         label: 'Name',
//         render: (data) => data.name,
//         sortValue: (data) => data.name,
//         header: () => <th>Name</th>
//     },
//     {
//         label: 'Year',
//         render: (data) => data.year,
//         sortValue: (data) => data.year,
//         header: () => <th>Year</th>
//     },
//     {
//         label: 'Stars',
//         render: (data) => data.stars,
//         sortValue: (data) => data.stars,
//         header: () => <th>Stars</th>
//     }
// ]
const config = [
    {
        label: 'Name',
        render: (data) => data.name,
        sortValue: (data) => data.name,
        header: () => <th>Name</th>
    },
    {
        label: 'Color',
        render: (data) => <div className={`p-3 m-2 ${data.color}`}></div>,
        header: () => <th className='bg-blue-500'>Color</th>
    },
    {
        label: 'Score',
        render: (data) => data.score,
        sortValue: (data) => data.score,
        header: () => <th>Score</th>,
        addClassToSortables: "bg-green-500"
    },
    {
        label: 'Score Squared',
        header: () => <th>Score Squared</th>,
        render: (data) => data.score * data.score,
        sortValue: (data) => data.score * data.score

    }
]

const keyFn = (fruit) => {
    return fruit.name
}

const TablePage = () => {
    return (
        <div>
            <Table data={data} config={config} keyFn={keyFn} />
            <SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    );
}

export default TablePage;