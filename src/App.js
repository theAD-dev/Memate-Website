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
import { blogList, blogLatest ,getCategories} from './api/blogAPI';
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
import ErrorPage from "./pages/error-page";
import ThankYouPage from "./pages/thankyou-page";
import AddYourCompanyPage from "./pages/add-your-company";
import TronButton from "./layout/hover-button/tourn-but";
import { useLocation } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import WikiSinglePage from "./components/memate-wiki/wiki-single-page";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MemateWikiSinglePage from "./pages/wiki-single-page";
import CategoryPage from "./pages/single-page/category-page";
const queryClient = new QueryClient();
// Register ScrollTrigger plugin with GSAP
gsap.registerPlugin(ScrollTrigger);

function App() {
  AOS.init();
  let savedlatestPostData = [];
try {
  savedlatestPostData = JSON.parse(sessionStorage.getItem('latestPostData') || "[]");
} catch (error) {
  console.error('Error parsing latestPostData from sessionStorage:', error);
  savedlatestPostData = [];
}
  const [postsLatest, setPostsLatest] = useState(savedlatestPostData || []);
  const [PostsCategories, setPostsCategories] = useState();
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPosts, setTotalPosts] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const limit = 9;

  useEffect(() => {
    const fetchDataLatest = async () => {
      try {
        const dataLatest = await blogLatest();
        sessionStorage.setItem('latestPostData', JSON.stringify(dataLatest));
        setPostsLatest(dataLatest);
      } catch (err) {
        console.log('Error during getting the latest post:', err);
      }
    };

    if (!postsLatest?.length) fetchDataLatest();
  }, []);

  useEffect(() => {
    const fetchCateLatest = async () => {
      try {
        const dataCat = await getCategories();
        sessionStorage.setItem('latestCat', JSON.stringify(dataCat));
        setPostsCategories(dataCat);
      } catch (err) {
        console.log('Error during getting the latest post:', err);
      }
    };

    if (!PostsCategories?.length) fetchCateLatest();
  }, []);
  


  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const response = await blogList(currentPage, limit);
        const { data, total } = response;
        setTotalPosts(total);

        setPosts((prevPosts) => {
          const uniquePosts = data?.filter(
            (newPost) => !prevPosts.some((post) => post.id === newPost.id)
          );
          return [...prevPosts, ...uniquePosts];
        });
      } catch (error) {
        setError(error);
        console.error("Error fetching blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [currentPage]);


  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };




  useEffect(() => {
    const gtAnimate = gsap.utils.toArray('.gradientAnimenate');
    gtAnimate.forEach((element) => {
      gsap.to(element, {
        backgroundImage:"linear-gradient(90deg, #1ab2ff 0%, #65b2c9 45%, #FFB258 65%, #FFB258 100%)", 
        
        duration: 1,
        scrollTrigger: {
          trigger: element,
          markers: false,
          scrub: false,
          toggleActions: "play reset play reset",
          start: "center bottom",  
          end: "bottom top"     
        }
      });
    });

  }, []);




  const location = useLocation();
  useEffect(() => {
    const pathClass = location.pathname === "/" 
      ? "home" 
      : location.pathname.replace(/\//g, "-").replace(/^-|-$/g, "");
    document.body.classList.add(`page-${pathClass}`);
    return () => {
      document.body.classList.remove(`page-${pathClass}`);
    };
  }, [location.pathname]);


  return (
    <div className="App">
      <ScrollToTop />
      <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" exact element={<LandingPage posts={posts} postsLatest={postsLatest} />} />
        <Route path="/feature-page-sales" exact element={<FeaturePage />} />
        <Route
          path="/news"
          exact
          element={<BlogPage posts={posts} postsLatest={postsLatest} PostsCategories={PostsCategories} totalPosts={totalPosts} loading={loading} handleNext={handleNext} />} />
        <Route
          path="/news/:slug"
          element={<SinglePage postsSingle={posts} postsLatest={postsLatest} />} />
        <Route path="/news/category/:id" element={<CategoryPage postsSingle={posts} postsLatest={postsLatest} />} />
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
        <Route path="/data-single/:slug" exact element={<DatabasePageSingle />} />
        <Route path="/add-your-company" exact element={<AddYourCompanyPage />} />
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
        <Route path="/wiki/:categoryId" exact element={<MemateWikiSinglePage />} />
     
      
        <Route path="/security" exact element={<SecurityPage />} />
        <Route path="/legal" exact element={<LegalPage />} />
        <Route path="/contact-sales" exact element={<ContactSalesPage />} />
        <Route path="/watch-demo" exact element={<WatchDemoPage />} />
        <Route path="/features" exact element={<FeaturesPage />} />
        <Route path="/industries" exact element={<IndustriesPage />} />
        <Route path="/news-stories" exact element={<NewsStoriesPage />} />
        <Route path="/sitemap" exact element={<SitemapPage />} />
        <Route path="/resources" exact element={<ResourcesPage />} />
        <Route path="*" exact element={<ErrorPage />} />
        <Route path="/thank-you" exact element={<ThankYouPage />} />
        <Route path="/tron-btton" exact element={<TronButton />} />
        
      </Routes>
      </QueryClientProvider>
    </div>
  );
}

export default App;







