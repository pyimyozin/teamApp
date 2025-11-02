import React from "react";

export default function Looper({ quantity, id, children }) {

    if (typeof quantity === "number") {
        return (
            <>
                { Array.from({length: quantity}, (_, i) => (
                    <React.Fragment key={ i }>
                        { children({ index: i }) }
                    </React.Fragment>
                )) }
            </>
        ); 
    }

    if (Array.isArray(quantity)) {
        return (
            <>
                { quantity.map((d, i) => (
                    <React.Fragment key={ id ? d[id] : i }>
                        { children({ data: d, index: i }) }
                    </React.Fragment>
                ))}
            </>
        );
    }

    if (typeof quantity === "object") {
        return (
            <>
                { Object.entries(quantity).map((d, i) => (
                    <React.Fragment key={ id ? d[1][id] : i }>
                        { children({ data: d, index: i }) }
                    </React.Fragment>
                ))}
            </>
        );
    }
}