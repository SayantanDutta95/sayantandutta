
export interface Publication {
  title: string;
  authors: string;
  journal: string;
  year: string;
  link: string;
  tags: string[];
  type: 'journal' | 'conference' | 'preparation';
}

export interface GoogleScholarMetrics {
  citations: number;
  hIndex: number;
  loading: boolean;
  error: boolean;
  lastUpdated?: string;
}
