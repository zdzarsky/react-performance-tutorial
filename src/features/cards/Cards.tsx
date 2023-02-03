import React, { useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import {Card, createCard} from './Card'
import { cardsSelector } from './CardsSelector'
import {cardsSlice, fetchAllCards} from './CardsSlice'

import styles from './Cards.module.css'

export function Cards() {
  const dispatch = useDispatch()
  // (state: CardsRootState) => state.cards
  const cards = useSelector(cardsSelector, shallowEqual)

  const x = { foo: 'abc', b: ['a']}
  const y = { foo: 'abc', b: ['a']}

  useEffect(() => {
    // @ts-ignore
    dispatch(fetchAllCards())
    console.log('referentiallyEqual', x === y)
    console.log('shallowEqual', shallowEqual(x, y))
  }, [dispatch])

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16}}>
      <button onClick={() => dispatch(cardsSlice.actions.addCard(createCard()))}>Add</button>
      {cards.map((card: Card) => (
        <div key={card.uid}>
          <CreditCardMemo key={card.credit_card_number} card={card} />
        </div>
      ))}
    </div>
  );
}

interface CardProps {
  card: Card
}

// lookalike credit card component
function CreditCard({ card }: CardProps) {
  console.error('Credit Card co ty robisz!?')
  const { credit_card_number, credit_card_type, credit_card_expiry_date } = card
  return (
    <div className={styles.card}>
      <div className={styles.card__header}>
        <div className={styles.card__header__type}>{credit_card_type}</div>
        <div className={styles.card__header__number}>{credit_card_number}</div>
      </div>
      <div className={styles.card__footer}>
        <div className={styles.card__footer__expiration}>{credit_card_expiry_date}</div>
      </div>
    </div>
  )
}

const CreditCardMemo = React.memo(CreditCard)


