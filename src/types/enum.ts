// StepEnum defines the steps in the multi-step process
export enum StepEnum {
  STEP_POST_CODE,
  STEP_WASTE_TYPE,
  STEP_SELECT_SKIP,
  STEP_PERMIT_CHECK,
  STEP_CHOOSE_DATE,
  STEP_PAYMENT,
}

// WasteTypeEnum defines the waste types
export enum WasteTypeEnum {
  HOUSEHOLD_WASTE = 1,
  CONSTRUCTION_WASTE,
  GARDEN_WASTE,
  COMMERCIAL_WASTE,
}
