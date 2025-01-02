import "./App.css";
import AppRoute from "./route/appRoutes";
import logo from "../src/img/cloud_6628331.png"
function App() {
    return (
        <>
            <head>
                <title>weather App</title>
                <link rel="icon" type="image/jpg" href={logo}/>
            </head>
            <AppRoute />
        </>
    );
}

export default App;
