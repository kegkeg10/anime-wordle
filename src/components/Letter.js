import React, { useContext } from 'react'
import { AppContext } from '../App'

function Letter({ letterPos, attemptVal }) {
    const {board, correctWord, currAttempt} = useContext(AppContext)
    const letter = board[attemptVal] [letterPos]

    const correct = correctWord [letterPos] === letter
    const almost = !correct && letter != "" && correctWord.includes(letter)
    const letterState =
    currAttempt.attempt > attemptVal && 
    (correct ? "correct" : almost ? "almost" : "error")
    return <div className='letter' id={letterState}>
        {letter}
    </div>
}


{/*  const almost = !correct && letter != "" && correctWord.includes(letter). !correct is saying it cant be correct and && letter != "" means its one of the 5 words  */}
export default Letter