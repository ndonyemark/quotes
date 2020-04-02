export class Quotez {
  constructor(public id: number,
    public quote:string,
    public author: string,
    public submitter:string,
    public datePosted: Date,
    public likes: number,
    public dislikes:number
    ){

  }
}
