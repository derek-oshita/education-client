import { BehaviorSubject } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map, filter, switchMap, debounceTime } from 'rxjs/operators';

const getApiUrl = (value: string) => `http://universities.hipolabs.com/search?name=${value}`

const transformResponse = ({ response }: AjaxResponse) => {
  return response.bestMatches.map( (item: any) => ({
    name: item['1. name'],
  }));
};

export const getSuggestions = (subject: BehaviorSubject<string>) => {
  return subject.pipe(
    // time after user stops typing
    debounceTime(200), 
    // send request if there are 1 or more suggestions
    filter(v => v.length > 0), 
    // form url for the api call
    map(getApiUrl), 
    // call http endpoint and cancel previous requests
    switchMap(url => ajax(url)), 
    // change response shape for autocomplete 
    map(transformResponse)
  )
}; 