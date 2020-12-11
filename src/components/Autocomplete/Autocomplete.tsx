import * as React from 'react'; 
import { BehaviorSubject } from 'rxjs';

import MenuItem from '@material-ui/core/MenuItem'; 
import TextField from '@material-ui/core/TextField'; 
import Paper from '@material-ui/core/Paper'; 



// convert values from react's onChange event handler into RxJS stream of values
const subject$ = new BehaviorSubject(''); 

const Autocomplete: React.FC = () => {
    // values
    const [value, setValue] = React.useState(''); 
    // suggestions
    const [suggestions, setSuggestions] = React.useState([]); 


    // callback for every change in input field
    React.useEffect(() => {
        const subscription = subject$.subscribe(
        value => {
            // store new value in state
        }, 
        error => {
            // handle error here
        }
    ); 
        return () => subscription.unsubscribe(); 
    }, []); 

    // send new vlues to $subject observable in the event handler
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        subject$.next(e.target.value)
    }

    // their data contains a key property, this is what it looks like: 
    // const renderSuggestion = (suggestion: any) => {
    //     return <MenuItem key={suggestion.symbol}>{suggestion.name}</MenuItem>
    // }

    // I don't have a key property so just sticking to search by name
    const renderSuggestion = (suggestion: any) => {
        return <MenuItem key={suggestion.name}>{suggestion.name}</MenuItem>
    }


    const hasSuggestions = suggestions.length > 0; 

    return (
        <div>
            <TextField fullWidth onChange={handleChange} value={value} placeholder="Search for your school..."/>
            {hasSuggestions && <Paper>suggestions.map(renderSuggestion)</Paper>}
        </div>
    )



}

