import { CARDS } from '../../constants/cards';
import { STATS } from '../../constants/stadistics';
import {
	StyledAt,
	StyledChange,
	StyledChangeStat,
	StyledChangeText,
	StyledChangeUp,
	StyledContainer,
	StyledContainerWrapper,
	StyledFollowers,
	StyledImg,
	StyledImg2,
	StyledNumberStat,
	StyledRectangle,
	StyledSocial,
	StyledSquare,
	StyledStats,
	StyledText,
	StyledTitle
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
			<StyledContainerWrapper>
				{STATS.map(stat => (
					<StyledContainer key={stat.id}>
						<StyledRectangle darkmode={active}>
							<StyledStats>
								<StyledTitle darkmode={active}>{stat.title}</StyledTitle>
								<StyledImg2 src={stat.src} alt={stat.alt} />
							</StyledStats>
							<StyledStats>
								<StyledNumberStat darkmode={active}>
									{stat.number}
								</StyledNumberStat>
								<StyledChangeStat>
									<StyledChangeUp src={stat.svg} alt=''></StyledChangeUp>
									<StyledChangeText colorSymbol={stat.colorSymbol}>
										{stat.number2} Today
									</StyledChangeText>
								</StyledChangeStat>
							</StyledStats>
						</StyledRectangle>
					</StyledContainer>
				))}
			</StyledContainerWrapper>
		</>
	);
};

export default Cards;
