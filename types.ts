export interface Billboard {
  id: String;
  name: String;
  imageUrl: String;
}

export interface Category {
  id: String;
  name: String;
  billboard: Billboard;
}
