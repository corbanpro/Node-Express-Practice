import React, { useState, useEffect } from "react";
import axios from 'axios'



function Button () {


    const useButtonPress = (e) => {
        e.preventDefault();

        setCount(count + 1)
        const data = {
            count: count + 1
        }
        axios.post("http://localhost:8000/count", data)

        
    }

    const [count, setCount] = useState(0);

    useEffect(() => {
        fetch("http://localhost:8000/count")
          .then((res) => res.json())
          .then((data) => setCount(data.count));
      }, []);

    
    return (
        <div>
            <br />
            <div className="text-center">
                <button className="btn btn-primary" onClick={useButtonPress} >
                    Click Me!!
                </button>
            </div>

            <br />

            <div className="text-center">
                {count}
            </div>
        </div>
    );
}

export default Button