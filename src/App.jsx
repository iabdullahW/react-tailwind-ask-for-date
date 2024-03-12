// App.js

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes components
import DoYouWannaGoOut from './DoYouWannaGoOut';
import Yeeeyyyy from './Yeeeyyyy';

const App = () => {
    return (
        <Router>
            <Routes> {/* Use Routes instead of Switch */}
                <Route path="/" element={<DoYouWannaGoOut />} /> {/* Use element prop to specify the component */}
                <Route path="/yeeeyyyy" element={<Yeeeyyyy />} /> {/* Use element prop to specify the component */}
            </Routes>
        </Router>
    );
};

export default App;
