import { Select, Button, Avatar, Badge } from "antd";
import axios from "axios";
import { toast } from "react-toastify";
import { SyncOutlined } from "@ant-design/icons";
import Link from "next/link";
import { Context } from "../../context";
import { useState, useEffect, useContext, Fragment } from "react";
import { useRouter } from "next/router";
import {
  EmojiHappyIcon,
  EmojiSadIcon,
  FireIcon,
  HeartIcon,
  PaperClipIcon,
  ThumbUpIcon,
  XIcon,
} from "@heroicons/react/solid";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";
import { Combobox } from "@headlessui/react";
import { Form, Input } from "antd";

const { Option } = Select;

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const CourseCreateForm = ({
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

  const { state, dispatch } = useContext(Context);
  const { user } = state;



  return (
    <>
    <div className="">
        <div className="container">
          <div className="p-10 m-5">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <div className="px-4 sm:px-0">
                  <h3 className="text-lg font-medium leading-6 text-gray-900">
                    Update your services
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">
                   Welcome start updating the content you make your product.
                   Make sure that everything you write and submit goes according to our policy.
                  </p>
                  <br />
                  <p className="mt-1 text-sm text-gray-600">
                  Make sure to check our Publishing policy and if there is any problem contact us and help will reach
                  out as soon as possible.
                  </p>
                </div>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                {values && (
                  <form onSubmit={handleSubmit}>
                    <div className="shadow sm:rounded-md sm:overflow-hidden">
                      <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                        <div className="grid grid-cols-3 gap-6">
                          <div className="col-span-3 sm:col-span-2">
                            <label
                              htmlFor="name"
                              className="block text-sm font-medium text-gray-700 mt-5 mb-3"
                            >
                              Name
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                                value={values.name}
                                onChange={handleChange}
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Product Name"
                                className="block w-full px-3 py-2 rounded-lg shadow-sm placeholder-gray-400 sm:text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-50"
                              />
                            </div>

                            <label
                              htmlFor="category"
                              className="block text-sm font-medium text-gray-700 mt-5 mb-3"
                            >
                              Category
                            </label>
                            <div className="mt-1 flex rounded-md shadow-sm">
                              <input
                              value={values.category}
                              onChange={handleChange}
                                type="text"
                                name="category"
                                id="category"
                                placeholder="Product category"
                                className="block w-full px-3 py-2 rounded-lg shadow-sm placeholder-gray-400 sm:text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-50"
                              />
                            </div>

                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="min-w-0 flex-1">
                            <label
                              htmlFor="about"
                              className="block text-sm font-medium text-gray-700 mt-5 mb-3"
                            >
                              Description
                            </label>
                            <div className="rounded-lg shadow-sm overflow-hidden ">
                              <label htmlFor="about" className="sr-only">
                                Description
                              </label>
                              <textarea
                                rows={3}
                                id="about"
                                className="block w-full rounded-lg p-3 resize-none sm:text-sm border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-50"
                                placeholder="Product Description"
                                defaultValue={""}
                                name="description"
                                value={values.description}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4">
                          <div className="min-w-0 flex-1">
                            <label
                              htmlFor="free"
                              className="block text-sm font-medium text-gray-700 mt-3 mb-3"
                            >
                              Pricing
                            </label>
                            <div className="">
                              <label htmlFor="free" className="sr-only">
                                Pricing
                              </label>
                              <Input.Group compact>
                                <Form.Item
                                  name={["free", "paid"]}
                                  noStyle
                                  className="rounded-lg m-1"
                                  rules={[
                                    {
                                      required: true,
                                      message: "Price type is required",
                                    },
                                  ]}
                                >
                                  <Select
                                    placeholder="Select Paid or Free"
                                    value={values.paid}
                                    onChange={(v) =>
                                      setValues({
                                        ...values,
                                        paid: v,
                                        price: 0,
                                      })
                                    }
                                  >
                                    <Option value={true}>Paid</Option>
                                    <Option value={false}>Free</Option>
                                  </Select>
                                </Form.Item>

                                <Form.Item
                                  name={["address", "street"]}
                                  noStyle
                                  rules={[
                                    {
                                      required: true,
                                      message: "Street is required",
                                    },
                                  ]}
                                >
                                  {values.paid && (
                                    <Select
                                      defaultValue="$9.99"
                                      onChange={(v) =>
                                        setValues({ ...values, price: v })
                                      }
                                      tokenSeparators={[,]}
                                    >
                                      {children}
                                    </Select>
                                  )}
                                </Form.Item>
                              </Input.Group>
                            </div>
                          </div>
                        </div>

                        {/* <div>
                          <label className="block text-sm font-medium text-gray-700">
                            Photo
                          </label>
                          <div className="mt-1 flex items-center">
                            <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                              <svg
                                className="h-full w-full text-gray-300"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                              </svg>
                            </span>
                            <button
                              type="button"
                              className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                              Change
                            </button>
                          </div>
                        </div> */}

                        <div>
                          <label className="block text-sm font-medium text-gray-700 mt-3 mb-3">
                            Main photo
                          </label>
                          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                            <div className="space-y-1 text-center">
                              <svg
                                className="mx-auto h-12 w-12 text-gray-400"
                                stroke="currentColor"
                                fill="none"
                                viewBox="0 0 48 48"
                                aria-hidden="true"
                              >
                                <path
                                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                  strokeWidth={2}
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="file-upload"
                                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                >
                                  <span>{uploadButtonText}</span>
                                  <input
                                    id="file-upload"
                                    type="file"
                                    name="image"
                                    onChange={handleImage}
                                    accept="image/*"
                                    className="sr-only"
                                  />
                                </label>
                                <p className="pl-1">or drag and drop</p>
                              </div>
                              <p className="text-xs text-gray-500">
                                PNG or JPG
                              </p>
                            </div>
                          </div>
                          {preview && (
                            <>
                              <button
                                onClick={handleImageRemove}
                                type="button"
                                className="mt-5 mb-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                              >
                                Remove Image
                              </button>
                              <div className="h-100 rounded-lg overflow-hidden bg-gray-50 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                                <img
                                  src={preview}
                                  alt=""
                                  className="w-full h-full object-center object-cover"
                                />
                              </div>
                            </>
                          )}

                          {editPage && values.image && (
                            <div className="h-100 rounded-lg overflow-hidden bg-gray-50 aspect-w-1 aspect-h-1 group-hover:opacity-75">
                              <img
                                src={values.image.Location}
                                alt=""
                                className="w-full h-full object-center object-cover"
                              />

                              <div>
                                <hr />
                              </div>

                              <img
                                src={values.image.Location}
                                alt=""
                                className="w-full h-full object-center object-cover"
                              />

                            </div>

                            // <img
                            //   alt=""
                            //   className="p-1 w-64 h-80 block cursor-pointer rounded-xl"
                            //   src={values.image.Location}
                            // />
                            // <Avatar width={200} src={values.image.Location} />
                          )}
                        </div>
                      </div>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                        <button
                          onClick={handleSubmit}
                          disabled={values.loading || values.uploading}
                          loading={values.loading}
                          type="submit"
                          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

      {/* {values && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <textarea
              name="description"
              cols="7"
              rows="7"
              value={values.description}
              className="form-control"
              onChange={handleChange}
            ></textarea>
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <Select
                  style={{ width: "100%" }}
                  size="large"
                  value={values.paid}
                  onChange={(v) => setValues({ ...values, paid: v, price: 0 })}
                >
                  <Option value={true}>Paid</Option>
                  <Option value={false}>Free</Option>
                </Select>
              </div>
            </div>

            {values.paid && (
              <div className="form-group">
                <Select
                  defaultValue="$9.99"
                  style={{ widht: "100%" }}
                  onChange={(v) => setValues({ ...values, price: v })}
                  tokenSeparators={[,]}
                  size="large"
                >
                  {children}
                </Select>
              </div>
            )}
          </div>

          <div className="form-group">
            <input
              type="text"
              name="category"
              className="form-control"
              placeholder="Category"
              value={values.category}
              onChange={handleChange}
            />
          </div>

          <div className="form-row">
            <div className="col">
              <div className="form-group">
                <label className="btn btn-outline-secondary btn-block text-left">
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
              <Badge count="X" onClick={handleImageRemove} className="pointer">
                <Avatar width={200} src={preview} />
              </Badge>
            )}

            {editPage && values.image && (
              <Avatar width={200} src={values.image.Location} />
            )}
          </div>

          <div className="row">
            <div className="col">
              <Button
                onClick={handleSubmit}
                disabled={values.loading || values.uploading}
                className="btn btn-primary"
                loading={values.loading}
                type="primary"
                size="large"
                shape="round"
              >
                {values.loading ? "Saving..." : "Save & Continue"}
              </Button>
            </div>
          </div>
        </form>
      )} */}
    </>
  );
};

export default CourseCreateForm;
