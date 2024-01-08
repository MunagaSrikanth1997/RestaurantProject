export class Ingredient {
  /**
   * we can declare class members inside a constructor signature. behind the scenes angular take care of creating the variables on it's own */
  constructor(public name: string, public amount: number) {}
}
