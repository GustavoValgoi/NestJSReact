export interface InsertProductDTO {
  name: string;
  image: string;
  price: number;
  categoryId?: number;
  weight: number;
  pLength: number;
  height: number;
  width: number;
  diameter: number;
}
