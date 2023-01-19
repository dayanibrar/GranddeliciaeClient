import React, { useState, useEffect, createElement } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import StudentRoute from "../../components/routes/StudentRoute";
import { Button, Menu, Avatar } from "antd";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import {
  PlayCircleOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CheckCircleFilled,
  MinusCircleFilled,
} from "@ant-design/icons";
import DoneAllTwoToneIcon from '@mui/icons-material/DoneAllTwoTone';
import DoneOutlineTwoToneIcon from '@mui/icons-material/DoneOutlineTwoTone';
import Alert from '@mui/material/Alert';
import CheckIcon from '@mui/icons-material/Check';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';
const ReadComp = () => {

    const [clicked, setClicked] = useState(-1);
    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [course, setCourse] = useState({ lessons: [] });
    const [completedLessons, setCompletedLessons] = useState([]);
  
    // force state update
    const [updateState, setUpdateState] = useState(false);
  
    // router
    const router = useRouter();
    const { slug } = router.query;
  
    useEffect(() => {
      if (slug) loadCourse();
    }, [slug]);
  
    useEffect(() => {
      if (course) loadCompletedLessons();
    }, [course]);
  
    const loadCourse = async () => {
      const { data } = await axios.get(`/api/user/course/${slug}`);
      setCourse(data);
    };
  
    const loadCompletedLessons = async () => {
      const { data } = await axios.post(`/api/list-completed`, {
        courseId: course._id,
      });
      console.log("COMPLETED LESSONS => ", data);
      setCompletedLessons(data);
    };
  
    const markCompleted = async () => {
      const { data } = await axios.post(`/api/mark-completed`, {
        courseId: course._id,
        lessonId: course.lessons[clicked]._id,
      });
      console.log(data);
      setCompletedLessons([...completedLessons, course.lessons[clicked]._id]);
    };
  
    const markIncompleted = async () => {
      try {
        const { data } = await axios.post(`/api/mark-incomplete`, {
          courseId: course._id,
          lessonId: course.lessons[clicked]._id,
        });
        console.log(data);
        const all = completedLessons;
        console.log("ALL => ", all);
        const index = all.indexOf(course.lessons[clicked]._id);
        if (index > -1) {
          all.splice(index, 1);
          console.log("ALL WITHOUT REMOVED => ", all);
          setCompletedLessons(all);
          setUpdateState(!updateState);
        }
      } catch (err) {
        console.log(err);
      }
    };

  return (
      <>
        {clicked !== -1 ? (
            <>
              <div className="mt-2 mb-2 square">
                <span>{course.lessons[clicked].title.substring(0, 30)}</span>
                {completedLessons.includes(course.lessons[clicked]._id) ? (
                  <>
                    <ClearIcon
                      className="float-right pointer"
                      color="action"
                      onClick={markIncompleted}
                    />
                    <span>
                      <Alert
                        variant="filled"
                        className="mt-2 mb-2"
                        iconMapping={{
                          success: <DoneAllTwoToneIcon fontSize="inherit" />,
                        }}
                      >
                        Congratulations you have completed: {course.lessons[clicked].title.substring(0, 30)}
                      </Alert>
                    </span>
                  </>
                ) : (

                  <DoneAllTwoToneIcon color="success" className="float-right pointer" onClick={markCompleted} />
                )}


              </div>

              {course.lessons[clicked].video &&
                course.lessons[clicked].video.Location && (
                  <>
                    <div className="wrapper">
                      <ReactPlayer
                        className="player"
                        url={course.lessons[clicked].video.Location}
                        width="100%"
                        height="100%"
                        controls
                        onEnded={() => markCompleted()}
                      />
                    </div>
                  </>
                )}

              <h3 className="mt-3 mb-3">Description</h3>

              <ReactMarkdown
                source={course.lessons[clicked].content}
                className="single-post mt-3 mb-3"
              />
            </>
          ) : (
            <div className="d-flex justify-content-center p-5">
              <div className="text-center p-5">
                <PlayCircleOutlined className="text-primary display-1 p-5" />
                <p className="lead">Clcik on the lessons to start learning</p>
              </div>
            </div>
          )}
      </>
  );
};

export default ReadComp;
