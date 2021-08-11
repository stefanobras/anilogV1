import '../styles/Home.css';
import React from 'react';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    image: {
        position: 'relative',
        height: 1000,
        [theme.breakpoints.down('xs')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &$focusVisible': {
          zIndex: 1,
          '& $imageBackdrop': {
            opacity: 0.15,
          },
          '& $imageMarked': {
            opacity: 0,
          },
          '& $imageTitle': {
            border: '4px solid currentColor',
          },
        },
    },
    focusVisible: {},
    imageBackdrop: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    },
    imageMarked: {
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
        position: 'relative',
        padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
        fontSize: 150,
    },
    imageSrc: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 50%',
    },
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
}));

export default function Home() {
    const classes = useStyles();
    
    return (
        <div className="Home">
          <header className="Home-header">
            <div className='homeRoot' >
                <ButtonBase focusRipple key={'ANIME'} className={classes.image} 
                focusVisibleClassName={classes.focusVisible} style={{ width: '50%',}}>
                    <span className={classes.imageSrc} 
                    style={{ backgroundImage: 'url(https://i.pinimg.com/originals/fc/e0/a3/fce0a33cf07abdc0e63f617b5b6f6972.jpg)',}}/>
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography component="span" variant="subtitle1" color="inherit" className={classes.imageTitle}>
                        {'ANIME'}
                        <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
                <ButtonBase focusRipple key={'MANGA'} className={classes.image} 
                focusVisibleClassName={classes.focusVisible} style={{ width: '50%',}}>
                    <span className={classes.imageSrc} 
                    style={{ backgroundImage: 'url(https://uploads.mangadex.org/covers/304ceac3-8cdb-4fe7-acf7-2b6ff7a60613/a6a8ae55-5e15-43b9-bfcc-cd398bd317cb.jpg)',}}/>
                    <span className={classes.imageBackdrop} />
                    <span className={classes.imageButton}>
                        <Typography component="span" variant="subtitle1" color="inherit" className={classes.imageTitle}>
                        {'MANGA'}
                        <span className={classes.imageMarked} />
                        </Typography>
                    </span>
                </ButtonBase>
            </div>
          </header>
        </div>
      );
    }
  
  
  