import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";
import Icon from "../components/Icon";


function ModalPage() {

    const [showModal, setShowModal] = useState(false)

    const handleClick = () => {
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const actionBar = <div><Button primary onClick={handleClose}><Icon secondary />I Accept</Button></div>

    const modal = <Modal onClose={handleClose} actionBar={actionBar} >
        <p>Click accept to sign your life away!</p>
    </Modal>

    return (


        <div>
            <Button primary onClick={handleClick} ><Icon primary />Open Modal</Button>
            {showModal ? modal : null}

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet arcu non pretium feugiat. Maecenas nunc ante, efficitur eget quam quis, tincidunt fermentum felis. Nunc risus risus, vehicula quis lacus molestie, porta condimentum felis. Phasellus hendrerit, metus sed euismod pharetra, massa leo pellentesque ante, quis luctus diam metus a velit. Duis lobortis ex felis. Integer a iaculis libero. Mauris pulvinar, libero dapibus tempus molestie, leo nisl tempus ex, id ullamcorper justo justo non massa. Ut rutrum turpis ante, sit amet volutpat purus aliquet tincidunt. Vestibulum ipsum massa, tempor a euismod in, maximus rhoncus urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet arcu non pretium feugiat. Maecenas nunc ante, efficitur eget quam quis, tincidunt fermentum felis. Nunc risus risus, vehicula quis lacus molestie, porta condimentum felis. Phasellus hendrerit, metus sed euismod pharetra, massa leo pellentesque ante, quis luctus diam metus a velit. Duis lobortis ex felis. Integer a iaculis libero. Mauris pulvinar, libero dapibus tempus molestie, leo nisl tempus ex, id ullamcorper justo justo non massa. Ut rutrum turpis ante, sit amet volutpat purus aliquet tincidunt. Vestibulum ipsum massa, tempor a euismod in, maximus rhoncus urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet arcu non pretium feugiat. Maecenas nunc ante, efficitur eget quam quis, tincidunt fermentum felis. Nunc risus risus, vehicula quis lacus molestie, porta condimentum felis. Phasellus hendrerit, metus sed euismod pharetra, massa leo pellentesque ante, quis luctus diam metus a velit. Duis lobortis ex felis. Integer a iaculis libero. Mauris pulvinar, libero dapibus tempus molestie, leo nisl tempus ex, id ullamcorper justo justo non massa. Ut rutrum turpis ante, sit amet volutpat purus aliquet tincidunt. Vestibulum ipsum massa, tempor a euismod in, maximus rhoncus urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet arcu non pretium feugiat. Maecenas nunc ante, efficitur eget quam quis, tincidunt fermentum felis. Nunc risus risus, vehicula quis lacus molestie, porta condimentum felis. Phasellus hendrerit, metus sed euismod pharetra, massa leo pellentesque ante, quis luctus diam metus a velit. Duis lobortis ex felis. Integer a iaculis libero. Mauris pulvinar, libero dapibus tempus molestie, leo nisl tempus ex, id ullamcorper justo justo non massa. Ut rutrum turpis ante, sit amet volutpat purus aliquet tincidunt. Vestibulum ipsum massa, tempor a euismod in, maximus rhoncus urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet arcu non pretium feugiat. Maecenas nunc ante, efficitur eget quam quis, tincidunt fermentum felis. Nunc risus risus, vehicula quis lacus molestie, porta condimentum felis. Phasellus hendrerit, metus sed euismod pharetra, massa leo pellentesque ante, quis luctus diam metus a velit. Duis lobortis ex felis. Integer a iaculis libero. Mauris pulvinar, libero dapibus tempus molestie, leo nisl tempus ex, id ullamcorper justo justo non massa. Ut rutrum turpis ante, sit amet volutpat purus aliquet tincidunt. Vestibulum ipsum massa, tempor a euismod in, maximus rhoncus urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet arcu non pretium feugiat. Maecenas nunc ante, efficitur eget quam quis, tincidunt fermentum felis. Nunc risus risus, vehicula quis lacus molestie, porta condimentum felis. Phasellus hendrerit, metus sed euismod pharetra, massa leo pellentesque ante, quis luctus diam metus a velit. Duis lobortis ex felis. Integer a iaculis libero. Mauris pulvinar, libero dapibus tempus molestie, leo nisl tempus ex, id ullamcorper justo justo non massa. Ut rutrum turpis ante, sit amet volutpat purus aliquet tincidunt. Vestibulum ipsum massa, tempor a euismod in, maximus rhoncus urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet arcu non pretium feugiat. Maecenas nunc ante, efficitur eget quam quis, tincidunt fermentum felis. Nunc risus risus, vehicula quis lacus molestie, porta condimentum felis. Phasellus hendrerit, metus sed euismod pharetra, massa leo pellentesque ante, quis luctus diam metus a velit. Duis lobortis ex felis. Integer a iaculis libero. Mauris pulvinar, libero dapibus tempus molestie, leo nisl tempus ex, id ullamcorper justo justo non massa. Ut rutrum turpis ante, sit amet volutpat purus aliquet tincidunt. Vestibulum ipsum massa, tempor a euismod in, maximus rhoncus urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet arcu non pretium feugiat. Maecenas nunc ante, efficitur eget quam quis, tincidunt fermentum felis. Nunc risus risus, vehicula quis lacus molestie, porta condimentum felis. Phasellus hendrerit, metus sed euismod pharetra, massa leo pellentesque ante, quis luctus diam metus a velit. Duis lobortis ex felis. Integer a iaculis libero. Mauris pulvinar, libero dapibus tempus molestie, leo nisl tempus ex, id ullamcorper justo justo non massa. Ut rutrum turpis ante, sit amet volutpat purus aliquet tincidunt. Vestibulum ipsum massa, tempor a euismod in, maximus rhoncus urna.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec laoreet arcu non pretium feugiat. Maecenas nunc ante, efficitur eget quam quis, tincidunt fermentum felis. Nunc risus risus, vehicula quis lacus molestie, porta condimentum felis. Phasellus hendrerit, metus sed euismod pharetra, massa leo pellentesque ante, quis luctus diam metus a velit. Duis lobortis ex felis. Integer a iaculis libero. Mauris pulvinar, libero dapibus tempus molestie, leo nisl tempus ex, id ullamcorper justo justo non massa. Ut rutrum turpis ante, sit amet volutpat purus aliquet tincidunt. Vestibulum ipsum massa, tempor a euismod in, maximus rhoncus urna.</p>


        </div>

    );




}


export default ModalPage;
