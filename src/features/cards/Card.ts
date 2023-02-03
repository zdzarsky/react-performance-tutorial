export interface Card {
	id: number;
	uid: string;
	credit_card_number: string;
	credit_card_expiry_date: string;
	credit_card_type: string;
}


export function createCard(): Card {
	return {
		id: Math.floor(Math.random() * 10000) + 10000,
		uid: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
		credit_card_number: `${Math.floor(Math.random() * 1000000000000000) + 1000000000000000}`,
		credit_card_expiry_date: `${Math.floor(Math.random() * 12) + 1}/${Math.floor(Math.random() * 10) + 2020}`,
		credit_card_type: 'Visa',
	}
}
