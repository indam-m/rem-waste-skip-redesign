import { Home, Building2, Trees, Building } from 'lucide-react';

export enum WasteTypeEnum {
  HOUSEHOLD_WASTE = 1,
  CONSTRUCTION_WASTE,
  GARDEN_WASTE,
  COMMERCIAL_WASTE,
}

export const WASTE_TYPE_INFO = {
  title:
    'You can select multiple waste types. Some items may require special handling:',
  description: [
    'Plasterboard and drywall materials',
    'Heavy construction materials (soil, concrete, etc.)',
  ],
};

export const WASTE_TYPE_OPTIONS = [
  {
    id: WasteTypeEnum.HOUSEHOLD_WASTE,
    title: 'Household Waste',
    subtitle: 'General household items and furniture',
    exampleList: [
      'Furniture',
      'Appliances',
      'Garden waste',
      'General household items',
    ],
    icon: Home,
  },
  {
    id: WasteTypeEnum.CONSTRUCTION_WASTE,
    title: 'Construction Waste',
    subtitle: 'Building materials and renovation debris',
    exampleList: ['Bricks', 'Timber', 'Concrete', 'Plasterboard'],
    icon: Building2,
  },
  {
    id: WasteTypeEnum.GARDEN_WASTE,
    title: 'Garden Waste',
    subtitle: 'Green waste and landscaping materials',
    exampleList: ['Soil', 'Branches', 'Plants', 'Grass cuttings'],
    icon: Trees,
  },
  {
    id: WasteTypeEnum.COMMERCIAL_WASTE,
    title: 'Commercial Waste',
    subtitle: 'Business and office clearance',
    exampleList: [
      'Office furniture',
      'Shop fittings',
      'Equipment',
      'Commercial debris',
    ],
    icon: Building,
  },
];
