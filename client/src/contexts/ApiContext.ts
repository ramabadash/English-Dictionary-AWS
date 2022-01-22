import { createContext } from 'react';
//Types
import { AppContextInterface } from '../@types/types';

const ApiContext = createContext<AppContextInterface>({});

export default ApiContext;
