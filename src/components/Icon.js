import { GiBatMask, GiThorHammer, GiChicken, GiRattlesnake } from "react-icons/gi"
//import { IconName } from "react-icons/go"


const Icon = (props) => {


    const icname = {
        primary: GiBatMask,
        secondary: GiChicken,
        warning: GiThorHammer,
        success: GiChicken,
        danger: GiRattlesnake
    }

    let TagName = ''
    Object.keys(props).forEach((x) => {
        Object.entries(icname).forEach(([key, value]) => {
            if (x === key) {
                TagName = value
            }
        })

    })
    if (TagName === '') {
        TagName = GiBatMask
    }
    return (
        <TagName />
    )

}

export default Icon

