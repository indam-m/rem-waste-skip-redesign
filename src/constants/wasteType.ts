import { Home, Building2, Trees, Building } from 'lucide-react';
import { WasteTypeEnum } from '../types/enum';

// WASTE_TYPE_INFO provides information about waste types
export const WASTE_TYPE_INFO = {
  title:
    'You can select multiple waste types. Some items may require special handling:',
  description: [
    'Plasterboard and drywall materials',
    'Heavy construction materials (soil, concrete, etc.)',
  ],
};

// WASTE_TYPE_OPTIONS defines the available waste type options
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
    exampleList: ['Bricks', 'Concrete', 'Timber', 'Plasterboard'],
    icon: Building2,
  },
  {
    id: WasteTypeEnum.GARDEN_WASTE,
    title: 'Garden Waste',
    subtitle: 'Green waste and landscaping materials',
    exampleList: ['Soil', 'Plants', 'Branches', 'Grass cuttings'],
    icon: Trees,
  },
  {
    id: WasteTypeEnum.COMMERCIAL_WASTE,
    title: 'Commercial Waste',
    subtitle: 'Business and office clearance',
    exampleList: [
      'Office furniture',
      'Equipment',
      'Shop fittings',
      'Commercial debris',
    ],
    icon: Building,
  },
];
