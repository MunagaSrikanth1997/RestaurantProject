/**
 * file name need not contain model, it is just to inform what type of file it is.
 */

export class Recipe{

public name:string;
public description:string;
public imagePath:string;

constructor(name:string,description:string,imagePath:string){
this.name=name;
this.description=description;
this.imagePath=imagePath;
}
}