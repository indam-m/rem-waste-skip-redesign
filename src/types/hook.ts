import { SkipOption } from './skipType';

export interface FetchSkipState {
  data: SkipOption[];
  isLoading: boolean;
  error: Error | string | null;
}
