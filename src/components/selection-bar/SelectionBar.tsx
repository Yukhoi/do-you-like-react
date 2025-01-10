import './SelectionBar.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Answer } from '../../core/types/Answer';
import { questionData } from '../../core/QuestionData';


export interface AnswerProps {
  answerValue? : Answer | '';
  onAnswerChange: (answer: Answer) => void;
}

function SelectionBar({ answerValue, onAnswerChange }: AnswerProps) {

  const handleChange = (event: SelectChangeEvent) => {
    const newAnswer = event.target.value as Answer;
    onAnswerChange(newAnswer);
  };

  return (
    <div className='selection-container'>
      <Typography variant="h6" className="question-text">
        {questionData.question}
      </Typography>
      <FormControl className="select-form">
        <InputLabel id="demo-simple-select-label">Your Answer</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={answerValue || ''}
          onChange={handleChange}
          label="Age"
        >
          <MenuItem value={"yes"}>Yes</MenuItem>
          <MenuItem value={"no"}>No</MenuItem>
        </Select>
      </FormControl>
    </div>
  )
}

export default SelectionBar