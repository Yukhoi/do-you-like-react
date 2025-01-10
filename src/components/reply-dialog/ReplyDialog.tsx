import './ReplyDialog.css'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogActions from '@mui/material/DialogActions'
import Button from '@mui/material/Button'
import { Answer } from '../../core/types/Answer'
import { questionData } from '../../core/QuestionData'

interface ReplyDialogProps {
  open: boolean;
  answer: Answer | '';
  onClose: () => void;
}

function ReplyDialog( { open, answer, onClose }: ReplyDialogProps ) {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Reply</DialogTitle>
      <DialogContent className='dialog-content'>
        <DialogContentText>
          {answer === 'yes' ? 
            questionData.answers.yes : 
            answer === 'no' ?
            questionData.answers.no :
            'You did not answer the question.'
          }
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ReplyDialog;