export type MenuType = {
  name: string;
  url?: string;
  subMenu?: Array<{
    name: string;
    group?: Array<{ name: string; url: string }>;
    url?: string;
  }>;
};
