export interface SkipOption {
  id: number;
  size: number;
  hire_period_days: number;
  transport_cost?: number;
  per_tonne_cost?: number;
  price_before_vat: number;
  vat: number;
  postcode: string;
  area?: string;
  forbidden: boolean;
  created_at: string; // ISO date string (e.g., "2021-04-06T17:04:42")
  updated_at: string; // ISO date string (e.g., "2024-04-02T09:22:38")
  allowed_on_road: boolean;
  allows_heavy_waste: boolean;
}
