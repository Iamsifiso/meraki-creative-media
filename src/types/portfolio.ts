export interface PortfolioItem {
  id: string;
  title: string;
  category: 'lifestyle' | 'commercial' | 'fashion' | 'all';
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  description?: string;
  isBts?: boolean;
}

export type PortfolioCategory = 'all' | 'lifestyle' | 'commercial' | 'fashion' | 'photos' | 'videos' | 'bts';
