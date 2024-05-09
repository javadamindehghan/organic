
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
interface Props {}

function Newsletter(props: Props) {
  const {} = props;

  return (
    <div style={{padding:'20px'}}>
      <h1 style={{ color: "#F3FFFF" }}>Newsletter</h1>
      <p style={{ color: "#B0B9AE" }}>
        Dolor amet sit justo amet elitr clita ipsum elitr est.
      </p>
      <TextField
       InputLabelProps={{
        style: { color: '#fff' }, 
     }}
    
         sx={{
            '& label.Mui-focused': {
                color: 'white',
              },
            '&::placeholder': {
             
                color: 'white'
              },
            '& .MuiInputBase-root.Mui-focused': {
              color: 'white',
            border:'red'
            
            },
          
          }}
        id="standard-basic"
        label="your email"
        variant="standard"
      />

<Button sx={{backgroundColor:'#EDDD5E' , color:'black' , margin:'5px' ,'&:hover': {
    backgroundColor: '#ffffff',
  
  } }} variant="contained">Contained</Button>
    </div>
  );
}

export default Newsletter;
