import React from "react";
import Grid from "@mui/material/Grid/Grid";
import OurOffice from "../components/OurOffice";
import Container from '@mui/material/Container';
import BusinessHours from "../components/BusinessHours";
import Box from '@mui/material/Box';
import Newsletter from "../components/Newsletter";


interface Props {}

function Footer(props: Props) {
  const {} = props;

  return (
  <Box sx={{ backgroundColor: "#404A3D" }}>
     <Container  >
    <Grid container spacing={2} >
     
      <Grid xs={12} sm={4} >
        <OurOffice />
      </Grid>
      <Grid xs={12} sm={4}>
        <BusinessHours/>
      </Grid>
      <Grid xs={12} sm={4}>
        <Newsletter/>
      </Grid>
     
    </Grid>
    </Container>
    </Box>

  );
}

export default Footer;
