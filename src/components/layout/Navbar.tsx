import { Link } from "react-router"
import Logo from "@/assets/icons/Logo"
import { ModeToggle } from "../Mode-toggle"
import { Button } from "@/components/ui/button"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from "@/components/ui/navigation-menu"
import { authApi, useGetMeUserQuery, useLogoutMutation } from "@/redux/features/auth/auth.api"
import { useAppDispatch } from "@/redux/hooks"
import { role } from "@/constants/role"
import React from "react"

const navigationLinks = [
  { href: "/", label: "Home", role: "PUBLIC" },
  { href: "/about", label: "About", role: "PUBLIC" },
  { href: "/admin", label: "Dashboard", role: role.admin },
  { href: "/user", label: "Dashboard", role: role.user },
]

export default function Navbar() {
  const { data } = useGetMeUserQuery(undefined);
  const [logout] = useLogoutMutation();
  const dispatch = useAppDispatch();

  const handleLogout = async () => {
    await logout(undefined);
    dispatch(authApi.util.resetApiState());
  };

  return (
    <header className="shadow sticky top-0 z-50">
      <div className="px-4 container mx-auto flex h-16 items-center justify-between">
        <div className="flex items-center justify-between gap-6">
          {/* Left: Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-primary hover:text-primary/90 font-semibold text-lg"
          >
            <Logo />
            <span className="text-[#FF7A00]">CholoGhuri.com</span>
          </Link>

          {/* Center: Navigation menu (hidden on small screens) */}
          <NavigationMenu className="max-md:hidden">
            <NavigationMenuList className="gap-2">
              {
                navigationLinks.map((link, index) => (
                  <React.Fragment key={link.href || index}>
                    {link.role === "PUBLIC" && (
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          asChild
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                    {link.role === data?.data?.role && (
                      <NavigationMenuItem>
                        <NavigationMenuLink
                          asChild
                          className="text-muted-foreground hover:text-primary py-1.5 font-medium"
                        >
                          <Link to={link.href}>{link.label}</Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    )}
                  </React.Fragment>
                ))
              }
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right: Auth Buttons + Mobile Menu Trigger */}
        <div className="flex items-center gap-2">
          {/* Theme change */}
          <ModeToggle />
          {
            data?.data?.email ? (<Button
              onClick={handleLogout}
              variant="outline"
              className="text-sm cursor-pointer"
            >
              Logout
            </Button>) : (<Button asChild className="text-sm hidden md:inline-flex">
              <Link to="/login">Login</Link>
            </Button>)
          }

          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group size-8 md:hidden"
                variant="ghost"
                size="icon"
              >
                <svg
                  className="pointer-events-none"
                  width={16}
                  height={16}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path
                    d="M4 12L20 12"
                    className="origin-center -translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:rotate-[315deg]"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                  />
                  <path
                    d="M4 12H20"
                    className="origin-center translate-y-[7px] transition-all duration-300 ease-[cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:rotate-[135deg]"
                  />
                </svg>
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end" className="w-36 p-1 md:hidden">
              <NavigationMenu className="max-w-none *:w-full">
                <NavigationMenuList className="flex-col items-start gap-0">
                  {
                    navigationLinks.map((link, index) => (
                      <NavigationMenuItem key={index} className="w-full">
                        <NavigationMenuLink
                          asChild
                          className="py-1.5 w-full block"
                        >
                          <Link to={link.href}>
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))
                  }
                </NavigationMenuList>
              </NavigationMenu>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </header>
  );
};
