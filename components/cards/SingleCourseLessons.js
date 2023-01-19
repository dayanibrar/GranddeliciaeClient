import React, { useState, useEffect } from 'react';
import { List, Avatar, Button, Skeleton, message, Divider } from "antd";
import InfiniteScroll from 'react-infinite-scroll-component';


const { Item } = List;

const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

const SingleCourseLessons = ({
  course,
  lessons,
  setPreview,
  showModal,
  setShowModal,
}) => {

  const {
    name,
  } = course

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  const loadMoreData = () => {
    if (loading) {
      return;
    }
    setLoading(true);
    fetch('https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo')
      .then(res => res.json())
      .then(body => {
        setData([...data, ...body.results]);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    loadMoreData();
  }, []);
  

  return (
 <>
<div className="bg-white shadow overflow-hidden sm:rounded-lg bg-gray-100">
      <div className="px-4 py-5 sm:px-6">
        <h3 className="text-lg leading-6 font-medium text-gray-900">{name}</h3>
        {lessons && <p className="mt-1 max-w-2xl text-sm text-gray-500">Lesson's details: {lessons.length} Lessons total</p>}
      </div>
      <div className="border-t border-gray-200 ">
     
        <dl>
          <div className="bg-gray-50 px-4 py-5 sm:grid ">
          <div
      id="scrollableDiv"
      style={{
        height: 400,
        overflow: 'auto',
        padding: '0 16px',
      }}
    >
      <InfiniteScroll
        dataLength={data.length}
        next={loadMoreData}
        hasMore={data.length < 5}
        loader={<Skeleton avatar paragraph={{ rows: 1 }} active />}
        endMessage={<Divider plain>It is all, nothing more 👻</Divider>}
        scrollableTarget="scrollableDiv"
      >
        <List
           dataSource={lessons}
          renderItem={(item, index) => (
            <Item>
            <Item.Meta
              avatar={<Avatar>{index + 1}</Avatar>}
              title={item.title}
            />
          </Item>
          )}
        />
      </InfiniteScroll>
    </div>
           
          </div>
        </dl>
      </div>
    </div>

    {/* <div className="container">
      <div className="row">
        <div className="col lesson-list font-semibold">
          {lessons && <h4 className="pt-3 pb-3">{lessons.length} Lessons</h4>}
          <hr />
          <List
            itemLayout="horizontal"
            dataSource={lessons}
            renderItem={(item, index) => (
              <Item>
                <Item.Meta
                  avatar={<Avatar>{index + 1}</Avatar>}
                  title={item.title}
                />
                {item.video && item.video !== null && item.free_preview && (
                  <span
                    className="text-primary pointer"
                    onClick={() => {
                      setPreview(item.video.Location);
                      setShowModal(!showModal);
                    }}
                  >
                    Preview
                  </span>
                )}
              </Item>
            )}
          />
        </div>
      </div>
    </div>  */}
 </>
  );
};

export default SingleCourseLessons;
