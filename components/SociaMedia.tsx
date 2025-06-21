import { cn } from "@/lib/utils";
import { Facebook, Github, Linkedin, Slack, Youtube } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
interface Props {
  className?: string;
  iconClassName?: string;
  tooltipClassName?: string;
}

const SociaMedia = ({ className, iconClassName, tooltipClassName }: Props) => {
  // Define an array of social media links with their titles, hrefs, and icons
  const socialLink = [
    {
      title: "Youtube",
      href: "https://www.youtube.com/@reactjsBD",
      icon: <Youtube className="w-5 h-5" />,
    },
    {
      title: "Github",
      href: "https://www.youtube.com/@reactjsBD",
      icon: <Github className="w-5 h-5" />,
    },
    {
      title: "Linkedin",
      href: "https://www.youtube.com/@reactjsBD",
      icon: <Linkedin className="w-5 h-5" />,
    },
    {
      title: "Facebook",
      href: "https://www.youtube.com/@reactjsBD",
      icon: <Facebook className="w-5 h-5" />,
    },
    {
      title: "Slack",
      href: "https://www.youtube.com/@reactjsBD",
      icon: <Slack className="w-5 h-5" />,
    },
  ];

  return (
    <TooltipProvider>
      <div className={cn("flex items-center gap-3.5", className)}>
        {socialLink?.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={item?.href}
                className={cn(
                  "p-2 border rounded-full hover:text-white hover:border-shop_light_green hoverEffect",
                  iconClassName
                )}
              >
                {item?.icon}
              </a>
            </TooltipTrigger>
            <TooltipContent
              className={cn(
                "bg-white text-darkColor font-semibold",
                tooltipClassName
              )}
            >
              {item?.title}
            </TooltipContent>
          </Tooltip>
        ))}
      </div>
    </TooltipProvider>
  );
};

export default SociaMedia;
