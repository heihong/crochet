export interface Pattern {
  id: string;
  title: string;
  chapter: Chapter[];
}

export interface Chapter {
  id: string;
  title: string;
  color: string;
  todo: Todo[];
}

export interface Todo {
  id: string;
  round: string;
  nbNode: number;
}
