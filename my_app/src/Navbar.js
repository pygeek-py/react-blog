import { FaShopify, FaSistrix, FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <div>
            <div className='big'>
                <div className="basebar">
                    <div className="iconflex">
                        <div className="flexbar">
                            <h1 className="logo">Watch</h1>
                            <div className="logosectors">
                                <h1 className="sech">Home</h1>
                                <h1 className="sech">Collections</h1>
                                <h1 className="sech">Contact Us</h1>
                            </div>
                        </div>
                        <div className="icons">
                            <h3 className='ico'><FaShopify /></h3>
                            <h3 className='ico'><FaSistrix /></h3>
                        </div>
                    </div> 
                </div>
            </div>

            <div className='small'>
                <div className='basebar'>
                    <div className='iconflex'>
                        <h3 className='icos'><FaBars /></h3>
                        <h1 className="logo">Watch</h1>
                        <div className="icons">
                            <h3 className='ico'><FaShopify /></h3>
                            <h3 className='ico'><FaSistrix /></h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Navbar;