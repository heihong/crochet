import { Chapter, Pattern, Todo } from "../models/pattern.interface";

const todoPikachuHead: Todo[] = [
  {
    id: "start_magic_ring",
    round: "6 sc in Magic Ring",
    nbNode: 6,
  },
  {
    id: "inc_magic_ring",
    round: "inc around",
    nbNode: 12,
  },
  {
    id: "inc_magic_ring_2",
    round: "[1 sc, inc] rep 6 times",
    nbNode: 18,
  },
  {
    id: "inc_magic_ring_2",
    round: "[2 sc, inc] rep 6 times",
    nbNode: 24,
  },
  {
    id: "inc_magic_ring_3",
    round: "[3 sc, inc] rep 6 times",
    nbNode: 30,
  },
];

const todoPikachuHips: Todo[] = [
  {
    id: "start_magic_ring",
    round: "6 sc in Magic Ring",
    nbNode: 6,
  },
  {
    id: "inc_magic_ring",
    round: "inc around",
    nbNode: 12,
  },
  {
    id: "inc_magic_ring_2",
    round: "[1 sc, inc] rep 6 times",
    nbNode: 18,
  },
  {
    id: "inc_magic_ring_2",
    round: "[2 sc, inc] rep 6 times",
    nbNode: 24,
  },
  {
    id: "inc_magic_ring_3",
    round: "[3 sc, inc] rep 6 times",
    nbNode: 30,
  },
];

const chaptersPikachu: Chapter[] = [
  {
    id: "chapters_pikachu",
    title: "head",
    color: "Yellow",
    todo: todoPikachuHead,
  },
  {
    id: "chapters_pikachu_1",
    title: "hips",
    color: "Yellow",
    todo: todoPikachuHips,
  },
];

export const pikachu: Pattern = {
  id: "pikachu",
  title: "pikachu",
  chapter: chaptersPikachu,
};

export const pikachu2: Pattern = {
  id: "pikachu2",
  title: "pikachu2",
  chapter: chaptersPikachu,
};

export const Patterns: Pattern[] = [pikachu, pikachu2];
