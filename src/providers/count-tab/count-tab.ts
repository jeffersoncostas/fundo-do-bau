import { Injectable } from "@angular/core";

@Injectable()
export class CountTabProvider {
  public tabCounter: number = 0;
  constructor() {}
}
