import FightersRequest from "../types/FighterRequest";
import FightersResponse from "../types/FighterResponse";

export const getFighterRequestFromResponse = (fighterRes: FightersResponse) => {
  const {
    id,
    first_name,
    last_name,
    gym,
    location,
    discipline,
    profile_picture,
    age,
    strikes1: { id: strikes1 },
    strikes2: { id: strikes2 },
    strikes3: { id: strikes3 },
    strikes4: { id: strikes4 },
    icon_url,
  } = fighterRes;

  return JSON.stringify({
    id,
    first_name,
    last_name,
    gym,
    location,
    discipline,
    profile_picture,
    age,
    strikes1,
    strikes2,
    strikes3,
    strikes4,
    icon_url,
  });
};

export const getFighterRequest = (fighterReq: FightersRequest) => {
  const {
    id,
    first_name,
    last_name,
    gym,
    location,
    discipline,
    profile_picture,
    age,
    strikes1,
    strikes2,
    strikes3,
    strikes4,
    icon_url,
  } = fighterReq;

  return JSON.stringify({
    id,
    first_name,
    last_name,
    gym,
    location,
    discipline,
    profile_picture,
    age,
    strikes1: { id: strikes1 },
    strikes2: { id: strikes2 },
    strikes3: { id: strikes3 },
    strikes4: { id: strikes4 },
    icon_url,
  });
};
