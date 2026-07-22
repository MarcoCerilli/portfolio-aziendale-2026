export interface VercelProject {
  id: string;
  name: string;
  framework: string | null;
  nodeVersion: string;
  accountId: string;
  updatedAt: number;
  createdAt: number;
  latestDeployments?: {
    alias?: string[];
    url: string;
  }[];
  targets?: {
    production?: {
      url: string;
    };
  };
}

export interface VercelEnvVar {
  id: string;
  type: 'system' | 'secret' | 'encrypted' | 'plain';
  key: string;
  value: string;
  target: string[];
}

export interface DemoProduct {
  id: string;
  name: string;
  url: string;
  category: string;
  price: number | null;
  image: string | null;
  features: string[];
}
