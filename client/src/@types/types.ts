export interface WordObj {
  word: string;
  pos: string;
  definitions: string[];
}

export interface AppContextInterface {
  getWord?: (word: string, partOfSpeech: string | undefined) => void;
  words?: WordObj[];
  loading?: boolean;
}
