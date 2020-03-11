import React, { useState } from 'react';

function Start(props) { 
    const [beans, setBeans] = useState('0.0');
    const [coffee, setCoffee] = useState('0.0');

    const balanceBeans = e => {
        let val = e.target.value// ? e.target.value: '0.0';
        //console.log("START balanceBeans: ", val, " beans: ", beans, " coffee: ", coffee)
        setBeans(val); 
        setCoffee(((Math.round(val * 100) / 100) * 15).toFixed(1));
        //console.log("END balanceBeans: ", val, " beans: ", beans, " coffee: ", coffee)

    }
    const balanceCoffee = e => { 
        let val = e.target.value //? e.target.value: '0.0';
        //console.log("START balanceCoffee: ", e.target.value, " beans: ", beans, " coffee: ", coffee)
        setCoffee(val); 
        setBeans(((Math.round(val * 100) / 100) / 15).toFixed(1));
        //console.log("END balanceCoffee: ", val, " beans: ", beans, " coffee: ", coffee)

    }

    

    return (
        <div className="start-container"> 
            <h1 className="top-text"> How much coffee?</h1>
            <div className="initial-amount-container"> 
                <label>
                    Beans(g) 
                    <input 
                        type="number" 
                        value={beans}
                        placeholder={'0.0'}
                        onChange={e => balanceBeans(e)}
                    />
                </label>
                <label>
                    Coffee(mL)
                    <input 
                        type="number" 
                        value={coffee}
                        placeholder={0.0}
                        onChange={e => balanceCoffee(e)}
                    />
                </label>  
            </div>
            {/* <h2>will make {coffee}mL of Coffee</h2>  */}
            <div> 
                <button className="next-button">
                    Let's Brew
                </button>
            </div>
            

        
        </div>
    )
}

export default Start; 