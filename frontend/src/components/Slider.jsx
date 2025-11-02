import { Children } from "react";
import Looper from "./Looper";

export default function Slider({ quantity, id, children }) {
    let array = [];let template = null;

    if (typeof children === "function") {
        array = quantity;
        template = children;
    } else {
        array = Children.toArray(children);
    }

    return (
        <div id={ id } className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <Looper quantity={array}>
                    { ({ index }) => (
                        <button
                        type="button" 
                        data-bs-target={ "#" + id }
                        data-bs-slide-to={ index } 
                        className={ !index ? " active" : "" }>
                        </button>
                    )}
                </Looper>
            </div>

            <div className="carousel-inner">
                <Looper quantity={array}>
                    { ({ data, index }) => (
                        <div className={ "carousel-item" + (!index ? " active" : "") }>
                            { template ? template({ data: data, index: index}) : data }
                        </div>
                    )}
                </Looper>
            </div>
            <Buttons id={id} />
        </div>
    );
}

function Buttons({ id }) {
    return (
        <>
            <button className="carousel-control-prev" type="button" data-bs-target={ "#" + id } data-bs-slide="prev">
                <span className="carousel-control-prev-icon"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={ "#" + id } data-bs-slide="next">
                <span className="carousel-control-next-icon"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </>
    );
}
