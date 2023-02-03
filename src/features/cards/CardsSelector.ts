import { createSelector } from '@reduxjs/toolkit'
import { memoizedCardsSelector } from './CardsSlice'

export const cardsSelector = createSelector(memoizedCardsSelector, (cards) => {
	return cards.allIds.map((id) => cards.byId[id])
})