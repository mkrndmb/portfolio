import './experience.css'

export function Experience({useElementOnScreen}) {
    const [ref,isVisible] = useElementOnScreen({
        root:null,
        rootMargin:'0px',
        threshold: 0.3
        })
    return (
        <div id='experience' className={`exp ${isVisible ? `exp-show` : ``}` }>
             <h2>Where I’ve Worked</h2>
             <div className='exp-info' ref={ref}>
                 <h3 className='exp-head'>Systems Engineer<span className='spann'>@Tata Consultancy Services</span></h3>
                 <p className='exp-time'>June 2019 - Jan 2022</p>
                 <ul>
                     <li>Worked in Integrated Financial Management System
(IFMS) project of Gov. of Karnataka as a Database
Developer and Admin(IBM DB2) .</li>
                     <li>Experience in analyzing application code such as SQL,
Triggers, Stored Procedures, CPU, I/O, Memory. Setting up
Backup & recovery strategies, developing database
procedures, functions</li>
<li>Optimized different database objects such as Indexes,
Triggers, Procedures & tuned queries which improved
query performance by 30%</li>
<li>Developed various monitoring scipts in shell scripting to
automate labor work saving more than 80% of time</li>
                     <li>Extensively worked with DB2 RUNSTATS, REORG for db
performance; with IMPORT, EXPORT for migration; with
db2pd ,db2diag, db2top for diagnosis and monitoring</li>
                 </ul>
             </div>
        </div>
    )
};
