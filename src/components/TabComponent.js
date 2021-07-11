import React from 'react'
import { Tabs, Tab, Box } from '@material-ui/core'
import { useState, useEffect } from 'react';
import { getMatches } from "../service/cric-api"
import Score from "./Score"

const TabComponent = () => {

    const [value, setValue] = useState(0);
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        getMatches().then(data => {
            setMatches(data.matches);
        }).catch(err => console.log(err));
    }, [])

    const handleChange = (e, value) => {
        e.preventDefault();
        setValue(value);
    }

    const TabPanel = (props) => {
        return (
            (props.index === props.value) && (
                <Box>
                    {props.children}
                </Box>
            )
        )
    }

    const getData = (type) => {
        return (
            matches.map(match => {
                return (
                    match.type === type ?
                        <Score match={match} />
                        : ""
                )
            })
        )
    }

    return (
        <div>
            <Tabs value={value} onChange={handleChange}
                TabIndicatorProps={
                    {
                        style: {
                            background: "#171717"
                        }
                    }
                } >
                <Tab label="one day" />
                <Tab label="twenty 20" />
                <Tab label="test" />
            </Tabs>

            <TabPanel index={0} value={value}>
                {getData('')}
            </TabPanel>
            <TabPanel index={1} value={value}>
                {getData('Twenty20')}
            </TabPanel>
            <TabPanel index={2} value={value}>
                {getData('Tests')}
            </TabPanel>
        </div>
    )
}

export default TabComponent
