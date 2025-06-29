import { CloudArrowUp } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import showToast from "../../../../../utils/toast";
import System from "../../../../../models/system";
import { useDropzone } from "react-dropzone";
import { v4 } from "uuid";
import FileUploadProgress from "./FileUploadProgress";
import Workspace from "../../../../../models/workspace";
import debounce from "lodash.debounce";

export default function UploadFile({
  workspace,
  fetchKeys,
  setLoading,
  setLoadingMessage,
  folders,
}) {
  const [ready, setReady] = useState(false);
  const [files, setFiles] = useState([]);
  const [fetchingUrl, setFetchingUrl] = useState(false);

  const [selectedFolder, setSelectedFolder] = useState("");

  // Handle folder selection change
  const handleFolderChange = (e) => {
    setSelectedFolder(e.target.value);
  }; 

  const [uploadSummary, setUploadSummary] = useState({
    total: 0,
    success: 0,
    failed: 0,
  });
  

  const allowedExtensions = [
    ".txt",
    ".csv",
    ".pdf",
    ".doc",
    ".docx",
    ".ppt",
    ".pptx",
  ];
  

  const handleSendLink = async (e) => {
    e.preventDefault();
    setLoading(true);
    setLoadingMessage("Scraping link...");
    setFetchingUrl(true);
    const formEl = e.target;
    const form = new FormData(formEl);
    const { response, data } = await Workspace.uploadLink(
      workspace.slug,
      form.get("link")
    );
    if (!response.ok) {
      showToast(`Error uploading link: ${data.error}`, "error");
    } else {
      fetchKeys(true);
      showToast("Link uploaded successfully", "success");
      formEl.reset();
    }
    setLoading(false);
    setFetchingUrl(false);
  };

  // Queue all fetchKeys calls through the same debouncer to prevent spamming the server.
  // either a success or error will trigger a fetchKeys call so the UI is not stuck loading.
  const debouncedFetchKeys = debounce(() => fetchKeys(true), 1000);
  const handleUploadSuccess = () => {
    setUploadSummary((prev) => ({
      ...prev,
      success: prev.success + 1,
    }));
    debouncedFetchKeys();
  };
  
  const handleUploadError = () => {
    setUploadSummary((prev) => ({
      ...prev,
      failed: prev.failed + 1,
    }));
    debouncedFetchKeys();
  };

  const onDrop = async (acceptedFiles, rejections) => {
    setUploadSummary({ total: (acceptedFiles.length + rejections.length), success: 0, failed: 0 });
    const validFiles = [];
    const invalidFiles = [];

    acceptedFiles.forEach((file) => {
      const ext = file.name.toLowerCase().slice(file.name.lastIndexOf("."));
      if (allowedExtensions.includes(ext)) {
        validFiles.push({
          uid: v4(),
          file,
          name: file.name,
          selectedFolder,
        });
      } else {
        invalidFiles.push({
          uid: v4(),
          file,
          rejected: true,
          reason: "Unsupported file type",
        });
      }
    });
    // Check if a folder has been selected before processing dropped files
    // const newAccepted = acceptedFiles.map((file) => {
    //   return {
    //     uid: v4(),
    //     file,
    //     name: file.name,
    //     selectedFolder: selectedFolder
    //   };
    // });
    const newRejected = rejections.map((file) => {
      return {
        uid: v4(),
        file: file.file,
        rejected: true,
        reason: file.errors[0].code,
      };
    });

    // Set summary counts here
    setUploadSummary({
      total: validFiles.length + invalidFiles.length + newRejected.length,
      success: 0,
      failed: invalidFiles.length + newRejected.length,
    });
    setFiles([...validFiles, ...invalidFiles, ...newRejected]);
  };

  useEffect(() => {
    async function checkProcessorOnline() {
      const online = await System.checkDocumentProcessorOnline();
      setReady(online);
    }
    checkProcessorOnline();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    disabled: !ready,
  });

  return (
    <div>
      {/* Folder selection dropdown */}
      <div className="mb-3">
        <label htmlFor="folderSelector" className="text-white text-sm font-semibold">
          Upload To:
        </label>
        <select
          id="folderSelector"
          value={selectedFolder}
          onChange={handleFolderChange}
          className="ml-2 p-1 rounded border border-gray-300"
        >
          <option value="" disabled>
            Select a folder
          </option>
          {folders &&
            folders.map((folder) => (
              <option key={folder.id} value={folder.name}>
                {folder.name}
              </option>
            ))}
        </select>
      </div>
      <div
        className={`w-[560px] border-dashed border-[2px] border-theme-modal-border light:border-[#686C6F] rounded-2xl bg-theme-bg-primary transition-colors duration-300 p-3 ${
          ready
            ? " light:bg-[#E0F2FE] cursor-pointer hover:bg-theme-bg-secondary light:hover:bg-transparent"
            : "cursor-not-allowed"
        }`}
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {ready === false ? (
          <div className="flex flex-col items-center justify-center h-full">
            <CloudArrowUp className="w-8 h-8 text-white/80 light:invert" />
            <div className="text-white text-opacity-80 text-sm font-semibold py-1">
              Document Processor Unavailable
            </div>
            <div className="text-white text-opacity-60 text-xs font-medium py-1 px-20 text-center">
              We can't upload your files right now because the document
              processor is offline. Please try again later.
            </div>
          </div>
        ) : files.length === 0 ? (
          <div className="flex flex-col items-center justify-center">
            <CloudArrowUp className="w-8 h-8 text-white/80 light:invert" />
            <div className="text-white text-opacity-80 text-sm font-semibold py-1">
              Click to upload or drag and drop
            </div>
            <div className="text-white text-opacity-60 text-xs font-medium py-1">
            Supports text files, PDFs, CSVs, Word, and PowerPoint documents.
            </div>
          </div>
        ) : (
          <>
            <div>
            {(uploadSummary.success > 0 || uploadSummary.failed > 0) && (
              <div className="text-sm text-white mt-2">
                📂 Total files selected: {uploadSummary.total} <br />
                ✅ {uploadSummary.success} file(s) uploaded successfully <br />
                ❌ {uploadSummary.failed} file(s) failed to upload
              </div>
            )}
            </div>
            <div className="grid grid-cols-2 gap-2 overflow-auto max-h-[180px] p-1 overflow-y-scroll no-scroll">
            {files.map((file) => (
              <FileUploadProgress
                key={file.uid}
                file={file.file}
                uuid={file.uid}
                setFiles={setFiles}
                slug={workspace.slug}
                rejected={file?.rejected}
                reason={file?.reason}
                onUploadSuccess={handleUploadSuccess}
                onUploadError={handleUploadError}
                setLoading={setLoading}
                setLoadingMessage={setLoadingMessage}
                selectedFolder={selectedFolder}
              />
            ))}
          </div>
          </>
          
        )}
      </div>
      {/* <div className="text-center text-white text-opacity-50 text-xs font-medium w-[560px] py-2">
        or submit a link
      </div>
      <form onSubmit={handleSendLink} className="flex gap-x-2">
        <input
          disabled={fetchingUrl}
          name="link"
          type="url"
          className="border-none disabled:bg-theme-settings-input-bg disabled:text-theme-settings-input-placeholder bg-theme-settings-input-bg text-white placeholder:text-theme-settings-input-placeholder text-sm rounded-lg focus:outline-primary-button active:outline-primary-button outline-none block w-3/4 p-2.5"
          placeholder={"https://example.com"}
          autoComplete="off"
        />
        <button
          disabled={fetchingUrl}
          type="submit"
          className="disabled:bg-white/20 disabled:text-slate-300 disabled:border-slate-400 disabled:cursor-wait bg bg-transparent hover:bg-slate-200 hover:text-slate-800 w-auto border border-white light:border-theme-modal-border text-sm text-white p-2.5 rounded-lg"
        >
          {fetchingUrl ? "Fetching..." : "Fetch website"}
        </button>
      </form> */}
      <div className="mt-6 text-center text-white text-opacity-80 text-xs font-medium w-[560px]">
        These files will be uploaded to the document processor running on this
        Athena instance. These files are not sent or shared with a third party.
      </div>
    </div>
  );
}
