import React from 'react'
import Featured from '../Futured/Featured'
import FindCourse from '../FindCourse/FindCourse'
import BestCourse from '../BestCourse/BestCourse'
import BestCourse2 from '../BestCourse2/BestCourse2'
import FeatureCourse2 from '../FeatureCourse2/FeatureCourse2'
import FeatureCourse3 from '../FeatureCourse3/FeatureCourse3'
import Opportunity from '../Opportunity/Opportunity'
import UpcomingEvent from '../UpcomingEvent/UpcomingEvent'
import Reviewc from '../Reviewc/Reviewc'
import Admission from '../Admission/Admission'
import Category from '../Category/Category'
import Counter from '../Counter/Counter'
import { Homepage } from '../HomePage/Homepage'

const Body = () => {
  return (
    <>
        <Homepage/>
        <Featured/>
        <FindCourse/>
        <BestCourse/>
        <BestCourse2/>
        <FeatureCourse2/>
        <FeatureCourse3/>
        <Opportunity/>
        <UpcomingEvent/>
        <Reviewc/>
        <Admission/>
        <Category/> 
        <Counter/>
    </>
  )
}

export default Body