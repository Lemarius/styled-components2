import { CARDS } from '../../constants/cards';
import {
	StyledAt,
	StyledChange,
	StyledChangeText,
	StyledChangeUp,
	StyledContainer,
	StyledContainerWrapper,
	StyledFollowers,
	StyledImg,
	StyledSocial,
	StyledSquare,
	StyledText
} from './styles';

const Cards = ({
	src,
	alt,
	followers,
	text,
	svg,
	number,
	color,
	colorSymbol,
	active,
	setActive
}) => {
	return (
		<>
			<StyledContainerWrapper>
				{CARDS.map(card => (
					<StyledContainer key={card.id}>
						<StyledSquare darkmode={active} color={card.color}>
							<StyledSocial>
								<StyledImg src={card.src} alt={card.alt} />
								<StyledAt darkmode={active}>{card.user}</StyledAt>
							</StyledSocial>
							<StyledFollowers darkmode={active}>
								{card.followers}
							</StyledFollowers>
							<StyledText darkmode={active}>{card.text}</StyledText>
							<StyledChange>
								<StyledChangeUp src={card.svg} alt=''></StyledChangeUp>
								<StyledChangeText colorSymbol={card.colorSymbol}>
									{card.number} Today
								</StyledChangeText>
							</StyledChange>
						</StyledSquare>
					</StyledContainer>
				))}
			</StyledContainerWrapper>
		</>
	);
};

export default Cards;
