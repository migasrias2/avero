import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Home, Wallet, TrendingUp, Info } from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import { PropsWithChildren, useRef } from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { AnimatePresence, motion } from "framer-motion";

type AppSidebarProps = PropsWithChildren<{}>;

export function AppShell({ children }: AppSidebarProps) {
  return <HoverableLayout>{children}</HoverableLayout>;
}

function HoverableLayout({ children }: PropsWithChildren<{}>) {
  const { setOpen, isMobile } = useSidebar();
  const location = useLocation();
  const enterTimer = useRef<number | null>(null);
  const leaveTimer = useRef<number | null>(null);

  const handleEnter = () => {
    if (isMobile) return;
    if (leaveTimer.current) {
      window.clearTimeout(leaveTimer.current);
      leaveTimer.current = null;
    }
    if (enterTimer.current) window.clearTimeout(enterTimer.current);
    enterTimer.current = window.setTimeout(() => setOpen(true), 100);
  };

  const handleLeave = () => {
    if (isMobile) return;
    if (enterTimer.current) {
      window.clearTimeout(enterTimer.current);
      enterTimer.current = null;
    }
    if (leaveTimer.current) window.clearTimeout(leaveTimer.current);
    leaveTimer.current = window.setTimeout(() => setOpen(false), 200);
  };

  return (
    <>
      <Sidebar
        collapsible="icon"
        className="bg-white/80 backdrop-blur border-l-0 border-r-0 group-data-[side=left]:border-r-0 group-data-[side=right]:border-l-0 transition-opacity duration-200 data-[state=collapsed]:opacity-90 data-[state=expanded]:opacity-100"
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}
      >
        <SidebarHeader>
          <div className="flex items-center px-2 py-1.5 overflow-hidden">
            <span className="font-semibold tracking-tight origin-left transition-all duration-300 ease-out group-data-[collapsible=icon]:scale-90 group-data-[collapsible=icon]:opacity-0 group-data-[collapsible=icon]:w-0">
              Avero
            </span>
          </div>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Overview</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={location.pathname === "/"} tooltip="Dashboard">
                    <NavLink to="/">
                      <Home />
                      <span>Dashboard</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={location.pathname === "/income"} tooltip="Income">
                    <NavLink to="/income">
                      <TrendingUp />
                      <span>Income</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={location.pathname === "/expenses"} tooltip="Expenses">
                    <NavLink to="/expenses">
                      <Wallet />
                      <span>Expenses</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild tooltip="Runway">
                    <a href="#">
                      <Info />
                      <span>Runway</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
          <SidebarSeparator />
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-2 rounded-md p-2 hover:bg-sidebar-accent">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/80?img=13" alt="User" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
            <div className="min-w-0 hidden sm:block">
              <div className="truncate text-sm font-medium">Miguel</div>
              <div className="truncate text-xs text-muted-foreground">Freelancer</div>
            </div>
            <Badge className="ml-auto hidden sm:inline-flex" variant="secondary">
              Free
            </Badge>
          </div>
        </SidebarFooter>
        <SidebarRail />
      </Sidebar>
      <SidebarInset>
        <div className="flex h-14 items-center gap-3 border-b pl-0 pr-4 md:pr-6 animate-fade-in">
          <div className="text-sm text-muted-foreground">Welcome back,</div>
          <div className="font-semibold">Nixtio</div>
          <div className="ml-auto flex items-center gap-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="https://i.pravatar.cc/80?img=13" alt="User" />
              <AvatarFallback>ML</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <div className="flex-1 p-4 md:p-6 bg-[radial-gradient(1200px_400px_at_10%_-10%,#dbeafe_40%,transparent),radial-gradient(1200px_400px_at_110%_-10%,#e0e7ff_40%,transparent)] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </div>
      </SidebarInset>
    </>
  );
}

