import data from 'source/programData/lesson1/1.json';

export type Structure = typeof data;

export interface LrcStructure {
  time: number;
  content: string;
}
