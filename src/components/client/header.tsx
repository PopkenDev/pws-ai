"use client";

import { Rocket, Search, Sparkles } from "lucide-react";

import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CompanyLogo } from "@/components/logo";
import { LanguageToggle } from "../lang-toggle";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

const data = {
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Services",
      links: [
        {
          label: "Website laten maken",
          href: "/",
          desc: "Lorem ipsum dolor sit amet.",
        },
        {
          label: "Webshop laten maken",
          href: "/",
          desc: "Lorem ipsum dolor sit amet.",
        },
        {
          label: "Applicatie ontwikkeling",
          href: "/",
          desc: "Lorem ipsum dolor sit amet.",
        },
        {
          label: "Website beheer",
          href: "/",
          desc: "Lorem ipsum dolor sit amet.",
        },
      ],
    },
    { label: "Over ons", href: "/" },
    { label: "Contact", href: "/" },
  ],
};

export const Header = () => {
  return (
    <header>
      <div className="flex justify-between items-center max-w-7xl mx-auto h-20 px-4">
        <div>
          <CompanyLogo />
        </div>
        <div className="relative w-96">
          <Input placeholder="Zoeken" />
          <Search className="w-4 h-4 absolute top-1/2 -translate-y-1/2 right-3" />
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <Button variant="default">Login</Button>
          </div>

          <div className="flex items-center">
            <div>
              <ModeToggle />
            </div>
            <div className="min-w-9">
              <LanguageToggle />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <NavigationMenuIndicator />
                <div className="grid grid-cols-2 w-[464px] gap-4">
                  {data.navigation[1].links?.map((item) => (
                    <Button key={item.label} variant="ghost" className="h-16">
                      <Link
                        href={item.href}
                        legacyBehavior
                        passHref
                        className="p-4"
                      >
                        <NavigationMenuLink className="flex flex-col items-start">
                          <span className="font-semibold">{item.label}</span>
                          <span className="font-normal text-muted-foreground">
                            {item.desc}
                          </span>
                        </NavigationMenuLink>
                      </Link>
                    </Button>
                  ))}
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Over ons
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Contact
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink
                  className={`text-primary ${navigationMenuTriggerStyle()}`}
                >
                  DesignDNA
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};
