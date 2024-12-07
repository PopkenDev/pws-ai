import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { AmericanFlag, DutchFlag, MexicanFlag } from "./flag-icons";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export const LanguageToggle = () => {
  const [activeLanguage, setActiveLanguage] = useState(
    <>
      <DutchFlag /> NLD
    </>
  );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className="flex items-center gap-1 outline-none text-sm"
      >
        <Button variant="ghost">
          {activeLanguage}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem
          onClick={() =>
            setActiveLanguage(
              <>
                <DutchFlag /> NLD
              </>
            )
          }
        >
          <DutchFlag />
          Dutch
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            setActiveLanguage(
              <>
                <AmericanFlag /> USA
              </>
            )
          }
        >
          <AmericanFlag />
          English (USA)
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() =>
            setActiveLanguage(
              <>
                <MexicanFlag /> MXN
              </>
            )
          }
        >
          <MexicanFlag />
          Spanish (MX)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
