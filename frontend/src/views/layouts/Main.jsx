import Aside from "./Aside";
import { _route } from "../../router";

export default function Main({id, className, children}) {
    return (
        <>
            <Aside />
            <main id={ id } className={ className }>
                { children }
            </main>
        </>
    );
}
