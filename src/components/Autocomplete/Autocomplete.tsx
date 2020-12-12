import * as React from "react";
import { withRouter } from  'react-router-dom'; 

import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";

import './Autocomplete.css'; 
import { BehaviorSubject } from "rxjs";

// observable that allows us to conver values from React's onChange event handler into a stream of values
const subject$ = new BehaviorSubject(''); 




export const Autocomplete: React.FC = () => {
  const [value, setValue] = React.useState(''); 
  const [suggestions, setSuggestions] = React.useState([]); 


  // callback to every change in input field
  React.useEffect(() => {
    const subscription = subject$.subscribe(
      value => {
      // store new values in state
      }, error => {
        // handle new error
      }
    ); 
    return () => subscription.unsubscribe(); 
  }, []); 


  // send new values to subject observable
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    subject$.next(e.target.value)
  }


  const renderSuggestion = (suggestion: any) => {
    // consider changing the key to another value like country
  return <MenuItem key={suggestion.name}>{suggestion.name}</MenuItem>
  }


  const hasSuggestions = suggestions.length > 0; 


  return(
    <div>
      
      <input className="autocomplete" type="text" onChange={handleChange} value={value} />

      {hasSuggestions && <Paper>suggestions.map(renderSuggestion)</Paper>}


    </div>
  )
}
