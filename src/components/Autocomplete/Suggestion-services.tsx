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


// mine above 


import React from 'react'; 