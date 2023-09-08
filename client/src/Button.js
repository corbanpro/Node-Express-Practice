import React, { useState, useEffect } from "react";



function Button () {

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
                <button className="btn btn-primary" onClick={() => setCount(count + 1)} >
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