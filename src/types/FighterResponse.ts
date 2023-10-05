type FightersResponse = {
  first_name: string;
  last_name: string;
  gym: string;
  location: string;
  discipline: string;
  age: number;
  strikes1: {
    id: number;
    name: string;
    speed: string;
    power: string;
    icon_url: string;
    video_url_tutorial: string;
    video_url_fighter: string;
  };
  strikes2: {
    id: number;
    name: string;
    speed: string;
    power: string;
    icon_url: string;
    video_url_tutorial: string;
    video_url_fighter: string;
  };
  strikes3: {
    id: number;
    name: string;
    speed: string;
    power: string;
    icon_url: string;
    video_url_tutorial: string;
    video_url_fighter: string;
  };
  strikes4: {
    id: number;
    name: string;
    speed: string;
    power: string;
    icon_url: string;
    video_url_tutorial: string;
    video_url_fighter: string;
  };
  icon_url: string;
};

export default FightersResponse;
