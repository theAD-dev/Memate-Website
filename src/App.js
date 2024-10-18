import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from 'react';
import {
  BlogPage,
  FeaturePage,
  IndustryPage,
  LandingPage,
  SinglePage,
  SoftwareUpdatePage,
} from "./pages";
import "./App.css";
import ContactUsPage from "./pages/contact-us";
import ScrollToTop from "./layout/ScrollToTop"; 
import KnowledgeBasePage from "./pages/knowledge-base";
import { blogList,blogLatest } from './api/blogAPI';
import SupplierDatabasePage from "./pages/supplier-database";
import TOSPage from "./pages/tos-page";
import PricingPage from "./pages/pricing";
import PrivacyPage from "./pages/privacy";
import CustomerStoriesPage from "./pages/customer-stories-page";
import CustomerStoriesPageSingle from "./pages/customer-stories-single";
import DatabasePageSingle from "./pages/data-base-single/data-base-single";
import SupplierManagementPage from "./pages/supplier-management";
import EmployeeManagementPage from "./pages/employee-management";
import ProjectManagementPage from "./pages/project-management";
import ReportsPage from "./pages/reports";
import ProfitabilityAndBudgetingPage from "./pages/profitability-and-budgeting";
import ContractorPage from "./pages/contractor";
import InternalChatPage from "./pages/internal-chat";
import TimeSheetPage from "./pages/time-sheet";
import TaskManagementPage from "./pages/task-management";
import CommunicationPage from "./pages/communication";
import SchedulingPage from "./pages/scheduling";
import InvoicingPage from "./pages/invoicing";
import StatisticPage from "./pages/statistic";
import ScheduleJobsPage from "./pages/schedule-jobs";
import TimeTrackerPage from "./pages/time-tracker";
import JobApprovalPage from "./pages/job-approval";
import MultiLocationPage from "./pages/multi-location";
import CalendarPage from "./pages/calendar";
import CalculatorsPage from "./pages/calculators";
import ElectronicPage from "./pages/electronic";
import PhotoPage from "./pages/photo-video-agency";
import AutomotivePage from "./pages/automotive";
import StartupsPage from "./pages/startups";
import ConstructionPage from "./pages/construction";
import AboutMematePage from "./pages/about-memate";
import DeleteRequestPage from "./pages/delete-request";
import MemateWikiPage from "./pages/memate-wiki";
import SecurityPage from "./pages/security";
import LegalPage from "./pages/legal";
import ContactSalesPage from "./pages/contact-sales";
import WatchDemoPage from "./pages/watch-demo";
import FeaturesPage from "./pages/features";
import IndustriesPage from "./pages/industries";
import NewsStoriesPage from "./pages/news-stories";
import SitemapPage from "./pages/sitemap";
import ClientPage from "./pages/client-management";
import FeaturesNewsPage from "./pages/features-news";
import ResourcesPage from "./pages/resources";


function App() {
  const [posts, setPosts] = useState([]);
  const [postsLatest, setPostsLatest] = useState([]);
  console.log('postsLatestdfffffffffffffffffffffff: ', postsLatest);

  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [error, setError] = useState(null); 
  const postsPerPage = 9;

  useEffect(() => {
    const fetchDataLatest = async () => {
    
      try {
        const dataLatest = await blogLatest();
        setPostsLatest(dataLatest);
         console.log("fetchDataLatest dataLatest:", dataLatest);
      } catch {
        
      } 
    };

    fetchDataLatest();
  }, []);



  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const data = await blogList();

        if (!Array.isArray(data)) {
          throw new Error("Fetched data is not an array");
        }
  
        setTotalPosts(data.length);
        const startIndex = (currentPage - 1) * postsPerPage;
        const paginatedPosts = data.slice(startIndex, startIndex + postsPerPage);
        setPosts(paginatedPosts);
      } catch (error) {
        setError(error);
        console.error("Error fetching blog posts:", error);
      }
    };
  
    fetchPosts();
  }, [currentPage]);
  

  const handleNext = () => {
    if (currentPage * postsPerPage < totalPosts) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  if (error) return <div>Error: {error.message}</div>; 

  return (
    <div className="App">
        <ScrollToTop /> 
        <Routes>
          <Route path="/" exact element={<LandingPage posts={posts} postsLatest={postsLatest} />} />
          <Route path="/feature-page-sales" exact element={<FeaturePage />} />
          <Route 
          path="/news" 
          exact 
          element={<BlogPage posts={posts} postsLatest={postsLatest} handlePrevious={handlePrevious} handleNext={handleNext} />} />
        <Route 
          path="/news/:slug" 
          element={<SinglePage postsSingle={posts} postsLatest={postsLatest}/>} />
          <Route path="/software-update" exact element={<SoftwareUpdatePage />} />
          <Route path="/creative-agencies" exact element={<IndustryPage />} />
          <Route path="/contact-us" exact element={<ContactUsPage />} />
          <Route path="/supplier-database" exact element={<SupplierDatabasePage />} />
          <Route path="/knowledge-base" exact element={<KnowledgeBasePage />} />
          <Route path="/terms-of-use" exact element={<TOSPage />} />
          <Route path="/pricing" exact element={<PricingPage />} />
          <Route path="/privacy" exact element={<PrivacyPage />} />
          <Route path="/customer-stories" exact element={<CustomerStoriesPage />} />
          <Route path="/camera-fix" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/pro-vinyl" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/elite-life" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/boat-wizard" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/sorted-media" exact element={<CustomerStoriesPageSingle />} />
          <Route path="/data-single" exact element={<DatabasePageSingle />} />
          <Route path="/client-management" exact element={<ClientPage />} />
          <Route path="/supplier-management" exact element={<SupplierManagementPage />} />
          <Route path="/employee-management" exact element={<EmployeeManagementPage />} />
          <Route path="/project-management" exact element={<ProjectManagementPage />} />
          <Route path="/reports" exact element={<ReportsPage />} />
          <Route path="/profitability-and-budgeting" exact element={<ProfitabilityAndBudgetingPage />} />
          <Route path="/contractor" exact element={<ContractorPage />} />
          <Route path="/internal-chat" exact element={<InternalChatPage />} />
          <Route path="/time-sheet" exact element={<TimeSheetPage />} />
          <Route path="/task-management" exact element={<TaskManagementPage />} />
          <Route path="/communication" exact element={<CommunicationPage />} />
          <Route path="/scheduling" exact element={<SchedulingPage />} />
          <Route path="/invoicing" exact element={<InvoicingPage />} />
          <Route path="/statistic" exact element={<StatisticPage />} />
          <Route path="/schedule-jobs" exact element={<ScheduleJobsPage />} />
          <Route path="/time-tracker" exact element={<TimeTrackerPage />} />
          <Route path="/job-approval" exact element={<JobApprovalPage />} />    
          <Route path="/multi-location" exact element={<MultiLocationPage />} />
          <Route path="/calendar" exact element={<CalendarPage />} />
          <Route path="/calculators" exact element={<CalculatorsPage />} />
          <Route path="/electronic-repair-specialists" exact element={<ElectronicPage />} />
          <Route path="/photo-video-agency" exact element={<PhotoPage />} />
          <Route path="/automotive" exact element={<AutomotivePage />} />
          <Route path="/startups" exact element={<StartupsPage />} />
          <Route path="/construction" exact element={<ConstructionPage />} />
          <Route path="/features-news" exact element={<FeaturesNewsPage />} />
          <Route path="/about" exact element={<AboutMematePage />} />
          <Route path="/delete-request" exact element={<DeleteRequestPage />} />
          <Route path="/memate-wiki" exact element={<MemateWikiPage />} />
          <Route path="/security" exact element={<SecurityPage />} />
          <Route path="/legal" exact element={<LegalPage />} />
          <Route path="/contact-sales" exact element={<ContactSalesPage />} />
          <Route path="/watch-demo" exact element={<WatchDemoPage/>} />
          <Route path="/features" exact element={<FeaturesPage/>} />
          <Route path="/industries" exact element={<IndustriesPage/>} />
          <Route path="/news-stories" exact element={<NewsStoriesPage/>} />
          <Route path="/sitemap" exact element={<SitemapPage/>} />
          <Route path="/resources" exact element={<ResourcesPage/>} />
        </Routes>
    </div>
  );
}

export default App;







