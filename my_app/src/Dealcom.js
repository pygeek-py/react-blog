import dee from './kindpng_652966.png'

const Dealcom = () => {
    return (
        <div>
            <div className='big'>
                <h1 className="do1">Best Deals</h1>
                <div className="dealpro">
                    <div className="deal1">
                        <img src={dee} alt="" className='deal1img' />
                    </div>
                    <div className='deal2'>
                        <div className='deal2i'>
                            <img src={dee} alt="" className='deal2img' />
                        </div>
                        <br />
                        <div className='deal2ii'>
                            <img src={dee} alt="" className='deal2img' />
                        </div>
                    </div>
                </div>
                <br />
            </div>

            <div className='small'>
                <h1 className="do1">Best Deals</h1>
                <div className='dealpro'>
                    <div className="deal1">
                        <img src={dee} alt="" className='deal1img' />
                    </div>
                    
                        <div className='deal2i'>
                            <img src={dee} alt="" className='deal2img' />
                        </div>
                        <br />
                        <div className='deal2ii'>
                            <img src={dee} alt="" className='deal2img' />
                        </div>
                    
                </div>
            </div>
        </div>
    );
}

export default Dealcom;