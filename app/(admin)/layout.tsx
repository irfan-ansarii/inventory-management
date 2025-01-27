import { getSession } from "@/query/users";
import { redirect } from "next/navigation";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import { AuthProvider } from "@/components/auth-provider";

const AdminLayout = async ({ children }: { children: React.ReactNode }) => {
  let session = {} as Record<string, any>;

  try {
    session = await getSession();
  } catch (error) {
    redirect("/auth/signin");
  }

  return (
    <AuthProvider>
      <div className="grid min-h-screen w-full lg:grid-cols-[280px_1fr]">
        <div className="hidden border-r lg:block bg-secondary">
          <Sidebar className="sticky top-0" />
        </div>
        <div className="flex flex-col relative">
          <Header session={session?.data} />
          {/* <div className="bg-accent sticky h-8 text-destructive font-semibold uppercase text-xs top-16 lg:top-0 lg:h-12 z-20 flex items-center justify-center">
            You are currently offline
          </div> */}
          <main className="flex flex-1 flex-col container p-4 md:p-6">
            {children}
          </main>
        </div>
      </div>
    </AuthProvider>
  );
};

export default AdminLayout;
