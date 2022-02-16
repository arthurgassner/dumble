import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="How to play" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        Guess the letter in 6 tries. After each guess, the color of the tiles will
        change to show how close your guess was to the letter.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="W"
          status="correct"
        />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter W is the correct letter.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell isRevealing={true} isCompleted={true} value="U" status="absent" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        The letter U is not the correct letter.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        This is an open source joke on the word-guessing game we all know and
        love -{' '}
        <a
          href="https://github.com/arthurgassner/dumble"
          className="underline font-bold"
        >
          check out the code here
        </a>{' '}
      </p>
    </BaseModal>
  )
}
