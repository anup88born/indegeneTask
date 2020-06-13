import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid'
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
// import CloseIcon from '@material-ui/icons/Close';

import Background from '../../assets/background.jpg';
import MobileBackground from '../../assets/mobileBackground.jpg';

const styles = (theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(2),
    },
    closeButton: {
      position: 'absolute',
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
  });

const useStyles = makeStyles(theme=>({
    formControl: {
        margin: theme.spacing(5),
        minWidth: 120,
      },
      selectEmpty: {
        marginTop: theme.spacing(2),
      }, 
      button: {
        ...theme.typography.estimate,
        backgroundColor: theme.palette.common.orange,
        borderRadius: 50,
       
        height: 50,
        width: 145,
        "&:hover":{
            backgroundColor: theme.palette.secondary.light
        }
    },
    paragraphContainer: {
        maxWidth: "40em"
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("md")]: {
            paddingLeft: "2em",
            paddingRight: "2em"
        },
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1em",
            paddingRight: "1em"
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "1em",
            paddingRight: "1em"
        }
    },
    background: {
        backgroundImage: `url(${Background})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        height: "40em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url(${MobileBackground})`,
            backgroundAttachment: "inherit",
            height:"50em"
        }
    },
}))

const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h6">{children}</Typography>
        {/* {onClose ? (
          <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
            <CloseIcon />
          </IconButton>
        ) : null} */}
      </MuiDialogTitle>
    );
  });
  
  const DialogContent = withStyles((theme) => ({
    root: {
      padding: theme.spacing(2),
    },
  }))(MuiDialogContent);
  
  const DialogActions = withStyles((theme) => ({
    root: {
      margin: 0,
      padding: theme.spacing(1),
    },
  }))(MuiDialogActions);
  

export default function FirstTab(props) {
    const classes = useStyles()
    const theme = useTheme()
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

    const [ title, setTitle ] = React.useState("");
    const [ year, setYear ] = React.useState("");
    const [ details, setDetails ] = React.useState([])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    // useEffect(()=>{

    //     getMovieList()
    //    },[])
    
    const getMovieList = () =>
    {
        axios
        .get(`http://www.omdbapi.com/?s=${title}&y=${year}&apikey=bb8f5411`)
        .then(response => {        
            console.log("movie title: ",response)
            setDetails(response.data.Search)
        })
        // console.log("details: ",details)
    }
    

    const handleChange = (event) => {
        switch(event.target.id) {
            case "title":
                setTitle(event.target.value)
            break;
            case "year":
                setYear(event.target.value)
            break;
            default:
            break;
        }      
      }

    const handleReset = () => {
        setTitle("")
        setYear("")
    }

    return (
        <Grid container 
            direction="column"
            className={classes.background}
            justify="center"
        >
            <Grid item>
                <Grid container
                    direction={matchesMD?"column":"row"}
                    justify="center"
                    alignItems={matchesMD?"center":undefined}
                    className={classes.rowContainer}
                >
                    <Grid item md>
                        <Grid container
                            direction={matchesMD?"column":"row"}
                            alignItems={matchesMD?"center":undefined}
                            justify="center"
                        >
                            <Grid item md>
                                <Grid container
                                    direction={matchesMD?"column":"row"}
                                    style={{paddingTop:"4em"}}
                                >
                                    <Grid item 
                                        style={{paddingTop:matchesMD?undefined:"0.5em", 
                                        marginRight:matchesMD?undefined:"0.5em",
                                        marginBottom:matchesMD?"0.5em":undefined
                                    }}
                                    >
                                        <Typography align={matchesMD?"center":undefined} variant="h4">Title</Typography>
                                    </Grid>
                                    <Grid item >
                                        <TextField
                                            variant="outlined"
                                            style={{width:"8.5em"}}
                                            id="title"
                                            value={title} 
                                            onChange={handleChange}  
                                        /> 
                                    </Grid>   
                                </Grid>
                            </Grid>
                            <Grid item md>
                                <Grid container
                                    direction={matchesMD?"column":"row"}
                                    style={{paddingTop:"4em"}}
                                >
                                    <Grid item  
                                        style={{paddingTop:matchesMD?undefined:"0.5em", 
                                            marginRight:matchesMD?undefined:"0.5em",
                                            marginBottom:matchesMD?"0.5em":undefined
                                        }}
                                    >
                                        <Typography align={matchesMD?"center":undefined} variant="h4">Year</Typography>
                                    </Grid>
                                    <Grid item  >
                                        <TextField
                                            variant="outlined"
                                            style={{width:"8.5em"}}
                                            id="year"
                                            value={year} 
                                            onChange={handleChange}  
                                        /> 
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item md>
                        <Grid container 
                            direction={matchesMD?"column":"row"}
                            alignItems={matchesMD?"center":undefined}
                            justify="center"
                        >
                            <Grid item md>
                                <Grid item style={{paddingTop:"4em", marginRight:matchesMD?undefined:"1em"}}>
                                    <Button 
                                        className={classes.button} 
                                        disabled={title.length===0 && year.length===0} 
                                        onClick={getMovieList} 
                                        variant="outlined"
                                    >Search</Button>
                                </Grid>
                            </Grid>
                            <Grid item md>
                                <Grid item style={{paddingTop:"4em", marginBottom:matchesMD?"10em":undefined}}>
                                    <Button 
                                        className={classes.button}
                                        disabled={title.length===0 && year.length===0} 
                                        style={{backgroundColor: theme.palette.common.blue}} 
                                        variant="outlined"
                                        onClick={handleReset}
                                    >Reset</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid item>
                    <Grid container
                        direction={matchesMD?"column":"row"}
                        className={classes.rowContainer}
                        justify={matchesMD?undefined:"center"}
                        alignItems={matchesMD?"center":undefined}
                        style={{marginBottom:matchesMD?"5em":undefined, marginTop:matchesMD?undefined:"5em"}}
                    >
                        <Grid item>
                            <Button 
                                variant="outlined" 
                                className={classes.button}
                                disabled={title.length===0 && year.length===0}
                                onClick={handleClickOpen}
                            >View Details</Button>
                            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                                <Grid container
                                    direction="column"
                                    className={classes.rowContainer}
                                    style={{marginTop:"2em", marginBottom:"10em"}}
                                >
                                    <Grid item>
                                        <Grid container
                                            direction="row"
                                            justify="center"
                                        >
                                            <Grid item>
                                                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                                                   <Typography variant="h4">Movie Details</Typography> 
                                                </DialogTitle>
                                            </Grid>                                            
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container
                                            direction="column"
                                            style={{marginTop:"5em", marginBottom:"5em"}}
                                        >
                                            <Grid item>
                                                <Grid container direction="row">
                                                    <Grid item xs>
                                                        <Typography gutterBottom>Movie Title:</Typography>
                                                    </Grid>
                                                    <Grid item xs>
                                                    {
                                                        details.map(detail=>(
                                                            <Typography variant="body1" gutterBottom>{detail.Title}</Typography>
                                                        ))
                                                    }
                                                    </Grid>
                                                </Grid>                                                
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row">
                                                    <Grid item xs>
                                                        <Typography gutterBottom>Release Year:</Typography>
                                                    </Grid>
                                                    <Grid item xs>
                                                    {
                                                        details.map(detail=>(
                                                            <Typography variant="body1" gutterBottom>{detail.Year}</Typography>
                                                        ))
                                                    }
                                                    </Grid>
                                                </Grid>                                                
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row">
                                                    <Grid item xs>
                                                        <Typography gutterBottom>Type:</Typography>
                                                    </Grid>
                                                    <Grid item xs>
                                                    {
                                                        details.map(detail=>(
                                                            <Typography variant="body1" gutterBottom>{detail.Type}</Typography>
                                                        ))
                                                    }
                                                    </Grid>
                                                </Grid>                                                
                                            </Grid>
                                            <Grid item>
                                                <Grid container direction="row">
                                                    <Grid item xs>
                                                        <Typography gutterBottom>imdbID:</Typography>
                                                    </Grid>
                                                    <Grid item xs>
                                                    {
                                                        details.map(detail=>(
                                                            <Typography variant="body1" gutterBottom>{detail.imdbID}</Typography>
                                                        ))
                                                    }
                                                    </Grid>
                                                </Grid>                                                
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item>
                                        <Grid container 
                                            direction="row"
                                            justify="center"
                                        >
                                            <Grid item>
                                                <DialogActions>
                                                    <Button autoFocus onClick={handleClose} color="primary" variant="outlined">
                                                        OK
                                                    </Button>
                                                </DialogActions>
                                            </Grid>                                            
                                        </Grid>
                                    </Grid>
                                </Grid>
                                
                                
                            </Dialog> 
                        </Grid>
                    </Grid>                    
                </Grid>    
            </Grid>            
        </Grid>
    )
}