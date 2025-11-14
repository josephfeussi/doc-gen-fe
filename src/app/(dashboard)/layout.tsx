import { AppSidebar } from "@/components/app-sidebar"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

interface PageProps {
  children?: React.ReactNode
}

export default function DashbaordLayout({ children }: PageProps) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
        </header>
        
        {/* Main section for page contents */}
        <main className="flex-1 p-4 pt-0">
          {children || (
            <div className="flex h-full items-center justify-center">
              <span className="text-sm text-muted-foreground">
                No page content
              </span>
            </div>
          )}
        </main>
      </SidebarInset>
    </SidebarProvider>
  )
}