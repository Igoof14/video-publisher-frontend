export interface VideoItem {
  id: string;
  title: string;
  thumbnail: string;
  uploadDate: string;
  status: {
    vk: VideoStatus;
    rutube: VideoStatus;
    dzen: VideoStatus;
  };
  views: {
    vk: number;
    rutube: number;
    dzen: number;
  };
  likes: {
    vk: number;
    rutube: number;
    dzen: number;
  };
}

export type VideoStatus = 'published' | 'scheduled' | 'processing' | 'failed' | 'draft'; 

export interface UploadConfig {
  title: string
  description?: string
  platforms: string[]
  isPublic: boolean
  thumbnail?: File
  ageRestriction: '0+' | '18+'
  isKidsContent: boolean
} 