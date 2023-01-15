import {FC, useEffect, useState} from "react";
import Center from "./CenterMap";
import West from "./WestMap";
import East from "./EastMap";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import {changeRegion} from "../../../redux/mapSlice";
import {MapController} from "../../../controllers/MapController";
const Map:FC<{className: string}> = ({className}) => {
    const region = useSelector((state: RootState) => state.map.region)
    const dispatch = useDispatch()
    const [result, setResult] = useState<TFlag>({east: 'none', west: 'none', center: 'none'})
    useEffect(()=>{
        const flag = MapController.flag
        setResult(flag)
    },[])
    return(
        <div className={className} data-testid='mapModule'>
            <svg width="100%" viewBox="0 0 394 262" fill="none" xmlns="http://www.w3.org/2000/svg">
                <West
                    onClick={()=>dispatch(changeRegion('west'))}
                    className={region == 'west' ? 'is-chosenRegion': ''}
                    flag={result.west}
                />
                <Center
                    onClick={()=>dispatch(changeRegion('center'))}
                    className={region == 'center' ? 'is-chosenRegion': ''}
                    flag={result.center}
                />
                <East
                    onClick={()=>dispatch(changeRegion('east'))}
                    className={region == 'east' ? 'is-chosenRegion': ''}
                    flag={result.east}
                />
            </svg>
        </div>
    )
}

export default Map