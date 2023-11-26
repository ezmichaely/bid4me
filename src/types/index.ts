export interface BrandNameProps {
  size: 'main' | 'small'
}

export interface BrandNameSizeClassesProps {
  h1: string;
  span4: string;
}

export interface SvgProps {
  size?: number;
  fill?: string;
}

// export interface NavItem {
//   name: string;
//   icon?: keyof typeof Icons
// }

export interface CountdownProps {
  dateStart: string;
  dateEnd: string;
}
export interface TrackerProps {
  property: string;
  time: Record<string, any>;
}