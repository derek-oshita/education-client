import * as React from "react";
import { withRouter } from  'react-router-dom'; 

import Paper from "@material-ui/core/Paper";
import MenuItem from "@material-ui/core/MenuItem";

import './Autocomplete.css'; 
import { BehaviorSubject, Observable } from "rxjs";


interface Props<S> {
  getSuggestions: <S>(subject: BehaviorSubject<string>) => Observable<S[]>;
  renderSuggestion?: (suggestion: S) => JSX.Element | string;
  onSelect?: (suggestion: S) => void;
}

// observable that allows us to conver values from React's onChange event handler into a stream of values
const subject$ = new BehaviorSubject(''); 


export function Autocomplete<S>(props: Props<S>) {
  const { renderSuggestion = (s: S) => s, onSelect, getSuggestions } = props; 
  const [value, setValue] = React.useState(''); 
  const [suggestions, setSuggestions] = React.useState<S[]>([]); 


  // callback to every change in input field
  React.useEffect(() => {
    const subscription = getSuggestions<S>(subject$).subscribe(
      suggestions => {
      // store new values in state
      setSuggestions(suggestions)
      }, 
      error => {
        // handle error
        console.error(error); 
      }
    ); 
    return () => subscription.unsubscribe(); 
  }, []); 


  // send new values to subject observable
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
    subject$.next(e.target.value)
  }


  const handleSelect = (idx: number) => {
    if (onSelect) {
      onSelect(suggestions[idx]); 
      setSuggestions([]); 
    }
  }


  // const renderSuggestion = (suggestion: any) => {
  //   // consider changing the key to another value like country
  // return <MenuItem key={suggestion.name}>{suggestion.name}</MenuItem>
  // }

  const shouldShowSuggestions = suggestions.length > 0 && value.length > 2;


  return(
    <div>

      <input className="autocomplete" type="text" onChange={handleChange} value={value} />

      {shouldShowSuggestions && (
        <Paper>
          {suggestions.map((suggestion, idx) => (
            <MenuItem
              key={`suggestion-${idx}`}
              onClick={() => handleSelect(idx)}
            >
              {renderSuggestion(suggestion)}
            </MenuItem>
          ))}
        </Paper>
      )}


    </div>
  )
}
