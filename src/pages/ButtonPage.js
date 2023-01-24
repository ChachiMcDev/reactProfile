import Icon from '../components/Icon';
import Button from '../components/Button';
import Panel from '../components/Panel';


const handleClick = () => {
    console.log('go click yourself')
}

function ButtonPage() {
    return (
        <Panel className="m-3">
            <h1 className="text-lg p-2">Button Component</h1>
            <div className='flex flex-row'>

                <div><Button primary rounded onClick={handleClick}><Icon primary />Batman</Button></div>
                <div><Button secondary><Icon secondary />Chicken</Button></div>
                <div><Button success outline rounded><Icon success />Cow</Button></div>
                <div><Button danger outline><Icon danger />Horse</Button></div>
                <div><Button warning><Icon warning />Dog</Button></div>
            </div>
        </Panel>
    );
}

export default ButtonPage;