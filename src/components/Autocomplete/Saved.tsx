import React from 'react'; 

// Autocomplete

// import * as React from 'react'; 
// import { BehaviorSubject, Observable } from 'rxjs';
// import { withRouter, RouteComponentProps } from 'react-router-dom'; 
// import './Autocomplete.css'; 

// import MenuItem from '@material-ui/core/MenuItem'; 
// import TextField from '@material-ui/core/TextField'; 
// import Paper from '@material-ui/core/Paper'; 
// import { VoidExpression } from 'typescript';

// // services should be called on every change to return array of suggestions then populate to state and rerender
// interface Props<S> {
//     inputProps?: any;
//     RouteComponentProps?: any; 
//     getSuggestions: <S>(subject: BehaviorSubject<string>) => Observable<S[]>; 
//     renderSuggestion?: (suggestion: S) => JSX.Element | string; 
//     onSelect?: (suggestion: S) => void; 
// }


// // convert values from react's onChange event handler into RxJS stream of values
// const subject$ = new BehaviorSubject(''); 

// function Autocomplete<S> (props: Props<S>) {
//     // render suggestion
//     const { renderSuggestion = (s: S) => s, onSelect, getSuggestions } = props; 
//     // values
//     const [value, setValue] = React.useState(''); 
//     // suggestions
//     const [suggestions, setSuggestions] = React.useState<S[]>([]); 


//     // callback for every change in input field
//     React.useEffect(() => {
//         const subscription = getSuggestions<S>(subject$).subscribe(
//         suggestions => {
//             // store new value in state
//             setSuggestions(suggestions); 
//         }, 
//         error => {
//             // error handling
//             console.log('Error w/ autocomplete state: ', error); 
//         }
//     ); 
//         return () => subscription.unsubscribe(); 
//     }, []); 

//     // send new vlues to $subject observable in the event handler
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         setValue(e.target.value); 
//         subject$.next(e.target.value); 
//     };

//     // their data contains a key property, this is what it looks like: 
//     // const renderSuggestion = (suggestion: any) => {
//     //     return <MenuItem key={suggestion.symbol}>{suggestion.name}</MenuItem>
//     // }

//     // I don't have a key property so just sticking to search by name
//     // const renderSuggestion = (suggestion: any) => {
//     //     return <MenuItem key={suggestion.name}>{suggestion.name}</MenuItem>
//     // }

//     const handleSelect = (idx: number) => {
//         if (onSelect) {
//             onSelect(suggestions[idx]); 
//             setSuggestions([])
//         }
//     }; 


//     const shouldShowSuggestions = suggestions.length > 0 && value.length > 2; 

//     console.log(suggestions)
//     return (
//         <div>
//             {/* <TextField inputProps={{style: {fontSize: 20}}} fullWidth onChange={handleChange} value={value} placeholder="Search for your school..."/>
//     {shouldShowSuggestions && <Paper>{suggestions.map((suggestion, idx) => (
//         <MenuItem key={`suggestion-${idx}`} onClick={() => handleSelect(idx)}>
//             {renderSuggestion(suggestion)}
//         </MenuItem>
//     ))}</Paper>} */}
//      <TextField
//         fullWidth
//         onChange={handleChange}
//         value={value}
//         placeholder="start typing"
//       />
//       {shouldShowSuggestions && (
//         <Paper>
//           {suggestions.map((suggestion, idx) => (
//             <MenuItem
//               key={`suggestion-${idx}`}
//               onClick={() => handleSelect(idx)}
//             >
//               {renderSuggestion(suggestion)}
//             </MenuItem>
//           ))}
//         </Paper>
//       )}
//         </div>
//     )
// }

// // export default withRouter(Autocomplete) broke since we refactored to a function
// export default Autocomplete; 

// SUGGESTION SERVICES


// import React from 'react'; 
// import { withRouter } from 'react-router-dom'; 
// import { BehaviorSubject, Observable } from 'rxjs'; 
// import { ajax, AjaxResponse } from 'rxjs/ajax'; 
// import { map, filter, switchMap, debounceTime } from 'rxjs/operators'; 

// // EXAMPLE USES A TYPESCRIPT FILE NOT TSX

// export interface Suggestion {
//     name: string; 
//     country?: string; 
// }

// // use service to fetch the data
// const getApiUrl = (value: Name) => `http://universities.hipolabs.com/search?name=${value}`; 

// const transformResponse = ({ response }: AjaxResponse) => {
//     // return response.bestMatches.map((item: { [x: string]: any; }) => ({
//     return response.bestMatches.map((item: ) => ({
//         name: item['1. name'], 
//         country: item['2. country'], 
//     }))
// }

// export const getSuggestions = (subject: BehaviorSubject<string>) => {
//     return subject.pipe(
//         // time between suggestion and last key stroke
//         debounceTime(250),
//         // send request if there are 2 or more characters
//         filter(v => v.length > 1),  
//         // form url for the api call 
//         map(getApiUrl), 
//         // call HTTP endpoint and cancel previous requests
//         switchMap(url => ajax(url)), 
//         // change response shape for autocomplete consumption
//         map(transformResponse)
//     )
// }; 