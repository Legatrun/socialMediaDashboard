import { useState } from "react"
import ReactSwitch from "react-switch"
import { useThemeContext } from "./context/ThemeContext"

import './Page.css'

export const Page = () => {

    const { contextTheme, setContextTheme } = useThemeContext()

    const [checked, setChecked] = useState(true)

    const handleSwitch = (nextChecked: any) => {
        setContextTheme((state: string) => (state === 'Dark' ? 'Light' : 'Dark'))
        setChecked(nextChecked)
    }

    return (
        <div className="pagePrincipal" id={contextTheme}>
            <div className="container">
                <div className="box1">
                    <div className="socialMedia">
                        <h1 className={`first${contextTheme}`}>Social Media Dashboard</h1>
                        <h2 className={`secondary${contextTheme}`}>Total Followers: 23,004</h2>
                    </div>
                    <div className="darkMode">
                        <p className={`secondary${contextTheme}`}>{contextTheme} Mode</p>
                        <ReactSwitch
                            onChange={handleSwitch}
                            checked={checked}
                            onColor="#86d3ff"
                            onHandleColor="#2693e6"
                            handleDiameter={30}
                            uncheckedIcon={false}
                            checkedIcon={false}
                            boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                            activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                            height={20}
                            width={48}
                            className="react-switch"
                            id="material-switch"
                        />
                    </div>
                </div>

                <div className="containerStatistics">
                    <div className={`${contextTheme}Box large boxStadistics1 secondary${contextTheme}`}>
                        <div className="logosBox">
                            <figure className="sn-logo facebook"></figure>
                            <p className="nameSocial">@jairmerlo</p>
                        </div>
                        <p className={`first${contextTheme} numberBox`}>1987</p>
                        <p className="follower">FOLLOWERS</p>
                        <div className="iconsBoxGreen">
                            <figure className="up sn-trend"></figure>
                            <p className="today">12 Today</p>
                        </div>
                    </div>
                    <div className={`${contextTheme}Box large boxStadistics2 secondary${contextTheme}`}>
                        <div className="logosBox">
                            <figure className="sn-logo twitter"></figure>
                            <p className="nameSocial">@jairmerlo</p>
                        </div>
                        <p className={`first${contextTheme} numberBox`}>1044</p>
                        <p className="follower">FOLLOWERS</p>
                        <div className="iconsBoxGreen">
                            <figure className="up sn-trend"></figure>
                            <p className="today">99 Today</p>
                        </div>
                    </div>
                    <div className={`${contextTheme}Box large boxStadistics3 secondary${contextTheme}`}>
                        <div className="logosBox">
                            <figure className="sn-logo instagram"></figure>
                            <p className="nameSocial">@jairmerlo</p>
                        </div>
                        <p className={`first${contextTheme} numberBox`}>11k</p>
                        <p className="follower">FOLLOWERS</p>
                        <div className="iconsBoxGreen">
                            <figure className="up sn-trend"></figure>
                            <p className="today">1099 Today</p>
                        </div>
                    </div>
                    <div className={`${contextTheme}Box large boxStadistics4 secondary${contextTheme}`}>
                        <div className="logosBox">
                            <figure className="sn-logo youtube"></figure>
                            <p className="nameSocial">@none</p>
                        </div>
                        <p className={`first${contextTheme} numberBox`}>8239</p>
                        <p className="follower">FOLLOWERS</p>
                        <div className="iconsBoxRed">
                            <figure className="down sn-trend"></figure>
                            <p className="today">144 Today</p>
                        </div>
                    </div>
                </div>

                <h1 className={`secondary${contextTheme} textMid`}>Overview - Today</h1>
                <div className={`secondary${contextTheme} containerSmall`}>
                    <div className={`small ${contextTheme}Box`}>
                        <div className="boxSmall">
                            <p className="stadisticsSmall">Page Views</p>
                            <figure className="sn-logo facebook"></figure>
                        </div>
                        <div className="boxSmall">
                            <span className={`first${contextTheme} numberSmall`}> 87</span>
                            <div className="iconsBoxGreen">
                                <figure className="up sn-trend"></figure>
                                <p className="today">3%</p>
                            </div>
                        </div>
                    </div>
                    <div className={`small ${contextTheme}Box`}>
                        <div className="boxSmall">
                            <p className="stadisticsSmall">Likes</p>
                            <figure className="sn-logo facebook"></figure>
                        </div>
                        <div className="boxSmall">
                            <span className={`first${contextTheme} numberSmall`}>52</span>
                            <div className="iconsBoxRed">
                                <figure className="down sn-trend"></figure>
                                <p className="today">2%</p>
                            </div>
                        </div>
                    </div>
                    <div className={`small ${contextTheme}Box`}>
                        <div className="boxSmall">
                            <p className="stadisticsSmall">Likes</p>
                            <figure className="sn-logo instagram"></figure>
                        </div>
                        <div className="boxSmall">
                            <span className={`first${contextTheme} numberSmall`}>5462</span>
                            <div className="iconsBoxGreen">
                                <figure className="up sn-trend"></figure>
                                <p className="today">2257%</p>
                            </div>
                        </div>
                    </div>
                    <div className={`small ${contextTheme}Box`}>
                        <div className="boxSmall">
                            <p className="stadisticsSmall">Profile Views</p>
                            <figure className="sn-logo instagram"></figure>
                        </div>
                        <div className="boxSmall">
                            <span className={`first${contextTheme} numberSmall`}>52k</span>
                            <div className="iconsBoxGreen">
                                <figure className="up sn-trend"></figure>
                                <p className="today">1375%</p>
                            </div>
                        </div>
                    </div>
                    <div className={`small ${contextTheme}Box`}>
                        <div className="boxSmall">
                            <p className="stadisticsSmall">Retweets</p>
                            <figure className="sn-logo twitter"></figure>
                        </div>
                        <div className="boxSmall">
                            <span className={`first${contextTheme} numberSmall`}>117</span>
                            <div className="iconsBoxGreen">
                                <figure className="up sn-trend"></figure>
                                <p className="today">303%</p>
                            </div>
                        </div>
                    </div>
                    <div className={`small ${contextTheme}Box`}>
                        <div className="boxSmall">
                            <p className="stadisticsSmall">Likes</p>
                            <figure className="sn-logo twitter"></figure>
                        </div>
                        <div className="boxSmall">
                            <span className={`first${contextTheme} numberSmall`}>507</span>
                            <div className="iconsBoxGreen">
                                <figure className="up sn-trend"></figure>
                                <p className="today">553%</p>
                            </div>
                        </div>
                    </div>
                    <div className={`small ${contextTheme}Box`}>
                        <div className="boxSmall">
                            <p className="stadisticsSmall">Likes</p>
                            <figure className="sn-logo youtube"></figure>
                        </div>
                        <div className="boxSmall">
                            <span className={`first${contextTheme} numberSmall`}>107</span>
                            <div className="iconsBoxRed">
                                <figure className="down sn-trend"></figure>
                                <p className="today">19%</p>
                            </div>
                        </div>
                    </div>
                    <div className={`small ${contextTheme}Box`}>
                        <div className="boxSmall">
                            <p className="stadisticsSmall">Total Views</p>
                            <figure className="sn-logo youtube"></figure>
                        </div>
                        <div className="boxSmall">
                            <span className={`first${contextTheme} numberSmall`}>1407</span>
                            <div className="iconsBoxRed">
                                <figure className="down sn-trend"></figure>
                                <p className="today">12%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}
