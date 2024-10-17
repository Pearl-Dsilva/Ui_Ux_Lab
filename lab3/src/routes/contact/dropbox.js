import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const FileUpload = () => {
    const onDrop = useCallback((acceptedFiles) => {
        // Handle file upload
        console.log(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <>
            <h1>Upload Requirements</h1>
            <div
                {...getRootProps()}
                style={{
                    border: "1px solid rgba(241, 218, 10, 0.7)",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                    flex: 1,
                    borderRadius: "10px",
                    background: "rgba(199, 185, 185, 0.14)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <input {...getInputProps()} />
                {isDragActive ? (
                    <p>Drop the files here...</p>
                ) : (
                    <p>Drag 'n' drop some files here, or click to select files</p>
                )}
            </div >
        </>
    );
};

export default FileUpload;
