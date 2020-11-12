// export class Book {
//   constructor(public id: string, public name: string,
//               public author: string,
//               public edition: string, public isbn: string,
//               public price: any, public imgUrl: string) {}
// }
export interface BookModel {
  id?: number;
  name: string;
  author: string;
  edition: string;
  imgUrl?: string;
  isbn?: string;
  price: number;
  categoryId: number;
}
