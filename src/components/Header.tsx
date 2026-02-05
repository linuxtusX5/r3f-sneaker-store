import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Input } from "@/components/ui/input";
import { Search, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const components = [
  {
    title: "Running Shoes",
    href: "/shop/running",
    description: "Lightweight shoes built for speed and comfort.",
  },
  {
    title: "Basketball",
    href: "/shop/basketball",
    description: "High support sneakers for explosive movement.",
  },
  {
    title: "Lifestyle",
    href: "/shop/lifestyle",
    description: "Everyday sneakers with clean design.",
  },
];

const menus = [
  { name: "New & Featured", href: "#" },
  { name: "Men", href: "#" },
  { name: "Women", href: "#" },
  { name: "Sale", href: "#" },
];

export function Header() {
  return (
    <header className="w-full border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger>
              <Menu className="h-6 w-6" />
            </SheetTrigger>

            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-6  py-10 px-5">
                {menus.map((menu) => (
                  <a
                    key={menu.name}
                    href={menu.href}
                    className="text-lg font-medium"
                  >
                    {menu.name}
                  </a>
                ))}
                <a href="#" className="text-lg font-medium">
                  Shop
                </a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
        {/* Logo */}
        <h1 className="text-xl font-bold">SneakerX</h1>

        {/* Menu (hidden on mobile) */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.name}>
                <NavigationMenuLink
                  href={menu.href}
                  className={navigationMenuTriggerStyle()}
                >
                  {menu.name}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

            {/* Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[300px] gap-2 p-4 md:w-[500px] md:grid-cols-2">
                  {components.map((item) => (
                    <ListItem
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    >
                      {item.description}
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Search (tablet and up) */}
        <div className="relative hidden sm:block w-40 md:w-64">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Search" className="pl-9 rounded-full bg-muted" />
        </div>
      </div>
    </header>
  );
}

function ListItem({
  title,
  children,
  href,
}: {
  title: string;
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li>
      <NavigationMenuLink
        href={href}
        className="block space-y-1 p-3 rounded-md hover:bg-muted"
      >
        <div className="text-sm font-medium">{title}</div>
        <p className="text-sm text-muted-foreground">{children}</p>
      </NavigationMenuLink>
    </li>
  );
}
