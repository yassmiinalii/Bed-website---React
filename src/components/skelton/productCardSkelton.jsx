import { Grid, Skeleton, Stack } from "@mui/material";
import { Row } from "react-bootstrap";

const CardSkelton = () => {
  return (
      <Grid item xs={12} md={4}>
        <Stack spacing={2} >
          <Skeleton  sx={{ bgcolor: '#F8F9FA' }} variant="rounded" width={340} height={200} />
          <Skeleton sx={{ bgcolor: '#F8F9FA' }} variant="rounded" width={180} height={20} />
          <Skeleton sx={{ bgcolor: '#F8F9FA' }} variant="rounded" width={140} height={20} />
        </Stack>
      </Grid>
  );
};

export default CardSkelton;