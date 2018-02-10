import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
})
export class SearchPipe implements PipeTransform {

  transform(items: any, term: any): any {
    if (term === undefined) return items;

    return items.filter(function(glossaryItem) {
      return glossaryItem.title.toLowerCase().includes(term.toLowerCase());
    })
  }
}