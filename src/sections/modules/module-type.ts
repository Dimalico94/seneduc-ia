export type ModuleProps = {
  module: {
    id: number;
    name: string;
    description?: string;
    price_month?: number;
    price_annual?: number;
    features?: Array<{
      id: string;
      title: string;
    }>;
  };
};
