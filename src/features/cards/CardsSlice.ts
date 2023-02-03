import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetch100Cards } from './CardsService'
import { Card } from './Card'


interface CardsRootState {
  cards: {
    byId: Record<string, Card>
    allIds: string[]
  }
}

interface CardsState {
  byId: Record<string, Card>
  allIds: string[]
  cardsStatus: 'idle' | 'loading' | 'failed'
}

const initialState: CardsState = {
  byId: {},
  allIds: [],
  cardsStatus: 'idle',
}

export const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    addCard: (state, action: PayloadAction<Card>) => {
      state.byId[action.payload.uid] = action.payload
      state.allIds = [action.payload.uid].concat(state.allIds)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAllCards.fulfilled, (state, action) => {
      action.payload.forEach((card: Card) => {
        state.byId[card.uid] = card
        state.allIds.push(card.uid)
        state.cardsStatus = 'idle'
      })
    }).addCase(fetchAllCards.pending, (state) => {
      state.cardsStatus = 'loading'
    }).addCase(fetchAllCards.rejected, (state) => {
      state.cardsStatus = 'failed'
    })
  }
})

export const fetchAllCards = createAsyncThunk('cards/fetchAll', async () => {
  return fetch100Cards()
})

export const basicCardsSelector = (state: CardsRootState) => state.cards
export const { actions, reducer } = cardsSlice
