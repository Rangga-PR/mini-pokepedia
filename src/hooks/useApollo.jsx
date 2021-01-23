import { initializeApollo } from '@/services/apollo';
import { useMemo } from 'react';

export const useApollo = (initialState) => {
  return useMemo(() => initializeApollo(initialState), [initialState]);
};
