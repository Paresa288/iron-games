import { linuxIcon, nintendoIcon, playstationIcon, windowsIcon, xboxIcon } from "../assets/images/platforms"

export function platformToIcon(platform) {
  platform = platform.toLowerCase();

  if (platform.includes("playstation")) return playstationIcon;
  else if (platform.includes("xbox")) return xboxIcon;
  else if (platform.includes("nintendo")) return nintendoIcon;
  else if (platform.includes("pc")) return windowsIcon;
  else if (platform.includes("linux")) return linuxIcon;
  else return nintendoIcon; 
}

export function getSteamId(game) {
  game?.stores?.find(x => x.name === "Steam")?.url.split("https://store.steampowered.com/app/")?.[1]?.split("!")?.[0];
}