import { linuxIcon, nintendoIcon, playstationIcon, windowsIcon, xboxIcon, appleIcon } from "../assets/images/platforms"

export function platformToIcon(platform) {
  platform = platform.toLowerCase();

  if (platform.includes("play")) return playstationIcon;
  else if (platform.includes("xbox")) return xboxIcon;
  else if (platform.includes("nint")) return nintendoIcon;
  else if (platform.includes("pc")) return windowsIcon;
  else if (platform.includes("linu")) return linuxIcon;
  else if (platform.includes("mac")) return appleIcon;
}



export function getSteamId(game) {
  let steamUrl = game?.stores?.find(x => x.name === "Steam")?.url;
  if (steamUrl) {
    steamUrl = new URL(steamUrl);
    return steamUrl.pathname.split("/")[2];
  } else {
    return null;
  }
}