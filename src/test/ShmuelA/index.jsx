
import PopUpSimulator from '../../components/PopUpSimulator';
import { useContext, useEffect } from 'react';
import { PopupContext } from "../../context/index";
import styles from './style.module.css';
import PopupProvider from '../../layout/Popup/PopupProvider';

// creator: ShmuelA
// props: { title: string }
export default function ShmuelA() {
    const { setPopupContent } = useContext(PopupContext);

    useEffect(() => {
        setPopupContent(<PopUpSimulator />)
    })



    return (
        <div >

            <PopUpSimulator />

        </div>
    );
}
