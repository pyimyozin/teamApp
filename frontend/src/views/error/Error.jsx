import { Link } from "react-router";

export default function Error() {
    return (
        <div>
            <p>404 not found</p>
            <Link to="/"><button>Go Home</button></Link>
        </div>
    );
}
