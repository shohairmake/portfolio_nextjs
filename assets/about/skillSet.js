import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { GridList, GridListTile } from '@material-ui/core'
import { skillData } from './skillData'

const useStyle = makeStyles({
    gridList: {},
})
export default function SkillSet() {
    const classes = useStyle()
    return (
        <GridList cellHeight={50} className={classes.gridList} cols={7}>
            {skillData.map((skill) => (
                <GridListTile className="imgBox" key={skill.img} cols={1}>
                    <img className="img" src={skill.img} alt={skill.title} />
                </GridListTile>
            ))}
        </GridList>
    )
}
