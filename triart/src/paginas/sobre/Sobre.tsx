import React from 'react'
import {Typography, Grid, Button} from "@material-ui/core";
import { Box } from '@mui/material';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import "./Sobre.css";

function Sobre() {
    return(
        <> 
          <Grid container direction="row" justifyContent="center" alignItems="center" className="caixa"> 
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className="titulo">Sobre Nós</Typography>
                       <p>  <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="subtitulo">Somos um grupo de amigos com interesses em comum, e um deles é tornar o mundo um lugar melhor!</Typography> </p>
                        <p>  <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center">Nossa misão é levar conhecimento à comunidades de como lucrar com suas obras de artes.</Typography> </p>
                        <p>  <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center">Nossa visão é que ao longo do tempo tenham mais pessoas capacitadas á desenvolver uma arte e usa-la como forma de lucro criando assim não só uma qualidade de vida própria mas também na comunidade como um todo.</Typography> </p>
                    </Box>
                </Grid>
                <Grid item xs={6} className="imagemFundo" >
                </Grid>
                <Grid xs={12} className="postagens">
                </Grid>
            </Grid>
        </>
    );
}

export default Sobre;