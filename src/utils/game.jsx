import linuxIcon from "../assets/images/platforms/linux.svg"
import nintendoIcon from "../assets/images/platforms/nintendo.svg"
import playstationIcon from "../assets/images/platforms/playstation.svg"
import windowsIcon from "../assets/images/platforms/windowsPC.svg"
import xboxIcon from "../assets/images/platforms/xbox.svg"


export function platformToIcon(platform) {
  platform = platform.toLowerCase();

  if (platform.includes("playstation")) return playstationIcon;
  else if (platform.includes("xbox")) return xboxIcon;
  else if (platform.includes("nintendo")) return nintendoIcon;
  else if (platform.includes("pc")) return windowsIcon;
  else if (platform.includes("linux")) return linuxIcon;
  else return nintendoIcon; 
}

