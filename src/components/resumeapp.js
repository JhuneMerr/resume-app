import { codeList, eduList, extraList, softlist } from "./list";
import ResumePic from "./ResumePic";
import style from './resumeStyle.module.css'

const resumeapp = () =>{
    return(
        <div className={style.mainContainer}>
        <div className={style.sidebg}>
            <ResumePic/>
            <h3 className={style.fontStyle}>CONTACT</h3>
            <hr className={style.lineborder}/>
            <img src={'./image/contactIcon.png'} className={style.contactIcon} alt=""/>
            <span className={style.fontStyle3}>+639397674624</span><br/>
            <img src={'./image/emailIcon.png'} className={style.contactIcon} alt=""/>
            <span className={style.fontStyle3}>jhunemerr.
            acibar@
            gmail.com</span><br/>
            <img src={'./image/homeIcon.png'} className={style.contactIcon} alt=""/>
            <span className={style.fontStyle3}>3152-A Ilang Ilang St. Brgy Cofradia Malolos Bulacan</span>
            <h3 className={style.fontStyle}>SOFT SKILLS</h3>
            <hr className={style.lineborder}/>
            {softlist.map((item, index)=>{
                return(
                    <li className={style.fontStyle3} key={index}>{item}</li>
                );
            })}
            <h3 className={style.fontStyle}>CODING LANGUAGE</h3>
            <hr className={style.lineborder}/>
            {codeList.map((item,index)=>{
                return(
                    <li className={style.fontStyle3} key={index}>{item}</li>
                );
            })}
        </div>
        <div>
            <h1 className={style.nameH1}>ACIBAR, JHUNE</h1>
            <h1 className={style.namescH1}>MERR C.</h1>
            <h2 className={style.nameH2}>FRONT-END DEVELOPER</h2>
            <h3 className={style.fontStyle2}> OBJECTIVE</h3>
            <hr className={style.lineborder2}/>
            <p className={style.fontStyle4}>Obtaining a position in a progressive environment contributing exceptional multitasking abilities in order to maintain workflow,and eventually gaining some field experience</p>
            <h3 className={style.fontStyle2}>EDUCATION</h3>
            <hr className={style.lineborder2}/>
            {eduList.map((item,index)=>{
                return <EducItem scName={item.scName} gradeLvl={item.gradeLvl} major={item.major}/>
            })}
            <h3 className={style.fontStyle2}>EXTRACURRICULAR ACTIVITIES</h3>
            <hr className={style.lineborder2}/>
            {extraList.map((item,index)=>{
                return(
                <li className={style.fontStyle4} key={index}>{item}</li>
                );
            })}
        </div>
        </div>
    );
}
    const EducItem = (props)=>{
        return(
            <>
            <b><p className={style.fontStyle4}>{props.scName}</p></b>
            <p className={style.fontStyle4}>{props.gradeLvl}</p>
            <p className={style.fontStyle4}>{props.major}</p>
            </>
        );
    }
export default resumeapp;