import { useState } from 'react';
import Dashboard from './components/dashboard/Dashboard';
import { GlobalStyles } from './styles/globalStyles';
import Cards from './components/cards/Cards';

const App = () => {
	const [active, setActive] = useState(true);
	return (
		<>
			<GlobalStyles color={active} />
			<Dashboard active={active} setActive={setActive} />
			<Cards active={active} setActive={setActive} />
		</>
	);
};

export default App;
