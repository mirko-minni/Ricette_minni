export type Recipe = {
    name: string;
    description: string;
    tipologia: string;
    imagePath: string;
    ingredients: Ingredient[];
    difficulty: string;
    time_executing: string;
    instructions: string;
}

export type Ingredient = {
  name: string;
  amount: number;
}
