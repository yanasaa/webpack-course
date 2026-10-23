import { useState } from 'react';
import classes from './App.module.scss'
import { Link, Outlet } from 'react-router-dom';
import Cap from '@/assets/cap.png'
import Bird from '@/assets/bird.jpg'
import Cat from '@/assets/cats.svg'

//TREE SHAKING
function TODO() {
    TODO2()
}
function TODO2() {
    throw new Error();
}

const App = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        //setCount(prev => prev + 1)
        TODO()
    }

    // if(__PLATFORM__ === 'desktop') {
    //     return <div>ISDESKTOPPLATFORM</div>
    // }
    // if(__PLATFORM__ === 'mobile') {
    //     return <div>ISMOBILEPLATFORM</div>
    // }

    return ( 
        <div data-testid={'App.DataTestId'}>
            <h2>Platform={__PLATFORM__}</h2>
            <div>
                <img src={Cap} alt="" width={100} height={100}/>
                <img src={Bird} alt="" width={100} height={100}/>
            </div>
            <div>
                <Cat className={classes.icon} width={100} height={100} />
                
            </div>
            <Link to={'/about'}>About</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>
            <h1 className={classes.value}>{count}</h1>
            <button className={classes.button} onClick={increment}>inc</button>
            <Outlet />
        </div>
     );
}
 
export default App;