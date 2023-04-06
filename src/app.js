import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

function App() {
	return (
		<>
			<Tooltip anchorSelect=".tooltip">Displaying the tooltip</Tooltip>
			<p className="tooltip">Show tooltip</p>
		</>
	);
}

export default App;
