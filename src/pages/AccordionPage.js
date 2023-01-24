
import Accordion from "../components/Accordion";
import Panel from "../components/Panel";


function AccordionPage() {

    const items = [
        {
            id: 1,
            label: 'Label 1',
            content: 'lorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsom'
        },
        {
            id: 2,
            label: 'Label 2',
            content: 'itsom itsom itsum itsum lorem lorem lorem lorem lorem lorem itsom lorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsom'
        },
        {
            id: 3,
            label: 'Label 3',
            content: 'giddyup giddyup[ giidyup lorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsom'
        },
        {
            id: 4,
            label: 'Label 4',
            content: 'giddyup giddyup[ giidyup lorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsom'
        },
        {
            id: 5,
            label: 'Label 5',
            content: 'giddyup giddyup[ giidyup lorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsom'
        },
        {
            id: 6,
            label: 'Label 6',
            content: 'giddyup giddyup[ giidyup lorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsomlorem lorem lorem lorem lorem lorem itsom'
        }
    ]


    return (
        <Panel className="m-3">
            <h1 className="text-lg p-2">Accordion Component</h1>
            <Accordion items={items} />
        </Panel>
    )

}






export default AccordionPage;
