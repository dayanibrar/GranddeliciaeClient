import { Button, Progress, Tooltip } from "antd";
import { CloseCircleFilled, CloseCircleOutlined } from "@ant-design/icons";

const AddLessonForm = ({
  values,
  setValues,
  handleAddLesson,
  uploading,
  uploadButtonText,
  handleVideo,
  progress,
  handleVideoRemove,
}) => {
  return (
    <div className="container pt-3">
      <form onSubmit={handleAddLesson}>
        <div className="sm:col-span-2">
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-warm-gray-900"
          >
            Caption
          </label>
          <div className="mt-1">
            <input
              id="Content Caption"
              name="Content Caption"
              type="text"
              placeholder="Enter the Caption for the content"
              onChange={(e) => setValues({ ...values, title: e.target.value })}
              value={values.title}
              autoComplete="Caption"
              required
              className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-md focus:border-yellow-500 focus:ring-yellow-500"
            />
          </div>
        </div>

        <div className="sm:col-span-2 mt-2">
                      <div className="flex justify-between">
                        <label htmlFor="message" className="block text-sm font-medium text-warm-gray-900">
                          Description
                        </label>
                        <span id="message-max" className="text-sm text-warm-gray-500">
                          Max. 300 characters
                        </span>
                      </div>
                      <div className="mt-2 mb-2">
                        <textarea
                          id="message"
                          placeholder="Enter your description here if needed"
                          name="message"
                          rows={4}
                          onChange={(e) => setValues({ ...values, content: e.target.value })}
                          value={values.content}
                          className="block w-full rounded-md border-warm-gray-300 py-3 px-4 text-warm-gray-900 shadow-md focus:border-yellow-500 focus:ring-yellow-500"
                          aria-describedby="message-max"
                        />
                      </div>
                    </div>

        {/* <input
          type="text"
          className="form-control square"
          onChange={(e) => setValues({ ...values, title: e.target.value })}
          value={values.title}
          placeholder="Title"
          autoFocus
          required
        />

        <textarea
          className="form-control mt-3"
          cols="7"
          rows="7"
          onChange={(e) => setValues({ ...values, content: e.target.value })}
          value={values.content}
          placeholder="Content"
        ></textarea> */}

<div className="">
              {/* <label htmlFor="cover-photo" className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2">
                Cover photo
              </label> */}
              <div className="mt-1 sm:col-span-2 sm:mt-0">
                <div className="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
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
                        
                        className="relative cursor-pointer rounded-md bg-white font-medium text-yellow-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-yellow-500 focus-within:ring-offset-2 hover:text-yellow-500"
                      >
                        <span>{uploadButtonText}</span>
                        <input onChange={handleVideo} type="file" accept="video/*" hidden />
                      </label>
                     
                      <p className="pl-1">or drag and drop</p>
                    </div>
                    <p className="text-xs text-gray-500">Only Mp4 format is supported</p>
                  </div>
                </div>
              </div>
            </div>

        <div className="d-flex justify-content-center">
          {/* <label className="btn btn-dark btn-block text-left mt-3">
            {uploadButtonText}
            <input onChange={handleVideo} type="file" accept="video/*" hidden />
          </label> */}

          {!uploading && values.video.Location && (
            <Tooltip title="Remove">
              <span onClick={handleVideoRemove} className="pt-1 pl-3">
                <CloseCircleFilled className="text-danger d-flex justify-content-center pt-4 pointer" />
                
              </span>
              <p>Remove Video</p>
            </Tooltip>
          )}
        </div>

        {progress > 0 && (
          <Progress
            className="d-flex justify-content-center pt-2"
            percent={progress}
            steps={10}
          />
        )}

        <Button
          onClick={handleAddLesson}
          className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-yellow-600 hover:border-yellow-600 hover:text-white py-3 px-8 text-base font-medium text-white hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full"
          size="large"
          loading={uploading}
        >
          Save
        </Button>
      </form>
    </div>
  );
};

export default AddLessonForm;
