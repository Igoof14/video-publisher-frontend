export interface PlatformTitles {
  vk: string;
  rutube: string;
  dzen: string;
}

export interface VideoDetails {
  commonTitle: string;
  platformTitles: PlatformTitles;
  useCommonTitle: boolean;
}

export interface Video {
  id: string
  title: string
  thumbnail: string
  date: string
  platforms: string[]
  views: Record<string, number>
  status: 'published' | 'processing' | 'scheduled'
}

export type SortBy = 'date' | 'views' | 'title'
export type FilterBy = 'all' | 'vk' | 'rutube' | 'dzen' 