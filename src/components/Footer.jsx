import { Box, Container, IconButton, Typography } from "@mui/material";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

// ... rest of the component code


const Footer = () => {
  return (
    <Box>
      <Container
        className="bg-neutral-950 text-white pt-5"
        maxWidth="lg"
        style={{ height: '120px' }} // Set your desired height
      >
        <Typography variant="body2" align="center">
          &copy; {new Date().getFullYear()} Parcel Management BD
        </Typography>

        {/* Social Media Icons */}
        <div className="flex justify-center mt-2">
          <IconButton color="inherit">
            <FacebookIcon/>
          </IconButton>
          <IconButton color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton color="inherit">
            <InstagramIcon />
          </IconButton>
          {/* Add more social media icons as needed */}
        </div>
      </Container>
    </Box>
  );
};

export default Footer;
