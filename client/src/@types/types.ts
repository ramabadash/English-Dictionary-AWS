export interface WordObj {
  word: string;
  pos: string;
  definitions: string[];
}

export interface AppContextInterface {
  getWord?: (word: string, partOfSpeech: string | undefined) => void;
  getRandWordByPart?: (
    partOfSpeech: string,
    letter: string | undefined
  ) => void;
  words?: WordObj[];
  loading?: boolean;
}
