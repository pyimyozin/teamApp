import { Helmet } from "react-helmet-async";

export default function Home() {
    return (
        <div>
            <Helmet>
                <title>Home | My React App</title>
            </Helmet>
            Hello world
        </div>
    );
}
