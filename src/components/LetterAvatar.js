import React from 'react'
import { Avatar } from 'material-ui'

const LetterAvatar = ({ word = '' }) => <Avatar backgroundColor='#1086d5'>{word.charAt(0).toUpperCase()}</Avatar>

export default LetterAvatar