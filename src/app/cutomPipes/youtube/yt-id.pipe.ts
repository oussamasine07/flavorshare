import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ytId'
})
export class YtIdPipe implements PipeTransform {

  transform( value: string | undefined | null): string | undefined | null {
    // if (!value) undefined
    const params = value?.split("?v=")
    console.log(params)
    return params ? params[1] : undefined;
  }

}
