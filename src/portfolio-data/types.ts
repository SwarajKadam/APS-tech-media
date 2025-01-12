// types.ts
export interface PortfolioProject {
    id: string;
    title: string;
    imageUrl: any;
    client: string;
    location: string;
    category: 'marketing' | 'web-development' | 'ai-solutions';
    objective: string;
    overview: string;
    keyResults: {
      title: string;
      points: string[];
    }[];
    approach: {
      title: string;
      description: string;
    }[];
    outcome?: {
      summary: string;
      achievements?: string[];
    };
    thumbnailUrl: string;
    link:string;
  }
  
  export type Category = 'marketing' | 'web-development' | 'ai-solutions';