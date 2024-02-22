import { NextResponse } from "next/server";
import axios from "axios";

const logos = [
  "https://www.edigitalagency.com.au/wp-content/uploads/Facebook-logo-blue-circle-large-transparent-png.png",
  "https://aurus5.com/blog/images/2017-cisco-logo-3.png",
  "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
  "https://www.freepnglogos.com/uploads/spotify-logo-png/spotify-icon-marilyn-scott-0.png",
  "https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png",
  "https://www.freepnglogos.com/uploads/logo-ig-png/logo-ig-instagram-new-logo-vector-download-13.png",
  "https://www.freepnglogos.com/uploads/telegram-logo-png-0.png",
  "https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-logo-vector-png-clipart-1.png",
  "https://www.freepnglogos.com/uploads/snapchat-logo-png-0.png",
  "https://www.freepnglogos.com/uploads/whatsapp-logo-png-hd-2.png",
  "https://www.freepnglogos.com/uploads/adidas-logo-png-black-0.png",
  "https://www.freepnglogos.com/uploads/swirl-png/purple-swirl-transparent-png-art-2.png",
  "https://www.freepnglogos.com/uploads/toyota-logo-png/toyota-logos-brands-logotypes-0.png",
];

export async function GET(request: Request) {
  const randomLogo = logos[Math.floor(Math.random() * logos.length)];
  const response2 = await axios.get(randomLogo, {
    responseType: "arraybuffer",
  });
  const image = Buffer.from(response2.data, "binary").toString("base64");
  const base64Image = `data:image/png;base64,${image}`;
  return NextResponse.json({ logo: base64Image, success: true });
}
