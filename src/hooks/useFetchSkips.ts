import { useReducer, useEffect } from 'react';
import { FetchSkipState } from '../types/hook';
import { SkipOption } from '../types/skipType';

const API_URL =
  'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft';

const fetchSkipReducer = (state: FetchSkipState, action: any) => {
  switch (action.type) {
    case 'FETCH_INIT':
      return { ...state, isLoading: true, error: null };
    case 'FETCH_SUCCESS':
      return { ...state, isLoading: false, data: action.payload };
    case 'FETCH_FAILURE':
      return { ...state, isLoading: false, error: action.payload };
    default:
      throw new Error(`Unsupported action type ${action.type}`);
  }
};

const initialSkipState: FetchSkipState = {
  data: [] as SkipOption[],
  isLoading: false,
  error: null,
};

export const useFetchSkips = () => {
  const [fetchSkipState, fetchSkipDispatch] = useReducer(fetchSkipReducer, {
    ...initialSkipState,
    data: [] as SkipOption[],
  });

  useEffect(() => {
    const fetchData = async () => {
      fetchSkipDispatch({ type: 'FETCH_INIT' });

      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        fetchSkipDispatch({ type: 'FETCH_SUCCESS', payload: data });
      } catch (error) {
        fetchSkipDispatch({
          type: 'FETCH_ERROR',
          payload: (error as Error).message,
        });
      }
    };

    fetchData();
  }, []);

  return fetchSkipState;
};
