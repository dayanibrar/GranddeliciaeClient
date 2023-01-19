import React from 'react';
import { useState, useEffect, useContext } from "react";
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import Link from "next/link";
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "../context";
import axios from "axios";
import { useRouter } from "next/router";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import { Avatar, Image, Menu } from 'antd';

import { Drawer } from 'antd';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const { Item, SubMenu, ItemGroup } = Menu;

const Navbar = () => {

  // const [current, setCurrent, visible, setVisible] = useState("");
  const [current, setCurrent] = useState("");
  const { state, dispatch } = useContext(Context);
  const { user } = state;

  const router = useRouter();



  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const logout = async () => {
    dispatch({ type: "LOGOUT" });
    window.localStorage.removeItem("user");
    const { data } = await axios.get("/api/logout");
    toast(data.message);
    router.push("/login");
  };


  return (
    <div className="container mx-auto
    w-100 bg-white
    ">
      <div className="gpt3__navbar-li">

        <div className="">
        {user !== null && (
                <>
                    <p
                      className="float-right header-links ml-auto"
                      key="/user"
                    >
                      <a className="float-right header-links ml-auto text-uppercase">
                        <Avatar style={{ color: 'white', margin: '7px 7px', backgroundColor: '#007bff' }}><span>{user && user.name.substring(0, 10)}</span></Avatar>
                      </a>
                    </p>
                </>
              )}
          <Button type="primary" onClick={showDrawer}>
            <RiMenu3Line color="black" size={27} />
          </Button>
          <Drawer title="Menu" placement="right" onClose={onClose} visible={visible}>

            <List>
              <ListItem>
                <Link href="/">
                  <a>Home</a>
                </Link>
              </ListItem>
              <Divider />

              {user === null && (
                <>
                  <ListItem>
                    <Link href="/register">
                      <a>Sign in</a>
                    </Link>
                  </ListItem>
                  <Divider />
                  <ListItem>
                    <Link href="/Support">
                      <a>Support</a>
                    </Link>
                  </ListItem>

                </>
              )}

              {user !== null && (
                <>
                  <ListItem>
                    <Link href="/user">
                      <a>Dashboard</a>
                    </Link>
                  </ListItem>

                  <ListItem onClick={logout}>
                   <p>Logout</p>
                  </ListItem>
                  
                  <Divider />
                </>
              )}

              {user && user.role && user.role.includes("Instructor") ? (
                <ListItem>
                  <Link href="/instructor/course/create">
                    <a>Create Course</a>
                  </Link>
                </ListItem>
              ) : (
                <ListItem>
                  <Link href="/user/become-instructor">
                    <a>Become Instructor</a>
                  </Link>
                </ListItem>
              )}

              {user && user.role && user.role.includes("Instructor") && (
              <>
                <Divider />
               <ListItem>
                  <Link href="/instructor">
                    <a>Instructor</a>
                  </Link>
                </ListItem>
                </>
              )}




            </List>


          </Drawer>

        </div>
      </div>
    </div>
  );
};

export default Navbar;
