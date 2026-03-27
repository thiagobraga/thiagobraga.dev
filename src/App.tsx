
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import Index from "./pages/Index";
import Styleguide from "./pages/Styleguide";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Author from "./pages/Author";
import Login from "./pages/admin/Login";
import Dashboard from "./pages/admin/Dashboard";
import PostEditor from "./pages/admin/PostEditor";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const queryClient = new QueryClient();

// Layout component for the main site
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Navbar />
    <main className="min-h-screen">
      {children}
    </main>
    <Footer />
  </>
);

// Admin layout without header/footer
const AdminLayout = ({ children }: { children: React.ReactNode }) => (
  <main className="min-h-screen">
    {children}
  </main>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Main site routes */}
            <Route 
              path="/" 
              element={
                <MainLayout>
                  <Index />
                </MainLayout>
              } 
            />
            <Route 
              path="/blog" 
              element={
                <MainLayout>
                  <Blog />
                </MainLayout>
              } 
            />
            <Route 
              path="/blog/:id" 
              element={
                <MainLayout>
                  <BlogPost />
                </MainLayout>
              } 
            />
            <Route 
              path="/author/:id" 
              element={
                <MainLayout>
                  <Author />
                </MainLayout>
              } 
            />
            
            {/* Admin routes */}
            <Route 
              path="/admin" 
              element={
                <AdminLayout>
                  <Login />
                </AdminLayout>
              } 
            />
            <Route 
              path="/admin/dashboard" 
              element={
                <AdminLayout>
                  <Dashboard />
                </AdminLayout>
              } 
            />
            <Route 
              path="/admin/post/new" 
              element={
                <AdminLayout>
                  <PostEditor />
                </AdminLayout>
              } 
            />
            <Route 
              path="/admin/post/:id" 
              element={
                <AdminLayout>
                  <PostEditor />
                </AdminLayout>
              } 
            />
            
            {/* Styleguide */}
            <Route
              path="/styleguide"
              element={
                <MainLayout>
                  <Styleguide />
                </MainLayout>
              }
            />

            {/* Catch-all route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
