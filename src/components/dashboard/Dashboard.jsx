import {
	StyledButton,
	StyledCircle,
	StyledClick,
	StyledContainer,
	StyledDashboard,
	StyledH1,
	StyledH2,
	StyledText
} from './styles';

const Dashboard = ({ active, setActive }) => {
	return (
		<>
			<StyledContainer background={active}>
				<StyledDashboard>
					<StyledH1 color={active}>Social Media Dashboard</StyledH1>
					<StyledH2 color={active}>Total followers: 22.270</StyledH2>
				</StyledDashboard>
				<StyledButton>
					<StyledText color={active}>
						{active === true ? 'Dark Mode' : 'Light Mode'}
					</StyledText>
					<StyledClick
						backgroundColor={active}
						onClick={() => darkMode(active, setActive)}
					>
						<StyledCircle color={active} left={active}></StyledCircle>
					</StyledClick>
				</StyledButton>
			</StyledContainer>
		</>
	);
};

const darkMode = (active, setActive) => {
	setActive(!active);
};

export default Dashboard;
