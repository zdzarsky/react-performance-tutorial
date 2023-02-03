import { createSelector } from '@reduxjs/toolkit'
import { basicCardsSelector } from './CardsSlice'

export const cardsSelector = createSelector(basicCardsSelector, (cards) => {
	return cards.allIds.map((id) => cards.byId[id])
})
