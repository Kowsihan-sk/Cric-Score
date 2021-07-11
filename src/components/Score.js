import React from 'react'
import { useState } from 'react';
import { Card, CardContent, CardActions, Typography, Box, Button, Grid } from "@material-ui/core"
import { withStyles } from "@material-ui/core/styles"
import { getMatchDetail } from '../service/cric-api'

const styles = {
    card_bar: {
        marginTop: 20,
        justifySelf: "center",
        width: "70%"
    },
    date: {
        alignItems: "flex-start",
        marginBottom: 20,
        fontSize: 14
    },
    matchDetails: {
        fontSize: 14,
        marginLeft: "auto"

    },
    component: {
        color: "#fff",
        background: "#171717",
        padding: "10px 10px",
        display: "flex",
        alignItems: "flex-start"
    },
    content_component: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        justifySelf: "center"
    }
}

const Score = (props) => {

    const [detail, setDetail] = useState("");

    const getDetails = (unique_id) => {
        getMatchDetail(unique_id)
            .then(data => {
                setDetail(data)
                console.log(detail);
            })
            .catch(error => console.log(error));
    };

    const getScore = (score) => {
        if (!score) return {};
        let ans = {};
        let numb = score && score.split('/');
        let numbid = numb && numb[1] && numb[1].split('v');
        ans.first = numb[0] && numbid[0] && numb[0].replace(/[^0-9]/g, '') + '/' + numbid[0].replace(/[^0-9]/g, '');
        ans.second = numb[2] && numbid[1] && numbid[1].replace(/[^0-9]/g, '') + '/' + numb[2].replace(/[^0-9]/g, '');
        return ans;
    }

    let score = getScore(detail.score);
    return (
        <Box justifyContent="center" display="flex"  >
            <Card className={props.classes.card_bar} >
                <Box className={props.classes.component} >
                    <Typography >{props.match["team-1"]} VS {props.match["team-2"]}</Typography>
                    <Button onClick={() => getDetails(props.match.unique_id)} variant="contained" size="small" style={{ marginLeft: "auto" }} disabled={props.match.matchStarted ? false : true} >Get Score</Button>
                </Box>
                <CardContent >
                    <Box style={{ display: "flex" }} >
                        <Typography className={props.classes.date}>{new Date(props.match.dateTimeGMT).toLocaleString()} </Typography>
                        <Typography className={props.classes.matchDetails}>{props.match.matchStarted ? "Match is started" : "Match is not yet started"} </Typography>
                    </Box>
                    <Box className={props.classes.content_component} >
                        <Grid>
                            <Typography variant="h5">{props.match["team-1"]}</Typography>
                            <Typography>{score.first}</Typography>
                        </Grid>
                        <Grid>
                            <img src="https://img.icons8.com/fluent-systems-filled/100/000000/head-to-head.png" alt="versus-logo" />
                        </Grid>
                        <Grid>
                            <Typography variant="h5">{props.match["team-2"]}</Typography>
                            <Typography>{score.second}</Typography>
                        </Grid>
                    </Box>
                </CardContent>
                <CardActions>
                    <Grid container justify="center" style={{ display: "block" }} >
                        <Typography>{detail.score} </Typography>
                        <Typography style={{ fontSize: 12 }}>Limited in person attendance</Typography>
                    </Grid>
                </CardActions>
            </Card>
        </Box>
    );
}


export default withStyles(styles)(Score);