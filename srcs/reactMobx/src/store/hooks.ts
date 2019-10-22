import React from 'react'
import { stores } from './context';

export const useStores = () => React.useContext(stores)
