import React from 'react'
import { Card, Chart, CountryPicker } from "./components";

class App extends React.Component {
    render() {
        return (
            <div>
                <Card />
                <Chart />
                <CountryPicker />
            </div>
        )
    }
}
export default App;