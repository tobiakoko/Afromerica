import Link from "next/link";
import Image from "next/image";
import FacebookIcon from "@/app/_components/footer/facebook.png";
import InstagramIcon from "@/app/_components/footer/instagram.png";
import WhatsappIcon from "@/app/_components/footer/whatsapp.png";
import YoutubeIcon from "@/app/_components/footer/youtube.png";

interface socials {
    icon: HTMLImageElement;
    url: string;
  };

const socials = [
    { icon: FacebookIcon, url: "https://facebook.com" },
    { icon: InstagramIcon, url: "https://instagram.com" },
    { icon: YoutubeIcon, url: "https://youtube.com" },
    { icon: WhatsappIcon, url: "https://whatsapp.com" },
    { icon: FacebookIcon, url: "https://tiktok.com" },
  ];

const Socials = () => {

    return (
        <ul className="flex gap-4">
            {socials.map((social, socialidx) => (
                <Link key={socialidx} href={social.url}>
                    <Image  className="" width={24} src={social.icon} alt={"social icons"} />
                </Link>
            ))}
        </ul>
    );
}

export { Socials };
