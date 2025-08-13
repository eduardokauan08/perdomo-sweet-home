
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Beneficios from "./pages/Beneficios";
import Notices from "./pages/Notices";
import NoticeDetail from "./pages/NoticeDetail";
import Organization from "./pages/Organization";
import Admin from "./pages/Admin";
import AdminUsers from "./pages/AdminUsers";
import Account from "./pages/Account";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/portal" element={<Index />} />
          <Route path="/portal/login" element={<Login />} />
          <Route path="/portal/beneficios" element={<Beneficios />} />
          <Route path="/portal/notices" element={<Notices />} />
          <Route path="/portal/notices/:slug" element={<NoticeDetail />} />
          <Route path="/portal/organograma" element={<Organization />} />
          <Route path="/portal/admin" element={<Admin />} />
          <Route path="/portal/admin-users" element={<AdminUsers />} />
          <Route path="/portal/conta" element={<Account />} />
          <Route path="/" element={<Home />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
