export interface IMyContext {
  weatherData?: string;
  setWeatherData: React.Dispatch<React.SetStateAction<string>>;
  search?: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  value?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  focusClearInput: () => void;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
}
export type TRecent = {
  name: string;
  temp: number;
  condition: string;
};