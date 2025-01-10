import './App.css'
import SelectionBar from './components/selection-bar/SelectionBar'
import ReplyDialog from './components/reply-dialog/ReplyDialog';
import { Answer } from './core/types/Answer'
import { useState } from 'react'

function App() {

  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<Answer | ''>('');


  const handleAnswerChange = (answer: Answer) => {
    setSelectedAnswer(answer);
    setOpenDialog(true);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (

    <>
      <SelectionBar onAnswerChange = { handleAnswerChange }/>
      <ReplyDialog 
        open={openDialog} 
        answer={selectedAnswer} 
        onClose={handleClose}
      />
    </>
  )
}

export default App
