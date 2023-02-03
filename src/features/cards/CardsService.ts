export const fetch100Cards = async () => {
	const response = await fetch('https://random-data-api.com/api/v2/credit_cards?size=5').then((res) => res.json())
	return response;
}
