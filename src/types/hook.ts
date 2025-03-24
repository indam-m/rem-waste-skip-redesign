import { SkipOption } from './skipType';

// FetchSkipState interface represents the state structure
// used for fetching skip options in the application.
export interface FetchSkipState {
  data: SkipOption[];
  isLoading: boolean;
  error: Error | string | null;
}
