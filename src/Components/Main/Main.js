import { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import './Main.css';

const Main = () => {
    const [sHide, setSHide] = useState('flex');
    const [rHide, setRHide] = useState('none');

    const [isHide, setHide] = useState(false);
    useEffect(()=>{setTimeout(() => setHide(true), 2000)}, []);

    const onStart = () => {
        setSHide('none');
        setRHide('block');
    }


    return(
        <div className='main-wrap'>
            <div className='main-bg'>
                <div className='float-wrap'>
                    <div className='title'>TERRA-FIRST</div>
                    <div className='btn-start' onClick={onStart} style={{display:sHide}}>START</div>
                    <div className='room-wrap' style={{display:rHide}}>
                        <div className='room-list'>
                            <div></div>
                        </div>
                        <div className='btn-wrap'>
                            <div className='btn'>NEW</div>
                            <div className='btn'>START</div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Loading isHide={isHide} /> */}
        </div>
    );
}

export default Main;