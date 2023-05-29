// material-ui
import {Box} from "@mui/material";
import './index.scss'
// ==============================|| Loader ||============================== //

const PageLoad = () => (
  <Box sx={{height:'100vh', display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
    <div className="loader">
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__bar"></div>
      <div className="loader__ball"></div>
    </div>
  </Box>
);

export default PageLoad;
