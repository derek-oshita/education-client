import { BehaviorSubject, Observable } from 'rxjs';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { map, filter, switchMap, debounceTime } from 'rxjs/operators';

export interface Suggestion {
  name: string; 
}

const getApiUrl = (value: string) => `http://universities.hipolabs.com/search?name=${value}`

const transformResponse = ({ response }: AjaxResponse) => {
  return response.bestMatches.map( (item: any) => ({
    name: item['1. name'],
  }));
};

export const getSuggestions = (subject: BehaviorSubject<string>): Observable<any[]> => {
  return subject.pipe(
    // time between response and when user stops typing
    debounceTime(500),
    // send request only if there are 2 or more characters
    filter(v => v.length > 1), 
    // form url 
    map(getApiUrl), 
     // call HTTP endpoint and cancel previous requests
    switchMap(url => ajax(url)),
    // change response shape for autocomplete
    map(transformResponse) 
  );
};

