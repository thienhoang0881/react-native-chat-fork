import PropTypes from 'prop-types'
import { IMessage } from './Models'

export interface StatusProps<TMessage extends IMessage = IMessage> {
  nextMessage?: TMessage
  currentMessage?: TMessage
  color?: string
  sendText?: string
}

export function QuickReplies({}: StatusProps<IMessage>) {
  return null
}

QuickReplies.propTypes = {
  currentMessage: PropTypes.object.isRequired,
  nextMessage: PropTypes.object,
  color: PropTypes.string,
  sendText: PropTypes.string,
}

