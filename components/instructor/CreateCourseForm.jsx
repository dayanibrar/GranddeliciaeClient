import React from 'react';
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../../context";
import { useRouter } from "next/router";
import TextField from '@mui/material/TextField';

import { Form, Input, Select, Tooltip, Button, Space, Typography, Avatar, Badge } from 'antd';
const { TextArea } = Input;

const { Option } = Select;

const CreateCourse = ({
    handleSubmit,
    handleImage,
    handleChange,
    values,
    setValues,
    preview,
    uploadButtonText,
    handleImageRemove = (f) => f,
    editPage = false,
}) => {
    const children = [];
    for (let i = 9.99; i <= 100.99; i++) {
        children.push(<Option key={i.toFixed(2)}>${i.toFixed(2)}</Option>);
    }

    return (
        <>

            <div className='bg-white shadow-lg rounded-lg p-0 lg:p-0 pb-12 mb-8'>
                <div class="p-5">

                    <div className="container mx-auto px-10 mb-8">
                        {/* <FeaturedPosts /> */}
                        <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
                            <div className='lg:col-span-4 col-span-1'>
                                <h1 className='text-xl md:text-lg text-black bg-white/20 hover:backdrop-brightness-100 transition duration-500 rounded-lg'>Publish your books at Book Base by Xidas Academy here. Make sure to fill out the form correctly and read the agreements and docs.</h1>
                            </div>
                            <div className='lg:col-span-8 col-span-1'>
                                <div className='lg:sticky relative col-8'>
                                    {values && (
                                        <form onSubmit={handleSubmit} className='w-full max-w-lg'>
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="name"
                                                    className="form-control mb-4 p-4 appearance-none block w-full text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                                    placeholder="Name"
                                                    value={values.name}
                                                    onChange={handleChange}
                                                />
                                            </div>

                                            {/* <input
                                                type="text"
                                                className="form-control mb-4 p-4 appearance-none block w-full text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                                placeholder="description"
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                multiline
                                                rows={4}
                                            /> */}

                                            <TextField
                                                id="outlined-multiline-static"
                                                label="Description"
                                                className="mt-3 mb-3"
                                                multiline
                                                rows={4}
                                                fullWidth
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                            />

                                            <Form.Item label="Price">
                                                <Input.Group compact>
                                                    <Form.Item
                                                        name={['address', 'province']}
                                                        noStyle
                                                        rules={[{ required: true, message: 'Price type is required' }]}
                                                    >
                                                        <Select placeholder="Select Paid or Free" value={values.paid}
                                                            onChange={(v) => setValues({ ...values, paid: v, price: 0 })}>
                                                            <Option value={true}>Paid</Option>
                                                            <Option value={false}>Free</Option>
                                                        </Select>
                                                    </Form.Item>
                                                    <Form.Item
                                                        name={['address', 'street']}
                                                        noStyle
                                                        rules={[{ required: true, message: 'Street is required' }]}
                                                    >
                                                        {values.paid && (

                                                            <Select
                                                                defaultValue="$9.99"
                                                                onChange={(v) => setValues({ ...values, price: v })}
                                                                tokenSeparators={[,]}

                                                            >
                                                                {children}
                                                            </Select>
                                                        )}
                                                    </Form.Item>
                                                </Input.Group>
                                            </Form.Item>

                                            <input
                                                type="text"
                                                name="category"
                                                className="form-control mb-4 p-4 appearance-none block w-full text-gray-700 border border-gray-200 rounded leading-tight focus:outline-none focus:bg-white" id="grid-first-name"
                                                placeholder="Category"
                                                value={values.category}
                                                onChange={handleChange}
                                            />

                                            <div className="form-row">
                                                <div className="col">
                                                    <div className="form-group">
                                                        <label className="transition duration-500 lg:px-10 mt-3 mb-3 ease transform hover:-translate-y-1 inline-block bg-black text-lg font-medium rounded-lg text-white px-6 py-2 cursor-pointer">
                                                            {uploadButtonText}
                                                            <input
                                                                type="file"
                                                                name="image"
                                                                onChange={handleImage}
                                                                accept="image/*"
                                                                hidden
                                                            />
                                                        </label>
                                                    </div>
                                                </div>

                                                {preview && (
                                                    <>
                                                        <Badge count="X" onClick={handleImageRemove} className="pointer">
                                                            <img alt='' className='p-1 w-64 h-80 block cursor-pointer rounded-xl' src={preview} />
                                                        </Badge>
                                                    </>
                                                )}

                                                {editPage && values.image && (
                                                    <img alt='' className='p-1 w-64 h-80 block cursor-pointer rounded-xl' src={values.image.Location} />
                                                    // <Avatar width={200} src={values.image.Location} />
                                                )}
                                            </div>

                                            <div className="row">
                                                <div className="col">
                                                    <button
                                                        onClick={handleSubmit}
                                                        disabled={values.loading || values.uploading}
                                                        className="transition duration-500 lg:px-10 mt-3 mb-3 ease transform hover:-translate-y-1 inline-block bg-black text-lg font-medium rounded-lg text-white px-6 py-2 cursor-pointer"
                                                        loading={values.loading}
                                                    >
                                                        {values.loading ? "Saving..." : "Save & Continue"}
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>


        </>
    );
};


export default CreateCourse;
