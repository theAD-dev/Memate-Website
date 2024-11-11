import AgilePipeLineManagement from './agile-pipeline-management';
import CRMSalesTool from './crm-sales-tool';
import PipeLineTool from './pipeline-tool';
import SalesManagement from './sales-management';
import SalesProcessOptimiation from './sales-process-optimization';
import './style.css';
import SuitableTender from './suitable-tender';
const SalesComponentFeature = () => {
  return (
    <div className='sales-component-feature-wrapper'>
      <div className='sales-component-feature' data-aos="fade-up"
    data-aos-offset="50"
    data-aos-delay="50"
    data-aos-duration="600"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-bottom">
        <h2>Memate</h2>
        <h1>features</h1>
       
      </div>
      <div className="sales-feature-wrapper">
         <SalesManagement/>
          <CRMSalesTool/>
          <PipeLineTool/>
          <SalesProcessOptimiation/>
          <AgilePipeLineManagement/>
           <SuitableTender/> 
        </div>
    </div>
  )
}

export default SalesComponentFeature;
